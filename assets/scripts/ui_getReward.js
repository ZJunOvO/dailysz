var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _res = require("res");
var _bagMgr = require("bagMgr");
var _festivalMgr = require("festivalMgr");
var _levelMgr = require("levelMgr");
var _panelMgr = require("panelMgr");
var _pInfo = require("pInfo");
var _game = require("game");
var _baseUI = require("baseUI");
var _rewardMgr = require("rewardMgr");  // 💝 现金奖励管理器
var f = cc._decorator;
var g = f.ccclass;
var y = f.property;
var m = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.rew1Lbl = null;
        e.rew2Lbl = null;
        e.rew3Lbl = null;
        e.rew4Lbl = null;
        e.adGetBtn = null;
        e.typeSps = [];
        // 💝 现金奖励状态（复用原有UI结构）
        e.hasCashReward = false;  // 是否有现金奖励
        return e;
    }
    __extends(e, t);
    e.prototype.init = function (t) {
        var e = this;
        var o = t.gold;
        this.goldNum = o;
        var n = (this.pieceNum = 1);
        
        // 💝 添加空指针保护和错误捕获
        try {
            console.log("🔍 开始Label检查...");
            if (this.rew1Lbl) this.rew1Lbl.string = "x" + o;
            if (this.rew2Lbl) this.rew2Lbl.string = "x" + n;  
            if (this.rew3Lbl) this.rew3Lbl.string = "x" + 10 * o;
            if (this.rew4Lbl) {
                this.rew4Lbl.string = "x" + 10 * n;
            } else {
                console.log("ℹ️ rew4Lbl不存在（用户已改为现金奖励单一显示）");
            }
            console.log("✅ Label设置完成 - rew1:", !!this.rew1Lbl, "rew2:", !!this.rew2Lbl, "rew3:", !!this.rew3Lbl, "rew4:", !!this.rew4Lbl);
        } catch (error) {
            console.log("❌ Label设置失败:", error);
            console.log("🔍 Label状态:", {
                rew1: !!this.rew1Lbl,
                rew2: !!this.rew2Lbl, 
                rew3: !!this.rew3Lbl,
                rew4: !!this.rew4Lbl
            });
        }
        
        this.initAdDotEvent();
        
        // 💝 检查并设置现金奖励显示
        this.setupCashReward();
        var i;
        var r = _game.default.type;
        i =
            r !== _pInfo.gameType.festival || _festivalMgr.default.ins.isJigsawMax()
                ? "puzzle_pieces"
                : "newYear_pieces";
        _res.default.ins
            .getBundleByString("resSps")
            .then(function (t) {
                t.load("item/" + i, cc.SpriteFrame, function (t, o) {
                    !t &&
                        e.node &&
                        e.node.isValid &&
                        e.typeSps.forEach(function (t) {
                            if (t && t.spriteFrame !== undefined) {
                                t.spriteFrame = o;
                            }
                        });
                });
            })
            .catch(function (t) {
                console.error("RTool.ins.getBundleByString('resSps')", t);
            });
    };
    e.prototype.tempGet = function (t) {
        var e = t ? 10 : 1;
        var o = _pInfo.default.ins.getCoin();
        _pInfo.default.ins.addCoin(this.goldNum * e);
        var n;
        n =
            _game.default.type !== _pInfo.gameType.festival || _festivalMgr.default.ins.isJigsawMax()
                ? "puzzle_pieces"
                : "newYear_pieces";
        _bagMgr.default.ins.addItem(n, e);
        var i = this.goldNum * e;
        var r = e;
        var a = this.rew1Lbl.node;
        var h = this.rew2Lbl.node;
        var f = this.node;
        var g = f.convertToWorldSpaceAR(a.position);
        var y = f.convertToWorldSpaceAR(h.position);
        _panelMgr.default.ins.open("ui/ui_flyAni", {
            itemDatas: [
                {itemId: "coin", worldPos: g, value: i},
                {itemId: n, worldPos: y, value: r}
            ],
            hideCb: function () {
                _pInfo.chgScene(_pInfo.sceneType.main, {cb: _levelMgr.default.ins.updJigAndPop});
            },
            showCoin: o
        });
        this.hideThis();
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    e.prototype.onGet = function () {
        // 💝 检查是否为现金奖励模式
        if (this.hasCashReward) {
            // 现金奖励模式下，单倍也是领取现金
            console.log("💰 领取单倍现金奖励: ¥" + this.cashAmount);
            
            // 💝 现金在游戏完成时已经添加了，这里只是确认领取
            try {
                if (typeof window !== 'undefined' && window.alert) {
                    window.alert("💝 卷卷领取了￥" + this.cashAmount + "现金奖励！棒棒哒！");
                }
            } catch (alertError) {
                console.log("Alert显示失败:", alertError);
            }
            
            _rewardMgr.default.showLoveSupportMessage();
            _rewardMgr.default.clearCashRewardFlag();
            this.hideThis();
        } else {
            // 💝 如果不是现金奖励但有待处理标记，也要清除
            if (_rewardMgr.default.hasPendingCashReward()) {
                _rewardMgr.default.clearCashRewardFlag();
            }
            this.tempGet(!1);
        }
    };
    e.prototype.onAdGet = function () {
        console.log("🔘 点击领取奖金按钮");
        console.log("🔍 当前hasCashReward状态:", this.hasCashReward);
        console.log("🔍 当前cashAmount:", this.cashAmount);
        
        // 💝 检查是否为现金奖励模式
        if (this.hasCashReward) {
            console.log("💰 执行现金奖励逻辑");
            this.onGetCashReward();
        } else {
            console.log("🎮 执行游戏道具奖励逻辑");
            this.tempGet(!0);
        }
    };
    e.prototype.initAdDotEvent = function () {
        _game.default.type !== _pInfo.gameType.festival || _festivalMgr.default.ins.isJigsawMax()
            ? (this.adGetBtn.node.adDotData = "主线十倍奖励")
            : (this.adGetBtn.node.adDotData = "活动十倍奖励");
    };

    // 💝 设置现金奖励显示（复用原有UI结构）
    e.prototype.setupCashReward = function() {
        try {
            console.log("🔍 开始检查现金奖励...");
            // 检查是否刚刚获得了现金奖励
            var hasRecentReward = _rewardMgr.default.getLastRewardInfo();
            console.log("🎯 getLastRewardInfo返回:", hasRecentReward);
            
            if (hasRecentReward) {
                console.log("💰 检测到现金奖励: ¥" + hasRecentReward.amount);
                
                // 设置现金奖励状态
                this.hasCashReward = true;
                this.cashAmount = hasRecentReward.amount;
                
                // 修改现金奖励显示（用户已将右侧改为单一现金奖励显示）
                if (this.rew3Lbl) {
                    this.rew3Lbl.string = "+¥" + hasRecentReward.amount;
                    console.log("💰 rew3Lbl设置为现金奖励: +¥" + hasRecentReward.amount);
                }
                // rew4Lbl已删除，不再设置
                
                console.log("✅ 现金奖励UI已设置: " + (this.rew3Lbl ? this.rew3Lbl.string : "rew3Lbl未绑定"));
                console.log("✅ hasCashReward状态:", this.hasCashReward);
                console.log("✅ cashAmount:", this.cashAmount);
            } else {
                console.log("💰 无现金奖励，使用原有逻辑");
                this.hasCashReward = false;
                // 恢复原有的游戏道具显示逻辑已经在init中处理了
            }
        } catch (error) {
            console.log("❌ 设置现金奖励失败:", error);
            this.hasCashReward = false;
        }
    };

    // 💝 领取现金奖励
    e.prototype.onGetCashReward = function() {
        try {
            console.log("💰 点击领取现金奖励: ¥" + this.cashAmount);
            
            // 💝 现金在游戏完成时已经添加了，这里只是确认领取
            
            // 显示奖励领取成功提示
            try {
                if (typeof window !== 'undefined' && window.alert) {
                    window.alert("🎉 恭喜卷卷！￥" + this.cashAmount + "现金奖励已成功领取！");
                } else {
                    var _tipMgr = require("tipMgr");
                    _tipMgr.default.ins.showTip("卷卷获得￥" + this.cashAmount + "奖励！", false);
                }
            } catch (tipError) {
                console.log("提示显示失败:", tipError);
            }
            
            // 显示菌子支持消息
            _rewardMgr.default.showLoveSupportMessage();
            
            // 💝 清除现金奖励标记，防止第二次弹窗
            _rewardMgr.default.clearCashRewardFlag();
            
            // 关闭弹窗
            this.hideThis();
            
            console.log("🎉 现金奖励确认完成！（余额已在游戏完成时更新）");
            
        } catch (error) {
            console.log("❌ 领取现金奖励失败:", error);
        }
    };
    __decorate([y(cc.Label)], e.prototype, "rew1Lbl", void 0);
    __decorate([y(cc.Label)], e.prototype, "rew2Lbl", void 0);
    __decorate([y(cc.Label)], e.prototype, "rew3Lbl", void 0);
    __decorate([y(cc.Label)], e.prototype, "rew4Lbl", void 0);
    __decorate([y(cc.Button)], e.prototype, "adGetBtn", void 0);
    __decorate([y([cc.Sprite])], e.prototype, "typeSps", void 0);
    return __decorate([g], e);
})(_baseUI.default);
exports.default = m;
