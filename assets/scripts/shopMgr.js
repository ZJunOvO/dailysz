Object.defineProperty(exports, "__esModule", {value: !0});
var _idx = require("idx");
var _cfgMgr = require("cfgMgr");
var r = (function () {
    function t() {
        this.localData = null;
    }
    Object.defineProperty(t, "ins", {
        get: function () {
            return this._ins || (this._ins = new t());
        },
        enumerable: !1,
        configurable: !0
    });
    t.prototype.getAllRed = function () {
        var t;
        var e;
        var o =
            null === (e = null === (t = _cfgMgr.default.serverCfg) || void 0 === t ? void 0 : t.shop_config) ||
            void 0 === e
                ? void 0
                : e.gift;
        var n = 0;
        if (o) {
            var r = {};
            for (var a in o) {
                var s = o[a];
                var c = s.tag || 0;
                s.is_shop && (r[c] ? r[c].push(s) : ((r[c] = []), r[c].push(s)));
            }
            var l = this.getTabsRed();
            for (var u in r) {
                var p = r[u];
                if (p) {
                    var d = 1;
                    if (l[u]) d = 0;
                    else for (var h = p.length, f = 0; f < h; f++) 0 == (p[f].price || 0) && d++;
                    n += d;
                }
            }
        }
        return n;
    };
    t.prototype.getTabsRed = function () {
        var t = this.getLocalShopRedData().tabsRed;
        return null == t ? {} : t;
    };
    t.prototype.setTabsRed = function (t) {
        this.setLocalShopRedData({tabsRed: t});
    };
    t.prototype.getPackRed = function () {
        var t = this.getLocalShopRedData().packRed;
        return null == t ? {} : t;
    };
    t.prototype.setPackRed = function (t) {
        this.setLocalShopRedData({packRed: t});
    };
    t.prototype.setLocalShopRedData = function (t) {
        var e = this.getLocalShopRedData();
        this.localData = Object.assign(Object.assign({}, e), t);
        _idx.platform.setStorage("shopRed", this.localData);
    };
    t.prototype.getLocalShopRedData = function () {
        null == this.localData && (this.localData = _idx.platform.getStorage("shopRed") || {});
        return this.localData;
    };
    return t;
})();
exports.default = r;
