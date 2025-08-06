Object.defineProperty(exports, "__esModule", {value: !0});
var _c = require("c");
var _com = require("com");
var _env = require("env");
var _errorCode = require("errorCode");
var _evts = require("evts");
var _idx = require("idx");
var _pConst = require("pConst");
var _request = require("request");
var _time = require("time");
var _uData = require("uData");
var _tipMgr = require("tipMgr");
var y = "env-nBT5qFlz3P";
var m = "1jtw3wjabr0ui";
var v = "4m29365j0d2k3agn5c";
var _ = (function () {
    function t() {
        this.isSharing = !1;
        this.sdkSwitch = _pConst.DefaultSDKSwitch;
        this.videoCheckedMap = {};
        this.videoCheckedLastT = {};
        this.uniqueVideoUnitId = v;
        this.isLoading = !1;
        this.isLoggedIn = !1;
        this.onHideT = 0;
        this.noAd = !1;
        this.noVideo = !1;
        this.lastInterAdShowT = 0;
        this.switchesInitd = !1;
        this.gameRecorder = null;
        this.ta = null;
        this.m_nStartRecordT = 0;
        this.m_nRecordT = 0;
        this.m_bIsRecording = !1;
        this.m_nAutoStopVideoId = 0;
        this.m_strVideoPath = "";
        this.onKeyboardComplete = tt.onKeyboardComplete;
    }
    Object.defineProperty(t.prototype, "appId", {
        get: function () {
            return "tt6d2c1b91f21d474902";
        },
        enumerable: !1,
        configurable: !0
    });
    t.prototype.string = function () {
        return _pConst.PFCode.Bytedance;
    };
    t.prototype.init = function () {
        this.initVersion();
        this.initByteDanceListener();
        this.initCommonSetting();
        this.initTga();
        this.initVideoRecorder();
        this.uploadAdEvent("active", {});
        var t = tt.getLaunchOptionsSync();
        var e = (null == t ? void 0 : t.scene) || "0";
        this.bySlider = "021036" == e;
    };
    t.prototype.initVersion = function () {
        var t;
        var e;
        this.version =
            tt.getEnvInfoSync &&
            (null === (e = null === (t = tt.getEnvInfoSync()) || void 0 === t ? void 0 : t.microapp) || void 0 === e
                ? void 0
                : e.mpVersion);
    };
    t.prototype.initTga = function () {};
    t.prototype.isSwitchedInitd = function () {
        return this.switchesInitd;
    };
    t.prototype.initByteDanceListener = function () {
        var t = this;
        var e = this;
        tt.onShow(function (t) {
            _uData.default.ins.syncLaunchOption(t),
                e.isSharing || e.reenter(),
                e.startStopRecordTimeout(Math.max(1e3, _pConst.VIDEO_RECORD_LIMIT - e.m_nRecordT)),
                (e.bySlider = "homepage" == t.launch_from && "sidebar_card" == t.location),
                _evts.default.opE.emit({action: _evts.default.Slider_Chg}),
                Math.abs(Date.now() / 1e3 - e.onHideT) > 300
                    ? e.syncTime().then(function (t) {
                          t && _time.default.ins.sync(t), _evts.default.plE.emit({onShow: !0, isSharing: e.isSharing});
                      })
                    : _evts.default.plE.emit({onShow: !0, isSharing: e.isSharing});
        });
        tt.checkScene &&
            tt.checkScene({
                scene: "sidebar",
                success: function (e) {
                    t.sidebarExist = e.isExist;
                },
                fail: function () {}
            });
        tt.onHide(function () {
            (e.onHideT = _time.default.ins.serverTime),
                _evts.default.plE.emit({onHide: !0}),
                e.clearStopRecordTimeout();
        });
        tt.onError(function (t) {
            _env.env.mode !== _env.EM.PROD &&
                tt.showModal({
                    title: t.message || "异常报错",
                    content: t.stack || t + "",
                    showCancel: !1,
                    confirmText: "好的"
                });
        });
        tt.canIUse("onMemoryWarning") &&
            tt.onMemoryWarning(function () {
                tt.triggerGC();
            });
        tt.onShareAppMessage(function () {
            return _pConst.SDKConfig.shareData();
        });
        tt.showShareMenu({success: function () {}, fail: function () {}});
        var o = tt.getUpdateManager();
        o.onCheckForUpdate(function () {});
        o.onUpdateFailed(function () {});
        o.onUpdateReady(function () {
            tt.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否重启小游戏？",
                success: function (t) {
                    t.confirm && o.applyUpdate();
                }
            });
        });
    };
    t.prototype.initCommonSetting = function () {
        _uData.default.ins.syncLaunchOption(tt.getLaunchOptionsSync());
        tt.getNetworkType({success: function () {}, fail: function () {}});
        _evts.default.chE.on(function () {});
    };
    t.prototype.initCloud = function () {
        return new Promise(function (t) {
            tt.login({
                success: function () {
                    tt.createCloud &&
                        tt.canIUse("createCloud") &&
                        (_idx.platform.cloud = tt.createCloud({envID: y, serviceID: m}));
                    t(_idx.platform.syncTime());
                },
                fail: function () {
                    t(null);
                }
            });
        });
    };
    t.prototype.setAccountID = function () {
        _env.env.mode;
        _env.EM.TEST;
    };
    t.prototype.login = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function () {
                return [
                    2,
                    new Promise(function (e, o) {
                        tt.login({
                            success: function (n) {
                                if (n && n.code) {
                                    var i =
                                        _idx.platform.cloud ||
                                        (_idx.platform.cloud =
                                            tt.createCloud &&
                                            tt.canIUse("createCloud") &&
                                            tt.createCloud({envID: y, serviceID: m}));
                                    if (t > 2 || !i) return void e(n);
                                    i.callContainer({
                                        path: "/index",
                                        init: {
                                            method: "GET",
                                            header: {"content-type": "application/json"},
                                            timeout: 2e3
                                        },
                                        success: function (t) {
                                            var o = t.data;
                                            if (o)
                                                if ("string" == typeof o)
                                                    try {
                                                        var i = JSON.parse(o);
                                                        n.openid = i.i;
                                                        n.unionid = i.j;
                                                    } catch (t) {}
                                                else (n.openid = o.i), (n.unionid = o.j);
                                            e(n);
                                        },
                                        fail: function () {
                                            return o(_errorCode.errorCode.PF_CLOUD_ERR);
                                        }
                                    });
                                } else console.warn("头条登陆失败：empty code"), o(_errorCode.errorCode.LOGIN_ERR);
                            },
                            fail: function (t) {
                                var e = "";
                                null != t && null != t.errMsg && (e = t.errMsg);
                                console.warn("头条登陆失败：", e);
                                o(_errorCode.errorCode.LOGIN_ERR);
                            }
                        });
                    })
                ];
            });
        });
    };
    t.prototype.syncTime = function () {
        return new Promise(function (t) {
            var e =
                _idx.platform.cloud ||
                (_idx.platform.cloud =
                    tt.createCloud && tt.canIUse("createCloud") && tt.createCloud({envID: y, serviceID: m}));
            e
                ? e.callContainer({
                      path: "/gTime",
                      init: {method: "GET", header: {"content-type": "application/json"}, timeout: 2e3},
                      success: function (e) {
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
                      fail: function () {
                          return t(null);
                      }
                  })
                : t(null);
        });
    };
    t.prototype.reenter = function () {};
    t.prototype.getCloudData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            var e;
            var o;
            var n;
            return __generator(this, function (i) {
                switch (i.label) {
                    case 0:
                        return (t =
                            _idx.platform.cloud ||
                            (_idx.platform.cloud =
                                tt.createCloud &&
                                tt.canIUse("createCloud") &&
                                tt.createCloud({envID: y, serviceID: m})))
                            ? [4, t.database()]
                            : [3, 3];
                    case 1:
                        return (o = i.sent()) ? ((n = o.collection("userData")), [4, _idx.platform._check(n)]) : [3, 3];
                    case 2:
                        (e = i.sent()), (i.label = 3);
                    case 3:
                        return [2, e];
                }
            });
        });
    };
    t.prototype._check = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function () {
                return [
                    2,
                    new Promise(function (e) {
                        t.get("id")
                            .then(function (t) {
                                if (t) {
                                    _idx.platform.isCheck = !0;
                                    var o = t.data;
                                    if (o && o.length) {
                                        var n = o[0];
                                        _idx.platform.dbId = n._id;
                                        try {
                                            var i = JSON.parse(n.uData);
                                            e(i);
                                        } catch (r) {
                                            e(null);
                                        }
                                    } else e(null);
                                } else e(null);
                            })
                            .catch(function () {
                                return e(null);
                            });
                    })
                ];
            });
        });
    };
    t.prototype.setCloudData = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var e;
            var o;
            var n;
            var r;
            var a;
            return __generator(this, function (i) {
                switch (i.label) {
                    case 0:
                        return (e = this).isSaving
                            ? [2]
                            : (o =
                                  e.cloud ||
                                  (e.cloud =
                                      tt.createCloud &&
                                      tt.canIUse("createCloud") &&
                                      tt.createCloud({envID: y, serviceID: m})))
                            ? [4, o.database()]
                            : [3, 2];
                    case 1:
                        if (!(n = i.sent())) return [2];
                        (e.isSaving = !0),
                            (r = n.collection("userData")),
                            (a = Promise.resolve()),
                            e.isCheck || (a = this._check(r)),
                            a
                                .then(function () {
                                    e.dbId
                                        ? r
                                              .doc(e.dbId)
                                              .update({uData: t})
                                              .then(function () {
                                                  _idx.platform.isSaving = !1;
                                              })
                                        : r.add({uData: t}).then(function (t) {
                                              _idx.platform.dbId = t.id;
                                              _idx.platform.isSaving = !1;
                                          });
                                })
                                .catch(function (t) {
                                    return console.error("写入失败", t);
                                }),
                            (i.label = 2);
                    case 2:
                        return [2];
                }
            });
        });
    };
    t.prototype.getStorage = function (t) {
        try {
            var e = tt.getStorageSync(t);
            return null == e || "" == e ? null : JSON.parse(e);
        } catch (o) {}
    };
    t.prototype.setStorage = function (t, e) {
        try {
            tt.setStorageSync(t, JSON.stringify(e));
        } catch (o) {}
    };
    t.prototype.clearStorage = function () {
        try {
            tt.clearStorageSync();
        } catch (t) {}
    };
    t.prototype.removeStorage = function (t) {
        try {
            tt.removeStorageSync(t);
        } catch (e) {}
    };
    t.prototype.trackLogin = function () {};
    t.prototype.trackUserSet = function () {};
    t.prototype.trackUserSetOnce = function () {};
    t.prototype.trackEvent = function () {};
    t.prototype.getSeq = function () {};
    t.prototype.consumeSeq = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
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
    t.prototype.doWatchAD = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var e;
            var o;
            return __generator(this, function () {
                return this.noAd
                    ? [2]
                    : this.noVideo
                    ? (console.error("[error] no video"), [2, Promise.reject(_pConst.VideoFailCode.NO_AD)])
                    : (_evts.default.adE.emit(_c.ADE.VIDEO),
                      (e = this.uniqueVideoUnitId),
                      null == this.videoAd && (this.videoAd = tt.createRewardedVideoAd({adUnitId: e})),
                      this.showLoading(),
                      (o = this),
                      [
                          2,
                          new Promise(function (n, i) {
                              o.videoAd.onClose(function a(s) {
                                  null != o.videoAd && o.videoAd.offClose(a),
                                      null != s && s.isEnded
                                          ? (_evts.default.adE.emit(_c.ADE.VIDEO_END),
                                            o.trackEvent("video", {
                                                step: "complete",
                                                unit: e,
                                                type: t.videoSource,
                                                item: t.item
                                            }),
                                            n(1))
                                          : (_evts.default.adE.emit(_c.ADE.VIDEO_END),
                                            i(_pConst.VideoFailCode.CANCELED));
                              });
                              o.videoAd
                                  .show()
                                  .then(function () {})
                                  .catch(function () {
                                      _evts.default.adE.emit(_c.ADE.VIDEO_END);
                                      o.videoAd.destroy();
                                      o.videoAd = null;
                                      i(_pConst.VideoFailCode.NO_AD);
                                  })
                                  .then(function () {
                                      o.hideLoading();
                                  });
                          })
                      ]);
            });
        });
    };
    t.prototype.doShare = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function () {
                return [2];
            });
        });
    };
    t.prototype._askReShare = function () {};
    t.prototype.canUse = function (t) {
        return _com.default.ins.compareVersion(_idx.platform.getSystemData().SDKVersion, t) >= 0;
    };
    t.prototype.getSystemData = function () {
        if (null == this.systemInfoCache)
            try {
                this.systemInfoCache = tt.getSystemInfoSync();
            } catch (t) {
                return _pConst.DefaultSystemInfo;
            }
        return this.systemInfoCache;
    };
    t.prototype.getSwitches = function () {};
    t.prototype.vibrate = function (t) {
        t == _pConst.VEnum4.SHORT
            ? tt.vibrateShort(null)
            : t == _pConst.VEnum4.LONG && tt.vibrateLong({success: function () {}, fail: function () {}});
    };
    t.prototype.preloadVideo = function () {
        return !1;
    };
    t.prototype.showModal = function (t) {
        return new Promise(function (e) {
            tt.showModal(
                Object.assign(Object.assign({}, t), {
                    success: function (t) {
                        t.confirm ? e(!0) : t.cancel && e(!1);
                    },
                    fail: function () {
                        e(!1);
                    }
                })
            );
        });
    };
    t.prototype.refreshGame = function () {
        try {
            tt.restartMiniProgramSync();
        } catch (t) {
            tt.exitMiniProgram();
        }
    };
    t.prototype.showLoading = function (t) {
        void 0 === t && (t = "加载中");
        this.canUse("1.0.0") && ((this.isLoading = !0), tt.showLoading({title: t, mask: !0}));
    };
    t.prototype.hideLoading = function () {
        this.canUse("1.0.0") && this.isLoading && (tt.hideLoading(), (this.isLoading = !1));
    };
    t.prototype.log = function () {};
    t.prototype.getMenuBounding = function () {};
    t.prototype.createShareImage = function () {};
    t.prototype.preloadInterstitialAD = function () {};
    t.prototype.showInterstitialAD = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function () {
                return [2, null];
            });
        });
    };
    t.prototype.canShowBanner = function () {
        return !1;
    };
    t.prototype.getBannerSize = function () {
        return new cc.Size(0, 0);
    };
    t.prototype.showBanner = function () {};
    t.prototype.hideBanner = function () {};
    t.prototype.getSubscribeCnt = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function () {
                return [2, 0];
            });
        });
    };
    t.prototype.subscribe = function () {};
    t.prototype.initVideoRecorder = function () {
        this.canUse("1.6.1") &&
            ((this.gameRecorder = tt.getGameRecorderManager()),
            this.gameRecorder.onStart(this.onVideoRecordStart.bind(this)),
            this.gameRecorder.onStop(this.onVideoRecordEnd.bind(this)),
            this.gameRecorder.onError(this.onVideoRecordError.bind(this)));
    };
    t.prototype.startVideoRecord = function () {
        try {
            null != this.gameRecorder &&
                ((this.m_bIsRecording = !0),
                this.gameRecorder.start({duration: 0.001 * _pConst.VIDEO_RECORD_LIMIT, isMarkOpen: !1}),
                this.startStopRecordTimeout(_pConst.VIDEO_RECORD_LIMIT));
        } catch (t) {
            this.gameRecorder = null;
        }
    };
    t.prototype.pauseVideoRecord = function () {
        null != this.gameRecorder && this.m_bIsRecording && (this.gameRecorder.pause(), this.clearStopRecordTimeout());
    };
    t.prototype.resumeVideoRecord = function () {
        null != this.gameRecorder &&
            this.m_bIsRecording &&
            (this.gameRecorder.resume(),
            this.startStopRecordTimeout(Math.max(1e3, _pConst.VIDEO_RECORD_LIMIT - this.m_nRecordT)));
    };
    t.prototype.stopVideoRecord = function () {
        null != this.gameRecorder &&
            (this.clearStopRecordTimeout(), this.gameRecorder.stop(), (this.m_bIsRecording = !1));
    };
    t.prototype.startStopRecordTimeout = function (t) {
        this.m_bIsRecording &&
            ((this.m_nAutoStopVideoId = setTimeout(this.autoStopVideoRecord.bind(this), t - 1e3)),
            (this.m_nStartRecordT = new Date().getTime()));
    };
    t.prototype.clearStopRecordTimeout = function () {
        this.m_bIsRecording &&
            (0 !== this.m_nAutoStopVideoId && clearTimeout(this.m_nAutoStopVideoId),
            (this.m_nAutoStopVideoId = 0),
            (this.m_nRecordT += new Date().getTime() - this.m_nStartRecordT),
            (this.m_nStartRecordT = 0));
    };
    t.prototype.autoStopVideoRecord = function () {
        this.m_nAutoStopVideoId = 0;
        this.stopVideoRecord();
        setTimeout(this.startVideoRecord.bind(this), 100);
    };
    t.prototype.onVideoRecordStart = function () {
        this.m_strVideoPath = "";
        this.m_nRecordT = 0;
    };
    t.prototype.onVideoRecordEnd = function (t) {
        var e;
        null != t && null != t.videoPath && (e = this.m_strVideoPath = t.videoPath);
        e && _evts.default.opE.emit({action: _evts.default.SHOWVIDEOSHARE});
    };
    t.prototype.onVideoRecordError = function () {};
    t.prototype.hasVideoRecord = function () {
        return null != this.m_strVideoPath && "" !== this.m_strVideoPath;
    };
    t.prototype.shareVideoRecord = function () {
        var t;
        var e = new Promise(function (e) {
            t = e;
        });
        if (this.hasVideoRecord() && tt.shareAppMessage) {
            var o = [_env.env.name, "女生游戏推荐", "脑洞游戏", "烧脑益智"];
            var n = _pConst.SDKConfig.shareData();
            tt.shareAppMessage({
                title: "我欲修仙",
                channel: "video",
                desc: "来挑战一下",
                query: n.query,
                extra: {withVideoId: !0, videoPath: this.m_strVideoPath, video_title: n.title, videoTopics: o},
                success: function () {
                    _tipMgr.default.ins.showTip("分享成功");
                    t(1);
                },
                fail: function () {
                    _tipMgr.default.ins.showTip("分享失败");
                    t(0);
                }
            });
        } else t(0);
        return e;
    };
    t.prototype.uploadAdEvent = function () {};
    t.prototype.PostMessage = function (t, e, o) {
        tt.getOpenDataContext().postMessage({Even: t, Value1: e, Value2: o});
    };
    t.prototype.SetUserCloudStorage = function (t, e, o) {
        var n = new Date();
        tt.setUserCloudStorage({
            KVDataList: [
                {
                    key: "level",
                    value: t.toString() + "#" + n.getTime().toString() + "#" + e.toString() + "#" + o.toString()
                }
            ],
            success: function () {},
            fail: function () {}
        });
    };
    t.prototype.GetOpenDataContext = function () {
        return tt.getOpenDataContext();
    };
    t.prototype.addShortcut = function () {
        tt.addShortcut({
            success: function () {
                _evts.default.opE.emit({action: _evts.default.ADD_DESKTOP, data: !0});
            },
            fail: function () {
                _evts.default.opE.emit({action: _evts.default.ADD_DESKTOP, data: !1});
                _tipMgr.default.ins.showTip("添加失败");
            }
        });
    };
    t.prototype.share = function () {
        return new Promise(function (t) {
            var e = _pConst.SDKConfig.shareData();
            tt.shareAppMessage({
                title: e.title,
                imageUrl: e.imageUrl,
                query: e.query,
                channel: "invite",
                success: function (e) {
                    t(e.data);
                },
                fail: function () {
                    t(0);
                }
            });
        });
    };
    t.prototype.getUserInfo = function () {
        var t = this;
        return new Promise(function (e, o) {
            if (tt.canIUse("getUserInfo")) {
                var n = t;
                tt.getSetting({
                    success: function (t) {
                        t.authSetting["scope.userInfo"]
                            ? n._getUserInfo(e, o)
                            : !1 === t.authSetting["scope.userInfo"]
                            ? n.showRefuseTip(e, o)
                            : n._getUserInfo(e, o);
                    },
                    fail: function () {
                        o();
                    }
                });
            } else o();
        });
    };
    t.prototype.showRefuseTip = function (t, e) {
        if (
            this.showModal({
                title: "友情提示",
                content: "申请使用您的用户信息，展示排行榜。",
                confirmText: "允许",
                cancelText: "拒绝"
            })
        ) {
            var o = this;
            tt.openSetting({
                success: function () {
                    o._getUserInfo(t, e);
                },
                fail: function () {
                    e();
                }
            });
        } else e();
    };
    t.prototype._getUserInfo = function (t, e) {
        tt.getUserInfo({
            success: function (e) {
                t(e.userInfo);
            },
            fail: function () {
                e();
            }
        });
    };
    t.prototype.navigateToScene = function (t) {
        void 0 === t && (t = "sidebar");
        tt.navigateToScene({scene: t, success: function () {}, fail: function () {}});
    };
    t.prototype.reportEvent = function (t, e) {
        void 0 === e && (e = {});
        tt.reportAnalytics(t, e);
    };
    t.prototype.setFriendRankData = function (t, e) {
        var o;
        tt &&
            (null === (o = tt.setImRankData) ||
                void 0 === o ||
                o.call(tt, {
                    dataType: 0,
                    value: t.toString(),
                    zoneId: e,
                    success: function () {},
                    fail: function () {}
                }));
    };
    t.prototype.showFriendRank = function (t) {
        if (tt)
            if (tt.getImRankList) {
                var e = t === _pConst.SDKConfig.ttZoneId.normal ? "关" : "分";
                var o = t === _pConst.SDKConfig.ttZoneId.normal ? "主线排行" : "好友趣味赛排行";
                var n = (_pConst.SDKConfig.ttZoneId.normal, "all");
                var i = t === _pConst.SDKConfig.ttZoneId.normal ? "all" : "friend";
                tt.getImRankList({
                    relationType: i,
                    dataType: 0,
                    rankType: n,
                    suffix: e,
                    rankTitle: o,
                    zoneId: t,
                    success: function () {},
                    fail: function () {}
                });
            } else
                tt.showModal({
                    title: "提示",
                    content: "当前客户端版本过低，无法使用该功能，请升级客户端或关闭后重启更新。"
                });
    };
    t.prototype.payment = function (t, e, o, n) {
        var i = this;
        void 0 === t && (t = "1");
        void 0 === e && (e = 1);
        void 0 === o && (o = 0);
        var r = _idx.platform.getSystemData();
        var a = "android";
        r && -1 != r.system.indexOf("iOS") && (a = "iOS");
        return new Promise(function (r, s) {
            i.checkSession()
                .then(function () {
                    var i = _request.default.ins.openId;
                    var c = _time.default.ins.serverTime;
                    var l = t + i + c;
                    var u = {};
                    u.cp_orderno = l;
                    u.creation_time = c;
                    u.openid = i;
                    u.money = e;
                    u.gift_id = t;
                    u.gift_num = 1;
                    u.status = 0;
                    u.is_double = o;
                    u.package = n;
                    u.phone = a;
                    var p = {};
                    p.openid = i;
                    p.gift_id = t;
                    p.gift_num = 1;
                    p.money = e;
                    p.is_double = o;
                    p.package = n;
                    p.phone = a;
                    _request.default.ins
                        .getUserToken()
                        .then(function (t) {
                            if (t) {
                                p.token = t;
                                var o = JSON.stringify(p);
                                tt.requestGamePayment({
                                    mode: "game",
                                    env: 0,
                                    currencyType: "CNY",
                                    platform: a,
                                    buyQuantity: e,
                                    zoneId: "1",
                                    customId: l,
                                    extraInfo: o,
                                    success: function () {
                                        u.status = 1;
                                        _request.default.ins.paymentResult(u);
                                        r(1);
                                    },
                                    fail: function (t) {
                                        u.status = 2;
                                        var e = (u.errCode = (t && t.errCode) || 0);
                                        _request.default.ins.paymentResult(u);
                                        s("支付失败: " + e);
                                    },
                                    complete: function () {}
                                });
                            }
                        })
                        .catch(function () {});
                })
                .catch(function (t) {
                    s("支付异常: " + t);
                });
        });
    };
    t.prototype.checkSession = function () {
        var t = this;
        return new Promise(function (e, o) {
            tt.checkSession({
                success: function () {
                    e(1);
                },
                fail: function () {
                    t.login(0)
                        .then(function () {
                            e(1);
                        })
                        .catch(function (t) {
                            o(t);
                        });
                }
            });
        });
    };
    t.prototype.openService = function (t) {
        tt.openCustomerServiceConversation &&
            tt.openCustomerServiceConversation({type: t, success: function () {}, fail: function () {}});
    };
    return t;
})();
exports.default = _;
