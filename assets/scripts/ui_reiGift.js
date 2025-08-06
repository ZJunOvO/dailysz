var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _cfgMgr = require("cfgMgr");
var _item = require("item");
var _bagMgr = require("bagMgr");
var _pInfo = require("pInfo");
var _baseUI = require("baseUI");
var p = cc._decorator;
var d = p.ccclass;
var h = p.property;
var f = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.itemSc = null;
        e.itemPre = null;
        return e;
    }
    __extends(e, t);
    e.prototype.init = function (t) {
        var e;
        var o;
        var n;
        var i;
        var r;
        var u;
        var p = t.serPacks;
        var d = {};
        var h = {};
        var f =
            null === (o = null === (e = _cfgMgr.default.serverCfg) || void 0 === e ? void 0 : e.shop_config) ||
            void 0 === o
                ? void 0
                : o.gift;
        var g = {};
        if (f)
            for (var y in f) {
                var m = f[y];
                g[m.key] = m;
                d[m.key] = m;
            }
        var v =
            null === (i = null === (n = _cfgMgr.default.serverCfg) || void 0 === n ? void 0 : n.buy_stamina) ||
            void 0 === i
                ? void 0
                : i.stamina;
        if (v) for (var y in v) (b = v[y]) && ((g[b.key] = b), (h[b.key] = b));
        var _ =
            null === (u = null === (r = _cfgMgr.default.serverCfg) || void 0 === r ? void 0 : r.buy_gold_coins) ||
            void 0 === u
                ? void 0
                : u.gold_coins;
        if (_)
            for (var y in _) {
                var b;
                (b = _[y]) && ((g[b.key] = b), (h[b.key] = b));
            }
        this.itemSc.node.width = 530;
        for (var w = 0, S = p.length; w < S; w++) {
            var T = p[w];
            if (T) {
                var I = g[null == T ? void 0 : T.gift_id];
                var D = d[null == T ? void 0 : T.gift_id];
                var P = h[null == T ? void 0 : T.gift_id];
                if (
                    (D && _pInfo.default.ins.addShopRecord(null == T ? void 0 : T.gift_id),
                    P && _pInfo.default.ins.addShopUnreset(null == T ? void 0 : T.gift_id),
                    I && I.props)
                )
                    for (var k = 0; k < T.gift_num; k++)
                        for (var y in I.props) {
                            var R = I.props[y];
                            T.is_double && (R *= 2);
                            _bagMgr.default.ins.addItem(y, R);
                            var N = cc.instantiate(this.itemPre);
                            N.active = !0;
                            this.itemSc.content.addChild(N);
                            N.getComponent(_item.default).initByData(y, R);
                        }
            }
        }
        var C = this.itemSc.content.children[0].width * this.itemSc.content.childrenCount;
        this.itemSc.node.x = C > this.itemSc.node.width ? -262 : (this.itemSc.node.width - C) / 2 - 262;
        C = Math.min(C, 530);
        this.itemSc.node.width = C;
        this.itemSc.scrollToLeft();
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    __decorate([h(cc.ScrollView)], e.prototype, "itemSc", void 0);
    __decorate([h(cc.Node)], e.prototype, "itemPre", void 0);
    return __decorate([d], e);
})(_baseUI.default);
exports.default = f;
