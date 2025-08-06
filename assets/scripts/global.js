Object.defineProperty(exports, "__esModule", {value: !0});
exports.OssConfig = exports.headImgExt = void 0;
var _sound = require("sound");
cc.Button.prototype.tE = cc.Button.prototype._onTouchEnded;
cc.Button.prototype.cS = !0;
cc.Button.prototype._onTouchEnded = function (t) {
    this.interactable &&
        this.enabledInHierarchy &&
        this._pressed &&
        this.cS &&
        _sound.default.ins.play(_sound.default.CLICK),
        this.tE(t);
};
cc.macro.ENABLE_MULTI_TOUCH = !0;
cc.macro.ENABLE_WEBGL_ANTIALIAS = !0;
exports.headImgExt = ".head";
cc.assetManager.downloader.register(exports.headImgExt, function (t, e, o) {
    o(null, t);
});
cc.assetManager.parser.register(exports.headImgExt, function (t, e, o) {
    var n = new Image();
    function i() {
        n.removeEventListener("load", i), n.removeEventListener("error", r), o && o(null, n);
    }
    function r() {
        n.removeEventListener("load", i), n.removeEventListener("error", r), o && o(new Error(t));
    }
    "file:" !== window.location.protocol && (n.crossOrigin = "anonymous");
    n.addEventListener("load", i);
    n.addEventListener("error", r);
    n.src = t;
    return n;
});
cc.assetManager.factory.register(exports.headImgExt, function (t, e, o, n) {
    var i = null;
    var r = null;
    try {
        (i = new cc.Texture2D())._uuid = t;
        i._nativeUrl = t;
        i._nativeAsset = e;
    } catch (a) {
        r = a;
    }
    n && n(r, i);
});
var i = (function () {
    function t() {}
    t._baseUrl = "https://tjkj300.oss-cn-shenzhen.aliyuncs.com/web/sudoku/";
    t.configUrl = t._baseUrl + "config.json";
    t.configDevUrl = t._baseUrl + "config-dev.json";
    t.levelUrl = t._baseUrl + "level/";
    t.chapterUrl = t._baseUrl + "chapter/";
    t.jigswawUrl = t._baseUrl + "jigsaw/";
    t.challengeUrl = t._baseUrl + "challenge/";
    t.challengeWormUrl = t._baseUrl + "challenge/worm/";
    t.skinUrl = t._baseUrl + "skin/";
    t.skinConfigUrl = t._baseUrl + "skin/cfg/config.json";
    return t;
})();
exports.OssConfig = i;
var r = (function () {
    function t() {}
    t.getCharXOffset = function () {
        return 0;
    };
    t.chapterCount = 18;
    t.jisawCount = 40;
    t.loadToRace = 0;
    t.challengeLv = 0;
    t.isPopNewGift = !1;
    t.twoDaysLeft = !1;
    t.loadCb = !1;
    return t;
})();
exports.default = r;
