"use strict";
cc._RF.push(module, '5dcedloo3JKQKfpXRHkTJiZ', 'ui_getRes');
// scripts/ui_getRes.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _idx = require("idx");

var _res = require("res");

var _uData = require("uData");

var _cfgMgr = require("cfgMgr");

var _lang = require("lang");

var _item = require("item");

var _bagMgr = require("bagMgr");

var _panelMgr = require("panelMgr");

var _tipMgr = require("tipMgr");

var _pInfo = require("pInfo");

var _baseUI = require("baseUI");

var v = cc._decorator;
var _ = v.ccclass;
var b = v.property;

var w = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.typeSps = [];
    e.iconSps = [];
    e.titleLb = null;
    e.iconSpr = null;
    e.proNodes = [];
    e.tarNodes = [];
    e.getLbs = [];
    e.tarNums = [];
    e.adNode = null;
    e.giftNode = null;
    e.packNode = null;
    e.doubleNode = null;
    e.packItems = [];
    e.priceLb = null;
    e.eventFunc = null;
    e.shopData = null;
    e.isDouble = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    var e = this;
    var o = t.itemId;
    var n = t.cb;
    var i = t.gType;
    var r = t.useTo;
    this.tarNodes[0].active = !1;
    this.tarNodes[1].active = !1;
    this.tarNodes[2].active = !1;
    this.itemId = o;
    this.closeCb = n;
    var a = r || "";
    var s = _cfgMgr["default"].serverCfg;
    var d = this.data = {};

    switch (o) {
      case "times":
        this.titleLb.string = "体力不足", this.iconSpr.spriteFrame = this.iconSps[1];

        var h = _pInfo["default"].ins.getPowerAdTimes(),
            f = _uData["default"].ins.getIsNewUser() ? s.times.forUser.new_user.rules.level : s.times.forUser.all.rules.level,
            g = f[h];

        d.normalGet = d.adGet = g.rules.val, this.proNodes[1].active = !1, this.getLbs[0].string = "+" + f[0].rules.val, this.getLbs[2].string = "+" + f[1].rules.val, this.tarNums[0].string = h + "/1", this.tarNums[2].string = h + "/2", 1 === h && (this.tarNodes[0].active = !0), this.adNode.adDotData = "主线-体力";
        break;

      case "coin":
        this.titleLb.string = "元宝不足", this.iconSpr.spriteFrame = this.iconSps[0];

        var m = _pInfo["default"].ins.getCoinAdTimes(),
            v = s.ad_coin_rules.rules.level,
            _ = v[m];

        d.normalGet = d.adGet = _.rules.val;

        for (var b = 0; b < 3; b++) {
          this.proNodes[b].active = !0, this.getLbs[b].string = "+" + v[b].rules.val, m > b ? (this.tarNums[b].string = b + 1 + "/" + (b + 1), this.tarNodes[b].active = !0) : this.tarNums[b].string = m + "/" + (b + 1);
        }

        var w = "主线";
        _lang.gemeTypeKey[i] && (w = _lang.gemeTypeKey[i]), this.adNode.adDotData = w + "-元宝-" + a;
    }

    _res["default"].ins.getBundleByString("resSps").then(function (t) {
      t.load("item/" + o, cc.SpriteFrame, function (t, o) {
        !t && e.node && e.node.isValid && e.typeSps.forEach(function (t) {
          t.spriteFrame = o;
        });
      }), t.load("spine/light/action", sp.SkeletonData, function (t, o) {
        if (!t && e.node && e.node.isValid) {
          var n = new cc.Node();
          var i = n.addComponent(sp.Skeleton);
          i.skeletonData = o, i.animation = "animation", n.parent = e.iconSpr.node;
        }
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('resSps')", t);
    });

    this.initPack();
  };

  e.prototype.hideThis = function () {
    var t;
    null === (t = this.closeCb) || void 0 === t || t.call(this);
    this.hide();
  };

  e.prototype.initPack = function () {
    var t;
    var e;
    var o = _cfgMgr["default"].serverCfg;
    var n = ("times" === this.itemId ? null === (t = null == o ? void 0 : o.buy_stamina) || void 0 === t ? void 0 : t.stamina : null === (e = null == o ? void 0 : o.buy_gold_coins) || void 0 === e ? void 0 : e.gold_coins)["times" === this.itemId ? "times2" : "coin7"];

    if (n) {
      this.packNode.active = !0;
      this.shopData = n;
      var i = n.key;

      var r = _pInfo["default"].ins.getShopUnreset();

      var a = n["double"] || 0;
      var s = r[i] || 0;
      var c = this.isDouble = this.doubleNode.active = s < a;
      this.packItems.forEach(function (t) {
        t.node.active = !0;
      });
      var l = n.props;

      for (var p in l) {
        var d = Number(l[p]);
        c ? (this.packItems[0].initByData(p, 2 * d), this.packItems[1].initByData(p, d), this.packItems[2].initByData(p, d)) : (this.packItems[0].initByData(p, d), this.packItems[1].initByData(p, d), this.packItems[2].node.active = !1);
      }

      this.priceLb.string = "¥" + n.price;
    } else this.packNode.active = !1;
  };

  e.prototype.onAdGet = function () {
    this.getItem(!0);
  };

  e.prototype.getItem = function (t) {
    this.tarNodes[0].active = !1;
    this.tarNodes[1].active = !1;
    this.tarNodes[2].active = !1;
    var e = this.data;
    var o = t ? e.normalGet : e.adGet;
    var n = _pInfo["default"].ins;
    var i = _cfgMgr["default"].serverCfg;

    switch (this.itemId) {
      case "times":
        n.addPower(o, !1), n.addPowerAdTimes(), this.proNodes[1].active = !1;
        var r = _uData["default"].ins.getIsNewUser() ? i.times.forUser.new_user.rules.level : i.times.forUser.all.rules.level,
            c = n.getPowerAdTimes(),
            p = r[c];
        e.normalGet = e.adGet = p.rules.val, 1 === c ? (this.tarNodes[0].active = !0, this.tarNums[0].string = c + "/1", this.tarNums[2].string = c + "/2") : 0 === c && (this.tarNodes[0].active = !0, this.tarNodes[2].active = !0, this.tarNums[0].string = "1/1", this.tarNums[2].string = "2/2"), !_pInfo["default"].ins.isMaxAdCount() && _idx.platform.reportEvent(_idx.ERepEvt.buyTimes);
        break;

      case "coin":
        n.addCoin(o, !1), n.addCoinAdTimes();

        var d = _pInfo["default"].ins.getCoinAdTimes(),
            h = i.ad_coin_rules.rules.level[d];

        e.normalGet = e.adGet = h.rules.val;

        for (var g = 0; g < 3; g++) {
          this.proNodes[g].active = !0, d > g ? (this.tarNums[g].string = g + 1 + "/" + (g + 1), this.tarNodes[g].active = !0) : this.tarNums[g].string = d + "/" + (g + 1);
        }

        !_pInfo["default"].ins.isMaxAdCount() && _idx.platform.reportEvent(_idx.ERepEvt.buyCoins);
    }

    var m = this.iconSpr.node;
    var v = m.parent.convertToWorldSpaceAR(m.position);

    _panelMgr["default"].ins.open("ui/ui_flyAni", {
      itemDatas: [{
        itemId: this.itemId,
        worldPos: v,
        value: o
      }],
      hideCb: function hideCb() {
        _evts["default"].opE.emit({
          action: _evts["default"].POWER_CHG
        });

        _evts["default"].opE.emit({
          action: _evts["default"].COIN_CHG
        });
      }
    });
  };

  e.prototype.onDestroy = function () {
    cc.assetManager.releaseAsset(this.iconSpr.spriteFrame);
  };

  e.prototype.onBtnBuy = function () {
    var t = this;

    if (this.shopData) {
      var e = this.isDouble ? 1 : 0;
      var o = this.shopData.props;
      var n = JSON.stringify(this.shopData.props);

      _idx.platform.reportEvent(_idx.ERepEvt.susPayment, {
        key: this.shopData.key
      });

      _idx.platform.payment(this.shopData.key, this.shopData.price, e, n).then(function () {
        var e = [];

        for (var n in o) {
          var i = o[n];
          t.isDouble && (i *= 2);

          _bagMgr["default"].ins.addItem(n, i);

          var r = {};
          r.itemId = n;
          r.worldPos = t.packItems[0].node.parent.convertToWorldSpaceAR(t.packItems[0].node.position);
          r.value = i;
          e.push(r);
        }

        _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: e
        });

        _pInfo["default"].ins.addShopUnreset(t.shopData.key);

        t.initPack();

        _idx.platform.reportEvent(_idx.ERepEvt.paymentResult, {
          key: t.shopData.key,
          success: 1
        });
      })["catch"](function (e) {
        _tipMgr["default"].ins.showTip(e, !0);

        _idx.platform.reportEvent(_idx.ERepEvt.paymentResult, {
          key: t.shopData.key,
          success: 0
        });
      });
    }
  };

  e.prototype.onBtnShop = function () {
    this.hideThis();

    _evts["default"].opE.emit({
      action: _evts["default"].MAINJUMP,
      data: 0
    });

    _panelMgr["default"].ins.open("ui/ui_shopPack", null).then(function () {
      _evts["default"].opE.emit({
        action: _evts["default"].UPD_MAIN_RED
      });
    });
  };

  __decorate([b([cc.Sprite])], e.prototype, "typeSps", void 0);

  __decorate([b([cc.SpriteFrame])], e.prototype, "iconSps", void 0);

  __decorate([b(cc.Label)], e.prototype, "titleLb", void 0);

  __decorate([b(cc.Sprite)], e.prototype, "iconSpr", void 0);

  __decorate([b([cc.Node])], e.prototype, "proNodes", void 0);

  __decorate([b([cc.Node])], e.prototype, "tarNodes", void 0);

  __decorate([b([cc.Label])], e.prototype, "getLbs", void 0);

  __decorate([b([cc.Label])], e.prototype, "tarNums", void 0);

  __decorate([b(cc.Node)], e.prototype, "adNode", void 0);

  __decorate([b(cc.Node)], e.prototype, "giftNode", void 0);

  __decorate([b(cc.Node)], e.prototype, "packNode", void 0);

  __decorate([b(cc.Node)], e.prototype, "doubleNode", void 0);

  __decorate([b([_item["default"]])], e.prototype, "packItems", void 0);

  __decorate([b(cc.Label)], e.prototype, "priceLb", void 0);

  return __decorate([_], e);
}(_baseUI["default"]);

exports["default"] = w;

cc._RF.pop();