"use strict";
cc._RF.push(module, '6cfcdLL6MJNqIEFWRnYXtGU', 'page_shop');
// scripts/page_shop.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _mySafeArea = require("mySafeArea");

var _res = require("res");

var _cfgMgr = require("cfgMgr");

var _global = require("global");

var _panelMgr = require("panelMgr");

var _skinMgr = require("skinMgr");

var _pInfo = require("pInfo");

var _item = require("item");

var _shopItem1 = require("shopItem1");

var v = cc._decorator;
var _ = v.ccclass;
var b = v.property;

var w = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.bgNode = null;
    e.topSpNode = null;
    e.spineNode = null;
    e.scrollView = null;
    e.topBgSp = null;
    e.topBgSp1 = null;
    e.powerItem = null;
    e.goldItem = null;
    e.itemSc = null;
    e.itemPre = null;
    e.lightNode = null;
    e.eventFunc = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.node.height = cc.winSize.height;
    _global["default"].padScale && (this.bgNode.scaleX = this.topSpNode.parent.scale = _global["default"].padScale);
    this.loadGirl();
    this.onResize();
    this.eventFunc = this.onOperTap.bind(this);

    _evts["default"].opE.on(this.eventFunc);
  };

  e.prototype.onOperTap = function (t) {
    var e = null == t ? void 0 : t.action;
    if (e) switch (e) {
      case _evts["default"].REFRESH_CFGDATA:
        this.initPanel();
    }
  };

  e.prototype.onResize = function () {
    var t = _mySafeArea.getSafeAreaRect().yMin;

    var e = cc.winSize.height - 1280 - t;
    this.scrollView.node.height += e;
    this.scrollView.content.parent.height += e;
    this.topBgSp.height += e;
    this.topBgSp1.height += e;
  };

  e.prototype.start = function () {
    this.initPanel();
  };

  e.prototype.loadGirl = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t = this;
      return __generator(this, function () {
        _skinMgr["default"].ins.updateRole(_pInfo["default"].ins.getUsingSkin().role, this.spineNode);

        _res["default"].ins.getBundleByString("resSps").then(function (e) {
          e.load("spine/light/action", sp.SkeletonData, function (e, o) {
            if (!e && t.node && t.node.isValid) {
              var n = new cc.Node();
              var i = n.addComponent(sp.Skeleton);
              i.skeletonData = o;
              i.animation = "animation";
              n.parent = t.lightNode;
            }
          });
        })["catch"](function (t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });

        return [2];
      });
    });
  };

  e.prototype.initPanel = function () {
    this.powerItem.initPower();
    this.goldItem.initGold();
    this.initPack();
  };

  e.prototype.initPack = function () {
    var t;
    var e;
    this.itemSc.content.removeAllChildren();
    var o = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.shop_config) || void 0 === e ? void 0 : e.gift;

    if (o) {
      var n = {};

      var i = _pInfo["default"].ins.getShopRecord();

      for (var r in o) {
        var a = (null == (n = o[r]) ? void 0 : n.daily_limit_nums) || 0;
        var s = i[n.key] || 0;
        if ((null == n ? void 0 : n.is_shop) && s < a) break;
      }

      if (this.itemSc.node.width = 330, n && n.props) {
        for (var r in n.props) {
          var c = n.props[r];
          var l = cc.instantiate(this.itemPre);
          l.active = !0;
          this.itemSc.content.addChild(l);
          l.getComponent(_item["default"]).initByData(r, c);
        }

        var u = this.itemSc.content.children[0].width * this.itemSc.content.childrenCount;
        this.itemSc.node.x = u > this.itemSc.node.width ? -4 : (this.itemSc.node.width - u) / 2 - 4;
        u = Math.min(u, 330);
        this.itemSc.node.width = u;
        this.itemSc.scrollToLeft();
      }
    }
  };

  e.prototype.onBtnGift = function () {
    _panelMgr["default"].ins.open("ui/ui_shopPack", null).then(function () {
      _evts["default"].opE.emit({
        action: _evts["default"].UPD_MAIN_RED
      });
    });
  };

  e.prototype.onDestroy = function () {
    _evts["default"].opE.off(this.eventFunc);

    this.eventFunc = null;
  };

  __decorate([b(cc.Node)], e.prototype, "bgNode", void 0);

  __decorate([b(cc.Node)], e.prototype, "topSpNode", void 0);

  __decorate([b(cc.Node)], e.prototype, "spineNode", void 0);

  __decorate([b(cc.ScrollView)], e.prototype, "scrollView", void 0);

  __decorate([b(cc.Node)], e.prototype, "topBgSp", void 0);

  __decorate([b(cc.Node)], e.prototype, "topBgSp1", void 0);

  __decorate([b(_shopItem1["default"])], e.prototype, "powerItem", void 0);

  __decorate([b(_shopItem1["default"])], e.prototype, "goldItem", void 0);

  __decorate([b(cc.ScrollView)], e.prototype, "itemSc", void 0);

  __decorate([b(cc.Node)], e.prototype, "itemPre", void 0);

  __decorate([b(cc.Node)], e.prototype, "lightNode", void 0);

  return __decorate([_], e);
}(cc.Component);

exports["default"] = w;

cc._RF.pop();