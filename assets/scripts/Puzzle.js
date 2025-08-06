Object.defineProperty(exports, "__esModule", {value: !0});
var _utility = require("Utility");
var i = (function () {
    function t(t, e) {
        if (void 0 === t || void 0 === e) throw "width and height are required constructor parameters.";
        if (t <= 0 || e <= 0 || (1 === t && 1 === e))
            throw "invalid dimensions: " + t.toString() + " x " + e.toString();
        this.width = "number" == typeof t ? t : parseInt(t.toString(), 10);
        this.height = "number" == typeof e ? e : parseInt(e.toString(), 10);
        this.totalCells = this.width * this.height;
        this.reset();
    }
    t.prototype.reset = function () {
        var t = this;
        var e = _utility.default.getZeroFilledArray;
        this.creator = null;
        this.cells = [];
        this.rowHints = [];
        this.columnHints = [];
        this.grid = e(this.height).map(function () {
            return e(t.width);
        });
    };
    t.prototype.checkUserSolution = function () {
        return this.cells.every(function (t) {
            var e = 1 === t.userSolution ? 1 : 0;
            return t.solution === e;
        });
    };
    t.prototype.getRowCells = function (t) {
        var e;
        var o = [];
        var n = t * this.width;
        var i = n + this.width;
        for (e = n; e < i; e++) o.push(this.cells[e]);
        return o.length > 0 && o;
    };
    t.prototype.getColumnCells = function (t) {
        var e;
        var o = [];
        for (e = t; e < this.cells.length; e += this.width) o.push(this.cells[e]);
        return o.length > 0 && o;
    };
    t.prototype.getCellByIndex = function (t) {
        var e = "number" != typeof t ? parseInt(t, 10) : t;
        return !!this.cells[e] && this.cells[e];
    };
    return t;
})();
exports.default = i;
