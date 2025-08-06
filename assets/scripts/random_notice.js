var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var a = cc._decorator;
var s = a.ccclass;
var c =
    (a.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.tmpV3 = new cc.Vec3();
            return e;
        }
        __extends(e, t);
        e.prototype.init = function () {
            this.preV3 = this.node.position;
            this.isMoveing = !0;
        };
        e.prototype.update = function () {
            var t = this.preV3;
            var e = this.node.position;
            var o = this.tmpV3;
            cc.Vec3.subtract(o, e, t);
            t.set(e);
            var n = cc.Vec3.angle(o, cc.Vec3.RIGHT);
            var i = cc.misc.radiansToDegrees(n);
            this.node.angle = i - 90;
        };
        return __decorate([s], e);
    })(cc.Component));
exports.default = c;
