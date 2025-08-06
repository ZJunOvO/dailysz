var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;
var l = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.bg = null;
        e.lbSpr = null;
        e.offBg = null;
        e.onBg = null;
        e.offLb = null;
        e.onLb = null;
        e.flag = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {
        this.u();
    };
    e.prototype.setState = function (t) {
        this.flag = t;
        this.u();
    };
    e.prototype.u = function () {
        null != this.bg && (this.bg.spriteFrame = this.flag ? this.onBg : this.offBg);
        null != this.lbSpr && (this.lbSpr.spriteFrame = this.flag ? this.onLb : this.offLb);
    };
    __decorate([c(cc.Sprite)], e.prototype, "bg", void 0);
    __decorate([c(cc.Sprite)], e.prototype, "lbSpr", void 0);
    __decorate([c(cc.SpriteFrame)], e.prototype, "offBg", void 0);
    __decorate([c(cc.SpriteFrame)], e.prototype, "onBg", void 0);
    __decorate([c(cc.SpriteFrame)], e.prototype, "offLb", void 0);
    __decorate([c(cc.SpriteFrame)], e.prototype, "onLb", void 0);
    return __decorate([s], e);
})(cc.Component);
exports.default = l;
