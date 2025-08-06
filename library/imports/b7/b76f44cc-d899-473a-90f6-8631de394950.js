"use strict";
cc._RF.push(module, 'b76f4TM2JlHOpD2hjHeOUlQ', 'ui_selectMode');
// scripts/ui_selectMode.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _pInfo = require("pInfo");

var _baseUI = require("baseUI");

var _cfgMgr = require("cfgMgr");

var _panelMgr = require("panelMgr");

var _main = require("main");

var _festivalMgr = require("festivalMgr");

var d = cc._decorator;
var h = d.ccclass;
var f = d.property;

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.costNums = [];
    e.btnsNode = [];
    e.costs = [];
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.initData();
  };

  e.prototype.initData = function () {
    var t = _cfgMgr["default"].serverCfg.difficulty_rules.rules;
    var e = [];
    var o = 10;

    for (var n in t) {
      var i = t[n];
      o = Number(i.times_val);
      e.push(o);
    }

    this.costNums[0].string = e[0];
    this.costNums[1].string = e[2];
    this.costNums[2].string = e[3];
    this.costs = [e[0], e[2], e[3]];
  };

  e.prototype.onBtnStart = function (t, e) {
    var o = 5 * Number(e);
    var n = this.costs[Number(e) - 1];
    if (_pInfo["default"].ins.getPower() < n) _panelMgr["default"].ins.open("ui/ui_getRes", {
      itemId: "times"
    });else {
      var i = this.btnsNode[Number(e) - 1].convertToWorldSpaceAR(cc.Vec3.ZERO);
      var r = _main["default"].ins;
      r && (r.blockComp.enabled = !0);

      _festivalMgr["default"].ins.updPro(_festivalMgr.fesTaskKey.costPower, n);

      r.usePower(-n, i, o);
    }
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  __decorate([f([cc.Label])], e.prototype, "costNums", void 0);

  __decorate([f([cc.Node])], e.prototype, "btnsNode", void 0);

  return __decorate([h], e);
}(_baseUI["default"]);

exports["default"] = g;

cc._RF.pop();