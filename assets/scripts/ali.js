var n;
Object.defineProperty(exports, "__esModule", { value: !0 });
exports.my = void 0;
var _c = require("c");
var _com = require("com");
var _env = require("env");
var _evts = require("evts");
var _pConst = require("pConst");
var _request = require("request");
var _sound = require("sound");
var _time = require("time");
var _uData = require("uData");
var _pInfo = require("pInfo");
var v = (function(t) {
    function e() {
        var e = t.call(this) || this;
        e.isSharing = !1;
        e.sdkSwitch = _pConst.DefaultSDKSwitch;
        e.videoCheckedMap = {};
        e.videoCheckedLastT = {};
        e.uniqueVideoUnitId = "ad_tiny_2021004133656183_202401292200080698";
        e.isLoading = !1;
        e.isLoggedIn = !1;
        e.onHideT = 0;
        e.noAd = !1;
        e.noVideo = !1;
        e.lastInterAdShowT = 0;
        e.switchesInitd = !1;
        e.gameRecorder = null;
        e.ta = null;
        e.m_nStartRecordT = 0;
        e.m_nRecordT = 0;
        e.m_bIsRecording = !1;
        e.m_nAutoStopVideoId = 0;
        e.m_strVideoPath = "";
        e.cDeskCatch = !1;
        e.isRejed = !1;
        e.onKeyboardComplete = null === exports.my || void 0 === exports.my ? void 0 : exports.my.onKeyboardComplete;
        exports.my = e.string() === _pConst.PFCode.Alipay ? window.my : globalThis.my;
        XMLHttpRequest.prototype.getResponseHeader = function() {};
        var n = console.log;
        console.log = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var o = t.some(function(t) {
                return "string" == typeof t && t.includes("内容巡检");
            });
            o || n.apply(console, t);
        };
        return e;
    }
    __extends(e, t);
    Object.defineProperty(e.prototype, "appId", {
        get: function() {
            return "2021004133656183";
        },
        enumerable: !1,
        configurable: !0
    });
    e.prototype.string = function() {
        return _pConst.PFCode.Alipay;
    };
    e.prototype.init = function() {
        this.initAliListener();
        this.initCommonSetting();
    };
    e.prototype.initTga = function() {};
    e.prototype.isSwitchedInitd = function() {
        return this.switchesInitd;
    };
    e.prototype.initAliListener = function() {
        var t = this;
        exports.my.onShow(function(e) {
            _evts.default.plE.emit({ onShow: !0, isSharing: t.isSharing }),
                _uData.default.ins.syncLaunchOption(e),
                t.isSharing || t.reenter(),
                (t.bySlider = "gamecenter" == e.query.sourceChannel),
                t.checkDesktopExist().then(function() {
                    _evts.default.opE.emit({ action: _evts.default.Desktop_Chg });
                }),
                _evts.default.opE.emit({ action: _evts.default.Slider_Chg });
        });
        t.sidebarExist = t.canUse("10.5.60");
        exports.my.onHide(function() {
            (t.onHideT = _time.default.ins.serverTime), _evts.default.plE.emit({ onHide: !0 });
        });
        exports.my.onError(function(t) {
            _env.env.mode !== _env.EM.PROD &&
                exports.my.alert({
                    title: t.error || "异常报错",
                    content: t.stack || t + "",
                    showCancel: !1,
                    buttonText: "好的"
                });
        });
        var e = _pConst.SDKConfig.shareData();
        var n =
            "iOS" === this.getSystemData().platform || "iPhone OS" === this.getSystemData().platform ?
            "https://tjkj300.oss-cn-shenzhen.aliyuncs.com/web/tjkj300web/other/share.jpg" :
            e.imageUrl;
        exports.my.onShareAppMessage = function() {
            return {
                title: e.title,
                desc: "",
                bgImgUrl: n,
                success: function() {
                    _sound.default.ins.playBGM();
                },
                fail: function() {
                    _sound.default.ins.playBGM();
                }
            };
        };
        exports.my.onMemoryWarning &&
            exports.my.onMemoryWarning(function() {
                exports.my.triggerGC && exports.my.triggerGC();
            });
        var i = this.uniqueVideoUnitId;
        null == this.videoAd && (this.videoAd = exports.my.createRewardedAd({ adUnitId: i }));
        null == this.videoAd && this.videoAd.load();
    };
    e.prototype.initCommonSetting = function() {
        _uData.default.ins.syncLaunchOption(exports.my.getLaunchOptionsSync());
        exports.my.getNetworkType({ success: function() {}, fail: function() {} });
        _evts.default.chE.on(function() {});
    };
    e.prototype.setAccountID = function() {
        _env.env.mode;
        _env.EM.TEST;
    };
    e.prototype.login = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function() {
                return [
                    2,
                    new Promise(function(t) {
                        exports.my.getAuthCode({
                            scopes: "auth_base",
                            success: function(e) {
                                var o = {};
                                o.code = e.authCode;
                                try {
                                    t(o);
                                } catch (n) {}
                            },
                            fail: function(e) {
                                console.error("my.getAuthCode 调用失败", e);
                                t({});
                            }
                        });
                    })
                ];
            });
        });
    };
    e.prototype.initCloud = function() {
        return Promise.resolve(null);
    };
    e.prototype.syncTime = function() {
        return Promise.resolve(null);
    };
    e.prototype.reenter = function() {};
    e.prototype.getStorage = function(t) {
        try {
            var e = exports.my.getStorageSync({ key: t });
            return e.success ?
                null == e.data || "" == e.data ?
                null :
                JSON.parse(e.data) :
                null == e || "" == e ?
                null :
                JSON.parse(e);
        } catch (n) {}
    };
    e.prototype.setStorage = function(t, e) {
        try {
            var n = exports.my.setStorageSync({ key: t, data: JSON.stringify(e) });
            n.success || console.error("setStorageSync fail", n.errorMessage, "\n", n.error);
        } catch (i) {}
    };
    e.prototype.clearStorage = function() {
        try {
            exports.my.clearStorageSync();
        } catch (t) {}
    };
    e.prototype.removeStorage = function(t) {
        try {
            exports.my.removeStorageSync(t);
        } catch (e) {}
    };
    e.prototype.trackLogin = function() {};
    e.prototype.trackUserSet = function() {};
    e.prototype.trackUserSetOnce = function() {};
    e.prototype.trackEvent = function() {};
    e.prototype.getSeq = function() {};
    e.prototype.consumeSeq = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t.sequenceInfo.type != _pConst.STDSeqType.VIDEO ? [3, 2] : [4, this.doWatchAD(t)];
                    case 1:
                        e.sent(), this.doShare(), (e.label = 2);
                    case 2:
                        return [2];
                }
            });
        });
    };
    e.prototype.doWatchAD = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function() {
                return this.noAd ? [2] :
                    this.noVideo ?
                    (console.error("[error] no video"), [2, Promise.reject(_pConst.VideoFailCode.NO_AD)]) :
                    (_evts.default.adE.emit(_c.ADE.VIDEO),
                        this.showLoading(),
                        (e = this), [
                            2,
                            new Promise(function(o, n) {
                                e.videoAd.onClose(function(i) {
                                    null != i && i.isEnded ?
                                        (_evts.default.adE.emit(_c.ADE.VIDEO_END),
                                            e.trackEvent("video", {
                                                step: "complete",
                                                unit: void 0,
                                                type: t.videoSource,
                                                item: t.item
                                            }),
                                            o(1)) :
                                        (_evts.default.adE.emit(_c.ADE.VIDEO_END), n(_pConst.VideoFailCode.CANCELED));
                                });
                                e.videoAd
                                    .load()
                                    .then(function() {
                                        e.videoAd
                                            .show()
                                            .then(function() {
                                                e.hideLoading();
                                            })
                                            .catch(function() {
                                                e.hideLoading();
                                                _evts.default.adE.emit(_c.ADE.VIDEO_END);
                                                e.videoAd = null;
                                                n(_pConst.VideoFailCode.NO_AD);
                                            });
                                    })
                                    .catch(function() {
                                        e.hideLoading();
                                        n(_pConst.VideoFailCode.NO_AD);
                                    })
                                    .then(function() {});
                            })
                        ]);
            });
        });
    };
    e.prototype.doShare = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function() {
                return [2];
            });
        });
    };
    e.prototype._askReShare = function() {};
    e.prototype.canUse = function(t) {
        return _com.default.ins.compareVersion(this.getSystemData().version, t) >= 0;
    };
    e.prototype.getSystemData = function() {
        if (null == this.systemInfoCache)
            try {
                this.systemInfoCache = exports.my.getSystemInfoSync();
            } catch (t) {
                return _pConst.DefaultSystemInfo;
            }
        return this.systemInfoCache;
    };
    e.prototype.getSwitches = function() {};
    e.prototype.vibrate = function(t) {
        t == _pConst.VEnum4.SHORT ?
            exports.my.vibrateShort("heavy") :
            t == _pConst.VEnum4.LONG && exports.my.vibrateLong({ success: function() {}, fail: function() {} });
    };
    e.prototype.preloadVideo = function() {
        return !1;
    };
    e.prototype.showConfirm = function(t) {
        return new Promise(function(e) {
            exports.my.confirm(
                Object.assign(Object.assign({}, t), {
                    success: function(t) {
                        t.confirm ? e(!0) : e(!1);
                    },
                    fail: function() {
                        e(!1);
                    }
                })
            );
        });
    };
    e.prototype.refreshGame = function() {
        location.reload();
    };
    e.prototype.showLoading = function() {
        this.isLoading = !0;
        exports.my.showLoading({ content: "加载中", mask: !0 });
    };
    e.prototype.hideLoading = function() {
        this.isLoading && (exports.my.hideLoading(), (this.isLoading = !1));
    };
    e.prototype.log = function() {};
    e.prototype.getMenuBounding = function() {};
    e.prototype.createShareImage = function() {};
    e.prototype.preloadInterstitialAD = function() {};
    e.prototype.showInterstitialAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function() {
                return [2, null];
            });
        });
    };
    e.prototype.canShowBanner = function() {
        return !1;
    };
    e.prototype.getBannerSize = function() {
        return new cc.Size(0, 0);
    };
    e.prototype.showBanner = function() {};
    e.prototype.hideBanner = function() {};
    e.prototype.getSubscribeCnt = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function() {
                return [2, 0];
            });
        });
    };
    e.prototype.subscribe = function() {};
    e.prototype.initVideoRecorder = function() {};
    e.prototype.startVideoRecord = function() {};
    e.prototype.pauseVideoRecord = function() {};
    e.prototype.resumeVideoRecord = function() {};
    e.prototype.stopVideoRecord = function() {};
    e.prototype.startStopRecordTimeout = function() {};
    e.prototype.clearStopRecordTimeout = function() {};
    e.prototype.autoStopVideoRecord = function() {};
    e.prototype.onVideoRecordStart = function() {};
    e.prototype.onVideoRecordEnd = function() {};
    e.prototype.onVideoRecordError = function() {};
    e.prototype.hasVideoRecord = function() {};
    e.prototype.shareVideoRecord = function() {};
    e.prototype.uploadAdEvent = function() {};
    e.prototype.PostMessage = function() {};
    e.prototype.SetUserCloudStorage = function() {};
    e.prototype.GetOpenDataContext = function() {};
    e.prototype.addShortcut = function() {};
    e.prototype.checkDesktopExist = function() {
        var t = this;
        return new Promise(function(e) {
            var o = _request.default.ins;
            t.cDeskCatch = !1;
            o.addHomepageConsult()
                .then(function(o) {
                    if (1 === o.status) {
                        var n = _uData.default.ins.getLocalData().aliAddHome;
                        var i = "N" === o.data ? 1 : 0;
                        1 === n && 0 === i && _evts.default.opE.emit({ action: _evts.default.ALIPAY_MAIN });
                        _pInfo.default.ins.setAliAddHome(i);
                        e(1);
                    } else(t.cDeskCatch = !0), e(0);
                })
                .catch(function(o) {
                    t.cDeskCatch = !0;
                    e(0);
                    console.error(o);
                });
        });
    };
    e.prototype.addGamesetlattice = function() {
        this.navigateToMiniProgramBySchema(
            "alipays://platformapi/startapp?appId=2021003125685383&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fyuyan%2F180020010001206617%2Findex.html%3FcaprMode%3Dsync&chInfo=gamesetlattice&sms=YES&appClearTop=false",
            function() {},
            function() {}
        );
    };
    e.prototype.share = function() {
        return new Promise(function(t) {
            exports.my.showSharePanel({
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
    e.prototype.getUserInfo = function() {
        var t = this;
        return new Promise(function(e, n) {
            exports.my.getAuthCode &&
                exports.my.getAuthCode({
                    scopes: "auth_user",
                    success: function() {
                        exports.my.getAuthUserInfo({
                            success: function(t) {
                                var o = t.avatar;
                                t.avatar = o.replace("http://", "https://");
                                e(t);
                            },
                            fail: function(t) {
                                n(t);
                            }
                        });
                    },
                    fail: function() {
                        t.showRefuseTip(e, n);
                    }
                });
        });
    };
    e.prototype.showRefuseTip = function(t, e) {
        return __awaiter(this, void 0, void 0, function() {
            var t = this;
            return __generator(this, function() {
                this.showConfirm({
                    title: "友情提示",
                    content: "申请使用您的用户信息，展示排行榜。",
                    confirmButtonText: "允许",
                    cancelButtonText: "拒绝"
                }).then(function(o) {
                    o ? t.getUserInfo() : e();
                });
                return [2];
            });
        });
    };
    e.prototype._getUserInfo = function() {};
    e.prototype.schemaToParams = function(t) {
        if (!t.startsWith("alipays:")) return { message: "! 非 alipays: 开头" };
        for (
            var e = {},
                o = 0,
                n = t
                .replace(/^.*?\?/, "")
                .split("&")
                .map(function(t) {
                    var e = t.includes("=") ? t.indexOf("=") : t.length;
                    return [t.slice(0, e), t.slice(e + 1)].map(decodeURIComponent);
                }); o < n.length; o++
        ) {
            var i = n[o];
            var r = i[0];
            var a = i[1];
            if ("appId" == r) {
                if (16 != a.length) return { message: "! 非 16 位 appId '" + a + "'" };
                e[r] = a;
            } else if ("chInfo" === r) {
                var s = e.startParam || {};
                s[r] = a;
                e.startParam = s;
                continue;
            }
        }
        return { params: e };
    };
    e.prototype.navigateToMiniProgramBySchema = function(t, e, n) {
        var i = this.schemaToParams(t);
        var a = i.params;
        var s = i.message;
        a
            ?
            exports.my.navigateToMiniProgram(__assign(__assign({}, a), { success: e, fail: n })) :
            n && n({ error: -1, errorMessage: "无效的小程序 schema " + t + ": " + s });
    };
    e.prototype.navigateToScene = function(t) {
        void 0 === t && (t = "sidebar");
        this.navigateToMiniProgramBySchema(
            "alipays://platformapi/startapp?appId=2021003125685383&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fyuyan%2F180020010001206617%2Findex.html%3FcaprMode%3Dsync&chInfo=returnvisit&sms=YES&appClearTop=false",
            function() {},
            function() {}
        );
    };
    e.prototype.reportEvent = function(t, e) {
        void 0 === e && (e = {});
    };
    e.prototype.showModal = function(t) {
        var e = t.title;
        var o = t.content;
        var n = t.confirmText;
        var i = (t.showCancel, { title: e, content: o, buttonText: n });
        return this.showAlert(i);
    };
    e.prototype.showAlert = function(t) {
        return new Promise(function(e, n) {
            exports.my.alert(
                Object.assign(Object.assign({}, t), {
                    success: function() {
                        e(1);
                    },
                    fail: function(t) {
                        console.error(t);
                        n(t);
                    }
                })
            );
        });
    };
    e.prototype.requestSubscribeMessage = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return new Promise(function(e, n) {
            exports.my.getSetting({
                withSubscriptions: !0,
                success: function(i) {
                    i.authSetting.subscriptionsSetting.mainSwitch ?
                        e(1) :
                        exports.my.requestSubscribeMessage({
                            entityIds: t,
                            success: function(t) {
                                t.success && "subscribe" === t.behavior && e(1);
                            },
                            fail: function(t) {
                                n(t);
                            }
                        });
                },
                fail: function() {
                    n();
                }
            });
        });
    };
    return e;
})(require("pf").default);
exports.default = v;