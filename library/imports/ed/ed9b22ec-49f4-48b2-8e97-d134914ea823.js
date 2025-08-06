"use strict";
cc._RF.push(module, 'ed9b2LsSfRIso6X0TSRTqgj', 'ui_tip');
// scripts/ui_tip.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _loading = require("loading");

var _baseUI = require("baseUI");

var c = cc._decorator;
var l = c.ccclass;
var u = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.showLab = null;
    e.tNode = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t, e) {
    var o = this;
    this.showLab.font = e ? "" : _loading.DEFAULTFONT;
    this.showLab.fontSize = e ? 35 : 40;
    this.showLab.string = t;
    this.tNode.scale = 0;
    this.showLab.scheduleOnce(function () {
      o.tNode.height = o.showLab.node.height + 30;
    }, 0);
    cc.Tween.stopAllByTarget(this.tNode);
    this.tNode.setPosition(cc.v2());
    this.onShow();
  };

  e.prototype.onShow = function () {
    cc.tween(this.tNode).parallel(cc.tween(this.tNode).to(0.2, {
      scale: 1
    }), cc.tween(this.tNode).to(2, {
      y: 120
    })).delay(0.1).to(0.2, {
      scale: 0
    }).start();
  };

  __decorate([u(cc.Label)], e.prototype, "showLab", void 0);

  __decorate([u(cc.Node)], e.prototype, "tNode", void 0);

  return __decorate([l], e);
}(_baseUI["default"]);

exports["default"] = p;

cc._RF.pop();