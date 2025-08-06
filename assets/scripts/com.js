function n(t, e) {
    t.interactable = !e;
}
function i(t) {
    for (var e = t.length - 1; e >= 0; e--) {
        var o = Math.floor(Math.random() * (e + 1));
        var n = t[o];
        t[o] = t[e];
        t[e] = n;
    }
    return t;
}
function r(t) {
    return t && "object" == typeof t && !Array.isArray(t);
}
Object.defineProperty(exports, "__esModule", {value: !0});
var a = (function () {
    function t() {
        this.bigs = [
            ,
            "K",
            "M",
            "B",
            "T",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z"
        ];
        this.e = i;
        this.f = function t(e, o) {
            for (var n, i, a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
            if (!a.length) return e;
            var l = a.shift();
            if (r(e) && r(l))
                for (var u in l)
                    r(l[u])
                        ? (e[u] || Object.assign(e, (((n = {})[u] = {}), n)), t(e[u], l[u]))
                        : Object.assign(e, (((i = {})[u] = l[u]), i));
            return t.apply(void 0, s([e], a));
        };
    }
    Object.defineProperty(t, "ins", {
        get: function () {
            this._ins || (this._ins = new t());
            return this._ins;
        },
        enumerable: !1,
        configurable: !0
    });
    t.prototype.randSort = function (t) {
        t.sort(function () {
            return Math.random() - 0.5;
        });
        return t;
    };
    t.prototype.bigNum = function (t) {
        if (t < 1e3) return t + "";
        for (var e = 0; t > 999; ) (t /= 1e3), e++;
        var o = this.bigs[e] || "z";
        return Math.floor(100 * t) / 100 + o;
    };
    t.prototype.a = function (t, e) {
        if ((void 0 === e && (e = 0), null != t)) {
            t instanceof cc.Event.EventTouch && (t = t.target);
            var o = null;
            if (
                (t instanceof cc.Button ? (o = t) : t instanceof cc.Node && (o = t.getComponent(cc.Button)), null != o)
            ) {
                var i = function () {
                    n(o, !1);
                };
                n(o, !0);
                o.scheduleOnce(i, e);
                return function () {
                    i();
                    o.unschedule(i);
                };
            }
        }
    };
    t.prototype.b = function (t, e) {
        e ? t.pauseSystemEvents(!0) : t.resumeSystemEvents(!0);
    };
    t.prototype.rad = function (t, e) {
        return Math.round(Math.random() * (e - t)) + t;
    };
    t.prototype.compareVersion = function (t, e) {
        for (var o = t.split("."), n = e.split("."), i = Math.max(o.length, n.length); o.length < i; ) o.push("0");
        for (; n.length < i; ) n.push("0");
        for (var r = 0; r < i; r++) {
            var a = parseInt(o[r]);
            var s = parseInt(n[r]);
            if (a > s) return 1;
            if (a < s) return -1;
        }
        return 0;
    };
    return t;
})();
exports.default = a;
var s = function () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var o = 0, n = 0, i = arguments.length; n < i; n++) o += arguments[n].length;
    var r = Array(o);
    var a = 0;
    for (n = 0; n < i; n++) for (var s = arguments[n], c = 0, l = s.length; c < l; c++, a++) r[a] = s[c];
    return r;
};
String.prototype.format = function () {
    if (!arguments.length) return this;
    for (var t = this, e = 0, o = arguments.length; e < o; e++) t = t.replace("{" + e + "}", arguments[e]);
    return t;
};
