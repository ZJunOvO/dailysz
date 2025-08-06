"use strict";
cc._RF.push(module, '5d0d4CPN3hK1I6Lx4gDVS6P', 'wormSp');
// scripts/wormSp.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _com = require("com");

var s = cc._decorator;
var c = s.ccclass;
var l = s.property;

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.spine = null;
    e.countLbl = null;
    e.idles = ["", "2", "3"];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.spine.setCompleteListener(this._playIdle.bind(this));

    this._playIdle();
  };

  e.prototype.init = function (t) {
    this.curCount = 0;
    this.maxCount = t;
    this.countLbl.string = this.curCount + "/" + this.maxCount;
  };

  e.prototype.addCount = function () {
    var t = this.curCount = this.curCount + 1;
    t == this.maxCount && this.playDone();
    this.countLbl.string = t + "/" + this.maxCount;
  };

  e.prototype._playIdle = function () {
    this.isDone || (this.spine.animation = "idle" + this.idles[_com["default"].ins.rad(0, 2)]);
  };

  e.prototype.playDone = function () {
    this.isDone = !0;
    var t = this.spine;
    t.loop = !1;
    t.animation = "xiaoshi";
  };

  __decorate([l(sp.Skeleton)], e.prototype, "spine", void 0);

  __decorate([l(cc.Label)], e.prototype, "countLbl", void 0);

  return __decorate([c], e);
}(cc.Component);

exports["default"] = u;

cc._RF.pop();