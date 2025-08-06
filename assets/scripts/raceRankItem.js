var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _rankItem = require("rankItem");
var s = cc._decorator;
var c = s.ccclass;
var l = s.property;
var u = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.idxIcon = null;
        e.idxBg = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        this.scoreLb.string = "";
        this.idxLb.string = "";
        this.nickNameLb.string = "";
        this.idxIcon && (this.idxIcon.spriteFrame = null);
    };
    e.prototype.initItem = function (t, e) {
        this.setNickName(t.nick);
        this.setScore(t.score);
        e ? this.setIdxSp(e) : this.setIdx(t.idx);
        t.headUrl ? this.setHeadSp(t.headUrl) : this.setDefaultHead();
    };
    e.prototype.setIdx = function (e) {
        t.prototype.setIdx.call(this, e);
        this.idxBg.active = !0;
    };
    e.prototype.setIdxSp = function (t) {
        this.idxIcon.spriteFrame = t;
        this.idxBg.active = !1;
    };
    __decorate([l(cc.Sprite)], e.prototype, "idxIcon", void 0);
    __decorate([l(cc.Node)], e.prototype, "idxBg", void 0);
    return __decorate([c], e);
})(_rankItem.default);
exports.default = u;
