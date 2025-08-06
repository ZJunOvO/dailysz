"use strict";
cc._RF.push(module, '68903bM3tFJxIGiJX3VlM6L', 'ui_info');
// scripts/ui_info.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _baseUI = require("baseUI");

var s = cc._decorator;
var c = s.ccclass;
var l = s.property;

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.title = null;
    e.content = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    var e = this;
    var o = t.type;
    this.title.string = 1 == o ? "用户协议" : "隐私政策";
    cc.assetManager.loadBundle("other", function (t, n) {
      t || n.load(o + "", cc.TextAsset, function (t, o) {
        var n = e.content;
        !t && n && n.isValid && (n.string = o.text);
      });
    });
  };

  e.prototype.hideThis = function () {
    t.prototype.hide.call(this);
  };

  __decorate([l(cc.Label)], e.prototype, "title", void 0);

  __decorate([l(cc.Label)], e.prototype, "content", void 0);

  return __decorate([c], e);
}(_baseUI["default"]);

exports["default"] = u;

cc._RF.pop();