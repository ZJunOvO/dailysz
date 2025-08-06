Object.defineProperty(exports, "__esModule", {value: !0});
var n = (function () {
    function t() {}
    t.parseNum = function (t, e) {
        void 0 === e && (e = 0);
        "string" == typeof t ? (t = parseInt(t)) : isNaN(t) && (t = 0);
        return 0 === t ? e : t;
    };
    t.FormatCurrency = function (t) {
        "string" == typeof t && (t = parseInt(t));
        return t >= this.TENBILLION
            ? parseInt(t / this.TENBILLION + "") + "B"
            : t >= this.MILLION
            ? parseInt(t / this.MILLION + "") + "M"
            : t >= this.KILO
            ? parseInt(t / this.KILO + "") + "K"
            : t.toString();
    };
    t.RandomInt = function (t, e) {
        return Math.ceil(Math.random() * (e - t + 1) + t - 1);
    };
    t.stringToNumArr = function (t) {
        var e = [];
        if (!t) return e;
        for (var o = t.split(";"), n = 0, i = o.length; n < i; n++) e.push(this.parseNum(o[n]));
        return e;
    };
    t.clamp = function (t, e, o) {
        e > o && (e = [o, (o = e)][0]);
        t > o && (t = o);
        (t < e || Number.isNaN(t)) && (t = e);
        return t;
    };
    t.KILO = 1e3;
    t.MILLION = 1e6;
    t.TENBILLION = 1e9;
    t.BILLION = 1e8;
    t.TENKILO = 1e4;
    return t;
})();
exports.default = n;
