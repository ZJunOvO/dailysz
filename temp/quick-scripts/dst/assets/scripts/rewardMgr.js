
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rewardMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1e93YdJkFPM5jRWLNa78mm', 'rewardMgr');
// scripts/rewardMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _time = require("time");

var _uData = require("uData");

var _pInfo = require("pInfo");

var _tipMgr = require("tipMgr");

var _panelMgr = require("panelMgr");

var RewardMgr = function () {
  function RewardMgr() {
    this.isInit = false;
  }

  var prototype = RewardMgr.prototype;
  var instance = null; // 获取单例

  RewardMgr.getInstance = function () {
    if (!instance) {
      instance = new RewardMgr();
    }

    return instance;
  }; // 初始化现金数据


  prototype.init = function () {
    if (this.isInit) return; // 确保现金相关数据存在

    var localData = {};
    var needUpdate = false;

    if (_uData["default"].ins.getLocalDataByKey('cashBalance') === null) {
      localData.cashBalance = 0;
      needUpdate = true;
    }

    if (_uData["default"].ins.getLocalDataByKey('winStreak') === null) {
      localData.winStreak = 0;
      needUpdate = true;
    }

    if (_uData["default"].ins.getLocalDataByKey('totalCashEarned') === null) {
      localData.totalCashEarned = 0;
      needUpdate = true;
    }

    if (_uData["default"].ins.getLocalDataByKey('lastRewardTime') === null) {
      localData.lastRewardTime = 0;
      needUpdate = true;
    }

    if (needUpdate) {
      _uData["default"].ins.setLocalData(localData);
    }

    this.isInit = true;
    console.log("💝 卷宝专属现金奖励系统初始化完成");
  }; // 获取现金余额(以分为单位存储，显示时转换为元)


  prototype.getCash = function () {
    this.init();
    return _uData["default"].ins.getLocalDataByKey('cashBalance') || 0;
  }; // 获取现金余额显示文本


  prototype.getCashDisplay = function () {
    var cashInCents = this.getCash();
    var cashInYuan = (cashInCents / 100).toFixed(2);
    return cashInYuan;
  }; // 添加现金(金额以分为单位)


  prototype.addCash = function (amountInCents) {
    this.init();
    var currentCash = this.getCash();
    var newCash = currentCash + amountInCents; // 更新总获得现金

    var totalEarned = _uData["default"].ins.getLocalDataByKey('totalCashEarned') || 0;

    _uData["default"].ins.setLocalData({
      cashBalance: newCash,
      totalCashEarned: totalEarned + amountInCents
    }); // 触发现金更新事件


    _evts["default"].opE.emit({
      action: 'CASH_CHG'
    });

    console.log("💰 卷宝获得现金奖励: ¥" + (amountInCents / 100).toFixed(2));
    return newCash;
  }; // 游戏完成时的奖励判断


  prototype.onPuzzleComplete = function (difficulty, isSuccess, isManualTest) {
    if (!isSuccess) {
      // 失败时重置连胜
      this.resetWinStreak();
      return false;
    } // 防止短时间内重复奖励（5秒内）


    var lastRewardTime = _uData["default"].ins.getLocalDataByKey('lastRewardTime') || 0;
    var currentTime = Date.now();

    if (currentTime - lastRewardTime < 5000) {
      console.log("⏰ 距离上次奖励不足5秒，跳过本次奖励");
      return false;
    } // 90%概率触发现金奖励（测试阶段）


    if (Math.random() > 0.1) {
      console.log("🎯 现金奖励概率触发成功");
    } else {
      console.log("🎯 现金奖励概率未触发");
      return false;
    } // 计算奖励金额


    var rewardAmount = this.calculateReward(difficulty);

    if (rewardAmount > 0) {
      this.incrementWinStreak();
      this.updateLastRewardTime(); // 💝 统一逻辑：立即添加现金并更新UI（和手动测试一样）

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
  }; // 💝 重新设计的奖励金额计算(返回分为单位，控制总成本200-1000元)


  prototype.calculateReward = function (difficulty) {
    // 根据真实难度设定基础奖励范围（分为单位）
    var rewardRanges = {
      'basic': {
        min: 2,
        max: 8
      },
      // ¥0.02-0.08 平均¥0.05
      'simple': {
        min: 5,
        max: 15
      },
      // ¥0.05-0.15 平均¥0.10  
      'normal': {
        min: 8,
        max: 25
      },
      // ¥0.08-0.25 平均¥0.15
      'hard': {
        min: 12,
        max: 35
      },
      // ¥0.12-0.35 平均¥0.20
      'expert': {
        min: 20,
        max: 50
      },
      // ¥0.20-0.50 平均¥0.30
      'master': {
        min: 30,
        max: 80
      } // ¥0.30-0.80 平均¥0.50

    }; // 兼容旧难度名称

    var difficultyMap = {
      'beginner': 'basic',
      'easy': 'simple',
      'medium': 'normal'
    };
    var mappedDifficulty = difficultyMap[difficulty] || difficulty;
    var range = rewardRanges[mappedDifficulty] || rewardRanges['basic']; // 计算基础奖励

    var baseReward = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min; // 连胜加成（降低倍数，避免过高）

    var streakMultiplier = this.getStreakMultiplier(); // 特殊日期检查（降低倍数）

    var specialDayMultiplier = this.getSpecialDayMultiplier(); // 应用乘数（控制最终金额）

    var finalReward = Math.floor(baseReward * streakMultiplier * specialDayMultiplier); // 设置上限，避免异常高额奖励

    var maxReward = 200; // 最高¥2.00

    return Math.min(finalReward, maxReward);
  }; // 💝 调整后的连胜乘数（降低倍数控制成本）


  prototype.getStreakMultiplier = function () {
    var winStreak = _uData["default"].ins.getLocalDataByKey('winStreak') || 0;
    if (winStreak >= 10) return 1.5; // 连胜10关: +50%

    if (winStreak >= 7) return 1.3; // 连胜7关: +30%

    if (winStreak >= 5) return 1.2; // 连胜5关: +20%

    if (winStreak >= 3) return 1.1; // 连胜3关: +10%

    return 1.0;
  }; // 💝 调整后的特殊日期乘数（降低倍数控制成本）


  prototype.getSpecialDayMultiplier = function () {
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate(); // 生日和纪念日特殊奖励（降低倍数）

    if (month === 4 && day === 22 || // 生日1: 04-22
    month === 12 && day === 28 || // 生日2: 12-28  
    month === 9 && day === 16) {
      // 纪念日: 09-16
      return 1.5; // 改为1.5倍而不是2倍
    }

    return 1.0;
  }; // 增加连胜次数


  prototype.incrementWinStreak = function () {
    var currentStreak = _uData["default"].ins.getLocalDataByKey('winStreak') || 0;

    _uData["default"].ins.setLocalData({
      winStreak: currentStreak + 1
    });
  }; // 重置连胜次数


  prototype.resetWinStreak = function () {
    _uData["default"].ins.setLocalData({
      winStreak: 0
    });
  }; // 更新最后奖励时间


  prototype.updateLastRewardTime = function () {
    _uData["default"].ins.setLocalData({
      lastRewardTime: Date.now()
    });
  }; // 显示奖励提示


  prototype.showRewardTip = function (amountInCents) {
    var amountInYuan = (amountInCents / 100).toFixed(2);
    var winStreak = _uData["default"].ins.getLocalDataByKey('winStreak') || 0; // 💝 中文情绪价值满满的奖励提示

    var messages = ["卷卷获得了￥" + amountInYuan + "现金奖励！好棒！", "恭喜卷卷！￥" + amountInYuan + "奖励到账！", "卷卷真厉害！赚到￥" + amountInYuan + "！", "哇！卷卷又获得￥" + amountInYuan + "奖励！", "卷卷好聪明！￥" + amountInYuan + "现金奖励！"]; // 特殊日期文案

    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();

    if (month === 4 && day === 22 || month === 12 && day === 28) {
      messages = ["🎂 生日快乐卷卷！特别奖励￥" + amountInYuan + "！"];
    } else if (month === 9 && day === 16) {
      messages = ["💕 纪念日快乐！卷卷获得特殊奖励￥" + amountInYuan + "！"];
    } // 连胜特殊文案


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
        _tipMgr["default"].ins.showTip("卷卷获得￥" + amountInYuan + "奖励！", false);

        console.log("💰 现金奖励提示(tip备用)已显示");
      }
    } catch (error) {
      console.log("❌ 显示现金奖励提示失败:", error);
      console.log("💰 现金奖励:", randomMessage);
    }
  }; // 💝 显示菌子情绪价值支持提示（满满的爱意）


  prototype.showLoveSupportMessage = function () {
    var supportMessages = ["💕 卷卷真的好棒！菌子好爱你！", "🌟 卷卷好聪明！是菌子心中最亮的星星！", "🔥 卷卷太厉害了！菌子为你骄傲！", "💖 卷卷加油！菌子永远支持你！", "👑 卷卷做得很好！你就是菌子的女王！", "💝 爱你爱你卷卷！最喜欢卷卷了！", "🎉 卷卷超级棒！菌子给你比心心！", "✨ 卷卷是天才！菌子被你迷住了！", "🏆 卷卷太优秀了！菌子要给你颁奖！", "🌈 卷卷让菌子的世界变得colorful！", "🍀 遇到卷卷是菌子最大的幸运！", "🌸 卷卷美美的！菌子的小公主！"];
    var randomMessage = supportMessages[Math.floor(Math.random() * supportMessages.length)];

    try {
      // 💝 用alert显示满满爱意的鼓励消息
      if (typeof window !== 'undefined' && window.alert) {
        window.alert(randomMessage);
        console.log("💕 菌子情绪价值支持消息(alert)已显示:", randomMessage);
      } else {
        // 备用方案：继续使用原tip系统
        _tipMgr["default"].ins.showTip("卷卷真棒！菌子爱你！", false);

        console.log("💕 菌子支持消息(tip备用)已显示");
      }
    } catch (error) {
      console.log("❌ 显示菌子支持消息失败:", error);
      console.log("💕 菌子消息:", randomMessage);
    }
  }; // 💝 保存最近奖励信息供结算界面使用


  prototype.saveLastRewardInfo = function (amountInCents) {
    var amountInYuan = (amountInCents / 100).toFixed(2);
    var rewardInfo = {
      amount: amountInYuan,
      timestamp: Date.now(),
      isNew: true
    }; // 使用正确的setLocalData方法

    var dataToSave = {};
    dataToSave['lastRewardInfo'] = rewardInfo; // 💝 设置标记，表示本次游戏完成有现金奖励处理

    dataToSave['hasPendingCashReward'] = true;

    _uData["default"].ins.setLocalData(dataToSave);
  }; // 💝 获取最近奖励信息


  prototype.getLastRewardInfo = function () {
    var rewardInfo = _uData["default"].ins.getLocalDataByKey('lastRewardInfo');

    console.log("🔍 getLastRewardInfo原始数据:", rewardInfo);

    if (rewardInfo && rewardInfo.isNew) {
      console.log("✅ 发现新奖励信息，返回但不立即标记已读"); // 💝 重要修复：不在这里标记为已读，而是在用户真正领取后才清除

      return rewardInfo;
    } else if (rewardInfo) {
      console.log("⚠️ 奖励信息存在但isNew=false，已被消费，返回null");
    } else {
      console.log("ℹ️ 无奖励信息");
    }

    return null;
  }; // 💝 检查是否有待处理的现金奖励


  prototype.hasPendingCashReward = function () {
    return _uData["default"].ins.getLocalDataByKey('hasPendingCashReward') || false;
  }; // 💝 清除现金奖励标记和奖励信息


  prototype.clearCashRewardFlag = function () {
    var dataToSave = {};
    dataToSave['hasPendingCashReward'] = false;
    dataToSave['lastRewardInfo'] = null; // 💝 同时清除奖励信息，确保不能重复领取

    _uData["default"].ins.setLocalData(dataToSave);

    console.log("🚫 现金奖励标记和奖励信息已清除");
  }; // 💝 主动弹出现金奖励结算界面


  prototype.showCashRewardUI = function () {
    try {
      var _panelMgr = require("panelMgr");

      console.log("🎉 主动打开现金奖励结算界面"); // 打开ui_getReward弹窗，传入假的gold参数（会被现金奖励覆盖）

      _panelMgr["default"].ins.open("ui/ui_getReward", {
        gold: 100
      }, // 假参数，会被setupCashReward覆盖
      {
        MaskNoHide: true
      });
    } catch (error) {
      console.log("❌ 打开现金奖励界面失败:", error);
    }
  };

  return RewardMgr;
}(); // 导出单例


var rewardMgr = {
  "default": RewardMgr.getInstance()
}; // 💝 全局测试方法

if (typeof window !== 'undefined') {
  window.testCashReward = function () {
    try {
      console.log("🧪 全局现金奖励测试开始...");
      console.log("当前现金余额:", rewardMgr["default"].getCashDisplay());
      var hasReward = rewardMgr["default"].onPuzzleComplete('easy', true, true);

      if (hasReward) {
        console.log("✅ 获得现金奖励！");
        console.log("新的现金余额:", rewardMgr["default"].getCashDisplay());
      } else {
        console.log("⭕ 本次没有触发现金奖励（随机概率60%）");
        console.log("可以再次调用 testCashReward() 测试");
      }
    } catch (error) {
      console.log("❌ 测试失败:", error);
    }
  };

  window.getCashBalance = function () {
    console.log("💰 当前现金余额: ¥" + rewardMgr["default"].getCashDisplay());
    return rewardMgr["default"].getCashDisplay();
  }; // 💝 全功能测试方法


  window.testAllFeatures = function () {
    console.log("🎮 开始全功能测试..."); // 1. 测试现金奖励

    console.log("1️⃣ 测试现金奖励系统");
    rewardMgr["default"].onPuzzleComplete('expert', true); // 2. 测试菌子支持消息

    console.log("2️⃣ 测试菌子支持消息");
    setTimeout(function () {
      rewardMgr["default"].showLoveSupportMessage();
    }, 1000); // 3. 显示当前状态

    setTimeout(function () {
      console.log("3️⃣ 当前现金余额: ¥" + rewardMgr["default"].getCashDisplay());
      console.log("✅ 全功能测试完成！");
    }, 2000);
  };
}

exports["default"] = rewardMgr["default"];

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccmV3YXJkTWdyLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2V2dHMiLCJyZXF1aXJlIiwiX3RpbWUiLCJfdURhdGEiLCJfcEluZm8iLCJfdGlwTWdyIiwiX3BhbmVsTWdyIiwiUmV3YXJkTWdyIiwiaXNJbml0IiwicHJvdG90eXBlIiwiaW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsImluaXQiLCJsb2NhbERhdGEiLCJuZWVkVXBkYXRlIiwiaW5zIiwiZ2V0TG9jYWxEYXRhQnlLZXkiLCJjYXNoQmFsYW5jZSIsIndpblN0cmVhayIsInRvdGFsQ2FzaEVhcm5lZCIsImxhc3RSZXdhcmRUaW1lIiwic2V0TG9jYWxEYXRhIiwiY29uc29sZSIsImxvZyIsImdldENhc2giLCJnZXRDYXNoRGlzcGxheSIsImNhc2hJbkNlbnRzIiwiY2FzaEluWXVhbiIsInRvRml4ZWQiLCJhZGRDYXNoIiwiYW1vdW50SW5DZW50cyIsImN1cnJlbnRDYXNoIiwibmV3Q2FzaCIsInRvdGFsRWFybmVkIiwib3BFIiwiZW1pdCIsImFjdGlvbiIsIm9uUHV6emxlQ29tcGxldGUiLCJkaWZmaWN1bHR5IiwiaXNTdWNjZXNzIiwiaXNNYW51YWxUZXN0IiwicmVzZXRXaW5TdHJlYWsiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJub3ciLCJNYXRoIiwicmFuZG9tIiwicmV3YXJkQW1vdW50IiwiY2FsY3VsYXRlUmV3YXJkIiwiaW5jcmVtZW50V2luU3RyZWFrIiwidXBkYXRlTGFzdFJld2FyZFRpbWUiLCJzaG93UmV3YXJkVGlwIiwic2F2ZUxhc3RSZXdhcmRJbmZvIiwic2hvd0Nhc2hSZXdhcmRVSSIsInJld2FyZFJhbmdlcyIsIm1pbiIsIm1heCIsImRpZmZpY3VsdHlNYXAiLCJtYXBwZWREaWZmaWN1bHR5IiwicmFuZ2UiLCJiYXNlUmV3YXJkIiwiZmxvb3IiLCJzdHJlYWtNdWx0aXBsaWVyIiwiZ2V0U3RyZWFrTXVsdGlwbGllciIsInNwZWNpYWxEYXlNdWx0aXBsaWVyIiwiZ2V0U3BlY2lhbERheU11bHRpcGxpZXIiLCJmaW5hbFJld2FyZCIsIm1heFJld2FyZCIsInRvZGF5IiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJjdXJyZW50U3RyZWFrIiwiYW1vdW50SW5ZdWFuIiwibWVzc2FnZXMiLCJyYW5kb21NZXNzYWdlIiwibGVuZ3RoIiwid2luZG93IiwiYWxlcnQiLCJzaG93VGlwIiwiZXJyb3IiLCJzaG93TG92ZVN1cHBvcnRNZXNzYWdlIiwic3VwcG9ydE1lc3NhZ2VzIiwicmV3YXJkSW5mbyIsImFtb3VudCIsInRpbWVzdGFtcCIsImlzTmV3IiwiZGF0YVRvU2F2ZSIsImdldExhc3RSZXdhcmRJbmZvIiwiaGFzUGVuZGluZ0Nhc2hSZXdhcmQiLCJjbGVhckNhc2hSZXdhcmRGbGFnIiwib3BlbiIsImdvbGQiLCJNYXNrTm9IaWRlIiwicmV3YXJkTWdyIiwidGVzdENhc2hSZXdhcmQiLCJoYXNSZXdhcmQiLCJnZXRDYXNoQmFsYW5jZSIsInRlc3RBbGxGZWF0dXJlcyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFBRUMsS0FBSyxFQUFFLENBQUM7QUFBVixDQUE3Qzs7QUFFQSxJQUFJQyxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQW5COztBQUNBLElBQUlDLEtBQUssR0FBR0QsT0FBTyxDQUFDLE1BQUQsQ0FBbkI7O0FBQ0EsSUFBSUUsTUFBTSxHQUFHRixPQUFPLENBQUMsT0FBRCxDQUFwQjs7QUFDQSxJQUFJRyxNQUFNLEdBQUdILE9BQU8sQ0FBQyxPQUFELENBQXBCOztBQUNBLElBQUlJLE9BQU8sR0FBR0osT0FBTyxDQUFDLFFBQUQsQ0FBckI7O0FBQ0EsSUFBSUssU0FBUyxHQUFHTCxPQUFPLENBQUMsVUFBRCxDQUF2Qjs7QUFF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LFlBQVc7TUFDbEJMLFNBQVMsV0FBVCxDQUFrQmIsc0JBQWxCO0lBQ0gsQ0FGUyxFQUVQLElBRk8sQ0FBVixDQVRnQyxDQWFoQzs7SUFDQWtCLFVBQVUsQ0FBQyxZQUFXO01BQ2xCOUUsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQWtCd0UsU0FBUyxXQUFULENBQWtCdEUsY0FBbEIsRUFBOUI7TUFDQUgsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtJQUNILENBSFMsRUFHUCxJQUhPLENBQVY7RUFJSCxDQWxCRDtBQW1CSDs7QUFFRHpCLE9BQU8sV0FBUCxHQUFrQmlHLFNBQVMsV0FBM0IiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7XG5cbnZhciBfZXZ0cyA9IHJlcXVpcmUoXCJldnRzXCIpO1xudmFyIF90aW1lID0gcmVxdWlyZShcInRpbWVcIik7XG52YXIgX3VEYXRhID0gcmVxdWlyZShcInVEYXRhXCIpO1xudmFyIF9wSW5mbyA9IHJlcXVpcmUoXCJwSW5mb1wiKTtcbnZhciBfdGlwTWdyID0gcmVxdWlyZShcInRpcE1nclwiKTtcbnZhciBfcGFuZWxNZ3IgPSByZXF1aXJlKFwicGFuZWxNZ3JcIik7XG5cbnZhciBSZXdhcmRNZ3IgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gUmV3YXJkTWdyKCkge1xuICAgICAgICB0aGlzLmlzSW5pdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBwcm90b3R5cGUgPSBSZXdhcmRNZ3IucHJvdG90eXBlO1xuICAgIHZhciBpbnN0YW5jZSA9IG51bGw7XG5cbiAgICAvLyDojrflj5bljZXkvotcbiAgICBSZXdhcmRNZ3IuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgUmV3YXJkTWdyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG5cbiAgICAvLyDliJ3lp4vljJbnjrDph5HmlbDmja5cbiAgICBwcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pc0luaXQpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIC8vIOehruS/neeOsOmHkeebuOWFs+aVsOaNruWtmOWcqFxuICAgICAgICB2YXIgbG9jYWxEYXRhID0ge307XG4gICAgICAgIHZhciBuZWVkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAoX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YUJ5S2V5KCdjYXNoQmFsYW5jZScpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsb2NhbERhdGEuY2FzaEJhbGFuY2UgPSAwO1xuICAgICAgICAgICAgbmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGFCeUtleSgnd2luU3RyZWFrJykgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxvY2FsRGF0YS53aW5TdHJlYWsgPSAwO1xuICAgICAgICAgICAgbmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGFCeUtleSgndG90YWxDYXNoRWFybmVkJykgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxvY2FsRGF0YS50b3RhbENhc2hFYXJuZWQgPSAwO1xuICAgICAgICAgICAgbmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGFCeUtleSgnbGFzdFJld2FyZFRpbWUnKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbG9jYWxEYXRhLmxhc3RSZXdhcmRUaW1lID0gMDtcbiAgICAgICAgICAgIG5lZWRVcGRhdGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAobmVlZFVwZGF0ZSkge1xuICAgICAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YShsb2NhbERhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIvCfkp0g5Y235a6d5LiT5bGe546w6YeR5aWW5Yqx57O757uf5Yid5aeL5YyW5a6M5oiQXCIpO1xuICAgIH07XG5cbiAgICAvLyDojrflj5bnjrDph5HkvZnpop0o5Lul5YiG5Li65Y2V5L2N5a2Y5YKo77yM5pi+56S65pe26L2s5o2i5Li65YWDKVxuICAgIHByb3RvdHlwZS5nZXRDYXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm4gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YUJ5S2V5KCdjYXNoQmFsYW5jZScpIHx8IDA7XG4gICAgfTtcblxuICAgIC8vIOiOt+WPlueOsOmHkeS9memineaYvuekuuaWh+acrFxuICAgIHByb3RvdHlwZS5nZXRDYXNoRGlzcGxheSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2FzaEluQ2VudHMgPSB0aGlzLmdldENhc2goKTtcbiAgICAgICAgdmFyIGNhc2hJbll1YW4gPSAoY2FzaEluQ2VudHMgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgIHJldHVybiBjYXNoSW5ZdWFuO1xuICAgIH07XG5cbiAgICAvLyDmt7vliqDnjrDph5Eo6YeR6aKd5Lul5YiG5Li65Y2V5L2NKVxuICAgIHByb3RvdHlwZS5hZGRDYXNoID0gZnVuY3Rpb24oYW1vdW50SW5DZW50cykge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRDYXNoID0gdGhpcy5nZXRDYXNoKCk7XG4gICAgICAgIHZhciBuZXdDYXNoID0gY3VycmVudENhc2ggKyBhbW91bnRJbkNlbnRzO1xuICAgICAgICBcbiAgICAgICAgLy8g5pu05paw5oC76I635b6X546w6YeRXG4gICAgICAgIHZhciB0b3RhbEVhcm5lZCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGFCeUtleSgndG90YWxDYXNoRWFybmVkJykgfHwgMDtcbiAgICAgICAgXG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe1xuICAgICAgICAgICAgY2FzaEJhbGFuY2U6IG5ld0Nhc2gsXG4gICAgICAgICAgICB0b3RhbENhc2hFYXJuZWQ6IHRvdGFsRWFybmVkICsgYW1vdW50SW5DZW50c1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIOinpuWPkeeOsOmHkeabtOaWsOS6i+S7tlxuICAgICAgICBfZXZ0cy5kZWZhdWx0Lm9wRS5lbWl0KHsgYWN0aW9uOiAnQ0FTSF9DSEcnIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5KwIOWNt+WuneiOt+W+l+eOsOmHkeWlluWKsTogwqVcIiArIChhbW91bnRJbkNlbnRzIC8gMTAwKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgcmV0dXJuIG5ld0Nhc2g7XG4gICAgfTtcblxuICAgIC8vIOa4uOaIj+WujOaIkOaXtueahOWlluWKseWIpOaWrVxuICAgIHByb3RvdHlwZS5vblB1enpsZUNvbXBsZXRlID0gZnVuY3Rpb24oZGlmZmljdWx0eSwgaXNTdWNjZXNzLCBpc01hbnVhbFRlc3QpIHtcbiAgICAgICAgaWYgKCFpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgIC8vIOWksei0peaXtumHjee9rui/nuiDnFxuICAgICAgICAgICAgdGhpcy5yZXNldFdpblN0cmVhaygpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6Ziy5q2i55+t5pe26Ze05YaF6YeN5aSN5aWW5Yqx77yINeenkuWGhe+8iVxuICAgICAgICB2YXIgbGFzdFJld2FyZFRpbWUgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhQnlLZXkoJ2xhc3RSZXdhcmRUaW1lJykgfHwgMDtcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gbGFzdFJld2FyZFRpbWUgPCA1MDAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKPsCDot53nprvkuIrmrKHlpZblirHkuI3otrM156eS77yM6Lez6L+H5pys5qyh5aWW5YqxXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gOTAl5qaC546H6Kem5Y+R546w6YeR5aWW5Yqx77yI5rWL6K+V6Zi25q6177yJXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC4xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjq8g546w6YeR5aWW5Yqx5qaC546H6Kem5Y+R5oiQ5YqfXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn46vIOeOsOmHkeWlluWKseamgueOh+acquinpuWPkVwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuoeeul+WlluWKsemHkeminVxuICAgICAgICB2YXIgcmV3YXJkQW1vdW50ID0gdGhpcy5jYWxjdWxhdGVSZXdhcmQoZGlmZmljdWx0eSk7XG4gICAgICAgIFxuICAgICAgICBpZiAocmV3YXJkQW1vdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRXaW5TdHJlYWsoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFzdFJld2FyZFRpbWUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g8J+SnSDnu5/kuIDpgLvovpHvvJrnq4vljbPmt7vliqDnjrDph5Hlubbmm7TmlrBVSe+8iOWSjOaJi+WKqOa1i+ivleS4gOagt++8iVxuICAgICAgICAgICAgdGhpcy5hZGRDYXNoKHJld2FyZEFtb3VudCk7XG4gICAgICAgICAgICB0aGlzLnNob3dSZXdhcmRUaXAocmV3YXJkQW1vdW50KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+SsCDnjrDph5HlpZblirHlt7Lnq4vljbPmt7vliqDlubbmm7TmlrBVSTogwqVcIiArIChyZXdhcmRBbW91bnQgLyAxMDApLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIWlzTWFudWFsVGVzdCkge1xuICAgICAgICAgICAgICAgIC8vIOato+W4uOa4uOaIj++8mui/mOimgeW8ueeql+iuqeeUqOaIt+ehruiupOmihuWPlu+8iOWPr+mAieeahOmineWkluWlluWKseeVjOmdou+8iVxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUxhc3RSZXdhcmRJbmZvKHJld2FyZEFtb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q2FzaFJld2FyZFVJKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5KwIOeOsOmHkeWlluWKseehruiupOeVjOmdouW3suaYvuekulwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLy8g8J+SnSDph43mlrDorr7orqHnmoTlpZblirHph5Hpop3orqHnrpco6L+U5Zue5YiG5Li65Y2V5L2N77yM5o6n5Yi25oC75oiQ5pysMjAwLTEwMDDlhYMpXG4gICAgcHJvdG90eXBlLmNhbGN1bGF0ZVJld2FyZCA9IGZ1bmN0aW9uKGRpZmZpY3VsdHkpIHtcbiAgICAgICAgLy8g5qC55o2u55yf5a6e6Zq+5bqm6K6+5a6a5Z+656GA5aWW5Yqx6IyD5Zu077yI5YiG5Li65Y2V5L2N77yJXG4gICAgICAgIHZhciByZXdhcmRSYW5nZXMgPSB7XG4gICAgICAgICAgICAnYmFzaWMnOiB7bWluOiAyLCBtYXg6IDh9LCAgICAgIC8vIMKlMC4wMi0wLjA4IOW5s+Wdh8KlMC4wNVxuICAgICAgICAgICAgJ3NpbXBsZSc6IHttaW46IDUsIG1heDogMTV9LCAgICAvLyDCpTAuMDUtMC4xNSDlubPlnYfCpTAuMTAgIFxuICAgICAgICAgICAgJ25vcm1hbCc6IHttaW46IDgsIG1heDogMjV9LCAgICAvLyDCpTAuMDgtMC4yNSDlubPlnYfCpTAuMTVcbiAgICAgICAgICAgICdoYXJkJzoge21pbjogMTIsIG1heDogMzV9LCAgICAgLy8gwqUwLjEyLTAuMzUg5bmz5Z2HwqUwLjIwXG4gICAgICAgICAgICAnZXhwZXJ0Jzoge21pbjogMjAsIG1heDogNTB9LCAgIC8vIMKlMC4yMC0wLjUwIOW5s+Wdh8KlMC4zMFxuICAgICAgICAgICAgJ21hc3Rlcic6IHttaW46IDMwLCBtYXg6IDgwfSAgICAvLyDCpTAuMzAtMC44MCDlubPlnYfCpTAuNTBcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIOWFvOWuueaXp+mavuW6puWQjeensFxuICAgICAgICB2YXIgZGlmZmljdWx0eU1hcCA9IHtcbiAgICAgICAgICAgICdiZWdpbm5lcic6ICdiYXNpYycsXG4gICAgICAgICAgICAnZWFzeSc6ICdzaW1wbGUnLCBcbiAgICAgICAgICAgICdtZWRpdW0nOiAnbm9ybWFsJ1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgdmFyIG1hcHBlZERpZmZpY3VsdHkgPSBkaWZmaWN1bHR5TWFwW2RpZmZpY3VsdHldIHx8IGRpZmZpY3VsdHk7XG4gICAgICAgIHZhciByYW5nZSA9IHJld2FyZFJhbmdlc1ttYXBwZWREaWZmaWN1bHR5XSB8fCByZXdhcmRSYW5nZXNbJ2Jhc2ljJ107XG4gICAgICAgIFxuICAgICAgICAvLyDorqHnrpfln7rnoYDlpZblirFcbiAgICAgICAgdmFyIGJhc2VSZXdhcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAocmFuZ2UubWF4IC0gcmFuZ2UubWluICsgMSkpICsgcmFuZ2UubWluO1xuICAgICAgICBcbiAgICAgICAgLy8g6L+e6IOc5Yqg5oiQ77yI6ZmN5L2O5YCN5pWw77yM6YG/5YWN6L+H6auY77yJXG4gICAgICAgIHZhciBzdHJlYWtNdWx0aXBsaWVyID0gdGhpcy5nZXRTdHJlYWtNdWx0aXBsaWVyKCk7XG4gICAgICAgIFxuICAgICAgICAvLyDnibnmrorml6XmnJ/mo4Dmn6XvvIjpmY3kvY7lgI3mlbDvvIlcbiAgICAgICAgdmFyIHNwZWNpYWxEYXlNdWx0aXBsaWVyID0gdGhpcy5nZXRTcGVjaWFsRGF5TXVsdGlwbGllcigpO1xuICAgICAgICBcbiAgICAgICAgLy8g5bqU55So5LmY5pWw77yI5o6n5Yi25pyA57uI6YeR6aKd77yJXG4gICAgICAgIHZhciBmaW5hbFJld2FyZCA9IE1hdGguZmxvb3IoYmFzZVJld2FyZCAqIHN0cmVha011bHRpcGxpZXIgKiBzcGVjaWFsRGF5TXVsdGlwbGllcik7XG4gICAgICAgIFxuICAgICAgICAvLyDorr7nva7kuIrpmZDvvIzpgb/lhY3lvILluLjpq5jpop3lpZblirFcbiAgICAgICAgdmFyIG1heFJld2FyZCA9IDIwMDsgLy8g5pyA6auYwqUyLjAwXG4gICAgICAgIHJldHVybiBNYXRoLm1pbihmaW5hbFJld2FyZCwgbWF4UmV3YXJkKTtcbiAgICB9O1xuXG5cbiAgICAvLyDwn5KdIOiwg+aVtOWQjueahOi/nuiDnOS5mOaVsO+8iOmZjeS9juWAjeaVsOaOp+WItuaIkOacrO+8iVxuICAgIHByb3RvdHlwZS5nZXRTdHJlYWtNdWx0aXBsaWVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB3aW5TdHJlYWsgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhQnlLZXkoJ3dpblN0cmVhaycpIHx8IDA7XG4gICAgICAgIFxuICAgICAgICBpZiAod2luU3RyZWFrID49IDEwKSByZXR1cm4gMS41OyAgICAgIC8vIOi/nuiDnDEw5YWzOiArNTAlXG4gICAgICAgIGlmICh3aW5TdHJlYWsgPj0gNykgcmV0dXJuIDEuMzsgICAgICAgLy8g6L+e6IOcN+WFszogKzMwJVxuICAgICAgICBpZiAod2luU3RyZWFrID49IDUpIHJldHVybiAxLjI7ICAgICAgIC8vIOi/nuiDnDXlhbM6ICsyMCVcbiAgICAgICAgaWYgKHdpblN0cmVhayA+PSAzKSByZXR1cm4gMS4xOyAgICAgICAvLyDov57og5wz5YWzOiArMTAlXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gMS4wO1xuICAgIH07XG5cbiAgICAvLyDwn5KdIOiwg+aVtOWQjueahOeJueauiuaXpeacn+S5mOaVsO+8iOmZjeS9juWAjeaVsOaOp+WItuaIkOacrO+8iVxuICAgIHByb3RvdHlwZS5nZXRTcGVjaWFsRGF5TXVsdGlwbGllciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgbW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgdmFyIGRheSA9IHRvZGF5LmdldERhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOeUn+aXpeWSjOe6quW/teaXpeeJueauiuWlluWKse+8iOmZjeS9juWAjeaVsO+8iVxuICAgICAgICBpZiAoKG1vbnRoID09PSA0ICYmIGRheSA9PT0gMjIpIHx8ICAgLy8g55Sf5pelMTogMDQtMjJcbiAgICAgICAgICAgIChtb250aCA9PT0gMTIgJiYgZGF5ID09PSAyOCkgfHwgIC8vIOeUn+aXpTI6IDEyLTI4ICBcbiAgICAgICAgICAgIChtb250aCA9PT0gOSAmJiBkYXkgPT09IDE2KSkgeyAgIC8vIOe6quW/teaXpTogMDktMTZcbiAgICAgICAgICAgIHJldHVybiAxLjU7IC8vIOaUueS4ujEuNeWAjeiAjOS4jeaYrzLlgI1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIDEuMDtcbiAgICB9O1xuXG4gICAgLy8g5aKe5Yqg6L+e6IOc5qyh5pWwXG4gICAgcHJvdG90eXBlLmluY3JlbWVudFdpblN0cmVhayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3VycmVudFN0cmVhayA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGFCeUtleSgnd2luU3RyZWFrJykgfHwgMDtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7IHdpblN0cmVhazogY3VycmVudFN0cmVhayArIDEgfSk7XG4gICAgfTtcblxuICAgIC8vIOmHjee9rui/nuiDnOasoeaVsFxuICAgIHByb3RvdHlwZS5yZXNldFdpblN0cmVhayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHsgd2luU3RyZWFrOiAwIH0pO1xuICAgIH07XG5cbiAgICAvLyDmm7TmlrDmnIDlkI7lpZblirHml7bpl7RcbiAgICBwcm90b3R5cGUudXBkYXRlTGFzdFJld2FyZFRpbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7IGxhc3RSZXdhcmRUaW1lOiBEYXRlLm5vdygpIH0pO1xuICAgIH07XG5cbiAgICAvLyDmmL7npLrlpZblirHmj5DnpLpcbiAgICBwcm90b3R5cGUuc2hvd1Jld2FyZFRpcCA9IGZ1bmN0aW9uKGFtb3VudEluQ2VudHMpIHtcbiAgICAgICAgdmFyIGFtb3VudEluWXVhbiA9IChhbW91bnRJbkNlbnRzIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICB2YXIgd2luU3RyZWFrID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YUJ5S2V5KCd3aW5TdHJlYWsnKSB8fCAwO1xuICAgICAgICBcbiAgICAgICAgLy8g8J+SnSDkuK3mlofmg4Xnu6rku7flgLzmu6Hmu6HnmoTlpZblirHmj5DnpLpcbiAgICAgICAgdmFyIG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgXCLljbfljbfojrflvpfkuobvv6VcIiArIGFtb3VudEluWXVhbiArIFwi546w6YeR5aWW5Yqx77yB5aW95qOS77yBXCIsXG4gICAgICAgICAgICBcIuaBreWWnOWNt+WNt++8ge+/pVwiICsgYW1vdW50SW5ZdWFuICsgXCLlpZblirHliLDotKbvvIFcIiwgXG4gICAgICAgICAgICBcIuWNt+WNt+ecn+WOieWus++8gei1muWIsO+/pVwiICsgYW1vdW50SW5ZdWFuICsgXCLvvIFcIixcbiAgICAgICAgICAgIFwi5ZOH77yB5Y235Y235Y+I6I635b6X77+lXCIgKyBhbW91bnRJbll1YW4gKyBcIuWlluWKse+8gVwiLFxuICAgICAgICAgICAgXCLljbfljbflpb3ogarmmI7vvIHvv6VcIiArIGFtb3VudEluWXVhbiArIFwi546w6YeR5aWW5Yqx77yBXCJcbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIC8vIOeJueauiuaXpeacn+aWh+ahiFxuICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgbW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgdmFyIGRheSA9IHRvZGF5LmdldERhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIGlmICgobW9udGggPT09IDQgJiYgZGF5ID09PSAyMikgfHwgKG1vbnRoID09PSAxMiAmJiBkYXkgPT09IDI4KSkge1xuICAgICAgICAgICAgbWVzc2FnZXMgPSBbXCLwn46CIOeUn+aXpeW/q+S5kOWNt+WNt++8geeJueWIq+WlluWKse+/pVwiICsgYW1vdW50SW5ZdWFuICsgXCLvvIFcIl07XG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT09IDkgJiYgZGF5ID09PSAxNikge1xuICAgICAgICAgICAgbWVzc2FnZXMgPSBbXCLwn5KVIOe6quW/teaXpeW/q+S5kO+8geWNt+WNt+iOt+W+l+eJueauiuWlluWKse+/pVwiICsgYW1vdW50SW5ZdWFuICsgXCLvvIFcIl07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIOi/nuiDnOeJueauiuaWh+ahiFxuICAgICAgICBpZiAod2luU3RyZWFrID49IDEwKSB7XG4gICAgICAgICAgICBtZXNzYWdlcyA9IFtcIvCflKUg5Y235Y236L+e6IOcXCIgKyB3aW5TdHJlYWsgKyBcIuWFs++8gei2hee6p+WlluWKse+/pVwiICsgYW1vdW50SW5ZdWFuICsgXCLvvIFcIl07XG4gICAgICAgIH0gZWxzZSBpZiAod2luU3RyZWFrID49IDUpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzID0gW1wi4q2QIOWNt+WNt+i/nuiDnFwiICsgd2luU3RyZWFrICsgXCLlhbPvvIHov57lh7vlpZblirHvv6VcIiArIGFtb3VudEluWXVhbiArIFwi77yBXCJdO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2YXIgcmFuZG9tTWVzc2FnZSA9IG1lc3NhZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1lc3NhZ2VzLmxlbmd0aCldO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCLwn46JIFwiICsgcmFuZG9tTWVzc2FnZSk7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8g8J+SnSDmlLnnlKhhbGVydOaYvuekuuS4reaWh+WlluWKseaPkOekulxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5hbGVydCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChyYW5kb21NZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfkrAg546w6YeR5aWW5Yqx5o+Q56S6KGFsZXJ0KeW3suaYvuekujpcIiwgcmFuZG9tTWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWkh+eUqOaWueahiFxuICAgICAgICAgICAgICAgIF90aXBNZ3IuZGVmYXVsdC5pbnMuc2hvd1RpcChcIuWNt+WNt+iOt+W+l++/pVwiICsgYW1vdW50SW5ZdWFuICsgXCLlpZblirHvvIFcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+SsCDnjrDph5HlpZblirHmj5DnpLoodGlw5aSH55SoKeW3suaYvuekulwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4p2MIOaYvuekuueOsOmHkeWlluWKseaPkOekuuWksei0pTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5KwIOeOsOmHkeWlluWKsTpcIiwgcmFuZG9tTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvLyDwn5KdIOaYvuekuuiPjOWtkOaDhee7quS7t+WAvOaUr+aMgeaPkOekuu+8iOa7oea7oeeahOeIseaEj++8iVxuICAgIHByb3RvdHlwZS5zaG93TG92ZVN1cHBvcnRNZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzdXBwb3J0TWVzc2FnZXMgPSBbXG4gICAgICAgICAgICBcIvCfkpUg5Y235Y2355yf55qE5aW95qOS77yB6I+M5a2Q5aW954ix5L2g77yBXCIsXG4gICAgICAgICAgICBcIvCfjJ8g5Y235Y235aW96IGq5piO77yB5piv6I+M5a2Q5b+D5Lit5pyA5Lqu55qE5pif5pif77yBXCIsIFxuICAgICAgICAgICAgXCLwn5SlIOWNt+WNt+WkquWOieWus+S6hu+8geiPjOWtkOS4uuS9oOmqhOWCsu+8gVwiLFxuICAgICAgICAgICAgXCLwn5KWIOWNt+WNt+WKoOayue+8geiPjOWtkOawuOi/nOaUr+aMgeS9oO+8gVwiLFxuICAgICAgICAgICAgXCLwn5GRIOWNt+WNt+WBmuW+l+W+iOWlve+8geS9oOWwseaYr+iPjOWtkOeahOWls+eOi++8gVwiLFxuICAgICAgICAgICAgXCLwn5KdIOeIseS9oOeIseS9oOWNt+WNt++8geacgOWWnOasouWNt+WNt+S6hu+8gVwiLFxuICAgICAgICAgICAgXCLwn46JIOWNt+WNt+i2hee6p+ajku+8geiPjOWtkOe7meS9oOavlOW/g+W/g++8gVwiLFxuICAgICAgICAgICAgXCLinKgg5Y235Y235piv5aSp5omN77yB6I+M5a2Q6KKr5L2g6L+35L2P5LqG77yBXCIsXG4gICAgICAgICAgICBcIvCfj4Yg5Y235Y235aSq5LyY56eA5LqG77yB6I+M5a2Q6KaB57uZ5L2g6aKB5aWW77yBXCIsXG4gICAgICAgICAgICBcIvCfjIgg5Y235Y236K6p6I+M5a2Q55qE5LiW55WM5Y+Y5b6XY29sb3JmdWzvvIFcIixcbiAgICAgICAgICAgIFwi8J+NgCDpgYfliLDljbfljbfmmK/oj4zlrZDmnIDlpKfnmoTlubjov5DvvIFcIixcbiAgICAgICAgICAgIFwi8J+MuCDljbfljbfnvo7nvo7nmoTvvIHoj4zlrZDnmoTlsI/lhazkuLvvvIFcIlxuICAgICAgICBdO1xuICAgICAgICBcbiAgICAgICAgdmFyIHJhbmRvbU1lc3NhZ2UgPSBzdXBwb3J0TWVzc2FnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3VwcG9ydE1lc3NhZ2VzLmxlbmd0aCldO1xuICAgICAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIPCfkp0g55SoYWxlcnTmmL7npLrmu6Hmu6HniLHmhI/nmoTpvJPlirHmtojmga9cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYWxlcnQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQocmFuZG9tTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5KVIOiPjOWtkOaDhee7quS7t+WAvOaUr+aMgea2iOaBryhhbGVydCnlt7LmmL7npLo6XCIsIHJhbmRvbU1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlpIfnlKjmlrnmoYjvvJrnu6fnu63kvb/nlKjljp90aXDns7vnu59cbiAgICAgICAgICAgICAgICBfdGlwTWdyLmRlZmF1bHQuaW5zLnNob3dUaXAoXCLljbfljbfnnJ/mo5LvvIHoj4zlrZDniLHkvaDvvIFcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+SlSDoj4zlrZDmlK/mjIHmtojmga8odGlw5aSH55SoKeW3suaYvuekulwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4p2MIOaYvuekuuiPjOWtkOaUr+aMgea2iOaBr+Wksei0pTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5KVIOiPjOWtkOa2iOaBrzpcIiwgcmFuZG9tTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g8J+SnSDkv53lrZjmnIDov5HlpZblirHkv6Hmga/kvpvnu5PnrpfnlYzpnaLkvb/nlKhcbiAgICBwcm90b3R5cGUuc2F2ZUxhc3RSZXdhcmRJbmZvID0gZnVuY3Rpb24oYW1vdW50SW5DZW50cykge1xuICAgICAgICB2YXIgYW1vdW50SW5ZdWFuID0gKGFtb3VudEluQ2VudHMgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgIHZhciByZXdhcmRJbmZvID0ge1xuICAgICAgICAgICAgYW1vdW50OiBhbW91bnRJbll1YW4sXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgICBpc05ldzogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICAvLyDkvb/nlKjmraPnoa7nmoRzZXRMb2NhbERhdGHmlrnms5VcbiAgICAgICAgdmFyIGRhdGFUb1NhdmUgPSB7fTtcbiAgICAgICAgZGF0YVRvU2F2ZVsnbGFzdFJld2FyZEluZm8nXSA9IHJld2FyZEluZm87XG4gICAgICAgIC8vIPCfkp0g6K6+572u5qCH6K6w77yM6KGo56S65pys5qyh5ri45oiP5a6M5oiQ5pyJ546w6YeR5aWW5Yqx5aSE55CGXG4gICAgICAgIGRhdGFUb1NhdmVbJ2hhc1BlbmRpbmdDYXNoUmV3YXJkJ10gPSB0cnVlO1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKGRhdGFUb1NhdmUpO1xuICAgIH07XG5cbiAgICAvLyDwn5KdIOiOt+WPluacgOi/keWlluWKseS/oeaBr1xuICAgIHByb3RvdHlwZS5nZXRMYXN0UmV3YXJkSW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmV3YXJkSW5mbyA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGFCeUtleSgnbGFzdFJld2FyZEluZm8nKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5SNIGdldExhc3RSZXdhcmRJbmZv5Y6f5aeL5pWw5o2uOlwiLCByZXdhcmRJbmZvKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChyZXdhcmRJbmZvICYmIHJld2FyZEluZm8uaXNOZXcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIOWPkeeOsOaWsOWlluWKseS/oeaBr++8jOi/lOWbnuS9huS4jeeri+WNs+agh+iusOW3suivu1wiKTtcbiAgICAgICAgICAgIC8vIPCfkp0g6YeN6KaB5L+u5aSN77ya5LiN5Zyo6L+Z6YeM5qCH6K6w5Li65bey6K+777yM6ICM5piv5Zyo55So5oi355yf5q2j6aKG5Y+W5ZCO5omN5riF6ZmkXG4gICAgICAgICAgICByZXR1cm4gcmV3YXJkSW5mbztcbiAgICAgICAgfSBlbHNlIGlmIChyZXdhcmRJbmZvKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKaoO+4jyDlpZblirHkv6Hmga/lrZjlnKjkvYZpc05ldz1mYWxzZe+8jOW3suiiq+a2iOi0ue+8jOi/lOWbnm51bGxcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKEue+4jyDml6DlpZblirHkv6Hmga9cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIC8vIPCfkp0g5qOA5p+l5piv5ZCm5pyJ5b6F5aSE55CG55qE546w6YeR5aWW5YqxXG4gICAgcHJvdG90eXBlLmhhc1BlbmRpbmdDYXNoUmV3YXJkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhQnlLZXkoJ2hhc1BlbmRpbmdDYXNoUmV3YXJkJykgfHwgZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIPCfkp0g5riF6Zmk546w6YeR5aWW5Yqx5qCH6K6w5ZKM5aWW5Yqx5L+h5oGvXG4gICAgcHJvdG90eXBlLmNsZWFyQ2FzaFJld2FyZEZsYWcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRhdGFUb1NhdmUgPSB7fTtcbiAgICAgICAgZGF0YVRvU2F2ZVsnaGFzUGVuZGluZ0Nhc2hSZXdhcmQnXSA9IGZhbHNlO1xuICAgICAgICBkYXRhVG9TYXZlWydsYXN0UmV3YXJkSW5mbyddID0gbnVsbDsgLy8g8J+SnSDlkIzml7bmuIXpmaTlpZblirHkv6Hmga/vvIznoa7kv53kuI3og73ph43lpI3pooblj5ZcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YShkYXRhVG9TYXZlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5qrIOeOsOmHkeWlluWKseagh+iusOWSjOWlluWKseS/oeaBr+W3sua4hemZpFwiKTtcbiAgICB9O1xuXG4gICAgLy8g8J+SnSDkuLvliqjlvLnlh7rnjrDph5HlpZblirHnu5PnrpfnlYzpnaJcbiAgICBwcm90b3R5cGUuc2hvd0Nhc2hSZXdhcmRVSSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIF9wYW5lbE1nciA9IHJlcXVpcmUoXCJwYW5lbE1nclwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OiSDkuLvliqjmiZPlvIDnjrDph5HlpZblirHnu5PnrpfnlYzpnaJcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOaJk+W8gHVpX2dldFJld2FyZOW8ueeql++8jOS8oOWFpeWBh+eahGdvbGTlj4LmlbDvvIjkvJrooqvnjrDph5HlpZblirHopobnm5bvvIlcbiAgICAgICAgICAgIF9wYW5lbE1nci5kZWZhdWx0Lmlucy5vcGVuKFxuICAgICAgICAgICAgICAgIFwidWkvdWlfZ2V0UmV3YXJkXCIsXG4gICAgICAgICAgICAgICAge2dvbGQ6IDEwMH0sIC8vIOWBh+WPguaVsO+8jOS8muiiq3NldHVwQ2FzaFJld2FyZOimhuebllxuICAgICAgICAgICAgICAgIHtNYXNrTm9IaWRlOiB0cnVlfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4p2MIOaJk+W8gOeOsOmHkeWlluWKseeVjOmdouWksei0pTpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBSZXdhcmRNZ3I7XG59KSgpO1xuXG4vLyDlr7zlh7rljZXkvotcbnZhciByZXdhcmRNZ3IgPSB7XG4gICAgZGVmYXVsdDogUmV3YXJkTWdyLmdldEluc3RhbmNlKClcbn07XG5cbi8vIPCfkp0g5YWo5bGA5rWL6K+V5pa55rOVXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cudGVzdENhc2hSZXdhcmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+nqiDlhajlsYDnjrDph5HlpZblirHmtYvor5XlvIDlp4suLi5cIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeeOsOmHkeS9meminTpcIiwgcmV3YXJkTWdyLmRlZmF1bHQuZ2V0Q2FzaERpc3BsYXkoKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBoYXNSZXdhcmQgPSByZXdhcmRNZ3IuZGVmYXVsdC5vblB1enpsZUNvbXBsZXRlKCdlYXN5JywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChoYXNSZXdhcmQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSDojrflvpfnjrDph5HlpZblirHvvIFcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmlrDnmoTnjrDph5HkvZnpop06XCIsIHJld2FyZE1nci5kZWZhdWx0LmdldENhc2hEaXNwbGF5KCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKtlSDmnKzmrKHmsqHmnInop6blj5HnjrDph5HlpZblirHvvIjpmo/mnLrmpoLnjoc2MCXvvIlcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlj6/ku6Xlho3mrKHosIPnlKggdGVzdENhc2hSZXdhcmQoKSDmtYvor5VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKdjCDmtYvor5XlpLHotKU6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgd2luZG93LmdldENhc2hCYWxhbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+SsCDlvZPliY3njrDph5HkvZnpop06IMKlXCIgKyByZXdhcmRNZ3IuZGVmYXVsdC5nZXRDYXNoRGlzcGxheSgpKTtcbiAgICAgICAgcmV0dXJuIHJld2FyZE1nci5kZWZhdWx0LmdldENhc2hEaXNwbGF5KCk7XG4gICAgfTtcbiAgICBcbiAgICAvLyDwn5KdIOWFqOWKn+iDvea1i+ivleaWueazlVxuICAgIHdpbmRvdy50ZXN0QWxsRmVhdHVyZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn46uIOW8gOWni+WFqOWKn+iDvea1i+ivlS4uLlwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vIDEuIOa1i+ivleeOsOmHkeWlluWKsVxuICAgICAgICBjb25zb2xlLmxvZyhcIjHvuI/ig6Mg5rWL6K+V546w6YeR5aWW5Yqx57O757ufXCIpO1xuICAgICAgICByZXdhcmRNZ3IuZGVmYXVsdC5vblB1enpsZUNvbXBsZXRlKCdleHBlcnQnLCB0cnVlKTtcbiAgICAgICAgXG4gICAgICAgIC8vIDIuIOa1i+ivleiPjOWtkOaUr+aMgea2iOaBr1xuICAgICAgICBjb25zb2xlLmxvZyhcIjLvuI/ig6Mg5rWL6K+V6I+M5a2Q5pSv5oyB5raI5oGvXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV3YXJkTWdyLmRlZmF1bHQuc2hvd0xvdmVTdXBwb3J0TWVzc2FnZSgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIDMuIOaYvuekuuW9k+WJjeeKtuaAgVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIz77iP4oOjIOW9k+WJjeeOsOmHkeS9meminTogwqVcIiArIHJld2FyZE1nci5kZWZhdWx0LmdldENhc2hEaXNwbGF5KCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUg5YWo5Yqf6IO95rWL6K+V5a6M5oiQ77yBXCIpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSByZXdhcmRNZ3IuZGVmYXVsdDsiXX0=