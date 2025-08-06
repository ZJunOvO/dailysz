var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;
var l = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.spine = null;
        e.getSp = null;
        e.idx = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.initItem = function (t, e) {
        this.spine.skeletonData = e;
        this.idx = t + 1;
        this.spine.animation = "box_" + this.idx + "_" + this.idx;
        this.getSp.active = !1;
    };
    e.prototype.setFinish = function (t) {
        var e = this.idx;
        this.spine.animation = t ? "box_" + e : "box_" + e + "_" + e;
    };
    e.prototype.setIsGet = function (t) {
        this.getSp.active = t;
        t && this.setFinish(!1);
    };
    __decorate([c(sp.Skeleton)], e.prototype, "spine", void 0);
    __decorate([c(cc.Node)], e.prototype, "getSp", void 0);
    return __decorate([s], e);
})(cc.Component);
exports.default = l;
