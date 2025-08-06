Object.defineProperty(exports, "__esModule", {value: !0});
var _idx = require("idx");
var _pInfo = require("pInfo");
var _bagMgr = require("bagMgr");
var _festivalMgr = require("festivalMgr");
var s = (function () {
    function t() {
        this.jigsawTileTotal = 105;
        this.jigsawThemeNum = _festivalMgr.default.ins.getJigsawNum();
        this.localData = null;
        this.seed = 5;
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
        var o = _bagMgr.default.ins.getItemCount("newYear_pieces");
        var n = t + 1;
        this.seed = 21 + n;
        var i = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 55, 66, 77, 88, 99, 89, 100, 91, 101, 93, 102, 95, 103,
            97, 104, 98, 87, 76, 65, 54, 43, 32, 21
        ];
        this.shuffleArray(i);
        i.length = 10;
        for (var a = [], s = 0; s < 105; s++) -1 == i.indexOf(s) && a.push(s);
        this.shuffleArray(a);
        var c = i.concat(a);
        if (e.length < this.jigsawTileTotal) {
            var l = e.length;
            var u = this.jigsawTileTotal - e.length;
            var p = o - ((n - 1) * this.jigsawTileTotal + l);
            if (p > 0) {
                var d = Math.min(u, p);
                for (s = 0; s < d; s++) {
                    var h = c[l + s];
                    e.push([h, -1]);
                }
            }
        }
        this.setJigsawTilesByIdx(t, e);
        return e;
    };
    t.prototype.setJigsawTilesByIdx = function (t, e) {
        var o = this.getJigsawTiles();
        o[t] = e;
        this.setJigsawTiles(o);
    };
    t.prototype.isItemUnlock = function () {
        return !0;
    };
    t.prototype.isPieceEnough = function (t) {
        var e = t * this.jigsawTileTotal;
        return _bagMgr.default.ins.getItemCount("newYear_pieces") > e;
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
        for (var t = 0, e = this.jigsawThemeNum; t < e; t++) this.getJigsawTilesByIdx(t);
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
        var t = this.getLocalJigData().tiles;
        return null == t ? [] : t;
    };
    t.prototype.setJigsawTiles = function (t) {
        this.setLocalJigData({tiles: t});
    };
    t.prototype.setLocalJigData = function (t) {
        var e = this.getLocalJigData();
        this.localData = Object.assign(Object.assign({}, e), t);
        _idx.platform.setStorage("newJigsaw", this.localData);
    };
    t.prototype.getLocalJigData = function () {
        null == this.localData && (this.localData = _idx.platform.getStorage("newJigsaw") || {});
        return this.localData;
    };
    t.prototype.checkClearData = function () {
        _pInfo.default.ins.getIsClearJigsawData() &&
            (_pInfo.default.ins.setIsClearJigsawData(!1), this.clearJigsawData());
    };
    t.prototype.clearJigsawData = function () {
        this.localData = {};
        _idx.platform.setStorage("newJigsaw", this.localData);
    };
    t.prototype.checkSetFin = function (t) {
        this.checkHasFin(t) || this.setFinfishJigsaw(t);
    };
    t.prototype.checkHasFin = function (t) {
        return _pInfo.default.ins.getHasFinFesJig()[t] || !1;
    };
    t.prototype.setFinfishJigsaw = function (t) {
        var e = _pInfo.default.ins.getHasFinFesJig();
        e[t] = !0;
        _pInfo.default.ins.setHasFinFesJig(e);
    };
    t.prototype.clearFinJig = function (t) {
        var e = _pInfo.default.ins.getHasFinFesJig();
        e[t] = !1;
        _pInfo.default.ins.setHasFinFesJig(e);
    };
    t.prototype.resetJigByIdx = function (t) {
        for (var e = this.getJigsawTilesByIdx(t), o = [], n = 0, i = e.length; n < i; n++) {
            var r = e[n];
            r[1] = -1;
            o.push(r);
        }
        this.setJigsawTilesByIdx(t, o);
        this.clearFinJig(t);
    };
    return t;
})();
exports.default = s;
