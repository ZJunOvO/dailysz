"use strict";
cc._RF.push(module, '9caaaxFVHdG34DDZ87Jv+Sy', 'chaptBtn');
// scripts/chaptBtn.js

"use strict";

//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
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
    e.lbls = [];
    e.redNumLb = null;
    e.flag = !0;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.u();
  };

  e.prototype.getState = function () {
    return this.flag;
  };

  e.prototype.setLb = function (t) {
    this.lbls.forEach(function (e) {
      e.string = t;
    });
  };

  e.prototype.setState = function (t) {
    this.flag = t;
    this.u();
  };

  e.prototype.u = function () {
    null != this.sprNode && (this.sprNode.active = this.flag);
  };

  e.prototype.setRed = function (t) {
    this.redNumLb && (t ? (this.redNumLb.string = t + "", this.redNumLb.node.parent.active = !0) : this.redNumLb.node.parent.active = !1);
  };

  __decorate([c(cc.Node)], e.prototype, "sprNode", void 0);

  __decorate([c([cc.Label])], e.prototype, "lbls", void 0);

  __decorate([c(cc.Label)], e.prototype, "redNumLb", void 0);

  return __decorate([s], e);
}(cc.Component);

exports["default"] = l;

cc._RF.pop();