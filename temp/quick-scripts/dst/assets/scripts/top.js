
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7643aDbU1EEpPuHwYX4LLj', 'top');
// scripts/top.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _idx = require("idx");

var _mySafeArea = require("mySafeArea");

var _pConst = require("pConst");

var _res = require("res");

var _time = require("time");

var _uData = require("uData");

var _cfgMgr = require("cfgMgr");

var _lang = require("lang");

var _global = require("global");

var _mailMgr = require("mailMgr");

var _panelMgr = require("panelMgr");

var _taskMgr = require("taskMgr");

var _pInfo = require("pInfo");

var _head = require("head");

var _rewardMgr = require("rewardMgr");

var w = cc._decorator;
var S = w.ccclass;
var T = w.property;
var I = Math.floor;
var D = Math.ceil;

var P = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.countDownNode = null;
    e.coinLbl = null;
    e.cashLbl = null;
    e.powerLbl = null;
    e.powerCdLbl = null;
    e.powerSp = null;
    e.sidebarNode = null;
    e.desktopNode = null;
    e.newGiftBtn = null;
    e.newGiftBtnLight = null;
    e.friendRankBtn = null;
    e.clearBtn = null;
    e.sidebarRedPointNode = null;
    e.mailRedPointLbl = null;
    e.txt_name = null;
    e.deskLb = null;
    e.saveBtn = null;
    e.signRedLb = null;
    e.headComp = null;
    e.serviceNode = null;
    e.taskRedLb = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    console.log("🎮 Top组件onLoad开始");
    this.updateDesktop();
    this.updateSidebar();
    this.updateMail();
    this.updateCoin(); // 💝 游戏进入时立即更新现金余额显示

    console.log("🎮 准备调用updateCash，cashLbl状态:", !!this.cashLbl);
    this.scheduleOnce(this.updateCash.bind(this), 0.1);
    console.log("🎮 scheduleOnce updateCash已设置"); // 💝 多次尝试更新，确保绑定成功后能更新

    this.scheduleOnce(this.updateCash.bind(this), 0.5);
    this.scheduleOnce(this.updateCash.bind(this), 1.0);
    this.updatePower();
    this.upChapter();
    this.loadNewGift();
    this.updateNewGift();
    this.updateHead();
    this.updateFriendRank();
    this.updateSignRed();
    this.upserviceNode();
    this.upDTaskRed();

    _evts["default"].opE.on(this.onOperTap.bind(this));

    _evts["default"].plE.on(this.onOperTap2.bind(this));

    this.clearBtn.destroy();
  };

  e.prototype.start = function () {
    var t = this;
    this.scheduleOnce(function () {
      if (t.node.y -= _mySafeArea.getSafeAreaRect().yMin, t.node.removeComponent(cc.Widget), _global["default"].padScale) {
        var e = (cc.view.getVisibleSize().width - 720) / 2;
        t.node.children[0].x -= e;
        t.node.children[1].x += e;
      } // 💝 UI初始化完成

    });
  };

  e.prototype.onOperTap = function (t) {
    var e = null == t ? void 0 : t.action;
    if (e) switch (e) {
      case _evts["default"].COIN_CHG:
        this.updateCoin();
        break;

      case 'CASH_CHG':
        // 💝 现金余额UI更新
        this.updateCash();
        console.log("💰 卷卷的现金余额更新了: ￥" + _rewardMgr["default"].getCashDisplay());
        break;

      case _evts["default"].POWER_CHG:
        this.updatePower();
        break;

      case _evts["default"].Slider_Chg:
        this.updateSidebar();
        break;

      case _evts["default"].UPDMAIL:
        this.updateMail();
        break;

      case _evts["default"].UPD_NEW_GIFT:
        this.updateNewGift();
        break;

      case _evts["default"].UPD_TOP_HEADINFO:
        this.updateHead();
        break;

      case _evts["default"].ADD_DESKTOP:
        this.addDesktopCb(t.data);
        break;

      case _evts["default"].ALIPAY_MAIN:
        this.getDesktopReward();

      case _evts["default"].Desktop_Chg:
        this.updateDesktop();
        break;

      case _evts["default"].SIGN_RED:
        this.updateSignRed();
        break;

      case _evts["default"].UPD_MAIN_RED:
        this.upDTaskRed();
    }
  };

  e.prototype.onOperTap2 = function (t) {
    t && (t.onHide && this.pause(), t.onShow && this.updatePower());
  };

  e.prototype.updateSignRed = function () {
    this.signRedLb.node.parent.parent.active = !1;
  };

  e.prototype.upDTaskRed = function () {
    var t = _taskMgr["default"].getUnFinishNum();

    var e = this.taskRedLb;
    e && (t > 0 ? (e.node.parent.active = !0, e.string = t + "", e.node.x = _global["default"].getCharXOffset(e.string)) : e.node.parent.active = !1);
  };

  e.prototype.upserviceNode = function () {
    if (this.serviceNode.active = !1, _idx.platform.string() == _pConst.PFCode.Bytedance) {
      var t = _idx.platform.getSystemData();

      t && ("Douyin" != t.appName && "douyin_lite" != t.appName || (this.serviceNode.active = !0));
    }
  };

  e.prototype.updateDesktop = function () {
    var t;
    var e;

    switch (_idx.platform.string()) {
      case _pConst.PFCode.Bytedance:
        if (this.desktopNode.active = !0, _pInfo["default"].ins.getAddDesk()) this.deskLb.node.parent.active = !1;else {
          var o = (null === (e = null === (t = _cfgMgr["default"].serverCfg.add_desktop) || void 0 === t ? void 0 : t.rules) || void 0 === e ? void 0 : e.times) || 50;
          this.deskLb.string = "+" + o;
          this.deskLb.node.parent.active = !0;
        }
        break;

      case _pConst.PFCode.Alipay:
        0 === _uData["default"].ins.getLocalData().aliAddHome || _idx.platform.cDeskCatch ? this.desktopNode.active = !1 : this.desktopNode.active = !0;
        break;

      default:
        this.desktopNode.active = !1;
    }
  };

  e.prototype.updateSidebar = function () {
    this.sidebarNode.active = _idx.platform.sidebarExist;
    var t = _idx.platform.bySlider && !_pInfo["default"].ins.getIsGetSlider();
    this.sidebarRedPointNode.active = t;
    t && this.scheduleOnce(function () {
      _panelMgr["default"].ins.open("ui/ui_sidebar", null);
    });
  };

  e.prototype.updateMail = function () {
    var t = this;

    _mailMgr["default"].ins.getMail(function (e) {
      var o = 0;
      var n = t.mailRedPointLbl;

      if (n && n.isValid) {
        if (e && e.errMsg && "error" === e.errMsg) return void (t.mailRedPointLbl.node.parent.active = !1);

        for (var i in _mailMgr["default"].ins.mailInfo.mail) {
          _mailMgr["default"].ins.mailInfo.mail[i] == _mailMgr.mailState.noRead && o++;
        }

        t.mailRedPointLbl.string = o + "";
        t.mailRedPointLbl.node.parent.active = o > 0;
      }
    });
  };

  e.prototype.updateFriendRank = function () {
    this.friendRankBtn.active = _idx.platform.string() == _pConst.PFCode.Bytedance;
  };

  e.prototype.updateCoin = function () {
    this.coinLbl.string = _pInfo["default"].ins.getCoin() + "";
  };

  e.prototype.updateCash = function () {
    var cashDisplay = _rewardMgr["default"].getCashDisplay();

    console.log("🔍 updateCash调用 - cashLbl存在:", !!this.cashLbl, "现金余额:", cashDisplay);
    console.log("🔍 cashLbl详细信息:", this.cashLbl);

    if (this.cashLbl) {
      console.log("🔍 更新前卷卷现金显示:", this.cashLbl.string);
      this.cashLbl.string = cashDisplay;
      console.log("🔍 更新后卷卷现金显示:", this.cashLbl.string);
      console.log("✅ 卷卷的现金余额UI已更新: ￥" + cashDisplay);
    } else {
      console.log("❌ cashLbl未绑定！需要在Cocos Creator编辑器中将现金Label绑定到cashLbl属性");
      console.log("💰 卷卷的现金余额数据正常: ￥" + cashDisplay + " (但UI无法显示)");
    }
  };

  e.prototype.updatePower = function () {
    this.schedule(this._updatePower, 1, cc.macro.REPEAT_FOREVER);

    this._updatePower();
  };

  e.prototype.pause = function () {
    this.unschedule(this._updatePower);
  };

  e.prototype.loadNewGift = function () {
    var t = this;

    _res["default"].ins.getBundleByString("resSps").then(function (e) {
      e.load("spine/light/action", sp.SkeletonData, function (e, o) {
        if (!e && t.node && t.node.isValid) {
          var n = new cc.Node();
          var i = n.addComponent(sp.Skeleton);
          i.skeletonData = o, i.animation = "animation", n.parent = t.newGiftBtn;
        }
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('resSps')", t);
    });

    cc.tween(this.newGiftBtnLight).by(3, {
      angle: -360
    }).repeatForever().start();
    cc.tween(this.newGiftBtn).sequence(cc.tween().to(1, {
      scale: 0.9
    }), cc.tween().to(1, {
      scale: 1
    })).repeatForever().start();
  };

  e.prototype.updateNewGift = function () {
    this.newGiftBtn.active = this.newGiftBtnLight.active = !1;
  };

  e.prototype.updateHead = function () {
    var t = _uData["default"].ins.getName() || "卷卷大王";
    t.length > 7 && (t = t.substring(0, 6) + "...");
    this.txt_name.string = t;

    var e = _uData["default"].ins.getHeadImg();

    this.headComp.loadHeadImg(e);
  };

  e.prototype.upChapter = function () {};

  e.prototype._updatePower = function () {
    if (this.isValid) {
      var t = _pInfo["default"].ins;

      var e = t.getPowerFullTime() - _time["default"].ins.serverTime;

      var o = t.getPower();
      var n = o;
      var i = e > 0;
      var r = _cfgMgr["default"].serverCfg.times.forUser;
      var a = (_uData["default"].ins.getIsNewUser() ? r.new_user.rules.basic_times.val : r.all.rules.basic_times.val) || 100;

      if (i) {
        var s = t.getPerPowerNeedTime();
        n = a - D(e / s);
        var c = e % s;
        var l = I(c / 60);
        var u = I(c % 60);
        var f = l < 10 ? "0" : "";
        var g = u < 10 ? "0" : "";
        this.powerCdLbl.string = f + l + ":" + g + u;
      } else n < a && (n = a), this.unschedule(this._updatePower), _pInfo["default"].ins.setPowerFullTime(0);

      this.countDownNode.active = i;
      n != o && t.setPower(n);
      this.powerLbl.string = n + "/" + a;
    }
  };

  e.prototype.onBtnGetPower = function () {
    _panelMgr["default"].ins.open("ui/ui_getRes", {
      itemId: "times"
    });
  };

  e.prototype.onBtnSet = function () {
    _panelMgr["default"].ins.open("ui/ui_set", null);
  };

  e.prototype.onBtnRecord = function () {
    _panelMgr["default"].ins.open("ui/ui_record", null);
  };

  e.prototype.onBtnRank = function () {
    _panelMgr["default"].ins.open("ui/ui_rank", null);
  };

  e.prototype.onBtnGetCoin = function () {
    _panelMgr["default"].ins.open("ui/ui_getRes", {
      itemId: "coin",
      gType: _pInfo.gameType.normal,
      useTo: _lang.getCoinFor.Main
    });
  };

  e.prototype.onBtnGetCash = function () {
    // 💝 手动测试现金奖励功能（已暂时注释）

    /*
    try {
        console.log("🧪 开始现金奖励测试...");
        
        // 显示当前现金余额
        console.log("当前现金余额:", _rewardMgr.default.getCashDisplay());
        
        // 触发现金奖励（手动测试模式）
        var hasReward = _rewardMgr.default.onPuzzleComplete('easy', true, true);
        
        if (hasReward) {
            console.log("✅ 获得现金奖励！");
            console.log("新的现金余额:", _rewardMgr.default.getCashDisplay());
        } else {
            console.log("⭕ 本次没有触发现金奖励（随机概率）");
        }
        
    } catch (error) {
        console.log("❌ 现金奖励测试失败:", error);
        console.error(error);
    }
    */
    console.log("💝 现金奖励手动测试已暂时禁用");
  };

  e.prototype.onBtnChapter = function () {
    _panelMgr["default"].ins.open("ui/ui_chapter", null);
  };

  e.prototype.onBtnSidebar = function () {
    _panelMgr["default"].ins.open("ui/ui_sidebar", null);
  };

  e.prototype.onBtnEmail = function () {
    _panelMgr["default"].ins.open("ui/ui_mail", null);
  };

  e.prototype.onBtnTip = function () {
    _panelMgr["default"].ins.open("ui/ui_raceTip", {
      pageIdx: 0
    });
  };

  e.prototype.onBtnNewGift = function () {
    _panelMgr["default"].ins.open("ui/ui_newGift", {
      hideCb: null
    });
  };

  e.prototype.onBtnDesktop = function () {
    var t;

    switch (_idx.platform.string()) {
      case _pConst.PFCode.Bytedance:
        _idx.platform.addShortcut();

        break;

      case _pConst.PFCode.Alipay:
        null === (t = _idx.platform.addGamesetlattice) || void 0 === t || t.call(_idx.platform);
    }
  };

  e.prototype.onBtnFriendRank = function () {
    _idx.platform.showFriendRank(_pConst.SDKConfig.ttZoneId.normal);
  };

  e.prototype.onBtnSkin = function () {
    _panelMgr["default"].ins.open("ui/ui_skin", null);
  };

  e.prototype.onBtnSave = function () {
    _panelMgr["default"].ins.open("ui/ui_save", null);
  };

  e.prototype.onBtnSign = function () {
    _panelMgr["default"].ins.open("ui/ui_sevenDay", null);
  };

  e.prototype.onBtnQuest = function () {
    _panelMgr["default"].ins.open("ui/ui_quest", null);
  };

  e.prototype.onBtnService = function () {
    if (_idx.platform.string() == _pConst.PFCode.Bytedance) {
      var t = _idx.platform.getSystemData();

      if (t) {
        var e = 0;

        switch (t.appName) {
          case "Douyin":
            e = 2;
            break;

          case "douyin_lite":
            e = 1;
        }

        e && _idx.platform.openService(e);
      }
    }
  };

  e.prototype.onTest = function () {
    _pInfo["default"].ins.clearDailyData();
  }; // 💝 现金奖励测试方法（通过开发者控制台调用）


  e.prototype.testCashRewardSystem = function () {
    try {
      console.log("🧪=== 现金奖励系统测试开始 ===");
      console.log("当前现金余额:", _rewardMgr["default"].getCashDisplay()); // 测试不同难度

      var difficulties = ['beginner', 'easy', 'medium', 'hard', 'expert'];
      var testResults = [];

      for (var i = 0; i < difficulties.length; i++) {
        var difficulty = difficulties[i];

        var beforeBalance = _rewardMgr["default"].getCash();

        var hasReward = _rewardMgr["default"].onPuzzleComplete(difficulty, true);

        var afterBalance = _rewardMgr["default"].getCash();

        if (hasReward) {
          var rewardAmount = afterBalance - beforeBalance;
          console.log("✅", difficulty, "难度获得奖励:", (rewardAmount / 100).toFixed(2), "元");
          testResults.push({
            difficulty: difficulty,
            reward: rewardAmount
          });
        } else {
          console.log("⭕", difficulty, "难度没有触发奖励");
        }
      }

      console.log("🏆 测试完成！总余额:", _rewardMgr["default"].getCashDisplay());
      console.log("📊 获得奖励的测试:", testResults);
    } catch (error) {
      console.log("❌ 测试失败:", error);
      console.error(error);
    }
  };

  e.prototype.addDesktopCb = function (t) {
    var e = _pInfo["default"].ins.getAddDesk();

    t && !e && (_pInfo["default"].ins.setAddDesk(!0), this.getDesktopReward(), this.updateDesktop());
  };

  e.prototype.getDesktopReward = function () {
    var t;
    var e;
    var o = (null === (e = null === (t = _cfgMgr["default"].serverCfg.add_desktop) || void 0 === t ? void 0 : t.rules) || void 0 === e ? void 0 : e.times) || 50;

    _pInfo["default"].ins.addPower(o);

    var n = this.desktopNode.isValid ? this.desktopNode.position : this.deskTopNodePos;
    var i = this.node.convertToWorldSpaceAR(n);

    _panelMgr["default"].ins.open("ui/ui_flyAni", {
      itemDatas: [{
        itemId: "times",
        worldPos: i,
        value: o
      }]
    });
  };

  __decorate([T(cc.Node)], e.prototype, "countDownNode", void 0);

  __decorate([T(cc.Label)], e.prototype, "coinLbl", void 0);

  __decorate([T(cc.Label)], e.prototype, "cashLbl", void 0);

  __decorate([T(cc.Label)], e.prototype, "powerLbl", void 0);

  __decorate([T(cc.Label)], e.prototype, "powerCdLbl", void 0);

  __decorate([T(cc.Sprite)], e.prototype, "powerSp", void 0);

  __decorate([T(cc.Node)], e.prototype, "sidebarNode", void 0);

  __decorate([T(cc.Node)], e.prototype, "desktopNode", void 0);

  __decorate([T(cc.Node)], e.prototype, "newGiftBtn", void 0);

  __decorate([T(cc.Node)], e.prototype, "newGiftBtnLight", void 0);

  __decorate([T(cc.Node)], e.prototype, "friendRankBtn", void 0);

  __decorate([T(cc.Node)], e.prototype, "clearBtn", void 0);

  __decorate([T(cc.Node)], e.prototype, "sidebarRedPointNode", void 0);

  __decorate([T(cc.Label)], e.prototype, "mailRedPointLbl", void 0);

  __decorate([T(cc.Label)], e.prototype, "txt_name", void 0);

  __decorate([T(cc.Label)], e.prototype, "deskLb", void 0);

  __decorate([T(cc.Node)], e.prototype, "saveBtn", void 0);

  __decorate([T(cc.Label)], e.prototype, "signRedLb", void 0);

  __decorate([T(_head["default"])], e.prototype, "headComp", void 0);

  __decorate([T(cc.Node)], e.prototype, "serviceNode", void 0);

  __decorate([T(cc.Label)], e.prototype, "taskRedLb", void 0);

  return __decorate([S], e);
}(cc.Component);

exports["default"] = P;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdG9wLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9ldnRzIiwicmVxdWlyZSIsIl9pZHgiLCJfbXlTYWZlQXJlYSIsIl9wQ29uc3QiLCJfcmVzIiwiX3RpbWUiLCJfdURhdGEiLCJfY2ZnTWdyIiwiX2xhbmciLCJfZ2xvYmFsIiwiX21haWxNZ3IiLCJfcGFuZWxNZ3IiLCJfdGFza01nciIsIl9wSW5mbyIsIl9oZWFkIiwiX3Jld2FyZE1nciIsInciLCJjYyIsIl9kZWNvcmF0b3IiLCJTIiwiY2NjbGFzcyIsIlQiLCJwcm9wZXJ0eSIsIkkiLCJNYXRoIiwiZmxvb3IiLCJEIiwiY2VpbCIsIlAiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiY291bnREb3duTm9kZSIsImNvaW5MYmwiLCJjYXNoTGJsIiwicG93ZXJMYmwiLCJwb3dlckNkTGJsIiwicG93ZXJTcCIsInNpZGViYXJOb2RlIiwiZGVza3RvcE5vZGUiLCJuZXdHaWZ0QnRuIiwibmV3R2lmdEJ0bkxpZ2h0IiwiZnJpZW5kUmFua0J0biIsImNsZWFyQnRuIiwic2lkZWJhclJlZFBvaW50Tm9kZSIsIm1haWxSZWRQb2ludExibCIsInR4dF9uYW1lIiwiZGVza0xiIiwic2F2ZUJ0biIsInNpZ25SZWRMYiIsImhlYWRDb21wIiwic2VydmljZU5vZGUiLCJ0YXNrUmVkTGIiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlRGVza3RvcCIsInVwZGF0ZVNpZGViYXIiLCJ1cGRhdGVNYWlsIiwidXBkYXRlQ29pbiIsInNjaGVkdWxlT25jZSIsInVwZGF0ZUNhc2giLCJiaW5kIiwidXBkYXRlUG93ZXIiLCJ1cENoYXB0ZXIiLCJsb2FkTmV3R2lmdCIsInVwZGF0ZU5ld0dpZnQiLCJ1cGRhdGVIZWFkIiwidXBkYXRlRnJpZW5kUmFuayIsInVwZGF0ZVNpZ25SZWQiLCJ1cHNlcnZpY2VOb2RlIiwidXBEVGFza1JlZCIsIm9wRSIsIm9uIiwib25PcGVyVGFwIiwicGxFIiwib25PcGVyVGFwMiIsImRlc3Ryb3kiLCJzdGFydCIsIm5vZGUiLCJ5IiwiZ2V0U2FmZUFyZWFSZWN0IiwieU1pbiIsInJlbW92ZUNvbXBvbmVudCIsIldpZGdldCIsInBhZFNjYWxlIiwidmlldyIsImdldFZpc2libGVTaXplIiwid2lkdGgiLCJjaGlsZHJlbiIsIngiLCJhY3Rpb24iLCJDT0lOX0NIRyIsImdldENhc2hEaXNwbGF5IiwiUE9XRVJfQ0hHIiwiU2xpZGVyX0NoZyIsIlVQRE1BSUwiLCJVUERfTkVXX0dJRlQiLCJVUERfVE9QX0hFQURJTkZPIiwiQUREX0RFU0tUT1AiLCJhZGREZXNrdG9wQ2IiLCJkYXRhIiwiQUxJUEFZX01BSU4iLCJnZXREZXNrdG9wUmV3YXJkIiwiRGVza3RvcF9DaGciLCJTSUdOX1JFRCIsIlVQRF9NQUlOX1JFRCIsIm9uSGlkZSIsInBhdXNlIiwib25TaG93IiwicGFyZW50IiwiYWN0aXZlIiwiZ2V0VW5GaW5pc2hOdW0iLCJzdHJpbmciLCJnZXRDaGFyWE9mZnNldCIsInBsYXRmb3JtIiwiUEZDb2RlIiwiQnl0ZWRhbmNlIiwiZ2V0U3lzdGVtRGF0YSIsImFwcE5hbWUiLCJpbnMiLCJnZXRBZGREZXNrIiwibyIsInNlcnZlckNmZyIsImFkZF9kZXNrdG9wIiwicnVsZXMiLCJ0aW1lcyIsIkFsaXBheSIsImdldExvY2FsRGF0YSIsImFsaUFkZEhvbWUiLCJjRGVza0NhdGNoIiwic2lkZWJhckV4aXN0IiwiYnlTbGlkZXIiLCJnZXRJc0dldFNsaWRlciIsIm9wZW4iLCJnZXRNYWlsIiwiaXNWYWxpZCIsImVyck1zZyIsImkiLCJtYWlsSW5mbyIsIm1haWwiLCJtYWlsU3RhdGUiLCJub1JlYWQiLCJnZXRDb2luIiwiY2FzaERpc3BsYXkiLCJzY2hlZHVsZSIsIl91cGRhdGVQb3dlciIsIm1hY3JvIiwiUkVQRUFUX0ZPUkVWRVIiLCJ1bnNjaGVkdWxlIiwiZ2V0QnVuZGxlQnlTdHJpbmciLCJ0aGVuIiwibG9hZCIsInNwIiwiU2tlbGV0b25EYXRhIiwiTm9kZSIsImFkZENvbXBvbmVudCIsIlNrZWxldG9uIiwic2tlbGV0b25EYXRhIiwiYW5pbWF0aW9uIiwiZXJyb3IiLCJ0d2VlbiIsImJ5IiwiYW5nbGUiLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJ0byIsInNjYWxlIiwiZ2V0TmFtZSIsImxlbmd0aCIsInN1YnN0cmluZyIsImdldEhlYWRJbWciLCJsb2FkSGVhZEltZyIsImdldFBvd2VyRnVsbFRpbWUiLCJzZXJ2ZXJUaW1lIiwiZ2V0UG93ZXIiLCJyIiwiZm9yVXNlciIsImEiLCJnZXRJc05ld1VzZXIiLCJuZXdfdXNlciIsImJhc2ljX3RpbWVzIiwidmFsIiwiYWxsIiwicyIsImdldFBlclBvd2VyTmVlZFRpbWUiLCJjIiwibCIsInUiLCJmIiwiZyIsInNldFBvd2VyRnVsbFRpbWUiLCJzZXRQb3dlciIsIm9uQnRuR2V0UG93ZXIiLCJpdGVtSWQiLCJvbkJ0blNldCIsIm9uQnRuUmVjb3JkIiwib25CdG5SYW5rIiwib25CdG5HZXRDb2luIiwiZ1R5cGUiLCJnYW1lVHlwZSIsIm5vcm1hbCIsInVzZVRvIiwiZ2V0Q29pbkZvciIsIk1haW4iLCJvbkJ0bkdldENhc2giLCJvbkJ0bkNoYXB0ZXIiLCJvbkJ0blNpZGViYXIiLCJvbkJ0bkVtYWlsIiwib25CdG5UaXAiLCJwYWdlSWR4Iiwib25CdG5OZXdHaWZ0IiwiaGlkZUNiIiwib25CdG5EZXNrdG9wIiwiYWRkU2hvcnRjdXQiLCJhZGRHYW1lc2V0bGF0dGljZSIsImNhbGwiLCJvbkJ0bkZyaWVuZFJhbmsiLCJzaG93RnJpZW5kUmFuayIsIlNES0NvbmZpZyIsInR0Wm9uZUlkIiwib25CdG5Ta2luIiwib25CdG5TYXZlIiwib25CdG5TaWduIiwib25CdG5RdWVzdCIsIm9uQnRuU2VydmljZSIsIm9wZW5TZXJ2aWNlIiwib25UZXN0IiwiY2xlYXJEYWlseURhdGEiLCJ0ZXN0Q2FzaFJld2FyZFN5c3RlbSIsImRpZmZpY3VsdGllcyIsInRlc3RSZXN1bHRzIiwiZGlmZmljdWx0eSIsImJlZm9yZUJhbGFuY2UiLCJnZXRDYXNoIiwiaGFzUmV3YXJkIiwib25QdXp6bGVDb21wbGV0ZSIsImFmdGVyQmFsYW5jZSIsInJld2FyZEFtb3VudCIsInRvRml4ZWQiLCJwdXNoIiwicmV3YXJkIiwic2V0QWRkRGVzayIsImFkZFBvd2VyIiwicG9zaXRpb24iLCJkZXNrVG9wTm9kZVBvcyIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsIml0ZW1EYXRhcyIsIndvcmxkUG9zIiwiX19kZWNvcmF0ZSIsIkxhYmVsIiwiU3ByaXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBLElBQUlDLEtBQUssR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBbkI7O0FBQ0EsSUFBSUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsS0FBRCxDQUFsQjs7QUFDQSxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxZQUFELENBQXpCOztBQUNBLElBQUlHLE9BQU8sR0FBR0gsT0FBTyxDQUFDLFFBQUQsQ0FBckI7O0FBQ0EsSUFBSUksSUFBSSxHQUFHSixPQUFPLENBQUMsS0FBRCxDQUFsQjs7QUFDQSxJQUFJSyxLQUFLLEdBQUdMLE9BQU8sQ0FBQyxNQUFELENBQW5COztBQUNBLElBQUlNLE1BQU0sR0FBR04sT0FBTyxDQUFDLE9BQUQsQ0FBcEI7O0FBQ0EsSUFBSU8sT0FBTyxHQUFHUCxPQUFPLENBQUMsUUFBRCxDQUFyQjs7QUFDQSxJQUFJUSxLQUFLLEdBQUdSLE9BQU8sQ0FBQyxNQUFELENBQW5COztBQUNBLElBQUlTLE9BQU8sR0FBR1QsT0FBTyxDQUFDLFFBQUQsQ0FBckI7O0FBQ0EsSUFBSVUsUUFBUSxHQUFHVixPQUFPLENBQUMsU0FBRCxDQUF0Qjs7QUFDQSxJQUFJVyxTQUFTLEdBQUdYLE9BQU8sQ0FBQyxVQUFELENBQXZCOztBQUNBLElBQUlZLFFBQVEsR0FBR1osT0FBTyxDQUFDLFNBQUQsQ0FBdEI7O0FBQ0EsSUFBSWEsTUFBTSxHQUFHYixPQUFPLENBQUMsT0FBRCxDQUFwQjs7QUFDQSxJQUFJYyxLQUFLLEdBQUdkLE9BQU8sQ0FBQyxNQUFELENBQW5COztBQUNBLElBQUllLFVBQVUsR0FBR2YsT0FBTyxDQUFDLFdBQUQsQ0FBeEI7O0FBQ0EsSUFBSWdCLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjtBQUNBLElBQUlDLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFiO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHRixJQUFJLENBQUNHLElBQWI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLGFBQUYsR0FBa0IsSUFBbEI7SUFDQUgsQ0FBQyxDQUFDSSxPQUFGLEdBQVksSUFBWjtJQUNBSixDQUFDLENBQUNLLE9BQUYsR0FBWSxJQUFaO0lBQ0FMLENBQUMsQ0FBQ00sUUFBRixHQUFhLElBQWI7SUFDQU4sQ0FBQyxDQUFDTyxVQUFGLEdBQWUsSUFBZjtJQUNBUCxDQUFDLENBQUNRLE9BQUYsR0FBWSxJQUFaO0lBQ0FSLENBQUMsQ0FBQ1MsV0FBRixHQUFnQixJQUFoQjtJQUNBVCxDQUFDLENBQUNVLFdBQUYsR0FBZ0IsSUFBaEI7SUFDQVYsQ0FBQyxDQUFDVyxVQUFGLEdBQWUsSUFBZjtJQUNBWCxDQUFDLENBQUNZLGVBQUYsR0FBb0IsSUFBcEI7SUFDQVosQ0FBQyxDQUFDYSxhQUFGLEdBQWtCLElBQWxCO0lBQ0FiLENBQUMsQ0FBQ2MsUUFBRixHQUFhLElBQWI7SUFDQWQsQ0FBQyxDQUFDZSxtQkFBRixHQUF3QixJQUF4QjtJQUNBZixDQUFDLENBQUNnQixlQUFGLEdBQW9CLElBQXBCO0lBQ0FoQixDQUFDLENBQUNpQixRQUFGLEdBQWEsSUFBYjtJQUNBakIsQ0FBQyxDQUFDa0IsTUFBRixHQUFXLElBQVg7SUFDQWxCLENBQUMsQ0FBQ21CLE9BQUYsR0FBWSxJQUFaO0lBQ0FuQixDQUFDLENBQUNvQixTQUFGLEdBQWMsSUFBZDtJQUNBcEIsQ0FBQyxDQUFDcUIsUUFBRixHQUFhLElBQWI7SUFDQXJCLENBQUMsQ0FBQ3NCLFdBQUYsR0FBZ0IsSUFBaEI7SUFDQXRCLENBQUMsQ0FBQ3VCLFNBQUYsR0FBYyxJQUFkO0lBQ0EsT0FBT3ZCLENBQVA7RUFDSDs7RUFDRHdCLFNBQVMsQ0FBQ3hCLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUN5QixTQUFGLENBQVlDLE1BQVosR0FBcUIsWUFBWTtJQUM3QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7SUFDQSxLQUFLQyxhQUFMO0lBQ0EsS0FBS0MsYUFBTDtJQUNBLEtBQUtDLFVBQUw7SUFDQSxLQUFLQyxVQUFMLEdBTDZCLENBTTdCOztJQUNBTCxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWixFQUE0QyxDQUFDLENBQUMsS0FBS3ZCLE9BQW5EO0lBQ0EsS0FBSzRCLFlBQUwsQ0FBa0IsS0FBS0MsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEIsRUFBOEMsR0FBOUM7SUFDQVIsT0FBTyxDQUFDQyxHQUFSLENBQVksK0JBQVosRUFUNkIsQ0FXN0I7O0lBQ0EsS0FBS0ssWUFBTCxDQUFrQixLQUFLQyxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixJQUFyQixDQUFsQixFQUE4QyxHQUE5QztJQUNBLEtBQUtGLFlBQUwsQ0FBa0IsS0FBS0MsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEIsRUFBOEMsR0FBOUM7SUFDQSxLQUFLQyxXQUFMO0lBQ0EsS0FBS0MsU0FBTDtJQUNBLEtBQUtDLFdBQUw7SUFDQSxLQUFLQyxhQUFMO0lBQ0EsS0FBS0MsVUFBTDtJQUNBLEtBQUtDLGdCQUFMO0lBQ0EsS0FBS0MsYUFBTDtJQUNBLEtBQUtDLGFBQUw7SUFDQSxLQUFLQyxVQUFMOztJQUNBM0UsS0FBSyxXQUFMLENBQWM0RSxHQUFkLENBQWtCQyxFQUFsQixDQUFxQixLQUFLQyxTQUFMLENBQWVaLElBQWYsQ0FBb0IsSUFBcEIsQ0FBckI7O0lBQ0FsRSxLQUFLLFdBQUwsQ0FBYytFLEdBQWQsQ0FBa0JGLEVBQWxCLENBQXFCLEtBQUtHLFVBQUwsQ0FBZ0JkLElBQWhCLENBQXFCLElBQXJCLENBQXJCOztJQUNBLEtBQUtyQixRQUFMLENBQWNvQyxPQUFkO0VBQ0gsQ0ExQkQ7O0VBMkJBbEQsQ0FBQyxDQUFDeUIsU0FBRixDQUFZMEIsS0FBWixHQUFvQixZQUFZO0lBQzVCLElBQUlwRCxDQUFDLEdBQUcsSUFBUjtJQUNBLEtBQUtrQyxZQUFMLENBQWtCLFlBQVk7TUFDMUIsSUFDTWxDLENBQUMsQ0FBQ3FELElBQUYsQ0FBT0MsQ0FBUCxJQUFZakYsV0FBVyxDQUFDa0YsZUFBWixHQUE4QkMsSUFBM0MsRUFDRHhELENBQUMsQ0FBQ3FELElBQUYsQ0FBT0ksZUFBUCxDQUF1QnJFLEVBQUUsQ0FBQ3NFLE1BQTFCLENBREMsRUFFRDlFLE9BQU8sV0FBUCxDQUFnQitFLFFBSHBCLEVBSUU7UUFDRSxJQUFJMUQsQ0FBQyxHQUFHLENBQUNiLEVBQUUsQ0FBQ3dFLElBQUgsQ0FBUUMsY0FBUixHQUF5QkMsS0FBekIsR0FBaUMsR0FBbEMsSUFBeUMsQ0FBakQ7UUFDQTlELENBQUMsQ0FBQ3FELElBQUYsQ0FBT1UsUUFBUCxDQUFnQixDQUFoQixFQUFtQkMsQ0FBbkIsSUFBd0IvRCxDQUF4QjtRQUNBRCxDQUFDLENBQUNxRCxJQUFGLENBQU9VLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJDLENBQW5CLElBQXdCL0QsQ0FBeEI7TUFDSCxDQVR5QixDQVcxQjs7SUFDSCxDQVpEO0VBYUgsQ0FmRDs7RUFnQkFBLENBQUMsQ0FBQ3lCLFNBQUYsQ0FBWXNCLFNBQVosR0FBd0IsVUFBVWhELENBQVYsRUFBYTtJQUNqQyxJQUFJQyxDQUFDLEdBQUcsUUFBUUQsQ0FBUixHQUFZLEtBQUssQ0FBakIsR0FBcUJBLENBQUMsQ0FBQ2lFLE1BQS9CO0lBQ0EsSUFBSWhFLENBQUosRUFDSSxRQUFRQSxDQUFSO01BQ0ksS0FBSy9CLEtBQUssV0FBTCxDQUFjZ0csUUFBbkI7UUFDSSxLQUFLakMsVUFBTDtRQUNBOztNQUNKLEtBQUssVUFBTDtRQUNJO1FBQ0EsS0FBS0UsVUFBTDtRQUNBUCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBcUIzQyxVQUFVLFdBQVYsQ0FBbUJpRixjQUFuQixFQUFqQztRQUNBOztNQUNKLEtBQUtqRyxLQUFLLFdBQUwsQ0FBY2tHLFNBQW5CO1FBQ0ksS0FBSy9CLFdBQUw7UUFDQTs7TUFDSixLQUFLbkUsS0FBSyxXQUFMLENBQWNtRyxVQUFuQjtRQUNJLEtBQUt0QyxhQUFMO1FBQ0E7O01BQ0osS0FBSzdELEtBQUssV0FBTCxDQUFjb0csT0FBbkI7UUFDSSxLQUFLdEMsVUFBTDtRQUNBOztNQUNKLEtBQUs5RCxLQUFLLFdBQUwsQ0FBY3FHLFlBQW5CO1FBQ0ksS0FBSy9CLGFBQUw7UUFDQTs7TUFDSixLQUFLdEUsS0FBSyxXQUFMLENBQWNzRyxnQkFBbkI7UUFDSSxLQUFLL0IsVUFBTDtRQUNBOztNQUNKLEtBQUt2RSxLQUFLLFdBQUwsQ0FBY3VHLFdBQW5CO1FBQ0ksS0FBS0MsWUFBTCxDQUFrQjFFLENBQUMsQ0FBQzJFLElBQXBCO1FBQ0E7O01BQ0osS0FBS3pHLEtBQUssV0FBTCxDQUFjMEcsV0FBbkI7UUFDSSxLQUFLQyxnQkFBTDs7TUFDSixLQUFLM0csS0FBSyxXQUFMLENBQWM0RyxXQUFuQjtRQUNJLEtBQUtoRCxhQUFMO1FBQ0E7O01BQ0osS0FBSzVELEtBQUssV0FBTCxDQUFjNkcsUUFBbkI7UUFDSSxLQUFLcEMsYUFBTDtRQUNBOztNQUNKLEtBQUt6RSxLQUFLLFdBQUwsQ0FBYzhHLFlBQW5CO1FBQ0ksS0FBS25DLFVBQUw7SUFwQ1I7RUFzQ1AsQ0F6Q0Q7O0VBMENBNUMsQ0FBQyxDQUFDeUIsU0FBRixDQUFZd0IsVUFBWixHQUF5QixVQUFVbEQsQ0FBVixFQUFhO0lBQ2xDQSxDQUFDLEtBQUtBLENBQUMsQ0FBQ2lGLE1BQUYsSUFBWSxLQUFLQyxLQUFMLEVBQVosRUFBMEJsRixDQUFDLENBQUNtRixNQUFGLElBQVksS0FBSzlDLFdBQUwsRUFBM0MsQ0FBRDtFQUNILENBRkQ7O0VBR0FwQyxDQUFDLENBQUN5QixTQUFGLENBQVlpQixhQUFaLEdBQTRCLFlBQVk7SUFDcEMsS0FBS3RCLFNBQUwsQ0FBZWdDLElBQWYsQ0FBb0IrQixNQUFwQixDQUEyQkEsTUFBM0IsQ0FBa0NDLE1BQWxDLEdBQTJDLENBQUMsQ0FBNUM7RUFDSCxDQUZEOztFQUdBcEYsQ0FBQyxDQUFDeUIsU0FBRixDQUFZbUIsVUFBWixHQUF5QixZQUFZO0lBQ2pDLElBQUk3QyxDQUFDLEdBQUdqQixRQUFRLFdBQVIsQ0FBaUJ1RyxjQUFqQixFQUFSOztJQUNBLElBQUlyRixDQUFDLEdBQUcsS0FBS3VCLFNBQWI7SUFDQXZCLENBQUMsS0FDSUQsQ0FBQyxHQUFHLENBQUosSUFDT0MsQ0FBQyxDQUFDb0QsSUFBRixDQUFPK0IsTUFBUCxDQUFjQyxNQUFkLEdBQXVCLENBQUMsQ0FBekIsRUFDQXBGLENBQUMsQ0FBQ3NGLE1BQUYsR0FBV3ZGLENBQUMsR0FBRyxFQURmLEVBRUFDLENBQUMsQ0FBQ29ELElBQUYsQ0FBT1csQ0FBUCxHQUFXcEYsT0FBTyxXQUFQLENBQWdCNEcsY0FBaEIsQ0FBK0J2RixDQUFDLENBQUNzRixNQUFqQyxDQUhqQixJQUlNdEYsQ0FBQyxDQUFDb0QsSUFBRixDQUFPK0IsTUFBUCxDQUFjQyxNQUFkLEdBQXVCLENBQUMsQ0FMbEMsQ0FBRDtFQU1ILENBVEQ7O0VBVUFwRixDQUFDLENBQUN5QixTQUFGLENBQVlrQixhQUFaLEdBQTRCLFlBQVk7SUFDcEMsSUFBTSxLQUFLckIsV0FBTCxDQUFpQjhELE1BQWpCLEdBQTBCLENBQUMsQ0FBNUIsRUFBZ0NqSCxJQUFJLENBQUNxSCxRQUFMLENBQWNGLE1BQWQsTUFBMEJqSCxPQUFPLENBQUNvSCxNQUFSLENBQWVDLFNBQTlFLEVBQTBGO01BQ3RGLElBQUkzRixDQUFDLEdBQUc1QixJQUFJLENBQUNxSCxRQUFMLENBQWNHLGFBQWQsRUFBUjs7TUFDQTVGLENBQUMsS0FBTSxZQUFZQSxDQUFDLENBQUM2RixPQUFkLElBQXlCLGlCQUFpQjdGLENBQUMsQ0FBQzZGLE9BQTdDLEtBQTBELEtBQUt0RSxXQUFMLENBQWlCOEQsTUFBakIsR0FBMEIsQ0FBQyxDQUFyRixDQUFMLENBQUQ7SUFDSDtFQUNKLENBTEQ7O0VBTUFwRixDQUFDLENBQUN5QixTQUFGLENBQVlJLGFBQVosR0FBNEIsWUFBWTtJQUNwQyxJQUFJOUIsQ0FBSjtJQUNBLElBQUlDLENBQUo7O0lBQ0EsUUFBUTdCLElBQUksQ0FBQ3FILFFBQUwsQ0FBY0YsTUFBZCxFQUFSO01BQ0ksS0FBS2pILE9BQU8sQ0FBQ29ILE1BQVIsQ0FBZUMsU0FBcEI7UUFDSSxJQUFNLEtBQUtoRixXQUFMLENBQWlCMEUsTUFBakIsR0FBMEIsQ0FBQyxDQUE1QixFQUFnQ3JHLE1BQU0sV0FBTixDQUFlOEcsR0FBZixDQUFtQkMsVUFBbkIsRUFBckMsRUFDSSxLQUFLNUUsTUFBTCxDQUFZa0MsSUFBWixDQUFpQitCLE1BQWpCLENBQXdCQyxNQUF4QixHQUFpQyxDQUFDLENBQWxDLENBREosS0FFSztVQUNELElBQUlXLENBQUMsR0FDRCxDQUFDLFVBQ0kvRixDQUFDLEdBQ0UsVUFBVUQsQ0FBQyxHQUFHdEIsT0FBTyxXQUFQLENBQWdCdUgsU0FBaEIsQ0FBMEJDLFdBQXhDLEtBQXdELEtBQUssQ0FBTCxLQUFXbEcsQ0FBbkUsR0FDTSxLQUFLLENBRFgsR0FFTUEsQ0FBQyxDQUFDbUcsS0FKZixLQUl5QixLQUFLLENBQUwsS0FBV2xHLENBSnBDLEdBS0ssS0FBSyxDQUxWLEdBTUtBLENBQUMsQ0FBQ21HLEtBTlIsS0FNa0IsRUFQdEI7VUFRQSxLQUFLakYsTUFBTCxDQUFZb0UsTUFBWixHQUFxQixNQUFNUyxDQUEzQjtVQUNBLEtBQUs3RSxNQUFMLENBQVlrQyxJQUFaLENBQWlCK0IsTUFBakIsQ0FBd0JDLE1BQXhCLEdBQWlDLENBQUMsQ0FBbEM7UUFDSDtRQUNEOztNQUNKLEtBQUsvRyxPQUFPLENBQUNvSCxNQUFSLENBQWVXLE1BQXBCO1FBQ0ksTUFBTTVILE1BQU0sV0FBTixDQUFlcUgsR0FBZixDQUFtQlEsWUFBbkIsR0FBa0NDLFVBQXhDLElBQXNEbkksSUFBSSxDQUFDcUgsUUFBTCxDQUFjZSxVQUFwRSxHQUNPLEtBQUs3RixXQUFMLENBQWlCMEUsTUFBakIsR0FBMEIsQ0FBQyxDQURsQyxHQUVPLEtBQUsxRSxXQUFMLENBQWlCMEUsTUFBakIsR0FBMEIsQ0FBQyxDQUZsQztRQUdBOztNQUNKO1FBQ0ksS0FBSzFFLFdBQUwsQ0FBaUIwRSxNQUFqQixHQUEwQixDQUFDLENBQTNCO0lBdkJSO0VBeUJILENBNUJEOztFQTZCQXBGLENBQUMsQ0FBQ3lCLFNBQUYsQ0FBWUssYUFBWixHQUE0QixZQUFZO0lBQ3BDLEtBQUtyQixXQUFMLENBQWlCMkUsTUFBakIsR0FBMEJqSCxJQUFJLENBQUNxSCxRQUFMLENBQWNnQixZQUF4QztJQUNBLElBQUl6RyxDQUFDLEdBQUc1QixJQUFJLENBQUNxSCxRQUFMLENBQWNpQixRQUFkLElBQTBCLENBQUMxSCxNQUFNLFdBQU4sQ0FBZThHLEdBQWYsQ0FBbUJhLGNBQW5CLEVBQW5DO0lBQ0EsS0FBSzNGLG1CQUFMLENBQXlCcUUsTUFBekIsR0FBa0NyRixDQUFsQztJQUNBQSxDQUFDLElBQ0csS0FBS2tDLFlBQUwsQ0FBa0IsWUFBWTtNQUMxQnBELFNBQVMsV0FBVCxDQUFrQmdILEdBQWxCLENBQXNCYyxJQUF0QixDQUEyQixlQUEzQixFQUE0QyxJQUE1QztJQUNILENBRkQsQ0FESjtFQUlILENBUkQ7O0VBU0EzRyxDQUFDLENBQUN5QixTQUFGLENBQVlNLFVBQVosR0FBeUIsWUFBWTtJQUNqQyxJQUFJaEMsQ0FBQyxHQUFHLElBQVI7O0lBQ0FuQixRQUFRLFdBQVIsQ0FBaUJpSCxHQUFqQixDQUFxQmUsT0FBckIsQ0FBNkIsVUFBVTVHLENBQVYsRUFBYTtNQUN0QyxJQUFJK0YsQ0FBQyxHQUFHLENBQVI7TUFDQSxJQUFJbkksQ0FBQyxHQUFHbUMsQ0FBQyxDQUFDaUIsZUFBVjs7TUFDQSxJQUFJcEQsQ0FBQyxJQUFJQSxDQUFDLENBQUNpSixPQUFYLEVBQW9CO1FBQ2hCLElBQUk3RyxDQUFDLElBQUlBLENBQUMsQ0FBQzhHLE1BQVAsSUFBaUIsWUFBWTlHLENBQUMsQ0FBQzhHLE1BQW5DLEVBQTJDLE9BQU8sTUFBTS9HLENBQUMsQ0FBQ2lCLGVBQUYsQ0FBa0JvQyxJQUFsQixDQUF1QitCLE1BQXZCLENBQThCQyxNQUE5QixHQUF1QyxDQUFDLENBQTlDLENBQVA7O1FBQzNDLEtBQUssSUFBSTJCLENBQVQsSUFBY25JLFFBQVEsV0FBUixDQUFpQmlILEdBQWpCLENBQXFCbUIsUUFBckIsQ0FBOEJDLElBQTVDO1VBQ0lySSxRQUFRLFdBQVIsQ0FBaUJpSCxHQUFqQixDQUFxQm1CLFFBQXJCLENBQThCQyxJQUE5QixDQUFtQ0YsQ0FBbkMsS0FBeUNuSSxRQUFRLENBQUNzSSxTQUFULENBQW1CQyxNQUE1RCxJQUFzRXBCLENBQUMsRUFBdkU7UUFESjs7UUFFQWhHLENBQUMsQ0FBQ2lCLGVBQUYsQ0FBa0JzRSxNQUFsQixHQUEyQlMsQ0FBQyxHQUFHLEVBQS9CO1FBQ0FoRyxDQUFDLENBQUNpQixlQUFGLENBQWtCb0MsSUFBbEIsQ0FBdUIrQixNQUF2QixDQUE4QkMsTUFBOUIsR0FBdUNXLENBQUMsR0FBRyxDQUEzQztNQUNIO0lBQ0osQ0FWRDtFQVdILENBYkQ7O0VBY0EvRixDQUFDLENBQUN5QixTQUFGLENBQVlnQixnQkFBWixHQUErQixZQUFZO0lBQ3ZDLEtBQUs1QixhQUFMLENBQW1CdUUsTUFBbkIsR0FBNEJqSCxJQUFJLENBQUNxSCxRQUFMLENBQWNGLE1BQWQsTUFBMEJqSCxPQUFPLENBQUNvSCxNQUFSLENBQWVDLFNBQXJFO0VBQ0gsQ0FGRDs7RUFHQTFGLENBQUMsQ0FBQ3lCLFNBQUYsQ0FBWU8sVUFBWixHQUF5QixZQUFZO0lBQ2pDLEtBQUs1QixPQUFMLENBQWFrRixNQUFiLEdBQXNCdkcsTUFBTSxXQUFOLENBQWU4RyxHQUFmLENBQW1CdUIsT0FBbkIsS0FBK0IsRUFBckQ7RUFDSCxDQUZEOztFQUdBcEgsQ0FBQyxDQUFDeUIsU0FBRixDQUFZUyxVQUFaLEdBQXlCLFlBQVk7SUFDakMsSUFBSW1GLFdBQVcsR0FBR3BJLFVBQVUsV0FBVixDQUFtQmlGLGNBQW5CLEVBQWxCOztJQUNBdkMsT0FBTyxDQUFDQyxHQUFSLENBQVksOEJBQVosRUFBNEMsQ0FBQyxDQUFDLEtBQUt2QixPQUFuRCxFQUE0RCxPQUE1RCxFQUFxRWdILFdBQXJFO0lBQ0ExRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQixLQUFLdkIsT0FBcEM7O0lBRUEsSUFBSSxLQUFLQSxPQUFULEVBQWtCO01BQ2RzQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLEtBQUt2QixPQUFMLENBQWFpRixNQUExQztNQUNBLEtBQUtqRixPQUFMLENBQWFpRixNQUFiLEdBQXNCK0IsV0FBdEI7TUFDQTFGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkIsS0FBS3ZCLE9BQUwsQ0FBYWlGLE1BQTFDO01BQ0EzRCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBc0J5RixXQUFsQztJQUNILENBTEQsTUFLTztNQUNIMUYsT0FBTyxDQUFDQyxHQUFSLENBQVksdURBQVo7TUFDQUQsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQXNCeUYsV0FBdEIsR0FBb0MsWUFBaEQ7SUFDSDtFQUNKLENBZEQ7O0VBZ0JBckgsQ0FBQyxDQUFDeUIsU0FBRixDQUFZVyxXQUFaLEdBQTBCLFlBQVk7SUFDbEMsS0FBS2tGLFFBQUwsQ0FBYyxLQUFLQyxZQUFuQixFQUFpQyxDQUFqQyxFQUFvQ3BJLEVBQUUsQ0FBQ3FJLEtBQUgsQ0FBU0MsY0FBN0M7O0lBQ0EsS0FBS0YsWUFBTDtFQUNILENBSEQ7O0VBSUF2SCxDQUFDLENBQUN5QixTQUFGLENBQVl3RCxLQUFaLEdBQW9CLFlBQVk7SUFDNUIsS0FBS3lDLFVBQUwsQ0FBZ0IsS0FBS0gsWUFBckI7RUFDSCxDQUZEOztFQUdBdkgsQ0FBQyxDQUFDeUIsU0FBRixDQUFZYSxXQUFaLEdBQTBCLFlBQVk7SUFDbEMsSUFBSXZDLENBQUMsR0FBRyxJQUFSOztJQUNBekIsSUFBSSxXQUFKLENBQWF1SCxHQUFiLENBQ0s4QixpQkFETCxDQUN1QixRQUR2QixFQUVLQyxJQUZMLENBRVUsVUFBVTVILENBQVYsRUFBYTtNQUNmQSxDQUFDLENBQUM2SCxJQUFGLENBQU8sb0JBQVAsRUFBNkJDLEVBQUUsQ0FBQ0MsWUFBaEMsRUFBOEMsVUFBVS9ILENBQVYsRUFBYStGLENBQWIsRUFBZ0I7UUFDMUQsSUFBSSxDQUFDL0YsQ0FBRCxJQUFNRCxDQUFDLENBQUNxRCxJQUFSLElBQWdCckQsQ0FBQyxDQUFDcUQsSUFBRixDQUFPeUQsT0FBM0IsRUFBb0M7VUFDaEMsSUFBSWpKLENBQUMsR0FBRyxJQUFJdUIsRUFBRSxDQUFDNkksSUFBUCxFQUFSO1VBQ0EsSUFBSWpCLENBQUMsR0FBR25KLENBQUMsQ0FBQ3FLLFlBQUYsQ0FBZUgsRUFBRSxDQUFDSSxRQUFsQixDQUFSO1VBQ0NuQixDQUFDLENBQUNvQixZQUFGLEdBQWlCcEMsQ0FBbEIsRUFBdUJnQixDQUFDLENBQUNxQixTQUFGLEdBQWMsV0FBckMsRUFBb0R4SyxDQUFDLENBQUN1SCxNQUFGLEdBQVdwRixDQUFDLENBQUNZLFVBQWpFO1FBQ0g7TUFDSixDQU5EO0lBT0gsQ0FWTCxXQVdXLFVBQVVaLENBQVYsRUFBYTtNQUNoQjRCLE9BQU8sQ0FBQzBHLEtBQVIsQ0FBYyx1Q0FBZCxFQUF1RHRJLENBQXZEO0lBQ0gsQ0FiTDs7SUFjQVosRUFBRSxDQUFDbUosS0FBSCxDQUFTLEtBQUsxSCxlQUFkLEVBQStCMkgsRUFBL0IsQ0FBa0MsQ0FBbEMsRUFBcUM7TUFBQ0MsS0FBSyxFQUFFLENBQUM7SUFBVCxDQUFyQyxFQUFvREMsYUFBcEQsR0FBb0V0RixLQUFwRTtJQUNBaEUsRUFBRSxDQUFDbUosS0FBSCxDQUFTLEtBQUszSCxVQUFkLEVBQ0srSCxRQURMLENBQ2N2SixFQUFFLENBQUNtSixLQUFILEdBQVdLLEVBQVgsQ0FBYyxDQUFkLEVBQWlCO01BQUNDLEtBQUssRUFBRTtJQUFSLENBQWpCLENBRGQsRUFDOEN6SixFQUFFLENBQUNtSixLQUFILEdBQVdLLEVBQVgsQ0FBYyxDQUFkLEVBQWlCO01BQUNDLEtBQUssRUFBRTtJQUFSLENBQWpCLENBRDlDLEVBRUtILGFBRkwsR0FHS3RGLEtBSEw7RUFJSCxDQXJCRDs7RUFzQkFuRCxDQUFDLENBQUN5QixTQUFGLENBQVljLGFBQVosR0FBNEIsWUFBWTtJQUNwQyxLQUFLNUIsVUFBTCxDQUFnQnlFLE1BQWhCLEdBQXlCLEtBQUt4RSxlQUFMLENBQXFCd0UsTUFBckIsR0FBOEIsQ0FBQyxDQUF4RDtFQUNILENBRkQ7O0VBR0FwRixDQUFDLENBQUN5QixTQUFGLENBQVllLFVBQVosR0FBeUIsWUFBWTtJQUNqQyxJQUFJekMsQ0FBQyxHQUFHdkIsTUFBTSxXQUFOLENBQWVxSCxHQUFmLENBQW1CZ0QsT0FBbkIsTUFBZ0MsTUFBeEM7SUFDQTlJLENBQUMsQ0FBQytJLE1BQUYsR0FBVyxDQUFYLEtBQWlCL0ksQ0FBQyxHQUFHQSxDQUFDLENBQUNnSixTQUFGLENBQVksQ0FBWixFQUFlLENBQWYsSUFBb0IsS0FBekM7SUFDQSxLQUFLOUgsUUFBTCxDQUFjcUUsTUFBZCxHQUF1QnZGLENBQXZCOztJQUNBLElBQUlDLENBQUMsR0FBR3hCLE1BQU0sV0FBTixDQUFlcUgsR0FBZixDQUFtQm1ELFVBQW5CLEVBQVI7O0lBQ0EsS0FBSzNILFFBQUwsQ0FBYzRILFdBQWQsQ0FBMEJqSixDQUExQjtFQUNILENBTkQ7O0VBT0FBLENBQUMsQ0FBQ3lCLFNBQUYsQ0FBWVksU0FBWixHQUF3QixZQUFZLENBQUUsQ0FBdEM7O0VBQ0FyQyxDQUFDLENBQUN5QixTQUFGLENBQVk4RixZQUFaLEdBQTJCLFlBQVk7SUFDbkMsSUFBSSxLQUFLVixPQUFULEVBQWtCO01BQ2QsSUFBSTlHLENBQUMsR0FBR2hCLE1BQU0sV0FBTixDQUFlOEcsR0FBdkI7O01BQ0EsSUFBSTdGLENBQUMsR0FBR0QsQ0FBQyxDQUFDbUosZ0JBQUYsS0FBdUIzSyxLQUFLLFdBQUwsQ0FBY3NILEdBQWQsQ0FBa0JzRCxVQUFqRDs7TUFDQSxJQUFJcEQsQ0FBQyxHQUFHaEcsQ0FBQyxDQUFDcUosUUFBRixFQUFSO01BQ0EsSUFBSXhMLENBQUMsR0FBR21JLENBQVI7TUFDQSxJQUFJZ0IsQ0FBQyxHQUFHL0csQ0FBQyxHQUFHLENBQVo7TUFDQSxJQUFJcUosQ0FBQyxHQUFHNUssT0FBTyxXQUFQLENBQWdCdUgsU0FBaEIsQ0FBMEJHLEtBQTFCLENBQWdDbUQsT0FBeEM7TUFDQSxJQUFJQyxDQUFDLEdBQ0QsQ0FBQy9LLE1BQU0sV0FBTixDQUFlcUgsR0FBZixDQUFtQjJELFlBQW5CLEtBQW9DSCxDQUFDLENBQUNJLFFBQUYsQ0FBV3ZELEtBQVgsQ0FBaUJ3RCxXQUFqQixDQUE2QkMsR0FBakUsR0FBdUVOLENBQUMsQ0FBQ08sR0FBRixDQUFNMUQsS0FBTixDQUFZd0QsV0FBWixDQUF3QkMsR0FBaEcsS0FDQSxHQUZKOztNQUdBLElBQUk1QyxDQUFKLEVBQU87UUFDSCxJQUFJOEMsQ0FBQyxHQUFHOUosQ0FBQyxDQUFDK0osbUJBQUYsRUFBUjtRQUNBbE0sQ0FBQyxHQUFHMkwsQ0FBQyxHQUFHM0osQ0FBQyxDQUFDSSxDQUFDLEdBQUc2SixDQUFMLENBQVQ7UUFDQSxJQUFJRSxDQUFDLEdBQUcvSixDQUFDLEdBQUc2SixDQUFaO1FBQ0EsSUFBSUcsQ0FBQyxHQUFHdkssQ0FBQyxDQUFDc0ssQ0FBQyxHQUFHLEVBQUwsQ0FBVDtRQUNBLElBQUlFLENBQUMsR0FBR3hLLENBQUMsQ0FBQ3NLLENBQUMsR0FBRyxFQUFMLENBQVQ7UUFDQSxJQUFJRyxDQUFDLEdBQUdGLENBQUMsR0FBRyxFQUFKLEdBQVMsR0FBVCxHQUFlLEVBQXZCO1FBQ0EsSUFBSUcsQ0FBQyxHQUFHRixDQUFDLEdBQUcsRUFBSixHQUFTLEdBQVQsR0FBZSxFQUF2QjtRQUNBLEtBQUsxSixVQUFMLENBQWdCK0UsTUFBaEIsR0FBeUI0RSxDQUFDLEdBQUdGLENBQUosR0FBUSxHQUFSLEdBQWNHLENBQWQsR0FBa0JGLENBQTNDO01BQ0gsQ0FURCxNQVNPck0sQ0FBQyxHQUFHMkwsQ0FBSixLQUFVM0wsQ0FBQyxHQUFHMkwsQ0FBZCxHQUFrQixLQUFLN0IsVUFBTCxDQUFnQixLQUFLSCxZQUFyQixDQUFsQixFQUFzRHhJLE1BQU0sV0FBTixDQUFlOEcsR0FBZixDQUFtQnVFLGdCQUFuQixDQUFvQyxDQUFwQyxDQUF0RDs7TUFDUCxLQUFLakssYUFBTCxDQUFtQmlGLE1BQW5CLEdBQTRCMkIsQ0FBNUI7TUFDQW5KLENBQUMsSUFBSW1JLENBQUwsSUFBVWhHLENBQUMsQ0FBQ3NLLFFBQUYsQ0FBV3pNLENBQVgsQ0FBVjtNQUNBLEtBQUswQyxRQUFMLENBQWNnRixNQUFkLEdBQXVCMUgsQ0FBQyxHQUFHLEdBQUosR0FBVTJMLENBQWpDO0lBQ0g7RUFDSixDQXpCRDs7RUEwQkF2SixDQUFDLENBQUN5QixTQUFGLENBQVk2SSxhQUFaLEdBQTRCLFlBQVk7SUFDcEN6TCxTQUFTLFdBQVQsQ0FBa0JnSCxHQUFsQixDQUFzQmMsSUFBdEIsQ0FBMkIsY0FBM0IsRUFBMkM7TUFBQzRELE1BQU0sRUFBRTtJQUFULENBQTNDO0VBQ0gsQ0FGRDs7RUFHQXZLLENBQUMsQ0FBQ3lCLFNBQUYsQ0FBWStJLFFBQVosR0FBdUIsWUFBWTtJQUMvQjNMLFNBQVMsV0FBVCxDQUFrQmdILEdBQWxCLENBQXNCYyxJQUF0QixDQUEyQixXQUEzQixFQUF3QyxJQUF4QztFQUNILENBRkQ7O0VBR0EzRyxDQUFDLENBQUN5QixTQUFGLENBQVlnSixXQUFaLEdBQTBCLFlBQVk7SUFDbEM1TCxTQUFTLFdBQVQsQ0FBa0JnSCxHQUFsQixDQUFzQmMsSUFBdEIsQ0FBMkIsY0FBM0IsRUFBMkMsSUFBM0M7RUFDSCxDQUZEOztFQUdBM0csQ0FBQyxDQUFDeUIsU0FBRixDQUFZaUosU0FBWixHQUF3QixZQUFZO0lBQ2hDN0wsU0FBUyxXQUFULENBQWtCZ0gsR0FBbEIsQ0FBc0JjLElBQXRCLENBQTJCLFlBQTNCLEVBQXlDLElBQXpDO0VBQ0gsQ0FGRDs7RUFHQTNHLENBQUMsQ0FBQ3lCLFNBQUYsQ0FBWWtKLFlBQVosR0FBMkIsWUFBWTtJQUNuQzlMLFNBQVMsV0FBVCxDQUFrQmdILEdBQWxCLENBQXNCYyxJQUF0QixDQUEyQixjQUEzQixFQUEyQztNQUN2QzRELE1BQU0sRUFBRSxNQUQrQjtNQUV2Q0ssS0FBSyxFQUFFN0wsTUFBTSxDQUFDOEwsUUFBUCxDQUFnQkMsTUFGZ0I7TUFHdkNDLEtBQUssRUFBRXJNLEtBQUssQ0FBQ3NNLFVBQU4sQ0FBaUJDO0lBSGUsQ0FBM0M7RUFLSCxDQU5EOztFQU9BakwsQ0FBQyxDQUFDeUIsU0FBRixDQUFZeUosWUFBWixHQUEyQixZQUFZO0lBQ25DOztJQUNBO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ1F2SixPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtFQUNILENBekJEOztFQTBCQTVCLENBQUMsQ0FBQ3lCLFNBQUYsQ0FBWTBKLFlBQVosR0FBMkIsWUFBWTtJQUNuQ3RNLFNBQVMsV0FBVCxDQUFrQmdILEdBQWxCLENBQXNCYyxJQUF0QixDQUEyQixlQUEzQixFQUE0QyxJQUE1QztFQUNILENBRkQ7O0VBR0EzRyxDQUFDLENBQUN5QixTQUFGLENBQVkySixZQUFaLEdBQTJCLFlBQVk7SUFDbkN2TSxTQUFTLFdBQVQsQ0FBa0JnSCxHQUFsQixDQUFzQmMsSUFBdEIsQ0FBMkIsZUFBM0IsRUFBNEMsSUFBNUM7RUFDSCxDQUZEOztFQUdBM0csQ0FBQyxDQUFDeUIsU0FBRixDQUFZNEosVUFBWixHQUF5QixZQUFZO0lBQ2pDeE0sU0FBUyxXQUFULENBQWtCZ0gsR0FBbEIsQ0FBc0JjLElBQXRCLENBQTJCLFlBQTNCLEVBQXlDLElBQXpDO0VBQ0gsQ0FGRDs7RUFHQTNHLENBQUMsQ0FBQ3lCLFNBQUYsQ0FBWTZKLFFBQVosR0FBdUIsWUFBWTtJQUMvQnpNLFNBQVMsV0FBVCxDQUFrQmdILEdBQWxCLENBQXNCYyxJQUF0QixDQUEyQixlQUEzQixFQUE0QztNQUFDNEUsT0FBTyxFQUFFO0lBQVYsQ0FBNUM7RUFDSCxDQUZEOztFQUdBdkwsQ0FBQyxDQUFDeUIsU0FBRixDQUFZK0osWUFBWixHQUEyQixZQUFZO0lBQ25DM00sU0FBUyxXQUFULENBQWtCZ0gsR0FBbEIsQ0FBc0JjLElBQXRCLENBQTJCLGVBQTNCLEVBQTRDO01BQUM4RSxNQUFNLEVBQUU7SUFBVCxDQUE1QztFQUNILENBRkQ7O0VBR0F6TCxDQUFDLENBQUN5QixTQUFGLENBQVlpSyxZQUFaLEdBQTJCLFlBQVk7SUFDbkMsSUFBSTNMLENBQUo7O0lBQ0EsUUFBUTVCLElBQUksQ0FBQ3FILFFBQUwsQ0FBY0YsTUFBZCxFQUFSO01BQ0ksS0FBS2pILE9BQU8sQ0FBQ29ILE1BQVIsQ0FBZUMsU0FBcEI7UUFDSXZILElBQUksQ0FBQ3FILFFBQUwsQ0FBY21HLFdBQWQ7O1FBQ0E7O01BQ0osS0FBS3ROLE9BQU8sQ0FBQ29ILE1BQVIsQ0FBZVcsTUFBcEI7UUFDSSxVQUFVckcsQ0FBQyxHQUFHNUIsSUFBSSxDQUFDcUgsUUFBTCxDQUFjb0csaUJBQTVCLEtBQWtELEtBQUssQ0FBTCxLQUFXN0wsQ0FBN0QsSUFBa0VBLENBQUMsQ0FBQzhMLElBQUYsQ0FBTzFOLElBQUksQ0FBQ3FILFFBQVosQ0FBbEU7SUFMUjtFQU9ILENBVEQ7O0VBVUF4RixDQUFDLENBQUN5QixTQUFGLENBQVlxSyxlQUFaLEdBQThCLFlBQVk7SUFDdEMzTixJQUFJLENBQUNxSCxRQUFMLENBQWN1RyxjQUFkLENBQTZCMU4sT0FBTyxDQUFDMk4sU0FBUixDQUFrQkMsUUFBbEIsQ0FBMkJuQixNQUF4RDtFQUNILENBRkQ7O0VBR0E5SyxDQUFDLENBQUN5QixTQUFGLENBQVl5SyxTQUFaLEdBQXdCLFlBQVk7SUFDaENyTixTQUFTLFdBQVQsQ0FBa0JnSCxHQUFsQixDQUFzQmMsSUFBdEIsQ0FBMkIsWUFBM0IsRUFBeUMsSUFBekM7RUFDSCxDQUZEOztFQUdBM0csQ0FBQyxDQUFDeUIsU0FBRixDQUFZMEssU0FBWixHQUF3QixZQUFZO0lBQ2hDdE4sU0FBUyxXQUFULENBQWtCZ0gsR0FBbEIsQ0FBc0JjLElBQXRCLENBQTJCLFlBQTNCLEVBQXlDLElBQXpDO0VBQ0gsQ0FGRDs7RUFHQTNHLENBQUMsQ0FBQ3lCLFNBQUYsQ0FBWTJLLFNBQVosR0FBd0IsWUFBWTtJQUNoQ3ZOLFNBQVMsV0FBVCxDQUFrQmdILEdBQWxCLENBQXNCYyxJQUF0QixDQUEyQixnQkFBM0IsRUFBNkMsSUFBN0M7RUFDSCxDQUZEOztFQUdBM0csQ0FBQyxDQUFDeUIsU0FBRixDQUFZNEssVUFBWixHQUF5QixZQUFZO0lBQ2pDeE4sU0FBUyxXQUFULENBQWtCZ0gsR0FBbEIsQ0FBc0JjLElBQXRCLENBQTJCLGFBQTNCLEVBQTBDLElBQTFDO0VBQ0gsQ0FGRDs7RUFHQTNHLENBQUMsQ0FBQ3lCLFNBQUYsQ0FBWTZLLFlBQVosR0FBMkIsWUFBWTtJQUNuQyxJQUFJbk8sSUFBSSxDQUFDcUgsUUFBTCxDQUFjRixNQUFkLE1BQTBCakgsT0FBTyxDQUFDb0gsTUFBUixDQUFlQyxTQUE3QyxFQUF3RDtNQUNwRCxJQUFJM0YsQ0FBQyxHQUFHNUIsSUFBSSxDQUFDcUgsUUFBTCxDQUFjRyxhQUFkLEVBQVI7O01BQ0EsSUFBSTVGLENBQUosRUFBTztRQUNILElBQUlDLENBQUMsR0FBRyxDQUFSOztRQUNBLFFBQVFELENBQUMsQ0FBQzZGLE9BQVY7VUFDSSxLQUFLLFFBQUw7WUFDSTVGLENBQUMsR0FBRyxDQUFKO1lBQ0E7O1VBQ0osS0FBSyxhQUFMO1lBQ0lBLENBQUMsR0FBRyxDQUFKO1FBTFI7O1FBT0FBLENBQUMsSUFBSTdCLElBQUksQ0FBQ3FILFFBQUwsQ0FBYytHLFdBQWQsQ0FBMEJ2TSxDQUExQixDQUFMO01BQ0g7SUFDSjtFQUNKLENBZkQ7O0VBZ0JBQSxDQUFDLENBQUN5QixTQUFGLENBQVkrSyxNQUFaLEdBQXFCLFlBQVk7SUFDN0J6TixNQUFNLFdBQU4sQ0FBZThHLEdBQWYsQ0FBbUI0RyxjQUFuQjtFQUNILENBRkQsQ0F2WGtCLENBMlhsQjs7O0VBQ0F6TSxDQUFDLENBQUN5QixTQUFGLENBQVlpTCxvQkFBWixHQUFtQyxZQUFXO0lBQzFDLElBQUk7TUFDQS9LLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO01BQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUIzQyxVQUFVLFdBQVYsQ0FBbUJpRixjQUFuQixFQUF2QixFQUZBLENBSUE7O01BQ0EsSUFBSXlJLFlBQVksR0FBRyxDQUFDLFVBQUQsRUFBYSxNQUFiLEVBQXFCLFFBQXJCLEVBQStCLE1BQS9CLEVBQXVDLFFBQXZDLENBQW5CO01BQ0EsSUFBSUMsV0FBVyxHQUFHLEVBQWxCOztNQUVBLEtBQUssSUFBSTdGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0RixZQUFZLENBQUM3RCxNQUFqQyxFQUF5Qy9CLENBQUMsRUFBMUMsRUFBOEM7UUFDMUMsSUFBSThGLFVBQVUsR0FBR0YsWUFBWSxDQUFDNUYsQ0FBRCxDQUE3Qjs7UUFDQSxJQUFJK0YsYUFBYSxHQUFHN04sVUFBVSxXQUFWLENBQW1COE4sT0FBbkIsRUFBcEI7O1FBQ0EsSUFBSUMsU0FBUyxHQUFHL04sVUFBVSxXQUFWLENBQW1CZ08sZ0JBQW5CLENBQW9DSixVQUFwQyxFQUFnRCxJQUFoRCxDQUFoQjs7UUFDQSxJQUFJSyxZQUFZLEdBQUdqTyxVQUFVLFdBQVYsQ0FBbUI4TixPQUFuQixFQUFuQjs7UUFFQSxJQUFJQyxTQUFKLEVBQWU7VUFDWCxJQUFJRyxZQUFZLEdBQUdELFlBQVksR0FBR0osYUFBbEM7VUFDQW5MLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRUFBaUJpTCxVQUFqQixFQUE2QixTQUE3QixFQUF3QyxDQUFDTSxZQUFZLEdBQUMsR0FBZCxFQUFtQkMsT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FBeEMsRUFBdUUsR0FBdkU7VUFDQVIsV0FBVyxDQUFDUyxJQUFaLENBQWlCO1lBQUNSLFVBQVUsRUFBRUEsVUFBYjtZQUF5QlMsTUFBTSxFQUFFSDtVQUFqQyxDQUFqQjtRQUNILENBSkQsTUFJTztVQUNIeEwsT0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWixFQUFpQmlMLFVBQWpCLEVBQTZCLFVBQTdCO1FBQ0g7TUFDSjs7TUFFRGxMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEIzQyxVQUFVLFdBQVYsQ0FBbUJpRixjQUFuQixFQUE1QjtNQUNBdkMsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQmdMLFdBQTNCO0lBRUgsQ0ExQkQsQ0EwQkUsT0FBT3ZFLEtBQVAsRUFBYztNQUNaMUcsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QnlHLEtBQXZCO01BQ0ExRyxPQUFPLENBQUMwRyxLQUFSLENBQWNBLEtBQWQ7SUFDSDtFQUNKLENBL0JEOztFQWdDQXJJLENBQUMsQ0FBQ3lCLFNBQUYsQ0FBWWdELFlBQVosR0FBMkIsVUFBVTFFLENBQVYsRUFBYTtJQUNwQyxJQUFJQyxDQUFDLEdBQUdqQixNQUFNLFdBQU4sQ0FBZThHLEdBQWYsQ0FBbUJDLFVBQW5CLEVBQVI7O0lBQ0EvRixDQUFDLElBQUksQ0FBQ0MsQ0FBTixLQUFZakIsTUFBTSxXQUFOLENBQWU4RyxHQUFmLENBQW1CMEgsVUFBbkIsQ0FBOEIsQ0FBQyxDQUEvQixHQUFtQyxLQUFLM0ksZ0JBQUwsRUFBbkMsRUFBNEQsS0FBSy9DLGFBQUwsRUFBeEU7RUFDSCxDQUhEOztFQUlBN0IsQ0FBQyxDQUFDeUIsU0FBRixDQUFZbUQsZ0JBQVosR0FBK0IsWUFBWTtJQUN2QyxJQUFJN0UsQ0FBSjtJQUNBLElBQUlDLENBQUo7SUFDQSxJQUFJK0YsQ0FBQyxHQUNELENBQUMsVUFBVS9GLENBQUMsR0FBRyxVQUFVRCxDQUFDLEdBQUd0QixPQUFPLFdBQVAsQ0FBZ0J1SCxTQUFoQixDQUEwQkMsV0FBeEMsS0FBd0QsS0FBSyxDQUFMLEtBQVdsRyxDQUFuRSxHQUF1RSxLQUFLLENBQTVFLEdBQWdGQSxDQUFDLENBQUNtRyxLQUFoRyxLQUNELEtBQUssQ0FBTCxLQUFXbEcsQ0FEVixHQUVLLEtBQUssQ0FGVixHQUdLQSxDQUFDLENBQUNtRyxLQUhSLEtBR2tCLEVBSnRCOztJQUtBcEgsTUFBTSxXQUFOLENBQWU4RyxHQUFmLENBQW1CMkgsUUFBbkIsQ0FBNEJ6SCxDQUE1Qjs7SUFDQSxJQUFJbkksQ0FBQyxHQUFHLEtBQUs4QyxXQUFMLENBQWlCbUcsT0FBakIsR0FBMkIsS0FBS25HLFdBQUwsQ0FBaUIrTSxRQUE1QyxHQUF1RCxLQUFLQyxjQUFwRTtJQUNBLElBQUkzRyxDQUFDLEdBQUcsS0FBSzNELElBQUwsQ0FBVXVLLHFCQUFWLENBQWdDL1AsQ0FBaEMsQ0FBUjs7SUFDQWlCLFNBQVMsV0FBVCxDQUFrQmdILEdBQWxCLENBQXNCYyxJQUF0QixDQUEyQixjQUEzQixFQUEyQztNQUFDaUgsU0FBUyxFQUFFLENBQUM7UUFBQ3JELE1BQU0sRUFBRSxPQUFUO1FBQWtCc0QsUUFBUSxFQUFFOUcsQ0FBNUI7UUFBK0IvSSxLQUFLLEVBQUUrSDtNQUF0QyxDQUFEO0lBQVosQ0FBM0M7RUFDSCxDQVpEOztFQWFBK0gsVUFBVSxDQUFDLENBQUN2TyxDQUFDLENBQUNKLEVBQUUsQ0FBQzZJLElBQUosQ0FBRixDQUFELEVBQWVoSSxDQUFDLENBQUN5QixTQUFqQixFQUE0QixlQUE1QixFQUE2QyxLQUFLLENBQWxELENBQVY7O0VBQ0FxTSxVQUFVLENBQUMsQ0FBQ3ZPLENBQUMsQ0FBQ0osRUFBRSxDQUFDNE8sS0FBSixDQUFGLENBQUQsRUFBZ0IvTixDQUFDLENBQUN5QixTQUFsQixFQUE2QixTQUE3QixFQUF3QyxLQUFLLENBQTdDLENBQVY7O0VBQ0FxTSxVQUFVLENBQUMsQ0FBQ3ZPLENBQUMsQ0FBQ0osRUFBRSxDQUFDNE8sS0FBSixDQUFGLENBQUQsRUFBZ0IvTixDQUFDLENBQUN5QixTQUFsQixFQUE2QixTQUE3QixFQUF3QyxLQUFLLENBQTdDLENBQVY7O0VBQ0FxTSxVQUFVLENBQUMsQ0FBQ3ZPLENBQUMsQ0FBQ0osRUFBRSxDQUFDNE8sS0FBSixDQUFGLENBQUQsRUFBZ0IvTixDQUFDLENBQUN5QixTQUFsQixFQUE2QixVQUE3QixFQUF5QyxLQUFLLENBQTlDLENBQVY7O0VBQ0FxTSxVQUFVLENBQUMsQ0FBQ3ZPLENBQUMsQ0FBQ0osRUFBRSxDQUFDNE8sS0FBSixDQUFGLENBQUQsRUFBZ0IvTixDQUFDLENBQUN5QixTQUFsQixFQUE2QixZQUE3QixFQUEyQyxLQUFLLENBQWhELENBQVY7O0VBQ0FxTSxVQUFVLENBQUMsQ0FBQ3ZPLENBQUMsQ0FBQ0osRUFBRSxDQUFDNk8sTUFBSixDQUFGLENBQUQsRUFBaUJoTyxDQUFDLENBQUN5QixTQUFuQixFQUE4QixTQUE5QixFQUF5QyxLQUFLLENBQTlDLENBQVY7O0VBQ0FxTSxVQUFVLENBQUMsQ0FBQ3ZPLENBQUMsQ0FBQ0osRUFBRSxDQUFDNkksSUFBSixDQUFGLENBQUQsRUFBZWhJLENBQUMsQ0FBQ3lCLFNBQWpCLEVBQTRCLGFBQTVCLEVBQTJDLEtBQUssQ0FBaEQsQ0FBVjs7RUFDQXFNLFVBQVUsQ0FBQyxDQUFDdk8sQ0FBQyxDQUFDSixFQUFFLENBQUM2SSxJQUFKLENBQUYsQ0FBRCxFQUFlaEksQ0FBQyxDQUFDeUIsU0FBakIsRUFBNEIsYUFBNUIsRUFBMkMsS0FBSyxDQUFoRCxDQUFWOztFQUNBcU0sVUFBVSxDQUFDLENBQUN2TyxDQUFDLENBQUNKLEVBQUUsQ0FBQzZJLElBQUosQ0FBRixDQUFELEVBQWVoSSxDQUFDLENBQUN5QixTQUFqQixFQUE0QixZQUE1QixFQUEwQyxLQUFLLENBQS9DLENBQVY7O0VBQ0FxTSxVQUFVLENBQUMsQ0FBQ3ZPLENBQUMsQ0FBQ0osRUFBRSxDQUFDNkksSUFBSixDQUFGLENBQUQsRUFBZWhJLENBQUMsQ0FBQ3lCLFNBQWpCLEVBQTRCLGlCQUE1QixFQUErQyxLQUFLLENBQXBELENBQVY7O0VBQ0FxTSxVQUFVLENBQUMsQ0FBQ3ZPLENBQUMsQ0FBQ0osRUFBRSxDQUFDNkksSUFBSixDQUFGLENBQUQsRUFBZWhJLENBQUMsQ0FBQ3lCLFNBQWpCLEVBQTRCLGVBQTVCLEVBQTZDLEtBQUssQ0FBbEQsQ0FBVjs7RUFDQXFNLFVBQVUsQ0FBQyxDQUFDdk8sQ0FBQyxDQUFDSixFQUFFLENBQUM2SSxJQUFKLENBQUYsQ0FBRCxFQUFlaEksQ0FBQyxDQUFDeUIsU0FBakIsRUFBNEIsVUFBNUIsRUFBd0MsS0FBSyxDQUE3QyxDQUFWOztFQUNBcU0sVUFBVSxDQUFDLENBQUN2TyxDQUFDLENBQUNKLEVBQUUsQ0FBQzZJLElBQUosQ0FBRixDQUFELEVBQWVoSSxDQUFDLENBQUN5QixTQUFqQixFQUE0QixxQkFBNUIsRUFBbUQsS0FBSyxDQUF4RCxDQUFWOztFQUNBcU0sVUFBVSxDQUFDLENBQUN2TyxDQUFDLENBQUNKLEVBQUUsQ0FBQzRPLEtBQUosQ0FBRixDQUFELEVBQWdCL04sQ0FBQyxDQUFDeUIsU0FBbEIsRUFBNkIsaUJBQTdCLEVBQWdELEtBQUssQ0FBckQsQ0FBVjs7RUFDQXFNLFVBQVUsQ0FBQyxDQUFDdk8sQ0FBQyxDQUFDSixFQUFFLENBQUM0TyxLQUFKLENBQUYsQ0FBRCxFQUFnQi9OLENBQUMsQ0FBQ3lCLFNBQWxCLEVBQTZCLFVBQTdCLEVBQXlDLEtBQUssQ0FBOUMsQ0FBVjs7RUFDQXFNLFVBQVUsQ0FBQyxDQUFDdk8sQ0FBQyxDQUFDSixFQUFFLENBQUM0TyxLQUFKLENBQUYsQ0FBRCxFQUFnQi9OLENBQUMsQ0FBQ3lCLFNBQWxCLEVBQTZCLFFBQTdCLEVBQXVDLEtBQUssQ0FBNUMsQ0FBVjs7RUFDQXFNLFVBQVUsQ0FBQyxDQUFDdk8sQ0FBQyxDQUFDSixFQUFFLENBQUM2SSxJQUFKLENBQUYsQ0FBRCxFQUFlaEksQ0FBQyxDQUFDeUIsU0FBakIsRUFBNEIsU0FBNUIsRUFBdUMsS0FBSyxDQUE1QyxDQUFWOztFQUNBcU0sVUFBVSxDQUFDLENBQUN2TyxDQUFDLENBQUNKLEVBQUUsQ0FBQzRPLEtBQUosQ0FBRixDQUFELEVBQWdCL04sQ0FBQyxDQUFDeUIsU0FBbEIsRUFBNkIsV0FBN0IsRUFBMEMsS0FBSyxDQUEvQyxDQUFWOztFQUNBcU0sVUFBVSxDQUFDLENBQUN2TyxDQUFDLENBQUNQLEtBQUssV0FBTixDQUFGLENBQUQsRUFBcUJnQixDQUFDLENBQUN5QixTQUF2QixFQUFrQyxVQUFsQyxFQUE4QyxLQUFLLENBQW5ELENBQVY7O0VBQ0FxTSxVQUFVLENBQUMsQ0FBQ3ZPLENBQUMsQ0FBQ0osRUFBRSxDQUFDNkksSUFBSixDQUFGLENBQUQsRUFBZWhJLENBQUMsQ0FBQ3lCLFNBQWpCLEVBQTRCLGFBQTVCLEVBQTJDLEtBQUssQ0FBaEQsQ0FBVjs7RUFDQXFNLFVBQVUsQ0FBQyxDQUFDdk8sQ0FBQyxDQUFDSixFQUFFLENBQUM0TyxLQUFKLENBQUYsQ0FBRCxFQUFnQi9OLENBQUMsQ0FBQ3lCLFNBQWxCLEVBQTZCLFdBQTdCLEVBQTBDLEtBQUssQ0FBL0MsQ0FBVjs7RUFDQSxPQUFPcU0sVUFBVSxDQUFDLENBQUN6TyxDQUFELENBQUQsRUFBTVcsQ0FBTixDQUFqQjtBQUNILENBbmNPLENBbWNMYixFQUFFLENBQUM4TyxTQW5jRSxDQUFSOztBQW9jQWxRLE9BQU8sV0FBUCxHQUFrQitCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIF9ldnRzID0gcmVxdWlyZShcImV2dHNcIik7XG52YXIgX2lkeCA9IHJlcXVpcmUoXCJpZHhcIik7XG52YXIgX215U2FmZUFyZWEgPSByZXF1aXJlKFwibXlTYWZlQXJlYVwiKTtcbnZhciBfcENvbnN0ID0gcmVxdWlyZShcInBDb25zdFwiKTtcbnZhciBfcmVzID0gcmVxdWlyZShcInJlc1wiKTtcbnZhciBfdGltZSA9IHJlcXVpcmUoXCJ0aW1lXCIpO1xudmFyIF91RGF0YSA9IHJlcXVpcmUoXCJ1RGF0YVwiKTtcbnZhciBfY2ZnTWdyID0gcmVxdWlyZShcImNmZ01nclwiKTtcbnZhciBfbGFuZyA9IHJlcXVpcmUoXCJsYW5nXCIpO1xudmFyIF9nbG9iYWwgPSByZXF1aXJlKFwiZ2xvYmFsXCIpO1xudmFyIF9tYWlsTWdyID0gcmVxdWlyZShcIm1haWxNZ3JcIik7XG52YXIgX3BhbmVsTWdyID0gcmVxdWlyZShcInBhbmVsTWdyXCIpO1xudmFyIF90YXNrTWdyID0gcmVxdWlyZShcInRhc2tNZ3JcIik7XG52YXIgX3BJbmZvID0gcmVxdWlyZShcInBJbmZvXCIpO1xudmFyIF9oZWFkID0gcmVxdWlyZShcImhlYWRcIik7XG52YXIgX3Jld2FyZE1nciA9IHJlcXVpcmUoXCJyZXdhcmRNZ3JcIik7XG52YXIgdyA9IGNjLl9kZWNvcmF0b3I7XG52YXIgUyA9IHcuY2NjbGFzcztcbnZhciBUID0gdy5wcm9wZXJ0eTtcbnZhciBJID0gTWF0aC5mbG9vcjtcbnZhciBEID0gTWF0aC5jZWlsO1xudmFyIFAgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5jb3VudERvd25Ob2RlID0gbnVsbDtcbiAgICAgICAgZS5jb2luTGJsID0gbnVsbDtcbiAgICAgICAgZS5jYXNoTGJsID0gbnVsbDtcbiAgICAgICAgZS5wb3dlckxibCA9IG51bGw7XG4gICAgICAgIGUucG93ZXJDZExibCA9IG51bGw7XG4gICAgICAgIGUucG93ZXJTcCA9IG51bGw7XG4gICAgICAgIGUuc2lkZWJhck5vZGUgPSBudWxsO1xuICAgICAgICBlLmRlc2t0b3BOb2RlID0gbnVsbDtcbiAgICAgICAgZS5uZXdHaWZ0QnRuID0gbnVsbDtcbiAgICAgICAgZS5uZXdHaWZ0QnRuTGlnaHQgPSBudWxsO1xuICAgICAgICBlLmZyaWVuZFJhbmtCdG4gPSBudWxsO1xuICAgICAgICBlLmNsZWFyQnRuID0gbnVsbDtcbiAgICAgICAgZS5zaWRlYmFyUmVkUG9pbnROb2RlID0gbnVsbDtcbiAgICAgICAgZS5tYWlsUmVkUG9pbnRMYmwgPSBudWxsO1xuICAgICAgICBlLnR4dF9uYW1lID0gbnVsbDtcbiAgICAgICAgZS5kZXNrTGIgPSBudWxsO1xuICAgICAgICBlLnNhdmVCdG4gPSBudWxsO1xuICAgICAgICBlLnNpZ25SZWRMYiA9IG51bGw7XG4gICAgICAgIGUuaGVhZENvbXAgPSBudWxsO1xuICAgICAgICBlLnNlcnZpY2VOb2RlID0gbnVsbDtcbiAgICAgICAgZS50YXNrUmVkTGIgPSBudWxsO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn46uIFRvcOe7hOS7tm9uTG9hZOW8gOWni1wiKTtcbiAgICAgICAgdGhpcy51cGRhdGVEZXNrdG9wKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1haWwoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb2luKCk7XG4gICAgICAgIC8vIPCfkp0g5ri45oiP6L+b5YWl5pe256uL5Y2z5pu05paw546w6YeR5L2Z6aKd5pi+56S6XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+OriDlh4blpIfosIPnlKh1cGRhdGVDYXNo77yMY2FzaExibOeKtuaAgTpcIiwgISF0aGlzLmNhc2hMYmwpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnVwZGF0ZUNhc2guYmluZCh0aGlzKSwgMC4xKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn46uIHNjaGVkdWxlT25jZSB1cGRhdGVDYXNo5bey6K6+572uXCIpO1xuICAgICAgICBcbiAgICAgICAgLy8g8J+SnSDlpJrmrKHlsJ3or5Xmm7TmlrDvvIznoa7kv53nu5HlrprmiJDlip/lkI7og73mm7TmlrBcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy51cGRhdGVDYXNoLmJpbmQodGhpcyksIDAuNSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMudXBkYXRlQ2FzaC5iaW5kKHRoaXMpLCAxLjApO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvd2VyKCk7XG4gICAgICAgIHRoaXMudXBDaGFwdGVyKCk7XG4gICAgICAgIHRoaXMubG9hZE5ld0dpZnQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVOZXdHaWZ0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlSGVhZCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZyaWVuZFJhbmsoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaWduUmVkKCk7XG4gICAgICAgIHRoaXMudXBzZXJ2aWNlTm9kZSgpO1xuICAgICAgICB0aGlzLnVwRFRhc2tSZWQoKTtcbiAgICAgICAgX2V2dHMuZGVmYXVsdC5vcEUub24odGhpcy5vbk9wZXJUYXAuYmluZCh0aGlzKSk7XG4gICAgICAgIF9ldnRzLmRlZmF1bHQucGxFLm9uKHRoaXMub25PcGVyVGFwMi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jbGVhckJ0bi5kZXN0cm95KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKCh0Lm5vZGUueSAtPSBfbXlTYWZlQXJlYS5nZXRTYWZlQXJlYVJlY3QoKS55TWluKSxcbiAgICAgICAgICAgICAgICB0Lm5vZGUucmVtb3ZlQ29tcG9uZW50KGNjLldpZGdldCksXG4gICAgICAgICAgICAgICAgX2dsb2JhbC5kZWZhdWx0LnBhZFNjYWxlKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSAoY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoIC0gNzIwKSAvIDI7XG4gICAgICAgICAgICAgICAgdC5ub2RlLmNoaWxkcmVuWzBdLnggLT0gZTtcbiAgICAgICAgICAgICAgICB0Lm5vZGUuY2hpbGRyZW5bMV0ueCArPSBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDwn5KdIFVJ5Yid5aeL5YyW5a6M5oiQXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25PcGVyVGFwID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmFjdGlvbjtcbiAgICAgICAgaWYgKGUpXG4gICAgICAgICAgICBzd2l0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIF9ldnRzLmRlZmF1bHQuQ09JTl9DSEc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29pbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdDQVNIX0NIRyc6XG4gICAgICAgICAgICAgICAgICAgIC8vIPCfkp0g546w6YeR5L2Z6aKdVUnmm7TmlrBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDYXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+SsCDljbfljbfnmoTnjrDph5HkvZnpop3mm7TmlrDkuoY6IO+/pVwiICsgX3Jld2FyZE1nci5kZWZhdWx0LmdldENhc2hEaXNwbGF5KCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIF9ldnRzLmRlZmF1bHQuUE9XRVJfQ0hHOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvd2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgX2V2dHMuZGVmYXVsdC5TbGlkZXJfQ2hnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNpZGViYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfZXZ0cy5kZWZhdWx0LlVQRE1BSUw6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWFpbCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIF9ldnRzLmRlZmF1bHQuVVBEX05FV19HSUZUOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU5ld0dpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfZXZ0cy5kZWZhdWx0LlVQRF9UT1BfSEVBRElORk86XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSGVhZCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIF9ldnRzLmRlZmF1bHQuQUREX0RFU0tUT1A6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRGVza3RvcENiKHQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgX2V2dHMuZGVmYXVsdC5BTElQQVlfTUFJTjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXREZXNrdG9wUmV3YXJkKCk7XG4gICAgICAgICAgICAgICAgY2FzZSBfZXZ0cy5kZWZhdWx0LkRlc2t0b3BfQ2hnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlc2t0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfZXZ0cy5kZWZhdWx0LlNJR05fUkVEOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNpZ25SZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfZXZ0cy5kZWZhdWx0LlVQRF9NQUlOX1JFRDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cERUYXNrUmVkKCk7XG4gICAgICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbk9wZXJUYXAyID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdCAmJiAodC5vbkhpZGUgJiYgdGhpcy5wYXVzZSgpLCB0Lm9uU2hvdyAmJiB0aGlzLnVwZGF0ZVBvd2VyKCkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlU2lnblJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zaWduUmVkTGIubm9kZS5wYXJlbnQucGFyZW50LmFjdGl2ZSA9ICExO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBEVGFza1JlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdGFza01nci5kZWZhdWx0LmdldFVuRmluaXNoTnVtKCk7XG4gICAgICAgIHZhciBlID0gdGhpcy50YXNrUmVkTGI7XG4gICAgICAgIGUgJiZcbiAgICAgICAgICAgICh0ID4gMFxuICAgICAgICAgICAgICAgID8gKChlLm5vZGUucGFyZW50LmFjdGl2ZSA9ICEwKSxcbiAgICAgICAgICAgICAgICAgIChlLnN0cmluZyA9IHQgKyBcIlwiKSxcbiAgICAgICAgICAgICAgICAgIChlLm5vZGUueCA9IF9nbG9iYWwuZGVmYXVsdC5nZXRDaGFyWE9mZnNldChlLnN0cmluZykpKVxuICAgICAgICAgICAgICAgIDogKGUubm9kZS5wYXJlbnQuYWN0aXZlID0gITEpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwc2VydmljZU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgoKHRoaXMuc2VydmljZU5vZGUuYWN0aXZlID0gITEpLCBfaWR4LnBsYXRmb3JtLnN0cmluZygpID09IF9wQ29uc3QuUEZDb2RlLkJ5dGVkYW5jZSkpIHtcbiAgICAgICAgICAgIHZhciB0ID0gX2lkeC5wbGF0Zm9ybS5nZXRTeXN0ZW1EYXRhKCk7XG4gICAgICAgICAgICB0ICYmICgoXCJEb3V5aW5cIiAhPSB0LmFwcE5hbWUgJiYgXCJkb3V5aW5fbGl0ZVwiICE9IHQuYXBwTmFtZSkgfHwgKHRoaXMuc2VydmljZU5vZGUuYWN0aXZlID0gITApKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlRGVza3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBzd2l0Y2ggKF9pZHgucGxhdGZvcm0uc3RyaW5nKCkpIHtcbiAgICAgICAgICAgIGNhc2UgX3BDb25zdC5QRkNvZGUuQnl0ZWRhbmNlOlxuICAgICAgICAgICAgICAgIGlmICgoKHRoaXMuZGVza3RvcE5vZGUuYWN0aXZlID0gITApLCBfcEluZm8uZGVmYXVsdC5pbnMuZ2V0QWRkRGVzaygpKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrTGIubm9kZS5wYXJlbnQuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID1cbiAgICAgICAgICAgICAgICAgICAgICAgIChudWxsID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gKHQgPSBfY2ZnTWdyLmRlZmF1bHQuc2VydmVyQ2ZnLmFkZF9kZXNrdG9wKSB8fCB2b2lkIDAgPT09IHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHQucnVsZXMpIHx8IHZvaWQgMCA9PT0gZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlLnRpbWVzKSB8fCA1MDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrTGIuc3RyaW5nID0gXCIrXCIgKyBvO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tMYi5ub2RlLnBhcmVudC5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIF9wQ29uc3QuUEZDb2RlLkFsaXBheTpcbiAgICAgICAgICAgICAgICAwID09PSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuYWxpQWRkSG9tZSB8fCBfaWR4LnBsYXRmb3JtLmNEZXNrQ2F0Y2hcbiAgICAgICAgICAgICAgICAgICAgPyAodGhpcy5kZXNrdG9wTm9kZS5hY3RpdmUgPSAhMSlcbiAgICAgICAgICAgICAgICAgICAgOiAodGhpcy5kZXNrdG9wTm9kZS5hY3RpdmUgPSAhMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuZGVza3RvcE5vZGUuYWN0aXZlID0gITE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZVNpZGViYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhck5vZGUuYWN0aXZlID0gX2lkeC5wbGF0Zm9ybS5zaWRlYmFyRXhpc3Q7XG4gICAgICAgIHZhciB0ID0gX2lkeC5wbGF0Zm9ybS5ieVNsaWRlciAmJiAhX3BJbmZvLmRlZmF1bHQuaW5zLmdldElzR2V0U2xpZGVyKCk7XG4gICAgICAgIHRoaXMuc2lkZWJhclJlZFBvaW50Tm9kZS5hY3RpdmUgPSB0O1xuICAgICAgICB0ICYmXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3BhbmVsTWdyLmRlZmF1bHQuaW5zLm9wZW4oXCJ1aS91aV9zaWRlYmFyXCIsIG51bGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVNYWlsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIF9tYWlsTWdyLmRlZmF1bHQuaW5zLmdldE1haWwoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBvID0gMDtcbiAgICAgICAgICAgIHZhciBuID0gdC5tYWlsUmVkUG9pbnRMYmw7XG4gICAgICAgICAgICBpZiAobiAmJiBuLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZSAmJiBlLmVyck1zZyAmJiBcImVycm9yXCIgPT09IGUuZXJyTXNnKSByZXR1cm4gdm9pZCAodC5tYWlsUmVkUG9pbnRMYmwubm9kZS5wYXJlbnQuYWN0aXZlID0gITEpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gX21haWxNZ3IuZGVmYXVsdC5pbnMubWFpbEluZm8ubWFpbClcbiAgICAgICAgICAgICAgICAgICAgX21haWxNZ3IuZGVmYXVsdC5pbnMubWFpbEluZm8ubWFpbFtpXSA9PSBfbWFpbE1nci5tYWlsU3RhdGUubm9SZWFkICYmIG8rKztcbiAgICAgICAgICAgICAgICB0Lm1haWxSZWRQb2ludExibC5zdHJpbmcgPSBvICsgXCJcIjtcbiAgICAgICAgICAgICAgICB0Lm1haWxSZWRQb2ludExibC5ub2RlLnBhcmVudC5hY3RpdmUgPSBvID4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVGcmllbmRSYW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZyaWVuZFJhbmtCdG4uYWN0aXZlID0gX2lkeC5wbGF0Zm9ybS5zdHJpbmcoKSA9PSBfcENvbnN0LlBGQ29kZS5CeXRlZGFuY2U7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVDb2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvaW5MYmwuc3RyaW5nID0gX3BJbmZvLmRlZmF1bHQuaW5zLmdldENvaW4oKSArIFwiXCI7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVDYXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2FzaERpc3BsYXkgPSBfcmV3YXJkTWdyLmRlZmF1bHQuZ2V0Q2FzaERpc3BsYXkoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5SNIHVwZGF0ZUNhc2josIPnlKggLSBjYXNoTGJs5a2Y5ZyoOlwiLCAhIXRoaXMuY2FzaExibCwgXCLnjrDph5HkvZnpop06XCIsIGNhc2hEaXNwbGF5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5SNIGNhc2hMYmzor6bnu4bkv6Hmga86XCIsIHRoaXMuY2FzaExibCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5jYXNoTGJsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCflI0g5pu05paw5YmN5Y235Y23546w6YeR5pi+56S6OlwiLCB0aGlzLmNhc2hMYmwuc3RyaW5nKTtcbiAgICAgICAgICAgIHRoaXMuY2FzaExibC5zdHJpbmcgPSBjYXNoRGlzcGxheTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+UjSDmm7TmlrDlkI7ljbfljbfnjrDph5HmmL7npLo6XCIsIHRoaXMuY2FzaExibC5zdHJpbmcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUg5Y235Y2355qE546w6YeR5L2Z6aKdVUnlt7Lmm7TmlrA6IO+/pVwiICsgY2FzaERpc3BsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwgY2FzaExibOacque7keWumu+8gemcgOimgeWcqENvY29zIENyZWF0b3LnvJbovpHlmajkuK3lsIbnjrDph5FMYWJlbOe7keWumuWIsGNhc2hMYmzlsZ7mgKdcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfkrAg5Y235Y2355qE546w6YeR5L2Z6aKd5pWw5o2u5q2j5bi4OiDvv6VcIiArIGNhc2hEaXNwbGF5ICsgXCIgKOS9hlVJ5peg5rOV5pi+56S6KVwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBlLnByb3RvdHlwZS51cGRhdGVQb3dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLl91cGRhdGVQb3dlciwgMSwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIpO1xuICAgICAgICB0aGlzLl91cGRhdGVQb3dlcigpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl91cGRhdGVQb3dlcik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5sb2FkTmV3R2lmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBfcmVzLmRlZmF1bHQuaW5zXG4gICAgICAgICAgICAuZ2V0QnVuZGxlQnlTdHJpbmcoXCJyZXNTcHNcIilcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5sb2FkKFwic3BpbmUvbGlnaHQvYWN0aW9uXCIsIHNwLlNrZWxldG9uRGF0YSwgZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlICYmIHQubm9kZSAmJiB0Lm5vZGUuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBuLmFkZENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAoaS5za2VsZXRvbkRhdGEgPSBvKSwgKGkuYW5pbWF0aW9uID0gXCJhbmltYXRpb25cIiksIChuLnBhcmVudCA9IHQubmV3R2lmdEJ0bik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUlRvb2wuaW5zLmdldEJ1bmRsZUJ5U3RyaW5nKCdyZXNTcHMnKVwiLCB0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5ld0dpZnRCdG5MaWdodCkuYnkoMywge2FuZ2xlOiAtMzYwfSkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubmV3R2lmdEJ0bilcbiAgICAgICAgICAgIC5zZXF1ZW5jZShjYy50d2VlbigpLnRvKDEsIHtzY2FsZTogMC45fSksIGNjLnR3ZWVuKCkudG8oMSwge3NjYWxlOiAxfSkpXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZU5ld0dpZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubmV3R2lmdEJ0bi5hY3RpdmUgPSB0aGlzLm5ld0dpZnRCdG5MaWdodC5hY3RpdmUgPSAhMTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZUhlYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldE5hbWUoKSB8fCBcIuWNt+WNt+Wkp+eOi1wiO1xuICAgICAgICB0Lmxlbmd0aCA+IDcgJiYgKHQgPSB0LnN1YnN0cmluZygwLCA2KSArIFwiLi4uXCIpO1xuICAgICAgICB0aGlzLnR4dF9uYW1lLnN0cmluZyA9IHQ7XG4gICAgICAgIHZhciBlID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldEhlYWRJbWcoKTtcbiAgICAgICAgdGhpcy5oZWFkQ29tcC5sb2FkSGVhZEltZyhlKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwQ2hhcHRlciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLl91cGRhdGVQb3dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgICAgICAgdmFyIHQgPSBfcEluZm8uZGVmYXVsdC5pbnM7XG4gICAgICAgICAgICB2YXIgZSA9IHQuZ2V0UG93ZXJGdWxsVGltZSgpIC0gX3RpbWUuZGVmYXVsdC5pbnMuc2VydmVyVGltZTtcbiAgICAgICAgICAgIHZhciBvID0gdC5nZXRQb3dlcigpO1xuICAgICAgICAgICAgdmFyIG4gPSBvO1xuICAgICAgICAgICAgdmFyIGkgPSBlID4gMDtcbiAgICAgICAgICAgIHZhciByID0gX2NmZ01nci5kZWZhdWx0LnNlcnZlckNmZy50aW1lcy5mb3JVc2VyO1xuICAgICAgICAgICAgdmFyIGEgPVxuICAgICAgICAgICAgICAgIChfdURhdGEuZGVmYXVsdC5pbnMuZ2V0SXNOZXdVc2VyKCkgPyByLm5ld191c2VyLnJ1bGVzLmJhc2ljX3RpbWVzLnZhbCA6IHIuYWxsLnJ1bGVzLmJhc2ljX3RpbWVzLnZhbCkgfHxcbiAgICAgICAgICAgICAgICAxMDA7XG4gICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgIHZhciBzID0gdC5nZXRQZXJQb3dlck5lZWRUaW1lKCk7XG4gICAgICAgICAgICAgICAgbiA9IGEgLSBEKGUgLyBzKTtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGUgJSBzO1xuICAgICAgICAgICAgICAgIHZhciBsID0gSShjIC8gNjApO1xuICAgICAgICAgICAgICAgIHZhciB1ID0gSShjICUgNjApO1xuICAgICAgICAgICAgICAgIHZhciBmID0gbCA8IDEwID8gXCIwXCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgIHZhciBnID0gdSA8IDEwID8gXCIwXCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMucG93ZXJDZExibC5zdHJpbmcgPSBmICsgbCArIFwiOlwiICsgZyArIHU7XG4gICAgICAgICAgICB9IGVsc2UgbiA8IGEgJiYgKG4gPSBhKSwgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3VwZGF0ZVBvd2VyKSwgX3BJbmZvLmRlZmF1bHQuaW5zLnNldFBvd2VyRnVsbFRpbWUoMCk7XG4gICAgICAgICAgICB0aGlzLmNvdW50RG93bk5vZGUuYWN0aXZlID0gaTtcbiAgICAgICAgICAgIG4gIT0gbyAmJiB0LnNldFBvd2VyKG4pO1xuICAgICAgICAgICAgdGhpcy5wb3dlckxibC5zdHJpbmcgPSBuICsgXCIvXCIgKyBhO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkJ0bkdldFBvd2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX2dldFJlc1wiLCB7aXRlbUlkOiBcInRpbWVzXCJ9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uQnRuU2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX3NldFwiLCBudWxsKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uQnRuUmVjb3JkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX3JlY29yZFwiLCBudWxsKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uQnRuUmFuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3BhbmVsTWdyLmRlZmF1bHQuaW5zLm9wZW4oXCJ1aS91aV9yYW5rXCIsIG51bGwpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25CdG5HZXRDb2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX2dldFJlc1wiLCB7XG4gICAgICAgICAgICBpdGVtSWQ6IFwiY29pblwiLFxuICAgICAgICAgICAgZ1R5cGU6IF9wSW5mby5nYW1lVHlwZS5ub3JtYWwsXG4gICAgICAgICAgICB1c2VUbzogX2xhbmcuZ2V0Q29pbkZvci5NYWluXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25CdG5HZXRDYXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyDwn5KdIOaJi+WKqOa1i+ivleeOsOmHkeWlluWKseWKn+iDve+8iOW3suaaguaXtuazqOmHiu+8iVxuICAgICAgICAvKlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn6eqIOW8gOWni+eOsOmHkeWlluWKsea1i+ivlS4uLlwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g5pi+56S65b2T5YmN546w6YeR5L2Z6aKdXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeeOsOmHkeS9meminTpcIiwgX3Jld2FyZE1nci5kZWZhdWx0LmdldENhc2hEaXNwbGF5KCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDop6blj5HnjrDph5HlpZblirHvvIjmiYvliqjmtYvor5XmqKHlvI/vvIlcbiAgICAgICAgICAgIHZhciBoYXNSZXdhcmQgPSBfcmV3YXJkTWdyLmRlZmF1bHQub25QdXp6bGVDb21wbGV0ZSgnZWFzeScsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaGFzUmV3YXJkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUg6I635b6X546w6YeR5aWW5Yqx77yBXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5paw55qE546w6YeR5L2Z6aKdOlwiLCBfcmV3YXJkTWdyLmRlZmF1bHQuZ2V0Q2FzaERpc3BsYXkoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4q2VIOacrOasoeayoeacieinpuWPkeeOsOmHkeWlluWKse+8iOmaj+acuuamgueOh++8iVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwg546w6YeR5aWW5Yqx5rWL6K+V5aSx6LSlOlwiLCBlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBjb25zb2xlLmxvZyhcIvCfkp0g546w6YeR5aWW5Yqx5omL5Yqo5rWL6K+V5bey5pqC5pe256aB55SoXCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25CdG5DaGFwdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX2NoYXB0ZXJcIiwgbnVsbCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkJ0blNpZGViYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9wYW5lbE1nci5kZWZhdWx0Lmlucy5vcGVuKFwidWkvdWlfc2lkZWJhclwiLCBudWxsKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uQnRuRW1haWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9wYW5lbE1nci5kZWZhdWx0Lmlucy5vcGVuKFwidWkvdWlfbWFpbFwiLCBudWxsKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uQnRuVGlwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX3JhY2VUaXBcIiwge3BhZ2VJZHg6IDB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uQnRuTmV3R2lmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3BhbmVsTWdyLmRlZmF1bHQuaW5zLm9wZW4oXCJ1aS91aV9uZXdHaWZ0XCIsIHtoaWRlQ2I6IG51bGx9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uQnRuRGVza3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHN3aXRjaCAoX2lkeC5wbGF0Zm9ybS5zdHJpbmcoKSkge1xuICAgICAgICAgICAgY2FzZSBfcENvbnN0LlBGQ29kZS5CeXRlZGFuY2U6XG4gICAgICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5hZGRTaG9ydGN1dCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBfcENvbnN0LlBGQ29kZS5BbGlwYXk6XG4gICAgICAgICAgICAgICAgbnVsbCA9PT0gKHQgPSBfaWR4LnBsYXRmb3JtLmFkZEdhbWVzZXRsYXR0aWNlKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5jYWxsKF9pZHgucGxhdGZvcm0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkJ0bkZyaWVuZFJhbmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9pZHgucGxhdGZvcm0uc2hvd0ZyaWVuZFJhbmsoX3BDb25zdC5TREtDb25maWcudHRab25lSWQubm9ybWFsKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uQnRuU2tpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3BhbmVsTWdyLmRlZmF1bHQuaW5zLm9wZW4oXCJ1aS91aV9za2luXCIsIG51bGwpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25CdG5TYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX3NhdmVcIiwgbnVsbCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkJ0blNpZ24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9wYW5lbE1nci5kZWZhdWx0Lmlucy5vcGVuKFwidWkvdWlfc2V2ZW5EYXlcIiwgbnVsbCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkJ0blF1ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX3F1ZXN0XCIsIG51bGwpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25CdG5TZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX2lkeC5wbGF0Zm9ybS5zdHJpbmcoKSA9PSBfcENvbnN0LlBGQ29kZS5CeXRlZGFuY2UpIHtcbiAgICAgICAgICAgIHZhciB0ID0gX2lkeC5wbGF0Zm9ybS5nZXRTeXN0ZW1EYXRhKCk7XG4gICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gMDtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuYXBwTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRG91eWluXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZG91eWluX2xpdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlICYmIF9pZHgucGxhdGZvcm0ub3BlblNlcnZpY2UoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uVGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3BJbmZvLmRlZmF1bHQuaW5zLmNsZWFyRGFpbHlEYXRhKCk7XG4gICAgfTtcbiAgICBcbiAgICAvLyDwn5KdIOeOsOmHkeWlluWKsea1i+ivleaWueazle+8iOmAmui/h+W8gOWPkeiAheaOp+WItuWPsOiwg+eUqO+8iVxuICAgIGUucHJvdG90eXBlLnRlc3RDYXNoUmV3YXJkU3lzdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfp6o9PT0g546w6YeR5aWW5Yqx57O757uf5rWL6K+V5byA5aeLID09PVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN546w6YeR5L2Z6aKdOlwiLCBfcmV3YXJkTWdyLmRlZmF1bHQuZ2V0Q2FzaERpc3BsYXkoKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOa1i+ivleS4jeWQjOmavuW6plxuICAgICAgICAgICAgdmFyIGRpZmZpY3VsdGllcyA9IFsnYmVnaW5uZXInLCAnZWFzeScsICdtZWRpdW0nLCAnaGFyZCcsICdleHBlcnQnXTtcbiAgICAgICAgICAgIHZhciB0ZXN0UmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpZmZpY3VsdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkaWZmaWN1bHR5ID0gZGlmZmljdWx0aWVzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBiZWZvcmVCYWxhbmNlID0gX3Jld2FyZE1nci5kZWZhdWx0LmdldENhc2goKTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzUmV3YXJkID0gX3Jld2FyZE1nci5kZWZhdWx0Lm9uUHV6emxlQ29tcGxldGUoZGlmZmljdWx0eSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGFmdGVyQmFsYW5jZSA9IF9yZXdhcmRNZ3IuZGVmYXVsdC5nZXRDYXNoKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGhhc1Jld2FyZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmV3YXJkQW1vdW50ID0gYWZ0ZXJCYWxhbmNlIC0gYmVmb3JlQmFsYW5jZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIVcIiwgZGlmZmljdWx0eSwgXCLpmr7luqbojrflvpflpZblirE6XCIsIChyZXdhcmRBbW91bnQvMTAwKS50b0ZpeGVkKDIpLCBcIuWFg1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGVzdFJlc3VsdHMucHVzaCh7ZGlmZmljdWx0eTogZGlmZmljdWx0eSwgcmV3YXJkOiByZXdhcmRBbW91bnR9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKtlVwiLCBkaWZmaWN1bHR5LCBcIumavuW6puayoeacieinpuWPkeWlluWKsVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+PhiDmtYvor5XlrozmiJDvvIHmgLvkvZnpop06XCIsIF9yZXdhcmRNZ3IuZGVmYXVsdC5nZXRDYXNoRGlzcGxheSgpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+TiiDojrflvpflpZblirHnmoTmtYvor5U6XCIsIHRlc3RSZXN1bHRzKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwg5rWL6K+V5aSx6LSlOlwiLCBlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuYWRkRGVza3RvcENiID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSBfcEluZm8uZGVmYXVsdC5pbnMuZ2V0QWRkRGVzaygpO1xuICAgICAgICB0ICYmICFlICYmIChfcEluZm8uZGVmYXVsdC5pbnMuc2V0QWRkRGVzayghMCksIHRoaXMuZ2V0RGVza3RvcFJld2FyZCgpLCB0aGlzLnVwZGF0ZURlc2t0b3AoKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXREZXNrdG9wUmV3YXJkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIHZhciBvID1cbiAgICAgICAgICAgIChudWxsID09PSAoZSA9IG51bGwgPT09ICh0ID0gX2NmZ01nci5kZWZhdWx0LnNlcnZlckNmZy5hZGRfZGVza3RvcCkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5ydWxlcykgfHxcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gZVxuICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgOiBlLnRpbWVzKSB8fCA1MDtcbiAgICAgICAgX3BJbmZvLmRlZmF1bHQuaW5zLmFkZFBvd2VyKG8pO1xuICAgICAgICB2YXIgbiA9IHRoaXMuZGVza3RvcE5vZGUuaXNWYWxpZCA/IHRoaXMuZGVza3RvcE5vZGUucG9zaXRpb24gOiB0aGlzLmRlc2tUb3BOb2RlUG9zO1xuICAgICAgICB2YXIgaSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobik7XG4gICAgICAgIF9wYW5lbE1nci5kZWZhdWx0Lmlucy5vcGVuKFwidWkvdWlfZmx5QW5pXCIsIHtpdGVtRGF0YXM6IFt7aXRlbUlkOiBcInRpbWVzXCIsIHdvcmxkUG9zOiBpLCB2YWx1ZTogb31dfSk7XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtUKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiY291bnREb3duTm9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1QoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwiY29pbkxibFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1QoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwiY2FzaExibFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1QoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwicG93ZXJMYmxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtUKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcInBvd2VyQ2RMYmxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtUKGNjLlNwcml0ZSldLCBlLnByb3RvdHlwZSwgXCJwb3dlclNwXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbVChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcInNpZGViYXJOb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbVChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImRlc2t0b3BOb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbVChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcIm5ld0dpZnRCdG5cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtUKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwibmV3R2lmdEJ0bkxpZ2h0XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbVChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImZyaWVuZFJhbmtCdG5cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtUKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiY2xlYXJCdG5cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtUKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwic2lkZWJhclJlZFBvaW50Tm9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1QoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwibWFpbFJlZFBvaW50TGJsXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbVChjYy5MYWJlbCldLCBlLnByb3RvdHlwZSwgXCJ0eHRfbmFtZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1QoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwiZGVza0xiXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbVChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcInNhdmVCdG5cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtUKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcInNpZ25SZWRMYlwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1QoX2hlYWQuZGVmYXVsdCldLCBlLnByb3RvdHlwZSwgXCJoZWFkQ29tcFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1QoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJzZXJ2aWNlTm9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1QoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwidGFza1JlZExiXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW1NdLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBQO1xuIl19