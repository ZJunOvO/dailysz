
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ali.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ea91av6hxDDJyMqyRofUmH', 'ali');
// scripts/ali.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
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

var v = function (t) {
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

    XMLHttpRequest.prototype.getResponseHeader = function () {};

    var n = console.log;

    console.log = function () {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      }

      var o = t.some(function (t) {
        return "string" == typeof t && t.includes("内容巡检");
      });
      o || n.apply(console, t);
    };

    return e;
  }

  __extends(e, t);

  Object.defineProperty(e.prototype, "appId", {
    get: function get() {
      return "2021004133656183";
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.string = function () {
    return _pConst.PFCode.Alipay;
  };

  e.prototype.init = function () {
    this.initAliListener();
    this.initCommonSetting();
  };

  e.prototype.initTga = function () {};

  e.prototype.isSwitchedInitd = function () {
    return this.switchesInitd;
  };

  e.prototype.initAliListener = function () {
    var t = this;
    exports.my.onShow(function (e) {
      _evts["default"].plE.emit({
        onShow: !0,
        isSharing: t.isSharing
      }), _uData["default"].ins.syncLaunchOption(e), t.isSharing || t.reenter(), t.bySlider = "gamecenter" == e.query.sourceChannel, t.checkDesktopExist().then(function () {
        _evts["default"].opE.emit({
          action: _evts["default"].Desktop_Chg
        });
      }), _evts["default"].opE.emit({
        action: _evts["default"].Slider_Chg
      });
    });
    t.sidebarExist = t.canUse("10.5.60");
    exports.my.onHide(function () {
      t.onHideT = _time["default"].ins.serverTime, _evts["default"].plE.emit({
        onHide: !0
      });
    });
    exports.my.onError(function (t) {
      _env.env.mode !== _env.EM.PROD && exports.my.alert({
        title: t.error || "异常报错",
        content: t.stack || t + "",
        showCancel: !1,
        buttonText: "好的"
      });
    });

    var e = _pConst.SDKConfig.shareData();

    var n = "iOS" === this.getSystemData().platform || "iPhone OS" === this.getSystemData().platform ? "https://tjkj300.oss-cn-shenzhen.aliyuncs.com/web/tjkj300web/other/share.jpg" : e.imageUrl;

    exports.my.onShareAppMessage = function () {
      return {
        title: e.title,
        desc: "",
        bgImgUrl: n,
        success: function success() {
          _sound["default"].ins.playBGM();
        },
        fail: function fail() {
          _sound["default"].ins.playBGM();
        }
      };
    };

    exports.my.onMemoryWarning && exports.my.onMemoryWarning(function () {
      exports.my.triggerGC && exports.my.triggerGC();
    });
    var i = this.uniqueVideoUnitId;
    null == this.videoAd && (this.videoAd = exports.my.createRewardedAd({
      adUnitId: i
    }));
    null == this.videoAd && this.videoAd.load();
  };

  e.prototype.initCommonSetting = function () {
    _uData["default"].ins.syncLaunchOption(exports.my.getLaunchOptionsSync());

    exports.my.getNetworkType({
      success: function success() {},
      fail: function fail() {}
    });

    _evts["default"].chE.on(function () {});
  };

  e.prototype.setAccountID = function () {
    _env.env.mode;
    _env.EM.TEST;
  };

  e.prototype.login = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function () {
        return [2, new Promise(function (t) {
          exports.my.getAuthCode({
            scopes: "auth_base",
            success: function success(e) {
              var o = {};
              o.code = e.authCode;

              try {
                t(o);
              } catch (n) {}
            },
            fail: function fail(e) {
              console.error("my.getAuthCode 调用失败", e);
              t({});
            }
          });
        })];
      });
    });
  };

  e.prototype.initCloud = function () {
    return Promise.resolve(null);
  };

  e.prototype.syncTime = function () {
    return Promise.resolve(null);
  };

  e.prototype.reenter = function () {};

  e.prototype.getStorage = function (t) {
    try {
      var e = exports.my.getStorageSync({
        key: t
      });
      return e.success ? null == e.data || "" == e.data ? null : JSON.parse(e.data) : null == e || "" == e ? null : JSON.parse(e);
    } catch (n) {}
  };

  e.prototype.setStorage = function (t, e) {
    try {
      var n = exports.my.setStorageSync({
        key: t,
        data: JSON.stringify(e)
      });
      n.success || console.error("setStorageSync fail", n.errorMessage, "\n", n.error);
    } catch (i) {}
  };

  e.prototype.clearStorage = function () {
    try {
      exports.my.clearStorageSync();
    } catch (t) {}
  };

  e.prototype.removeStorage = function (t) {
    try {
      exports.my.removeStorageSync(t);
    } catch (e) {}
  };

  e.prototype.trackLogin = function () {};

  e.prototype.trackUserSet = function () {};

  e.prototype.trackUserSetOnce = function () {};

  e.prototype.trackEvent = function () {};

  e.prototype.getSeq = function () {};

  e.prototype.consumeSeq = function (t) {
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

  e.prototype.doWatchAD = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      return __generator(this, function () {
        return this.noAd ? [2] : this.noVideo ? (console.error("[error] no video"), [2, Promise.reject(_pConst.VideoFailCode.NO_AD)]) : (_evts["default"].adE.emit(_c.ADE.VIDEO), this.showLoading(), e = this, [2, new Promise(function (o, n) {
          e.videoAd.onClose(function (i) {
            null != i && i.isEnded ? (_evts["default"].adE.emit(_c.ADE.VIDEO_END), e.trackEvent("video", {
              step: "complete",
              unit: void 0,
              type: t.videoSource,
              item: t.item
            }), o(1)) : (_evts["default"].adE.emit(_c.ADE.VIDEO_END), n(_pConst.VideoFailCode.CANCELED));
          });
          e.videoAd.load().then(function () {
            e.videoAd.show().then(function () {
              e.hideLoading();
            })["catch"](function () {
              e.hideLoading();

              _evts["default"].adE.emit(_c.ADE.VIDEO_END);

              e.videoAd = null;
              n(_pConst.VideoFailCode.NO_AD);
            });
          })["catch"](function () {
            e.hideLoading();
            n(_pConst.VideoFailCode.NO_AD);
          }).then(function () {});
        })]);
      });
    });
  };

  e.prototype.doShare = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function () {
        return [2];
      });
    });
  };

  e.prototype._askReShare = function () {};

  e.prototype.canUse = function (t) {
    return _com["default"].ins.compareVersion(this.getSystemData().version, t) >= 0;
  };

  e.prototype.getSystemData = function () {
    if (null == this.systemInfoCache) try {
      this.systemInfoCache = exports.my.getSystemInfoSync();
    } catch (t) {
      return _pConst.DefaultSystemInfo;
    }
    return this.systemInfoCache;
  };

  e.prototype.getSwitches = function () {};

  e.prototype.vibrate = function (t) {
    t == _pConst.VEnum4.SHORT ? exports.my.vibrateShort("heavy") : t == _pConst.VEnum4.LONG && exports.my.vibrateLong({
      success: function success() {},
      fail: function fail() {}
    });
  };

  e.prototype.preloadVideo = function () {
    return !1;
  };

  e.prototype.showConfirm = function (t) {
    return new Promise(function (e) {
      exports.my.confirm(Object.assign(Object.assign({}, t), {
        success: function success(t) {
          t.confirm ? e(!0) : e(!1);
        },
        fail: function fail() {
          e(!1);
        }
      }));
    });
  };

  e.prototype.refreshGame = function () {
    location.reload();
  };

  e.prototype.showLoading = function () {
    this.isLoading = !0;
    exports.my.showLoading({
      content: "加载中",
      mask: !0
    });
  };

  e.prototype.hideLoading = function () {
    this.isLoading && (exports.my.hideLoading(), this.isLoading = !1);
  };

  e.prototype.log = function () {};

  e.prototype.getMenuBounding = function () {};

  e.prototype.createShareImage = function () {};

  e.prototype.preloadInterstitialAD = function () {};

  e.prototype.showInterstitialAD = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function () {
        return [2, null];
      });
    });
  };

  e.prototype.canShowBanner = function () {
    return !1;
  };

  e.prototype.getBannerSize = function () {
    return new cc.Size(0, 0);
  };

  e.prototype.showBanner = function () {};

  e.prototype.hideBanner = function () {};

  e.prototype.getSubscribeCnt = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function () {
        return [2, 0];
      });
    });
  };

  e.prototype.subscribe = function () {};

  e.prototype.initVideoRecorder = function () {};

  e.prototype.startVideoRecord = function () {};

  e.prototype.pauseVideoRecord = function () {};

  e.prototype.resumeVideoRecord = function () {};

  e.prototype.stopVideoRecord = function () {};

  e.prototype.startStopRecordTimeout = function () {};

  e.prototype.clearStopRecordTimeout = function () {};

  e.prototype.autoStopVideoRecord = function () {};

  e.prototype.onVideoRecordStart = function () {};

  e.prototype.onVideoRecordEnd = function () {};

  e.prototype.onVideoRecordError = function () {};

  e.prototype.hasVideoRecord = function () {};

  e.prototype.shareVideoRecord = function () {};

  e.prototype.uploadAdEvent = function () {};

  e.prototype.PostMessage = function () {};

  e.prototype.SetUserCloudStorage = function () {};

  e.prototype.GetOpenDataContext = function () {};

  e.prototype.addShortcut = function () {};

  e.prototype.checkDesktopExist = function () {
    var t = this;
    return new Promise(function (e) {
      var o = _request["default"].ins;
      t.cDeskCatch = !1;
      o.addHomepageConsult().then(function (o) {
        if (1 === o.status) {
          var n = _uData["default"].ins.getLocalData().aliAddHome;

          var i = "N" === o.data ? 1 : 0;
          1 === n && 0 === i && _evts["default"].opE.emit({
            action: _evts["default"].ALIPAY_MAIN
          });

          _pInfo["default"].ins.setAliAddHome(i);

          e(1);
        } else t.cDeskCatch = !0, e(0);
      })["catch"](function (o) {
        t.cDeskCatch = !0;
        e(0);
        console.error(o);
      });
    });
  };

  e.prototype.addGamesetlattice = function () {
    this.navigateToMiniProgramBySchema("alipays://platformapi/startapp?appId=2021003125685383&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fyuyan%2F180020010001206617%2Findex.html%3FcaprMode%3Dsync&chInfo=gamesetlattice&sms=YES&appClearTop=false", function () {}, function () {});
  };

  e.prototype.share = function () {
    return new Promise(function (t) {
      exports.my.showSharePanel({
        from: "code",
        success: function success() {
          _sound["default"].ins.playBGM();

          t(1);
        },
        fail: function fail(e) {
          console.error("alisharedata fail:", e);

          _sound["default"].ins.playBGM();

          t(0);
        }
      });
    });
  };

  e.prototype.getUserInfo = function () {
    var t = this;
    return new Promise(function (e, n) {
      exports.my.getAuthCode && exports.my.getAuthCode({
        scopes: "auth_user",
        success: function success() {
          exports.my.getAuthUserInfo({
            success: function success(t) {
              var o = t.avatar;
              t.avatar = o.replace("http://", "https://");
              e(t);
            },
            fail: function fail(t) {
              n(t);
            }
          });
        },
        fail: function fail() {
          t.showRefuseTip(e, n);
        }
      });
    });
  };

  e.prototype.showRefuseTip = function (t, e) {
    return __awaiter(this, void 0, void 0, function () {
      var t = this;
      return __generator(this, function () {
        this.showConfirm({
          title: "友情提示",
          content: "申请使用您的用户信息，展示排行榜。",
          confirmButtonText: "允许",
          cancelButtonText: "拒绝"
        }).then(function (o) {
          o ? t.getUserInfo() : e();
        });
        return [2];
      });
    });
  };

  e.prototype._getUserInfo = function () {};

  e.prototype.schemaToParams = function (t) {
    if (!t.startsWith("alipays:")) return {
      message: "! 非 alipays: 开头"
    };

    for (var e = {}, o = 0, n = t.replace(/^.*?\?/, "").split("&").map(function (t) {
      var e = t.includes("=") ? t.indexOf("=") : t.length;
      return [t.slice(0, e), t.slice(e + 1)].map(decodeURIComponent);
    }); o < n.length; o++) {
      var i = n[o];
      var r = i[0];
      var a = i[1];

      if ("appId" == r) {
        if (16 != a.length) return {
          message: "! 非 16 位 appId '" + a + "'"
        };
        e[r] = a;
      } else if ("chInfo" === r) {
        var s = e.startParam || {};
        s[r] = a;
        e.startParam = s;
        continue;
      }
    }

    return {
      params: e
    };
  };

  e.prototype.navigateToMiniProgramBySchema = function (t, e, n) {
    var i = this.schemaToParams(t);
    var a = i.params;
    var s = i.message;
    a ? exports.my.navigateToMiniProgram(__assign(__assign({}, a), {
      success: e,
      fail: n
    })) : n && n({
      error: -1,
      errorMessage: "无效的小程序 schema " + t + ": " + s
    });
  };

  e.prototype.navigateToScene = function (t) {
    void 0 === t && (t = "sidebar");
    this.navigateToMiniProgramBySchema("alipays://platformapi/startapp?appId=2021003125685383&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fyuyan%2F180020010001206617%2Findex.html%3FcaprMode%3Dsync&chInfo=returnvisit&sms=YES&appClearTop=false", function () {}, function () {});
  };

  e.prototype.reportEvent = function (t, e) {
    void 0 === e && (e = {});
  };

  e.prototype.showModal = function (t) {
    var e = t.title;
    var o = t.content;
    var n = t.confirmText;
    var i = (t.showCancel, {
      title: e,
      content: o,
      buttonText: n
    });
    return this.showAlert(i);
  };

  e.prototype.showAlert = function (t) {
    return new Promise(function (e, n) {
      exports.my.alert(Object.assign(Object.assign({}, t), {
        success: function success() {
          e(1);
        },
        fail: function fail(t) {
          console.error(t);
          n(t);
        }
      }));
    });
  };

  e.prototype.requestSubscribeMessage = function () {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }

    return new Promise(function (e, n) {
      exports.my.getSetting({
        withSubscriptions: !0,
        success: function success(i) {
          i.authSetting.subscriptionsSetting.mainSwitch ? e(1) : exports.my.requestSubscribeMessage({
            entityIds: t,
            success: function success(t) {
              t.success && "subscribe" === t.behavior && e(1);
            },
            fail: function fail(t) {
              n(t);
            }
          });
        },
        fail: function fail() {
          n();
        }
      });
    });
  };

  return e;
}(require("pf")["default"]);

exports["default"] = v;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWxpLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm15IiwiX2MiLCJyZXF1aXJlIiwiX2NvbSIsIl9lbnYiLCJfZXZ0cyIsIl9wQ29uc3QiLCJfcmVxdWVzdCIsIl9zb3VuZCIsIl90aW1lIiwiX3VEYXRhIiwiX3BJbmZvIiwidiIsInQiLCJlIiwiY2FsbCIsImlzU2hhcmluZyIsInNka1N3aXRjaCIsIkRlZmF1bHRTREtTd2l0Y2giLCJ2aWRlb0NoZWNrZWRNYXAiLCJ2aWRlb0NoZWNrZWRMYXN0VCIsInVuaXF1ZVZpZGVvVW5pdElkIiwiaXNMb2FkaW5nIiwiaXNMb2dnZWRJbiIsIm9uSGlkZVQiLCJub0FkIiwibm9WaWRlbyIsImxhc3RJbnRlckFkU2hvd1QiLCJzd2l0Y2hlc0luaXRkIiwiZ2FtZVJlY29yZGVyIiwidGEiLCJtX25TdGFydFJlY29yZFQiLCJtX25SZWNvcmRUIiwibV9iSXNSZWNvcmRpbmciLCJtX25BdXRvU3RvcFZpZGVvSWQiLCJtX3N0clZpZGVvUGF0aCIsImNEZXNrQ2F0Y2giLCJpc1JlamVkIiwib25LZXlib2FyZENvbXBsZXRlIiwic3RyaW5nIiwiUEZDb2RlIiwiQWxpcGF5Iiwid2luZG93IiwiZ2xvYmFsVGhpcyIsIlhNTEh0dHBSZXF1ZXN0IiwicHJvdG90eXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJjb25zb2xlIiwibG9nIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibyIsInNvbWUiLCJpbmNsdWRlcyIsImFwcGx5IiwiX19leHRlbmRzIiwiZ2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImluaXQiLCJpbml0QWxpTGlzdGVuZXIiLCJpbml0Q29tbW9uU2V0dGluZyIsImluaXRUZ2EiLCJpc1N3aXRjaGVkSW5pdGQiLCJvblNob3ciLCJwbEUiLCJlbWl0IiwiaW5zIiwic3luY0xhdW5jaE9wdGlvbiIsInJlZW50ZXIiLCJieVNsaWRlciIsInF1ZXJ5Iiwic291cmNlQ2hhbm5lbCIsImNoZWNrRGVza3RvcEV4aXN0IiwidGhlbiIsIm9wRSIsImFjdGlvbiIsIkRlc2t0b3BfQ2hnIiwiU2xpZGVyX0NoZyIsInNpZGViYXJFeGlzdCIsImNhblVzZSIsIm9uSGlkZSIsInNlcnZlclRpbWUiLCJvbkVycm9yIiwiZW52IiwibW9kZSIsIkVNIiwiUFJPRCIsImFsZXJ0IiwidGl0bGUiLCJlcnJvciIsImNvbnRlbnQiLCJzdGFjayIsInNob3dDYW5jZWwiLCJidXR0b25UZXh0IiwiU0RLQ29uZmlnIiwic2hhcmVEYXRhIiwiZ2V0U3lzdGVtRGF0YSIsInBsYXRmb3JtIiwiaW1hZ2VVcmwiLCJvblNoYXJlQXBwTWVzc2FnZSIsImRlc2MiLCJiZ0ltZ1VybCIsInN1Y2Nlc3MiLCJwbGF5QkdNIiwiZmFpbCIsIm9uTWVtb3J5V2FybmluZyIsInRyaWdnZXJHQyIsImkiLCJ2aWRlb0FkIiwiY3JlYXRlUmV3YXJkZWRBZCIsImFkVW5pdElkIiwibG9hZCIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiZ2V0TmV0d29ya1R5cGUiLCJjaEUiLCJvbiIsInNldEFjY291bnRJRCIsIlRFU1QiLCJsb2dpbiIsIl9fYXdhaXRlciIsIl9fZ2VuZXJhdG9yIiwiUHJvbWlzZSIsImdldEF1dGhDb2RlIiwic2NvcGVzIiwiY29kZSIsImF1dGhDb2RlIiwiaW5pdENsb3VkIiwicmVzb2x2ZSIsInN5bmNUaW1lIiwiZ2V0U3RvcmFnZSIsImdldFN0b3JhZ2VTeW5jIiwia2V5IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInNldFN0b3JhZ2UiLCJzZXRTdG9yYWdlU3luYyIsInN0cmluZ2lmeSIsImVycm9yTWVzc2FnZSIsImNsZWFyU3RvcmFnZSIsImNsZWFyU3RvcmFnZVN5bmMiLCJyZW1vdmVTdG9yYWdlIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJ0cmFja0xvZ2luIiwidHJhY2tVc2VyU2V0IiwidHJhY2tVc2VyU2V0T25jZSIsInRyYWNrRXZlbnQiLCJnZXRTZXEiLCJjb25zdW1lU2VxIiwibGFiZWwiLCJzZXF1ZW5jZUluZm8iLCJ0eXBlIiwiU1REU2VxVHlwZSIsIlZJREVPIiwiZG9XYXRjaEFEIiwic2VudCIsImRvU2hhcmUiLCJyZWplY3QiLCJWaWRlb0ZhaWxDb2RlIiwiTk9fQUQiLCJhZEUiLCJBREUiLCJzaG93TG9hZGluZyIsIm9uQ2xvc2UiLCJpc0VuZGVkIiwiVklERU9fRU5EIiwic3RlcCIsInVuaXQiLCJ2aWRlb1NvdXJjZSIsIml0ZW0iLCJDQU5DRUxFRCIsInNob3ciLCJoaWRlTG9hZGluZyIsIl9hc2tSZVNoYXJlIiwiY29tcGFyZVZlcnNpb24iLCJ2ZXJzaW9uIiwic3lzdGVtSW5mb0NhY2hlIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJEZWZhdWx0U3lzdGVtSW5mbyIsImdldFN3aXRjaGVzIiwidmlicmF0ZSIsIlZFbnVtNCIsIlNIT1JUIiwidmlicmF0ZVNob3J0IiwiTE9ORyIsInZpYnJhdGVMb25nIiwicHJlbG9hZFZpZGVvIiwic2hvd0NvbmZpcm0iLCJjb25maXJtIiwiYXNzaWduIiwicmVmcmVzaEdhbWUiLCJsb2NhdGlvbiIsInJlbG9hZCIsIm1hc2siLCJnZXRNZW51Qm91bmRpbmciLCJjcmVhdGVTaGFyZUltYWdlIiwicHJlbG9hZEludGVyc3RpdGlhbEFEIiwic2hvd0ludGVyc3RpdGlhbEFEIiwiY2FuU2hvd0Jhbm5lciIsImdldEJhbm5lclNpemUiLCJjYyIsIlNpemUiLCJzaG93QmFubmVyIiwiaGlkZUJhbm5lciIsImdldFN1YnNjcmliZUNudCIsInN1YnNjcmliZSIsImluaXRWaWRlb1JlY29yZGVyIiwic3RhcnRWaWRlb1JlY29yZCIsInBhdXNlVmlkZW9SZWNvcmQiLCJyZXN1bWVWaWRlb1JlY29yZCIsInN0b3BWaWRlb1JlY29yZCIsInN0YXJ0U3RvcFJlY29yZFRpbWVvdXQiLCJjbGVhclN0b3BSZWNvcmRUaW1lb3V0IiwiYXV0b1N0b3BWaWRlb1JlY29yZCIsIm9uVmlkZW9SZWNvcmRTdGFydCIsIm9uVmlkZW9SZWNvcmRFbmQiLCJvblZpZGVvUmVjb3JkRXJyb3IiLCJoYXNWaWRlb1JlY29yZCIsInNoYXJlVmlkZW9SZWNvcmQiLCJ1cGxvYWRBZEV2ZW50IiwiUG9zdE1lc3NhZ2UiLCJTZXRVc2VyQ2xvdWRTdG9yYWdlIiwiR2V0T3BlbkRhdGFDb250ZXh0IiwiYWRkU2hvcnRjdXQiLCJhZGRIb21lcGFnZUNvbnN1bHQiLCJzdGF0dXMiLCJnZXRMb2NhbERhdGEiLCJhbGlBZGRIb21lIiwiQUxJUEFZX01BSU4iLCJzZXRBbGlBZGRIb21lIiwiYWRkR2FtZXNldGxhdHRpY2UiLCJuYXZpZ2F0ZVRvTWluaVByb2dyYW1CeVNjaGVtYSIsInNoYXJlIiwic2hvd1NoYXJlUGFuZWwiLCJmcm9tIiwiZ2V0VXNlckluZm8iLCJnZXRBdXRoVXNlckluZm8iLCJhdmF0YXIiLCJyZXBsYWNlIiwic2hvd1JlZnVzZVRpcCIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsIl9nZXRVc2VySW5mbyIsInNjaGVtYVRvUGFyYW1zIiwic3RhcnRzV2l0aCIsIm1lc3NhZ2UiLCJzcGxpdCIsIm1hcCIsImluZGV4T2YiLCJzbGljZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInIiLCJhIiwicyIsInN0YXJ0UGFyYW0iLCJwYXJhbXMiLCJuYXZpZ2F0ZVRvTWluaVByb2dyYW0iLCJfX2Fzc2lnbiIsIm5hdmlnYXRlVG9TY2VuZSIsInJlcG9ydEV2ZW50Iiwic2hvd01vZGFsIiwiY29uZmlybVRleHQiLCJzaG93QWxlcnQiLCJyZXF1ZXN0U3Vic2NyaWJlTWVzc2FnZSIsImdldFNldHRpbmciLCJ3aXRoU3Vic2NyaXB0aW9ucyIsImF1dGhTZXR0aW5nIiwic3Vic2NyaXB0aW9uc1NldHRpbmciLCJtYWluU3dpdGNoIiwiZW50aXR5SWRzIiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVB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O0lBbUJILENBcEJNLENBQVA7RUFxQkgsQ0F2QkQ7O0VBd0JBLE9BQU9tQixDQUFQO0FBQ0gsQ0EzZ0JPLENBMmdCTFosT0FBTyxDQUFDLElBQUQsQ0FBUCxXQTNnQkssQ0FBUjs7QUE0Z0JBSixPQUFPLFdBQVAsR0FBa0JjLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7XG5leHBvcnRzLm15ID0gdm9pZCAwO1xudmFyIF9jID0gcmVxdWlyZShcImNcIik7XG52YXIgX2NvbSA9IHJlcXVpcmUoXCJjb21cIik7XG52YXIgX2VudiA9IHJlcXVpcmUoXCJlbnZcIik7XG52YXIgX2V2dHMgPSByZXF1aXJlKFwiZXZ0c1wiKTtcbnZhciBfcENvbnN0ID0gcmVxdWlyZShcInBDb25zdFwiKTtcbnZhciBfcmVxdWVzdCA9IHJlcXVpcmUoXCJyZXF1ZXN0XCIpO1xudmFyIF9zb3VuZCA9IHJlcXVpcmUoXCJzb3VuZFwiKTtcbnZhciBfdGltZSA9IHJlcXVpcmUoXCJ0aW1lXCIpO1xudmFyIF91RGF0YSA9IHJlcXVpcmUoXCJ1RGF0YVwiKTtcbnZhciBfcEluZm8gPSByZXF1aXJlKFwicEluZm9cIik7XG52YXIgdiA9IChmdW5jdGlvbih0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSB0LmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgZS5pc1NoYXJpbmcgPSAhMTtcbiAgICAgICAgZS5zZGtTd2l0Y2ggPSBfcENvbnN0LkRlZmF1bHRTREtTd2l0Y2g7XG4gICAgICAgIGUudmlkZW9DaGVja2VkTWFwID0ge307XG4gICAgICAgIGUudmlkZW9DaGVja2VkTGFzdFQgPSB7fTtcbiAgICAgICAgZS51bmlxdWVWaWRlb1VuaXRJZCA9IFwiYWRfdGlueV8yMDIxMDA0MTMzNjU2MTgzXzIwMjQwMTI5MjIwMDA4MDY5OFwiO1xuICAgICAgICBlLmlzTG9hZGluZyA9ICExO1xuICAgICAgICBlLmlzTG9nZ2VkSW4gPSAhMTtcbiAgICAgICAgZS5vbkhpZGVUID0gMDtcbiAgICAgICAgZS5ub0FkID0gITE7XG4gICAgICAgIGUubm9WaWRlbyA9ICExO1xuICAgICAgICBlLmxhc3RJbnRlckFkU2hvd1QgPSAwO1xuICAgICAgICBlLnN3aXRjaGVzSW5pdGQgPSAhMTtcbiAgICAgICAgZS5nYW1lUmVjb3JkZXIgPSBudWxsO1xuICAgICAgICBlLnRhID0gbnVsbDtcbiAgICAgICAgZS5tX25TdGFydFJlY29yZFQgPSAwO1xuICAgICAgICBlLm1fblJlY29yZFQgPSAwO1xuICAgICAgICBlLm1fYklzUmVjb3JkaW5nID0gITE7XG4gICAgICAgIGUubV9uQXV0b1N0b3BWaWRlb0lkID0gMDtcbiAgICAgICAgZS5tX3N0clZpZGVvUGF0aCA9IFwiXCI7XG4gICAgICAgIGUuY0Rlc2tDYXRjaCA9ICExO1xuICAgICAgICBlLmlzUmVqZWQgPSAhMTtcbiAgICAgICAgZS5vbktleWJvYXJkQ29tcGxldGUgPSBudWxsID09PSBleHBvcnRzLm15IHx8IHZvaWQgMCA9PT0gZXhwb3J0cy5teSA/IHZvaWQgMCA6IGV4cG9ydHMubXkub25LZXlib2FyZENvbXBsZXRlO1xuICAgICAgICBleHBvcnRzLm15ID0gZS5zdHJpbmcoKSA9PT0gX3BDb25zdC5QRkNvZGUuQWxpcGF5ID8gd2luZG93Lm15IDogZ2xvYmFsVGhpcy5teTtcbiAgICAgICAgWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLmdldFJlc3BvbnNlSGVhZGVyID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgdmFyIG4gPSBjb25zb2xlLmxvZztcbiAgICAgICAgY29uc29sZS5sb2cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSBbXSwgZSA9IDA7IGUgPCBhcmd1bWVudHMubGVuZ3RoOyBlKyspIHRbZV0gPSBhcmd1bWVudHNbZV07XG4gICAgICAgICAgICB2YXIgbyA9IHQuc29tZShmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgJiYgdC5pbmNsdWRlcyhcIuWGheWuueW3oeajgFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbyB8fCBuLmFwcGx5KGNvbnNvbGUsIHQpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSwgXCJhcHBJZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIyMDIxMDA0MTMzNjU2MTgzXCI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgfSk7XG4gICAgZS5wcm90b3R5cGUuc3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcENvbnN0LlBGQ29kZS5BbGlwYXk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaW5pdEFsaUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuaW5pdENvbW1vblNldHRpbmcoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRUZ2EgPSBmdW5jdGlvbigpIHt9O1xuICAgIGUucHJvdG90eXBlLmlzU3dpdGNoZWRJbml0ZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zd2l0Y2hlc0luaXRkO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdEFsaUxpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgZXhwb3J0cy5teS5vblNob3coZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgX2V2dHMuZGVmYXVsdC5wbEUuZW1pdCh7IG9uU2hvdzogITAsIGlzU2hhcmluZzogdC5pc1NoYXJpbmcgfSksXG4gICAgICAgICAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnN5bmNMYXVuY2hPcHRpb24oZSksXG4gICAgICAgICAgICAgICAgdC5pc1NoYXJpbmcgfHwgdC5yZWVudGVyKCksXG4gICAgICAgICAgICAgICAgKHQuYnlTbGlkZXIgPSBcImdhbWVjZW50ZXJcIiA9PSBlLnF1ZXJ5LnNvdXJjZUNoYW5uZWwpLFxuICAgICAgICAgICAgICAgIHQuY2hlY2tEZXNrdG9wRXhpc3QoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfZXZ0cy5kZWZhdWx0Lm9wRS5lbWl0KHsgYWN0aW9uOiBfZXZ0cy5kZWZhdWx0LkRlc2t0b3BfQ2hnIH0pO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF9ldnRzLmRlZmF1bHQub3BFLmVtaXQoeyBhY3Rpb246IF9ldnRzLmRlZmF1bHQuU2xpZGVyX0NoZyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHQuc2lkZWJhckV4aXN0ID0gdC5jYW5Vc2UoXCIxMC41LjYwXCIpO1xuICAgICAgICBleHBvcnRzLm15Lm9uSGlkZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICh0Lm9uSGlkZVQgPSBfdGltZS5kZWZhdWx0Lmlucy5zZXJ2ZXJUaW1lKSwgX2V2dHMuZGVmYXVsdC5wbEUuZW1pdCh7IG9uSGlkZTogITAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBleHBvcnRzLm15Lm9uRXJyb3IoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgX2Vudi5lbnYubW9kZSAhPT0gX2Vudi5FTS5QUk9EICYmXG4gICAgICAgICAgICAgICAgZXhwb3J0cy5teS5hbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0LmVycm9yIHx8IFwi5byC5bi45oql6ZSZXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHQuc3RhY2sgfHwgdCArIFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6ICExLFxuICAgICAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIuWlveeahFwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZSA9IF9wQ29uc3QuU0RLQ29uZmlnLnNoYXJlRGF0YSgpO1xuICAgICAgICB2YXIgbiA9XG4gICAgICAgICAgICBcImlPU1wiID09PSB0aGlzLmdldFN5c3RlbURhdGEoKS5wbGF0Zm9ybSB8fCBcImlQaG9uZSBPU1wiID09PSB0aGlzLmdldFN5c3RlbURhdGEoKS5wbGF0Zm9ybSA/XG4gICAgICAgICAgICBcImh0dHBzOi8vdGprajMwMC5vc3MtY24tc2hlbnpoZW4uYWxpeXVuY3MuY29tL3dlYi90amtqMzAwd2ViL290aGVyL3NoYXJlLmpwZ1wiIDpcbiAgICAgICAgICAgIGUuaW1hZ2VVcmw7XG4gICAgICAgIGV4cG9ydHMubXkub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGUudGl0bGUsXG4gICAgICAgICAgICAgICAgZGVzYzogXCJcIixcbiAgICAgICAgICAgICAgICBiZ0ltZ1VybDogbixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX3NvdW5kLmRlZmF1bHQuaW5zLnBsYXlCR00oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfc291bmQuZGVmYXVsdC5pbnMucGxheUJHTSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGV4cG9ydHMubXkub25NZW1vcnlXYXJuaW5nICYmXG4gICAgICAgICAgICBleHBvcnRzLm15Lm9uTWVtb3J5V2FybmluZyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBleHBvcnRzLm15LnRyaWdnZXJHQyAmJiBleHBvcnRzLm15LnRyaWdnZXJHQygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHZhciBpID0gdGhpcy51bmlxdWVWaWRlb1VuaXRJZDtcbiAgICAgICAgbnVsbCA9PSB0aGlzLnZpZGVvQWQgJiYgKHRoaXMudmlkZW9BZCA9IGV4cG9ydHMubXkuY3JlYXRlUmV3YXJkZWRBZCh7IGFkVW5pdElkOiBpIH0pKTtcbiAgICAgICAgbnVsbCA9PSB0aGlzLnZpZGVvQWQgJiYgdGhpcy52aWRlb0FkLmxvYWQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRDb21tb25TZXR0aW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zeW5jTGF1bmNoT3B0aW9uKGV4cG9ydHMubXkuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKSk7XG4gICAgICAgIGV4cG9ydHMubXkuZ2V0TmV0d29ya1R5cGUoeyBzdWNjZXNzOiBmdW5jdGlvbigpIHt9LCBmYWlsOiBmdW5jdGlvbigpIHt9IH0pO1xuICAgICAgICBfZXZ0cy5kZWZhdWx0LmNoRS5vbihmdW5jdGlvbigpIHt9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldEFjY291bnRJRCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBfZW52LmVudi5tb2RlO1xuICAgICAgICBfZW52LkVNLlRFU1Q7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5sb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzLm15LmdldEF1dGhDb2RlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZXM6IFwiYXV0aF9iYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmNvZGUgPSBlLmF1dGhDb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdChvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAobikge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm15LmdldEF1dGhDb2RlIOiwg+eUqOWksei0pVwiLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCh7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRDbG91ZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3luY1RpbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJlZW50ZXIgPSBmdW5jdGlvbigpIHt9O1xuICAgIGUucHJvdG90eXBlLmdldFN0b3JhZ2UgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgZSA9IGV4cG9ydHMubXkuZ2V0U3RvcmFnZVN5bmMoeyBrZXk6IHQgfSk7XG4gICAgICAgICAgICByZXR1cm4gZS5zdWNjZXNzID9cbiAgICAgICAgICAgICAgICBudWxsID09IGUuZGF0YSB8fCBcIlwiID09IGUuZGF0YSA/XG4gICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgSlNPTi5wYXJzZShlLmRhdGEpIDpcbiAgICAgICAgICAgICAgICBudWxsID09IGUgfHwgXCJcIiA9PSBlID9cbiAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICBKU09OLnBhcnNlKGUpO1xuICAgICAgICB9IGNhdGNoIChuKSB7fVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0U3RvcmFnZSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBuID0gZXhwb3J0cy5teS5zZXRTdG9yYWdlU3luYyh7IGtleTogdCwgZGF0YTogSlNPTi5zdHJpbmdpZnkoZSkgfSk7XG4gICAgICAgICAgICBuLnN1Y2Nlc3MgfHwgY29uc29sZS5lcnJvcihcInNldFN0b3JhZ2VTeW5jIGZhaWxcIiwgbi5lcnJvck1lc3NhZ2UsIFwiXFxuXCIsIG4uZXJyb3IpO1xuICAgICAgICB9IGNhdGNoIChpKSB7fVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xlYXJTdG9yYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBleHBvcnRzLm15LmNsZWFyU3RvcmFnZVN5bmMoKTtcbiAgICAgICAgfSBjYXRjaCAodCkge31cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJlbW92ZVN0b3JhZ2UgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBleHBvcnRzLm15LnJlbW92ZVN0b3JhZ2VTeW5jKHQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudHJhY2tMb2dpbiA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUudHJhY2tVc2VyU2V0ID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS50cmFja1VzZXJTZXRPbmNlID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS50cmFja0V2ZW50ID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5nZXRTZXEgPSBmdW5jdGlvbigpIHt9O1xuICAgIGUucHJvdG90eXBlLmNvbnN1bWVTZXEgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuc2VxdWVuY2VJbmZvLnR5cGUgIT0gX3BDb25zdC5TVERTZXFUeXBlLlZJREVPID8gWzMsIDJdIDogWzQsIHRoaXMuZG9XYXRjaEFEKHQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zZW50KCksIHRoaXMuZG9TaGFyZSgpLCAoZS5sYWJlbCA9IDIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmRvV2F0Y2hBRCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub0FkID8gWzJdIDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub1ZpZGVvID9cbiAgICAgICAgICAgICAgICAgICAgKGNvbnNvbGUuZXJyb3IoXCJbZXJyb3JdIG5vIHZpZGVvXCIpLCBbMiwgUHJvbWlzZS5yZWplY3QoX3BDb25zdC5WaWRlb0ZhaWxDb2RlLk5PX0FEKV0pIDpcbiAgICAgICAgICAgICAgICAgICAgKF9ldnRzLmRlZmF1bHQuYWRFLmVtaXQoX2MuQURFLlZJREVPKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlID0gdGhpcyksIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG8sIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS52aWRlb0FkLm9uQ2xvc2UoZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPSBpICYmIGkuaXNFbmRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9ldnRzLmRlZmF1bHQuYWRFLmVtaXQoX2MuQURFLlZJREVPX0VORCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudHJhY2tFdmVudChcInZpZGVvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IFwiY29tcGxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQ6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHQudmlkZW9Tb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiB0Lml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8oMSkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2V2dHMuZGVmYXVsdC5hZEUuZW1pdChfYy5BREUuVklERU9fRU5EKSwgbihfcENvbnN0LlZpZGVvRmFpbENvZGUuQ0FOQ0VMRUQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudmlkZW9BZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxvYWQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS52aWRlb0FkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ldnRzLmRlZmF1bHQuYWRFLmVtaXQoX2MuQURFLlZJREVPX0VORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnZpZGVvQWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbihfcENvbnN0LlZpZGVvRmFpbENvZGUuTk9fQUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4oX3BDb25zdC5WaWRlb0ZhaWxDb2RlLk5PX0FEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5kb1NoYXJlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5fYXNrUmVTaGFyZSA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUuY2FuVXNlID0gZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gX2NvbS5kZWZhdWx0Lmlucy5jb21wYXJlVmVyc2lvbih0aGlzLmdldFN5c3RlbURhdGEoKS52ZXJzaW9uLCB0KSA+PSAwO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0U3lzdGVtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobnVsbCA9PSB0aGlzLnN5c3RlbUluZm9DYWNoZSlcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zeXN0ZW1JbmZvQ2FjaGUgPSBleHBvcnRzLm15LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wQ29uc3QuRGVmYXVsdFN5c3RlbUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUluZm9DYWNoZTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFN3aXRjaGVzID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS52aWJyYXRlID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0ID09IF9wQ29uc3QuVkVudW00LlNIT1JUID9cbiAgICAgICAgICAgIGV4cG9ydHMubXkudmlicmF0ZVNob3J0KFwiaGVhdnlcIikgOlxuICAgICAgICAgICAgdCA9PSBfcENvbnN0LlZFbnVtNC5MT05HICYmIGV4cG9ydHMubXkudmlicmF0ZUxvbmcoeyBzdWNjZXNzOiBmdW5jdGlvbigpIHt9LCBmYWlsOiBmdW5jdGlvbigpIHt9IH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucHJlbG9hZFZpZGVvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhMTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNob3dDb25maXJtID0gZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZXhwb3J0cy5teS5jb25maXJtKFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdCksIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5jb25maXJtID8gZSghMCkgOiBlKCExKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlKCExKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJlZnJlc2hHYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd0xvYWRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSAhMDtcbiAgICAgICAgZXhwb3J0cy5teS5zaG93TG9hZGluZyh7IGNvbnRlbnQ6IFwi5Yqg6L295LitXCIsIG1hc2s6ICEwIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGlkZUxvYWRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgJiYgKGV4cG9ydHMubXkuaGlkZUxvYWRpbmcoKSwgKHRoaXMuaXNMb2FkaW5nID0gITEpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUuZ2V0TWVudUJvdW5kaW5nID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5jcmVhdGVTaGFyZUltYWdlID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5wcmVsb2FkSW50ZXJzdGl0aWFsQUQgPSBmdW5jdGlvbigpIHt9O1xuICAgIGUucHJvdG90eXBlLnNob3dJbnRlcnN0aXRpYWxBRCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG51bGxdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2FuU2hvd0Jhbm5lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRCYW5uZXJTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2MuU2l6ZSgwLCAwKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNob3dCYW5uZXIgPSBmdW5jdGlvbigpIHt9O1xuICAgIGUucHJvdG90eXBlLmhpZGVCYW5uZXIgPSBmdW5jdGlvbigpIHt9O1xuICAgIGUucHJvdG90eXBlLmdldFN1YnNjcmliZUNudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIDBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5pbml0VmlkZW9SZWNvcmRlciA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUuc3RhcnRWaWRlb1JlY29yZCA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUucGF1c2VWaWRlb1JlY29yZCA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUucmVzdW1lVmlkZW9SZWNvcmQgPSBmdW5jdGlvbigpIHt9O1xuICAgIGUucHJvdG90eXBlLnN0b3BWaWRlb1JlY29yZCA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUuc3RhcnRTdG9wUmVjb3JkVGltZW91dCA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUuY2xlYXJTdG9wUmVjb3JkVGltZW91dCA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUuYXV0b1N0b3BWaWRlb1JlY29yZCA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUub25WaWRlb1JlY29yZFN0YXJ0ID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5vblZpZGVvUmVjb3JkRW5kID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5vblZpZGVvUmVjb3JkRXJyb3IgPSBmdW5jdGlvbigpIHt9O1xuICAgIGUucHJvdG90eXBlLmhhc1ZpZGVvUmVjb3JkID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5zaGFyZVZpZGVvUmVjb3JkID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS51cGxvYWRBZEV2ZW50ID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5Qb3N0TWVzc2FnZSA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUuU2V0VXNlckNsb3VkU3RvcmFnZSA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUuR2V0T3BlbkRhdGFDb250ZXh0ID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5hZGRTaG9ydGN1dCA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUuY2hlY2tEZXNrdG9wRXhpc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIG8gPSBfcmVxdWVzdC5kZWZhdWx0LmlucztcbiAgICAgICAgICAgIHQuY0Rlc2tDYXRjaCA9ICExO1xuICAgICAgICAgICAgby5hZGRIb21lcGFnZUNvbnN1bHQoKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDEgPT09IG8uc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5hbGlBZGRIb21lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBcIk5cIiA9PT0gby5kYXRhID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAxID09PSBuICYmIDAgPT09IGkgJiYgX2V2dHMuZGVmYXVsdC5vcEUuZW1pdCh7IGFjdGlvbjogX2V2dHMuZGVmYXVsdC5BTElQQVlfTUFJTiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wSW5mby5kZWZhdWx0Lmlucy5zZXRBbGlBZGRIb21lKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlKHQuY0Rlc2tDYXRjaCA9ICEwKSwgZSgwKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuY0Rlc2tDYXRjaCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBlKDApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKG8pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmFkZEdhbWVzZXRsYXR0aWNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGVUb01pbmlQcm9ncmFtQnlTY2hlbWEoXG4gICAgICAgICAgICBcImFsaXBheXM6Ly9wbGF0Zm9ybWFwaS9zdGFydGFwcD9hcHBJZD0yMDIxMDAzMTI1Njg1MzgzJnVybD1odHRwcyUzQSUyRiUyRnJlbmRlci5hbGlwYXkuY29tJTJGcCUyRnl1eWFuJTJGMTgwMDIwMDEwMDAxMjA2NjE3JTJGaW5kZXguaHRtbCUzRmNhcHJNb2RlJTNEc3luYyZjaEluZm89Z2FtZXNldGxhdHRpY2Umc21zPVlFUyZhcHBDbGVhclRvcD1mYWxzZVwiLFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge31cbiAgICAgICAgKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNoYXJlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICBleHBvcnRzLm15LnNob3dTaGFyZVBhbmVsKHtcbiAgICAgICAgICAgICAgICBmcm9tOiBcImNvZGVcIixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX3NvdW5kLmRlZmF1bHQuaW5zLnBsYXlCR00oKTtcbiAgICAgICAgICAgICAgICAgICAgdCgxKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImFsaXNoYXJlZGF0YSBmYWlsOlwiLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgX3NvdW5kLmRlZmF1bHQuaW5zLnBsYXlCR00oKTtcbiAgICAgICAgICAgICAgICAgICAgdCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRVc2VySW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlLCBuKSB7XG4gICAgICAgICAgICBleHBvcnRzLm15LmdldEF1dGhDb2RlICYmXG4gICAgICAgICAgICAgICAgZXhwb3J0cy5teS5nZXRBdXRoQ29kZSh7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlczogXCJhdXRoX3VzZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzLm15LmdldEF1dGhVc2VySW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHQuYXZhdGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmF2YXRhciA9IG8ucmVwbGFjZShcImh0dHA6Ly9cIiwgXCJodHRwczovL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbih0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnNob3dSZWZ1c2VUaXAoZSwgbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93UmVmdXNlVGlwID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi5Y+L5oOF5o+Q56S6XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi55Sz6K+35L2/55So5oKo55qE55So5oi35L+h5oGv77yM5bGV56S65o6S6KGM5qac44CCXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIuWFgeiuuFwiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIuaLkue7nVwiXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgIG8gPyB0LmdldFVzZXJJbmZvKCkgOiBlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLl9nZXRVc2VySW5mbyA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUuc2NoZW1hVG9QYXJhbXMgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIGlmICghdC5zdGFydHNXaXRoKFwiYWxpcGF5czpcIikpIHJldHVybiB7IG1lc3NhZ2U6IFwiISDpnZ4gYWxpcGF5czog5byA5aS0XCIgfTtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICAgIHZhciBlID0ge30sXG4gICAgICAgICAgICAgICAgbyA9IDAsXG4gICAgICAgICAgICAgICAgbiA9IHRcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXi4qP1xcPy8sIFwiXCIpXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiJlwiKVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHQuaW5jbHVkZXMoXCI9XCIpID8gdC5pbmRleE9mKFwiPVwiKSA6IHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3Quc2xpY2UoMCwgZSksIHQuc2xpY2UoZSArIDEpXS5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9KTsgbyA8IG4ubGVuZ3RoOyBvKytcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG5bb107XG4gICAgICAgICAgICB2YXIgciA9IGlbMF07XG4gICAgICAgICAgICB2YXIgYSA9IGlbMV07XG4gICAgICAgICAgICBpZiAoXCJhcHBJZFwiID09IHIpIHtcbiAgICAgICAgICAgICAgICBpZiAoMTYgIT0gYS5sZW5ndGgpIHJldHVybiB7IG1lc3NhZ2U6IFwiISDpnZ4gMTYg5L2NIGFwcElkICdcIiArIGEgKyBcIidcIiB9O1xuICAgICAgICAgICAgICAgIGVbcl0gPSBhO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcImNoSW5mb1wiID09PSByKSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBlLnN0YXJ0UGFyYW0gfHwge307XG4gICAgICAgICAgICAgICAgc1tyXSA9IGE7XG4gICAgICAgICAgICAgICAgZS5zdGFydFBhcmFtID0gcztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXJhbXM6IGUgfTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm5hdmlnYXRlVG9NaW5pUHJvZ3JhbUJ5U2NoZW1hID0gZnVuY3Rpb24odCwgZSwgbikge1xuICAgICAgICB2YXIgaSA9IHRoaXMuc2NoZW1hVG9QYXJhbXModCk7XG4gICAgICAgIHZhciBhID0gaS5wYXJhbXM7XG4gICAgICAgIHZhciBzID0gaS5tZXNzYWdlO1xuICAgICAgICBhXG4gICAgICAgICAgICA/XG4gICAgICAgICAgICBleHBvcnRzLm15Lm5hdmlnYXRlVG9NaW5pUHJvZ3JhbShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYSksIHsgc3VjY2VzczogZSwgZmFpbDogbiB9KSkgOlxuICAgICAgICAgICAgbiAmJiBuKHsgZXJyb3I6IC0xLCBlcnJvck1lc3NhZ2U6IFwi5peg5pWI55qE5bCP56iL5bqPIHNjaGVtYSBcIiArIHQgKyBcIjogXCIgKyBzIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubmF2aWdhdGVUb1NjZW5lID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2b2lkIDAgPT09IHQgJiYgKHQgPSBcInNpZGViYXJcIik7XG4gICAgICAgIHRoaXMubmF2aWdhdGVUb01pbmlQcm9ncmFtQnlTY2hlbWEoXG4gICAgICAgICAgICBcImFsaXBheXM6Ly9wbGF0Zm9ybWFwaS9zdGFydGFwcD9hcHBJZD0yMDIxMDAzMTI1Njg1MzgzJnVybD1odHRwcyUzQSUyRiUyRnJlbmRlci5hbGlwYXkuY29tJTJGcCUyRnl1eWFuJTJGMTgwMDIwMDEwMDAxMjA2NjE3JTJGaW5kZXguaHRtbCUzRmNhcHJNb2RlJTNEc3luYyZjaEluZm89cmV0dXJudmlzaXQmc21zPVlFUyZhcHBDbGVhclRvcD1mYWxzZVwiLFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge31cbiAgICAgICAgKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJlcG9ydEV2ZW50ID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICB2b2lkIDAgPT09IGUgJiYgKGUgPSB7fSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93TW9kYWwgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBlID0gdC50aXRsZTtcbiAgICAgICAgdmFyIG8gPSB0LmNvbnRlbnQ7XG4gICAgICAgIHZhciBuID0gdC5jb25maXJtVGV4dDtcbiAgICAgICAgdmFyIGkgPSAodC5zaG93Q2FuY2VsLCB7IHRpdGxlOiBlLCBjb250ZW50OiBvLCBidXR0b25UZXh0OiBuIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5zaG93QWxlcnQoaSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93QWxlcnQgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlLCBuKSB7XG4gICAgICAgICAgICBleHBvcnRzLm15LmFsZXJ0KFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdCksIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlKDEpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbih0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJlcXVlc3RTdWJzY3JpYmVNZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIHQgPSBbXSwgZSA9IDA7IGUgPCBhcmd1bWVudHMubGVuZ3RoOyBlKyspIHRbZV0gPSBhcmd1bWVudHNbZV07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlLCBuKSB7XG4gICAgICAgICAgICBleHBvcnRzLm15LmdldFNldHRpbmcoe1xuICAgICAgICAgICAgICAgIHdpdGhTdWJzY3JpcHRpb25zOiAhMCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgIGkuYXV0aFNldHRpbmcuc3Vic2NyaXB0aW9uc1NldHRpbmcubWFpblN3aXRjaCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBlKDEpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHMubXkucmVxdWVzdFN1YnNjcmliZU1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkczogdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuc3VjY2VzcyAmJiBcInN1YnNjcmliZVwiID09PSB0LmJlaGF2aW9yICYmIGUoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4odCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBlO1xufSkocmVxdWlyZShcInBmXCIpLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjsiXX0=