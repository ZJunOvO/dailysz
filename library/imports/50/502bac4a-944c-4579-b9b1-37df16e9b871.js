"use strict";
cc._RF.push(module, '502baxKlExFebmxN98W6bhx', 'page_jigsaw');
// scripts/page_jigsaw.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _mySafeArea = require("mySafeArea");

var _global = require("global");

var _jigsawMgr = require("jigsawMgr");

var _newJigMgr = require("newJigMgr");

var _tipMgr = require("tipMgr");

var _jigMenu = require("jigMenu");

var h = cc._decorator;
var f = h.ccclass;
var g = h.property;

var y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.jigsawItem = null;
    e.menuView = null;
    e.newView = null;
    e.btnsNode = null;
    e.pageNodes = null;
    e.jigsawNum = null;
    e.jigsawNum1 = null;
    e.jigTypes = [];
    e.bgNode = null;
    e.menuItem = null;
    e.THEME_H = 276;
    e.themeSpace = 10;
    e.top_offest = 30;
    e.bottom_offest = 200;
    e.last_view_inner_y = -1;
    e.themes = {};
    e.newThemes = {};
    e.touching_theme_id = 0;
    e.jigBID = 1;
    e.jigEID = 27;
    e.jigCount = 27;
    e.newJigBID = 1;
    e.newJigEID = 18;
    e.newJigCount = 18;
    e.designContH = 1100;
    e.btnsComp = [];
    e.curPageIdx = 0;
    e.isAni = !1;
    e.isFirstLoad = !0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.jigEID = this.jigCount = _global["default"].jisawCount;
    this.newJigEID = this.newJigCount = _newJigMgr["default"].ins.jigsawThemeNum;
    this.node.height = cc.winSize.height;
    _global["default"].padScale && (this.bgNode.scale = _global["default"].padScale);

    _evts["default"].opE.on(this.onOperTap.bind(this));

    this.upNewJigRed();
  };

  e.prototype.onOperTap = function (t) {
    var e = null == t ? void 0 : t.action;
    if (e) switch (e) {
      case _evts["default"].FINISH_PUZZLE:
        break;

      case _evts["default"].UPD_MAIN_RED:
        this.upNewJigRed();
    }
  };

  e.prototype.upNewJigRed = function () {
    this.jigsawNum1.node.parent.active = !1;

    var t = _newJigMgr["default"].ins.getUnPlacedNum();

    if (t > 0) {
      var e = t > 99 ? "99+" : t + "";
      this.jigsawNum.node.parent.active = !0;
      this.jigsawNum.string = e + "";
      this.jigsawNum.node.x = _global["default"].getCharXOffset(this.jigsawNum.string);
    } else this.jigsawNum.node.parent.active = !1, this.jigsawNum1.node.parent.active = !1;
  };

  e.prototype.start = function () {
    var t = this;
    this.scheduleOnce(function () {
      t.adapter();

      var e = _mySafeArea.getSafeAreaRect().yMin;

      var o = t.node.height - 1280 - e;
      t.newView.node.height = t.menuView.node.height = t.designContH + o;
      t.newView.node.getChildByName("view").height = t.menuView.node.getChildByName("view").height = t.designContH + o;
      t.menuView.node.y -= e / 2;
      t.newView.node.y -= e / 2;
      t.initMenuView();
    });
  };

  e.prototype.adapter = function () {
    var t = _mySafeArea.getSafeAreaRect().yMin;

    this.btnsNode.y -= t;
  };

  e.prototype.onEnable = function () {
    var t = this;
    this.isFirstLoad || this.scheduleOnce(function () {
      t.adapter();
    });
    this.isFirstLoad = !1;
  };

  e.prototype.initMenuView = function () {
    var t = (Math.ceil(this.jigCount / 3) + 1) * (this.themeSpace + this.THEME_H);
    this.menuView.content.setContentSize(cc.size(cc.winSize.width, t));
    this.initItemView1();
    this.loadMenuItem(0);
  };

  e.prototype.loadMenuItem = function (t) {
    if (t < this.jigCount) {
      var e = this.jigBID + t;
      var o = cc.instantiate(this.menuItem);
      var n = o.getComponent(_jigMenu["default"]);
      n.node.active = !0;
      o.opacity = 0;
      cc.tween(o).to(0.5, {
        opacity: 255
      }).start();
      var i = t % 3;
      var r = Math.ceil(e / 3);
      var a = 128 + 232 * i;
      var s = -this.top_offest - this.THEME_H / 2 + (r - 1) * -(this.THEME_H + this.themeSpace);
      n.node.parent = this.menuView.content;
      n.node.position = cc.v3(a, s);
      this.themes[e] = n;
      n.init(t, 1);
      t++;
      this.scheduleOnce(this.loadMenuItem.bind(this, t), 0);
    } else this.reItemVis1(), this.loadNewItem(0);
  };

  e.prototype.loadNewItem = function (t) {
    if (t < this.newJigCount) {
      var e = this.newJigBID + t;
      var o = cc.instantiate(this.menuItem).getComponent(_jigMenu["default"]);
      o.node.active = !0;
      var n = t % 3;
      var i = Math.ceil(e / 3);
      var r = 128 + 232 * n;
      var a = -this.top_offest - this.THEME_H / 2 + (i - 1) * -(this.THEME_H + this.themeSpace);
      o.node.parent = this.newView.content;
      o.node.position = cc.v3(r, a);
      this.newThemes[e] = o;
      o.init(t, 2);
      t++;
      this.scheduleOnce(this.loadNewItem.bind(this, t), 0);
    } else this.initItemView2();
  };

  e.prototype.initItemView1 = function () {
    var t = this;
    this.menuView.node.on("scrolling", function () {
      t.reItemVis1();
    }, this);

    var e = _jigsawMgr["default"].ins.getNowJigsawLv();

    e >= this.jigBID && e <= this.jigEID ? this.ScrollToItem1(e) : this.ScrollToItem1(this.jigBID);
  };

  e.prototype.initItemView2 = function () {
    var t = this;
    this.newView.node.on("scrolling", function () {
      t.reItemVis2();
    }, this);

    var e = _newJigMgr["default"].ins.getNowJigsawLv();

    e >= this.newJigBID && e <= this.newJigEID ? this.ScrollToItem2(e) : this.ScrollToItem2(this.newJigBID);
  };

  e.prototype.ScrollToItem1 = function (t) {
    if (this.last_view_inner_y = -1, !(t < this.jigBID || t > this.jigEID)) {
      var e = Math.ceil(t / 3);
      var o = Math.abs(-279 * (e - 1));
      var n = Math.max(o, 0);
      var i = this.menuView.getScrollOffset();
      Math.abs(n - i.y) < Number.EPSILON || this.menuView.scrollToOffset(cc.v2(0, n), 0.5);
    }
  };

  e.prototype.ScrollToItem2 = function (t) {
    if (this.last_view_inner_y = -1, !(t < this.newJigBID || t > this.newJigEID)) {
      var e = Math.ceil(t / 3);
      var o = Math.abs((e - 1) * -this.THEME_H);
      var n = Math.max(o, 0);
      var i = this.newView.getScrollOffset();
      Math.abs(n - i.y) < Number.EPSILON || this.newView.scrollToOffset(cc.v2(0, n));
    }

    this.reItemVis2();
  };

  e.prototype.reItemVis1 = function () {
    var t = this.menuView.getContentPosition();

    if (!(Math.abs(this.last_view_inner_y - t.y) < 0.01)) {
      this.last_view_inner_y = t.y;

      for (var e = this.menuView.node, o = e.height / 2, n = e.parent.convertToWorldSpaceAR(e.position), i = n.y + o, r = n.y - o, a = this.menuView.content.children, s = 0, c = a.length; s < c; s++) {
        var l = a[s];
        var u = l.parent.convertToWorldSpaceAR(l.position);
        var p = u.y - 125 > i || u.y + 125 < r;
        l.active = !p;
      }
    }
  };

  e.prototype.reItemVis2 = function () {};

  e.prototype.chgToFes = function () {};

  e.prototype.onBtnChgJigType = function () {
    var t = this;

    if (0 !== this.curPageIdx) {
      var e = this.curPageIdx;
      var o = 0 === e ? 1 : 0;

      if (!this.isAni) {
        this.isAni = !0;
        this.jigTypes[e].active = !1;
        this.jigTypes[o].active = !0;
        this.curPageIdx = 0 === e ? 1 : 0;
        var n = this.pageNodes.children[o];
        var i = this.pageNodes.children[e];
        cc.Tween.stopAllByTarget(this.pageNodes);
        var r = o > e ? -1 : 1;
        var a = this.pageNodes.x + cc.view.getVisibleSize().width * r;
        n.x = -a;
        n && (n.active = !0);
        cc.tween(this.pageNodes).to(0.5, {
          x: a
        }, {
          easing: this.customEaseInOut
        }).call(function () {
          i && (i.active = !1);
          t.isAni = !1;
        }).start();
      }
    } else _tipMgr["default"].ins.showTip("暂未开启");
  };

  e.prototype.customEaseInOut = function (t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  };

  __decorate([g(cc.Prefab)], e.prototype, "jigsawItem", void 0);

  __decorate([g(cc.ScrollView)], e.prototype, "menuView", void 0);

  __decorate([g(cc.ScrollView)], e.prototype, "newView", void 0);

  __decorate([g(cc.Node)], e.prototype, "btnsNode", void 0);

  __decorate([g(cc.Node)], e.prototype, "pageNodes", void 0);

  __decorate([g(cc.Label)], e.prototype, "jigsawNum", void 0);

  __decorate([g(cc.Label)], e.prototype, "jigsawNum1", void 0);

  __decorate([g([cc.Node])], e.prototype, "jigTypes", void 0);

  __decorate([g(cc.Node)], e.prototype, "bgNode", void 0);

  __decorate([g(cc.Node)], e.prototype, "menuItem", void 0);

  return __decorate([f], e);
}(cc.Component);

exports["default"] = y;

cc._RF.pop();