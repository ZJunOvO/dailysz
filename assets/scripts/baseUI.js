var n;
Object.defineProperty(exports, "__esModule", {value: !0});
exports.HIERARCHY = void 0;
var a;
var _com = require("com");
var _idx = require("idx");
var l = cc._decorator;
var u = l.ccclass;
var p = l.property;
(function (t) {
    t[(t.None = 0)] = "None";
    t[(t.Left = 1)] = "Left";
    t[(t.Right = 2)] = "Right";
    t[(t.Down = 3)] = "Down";
})((a = exports.HIERARCHY || (exports.HIERARCHY = {})));
var d = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.ctx = null;
        e.closeBtn = null;
        e.sAni = !0;
        e.hAni = !0;
        e.panelHierachy = a.Down;
        e.a = 0.5;
        e.cb = null;
        e.b = null;
        e.c = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        this.closeBtn && this.closeBtn.node.on("click", this.hideThis, this);
    };
    e.prototype.hideThis = function () {};
    e.prototype.show = function (t, e) {
        void 0 === e && (e = this.a);
        this.c = t;
        this.init(this.c);
        this.uD(this.c);
        this.aUI();
        this.checkShow(e);
    };
    e.prototype.hide = function (t) {
        if (!this.isHideing) {
            this.isHideing = !0;
            var e = this;
            _com.default.ins.a(t, 1);
            _com.default.ins.b(this.node, !0);
            var o = this.node;
            var n = this.getK(e, o);
            return n
                ? new Promise(function (t) {
                      n.call(function () {
                          t(1);
                      }).start();
                  })
                : new Promise(function (t) {
                      o.active = !1;
                      e.onHide && e.onHide();
                      _com.default.ins.b(e.node, !1);
                      e.cb && e.cb(o, e.b);
                      t(1);
                  });
        }
    };
    e.prototype.getK = function (t, e) {
        switch (this.panelHierachy) {
            case a.Down:
                return cc
                    .tween(this.ctx)
                    .to(0.1, {y: 60})
                    .to(0.2, {y: -(cc.winSize.height + e.height) / 2})
                    .call(function () {
                        e.active = !1;
                        t.onHide && t.onHide();
                        _com.default.ins.b(t.node, !1);
                        t.cb && t.cb(e, t.b);
                    });
            case a.Left:
                return this.moveHideAni(t, e, -cc.view.getVisibleSize().width);
            case a.Right:
                return this.moveHideAni(t, e, cc.view.getVisibleSize().width);
            default:
                return null;
        }
    };
    e.prototype.moveHideAni = function (t, e, o) {
        return cc
            .tween(this.ctx)
            .to(0.25, {x: o}, {easing: this.customEaseInOut})
            .call(function () {
                e.active = !1;
                t.onHide && t.onHide();
                _com.default.ins.b(t.node, !1);
                t.cb && t.cb(e, t.b);
            });
    };
    e.prototype.init = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    };
    e.prototype.aUI = function () {
        if (_idx.platform.canShowBanner()) {
            var t =
                (_idx.platform.getBannerSize().height / _idx.platform.getSystemData().windowHeight) *
                cc.view.getVisibleSize().height;
            if (null != this.ctx) {
                var e = (cc.view.getVisibleSize().height - cc.view.getDesignResolutionSize().height) / 2;
                e < t && (this.ctx.y += t - e);
            }
        }
        var o = this.ctx.getComponent(cc.Widget);
        o && ((o.enabled = !0), o.updateAlignment(), (o.enabled = !1));
        var n = this.ctx.getComponentsInChildren(cc.Widget);
        if (n)
            for (var i = 0; i < n.length; i++) {
                var r = n[i];
                r.enabled = !0;
                r.updateAlignment();
                r.enabled = !1;
            }
    };
    e.prototype.uD = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    };
    e.prototype.onShow = function () {};
    e.prototype.onHide = function () {};
    e.prototype.setCb = function (t) {
        this.cb = t;
    };
    e.prototype.showAni = function (t) {
        var e = this;
        if (null != this.ctx && this.sAni) {
            var o = this.ctx;
            o.active = !0;
            o.scale = 0.5;
            o.opacity = 0;
            cc.tween(o)
                .to(t, {scale: 1, opacity: 255}, {easing: "backOut"})
                .call(function () {
                    e.onShow && e.onShow();
                })
                .start();
        } else this.onShow && this.onShow();
    };
    e.prototype.downAni = function () {
        var t = this;
        if (null != this.ctx && this.sAni) {
            var e = this.ctx;
            e.active = !0;
            e.y = -(cc.winSize.height + e.height) / 2;
            cc.tween(e)
                .to(0.2, {y: 60})
                .to(0.1, {y: -20})
                .to(0.04, {y: 0})
                .call(function () {
                    t.onShow && t.onShow();
                })
                .start();
        } else this.onShow && this.onShow();
    };
    e.prototype.moveAni = function (t, e) {
        if (this.ctx) {
            this.ctx.x = e;
            var o = this;
            o.onShow && o.onShow();
            cc.tween(this.ctx)
                .to(t, {x: 0}, {easing: this.customEaseInOut})
                .call(function () {
                    o.onShow && o.onShow();
                })
                .start();
        }
    };
    e.prototype.customEaseInOut = function (t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    };
    e.prototype.checkShow = function (t) {
        switch (this.panelHierachy) {
            case a.Right:
                this.moveAni(t, cc.view.getVisibleSize().width);
                break;
            case a.Down:
                this.downAni();
                break;
            case a.Left:
                this.moveAni(t, -cc.view.getVisibleSize().width);
                break;
            default:
                this.onShow && this.onShow();
        }
        this.node.active = !0;
    };
    __decorate([p(cc.Node)], e.prototype, "ctx", void 0);
    __decorate([p(cc.Button)], e.prototype, "closeBtn", void 0);
    __decorate([p(cc.Boolean)], e.prototype, "sAni", void 0);
    __decorate([p(cc.Boolean)], e.prototype, "hAni", void 0);
    __decorate(
        [
            p({
                displayName: "入场方式",
                tooltip:
                    "设置当前界面的入场方式：\nPop-弹窗进入\nLeft-左边滑动进入，\nRight-右边滑动进入，\nDown-从底部弹出",
                type: cc.Enum(a)
            })
        ],
        e.prototype,
        "panelHierachy",
        void 0
    );
    return __decorate([u], e);
})(cc.Component);
exports.default = d;
