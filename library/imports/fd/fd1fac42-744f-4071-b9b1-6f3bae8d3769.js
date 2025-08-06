"use strict";
cc._RF.push(module, 'fd1faxCdE9AcbmxbzuujTdp', 'worm');
// scripts/worm.js

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
    e.sps = [];
    e.sp = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    this.sp.spriteFrame = this.sps[t];
  };

  __decorate([c([cc.SpriteFrame])], e.prototype, "sps", void 0);

  __decorate([c(cc.Sprite)], e.prototype, "sp", void 0);

  return __decorate([s], e);
}(cc.Component);

exports["default"] = l;

cc._RF.pop();