"use strict";
cc._RF.push(module, '8fafd+wZatAc4UtHon65T2w', 'ui_jigTip');
// scripts/ui_jigTip.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _baseUI = require("baseUI");

var s = cc._decorator;
var c = s.ccclass;
var l = (s.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.okCb = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    var e = t.okCb;
    this.okCb = e;
  };

  e.prototype.onBtnEnsure = function () {
    this.okCb && this.okCb();
    this.hideThis();
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  return __decorate([c], e);
}(_baseUI["default"]));
exports["default"] = l;

cc._RF.pop();