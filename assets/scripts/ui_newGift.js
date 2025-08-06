var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _evts = require("evts");
var _idx = require("idx");
var _cfgMgr = require("cfgMgr");
var _item = require("item");
var _bagMgr = require("bagMgr");
var _panelMgr = require("panelMgr");
var _pInfo = require("pInfo");
var _baseUI = require("baseUI");
var f = cc._decorator;
var g = f.ccclass;
var y = f.property;
var m = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.itemsNode = null;
        e.itemPre = null;
        e.bgSpr = null;
        e.adGetBtn = null;
        e.hideCb = null;
        return e;
    }
    __extends(e, t);
    e.prototype.init = function () {
        var t = this;
        _cfgMgr.default.serverCfg.props.set.forEach(function (e) {
            if (Number(e.init_val) > 0) {
                var o = cc.instantiate(t.itemPre);
                (o.active = !0), (o.parent = t.itemsNode), o.getComponent(_item.default).initByData(e.key, e.init_val);
            }
        });
        this.adGetBtn.node.adDotData = "新手礼包";
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    e.prototype.onAdGet = function () {
        this.getItem();
    };
    e.prototype.getItem = function () {
        for (var t = this, e = [], o = 0, n = this.itemsNode.childrenCount; o < n; o++) {
            var i = this.itemsNode.children[o];
            var r = i.parent.convertToWorldSpaceAR(i.position);
            var h = {};
            h.itemId = i.getComponent(_item.default).key;
            h.worldPos = r;
            h.value = i.getComponent(_item.default).count;
            e.push(h);
        }
        _cfgMgr.default.serverCfg.props.set.forEach(function (t) {
            _bagMgr.default.ins.addItem(t.key, t.init_val, !0);
        });
        !_pInfo.default.ins.isMaxAdCount() && _idx.platform.reportEvent(_idx.ERepEvt.newGiftGet);
        _pInfo.default.ins.setIsGetNewGif(!0);
        _panelMgr.default.ins.open("ui/ui_flyAni", {
            itemDatas: e,
            hideCb: function () {
                _evts.default.opE.emit({action: _evts.default.UPD_NEW_GIFT});
                t.hideThis();
            }
        });
    };
    e.prototype.onDestroy = function () {
        cc.assetManager.releaseAsset(this.bgSpr.spriteFrame);
    };
    __decorate([y(cc.Node)], e.prototype, "itemsNode", void 0);
    __decorate([y(cc.Node)], e.prototype, "itemPre", void 0);
    __decorate([y(cc.Sprite)], e.prototype, "bgSpr", void 0);
    __decorate([y(cc.Button)], e.prototype, "adGetBtn", void 0);
    return __decorate([g], e);
})(_baseUI.default);
exports.default = m;
