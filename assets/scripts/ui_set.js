var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _idx = require("idx");
var _uData = require("uData");
var _baseUI = require("baseUI");
var _swBtn = require("swBtn");
var _sound = require("sound");
var _global = require("global");
var _res = require("res");
var _pConst = require("pConst");
var _panelMgr = require("panelMgr");
var _slider = require("slider");
var y = cc._decorator;
var m = y.ccclass;
var v = y.property;
var _ = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.audioBtn = null;
        e.musicBtn = null;
        e.vibrateBtn = null;
        e.headImg = null;
        e.txt_name = null;
        e.txt_lv = null;
        e.versionLbl = null;
        e.btnService = null;
        e.btnPrivacy = null;
        e.bgmSlider = null;
        e.effSlider = null;
        e.isMusic = !0;
        e.isAudio = !0;
        e.isVb = !0;
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {
        var t = _uData.default.ins.getSetting();
        this.isAudio = t.effectSound;
        this.isMusic = t.bgmSound;
        this.isVb = t.vibrate;
        this.upAudioBtn();
        this.updateMusicBtn();
        this.upVbBtn();
        this.initData();
        this.initSlider();
        var e = _idx.platform.version;
        if (
            (e && (this.versionLbl.string = "v " + e),
            _idx.platform.string() == _pConst.PFCode.Wechat || _idx.platform.isQQ)
        ) {
            var o = this.btnService.node;
            var n = this.btnPrivacy.node;
            o.active = n.active = !0;
            o.on(
                cc.Node.EventType.TOUCH_END,
                function () {
                    return _panelMgr.default.ins.open("ui/ui_info", {type: 1});
                },
                this
            );
            n.on(
                cc.Node.EventType.TOUCH_END,
                function () {
                    return _panelMgr.default.ins.open("ui/ui_info", {type: 2});
                },
                this
            );
        }
    };
    e.prototype.initData = function () {
        var t = this;
        this.txt_name.string = _uData.default.ins.getName();
        var e = _uData.default.ins.getHeadImg();
        e
            ? cc.assetManager.loadRemote(e, {ext: _global.headImgExt}, function (e, o) {
                  t.node &&
                      t.node.isValid &&
                      (e ? t.setDefaultHead() : (t.headImg.spriteFrame = new cc.SpriteFrame(o)));
              })
            : this.setDefaultHead();
    };
    e.prototype.setDefaultHead = function () {
        var t = this;
        _res.default.ins
            .getBundleByString("resSps")
            .then(function (e) {
                e.load("common/head_1", cc.SpriteFrame, function (e, o) {
                    !e && t.node && t.node.isValid && (t.headImg.spriteFrame = o);
                });
            })
            .catch(function (t) {
                console.error("RTool.ins.getBundleByString('resSps')", t);
            });
    };
    e.prototype.onAudioBtnTap = function () {
        this.isAudio = !this.isAudio;
        this.upAudioBtn();
        _uData.default.ins.setSetting({effectSound: this.isAudio});
    };
    e.prototype.upAudioBtn = function () {
        null != this.audioBtn && this.audioBtn.setState(this.isAudio);
    };
    e.prototype.onMusicBtnTap = function () {
        this.isMusic = !this.isMusic;
        _uData.default.ins.setSetting({bgmSound: this.isMusic});
        this.updateMusicBtn();
    };
    e.prototype.updateMusicBtn = function () {
        _sound.default.ins[this.isMusic ? "playBGM" : "stopBGM"]();
        null != this.musicBtn && this.musicBtn.setState(this.isMusic);
    };
    e.prototype.onVibrateBtnTap = function () {
        this.isVb = !this.isVb;
        this.upVbBtn();
        _uData.default.ins.setSetting({vibrate: this.isVb});
    };
    e.prototype.upVbBtn = function () {
        null != this.vibrateBtn && this.vibrateBtn.setState(this.isVb);
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    e.prototype.initSlider = function () {
        var t = _uData.default.ins.getSetting();
        var e = t.effectVolume;
        var o = t.bgmVolume;
        this.bgmSlider.init(o);
        this.effSlider.init(e);
    };
    e.prototype.onSliderChange = function (t, e) {
        var o;
        if ("bgmVolume" !== e && "effectVolume" !== e) return console.error("slider参数错了!!!!");
        _uData.default.ins.setSetting((((o = {})[e] = t.progress), o));
        _sound.default.ins[e] = t.progress;
    };
    e.prototype.onBtnSkin = function () {};
    __decorate([v(_swBtn.default)], e.prototype, "audioBtn", void 0);
    __decorate([v(_swBtn.default)], e.prototype, "musicBtn", void 0);
    __decorate([v(_swBtn.default)], e.prototype, "vibrateBtn", void 0);
    __decorate([v(cc.Sprite)], e.prototype, "headImg", void 0);
    __decorate([v(cc.Label)], e.prototype, "txt_name", void 0);
    __decorate([v(cc.Label)], e.prototype, "txt_lv", void 0);
    __decorate([v(cc.Label)], e.prototype, "versionLbl", void 0);
    __decorate([v(cc.Label)], e.prototype, "btnService", void 0);
    __decorate([v(cc.Label)], e.prototype, "btnPrivacy", void 0);
    __decorate([v(_slider.default)], e.prototype, "bgmSlider", void 0);
    __decorate([v(_slider.default)], e.prototype, "effSlider", void 0);
    return __decorate([m], e);
})(_baseUI.default);
exports.default = _;
