var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;
var l = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.sps = [];
        e.sp = null;
        e.ani = null;
        e.count = 4;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        this.ani = this.getComponent(cc.Animation);
        this.ani.on(cc.Animation.EventType.FINISHED, this.playDone, this);
    };
    e.prototype.playDone = function () {
        0 == this.count && this.node.destroy();
    };
    e.prototype.drop = function () {
        var t = this.count;
        if (!(t < 1))
            return this.ani.play(), (t = this.count = t - 1), (this.sp.spriteFrame = t > 0 ? this.sps[t - 1] : null), t;
    };
    __decorate([c([cc.SpriteFrame])], e.prototype, "sps", void 0);
    __decorate([c(cc.Sprite)], e.prototype, "sp", void 0);
    return __decorate([s], e);
})(cc.Component);
exports.default = l;
