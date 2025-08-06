var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _numberUtils = require("NumberUtils");
var _res = require("res");
var _mailMgr = require("mailMgr");
var l = cc._decorator;
var u = l.ccclass;
var p = l.property;
var d = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.icon = null;
        e.numLbl = null;
        e.awardedNode = null;
        e.key = "";
        e.countStr = "";
        return e;
    }
    __extends(e, t);
    e.prototype.init = function (t, e, o) {
        this.key = t;
        _res.default.ins.lSF("item/" + t, this.icon);
        var n = _numberUtils.default.FormatCurrency(e);
        this.countStr = n;
        this.numLbl.string = "x" + e;
        this.awardedNode.active = o == _mailMgr.mailState.award;
    };
    __decorate([p(cc.Sprite)], e.prototype, "icon", void 0);
    __decorate([p(cc.Label)], e.prototype, "numLbl", void 0);
    __decorate([p(cc.Node)], e.prototype, "awardedNode", void 0);
    return __decorate([u], e);
})(cc.Component);
exports.default = d;
