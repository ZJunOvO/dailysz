"use strict";
cc._RF.push(module, 'd358aGT1ddJ576hGkYJRnVO', 'ui_saveConfirm');
// scripts/ui_saveConfirm.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _time = require("time");

var _uData = require("uData");

var _baseUI = require("baseUI");

var l = cc._decorator;
var u = l.ccclass;
var p = l.property;

var d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.timeLb = null;
    e.lvL = null;
    e.coinNumL = null;
    e.powerL = null;
    e.item1L = null;
    e.item2L = null;
    e.item3L = null;
    e.lvR = null;
    e.coinNumR = null;
    e.powerR = null;
    e.item1R = null;
    e.item2R = null;
    e.item3R = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {};

  e.prototype.init = function (t) {
    var e;
    var o;
    var n;
    var i;
    var r;
    var c;
    var l = t.cData;
    this.timeLb.string = _time["default"].ins.formatDate(l.update_at);
    var u = this.chooseData = JSON.parse(l.user_data);

    var p = _uData["default"].ins.getLocalData();

    u && (this.lvL.string = (null == u ? void 0 : u.puzzleLvl) || 0, this.coinNumL.string = (null == u ? void 0 : u.coin) || 0, this.powerL.string = (null == u ? void 0 : u.power) || 0, this.item1L.string = (null === (e = null == u ? void 0 : u.bag) || void 0 === e ? void 0 : e.random_notice) || 0, this.item2L.string = (null === (o = null == u ? void 0 : u.bag) || void 0 === o ? void 0 : o.full_row_col) || 0, this.item3L.string = (null === (n = null == u ? void 0 : u.bag) || void 0 === n ? void 0 : n.notice) || 0);
    p && (this.lvR.string = (null == p ? void 0 : p.puzzleLvl) || 0, this.coinNumR.string = (null == p ? void 0 : p.coin) || 0, this.powerR.string = (null == p ? void 0 : p.power) || 0, this.item1R.string = (null === (i = null == p ? void 0 : p.bag) || void 0 === i ? void 0 : i.random_notice) || 0, this.item2R.string = (null === (r = null == p ? void 0 : p.bag) || void 0 === r ? void 0 : r.full_row_col) || 0, this.item3R.string = (null === (c = null == p ? void 0 : p.bag) || void 0 === c ? void 0 : c.notice) || 0);
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  e.prototype.onBtnRestore = function () {
    this.chooseData && _uData["default"].ins.restoreData(this.chooseData);
  };

  __decorate([p(cc.Label)], e.prototype, "timeLb", void 0);

  __decorate([p(cc.Label)], e.prototype, "lvL", void 0);

  __decorate([p(cc.Label)], e.prototype, "coinNumL", void 0);

  __decorate([p(cc.Label)], e.prototype, "powerL", void 0);

  __decorate([p(cc.Label)], e.prototype, "item1L", void 0);

  __decorate([p(cc.Label)], e.prototype, "item2L", void 0);

  __decorate([p(cc.Label)], e.prototype, "item3L", void 0);

  __decorate([p(cc.Label)], e.prototype, "lvR", void 0);

  __decorate([p(cc.Label)], e.prototype, "coinNumR", void 0);

  __decorate([p(cc.Label)], e.prototype, "powerR", void 0);

  __decorate([p(cc.Label)], e.prototype, "item1R", void 0);

  __decorate([p(cc.Label)], e.prototype, "item2R", void 0);

  __decorate([p(cc.Label)], e.prototype, "item3R", void 0);

  return __decorate([u], e);
}(_baseUI["default"]);

exports["default"] = d;

cc._RF.pop();