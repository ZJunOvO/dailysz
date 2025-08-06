"use strict";
cc._RF.push(module, '2980049qItDablK/zeCxVwI', 'levelItem');
// scripts/levelItem.js

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
    e.sp = null;
    e.lvlLbl = null;
    return e;
  }

  __extends(e, t);

  e.prototype.setLvlLbl = function (t) {
    var e = 0;
    if (1 == t.length) -1 != t.indexOf("1") && (e = -2);else for (var o = 0, n = t; o < n.length; o++) {
      "1" == n[o] && e--;
    }
    this.lvlLbl.string = t;
    this.lvlLbl.node.x = e;
  };

  __decorate([c(cc.Sprite)], e.prototype, "sp", void 0);

  __decorate([c(cc.Label)], e.prototype, "lvlLbl", void 0);

  return __decorate([s], e);
}(cc.Component);

exports["default"] = l;

cc._RF.pop();