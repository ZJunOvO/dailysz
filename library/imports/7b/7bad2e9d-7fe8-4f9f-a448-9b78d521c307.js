"use strict";
cc._RF.push(module, '7bad26df+hPn6RIm3jVIcMH', 'qq');
// scripts/qq.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _c = require("c");

var _evts = require("evts");

var _pConst = require("pConst");

var c = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isQQ = !0;
    return e;
  }

  __extends(e, t);

  Object.defineProperty(e.prototype, "appId", {
    get: function get() {
      return "1110513462";
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.canUse = function () {
    return !0;
  };

  e.prototype.doWatchAD = function () {
    var t = this;
    return this.noAd ? (_evts["default"].adE.emit(_c.ADE.VIDEO_END), Promise.reject(_pConst.VideoFailCode.NO_AD)) : this.noVideo ? void Promise.reject(_pConst.VideoFailCode.NO_AD) : (_evts["default"].adE.emit(_c.ADE.VIDEO), this.showLoading(), new Promise(function (e, o) {
      var n = wx.createRewardedVideoAd({
        adUnitId: "bb8f5f005098f1ca2e16e73448b4bc8c"
      });
      n.onError(function () {});
      n.onLoad(function () {});
      n.onClose(function t(i) {
        null != n && n.offClose(t), null != i && i.isEnded ? (_evts["default"].adE.emit(_c.ADE.VIDEO_END), e(1)) : (_evts["default"].adE.emit(_c.ADE.VIDEO_END), o(_pConst.VideoFailCode.CANCELED));
      });
      n.load().then(function () {
        n.show().then(function () {})["catch"](function () {
          _evts["default"].adE.emit(_c.ADE.VIDEO_END);

          o(_pConst.VideoFailCode.NO_AD);
        }).then(function () {
          t.hideLoading();
        });
      })["catch"](function () {
        t.hideLoading();
      });
    }));
  };

  e.prototype.preloadVideo = function () {
    return !1;
  };

  e.prototype.reportEvent = function () {};

  e.prototype.share = function () {
    return new Promise(function (t) {
      var e = _pConst.SDKConfig.shareData();

      qq.shareAppMessage({
        title: e.title,
        imageUrl: e.imageUrl,
        query: e.query,
        success: function success(e) {
          t(e.data);
        },
        fail: function fail() {
          t(0);
        }
      });
    });
  };

  return e;
}(require("wx")["default"]);

exports["default"] = c;

cc._RF.pop();