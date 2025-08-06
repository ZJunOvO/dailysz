"use strict";
cc._RF.push(module, '3b20bSJnh5P8p51eQRE+xVD', 'heart');
// scripts/heart.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var a = cc._decorator;
var s = a.ccclass;
var c = (a.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.playLose = function () {
    this.getComponent(cc.Animation).play();
  };

  e.prototype.getHeart = function () {
    var t = this.node;
    t.getChildByName("noHas").active = !1;
    t.getChildByName("has").active = !0;
  };

  return __decorate([s], e);
}(cc.Component));
exports["default"] = c;

cc._RF.pop();