"use strict";
cc._RF.push(module, '7c4e0aUwodIo6AqBp46T8p1', 'swBtn');
// scripts/swBtn.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.sprNode = null;
    e.flag = !0;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.u();
  };

  e.prototype.setState = function (t) {
    this.flag = t;
    this.u();
  };

  e.prototype.u = function () {
    null != this.sprNode && (this.sprNode.active = this.flag);
  };

  __decorate([c(cc.Node)], e.prototype, "sprNode", void 0);

  return __decorate([s], e);
}(cc.Component);

exports["default"] = l;

cc._RF.pop();