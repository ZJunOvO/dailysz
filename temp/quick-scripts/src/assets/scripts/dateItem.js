"use strict";
cc._RF.push(module, 'fd235ZZ7QVCtYwyn8Ct+nY3', 'dateItem');
// scripts/dateItem.js

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
    e.bg = null;
    e.bgTypes = [];
    e.dateLb = null;
    e.select = null;
    e.finish = null;
    return e;
  }

  var o;

  __extends(e, t);

  o = e;

  e.prototype.setDate = function (t) {
    this.dateLb.string = t;
  };

  e.prototype.setLocked = function (t) {
    t ? (this.bg.spriteFrame = this.bgTypes[1], this.dateLb.node.color = o.color2, this.dateLb.node.opacity = 180) : (this.bg.spriteFrame = this.bgTypes[0], this.dateLb.node.color = o.color1, this.dateLb.node.opacity = 255);
  };

  e.prototype.setSelected = function (t) {
    this.select.active = t;
  };

  e.prototype.setFinish = function (t) {
    this.finish.active = t;
    t && (this.bg.spriteFrame = this.bgTypes[2], this.dateLb.node.color = cc.Color.WHITE, this.dateLb.node.opacity = 255);
  };

  e.color1 = new cc.Color(201, 103, 23);
  e.color2 = new cc.Color(255, 231, 209);

  __decorate([c(cc.Sprite)], e.prototype, "bg", void 0);

  __decorate([c([cc.SpriteFrame])], e.prototype, "bgTypes", void 0);

  __decorate([c(cc.Label)], e.prototype, "dateLb", void 0);

  __decorate([c(cc.Node)], e.prototype, "select", void 0);

  __decorate([c(cc.Node)], e.prototype, "finish", void 0);

  return o = __decorate([s], e);
}(cc.Component);

exports["default"] = l;

cc._RF.pop();