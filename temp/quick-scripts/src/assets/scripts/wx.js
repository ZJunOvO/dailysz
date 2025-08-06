"use strict";
cc._RF.push(module, 'd8c17AniaBK/rPvMyFh2kSV', 'wx');
// scripts/wx.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _idx = require("idx");

var _env = require("env");

var _evts = require("evts");

var _pConst = require("pConst");

var _uData = require("uData");

var _c = require("c");

var _adC = require("adC");

var _com = require("com");

var _sound = require("sound");

var _time = require("time");

var _pf = require("pf");

var _errorCode = require("errorCode");

var _ = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isSharing = !1;
    e.sdkSwitch = _pConst.DefaultSDKSwitch;
    e.videoCheckedMap = {};
    e.videoCheckedLastT = {};
    e.videoMap = {};
    e.isLoading = !1;
    e.isLoggedIn = !1;
    e.onHideT = 0;
    e.noAd = !1;
    e.noVideo = !1;
    e.lastInterAdShowT = 0;
    e.switchesInitd = !1;
    e.ta = null;
    e._share_callback = null;
    e.interstitialAd = null;
    e.interAdReady = !1;
    e.m_bInitBanner = null;
    e.m_bBannerShowed = !1;
    e.m_banner = null;

    e.SetUserCloudStorage = function (t, e, o) {
      var n = new Date();
      wx.setUserCloudStorage({
        KVDataList: [{
          key: "level",
          value: t.toString() + "#" + n.getTime().toString() + "#" + e.toString() + "#" + o.toString()
        }],
        success: function success() {},
        fail: function fail() {}
      });
    };

    e.onKeyboardComplete = wx.onKeyboardComplete;
    e.requirePrivacyAuthorize = e.canUse("2.32.3") && wx.requirePrivacyAuthorize;
    return e;
  }

  __extends(e, t);

  Object.defineProperty(e.prototype, "appId", {
    get: function get() {
      return "wx6ff5aa14de283fd7";
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.string = function () {
    return _pConst.PFCode.Wechat;
  };

  e.prototype.init = function () {
    this.initVersion();
    this.initWechatListener();
    this.initCommonSetting();
    this.initTga();
  };

  e.prototype.initVersion = function () {
    var t;
    var e;
    this.version = wx.getAccountInfoSync && (null === (e = null === (t = wx.getAccountInfoSync()) || void 0 === t ? void 0 : t.miniProgram) || void 0 === e ? void 0 : e.version);
  };

  e.prototype.initTga = function () {};

  e.prototype.isSwitchedInitd = function () {};

  e.prototype.initWechatListener = function () {
    var t = this;
    wx.onShow(function (e) {
      _sound["default"].ins.playBGM(), _evts["default"].plE.emit({
        onShow: !0,
        isSharing: t.isSharing
      }), _uData["default"].ins.syncLaunchOption(e), t.isSharing || t.reenter(), t._share_callback && t._share_callback();
    });
    wx.onHide(function () {
      t.onHideT = _time["default"].ins.serverTime, _evts["default"].plE.emit({
        onHide: !0
      });
    });
    wx.onError(function (t) {
      _env.env.mode !== _env.EM.PROD && wx.showModal({
        title: t.message || "异常报错",
        content: t.stack || "",
        showCancel: !1,
        confirmText: "好的"
      });
    });
    wx.onShareAppMessage(function () {
      return _pConst.SDKConfig.shareData();
    });
    wx.showShareMenu({
      withShareTicket: !0
    });
    this.canUse("2.0.2") || "qq" === this.getSystemData().AppPlatform && wx.onMemoryWarning(function () {
      wx.triggerGC();
    });
    var e = wx.getUpdateManager();
    e.onCheckForUpdate(function () {});
    e.onUpdateFailed(function () {});
    e.onUpdateReady(function () {
      wx.showModal({
        title: "更新提示",
        content: "新版本已经准备好，是否重启小游戏？",
        success: function success(t) {
          t.confirm && e.applyUpdate();
        }
      });
    });
  };

  e.prototype.initCommonSetting = function () {
    _uData["default"].ins.syncLaunchOption(wx.getLaunchOptionsSync());

    wx.getNetworkType({
      success: function success(t) {
        _uData["default"].ins.network = t;
      },
      fail: function fail() {}
    });

    _evts["default"].chE.on(function () {});
  };

  e.prototype.setAccountID = function () {};

  e.prototype.login = function () {
    return new Promise(function (t, e) {
      wx.login({
        success: function success(o) {
          o && o.code ? (_idx.platform.cloud || (_idx.platform.cloud = wx.cloud && wx.cloud.init && (wx.cloud.init({
            env: ""
          }), _idx.platform.cloud = wx.cloud))).callFunction({
            name: "gOpenId",
            success: function success(e) {
              var n = e.result;
              if (n) if ("string" == typeof n) try {
                var i = JSON.parse(n);
                o.openid = i.i;
              } catch (e) {} else o.openid = n.i;
              t(o);
            },
            fail: function fail(t) {
              console.error("err:", t);
              e(_errorCode.errorCode.PF_CLOUD_ERR);
            }
          }) : (console.warn("微信登陆失败：empty code"), t(_errorCode.errorCode.LOGIN_ERR));
        },
        fail: function fail(t) {
          var o = "";
          null != t && null != t.errMsg && (o = t.errMsg);
          console.warn("微信登陆失败：", o);
          e(_errorCode.errorCode.LOGIN_ERR);
        }
      });
    });
  };

  e.prototype.initCloud = function () {
    return new Promise(function (t) {
      wx.login({
        success: function success() {
          var e;
          (null === (e = wx.cloud) || void 0 === e ? void 0 : e.init) && (_idx.platform.cloud = wx.cloud.init({
            env: ""
          }), _idx.platform.cloud = wx.cloud, t(_idx.platform.syncTime()));
        },
        fail: function fail() {
          t(null);
        }
      });
    });
  };

  e.prototype.syncTime = function () {
    return new Promise(function (t) {
      var e = _idx.platform.cloud || (_idx.platform.cloud = wx.cloud);
      e ? e.callFunction({
        name: "gTime",
        success: function success(e) {
          var o;
          var n = e.result;
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

  e.prototype.getCloudData = function () {
    var t;
    var e = _idx.platform.cloud || (_idx.platform.cloud = wx.cloud && wx.cloud.init && (wx.cloud.init({
      env: ""
    }), _idx.platform.cloud = wx.cloud));

    if (e) {
      var o = e.database();

      if (o) {
        var n = o.collection("userData");
        t = _idx.platform._check(n);
      }
    }

    return t;
  };

  e.prototype._check = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function () {
        return [2, new Promise(function (e) {
          t.where({}).get().then(function (t) {
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
          })["catch"](function (t) {
            console.error(t);
            e(null);
          });
        })];
      });
    });
  };

  e.prototype.setCloudData = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      var o;
      var n;
      var i;
      var r;
      return __generator(this, function (a) {
        switch (a.label) {
          case 0:
            return (e = this).isSaving ? [2] : (o = _idx.platform.cloud || (_idx.platform.cloud = wx.cloud && wx.cloud.init && (wx.cloud.init({
              env: ""
            }), _idx.platform.cloud = wx.cloud))) ? [4, o.database()] : [3, 2];

          case 1:
            if (!(n = a.sent())) return [2];
            e.isSaving = !0, i = n.collection("userData"), r = Promise.resolve(), e.isCheck || (r = this._check(i)), r.then(function () {
              e.dbId ? i.doc(e.dbId).update({
                data: {
                  uData: t
                }
              }).then(function (t) {
                console.log(t);
                _idx.platform.isSaving = !1;
              }) : i.add({
                data: {
                  uData: t
                }
              }).then(function (t) {
                _idx.platform.dbId = t.id;
                _idx.platform.isSaving = !1;
              });
            })["catch"](function (t) {
              console.error("写入失败", t);
              return e.isSaving = !1;
            }), a.label = 2;

          case 2:
            return [2];
        }
      });
    });
  };

  e.prototype.getUserInfo = function () {
    return new Promise(function (t, e) {
      wx.getSetting({
        success: function success(o) {
          if (o.authSetting["scope.userInfo"]) wx.getUserInfo({
            success: function success(e) {
              t(e.userInfo);
            },
            fail: function fail() {
              e(null);
            }
          });else {
            var n = wx.createUserInfoButton({
              type: "text",
              text: "获取用户信息",
              style: {
                left: -999,
                top: -999,
                width: 2,
                height: 1,
                lineHeight: 40,
                backgroundColor: "#00000000",
                color: "#ffffff",
                textAlign: "center",
                fontSize: 16,
                borderRadius: 4,
                borderColor: "#ffffff",
                borderWidth: 0
              }
            });
            n.onTap(function (e) {
              n.destroy();
              t(e.userInfo);
            });
          }
        }
      });
    });
  };

  e.prototype.reenter = function () {};

  e.prototype.getStorage = function (t) {
    try {
      var e = wx.getStorageSync(t);
      return null == e || "" == e ? null : JSON.parse(e);
    } catch (o) {}
  };

  e.prototype.setStorage = function (t, e) {
    try {
      wx.setStorageSync(t, JSON.stringify(e));
    } catch (o) {}
  };

  e.prototype.clearStorage = function () {
    try {
      wx.clearStorageSync();
    } catch (t) {}
  };

  e.prototype.removeStorage = function (t) {
    try {
      wx.removeStorageSync(t);
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
      var o;
      var n;
      var i;
      return __generator(this, function () {
        if (!this.noAd) {
          if (!this.noVideo) return _evts["default"].adE.emit(_c.ADE.VIDEO), o = _adC.VEnum[null !== (e = t.videoDuration) && void 0 !== e ? e : 30], this.preloadVideo(o) ? null == (n = this.videoMap[o]) ? (_evts["default"].adE.emit(_c.ADE.VIDEO_END), [2, Promise.reject(_pConst.VideoFailCode.NO_AD)]) : (this.showLoading(), i = this, [2, new Promise(function (t, e) {
            n.onClose(function o(i) {
              null != n && n.offClose(o), null != i && i.isEnded ? (_evts["default"].adE.emit(_c.ADE.VIDEO_END), t(1)) : (_evts["default"].adE.emit(_c.ADE.VIDEO_END), e(_pConst.VideoFailCode.CANCELED));
            });
            n.show().then(function () {})["catch"](function () {
              _evts["default"].adE.emit(_c.ADE.VIDEO_END);

              n.destroy();
              i.videoMap[o] = null;
              e(_pConst.VideoFailCode.NO_AD);
            }).then(function () {
              i.hideLoading();
            });
          })]) : (_evts["default"].adE.emit(_c.ADE.VIDEO_END), [2, Promise.reject(_pConst.VideoFailCode.NO_AD)]);
          Promise.reject(_pConst.VideoFailCode.NO_AD);
        }

        return [2];
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

  e.prototype.canUse = function (t) {
    return _com["default"].ins.compareVersion(this.getSystemData().SDKVersion, t) >= 0;
  };

  e.prototype.getSystemData = function () {
    if (null == this.systemInfoCache) try {
      this.systemInfoCache = wx.getSystemInfoSync();
    } catch (t) {
      return _pConst.DefaultSystemInfo;
    }
    return this.systemInfoCache;
  };

  e.prototype.getSwitches = function () {};

  e.prototype.vibrate = function (t) {
    t == _pConst.VEnum4.SHORT ? wx.vibrateShort({
      type: "medium"
    }) : t == _pConst.VEnum4.LONG && wx.vibrateLong();
  };

  e.prototype.preloadVideo = function (t) {
    if (!this.canUse("2.0.4")) return !1;
    var e = this.videoCheckedMap[t];
    if (e) return e;
    var o = this.videoCheckedLastT[t];
    var n = Date.now();

    if (!e && (null == o || n - o >= _pConst.SDKConfig.videoCoolTime)) {
      var i = this.videoMap[t];

      if (null == i) {
        var r = this;
        i = wx.createRewardedVideoAd({
          adUnitId: t,
          multiton: !0
        });
        this.videoMap[t] = i;
        i.onLoad(function () {
          r.videoCheckedMap[t] = !0, r.videoCheckedLastT[t] = Date.now();
        });
        i.onError(function () {
          r.videoMap[t] = null;
          r.videoCheckedMap[t] = !1;
          r.videoCheckedLastT[t] = Date.now();
          i.destroy();
        });
      }

      null != i && i.load();
    }

    return !1;
  };

  e.prototype.showModal = function (t) {
    return new Promise(function (e) {
      wx.showModal(Object.assign(Object.assign({}, t), {
        success: function success(t) {
          t.confirm ? e(!0) : t.cancel && e(!1);
        },
        fail: function fail() {
          e(!1);
        }
      }));
    });
  };

  e.prototype.refreshGame = function () {
    wx.restartMiniProgram ? wx.restartMiniProgram({
      fail: function fail() {
        wx.exitMiniProgram();
      },
      path: ""
    }) : wx.exitMiniProgram();
  };

  e.prototype.showLoading = function () {
    this.canUse("1.1.0") && (this.isLoading = !0, wx.showLoading({
      title: "加载中",
      mask: !0
    }));
  };

  e.prototype.hideLoading = function () {
    this.canUse("1.1.0") && this.isLoading && (wx.hideLoading(), this.isLoading = !1);
  };

  e.prototype.log = function () {};

  e.prototype.getMenuBounding = function () {};

  e.prototype.createShareImage = function () {};

  e.prototype.drawImage = function () {};

  e.prototype.preloadInterstitialAD = function () {};

  e.prototype.showInterstitialAD = function () {};

  e.prototype.canShowBanner = function () {};

  e.prototype.getBannerSize = function () {};

  e.prototype.showBanner = function () {};

  e.prototype.hideBanner = function () {};

  e.prototype.getSubscribeCnt = function () {};

  e.prototype.subscribe = function () {};

  e.prototype.startVideoRecord = function () {};

  e.prototype.pauseVideoRecord = function () {};

  e.prototype.resumeVideoRecord = function () {};

  e.prototype.stopVideoRecord = function () {};

  e.prototype.hasVideoRecord = function () {
    return !1;
  };

  e.prototype.shareVideoRecord = function () {};

  e.prototype.uploadAdEvent = function () {};

  e.prototype.addShortcut = function () {};

  e.prototype.reportEvent = function (t, e) {
    wx.reportEvent(t, e);
  };

  e.prototype.PostMessage = function (t, e, o) {
    wx.getOpenDataContext().postMessage({
      Even: t,
      Value1: e,
      Value2: o
    });
  };

  e.prototype.GetOpenDataContext = function () {
    return wx.getOpenDataContext();
  };

  e.prototype.share = function () {
    var t = this;
    return new Promise(function (e) {
      var o = _pConst.SDKConfig.shareData();

      wx.shareAppMessage({
        title: o.title,
        imageUrl: o.imageUrl,
        query: o.query
      });
      t._share_time = new Date().getTime();

      t._share_callback = function () {
        var o = t._share_time;
        t._share_time = t._share_callback = null;

        _sound["default"].ins.playBGM();

        o > 0 && new Date().getTime() - o >= 3e3 ? e(1) : e(0);
      };
    });
  };

  e.prototype.getUserProfile = function () {};

  e.prototype.subScriptionUpdate = function () {
    this.canUse("2.32.1") && wx.getSetting({
      withSubscriptions: !0,
      success: function success(t) {
        var e = t.subscriptionsSetting;
        var o = e.mainSwitch;
        var n = e.itemSettings;
        (!n && !o || n && "accept" != n.SYS_MSG_TYPE_INTERACTIVE) && wx.requestSubscribeSystemMessage({
          msgTypeList: ["SYS_MSG_TYPE_WHATS_NEW"],
          success: function success() {}
        });
      }
    });
  };

  return e;
}(_pf["default"]);

exports["default"] = _;

cc._RF.pop();