"use strict";
cc._RF.push(module, 'c83f1Tg+ndHibVP6V9Bsrr7', 'h5');
// scripts/h5.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _pConst = require("pConst");

var _time = require("time");

var _uData = require("uData");

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;

    e.trackEvent = function () {};

    e.subscribe = function (t) {
      for (var e = [], o = 1; o < arguments.length; o++) {
        e[o - 1] = arguments[o];
      }

      return new Promise(function (t) {
        t(1);
      });
    };

    return e;
  }

  __extends(e, t);

  Object.defineProperty(e.prototype, "appId", {
    get: function get() {
      return "dev_nonogram";
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.string = function () {
    return _pConst.PFCode.Web;
  };

  e.prototype.init = function () {
    var t = new URLSearchParams(location.search);
    var e = {};
    t.forEach(function (t, o) {
      e[o] = t;
    });

    _uData["default"].ins.syncLaunchOption({
      query: e
    });

    this.initListener();
  };

  e.prototype.initListener = function () {
    var t = this;
    cc.game.on(cc.game.EVENT_SHOW, function () {
      Math.abs(Date.now() / 1e3 - t.onHideT) > 300 ? t.syncTime().then(function (t) {
        t && _time["default"].ins.sync(t), _evts["default"].plE.emit({
          onShow: !0
        });
      }) : _evts["default"].plE.emit({
        onShow: !0
      });
    });
    cc.game.on(cc.game.EVENT_HIDE, function () {
      t.onHideT = _time["default"].ins.serverTime;

      _evts["default"].plE.emit({
        onHide: !0
      });
    });
  };

  e.prototype.isSwitchedInitd = function () {
    return !0;
  };

  e.prototype.login = function () {
    return Promise.resolve({
      code: "dev_ceshi"
    });
  };

  e.prototype.getUserInfo = function () {};

  e.prototype.getStorage = function (t) {
    var e = localStorage.getItem(t);
    return null == e || "" == e ? null : JSON.parse(e);
  };

  e.prototype.setStorage = function (t, e) {
    localStorage.setItem(t, JSON.stringify(e));
  };

  e.prototype.clearStorage = function () {
    localStorage.clear();
  };

  e.prototype.removeStorage = function (t) {
    localStorage.removeItem(t);
  };

  e.prototype.trackLogin = function () {};

  e.prototype.trackUserSet = function () {};

  e.prototype.trackUserSetOnce = function () {};

  e.prototype.getSeq = function () {
    return {
      type: Math.random() < 0.5 ? _pConst.STDSeqType.VIDEO : _pConst.STDSeqType.SHARE,
      modelId: "",
      shareGuid: "",
      forceResult: ""
    };
  };

  e.prototype.consumeSeq = function () {
    return new Promise(function (t) {
      t(1);
    });
  };

  e.prototype.doWatchAD = function () {
    return new Promise(function (t) {
      t(1);
    });
  };

  e.prototype.doShare = function () {
    return new Promise(function (t) {
      t(1);
    });
  };

  e.prototype.getSystemData = function () {
    return _pConst.DefaultSystemInfo;
  };

  e.prototype.getSwitches = function () {
    return _pConst.DefaultSDKSwitch;
  };

  e.prototype.vibrate = function () {};

  e.prototype.preloadVideo = function () {
    return !0;
  };

  e.prototype.showModal = function () {};

  e.prototype.refreshGame = function () {
    location.reload();
  };

  e.prototype.showLoading = function () {};

  e.prototype.hideLoading = function () {};

  e.prototype.log = function () {};

  e.prototype.getMenuBounding = function () {
    null == this.menuBounding && (this.menuBounding = new cc.Rect(650, 0, 100, 50));
    return this.menuBounding;
  };

  e.prototype.createShareImage = function () {
    return new Promise(function (t) {
      return t("");
    });
  };

  e.prototype.preloadInterstitialAD = function () {};

  e.prototype.showInterstitialAD = function () {
    return new Promise(function (t) {
      return t(1);
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
    return new Promise(function (t) {
      return t(0);
    });
  };

  e.prototype.startVideoRecord = function () {};

  e.prototype.pauseVideoRecord = function () {};

  e.prototype.resumeVideoRecord = function () {};

  e.prototype.stopVideoRecord = function () {};

  e.prototype.hasVideoRecord = function () {
    return !1;
  };

  e.prototype.shareVideoRecord = function () {
    return Promise.resolve(1);
  };

  e.prototype.uploadAdEvent = function () {};

  e.prototype.addShortcut = function () {};

  e.prototype.PostMessage = function () {};

  e.prototype.SetUserCloudStorage = function () {};

  e.prototype.GetOpenDataContext = function () {};

  e.prototype.reportEvent = function () {};

  e.prototype.share = function () {
    return new Promise(function (t) {
      t(1);
    });
  };

  e.prototype.getUserProfile = function () {};

  e.prototype.subScriptionUpdate = function () {};

  e.prototype.getLaunchOptionsSync = function () {
    return _pConst.DefaultLaunchOptions;
  };

  e.prototype.payment = function () {
    return new Promise(function (t) {
      return t(1);
    });
  };

  return e;
}(require("pf")["default"]);

exports["default"] = l;

cc._RF.pop();