Object.defineProperty(exports, "__esModule", {value: !0});
var _idx = require("idx");
var _global = require("global");
var _pInfo = require("pInfo");
var _bagMgr = require("bagMgr");
var s = (function () {
    function t() {
        this.jigsawTileTotal = 105;
        this.localData = null;
        this.seed = 5;
        this.saveStr =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?><{}|[]. 亿'\"一二三四五六七八九十东西南北中百千万";
    }
    Object.defineProperty(t, "ins", {
        get: function () {
            return this._ins || (this._ins = new t());
        },
        enumerable: !1,
        configurable: !0
    });
    t.prototype.getJigsawTilesByIdx = function (t) {
        var e = this.getJigsawTiles()[t] || [];
        var o = _bagMgr.default.ins.getItemCount("puzzle_pieces");
        var n = t + 1;
        var i = this.getTicketPoolByIdx(t);
        if (e.length < this.jigsawTileTotal) {
            var r = e.length;
            var s = this.jigsawTileTotal - e.length;
            var c = o - ((n - 1) * this.jigsawTileTotal + r);
            if (c > 0)
                for (var l = Math.min(s, c), u = 0; u < l; u++) {
                    var p = i[r + u];
                    e.push([p, -1]);
                }
        }
        this.setJigsawTilesByIdx(t, e, !1);
        return e;
    };
    t.prototype.getTicketPoolByIdx = function (t) {
        var e = t + 1;
        this.seed = 22 + e;
        var o = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 55, 66, 77, 88, 99, 89, 100, 91, 101, 93, 102, 95, 103,
            97, 104, 98, 87, 76, 65, 54, 43, 32, 21
        ];
        this.shuffleArray(o);
        o.length = 10;
        for (var n = [], i = 0; i < 105; i++) -1 == o.indexOf(i) && n.push(i);
        this.shuffleArray(n);
        return o.concat(n);
    };
    t.prototype.setJigsawTilesByIdx = function (t, e, o) {
        void 0 === o && (o = !0);
        for (var n = this.saveStr, i = "", a = 0, s = e.length; a < s; a++) {
            var c = e[a][1];
            var l = "-";
            -1 != c && (l = n[c]);
            i += l;
        }
        var u = this.getNewSaveTiles();
        if (((u[t] = i), this.setNewSaveTiles(u), o)) {
            var p = [t, i];
            _pInfo.default.ins.setJigTiles(p);
        }
    };
    t.prototype.isItemUnlock = function (t) {
        var e = t * this.jigsawTileTotal;
        var o = _bagMgr.default.ins.getItemCount("puzzle_pieces");
        var n = _pInfo.default.ins.isJigsawLocked();
        return (0 == t || !n) && o > e;
    };
    t.prototype.isPieceEnough = function (t) {
        var e = t * this.jigsawTileTotal;
        return _bagMgr.default.ins.getItemCount("puzzle_pieces") > e;
    };
    t.prototype.getNowJigsawLv = function () {
        for (var t = 0, e = this.getJigsawTiles().length; t < e; t++) if (!this.IsJigsawCompletedByIdx(t)) return t + 1;
    };
    t.prototype.IsJigsawCompletedByIdx = function (t) {
        var e = this.getJigsawTiles()[t];
        if (105 == e.length) {
            for (var o = 0, n = e; o < n.length; o++) {
                var i = n[o];
                if (i[0] != i[1]) return !1;
            }
            return !0;
        }
        return !1;
    };
    t.prototype.getAllTiles = function () {
        for (var t = 0, e = _global.default.jisawCount; t < e; t++) this.getJigsawTilesByIdx(t);
    };
    t.prototype.getUnPlacedNum = function () {
        this.getAllTiles();
        for (var t = this.getJigsawTiles(), e = 0, o = 0, n = t.length; o < n; o++) {
            var i = t[o];
            if (!this.checkHasFin(o))
                for (var r = 0, a = i.length; r < a; r++) {
                    var s = i[r];
                    s[1] != s[0] && e++;
                }
        }
        return e;
    };
    t.prototype.seedRandom = function () {
        this.seed = (9301 * this.seed + 49297) % 233280;
        return this.seed / 233280;
    };
    t.prototype.shuffleArray = function (t) {
        for (var e, o = t.length - 1; o > 0; o--) {
            var n = Math.floor(this.seedRandom() * (o + 1));
            e = [t[n], t[o]];
            t[o] = e[0];
            t[n] = e[1];
        }
    };
    t.prototype.getJigsawTiles = function () {
        var t = this.saveStr;
        var e = _pInfo.default.ins.getJigTiles();
        var o = this.getNewSaveTiles();
        var n = [];
        var i = o.length;
        if (i) {
            -1 != e[0] && (o[e[0]] = e[1]);
            for (var a = 0; a < i; a++) {
                var s = o[a];
                if (s) {
                    for (var c = this.getTicketPoolByIdx(a), l = [], u = 0, p = s.length; u < p; u++) {
                        var d = c[u];
                        var h = s[u];
                        var f = [d, t.indexOf(h)];
                        l.push(f);
                    }
                    n.push(l);
                }
            }
        } else
            for (var g = [], y = ((a = 0), (n = this.getOldSaveTiles()).length); a < y; a++) {
                for (var m = n[a], v = "", _ = ((u = 0), m.length); u < _; u++) {
                    var b = m[u][1];
                    var w = "-";
                    -1 != b && (w = t[b]);
                    v += w;
                }
                g.push(v);
                this.setNewSaveTiles(g);
                this.setOldSaveTiles([]);
            }
        return n;
    };
    t.prototype.getNewSaveTiles = function () {
        var t = this.getLocalJigData().jigTils;
        return null == t ? [] : t;
    };
    t.prototype.setNewSaveTiles = function (t) {
        this.setLocalJigData({jigTils: t});
    };
    t.prototype.getOldSaveTiles = function () {
        var t = this.getLocalJigData().tiles;
        return null == t ? [] : t;
    };
    t.prototype.setOldSaveTiles = function (t) {
        this.setLocalJigData({tiles: t});
    };
    t.prototype.setLocalJigData = function (t) {
        var e = this.getLocalJigData();
        this.localData = Object.assign(Object.assign({}, e), t);
        _idx.platform.setStorage("jigsawData", this.localData);
    };
    t.prototype.getLocalJigData = function () {
        null == this.localData && (this.localData = _idx.platform.getStorage("jigsawData") || {});
        return this.localData;
    };
    t.prototype.checkClearData = function () {
        _pInfo.default.ins.getIsClearJigsawData() &&
            (_pInfo.default.ins.setIsClearJigsawData(!1), this.clearJigsawData());
    };
    t.prototype.clearJigsawData = function () {
        this.localData = {};
        _idx.platform.setStorage("jigsawData", this.localData);
    };
    t.prototype.checkSetFin = function (t) {
        this.checkHasFin(t) || this.setFinfishJigsaw(t);
    };
    t.prototype.checkHasFin = function (t) {
        return _pInfo.default.ins.getHasFinJig()[t] || !1;
    };
    t.prototype.setFinfishJigsaw = function (t) {
        var e = _pInfo.default.ins.getHasFinJig();
        e[t] = !0;
        _pInfo.default.ins.setHasFinJig(e);
    };
    t.prototype.clearFinJig = function (t) {
        var e = _pInfo.default.ins.getHasFinJig();
        e[t] = !1;
        _pInfo.default.ins.setHasFinJig(e);
    };
    t.prototype.resetJigByIdx = function (t) {
        for (var e = this.getJigsawTilesByIdx(t), o = [], n = 0, i = e.length; n < i; n++) {
            var r = e[n];
            r[1] = -1;
            o.push(r);
        }
        this.setJigsawTilesByIdx(t, o, !1);
        this.clearFinJig(t);
    };
    return t;
})();
exports.default = s;
