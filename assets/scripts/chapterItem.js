var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _evts = require("evts");
var _idx = require("idx");
var _global = require("global");
var _levelMgr = require("levelMgr");
var _panelMgr = require("panelMgr");
var _pInfo = require("pInfo");
var d = cc._decorator;
var h = d.ccclass;
var f = d.property;
var g = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.nameLbl = null;
        e.pro = null;
        e.proLbl = null;
        e.goBtn = null;
        e.pics = [];
        e.grayMater = null;
        e.normalMater = null;
        return e;
    }
    __extends(e, t);
    e.prototype.init = function (t, e) {
        var o = this;
        this.posObj = e;
        this._chapter = t;
        this.nameLbl.string = "第" + t + "章";
        var n = _pInfo.default.ins.getPuzzleLvl();
        this.pro.progress = 0;
        var i = n - (54 * (this._chapter - 1) + 1);
        i = i < 0 ? 0 : i;
        _global.default.levelDone && (i = 54);
        var r = 0;
        i > 0 && (r = Math.floor(i / 9));
        n > 54 * this._chapter && ((r = 6), (i = 54));
        _levelMgr.default.ins
            .getchapterBunder()
            .then(function () {
                for (
                    var t = "" + (100 + o._chapter),
                        e = function (e) {
                            _levelMgr.default.ins
                                .getJigsawIcon(e, t)
                                .then(function (t) {
                                    t &&
                                        ((o.pics[e - 1].spriteFrame = t),
                                        e <= r
                                            ? o.pics[e - 1].setMaterial(0, o.normalMater)
                                            : o.pics[e - 1].setMaterial(0, o.grayMater));
                                })
                                .catch(function () {
                                    console.error("getJigsawIconErr");
                                });
                        },
                        n = 1;
                    n <= 6;
                    n++
                )
                    e(n);
            })
            .catch(function () {
                console.error("getChapterBundleErr");
            });
        this.updPro();
    };
    e.prototype.updPro = function () {
        if (this._chapter) {
            var t = _pInfo.default.ins.getPuzzleLvl();
            this.pro.progress = 0;
            var e = t - (54 * (this._chapter - 1) + 1);
            e = (e = e < 0 ? 0 : e) > 54 ? 54 : e;
            cc.tween(this.pro)
                .to(0.5, {progress: e / 54})
                .start();
            this.proLbl.string = e + "/54";
        }
    };
    e.prototype.unuse = function () {};
    e.prototype.reuse = function () {};
    e.prototype.onEnable = function () {};
    e.prototype.onDisable = function () {};
    e.prototype.onGoBtn = function () {
        _idx.platform.showLoading();
        var t = (_global.default.levelTmp = this._chapter);
        _levelMgr.default.ins.updateTmpData(t).then(function () {
            _idx.platform.hideLoading();
            _panelMgr.default.ins.closeAllPanel();
            _evts.default.opE.emit({action: _evts.default.UPDATA_LEVEL_TMP});
        });
    };
    e.prototype.onDestroy = function () {
        var t = "" + (100 + this._chapter);
        _levelMgr.default.ins
            .getchapterBunder()
            .then(function (e) {
                cc.assetManager.releaseAsset(e.get(t + "/chapter", cc.SpriteFrame));
            })
            .catch(function () {
                console.error("getBundleErr");
            });
    };
    __decorate([f(cc.Label)], e.prototype, "nameLbl", void 0);
    __decorate([f(cc.ProgressBar)], e.prototype, "pro", void 0);
    __decorate([f(cc.Label)], e.prototype, "proLbl", void 0);
    __decorate([f(cc.Button)], e.prototype, "goBtn", void 0);
    __decorate([f([cc.Sprite])], e.prototype, "pics", void 0);
    __decorate([f(cc.Material)], e.prototype, "grayMater", void 0);
    __decorate([f(cc.Material)], e.prototype, "normalMater", void 0);
    return __decorate([h], e);
})(cc.Component);
exports.default = g;
