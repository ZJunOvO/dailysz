"use strict";
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