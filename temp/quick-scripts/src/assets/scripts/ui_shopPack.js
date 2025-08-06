"use strict";
cc._RF.push(module, '04bfcWd8wxNsb58fYw/OdLP', 'ui_shopPack');
// scripts/ui_shopPack.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _cfgMgr = require("cfgMgr");

var _shopMgr = require("shopMgr");

var _baseUI = require("baseUI");

var _chaptBtn = require("chaptBtn");

var _packItem1 = require("packItem1");

var p = cc._decorator;
var d = p.ccclass;
var h = p.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.itemScroll = null;
    e.btnScroll = null;
    e.packItem = null;
    e.btnItem = null;
    e.btnsComp = [];
    e.curPageIdx = -1;
    e.datasArr = [];
    e.tabIds = [];
    e._packItem = [];
    return e;
  }

  __extends(e, t);

  e.prototype.init = function () {
    var t;
    var e;
    var o = this;
    var n = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.shop_config) || void 0 === e ? void 0 : e.gift;

    if (n) {
      var i = {};

      for (var r in n) {
        var c = n[r];
        var u = c.tag || 0;
        c.is_shop && (i[u] ? i[u].push(c) : (i[u] = [], i[u].push(c)));
      }

      var p = _shopMgr["default"].ins.getTabsRed();

      for (var d in i) {
        var h = i[d];

        if (h) {
          this.tabIds.push(d);
          var f = h[0].gift || "礼包";
          var g = cc.instantiate(this.btnItem);
          g.active = !0;
          g.parent = this.btnScroll.content;
          var y = g.getComponent(_chaptBtn["default"]);
          y.setLb(f);
          y.setState(!1);
          this.btnsComp.push(y);
          this.datasArr.push(h);
          var m = 1;
          if (p[d]) m = 0;else for (var v = h.length, _ = 0; _ < v; _++) {
            0 == (h[_].price || 0) && m++;
          }
          y.setRed(m);
        }
      }

      var b = this.btnsComp.length;

      var w = function w(t) {
        S.btnsComp[t].node.on("click", function () {
          o.chgViewData(t);
        }, S);
      };

      var S = this;

      for (_ = 0; _ < b; _++) {
        w(_);
      }

      this.btnScroll.node.width = 550;
      var T = this.btnScroll.content.children[0].width * this.btnScroll.content.childrenCount;
      this.btnScroll.node.x = T > this.btnScroll.node.width ? -274 : (this.btnScroll.node.width - T) / 2 - 274;
      T = Math.min(T, 550);
      this.btnScroll.node.width = T;
      this.btnScroll.scrollToLeft();
      this.chgViewData(0);
    }
  };

  e.prototype.chgViewData = function (t) {
    var e = this.curPageIdx;

    if (e != t) {
      var o = this.btnsComp;

      var n = _shopMgr["default"].ins.getTabsRed();

      o[e] && (o[e].setState(!1), o[e].setRed(0), n[this.tabIds[e]] = 1);
      o[t] && (o[t].setState(!0), n[this.tabIds[t]] = 1);

      _shopMgr["default"].ins.setTabsRed(n);

      this.curPageIdx = t;
      this.initListView();
    }
  };

  e.prototype.initListView = function () {
    var t = this;
    var e = this.itemScroll.content;
    e.children.forEach(function (e) {
      t._packItem.push(e);
    });
    e.removeAllChildren();

    for (var o = this.datasArr[this.curPageIdx], n = o.length, i = 0; i < n; i++) {
      var r = o[i];

      var a = this._packItem.shift();

      a || (a = cc.instantiate(this.packItem));
      a.active = !0;
      a.parent = e;
      a.getComponent(_packItem1["default"]).initItem(r);
    }

    e.setContentSize(580, 182 * n);
  };

  e.prototype.hideThis = function () {
    t.prototype.hide.call(this);
  };

  __decorate([h(cc.ScrollView)], e.prototype, "itemScroll", void 0);

  __decorate([h(cc.ScrollView)], e.prototype, "btnScroll", void 0);

  __decorate([h(cc.Node)], e.prototype, "packItem", void 0);

  __decorate([h(cc.Node)], e.prototype, "btnItem", void 0);

  return __decorate([d], e);
}(_baseUI["default"]);

exports["default"] = f;

cc._RF.pop();