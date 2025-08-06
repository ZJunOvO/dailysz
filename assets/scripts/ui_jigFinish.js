var n;
Object.defineProperty(exports, "__esModule", { value: !0 });
var _evts = require("evts");
var _res = require("res");
var _global = require("global");
var _jigsawMgr = require("jigsawMgr");
var _newJigMgr = require("newJigMgr");
var _panelMgr = require("panelMgr");
var _baseUI = require("baseUI");
var h = cc._decorator;
var f = h.ccclass;
var g = h.property;
var y = (function(t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.finishSpr = null;
        e.lightNode = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function() {
        cc.tween(this.lightNode).by(3, { angle: -360 }).repeatForever().start();
    };
    e.prototype.init = function(t) {
        var e = this;
        var o = t.themeId;
        var n = t.themeType;
        var i = o + 1;
        var r = "pintu_" + i;
        1 === n ? _jigsawMgr.default.ins : 2 === n && (_newJigMgr.default.ins, (r = "fes_" + i));
        1 === n ?
            i < 61 ?
            _res.default.ins
            .getBundleByString("jigsaw")
            .then(function(t) {
                t.load(r, cc.SpriteFrame, function(t, o) {
                    !t && e.node && e.node.isValid && (e.finishSpr.spriteFrame = o);
                });
            })
            .catch(function(t) {
                console.error("RTool.ins.getBundleByString('jigsaw')", t);
            }) :
            cc.assetManager.loadRemote(
                _global.OssConfig.jigswawUrl + r + ".jpg", { ext: _global.headImgExt },
                function(t, o) {
                    !t && e.node && e.node.isValid && (e.finishSpr.spriteFrame = new cc.SpriteFrame(o));
                }
            ) :
            _res.default.ins
            .getBundleByString("jigsaw")
            .then(function(t) {
                t.load(r, cc.SpriteFrame, function(t, o) {
                    !t && e.node && e.node.isValid && (e.finishSpr.spriteFrame = o);
                });
            })
            .catch(function(t) {
                console.error("RTool.ins.getBundleByString('jigsaw')", t);
            });
    };
    e.prototype.hideThis = function() {
        this.hide();
    };
    e.prototype.onBtnBack = function() {
        _panelMgr.default.ins.closeAllPanel();
        _evts.default.opE.emit({ action: _evts.default.MAINJUMP, data: 2 });
        _evts.default.opE.emit({ action: _evts.default.UPDJIGSAWGAME });
    };
    e.prototype.onBtnNext = function() {
        _panelMgr.default.ins.closeAllPanel();
        _evts.default.opE.emit({ action: _evts.default.UPDJIGSAWGAME });
    };
    __decorate([g(cc.Sprite)], e.prototype, "finishSpr", void 0);
    __decorate([g(cc.Node)], e.prototype, "lightNode", void 0);
    return __decorate([f], e);
})(_baseUI.default);
exports.default = y;