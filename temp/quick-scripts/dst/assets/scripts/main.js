
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eeafcEk481Ax46HoxkVC6Oy', 'main');
// scripts/main.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var a;

var _evts = require("evts");

var _idx = require("idx");

var _pConst = require("pConst");

var _request = require("request");

var _res = require("res");

var _sound = require("sound");

var _time = require("time");

var _uData = require("uData");

var _cfgMgr = require("cfgMgr");

var _page_jigsaw = require("page_jigsaw");

var _top = require("top");

var _global = require("global");

var _bagMgr = require("bagMgr");

var _challengeMgr = require("challengeMgr");

var _jigsawMgr = require("jigsawMgr");

var _newJigMgr = require("newJigMgr");

var _panelMgr = require("panelMgr");

var _shopMgr = require("shopMgr");

var _tipMgr = require("tipMgr");

var _pInfo = require("pInfo");

var k = cc._decorator;
var R = k.ccclass;
var N = k.property;

(function (t) {
  t.bottomShowBtns = "bottomShowBtns";
  t.bottomHideBtns = "bottomHideBtns";
})(a || (a = {}));

var C = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.blockComp = null;
    e.pages = null;
    e.downNode = null;
    e.downAnis = [];
    e.top = null;
    e.lPfb = null;
    e.powerSp = null;
    e.camera = null;
    e.rankBtn1 = null;
    e.btnBgNode = null;
    e.curPageIdx = 2;
    e.viewPage = {};
    e.viewLPage = {};
    e.viewPageInd = ["page_shop", "page_jigsaw", "page_level", "page_challenge", "page_race"];
    e.canUseL = [];
    e.isAni = !1;
    e.redLbs = [];
    e.authorized = !1;
    e.isWx = !1;
    return e;
  }

  var o;

  __extends(e, t);

  o = e;

  e.prototype.onLoad = function () {
    _global["default"].padScale && (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_HEIGHT), this.btnBgNode.scaleX = _global["default"].padScale);

    _sound["default"].ins.playBGM();

    this.viewPage.page_level = this.pages.getChildByName("page_level");
    (_pInfo["default"].ins.isMianLocked() || _global["default"].loadToRace) && (_pInfo["default"].ins.isMianLocked() && (_global["default"].loadToRace = 4), this.viewPage.page_level.active = !1, this.chgPage(_global["default"].loadToRace));
    this.loadDown();

    _evts["default"].opE.on(this.onOperTap.bind(this));

    o.ins = this;
    this.upMainRed();
    this.isWx = _idx.platform.string() == _pConst.PFCode.Wechat;
    this.checkPopNewGift();
    this.checkPopPrivacy();
    _global["default"].loadCb || (this.checkSerPack(), _global["default"].loadCb = !0);
  };

  e.prototype.onDestroy = function () {
    this.hideWxBtns();
    o.ins = null;
    delete o.ins;
  };

  e.prototype.onOperTap = function (t) {
    var e = null == t ? void 0 : t.action;
    if (e) switch (e) {
      case _evts["default"].MAINJUMP:
        this.jumpToPage(t.data, t.param);
        break;

      case _evts["default"].UPD_MAIN_RED:
        this.upMainRed();
        break;

      case _evts["default"].CHECK_WX_BTNS:
        this.checkGetUserInfo();
        break;

      case _evts["default"].HIDE_WX_BTNS:
        this.hideWxBtns();
    }
  };

  e.prototype.onEnable = function () {};

  e.prototype.onDisable = function () {};

  e.prototype.jumpToPage = function (t, e) {
    var o = this;

    if (!this.isAni) {
      var n = this.curPageIdx;

      if (n != t) {
        if (3 == t) return void _tipMgr["default"].ins.showTip("暂未开放");
        var i = this.downAnis;
        i[n].play(a.bottomHideBtns);
        i[t].play(a.bottomShowBtns);
        this.curPageIdx = t;
        cc.Tween.stopAllByTarget(this.pages);
        var r = t > n ? -1 : 1;
        var s = this.pages.x + cc.view.getVisibleSize().width * r;
        if (this.viewPage[this.viewPageInd[t]] || this.viewLPage[this.viewPageInd[t]]) this.viewPage[this.viewPageInd[t]].x = -s, this.viewPage[this.viewPageInd[t]] && (this.viewPage[this.viewPageInd[t]].active = !0);else {
          var c = this.canUseL.shift();
          c || (c = cc.instantiate(this.lPfb));
          c.setPosition(-s, 0);
          this.pages.addChild(c, 100);
          this.loadPage(this.viewPageInd[t], function (e) {
            var n = cc.instantiate(e);
            o.viewPage[o.viewPageInd[t]] = n;
            !n.active && (n.active = !0);
            n.setPosition(-s, 0);
            o.pages.addChild(n);
            c.removeFromParent();
            o.canUseL.push(c);
          });
        }
        e && "festival" === e && this.viewPage[this.viewPageInd[t]] && this.viewPage[this.viewPageInd[t]].getComponent(_page_jigsaw["default"]).chgToFes();
        this.isAni = !0;
        cc.tween(this.pages).to(0.5, {
          x: s
        }, {
          easing: this.customEaseInOut
        }).call(function () {
          o.viewPage[o.viewPageInd[n]] && (o.viewPage[o.viewPageInd[n]].active = !1);
          o.isAni = !1;
        }).start();
        var l = this.checkGetUserInfo();
        "page_level" == this.viewPageInd[t] ? l && this.setWxBtnShow1(!0) : "page_level" == this.viewPageInd[n] && (this.setWxBtnShow1(!1), this.isAni = !0);
      }
    }
  };

  e.prototype.chgPage = function (t) {
    var e = this;

    if (!this.isAni) {
      var o = this.curPageIdx;

      if (o != t) {
        if (3 == t) return void _tipMgr["default"].ins.showTip("暂未开放");
        this.curPageIdx = t;
        var n = t > o ? -1 : 1;
        var i = this.pages.x + cc.view.getVisibleSize().width * n;
        if (this.viewPage[this.viewPageInd[t]] || this.viewLPage[this.viewPageInd[t]]) this.viewPage[this.viewPageInd[t]].x = -i, this.viewPage[this.viewPageInd[t]] && (this.viewPage[this.viewPageInd[t]].active = !0);else {
          var r = this.canUseL.shift();
          r || (r = cc.instantiate(this.lPfb));
          r.setPosition(-i, 0);
          this.pages.addChild(r, 100);
          this.loadPage(this.viewPageInd[t], function (o) {
            var n = cc.instantiate(o);
            e.viewPage[e.viewPageInd[t]] = n;
            !n.active && (n.active = !0);
            n.setPosition(-i, 0);
            e.pages.addChild(n);
            r.removeFromParent();
            e.canUseL.push(r);
          });
        }
        this.pages.x = i;
        this.viewPage[this.viewPageInd[o]] && (this.viewPage[this.viewPageInd[o]].active = !1);
      }
    }
  };

  e.prototype.lockBtnState = function (t) {
    var e = this.downAnis;
    e[2].play(a.bottomHideBtns, 0.05);
    e[t].play(a.bottomShowBtns, 0.2);
  };

  e.prototype.customEaseInOut = function (t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  };

  e.prototype.loadDown = function () {
    var t = this;

    _res["default"].ins.getBundleByString("prefab").then(function (e) {
      var o = "prefab/down/";
      var n = ["btn_quest", "btn_jigsaw", "btn_puzzle", "btn_chanllage", "btn_race"];
      e.loadDir(o, cc.Prefab, function (i) {
        if (!i && t.node && t.node.isValid) {
          var r = cc.view.getVisibleSize().width / 5;
          var a = 2 * -r;
          var s = t.downNode;
          n.forEach(function (n, i) {
            var c = cc.instantiate(e.get(o + n, cc.Prefab));
            var l = cc.find("img/tip/num", c);
            t.redLbs.push(l.getComponent(cc.Label)), c.setPosition(a, 18), c.setParent(s), c.width = r, a += r, t.downAnis.push(c.getComponent(cc.Animation)), c.on("click", function () {
              t.jumpToPage(i);
            }, t), "btn_race" == n && (t.rankBtn2 = c);
          });
          t.createBtns();
          (_pInfo["default"].ins.isMianLocked() || _global["default"].loadToRace) && (_pInfo["default"].ins.isMianLocked() && (_global["default"].loadToRace = 4), t.lockBtnState(_global["default"].loadToRace), _global["default"].loadToRace = 0);
          t.upMainRed();
        }
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('resSps')", t);
    });
  };

  e.prototype.loadPage = function (t, e) {
    this.viewLPage[t] || (this.viewLPage[t] = !0, _res["default"].ins.lPre("prefab/" + t).then(function (t) {
      e && e(t);
    })["catch"](function () {
      console.error("getPrefabErr");
    }));
  };

  e.prototype.usePower = function (t, e, o) {
    if (!(t > 0)) {
      _pInfo["default"].ins.addPower(t);

      var n = this.powerSp;
      var i = n.node;
      var r = i.parent.convertToWorldSpaceAR(i.position);
      this.node.convertToNodeSpaceAR(r, r);
      var a = new cc.Node("flyPower");
      a.addComponent(cc.Sprite).spriteFrame = n.spriteFrame;
      a.setParent(this.node);
      this.node.convertToNodeSpaceAR(e, e);
      e.add(cc.v3(cc.winSize.width / 2, cc.winSize.height / 2));
      cc.tween(a).set({
        position: r,
        scale: 0.8
      }).parallel(cc.tween(a).by(0.2, {
        scale: 0.2
      }).delay(0.1).by(0.2, {
        scale: -0.2
      }), cc.tween(a).to(0.5, {
        position: e
      })).call(function () {
        a.destroy();
        _global["default"].levelDone ? _pInfo.chgScene(_pInfo.sceneType.game, {
          gameType: _pInfo.gameType.freedom,
          freedomSize: o
        }) : _pInfo.chgScene(_pInfo.sceneType.game);
      }).start();
    }
  };

  e.prototype.getWorldPointByTouch = function (t) {
    var e = cc.Vec2.ZERO;
    this.camera.getScreenToWorldPoint(t.getLocation(), e);
    return e;
  };

  e.prototype.upMainRed = function () {
    var t;
    var e;

    var o = _jigsawMgr["default"].ins.getUnPlacedNum() + _newJigMgr["default"].ins.getUnPlacedNum();

    var n = this.redLbs[1];
    if (n) if (o > 0) {
      var i = o > 99 ? "99+" : o + "";
      n.node.parent.active = !0;
      n.string = i + "";
      n.node.x = _global["default"].getCharXOffset(n.string);
    } else n.node.parent.active = !1;

    var r = _bagMgr["default"].ins.getItemCount("qw_line_ticket");

    var a = this.redLbs[4];
    a && (r > 0 ? (a.node.parent.active = !0, a.string = r + "", a.node.x = _global["default"].getCharXOffset(a.string)) : a.node.parent.active = !1);
    var s = (null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.daily_challenge) || void 0 === e ? void 0 : e.open) || 50;
    _pInfo["default"].ins.getPuzzleLvl() > s && (_challengeMgr["default"].ins.getTodayIsFin(), _challengeMgr["default"].ins.getAllMonthRed());

    var c = _shopMgr["default"].ins.getAllRed();

    var l = this.redLbs[0];
    l && (c > 0 ? (l.node.parent.active = !0, l.string = c + "") : l.node.parent.active = !1);
  };

  e.prototype.checkPopNewGift = function () {
    _global["default"].twoDaysLeft && (_global["default"].twoDaysLeft = !1, _panelMgr["default"].ins.open("ui/ui_backReward", null).then(function () {
      _global["default"].isPopNewGift = !0;
    }));
  };

  e.prototype.checkPopPrivacy = function () {
    _idx.platform.isQQ && _uData["default"].ins.getIsNewUser() && _panelMgr["default"].ins.open("ui/ui_privacy", {}, {
      MaskNoHide: !0
    });
  };

  e.prototype.checkSerPack = function () {// _request.default.ins
    //     .getUnshippedOrders()
    //     .then(function (t) {
    //         t &&
    //             t.status &&
    //             t.data &&
    //             t.data.length &&
    //             _panelMgr.default.ins.open("ui/ui_reiGift", {serPacks: t.data});
    //     })
    //     .catch(function () {});
  };

  e.prototype.createBtns = function () {
    this.isWx && (this.createUserInfoButton1(), this.createUserInfoButton2());
  };

  e.prototype.checkGetUserInfo = function () {
    if (this.isWx) {
      var t = !1;
      (_time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3)) - _pInfo["default"].ins.getRankLastTimeData() >= 3600 && !this.authorized && !_panelMgr["default"].ins.hasPop() ? (this.showWxBtns(), t = !0) : (this.hideWxBtns(), t = !1);
      return t;
    }
  };

  e.prototype.showWxBtns = function () {
    this.isWx && (this.setWxBtnShow1(!0), this.setWxBtnShow2(!0));
  };

  e.prototype.hideWxBtns = function () {
    this.isWx && (this.setWxBtnShow1(!1), this.setWxBtnShow2(!1));
  };

  e.prototype.setWxBtnShow1 = function (t) {
    this.isWx && null != this.wxBtn1 && (t ? this.wxBtn1.show() : this.wxBtn1.hide());
  };

  e.prototype.setWxBtnShow2 = function (t) {
    this.isWx && null != this.wxBtn2 && (t ? this.wxBtn2.show() : this.wxBtn2.hide());
  };

  e.prototype.createUserInfoButton1 = function () {
    var t = this;
    wx.getSetting({
      success: function success(e) {
        e.authSetting["scope.userInfo"] ? (t.authorized = !0, t.updateUserInfo()) : (t.wxBtn1 = t.authUersInfo(t.rankBtn1), t.wxBtn1.onTap(function (e) {
          var o;
          var n;
          console.log(JSON.stringify(e));
          "getUserInfo:ok" == e.errMsg ? (t.setUserInfo1(e.userInfo), null === (o = t.wxBtn2) || void 0 === o || o.destroy(), t.wxBtn2 = null, null === (n = t.wxBtn1) || void 0 === n || n.destroy(), t.wxBtn1 = null) : (console.log("授权失败"), t.getFail1());
        }), t.checkGetUserInfo());
      }
    });
  };

  e.prototype.createUserInfoButton2 = function () {
    var t = this;
    wx.getSetting({
      success: function success(e) {
        e.authSetting["scope.userInfo"] ? (t.authorized = !0, t.updateUserInfo()) : (t.wxBtn2 = t.authUersInfo(t.rankBtn2), t.wxBtn2.onTap(function (e) {
          var o;
          var n;
          console.log(JSON.stringify(e));
          "getUserInfo:ok" == e.errMsg ? (t.setUserInfo2(e.userInfo), null === (o = t.wxBtn2) || void 0 === o || o.destroy(), t.wxBtn2 = null, null === (n = t.wxBtn1) || void 0 === n || n.destroy(), t.wxBtn1 = null) : (console.log("授权失败"), t.getFail2());
        }), t.checkGetUserInfo());
      }
    });
  };

  e.prototype.authUersInfo = function (t) {
    var e = wx.getSystemInfoSync();
    var o = e.screenWidth;
    var n = e.screenHeight;
    var i = 0;
    var r = 0;

    if (t && cc.isValid(t)) {
      var a = e.screenWidth / cc.winSize.width;
      var s = t.convertToWorldSpaceAR(cc.Vec2.ZERO);
      var c = 0.5 * (cc.view.getVisibleSize().height - cc.winSize.height);
      r = n - (s.y + 0.5 * t.height + c) * a;
      i = (s.x - 0.5 * t.width) * a;
      o = t.width * a;
      n = t.height * a;
    }

    return wx.createUserInfoButton({
      type: "text",
      text: "",
      style: {
        left: i,
        top: r,
        width: o,
        height: n,
        lineHeight: 40,
        backgroundColor: "#00000000",
        color: "#ffffff",
        textAlign: "center",
        fontSize: 16,
        borderRadius: 4,
        borderColor: "#ffffff",
        borderWidth: 0
      }
    });
  };

  e.prototype.updateUserInfo = function () {
    wx.getUserInfo({
      success: function success(t) {
        _request["default"].ins.updateUserInfo(t.userInfo);
      }
    });
  };

  e.prototype.setUserInfo1 = function () {
    this.authorized = !0;
    this.checkGetUserInfo();

    _panelMgr["default"].ins.open("ui/ui_rank", null);
  };

  e.prototype.setUserInfo2 = function () {
    this.authorized = !0;
    this.jumpToPage(4);
  };

  e.prototype.getFail1 = function () {
    var t = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);

    _pInfo["default"].ins.setRankLastTimeData(t);

    this.checkGetUserInfo();

    _panelMgr["default"].ins.open("ui/ui_rank", null);
  };

  e.prototype.getFail2 = function () {
    var t = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);

    _pInfo["default"].ins.setRankLastTimeData(t);

    this.jumpToPage(4);
  };

  __decorate([N(cc.BlockInputEvents)], e.prototype, "blockComp", void 0);

  __decorate([N(cc.Node)], e.prototype, "pages", void 0);

  __decorate([N(cc.Node)], e.prototype, "downNode", void 0);

  __decorate([N(_top["default"])], e.prototype, "top", void 0);

  __decorate([N(cc.Prefab)], e.prototype, "lPfb", void 0);

  __decorate([N(cc.Sprite)], e.prototype, "powerSp", void 0);

  __decorate([N(cc.Camera)], e.prototype, "camera", void 0);

  __decorate([N(cc.Node)], e.prototype, "rankBtn1", void 0);

  __decorate([N(cc.Node)], e.prototype, "btnBgNode", void 0);

  return o = __decorate([R], e);
}(cc.Component);

exports["default"] = C;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJhIiwiX2V2dHMiLCJyZXF1aXJlIiwiX2lkeCIsIl9wQ29uc3QiLCJfcmVxdWVzdCIsIl9yZXMiLCJfc291bmQiLCJfdGltZSIsIl91RGF0YSIsIl9jZmdNZ3IiLCJfcGFnZV9qaWdzYXciLCJfdG9wIiwiX2dsb2JhbCIsIl9iYWdNZ3IiLCJfY2hhbGxlbmdlTWdyIiwiX2ppZ3Nhd01nciIsIl9uZXdKaWdNZ3IiLCJfcGFuZWxNZ3IiLCJfc2hvcE1nciIsIl90aXBNZ3IiLCJfcEluZm8iLCJrIiwiY2MiLCJfZGVjb3JhdG9yIiwiUiIsImNjY2xhc3MiLCJOIiwicHJvcGVydHkiLCJ0IiwiYm90dG9tU2hvd0J0bnMiLCJib3R0b21IaWRlQnRucyIsIkMiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJibG9ja0NvbXAiLCJwYWdlcyIsImRvd25Ob2RlIiwiZG93bkFuaXMiLCJ0b3AiLCJsUGZiIiwicG93ZXJTcCIsImNhbWVyYSIsInJhbmtCdG4xIiwiYnRuQmdOb2RlIiwiY3VyUGFnZUlkeCIsInZpZXdQYWdlIiwidmlld0xQYWdlIiwidmlld1BhZ2VJbmQiLCJjYW5Vc2VMIiwiaXNBbmkiLCJyZWRMYnMiLCJhdXRob3JpemVkIiwiaXNXeCIsIm8iLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJwYWRTY2FsZSIsInZpZXciLCJzZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSIsIlJlc29sdXRpb25Qb2xpY3kiLCJGSVhFRF9IRUlHSFQiLCJzY2FsZVgiLCJpbnMiLCJwbGF5QkdNIiwicGFnZV9sZXZlbCIsImdldENoaWxkQnlOYW1lIiwiaXNNaWFuTG9ja2VkIiwibG9hZFRvUmFjZSIsImFjdGl2ZSIsImNoZ1BhZ2UiLCJsb2FkRG93biIsIm9wRSIsIm9uIiwib25PcGVyVGFwIiwiYmluZCIsInVwTWFpblJlZCIsInBsYXRmb3JtIiwic3RyaW5nIiwiUEZDb2RlIiwiV2VjaGF0IiwiY2hlY2tQb3BOZXdHaWZ0IiwiY2hlY2tQb3BQcml2YWN5IiwibG9hZENiIiwiY2hlY2tTZXJQYWNrIiwib25EZXN0cm95IiwiaGlkZVd4QnRucyIsImFjdGlvbiIsIk1BSU5KVU1QIiwianVtcFRvUGFnZSIsImRhdGEiLCJwYXJhbSIsIlVQRF9NQUlOX1JFRCIsIkNIRUNLX1dYX0JUTlMiLCJjaGVja0dldFVzZXJJbmZvIiwiSElERV9XWF9CVE5TIiwib25FbmFibGUiLCJvbkRpc2FibGUiLCJzaG93VGlwIiwiaSIsInBsYXkiLCJUd2VlbiIsInN0b3BBbGxCeVRhcmdldCIsInIiLCJzIiwieCIsImdldFZpc2libGVTaXplIiwid2lkdGgiLCJjIiwic2hpZnQiLCJpbnN0YW50aWF0ZSIsInNldFBvc2l0aW9uIiwiYWRkQ2hpbGQiLCJsb2FkUGFnZSIsInJlbW92ZUZyb21QYXJlbnQiLCJwdXNoIiwiZ2V0Q29tcG9uZW50IiwiY2hnVG9GZXMiLCJ0d2VlbiIsInRvIiwiZWFzaW5nIiwiY3VzdG9tRWFzZUluT3V0IiwiY2FsbCIsInN0YXJ0IiwibCIsInNldFd4QnRuU2hvdzEiLCJsb2NrQnRuU3RhdGUiLCJNYXRoIiwicG93IiwiZ2V0QnVuZGxlQnlTdHJpbmciLCJ0aGVuIiwibG9hZERpciIsIlByZWZhYiIsIm5vZGUiLCJpc1ZhbGlkIiwiZm9yRWFjaCIsImdldCIsImZpbmQiLCJMYWJlbCIsInNldFBhcmVudCIsIkFuaW1hdGlvbiIsInJhbmtCdG4yIiwiY3JlYXRlQnRucyIsImNvbnNvbGUiLCJlcnJvciIsImxQcmUiLCJ1c2VQb3dlciIsImFkZFBvd2VyIiwicGFyZW50IiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwicG9zaXRpb24iLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsIk5vZGUiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImFkZCIsInYzIiwid2luU2l6ZSIsImhlaWdodCIsInNldCIsInNjYWxlIiwicGFyYWxsZWwiLCJieSIsImRlbGF5IiwiZGVzdHJveSIsImxldmVsRG9uZSIsImNoZ1NjZW5lIiwic2NlbmVUeXBlIiwiZ2FtZSIsImdhbWVUeXBlIiwiZnJlZWRvbSIsImZyZWVkb21TaXplIiwiZ2V0V29ybGRQb2ludEJ5VG91Y2giLCJWZWMyIiwiWkVSTyIsImdldFNjcmVlblRvV29ybGRQb2ludCIsImdldExvY2F0aW9uIiwiZ2V0VW5QbGFjZWROdW0iLCJnZXRDaGFyWE9mZnNldCIsImdldEl0ZW1Db3VudCIsInNlcnZlckNmZyIsImRhaWx5X2NoYWxsZW5nZSIsIm9wZW4iLCJnZXRQdXp6bGVMdmwiLCJnZXRUb2RheUlzRmluIiwiZ2V0QWxsTW9udGhSZWQiLCJnZXRBbGxSZWQiLCJ0d29EYXlzTGVmdCIsImlzUG9wTmV3R2lmdCIsImlzUVEiLCJnZXRJc05ld1VzZXIiLCJNYXNrTm9IaWRlIiwiY3JlYXRlVXNlckluZm9CdXR0b24xIiwiY3JlYXRlVXNlckluZm9CdXR0b24yIiwic2VydmVyVGltZSIsImZsb29yIiwiRGF0ZSIsImdldFRpbWUiLCJnZXRSYW5rTGFzdFRpbWVEYXRhIiwiaGFzUG9wIiwic2hvd1d4QnRucyIsInNldFd4QnRuU2hvdzIiLCJ3eEJ0bjEiLCJzaG93IiwiaGlkZSIsInd4QnRuMiIsInd4IiwiZ2V0U2V0dGluZyIsInN1Y2Nlc3MiLCJhdXRoU2V0dGluZyIsInVwZGF0ZVVzZXJJbmZvIiwiYXV0aFVlcnNJbmZvIiwib25UYXAiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyTXNnIiwic2V0VXNlckluZm8xIiwidXNlckluZm8iLCJnZXRGYWlsMSIsInNldFVzZXJJbmZvMiIsImdldEZhaWwyIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJzY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsInkiLCJjcmVhdGVVc2VySW5mb0J1dHRvbiIsInR5cGUiLCJ0ZXh0Iiwic3R5bGUiLCJsZWZ0IiwibGluZUhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZ2V0VXNlckluZm8iLCJzZXRSYW5rTGFzdFRpbWVEYXRhIiwiX19kZWNvcmF0ZSIsIkJsb2NrSW5wdXRFdmVudHMiLCJDYW1lcmEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUVDLEtBQUssRUFBRSxDQUFDO0FBQVYsQ0FBN0M7QUFDQSxJQUFJQyxDQUFKOztBQUNBLElBQUlDLEtBQUssR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBbkI7O0FBQ0EsSUFBSUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsS0FBRCxDQUFsQjs7QUFDQSxJQUFJRSxPQUFPLEdBQUdGLE9BQU8sQ0FBQyxRQUFELENBQXJCOztBQUNBLElBQUlHLFFBQVEsR0FBR0gsT0FBTyxDQUFDLFNBQUQsQ0FBdEI7O0FBQ0EsSUFBSUksSUFBSSxHQUFHSixPQUFPLENBQUMsS0FBRCxDQUFsQjs7QUFDQSxJQUFJSyxNQUFNLEdBQUdMLE9BQU8sQ0FBQyxPQUFELENBQXBCOztBQUNBLElBQUlNLEtBQUssR0FBR04sT0FBTyxDQUFDLE1BQUQsQ0FBbkI7O0FBQ0EsSUFBSU8sTUFBTSxHQUFHUCxPQUFPLENBQUMsT0FBRCxDQUFwQjs7QUFDQSxJQUFJUSxPQUFPLEdBQUdSLE9BQU8sQ0FBQyxRQUFELENBQXJCOztBQUNBLElBQUlTLFlBQVksR0FBR1QsT0FBTyxDQUFDLGFBQUQsQ0FBMUI7O0FBQ0EsSUFBSVUsSUFBSSxHQUFHVixPQUFPLENBQUMsS0FBRCxDQUFsQjs7QUFDQSxJQUFJVyxPQUFPLEdBQUdYLE9BQU8sQ0FBQyxRQUFELENBQXJCOztBQUNBLElBQUlZLE9BQU8sR0FBR1osT0FBTyxDQUFDLFFBQUQsQ0FBckI7O0FBQ0EsSUFBSWEsYUFBYSxHQUFHYixPQUFPLENBQUMsY0FBRCxDQUEzQjs7QUFDQSxJQUFJYyxVQUFVLEdBQUdkLE9BQU8sQ0FBQyxXQUFELENBQXhCOztBQUNBLElBQUllLFVBQVUsR0FBR2YsT0FBTyxDQUFDLFdBQUQsQ0FBeEI7O0FBQ0EsSUFBSWdCLFNBQVMsR0FBR2hCLE9BQU8sQ0FBQyxVQUFELENBQXZCOztBQUNBLElBQUlpQixRQUFRLEdBQUdqQixPQUFPLENBQUMsU0FBRCxDQUF0Qjs7QUFDQSxJQUFJa0IsT0FBTyxHQUFHbEIsT0FBTyxDQUFDLFFBQUQsQ0FBckI7O0FBQ0EsSUFBSW1CLE1BQU0sR0FBR25CLE9BQU8sQ0FBQyxPQUFELENBQXBCOztBQUNBLElBQUlvQixDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsQ0FBQyxVQUFTQyxDQUFULEVBQVk7RUFDVEEsQ0FBQyxDQUFDQyxjQUFGLEdBQW1CLGdCQUFuQjtFQUNBRCxDQUFDLENBQUNFLGNBQUYsR0FBbUIsZ0JBQW5CO0FBQ0gsQ0FIRCxFQUdHL0IsQ0FBQyxLQUFLQSxDQUFDLEdBQUcsRUFBVCxDQUhKOztBQUlBLElBQUlnQyxDQUFDLEdBQUksVUFBU0gsQ0FBVCxFQUFZO0VBQ2pCLFNBQVNJLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTSixDQUFULElBQWNBLENBQUMsQ0FBQ0ssS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csU0FBRixHQUFjLElBQWQ7SUFDQUgsQ0FBQyxDQUFDSSxLQUFGLEdBQVUsSUFBVjtJQUNBSixDQUFDLENBQUNLLFFBQUYsR0FBYSxJQUFiO0lBQ0FMLENBQUMsQ0FBQ00sUUFBRixHQUFhLEVBQWI7SUFDQU4sQ0FBQyxDQUFDTyxHQUFGLEdBQVEsSUFBUjtJQUNBUCxDQUFDLENBQUNRLElBQUYsR0FBUyxJQUFUO0lBQ0FSLENBQUMsQ0FBQ1MsT0FBRixHQUFZLElBQVo7SUFDQVQsQ0FBQyxDQUFDVSxNQUFGLEdBQVcsSUFBWDtJQUNBVixDQUFDLENBQUNXLFFBQUYsR0FBYSxJQUFiO0lBQ0FYLENBQUMsQ0FBQ1ksU0FBRixHQUFjLElBQWQ7SUFDQVosQ0FBQyxDQUFDYSxVQUFGLEdBQWUsQ0FBZjtJQUNBYixDQUFDLENBQUNjLFFBQUYsR0FBYSxFQUFiO0lBQ0FkLENBQUMsQ0FBQ2UsU0FBRixHQUFjLEVBQWQ7SUFDQWYsQ0FBQyxDQUFDZ0IsV0FBRixHQUFnQixDQUFDLFdBQUQsRUFBYyxhQUFkLEVBQTZCLFlBQTdCLEVBQTJDLGdCQUEzQyxFQUE2RCxXQUE3RCxDQUFoQjtJQUNBaEIsQ0FBQyxDQUFDaUIsT0FBRixHQUFZLEVBQVo7SUFDQWpCLENBQUMsQ0FBQ2tCLEtBQUYsR0FBVSxDQUFDLENBQVg7SUFDQWxCLENBQUMsQ0FBQ21CLE1BQUYsR0FBVyxFQUFYO0lBQ0FuQixDQUFDLENBQUNvQixVQUFGLEdBQWUsQ0FBQyxDQUFoQjtJQUNBcEIsQ0FBQyxDQUFDcUIsSUFBRixHQUFTLENBQUMsQ0FBVjtJQUNBLE9BQU9yQixDQUFQO0VBQ0g7O0VBQ0QsSUFBSXNCLENBQUo7O0VBQ0FDLFNBQVMsQ0FBQ3ZCLENBQUQsRUFBSUosQ0FBSixDQUFUOztFQUNBMEIsQ0FBQyxHQUFHdEIsQ0FBSjs7RUFDQUEsQ0FBQyxDQUFDd0IsU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVc7SUFDNUI3QyxPQUFPLFdBQVAsQ0FBZ0I4QyxRQUFoQixLQUNLcEMsRUFBRSxDQUFDcUMsSUFBSCxDQUFRQyx1QkFBUixDQUFnQyxHQUFoQyxFQUFxQyxJQUFyQyxFQUEyQ3RDLEVBQUUsQ0FBQ3VDLGdCQUFILENBQW9CQyxZQUEvRCxHQUNJLEtBQUtsQixTQUFMLENBQWVtQixNQUFmLEdBQXdCbkQsT0FBTyxXQUFQLENBQWdCOEMsUUFGakQ7O0lBR0FwRCxNQUFNLFdBQU4sQ0FBZTBELEdBQWYsQ0FBbUJDLE9BQW5COztJQUNBLEtBQUtuQixRQUFMLENBQWNvQixVQUFkLEdBQTJCLEtBQUs5QixLQUFMLENBQVcrQixjQUFYLENBQTBCLFlBQTFCLENBQTNCO0lBQ0EsQ0FBQy9DLE1BQU0sV0FBTixDQUFlNEMsR0FBZixDQUFtQkksWUFBbkIsTUFBcUN4RCxPQUFPLFdBQVAsQ0FBZ0J5RCxVQUF0RCxNQUNDakQsTUFBTSxXQUFOLENBQWU0QyxHQUFmLENBQW1CSSxZQUFuQixPQUFzQ3hELE9BQU8sV0FBUCxDQUFnQnlELFVBQWhCLEdBQTZCLENBQW5FLEdBQ0ksS0FBS3ZCLFFBQUwsQ0FBY29CLFVBQWQsQ0FBeUJJLE1BQXpCLEdBQWtDLENBQUMsQ0FEdkMsRUFFRyxLQUFLQyxPQUFMLENBQWEzRCxPQUFPLFdBQVAsQ0FBZ0J5RCxVQUE3QixDQUhKO0lBSUEsS0FBS0csUUFBTDs7SUFDQXhFLEtBQUssV0FBTCxDQUFjeUUsR0FBZCxDQUFrQkMsRUFBbEIsQ0FBcUIsS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQXJCOztJQUNBdEIsQ0FBQyxDQUFDVSxHQUFGLEdBQVEsSUFBUjtJQUNBLEtBQUthLFNBQUw7SUFDQSxLQUFLeEIsSUFBTCxHQUFZbkQsSUFBSSxDQUFDNEUsUUFBTCxDQUFjQyxNQUFkLE1BQTBCNUUsT0FBTyxDQUFDNkUsTUFBUixDQUFlQyxNQUFyRDtJQUNBLEtBQUtDLGVBQUw7SUFDQSxLQUFLQyxlQUFMO0lBQ0F2RSxPQUFPLFdBQVAsQ0FBZ0J3RSxNQUFoQixLQUEyQixLQUFLQyxZQUFMLElBQXNCekUsT0FBTyxXQUFQLENBQWdCd0UsTUFBaEIsR0FBeUIsQ0FBQyxDQUEzRTtFQUNILENBbEJEOztFQW1CQXBELENBQUMsQ0FBQ3dCLFNBQUYsQ0FBWThCLFNBQVosR0FBd0IsWUFBVztJQUMvQixLQUFLQyxVQUFMO0lBQ0FqQyxDQUFDLENBQUNVLEdBQUYsR0FBUSxJQUFSO0lBQ0EsT0FBT1YsQ0FBQyxDQUFDVSxHQUFUO0VBQ0gsQ0FKRDs7RUFLQWhDLENBQUMsQ0FBQ3dCLFNBQUYsQ0FBWW1CLFNBQVosR0FBd0IsVUFBUy9DLENBQVQsRUFBWTtJQUNoQyxJQUFJSSxDQUFDLEdBQUcsUUFBUUosQ0FBUixHQUFZLEtBQUssQ0FBakIsR0FBcUJBLENBQUMsQ0FBQzRELE1BQS9CO0lBQ0EsSUFBSXhELENBQUosRUFDSSxRQUFRQSxDQUFSO01BQ0ksS0FBS2hDLEtBQUssV0FBTCxDQUFjeUYsUUFBbkI7UUFDSSxLQUFLQyxVQUFMLENBQWdCOUQsQ0FBQyxDQUFDK0QsSUFBbEIsRUFBd0IvRCxDQUFDLENBQUNnRSxLQUExQjtRQUNBOztNQUNKLEtBQUs1RixLQUFLLFdBQUwsQ0FBYzZGLFlBQW5CO1FBQ0ksS0FBS2hCLFNBQUw7UUFDQTs7TUFDSixLQUFLN0UsS0FBSyxXQUFMLENBQWM4RixhQUFuQjtRQUNJLEtBQUtDLGdCQUFMO1FBQ0E7O01BQ0osS0FBSy9GLEtBQUssV0FBTCxDQUFjZ0csWUFBbkI7UUFDSSxLQUFLVCxVQUFMO0lBWFI7RUFhUCxDQWhCRDs7RUFpQkF2RCxDQUFDLENBQUN3QixTQUFGLENBQVl5QyxRQUFaLEdBQXVCLFlBQVcsQ0FBRSxDQUFwQzs7RUFDQWpFLENBQUMsQ0FBQ3dCLFNBQUYsQ0FBWTBDLFNBQVosR0FBd0IsWUFBVyxDQUFFLENBQXJDOztFQUNBbEUsQ0FBQyxDQUFDd0IsU0FBRixDQUFZa0MsVUFBWixHQUF5QixVQUFTOUQsQ0FBVCxFQUFZSSxDQUFaLEVBQWU7SUFDcEMsSUFBSXNCLENBQUMsR0FBRyxJQUFSOztJQUNBLElBQUksQ0FBQyxLQUFLSixLQUFWLEVBQWlCO01BQ2IsSUFBSXhELENBQUMsR0FBRyxLQUFLbUQsVUFBYjs7TUFDQSxJQUFJbkQsQ0FBQyxJQUFJa0MsQ0FBVCxFQUFZO1FBQ1IsSUFBSSxLQUFLQSxDQUFULEVBQVksT0FBTyxLQUFLVCxPQUFPLFdBQVAsQ0FBZ0I2QyxHQUFoQixDQUFvQm1DLE9BQXBCLENBQTRCLE1BQTVCLENBQVo7UUFDWixJQUFJQyxDQUFDLEdBQUcsS0FBSzlELFFBQWI7UUFDQThELENBQUMsQ0FBQzFHLENBQUQsQ0FBRCxDQUFLMkcsSUFBTCxDQUFVdEcsQ0FBQyxDQUFDK0IsY0FBWjtRQUNBc0UsQ0FBQyxDQUFDeEUsQ0FBRCxDQUFELENBQUt5RSxJQUFMLENBQVV0RyxDQUFDLENBQUM4QixjQUFaO1FBQ0EsS0FBS2dCLFVBQUwsR0FBa0JqQixDQUFsQjtRQUNBTixFQUFFLENBQUNnRixLQUFILENBQVNDLGVBQVQsQ0FBeUIsS0FBS25FLEtBQTlCO1FBQ0EsSUFBSW9FLENBQUMsR0FBRzVFLENBQUMsR0FBR2xDLENBQUosR0FBUSxDQUFDLENBQVQsR0FBYSxDQUFyQjtRQUNBLElBQUkrRyxDQUFDLEdBQUcsS0FBS3JFLEtBQUwsQ0FBV3NFLENBQVgsR0FBZXBGLEVBQUUsQ0FBQ3FDLElBQUgsQ0FBUWdELGNBQVIsR0FBeUJDLEtBQXpCLEdBQWlDSixDQUF4RDtRQUNBLElBQUksS0FBSzFELFFBQUwsQ0FBYyxLQUFLRSxXQUFMLENBQWlCcEIsQ0FBakIsQ0FBZCxLQUFzQyxLQUFLbUIsU0FBTCxDQUFlLEtBQUtDLFdBQUwsQ0FBaUJwQixDQUFqQixDQUFmLENBQTFDLEVBQ0ssS0FBS2tCLFFBQUwsQ0FBYyxLQUFLRSxXQUFMLENBQWlCcEIsQ0FBakIsQ0FBZCxFQUFtQzhFLENBQW5DLEdBQXVDLENBQUNELENBQXpDLEVBQ0EsS0FBSzNELFFBQUwsQ0FBYyxLQUFLRSxXQUFMLENBQWlCcEIsQ0FBakIsQ0FBZCxNQUF1QyxLQUFLa0IsUUFBTCxDQUFjLEtBQUtFLFdBQUwsQ0FBaUJwQixDQUFqQixDQUFkLEVBQW1DMEMsTUFBbkMsR0FBNEMsQ0FBQyxDQUFwRixDQURBLENBREosS0FHSztVQUNELElBQUl1QyxDQUFDLEdBQUcsS0FBSzVELE9BQUwsQ0FBYTZELEtBQWIsRUFBUjtVQUNBRCxDQUFDLEtBQUtBLENBQUMsR0FBR3ZGLEVBQUUsQ0FBQ3lGLFdBQUgsQ0FBZSxLQUFLdkUsSUFBcEIsQ0FBVCxDQUFEO1VBQ0FxRSxDQUFDLENBQUNHLFdBQUYsQ0FBYyxDQUFDUCxDQUFmLEVBQWtCLENBQWxCO1VBQ0EsS0FBS3JFLEtBQUwsQ0FBVzZFLFFBQVgsQ0FBb0JKLENBQXBCLEVBQXVCLEdBQXZCO1VBQ0EsS0FBS0ssUUFBTCxDQUFjLEtBQUtsRSxXQUFMLENBQWlCcEIsQ0FBakIsQ0FBZCxFQUFtQyxVQUFTSSxDQUFULEVBQVk7WUFDM0MsSUFBSXRDLENBQUMsR0FBRzRCLEVBQUUsQ0FBQ3lGLFdBQUgsQ0FBZS9FLENBQWYsQ0FBUjtZQUNBc0IsQ0FBQyxDQUFDUixRQUFGLENBQVdRLENBQUMsQ0FBQ04sV0FBRixDQUFjcEIsQ0FBZCxDQUFYLElBQStCbEMsQ0FBL0I7WUFDQSxDQUFDQSxDQUFDLENBQUM0RSxNQUFILEtBQWM1RSxDQUFDLENBQUM0RSxNQUFGLEdBQVcsQ0FBQyxDQUExQjtZQUNBNUUsQ0FBQyxDQUFDc0gsV0FBRixDQUFjLENBQUNQLENBQWYsRUFBa0IsQ0FBbEI7WUFDQW5ELENBQUMsQ0FBQ2xCLEtBQUYsQ0FBUTZFLFFBQVIsQ0FBaUJ2SCxDQUFqQjtZQUNBbUgsQ0FBQyxDQUFDTSxnQkFBRjtZQUNBN0QsQ0FBQyxDQUFDTCxPQUFGLENBQVVtRSxJQUFWLENBQWVQLENBQWY7VUFDSCxDQVJEO1FBU0g7UUFDRDdFLENBQUMsSUFDRyxlQUFlQSxDQURuQixJQUVJLEtBQUtjLFFBQUwsQ0FBYyxLQUFLRSxXQUFMLENBQWlCcEIsQ0FBakIsQ0FBZCxDQUZKLElBR0ksS0FBS2tCLFFBQUwsQ0FBYyxLQUFLRSxXQUFMLENBQWlCcEIsQ0FBakIsQ0FBZCxFQUFtQ3lGLFlBQW5DLENBQWdEM0csWUFBWSxXQUE1RCxFQUFzRTRHLFFBQXRFLEVBSEo7UUFJQSxLQUFLcEUsS0FBTCxHQUFhLENBQUMsQ0FBZDtRQUNBNUIsRUFBRSxDQUFDaUcsS0FBSCxDQUFTLEtBQUtuRixLQUFkLEVBQ0tvRixFQURMLENBQ1EsR0FEUixFQUNhO1VBQUVkLENBQUMsRUFBRUQ7UUFBTCxDQURiLEVBQ3VCO1VBQUVnQixNQUFNLEVBQUUsS0FBS0M7UUFBZixDQUR2QixFQUVLQyxJQUZMLENBRVUsWUFBVztVQUNickUsQ0FBQyxDQUFDUixRQUFGLENBQVdRLENBQUMsQ0FBQ04sV0FBRixDQUFjdEQsQ0FBZCxDQUFYLE1BQWlDNEQsQ0FBQyxDQUFDUixRQUFGLENBQVdRLENBQUMsQ0FBQ04sV0FBRixDQUFjdEQsQ0FBZCxDQUFYLEVBQTZCNEUsTUFBN0IsR0FBc0MsQ0FBQyxDQUF4RTtVQUNBaEIsQ0FBQyxDQUFDSixLQUFGLEdBQVUsQ0FBQyxDQUFYO1FBQ0gsQ0FMTCxFQU1LMEUsS0FOTDtRQU9BLElBQUlDLENBQUMsR0FBRyxLQUFLOUIsZ0JBQUwsRUFBUjtRQUNBLGdCQUFnQixLQUFLL0MsV0FBTCxDQUFpQnBCLENBQWpCLENBQWhCLEdBQ0lpRyxDQUFDLElBQUksS0FBS0MsYUFBTCxDQUFtQixDQUFDLENBQXBCLENBRFQsR0FFSSxnQkFBZ0IsS0FBSzlFLFdBQUwsQ0FBaUJ0RCxDQUFqQixDQUFoQixLQUF3QyxLQUFLb0ksYUFBTCxDQUFtQixDQUFDLENBQXBCLEdBQXlCLEtBQUs1RSxLQUFMLEdBQWEsQ0FBQyxDQUEvRSxDQUZKO01BR0g7SUFDSjtFQUNKLENBakREOztFQWtEQWxCLENBQUMsQ0FBQ3dCLFNBQUYsQ0FBWWUsT0FBWixHQUFzQixVQUFTM0MsQ0FBVCxFQUFZO0lBQzlCLElBQUlJLENBQUMsR0FBRyxJQUFSOztJQUNBLElBQUksQ0FBQyxLQUFLa0IsS0FBVixFQUFpQjtNQUNiLElBQUlJLENBQUMsR0FBRyxLQUFLVCxVQUFiOztNQUNBLElBQUlTLENBQUMsSUFBSTFCLENBQVQsRUFBWTtRQUNSLElBQUksS0FBS0EsQ0FBVCxFQUFZLE9BQU8sS0FBS1QsT0FBTyxXQUFQLENBQWdCNkMsR0FBaEIsQ0FBb0JtQyxPQUFwQixDQUE0QixNQUE1QixDQUFaO1FBQ1osS0FBS3RELFVBQUwsR0FBa0JqQixDQUFsQjtRQUNBLElBQUlsQyxDQUFDLEdBQUdrQyxDQUFDLEdBQUcwQixDQUFKLEdBQVEsQ0FBQyxDQUFULEdBQWEsQ0FBckI7UUFDQSxJQUFJOEMsQ0FBQyxHQUFHLEtBQUtoRSxLQUFMLENBQVdzRSxDQUFYLEdBQWVwRixFQUFFLENBQUNxQyxJQUFILENBQVFnRCxjQUFSLEdBQXlCQyxLQUF6QixHQUFpQ2xILENBQXhEO1FBQ0EsSUFBSSxLQUFLb0QsUUFBTCxDQUFjLEtBQUtFLFdBQUwsQ0FBaUJwQixDQUFqQixDQUFkLEtBQXNDLEtBQUttQixTQUFMLENBQWUsS0FBS0MsV0FBTCxDQUFpQnBCLENBQWpCLENBQWYsQ0FBMUMsRUFDSyxLQUFLa0IsUUFBTCxDQUFjLEtBQUtFLFdBQUwsQ0FBaUJwQixDQUFqQixDQUFkLEVBQW1DOEUsQ0FBbkMsR0FBdUMsQ0FBQ04sQ0FBekMsRUFDQSxLQUFLdEQsUUFBTCxDQUFjLEtBQUtFLFdBQUwsQ0FBaUJwQixDQUFqQixDQUFkLE1BQXVDLEtBQUtrQixRQUFMLENBQWMsS0FBS0UsV0FBTCxDQUFpQnBCLENBQWpCLENBQWQsRUFBbUMwQyxNQUFuQyxHQUE0QyxDQUFDLENBQXBGLENBREEsQ0FESixLQUdLO1VBQ0QsSUFBSWtDLENBQUMsR0FBRyxLQUFLdkQsT0FBTCxDQUFhNkQsS0FBYixFQUFSO1VBQ0FOLENBQUMsS0FBS0EsQ0FBQyxHQUFHbEYsRUFBRSxDQUFDeUYsV0FBSCxDQUFlLEtBQUt2RSxJQUFwQixDQUFULENBQUQ7VUFDQWdFLENBQUMsQ0FBQ1EsV0FBRixDQUFjLENBQUNaLENBQWYsRUFBa0IsQ0FBbEI7VUFDQSxLQUFLaEUsS0FBTCxDQUFXNkUsUUFBWCxDQUFvQlQsQ0FBcEIsRUFBdUIsR0FBdkI7VUFDQSxLQUFLVSxRQUFMLENBQWMsS0FBS2xFLFdBQUwsQ0FBaUJwQixDQUFqQixDQUFkLEVBQW1DLFVBQVMwQixDQUFULEVBQVk7WUFDM0MsSUFBSTVELENBQUMsR0FBRzRCLEVBQUUsQ0FBQ3lGLFdBQUgsQ0FBZXpELENBQWYsQ0FBUjtZQUNBdEIsQ0FBQyxDQUFDYyxRQUFGLENBQVdkLENBQUMsQ0FBQ2dCLFdBQUYsQ0FBY3BCLENBQWQsQ0FBWCxJQUErQmxDLENBQS9CO1lBQ0EsQ0FBQ0EsQ0FBQyxDQUFDNEUsTUFBSCxLQUFjNUUsQ0FBQyxDQUFDNEUsTUFBRixHQUFXLENBQUMsQ0FBMUI7WUFDQTVFLENBQUMsQ0FBQ3NILFdBQUYsQ0FBYyxDQUFDWixDQUFmLEVBQWtCLENBQWxCO1lBQ0FwRSxDQUFDLENBQUNJLEtBQUYsQ0FBUTZFLFFBQVIsQ0FBaUJ2SCxDQUFqQjtZQUNBOEcsQ0FBQyxDQUFDVyxnQkFBRjtZQUNBbkYsQ0FBQyxDQUFDaUIsT0FBRixDQUFVbUUsSUFBVixDQUFlWixDQUFmO1VBQ0gsQ0FSRDtRQVNIO1FBQ0QsS0FBS3BFLEtBQUwsQ0FBV3NFLENBQVgsR0FBZU4sQ0FBZjtRQUNBLEtBQUt0RCxRQUFMLENBQWMsS0FBS0UsV0FBTCxDQUFpQk0sQ0FBakIsQ0FBZCxNQUF1QyxLQUFLUixRQUFMLENBQWMsS0FBS0UsV0FBTCxDQUFpQk0sQ0FBakIsQ0FBZCxFQUFtQ2dCLE1BQW5DLEdBQTRDLENBQUMsQ0FBcEY7TUFDSDtJQUNKO0VBQ0osQ0EvQkQ7O0VBZ0NBdEMsQ0FBQyxDQUFDd0IsU0FBRixDQUFZdUUsWUFBWixHQUEyQixVQUFTbkcsQ0FBVCxFQUFZO0lBQ25DLElBQUlJLENBQUMsR0FBRyxLQUFLTSxRQUFiO0lBQ0FOLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS3FFLElBQUwsQ0FBVXRHLENBQUMsQ0FBQytCLGNBQVosRUFBNEIsSUFBNUI7SUFDQUUsQ0FBQyxDQUFDSixDQUFELENBQUQsQ0FBS3lFLElBQUwsQ0FBVXRHLENBQUMsQ0FBQzhCLGNBQVosRUFBNEIsR0FBNUI7RUFDSCxDQUpEOztFQUtBRyxDQUFDLENBQUN3QixTQUFGLENBQVlrRSxlQUFaLEdBQThCLFVBQVM5RixDQUFULEVBQVk7SUFDdEMsT0FBT0EsQ0FBQyxHQUFHLEdBQUosR0FBVSxJQUFJQSxDQUFKLEdBQVFBLENBQVIsR0FBWUEsQ0FBWixHQUFnQkEsQ0FBMUIsR0FBOEIsSUFBSW9HLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQUMsQ0FBRCxHQUFLckcsQ0FBTCxHQUFTLENBQWxCLEVBQXFCLENBQXJCLElBQTBCLENBQW5FO0VBQ0gsQ0FGRDs7RUFHQUksQ0FBQyxDQUFDd0IsU0FBRixDQUFZZ0IsUUFBWixHQUF1QixZQUFXO0lBQzlCLElBQUk1QyxDQUFDLEdBQUcsSUFBUjs7SUFDQXZCLElBQUksV0FBSixDQUFhMkQsR0FBYixDQUNLa0UsaUJBREwsQ0FDdUIsUUFEdkIsRUFFS0MsSUFGTCxDQUVVLFVBQVNuRyxDQUFULEVBQVk7TUFDZCxJQUFJc0IsQ0FBQyxHQUFHLGNBQVI7TUFDQSxJQUFJNUQsQ0FBQyxHQUFHLENBQUMsV0FBRCxFQUFjLFlBQWQsRUFBNEIsWUFBNUIsRUFBMEMsZUFBMUMsRUFBMkQsVUFBM0QsQ0FBUjtNQUNBc0MsQ0FBQyxDQUFDb0csT0FBRixDQUFVOUUsQ0FBVixFQUFhaEMsRUFBRSxDQUFDK0csTUFBaEIsRUFBd0IsVUFBU2pDLENBQVQsRUFBWTtRQUNoQyxJQUFJLENBQUNBLENBQUQsSUFBTXhFLENBQUMsQ0FBQzBHLElBQVIsSUFBZ0IxRyxDQUFDLENBQUMwRyxJQUFGLENBQU9DLE9BQTNCLEVBQW9DO1VBQ2hDLElBQUkvQixDQUFDLEdBQUdsRixFQUFFLENBQUNxQyxJQUFILENBQVFnRCxjQUFSLEdBQXlCQyxLQUF6QixHQUFpQyxDQUF6QztVQUNBLElBQUk3RyxDQUFDLEdBQUcsSUFBSSxDQUFDeUcsQ0FBYjtVQUNBLElBQUlDLENBQUMsR0FBRzdFLENBQUMsQ0FBQ1MsUUFBVjtVQUNBM0MsQ0FBQyxDQUFDOEksT0FBRixDQUFVLFVBQVM5SSxDQUFULEVBQVkwRyxDQUFaLEVBQWU7WUFDckIsSUFBSVMsQ0FBQyxHQUFHdkYsRUFBRSxDQUFDeUYsV0FBSCxDQUFlL0UsQ0FBQyxDQUFDeUcsR0FBRixDQUFNbkYsQ0FBQyxHQUFHNUQsQ0FBVixFQUFhNEIsRUFBRSxDQUFDK0csTUFBaEIsQ0FBZixDQUFSO1lBQ0EsSUFBSVIsQ0FBQyxHQUFHdkcsRUFBRSxDQUFDb0gsSUFBSCxDQUFRLGFBQVIsRUFBdUI3QixDQUF2QixDQUFSO1lBQ0FqRixDQUFDLENBQUN1QixNQUFGLENBQVNpRSxJQUFULENBQWNTLENBQUMsQ0FBQ1IsWUFBRixDQUFlL0YsRUFBRSxDQUFDcUgsS0FBbEIsQ0FBZCxHQUNJOUIsQ0FBQyxDQUFDRyxXQUFGLENBQWNqSCxDQUFkLEVBQWlCLEVBQWpCLENBREosRUFFSThHLENBQUMsQ0FBQytCLFNBQUYsQ0FBWW5DLENBQVosQ0FGSixFQUdLSSxDQUFDLENBQUNELEtBQUYsR0FBVUosQ0FIZixFQUlLekcsQ0FBQyxJQUFJeUcsQ0FKVixFQUtJNUUsQ0FBQyxDQUFDVSxRQUFGLENBQVc4RSxJQUFYLENBQWdCUCxDQUFDLENBQUNRLFlBQUYsQ0FBZS9GLEVBQUUsQ0FBQ3VILFNBQWxCLENBQWhCLENBTEosRUFNSWhDLENBQUMsQ0FBQ25DLEVBQUYsQ0FDSSxPQURKLEVBRUksWUFBVztjQUNQOUMsQ0FBQyxDQUFDOEQsVUFBRixDQUFhVSxDQUFiO1lBQ0gsQ0FKTCxFQUtJeEUsQ0FMSixDQU5KLEVBYUksY0FBY2xDLENBQWQsS0FBb0JrQyxDQUFDLENBQUNrSCxRQUFGLEdBQWFqQyxDQUFqQyxDQWJKO1VBY0gsQ0FqQkQ7VUFrQkFqRixDQUFDLENBQUNtSCxVQUFGO1VBQ0EsQ0FBQzNILE1BQU0sV0FBTixDQUFlNEMsR0FBZixDQUFtQkksWUFBbkIsTUFBcUN4RCxPQUFPLFdBQVAsQ0FBZ0J5RCxVQUF0RCxNQUNDakQsTUFBTSxXQUFOLENBQWU0QyxHQUFmLENBQW1CSSxZQUFuQixPQUFzQ3hELE9BQU8sV0FBUCxDQUFnQnlELFVBQWhCLEdBQTZCLENBQW5FLEdBQ0d6QyxDQUFDLENBQUNtRyxZQUFGLENBQWVuSCxPQUFPLFdBQVAsQ0FBZ0J5RCxVQUEvQixDQURILEVBRUl6RCxPQUFPLFdBQVAsQ0FBZ0J5RCxVQUFoQixHQUE2QixDQUhsQztVQUlBekMsQ0FBQyxDQUFDaUQsU0FBRjtRQUNIO01BQ0osQ0E5QkQ7SUErQkgsQ0FwQ0wsV0FxQ1csVUFBU2pELENBQVQsRUFBWTtNQUNmb0gsT0FBTyxDQUFDQyxLQUFSLENBQWMsdUNBQWQsRUFBdURySCxDQUF2RDtJQUNILENBdkNMO0VBd0NILENBMUNEOztFQTJDQUksQ0FBQyxDQUFDd0IsU0FBRixDQUFZMEQsUUFBWixHQUF1QixVQUFTdEYsQ0FBVCxFQUFZSSxDQUFaLEVBQWU7SUFDbEMsS0FBS2UsU0FBTCxDQUFlbkIsQ0FBZixNQUNNLEtBQUttQixTQUFMLENBQWVuQixDQUFmLElBQW9CLENBQUMsQ0FBdEIsRUFDR3ZCLElBQUksV0FBSixDQUFhMkQsR0FBYixDQUNDa0YsSUFERCxDQUNNLFlBQVl0SCxDQURsQixFQUVDdUcsSUFGRCxDQUVNLFVBQVN2RyxDQUFULEVBQVk7TUFDZEksQ0FBQyxJQUFJQSxDQUFDLENBQUNKLENBQUQsQ0FBTjtJQUNILENBSkQsV0FLTyxZQUFXO01BQ2RvSCxPQUFPLENBQUNDLEtBQVIsQ0FBYyxjQUFkO0lBQ0gsQ0FQRCxDQUZSO0VBVUgsQ0FYRDs7RUFZQWpILENBQUMsQ0FBQ3dCLFNBQUYsQ0FBWTJGLFFBQVosR0FBdUIsVUFBU3ZILENBQVQsRUFBWUksQ0FBWixFQUFlc0IsQ0FBZixFQUFrQjtJQUNyQyxJQUFJLEVBQUUxQixDQUFDLEdBQUcsQ0FBTixDQUFKLEVBQWM7TUFDVlIsTUFBTSxXQUFOLENBQWU0QyxHQUFmLENBQW1Cb0YsUUFBbkIsQ0FBNEJ4SCxDQUE1Qjs7TUFDQSxJQUFJbEMsQ0FBQyxHQUFHLEtBQUsrQyxPQUFiO01BQ0EsSUFBSTJELENBQUMsR0FBRzFHLENBQUMsQ0FBQzRJLElBQVY7TUFDQSxJQUFJOUIsQ0FBQyxHQUFHSixDQUFDLENBQUNpRCxNQUFGLENBQVNDLHFCQUFULENBQStCbEQsQ0FBQyxDQUFDbUQsUUFBakMsQ0FBUjtNQUNBLEtBQUtqQixJQUFMLENBQVVrQixvQkFBVixDQUErQmhELENBQS9CLEVBQWtDQSxDQUFsQztNQUNBLElBQUl6RyxDQUFDLEdBQUcsSUFBSXVCLEVBQUUsQ0FBQ21JLElBQVAsQ0FBWSxVQUFaLENBQVI7TUFDQTFKLENBQUMsQ0FBQzJKLFlBQUYsQ0FBZXBJLEVBQUUsQ0FBQ3FJLE1BQWxCLEVBQTBCQyxXQUExQixHQUF3Q2xLLENBQUMsQ0FBQ2tLLFdBQTFDO01BQ0E3SixDQUFDLENBQUM2SSxTQUFGLENBQVksS0FBS04sSUFBakI7TUFDQSxLQUFLQSxJQUFMLENBQVVrQixvQkFBVixDQUErQnhILENBQS9CLEVBQWtDQSxDQUFsQztNQUNBQSxDQUFDLENBQUM2SCxHQUFGLENBQU12SSxFQUFFLENBQUN3SSxFQUFILENBQU14SSxFQUFFLENBQUN5SSxPQUFILENBQVduRCxLQUFYLEdBQW1CLENBQXpCLEVBQTRCdEYsRUFBRSxDQUFDeUksT0FBSCxDQUFXQyxNQUFYLEdBQW9CLENBQWhELENBQU47TUFDQTFJLEVBQUUsQ0FBQ2lHLEtBQUgsQ0FBU3hILENBQVQsRUFDS2tLLEdBREwsQ0FDUztRQUFFVixRQUFRLEVBQUUvQyxDQUFaO1FBQWUwRCxLQUFLLEVBQUU7TUFBdEIsQ0FEVCxFQUVLQyxRQUZMLENBR1E3SSxFQUFFLENBQUNpRyxLQUFILENBQVN4SCxDQUFULEVBQVlxSyxFQUFaLENBQWUsR0FBZixFQUFvQjtRQUFFRixLQUFLLEVBQUU7TUFBVCxDQUFwQixFQUFvQ0csS0FBcEMsQ0FBMEMsR0FBMUMsRUFBK0NELEVBQS9DLENBQWtELEdBQWxELEVBQXVEO1FBQUVGLEtBQUssRUFBRSxDQUFDO01BQVYsQ0FBdkQsQ0FIUixFQUlRNUksRUFBRSxDQUFDaUcsS0FBSCxDQUFTeEgsQ0FBVCxFQUFZeUgsRUFBWixDQUFlLEdBQWYsRUFBb0I7UUFBRStCLFFBQVEsRUFBRXZIO01BQVosQ0FBcEIsQ0FKUixFQU1LMkYsSUFOTCxDQU1VLFlBQVc7UUFDYjVILENBQUMsQ0FBQ3VLLE9BQUY7UUFDQTFKLE9BQU8sV0FBUCxDQUFnQjJKLFNBQWhCLEdBQ0luSixNQUFNLENBQUNvSixRQUFQLENBQWdCcEosTUFBTSxDQUFDcUosU0FBUCxDQUFpQkMsSUFBakMsRUFBdUM7VUFBRUMsUUFBUSxFQUFFdkosTUFBTSxDQUFDdUosUUFBUCxDQUFnQkMsT0FBNUI7VUFBcUNDLFdBQVcsRUFBRXZIO1FBQWxELENBQXZDLENBREosR0FFSWxDLE1BQU0sQ0FBQ29KLFFBQVAsQ0FBZ0JwSixNQUFNLENBQUNxSixTQUFQLENBQWlCQyxJQUFqQyxDQUZKO01BR0gsQ0FYTCxFQVlLOUMsS0FaTDtJQWFIO0VBQ0osQ0ExQkQ7O0VBMkJBNUYsQ0FBQyxDQUFDd0IsU0FBRixDQUFZc0gsb0JBQVosR0FBbUMsVUFBU2xKLENBQVQsRUFBWTtJQUMzQyxJQUFJSSxDQUFDLEdBQUdWLEVBQUUsQ0FBQ3lKLElBQUgsQ0FBUUMsSUFBaEI7SUFDQSxLQUFLdEksTUFBTCxDQUFZdUkscUJBQVosQ0FBa0NySixDQUFDLENBQUNzSixXQUFGLEVBQWxDLEVBQW1EbEosQ0FBbkQ7SUFDQSxPQUFPQSxDQUFQO0VBQ0gsQ0FKRDs7RUFLQUEsQ0FBQyxDQUFDd0IsU0FBRixDQUFZcUIsU0FBWixHQUF3QixZQUFXO0lBQy9CLElBQUlqRCxDQUFKO0lBQ0EsSUFBSUksQ0FBSjs7SUFDQSxJQUFJc0IsQ0FBQyxHQUFHdkMsVUFBVSxXQUFWLENBQW1CaUQsR0FBbkIsQ0FBdUJtSCxjQUF2QixLQUEwQ25LLFVBQVUsV0FBVixDQUFtQmdELEdBQW5CLENBQXVCbUgsY0FBdkIsRUFBbEQ7O0lBQ0EsSUFBSXpMLENBQUMsR0FBRyxLQUFLeUQsTUFBTCxDQUFZLENBQVosQ0FBUjtJQUNBLElBQUl6RCxDQUFKLEVBQ0ksSUFBSTRELENBQUMsR0FBRyxDQUFSLEVBQVc7TUFDUCxJQUFJOEMsQ0FBQyxHQUFHOUMsQ0FBQyxHQUFHLEVBQUosR0FBUyxLQUFULEdBQWlCQSxDQUFDLEdBQUcsRUFBN0I7TUFDQTVELENBQUMsQ0FBQzRJLElBQUYsQ0FBT2UsTUFBUCxDQUFjL0UsTUFBZCxHQUF1QixDQUFDLENBQXhCO01BQ0E1RSxDQUFDLENBQUNxRixNQUFGLEdBQVdxQixDQUFDLEdBQUcsRUFBZjtNQUNBMUcsQ0FBQyxDQUFDNEksSUFBRixDQUFPNUIsQ0FBUCxHQUFXOUYsT0FBTyxXQUFQLENBQWdCd0ssY0FBaEIsQ0FBK0IxTCxDQUFDLENBQUNxRixNQUFqQyxDQUFYO0lBQ0gsQ0FMRCxNQUtPckYsQ0FBQyxDQUFDNEksSUFBRixDQUFPZSxNQUFQLENBQWMvRSxNQUFkLEdBQXVCLENBQUMsQ0FBeEI7O0lBQ1gsSUFBSWtDLENBQUMsR0FBRzNGLE9BQU8sV0FBUCxDQUFnQm1ELEdBQWhCLENBQW9CcUgsWUFBcEIsQ0FBaUMsZ0JBQWpDLENBQVI7O0lBQ0EsSUFBSXRMLENBQUMsR0FBRyxLQUFLb0QsTUFBTCxDQUFZLENBQVosQ0FBUjtJQUNBcEQsQ0FBQyxLQUNJeUcsQ0FBQyxHQUFHLENBQUosSUFDS3pHLENBQUMsQ0FBQ3VJLElBQUYsQ0FBT2UsTUFBUCxDQUFjL0UsTUFBZCxHQUF1QixDQUFDLENBQXpCLEVBQ0l2RSxDQUFDLENBQUNnRixNQUFGLEdBQVd5QixDQUFDLEdBQUcsRUFEbkIsRUFFSXpHLENBQUMsQ0FBQ3VJLElBQUYsQ0FBTzVCLENBQVAsR0FBVzlGLE9BQU8sV0FBUCxDQUFnQndLLGNBQWhCLENBQStCckwsQ0FBQyxDQUFDZ0YsTUFBakMsQ0FIbkIsSUFJSWhGLENBQUMsQ0FBQ3VJLElBQUYsQ0FBT2UsTUFBUCxDQUFjL0UsTUFBZCxHQUF1QixDQUFDLENBTGhDLENBQUQ7SUFNQSxJQUFJbUMsQ0FBQyxHQUNELENBQUMsVUFBVXpFLENBQUMsR0FBRyxVQUFVSixDQUFDLEdBQUduQixPQUFPLFdBQVAsQ0FBZ0I2SyxTQUE5QixLQUE0QyxLQUFLLENBQUwsS0FBVzFKLENBQXZELEdBQTJELEtBQUssQ0FBaEUsR0FBb0VBLENBQUMsQ0FBQzJKLGVBQXBGLEtBQ0csS0FBSyxDQUFMLEtBQVd2SixDQURkLEdBRUcsS0FBSyxDQUZSLEdBR0dBLENBQUMsQ0FBQ3dKLElBSE4sS0FHZSxFQUpuQjtJQUtBcEssTUFBTSxXQUFOLENBQWU0QyxHQUFmLENBQW1CeUgsWUFBbkIsS0FBb0NoRixDQUFwQyxLQUNLM0YsYUFBYSxXQUFiLENBQXNCa0QsR0FBdEIsQ0FBMEIwSCxhQUExQixJQUEyQzVLLGFBQWEsV0FBYixDQUFzQmtELEdBQXRCLENBQTBCMkgsY0FBMUIsRUFEaEQ7O0lBRUEsSUFBSTlFLENBQUMsR0FBRzNGLFFBQVEsV0FBUixDQUFpQjhDLEdBQWpCLENBQXFCNEgsU0FBckIsRUFBUjs7SUFDQSxJQUFJL0QsQ0FBQyxHQUFHLEtBQUsxRSxNQUFMLENBQVksQ0FBWixDQUFSO0lBQ0EwRSxDQUFDLEtBQUtoQixDQUFDLEdBQUcsQ0FBSixJQUFVZ0IsQ0FBQyxDQUFDUyxJQUFGLENBQU9lLE1BQVAsQ0FBYy9FLE1BQWQsR0FBdUIsQ0FBQyxDQUF6QixFQUE4QnVELENBQUMsQ0FBQzlDLE1BQUYsR0FBVzhCLENBQUMsR0FBRyxFQUF0RCxJQUE4RGdCLENBQUMsQ0FBQ1MsSUFBRixDQUFPZSxNQUFQLENBQWMvRSxNQUFkLEdBQXVCLENBQUMsQ0FBM0YsQ0FBRDtFQUNILENBOUJEOztFQStCQXRDLENBQUMsQ0FBQ3dCLFNBQUYsQ0FBWTBCLGVBQVosR0FBOEIsWUFBVztJQUNyQ3RFLE9BQU8sV0FBUCxDQUFnQmlMLFdBQWhCLEtBQ01qTCxPQUFPLFdBQVAsQ0FBZ0JpTCxXQUFoQixHQUE4QixDQUFDLENBQWhDLEVBQ0c1SyxTQUFTLFdBQVQsQ0FBa0IrQyxHQUFsQixDQUFzQndILElBQXRCLENBQTJCLGtCQUEzQixFQUErQyxJQUEvQyxFQUFxRHJELElBQXJELENBQTBELFlBQVc7TUFDakV2SCxPQUFPLFdBQVAsQ0FBZ0JrTCxZQUFoQixHQUErQixDQUFDLENBQWhDO0lBQ0gsQ0FGRCxDQUZSO0VBS0gsQ0FORDs7RUFPQTlKLENBQUMsQ0FBQ3dCLFNBQUYsQ0FBWTJCLGVBQVosR0FBOEIsWUFBVztJQUNyQ2pGLElBQUksQ0FBQzRFLFFBQUwsQ0FBY2lILElBQWQsSUFDSXZMLE1BQU0sV0FBTixDQUFld0QsR0FBZixDQUFtQmdJLFlBQW5CLEVBREosSUFFSS9LLFNBQVMsV0FBVCxDQUFrQitDLEdBQWxCLENBQXNCd0gsSUFBdEIsQ0FBMkIsZUFBM0IsRUFBNEMsRUFBNUMsRUFBZ0Q7TUFBRVMsVUFBVSxFQUFFLENBQUM7SUFBZixDQUFoRCxDQUZKO0VBR0gsQ0FKRDs7RUFLQWpLLENBQUMsQ0FBQ3dCLFNBQUYsQ0FBWTZCLFlBQVosR0FBMkIsWUFBVyxDQUNsQztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNILENBWEQ7O0VBWUFyRCxDQUFDLENBQUN3QixTQUFGLENBQVl1RixVQUFaLEdBQXlCLFlBQVc7SUFDaEMsS0FBSzFGLElBQUwsS0FBYyxLQUFLNkkscUJBQUwsSUFBOEIsS0FBS0MscUJBQUwsRUFBNUM7RUFDSCxDQUZEOztFQUdBbkssQ0FBQyxDQUFDd0IsU0FBRixDQUFZdUMsZ0JBQVosR0FBK0IsWUFBVztJQUN0QyxJQUFJLEtBQUsxQyxJQUFULEVBQWU7TUFDWCxJQUFJekIsQ0FBQyxHQUFHLENBQUMsQ0FBVDtNQUNBLENBQUNyQixLQUFLLFdBQUwsQ0FBY3lELEdBQWQsQ0FBa0JvSSxVQUFsQixJQUFnQ3BFLElBQUksQ0FBQ3FFLEtBQUwsQ0FBVyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsS0FBdUIsR0FBbEMsQ0FBakMsSUFDQW5MLE1BQU0sV0FBTixDQUFlNEMsR0FBZixDQUFtQndJLG1CQUFuQixFQURBLElBRUksSUFGSixJQUdJLENBQUMsS0FBS3BKLFVBSFYsSUFJSSxDQUFDbkMsU0FBUyxXQUFULENBQWtCK0MsR0FBbEIsQ0FBc0J5SSxNQUF0QixFQUpMLElBS0ssS0FBS0MsVUFBTCxJQUFvQjlLLENBQUMsR0FBRyxDQUFDLENBTDlCLEtBTUssS0FBSzJELFVBQUwsSUFBb0IzRCxDQUFDLEdBQUcsQ0FBQyxDQU45QjtNQU9BLE9BQU9BLENBQVA7SUFDSDtFQUNKLENBWkQ7O0VBYUFJLENBQUMsQ0FBQ3dCLFNBQUYsQ0FBWWtKLFVBQVosR0FBeUIsWUFBVztJQUNoQyxLQUFLckosSUFBTCxLQUFjLEtBQUt5RSxhQUFMLENBQW1CLENBQUMsQ0FBcEIsR0FBd0IsS0FBSzZFLGFBQUwsQ0FBbUIsQ0FBQyxDQUFwQixDQUF0QztFQUNILENBRkQ7O0VBR0EzSyxDQUFDLENBQUN3QixTQUFGLENBQVkrQixVQUFaLEdBQXlCLFlBQVc7SUFDaEMsS0FBS2xDLElBQUwsS0FBYyxLQUFLeUUsYUFBTCxDQUFtQixDQUFDLENBQXBCLEdBQXdCLEtBQUs2RSxhQUFMLENBQW1CLENBQUMsQ0FBcEIsQ0FBdEM7RUFDSCxDQUZEOztFQUdBM0ssQ0FBQyxDQUFDd0IsU0FBRixDQUFZc0UsYUFBWixHQUE0QixVQUFTbEcsQ0FBVCxFQUFZO0lBQ3BDLEtBQUt5QixJQUFMLElBQWEsUUFBUSxLQUFLdUosTUFBMUIsS0FBcUNoTCxDQUFDLEdBQUcsS0FBS2dMLE1BQUwsQ0FBWUMsSUFBWixFQUFILEdBQXdCLEtBQUtELE1BQUwsQ0FBWUUsSUFBWixFQUE5RDtFQUNILENBRkQ7O0VBR0E5SyxDQUFDLENBQUN3QixTQUFGLENBQVltSixhQUFaLEdBQTRCLFVBQVMvSyxDQUFULEVBQVk7SUFDcEMsS0FBS3lCLElBQUwsSUFBYSxRQUFRLEtBQUswSixNQUExQixLQUFxQ25MLENBQUMsR0FBRyxLQUFLbUwsTUFBTCxDQUFZRixJQUFaLEVBQUgsR0FBd0IsS0FBS0UsTUFBTCxDQUFZRCxJQUFaLEVBQTlEO0VBQ0gsQ0FGRDs7RUFHQTlLLENBQUMsQ0FBQ3dCLFNBQUYsQ0FBWTBJLHFCQUFaLEdBQW9DLFlBQVc7SUFDM0MsSUFBSXRLLENBQUMsR0FBRyxJQUFSO0lBQ0FvTCxFQUFFLENBQUNDLFVBQUgsQ0FBYztNQUNWQyxPQUFPLEVBQUUsaUJBQVNsTCxDQUFULEVBQVk7UUFDakJBLENBQUMsQ0FBQ21MLFdBQUYsQ0FBYyxnQkFBZCxLQUNNdkwsQ0FBQyxDQUFDd0IsVUFBRixHQUFlLENBQUMsQ0FBakIsRUFBcUJ4QixDQUFDLENBQUN3TCxjQUFGLEVBRDFCLEtBRU14TCxDQUFDLENBQUNnTCxNQUFGLEdBQVdoTCxDQUFDLENBQUN5TCxZQUFGLENBQWV6TCxDQUFDLENBQUNlLFFBQWpCLENBQVosRUFDR2YsQ0FBQyxDQUFDZ0wsTUFBRixDQUFTVSxLQUFULENBQWUsVUFBU3RMLENBQVQsRUFBWTtVQUN2QixJQUFJc0IsQ0FBSjtVQUNBLElBQUk1RCxDQUFKO1VBQ0FzSixPQUFPLENBQUN1RSxHQUFSLENBQVlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlekwsQ0FBZixDQUFaO1VBQ0Esb0JBQW9CQSxDQUFDLENBQUMwTCxNQUF0QixJQUNLOUwsQ0FBQyxDQUFDK0wsWUFBRixDQUFlM0wsQ0FBQyxDQUFDNEwsUUFBakIsR0FDRyxVQUFVdEssQ0FBQyxHQUFHMUIsQ0FBQyxDQUFDbUwsTUFBaEIsS0FBMkIsS0FBSyxDQUFMLEtBQVd6SixDQUF0QyxJQUEyQ0EsQ0FBQyxDQUFDZ0gsT0FBRixFQUQ5QyxFQUVJMUksQ0FBQyxDQUFDbUwsTUFBRixHQUFXLElBRmYsRUFHRyxVQUFVck4sQ0FBQyxHQUFHa0MsQ0FBQyxDQUFDZ0wsTUFBaEIsS0FBMkIsS0FBSyxDQUFMLEtBQVdsTixDQUF0QyxJQUEyQ0EsQ0FBQyxDQUFDNEssT0FBRixFQUg5QyxFQUlJMUksQ0FBQyxDQUFDZ0wsTUFBRixHQUFXLElBTHBCLEtBTUs1RCxPQUFPLENBQUN1RSxHQUFSLENBQVksTUFBWixHQUFxQjNMLENBQUMsQ0FBQ2lNLFFBQUYsRUFOMUI7UUFPSCxDQVhELENBREgsRUFhR2pNLENBQUMsQ0FBQ21FLGdCQUFGLEVBZlI7TUFnQkg7SUFsQlMsQ0FBZDtFQW9CSCxDQXRCRDs7RUF1QkEvRCxDQUFDLENBQUN3QixTQUFGLENBQVkySSxxQkFBWixHQUFvQyxZQUFXO0lBQzNDLElBQUl2SyxDQUFDLEdBQUcsSUFBUjtJQUNBb0wsRUFBRSxDQUFDQyxVQUFILENBQWM7TUFDVkMsT0FBTyxFQUFFLGlCQUFTbEwsQ0FBVCxFQUFZO1FBQ2pCQSxDQUFDLENBQUNtTCxXQUFGLENBQWMsZ0JBQWQsS0FDTXZMLENBQUMsQ0FBQ3dCLFVBQUYsR0FBZSxDQUFDLENBQWpCLEVBQXFCeEIsQ0FBQyxDQUFDd0wsY0FBRixFQUQxQixLQUVNeEwsQ0FBQyxDQUFDbUwsTUFBRixHQUFXbkwsQ0FBQyxDQUFDeUwsWUFBRixDQUFlekwsQ0FBQyxDQUFDa0gsUUFBakIsQ0FBWixFQUNHbEgsQ0FBQyxDQUFDbUwsTUFBRixDQUFTTyxLQUFULENBQWUsVUFBU3RMLENBQVQsRUFBWTtVQUN2QixJQUFJc0IsQ0FBSjtVQUNBLElBQUk1RCxDQUFKO1VBQ0FzSixPQUFPLENBQUN1RSxHQUFSLENBQVlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlekwsQ0FBZixDQUFaO1VBQ0Esb0JBQW9CQSxDQUFDLENBQUMwTCxNQUF0QixJQUNLOUwsQ0FBQyxDQUFDa00sWUFBRixDQUFlOUwsQ0FBQyxDQUFDNEwsUUFBakIsR0FDRyxVQUFVdEssQ0FBQyxHQUFHMUIsQ0FBQyxDQUFDbUwsTUFBaEIsS0FBMkIsS0FBSyxDQUFMLEtBQVd6SixDQUF0QyxJQUEyQ0EsQ0FBQyxDQUFDZ0gsT0FBRixFQUQ5QyxFQUVJMUksQ0FBQyxDQUFDbUwsTUFBRixHQUFXLElBRmYsRUFHRyxVQUFVck4sQ0FBQyxHQUFHa0MsQ0FBQyxDQUFDZ0wsTUFBaEIsS0FBMkIsS0FBSyxDQUFMLEtBQVdsTixDQUF0QyxJQUEyQ0EsQ0FBQyxDQUFDNEssT0FBRixFQUg5QyxFQUlJMUksQ0FBQyxDQUFDZ0wsTUFBRixHQUFXLElBTHBCLEtBTUs1RCxPQUFPLENBQUN1RSxHQUFSLENBQVksTUFBWixHQUFxQjNMLENBQUMsQ0FBQ21NLFFBQUYsRUFOMUI7UUFPSCxDQVhELENBREgsRUFhR25NLENBQUMsQ0FBQ21FLGdCQUFGLEVBZlI7TUFnQkg7SUFsQlMsQ0FBZDtFQW9CSCxDQXRCRDs7RUF1QkEvRCxDQUFDLENBQUN3QixTQUFGLENBQVk2SixZQUFaLEdBQTJCLFVBQVN6TCxDQUFULEVBQVk7SUFDbkMsSUFBSUksQ0FBQyxHQUFHZ0wsRUFBRSxDQUFDZ0IsaUJBQUgsRUFBUjtJQUNBLElBQUkxSyxDQUFDLEdBQUd0QixDQUFDLENBQUNpTSxXQUFWO0lBQ0EsSUFBSXZPLENBQUMsR0FBR3NDLENBQUMsQ0FBQ2tNLFlBQVY7SUFDQSxJQUFJOUgsQ0FBQyxHQUFHLENBQVI7SUFDQSxJQUFJSSxDQUFDLEdBQUcsQ0FBUjs7SUFDQSxJQUFJNUUsQ0FBQyxJQUFJTixFQUFFLENBQUNpSCxPQUFILENBQVczRyxDQUFYLENBQVQsRUFBd0I7TUFDcEIsSUFBSTdCLENBQUMsR0FBR2lDLENBQUMsQ0FBQ2lNLFdBQUYsR0FBZ0IzTSxFQUFFLENBQUN5SSxPQUFILENBQVduRCxLQUFuQztNQUNBLElBQUlILENBQUMsR0FBRzdFLENBQUMsQ0FBQzBILHFCQUFGLENBQXdCaEksRUFBRSxDQUFDeUosSUFBSCxDQUFRQyxJQUFoQyxDQUFSO01BQ0EsSUFBSW5FLENBQUMsR0FBRyxPQUFPdkYsRUFBRSxDQUFDcUMsSUFBSCxDQUFRZ0QsY0FBUixHQUF5QnFELE1BQXpCLEdBQWtDMUksRUFBRSxDQUFDeUksT0FBSCxDQUFXQyxNQUFwRCxDQUFSO01BQ0F4RCxDQUFDLEdBQUc5RyxDQUFDLEdBQUcsQ0FBQytHLENBQUMsQ0FBQzBILENBQUYsR0FBTSxNQUFNdk0sQ0FBQyxDQUFDb0ksTUFBZCxHQUF1Qm5ELENBQXhCLElBQTZCOUcsQ0FBckM7TUFDQXFHLENBQUMsR0FBRyxDQUFDSyxDQUFDLENBQUNDLENBQUYsR0FBTSxNQUFNOUUsQ0FBQyxDQUFDZ0YsS0FBZixJQUF3QjdHLENBQTVCO01BQ0F1RCxDQUFDLEdBQUcxQixDQUFDLENBQUNnRixLQUFGLEdBQVU3RyxDQUFkO01BQ0FMLENBQUMsR0FBR2tDLENBQUMsQ0FBQ29JLE1BQUYsR0FBV2pLLENBQWY7SUFDSDs7SUFDRCxPQUFPaU4sRUFBRSxDQUFDb0Isb0JBQUgsQ0FBd0I7TUFDM0JDLElBQUksRUFBRSxNQURxQjtNQUUzQkMsSUFBSSxFQUFFLEVBRnFCO01BRzNCQyxLQUFLLEVBQUU7UUFDSEMsSUFBSSxFQUFFcEksQ0FESDtRQUVIN0QsR0FBRyxFQUFFaUUsQ0FGRjtRQUdISSxLQUFLLEVBQUV0RCxDQUhKO1FBSUgwRyxNQUFNLEVBQUV0SyxDQUpMO1FBS0grTyxVQUFVLEVBQUUsRUFMVDtRQU1IQyxlQUFlLEVBQUUsV0FOZDtRQU9IQyxLQUFLLEVBQUUsU0FQSjtRQVFIQyxTQUFTLEVBQUUsUUFSUjtRQVNIQyxRQUFRLEVBQUUsRUFUUDtRQVVIQyxZQUFZLEVBQUUsQ0FWWDtRQVdIQyxXQUFXLEVBQUUsU0FYVjtRQVlIQyxXQUFXLEVBQUU7TUFaVjtJQUhvQixDQUF4QixDQUFQO0VBa0JILENBakNEOztFQWtDQWhOLENBQUMsQ0FBQ3dCLFNBQUYsQ0FBWTRKLGNBQVosR0FBNkIsWUFBVztJQUNwQ0osRUFBRSxDQUFDaUMsV0FBSCxDQUFlO01BQ1gvQixPQUFPLEVBQUUsaUJBQVN0TCxDQUFULEVBQVk7UUFDakJ4QixRQUFRLFdBQVIsQ0FBaUI0RCxHQUFqQixDQUFxQm9KLGNBQXJCLENBQW9DeEwsQ0FBQyxDQUFDZ00sUUFBdEM7TUFDSDtJQUhVLENBQWY7RUFLSCxDQU5EOztFQU9BNUwsQ0FBQyxDQUFDd0IsU0FBRixDQUFZbUssWUFBWixHQUEyQixZQUFXO0lBQ2xDLEtBQUt2SyxVQUFMLEdBQWtCLENBQUMsQ0FBbkI7SUFDQSxLQUFLMkMsZ0JBQUw7O0lBQ0E5RSxTQUFTLFdBQVQsQ0FBa0IrQyxHQUFsQixDQUFzQndILElBQXRCLENBQTJCLFlBQTNCLEVBQXlDLElBQXpDO0VBQ0gsQ0FKRDs7RUFLQXhKLENBQUMsQ0FBQ3dCLFNBQUYsQ0FBWXNLLFlBQVosR0FBMkIsWUFBVztJQUNsQyxLQUFLMUssVUFBTCxHQUFrQixDQUFDLENBQW5CO0lBQ0EsS0FBS3NDLFVBQUwsQ0FBZ0IsQ0FBaEI7RUFDSCxDQUhEOztFQUlBMUQsQ0FBQyxDQUFDd0IsU0FBRixDQUFZcUssUUFBWixHQUF1QixZQUFXO0lBQzlCLElBQUlqTSxDQUFDLEdBQUdyQixLQUFLLFdBQUwsQ0FBY3lELEdBQWQsQ0FBa0JvSSxVQUFsQixJQUFnQ3BFLElBQUksQ0FBQ3FFLEtBQUwsQ0FBVyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsS0FBdUIsR0FBbEMsQ0FBeEM7O0lBQ0FuTCxNQUFNLFdBQU4sQ0FBZTRDLEdBQWYsQ0FBbUJrTCxtQkFBbkIsQ0FBdUN0TixDQUF2Qzs7SUFDQSxLQUFLbUUsZ0JBQUw7O0lBQ0E5RSxTQUFTLFdBQVQsQ0FBa0IrQyxHQUFsQixDQUFzQndILElBQXRCLENBQTJCLFlBQTNCLEVBQXlDLElBQXpDO0VBQ0gsQ0FMRDs7RUFNQXhKLENBQUMsQ0FBQ3dCLFNBQUYsQ0FBWXVLLFFBQVosR0FBdUIsWUFBVztJQUM5QixJQUFJbk0sQ0FBQyxHQUFHckIsS0FBSyxXQUFMLENBQWN5RCxHQUFkLENBQWtCb0ksVUFBbEIsSUFBZ0NwRSxJQUFJLENBQUNxRSxLQUFMLENBQVcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEtBQXVCLEdBQWxDLENBQXhDOztJQUNBbkwsTUFBTSxXQUFOLENBQWU0QyxHQUFmLENBQW1Ca0wsbUJBQW5CLENBQXVDdE4sQ0FBdkM7O0lBQ0EsS0FBSzhELFVBQUwsQ0FBZ0IsQ0FBaEI7RUFDSCxDQUpEOztFQUtBeUosVUFBVSxDQUFDLENBQUN6TixDQUFDLENBQUNKLEVBQUUsQ0FBQzhOLGdCQUFKLENBQUYsQ0FBRCxFQUEyQnBOLENBQUMsQ0FBQ3dCLFNBQTdCLEVBQXdDLFdBQXhDLEVBQXFELEtBQUssQ0FBMUQsQ0FBVjs7RUFDQTJMLFVBQVUsQ0FBQyxDQUFDek4sQ0FBQyxDQUFDSixFQUFFLENBQUNtSSxJQUFKLENBQUYsQ0FBRCxFQUFlekgsQ0FBQyxDQUFDd0IsU0FBakIsRUFBNEIsT0FBNUIsRUFBcUMsS0FBSyxDQUExQyxDQUFWOztFQUNBMkwsVUFBVSxDQUFDLENBQUN6TixDQUFDLENBQUNKLEVBQUUsQ0FBQ21JLElBQUosQ0FBRixDQUFELEVBQWV6SCxDQUFDLENBQUN3QixTQUFqQixFQUE0QixVQUE1QixFQUF3QyxLQUFLLENBQTdDLENBQVY7O0VBQ0EyTCxVQUFVLENBQUMsQ0FBQ3pOLENBQUMsQ0FBQ2YsSUFBSSxXQUFMLENBQUYsQ0FBRCxFQUFvQnFCLENBQUMsQ0FBQ3dCLFNBQXRCLEVBQWlDLEtBQWpDLEVBQXdDLEtBQUssQ0FBN0MsQ0FBVjs7RUFDQTJMLFVBQVUsQ0FBQyxDQUFDek4sQ0FBQyxDQUFDSixFQUFFLENBQUMrRyxNQUFKLENBQUYsQ0FBRCxFQUFpQnJHLENBQUMsQ0FBQ3dCLFNBQW5CLEVBQThCLE1BQTlCLEVBQXNDLEtBQUssQ0FBM0MsQ0FBVjs7RUFDQTJMLFVBQVUsQ0FBQyxDQUFDek4sQ0FBQyxDQUFDSixFQUFFLENBQUNxSSxNQUFKLENBQUYsQ0FBRCxFQUFpQjNILENBQUMsQ0FBQ3dCLFNBQW5CLEVBQThCLFNBQTlCLEVBQXlDLEtBQUssQ0FBOUMsQ0FBVjs7RUFDQTJMLFVBQVUsQ0FBQyxDQUFDek4sQ0FBQyxDQUFDSixFQUFFLENBQUMrTixNQUFKLENBQUYsQ0FBRCxFQUFpQnJOLENBQUMsQ0FBQ3dCLFNBQW5CLEVBQThCLFFBQTlCLEVBQXdDLEtBQUssQ0FBN0MsQ0FBVjs7RUFDQTJMLFVBQVUsQ0FBQyxDQUFDek4sQ0FBQyxDQUFDSixFQUFFLENBQUNtSSxJQUFKLENBQUYsQ0FBRCxFQUFlekgsQ0FBQyxDQUFDd0IsU0FBakIsRUFBNEIsVUFBNUIsRUFBd0MsS0FBSyxDQUE3QyxDQUFWOztFQUNBMkwsVUFBVSxDQUFDLENBQUN6TixDQUFDLENBQUNKLEVBQUUsQ0FBQ21JLElBQUosQ0FBRixDQUFELEVBQWV6SCxDQUFDLENBQUN3QixTQUFqQixFQUE0QixXQUE1QixFQUF5QyxLQUFLLENBQTlDLENBQVY7O0VBQ0EsT0FBUUYsQ0FBQyxHQUFHNkwsVUFBVSxDQUFDLENBQUMzTixDQUFELENBQUQsRUFBTVEsQ0FBTixDQUF0QjtBQUNILENBL2JPLENBK2JMVixFQUFFLENBQUNnTyxTQS9iRSxDQUFSOztBQWdjQXpQLE9BQU8sV0FBUCxHQUFrQmtDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7XG52YXIgYTtcbnZhciBfZXZ0cyA9IHJlcXVpcmUoXCJldnRzXCIpO1xudmFyIF9pZHggPSByZXF1aXJlKFwiaWR4XCIpO1xudmFyIF9wQ29uc3QgPSByZXF1aXJlKFwicENvbnN0XCIpO1xudmFyIF9yZXF1ZXN0ID0gcmVxdWlyZShcInJlcXVlc3RcIik7XG52YXIgX3JlcyA9IHJlcXVpcmUoXCJyZXNcIik7XG52YXIgX3NvdW5kID0gcmVxdWlyZShcInNvdW5kXCIpO1xudmFyIF90aW1lID0gcmVxdWlyZShcInRpbWVcIik7XG52YXIgX3VEYXRhID0gcmVxdWlyZShcInVEYXRhXCIpO1xudmFyIF9jZmdNZ3IgPSByZXF1aXJlKFwiY2ZnTWdyXCIpO1xudmFyIF9wYWdlX2ppZ3NhdyA9IHJlcXVpcmUoXCJwYWdlX2ppZ3Nhd1wiKTtcbnZhciBfdG9wID0gcmVxdWlyZShcInRvcFwiKTtcbnZhciBfZ2xvYmFsID0gcmVxdWlyZShcImdsb2JhbFwiKTtcbnZhciBfYmFnTWdyID0gcmVxdWlyZShcImJhZ01nclwiKTtcbnZhciBfY2hhbGxlbmdlTWdyID0gcmVxdWlyZShcImNoYWxsZW5nZU1nclwiKTtcbnZhciBfamlnc2F3TWdyID0gcmVxdWlyZShcImppZ3Nhd01nclwiKTtcbnZhciBfbmV3SmlnTWdyID0gcmVxdWlyZShcIm5ld0ppZ01nclwiKTtcbnZhciBfcGFuZWxNZ3IgPSByZXF1aXJlKFwicGFuZWxNZ3JcIik7XG52YXIgX3Nob3BNZ3IgPSByZXF1aXJlKFwic2hvcE1nclwiKTtcbnZhciBfdGlwTWdyID0gcmVxdWlyZShcInRpcE1nclwiKTtcbnZhciBfcEluZm8gPSByZXF1aXJlKFwicEluZm9cIik7XG52YXIgayA9IGNjLl9kZWNvcmF0b3I7XG52YXIgUiA9IGsuY2NjbGFzcztcbnZhciBOID0gay5wcm9wZXJ0eTtcbihmdW5jdGlvbih0KSB7XG4gICAgdC5ib3R0b21TaG93QnRucyA9IFwiYm90dG9tU2hvd0J0bnNcIjtcbiAgICB0LmJvdHRvbUhpZGVCdG5zID0gXCJib3R0b21IaWRlQnRuc1wiO1xufSkoYSB8fCAoYSA9IHt9KSk7XG52YXIgQyA9IChmdW5jdGlvbih0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuYmxvY2tDb21wID0gbnVsbDtcbiAgICAgICAgZS5wYWdlcyA9IG51bGw7XG4gICAgICAgIGUuZG93bk5vZGUgPSBudWxsO1xuICAgICAgICBlLmRvd25BbmlzID0gW107XG4gICAgICAgIGUudG9wID0gbnVsbDtcbiAgICAgICAgZS5sUGZiID0gbnVsbDtcbiAgICAgICAgZS5wb3dlclNwID0gbnVsbDtcbiAgICAgICAgZS5jYW1lcmEgPSBudWxsO1xuICAgICAgICBlLnJhbmtCdG4xID0gbnVsbDtcbiAgICAgICAgZS5idG5CZ05vZGUgPSBudWxsO1xuICAgICAgICBlLmN1clBhZ2VJZHggPSAyO1xuICAgICAgICBlLnZpZXdQYWdlID0ge307XG4gICAgICAgIGUudmlld0xQYWdlID0ge307XG4gICAgICAgIGUudmlld1BhZ2VJbmQgPSBbXCJwYWdlX3Nob3BcIiwgXCJwYWdlX2ppZ3Nhd1wiLCBcInBhZ2VfbGV2ZWxcIiwgXCJwYWdlX2NoYWxsZW5nZVwiLCBcInBhZ2VfcmFjZVwiXTtcbiAgICAgICAgZS5jYW5Vc2VMID0gW107XG4gICAgICAgIGUuaXNBbmkgPSAhMTtcbiAgICAgICAgZS5yZWRMYnMgPSBbXTtcbiAgICAgICAgZS5hdXRob3JpemVkID0gITE7XG4gICAgICAgIGUuaXNXeCA9ICExO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgdmFyIG87XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIG8gPSBlO1xuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBfZ2xvYmFsLmRlZmF1bHQucGFkU2NhbGUgJiZcbiAgICAgICAgICAgIChjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDcyMCwgMTI4MCwgY2MuUmVzb2x1dGlvblBvbGljeS5GSVhFRF9IRUlHSFQpLFxuICAgICAgICAgICAgICAgICh0aGlzLmJ0bkJnTm9kZS5zY2FsZVggPSBfZ2xvYmFsLmRlZmF1bHQucGFkU2NhbGUpKTtcbiAgICAgICAgX3NvdW5kLmRlZmF1bHQuaW5zLnBsYXlCR00oKTtcbiAgICAgICAgdGhpcy52aWV3UGFnZS5wYWdlX2xldmVsID0gdGhpcy5wYWdlcy5nZXRDaGlsZEJ5TmFtZShcInBhZ2VfbGV2ZWxcIik7XG4gICAgICAgIChfcEluZm8uZGVmYXVsdC5pbnMuaXNNaWFuTG9ja2VkKCkgfHwgX2dsb2JhbC5kZWZhdWx0LmxvYWRUb1JhY2UpICYmXG4gICAgICAgIChfcEluZm8uZGVmYXVsdC5pbnMuaXNNaWFuTG9ja2VkKCkgJiYgKF9nbG9iYWwuZGVmYXVsdC5sb2FkVG9SYWNlID0gNCksXG4gICAgICAgICAgICAodGhpcy52aWV3UGFnZS5wYWdlX2xldmVsLmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgIHRoaXMuY2hnUGFnZShfZ2xvYmFsLmRlZmF1bHQubG9hZFRvUmFjZSkpO1xuICAgICAgICB0aGlzLmxvYWREb3duKCk7XG4gICAgICAgIF9ldnRzLmRlZmF1bHQub3BFLm9uKHRoaXMub25PcGVyVGFwLmJpbmQodGhpcykpO1xuICAgICAgICBvLmlucyA9IHRoaXM7XG4gICAgICAgIHRoaXMudXBNYWluUmVkKCk7XG4gICAgICAgIHRoaXMuaXNXeCA9IF9pZHgucGxhdGZvcm0uc3RyaW5nKCkgPT0gX3BDb25zdC5QRkNvZGUuV2VjaGF0O1xuICAgICAgICB0aGlzLmNoZWNrUG9wTmV3R2lmdCgpO1xuICAgICAgICB0aGlzLmNoZWNrUG9wUHJpdmFjeSgpO1xuICAgICAgICBfZ2xvYmFsLmRlZmF1bHQubG9hZENiIHx8ICh0aGlzLmNoZWNrU2VyUGFjaygpLCAoX2dsb2JhbC5kZWZhdWx0LmxvYWRDYiA9ICEwKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5oaWRlV3hCdG5zKCk7XG4gICAgICAgIG8uaW5zID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIG8uaW5zO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25PcGVyVGFwID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuYWN0aW9uO1xuICAgICAgICBpZiAoZSlcbiAgICAgICAgICAgIHN3aXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgX2V2dHMuZGVmYXVsdC5NQUlOSlVNUDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wVG9QYWdlKHQuZGF0YSwgdC5wYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgX2V2dHMuZGVmYXVsdC5VUERfTUFJTl9SRUQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBNYWluUmVkKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgX2V2dHMuZGVmYXVsdC5DSEVDS19XWF9CVE5TOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrR2V0VXNlckluZm8oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfZXZ0cy5kZWZhdWx0LkhJREVfV1hfQlROUzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlV3hCdG5zKCk7XG4gICAgICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkVuYWJsZSA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUub25EaXNhYmxlID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5qdW1wVG9QYWdlID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICB2YXIgbyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc0FuaSkge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLmN1clBhZ2VJZHg7XG4gICAgICAgICAgICBpZiAobiAhPSB0KSB7XG4gICAgICAgICAgICAgICAgaWYgKDMgPT0gdCkgcmV0dXJuIHZvaWQgX3RpcE1nci5kZWZhdWx0Lmlucy5zaG93VGlwKFwi5pqC5pyq5byA5pS+XCIpO1xuICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcy5kb3duQW5pcztcbiAgICAgICAgICAgICAgICBpW25dLnBsYXkoYS5ib3R0b21IaWRlQnRucyk7XG4gICAgICAgICAgICAgICAgaVt0XS5wbGF5KGEuYm90dG9tU2hvd0J0bnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VyUGFnZUlkeCA9IHQ7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMucGFnZXMpO1xuICAgICAgICAgICAgICAgIHZhciByID0gdCA+IG4gPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSB0aGlzLnBhZ2VzLnggKyBjYy52aWV3LmdldFZpc2libGVTaXplKCkud2lkdGggKiByO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXdQYWdlW3RoaXMudmlld1BhZ2VJbmRbdF1dIHx8IHRoaXMudmlld0xQYWdlW3RoaXMudmlld1BhZ2VJbmRbdF1dKVxuICAgICAgICAgICAgICAgICAgICAodGhpcy52aWV3UGFnZVt0aGlzLnZpZXdQYWdlSW5kW3RdXS54ID0gLXMpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdQYWdlW3RoaXMudmlld1BhZ2VJbmRbdF1dICYmICh0aGlzLnZpZXdQYWdlW3RoaXMudmlld1BhZ2VJbmRbdF1dLmFjdGl2ZSA9ICEwKTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB0aGlzLmNhblVzZUwuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYyB8fCAoYyA9IGNjLmluc3RhbnRpYXRlKHRoaXMubFBmYikpO1xuICAgICAgICAgICAgICAgICAgICBjLnNldFBvc2l0aW9uKC1zLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlcy5hZGRDaGlsZChjLCAxMDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRQYWdlKHRoaXMudmlld1BhZ2VJbmRbdF0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gY2MuaW5zdGFudGlhdGUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvLnZpZXdQYWdlW28udmlld1BhZ2VJbmRbdF1dID0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICFuLmFjdGl2ZSAmJiAobi5hY3RpdmUgPSAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLnNldFBvc2l0aW9uKC1zLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ucGFnZXMuYWRkQ2hpbGQobik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uY2FuVXNlTC5wdXNoKGMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZSAmJlxuICAgICAgICAgICAgICAgICAgICBcImZlc3RpdmFsXCIgPT09IGUgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3UGFnZVt0aGlzLnZpZXdQYWdlSW5kW3RdXSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdQYWdlW3RoaXMudmlld1BhZ2VJbmRbdF1dLmdldENvbXBvbmVudChfcGFnZV9qaWdzYXcuZGVmYXVsdCkuY2hnVG9GZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQW5pID0gITA7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5wYWdlcylcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiBzIH0sIHsgZWFzaW5nOiB0aGlzLmN1c3RvbUVhc2VJbk91dCB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8udmlld1BhZ2Vbby52aWV3UGFnZUluZFtuXV0gJiYgKG8udmlld1BhZ2Vbby52aWV3UGFnZUluZFtuXV0uYWN0aXZlID0gITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgby5pc0FuaSA9ICExO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IHRoaXMuY2hlY2tHZXRVc2VySW5mbygpO1xuICAgICAgICAgICAgICAgIFwicGFnZV9sZXZlbFwiID09IHRoaXMudmlld1BhZ2VJbmRbdF0gP1xuICAgICAgICAgICAgICAgICAgICBsICYmIHRoaXMuc2V0V3hCdG5TaG93MSghMCkgOlxuICAgICAgICAgICAgICAgICAgICBcInBhZ2VfbGV2ZWxcIiA9PSB0aGlzLnZpZXdQYWdlSW5kW25dICYmICh0aGlzLnNldFd4QnRuU2hvdzEoITEpLCAodGhpcy5pc0FuaSA9ICEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZ1BhZ2UgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmlzQW5pKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMuY3VyUGFnZUlkeDtcbiAgICAgICAgICAgIGlmIChvICE9IHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoMyA9PSB0KSByZXR1cm4gdm9pZCBfdGlwTWdyLmRlZmF1bHQuaW5zLnNob3dUaXAoXCLmmoLmnKrlvIDmlL5cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJQYWdlSWR4ID0gdDtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHQgPiBvID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcy5wYWdlcy54ICsgY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoICogbjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3UGFnZVt0aGlzLnZpZXdQYWdlSW5kW3RdXSB8fCB0aGlzLnZpZXdMUGFnZVt0aGlzLnZpZXdQYWdlSW5kW3RdXSlcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMudmlld1BhZ2VbdGhpcy52aWV3UGFnZUluZFt0XV0ueCA9IC1pKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3UGFnZVt0aGlzLnZpZXdQYWdlSW5kW3RdXSAmJiAodGhpcy52aWV3UGFnZVt0aGlzLnZpZXdQYWdlSW5kW3RdXS5hY3RpdmUgPSAhMCk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5jYW5Vc2VMLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIHIgfHwgKHIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxQZmIpKTtcbiAgICAgICAgICAgICAgICAgICAgci5zZXRQb3NpdGlvbigtaSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZXMuYWRkQ2hpbGQociwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUGFnZSh0aGlzLnZpZXdQYWdlSW5kW3RdLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGNjLmluc3RhbnRpYXRlKG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS52aWV3UGFnZVtlLnZpZXdQYWdlSW5kW3RdXSA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICAhbi5hY3RpdmUgJiYgKG4uYWN0aXZlID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5zZXRQb3NpdGlvbigtaSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnBhZ2VzLmFkZENoaWxkKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgci5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmNhblVzZUwucHVzaChyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGFnZXMueCA9IGk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UGFnZVt0aGlzLnZpZXdQYWdlSW5kW29dXSAmJiAodGhpcy52aWV3UGFnZVt0aGlzLnZpZXdQYWdlSW5kW29dXS5hY3RpdmUgPSAhMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmxvY2tCdG5TdGF0ZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmRvd25BbmlzO1xuICAgICAgICBlWzJdLnBsYXkoYS5ib3R0b21IaWRlQnRucywgMC4wNSk7XG4gICAgICAgIGVbdF0ucGxheShhLmJvdHRvbVNob3dCdG5zLCAwLjIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY3VzdG9tRWFzZUluT3V0ID0gZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdCA8IDAuNSA/IDggKiB0ICogdCAqIHQgKiB0IDogMSAtIE1hdGgucG93KC0yICogdCArIDIsIDQpIC8gMjtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmxvYWREb3duID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgX3Jlcy5kZWZhdWx0Lmluc1xuICAgICAgICAgICAgLmdldEJ1bmRsZUJ5U3RyaW5nKFwicHJlZmFiXCIpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBcInByZWZhYi9kb3duL1wiO1xuICAgICAgICAgICAgICAgIHZhciBuID0gW1wiYnRuX3F1ZXN0XCIsIFwiYnRuX2ppZ3Nhd1wiLCBcImJ0bl9wdXp6bGVcIiwgXCJidG5fY2hhbmxsYWdlXCIsIFwiYnRuX3JhY2VcIl07XG4gICAgICAgICAgICAgICAgZS5sb2FkRGlyKG8sIGNjLlByZWZhYiwgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWkgJiYgdC5ub2RlICYmIHQubm9kZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aCAvIDU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IDIgKiAtcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gdC5kb3duTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihuLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBjYy5pbnN0YW50aWF0ZShlLmdldChvICsgbiwgY2MuUHJlZmFiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBjYy5maW5kKFwiaW1nL3RpcC9udW1cIiwgYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5yZWRMYnMucHVzaChsLmdldENvbXBvbmVudChjYy5MYWJlbCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnNldFBvc2l0aW9uKGEsIDE4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5zZXRQYXJlbnQocyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjLndpZHRoID0gciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhICs9IHIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmRvd25BbmlzLnB1c2goYy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMub24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lmp1bXBUb1BhZ2UoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bl9yYWNlXCIgPT0gbiAmJiAodC5yYW5rQnRuMiA9IGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmNyZWF0ZUJ0bnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfcEluZm8uZGVmYXVsdC5pbnMuaXNNaWFuTG9ja2VkKCkgfHwgX2dsb2JhbC5kZWZhdWx0LmxvYWRUb1JhY2UpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoX3BJbmZvLmRlZmF1bHQuaW5zLmlzTWlhbkxvY2tlZCgpICYmIChfZ2xvYmFsLmRlZmF1bHQubG9hZFRvUmFjZSA9IDQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubG9ja0J0blN0YXRlKF9nbG9iYWwuZGVmYXVsdC5sb2FkVG9SYWNlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2dsb2JhbC5kZWZhdWx0LmxvYWRUb1JhY2UgPSAwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnVwTWFpblJlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUlRvb2wuaW5zLmdldEJ1bmRsZUJ5U3RyaW5nKCdyZXNTcHMnKVwiLCB0KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubG9hZFBhZ2UgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHRoaXMudmlld0xQYWdlW3RdIHx8XG4gICAgICAgICAgICAoKHRoaXMudmlld0xQYWdlW3RdID0gITApLFxuICAgICAgICAgICAgICAgIF9yZXMuZGVmYXVsdC5pbnNcbiAgICAgICAgICAgICAgICAubFByZShcInByZWZhYi9cIiArIHQpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBlICYmIGUodCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJnZXRQcmVmYWJFcnJcIik7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXNlUG93ZXIgPSBmdW5jdGlvbih0LCBlLCBvKSB7XG4gICAgICAgIGlmICghKHQgPiAwKSkge1xuICAgICAgICAgICAgX3BJbmZvLmRlZmF1bHQuaW5zLmFkZFBvd2VyKHQpO1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLnBvd2VyU3A7XG4gICAgICAgICAgICB2YXIgaSA9IG4ubm9kZTtcbiAgICAgICAgICAgIHZhciByID0gaS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGkucG9zaXRpb24pO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHIsIHIpO1xuICAgICAgICAgICAgdmFyIGEgPSBuZXcgY2MuTm9kZShcImZseVBvd2VyXCIpO1xuICAgICAgICAgICAgYS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG4uc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICBhLnNldFBhcmVudCh0aGlzLm5vZGUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGUsIGUpO1xuICAgICAgICAgICAgZS5hZGQoY2MudjMoY2Mud2luU2l6ZS53aWR0aCAvIDIsIGNjLndpblNpemUuaGVpZ2h0IC8gMikpO1xuICAgICAgICAgICAgY2MudHdlZW4oYSlcbiAgICAgICAgICAgICAgICAuc2V0KHsgcG9zaXRpb246IHIsIHNjYWxlOiAwLjggfSlcbiAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGEpLmJ5KDAuMiwgeyBzY2FsZTogMC4yIH0pLmRlbGF5KDAuMSkuYnkoMC4yLCB7IHNjYWxlOiAtMC4yIH0pLFxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihhKS50bygwLjUsIHsgcG9zaXRpb246IGUgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGEuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBfZ2xvYmFsLmRlZmF1bHQubGV2ZWxEb25lID9cbiAgICAgICAgICAgICAgICAgICAgICAgIF9wSW5mby5jaGdTY2VuZShfcEluZm8uc2NlbmVUeXBlLmdhbWUsIHsgZ2FtZVR5cGU6IF9wSW5mby5nYW1lVHlwZS5mcmVlZG9tLCBmcmVlZG9tU2l6ZTogbyB9KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfcEluZm8uY2hnU2NlbmUoX3BJbmZvLnNjZW5lVHlwZS5nYW1lKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRXb3JsZFBvaW50QnlUb3VjaCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSBjYy5WZWMyLlpFUk87XG4gICAgICAgIHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludCh0LmdldExvY2F0aW9uKCksIGUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwTWFpblJlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIHZhciBvID0gX2ppZ3Nhd01nci5kZWZhdWx0Lmlucy5nZXRVblBsYWNlZE51bSgpICsgX25ld0ppZ01nci5kZWZhdWx0Lmlucy5nZXRVblBsYWNlZE51bSgpO1xuICAgICAgICB2YXIgbiA9IHRoaXMucmVkTGJzWzFdO1xuICAgICAgICBpZiAobilcbiAgICAgICAgICAgIGlmIChvID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gbyA+IDk5ID8gXCI5OStcIiA6IG8gKyBcIlwiO1xuICAgICAgICAgICAgICAgIG4ubm9kZS5wYXJlbnQuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgbi5zdHJpbmcgPSBpICsgXCJcIjtcbiAgICAgICAgICAgICAgICBuLm5vZGUueCA9IF9nbG9iYWwuZGVmYXVsdC5nZXRDaGFyWE9mZnNldChuLnN0cmluZyk7XG4gICAgICAgICAgICB9IGVsc2Ugbi5ub2RlLnBhcmVudC5hY3RpdmUgPSAhMTtcbiAgICAgICAgdmFyIHIgPSBfYmFnTWdyLmRlZmF1bHQuaW5zLmdldEl0ZW1Db3VudChcInF3X2xpbmVfdGlja2V0XCIpO1xuICAgICAgICB2YXIgYSA9IHRoaXMucmVkTGJzWzRdO1xuICAgICAgICBhICYmXG4gICAgICAgICAgICAociA+IDAgP1xuICAgICAgICAgICAgICAgICgoYS5ub2RlLnBhcmVudC5hY3RpdmUgPSAhMCksXG4gICAgICAgICAgICAgICAgICAgIChhLnN0cmluZyA9IHIgKyBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgKGEubm9kZS54ID0gX2dsb2JhbC5kZWZhdWx0LmdldENoYXJYT2Zmc2V0KGEuc3RyaW5nKSkpIDpcbiAgICAgICAgICAgICAgICAoYS5ub2RlLnBhcmVudC5hY3RpdmUgPSAhMSkpO1xuICAgICAgICB2YXIgcyA9XG4gICAgICAgICAgICAobnVsbCA9PT0gKGUgPSBudWxsID09PSAodCA9IF9jZmdNZ3IuZGVmYXVsdC5zZXJ2ZXJDZmcpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZGFpbHlfY2hhbGxlbmdlKSB8fFxuICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gZSA/XG4gICAgICAgICAgICAgICAgdm9pZCAwIDpcbiAgICAgICAgICAgICAgICBlLm9wZW4pIHx8IDUwO1xuICAgICAgICBfcEluZm8uZGVmYXVsdC5pbnMuZ2V0UHV6emxlTHZsKCkgPiBzICYmXG4gICAgICAgICAgICAoX2NoYWxsZW5nZU1nci5kZWZhdWx0Lmlucy5nZXRUb2RheUlzRmluKCksIF9jaGFsbGVuZ2VNZ3IuZGVmYXVsdC5pbnMuZ2V0QWxsTW9udGhSZWQoKSk7XG4gICAgICAgIHZhciBjID0gX3Nob3BNZ3IuZGVmYXVsdC5pbnMuZ2V0QWxsUmVkKCk7XG4gICAgICAgIHZhciBsID0gdGhpcy5yZWRMYnNbMF07XG4gICAgICAgIGwgJiYgKGMgPiAwID8gKChsLm5vZGUucGFyZW50LmFjdGl2ZSA9ICEwKSwgKGwuc3RyaW5nID0gYyArIFwiXCIpKSA6IChsLm5vZGUucGFyZW50LmFjdGl2ZSA9ICExKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja1BvcE5ld0dpZnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgX2dsb2JhbC5kZWZhdWx0LnR3b0RheXNMZWZ0ICYmXG4gICAgICAgICAgICAoKF9nbG9iYWwuZGVmYXVsdC50d29EYXlzTGVmdCA9ICExKSxcbiAgICAgICAgICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX2JhY2tSZXdhcmRcIiwgbnVsbCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX2dsb2JhbC5kZWZhdWx0LmlzUG9wTmV3R2lmdCA9ICEwO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrUG9wUHJpdmFjeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBfaWR4LnBsYXRmb3JtLmlzUVEgJiZcbiAgICAgICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5nZXRJc05ld1VzZXIoKSAmJlxuICAgICAgICAgICAgX3BhbmVsTWdyLmRlZmF1bHQuaW5zLm9wZW4oXCJ1aS91aV9wcml2YWN5XCIsIHt9LCB7IE1hc2tOb0hpZGU6ICEwIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2tTZXJQYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIF9yZXF1ZXN0LmRlZmF1bHQuaW5zXG4gICAgICAgIC8vICAgICAuZ2V0VW5zaGlwcGVkT3JkZXJzKClcbiAgICAgICAgLy8gICAgIC50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIC8vICAgICAgICAgdCAmJlxuICAgICAgICAvLyAgICAgICAgICAgICB0LnN0YXR1cyAmJlxuICAgICAgICAvLyAgICAgICAgICAgICB0LmRhdGEgJiZcbiAgICAgICAgLy8gICAgICAgICAgICAgdC5kYXRhLmxlbmd0aCAmJlxuICAgICAgICAvLyAgICAgICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX3JlaUdpZnRcIiwge3NlclBhY2tzOiB0LmRhdGF9KTtcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge30pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY3JlYXRlQnRucyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmlzV3ggJiYgKHRoaXMuY3JlYXRlVXNlckluZm9CdXR0b24xKCksIHRoaXMuY3JlYXRlVXNlckluZm9CdXR0b24yKCkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2tHZXRVc2VySW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pc1d4KSB7XG4gICAgICAgICAgICB2YXIgdCA9ICExO1xuICAgICAgICAgICAgKF90aW1lLmRlZmF1bHQuaW5zLnNlcnZlclRpbWUgfHwgTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDFlMykpIC1cbiAgICAgICAgICAgIF9wSW5mby5kZWZhdWx0Lmlucy5nZXRSYW5rTGFzdFRpbWVEYXRhKCkgPj1cbiAgICAgICAgICAgICAgICAzNjAwICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuYXV0aG9yaXplZCAmJlxuICAgICAgICAgICAgICAgICFfcGFuZWxNZ3IuZGVmYXVsdC5pbnMuaGFzUG9wKCkgP1xuICAgICAgICAgICAgICAgICh0aGlzLnNob3dXeEJ0bnMoKSwgKHQgPSAhMCkpIDpcbiAgICAgICAgICAgICAgICAodGhpcy5oaWRlV3hCdG5zKCksICh0ID0gITEpKTtcbiAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93V3hCdG5zID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaXNXeCAmJiAodGhpcy5zZXRXeEJ0blNob3cxKCEwKSwgdGhpcy5zZXRXeEJ0blNob3cyKCEwKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oaWRlV3hCdG5zID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaXNXeCAmJiAodGhpcy5zZXRXeEJ0blNob3cxKCExKSwgdGhpcy5zZXRXeEJ0blNob3cyKCExKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRXeEJ0blNob3cxID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLmlzV3ggJiYgbnVsbCAhPSB0aGlzLnd4QnRuMSAmJiAodCA/IHRoaXMud3hCdG4xLnNob3coKSA6IHRoaXMud3hCdG4xLmhpZGUoKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRXeEJ0blNob3cyID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLmlzV3ggJiYgbnVsbCAhPSB0aGlzLnd4QnRuMiAmJiAodCA/IHRoaXMud3hCdG4yLnNob3coKSA6IHRoaXMud3hCdG4yLmhpZGUoKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jcmVhdGVVc2VySW5mb0J1dHRvbjEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLmF1dGhTZXR0aW5nW1wic2NvcGUudXNlckluZm9cIl0gP1xuICAgICAgICAgICAgICAgICAgICAoKHQuYXV0aG9yaXplZCA9ICEwKSwgdC51cGRhdGVVc2VySW5mbygpKSA6XG4gICAgICAgICAgICAgICAgICAgICgodC53eEJ0bjEgPSB0LmF1dGhVZXJzSW5mbyh0LnJhbmtCdG4xKSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lnd4QnRuMS5vblRhcChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0VXNlckluZm86b2tcIiA9PSBlLmVyck1zZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0LnNldFVzZXJJbmZvMShlLnVzZXJJbmZvKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT09IChvID0gdC53eEJ0bjIpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLmRlc3Ryb3koKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0Lnd4QnRuMiA9IG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gKG4gPSB0Lnd4QnRuMSkgfHwgdm9pZCAwID09PSBuIHx8IG4uZGVzdHJveSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQud3hCdG4xID0gbnVsbCkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbnNvbGUubG9nKFwi5o6I5p2D5aSx6LSlXCIpLCB0LmdldEZhaWwxKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0LmNoZWNrR2V0VXNlckluZm8oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY3JlYXRlVXNlckluZm9CdXR0b24yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZS5hdXRoU2V0dGluZ1tcInNjb3BlLnVzZXJJbmZvXCJdID9cbiAgICAgICAgICAgICAgICAgICAgKCh0LmF1dGhvcml6ZWQgPSAhMCksIHQudXBkYXRlVXNlckluZm8oKSkgOlxuICAgICAgICAgICAgICAgICAgICAoKHQud3hCdG4yID0gdC5hdXRoVWVyc0luZm8odC5yYW5rQnRuMikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdC53eEJ0bjIub25UYXAoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFVzZXJJbmZvOm9rXCIgPT0gZS5lcnJNc2cgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodC5zZXRVc2VySW5mbzIoZS51c2VySW5mbyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsID09PSAobyA9IHQud3hCdG4yKSB8fCB2b2lkIDAgPT09IG8gfHwgby5kZXN0cm95KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodC53eEJ0bjIgPSBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT09IChuID0gdC53eEJ0bjEpIHx8IHZvaWQgMCA9PT0gbiB8fCBuLmRlc3Ryb3koKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0Lnd4QnRuMSA9IG51bGwpKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25zb2xlLmxvZyhcIuaOiOadg+Wksei0pVwiKSwgdC5nZXRGYWlsMigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5jaGVja0dldFVzZXJJbmZvKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmF1dGhVZXJzSW5mbyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xuICAgICAgICB2YXIgbyA9IGUuc2NyZWVuV2lkdGg7XG4gICAgICAgIHZhciBuID0gZS5zY3JlZW5IZWlnaHQ7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIHIgPSAwO1xuICAgICAgICBpZiAodCAmJiBjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgICAgICB2YXIgYSA9IGUuc2NyZWVuV2lkdGggLyBjYy53aW5TaXplLndpZHRoO1xuICAgICAgICAgICAgdmFyIHMgPSB0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICAgICAgdmFyIGMgPSAwLjUgKiAoY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLmhlaWdodCAtIGNjLndpblNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgIHIgPSBuIC0gKHMueSArIDAuNSAqIHQuaGVpZ2h0ICsgYykgKiBhO1xuICAgICAgICAgICAgaSA9IChzLnggLSAwLjUgKiB0LndpZHRoKSAqIGE7XG4gICAgICAgICAgICBvID0gdC53aWR0aCAqIGE7XG4gICAgICAgICAgICBuID0gdC5oZWlnaHQgKiBhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3eC5jcmVhdGVVc2VySW5mb0J1dHRvbih7XG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGksXG4gICAgICAgICAgICAgICAgdG9wOiByLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBvLFxuICAgICAgICAgICAgICAgIGhlaWdodDogbixcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiA0MCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDAwMDAwXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZVVzZXJJbmZvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICBfcmVxdWVzdC5kZWZhdWx0Lmlucy51cGRhdGVVc2VySW5mbyh0LnVzZXJJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRVc2VySW5mbzEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5hdXRob3JpemVkID0gITA7XG4gICAgICAgIHRoaXMuY2hlY2tHZXRVc2VySW5mbygpO1xuICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX3JhbmtcIiwgbnVsbCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRVc2VySW5mbzIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5hdXRob3JpemVkID0gITA7XG4gICAgICAgIHRoaXMuanVtcFRvUGFnZSg0KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEZhaWwxID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gX3RpbWUuZGVmYXVsdC5pbnMuc2VydmVyVGltZSB8fCBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMWUzKTtcbiAgICAgICAgX3BJbmZvLmRlZmF1bHQuaW5zLnNldFJhbmtMYXN0VGltZURhdGEodCk7XG4gICAgICAgIHRoaXMuY2hlY2tHZXRVc2VySW5mbygpO1xuICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX3JhbmtcIiwgbnVsbCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRGYWlsMiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IF90aW1lLmRlZmF1bHQuaW5zLnNlcnZlclRpbWUgfHwgTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDFlMyk7XG4gICAgICAgIF9wSW5mby5kZWZhdWx0Lmlucy5zZXRSYW5rTGFzdFRpbWVEYXRhKHQpO1xuICAgICAgICB0aGlzLmp1bXBUb1BhZ2UoNCk7XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtOKGNjLkJsb2NrSW5wdXRFdmVudHMpXSwgZS5wcm90b3R5cGUsIFwiYmxvY2tDb21wXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbTihjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcInBhZ2VzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbTihjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImRvd25Ob2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbTihfdG9wLmRlZmF1bHQpXSwgZS5wcm90b3R5cGUsIFwidG9wXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbTihjYy5QcmVmYWIpXSwgZS5wcm90b3R5cGUsIFwibFBmYlwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW04oY2MuU3ByaXRlKV0sIGUucHJvdG90eXBlLCBcInBvd2VyU3BcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtOKGNjLkNhbWVyYSldLCBlLnByb3RvdHlwZSwgXCJjYW1lcmFcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtOKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwicmFua0J0bjFcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtOKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiYnRuQmdOb2RlXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIChvID0gX19kZWNvcmF0ZShbUl0sIGUpKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBDOyJdfQ==