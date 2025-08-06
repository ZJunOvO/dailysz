"use strict";
cc._RF.push(module, '25d4cZd7RtM460Zomkgx+9w', 'skinContent');
// scripts/skinContent.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _skinItemBase = require("skinItemBase");

var s = cc._decorator;
var c = s.ccclass;
var l = (s.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isInit = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.initContent = function (t) {
    if (!this.isInit) {
      for (var e = this.node.children[0], o = t.itemData, n = t.skinId, i = 0; i < o.length; i++) {
        var r = null;
        this.node.childrenCount > i ? r = this.node.children[i] : (r = cc.instantiate(e), this.node.addChild(r));
        r.getComponent(_skinItemBase["default"]).initItem(o[i], n);
      }

      this.isInit = !0;
    }
  };

  return __decorate([c], e);
}(cc.Component));
exports["default"] = l;

cc._RF.pop();