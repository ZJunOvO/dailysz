"use strict";
cc._RF.push(module, 'ab1208U3p1LdY9+tJ9S8YFo', 'item');
// scripts/item.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _numberUtils = require("NumberUtils");

var _res = require("res");

var c = cc._decorator;
var l = c.ccclass;
var u = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.icon = null;
    e.numLbl = null;
    e.numBgNode = null;
    e.key = "";
    e.count = "";
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t, e) {
    this.key = e;

    _res["default"].ins.lSF("item/" + e, this.icon);

    var o = _numberUtils["default"].FormatCurrency(t.val[e]);

    this.count = o;
    this.numLbl.string = "x" + o;
  };

  e.prototype.initByData = function (t, e) {
    var o = this;
    this.key = t;
    this.count = e;

    _res["default"].ins.lSF("item/" + t, this.icon);

    var n = this.numLbl.node.width;
    this.numLbl.string = "x" + e;
    this.scheduleOnce(function () {
      var t = o.numLbl.node.width - n;
      o.reNumBg(t);
    });
  };

  e.prototype.reNumBg = function (t) {
    this.numBgNode && (this.numBgNode.width += t);
  };

  __decorate([u(cc.Sprite)], e.prototype, "icon", void 0);

  __decorate([u(cc.Label)], e.prototype, "numLbl", void 0);

  __decorate([u(cc.Node)], e.prototype, "numBgNode", void 0);

  return __decorate([l], e);
}(cc.Component);

exports["default"] = p;

cc._RF.pop();