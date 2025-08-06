"use strict";
cc._RF.push(module, 'f95238W2llPIrEkQREhyIIb', 'shopItem1');
// scripts/shopItem1.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _cfgMgr = require("cfgMgr");

var _shopItem = require("shopItem");

var c = cc._decorator;
var l = c.ccclass;
var u = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.shopItems = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {};

  e.prototype.initPower = function () {
    var t;
    var e;
    var o = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.buy_stamina) || void 0 === e ? void 0 : e.stamina;

    if (o) {
      var n = 0;

      for (var i in o) {
        var r = o[i];

        if (r) {
          var s = this.shopItems[n];
          s && s.initItem(r, !0);
        }

        n++;
      }
    }
  };

  e.prototype.initGold = function () {
    var t;
    var e;
    var o = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.buy_gold_coins) || void 0 === e ? void 0 : e.gold_coins;

    if (o) {
      var n = 0;

      for (var i in o) {
        var r = o[i];

        if (r) {
          var s = this.shopItems[n];
          s && s.initItem(r, !1);
        }

        n++;
      }
    }
  };

  __decorate([u([_shopItem["default"]])], e.prototype, "shopItems", void 0);

  return __decorate([l], e);
}(cc.Component);

exports["default"] = p;

cc._RF.pop();