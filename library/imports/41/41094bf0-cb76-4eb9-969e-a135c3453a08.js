"use strict";
cc._RF.push(module, '41094vwy3ZOuZaeoTXDRToI', 'uvAni');
// scripts/uvAni.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var a = cc._decorator;
var s = a.ccclass;
var c = (a.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.bgMat = null;
    e.time = 0;
    e._speed = 0.5;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    var t = this.getComponent(cc.Sprite);
    this.bgMat = t.getMaterial(0);
    this.time = 0;
  };

  Object.defineProperty(e.prototype, "speed", {
    set: function set(t) {
      this._speed = t;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "stop", {
    set: function set(t) {
      this.isStop = t;
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.update = function (t) {
    this.isStop || (this.time += t * this._speed, this.bgMat.setProperty("time", this.time));
  };

  return __decorate([s], e);
}(cc.Component));
exports["default"] = c;

cc._RF.pop();