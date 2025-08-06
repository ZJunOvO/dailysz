
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/wx.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcd3guanMiXSwibmFtZXMiOlsibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2lkeCIsInJlcXVpcmUiLCJfZW52IiwiX2V2dHMiLCJfcENvbnN0IiwiX3VEYXRhIiwiX2MiLCJfYWRDIiwiX2NvbSIsIl9zb3VuZCIsIl90aW1lIiwiX3BmIiwiX2Vycm9yQ29kZSIsIl8iLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaXNTaGFyaW5nIiwic2RrU3dpdGNoIiwiRGVmYXVsdFNES1N3aXRjaCIsInZpZGVvQ2hlY2tlZE1hcCIsInZpZGVvQ2hlY2tlZExhc3RUIiwidmlkZW9NYXAiLCJpc0xvYWRpbmciLCJpc0xvZ2dlZEluIiwib25IaWRlVCIsIm5vQWQiLCJub1ZpZGVvIiwibGFzdEludGVyQWRTaG93VCIsInN3aXRjaGVzSW5pdGQiLCJ0YSIsIl9zaGFyZV9jYWxsYmFjayIsImludGVyc3RpdGlhbEFkIiwiaW50ZXJBZFJlYWR5IiwibV9iSW5pdEJhbm5lciIsIm1fYkJhbm5lclNob3dlZCIsIm1fYmFubmVyIiwiU2V0VXNlckNsb3VkU3RvcmFnZSIsIm8iLCJEYXRlIiwid3giLCJzZXRVc2VyQ2xvdWRTdG9yYWdlIiwiS1ZEYXRhTGlzdCIsImtleSIsInRvU3RyaW5nIiwiZ2V0VGltZSIsInN1Y2Nlc3MiLCJmYWlsIiwib25LZXlib2FyZENvbXBsZXRlIiwicmVxdWlyZVByaXZhY3lBdXRob3JpemUiLCJjYW5Vc2UiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJnZXQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwic3RyaW5nIiwiUEZDb2RlIiwiV2VjaGF0IiwiaW5pdCIsImluaXRWZXJzaW9uIiwiaW5pdFdlY2hhdExpc3RlbmVyIiwiaW5pdENvbW1vblNldHRpbmciLCJpbml0VGdhIiwidmVyc2lvbiIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiaXNTd2l0Y2hlZEluaXRkIiwib25TaG93IiwiaW5zIiwicGxheUJHTSIsInBsRSIsImVtaXQiLCJzeW5jTGF1bmNoT3B0aW9uIiwicmVlbnRlciIsIm9uSGlkZSIsInNlcnZlclRpbWUiLCJvbkVycm9yIiwiZW52IiwibW9kZSIsIkVNIiwiUFJPRCIsInNob3dNb2RhbCIsInRpdGxlIiwibWVzc2FnZSIsImNvbnRlbnQiLCJzdGFjayIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwiU0RLQ29uZmlnIiwic2hhcmVEYXRhIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsImdldFN5c3RlbURhdGEiLCJBcHBQbGF0Zm9ybSIsIm9uTWVtb3J5V2FybmluZyIsInRyaWdnZXJHQyIsImdldFVwZGF0ZU1hbmFnZXIiLCJvbkNoZWNrRm9yVXBkYXRlIiwib25VcGRhdGVGYWlsZWQiLCJvblVwZGF0ZVJlYWR5IiwiY29uZmlybSIsImFwcGx5VXBkYXRlIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJnZXROZXR3b3JrVHlwZSIsIm5ldHdvcmsiLCJjaEUiLCJvbiIsInNldEFjY291bnRJRCIsImxvZ2luIiwiUHJvbWlzZSIsImNvZGUiLCJwbGF0Zm9ybSIsImNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsInJlc3VsdCIsImkiLCJKU09OIiwicGFyc2UiLCJvcGVuaWQiLCJjb25zb2xlIiwiZXJyb3IiLCJlcnJvckNvZGUiLCJQRl9DTE9VRF9FUlIiLCJ3YXJuIiwiTE9HSU5fRVJSIiwiZXJyTXNnIiwiaW5pdENsb3VkIiwic3luY1RpbWUiLCJnZXRDbG91ZERhdGEiLCJkYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJfY2hlY2siLCJfX2F3YWl0ZXIiLCJfX2dlbmVyYXRvciIsIndoZXJlIiwidGhlbiIsImlzQ2hlY2siLCJkYXRhIiwibGVuZ3RoIiwiZGJJZCIsIl9pZCIsInVEYXRhIiwiciIsInNldENsb3VkRGF0YSIsImEiLCJsYWJlbCIsImlzU2F2aW5nIiwic2VudCIsInJlc29sdmUiLCJkb2MiLCJ1cGRhdGUiLCJsb2ciLCJhZGQiLCJpZCIsImdldFVzZXJJbmZvIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwidXNlckluZm8iLCJjcmVhdGVVc2VySW5mb0J1dHRvbiIsInR5cGUiLCJ0ZXh0Iiwic3R5bGUiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJvblRhcCIsImRlc3Ryb3kiLCJnZXRTdG9yYWdlIiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlIiwic2V0U3RvcmFnZVN5bmMiLCJzdHJpbmdpZnkiLCJjbGVhclN0b3JhZ2UiLCJjbGVhclN0b3JhZ2VTeW5jIiwicmVtb3ZlU3RvcmFnZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwidHJhY2tMb2dpbiIsInRyYWNrVXNlclNldCIsInRyYWNrVXNlclNldE9uY2UiLCJ0cmFja0V2ZW50IiwiZ2V0U2VxIiwiY29uc3VtZVNlcSIsInNlcXVlbmNlSW5mbyIsIlNURFNlcVR5cGUiLCJWSURFTyIsImRvV2F0Y2hBRCIsImRvU2hhcmUiLCJhZEUiLCJBREUiLCJWRW51bSIsInZpZGVvRHVyYXRpb24iLCJwcmVsb2FkVmlkZW8iLCJWSURFT19FTkQiLCJyZWplY3QiLCJWaWRlb0ZhaWxDb2RlIiwiTk9fQUQiLCJzaG93TG9hZGluZyIsIm9uQ2xvc2UiLCJvZmZDbG9zZSIsImlzRW5kZWQiLCJDQU5DRUxFRCIsInNob3ciLCJoaWRlTG9hZGluZyIsImNvbXBhcmVWZXJzaW9uIiwiU0RLVmVyc2lvbiIsInN5c3RlbUluZm9DYWNoZSIsImdldFN5c3RlbUluZm9TeW5jIiwiRGVmYXVsdFN5c3RlbUluZm8iLCJnZXRTd2l0Y2hlcyIsInZpYnJhdGUiLCJWRW51bTQiLCJTSE9SVCIsInZpYnJhdGVTaG9ydCIsIkxPTkciLCJ2aWJyYXRlTG9uZyIsIm5vdyIsInZpZGVvQ29vbFRpbWUiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJhZFVuaXRJZCIsIm11bHRpdG9uIiwib25Mb2FkIiwibG9hZCIsImFzc2lnbiIsImNhbmNlbCIsInJlZnJlc2hHYW1lIiwicmVzdGFydE1pbmlQcm9ncmFtIiwiZXhpdE1pbmlQcm9ncmFtIiwicGF0aCIsIm1hc2siLCJnZXRNZW51Qm91bmRpbmciLCJjcmVhdGVTaGFyZUltYWdlIiwiZHJhd0ltYWdlIiwicHJlbG9hZEludGVyc3RpdGlhbEFEIiwic2hvd0ludGVyc3RpdGlhbEFEIiwiY2FuU2hvd0Jhbm5lciIsImdldEJhbm5lclNpemUiLCJzaG93QmFubmVyIiwiaGlkZUJhbm5lciIsImdldFN1YnNjcmliZUNudCIsInN1YnNjcmliZSIsInN0YXJ0VmlkZW9SZWNvcmQiLCJwYXVzZVZpZGVvUmVjb3JkIiwicmVzdW1lVmlkZW9SZWNvcmQiLCJzdG9wVmlkZW9SZWNvcmQiLCJoYXNWaWRlb1JlY29yZCIsInNoYXJlVmlkZW9SZWNvcmQiLCJ1cGxvYWRBZEV2ZW50IiwiYWRkU2hvcnRjdXQiLCJyZXBvcnRFdmVudCIsIlBvc3RNZXNzYWdlIiwiZ2V0T3BlbkRhdGFDb250ZXh0IiwicG9zdE1lc3NhZ2UiLCJFdmVuIiwiVmFsdWUxIiwiVmFsdWUyIiwiR2V0T3BlbkRhdGFDb250ZXh0Iiwic2hhcmUiLCJzaGFyZUFwcE1lc3NhZ2UiLCJpbWFnZVVybCIsInF1ZXJ5IiwiX3NoYXJlX3RpbWUiLCJnZXRVc2VyUHJvZmlsZSIsInN1YlNjcmlwdGlvblVwZGF0ZSIsIndpdGhTdWJzY3JpcHRpb25zIiwic3Vic2NyaXB0aW9uc1NldHRpbmciLCJtYWluU3dpdGNoIiwiaXRlbVNldHRpbmdzIiwiU1lTX01TR19UWVBFX0lOVEVSQUNUSVZFIiwicmVxdWVzdFN1YnNjcmliZVN5c3RlbU1lc3NhZ2UiLCJtc2dUeXBlTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJ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QUFZOE4sa0JBQVosR0FBaUMsWUFBWTtJQUN6QyxLQUFLaE8sTUFBTCxDQUFZLFFBQVosS0FDSVYsRUFBRSxDQUFDc0gsVUFBSCxDQUFjO01BQ1ZxSCxpQkFBaUIsRUFBRSxDQUFDLENBRFY7TUFFVnJPLE9BQU8sRUFBRSxpQkFBVWpDLENBQVYsRUFBYTtRQUNsQixJQUFJQyxDQUFDLEdBQUdELENBQUMsQ0FBQ3VRLG9CQUFWO1FBQ0EsSUFBSTlPLENBQUMsR0FBR3hCLENBQUMsQ0FBQ3VRLFVBQVY7UUFDQSxJQUFJM1IsQ0FBQyxHQUFHb0IsQ0FBQyxDQUFDd1EsWUFBVjtRQUNBLENBQUUsQ0FBQzVSLENBQUQsSUFBTSxDQUFDNEMsQ0FBUixJQUFlNUMsQ0FBQyxJQUFJLFlBQVlBLENBQUMsQ0FBQzZSLHdCQUFuQyxLQUNJL08sRUFBRSxDQUFDZ1AsNkJBQUgsQ0FBaUM7VUFDN0JDLFdBQVcsRUFBRSxDQUFDLHdCQUFELENBRGdCO1VBRTdCM08sT0FBTyxFQUFFLG1CQUFZLENBQUU7UUFGTSxDQUFqQyxDQURKO01BS0g7SUFYUyxDQUFkLENBREo7RUFjSCxDQWZEOztFQWdCQSxPQUFPaEMsQ0FBUDtBQUNILENBaGtCTyxDQWdrQkxKLEdBQUcsV0Foa0JFLENBQVI7O0FBaWtCQWIsT0FBTyxXQUFQLEdBQWtCZSxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG47XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBfaWR4ID0gcmVxdWlyZShcImlkeFwiKTtcbnZhciBfZW52ID0gcmVxdWlyZShcImVudlwiKTtcbnZhciBfZXZ0cyA9IHJlcXVpcmUoXCJldnRzXCIpO1xudmFyIF9wQ29uc3QgPSByZXF1aXJlKFwicENvbnN0XCIpO1xudmFyIF91RGF0YSA9IHJlcXVpcmUoXCJ1RGF0YVwiKTtcbnZhciBfYyA9IHJlcXVpcmUoXCJjXCIpO1xudmFyIF9hZEMgPSByZXF1aXJlKFwiYWRDXCIpO1xudmFyIF9jb20gPSByZXF1aXJlKFwiY29tXCIpO1xudmFyIF9zb3VuZCA9IHJlcXVpcmUoXCJzb3VuZFwiKTtcbnZhciBfdGltZSA9IHJlcXVpcmUoXCJ0aW1lXCIpO1xudmFyIF9wZiA9IHJlcXVpcmUoXCJwZlwiKTtcbnZhciBfZXJyb3JDb2RlID0gcmVxdWlyZShcImVycm9yQ29kZVwiKTtcbnZhciBfID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuaXNTaGFyaW5nID0gITE7XG4gICAgICAgIGUuc2RrU3dpdGNoID0gX3BDb25zdC5EZWZhdWx0U0RLU3dpdGNoO1xuICAgICAgICBlLnZpZGVvQ2hlY2tlZE1hcCA9IHt9O1xuICAgICAgICBlLnZpZGVvQ2hlY2tlZExhc3RUID0ge307XG4gICAgICAgIGUudmlkZW9NYXAgPSB7fTtcbiAgICAgICAgZS5pc0xvYWRpbmcgPSAhMTtcbiAgICAgICAgZS5pc0xvZ2dlZEluID0gITE7XG4gICAgICAgIGUub25IaWRlVCA9IDA7XG4gICAgICAgIGUubm9BZCA9ICExO1xuICAgICAgICBlLm5vVmlkZW8gPSAhMTtcbiAgICAgICAgZS5sYXN0SW50ZXJBZFNob3dUID0gMDtcbiAgICAgICAgZS5zd2l0Y2hlc0luaXRkID0gITE7XG4gICAgICAgIGUudGEgPSBudWxsO1xuICAgICAgICBlLl9zaGFyZV9jYWxsYmFjayA9IG51bGw7XG4gICAgICAgIGUuaW50ZXJzdGl0aWFsQWQgPSBudWxsO1xuICAgICAgICBlLmludGVyQWRSZWFkeSA9ICExO1xuICAgICAgICBlLm1fYkluaXRCYW5uZXIgPSBudWxsO1xuICAgICAgICBlLm1fYkJhbm5lclNob3dlZCA9ICExO1xuICAgICAgICBlLm1fYmFubmVyID0gbnVsbDtcbiAgICAgICAgZS5TZXRVc2VyQ2xvdWRTdG9yYWdlID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgICAgIHZhciBuID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHd4LnNldFVzZXJDbG91ZFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgIEtWRGF0YUxpc3Q6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxldmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdC50b1N0cmluZygpICsgXCIjXCIgKyBuLmdldFRpbWUoKS50b1N0cmluZygpICsgXCIjXCIgKyBlLnRvU3RyaW5nKCkgKyBcIiNcIiArIG8udG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGUub25LZXlib2FyZENvbXBsZXRlID0gd3gub25LZXlib2FyZENvbXBsZXRlO1xuICAgICAgICBlLnJlcXVpcmVQcml2YWN5QXV0aG9yaXplID0gZS5jYW5Vc2UoXCIyLjMyLjNcIikgJiYgd3gucmVxdWlyZVByaXZhY3lBdXRob3JpemU7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLCBcImFwcElkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ3eDZmZjVhYTE0ZGUyODNmZDdcIjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICB9KTtcbiAgICBlLnByb3RvdHlwZS5zdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfcENvbnN0LlBGQ29kZS5XZWNoYXQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmluaXRWZXJzaW9uKCk7XG4gICAgICAgIHRoaXMuaW5pdFdlY2hhdExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuaW5pdENvbW1vblNldHRpbmcoKTtcbiAgICAgICAgdGhpcy5pbml0VGdhKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0VmVyc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHZhciBlO1xuICAgICAgICB0aGlzLnZlcnNpb24gPVxuICAgICAgICAgICAgd3guZ2V0QWNjb3VudEluZm9TeW5jICYmXG4gICAgICAgICAgICAobnVsbCA9PT0gKGUgPSBudWxsID09PSAodCA9IHd4LmdldEFjY291bnRJbmZvU3luYygpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lm1pbmlQcm9ncmFtKSB8fFxuICAgICAgICAgICAgdm9pZCAwID09PSBlXG4gICAgICAgICAgICAgICAgPyB2b2lkIDBcbiAgICAgICAgICAgICAgICA6IGUudmVyc2lvbik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0VGdhID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUuaXNTd2l0Y2hlZEluaXRkID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUuaW5pdFdlY2hhdExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHd4Lm9uU2hvdyhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3NvdW5kLmRlZmF1bHQuaW5zLnBsYXlCR00oKSxcbiAgICAgICAgICAgICAgICBfZXZ0cy5kZWZhdWx0LnBsRS5lbWl0KHtvblNob3c6ICEwLCBpc1NoYXJpbmc6IHQuaXNTaGFyaW5nfSksXG4gICAgICAgICAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnN5bmNMYXVuY2hPcHRpb24oZSksXG4gICAgICAgICAgICAgICAgdC5pc1NoYXJpbmcgfHwgdC5yZWVudGVyKCksXG4gICAgICAgICAgICAgICAgdC5fc2hhcmVfY2FsbGJhY2sgJiYgdC5fc2hhcmVfY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHd4Lm9uSGlkZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAodC5vbkhpZGVUID0gX3RpbWUuZGVmYXVsdC5pbnMuc2VydmVyVGltZSksIF9ldnRzLmRlZmF1bHQucGxFLmVtaXQoe29uSGlkZTogITB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHd4Lm9uRXJyb3IoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIF9lbnYuZW52Lm1vZGUgIT09IF9lbnYuRU0uUFJPRCAmJlxuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0Lm1lc3NhZ2UgfHwgXCLlvILluLjmiqXplJlcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdC5zdGFjayB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6IFwi5aW955qEXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHd4Lm9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfcENvbnN0LlNES0NvbmZpZy5zaGFyZURhdGEoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHd4LnNob3dTaGFyZU1lbnUoe3dpdGhTaGFyZVRpY2tldDogITB9KTtcbiAgICAgICAgdGhpcy5jYW5Vc2UoXCIyLjAuMlwiKSB8fFxuICAgICAgICAgICAgKFwicXFcIiA9PT0gdGhpcy5nZXRTeXN0ZW1EYXRhKCkuQXBwUGxhdGZvcm0gJiZcbiAgICAgICAgICAgICAgICB3eC5vbk1lbW9yeVdhcm5pbmcoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB3eC50cmlnZ2VyR0MoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIHZhciBlID0gd3guZ2V0VXBkYXRlTWFuYWdlcigpO1xuICAgICAgICBlLm9uQ2hlY2tGb3JVcGRhdGUoZnVuY3Rpb24gKCkge30pO1xuICAgICAgICBlLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgZS5vblVwZGF0ZVJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi5pu05paw5o+Q56S6XCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogXCLmlrDniYjmnKzlt7Lnu4/lh4blpIflpb3vvIzmmK/lkKbph43lkK/lsI/muLjmiI/vvJ9cIixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICB0LmNvbmZpcm0gJiYgZS5hcHBseVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRDb21tb25TZXR0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc3luY0xhdW5jaE9wdGlvbih3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpKTtcbiAgICAgICAgd3guZ2V0TmV0d29ya1R5cGUoe1xuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMubmV0d29yayA9IHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge31cbiAgICAgICAgfSk7XG4gICAgICAgIF9ldnRzLmRlZmF1bHQuY2hFLm9uKGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldEFjY291bnRJRCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLmxvZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICBvICYmIG8uY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWR4LnBsYXRmb3JtLmNsb3VkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2lkeC5wbGF0Zm9ybS5jbG91ZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5pbml0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHd4LmNsb3VkLmluaXQoe2VudjogXCJcIn0pLCAoX2lkeC5wbGF0Zm9ybS5jbG91ZCA9IHd4LmNsb3VkKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZ09wZW5JZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGUucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBKU09OLnBhcnNlKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ub3BlbmlkID0gaS5pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBvLm9wZW5pZCA9IG4uaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0KG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycjpcIiwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZShfZXJyb3JDb2RlLmVycm9yQ29kZS5QRl9DTE9VRF9FUlIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoY29uc29sZS53YXJuKFwi5b6u5L+h55m76ZmG5aSx6LSl77yaZW1wdHkgY29kZVwiKSwgdChfZXJyb3JDb2RlLmVycm9yQ29kZS5MT0dJTl9FUlIpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgbnVsbCAhPSB0ICYmIG51bGwgIT0gdC5lcnJNc2cgJiYgKG8gPSB0LmVyck1zZyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuW+ruS/oeeZu+mZhuWksei0pe+8mlwiLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgZShfZXJyb3JDb2RlLmVycm9yQ29kZS5MT0dJTl9FUlIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRDbG91ZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB3eC5sb2dpbih7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgICAgICAgICAgKG51bGwgPT09IChlID0gd3guY2xvdWQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuaW5pdCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgoX2lkeC5wbGF0Zm9ybS5jbG91ZCA9IHd4LmNsb3VkLmluaXQoe2VudjogXCJcIn0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChfaWR4LnBsYXRmb3JtLmNsb3VkID0gd3guY2xvdWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdChfaWR4LnBsYXRmb3JtLnN5bmNUaW1lKCkpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdChudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zeW5jVGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgZSA9IF9pZHgucGxhdGZvcm0uY2xvdWQgfHwgKF9pZHgucGxhdGZvcm0uY2xvdWQgPSB3eC5jbG91ZCk7XG4gICAgICAgICAgICBlXG4gICAgICAgICAgICAgICAgPyBlLmNhbGxGdW5jdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJnVGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGUucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBKU09OLnBhcnNlKG4pLnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgbyA9IG4udDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdChvIHx8IG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogdChudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRDbG91ZERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICB2YXIgZSA9XG4gICAgICAgICAgICBfaWR4LnBsYXRmb3JtLmNsb3VkIHx8XG4gICAgICAgICAgICAoX2lkeC5wbGF0Zm9ybS5jbG91ZCA9XG4gICAgICAgICAgICAgICAgd3guY2xvdWQgJiYgd3guY2xvdWQuaW5pdCAmJiAod3guY2xvdWQuaW5pdCh7ZW52OiBcIlwifSksIChfaWR4LnBsYXRmb3JtLmNsb3VkID0gd3guY2xvdWQpKSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB2YXIgbyA9IGUuZGF0YWJhc2UoKTtcbiAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBvLmNvbGxlY3Rpb24oXCJ1c2VyRGF0YVwiKTtcbiAgICAgICAgICAgICAgICB0ID0gX2lkeC5wbGF0Zm9ybS5fY2hlY2sobik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5fY2hlY2sgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LndoZXJlKHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWR4LnBsYXRmb3JtLmlzQ2hlY2sgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gdC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8gJiYgby5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG9bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5kYklkID0gbi5faWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBKU09OLnBhcnNlKG4udURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcih0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0Q2xvdWREYXRhID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciBuO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGUgPSB0aGlzKS5pc1NhdmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gWzJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAobyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5jbG91ZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfaWR4LnBsYXRmb3JtLmNsb3VkID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuaW5pdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAod3guY2xvdWQuaW5pdCh7ZW52OiBcIlwifSksIChfaWR4LnBsYXRmb3JtLmNsb3VkID0gd3guY2xvdWQpKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbNCwgby5kYXRhYmFzZSgpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShuID0gYS5zZW50KCkpKSByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGUuaXNTYXZpbmcgPSAhMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgPSBuLmNvbGxlY3Rpb24oXCJ1c2VyRGF0YVwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHIgPSBQcm9taXNlLnJlc29sdmUoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pc0NoZWNrIHx8IChyID0gdGhpcy5fY2hlY2soaSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5kYklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRvYyhlLmRiSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7ZGF0YToge3VEYXRhOiB0fX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZHgucGxhdGZvcm0uaXNTYXZpbmcgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaS5hZGQoe2RhdGE6IHt1RGF0YTogdH19KS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5kYklkID0gdC5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWR4LnBsYXRmb3JtLmlzU2F2aW5nID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5YaZ5YWl5aSx6LSlXCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlLmlzU2F2aW5nID0gITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYS5sYWJlbCA9IDIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFVzZXJJbmZvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvLmF1dGhTZXR0aW5nW1wic2NvcGUudXNlckluZm9cIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdChlLnVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHd4LmNyZWF0ZVVzZXJJbmZvQnV0dG9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuiOt+WPlueUqOaIt+S/oeaBr1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC05OTksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTk5OSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLm9uVGFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdChlLnVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmVlbnRlciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLmdldFN0b3JhZ2UgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGUgPSB3eC5nZXRTdG9yYWdlU3luYyh0KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsID09IGUgfHwgXCJcIiA9PSBlID8gbnVsbCA6IEpTT04ucGFyc2UoZSk7XG4gICAgICAgIH0gY2F0Y2ggKG8pIHt9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRTdG9yYWdlID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKHQsIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgfSBjYXRjaCAobykge31cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsZWFyU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHd4LmNsZWFyU3RvcmFnZVN5bmMoKTtcbiAgICAgICAgfSBjYXRjaCAodCkge31cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJlbW92ZVN0b3JhZ2UgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmModCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS50cmFja0xvZ2luID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUudHJhY2tVc2VyU2V0ID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUudHJhY2tVc2VyU2V0T25jZSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLnRyYWNrRXZlbnQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5nZXRTZXEgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5jb25zdW1lU2VxID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LnNlcXVlbmNlSW5mby50eXBlICE9IF9wQ29uc3QuU1REU2VxVHlwZS5WSURFTyA/IFszLCAyXSA6IFs0LCB0aGlzLmRvV2F0Y2hBRCh0KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2VudCgpLCB0aGlzLmRvU2hhcmUoKSwgKGUubGFiZWwgPSAyKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5kb1dhdGNoQUQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm5vQWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm5vVmlkZW8pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ldnRzLmRlZmF1bHQuYWRFLmVtaXQoX2MuQURFLlZJREVPKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobyA9IF9hZEMuVkVudW1bbnVsbCAhPT0gKGUgPSB0LnZpZGVvRHVyYXRpb24pICYmIHZvaWQgMCAhPT0gZSA/IGUgOiAzMF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlbG9hZFZpZGVvKG8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbCA9PSAobiA9IHRoaXMudmlkZW9NYXBbb10pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChfZXZ0cy5kZWZhdWx0LmFkRS5lbWl0KF9jLkFERS5WSURFT19FTkQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMiwgUHJvbWlzZS5yZWplY3QoX3BDb25zdC5WaWRlb0ZhaWxDb2RlLk5PX0FEKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh0aGlzLnNob3dMb2FkaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpID0gdGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4ub25DbG9zZShmdW5jdGlvbiBvKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPSBuICYmIG4ub2ZmQ2xvc2UobyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICE9IGkgJiYgaS5pc0VuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoX2V2dHMuZGVmYXVsdC5hZEUuZW1pdChfYy5BREUuVklERU9fRU5EKSwgdCgxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChfZXZ0cy5kZWZhdWx0LmFkRS5lbWl0KF9jLkFERS5WSURFT19FTkQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZShfcENvbnN0LlZpZGVvRmFpbENvZGUuQ0FOQ0VMRUQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnNob3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ldnRzLmRlZmF1bHQuYWRFLmVtaXQoX2MuQURFLlZJREVPX0VORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkudmlkZW9NYXBbb10gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZShfcENvbnN0LlZpZGVvRmFpbENvZGUuTk9fQUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoX2V2dHMuZGVmYXVsdC5hZEUuZW1pdChfYy5BREUuVklERU9fRU5EKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMiwgUHJvbWlzZS5yZWplY3QoX3BDb25zdC5WaWRlb0ZhaWxDb2RlLk5PX0FEKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLnJlamVjdChfcENvbnN0LlZpZGVvRmFpbENvZGUuTk9fQUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZG9TaGFyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2FuVXNlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIF9jb20uZGVmYXVsdC5pbnMuY29tcGFyZVZlcnNpb24odGhpcy5nZXRTeXN0ZW1EYXRhKCkuU0RLVmVyc2lvbiwgdCkgPj0gMDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFN5c3RlbURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChudWxsID09IHRoaXMuc3lzdGVtSW5mb0NhY2hlKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN5c3RlbUluZm9DYWNoZSA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wQ29uc3QuRGVmYXVsdFN5c3RlbUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUluZm9DYWNoZTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFN3aXRjaGVzID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUudmlicmF0ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHQgPT0gX3BDb25zdC5WRW51bTQuU0hPUlQgPyB3eC52aWJyYXRlU2hvcnQoe3R5cGU6IFwibWVkaXVtXCJ9KSA6IHQgPT0gX3BDb25zdC5WRW51bTQuTE9ORyAmJiB3eC52aWJyYXRlTG9uZygpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucHJlbG9hZFZpZGVvID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblVzZShcIjIuMC40XCIpKSByZXR1cm4gITE7XG4gICAgICAgIHZhciBlID0gdGhpcy52aWRlb0NoZWNrZWRNYXBbdF07XG4gICAgICAgIGlmIChlKSByZXR1cm4gZTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLnZpZGVvQ2hlY2tlZExhc3RUW3RdO1xuICAgICAgICB2YXIgbiA9IERhdGUubm93KCk7XG4gICAgICAgIGlmICghZSAmJiAobnVsbCA9PSBvIHx8IG4gLSBvID49IF9wQ29uc3QuU0RLQ29uZmlnLnZpZGVvQ29vbFRpbWUpKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMudmlkZW9NYXBbdF07XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGkgPSB3eC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe2FkVW5pdElkOiB0LCBtdWx0aXRvbjogITB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvTWFwW3RdID0gaTtcbiAgICAgICAgICAgICAgICBpLm9uTG9hZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIChyLnZpZGVvQ2hlY2tlZE1hcFt0XSA9ICEwKSwgKHIudmlkZW9DaGVja2VkTGFzdFRbdF0gPSBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpLm9uRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByLnZpZGVvTWFwW3RdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgci52aWRlb0NoZWNrZWRNYXBbdF0gPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgci52aWRlb0NoZWNrZWRMYXN0VFt0XSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIGkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbnVsbCAhPSBpICYmIGkubG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhMTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNob3dNb2RhbCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgd3guc2hvd01vZGFsKFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdCksIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuY29uZmlybSA/IGUoITApIDogdC5jYW5jZWwgJiYgZSghMSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUoITEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmVmcmVzaEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHd4LnJlc3RhcnRNaW5pUHJvZ3JhbVxuICAgICAgICAgICAgPyB3eC5yZXN0YXJ0TWluaVByb2dyYW0oe1xuICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIHd4LmV4aXRNaW5pUHJvZ3JhbSgpO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHBhdGg6IFwiXCJcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogd3guZXhpdE1pbmlQcm9ncmFtKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93TG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jYW5Vc2UoXCIxLjEuMFwiKSAmJiAoKHRoaXMuaXNMb2FkaW5nID0gITApLCB3eC5zaG93TG9hZGluZyh7dGl0bGU6IFwi5Yqg6L295LitXCIsIG1hc2s6ICEwfSkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGlkZUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2FuVXNlKFwiMS4xLjBcIikgJiYgdGhpcy5pc0xvYWRpbmcgJiYgKHd4LmhpZGVMb2FkaW5nKCksICh0aGlzLmlzTG9hZGluZyA9ICExKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5nZXRNZW51Qm91bmRpbmcgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5jcmVhdGVTaGFyZUltYWdlID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUuZHJhd0ltYWdlID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUucHJlbG9hZEludGVyc3RpdGlhbEFEID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUuc2hvd0ludGVyc3RpdGlhbEFEID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUuY2FuU2hvd0Jhbm5lciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLmdldEJhbm5lclNpemUgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5zaG93QmFubmVyID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUuaGlkZUJhbm5lciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLmdldFN1YnNjcmliZUNudCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLnN0YXJ0VmlkZW9SZWNvcmQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5wYXVzZVZpZGVvUmVjb3JkID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUucmVzdW1lVmlkZW9SZWNvcmQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5zdG9wVmlkZW9SZWNvcmQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5oYXNWaWRlb1JlY29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICExO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hhcmVWaWRlb1JlY29yZCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLnVwbG9hZEFkRXZlbnQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5hZGRTaG9ydGN1dCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLnJlcG9ydEV2ZW50ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgd3gucmVwb3J0RXZlbnQodCwgZSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5Qb3N0TWVzc2FnZSA9IGZ1bmN0aW9uICh0LCBlLCBvKSB7XG4gICAgICAgIHd4LmdldE9wZW5EYXRhQ29udGV4dCgpLnBvc3RNZXNzYWdlKHtFdmVuOiB0LCBWYWx1ZTE6IGUsIFZhbHVlMjogb30pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuR2V0T3BlbkRhdGFDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd3guZ2V0T3BlbkRhdGFDb250ZXh0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaGFyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBvID0gX3BDb25zdC5TREtDb25maWcuc2hhcmVEYXRhKCk7XG4gICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe3RpdGxlOiBvLnRpdGxlLCBpbWFnZVVybDogby5pbWFnZVVybCwgcXVlcnk6IG8ucXVlcnl9KTtcbiAgICAgICAgICAgIHQuX3NoYXJlX3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHQuX3NoYXJlX2NhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gdC5fc2hhcmVfdGltZTtcbiAgICAgICAgICAgICAgICB0Ll9zaGFyZV90aW1lID0gdC5fc2hhcmVfY2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIF9zb3VuZC5kZWZhdWx0Lmlucy5wbGF5QkdNKCk7XG4gICAgICAgICAgICAgICAgbyA+IDAgJiYgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBvID49IDNlMyA/IGUoMSkgOiBlKDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRVc2VyUHJvZmlsZSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLnN1YlNjcmlwdGlvblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jYW5Vc2UoXCIyLjMyLjFcIikgJiZcbiAgICAgICAgICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgICAgICAgICAgIHdpdGhTdWJzY3JpcHRpb25zOiAhMCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHQuc3Vic2NyaXB0aW9uc1NldHRpbmc7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gZS5tYWluU3dpdGNoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGUuaXRlbVNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICAoKCFuICYmICFvKSB8fCAobiAmJiBcImFjY2VwdFwiICE9IG4uU1lTX01TR19UWVBFX0lOVEVSQUNUSVZFKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3RTdWJzY3JpYmVTeXN0ZW1NZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dUeXBlTGlzdDogW1wiU1lTX01TR19UWVBFX1dIQVRTX05FV1wiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gZTtcbn0pKF9wZi5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IF87XG4iXX0=