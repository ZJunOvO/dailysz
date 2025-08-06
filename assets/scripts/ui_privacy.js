var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _panelMgr = require("panelMgr");
var _baseUI = require("baseUI");
var c = cc._decorator;
var l = c.ccclass;
var u = c.property;
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.btnService = null;
        e.btnPrivacy = null;
        return e;
    }
    __extends(e, t);
    e.prototype.init = function () {
        var t = this.btnService.node;
        var e = this.btnPrivacy.node;
        t.active = e.active = !0;
        t.on(
            cc.Node.EventType.TOUCH_END,
            function () {
                return _panelMgr.default.ins.open("ui/ui_info", {type: 1});
            },
            this
        );
        e.on(
            cc.Node.EventType.TOUCH_END,
            function () {
                return _panelMgr.default.ins.open("ui/ui_info", {type: 2});
            },
            this
        );
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    __decorate([u(cc.Label)], e.prototype, "btnService", void 0);
    __decorate([u(cc.Label)], e.prototype, "btnPrivacy", void 0);
    return __decorate([l], e);
})(_baseUI.default);
exports.default = p;
