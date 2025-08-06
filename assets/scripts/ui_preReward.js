var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _item = require("item");
var _baseUI = require("baseUI");
var c = cc._decorator;
var l = c.ccclass;
var u = c.property;
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.itemsNode = null;
        e.itemPre = null;
        return e;
    }
    __extends(e, t);
    e.prototype.init = function (t) {
        var e = this;
        t.itemDatas.forEach(function (t) {
            if (Number(t.value) > 0) {
                var o = cc.instantiate(e.itemPre);
                o.active = !0;
                o.parent = e.itemsNode;
                o.getComponent(_item.default).initByData(t.itemId, t.value);
            }
        });
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    e.prototype.getItem = function () {};
    __decorate([u(cc.Node)], e.prototype, "itemsNode", void 0);
    __decorate([u(cc.Node)], e.prototype, "itemPre", void 0);
    return __decorate([l], e);
})(_baseUI.default);
exports.default = p;
