"use strict";
cc._RF.push(module, '55c3ekMcB9Er61q37vHGQCP', 'packItem1');
// scripts/packItem1.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _idx = require("idx");

var _item = require("item");

var _bagMgr = require("bagMgr");

var _panelMgr = require("panelMgr");

var _shopMgr = require("shopMgr");

var _tipMgr = require("tipMgr");

var _pInfo = require("pInfo");

var h = cc._decorator;
var f = h.ccclass;
var g = h.property;

var y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.packName = null;
    e.scrollView = null;
    e.priceLb = null;
    e.rewardItem = null;
    e.finNode = null;
    e.btnNode = null;
    e.adNode = null;
    e.buyNumLb = null;
    e.redNode = null;
    e.discountLb = null;
    e.shopData = null;
    e.isFree = !1;
    e._rewardItems = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {};

  e.prototype.initItem = function (t) {
    this.shopData = t;
    this.packName.string = (null == t ? void 0 : t.title) || "礼包";
    var e = t.price || 0;
    this.priceLb.string = "¥" + t.price;
    this.isFree = 0 == e;

    var o = _shopMgr["default"].ins.getPackRed();

    o[t.key] ? this.redNode.active = !1 : (this.redNode.active = !0, o[t.key] = 1, _shopMgr["default"].ins.setPackRed(o));
    t.discount ? (this.discountLb.string = t.discount + "折", this.discountLb.node.parent.active = !0) : this.discountLb.node.parent.active = !1;
    this.initReward(t.props);
    this.checkData();
  };

  e.prototype.initReward = function (t) {
    var e = this;

    if (t) {
      var o = 0;
      var n = this.scrollView.content;

      for (var i in n.children.forEach(function (t) {
        e._rewardItems.push(t);
      }), n.removeAllChildren(), t) {
        var r = t[i];

        var a = this._rewardItems.shift();

        a || (a = cc.instantiate(this.rewardItem));
        a.parent = n;
        a.active = !0;
        var c = a.getComponent(_item["default"]);
        c && c.initByData(i, r);
        o++;
      }

      n.setContentSize(93 * o, 100);
    }
  };

  e.prototype.checkData = function () {
    if (this.shopData) {
      var t = this.shopData.key;

      var e = _pInfo["default"].ins.getShopRecord();

      var o = this.shopData.daily_limit_nums || 0;
      var n = e[t] || 0;
      this.btnNode.active = !this.isFree;
      this.adNode.active = this.isFree;
      var i = this.isFree ? this.adNode : this.btnNode;
      var r = n >= o;
      this.finNode.active = r;
      i.active = !r;
      this.buyNumLb.node.active = !r;
      this.buyNumLb.string = "限购:" + n + "/" + o;
    }
  };

  e.prototype.onBtnBuy = function () {
    var t = this;

    if (this.shopData) {
      var e = JSON.stringify(this.shopData.props);

      _idx.platform.payment(this.shopData.key, this.shopData.price, 0, e).then(function () {
        t.getReward();
      })["catch"](function (t) {
        _tipMgr["default"].ins.showTip(t, !0);
      });
    }
  };

  e.prototype.onBtnAd = function () {
    this.shopData && this.getReward();
  };

  e.prototype.getReward = function () {
    var t = this.shopData.props;

    for (var e in t) {
      var o = t[e];

      _bagMgr["default"].ins.addItem(e, o);
    }

    for (var n = this.scrollView.content.children, i = [], r = 0, a = n.length; r < a; r++) {
      var u = n[r];
      var p = u.getComponent(_item["default"]);
      var h = {};
      h.itemId = p.key;
      h.worldPos = u.parent.convertToWorldSpaceAR(u.position);
      h.value = Number(p.count);
      i.push(h);
    }

    _panelMgr["default"].ins.open("ui/ui_flyAni", {
      itemDatas: i
    });

    _pInfo["default"].ins.addShopRecord(this.shopData.key);

    this.checkData();
  };

  __decorate([g(cc.Label)], e.prototype, "packName", void 0);

  __decorate([g(cc.ScrollView)], e.prototype, "scrollView", void 0);

  __decorate([g(cc.Label)], e.prototype, "priceLb", void 0);

  __decorate([g(cc.Node)], e.prototype, "rewardItem", void 0);

  __decorate([g(cc.Node)], e.prototype, "finNode", void 0);

  __decorate([g(cc.Node)], e.prototype, "btnNode", void 0);

  __decorate([g(cc.Node)], e.prototype, "adNode", void 0);

  __decorate([g(cc.Label)], e.prototype, "buyNumLb", void 0);

  __decorate([g(cc.Node)], e.prototype, "redNode", void 0);

  __decorate([g(cc.Label)], e.prototype, "discountLb", void 0);

  return __decorate([f], e);
}(cc.Component);

exports["default"] = y;

cc._RF.pop();