var n;
Object.defineProperty(exports, "__esModule", {value: !0});
exports.getSafeAreaRect = void 0;
var _global = require("global");
var s = cc._decorator;
var c = s.ccclass;
var l = (s.property, null);
exports.getSafeAreaRect = function () {
    if (!l) {
        var t = cc.sys;
        if (_global.default.padScale) l = new cc.Rect(0, 0, 720, 1560);
        else if (t.platform == t.ALIPAY_GAME) l = new cc.Rect(0, 62, 720, 1560);
        else {
            var e = cc.sys.getSafeAreaRect();
            var o = e.y;
            t.platform == t.WECHAT_GAME && o < 62 && (o = 62);
            l = new cc.Rect(e.x, o, e.width, e.height);
        }
    }
    return l;
};
var u = (function (t) {
    function e() {
        return (null !== t && t.apply(this, arguments)) || this;
    }
    __extends(e, t);
    e.prototype.updateArea = function () {
        if (cc.sys.platform != cc.sys.ALIPAY_GAME) {
            var t = this.node.getComponent(cc.Widget);
            if (t) {
                t.updateAlignment();
                var e = this.node.position;
                var n = this.node.getAnchorPoint();
                t.isAlignTop = t.isAlignBottom = t.isAlignLeft = t.isAlignRight = !0;
                var i = cc.winSize.width;
                var r = cc.winSize.height;
                var a = exports.getSafeAreaRect();
                t.top = r - a.y - a.height;
                t.bottom = a.y;
                t.left = a.x;
                t.right = i - a.x - a.width;
                t.updateAlignment();
                var s = this.node.position;
                var c = n.x - (s.x - e.x) / this.node.width;
                var l = n.y - (s.y - e.y) / this.node.height;
                this.node.setAnchorPoint(c, l);
                cc._widgetManager.add(t);
            }
        }
    };
    return __decorate([c], e);
})(cc.SafeArea);
exports.default = u;
