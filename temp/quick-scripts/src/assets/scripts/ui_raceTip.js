"use strict";
cc._RF.push(module, '62b5dz26olNypR9n2CUV7P8', 'ui_raceTip');
// scripts/ui_raceTip.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _res = require("res");

var _panelMgr = require("panelMgr");

var _pInfo = require("pInfo");

var _baseUI = require("baseUI");

var _chaptBtn = require("chaptBtn");

var p = cc._decorator;
var d = p.ccclass;
var h = p.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.btnsNode = null;
    e.pageNodes = null;
    e.pageBaseTipSps = [];
    e.pageBaseScorll = null;
    e.pageBaseSlider = null;
    e.pageTutoTipSps = [];
    e.pageTutoScorll = null;
    e.pageTutoSlider = null;
    e.btnsComp = [];
    e.curPageIdx = 1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    for (var t = this, e = function e(_e, n, i) {
      var r = n[_e].getComponent(_chaptBtn["default"]);

      r.setState(!1);
      i.push(r);

      n[_e].on("click", function () {
        t.chgViewData(_e);
      }, o);
    }, o = this, n = 0, i = this.btnsNode.children, r = this.btnsComp, s = i.length; n < s; n++) {
      e(n, i, r);
    }

    this.pageBaseSlider.y = 0;
    this.pageBaseScorll.scrollToTop();
    this.pageBaseScorll.node.on("scrolling", this.scrollCbBase.bind(this), this);

    var c = function c(e) {
      var o = e + 1;

      _res["default"].ins.getBundleByString("resSps").then(function (n) {
        n.load("raceTip/img_bz_bznr" + o, cc.SpriteFrame, function (o, n) {
          !o && t.node && t.node.isValid && (t.pageBaseTipSps[e].spriteFrame = n);
        });
      })["catch"](function (t) {
        console.error("RTool.ins.getBundleByString('resSps')", t);
      });
    };

    for (n = 0; n < 4; n++) {
      c(n);
    }

    this.pageTutoSlider.y = 0;
    this.pageTutoScorll.scrollToTop();
    this.pageTutoScorll.node.on("scrolling", this.scrollCbTuto.bind(this), this);

    var l = function l(e) {
      var o = e + 1;

      _res["default"].ins.getBundleByString("resSps").then(function (n) {
        n.load("raceTip/img_bz_jcjc" + o, cc.SpriteFrame, function (o, n) {
          !o && t.node && t.node.isValid && (t.pageTutoTipSps[e].spriteFrame = n);
        });
      })["catch"](function (t) {
        console.error("RTool.ins.getBundleByString('resSps')", t);
      });
    };

    for (n = 0; n < 3; n++) {
      l(n);
    }

    this.chgViewData(0);
  };

  e.prototype.init = function (t) {
    var e = t.pageIdx;
    var o = t.closeCb;
    this.closeCb = o;
    this.chgViewData(e);
  };

  e.prototype.chgViewData = function (t) {
    var e = this.curPageIdx;

    if (e != t) {
      this.pageNodes.children[0].active = !1;
      this.pageNodes.children[1].active = !1;
      this.pageNodes.children[2].active = !1;
      this.pageNodes.children[t].active = !0;
      var o = this.btnsComp;
      o[e].setState(!1);
      o[t].setState(!0);
      this.curPageIdx = t;
    }
  };

  e.prototype.scrollCbBase = function () {
    var t = this.pageBaseScorll.getMaxScrollOffset();
    var e = (this.pageBaseScorll.getContentPosition().y - 300) / t.y;
    e = (e = e > 1 ? 1 : e) < 0 ? 0 : e;
    this.pageBaseSlider.y = 556 * -e;
  };

  e.prototype.scrollCbTuto = function () {
    var t = this.pageTutoScorll.getMaxScrollOffset();
    var e = (this.pageTutoScorll.getContentPosition().y - 300) / t.y;
    e = (e = e > 1 ? 1 : e) < 0 ? 0 : e;
    this.pageTutoSlider.y = 556 * -e;
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  e.prototype.hide = function () {
    var e;
    null === (e = this.closeCb) || void 0 === e || e.call(this);
    return t.prototype.hide.call(this);
  };

  e.prototype.onBtnGuide = function () {
    _pInfo.chgScene(_pInfo.sceneType.guide);
  };

  e.prototype.onBtnTrain = function () {
    _pInfo.chgScene(_pInfo.sceneType.game, {
      gameType: _pInfo.gameType.practice
    });
  };

  e.prototype.onBtnContact = function () {
    _panelMgr["default"].ins.open("ui/ui_contentUs", null);
  };

  e.prototype.onDestroy = function () {
    _res["default"].ins.getBundleByString("resSps").then(function (t) {
      for (var e = 0; e < 4; e++) {
        var o = e + 1;
        cc.assetManager.releaseAsset(t.get("raceTip/img_bz_bznr" + o, cc.SpriteFrame));
      }

      for (e = 0; e < 3; e++) {
        o = e + 1, cc.assetManager.releaseAsset(t.get("raceTip/img_bz_jcjc" + o, cc.SpriteFrame));
      }
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('resSps')", t);
    });
  };

  __decorate([h(cc.Node)], e.prototype, "btnsNode", void 0);

  __decorate([h(cc.Node)], e.prototype, "pageNodes", void 0);

  __decorate([h([cc.Sprite])], e.prototype, "pageBaseTipSps", void 0);

  __decorate([h(cc.ScrollView)], e.prototype, "pageBaseScorll", void 0);

  __decorate([h(cc.Node)], e.prototype, "pageBaseSlider", void 0);

  __decorate([h([cc.Sprite])], e.prototype, "pageTutoTipSps", void 0);

  __decorate([h(cc.ScrollView)], e.prototype, "pageTutoScorll", void 0);

  __decorate([h(cc.Node)], e.prototype, "pageTutoSlider", void 0);

  return __decorate([d], e);
}(_baseUI["default"]);

exports["default"] = f;

cc._RF.pop();