var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _uData = require("uData");
var _lang = require("lang");
var _head = require("head");
var _skinMgr = require("skinMgr");
var _tipMgr = require("tipMgr");
var _pInfo = require("pInfo");
var _baseUI = require("baseUI");
var h = cc._decorator;
var f = h.ccclass;
var g = h.property;
var y = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.skinName = null;
        e.skinDesc = null;
        e.buyBtn = null;
        e.videoBtn = null;
        e.useBtn = null;
        e.headComp = null;
        e.bgSp = null;
        e.nameFrameSp = null;
        e.roleNode = null;
        e.frameBg = null;
        e.needCoin = null;
        e.needPro = null;
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {};
    e.prototype.init = function (t) {
        var e;
        var o = this;
        var n = t.ref;
        var i = t.skinId;
        var r = t.showNode;
        var s = t.unlockState;
        var c = _skinMgr.default.ins.getSkinData(i, n);
        var u = c.name;
        var p = c.desc;
        var d = c.unlockType;
        var h = c.unlockValue;
        switch (
            ((this.skinName.string = u),
            (this.skinDesc.string = p),
            (this.skinId = i),
            (this.ref = n),
            (this.unlockValue = h),
            (this.headComp.node.parent.active = i === _skinMgr.SkinIdEnum.headFrame),
            (this.bgSp.node.active = i === _skinMgr.SkinIdEnum.bg),
            (this.roleNode.active = i === _skinMgr.SkinIdEnum.role),
            (this.nameFrameSp.node.parent.active = i === _skinMgr.SkinIdEnum.nameFrame),
            (this.buyBtn.active = 2 === d && s === _skinMgr.SkinState.lock),
            (this.videoBtn.active = 1 === d && s === _skinMgr.SkinState.lock),
            (this.useBtn.active = _skinMgr.SkinState.using !== s && _skinMgr.SkinState.lock !== s),
            d)
        ) {
            case _skinMgr.SkinUnlockType.coin:
                this.setCoin();
                break;
            case _skinMgr.SkinUnlockType.video:
                this.setVideoPro();
        }
        var f = null === (e = r.getComponent(cc.Sprite)) || void 0 === e ? void 0 : e.spriteFrame;
        switch (i) {
            case _skinMgr.SkinIdEnum.role:
                this.roleNode.removeAllChildren();
                var g = cc.instantiate(r);
                (g.y = -100), this.roleNode.addChild(g);
                break;
            case _skinMgr.SkinIdEnum.bg:
                this.bgSp.spriteFrame = f;
                break;
            case _skinMgr.SkinIdEnum.nameFrame:
                this.nameFrameSp.spriteFrame = f;
                break;
            case _skinMgr.SkinIdEnum.headFrame:
                var y = _uData.default.ins.getHeadImg();
                this.headComp.loadHeadImg(y, n);
        }
        this.scheduleOnce(function () {
            o.setCloseBtnPos();
        });
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    e.prototype.setCoin = function () {
        this.needCoin.string = this.unlockValue.toString();
    };
    e.prototype.setVideoPro = function () {
        var t = _pInfo.default.ins.getSkinAdPro(this.skinId, this.ref);
        void 0 !== t &&
            ((this.needPro.string = t + "/" + this.unlockValue),
            t >= this.unlockValue &&
                (_skinMgr.default.ins.addSkin(this.skinId, this.ref),
                (this.videoBtn.active = !1),
                (this.useBtn.active = !0)));
    };
    e.prototype.setCloseBtnPos = function () {
        this.closeBtn.node.x = this.frameBg.width / 2 + this.frameBg.x - this.closeBtn.node.width / 2 - 15;
        this.closeBtn.node.y = this.frameBg.height / 2 + this.frameBg.y - this.closeBtn.node.height / 2 - 15;
    };
    e.prototype.onBtnUseSkin = function () {
        this.hide();
        _skinMgr.default.ins.usingSkin(this.skinId, this.ref);
    };
    e.prototype.onBtnCoin = function () {
        _pInfo.default.ins.getCoin() >= this.unlockValue
            ? (_pInfo.default.ins.addCoin(-this.unlockValue),
              _skinMgr.default.ins.addSkin(this.skinId, this.ref),
              (this.buyBtn.active = !1),
              (this.useBtn.active = !0),
              _tipMgr.default.ins.showTip("购买成功"))
            : _tipMgr.default.ins.showTip(_lang.lang[10001]);
    };
    e.prototype.onBtnVideo = function () {
        _pInfo.default.ins.addSkinAdPro(this.skinId, this.ref);
        this.setVideoPro();
    };
    __decorate([g(cc.Label)], e.prototype, "skinName", void 0);
    __decorate([g(cc.Label)], e.prototype, "skinDesc", void 0);
    __decorate([g(cc.Node)], e.prototype, "buyBtn", void 0);
    __decorate([g(cc.Node)], e.prototype, "videoBtn", void 0);
    __decorate([g(cc.Node)], e.prototype, "useBtn", void 0);
    __decorate([g(_head.default)], e.prototype, "headComp", void 0);
    __decorate([g(cc.Sprite)], e.prototype, "bgSp", void 0);
    __decorate([g(cc.Sprite)], e.prototype, "nameFrameSp", void 0);
    __decorate([g(cc.Node)], e.prototype, "roleNode", void 0);
    __decorate([g(cc.Node)], e.prototype, "frameBg", void 0);
    __decorate([g(cc.Label)], e.prototype, "needCoin", void 0);
    __decorate([g(cc.Label)], e.prototype, "needPro", void 0);
    return __decorate([f], e);
})(_baseUI.default);
exports.default = y;
