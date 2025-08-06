"use strict";
cc._RF.push(module, '9d594+dIy1LgYWXL4uGdb1G', 'nameFrame');
// scripts/nameFrame.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _skinMgr = require("skinMgr");

var _pInfo = require("pInfo");

var l = cc._decorator;
var u = l.ccclass;
var p = (l.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.icon = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.icon = this.node.getComponent(cc.Sprite);
    this.updateNameFrame();
    this.eventFunc = this.onOperTap.bind(this);

    _evts["default"].opE.on(this.eventFunc);
  };

  e.prototype.onDestroy = function () {
    _evts["default"].opE.off(this.eventFunc);

    this.eventFunc = null;
  };

  e.prototype.onOperTap = function (t) {
    var e;
    (null == t ? void 0 : t.action) === _evts["default"].SKIN_CHG && (null === (e = t.data) || void 0 === e ? void 0 : e.skinId) === _skinMgr.SkinIdEnum.nameFrame && this.updateNameFrame();
  };

  e.prototype.updateNameFrame = function () {
    var t = _pInfo["default"].ins.getUsingSkin()[_skinMgr.SkinIdEnum.nameFrame];

    _skinMgr["default"].ins.updateNameFrame(t, this.icon);
  };

  return __decorate([u], e);
}(cc.Component));
exports["default"] = p;

cc._RF.pop();