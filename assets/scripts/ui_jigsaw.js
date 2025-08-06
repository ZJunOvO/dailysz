var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _evts = require("evts");
var _jigsaw = require("jigsaw");
var _global = require("global");
var _baseUI = require("baseUI");
var u = cc._decorator;
var p = u.ccclass;
var d = u.property;
var h = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.jigsawPre = null;
        e.bgNode = null;
        e.closeNode = null;
        e.jigsawItem = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        if (((this.node.height = cc.winSize.height), _global.default.padScale)) {
            this.bgNode.scale = _global.default.padScale;
            var t = (cc.view.getVisibleSize().width - 720) / 2;
            this.closeNode.x -= t;
        }
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTBe, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTM, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTE, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTC, this);
    };
    e.prototype.start = function () {};
    e.prototype.init = function (t) {
        var e = t.theme_id;
        var o = t.themeType;
        var n = cc.instantiate(this.jigsawPre);
        n.parent = this.node;
        n.position = cc.v3(0, 0);
        this.jigsawItem = n.getComponent(_jigsaw.default);
        this.jigsawItem.initItem(e, o);
    };
    e.prototype.onTBe = function (t) {
        var e = this.jigsawItem;
        e && e.node.active && e.onTBe(t);
    };
    e.prototype.onTM = function (t) {
        var e = this.jigsawItem;
        e && e.onTM(t);
    };
    e.prototype.onTE = function (t) {
        var e = this.jigsawItem;
        e && e.onTE(t);
    };
    e.prototype.onTC = function (t) {
        var e = this.jigsawItem;
        e && e.onTC(t);
    };
    e.prototype.hideThis = function () {
        this.hide();
        _evts.default.opE.emit({action: _evts.default.UPDJIGSAWGAME});
    };
    e.prototype.onDestroy = function () {};
    __decorate([d(cc.Prefab)], e.prototype, "jigsawPre", void 0);
    __decorate([d(cc.Node)], e.prototype, "bgNode", void 0);
    __decorate([d(cc.Node)], e.prototype, "closeNode", void 0);
    return __decorate([p], e);
})(_baseUI.default);
exports.default = h;
