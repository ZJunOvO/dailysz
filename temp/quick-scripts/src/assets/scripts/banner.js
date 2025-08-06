"use strict";
cc._RF.push(module, 'b491bWadyVEz4fDbYZRH4YG', 'banner');
// scripts/banner.js

"use strict";

//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _com = require("com");

var _lang = require("lang");

var _pInfo = require("pInfo");

var l = cc._decorator;
var u = l.ccclass;
var p = l.property;

var d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ani = null;
    e.par = null;
    e.bannerLabel = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = _pInfo["default"].ins.getRecordData().heWins;

    var e = t >= 50 ? 40002 : 40001;
    40001 === e && (t = _com["default"].ins.rad(80, 99));
    this.bannerLabel.string = _lang.lang[e].format(t);
  };

  e.prototype.play = function () {
    this.ani.play();
    this.par.resetSystem();
  };

  __decorate([p(cc.Animation)], e.prototype, "ani", void 0);

  __decorate([p(cc.ParticleSystem)], e.prototype, "par", void 0);

  __decorate([p(cc.Label)], e.prototype, "bannerLabel", void 0);

  return __decorate([u], e);
}(cc.Component);

exports["default"] = d;

cc._RF.pop();