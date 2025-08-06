var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var a = cc._decorator;
var s = a.ccclass;
var c =
    (a.property,
    (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            var t = this;
            this.getComponent(cc.Animation).on(
                cc.Animation.EventType.FINISHED,
                function () {
                    t.node.destroy();
                },
                this
            );
        };
        return __decorate([s], e);
    })(cc.Component));
exports.default = c;
