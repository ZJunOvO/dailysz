var n;
Object.defineProperty(exports, "__esModule", { value: !0 });
var _ali = require("ali");
var _uData = require("uData");
var _evts = require("evts");
var _pConst = require("pConst");
var _sound = require("sound");
var _idx = require("idx");
var _time = require("time");
var _ali = require("ali");
var h = (function(t) {
    function e() {
        return t.call(this) || this;
    }
    __extends(e, t);
    Object.defineProperty(e.prototype, "appId", {
        get: function() {
            return "3000000107678912";
        },
        enumerable: !1,
        configurable: !0
    });
    e.prototype.string = function() {
        return _pConst.PFCode.TaoBao;
    };
    e.prototype.login = function() {
        return Promise.resolve();
    };
    e.prototype.initAliListener = function() {
        var t = this;
        _ali.my.onShow(function(e) {
            _evts.default.plE.emit({ onShow: !0, isSharing: t.isSharing }),
                _uData.default.ins.syncLaunchOption(e),
                t.isSharing || t.reenter(),
                (t.bySlider = "gamecenter" == e.query.sourceChannel),
                _evts.default.opE.emit({ action: _evts.default.Slider_Chg });
        });
        _ali.my.onHide(function() {
            t.onHideT = _time.default.ins.serverTime;
            _evts.default.plE.emit({ onHide: !0 });
        });
        var e = _pConst.SDKConfig.shareData();
        this.canUse("8.8.0") &&
            (_ali.my.onShareAppMessage = function() {
                return {
                    title: e.title,
                    desc: "",
                    imageUrl: "https://tjkj300.oss-cn-shenzhen.aliyuncs.com/web/tjkj300web/other/share.jpg"
                };
            });
        _ali.my.onMemoryWarning &&
            _ali.my.onMemoryWarning(function() {
                _ali.my.triggerGC && _ali.my.triggerGC();
            });
    };
    e.prototype.initCommonSetting = function() {
        _ali.my.getNetworkType({ success: function() {}, fail: function() {} });
        _evts.default.chE.on(function() {});
    };
    e.prototype.syncTime = function() {
        return new Promise(function(t) {
            var e = _idx.platform.cloud;
            e
                ?
                e.callContainer({
                    path: "/api/gTime",
                    init: { method: "GET", header: { "content-type": "application/json" }, timeout: 2e3 },
                    success: function(e) {
                        var o;
                        var n = e.data;
                        if (n)
                            if ("string" == typeof n)
                                try {
                                    o = JSON.parse(n).t;
                                } catch (e) {}
                            else o = n.t;
                        t(o || null);
                    },
                    fail: function() {
                        return t(null);
                    }
                }) :
                t(null);
        });
    };
    e.prototype.doWatchAD = function() {};
    e.prototype.share = function() {
        return new Promise(function(t) {
            _ali.my.showSharePanel({
                from: "code",
                success: function() {
                    _sound.default.ins.playBGM();
                    t(1);
                },
                fail: function(e) {
                    console.error("alisharedata fail:", e);
                    _sound.default.ins.playBGM();
                    t(0);
                }
            });
        });
    };
    return e;
})(_ali.default);
exports.default = h;