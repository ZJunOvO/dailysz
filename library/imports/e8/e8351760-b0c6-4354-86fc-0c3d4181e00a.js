"use strict";
cc._RF.push(module, 'e8351dgsMZDVIb8DD1BgeAK', 'jigMenu');
// scripts/jigMenu.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _res = require("res");

var _cfgMgr = require("cfgMgr");

var _lang = require("lang");

var _global = require("global");

var _jigsawMgr = require("jigsawMgr");

var _newJigMgr = require("newJigMgr");

var _panelMgr = require("panelMgr");

var _tipMgr = require("tipMgr");

var g = cc._decorator;
var y = g.ccclass;
var m = g.property;

var v = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.icons = [];
    e.idxLbls = [];
    e.pieceLbs = [];
    e.unlockNode = null;
    e.lockNode = null;
    e.finishNode = null;
    e.unPlacedLb = null;
    e.theme_id = 0;
    e.themeType = 1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    _evts["default"].opE.on(this.onOperTap.bind(this));
  };

  e.prototype.onOperTap = function (t) {
    var e = null == t ? void 0 : t.action;
    if (e) switch (e) {
      case _evts["default"].UPDJIGSAWGAME:
        this.updateView();
    }
  };

  e.prototype.init = function (t, e) {
    var o = this;
    this.theme_id = t;
    this.themeType = e;
    this.idxLbls.forEach(function (e) {
      e.string = t + 1 + "";
    });
    var n = this.getFinAndAllNum();
    var i = n[0];
    n[1];
    this.pieceLbs.forEach(function (t) {
      t.string = i + "/105";
    });
    var r;
    var a = t + 1;
    var c = "pintu_" + a + "_1";
    var l = "pintu_" + a;
    1 === e ? r = _jigsawMgr["default"].ins : 2 === e && (r = _newJigMgr["default"].ins, c = "fes_" + a + "_1", l = "fes_" + a);
    r.isItemUnlock(t) ? this.initUnLock() : this.initLocked();
    this.IsJigsawCompleted(this.theme_id) && (c = l);
    1 === e ? a < 61 ? _res["default"].ins.getBundleByString("jigsaw").then(function (t) {
      t.load(c, cc.SpriteFrame, function (t, e) {
        !t && o.node && o.node.isValid && o.icons.forEach(function (t) {
          t.spriteFrame = e;
        });
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('jigsaw')", t);
    }) : cc.assetManager.loadRemote(_global.OssConfig.jigswawUrl + c + ".jpg", {
      ext: _global.headImgExt
    }, function (t, e) {
      if (!t && o.node && o.node.isValid) {
        var n = new cc.SpriteFrame(e);
        o.icons.forEach(function (t) {
          t.spriteFrame = n;
        });
      }
    }) : _res["default"].ins.getBundleByString("jigsaw").then(function (t) {
      t.load(c, cc.SpriteFrame, function (t, e) {
        !t && o.node && o.node.isValid && o.icons.forEach(function (t) {
          t.spriteFrame = e;
        });
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('jigsaw')", t);
    });
    this.checkUnPlacedNum();
  };

  e.prototype.updateView = function () {
    this.init(this.theme_id, this.themeType);
  };

  e.prototype.initLocked = function () {
    this.lockNode.active = !0;
    this.unlockNode.active = !1;
    this.finishNode.active = !1;
  };

  e.prototype.initUnLock = function () {
    this.lockNode.active = !1;
    this.IsJigsawCompleted(this.theme_id) ? this.initComplete() : this.initUnComplete();
  };

  e.prototype.initComplete = function () {
    this.unlockNode.active = !1;
    this.finishNode.active = !0;
  };

  e.prototype.initUnComplete = function () {
    this.unlockNode.active = !0;
    this.finishNode.active = !1;
  };

  e.prototype.IsJigsawCompleted = function (t) {
    var e;
    1 === this.themeType ? e = _jigsawMgr["default"].ins : 2 === this.themeType && (e = _newJigMgr["default"].ins);
    var o = e.checkHasFin(t);
    if (o) return o;
    var n = e.getJigsawTilesByIdx(t);

    if (105 == n.length) {
      for (var i = 0, r = n; i < r.length; i++) {
        var a = r[i];
        if (a[0] != a[1]) return !1;
      }

      return !0;
    }

    return !1;
  };

  e.prototype.getFinAndAllNum = function () {
    var t;
    1 === this.themeType ? t = _jigsawMgr["default"].ins : 2 === this.themeType && (t = _newJigMgr["default"].ins);

    for (var e = t.getJigsawTilesByIdx(this.theme_id), o = e.length, n = 0, i = 0; i < o; i++) {
      var r = e[i];
      r[0] == r[1] && n++;
    }

    t.checkHasFin(this.theme_id) && (n = 105);
    return [n, o];
  };

  e.prototype.checkUnPlacedNum = function () {
    var t;
    1 === this.themeType ? t = _jigsawMgr["default"].ins : 2 === this.themeType && (t = _newJigMgr["default"].ins);

    for (var e = t.getJigsawTilesByIdx(this.theme_id), o = e.length, n = 0, i = 0; i < o; i++) {
      var r = e[i];
      r[1] != r[0] && n++;
    }

    t.checkHasFin(this.theme_id) && (n = 0);
    var a = this.unPlacedLb;
    n > 0 ? (a.node.parent.active = !0, a.string = n + "") : a.node.parent.active = !1;
  };

  e.prototype.onBtnClick = function () {
    var t;
    var e;
    var o;
    var n = this.themeType;
    if (1 === n ? o = _jigsawMgr["default"].ins : 2 === n && (o = _newJigMgr["default"].ins), o.isItemUnlock(this.theme_id)) _panelMgr["default"].ins.open("ui/ui_jigsaw", {
      theme_id: this.theme_id,
      themeType: this.themeType
    });else {
      var i = _cfgMgr["default"].serverCfg;
      var r = (null === (e = null === (t = null == i ? void 0 : i.lock_rules) || void 0 === t ? void 0 : t.main_line_lock) || void 0 === e ? void 0 : e.puzzle_line_val) || 0;
      var a = o.isPieceEnough(this.theme_id) ? _lang.lang[30001].format(r) : "拼图未解锁";

      _tipMgr["default"].ins.showTip(a);
    }
  };

  __decorate([m([cc.Sprite])], e.prototype, "icons", void 0);

  __decorate([m([cc.Label])], e.prototype, "idxLbls", void 0);

  __decorate([m([cc.Label])], e.prototype, "pieceLbs", void 0);

  __decorate([m(cc.Node)], e.prototype, "unlockNode", void 0);

  __decorate([m(cc.Node)], e.prototype, "lockNode", void 0);

  __decorate([m(cc.Node)], e.prototype, "finishNode", void 0);

  __decorate([m(cc.Label)], e.prototype, "unPlacedLb", void 0);

  return __decorate([y], e);
}(cc.Component);

exports["default"] = v;

cc._RF.pop();