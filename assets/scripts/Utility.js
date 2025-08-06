Object.defineProperty(exports, "__esModule", {value: !0});
var n = (function () {
    function t() {}
    t.removeFromArray = function (t, e) {
        var o = t.indexOf(e);
        -1 !== o && t.splice(o, 1);
        return t;
    };
    t.getZeroFilledArray = function (t) {
        return new Array(t).fill(0);
    };
    t.cloneArray = function (t) {
        return t.slice(0);
    };
    return t;
})();
exports.default = n;
