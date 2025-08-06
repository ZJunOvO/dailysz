"use strict";
cc._RF.push(module, 'a83eevdkoxFOaQQ5jw2Zqgx', 'tipMgr');
// scripts/tipMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _res = require("res");

var _ui_tip = require("ui_tip");

var r = function () {
  function t() {
    if (this.iL = !1, this.tipN = null, t._ins) throw new Error("tipMgr can only be one！");
    t._ins = this;
  }

  Object.defineProperty(t, "ins", {
    get: function get() {
      t._ins || new t();
      return t._ins;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.showTip = function (t, e) {
    var o = this;
    this.showStr = t;
    this.isSystemFont = e;
    this.iL || (cc.isValid(this.tipN) ? this.onShow() : (this.iL = !0, _res["default"].ins.lPre("prefab/tip").then(function (t) {
      o.tipN = cc.instantiate(t);
      o.onShow();
      o.iL = !1;
    })["catch"](function () {
      console.error("getPrefabErr");
    })));
  };

  t.prototype.onShow = function () {
    if (this.showStr) {
      var t = cc.director.getScene().getChildByName("Canvas");

      if (t) {
        var e = t.getChildByName("tipManager");
        e || (e = new cc.Node("tipManager"), t.addChild(e));
        this.tipN.parent || e.addChild(this.tipN);
        e.setPosition(cc.v2());
        this.tipN.getComponent(_ui_tip["default"]).init(this.showStr, this.isSystemFont);
      }
    }
  };

  return t;
}();

exports["default"] = r;

cc._RF.pop();