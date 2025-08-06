var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _global = require("global");
var _festivalMgr = require("festivalMgr");
var _levelMgr = require("levelMgr");
var _panelMgr = require("panelMgr");
var _pInfo = require("pInfo");
var _main = require("main");
var _baseUI = require("baseUI");
var h = cc._decorator;
var f = h.ccclass;
var g = h.property;
var y = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.lvLB = null;
        e.numLv = null;
        e.diffLb = null;
        e.curLB = null;
        e.costLBL = null;
        e.costLBR = null;
        e.jigsawSp = null;
        e.kuangSp = null;
        e.matArr = [];
        e.aniSpr = null;
        e.boomSpine = null;
        e.isShow = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {};
    e.prototype.init = function () {
        for (var t, e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
        this.isShow = (null === (t = e[0]) || void 0 === t ? void 0 : t.isShow) || !1;
        this.kuangSp.setMaterial(0, this.matArr[0]);
        this.showLvInfo();
    };
    e.prototype.showLvInfo = function () {
        var t = this;
        var e = _pInfo.default.ins;
        var o = _levelMgr.default.ins;
        var n = e.getPuzzleLvl();
        var i = n - 54 * (Math.ceil(n / 54) - 1);
        this.lvLB.string = "第" + i + "关";
        var r = o.getPuzzleInfo().size;
        this.numLv.string = r + "x" + r;
        this.diffLb.string = o.getLevelDiffStr();
        this.curLB.string = e.getConsWinTimes() + "";
        this.costLBL.string = o.getLevelCost() + "/";
        this.costLBR.string = "" + e.getPower();
        var a = new cc.Color(251, 234, 168);
        this.costLBR.node.color = o.getLevelCost() > e.getPower() ? cc.Color.RED : a;
        var s = _pInfo.default.ins.getPuzzleLvl();
        if ((s % 9 == 1 && (this.isShow = !1), this.isShow)) {
            var l = this.updJigsaw(s - 1);
            this.scheduleOnce(function () {
                t.showPopAni(l);
            }, 0.34);
        } else this.updJigsaw(s);
    };
    e.prototype.updJigsaw = function (t) {
        var e;
        var o = this;
        var n = (t - 1) % _levelMgr.default.ins.getPuzzleLvlCount();
        var i = Math.ceil(n / 9) || 1;
        e = 9 == (e = n >= 9 * i ? 9 : n > 9 * i - 9 ? n % 9 : 0) ? 0 : e;
        _levelMgr.default.ins
            .getJigsawIcon(i)
            .then(function (t) {
                t && (o.jigsawSp.spriteFrame = t);
            })
            .catch(function () {
                console.error("getIconErr");
            });
        this.jigsawSp.getMaterial(0).setProperty("height", e);
        return e;
    };
    e.prototype.showPopAni = function (t) {
        var e = this;
        _levelMgr.default.ins.getPuzzleSprFrame(_pInfo.default.ins.getPuzzleLvl() - 1).then(function (o) {
            if (e.node) {
                e.aniSpr.spriteFrame = o;
                var n = t % 3;
                var i = Math.floor(t / 3);
                var r = e.aniSpr.node;
                r.x += 40 * n;
                r.y -= 40 * i;
                r.scale = 0.1;
                cc.tween(r)
                    .to(0.02, {scale: 1.1})
                    .to(0.06, {scale: 0.7})
                    .to(0.1, {scale: 1})
                    .delay(0.7)
                    .call(function () {
                        e.boomSpine.node.active = !0;
                        e.aniSpr.spriteFrame = null;
                        var t = _pInfo.default.ins.getPuzzleLvl();
                        e.updJigsaw(t);
                    })
                    .start();
            }
        });
    };
    e.prototype.onBtnStart = function () {
        var t = _levelMgr.default.ins.getLevelCost();
        if (_pInfo.default.ins.getPower() < t) _panelMgr.default.ins.open("ui/ui_getRes", {itemId: "times"});
        else {
            var e = this.costLBL.node.convertToWorldSpaceAR(cc.Vec3.ZERO);
            var o = _main.default.ins;
            o && (o.blockComp.enabled = !0);
            o.usePower(-t, e);
            _global.default.puzzlv = _pInfo.default.ins.getPuzzleLvl() - 1;
            _festivalMgr.default.ins.updPro(_festivalMgr.fesTaskKey.costPower, t);
        }
    };
    e.prototype.hideThis = function () {
        this.kuangSp.setMaterial(0, this.matArr[1]);
        this.hide();
    };
    __decorate([g(cc.Label)], e.prototype, "lvLB", void 0);
    __decorate([g(cc.Label)], e.prototype, "numLv", void 0);
    __decorate([g(cc.Label)], e.prototype, "diffLb", void 0);
    __decorate([g(cc.Label)], e.prototype, "curLB", void 0);
    __decorate([g(cc.Label)], e.prototype, "costLBL", void 0);
    __decorate([g(cc.Label)], e.prototype, "costLBR", void 0);
    __decorate([g(cc.Sprite)], e.prototype, "jigsawSp", void 0);
    __decorate([g(cc.Sprite)], e.prototype, "kuangSp", void 0);
    __decorate([g(cc.Material)], e.prototype, "matArr", void 0);
    __decorate([g(cc.Sprite)], e.prototype, "aniSpr", void 0);
    __decorate([g(sp.Skeleton)], e.prototype, "boomSpine", void 0);
    return __decorate([f], e);
})(_baseUI.default);
exports.default = y;
