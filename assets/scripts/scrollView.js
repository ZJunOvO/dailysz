var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;
var l = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.maxScale = 1.5;
        e.minScale = 0.5;
        e.brake = 0.75;
        e.content = null;
        e._touchMovePreviousTimestamp = 0;
        e._autoScrolling = !1;
        e._touchMoveDisplacements = [];
        e._touchMoveTimeDeltas = [];
        e._autoScrollAccumulatedTime = 0;
        e._autoScrollTotalTime = 0;
        e._autoScrollStartPosition = cc.v2(0, 0);
        e._autoScrollTargetDelta = cc.Vec2.ZERO;
        e._isHandleMultiTouch = !1;
        e._isOnDestScrolling = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        var t = this.content;
        var e = cc.Node.EventType;
        t.on(e.TOUCH_START, this.onTouchStart, this);
        t.on(e.TOUCH_MOVE, this.onTouchMove, this);
        t.on(e.TOUCH_END, this.onTouchEnd, this);
        t.on(e.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    e.prototype.onDestroy = function () {
        var t = this.content;
        var e = cc.Node.EventType;
        t.off(e.TOUCH_START, this.onTouchStart, this);
        t.off(e.TOUCH_MOVE, this.onTouchMove, this);
        t.off(e.TOUCH_END, this.onTouchEnd, this);
        t.off(e.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    e.prototype.onTouchStart = function () {
        this.resetTouchInfos();
    };
    e.prototype.onTouchMove = function (t) {
        if (!this._isOnDestScrolling) {
            var e = t.getTouches();
            if (1 == e.length) {
                var o = t.getDelta();
                this.moveContent(o);
                this.gatherTouchMove(o);
            } else {
                this._isHandleMultiTouch = !0;
                var n = e[0];
                var i = e[1];
                if (!this._initLen) {
                    this._initLen = n.getPreviousLocation().sub(i.getPreviousLocation()).mag();
                    var r = n.getStartLocation().add(i.getStartLocation()).divide(2);
                    var a = this.node.convertToNodeSpaceAR(r);
                    var s = this.node.convertToWorldSpaceAR(a);
                    this._initPos = this.content.convertToNodeSpaceAR(s);
                    this._initScale = this.content.scale;
                }
                var c = n.getLocation().sub(i.getLocation()).mag();
                var l = this._initScale * (c / this._initLen);
                if (l > this.maxScale || l < this.minScale) return;
                this._tarScale = l;
                this._scrollZoom = !0;
            }
        }
    };
    e.prototype.onTouchEnd = function (t) {
        this._isOnDestScrolling ||
            (this._isHandleMultiTouch
                ? (this._scrollZoom = null)
                : (this.gatherTouchMove(t.getDelta()), this.startInertiaScroll()),
            (this._isHandleMultiTouch = !1));
    };
    e.prototype.update = function (t) {
        if (this._scrollZoom) {
            var e = this.content.scale;
            var o = this._tarScale;
            var n = e + 0.5 * (o - e);
            var i = n - e;
            var r = this._initPos.mul(-i);
            this.content.scale = n;
            this.moveContent(r);
            this._scrollZoom = Math.abs(n - o) > 0.01;
        } else this._autoScrolling && this.processAutoScrolling(t);
    };
    e.prototype.calculateTouchMoveVelocity = function () {
        var t = 0;
        if (
            (t = this._touchMoveTimeDeltas.reduce(function (t, e) {
                return t + e;
            }, t)) <= 0 ||
            t >= 0.5
        )
            return cc.v2(0, 0);
        var e = cc.v2(0, 0);
        e = this._touchMoveDisplacements.reduce(function (t, e) {
            return t.add(e);
        }, e);
        return cc.v2((e.x * (1 - this.brake)) / t, (e.y * (1 - this.brake)) / t);
    };
    e.prototype.processAutoScrolling = function (t) {
        this._autoScrollAccumulatedTime += t;
        var e;
        var o = Math.min(1, this._autoScrollAccumulatedTime / this._autoScrollTotalTime);
        e = o;
        o = (e -= 1) * e * e * e * e + 1;
        var n = this._autoScrollStartPosition.add(this._autoScrollTargetDelta.mul(o));
        Math.abs(o - 1) <= 1e-4 && (this._autoScrolling = !1);
        var i = n.sub(this.content.getPosition());
        this.moveContent(this._clampDelta(i));
    };
    e.prototype.startAttenuatingAutoScroll = function (t, e) {
        var o = Math.sqrt(Math.sqrt(e.mag() / 5));
        var n = t.normalize();
        var i = this.content.getContentSize();
        var r = this.node.getContentSize();
        var a = i.width - r.width;
        var s = i.height - r.height;
        var c = this.calculateAttenuatedFactor(a);
        var l = this.calculateAttenuatedFactor(s);
        n = cc.v2(n.x * a * (1 - this.brake) * c, n.y * s * l * (1 - this.brake));
        var u = t.mag();
        var p = n.mag() / u;
        n = n.add(t);
        this.brake > 0 && p > 7 && ((p = Math.sqrt(p)), (n = t.mul(p).add(t)));
        this.brake > 0 && p > 3 && (o *= p = 3);
        0 === this.brake && p > 1 && (o *= p);
        this.startAutoScroll(n, o);
    };
    e.prototype.calculateAttenuatedFactor = function (t) {
        return this.brake <= 0 ? 1 - this.brake : (1 - this.brake) * (1 / (1 + 14e-6 * t + t * t * 8e-9));
    };
    e.prototype.startInertiaScroll = function () {
        var t = this.calculateTouchMoveVelocity();
        if (!t.fuzzyEquals(cc.v2(0, 0), 1e-4) && this.brake < 1) {
            var e = t.mul(0.7);
            this.startAttenuatingAutoScroll(e, t);
        }
    };
    e.prototype.startAutoScroll = function (t, e) {
        this._autoScrolling = !0;
        this._autoScrollTargetDelta = t;
        this._autoScrollStartPosition = this.content.getPosition();
        this._autoScrollTotalTime = e;
        this._autoScrollAccumulatedTime = 0;
    };
    e.prototype._clampDelta = function (t) {
        var e = this.content.getContentSize();
        var o = this.node.getContentSize();
        e.width < o.width && (t.x = 0);
        e.height < o.height && (t.y = 0);
        return t;
    };
    e.prototype.moveContent = function (t, e) {
        var o = this;
        void 0 === e && (e = 0);
        return new Promise(function (n) {
            var i = t;
            var r = o.content.getPosition().add(i);
            r.x > o.boundX
                ? ((r.x = o.boundX), (o._autoScrolling = !1))
                : r.x < -o.boundX && ((r.x = -o.boundX), (o._autoScrolling = !1));
            r.y > o.boundY
                ? ((r.y = o.boundY), (o._autoScrolling = !1))
                : r.y < -o.boundY && ((r.y = -o.boundY), (o._autoScrolling = !1));
            e > 0
                ? cc
                      .tween(o.content)
                      .to(e, {position: cc.v3(r.x, r.y)})
                      .call(function () {
                          n();
                      })
                      .start()
                : (o.content.setPosition(r), n());
        });
    };
    e.prototype.getTimeInMilliseconds = function () {
        return new Date().getMilliseconds();
    };
    e.prototype.gatherTouchMove = function (t) {
        for (t = this._clampDelta(t); this._touchMoveDisplacements.length >= 5; )
            this._touchMoveDisplacements.shift(), this._touchMoveTimeDeltas.shift();
        this._touchMoveDisplacements.push(t);
        var e = this.getTimeInMilliseconds();
        this._touchMoveTimeDeltas.push((e - this._touchMovePreviousTimestamp) / 1e3);
        this._touchMovePreviousTimestamp = e;
    };
    Object.defineProperty(e.prototype, "boundY", {
        get: function () {
            return (this.content.height * this.content.scaleY) / 2 - this.node.height / 2;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "boundX", {
        get: function () {
            return (this.content.width * this.content.scaleX) / 2 - this.node.width / 2;
        },
        enumerable: !1,
        configurable: !0
    });
    e.prototype.scrollTo = function (t, e) {
        var o = this;
        void 0 === e && (e = 0);
        this._isOnDestScrolling = !0;
        this.resetTouchInfos();
        return new Promise(function (n) {
            o.moveContent(t.mul(-1), e).then(function () {
                o._isOnDestScrolling = !1;
                n();
            });
        });
    };
    e.prototype.resetTouchInfos = function () {
        this._autoScrolling = !1;
        this._touchMovePreviousTimestamp = this.getTimeInMilliseconds();
        this._touchMoveDisplacements.length = 0;
        this._touchMoveTimeDeltas.length = 0;
        this._isHandleMultiTouch = !1;
        this._initLen = null;
    };
    e.prototype.stopAutoScroll = function () {
        this._autoScrolling = !1;
        this._autoScrollAccumulatedTime = this._autoScrollTotalTime;
    };
    __decorate([c({tooltip: "最大可放大倍数", type: cc.Float})], e.prototype, "maxScale", void 0);
    __decorate([c({tooltip: "最小可缩小倍数", type: cc.Float})], e.prototype, "minScale", void 0);
    __decorate([c({tooltip: "滚动之后的减速系数", type: cc.Float})], e.prototype, "brake", void 0);
    __decorate([c(cc.Node)], e.prototype, "content", void 0);
    return __decorate([s], e);
})(cc.Component);
exports.default = l;
