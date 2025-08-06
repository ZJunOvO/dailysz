"use strict";
cc._RF.push(module, 'c3f91k0OeBK2Z1h7DbieN6o', 'skinRole');
// scripts/skinRole.js

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
    e.roleNode = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
  };

  e.prototype.loadItem = function () {
    _skinMgr["default"].ins.updateRole(this.ref, this.roleNode);
  };

  e.prototype.clickItem = function () {
    var t;
    this.state !== _skinMgr.SkinState.using && (t = this.roleNode.children[0], this.openSkinInfo(t));
  };

  __decorate([u(cc.Node)], e.prototype, "roleNode", void 0);

  return __decorate([l], e);
}(_skinItemBase["default"]);

exports["default"] = p;

cc._RF.pop();