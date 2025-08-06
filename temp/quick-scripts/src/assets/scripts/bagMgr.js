"use strict";
cc._RF.push(module, 'dfb15KhzmROJKM0MC8wEsot', 'bagMgr');
// scripts/bagMgr.js

"use strict";

//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.bagItem = void 0;

var _evts = require("evts");

var _idx = require("idx");

var _cfgMgr = require("cfgMgr");

var _lang = require("lang");

var _pInfo = require("pInfo");

var c = function () {
  function t() {
    if (this._propTag = "props", t._ins) throw new Error("bagMgr can only be one！");
    t._ins = this;
  }

  Object.defineProperty(t, "ins", {
    get: function get() {
      t._ins || new t();
      return t._ins;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.initBag = function (t) {
    if (t) {
      var e = _cfgMgr["default"].serverCfg.qw_line_rules.rules.times.set.basic_times.val;
      this.chgItemCount("qw_line_ticket", e, !1);
      this.updItem();
    }
  };

  Object.defineProperty(t.prototype, "bagItem", {
    get: function get() {
      this._bagItem || (this._bagItem = _pInfo["default"].ins.Bag);
      return this._bagItem;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.clearItem = function () {
    this._bagItem = null;
  };

  t.prototype.updItem = function () {
    _pInfo["default"].ins.Bag = this._bagItem;
  };

  t.prototype.useItem = function (t, e, o) {
    if (void 0 === e && (e = 1), t) if (this.bagItem[t]) {
      this.bagItem[t] -= e;
      this.bagItem[t] <= 0 && delete this.bagItem[t];
      this.updItem();
      var r = "拼图";
      _lang.gemeTypeKey[o] && (r = _lang.gemeTypeKey[o]);

      _idx.platform.reportEvent(_idx.ERepEvt.useItem, {
        gameType: r,
        itemId: _lang.reportKey[t]
      });

      _evts["default"].opE.emit({
        action: _evts["default"].UPD_MAIN_RED
      });
    } else cc.log("使用失败，无该道具：" + t);
  };

  t.prototype.checkItemEnough = function (t, e) {
    void 0 === e && (e = 1);
    return this.bagItem[t] && this.bagItem[t] >= e;
  };

  t.prototype.addItem = function (t, e, o, i) {
    void 0 === e && (e = 1);
    void 0 === o && (o = !0);
    void 0 === i && (i = !0);
    this.specialItemCheck(t, e) || t && (null == this.bagItem[t] && (this.bagItem[t] = 0), this.bagItem[t] += e, o && this.updItem(), "puzzle_pieces" !== t && "newYear_pieces" !== t || _evts["default"].opE.emit({
      action: _evts["default"].UPDJIGSAWGAME
    }), i && _evts["default"].opE.emit({
      action: _evts["default"].UPD_MAIN_RED
    }));
  };

  t.prototype.chgItemCount = function (t, e, o) {
    void 0 === e && (e = 1);
    void 0 === o && (o = !0);
    t && (null == this.bagItem[t] && (this.bagItem[t] = 0), this.bagItem[t] = e, o && this.updItem());
  };

  t.prototype.getItemCount = function (t) {
    return t && this.bagItem[t] ? this.bagItem[t] : 0;
  };

  t.prototype.specialItemCheck = function (t, e) {
    switch (t) {
      case "coin":
        return _pInfo["default"].ins.addCoin(e), !0;

      case "exp":
        return _pInfo["default"].ins.addExp(e), !0;

      case "times":
        return _pInfo["default"].ins.addPower(e), !0;

      default:
        return !1;
    }
  };

  return t;
}();

exports["default"] = c;

exports.bagItem = function () {
  this.count = 0;
};

cc._RF.pop();