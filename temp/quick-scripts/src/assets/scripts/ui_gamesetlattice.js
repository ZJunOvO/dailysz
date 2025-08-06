"use strict";
cc._RF.push(module, '26dfbJvCClAmpxj5mN5QzJI', 'ui_gamesetlattice');
// scripts/ui_gamesetlattice.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _idx = require("idx");

var _baseUI = require("baseUI");

var c = cc._decorator;
var l = c.ccclass;
var u = (c.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.init = function () {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
  };

  e.prototype.onBtnAdd = function () {
    var t;
    null === (t = _idx.platform.addGamesetlattice) || void 0 === t || t.call(_idx.platform);
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  return __decorate([l], e);
}(_baseUI["default"]));
exports["default"] = u;

cc._RF.pop();