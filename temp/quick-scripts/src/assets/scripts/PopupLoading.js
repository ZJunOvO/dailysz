"use strict";
cc._RF.push(module, '4e230uEA9dEv6CDagtCkl4n', 'PopupLoading');
// scripts/PopupLoading.js

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
    e.loadingIcon = null;
    e.loadingTxt = null;
    e.speed = 0.5;
    e.bgNode = null;
    e.charPoint = [".", "..", "..."];
    e.charIndex = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.bgNode.height = this.node.height = cc.winSize.height;
  };

  e.prototype.onEnable = function () {
    this.start();
  };

  e.prototype.onDisable = function () {
    cc.Tween.stopAllByTarget(this.loadingIcon);
    this.unschedule(this.txtAppend);
  };

  e.prototype.onShow = function () {
    this.loadingIcon.angle = 0;
    var t = cc.tween().by(0.6, {
      angle: -90
    }).by(0.6, {
      angle: -180
    }).by(0.6, {
      angle: -90
    });
    cc.tween(this.loadingIcon).repeatForever(t).start();
  };

  e.prototype.onHide = function () {};

  e.prototype.start = function () {
    this.charIndex = 0;
    this.onShow();
    this.unschedule(this.txtAppend);
    this.schedule(this.txtAppend, this.speed, cc.macro.REPEAT_FOREVER);
  };

  e.prototype.txtAppend = function () {
    this.loadingTxt.string = "loading" + this.charPoint[this.charIndex];
    this.charIndex++;
    this.charIndex > this.charPoint.length - 1 && (this.charIndex = 0);
  };

  e.prototype.update = function () {};

  __decorate([c(cc.Node)], e.prototype, "loadingIcon", void 0);

  __decorate([c(cc.Label)], e.prototype, "loadingTxt", void 0);

  __decorate([c(cc.Integer)], e.prototype, "speed", void 0);

  __decorate([c(cc.Node)], e.prototype, "bgNode", void 0);

  return __decorate([s], e);
}(cc.Component);

exports["default"] = l;

cc._RF.pop();