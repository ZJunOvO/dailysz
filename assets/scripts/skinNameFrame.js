var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _skinMgr = require("skinMgr");
var _skinItemBase = require("skinItemBase");
var c = cc._decorator;
var l = c.ccclass;
var u = c.property;
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.itemSp = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        t.prototype.onLoad.call(this);
    };
    e.prototype.loadItem = function () {
        this.itemSp.node.y = this.ref > 1 ? 0 : -4;
        this.itemSp.type = this.ref > 1 ? cc.Sprite.Type.SIMPLE : cc.Sprite.Type.SLICED;
        this.itemSp.sizeMode =
            this.ref > 1
                ? cc.Sprite.SizeMode.TRIMMED
                : (this.itemSp.node.setContentSize(155, 55), cc.Sprite.SizeMode.CUSTOM);
        _skinMgr.default.ins.updateNameFrame(this.ref, this.itemSp);
    };
    e.prototype.clickItem = function () {
        var t;
        this.state !== _skinMgr.SkinState.using && ((t = this.itemSp.node), this.openSkinInfo(t));
    };
    __decorate([u(cc.Sprite)], e.prototype, "itemSp", void 0);
    return __decorate([l], e);
})(_skinItemBase.default);
exports.default = p;
