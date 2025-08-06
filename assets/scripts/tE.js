Object.defineProperty(exports, "__esModule", {value: !0});
var n = (function () {
    function t() {
        this._1 = [];
        this._2 = [];
    }
    t.prototype.on = function (t) {
        var e = this;
        e._1.push(t);
        return function () {
            return e.off(t);
        };
    };
    t.prototype.once = function (t) {
        var e = this;
        e._2.push(t);
        return function () {
            return e.off(t);
        };
    };
    t.prototype.off = function (t) {
        var e = this;
        var o = e._1.indexOf(t);
        o > -1 && e._1.splice(o, 1);
        (o = e._2.indexOf(t)) > -1 && e._2.splice(o, 1);
    };
    t.prototype.emit = function (t) {
        var e = this;
        e._1.forEach(function (e) {
            return e(t);
        });
        e._2.forEach(function (e) {
            return e(t);
        });
        e._2 = [];
    };
    t.prototype.pipe = function (t) {
        return this.on(function (e) {
            return t.emit(e);
        });
    };
    t.prototype.clear = function () {
        this._1 = [];
        this._2 = [];
    };
    return t;
})();
exports.default = n;
