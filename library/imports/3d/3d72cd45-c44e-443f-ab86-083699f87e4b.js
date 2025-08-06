"use strict";
cc._RF.push(module, '3d72c1FxE5EP6uGCDaZ+H5L', 'loadingAni');
// scripts/loadingAni.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var a;
var s = cc._decorator;
var c = s.ccclass;
var l = s.property;

(function (t) {
  t.to = "loadingTo";
  t.back = "loadingBack";
})(a || (a = {}));

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.bg = null;
    e.ani = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.ani.on(cc.Animation.EventType.FINISHED, this.playEnd, this);
  };

  e.prototype.playEnd = function (t, e) {
    var o = this;
    if (e.name == a.to) cc.director.loadScene(this.newRoot, function () {
      o.playBack();
      o.cb && o.cb();
    });else {
      var n = this.node;
      cc.game.removePersistRootNode(n);
      n.destroy();
    }
  };

  e.prototype.playTo = function (t, e, o, n) {
    this.bg.setContentSize(t, e);
    this.newRoot = o;
    this.cb = n;
    this.ani.play(a.to);
  };

  e.prototype.playBack = function () {
    this.ani.play(a.back);
  };

  __decorate([l(cc.Node)], e.prototype, "bg", void 0);

  __decorate([l(cc.Animation)], e.prototype, "ani", void 0);

  return __decorate([c], e);
}(cc.Component);

exports["default"] = u;

cc._RF.pop();