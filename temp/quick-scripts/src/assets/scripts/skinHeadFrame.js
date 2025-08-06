"use strict";
cc._RF.push(module, '495e1u4RCpPV7Xh5v/0L5/6', 'skinHeadFrame');
// scripts/skinHeadFrame.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _skinMgr = require("skinMgr");

var _skinItemBase = require("skinItemBase");

var c = cc._decorator;
var l = c.ccclass;
var u = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.itemSp = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
  };

  e.prototype.loadItem = function () {
    _skinMgr["default"].ins.updateHeadFrame(this.ref, this.itemSp);
  };

  e.prototype.clickItem = function () {
    var t;
    this.state !== _skinMgr.SkinState.using && (t = this.itemSp.node, this.openSkinInfo(t));
  };

  __decorate([u(cc.Sprite)], e.prototype, "itemSp", void 0);

  return __decorate([l], e);
}(_skinItemBase["default"]);

exports["default"] = p;

cc._RF.pop();