"use strict";
cc._RF.push(module, 'dfa43OykftLfa6ThTFErZTe', 'slider');
// scripts/slider.js

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
    e.handle = null;
    e.slideEvents = [];
    e.pro = null;
    e._progress = 0;
    return e;
  }

  __extends(e, t);

  Object.defineProperty(e.prototype, "progress", {
    get: function get() {
      return this._progress;
    },
    set: function set(t) {
      this._progress = cc.misc.clamp01(t);
      this.pro.width = this._progress * this.node.width;
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.onLoad = function () {
    this.handle && this.handle.isValid && this.handle.node.on(cc.Node.EventType.TOUCH_MOVE, this.tM, this);
  };

  e.prototype.init = function (t) {
    this.progress = t;
    this.handle.node.x = this.progress * this.node.width;
  };

  e.prototype.tM = function (t) {
    var e = t.getLocation();
    var o = this.node.convertToNodeSpaceAR(e);
    this.handle.node.x = cc.misc.clampf(o.x, 0, this.node.width);
    this.progress = this.handle.node.x / this.node.width;
    this.slideEvents.length > 0 && cc.Component.EventHandler.emitEvents(this.slideEvents, this);
  };

  __decorate([c(cc.Button)], e.prototype, "handle", void 0);

  __decorate([c([cc.Component.EventHandler])], e.prototype, "slideEvents", void 0);

  __decorate([c(cc.Node)], e.prototype, "pro", void 0);

  return __decorate([s], e);
}(cc.Component);

exports["default"] = l;

cc._RF.pop();