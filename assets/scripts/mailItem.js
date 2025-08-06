var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _time = require("time");
var _mailMgr = require("mailMgr");
var _panelMgr = require("panelMgr");
var l = cc._decorator;
var u = l.ccclass;
var p = l.property;
var d = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.title = null;
        e.content = null;
        e.leftT = null;
        e.goNode = null;
        e.mailSpf = [];
        e.newNode = null;
        e.qNode = null;
        e.rewardedNode = null;
        e.icon = null;
        e.timeBg = null;
        return e;
    }
    __extends(e, t);
    e.prototype.init = function (t, e) {
        this.id = t;
        var o = _mailMgr.default.ins.serverMail[t];
        if (o) {
            var n = o.title;
            n.length > 8 && (n = n.substring(0, 7) + "...");
            this.title.string = n;
            var i = o.msg;
            i.length > 9 && (i = i.substring(0, 8) + "...");
            this.content.string = i;
            this.temple = o;
            this.updateState(e);
            this.undateTime();
            this.schedule(this.undateTime, 1, cc.macro.REPEAT_FOREVER);
        }
    };
    e.prototype.updateState = function (t) {
        this.state = t;
        t == _mailMgr.mailState.award
            ? (this.icon.spriteFrame = this.mailSpf[1])
            : (this.icon.spriteFrame = this.mailSpf[0]);
        this.rewardedNode.active = t == _mailMgr.mailState.award;
        this.newNode.active = t == _mailMgr.mailState.noRead;
    };
    e.prototype.onOperTap = function (t) {
        null == t || t.action;
    };
    e.prototype.undateTime = function () {
        if (this.temple.end_time) {
            var t = this.temple.end_time / 1e3 - _time.default.ins.serverTime;
            t < 0
                ? this.unschedule(this.undateTime)
                : ((this.leftT.string = "剩余" + _time.default.formatDate2Str(t)),
                  this.leftT._forceUpdateRenderData(!0),
                  (this.timeBg.node.width = this.leftT.node.width + 20));
        }
    };
    e.prototype.onEnable = function () {
        this.goNode.on("click", this.showMailInfo, this);
    };
    e.prototype.onDisable = function () {
        this.goNode.off("click", this.showMailInfo, this);
        this.unschedule(this.undateTime);
    };
    e.prototype.showMailInfo = function () {
        _mailMgr.default.ins.serverMail[this.id] && _panelMgr.default.ins.open("ui/ui_mailInfo", {id: this.id});
    };
    __decorate([p(cc.Label)], e.prototype, "title", void 0);
    __decorate([p(cc.Label)], e.prototype, "content", void 0);
    __decorate([p(cc.Label)], e.prototype, "leftT", void 0);
    __decorate([p(cc.Node)], e.prototype, "goNode", void 0);
    __decorate([p(cc.SpriteFrame)], e.prototype, "mailSpf", void 0);
    __decorate([p(cc.Node)], e.prototype, "newNode", void 0);
    __decorate([p(cc.Node)], e.prototype, "qNode", void 0);
    __decorate([p(cc.Node)], e.prototype, "rewardedNode", void 0);
    __decorate([p(cc.Sprite)], e.prototype, "icon", void 0);
    __decorate([p(cc.Sprite)], e.prototype, "timeBg", void 0);
    return __decorate([u], e);
})(cc.Component);
exports.default = d;
