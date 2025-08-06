var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _res = require("res");
var s = cc._decorator;
var c = s.ccclass;
var l = s.property;
var u = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.bg = null;
        e.url = "";
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {
        var t = this;
        this.node.active = !1;
        this.url &&
            _res.default.ins
                .l(this.url, cc.SpriteFrame, "resSps")
                .then(function (e) {
                    t.node && t.node.isValid && ((t.bg.spriteFrame = e), (t.node.active = !0), t.destroy());
                })
                .catch(function () {
                    console.error("getResSpErr");
                });
    };
    __decorate([l(cc.Sprite)], e.prototype, "bg", void 0);
    __decorate([l(cc.String)], e.prototype, "url", void 0);
    return __decorate([c], e);
})(cc.Component);
exports.default = u;
