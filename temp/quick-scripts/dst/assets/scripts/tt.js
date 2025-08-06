
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/tt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b084hHrupN56MsxKfnNQhM', 'tt');
// scripts/tt.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

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

var _ = function () {
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
    get: function get() {
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
    this.version = tt.getEnvInfoSync && (null === (e = null === (t = tt.getEnvInfoSync()) || void 0 === t ? void 0 : t.microapp) || void 0 === e ? void 0 : e.mpVersion);
  };

  t.prototype.initTga = function () {};

  t.prototype.isSwitchedInitd = function () {
    return this.switchesInitd;
  };

  t.prototype.initByteDanceListener = function () {
    var t = this;
    var e = this;
    tt.onShow(function (t) {
      _uData["default"].ins.syncLaunchOption(t), e.isSharing || e.reenter(), e.startStopRecordTimeout(Math.max(1e3, _pConst.VIDEO_RECORD_LIMIT - e.m_nRecordT)), e.bySlider = "homepage" == t.launch_from && "sidebar_card" == t.location, _evts["default"].opE.emit({
        action: _evts["default"].Slider_Chg
      }), Math.abs(Date.now() / 1e3 - e.onHideT) > 300 ? e.syncTime().then(function (t) {
        t && _time["default"].ins.sync(t), _evts["default"].plE.emit({
          onShow: !0,
          isSharing: e.isSharing
        });
      }) : _evts["default"].plE.emit({
        onShow: !0,
        isSharing: e.isSharing
      });
    });
    tt.checkScene && tt.checkScene({
      scene: "sidebar",
      success: function success(e) {
        t.sidebarExist = e.isExist;
      },
      fail: function fail() {}
    });
    tt.onHide(function () {
      e.onHideT = _time["default"].ins.serverTime, _evts["default"].plE.emit({
        onHide: !0
      }), e.clearStopRecordTimeout();
    });
    tt.onError(function (t) {
      _env.env.mode !== _env.EM.PROD && tt.showModal({
        title: t.message || "异常报错",
        content: t.stack || t + "",
        showCancel: !1,
        confirmText: "好的"
      });
    });
    tt.canIUse("onMemoryWarning") && tt.onMemoryWarning(function () {
      tt.triggerGC();
    });
    tt.onShareAppMessage(function () {
      return _pConst.SDKConfig.shareData();
    });
    tt.showShareMenu({
      success: function success() {},
      fail: function fail() {}
    });
    var o = tt.getUpdateManager();
    o.onCheckForUpdate(function () {});
    o.onUpdateFailed(function () {});
    o.onUpdateReady(function () {
      tt.showModal({
        title: "更新提示",
        content: "新版本已经准备好，是否重启小游戏？",
        success: function success(t) {
          t.confirm && o.applyUpdate();
        }
      });
    });
  };

  t.prototype.initCommonSetting = function () {
    _uData["default"].ins.syncLaunchOption(tt.getLaunchOptionsSync());

    tt.getNetworkType({
      success: function success() {},
      fail: function fail() {}
    });

    _evts["default"].chE.on(function () {});
  };

  t.prototype.initCloud = function () {
    return new Promise(function (t) {
      tt.login({
        success: function success() {
          tt.createCloud && tt.canIUse("createCloud") && (_idx.platform.cloud = tt.createCloud({
            envID: y,
            serviceID: m
          }));
          t(_idx.platform.syncTime());
        },
        fail: function fail() {
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
        return [2, new Promise(function (e, o) {
          tt.login({
            success: function success(n) {
              if (n && n.code) {
                var i = _idx.platform.cloud || (_idx.platform.cloud = tt.createCloud && tt.canIUse("createCloud") && tt.createCloud({
                  envID: y,
                  serviceID: m
                }));
                if (t > 2 || !i) return void e(n);
                i.callContainer({
                  path: "/index",
                  init: {
                    method: "GET",
                    header: {
                      "content-type": "application/json"
                    },
                    timeout: 2e3
                  },
                  success: function success(t) {
                    var o = t.data;
                    if (o) if ("string" == typeof o) try {
                      var i = JSON.parse(o);
                      n.openid = i.i;
                      n.unionid = i.j;
                    } catch (t) {} else n.openid = o.i, n.unionid = o.j;
                    e(n);
                  },
                  fail: function fail() {
                    return o(_errorCode.errorCode.PF_CLOUD_ERR);
                  }
                });
              } else console.warn("头条登陆失败：empty code"), o(_errorCode.errorCode.LOGIN_ERR);
            },
            fail: function fail(t) {
              var e = "";
              null != t && null != t.errMsg && (e = t.errMsg);
              console.warn("头条登陆失败：", e);
              o(_errorCode.errorCode.LOGIN_ERR);
            }
          });
        })];
      });
    });
  };

  t.prototype.syncTime = function () {
    return new Promise(function (t) {
      var e = _idx.platform.cloud || (_idx.platform.cloud = tt.createCloud && tt.canIUse("createCloud") && tt.createCloud({
        envID: y,
        serviceID: m
      }));
      e ? e.callContainer({
        path: "/gTime",
        init: {
          method: "GET",
          header: {
            "content-type": "application/json"
          },
          timeout: 2e3
        },
        success: function success(e) {
          var o;
          var n = e.data;
          if (n) if ("string" == typeof n) try {
            o = JSON.parse(n).t;
          } catch (e) {} else o = n.t;
          t(o || null);
        },
        fail: function fail() {
          return t(null);
        }
      }) : t(null);
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
            return (t = _idx.platform.cloud || (_idx.platform.cloud = tt.createCloud && tt.canIUse("createCloud") && tt.createCloud({
              envID: y,
              serviceID: m
            }))) ? [4, t.database()] : [3, 3];

          case 1:
            return (o = i.sent()) ? (n = o.collection("userData"), [4, _idx.platform._check(n)]) : [3, 3];

          case 2:
            e = i.sent(), i.label = 3;

          case 3:
            return [2, e];
        }
      });
    });
  };

  t.prototype._check = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function () {
        return [2, new Promise(function (e) {
          t.get("id").then(function (t) {
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
          })["catch"](function () {
            return e(null);
          });
        })];
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
            return (e = this).isSaving ? [2] : (o = e.cloud || (e.cloud = tt.createCloud && tt.canIUse("createCloud") && tt.createCloud({
              envID: y,
              serviceID: m
            }))) ? [4, o.database()] : [3, 2];

          case 1:
            if (!(n = i.sent())) return [2];
            e.isSaving = !0, r = n.collection("userData"), a = Promise.resolve(), e.isCheck || (a = this._check(r)), a.then(function () {
              e.dbId ? r.doc(e.dbId).update({
                uData: t
              }).then(function () {
                _idx.platform.isSaving = !1;
              }) : r.add({
                uData: t
              }).then(function (t) {
                _idx.platform.dbId = t.id;
                _idx.platform.isSaving = !1;
              });
            })["catch"](function (t) {
              return console.error("写入失败", t);
            }), i.label = 2;

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
            e.sent(), this.doShare(), e.label = 2;

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
        return this.noAd ? [2] : this.noVideo ? (console.error("[error] no video"), [2, Promise.reject(_pConst.VideoFailCode.NO_AD)]) : (_evts["default"].adE.emit(_c.ADE.VIDEO), e = this.uniqueVideoUnitId, null == this.videoAd && (this.videoAd = tt.createRewardedVideoAd({
          adUnitId: e
        })), this.showLoading(), o = this, [2, new Promise(function (n, i) {
          o.videoAd.onClose(function a(s) {
            null != o.videoAd && o.videoAd.offClose(a), null != s && s.isEnded ? (_evts["default"].adE.emit(_c.ADE.VIDEO_END), o.trackEvent("video", {
              step: "complete",
              unit: e,
              type: t.videoSource,
              item: t.item
            }), n(1)) : (_evts["default"].adE.emit(_c.ADE.VIDEO_END), i(_pConst.VideoFailCode.CANCELED));
          });
          o.videoAd.show().then(function () {})["catch"](function () {
            _evts["default"].adE.emit(_c.ADE.VIDEO_END);

            o.videoAd.destroy();
            o.videoAd = null;
            i(_pConst.VideoFailCode.NO_AD);
          }).then(function () {
            o.hideLoading();
          });
        })]);
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
    return _com["default"].ins.compareVersion(_idx.platform.getSystemData().SDKVersion, t) >= 0;
  };

  t.prototype.getSystemData = function () {
    if (null == this.systemInfoCache) try {
      this.systemInfoCache = tt.getSystemInfoSync();
    } catch (t) {
      return _pConst.DefaultSystemInfo;
    }
    return this.systemInfoCache;
  };

  t.prototype.getSwitches = function () {};

  t.prototype.vibrate = function (t) {
    t == _pConst.VEnum4.SHORT ? tt.vibrateShort(null) : t == _pConst.VEnum4.LONG && tt.vibrateLong({
      success: function success() {},
      fail: function fail() {}
    });
  };

  t.prototype.preloadVideo = function () {
    return !1;
  };

  t.prototype.showModal = function (t) {
    return new Promise(function (e) {
      tt.showModal(Object.assign(Object.assign({}, t), {
        success: function success(t) {
          t.confirm ? e(!0) : t.cancel && e(!1);
        },
        fail: function fail() {
          e(!1);
        }
      }));
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
    this.canUse("1.0.0") && (this.isLoading = !0, tt.showLoading({
      title: t,
      mask: !0
    }));
  };

  t.prototype.hideLoading = function () {
    this.canUse("1.0.0") && this.isLoading && (tt.hideLoading(), this.isLoading = !1);
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
    this.canUse("1.6.1") && (this.gameRecorder = tt.getGameRecorderManager(), this.gameRecorder.onStart(this.onVideoRecordStart.bind(this)), this.gameRecorder.onStop(this.onVideoRecordEnd.bind(this)), this.gameRecorder.onError(this.onVideoRecordError.bind(this)));
  };

  t.prototype.startVideoRecord = function () {
    try {
      null != this.gameRecorder && (this.m_bIsRecording = !0, this.gameRecorder.start({
        duration: 0.001 * _pConst.VIDEO_RECORD_LIMIT,
        isMarkOpen: !1
      }), this.startStopRecordTimeout(_pConst.VIDEO_RECORD_LIMIT));
    } catch (t) {
      this.gameRecorder = null;
    }
  };

  t.prototype.pauseVideoRecord = function () {
    null != this.gameRecorder && this.m_bIsRecording && (this.gameRecorder.pause(), this.clearStopRecordTimeout());
  };

  t.prototype.resumeVideoRecord = function () {
    null != this.gameRecorder && this.m_bIsRecording && (this.gameRecorder.resume(), this.startStopRecordTimeout(Math.max(1e3, _pConst.VIDEO_RECORD_LIMIT - this.m_nRecordT)));
  };

  t.prototype.stopVideoRecord = function () {
    null != this.gameRecorder && (this.clearStopRecordTimeout(), this.gameRecorder.stop(), this.m_bIsRecording = !1);
  };

  t.prototype.startStopRecordTimeout = function (t) {
    this.m_bIsRecording && (this.m_nAutoStopVideoId = setTimeout(this.autoStopVideoRecord.bind(this), t - 1e3), this.m_nStartRecordT = new Date().getTime());
  };

  t.prototype.clearStopRecordTimeout = function () {
    this.m_bIsRecording && (0 !== this.m_nAutoStopVideoId && clearTimeout(this.m_nAutoStopVideoId), this.m_nAutoStopVideoId = 0, this.m_nRecordT += new Date().getTime() - this.m_nStartRecordT, this.m_nStartRecordT = 0);
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
    e && _evts["default"].opE.emit({
      action: _evts["default"].SHOWVIDEOSHARE
    });
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
        extra: {
          withVideoId: !0,
          videoPath: this.m_strVideoPath,
          video_title: n.title,
          videoTopics: o
        },
        success: function success() {
          _tipMgr["default"].ins.showTip("分享成功");

          t(1);
        },
        fail: function fail() {
          _tipMgr["default"].ins.showTip("分享失败");

          t(0);
        }
      });
    } else t(0);

    return e;
  };

  t.prototype.uploadAdEvent = function () {};

  t.prototype.PostMessage = function (t, e, o) {
    tt.getOpenDataContext().postMessage({
      Even: t,
      Value1: e,
      Value2: o
    });
  };

  t.prototype.SetUserCloudStorage = function (t, e, o) {
    var n = new Date();
    tt.setUserCloudStorage({
      KVDataList: [{
        key: "level",
        value: t.toString() + "#" + n.getTime().toString() + "#" + e.toString() + "#" + o.toString()
      }],
      success: function success() {},
      fail: function fail() {}
    });
  };

  t.prototype.GetOpenDataContext = function () {
    return tt.getOpenDataContext();
  };

  t.prototype.addShortcut = function () {
    tt.addShortcut({
      success: function success() {
        _evts["default"].opE.emit({
          action: _evts["default"].ADD_DESKTOP,
          data: !0
        });
      },
      fail: function fail() {
        _evts["default"].opE.emit({
          action: _evts["default"].ADD_DESKTOP,
          data: !1
        });

        _tipMgr["default"].ins.showTip("添加失败");
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
        success: function success(e) {
          t(e.data);
        },
        fail: function fail() {
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
          success: function success(t) {
            t.authSetting["scope.userInfo"] ? n._getUserInfo(e, o) : !1 === t.authSetting["scope.userInfo"] ? n.showRefuseTip(e, o) : n._getUserInfo(e, o);
          },
          fail: function fail() {
            o();
          }
        });
      } else o();
    });
  };

  t.prototype.showRefuseTip = function (t, e) {
    if (this.showModal({
      title: "友情提示",
      content: "申请使用您的用户信息，展示排行榜。",
      confirmText: "允许",
      cancelText: "拒绝"
    })) {
      var o = this;
      tt.openSetting({
        success: function success() {
          o._getUserInfo(t, e);
        },
        fail: function fail() {
          e();
        }
      });
    } else e();
  };

  t.prototype._getUserInfo = function (t, e) {
    tt.getUserInfo({
      success: function success(e) {
        t(e.userInfo);
      },
      fail: function fail() {
        e();
      }
    });
  };

  t.prototype.navigateToScene = function (t) {
    void 0 === t && (t = "sidebar");
    tt.navigateToScene({
      scene: t,
      success: function success() {},
      fail: function fail() {}
    });
  };

  t.prototype.reportEvent = function (t, e) {
    void 0 === e && (e = {});
    tt.reportAnalytics(t, e);
  };

  t.prototype.setFriendRankData = function (t, e) {
    var o;
    tt && (null === (o = tt.setImRankData) || void 0 === o || o.call(tt, {
      dataType: 0,
      value: t.toString(),
      zoneId: e,
      success: function success() {},
      fail: function fail() {}
    }));
  };

  t.prototype.showFriendRank = function (t) {
    if (tt) if (tt.getImRankList) {
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
        success: function success() {},
        fail: function fail() {}
      });
    } else tt.showModal({
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
      i.checkSession().then(function () {
        var i = _request["default"].ins.openId;
        var c = _time["default"].ins.serverTime;
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
        u["package"] = n;
        u.phone = a;
        var p = {};
        p.openid = i;
        p.gift_id = t;
        p.gift_num = 1;
        p.money = e;
        p.is_double = o;
        p["package"] = n;
        p.phone = a;

        _request["default"].ins.getUserToken().then(function (t) {
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
              success: function success() {
                u.status = 1;

                _request["default"].ins.paymentResult(u);

                r(1);
              },
              fail: function fail(t) {
                u.status = 2;
                var e = u.errCode = t && t.errCode || 0;

                _request["default"].ins.paymentResult(u);

                s("支付失败: " + e);
              },
              complete: function complete() {}
            });
          }
        })["catch"](function () {});
      })["catch"](function (t) {
        s("支付异常: " + t);
      });
    });
  };

  t.prototype.checkSession = function () {
    var t = this;
    return new Promise(function (e, o) {
      tt.checkSession({
        success: function success() {
          e(1);
        },
        fail: function fail() {
          t.login(0).then(function () {
            e(1);
          })["catch"](function (t) {
            o(t);
          });
        }
      });
    });
  };

  t.prototype.openService = function (t) {
    tt.openCustomerServiceConversation && tt.openCustomerServiceConversation({
      type: t,
      success: function success() {},
      fail: function fail() {}
    });
  };

  return t;
}();

exports["default"] = _;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdHQuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfYyIsInJlcXVpcmUiLCJfY29tIiwiX2VudiIsIl9lcnJvckNvZGUiLCJfZXZ0cyIsIl9pZHgiLCJfcENvbnN0IiwiX3JlcXVlc3QiLCJfdGltZSIsIl91RGF0YSIsIl90aXBNZ3IiLCJ5IiwibSIsInYiLCJfIiwidCIsImlzU2hhcmluZyIsInNka1N3aXRjaCIsIkRlZmF1bHRTREtTd2l0Y2giLCJ2aWRlb0NoZWNrZWRNYXAiLCJ2aWRlb0NoZWNrZWRMYXN0VCIsInVuaXF1ZVZpZGVvVW5pdElkIiwiaXNMb2FkaW5nIiwiaXNMb2dnZWRJbiIsIm9uSGlkZVQiLCJub0FkIiwibm9WaWRlbyIsImxhc3RJbnRlckFkU2hvd1QiLCJzd2l0Y2hlc0luaXRkIiwiZ2FtZVJlY29yZGVyIiwidGEiLCJtX25TdGFydFJlY29yZFQiLCJtX25SZWNvcmRUIiwibV9iSXNSZWNvcmRpbmciLCJtX25BdXRvU3RvcFZpZGVvSWQiLCJtX3N0clZpZGVvUGF0aCIsIm9uS2V5Ym9hcmRDb21wbGV0ZSIsInR0IiwicHJvdG90eXBlIiwiZ2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInN0cmluZyIsIlBGQ29kZSIsIkJ5dGVkYW5jZSIsImluaXQiLCJpbml0VmVyc2lvbiIsImluaXRCeXRlRGFuY2VMaXN0ZW5lciIsImluaXRDb21tb25TZXR0aW5nIiwiaW5pdFRnYSIsImluaXRWaWRlb1JlY29yZGVyIiwidXBsb2FkQWRFdmVudCIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiZSIsInNjZW5lIiwiYnlTbGlkZXIiLCJ2ZXJzaW9uIiwiZ2V0RW52SW5mb1N5bmMiLCJtaWNyb2FwcCIsIm1wVmVyc2lvbiIsImlzU3dpdGNoZWRJbml0ZCIsIm9uU2hvdyIsImlucyIsInN5bmNMYXVuY2hPcHRpb24iLCJyZWVudGVyIiwic3RhcnRTdG9wUmVjb3JkVGltZW91dCIsIk1hdGgiLCJtYXgiLCJWSURFT19SRUNPUkRfTElNSVQiLCJsYXVuY2hfZnJvbSIsImxvY2F0aW9uIiwib3BFIiwiZW1pdCIsImFjdGlvbiIsIlNsaWRlcl9DaGciLCJhYnMiLCJEYXRlIiwibm93Iiwic3luY1RpbWUiLCJ0aGVuIiwic3luYyIsInBsRSIsImNoZWNrU2NlbmUiLCJzdWNjZXNzIiwic2lkZWJhckV4aXN0IiwiaXNFeGlzdCIsImZhaWwiLCJvbkhpZGUiLCJzZXJ2ZXJUaW1lIiwiY2xlYXJTdG9wUmVjb3JkVGltZW91dCIsIm9uRXJyb3IiLCJlbnYiLCJtb2RlIiwiRU0iLCJQUk9EIiwic2hvd01vZGFsIiwidGl0bGUiLCJtZXNzYWdlIiwiY29udGVudCIsInN0YWNrIiwic2hvd0NhbmNlbCIsImNvbmZpcm1UZXh0IiwiY2FuSVVzZSIsIm9uTWVtb3J5V2FybmluZyIsInRyaWdnZXJHQyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwiU0RLQ29uZmlnIiwic2hhcmVEYXRhIiwic2hvd1NoYXJlTWVudSIsIm8iLCJnZXRVcGRhdGVNYW5hZ2VyIiwib25DaGVja0ZvclVwZGF0ZSIsIm9uVXBkYXRlRmFpbGVkIiwib25VcGRhdGVSZWFkeSIsImNvbmZpcm0iLCJhcHBseVVwZGF0ZSIsImdldE5ldHdvcmtUeXBlIiwiY2hFIiwib24iLCJpbml0Q2xvdWQiLCJQcm9taXNlIiwibG9naW4iLCJjcmVhdGVDbG91ZCIsInBsYXRmb3JtIiwiY2xvdWQiLCJlbnZJRCIsInNlcnZpY2VJRCIsInNldEFjY291bnRJRCIsIlRFU1QiLCJfX2F3YWl0ZXIiLCJfX2dlbmVyYXRvciIsIm4iLCJjb2RlIiwiaSIsImNhbGxDb250YWluZXIiLCJwYXRoIiwibWV0aG9kIiwiaGVhZGVyIiwidGltZW91dCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJvcGVuaWQiLCJ1bmlvbmlkIiwiaiIsImVycm9yQ29kZSIsIlBGX0NMT1VEX0VSUiIsImNvbnNvbGUiLCJ3YXJuIiwiTE9HSU5fRVJSIiwiZXJyTXNnIiwiZ2V0Q2xvdWREYXRhIiwibGFiZWwiLCJkYXRhYmFzZSIsInNlbnQiLCJjb2xsZWN0aW9uIiwiX2NoZWNrIiwiaXNDaGVjayIsImxlbmd0aCIsImRiSWQiLCJfaWQiLCJ1RGF0YSIsInIiLCJzZXRDbG91ZERhdGEiLCJhIiwiaXNTYXZpbmciLCJyZXNvbHZlIiwiZG9jIiwidXBkYXRlIiwiYWRkIiwiaWQiLCJlcnJvciIsImdldFN0b3JhZ2UiLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2UiLCJzZXRTdG9yYWdlU3luYyIsInN0cmluZ2lmeSIsImNsZWFyU3RvcmFnZSIsImNsZWFyU3RvcmFnZVN5bmMiLCJyZW1vdmVTdG9yYWdlIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJ0cmFja0xvZ2luIiwidHJhY2tVc2VyU2V0IiwidHJhY2tVc2VyU2V0T25jZSIsInRyYWNrRXZlbnQiLCJnZXRTZXEiLCJjb25zdW1lU2VxIiwic2VxdWVuY2VJbmZvIiwidHlwZSIsIlNURFNlcVR5cGUiLCJWSURFTyIsImRvV2F0Y2hBRCIsImRvU2hhcmUiLCJyZWplY3QiLCJWaWRlb0ZhaWxDb2RlIiwiTk9fQUQiLCJhZEUiLCJBREUiLCJ2aWRlb0FkIiwiY3JlYXRlUmV3YXJkZWRWaWRlb0FkIiwiYWRVbml0SWQiLCJzaG93TG9hZGluZyIsIm9uQ2xvc2UiLCJzIiwib2ZmQ2xvc2UiLCJpc0VuZGVkIiwiVklERU9fRU5EIiwic3RlcCIsInVuaXQiLCJ2aWRlb1NvdXJjZSIsIml0ZW0iLCJDQU5DRUxFRCIsInNob3ciLCJkZXN0cm95IiwiaGlkZUxvYWRpbmciLCJfYXNrUmVTaGFyZSIsImNhblVzZSIsImNvbXBhcmVWZXJzaW9uIiwiZ2V0U3lzdGVtRGF0YSIsIlNES1ZlcnNpb24iLCJzeXN0ZW1JbmZvQ2FjaGUiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIkRlZmF1bHRTeXN0ZW1JbmZvIiwiZ2V0U3dpdGNoZXMiLCJ2aWJyYXRlIiwiVkVudW00IiwiU0hPUlQiLCJ2aWJyYXRlU2hvcnQiLCJMT05HIiwidmlicmF0ZUxvbmciLCJwcmVsb2FkVmlkZW8iLCJhc3NpZ24iLCJjYW5jZWwiLCJyZWZyZXNoR2FtZSIsInJlc3RhcnRNaW5pUHJvZ3JhbVN5bmMiLCJleGl0TWluaVByb2dyYW0iLCJtYXNrIiwibG9nIiwiZ2V0TWVudUJvdW5kaW5nIiwiY3JlYXRlU2hhcmVJbWFnZSIsInByZWxvYWRJbnRlcnN0aXRpYWxBRCIsInNob3dJbnRlcnN0aXRpYWxBRCIsImNhblNob3dCYW5uZXIiLCJnZXRCYW5uZXJTaXplIiwiY2MiLCJTaXplIiwic2hvd0Jhbm5lciIsImhpZGVCYW5uZXIiLCJnZXRTdWJzY3JpYmVDbnQiLCJzdWJzY3JpYmUiLCJnZXRHYW1lUmVjb3JkZXJNYW5hZ2VyIiwib25TdGFydCIsIm9uVmlkZW9SZWNvcmRTdGFydCIsImJpbmQiLCJvblN0b3AiLCJvblZpZGVvUmVjb3JkRW5kIiwib25WaWRlb1JlY29yZEVycm9yIiwic3RhcnRWaWRlb1JlY29yZCIsInN0YXJ0IiwiZHVyYXRpb24iLCJpc01hcmtPcGVuIiwicGF1c2VWaWRlb1JlY29yZCIsInBhdXNlIiwicmVzdW1lVmlkZW9SZWNvcmQiLCJyZXN1bWUiLCJzdG9wVmlkZW9SZWNvcmQiLCJzdG9wIiwic2V0VGltZW91dCIsImF1dG9TdG9wVmlkZW9SZWNvcmQiLCJnZXRUaW1lIiwiY2xlYXJUaW1lb3V0IiwidmlkZW9QYXRoIiwiU0hPV1ZJREVPU0hBUkUiLCJoYXNWaWRlb1JlY29yZCIsInNoYXJlVmlkZW9SZWNvcmQiLCJzaGFyZUFwcE1lc3NhZ2UiLCJuYW1lIiwiY2hhbm5lbCIsImRlc2MiLCJxdWVyeSIsImV4dHJhIiwid2l0aFZpZGVvSWQiLCJ2aWRlb190aXRsZSIsInZpZGVvVG9waWNzIiwic2hvd1RpcCIsIlBvc3RNZXNzYWdlIiwiZ2V0T3BlbkRhdGFDb250ZXh0IiwicG9zdE1lc3NhZ2UiLCJFdmVuIiwiVmFsdWUxIiwiVmFsdWUyIiwiU2V0VXNlckNsb3VkU3RvcmFnZSIsInNldFVzZXJDbG91ZFN0b3JhZ2UiLCJLVkRhdGFMaXN0Iiwia2V5IiwidG9TdHJpbmciLCJHZXRPcGVuRGF0YUNvbnRleHQiLCJhZGRTaG9ydGN1dCIsIkFERF9ERVNLVE9QIiwic2hhcmUiLCJpbWFnZVVybCIsImdldFVzZXJJbmZvIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwiX2dldFVzZXJJbmZvIiwic2hvd1JlZnVzZVRpcCIsImNhbmNlbFRleHQiLCJvcGVuU2V0dGluZyIsInVzZXJJbmZvIiwibmF2aWdhdGVUb1NjZW5lIiwicmVwb3J0RXZlbnQiLCJyZXBvcnRBbmFseXRpY3MiLCJzZXRGcmllbmRSYW5rRGF0YSIsInNldEltUmFua0RhdGEiLCJjYWxsIiwiZGF0YVR5cGUiLCJ6b25lSWQiLCJzaG93RnJpZW5kUmFuayIsImdldEltUmFua0xpc3QiLCJ0dFpvbmVJZCIsIm5vcm1hbCIsInJlbGF0aW9uVHlwZSIsInJhbmtUeXBlIiwic3VmZml4IiwicmFua1RpdGxlIiwicGF5bWVudCIsInN5c3RlbSIsImluZGV4T2YiLCJjaGVja1Nlc3Npb24iLCJvcGVuSWQiLCJjIiwibCIsInUiLCJjcF9vcmRlcm5vIiwiY3JlYXRpb25fdGltZSIsIm1vbmV5IiwiZ2lmdF9pZCIsImdpZnRfbnVtIiwic3RhdHVzIiwiaXNfZG91YmxlIiwicGhvbmUiLCJwIiwiZ2V0VXNlclRva2VuIiwidG9rZW4iLCJyZXF1ZXN0R2FtZVBheW1lbnQiLCJjdXJyZW5jeVR5cGUiLCJidXlRdWFudGl0eSIsImN1c3RvbUlkIiwiZXh0cmFJbmZvIiwicGF5bWVudFJlc3VsdCIsImVyckNvZGUiLCJjb21wbGV0ZSIsIm9wZW5TZXJ2aWNlIiwib3BlbkN1c3RvbWVyU2VydmljZUNvbnZlcnNhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBLElBQUlDLEVBQUUsR0FBR0MsT0FBTyxDQUFDLEdB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QTZESCxDQXJFRDs7RUFzRUFBLENBQUMsQ0FBQ3VCLFNBQUYsQ0FBWWtTLFlBQVosR0FBMkIsWUFBWTtJQUNuQyxJQUFJelQsQ0FBQyxHQUFHLElBQVI7SUFDQSxPQUFPLElBQUl5RyxPQUFKLENBQVksVUFBVW5FLENBQVYsRUFBYXdELENBQWIsRUFBZ0I7TUFDL0J4RSxFQUFFLENBQUNtUyxZQUFILENBQWdCO1FBQ1pyUCxPQUFPLEVBQUUsbUJBQVk7VUFDakI5QixDQUFDLENBQUMsQ0FBRCxDQUFEO1FBQ0gsQ0FIVztRQUlaaUMsSUFBSSxFQUFFLGdCQUFZO1VBQ2R2RSxDQUFDLENBQUMwRyxLQUFGLENBQVEsQ0FBUixFQUNLMUMsSUFETCxDQUNVLFlBQVk7WUFDZDFCLENBQUMsQ0FBQyxDQUFELENBQUQ7VUFDSCxDQUhMLFdBSVcsVUFBVXRDLENBQVYsRUFBYTtZQUNoQjhGLENBQUMsQ0FBQzlGLENBQUQsQ0FBRDtVQUNILENBTkw7UUFPSDtNQVpXLENBQWhCO0lBY0gsQ0FmTSxDQUFQO0VBZ0JILENBbEJEOztFQW1CQUEsQ0FBQyxDQUFDdUIsU0FBRixDQUFZMFQsV0FBWixHQUEwQixVQUFValYsQ0FBVixFQUFhO0lBQ25Dc0IsRUFBRSxDQUFDNFQsK0JBQUgsSUFDSTVULEVBQUUsQ0FBQzRULCtCQUFILENBQW1DO01BQUNySyxJQUFJLEVBQUU3SyxDQUFQO01BQVVvRSxPQUFPLEVBQUUsbUJBQVksQ0FBRSxDQUFqQztNQUFtQ0csSUFBSSxFQUFFLGdCQUFZLENBQUU7SUFBdkQsQ0FBbkMsQ0FESjtFQUVILENBSEQ7O0VBSUEsT0FBT3ZFLENBQVA7QUFDSCxDQXZ6Qk8sRUFBUjs7QUF3ekJBbEIsT0FBTyxXQUFQLEdBQWtCaUIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIF9jID0gcmVxdWlyZShcImNcIik7XG52YXIgX2NvbSA9IHJlcXVpcmUoXCJjb21cIik7XG52YXIgX2VudiA9IHJlcXVpcmUoXCJlbnZcIik7XG52YXIgX2Vycm9yQ29kZSA9IHJlcXVpcmUoXCJlcnJvckNvZGVcIik7XG52YXIgX2V2dHMgPSByZXF1aXJlKFwiZXZ0c1wiKTtcbnZhciBfaWR4ID0gcmVxdWlyZShcImlkeFwiKTtcbnZhciBfcENvbnN0ID0gcmVxdWlyZShcInBDb25zdFwiKTtcbnZhciBfcmVxdWVzdCA9IHJlcXVpcmUoXCJyZXF1ZXN0XCIpO1xudmFyIF90aW1lID0gcmVxdWlyZShcInRpbWVcIik7XG52YXIgX3VEYXRhID0gcmVxdWlyZShcInVEYXRhXCIpO1xudmFyIF90aXBNZ3IgPSByZXF1aXJlKFwidGlwTWdyXCIpO1xudmFyIHkgPSBcImVudi1uQlQ1cUZsejNQXCI7XG52YXIgbSA9IFwiMWp0dzN3amFicjB1aVwiO1xudmFyIHYgPSBcIjRtMjkzNjVqMGQyazNhZ241Y1wiO1xudmFyIF8gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMuaXNTaGFyaW5nID0gITE7XG4gICAgICAgIHRoaXMuc2RrU3dpdGNoID0gX3BDb25zdC5EZWZhdWx0U0RLU3dpdGNoO1xuICAgICAgICB0aGlzLnZpZGVvQ2hlY2tlZE1hcCA9IHt9O1xuICAgICAgICB0aGlzLnZpZGVvQ2hlY2tlZExhc3RUID0ge307XG4gICAgICAgIHRoaXMudW5pcXVlVmlkZW9Vbml0SWQgPSB2O1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9ICExO1xuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSAhMTtcbiAgICAgICAgdGhpcy5vbkhpZGVUID0gMDtcbiAgICAgICAgdGhpcy5ub0FkID0gITE7XG4gICAgICAgIHRoaXMubm9WaWRlbyA9ICExO1xuICAgICAgICB0aGlzLmxhc3RJbnRlckFkU2hvd1QgPSAwO1xuICAgICAgICB0aGlzLnN3aXRjaGVzSW5pdGQgPSAhMTtcbiAgICAgICAgdGhpcy5nYW1lUmVjb3JkZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5tX25TdGFydFJlY29yZFQgPSAwO1xuICAgICAgICB0aGlzLm1fblJlY29yZFQgPSAwO1xuICAgICAgICB0aGlzLm1fYklzUmVjb3JkaW5nID0gITE7XG4gICAgICAgIHRoaXMubV9uQXV0b1N0b3BWaWRlb0lkID0gMDtcbiAgICAgICAgdGhpcy5tX3N0clZpZGVvUGF0aCA9IFwiXCI7XG4gICAgICAgIHRoaXMub25LZXlib2FyZENvbXBsZXRlID0gdHQub25LZXlib2FyZENvbXBsZXRlO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsIFwiYXBwSWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInR0NmQyYzFiOTFmMjFkNDc0OTAyXCI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgfSk7XG4gICAgdC5wcm90b3R5cGUuc3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3BDb25zdC5QRkNvZGUuQnl0ZWRhbmNlO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0VmVyc2lvbigpO1xuICAgICAgICB0aGlzLmluaXRCeXRlRGFuY2VMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmluaXRDb21tb25TZXR0aW5nKCk7XG4gICAgICAgIHRoaXMuaW5pdFRnYSgpO1xuICAgICAgICB0aGlzLmluaXRWaWRlb1JlY29yZGVyKCk7XG4gICAgICAgIHRoaXMudXBsb2FkQWRFdmVudChcImFjdGl2ZVwiLCB7fSk7XG4gICAgICAgIHZhciB0ID0gdHQuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcbiAgICAgICAgdmFyIGUgPSAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5zY2VuZSkgfHwgXCIwXCI7XG4gICAgICAgIHRoaXMuYnlTbGlkZXIgPSBcIjAyMTAzNlwiID09IGU7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5pbml0VmVyc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHZhciBlO1xuICAgICAgICB0aGlzLnZlcnNpb24gPVxuICAgICAgICAgICAgdHQuZ2V0RW52SW5mb1N5bmMgJiZcbiAgICAgICAgICAgIChudWxsID09PSAoZSA9IG51bGwgPT09ICh0ID0gdHQuZ2V0RW52SW5mb1N5bmMoKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5taWNyb2FwcCkgfHwgdm9pZCAwID09PSBlXG4gICAgICAgICAgICAgICAgPyB2b2lkIDBcbiAgICAgICAgICAgICAgICA6IGUubXBWZXJzaW9uKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmluaXRUZ2EgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0LnByb3RvdHlwZS5pc1N3aXRjaGVkSW5pdGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN3aXRjaGVzSW5pdGQ7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5pbml0Qnl0ZURhbmNlTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICB0dC5vblNob3coZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zeW5jTGF1bmNoT3B0aW9uKHQpLFxuICAgICAgICAgICAgICAgIGUuaXNTaGFyaW5nIHx8IGUucmVlbnRlcigpLFxuICAgICAgICAgICAgICAgIGUuc3RhcnRTdG9wUmVjb3JkVGltZW91dChNYXRoLm1heCgxZTMsIF9wQ29uc3QuVklERU9fUkVDT1JEX0xJTUlUIC0gZS5tX25SZWNvcmRUKSksXG4gICAgICAgICAgICAgICAgKGUuYnlTbGlkZXIgPSBcImhvbWVwYWdlXCIgPT0gdC5sYXVuY2hfZnJvbSAmJiBcInNpZGViYXJfY2FyZFwiID09IHQubG9jYXRpb24pLFxuICAgICAgICAgICAgICAgIF9ldnRzLmRlZmF1bHQub3BFLmVtaXQoe2FjdGlvbjogX2V2dHMuZGVmYXVsdC5TbGlkZXJfQ2hnfSksXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoRGF0ZS5ub3coKSAvIDFlMyAtIGUub25IaWRlVCkgPiAzMDBcbiAgICAgICAgICAgICAgICAgICAgPyBlLnN5bmNUaW1lKCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ICYmIF90aW1lLmRlZmF1bHQuaW5zLnN5bmModCksIF9ldnRzLmRlZmF1bHQucGxFLmVtaXQoe29uU2hvdzogITAsIGlzU2hhcmluZzogZS5pc1NoYXJpbmd9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF9ldnRzLmRlZmF1bHQucGxFLmVtaXQoe29uU2hvdzogITAsIGlzU2hhcmluZzogZS5pc1NoYXJpbmd9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHR0LmNoZWNrU2NlbmUgJiZcbiAgICAgICAgICAgIHR0LmNoZWNrU2NlbmUoe1xuICAgICAgICAgICAgICAgIHNjZW5lOiBcInNpZGViYXJcIixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0LnNpZGViYXJFeGlzdCA9IGUuaXNFeGlzdDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdHQub25IaWRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIChlLm9uSGlkZVQgPSBfdGltZS5kZWZhdWx0Lmlucy5zZXJ2ZXJUaW1lKSxcbiAgICAgICAgICAgICAgICBfZXZ0cy5kZWZhdWx0LnBsRS5lbWl0KHtvbkhpZGU6ICEwfSksXG4gICAgICAgICAgICAgICAgZS5jbGVhclN0b3BSZWNvcmRUaW1lb3V0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0dC5vbkVycm9yKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBfZW52LmVudi5tb2RlICE9PSBfZW52LkVNLlBST0QgJiZcbiAgICAgICAgICAgICAgICB0dC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdC5tZXNzYWdlIHx8IFwi5byC5bi45oql6ZSZXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHQuc3RhY2sgfHwgdCArIFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6ICExLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogXCLlpb3nmoRcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdHQuY2FuSVVzZShcIm9uTWVtb3J5V2FybmluZ1wiKSAmJlxuICAgICAgICAgICAgdHQub25NZW1vcnlXYXJuaW5nKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0dC50cmlnZ2VyR0MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0dC5vblNoYXJlQXBwTWVzc2FnZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3BDb25zdC5TREtDb25maWcuc2hhcmVEYXRhKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0dC5zaG93U2hhcmVNZW51KHtzdWNjZXNzOiBmdW5jdGlvbiAoKSB7fSwgZmFpbDogZnVuY3Rpb24gKCkge319KTtcbiAgICAgICAgdmFyIG8gPSB0dC5nZXRVcGRhdGVNYW5hZ2VyKCk7XG4gICAgICAgIG8ub25DaGVja0ZvclVwZGF0ZShmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgIG8ub25VcGRhdGVGYWlsZWQoZnVuY3Rpb24gKCkge30pO1xuICAgICAgICBvLm9uVXBkYXRlUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHQuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLmm7TmlrDmj5DnpLpcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIuaWsOeJiOacrOW3sue7j+WHhuWkh+Wlve+8jOaYr+WQpumHjeWQr+Wwj+a4uOaIj++8n1wiLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHQuY29uZmlybSAmJiBvLmFwcGx5VXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuaW5pdENvbW1vblNldHRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zeW5jTGF1bmNoT3B0aW9uKHR0LmdldExhdW5jaE9wdGlvbnNTeW5jKCkpO1xuICAgICAgICB0dC5nZXROZXR3b3JrVHlwZSh7c3VjY2VzczogZnVuY3Rpb24gKCkge30sIGZhaWw6IGZ1bmN0aW9uICgpIHt9fSk7XG4gICAgICAgIF9ldnRzLmRlZmF1bHQuY2hFLm9uKGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmluaXRDbG91ZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0dC5sb2dpbih7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0dC5jcmVhdGVDbG91ZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdHQuY2FuSVVzZShcImNyZWF0ZUNsb3VkXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoX2lkeC5wbGF0Zm9ybS5jbG91ZCA9IHR0LmNyZWF0ZUNsb3VkKHtlbnZJRDogeSwgc2VydmljZUlEOiBtfSkpO1xuICAgICAgICAgICAgICAgICAgICB0KF9pZHgucGxhdGZvcm0uc3luY1RpbWUoKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHQobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0QWNjb3VudElEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfZW52LmVudi5tb2RlO1xuICAgICAgICBfZW52LkVNLlRFU1Q7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5sb2dpbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR0LmxvZ2luKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobiAmJiBuLmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWR4LnBsYXRmb3JtLmNsb3VkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9pZHgucGxhdGZvcm0uY2xvdWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dC5jcmVhdGVDbG91ZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dC5jYW5JVXNlKFwiY3JlYXRlQ2xvdWRcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHQuY3JlYXRlQ2xvdWQoe2VudklEOiB5LCBzZXJ2aWNlSUQ6IG19KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA+IDIgfHwgIWkpIHJldHVybiB2b2lkIGUobik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmNhbGxDb250YWluZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL2luZGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1wiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMmUzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IEpTT04ucGFyc2Uobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4ub3BlbmlkID0gaS5pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnVuaW9uaWQgPSBpLmo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAodCkge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgKG4ub3BlbmlkID0gby5pKSwgKG4udW5pb25pZCA9IG8uaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUobik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvKF9lcnJvckNvZGUuZXJyb3JDb2RlLlBGX0NMT1VEX0VSUik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBjb25zb2xlLndhcm4oXCLlpLTmnaHnmbvpmYblpLHotKXvvJplbXB0eSBjb2RlXCIpLCBvKF9lcnJvckNvZGUuZXJyb3JDb2RlLkxPR0lOX0VSUik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT0gdCAmJiBudWxsICE9IHQuZXJyTXNnICYmIChlID0gdC5lcnJNc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLlpLTmnaHnmbvpmYblpLHotKXvvJpcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8oX2Vycm9yQ29kZS5lcnJvckNvZGUuTE9HSU5fRVJSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc3luY1RpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIGUgPVxuICAgICAgICAgICAgICAgIF9pZHgucGxhdGZvcm0uY2xvdWQgfHxcbiAgICAgICAgICAgICAgICAoX2lkeC5wbGF0Zm9ybS5jbG91ZCA9XG4gICAgICAgICAgICAgICAgICAgIHR0LmNyZWF0ZUNsb3VkICYmIHR0LmNhbklVc2UoXCJjcmVhdGVDbG91ZFwiKSAmJiB0dC5jcmVhdGVDbG91ZCh7ZW52SUQ6IHksIHNlcnZpY2VJRDogbX0pKTtcbiAgICAgICAgICAgIGVcbiAgICAgICAgICAgICAgICA/IGUuY2FsbENvbnRhaW5lcih7XG4gICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvZ1RpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBpbml0OiB7bWV0aG9kOiBcIkdFVFwiLCBoZWFkZXI6IHtcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sIHRpbWVvdXQ6IDJlM30sXG4gICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBKU09OLnBhcnNlKG4pLnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgbyA9IG4udDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdChvIHx8IG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogdChudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5yZWVudGVyID0gZnVuY3Rpb24gKCkge307XG4gICAgdC5wcm90b3R5cGUuZ2V0Q2xvdWREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZHgucGxhdGZvcm0uY2xvdWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2lkeC5wbGF0Zm9ybS5jbG91ZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR0LmNyZWF0ZUNsb3VkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR0LmNhbklVc2UoXCJjcmVhdGVDbG91ZFwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dC5jcmVhdGVDbG91ZCh7ZW52SUQ6IHksIHNlcnZpY2VJRDogbX0pKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFs0LCB0LmRhdGFiYXNlKCldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbMywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAobyA9IGkuc2VudCgpKSA/ICgobiA9IG8uY29sbGVjdGlvbihcInVzZXJEYXRhXCIpKSwgWzQsIF9pZHgucGxhdGZvcm0uX2NoZWNrKG4pXSkgOiBbMywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIChlID0gaS5zZW50KCkpLCAoaS5sYWJlbCA9IDMpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLl9jaGVjayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5pc0NoZWNrID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvICYmIG8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBvWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZHgucGxhdGZvcm0uZGJJZCA9IG4uX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gSlNPTi5wYXJzZShuLnVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldENsb3VkRGF0YSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlID0gdGhpcykuaXNTYXZpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFsyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKG8gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY2xvdWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZS5jbG91ZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR0LmNyZWF0ZUNsb3VkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR0LmNhbklVc2UoXCJjcmVhdGVDbG91ZFwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dC5jcmVhdGVDbG91ZCh7ZW52SUQ6IHksIHNlcnZpY2VJRDogbX0pKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFs0LCBvLmRhdGFiYXNlKCldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG4gPSBpLnNlbnQoKSkpIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5pc1NhdmluZyA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAociA9IG4uY29sbGVjdGlvbihcInVzZXJEYXRhXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYSA9IFByb21pc2UucmVzb2x2ZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmlzQ2hlY2sgfHwgKGEgPSB0aGlzLl9jaGVjayhyKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmRiSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZG9jKGUuZGJJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHt1RGF0YTogdH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWR4LnBsYXRmb3JtLmlzU2F2aW5nID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHIuYWRkKHt1RGF0YTogdH0pLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWR4LnBsYXRmb3JtLmRiSWQgPSB0LmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZHgucGxhdGZvcm0uaXNTYXZpbmcgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwi5YaZ5YWl5aSx6LSlXCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaS5sYWJlbCA9IDIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldFN0b3JhZ2UgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGUgPSB0dC5nZXRTdG9yYWdlU3luYyh0KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsID09IGUgfHwgXCJcIiA9PSBlID8gbnVsbCA6IEpTT04ucGFyc2UoZSk7XG4gICAgICAgIH0gY2F0Y2ggKG8pIHt9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRTdG9yYWdlID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHR0LnNldFN0b3JhZ2VTeW5jKHQsIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgfSBjYXRjaCAobykge31cbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmNsZWFyU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHR0LmNsZWFyU3RvcmFnZVN5bmMoKTtcbiAgICAgICAgfSBjYXRjaCAodCkge31cbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnJlbW92ZVN0b3JhZ2UgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdHQucmVtb3ZlU3RvcmFnZVN5bmModCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS50cmFja0xvZ2luID0gZnVuY3Rpb24gKCkge307XG4gICAgdC5wcm90b3R5cGUudHJhY2tVc2VyU2V0ID0gZnVuY3Rpb24gKCkge307XG4gICAgdC5wcm90b3R5cGUudHJhY2tVc2VyU2V0T25jZSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHQucHJvdG90eXBlLnRyYWNrRXZlbnQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0LnByb3RvdHlwZS5nZXRTZXEgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0LnByb3RvdHlwZS5jb25zdW1lU2VxID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LnNlcXVlbmNlSW5mby50eXBlICE9IF9wQ29uc3QuU1REU2VxVHlwZS5WSURFTyA/IFszLCAyXSA6IFs0LCB0aGlzLmRvV2F0Y2hBRCh0KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2VudCgpLCB0aGlzLmRvU2hhcmUoKSwgKGUubGFiZWwgPSAyKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5kb1dhdGNoQUQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub0FkXG4gICAgICAgICAgICAgICAgICAgID8gWzJdXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5ub1ZpZGVvXG4gICAgICAgICAgICAgICAgICAgID8gKGNvbnNvbGUuZXJyb3IoXCJbZXJyb3JdIG5vIHZpZGVvXCIpLCBbMiwgUHJvbWlzZS5yZWplY3QoX3BDb25zdC5WaWRlb0ZhaWxDb2RlLk5PX0FEKV0pXG4gICAgICAgICAgICAgICAgICAgIDogKF9ldnRzLmRlZmF1bHQuYWRFLmVtaXQoX2MuQURFLlZJREVPKSxcbiAgICAgICAgICAgICAgICAgICAgICAoZSA9IHRoaXMudW5pcXVlVmlkZW9Vbml0SWQpLFxuICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT0gdGhpcy52aWRlb0FkICYmICh0aGlzLnZpZGVvQWQgPSB0dC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe2FkVW5pdElkOiBlfSkpLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAobyA9IHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8udmlkZW9BZC5vbkNsb3NlKGZ1bmN0aW9uIGEocykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT0gby52aWRlb0FkICYmIG8udmlkZW9BZC5vZmZDbG9zZShhKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPSBzICYmIHMuaXNFbmRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoX2V2dHMuZGVmYXVsdC5hZEUuZW1pdChfYy5BREUuVklERU9fRU5EKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby50cmFja0V2ZW50KFwidmlkZW9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogXCJjb21wbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHQudmlkZW9Tb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiB0Lml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4oMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChfZXZ0cy5kZWZhdWx0LmFkRS5lbWl0KF9jLkFERS5WSURFT19FTkQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKF9wQ29uc3QuVmlkZW9GYWlsQ29kZS5DQU5DRUxFRCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnZpZGVvQWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2V2dHMuZGVmYXVsdC5hZEUuZW1pdChfYy5BREUuVklERU9fRU5EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby52aWRlb0FkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby52aWRlb0FkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaShfcENvbnN0LlZpZGVvRmFpbENvZGUuTk9fQUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5kb1NoYXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5fYXNrUmVTaGFyZSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHQucHJvdG90eXBlLmNhblVzZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBfY29tLmRlZmF1bHQuaW5zLmNvbXBhcmVWZXJzaW9uKF9pZHgucGxhdGZvcm0uZ2V0U3lzdGVtRGF0YSgpLlNES1ZlcnNpb24sIHQpID49IDA7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRTeXN0ZW1EYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobnVsbCA9PSB0aGlzLnN5c3RlbUluZm9DYWNoZSlcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zeXN0ZW1JbmZvQ2FjaGUgPSB0dC5nZXRTeXN0ZW1JbmZvU3luYygpO1xuICAgICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcENvbnN0LkRlZmF1bHRTeXN0ZW1JbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1JbmZvQ2FjaGU7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRTd2l0Y2hlcyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHQucHJvdG90eXBlLnZpYnJhdGUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0ID09IF9wQ29uc3QuVkVudW00LlNIT1JUXG4gICAgICAgICAgICA/IHR0LnZpYnJhdGVTaG9ydChudWxsKVxuICAgICAgICAgICAgOiB0ID09IF9wQ29uc3QuVkVudW00LkxPTkcgJiYgdHQudmlicmF0ZUxvbmcoe3N1Y2Nlc3M6IGZ1bmN0aW9uICgpIHt9LCBmYWlsOiBmdW5jdGlvbiAoKSB7fX0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUucHJlbG9hZFZpZGVvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gITE7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zaG93TW9kYWwgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHR0LnNob3dNb2RhbChcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHQpLCB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmNvbmZpcm0gPyBlKCEwKSA6IHQuY2FuY2VsICYmIGUoITEpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlKCExKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnJlZnJlc2hHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdHQucmVzdGFydE1pbmlQcm9ncmFtU3luYygpO1xuICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgICB0dC5leGl0TWluaVByb2dyYW0oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2hvd0xvYWRpbmcgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2b2lkIDAgPT09IHQgJiYgKHQgPSBcIuWKoOi9veS4rVwiKTtcbiAgICAgICAgdGhpcy5jYW5Vc2UoXCIxLjAuMFwiKSAmJiAoKHRoaXMuaXNMb2FkaW5nID0gITApLCB0dC5zaG93TG9hZGluZyh7dGl0bGU6IHQsIG1hc2s6ICEwfSkpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuaGlkZUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2FuVXNlKFwiMS4wLjBcIikgJiYgdGhpcy5pc0xvYWRpbmcgJiYgKHR0LmhpZGVMb2FkaW5nKCksICh0aGlzLmlzTG9hZGluZyA9ICExKSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0LnByb3RvdHlwZS5nZXRNZW51Qm91bmRpbmcgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0LnByb3RvdHlwZS5jcmVhdGVTaGFyZUltYWdlID0gZnVuY3Rpb24gKCkge307XG4gICAgdC5wcm90b3R5cGUucHJlbG9hZEludGVyc3RpdGlhbEFEID0gZnVuY3Rpb24gKCkge307XG4gICAgdC5wcm90b3R5cGUuc2hvd0ludGVyc3RpdGlhbEFEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbnVsbF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5jYW5TaG93QmFubmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gITE7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRCYW5uZXJTaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IGNjLlNpemUoMCwgMCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zaG93QmFubmVyID0gZnVuY3Rpb24gKCkge307XG4gICAgdC5wcm90b3R5cGUuaGlkZUJhbm5lciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHQucHJvdG90eXBlLmdldFN1YnNjcmliZUNudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIDBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge307XG4gICAgdC5wcm90b3R5cGUuaW5pdFZpZGVvUmVjb3JkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2FuVXNlKFwiMS42LjFcIikgJiZcbiAgICAgICAgICAgICgodGhpcy5nYW1lUmVjb3JkZXIgPSB0dC5nZXRHYW1lUmVjb3JkZXJNYW5hZ2VyKCkpLFxuICAgICAgICAgICAgdGhpcy5nYW1lUmVjb3JkZXIub25TdGFydCh0aGlzLm9uVmlkZW9SZWNvcmRTdGFydC5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIHRoaXMuZ2FtZVJlY29yZGVyLm9uU3RvcCh0aGlzLm9uVmlkZW9SZWNvcmRFbmQuYmluZCh0aGlzKSksXG4gICAgICAgICAgICB0aGlzLmdhbWVSZWNvcmRlci5vbkVycm9yKHRoaXMub25WaWRlb1JlY29yZEVycm9yLmJpbmQodGhpcykpKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnN0YXJ0VmlkZW9SZWNvcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBudWxsICE9IHRoaXMuZ2FtZVJlY29yZGVyICYmXG4gICAgICAgICAgICAgICAgKCh0aGlzLm1fYklzUmVjb3JkaW5nID0gITApLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVJlY29yZGVyLnN0YXJ0KHtkdXJhdGlvbjogMC4wMDEgKiBfcENvbnN0LlZJREVPX1JFQ09SRF9MSU1JVCwgaXNNYXJrT3BlbjogITF9KSxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U3RvcFJlY29yZFRpbWVvdXQoX3BDb25zdC5WSURFT19SRUNPUkRfTElNSVQpKTtcbiAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lUmVjb3JkZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5wYXVzZVZpZGVvUmVjb3JkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBudWxsICE9IHRoaXMuZ2FtZVJlY29yZGVyICYmIHRoaXMubV9iSXNSZWNvcmRpbmcgJiYgKHRoaXMuZ2FtZVJlY29yZGVyLnBhdXNlKCksIHRoaXMuY2xlYXJTdG9wUmVjb3JkVGltZW91dCgpKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnJlc3VtZVZpZGVvUmVjb3JkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBudWxsICE9IHRoaXMuZ2FtZVJlY29yZGVyICYmXG4gICAgICAgICAgICB0aGlzLm1fYklzUmVjb3JkaW5nICYmXG4gICAgICAgICAgICAodGhpcy5nYW1lUmVjb3JkZXIucmVzdW1lKCksXG4gICAgICAgICAgICB0aGlzLnN0YXJ0U3RvcFJlY29yZFRpbWVvdXQoTWF0aC5tYXgoMWUzLCBfcENvbnN0LlZJREVPX1JFQ09SRF9MSU1JVCAtIHRoaXMubV9uUmVjb3JkVCkpKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnN0b3BWaWRlb1JlY29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbnVsbCAhPSB0aGlzLmdhbWVSZWNvcmRlciAmJlxuICAgICAgICAgICAgKHRoaXMuY2xlYXJTdG9wUmVjb3JkVGltZW91dCgpLCB0aGlzLmdhbWVSZWNvcmRlci5zdG9wKCksICh0aGlzLm1fYklzUmVjb3JkaW5nID0gITEpKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnN0YXJ0U3RvcFJlY29yZFRpbWVvdXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0aGlzLm1fYklzUmVjb3JkaW5nICYmXG4gICAgICAgICAgICAoKHRoaXMubV9uQXV0b1N0b3BWaWRlb0lkID0gc2V0VGltZW91dCh0aGlzLmF1dG9TdG9wVmlkZW9SZWNvcmQuYmluZCh0aGlzKSwgdCAtIDFlMykpLFxuICAgICAgICAgICAgKHRoaXMubV9uU3RhcnRSZWNvcmRUID0gbmV3IERhdGUoKS5nZXRUaW1lKCkpKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmNsZWFyU3RvcFJlY29yZFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubV9iSXNSZWNvcmRpbmcgJiZcbiAgICAgICAgICAgICgwICE9PSB0aGlzLm1fbkF1dG9TdG9wVmlkZW9JZCAmJiBjbGVhclRpbWVvdXQodGhpcy5tX25BdXRvU3RvcFZpZGVvSWQpLFxuICAgICAgICAgICAgKHRoaXMubV9uQXV0b1N0b3BWaWRlb0lkID0gMCksXG4gICAgICAgICAgICAodGhpcy5tX25SZWNvcmRUICs9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5tX25TdGFydFJlY29yZFQpLFxuICAgICAgICAgICAgKHRoaXMubV9uU3RhcnRSZWNvcmRUID0gMCkpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuYXV0b1N0b3BWaWRlb1JlY29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tX25BdXRvU3RvcFZpZGVvSWQgPSAwO1xuICAgICAgICB0aGlzLnN0b3BWaWRlb1JlY29yZCgpO1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc3RhcnRWaWRlb1JlY29yZC5iaW5kKHRoaXMpLCAxMDApO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUub25WaWRlb1JlY29yZFN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1fc3RyVmlkZW9QYXRoID0gXCJcIjtcbiAgICAgICAgdGhpcy5tX25SZWNvcmRUID0gMDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLm9uVmlkZW9SZWNvcmRFbmQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgbnVsbCAhPSB0ICYmIG51bGwgIT0gdC52aWRlb1BhdGggJiYgKGUgPSB0aGlzLm1fc3RyVmlkZW9QYXRoID0gdC52aWRlb1BhdGgpO1xuICAgICAgICBlICYmIF9ldnRzLmRlZmF1bHQub3BFLmVtaXQoe2FjdGlvbjogX2V2dHMuZGVmYXVsdC5TSE9XVklERU9TSEFSRX0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUub25WaWRlb1JlY29yZEVycm9yID0gZnVuY3Rpb24gKCkge307XG4gICAgdC5wcm90b3R5cGUuaGFzVmlkZW9SZWNvcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBudWxsICE9IHRoaXMubV9zdHJWaWRlb1BhdGggJiYgXCJcIiAhPT0gdGhpcy5tX3N0clZpZGVvUGF0aDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNoYXJlVmlkZW9SZWNvcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICB2YXIgZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0ID0gZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmhhc1ZpZGVvUmVjb3JkKCkgJiYgdHQuc2hhcmVBcHBNZXNzYWdlKSB7XG4gICAgICAgICAgICB2YXIgbyA9IFtfZW52LmVudi5uYW1lLCBcIuWls+eUn+a4uOaIj+aOqOiNkFwiLCBcIuiEkea0nua4uOaIj1wiLCBcIueDp+iEkeebiuaZulwiXTtcbiAgICAgICAgICAgIHZhciBuID0gX3BDb25zdC5TREtDb25maWcuc2hhcmVEYXRhKCk7XG4gICAgICAgICAgICB0dC5zaGFyZUFwcE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuaIkeassuS/ruS7mVwiLFxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IFwidmlkZW9cIixcbiAgICAgICAgICAgICAgICBkZXNjOiBcIuadpeaMkeaImOS4gOS4i1wiLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBuLnF1ZXJ5LFxuICAgICAgICAgICAgICAgIGV4dHJhOiB7d2l0aFZpZGVvSWQ6ICEwLCB2aWRlb1BhdGg6IHRoaXMubV9zdHJWaWRlb1BhdGgsIHZpZGVvX3RpdGxlOiBuLnRpdGxlLCB2aWRlb1RvcGljczogb30sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGlwTWdyLmRlZmF1bHQuaW5zLnNob3dUaXAoXCLliIbkuqvmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgICAgIHQoMSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aXBNZ3IuZGVmYXVsdC5pbnMuc2hvd1RpcChcIuWIhuS6q+Wksei0pVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHQoMCk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUudXBsb2FkQWRFdmVudCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHQucHJvdG90eXBlLlBvc3RNZXNzYWdlID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgdHQuZ2V0T3BlbkRhdGFDb250ZXh0KCkucG9zdE1lc3NhZ2Uoe0V2ZW46IHQsIFZhbHVlMTogZSwgVmFsdWUyOiBvfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5TZXRVc2VyQ2xvdWRTdG9yYWdlID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0dC5zZXRVc2VyQ2xvdWRTdG9yYWdlKHtcbiAgICAgICAgICAgIEtWRGF0YUxpc3Q6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJsZXZlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdC50b1N0cmluZygpICsgXCIjXCIgKyBuLmdldFRpbWUoKS50b1N0cmluZygpICsgXCIjXCIgKyBlLnRvU3RyaW5nKCkgKyBcIiNcIiArIG8udG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHt9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuR2V0T3BlbkRhdGFDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHQuZ2V0T3BlbkRhdGFDb250ZXh0KCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5hZGRTaG9ydGN1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHQuYWRkU2hvcnRjdXQoe1xuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF9ldnRzLmRlZmF1bHQub3BFLmVtaXQoe2FjdGlvbjogX2V2dHMuZGVmYXVsdC5BRERfREVTS1RPUCwgZGF0YTogITB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX2V2dHMuZGVmYXVsdC5vcEUuZW1pdCh7YWN0aW9uOiBfZXZ0cy5kZWZhdWx0LkFERF9ERVNLVE9QLCBkYXRhOiAhMX0pO1xuICAgICAgICAgICAgICAgIF90aXBNZ3IuZGVmYXVsdC5pbnMuc2hvd1RpcChcIua3u+WKoOWksei0pVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zaGFyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgZSA9IF9wQ29uc3QuU0RLQ29uZmlnLnNoYXJlRGF0YSgpO1xuICAgICAgICAgICAgdHQuc2hhcmVBcHBNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogZS50aXRsZSxcbiAgICAgICAgICAgICAgICBpbWFnZVVybDogZS5pbWFnZVVybCxcbiAgICAgICAgICAgICAgICBxdWVyeTogZS5xdWVyeSxcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBcImludml0ZVwiLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHQoZS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRVc2VySW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgICAgICAgIGlmICh0dC5jYW5JVXNlKFwiZ2V0VXNlckluZm9cIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHQ7XG4gICAgICAgICAgICAgICAgdHQuZ2V0U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmF1dGhTZXR0aW5nW1wic2NvcGUudXNlckluZm9cIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG4uX2dldFVzZXJJbmZvKGUsIG8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAhMSA9PT0gdC5hdXRoU2V0dGluZ1tcInNjb3BlLnVzZXJJbmZvXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuLnNob3dSZWZ1c2VUaXAoZSwgbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG4uX2dldFVzZXJJbmZvKGUsIG8pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBvKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2hvd1JlZnVzZVRpcCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLlj4vmg4Xmj5DnpLpcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIueUs+ivt+S9v+eUqOaCqOeahOeUqOaIt+S/oeaBr++8jOWxleekuuaOkuihjOamnOOAglwiLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiBcIuWFgeiuuFwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6IFwi5ouS57udXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICAgICAgdHQub3BlblNldHRpbmcoe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgby5fZ2V0VXNlckluZm8odCwgZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGUoKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLl9nZXRVc2VySW5mbyA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHR0LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdChlLnVzZXJJbmZvKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLm5hdmlnYXRlVG9TY2VuZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZvaWQgMCA9PT0gdCAmJiAodCA9IFwic2lkZWJhclwiKTtcbiAgICAgICAgdHQubmF2aWdhdGVUb1NjZW5lKHtzY2VuZTogdCwgc3VjY2VzczogZnVuY3Rpb24gKCkge30sIGZhaWw6IGZ1bmN0aW9uICgpIHt9fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5yZXBvcnRFdmVudCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9IHt9KTtcbiAgICAgICAgdHQucmVwb3J0QW5hbHl0aWNzKHQsIGUpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0RnJpZW5kUmFua0RhdGEgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbztcbiAgICAgICAgdHQgJiZcbiAgICAgICAgICAgIChudWxsID09PSAobyA9IHR0LnNldEltUmFua0RhdGEpIHx8XG4gICAgICAgICAgICAgICAgdm9pZCAwID09PSBvIHx8XG4gICAgICAgICAgICAgICAgby5jYWxsKHR0LCB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAwLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICB6b25lSWQ6IGUsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7fVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNob3dGcmllbmRSYW5rID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHR0KVxuICAgICAgICAgICAgaWYgKHR0LmdldEltUmFua0xpc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHQgPT09IF9wQ29uc3QuU0RLQ29uZmlnLnR0Wm9uZUlkLm5vcm1hbCA/IFwi5YWzXCIgOiBcIuWIhlwiO1xuICAgICAgICAgICAgICAgIHZhciBvID0gdCA9PT0gX3BDb25zdC5TREtDb25maWcudHRab25lSWQubm9ybWFsID8gXCLkuLvnur/mjpLooYxcIiA6IFwi5aW95Y+L6Laj5ZGz6LWb5o6S6KGMXCI7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSAoX3BDb25zdC5TREtDb25maWcudHRab25lSWQubm9ybWFsLCBcImFsbFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IHQgPT09IF9wQ29uc3QuU0RLQ29uZmlnLnR0Wm9uZUlkLm5vcm1hbCA/IFwiYWxsXCIgOiBcImZyaWVuZFwiO1xuICAgICAgICAgICAgICAgIHR0LmdldEltUmFua0xpc3Qoe1xuICAgICAgICAgICAgICAgICAgICByZWxhdGlvblR5cGU6IGksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAwLFxuICAgICAgICAgICAgICAgICAgICByYW5rVHlwZTogbixcbiAgICAgICAgICAgICAgICAgICAgc3VmZml4OiBlLFxuICAgICAgICAgICAgICAgICAgICByYW5rVGl0bGU6IG8sXG4gICAgICAgICAgICAgICAgICAgIHpvbmVJZDogdCxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge30sXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICB0dC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLmj5DnpLpcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLlvZPliY3lrqLmiLfnq6/niYjmnKzov4fkvY7vvIzml6Dms5Xkvb/nlKjor6Xlip/og73vvIzor7fljYfnuqflrqLmiLfnq6/miJblhbPpl63lkI7ph43lkK/mm7TmlrDjgIJcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUucGF5bWVudCA9IGZ1bmN0aW9uICh0LCBlLCBvLCBuKSB7XG4gICAgICAgIHZhciBpID0gdGhpcztcbiAgICAgICAgdm9pZCAwID09PSB0ICYmICh0ID0gXCIxXCIpO1xuICAgICAgICB2b2lkIDAgPT09IGUgJiYgKGUgPSAxKTtcbiAgICAgICAgdm9pZCAwID09PSBvICYmIChvID0gMCk7XG4gICAgICAgIHZhciByID0gX2lkeC5wbGF0Zm9ybS5nZXRTeXN0ZW1EYXRhKCk7XG4gICAgICAgIHZhciBhID0gXCJhbmRyb2lkXCI7XG4gICAgICAgIHIgJiYgLTEgIT0gci5zeXN0ZW0uaW5kZXhPZihcImlPU1wiKSAmJiAoYSA9IFwiaU9TXCIpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHIsIHMpIHtcbiAgICAgICAgICAgIGkuY2hlY2tTZXNzaW9uKClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gX3JlcXVlc3QuZGVmYXVsdC5pbnMub3BlbklkO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IF90aW1lLmRlZmF1bHQuaW5zLnNlcnZlclRpbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gdCArIGkgKyBjO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB1LmNwX29yZGVybm8gPSBsO1xuICAgICAgICAgICAgICAgICAgICB1LmNyZWF0aW9uX3RpbWUgPSBjO1xuICAgICAgICAgICAgICAgICAgICB1Lm9wZW5pZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIHUubW9uZXkgPSBlO1xuICAgICAgICAgICAgICAgICAgICB1LmdpZnRfaWQgPSB0O1xuICAgICAgICAgICAgICAgICAgICB1LmdpZnRfbnVtID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdS5zdGF0dXMgPSAwO1xuICAgICAgICAgICAgICAgICAgICB1LmlzX2RvdWJsZSA9IG87XG4gICAgICAgICAgICAgICAgICAgIHUucGFja2FnZSA9IG47XG4gICAgICAgICAgICAgICAgICAgIHUucGhvbmUgPSBhO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBwLm9wZW5pZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIHAuZ2lmdF9pZCA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIHAuZ2lmdF9udW0gPSAxO1xuICAgICAgICAgICAgICAgICAgICBwLm1vbmV5ID0gZTtcbiAgICAgICAgICAgICAgICAgICAgcC5pc19kb3VibGUgPSBvO1xuICAgICAgICAgICAgICAgICAgICBwLnBhY2thZ2UgPSBuO1xuICAgICAgICAgICAgICAgICAgICBwLnBob25lID0gYTtcbiAgICAgICAgICAgICAgICAgICAgX3JlcXVlc3QuZGVmYXVsdC5pbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRVc2VyVG9rZW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnRva2VuID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBKU09OLnN0cmluZ2lmeShwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHQucmVxdWVzdEdhbWVQYXltZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwiZ2FtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW52OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lUeXBlOiBcIkNOWVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm06IGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlRdWFudGl0eTogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvbmVJZDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21JZDogbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhSW5mbzogbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1LnN0YXR1cyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlcXVlc3QuZGVmYXVsdC5pbnMucGF5bWVudFJlc3VsdCh1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdS5zdGF0dXMgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gKHUuZXJyQ29kZSA9ICh0ICYmIHQuZXJyQ29kZSkgfHwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlcXVlc3QuZGVmYXVsdC5pbnMucGF5bWVudFJlc3VsdCh1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzKFwi5pSv5LuY5aSx6LSlOiBcIiArIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICBzKFwi5pSv5LuY5byC5bi4OiBcIiArIHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmNoZWNrU2Vzc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgICAgICAgIHR0LmNoZWNrU2Vzc2lvbih7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlKDEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0LmxvZ2luKDApXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUub3BlblNlcnZpY2UgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0dC5vcGVuQ3VzdG9tZXJTZXJ2aWNlQ29udmVyc2F0aW9uICYmXG4gICAgICAgICAgICB0dC5vcGVuQ3VzdG9tZXJTZXJ2aWNlQ29udmVyc2F0aW9uKHt0eXBlOiB0LCBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7fSwgZmFpbDogZnVuY3Rpb24gKCkge319KTtcbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IF87XG4iXX0=