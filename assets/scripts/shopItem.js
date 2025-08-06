var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _idx = require("idx");
var _res = require("res");
var _bagMgr = require("bagMgr");
var _panelMgr = require("panelMgr");
var _tipMgr = require("tipMgr");
var _pInfo = require("pInfo");
var _item = require("item");
var h = cc._decorator;
var f = h.ccclass;
var g = h.property;
var y = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.buyBtnNode = null;
        e.finNode = null;
        e.btnPrice = null;
        e.doubleNode = null;
        e.itemComp = null;
        e.shopData = null;
        e.aniDatas = [];
        e.isDouble = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {};
    e.prototype.start = function () {};
    e.prototype.initItem = function (t, e) {
        var o = this;
        if (t) {
            this.shopData = t;
            var n = t.props;
            for (var i in n) {
                var r = Number(n[i]);
                this.itemComp.initByData(i, r);
            }
            var a = e ? "blueLight" : "light";
            _res.default.ins
                .getBundleByString("resSps")
                .then(function (t) {
                    t.load("spine/" + a + "/action", sp.SkeletonData, function (t, e) {
                        if (!t && o.node && o.node.isValid) {
                            var n = new cc.Node();
                            var i = n.addComponent(sp.Skeleton);
                            (i.skeletonData = e), (i.animation = "animation"), (n.parent = o.itemComp.node);
                        }
                    });
                })
                .catch(function (t) {
                    console.error("RTool.ins.getBundleByString('resSps')", t);
                });
            this.btnPrice.string = "¥" + t.price;
            this.finNode.active = !1;
            this.doubleNode.active = !1;
            this.checkData();
        }
    };
    e.prototype.checkData = function () {
        if (this.shopData) {
            var t = this.shopData.key;
            var e = _pInfo.default.ins.getShopUnreset();
            var o = this.shopData.double || 0;
            var n = e[t] || 0;
            this.isDouble = this.doubleNode.active = n < o;
        }
    };
    e.prototype.onBtnBuy = function () {
        var t = this;
        if (this.shopData) {
            var e = this.isDouble ? 1 : 0;
            var o = this.shopData.props;
            var n = JSON.stringify(this.shopData.props);
            _idx.platform.reportEvent(_idx.ERepEvt.susPayment, {key: this.shopData.key});
            _idx.platform
                .payment(this.shopData.key, this.shopData.price, e, n)
                .then(function () {
                    var e = [];
                    for (var n in o) {
                        var i = o[n];
                        t.isDouble && (i *= 2);
                        _bagMgr.default.ins.addItem(n, i);
                        var r = {};
                        r.itemId = n;
                        r.worldPos = t.node.parent.convertToWorldSpaceAR(t.node.position);
                        r.value = i;
                        e.push(r);
                    }
                    _panelMgr.default.ins.open("ui/ui_flyAni", {itemDatas: e});
                    _pInfo.default.ins.addShopUnreset(t.shopData.key);
                    t.checkData();
                    _idx.platform.reportEvent(_idx.ERepEvt.paymentResult, {key: t.shopData.key, success: 1});
                })
                .catch(function (e) {
                    _tipMgr.default.ins.showTip(e, !0);
                    _idx.platform.reportEvent(_idx.ERepEvt.paymentResult, {key: t.shopData.key, success: 0});
                });
        }
    };
    __decorate([g(cc.Node)], e.prototype, "buyBtnNode", void 0);
    __decorate([g(cc.Node)], e.prototype, "finNode", void 0);
    __decorate([g(cc.Label)], e.prototype, "btnPrice", void 0);
    __decorate([g(cc.Node)], e.prototype, "doubleNode", void 0);
    __decorate([g(_item.default)], e.prototype, "itemComp", void 0);
    return __decorate([f], e);
})(cc.Component);
exports.default = y;
