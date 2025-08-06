"use strict";
cc._RF.push(module, 'bd3b6EvuhVISo+Thy3/ym09', 'head');
// scripts/head.js

"use strict";

//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _res = require("res");

var _global = require("global");

var _skinMgr = require("skinMgr");

var _pInfo = require("pInfo");

var p = cc._decorator;
var d = p.ccclass;
var h = p.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.bg = null;
    e.headIcon = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.eventFunc = this.onOperTap.bind(this);

    _evts["default"].opE.on(this.eventFunc);
  };

  e.prototype.onDestroy = function () {
    _evts["default"].opE.off(this.eventFunc);

    this.eventFunc = null;
  };

  e.prototype.onOperTap = function (t) {
    var e;
    (null == t ? void 0 : t.action) === _evts["default"].SKIN_CHG && (null === (e = t.data) || void 0 === e ? void 0 : e.skinId) === _skinMgr.SkinIdEnum.headFrame && t.data.isUse && this.updateHeadFrame();
  };

  e.prototype.updateHeadFrame = function (t) {
    var e = t || _pInfo["default"].ins.getUsingSkin()[_skinMgr.SkinIdEnum.headFrame];

    _skinMgr["default"].ins.updateHeadFrame(e, this.bg);
  };

  e.prototype.loadHeadImg = function (t, e) {
    var o = this;
    t ? cc.assetManager.loadRemote(t, {
      ext: _global.headImgExt
    }, function (t, e) {
      o.node && o.node.isValid && (t ? o.setDefaultHead() : o.headIcon.spriteFrame = new cc.SpriteFrame(e));
    }) : this.setDefaultHead();
    this.updateHeadFrame(e);
  };

  e.prototype.setDefaultHead = function () {
    var t = this;
    var e = this;

    _res["default"].ins.getBundleByString("resSps").then(function (o) {
      o.load("common/head_1", cc.SpriteFrame, function (o, n) {
        !o && t.node && t.node.isValid && (e.headIcon.spriteFrame = n);
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('resSps')", t);
    });
  };

  __decorate([h(cc.Sprite)], e.prototype, "bg", void 0);

  __decorate([h(cc.Sprite)], e.prototype, "headIcon", void 0);

  return __decorate([d], e);
}(cc.Component);

exports["default"] = f;

cc._RF.pop();