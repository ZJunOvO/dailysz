Object.defineProperty(exports, "__esModule", { value: !0 });

var _evts = require("evts");
var _time = require("time");
var _uData = require("uData");
var _pInfo = require("pInfo");
var _tipMgr = require("tipMgr");
var _panelMgr = require("panelMgr");

var RewardMgr = (function() {
    function RewardMgr() {
        this.isInit = false;
    }

    var prototype = RewardMgr.prototype;
    var instance = null;

    // 获取单例
    RewardMgr.getInstance = function() {
        if (!instance) {
            instance = new RewardMgr();
        }
        return instance;
    };

    // 初始化现金数据
    prototype.init = function() {
        if (this.isInit) return;
        
        // 确保现金相关数据存在
        var localData = {};
        var needUpdate = false;
        
        if (_uData.default.ins.getLocalDataByKey('cashBalance') === null) {
            localData.cashBalance = 0;
            needUpdate = true;
        }
        if (_uData.default.ins.getLocalDataByKey('winStreak') === null) {
            localData.winStreak = 0;
            needUpdate = true;
        }
        if (_uData.default.ins.getLocalDataByKey('totalCashEarned') === null) {
            localData.totalCashEarned = 0;
            needUpdate = true;
        }
        if (_uData.default.ins.getLocalDataByKey('lastRewardTime') === null) {
            localData.lastRewardTime = 0;
            needUpdate = true;
        }
        
        if (needUpdate) {
            _uData.default.ins.setLocalData(localData);
        }

        this.isInit = true;
        console.log("💝 卷宝专属现金奖励系统初始化完成");
    };

    // 获取现金余额(以分为单位存储，显示时转换为元)
    prototype.getCash = function() {
        this.init();
        return _uData.default.ins.getLocalDataByKey('cashBalance') || 0;
    };

    // 获取现金余额显示文本
    prototype.getCashDisplay = function() {
        var cashInCents = this.getCash();
        var cashInYuan = (cashInCents / 100).toFixed(2);
        return cashInYuan;
    };

    // 添加现金(金额以分为单位)
    prototype.addCash = function(amountInCents) {
        this.init();
        var currentCash = this.getCash();
        var newCash = currentCash + amountInCents;
        
        // 更新总获得现金
        var totalEarned = _uData.default.ins.getLocalDataByKey('totalCashEarned') || 0;
        
        _uData.default.ins.setLocalData({
            cashBalance: newCash,
            totalCashEarned: totalEarned + amountInCents
        });
        
        // 触发现金更新事件
        _evts.default.opE.emit({ action: 'CASH_CHG' });
        
        console.log("💰 卷宝获得现金奖励: ¥" + (amountInCents / 100).toFixed(2));
        return newCash;
    };

    // 游戏完成时的奖励判断
    prototype.onPuzzleComplete = function(difficulty, isSuccess, isManualTest) {
        if (!isSuccess) {
            // 失败时重置连胜
            this.resetWinStreak();
            return false;
        }

        // 防止短时间内重复奖励（5秒内）
        var lastRewardTime = _uData.default.ins.getLocalDataByKey('lastRewardTime') || 0;
        var currentTime = Date.now();
        if (currentTime - lastRewardTime < 5000) {
            console.log("⏰ 距离上次奖励不足5秒，跳过本次奖励");
            return false;
        }

        // 90%概率触发现金奖励（测试阶段）
        if (Math.random() > 0.1) {
            console.log("🎯 现金奖励概率触发成功");
        } else {
            console.log("🎯 现金奖励概率未触发");
            return false;
        }

        // 计算奖励金额
        var rewardAmount = this.calculateReward(difficulty);
        
        if (rewardAmount > 0) {
            this.incrementWinStreak();
            this.updateLastRewardTime();
            
            // 💝 统一逻辑：立即添加现金并更新UI（和手动测试一样）
            this.addCash(rewardAmount);
            this.showRewardTip(rewardAmount);
            console.log("💰 现金奖励已立即添加并更新UI: ¥" + (rewardAmount / 100).toFixed(2));
            
            if (!isManualTest) {
                // 正常游戏：还要弹窗让用户确认领取（可选的额外奖励界面）
                this.saveLastRewardInfo(rewardAmount);
                this.showCashRewardUI();
                console.log("💰 现金奖励确认界面已显示");
            }
            
            return true;
        }
        
        return false;
    };

    // 💝 重新设计的奖励金额计算(返回分为单位，控制总成本200-1000元)
    prototype.calculateReward = function(difficulty) {
        // 根据真实难度设定基础奖励范围（分为单位）
        var rewardRanges = {
            'basic': {min: 2, max: 8},      // ¥0.02-0.08 平均¥0.05
            'simple': {min: 5, max: 15},    // ¥0.05-0.15 平均¥0.10  
            'normal': {min: 8, max: 25},    // ¥0.08-0.25 平均¥0.15
            'hard': {min: 12, max: 35},     // ¥0.12-0.35 平均¥0.20
            'expert': {min: 20, max: 50},   // ¥0.20-0.50 平均¥0.30
            'master': {min: 30, max: 80}    // ¥0.30-0.80 平均¥0.50
        };
        
        // 兼容旧难度名称
        var difficultyMap = {
            'beginner': 'basic',
            'easy': 'simple', 
            'medium': 'normal'
        };
        
        var mappedDifficulty = difficultyMap[difficulty] || difficulty;
        var range = rewardRanges[mappedDifficulty] || rewardRanges['basic'];
        
        // 计算基础奖励
        var baseReward = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        
        // 连胜加成（降低倍数，避免过高）
        var streakMultiplier = this.getStreakMultiplier();
        
        // 特殊日期检查（降低倍数）
        var specialDayMultiplier = this.getSpecialDayMultiplier();
        
        // 应用乘数（控制最终金额）
        var finalReward = Math.floor(baseReward * streakMultiplier * specialDayMultiplier);
        
        // 设置上限，避免异常高额奖励
        var maxReward = 200; // 最高¥2.00
        return Math.min(finalReward, maxReward);
    };


    // 💝 调整后的连胜乘数（降低倍数控制成本）
    prototype.getStreakMultiplier = function() {
        var winStreak = _uData.default.ins.getLocalDataByKey('winStreak') || 0;
        
        if (winStreak >= 10) return 1.5;      // 连胜10关: +50%
        if (winStreak >= 7) return 1.3;       // 连胜7关: +30%
        if (winStreak >= 5) return 1.2;       // 连胜5关: +20%
        if (winStreak >= 3) return 1.1;       // 连胜3关: +10%
        
        return 1.0;
    };

    // 💝 调整后的特殊日期乘数（降低倍数控制成本）
    prototype.getSpecialDayMultiplier = function() {
        var today = new Date();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        
        // 生日和纪念日特殊奖励（降低倍数）
        if ((month === 4 && day === 22) ||   // 生日1: 04-22
            (month === 12 && day === 28) ||  // 生日2: 12-28  
            (month === 9 && day === 16)) {   // 纪念日: 09-16
            return 1.5; // 改为1.5倍而不是2倍
        }
        
        return 1.0;
    };

    // 增加连胜次数
    prototype.incrementWinStreak = function() {
        var currentStreak = _uData.default.ins.getLocalDataByKey('winStreak') || 0;
        _uData.default.ins.setLocalData({ winStreak: currentStreak + 1 });
    };

    // 重置连胜次数
    prototype.resetWinStreak = function() {
        _uData.default.ins.setLocalData({ winStreak: 0 });
    };

    // 更新最后奖励时间
    prototype.updateLastRewardTime = function() {
        _uData.default.ins.setLocalData({ lastRewardTime: Date.now() });
    };

    // 显示奖励提示
    prototype.showRewardTip = function(amountInCents) {
        var amountInYuan = (amountInCents / 100).toFixed(2);
        var winStreak = _uData.default.ins.getLocalDataByKey('winStreak') || 0;
        
        // 💝 中文情绪价值满满的奖励提示
        var messages = [
            "卷卷获得了￥" + amountInYuan + "现金奖励！好棒！",
            "恭喜卷卷！￥" + amountInYuan + "奖励到账！", 
            "卷卷真厉害！赚到￥" + amountInYuan + "！",
            "哇！卷卷又获得￥" + amountInYuan + "奖励！",
            "卷卷好聪明！￥" + amountInYuan + "现金奖励！"
        ];
        
        // 特殊日期文案
        var today = new Date();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        
        if ((month === 4 && day === 22) || (month === 12 && day === 28)) {
            messages = ["🎂 生日快乐卷卷！特别奖励￥" + amountInYuan + "！"];
        } else if (month === 9 && day === 16) {
            messages = ["💕 纪念日快乐！卷卷获得特殊奖励￥" + amountInYuan + "！"];
        }
        
        // 连胜特殊文案
        if (winStreak >= 10) {
            messages = ["🔥 卷卷连胜" + winStreak + "关！超级奖励￥" + amountInYuan + "！"];
        } else if (winStreak >= 5) {
            messages = ["⭐ 卷卷连胜" + winStreak + "关！连击奖励￥" + amountInYuan + "！"];
        }
        
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        console.log("🎉 " + randomMessage);
        
        try {
            // 💝 改用alert显示中文奖励提示
            if (typeof window !== 'undefined' && window.alert) {
                window.alert(randomMessage);
                console.log("💰 现金奖励提示(alert)已显示:", randomMessage);
            } else {
                // 备用方案
                _tipMgr.default.ins.showTip("卷卷获得￥" + amountInYuan + "奖励！", false);
                console.log("💰 现金奖励提示(tip备用)已显示");
            }
        } catch (error) {
            console.log("❌ 显示现金奖励提示失败:", error);
            console.log("💰 现金奖励:", randomMessage);
        }
    };


    // 💝 显示菌子情绪价值支持提示（满满的爱意）
    prototype.showLoveSupportMessage = function() {
        var supportMessages = [
            "💕 卷卷真的好棒！菌子好爱你！",
            "🌟 卷卷好聪明！是菌子心中最亮的星星！", 
            "🔥 卷卷太厉害了！菌子为你骄傲！",
            "💖 卷卷加油！菌子永远支持你！",
            "👑 卷卷做得很好！你就是菌子的女王！",
            "💝 爱你爱你卷卷！最喜欢卷卷了！",
            "🎉 卷卷超级棒！菌子给你比心心！",
            "✨ 卷卷是天才！菌子被你迷住了！",
            "🏆 卷卷太优秀了！菌子要给你颁奖！",
            "🌈 卷卷让菌子的世界变得colorful！",
            "🍀 遇到卷卷是菌子最大的幸运！",
            "🌸 卷卷美美的！菌子的小公主！"
        ];
        
        var randomMessage = supportMessages[Math.floor(Math.random() * supportMessages.length)];
        
        try {
            // 💝 用alert显示满满爱意的鼓励消息
            if (typeof window !== 'undefined' && window.alert) {
                window.alert(randomMessage);
                console.log("💕 菌子情绪价值支持消息(alert)已显示:", randomMessage);
            } else {
                // 备用方案：继续使用原tip系统
                _tipMgr.default.ins.showTip("卷卷真棒！菌子爱你！", false);
                console.log("💕 菌子支持消息(tip备用)已显示");
            }
        } catch (error) {
            console.log("❌ 显示菌子支持消息失败:", error);
            console.log("💕 菌子消息:", randomMessage);
        }
    };

    // 💝 保存最近奖励信息供结算界面使用
    prototype.saveLastRewardInfo = function(amountInCents) {
        var amountInYuan = (amountInCents / 100).toFixed(2);
        var rewardInfo = {
            amount: amountInYuan,
            timestamp: Date.now(),
            isNew: true
        };
        // 使用正确的setLocalData方法
        var dataToSave = {};
        dataToSave['lastRewardInfo'] = rewardInfo;
        // 💝 设置标记，表示本次游戏完成有现金奖励处理
        dataToSave['hasPendingCashReward'] = true;
        _uData.default.ins.setLocalData(dataToSave);
    };

    // 💝 获取最近奖励信息
    prototype.getLastRewardInfo = function() {
        var rewardInfo = _uData.default.ins.getLocalDataByKey('lastRewardInfo');
        console.log("🔍 getLastRewardInfo原始数据:", rewardInfo);
        
        if (rewardInfo && rewardInfo.isNew) {
            console.log("✅ 发现新奖励信息，返回但不立即标记已读");
            // 💝 重要修复：不在这里标记为已读，而是在用户真正领取后才清除
            return rewardInfo;
        } else if (rewardInfo) {
            console.log("⚠️ 奖励信息存在但isNew=false，已被消费，返回null");
        } else {
            console.log("ℹ️ 无奖励信息");
        }
        return null;
    };

    // 💝 检查是否有待处理的现金奖励
    prototype.hasPendingCashReward = function() {
        return _uData.default.ins.getLocalDataByKey('hasPendingCashReward') || false;
    };

    // 💝 清除现金奖励标记和奖励信息
    prototype.clearCashRewardFlag = function() {
        var dataToSave = {};
        dataToSave['hasPendingCashReward'] = false;
        dataToSave['lastRewardInfo'] = null; // 💝 同时清除奖励信息，确保不能重复领取
        _uData.default.ins.setLocalData(dataToSave);
        console.log("🚫 现金奖励标记和奖励信息已清除");
    };

    // 💝 主动弹出现金奖励结算界面
    prototype.showCashRewardUI = function() {
        try {
            var _panelMgr = require("panelMgr");
            console.log("🎉 主动打开现金奖励结算界面");
            
            // 打开ui_getReward弹窗，传入假的gold参数（会被现金奖励覆盖）
            _panelMgr.default.ins.open(
                "ui/ui_getReward",
                {gold: 100}, // 假参数，会被setupCashReward覆盖
                {MaskNoHide: true}
            );
        } catch (error) {
            console.log("❌ 打开现金奖励界面失败:", error);
        }
    };

    return RewardMgr;
})();

// 导出单例
var rewardMgr = {
    default: RewardMgr.getInstance()
};

// 💝 全局测试方法
if (typeof window !== 'undefined') {
    window.testCashReward = function() {
        try {
            console.log("🧪 全局现金奖励测试开始...");
            console.log("当前现金余额:", rewardMgr.default.getCashDisplay());
            
            var hasReward = rewardMgr.default.onPuzzleComplete('easy', true, true);
            
            if (hasReward) {
                console.log("✅ 获得现金奖励！");
                console.log("新的现金余额:", rewardMgr.default.getCashDisplay());
            } else {
                console.log("⭕ 本次没有触发现金奖励（随机概率60%）");
                console.log("可以再次调用 testCashReward() 测试");
            }
        } catch (error) {
            console.log("❌ 测试失败:", error);
        }
    };
    
    window.getCashBalance = function() {
        console.log("💰 当前现金余额: ¥" + rewardMgr.default.getCashDisplay());
        return rewardMgr.default.getCashDisplay();
    };
    
    // 💝 全功能测试方法
    window.testAllFeatures = function() {
        console.log("🎮 开始全功能测试...");
        
        // 1. 测试现金奖励
        console.log("1️⃣ 测试现金奖励系统");
        rewardMgr.default.onPuzzleComplete('expert', true);
        
        // 2. 测试菌子支持消息
        console.log("2️⃣ 测试菌子支持消息");
        setTimeout(function() {
            rewardMgr.default.showLoveSupportMessage();
        }, 1000);
        
        // 3. 显示当前状态
        setTimeout(function() {
            console.log("3️⃣ 当前现金余额: ¥" + rewardMgr.default.getCashDisplay());
            console.log("✅ 全功能测试完成！");
        }, 2000);
    };
}

exports.default = rewardMgr.default;