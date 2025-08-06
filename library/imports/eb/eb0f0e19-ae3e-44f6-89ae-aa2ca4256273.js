"use strict";
cc._RF.push(module, 'eb0f04Zrj5E9omuqiykJWJz', 'veBtn');
// scripts/veBtn.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _adC = require("adC");

var _com = require("com");

var _evts = require("evts");

var _idx = require("idx");

var _pConst = require("pConst");

var _request = require("request");

var _res = require("res");

var _sound = require("sound");

var _lang = require("lang");

var _tipMgr = require("tipMgr");

var _pInfo = require("pInfo");

var m = cc._decorator;
var v = m.ccclass;
var _ = m.property;

var b = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.videoSource = "";
    e.videoDuration = _adC.VEnum2.MEDIUM;
    e.onWatchEndEvent = null;
    e.adSp = null;
    e.cb = null;
    e.eCb = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    _idx.platform.preloadVideo(_adC.VEnum[this.videoDuration]);

    this.adSp || (this.adSp = this.node.getChildByName("bg").getChildByName("img_gk_ds").getComponent(cc.Sprite));
    this.setShareIcon();
  };

  e.prototype.onEnable = function () {
    this.node.on("click", this.onClick, this);
    this.eCb = this.onOperTap.bind(this);

    _evts["default"].opE.on(this.eCb);
  };

  e.prototype.onDisable = function () {
    this.node.off("click", this.onClick, this);

    _evts["default"].opE.off(this.eCb);

    this.eCb = null;
  };

  e.prototype.onOperTap = function (t) {
    switch (t.action) {
      case _evts["default"].AD_MAX:
        this.setShareIcon();
    }
  };

  e.prototype.onClick = function (t) {
    var e = this;

    if ((!t || t.interactable) && null != this.onWatchEndEvent && (null == this.cb || this.cb())) {
      var o = _com["default"].ins.a(this.node, 1);

      var n = _pInfo["default"].ins.isMaxShareCount();

      var i = _pInfo["default"].ins.isMaxAdCount();

      if (n && i) return void _tipMgr["default"].ins.showTip(_lang.lang[10009]);
      if (i) return void _idx.platform.share().then(function (n) {
        n && (o(), e.onWatchEndEvent && cc.Component.EventHandler.emitEvents([e.onWatchEndEvent], t), _pInfo["default"].ins.addShareCount());
      })["catch"](function (t) {
        console.error(t);
      });
      var r = this.node.adDotData || e.onWatchEndEvent.customEventData;

      _idx.platform.doWatchAD({
        videoSource: this.videoSource,
        videoDuration: this.videoDuration,
        sequenceInfo: null
      }).then(function () {
        _sound["default"].ins.playBGM();

        o();
        e.onWatchEndEvent && cc.Component.EventHandler.emitEvents([e.onWatchEndEvent], t);

        _pInfo["default"].ins.addAdCount();

        _request["default"].ins.adDot(r, 1);
      })["catch"](function (t) {
        switch (_sound["default"].ins.playBGM(), o(), t) {
          case _pConst.VideoFailCode.NO_AD:
            _tipMgr["default"].ins.showTip(_lang.lang[1e4]), _request["default"].ins.adDot(r, 0);
            break;

          case _pConst.VideoFailCode.CANCELED:
            _request["default"].ins.adDot(r, 2);

        }
      });
    }
  };

  e.prototype.setBeforeWatchCheckHandler = function (t) {
    this.cb = t;
  };

  e.prototype.setShareIcon = function () {
    this.adSp && _pInfo["default"].ins.isMaxAdCount() && (this.adSp.node.$isShare || (_res["default"].ins.lSF("common/lupin_2", this.adSp), this.adSp.node.$isShare = !0));
  };

  __decorate([_(cc.String)], e.prototype, "videoSource", void 0);

  __decorate([_(cc.Component.EventHandler)], e.prototype, "onWatchEndEvent", void 0);

  __decorate([_(cc.Sprite)], e.prototype, "adSp", void 0);

  return __decorate([v], e);
}(cc.Component);

exports["default"] = b;

cc._RF.pop();