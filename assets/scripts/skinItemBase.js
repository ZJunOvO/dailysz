var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _evts = require("evts");
var _panelMgr = require("panelMgr");
var _skinMgr = require("skinMgr");
var l = cc._decorator;
var u = l.ccclass;
var p = l.property;
var d = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.usingNode = null;
        e.lockNode = null;
        e.state = _skinMgr.SkinState.none;
        e.ref = -1;
        e.id = "";
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        var t = this.node.getContentSize();
        this.lockNode.setContentSize(t);
        this.usingNode.setPosition(0, 0);
    };
    e.prototype.start = function () {};
    e.prototype.onEnable = function () {
        this.node.on("click", this.clickItem, this);
        this.eventFunc = this.onOperTap.bind(this);
        _evts.default.opE.on(this.eventFunc);
    };
    e.prototype.onDisable = function () {
        this.node.off("click", this.clickItem, this);
        _evts.default.opE.off(this.eventFunc);
        this.eventFunc = null;
    };
    e.prototype.onOperTap = function (t) {
        t.action === _evts.default.SKIN_CHG && this.updateState();
    };
    e.prototype.initItem = function (t, e) {
        this.ref = t.ref;
        this.id = e;
        this.updateState();
        this.loadItem();
    };
    e.prototype.updateState = function () {
        var t = _skinMgr.default.ins.isHasSkin(this.id, this.ref) ? _skinMgr.SkinState.unlock : _skinMgr.SkinState.lock;
        t === _skinMgr.SkinState.unlock &&
            _skinMgr.default.ins.isUsingSkin(this.id, this.ref) &&
            (t = _skinMgr.SkinState.using);
        this.setState(t);
    };
    e.prototype.setState = function (t) {
        this.state = t;
        this.usingNode.active = t == _skinMgr.SkinState.using;
        this.lockNode.active = t == _skinMgr.SkinState.lock;
    };
    e.prototype.loadItem = function () {};
    e.prototype.clickItem = function () {};
    e.prototype.openSkinInfo = function (t) {
        var e = this.ref;
        var o = this.id;
        _panelMgr.default.ins.open("ui/ui_skinInfo", {ref: e, skinId: o, showNode: t, unlockState: this.state});
    };
    __decorate([p(cc.Node)], e.prototype, "usingNode", void 0);
    __decorate([p(cc.Node)], e.prototype, "lockNode", void 0);
    return __decorate([u], e);
})(cc.Component);
exports.default = d;
