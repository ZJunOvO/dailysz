
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/jigsaw.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e254roCXNBXbdO0aWr4kpu', 'jigsaw');
// scripts/jigsaw.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _idx = require("idx");

var _res = require("res");

var _sound = require("sound");

var _time = require("time");

var _vb = require("vb");

var _cfgMgr = require("cfgMgr");

var _lang = require("lang");

var _global = require("global");

var _bagMgr = require("bagMgr");

var _festivalMgr = require("festivalMgr");

var _jigsawMgr = require("jigsawMgr");

var _newJigMgr = require("newJigMgr");

var _panelMgr = require("panelMgr");

var _pInfo = require("pInfo");

var _loading = require("loading");

var _main = require("main");

var T = cc._decorator;
var I = T.ccclass;
var D = T.property;
var P = 79 - 34.5 * Math.tan(Math.PI / 180 * 30) + 0.4;

var k = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ringNode = null;
    e.tilePre = null;
    e.shadow0 = null;
    e.tilesNode = null;
    e.menuNode = null;
    e.scrollView = null;
    e.finImg = null;
    e.dragTag = null;
    e.lockNode = null;
    e.timeLb = null;
    e.bgBtn = null;
    e.getLb = null;
    e.timeAd = null;
    e.lockImg = null;
    e.tileLbNode = null;
    e.cellNode = null;
    e.cellSpr = null;
    e.hintNum = null;
    e.bgNum = null;
    e.bgNode = null;
    e.tipLb = null;
    e.bgBtnNode = null;
    e.getPieceSp = null;
    e.btnReset = null;
    e.jig_2d = null;
    e.tile_a = null;
    e.tile_p = [];
    e.tiles = {};
    e.tiles_idle = [];
    e.isAllRight = !1;
    e.is_hinting = !1;
    e.idle_tile_select = null;
    e.tileSelect = null;
    e.tilePosId = -1;
    e.scroll_dir = 0;
    e.drag_tile = null;
    e.dragPutPosId = -1;
    e.guideF = null;
    e.isUnlock = !1;
    e.theme_id = -1;
    e.is_init = !1;
    e.jigTiles = [];
    e.defaultShowTime = 30;
    e.showBgEndTime = 0;
    e.adMaxTime = 5;
    e.adMaxTime2 = 5;
    e.themeType = 1;
    e.eventFunc = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t;
    var e;
    var o = _cfgMgr["default"].serverCfg;
    var n = (null === (e = null === (t = null == o ? void 0 : o.lock_rules) || void 0 === t ? void 0 : t.main_line_lock) || void 0 === e ? void 0 : e.puzzle_line_val) || 0;
    this.tipLb.string = _lang.lang[30001].format(n);

    for (var i = 0, r = o.props.set; i < r.length; i++) {
      var s = r[i];
      "puzzle_background" == s.key ? s.limit_time && (this.defaultShowTime = s.limit_time, this.timeLb.node.active = !1, this.timeAd.active = !0) : "puzzle_pieces" == s.key ? s.daily_limit_times && (this.adMaxTime = Number(s.daily_limit_times) || 5) : "newYear_pieces" == s.key && s.daily_limit_times && (this.adMaxTime2 = Number(s.daily_limit_times) || 5);
    }

    this.eventFunc = this.onOperTap.bind(this);

    _evts["default"].opE.on(this.eventFunc);

    this.scrollView._registerEvent = function () {};

    this.scrollView._unregisterEvent = function () {};

    this.tile_a = this.tilesNode;
    this.scrollView.node.on("scrolling", this.chgVisItems, this);
    this.tileLbNode.active = !1;
    this.btnReset.active = !1;
  };

  e.prototype.onOperTap = function (t) {
    var e = null == t ? void 0 : t.action;
    if (e) switch (e) {
      case _evts["default"].UPDJIGSAWGAME:
        this.updateView();
        break;

      case _evts["default"].UPD_PANEL:
      case _evts["default"].UPD_MAIN_RED:
        this.upItemNum();
    }
  };

  e.prototype.start = function () {
    this.dragTag.zIndex = -1e3;
    this.dragTag.active = !1;
  };

  e.prototype.onEnable = function () {};

  e.prototype.onDisable = function () {};

  e.prototype.upItemNum = function () {
    1 === this.themeType ? this.initGetTime() : 2 === this.themeType && this.initGetTime2();
    this.hintNum.string = _bagMgr["default"].ins.getItemCount("puzzle_notice") + "";
    this.bgNum.string = _bagMgr["default"].ins.getItemCount("puzzle_background") + "";
  };

  e.prototype.updateView = function () {
    var t;
    1 === this.themeType ? t = _jigsawMgr["default"].ins : 2 === this.themeType && (t = _newJigMgr["default"].ins);
    this.jigTiles = t.getJigsawTilesByIdx(this.theme_id);
    this.scrollView.content.removeAllChildren();
    this.tiles_idle = [];
    this.RefreshIdleItems(!0);
    this.isUnlock = t.isItemUnlock(this.theme_id);
    this.isUnlock ? this.initUnLock() : this.initLocked();
    this.upItemNum();
  };

  e.prototype.getIsUnlock = function () {
    return this.isUnlock;
  };

  e.prototype.initItem = function (t, e) {
    var o = this;
    this.themeType = e;
    this.theme_id = t;
    var n;
    var i = t + 1;
    var r = "puzzle_pieces";
    var a = "pintu_" + i + "_1";
    1 === e ? (n = _jigsawMgr["default"].ins, this.showBgEndTime = _pInfo["default"].ins.getJigsawBgEndTimesByIdx(t), this.bgBtnNode.active = !0) : 2 === e && (n = _newJigMgr["default"].ins, this.showBgEndTime = _pInfo["default"].ins.getNewJigBgEndTimesByIdx(t), r = "newYear_pieces", a = "fes_" + i + "_1", this.bgBtnNode.active = !1);
    this.jigTiles = n.getJigsawTilesByIdx(t);
    this.isUnlock = n.isItemUnlock(t);
    this.isUnlock ? this.initUnLock() : this.initLocked();
    !this.isUnlock && n.isPieceEnough(t) ? this.tipLb.node.active = !0 : this.tipLb.node.active = !1;
    this.upItemNum();
    1 === e && (i < 61 ? _res["default"].ins.getBundleByString("jigsaw").then(function (t) {
      t.load(a, cc.SpriteFrame, function (t, e) {
        !t && o.node && o.node.isValid && (o.lockImg.spriteFrame = e);
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('jigsaw')", t);
    }) : cc.assetManager.loadRemote(_global.OssConfig.jigswawUrl + "pintu_" + i + "_1.jpg", {
      ext: _global.headImgExt
    }, function (t, e) {
      !t && o.node && o.node.isValid && (o.lockImg.spriteFrame = new cc.SpriteFrame(e));
    }));

    _res["default"].ins.getBundleByString("resSps").then(function (t) {
      t.load("item/" + r, cc.SpriteFrame, function (t, e) {
        !t && o.node && o.node.isValid && (o.getPieceSp.spriteFrame = e);
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('resSps')", t);
    });
  };

  e.prototype.initGetTime = function () {
    var t = _pInfo["default"].ins.getJigsawAdTimes();

    var e = this.adMaxTime - t;
    this.getLb.string = e + "";
  };

  e.prototype.initGetTime2 = function () {
    var t = _pInfo["default"].ins.getNewJigAdTimes();

    var e = this.adMaxTime2 - t;
    this.getLb.string = e + "";
  };

  e.prototype.initLocked = function () {
    this.finImg.node.active = !0;
    this.menuNode.active = !1;
    this.lockNode.active = !0;
    this.lockImg.node.active = !0;
    this.bgNode.y = 326;
    this.bgNode.height = 790;
  };

  e.prototype.initUnLock = function () {
    var t = this;
    var e = this.theme_id + 1;
    var o = "pintu_" + e;
    1 === this.themeType ? e < 61 ? _res["default"].ins.getBundleByString("jigsaw").then(function (e) {
      e.load(o, cc.Texture2D, function (e, o) {
        !e && t.node && t.node.isValid && t.initUnlockWithImg(o);
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('jigsaw')", t);
    }) : cc.assetManager.loadRemote(_global.OssConfig.jigswawUrl + "pintu_" + e + ".jpg", {
      ext: _global.headImgExt
    }, function (e, o) {
      !e && t.node && t.node.isValid && t.initUnlockWithImg(o);
    }) : 2 === this.themeType && (o = "fes_" + e, _res["default"].ins.getBundleByString("jigsaw").then(function (e) {
      e.load(o, cc.Texture2D, function (e, o) {
        !e && t.node && t.node.isValid && t.initUnlockWithImg(o);
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('jigsaw')", t);
    }));
  };

  e.prototype.initUnlockWithImg = function (t) {
    this.jig_2d = t;
    this.finImg.spriteFrame = new cc.SpriteFrame(t);
    this.lockNode.active = !1;
    this.menuNode.active = !0;
    this.lockImg.node.active = !1;
    this.isAllRight = this.IsJigsawCompleted(this.theme_id);
    this.isAllRight ? this.initComplete() : this.initUnComplete();
  };

  e.prototype.initComplete = function () {
    var t;
    this.lockImg.node.active = !1;
    this.finImg.node.active = !0;
    this.scrollView.node.parent.active = !1;
    this.menuNode.active = !1;
    this.lockNode.active = !1;
    this.btnReset.active = !0;
    this.bgNode.y = 326;
    this.bgNode.height = 790;
    1 === this.themeType ? t = _jigsawMgr["default"].ins : 2 === this.themeType && (t = _newJigMgr["default"].ins);
    t.checkSetFin(this.theme_id);
  };

  e.prototype.initUnComplete = function () {
    this.is_init || (this.lockImg.node.active = !1, this.scrollView.node.parent.active = !0, this.menuNode.active = !0, this.lockNode.active = !1, this.initTilePos(), this.initAroundTiles(), this.InitTiles(), this.RefreshIdleItems(!0), this.isShowBging(), this.is_init = !0, this.bgNode.y = 396, this.bgNode.height = 960);
    var t = this.showBgEndTime - _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
    this.lockNode.active = !(t < 0);
  };

  e.prototype.isShowBging = function () {
    (this.showBgEndTime - _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3)) < 0 ? (this.finImg.node.active = !1, this.lockNode.active = !1, this.bgBtn.enabled = !0, this.timeLb.string = this.defaultShowTime + "s", this.timeLb.node.active = !1, this.timeAd.active = !0, this.unschedule(this.beginShow)) : (this.bgBtn.enabled = !1, this.finImg.node.active = !0, this.lockNode.active = !0, this.timeAd.active = !1, this.timeLb.node.active = !0, this.schedule(this.beginShow, 1), this.beginShow());
  };

  e.prototype.lockedToUnlock = function () {
    this.isUnlock || (this.isUnlock = !0, this.lockNode.active = !1, this.initUnLock());
  };

  e.prototype.InitTiles = function () {
    for (var t = 0, e = this.jigTiles; t < e.length; t++) {
      var o = e[t];
      var n = o[0];
      var i = o[1];
      -1 != i && this.cTile(n, i, !1);
    }
  };

  e.prototype.addAroundTiles = function (t, e, o, n) {
    var i = new cc.Node();
    i.addComponent(cc.Sprite).spriteFrame = this.shadow0;
    i.position = cc.v3(t + -4, e + -9);
    i.zIndex = -1;
    i.parent = this.tile_a;
    var r = this.cTileSprite(o, n);
    r.position = cc.v3(t, e);
    r.scale = 1.02;
    r.zIndex = 1;
    r.parent = this.tile_a;
  };

  e.prototype.initAroundTiles = function () {
    for (var t = 0; t < 11; t++) {
      var e = this.getTilePos(t);
      this.addAroundTiles(e.x + 49.5, -e.y - 44.5 + 69, e.x, e.y - 69);
    }

    for (var o = [99, 89, 100, 91, 101, 93, 102, 95, 103, 97, 104], n = 0; n < 11; n++) {
      t = o[n], e = this.getTilePos(t), this.addAroundTiles(e.x + 49.5, -e.y - 44.5 - 69, e.x, e.y + 69);
    }

    var i = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 99];

    for (n = 0; n < 11; n++) {
      t = i[n], e = this.getTilePos(t), 10 == n ? this.addAroundTiles(e.x + 49.5 - P, -e.y - 44.5 - 34.5, e.x - P, e.y + 34.5) : this.addAroundTiles(e.x + 49.5 - P, -e.y - 44.5 + 34.5, e.x - P, e.y - 34.5);
    }

    var r = [10, 21, 32, 43, 54, 65, 76, 87, 98, 104, 104];

    for (n = 0; n < 11; n++) {
      t = r[n], e = this.getTilePos(t), 10 == n ? this.addAroundTiles(e.x + 49.5 + P, -e.y - 44.5 - 34.5, e.x + P, e.y + 34.5) : this.addAroundTiles(e.x + 49.5 + P, -e.y - 44.5 + 34.5, e.x + P, e.y - 34.5);
    }
  };

  e.prototype.cIdleTile = function (t) {
    var e = new cc.Node(t.toString());
    e.scale = 1.01;
    e.setContentSize(cc.size(79, 69));
    this.addTileShadow(e);
    var o = this.getTilePos(t);
    this.cTileSprite(o.x, o.y).parent = e;
    return e;
  };

  e.prototype.RefreshIdleItems = function (t, e) {
    if (void 0 === e && (e = !1), !this.isAllRight && this.jig_2d) {
      for (var o = this.jigTiles, n = {}, i = 0, r = this.tiles_idle; i < r.length; i++) {
        n[(g = r[i]).name] = g;
      }

      this.tiles_idle = [];

      for (var a = 0, s = 0, c = o; s < c.length; s++) {
        var l = c[s];
        var u = l[0];

        if (-1 == l[1]) {
          var p = n[f = u.toString()];
          var d = null;
          p ? (d = p, n[f] = void 0) : (d = this.cIdleTile(u), t || (d.opacity = 0, cc.tween(d).to(0.5, {
            opacity: 255
          }).start()), d.parent = this.scrollView.content);
          d.setPosition(50 + 100 * a++, 0);
          this.tiles_idle.push(d);
        }
      }

      var h = Math.max(100 * this.tiles_idle.length, this.scrollView.node.getContentSize().width + 1);

      for (var f in this.scrollView.content.setContentSize(cc.size(h, 110)), n) {
        var g;
        (g = n[f]) && g.destroy();
      }

      this.chgVisItems();
    }
  };

  e.prototype.chgVisItems = function () {
    var t = this.scrollView.content;
    var e = t.children;
    if (0 != e.length) for (var o = t.parent.getContentSize(), n = -o.width / 2 - 50, i = o.width / 2 + 50, r = t.x, a = 0, s = e; a < s.length; a++) {
      var c = s[a];
      var l = c.x + r;
      var u = l >= n && l <= i;
      c.active = u;
    }
  };

  e.prototype.ttIdleTile = function (t) {
    if (this.tiles_idle.length <= 0) return null;

    var e = _main["default"].ins.getWorldPointByTouch(t);

    var o = this.scrollView.content.convertToNodeSpaceAR(e);
    if (o.y < -45 || o.y > 45) return null;

    for (var n = 0, i = this.tiles_idle; n < i.length; n++) {
      var r = i[n];
      var a = r.position;
      if (o.x > a.x - 45 && o.x < a.x + 45) return r;
    }

    return null;
  };

  e.prototype.tileFlyView = function (t, e) {
    var o = this.cDragTile(e);
    o.position = t;
    o.parent = this.node;
    var n = this.scrollView.node.parent.position;
    cc.tween(o).to(0.5, {
      position: n
    }).to(0.15, {
      opacity: 0
    }).start();
  };

  e.prototype.cDragTile = function (t) {
    _vb["default"].p(_vb.VEnum3.SHORT);

    var e = new cc.Node(t.toString());
    e.scale = 1.01;
    e.setContentSize(cc.size(79, 69));
    this.addTileShadow(e);
    var o = this.getTilePos(t);
    this.cTileSprite(o.x, o.y).parent = e;
    return e;
  };

  e.prototype.setTileVis = function (t, e) {
    t.di.active = e;
    t.img.active = e;
  };

  e.prototype.cTile = function (t, e, o) {
    if (void 0 === o && (o = !0), !this.getTileByPos(e)) {
      var n = this.tile_p[e];
      var i = new cc.Node();
      i.addComponent(cc.Sprite).spriteFrame = this.shadow0;
      i.position = cc.v3(n.x, n.y - 7);
      i.parent = this.tile_a;
      var r = this.getTilePos(t);
      var a = this.cTileSprite(r.x, r.y);
      a.position = cc.v3(n.x, n.y);
      a.scale = 1.02;
      a.zIndex = 1;
      a.parent = this.tile_a;
      this.tiles[e] = {
        di: i,
        img: a,
        tile_id: t
      };
      o && e == t && (this.playTrueAni(n), _vb["default"].p(_vb.VEnum3.SHORT));
      this.reGuide();
    }
  };

  e.prototype.delTile = function (t) {
    var e = this.tiles[t];
    e && (e.di.destroy(), e.img.destroy(), this.tiles[t] = null);
  };

  e.prototype.moveTile = function (t, e, o) {
    var n = this.tiles[t];

    if (n && n.tile_id == o) {
      var i = this.tile_p[e];
      n.di.position = cc.v3(i.x, i.y - 7);
      n.img.position = cc.v3(i.x, i.y);
      this.tiles[e] = n;
      this.tiles[t] = null;
      e == o && (this.playTrueAni(i), _vb["default"].p(_vb.VEnum3.SHORT));
    }
  };

  e.prototype.getTileByPos = function (t) {
    return this.tiles[t];
  };

  e.prototype.cTileSprite = function (t, e) {
    var o = this.jig_2d.width;
    var n = this.jig_2d.height;
    var i = t + 10;
    var r = e + 10;
    var a = cc.instantiate(this.tilePre);
    a.getComponent(cc.Sprite).getMaterial(0).setProperty("texture2", this.jig_2d);
    var s = i / o * 255;
    var c = r / n * 255;
    var l = cc.color();
    l.r = s > 0 ? s : 0;
    l.g = c > 0 ? c : 0;
    var u = 0;
    s > 0 && c <= -21 ? u = 51 : s > 0 && c <= -8 ? u = 102 : s <= -18 && c <= -8 ? u = 153 : s <= -18 && c > 0 && (u = 204);
    l.b = u + 5;
    a.color = l;
    return a;
  };

  e.prototype.getTilePos = function (t) {
    var e = Math.floor(t / 11);
    var o = t % 11;
    t > 99 && (o += t - 99);
    var n = P * o;
    var i = 69 * e;
    o % 2 == 1 && (i += 34.5);
    return cc.v2(n, i);
  };

  e.prototype.initTilePos = function () {
    if (!(this.tile_p.length > 0)) for (var t = 0; t < 105; t++) {
      var e = this.getTilePos(t);
      var o = e.x + 49.5;
      var n = -e.y - 44.5;
      var i = new cc.Node();
      i.color = cc.color(52, 156, 193);
      var r = i.addComponent(cc.Label);
      r.string = t + "";
      r.font = _loading.DEFAULTFONT;
      i.parent = this.tileLbNode;
      i.position = cc.v3(o, n + 3);
      var a = new cc.Node();
      a.addComponent(cc.Sprite).spriteFrame = this.cellSpr;
      a.scale = 0.93;
      a.parent = this.cellNode;
      a.position = cc.v3(o, n, 0);
      this.tile_p.push(cc.v2(o, n));
    }
  };

  e.prototype.tTilePosID = function (t) {
    var e = _main["default"].ins.getWorldPointByTouch(t);

    var o = this.tilesNode.convertToNodeSpaceAR(e);
    if (o.x <= 0 || o.x >= 694 || o.y >= 0 || o.y <= -711) return -1;

    for (var n = 0; n < this.tile_p.length; n++) {
      if (cc.Vec2.distance(o, this.tile_p[n]) <= 34.5) return n;
    }

    return -1;
  };

  e.prototype.onTBe = function (t) {
    if (this.isAllRight || this.is_hinting) return !0;
    this.tileSelect = null;
    this.tilePosId = -1;
    this.idle_tile_select = null;
    this.drag_tile = null;
    this.scroll_dir = 0;
    var e = this.tTilePosID(t.touch);

    if (-1 != e) {
      var o = this.getTileByPos(e);
      if (o && o.tile_id != e) return this.tileSelect = o, this.tilePosId = e, !1;
    }

    if (this.tiles_idle.length > 0) {
      var n = _main["default"].ins.getWorldPointByTouch(t.touch);

      var i = this.scrollView.node.parent.convertToNodeSpaceAR(n);
      if (this.scrollView.node.getBoundingBox().contains(i)) return this.scrollView._onTouchBegan(t), this.idle_tile_select = this.ttIdleTile(t.touch), this.idle_tile_select && (this.idle_tile_select.scale = 1.01 * 1.1), !1;
    }

    return !0;
  };

  e.prototype.onTM = function (t) {
    if (this.isAllRight || this.is_hinting) return !0;

    if (0 == this.scroll_dir) {
      var e = t.touch;
      var o = e.getStartLocationInView();
      var n = e.getLocationInView();

      if (cc.Vec2.distance(o, n) > 5) {
        var i = n.sub(o);
        var r = 57.2957 * Math.atan2(i.y, i.x);
        r > 30 && r < 150 ? this.scroll_dir = 2 : r < -30 && r > -150 ? this.scroll_dir = 2 : r >= -30 && r <= 30 ? this.scroll_dir = 1 : (r <= -150 || r >= 150) && (this.scroll_dir = 1);
        this.tileSelect ? this.drag_tile || 0 == this.scroll_dir || (this.drag_tile = this.cDragTile(this.tileSelect.tile_id), this.drag_tile.scale = 0.88, this.drag_tile.parent = this.node, this.setTileVis(this.tileSelect, !1)) : 1 == this.scroll_dir ? this.idle_tile_select && (this.idle_tile_select.scale = 1.01) : 2 == this.scroll_dir && this.idle_tile_select && !this.drag_tile && (this.drag_tile = this.cDragTile(Number(this.idle_tile_select.name)), this.drag_tile.parent = this.node, this.idle_tile_select.active = !1);
      }
    }

    var a = _main["default"].ins.getWorldPointByTouch(t.touch);

    var s = this.scrollView.node.parent.convertToNodeSpaceAR(a);
    var c = this.scrollView.node.getBoundingBox().contains(s);

    if (this.tileSelect || 1 != this.scroll_dir || !c || this.scrollView._onTouchMoved(t), this.drag_tile) {
      var l = _main["default"].ins.getWorldPointByTouch(t.touch);

      var u = this.node.convertToNodeSpaceAR(l);
      this.drag_tile.position = cc.v3(u.x, u.y + 195);
      var p = this.node.convertToWorldSpaceAR(this.drag_tile.position);
      var d = (o = this.tilesNode.convertToNodeSpaceAR(p), 0);
      var h = -1;
      var f = cc.v3();

      if (o.x > 0 && o.x < 694 && o.y < 0 && o.y > -711) {
        for (var g = this.tile_p.length - 1; g >= 0; g--) {
          if (f.x = this.tile_p[g].x, f.y = this.tile_p[g].y, -1 == h) h = g, d = cc.Vec2.distance(o, f);else {
            var y = cc.Vec2.distance(o, f);
            y < d && (d = y, h = g);
          }
        }

        -1 != h && d > 50 && (h = -1);
      }

      this.dragPutPosId = h;
      -1 == h ? this.dragTag.active = !1 : (this.dragTag.active = !0, this.dragTag.position = cc.v3(this.tile_p[h].x, this.tile_p[h].y));
    }
  };

  e.prototype.onTE = function (t) {
    if (this.isAllRight || this.is_hinting) return !0;
    this.tileSelect || 1 != this.scroll_dir || this.scrollView._onTouchEnded(t);
    this.putDragTile();
    this.idle_tile_select && (this.idle_tile_select.scale = 1.01, this.idle_tile_select = null);
  };

  e.prototype.onTC = function (t) {
    if (this.isAllRight || this.is_hinting) return !0;
    this.tileSelect || 1 != this.scroll_dir || this.scrollView._onTouchCancelled(t);
    this.putDragTile();
    this.idle_tile_select && (this.idle_tile_select.scale = 1.01, this.idle_tile_select = null);
  };

  e.prototype.putDragTile = function () {
    if (this.drag_tile) {
      var t = Number(this.drag_tile.name);
      this.dragTag.active = !1;
      var e = this.drag_tile;

      if (cc.tween(this.drag_tile).to(0.15, {
        opacity: 0
      }).call(function () {
        e.destroy();
      }).start(), this.drag_tile = null, this.is_hinting = !1, this.idle_tile_select) {
        if (this.idle_tile_select.scale = 1.01, this.idle_tile_select.active = !0, this.idle_tile_select.opacity = 0, cc.tween(this.idle_tile_select).to(0.3, {
          opacity: 255
        }).start(), this.idle_tile_select = null, -1 == this.dragPutPosId) return;
        var o = this.getTileByPos(this.dragPutPosId);
        return o ? void (o.tile_id == this.dragPutPosId || (this.modJigTile(this.theme_id, o.tile_id, -1, !1), this.delTile(this.dragPutPosId), this.modJigTile(this.theme_id, t, this.dragPutPosId), this.cTile(t, this.dragPutPosId), this.RefreshIdleItems(!1, !0))) : (this.modJigTile(this.theme_id, t, this.dragPutPosId), this.cTile(t, this.dragPutPosId), this.RefreshIdleItems(!1), void (t == this.dragPutPosId && this.checkAllR()));
      }

      if (this.tileSelect && (this.setTileVis(this.tileSelect, !0), this.tileSelect = null, this.tilePosId != this.dragPutPosId)) {
        var n = this.getTileByPos(this.dragPutPosId);
        if (-1 == this.dragPutPosId || n && n.tile_id == this.dragPutPosId) return this.modJigTile(this.theme_id, t, -1), this.delTile(this.tilePosId), void this.RefreshIdleItems(!1);

        if (n && n.tile_id != this.dragPutPosId) {
          var i = n.tile_id;
          this.modJigTile(this.theme_id, n.tile_id, -1, !1);
          this.delTile(this.dragPutPosId);
          this.modJigTile(this.theme_id, t, this.dragPutPosId, !1);
          this.moveTile(this.tilePosId, this.dragPutPosId, t);
          this.modJigTile(this.theme_id, i, this.tilePosId);
          this.cTile(i, this.tilePosId);
          return void this.checkAllR();
        }

        -1 != this.tilePosId && this.tilePosId != this.dragPutPosId && (this.modJigTile(this.theme_id, t, this.dragPutPosId), this.moveTile(this.tilePosId, this.dragPutPosId, t), t == this.dragPutPosId && this.checkAllR());
      }
    }
  };

  e.prototype.OnBtnHint = function () {
    if (!(this.is_hinting || this.isAllRight || this.tileSelect || this.idle_tile_select)) {
      var t = this.tiles_idle.length > 0;
      if (!t) for (var e in this.tiles) {
        var o = this.tiles[e];

        if (o && Number(e) != o.tile_id) {
          t = !0;
          break;
        }
      }
      t ? _bagMgr["default"].ins.getItemCount("puzzle_notice") > 0 ? (_bagMgr["default"].ins.useItem("puzzle_notice"), this._doHint()) : _panelMgr["default"].ins.open("ui/ui_getItem", {
        itemId: "puzzle_notice"
      }) : this.onBtnGet();
    }
  };

  e.prototype._doHint = function () {
    var t = this;

    for (var e in this.is_hinting = !1, this.tiles) {
      if (l = this.tiles[e]) {
        var o = Number(e);

        if (o != l.tile_id) {
          this.tilePosId = o;
          this.tileSelect = l;
          this.dragPutPosId = l.tile_id;
          break;
        }
      }
    }

    if (this.tileSelect) {
      this.drag_tile = this.cDragTile(this.tileSelect.tile_id);
      this.drag_tile.parent = this.node;
      this.setTileVis(this.tileSelect, !1);
      var n = this.tilesNode.convertToWorldSpaceAR(this.tile_p[this.tilePosId]);
      var i = this.node.convertToNodeSpaceAR(n);
      var r = this.tilesNode.convertToWorldSpaceAR(this.tile_p[this.dragPutPosId]);
      var a = this.node.convertToNodeSpaceAR(r);
      this.drag_tile.position = cc.v3(i.x, i.y);
      cc.tween(this.drag_tile).to(0.5, {
        x: a.x,
        y: a.y
      }).call(function () {
        t.putDragTile();
      }).start();
      return void (this.is_hinting = !0);
    }

    for (var s = 0, c = this.tiles_idle; s < c.length; s++) {
      var l = c[s];
      this.idle_tile_select = l;
      var u = Number(l.name);
      this.dragPutPosId = u;
      this.drag_tile = this.cDragTile(u);
      this.drag_tile.parent = this.node;
      i = this.node.convertToNodeSpaceAR(l.convertToWorldSpaceAR(cc.Vec2.ZERO));
      l.active || (i.x = this.scrollView.node.parent.x, i.y = this.scrollView.node.parent.y);
      a = this.node.convertToNodeSpaceAR(this.tilesNode.convertToWorldSpaceAR(this.tile_p[this.dragPutPosId]));
      this.drag_tile.setPosition(i.x, i.y);
      cc.tween(this.drag_tile).to(0.5, {
        x: a.x,
        y: a.y
      }).call(function () {
        t.putDragTile();
      }).start();
      this.is_hinting = !0;
      l.active = !1;
      break;
    }
  };

  e.prototype.getCanHint = function () {
    for (var t in this.tiles) {
      var e = this.tiles[t];
      if (e && Number(t) != e.tile_id) break;
    }
  };

  e.prototype.addTileShadow = function (t) {
    var e = new cc.Node();
    e.addComponent(cc.Sprite).spriteFrame = this.shadow0;
    e.position = cc.v3(0, -5);
    e.parent = t;
  };

  e.prototype.playTrueAni = function (t) {
    _festivalMgr["default"].ins.updPro(_festivalMgr.fesTaskKey.finishPuzzle, 1);

    _sound["default"].ins.play(_sound["default"].FINISH_PUZZLE);

    1 === this.themeType ? _idx.platform.reportEvent(_idx.ERepEvt.partJigsaw) : 2 === this.themeType && _idx.platform.reportEvent(_idx.ERepEvt.fesJigNum);
    var e = this.ringNode;
    var o = this.tilesNode.convertToWorldSpaceAR(t);
    var n = this.node.convertToNodeSpaceAR(o);
    e.active = !0;
    e.setPosition(n);
    e.parent = this.node;
    cc.tween(e).set({
      scale: 0.88,
      opacity: 255
    }).to(0.2, {
      scale: 1.2,
      opacity: 0
    }).call(function () {
      e.active = !1;
    }).start();
  };

  e.prototype.checkAllR = function () {
    if (!this.isAllRight && (this.isAllRight = this.IsJigsawCompleted(this.theme_id), this.isAllRight)) {
      this.tilesNode.active = !1;
      this.finImg.node.active = !0;
      this.finImg.node.opacity = 0;
      cc.tween(this.finImg.node).to(1, {
        opacity: 255
      }).start();
      this.scrollView.node.active = !1;
      this.menuNode.active = !1;
      this.lockNode.active = !1;
      this.btnReset.active = !0;
      this.bgNode.y = 326;
      this.bgNode.height = 790;
      var t = this.theme_id + "";

      _idx.platform.reportEvent(_idx.ERepEvt.finishHoleJigsaw, {
        idx: t
      });

      var e = void 0;
      1 === this.themeType ? e = _jigsawMgr["default"].ins : 2 === this.themeType && (e = _newJigMgr["default"].ins);
      e.setFinfishJigsaw(this.theme_id);

      _panelMgr["default"].ins.open("ui/ui_jigFinish", {
        themeId: this.theme_id,
        themeType: this.themeType
      });
    }
  };

  e.prototype.IsJigsawCompleted = function (t) {
    var e;
    1 === this.themeType ? e = _jigsawMgr["default"].ins : 2 === this.themeType && (e = _newJigMgr["default"].ins);
    var o = e.checkHasFin(t);
    if (o) return o;
    var n = e.getJigsawTilesByIdx(t);

    if (105 == n.length) {
      for (var i = 0, r = n; i < r.length; i++) {
        var a = r[i];
        if (a[0] != a[1]) return !1;
      }

      return !0;
    }

    return !1;
  };

  e.prototype.ShowGuide = function () {};

  e.prototype.reGuide = function () {
    this.guideF && (this.guideF.destroy(), this.guideF = null);
  };

  e.prototype.onBtnBg = function () {
    if (_bagMgr["default"].ins.getItemCount("puzzle_background") > 0) {
      _bagMgr["default"].ins.useItem("puzzle_background");

      var t = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
      this.showBgEndTime = this.defaultShowTime + t;
      1 === this.themeType ? _pInfo["default"].ins.setJigsawBgEndTimesByIdx(this.theme_id, this.showBgEndTime) : 2 === this.themeType && _pInfo["default"].ins.setNewJigBgEndTimesByIdx(this.theme_id, this.showBgEndTime);
      this.bgBtn.enabled = !1;
      this.finImg.node.active = !0;
      this.lockNode.active = !0;
      this.timeAd.active = !1;
      this.timeLb.node.active = !0;
      this.schedule(this.beginShow, 1);
    } else _panelMgr["default"].ins.open("ui/ui_getItem", {
      itemId: "puzzle_background"
    });
  };

  e.prototype.beginShow = function () {
    var t = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
    var e = this.showBgEndTime - t;
    if (e < 0) return this.finImg.node.active = !1, this.lockNode.active = !1, e = 30, this.bgBtn.enabled = !0, this.timeLb.string = this.defaultShowTime + "s", this.timeLb.node.active = !1, this.timeAd.active = !0, void this.unschedule(this.beginShow);
    this.timeLb.string = e + "s";
  };

  e.prototype.onBtnGet = function () {
    1 === this.themeType ? _panelMgr["default"].ins.open("ui/ui_getItem", {
      itemId: "puzzle_pieces"
    }) : 2 === this.themeType && _panelMgr["default"].ins.open("ui/ui_getItem", {
      itemId: "newYear_pieces"
    });
  };

  e.prototype.onBtnLb = function () {
    this.tileLbNode.active = !this.tileLbNode.active;
  };

  e.prototype.onBtnReset = function () {
    _panelMgr["default"].ins.open("ui/ui_jigTip", {
      okCb: this.resetItem.bind(this)
    });
  };

  e.prototype.resetItem = function () {
    var t;
    1 === this.themeType ? t = _jigsawMgr["default"].ins : 2 === this.themeType && (t = _newJigMgr["default"].ins);
    t.resetJigByIdx(this.theme_id);
    this.is_init || (this.initTilePos(), this.initAroundTiles(), this.is_init = !0);
    this.clearTiles();
    this.isAllRight = !1;
    this.tilesNode.active = !0;
    this.jigTiles = t.getJigsawTilesByIdx(this.theme_id);
    this.scrollView.content.removeAllChildren();
    this.tiles_idle.length = 0;
    this.RefreshIdleItems(!0);
    this.lockImg.node.active = !1;
    this.scrollView.node.active = !0;
    this.scrollView.node.parent.active = !0;
    this.menuNode.active = !0;
    this.lockNode.active = !1;
    this.btnReset.active = !1;
    this.finImg.node.active = !1;
    this.bgNode.y = 396;
    this.bgNode.height = 960;
    this.upItemNum();
  };

  e.prototype.clearTiles = function () {
    for (var t in this.tiles) {
      this.delTile(t);
    }
  };

  e.prototype.modJigTile = function (t, e, o, n) {
    if (void 0 === n && (n = !0), void 0 === n && (n = !0), !(e < 0 || e >= 105 || o < -1 || o >= 105)) {
      for (var i = this.jigTiles, r = 0, s = i; r < s.length; r++) {
        if ((u = s[r])[1] == o && -1 != o) {
          o = -1;
          break;
        }
      }

      for (var c = 0, l = i; c < l.length; c++) {
        var u;

        if ((u = l[c])[0] == e) {
          u[1] = o;
          break;
        }
      }

      if (n) {
        _evts["default"].opE.emit({
          action: _evts["default"].UPD_MAIN_RED
        });

        var p = void 0;
        1 === this.themeType ? p = _jigsawMgr["default"].ins : 2 === this.themeType && (p = _newJigMgr["default"].ins);
        p.setJigsawTilesByIdx(this.theme_id, this.jigTiles);
      }
    }
  };

  e.prototype.onDestroy = function () {
    _evts["default"].opE.off(this.eventFunc);

    this.eventFunc = null;
  };

  __decorate([D(cc.Node)], e.prototype, "ringNode", void 0);

  __decorate([D(cc.Prefab)], e.prototype, "tilePre", void 0);

  __decorate([D(cc.SpriteFrame)], e.prototype, "shadow0", void 0);

  __decorate([D(cc.Node)], e.prototype, "tilesNode", void 0);

  __decorate([D(cc.Node)], e.prototype, "menuNode", void 0);

  __decorate([D(cc.ScrollView)], e.prototype, "scrollView", void 0);

  __decorate([D(cc.Sprite)], e.prototype, "finImg", void 0);

  __decorate([D(cc.Node)], e.prototype, "dragTag", void 0);

  __decorate([D(cc.Node)], e.prototype, "lockNode", void 0);

  __decorate([D(cc.Label)], e.prototype, "timeLb", void 0);

  __decorate([D(cc.Button)], e.prototype, "bgBtn", void 0);

  __decorate([D(cc.Label)], e.prototype, "getLb", void 0);

  __decorate([D(cc.Node)], e.prototype, "timeAd", void 0);

  __decorate([D(cc.Sprite)], e.prototype, "lockImg", void 0);

  __decorate([D(cc.Node)], e.prototype, "tileLbNode", void 0);

  __decorate([D(cc.Node)], e.prototype, "cellNode", void 0);

  __decorate([D(cc.SpriteFrame)], e.prototype, "cellSpr", void 0);

  __decorate([D(cc.Label)], e.prototype, "hintNum", void 0);

  __decorate([D(cc.Label)], e.prototype, "bgNum", void 0);

  __decorate([D(cc.Node)], e.prototype, "bgNode", void 0);

  __decorate([D(cc.Label)], e.prototype, "tipLb", void 0);

  __decorate([D(cc.Node)], e.prototype, "bgBtnNode", void 0);

  __decorate([D(cc.Sprite)], e.prototype, "getPieceSp", void 0);

  __decorate([D(cc.Node)], e.prototype, "btnReset", void 0);

  return __decorate([I], e);
}(cc.Component);

exports["default"] = k;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcamlnc2F3LmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9ldnRzIiwicmVxdWlyZSIsIl9pZHgiLCJfcmVzIiwiX3NvdW5kIiwiX3RpbWUiLCJfdmIiLCJfY2ZnTWdyIiwiX2xhbmciLCJfZ2xvYmFsIiwiX2JhZ01nciIsIl9mZXN0aXZhbE1nciIsIl9qaWdzYXdNZ3IiLCJfbmV3SmlnTWdyIiwiX3BhbmVsTWdyIiwiX3BJbmZvIiwiX2xvYWRpbmciLCJfbWFpbiIsIlQiLCJjYyIsIl9kZWNvcmF0b3IiLCJJIiwiY2NjbGFzcyIsIkQiLCJwcm9wZXJ0eSIsIlAiLCJNYXRoIiwidGFuIiwiUEkiLCJrIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInJpbmdOb2RlIiwidGlsZVByZSIsInNoYWRvdzAiLCJ0aWxlc05vZGUiLCJtZW51Tm9kZSIsInNjcm9sbFZpZXciLCJmaW5JbWciLCJkcmFnVGFnIiwibG9ja05vZGUiLCJ0aW1lTGIiLCJiZ0J0biIsImdldExiIiwidGltZUFkIiwibG9ja0ltZyIsInRpbGVMYk5vZGUiLCJjZWxsTm9kZSIsImNlbGxTcHIiLCJoaW50TnVtIiwiYmdOdW0iLCJiZ05vZGUiLCJ0aXBMYiIsImJnQnRuTm9kZSIsImdldFBpZWNlU3AiLCJidG5SZXNldCIsImppZ18yZCIsInRpbGVfYSIsInRpbGVfcCIsInRpbGVzIiwidGlsZXNfaWRsZSIsImlzQWxsUmlnaHQiLCJpc19oaW50aW5nIiwiaWRsZV90aWxlX3NlbGVjdCIsInRpbGVTZWxlY3QiLCJ0aWxlUG9zSWQiLCJzY3JvbGxfZGlyIiwiZHJhZ190aWxlIiwiZHJhZ1B1dFBvc0lkIiwiZ3VpZGVGIiwiaXNVbmxvY2siLCJ0aGVtZV9pZCIsImlzX2luaXQiLCJqaWdUaWxlcyIsImRlZmF1bHRTaG93VGltZSIsInNob3dCZ0VuZFRpbWUiLCJhZE1heFRpbWUiLCJhZE1heFRpbWUyIiwidGhlbWVUeXBlIiwiZXZlbnRGdW5jIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwibyIsInNlcnZlckNmZyIsImxvY2tfcnVsZXMiLCJtYWluX2xpbmVfbG9jayIsInB1enpsZV9saW5lX3ZhbCIsInN0cmluZyIsImxhbmciLCJmb3JtYXQiLCJpIiwiciIsInByb3BzIiwic2V0IiwibGVuZ3RoIiwicyIsImtleSIsImxpbWl0X3RpbWUiLCJub2RlIiwiYWN0aXZlIiwiZGFpbHlfbGltaXRfdGltZXMiLCJOdW1iZXIiLCJvbk9wZXJUYXAiLCJiaW5kIiwib3BFIiwib24iLCJfcmVnaXN0ZXJFdmVudCIsIl91bnJlZ2lzdGVyRXZlbnQiLCJjaGdWaXNJdGVtcyIsImFjdGlvbiIsIlVQREpJR1NBV0dBTUUiLCJ1cGRhdGVWaWV3IiwiVVBEX1BBTkVMIiwiVVBEX01BSU5fUkVEIiwidXBJdGVtTnVtIiwic3RhcnQiLCJ6SW5kZXgiLCJvbkVuYWJsZSIsIm9uRGlzYWJsZSIsImluaXRHZXRUaW1lIiwiaW5pdEdldFRpbWUyIiwiaW5zIiwiZ2V0SXRlbUNvdW50IiwiZ2V0Smlnc2F3VGlsZXNCeUlkeCIsImNvbnRlbnQiLCJyZW1vdmVBbGxDaGlsZHJlbiIsIlJlZnJlc2hJZGxlSXRlbXMiLCJpc0l0ZW1VbmxvY2siLCJpbml0VW5Mb2NrIiwiaW5pdExvY2tlZCIsImdldElzVW5sb2NrIiwiaW5pdEl0ZW0iLCJhIiwiZ2V0Smlnc2F3QmdFbmRUaW1lc0J5SWR4IiwiZ2V0TmV3SmlnQmdFbmRUaW1lc0J5SWR4IiwiaXNQaWVjZUVub3VnaCIsImdldEJ1bmRsZUJ5U3RyaW5nIiwidGhlbiIsImxvYWQiLCJTcHJpdGVGcmFtZSIsImlzVmFsaWQiLCJzcHJpdGVGcmFtZSIsImNvbnNvbGUiLCJlcnJvciIsImFzc2V0TWFuYWdlciIsImxvYWRSZW1vdGUiLCJPc3NDb25maWciLCJqaWdzd2F3VXJsIiwiZXh0IiwiaGVhZEltZ0V4dCIsImdldEppZ3Nhd0FkVGltZXMiLCJnZXROZXdKaWdBZFRpbWVzIiwieSIsImhlaWdodCIsIlRleHR1cmUyRCIsImluaXRVbmxvY2tXaXRoSW1nIiwiSXNKaWdzYXdDb21wbGV0ZWQiLCJpbml0Q29tcGxldGUiLCJpbml0VW5Db21wbGV0ZSIsInBhcmVudCIsImNoZWNrU2V0RmluIiwiaW5pdFRpbGVQb3MiLCJpbml0QXJvdW5kVGlsZXMiLCJJbml0VGlsZXMiLCJpc1Nob3dCZ2luZyIsInNlcnZlclRpbWUiLCJmbG9vciIsIkRhdGUiLCJnZXRUaW1lIiwiZW5hYmxlZCIsInVuc2NoZWR1bGUiLCJiZWdpblNob3ciLCJzY2hlZHVsZSIsImxvY2tlZFRvVW5sb2NrIiwiY1RpbGUiLCJhZGRBcm91bmRUaWxlcyIsIk5vZGUiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJwb3NpdGlvbiIsInYzIiwiY1RpbGVTcHJpdGUiLCJzY2FsZSIsImdldFRpbGVQb3MiLCJ4IiwiY0lkbGVUaWxlIiwidG9TdHJpbmciLCJzZXRDb250ZW50U2l6ZSIsInNpemUiLCJhZGRUaWxlU2hhZG93IiwiZyIsIm5hbWUiLCJjIiwibCIsInUiLCJwIiwiZiIsImQiLCJvcGFjaXR5IiwidHdlZW4iLCJ0byIsInNldFBvc2l0aW9uIiwicHVzaCIsImgiLCJtYXgiLCJnZXRDb250ZW50U2l6ZSIsIndpZHRoIiwiZGVzdHJveSIsImNoaWxkcmVuIiwidHRJZGxlVGlsZSIsImdldFdvcmxkUG9pbnRCeVRvdWNoIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJ0aWxlRmx5VmlldyIsImNEcmFnVGlsZSIsIlZFbnVtMyIsIlNIT1JUIiwic2V0VGlsZVZpcyIsImRpIiwiaW1nIiwiZ2V0VGlsZUJ5UG9zIiwidGlsZV9pZCIsInBsYXlUcnVlQW5pIiwicmVHdWlkZSIsImRlbFRpbGUiLCJtb3ZlVGlsZSIsImluc3RhbnRpYXRlIiwiZ2V0Q29tcG9uZW50IiwiZ2V0TWF0ZXJpYWwiLCJzZXRQcm9wZXJ0eSIsImNvbG9yIiwiYiIsInYyIiwiTGFiZWwiLCJmb250IiwiREVGQVVMVEZPTlQiLCJ0VGlsZVBvc0lEIiwiVmVjMiIsImRpc3RhbmNlIiwib25UQmUiLCJ0b3VjaCIsImdldEJvdW5kaW5nQm94IiwiY29udGFpbnMiLCJfb25Ub3VjaEJlZ2FuIiwib25UTSIsImdldFN0YXJ0TG9jYXRpb25JblZpZXciLCJnZXRMb2NhdGlvbkluVmlldyIsInN1YiIsImF0YW4yIiwiX29uVG91Y2hNb3ZlZCIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsIm9uVEUiLCJfb25Ub3VjaEVuZGVkIiwicHV0RHJhZ1RpbGUiLCJvblRDIiwiX29uVG91Y2hDYW5jZWxsZWQiLCJjYWxsIiwibW9kSmlnVGlsZSIsImNoZWNrQWxsUiIsIk9uQnRuSGludCIsInVzZUl0ZW0iLCJfZG9IaW50Iiwib3BlbiIsIml0ZW1JZCIsIm9uQnRuR2V0IiwiWkVSTyIsImdldENhbkhpbnQiLCJ1cGRQcm8iLCJmZXNUYXNrS2V5IiwiZmluaXNoUHV6emxlIiwicGxheSIsIkZJTklTSF9QVVpaTEUiLCJwbGF0Zm9ybSIsInJlcG9ydEV2ZW50IiwiRVJlcEV2dCIsInBhcnRKaWdzYXciLCJmZXNKaWdOdW0iLCJmaW5pc2hIb2xlSmlnc2F3IiwiaWR4Iiwic2V0RmluZmlzaEppZ3NhdyIsInRoZW1lSWQiLCJjaGVja0hhc0ZpbiIsIlNob3dHdWlkZSIsIm9uQnRuQmciLCJzZXRKaWdzYXdCZ0VuZFRpbWVzQnlJZHgiLCJzZXROZXdKaWdCZ0VuZFRpbWVzQnlJZHgiLCJvbkJ0bkxiIiwib25CdG5SZXNldCIsIm9rQ2IiLCJyZXNldEl0ZW0iLCJyZXNldEppZ0J5SWR4IiwiY2xlYXJUaWxlcyIsImVtaXQiLCJzZXRKaWdzYXdUaWxlc0J5SWR4Iiwib25EZXN0cm95Iiwib2ZmIiwiX19kZWNvcmF0ZSIsIlByZWZhYiIsIlNjcm9sbFZpZXciLCJCdXR0b24iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVB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LFVBQVUsQ0FBQyxDQUFDclIsQ0FBRCxDQUFELEVBQU1VLENBQU4sQ0FBakI7QUFDSCxDQTM2Qk8sQ0EyNkJMWixFQUFFLENBQUMyUixTQTM2QkUsQ0FBUjs7QUE0NkJBaFQsT0FBTyxXQUFQLEdBQWtCK0IsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBuO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTtcbnZhciBfZXZ0cyA9IHJlcXVpcmUoXCJldnRzXCIpO1xudmFyIF9pZHggPSByZXF1aXJlKFwiaWR4XCIpO1xudmFyIF9yZXMgPSByZXF1aXJlKFwicmVzXCIpO1xudmFyIF9zb3VuZCA9IHJlcXVpcmUoXCJzb3VuZFwiKTtcbnZhciBfdGltZSA9IHJlcXVpcmUoXCJ0aW1lXCIpO1xudmFyIF92YiA9IHJlcXVpcmUoXCJ2YlwiKTtcbnZhciBfY2ZnTWdyID0gcmVxdWlyZShcImNmZ01nclwiKTtcbnZhciBfbGFuZyA9IHJlcXVpcmUoXCJsYW5nXCIpO1xudmFyIF9nbG9iYWwgPSByZXF1aXJlKFwiZ2xvYmFsXCIpO1xudmFyIF9iYWdNZ3IgPSByZXF1aXJlKFwiYmFnTWdyXCIpO1xudmFyIF9mZXN0aXZhbE1nciA9IHJlcXVpcmUoXCJmZXN0aXZhbE1nclwiKTtcbnZhciBfamlnc2F3TWdyID0gcmVxdWlyZShcImppZ3Nhd01nclwiKTtcbnZhciBfbmV3SmlnTWdyID0gcmVxdWlyZShcIm5ld0ppZ01nclwiKTtcbnZhciBfcGFuZWxNZ3IgPSByZXF1aXJlKFwicGFuZWxNZ3JcIik7XG52YXIgX3BJbmZvID0gcmVxdWlyZShcInBJbmZvXCIpO1xudmFyIF9sb2FkaW5nID0gcmVxdWlyZShcImxvYWRpbmdcIik7XG52YXIgX21haW4gPSByZXF1aXJlKFwibWFpblwiKTtcbnZhciBUID0gY2MuX2RlY29yYXRvcjtcbnZhciBJID0gVC5jY2NsYXNzO1xudmFyIEQgPSBULnByb3BlcnR5O1xudmFyIFAgPSA3OSAtIDM0LjUgKiBNYXRoLnRhbigoTWF0aC5QSSAvIDE4MCkgKiAzMCkgKyAwLjQ7XG52YXIgayA9IChmdW5jdGlvbih0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUucmluZ05vZGUgPSBudWxsO1xuICAgICAgICBlLnRpbGVQcmUgPSBudWxsO1xuICAgICAgICBlLnNoYWRvdzAgPSBudWxsO1xuICAgICAgICBlLnRpbGVzTm9kZSA9IG51bGw7XG4gICAgICAgIGUubWVudU5vZGUgPSBudWxsO1xuICAgICAgICBlLnNjcm9sbFZpZXcgPSBudWxsO1xuICAgICAgICBlLmZpbkltZyA9IG51bGw7XG4gICAgICAgIGUuZHJhZ1RhZyA9IG51bGw7XG4gICAgICAgIGUubG9ja05vZGUgPSBudWxsO1xuICAgICAgICBlLnRpbWVMYiA9IG51bGw7XG4gICAgICAgIGUuYmdCdG4gPSBudWxsO1xuICAgICAgICBlLmdldExiID0gbnVsbDtcbiAgICAgICAgZS50aW1lQWQgPSBudWxsO1xuICAgICAgICBlLmxvY2tJbWcgPSBudWxsO1xuICAgICAgICBlLnRpbGVMYk5vZGUgPSBudWxsO1xuICAgICAgICBlLmNlbGxOb2RlID0gbnVsbDtcbiAgICAgICAgZS5jZWxsU3ByID0gbnVsbDtcbiAgICAgICAgZS5oaW50TnVtID0gbnVsbDtcbiAgICAgICAgZS5iZ051bSA9IG51bGw7XG4gICAgICAgIGUuYmdOb2RlID0gbnVsbDtcbiAgICAgICAgZS50aXBMYiA9IG51bGw7XG4gICAgICAgIGUuYmdCdG5Ob2RlID0gbnVsbDtcbiAgICAgICAgZS5nZXRQaWVjZVNwID0gbnVsbDtcbiAgICAgICAgZS5idG5SZXNldCA9IG51bGw7XG4gICAgICAgIGUuamlnXzJkID0gbnVsbDtcbiAgICAgICAgZS50aWxlX2EgPSBudWxsO1xuICAgICAgICBlLnRpbGVfcCA9IFtdO1xuICAgICAgICBlLnRpbGVzID0ge307XG4gICAgICAgIGUudGlsZXNfaWRsZSA9IFtdO1xuICAgICAgICBlLmlzQWxsUmlnaHQgPSAhMTtcbiAgICAgICAgZS5pc19oaW50aW5nID0gITE7XG4gICAgICAgIGUuaWRsZV90aWxlX3NlbGVjdCA9IG51bGw7XG4gICAgICAgIGUudGlsZVNlbGVjdCA9IG51bGw7XG4gICAgICAgIGUudGlsZVBvc0lkID0gLTE7XG4gICAgICAgIGUuc2Nyb2xsX2RpciA9IDA7XG4gICAgICAgIGUuZHJhZ190aWxlID0gbnVsbDtcbiAgICAgICAgZS5kcmFnUHV0UG9zSWQgPSAtMTtcbiAgICAgICAgZS5ndWlkZUYgPSBudWxsO1xuICAgICAgICBlLmlzVW5sb2NrID0gITE7XG4gICAgICAgIGUudGhlbWVfaWQgPSAtMTtcbiAgICAgICAgZS5pc19pbml0ID0gITE7XG4gICAgICAgIGUuamlnVGlsZXMgPSBbXTtcbiAgICAgICAgZS5kZWZhdWx0U2hvd1RpbWUgPSAzMDtcbiAgICAgICAgZS5zaG93QmdFbmRUaW1lID0gMDtcbiAgICAgICAgZS5hZE1heFRpbWUgPSA1O1xuICAgICAgICBlLmFkTWF4VGltZTIgPSA1O1xuICAgICAgICBlLnRoZW1lVHlwZSA9IDE7XG4gICAgICAgIGUuZXZlbnRGdW5jID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHZhciBlO1xuICAgICAgICB2YXIgbyA9IF9jZmdNZ3IuZGVmYXVsdC5zZXJ2ZXJDZmc7XG4gICAgICAgIHZhciBuID1cbiAgICAgICAgICAgIChudWxsID09PVxuICAgICAgICAgICAgICAgIChlID0gbnVsbCA9PT0gKHQgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLmxvY2tfcnVsZXMpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQubWFpbl9saW5lX2xvY2spIHx8XG4gICAgICAgICAgICAgICAgdm9pZCAwID09PSBlID9cbiAgICAgICAgICAgICAgICB2b2lkIDAgOlxuICAgICAgICAgICAgICAgIGUucHV6emxlX2xpbmVfdmFsKSB8fCAwO1xuICAgICAgICB0aGlzLnRpcExiLnN0cmluZyA9IF9sYW5nLmxhbmdbMzAwMDFdLmZvcm1hdChuKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHIgPSBvLnByb3BzLnNldDsgaSA8IHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzID0gcltpXTtcbiAgICAgICAgICAgIFwicHV6emxlX2JhY2tncm91bmRcIiA9PSBzLmtleSA/XG4gICAgICAgICAgICAgICAgcy5saW1pdF90aW1lICYmXG4gICAgICAgICAgICAgICAgKCh0aGlzLmRlZmF1bHRTaG93VGltZSA9IHMubGltaXRfdGltZSksICh0aGlzLnRpbWVMYi5ub2RlLmFjdGl2ZSA9ICExKSwgKHRoaXMudGltZUFkLmFjdGl2ZSA9ICEwKSkgOlxuICAgICAgICAgICAgICAgIFwicHV6emxlX3BpZWNlc1wiID09IHMua2V5ID9cbiAgICAgICAgICAgICAgICBzLmRhaWx5X2xpbWl0X3RpbWVzICYmICh0aGlzLmFkTWF4VGltZSA9IE51bWJlcihzLmRhaWx5X2xpbWl0X3RpbWVzKSB8fCA1KSA6XG4gICAgICAgICAgICAgICAgXCJuZXdZZWFyX3BpZWNlc1wiID09IHMua2V5ICYmXG4gICAgICAgICAgICAgICAgcy5kYWlseV9saW1pdF90aW1lcyAmJlxuICAgICAgICAgICAgICAgICh0aGlzLmFkTWF4VGltZTIgPSBOdW1iZXIocy5kYWlseV9saW1pdF90aW1lcykgfHwgNSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudEZ1bmMgPSB0aGlzLm9uT3BlclRhcC5iaW5kKHRoaXMpO1xuICAgICAgICBfZXZ0cy5kZWZhdWx0Lm9wRS5vbih0aGlzLmV2ZW50RnVuYyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5fcmVnaXN0ZXJFdmVudCA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5fdW5yZWdpc3RlckV2ZW50ID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgdGhpcy50aWxlX2EgPSB0aGlzLnRpbGVzTm9kZTtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3Lm5vZGUub24oXCJzY3JvbGxpbmdcIiwgdGhpcy5jaGdWaXNJdGVtcywgdGhpcyk7XG4gICAgICAgIHRoaXMudGlsZUxiTm9kZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgdGhpcy5idG5SZXNldC5hY3RpdmUgPSAhMTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uT3BlclRhcCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmFjdGlvbjtcbiAgICAgICAgaWYgKGUpXG4gICAgICAgICAgICBzd2l0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIF9ldnRzLmRlZmF1bHQuVVBESklHU0FXR0FNRTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgX2V2dHMuZGVmYXVsdC5VUERfUEFORUw6XG4gICAgICAgICAgICAgICAgY2FzZSBfZXZ0cy5kZWZhdWx0LlVQRF9NQUlOX1JFRDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cEl0ZW1OdW0oKTtcbiAgICAgICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZHJhZ1RhZy56SW5kZXggPSAtMWUzO1xuICAgICAgICB0aGlzLmRyYWdUYWcuYWN0aXZlID0gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkVuYWJsZSA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUub25EaXNhYmxlID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS51cEl0ZW1OdW0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgMSA9PT0gdGhpcy50aGVtZVR5cGUgPyB0aGlzLmluaXRHZXRUaW1lKCkgOiAyID09PSB0aGlzLnRoZW1lVHlwZSAmJiB0aGlzLmluaXRHZXRUaW1lMigpO1xuICAgICAgICB0aGlzLmhpbnROdW0uc3RyaW5nID0gX2JhZ01nci5kZWZhdWx0Lmlucy5nZXRJdGVtQ291bnQoXCJwdXp6bGVfbm90aWNlXCIpICsgXCJcIjtcbiAgICAgICAgdGhpcy5iZ051bS5zdHJpbmcgPSBfYmFnTWdyLmRlZmF1bHQuaW5zLmdldEl0ZW1Db3VudChcInB1enpsZV9iYWNrZ3JvdW5kXCIpICsgXCJcIjtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZVZpZXcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIDEgPT09IHRoaXMudGhlbWVUeXBlID8gKHQgPSBfamlnc2F3TWdyLmRlZmF1bHQuaW5zKSA6IDIgPT09IHRoaXMudGhlbWVUeXBlICYmICh0ID0gX25ld0ppZ01nci5kZWZhdWx0Lmlucyk7XG4gICAgICAgIHRoaXMuamlnVGlsZXMgPSB0LmdldEppZ3Nhd1RpbGVzQnlJZHgodGhpcy50aGVtZV9pZCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMudGlsZXNfaWRsZSA9IFtdO1xuICAgICAgICB0aGlzLlJlZnJlc2hJZGxlSXRlbXMoITApO1xuICAgICAgICB0aGlzLmlzVW5sb2NrID0gdC5pc0l0ZW1VbmxvY2sodGhpcy50aGVtZV9pZCk7XG4gICAgICAgIHRoaXMuaXNVbmxvY2sgPyB0aGlzLmluaXRVbkxvY2soKSA6IHRoaXMuaW5pdExvY2tlZCgpO1xuICAgICAgICB0aGlzLnVwSXRlbU51bSgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0SXNVbmxvY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNVbmxvY2s7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0SXRlbSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICB0aGlzLnRoZW1lVHlwZSA9IGU7XG4gICAgICAgIHRoaXMudGhlbWVfaWQgPSB0O1xuICAgICAgICB2YXIgbjtcbiAgICAgICAgdmFyIGkgPSB0ICsgMTtcbiAgICAgICAgdmFyIHIgPSBcInB1enpsZV9waWVjZXNcIjtcbiAgICAgICAgdmFyIGEgPSBcInBpbnR1X1wiICsgaSArIFwiXzFcIjtcbiAgICAgICAgMSA9PT0gZSA/XG4gICAgICAgICAgICAoKG4gPSBfamlnc2F3TWdyLmRlZmF1bHQuaW5zKSxcbiAgICAgICAgICAgICAgICAodGhpcy5zaG93QmdFbmRUaW1lID0gX3BJbmZvLmRlZmF1bHQuaW5zLmdldEppZ3Nhd0JnRW5kVGltZXNCeUlkeCh0KSksXG4gICAgICAgICAgICAgICAgKHRoaXMuYmdCdG5Ob2RlLmFjdGl2ZSA9ICEwKSkgOlxuICAgICAgICAgICAgMiA9PT0gZSAmJlxuICAgICAgICAgICAgKChuID0gX25ld0ppZ01nci5kZWZhdWx0LmlucyksXG4gICAgICAgICAgICAgICAgKHRoaXMuc2hvd0JnRW5kVGltZSA9IF9wSW5mby5kZWZhdWx0Lmlucy5nZXROZXdKaWdCZ0VuZFRpbWVzQnlJZHgodCkpLFxuICAgICAgICAgICAgICAgIChyID0gXCJuZXdZZWFyX3BpZWNlc1wiKSxcbiAgICAgICAgICAgICAgICAoYSA9IFwiZmVzX1wiICsgaSArIFwiXzFcIiksXG4gICAgICAgICAgICAgICAgKHRoaXMuYmdCdG5Ob2RlLmFjdGl2ZSA9ICExKSk7XG4gICAgICAgIHRoaXMuamlnVGlsZXMgPSBuLmdldEppZ3Nhd1RpbGVzQnlJZHgodCk7XG4gICAgICAgIHRoaXMuaXNVbmxvY2sgPSBuLmlzSXRlbVVubG9jayh0KTtcbiAgICAgICAgdGhpcy5pc1VubG9jayA/IHRoaXMuaW5pdFVuTG9jaygpIDogdGhpcy5pbml0TG9ja2VkKCk7XG4gICAgICAgICF0aGlzLmlzVW5sb2NrICYmIG4uaXNQaWVjZUVub3VnaCh0KSA/ICh0aGlzLnRpcExiLm5vZGUuYWN0aXZlID0gITApIDogKHRoaXMudGlwTGIubm9kZS5hY3RpdmUgPSAhMSk7XG4gICAgICAgIHRoaXMudXBJdGVtTnVtKCk7XG4gICAgICAgIDEgPT09IGUgJiZcbiAgICAgICAgICAgIChpIDwgNjEgP1xuICAgICAgICAgICAgICAgIF9yZXMuZGVmYXVsdC5pbnNcbiAgICAgICAgICAgICAgICAuZ2V0QnVuZGxlQnlTdHJpbmcoXCJqaWdzYXdcIilcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgIHQubG9hZChhLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXQgJiYgby5ub2RlICYmIG8ubm9kZS5pc1ZhbGlkICYmIChvLmxvY2tJbWcuc3ByaXRlRnJhbWUgPSBlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUlRvb2wuaW5zLmdldEJ1bmRsZUJ5U3RyaW5nKCdqaWdzYXcnKVwiLCB0KTtcbiAgICAgICAgICAgICAgICB9KSA6XG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoXG4gICAgICAgICAgICAgICAgICAgIF9nbG9iYWwuT3NzQ29uZmlnLmppZ3N3YXdVcmwgKyBcInBpbnR1X1wiICsgaSArIFwiXzEuanBnXCIsIHsgZXh0OiBfZ2xvYmFsLmhlYWRJbWdFeHQgfSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXQgJiYgby5ub2RlICYmIG8ubm9kZS5pc1ZhbGlkICYmIChvLmxvY2tJbWcuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgIF9yZXMuZGVmYXVsdC5pbnNcbiAgICAgICAgICAgIC5nZXRCdW5kbGVCeVN0cmluZyhcInJlc1Nwc1wiKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHQubG9hZChcIml0ZW0vXCIgKyByLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAhdCAmJiBvLm5vZGUgJiYgby5ub2RlLmlzVmFsaWQgJiYgKG8uZ2V0UGllY2VTcC5zcHJpdGVGcmFtZSA9IGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJUb29sLmlucy5nZXRCdW5kbGVCeVN0cmluZygncmVzU3BzJylcIiwgdCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRHZXRUaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gX3BJbmZvLmRlZmF1bHQuaW5zLmdldEppZ3Nhd0FkVGltZXMoKTtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmFkTWF4VGltZSAtIHQ7XG4gICAgICAgIHRoaXMuZ2V0TGIuc3RyaW5nID0gZSArIFwiXCI7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0R2V0VGltZTIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSBfcEluZm8uZGVmYXVsdC5pbnMuZ2V0TmV3SmlnQWRUaW1lcygpO1xuICAgICAgICB2YXIgZSA9IHRoaXMuYWRNYXhUaW1lMiAtIHQ7XG4gICAgICAgIHRoaXMuZ2V0TGIuc3RyaW5nID0gZSArIFwiXCI7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0TG9ja2VkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZmluSW1nLm5vZGUuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMubWVudU5vZGUuYWN0aXZlID0gITE7XG4gICAgICAgIHRoaXMubG9ja05vZGUuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMubG9ja0ltZy5ub2RlLmFjdGl2ZSA9ICEwO1xuICAgICAgICB0aGlzLmJnTm9kZS55ID0gMzI2O1xuICAgICAgICB0aGlzLmJnTm9kZS5oZWlnaHQgPSA3OTA7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0VW5Mb2NrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdmFyIGUgPSB0aGlzLnRoZW1lX2lkICsgMTtcbiAgICAgICAgdmFyIG8gPSBcInBpbnR1X1wiICsgZTtcbiAgICAgICAgMSA9PT0gdGhpcy50aGVtZVR5cGUgP1xuICAgICAgICAgICAgZSA8IDYxID9cbiAgICAgICAgICAgIF9yZXMuZGVmYXVsdC5pbnNcbiAgICAgICAgICAgIC5nZXRCdW5kbGVCeVN0cmluZyhcImppZ3Nhd1wiKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUubG9hZChvLCBjYy5UZXh0dXJlMkQsIGZ1bmN0aW9uKGUsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgIWUgJiYgdC5ub2RlICYmIHQubm9kZS5pc1ZhbGlkICYmIHQuaW5pdFVubG9ja1dpdGhJbWcobyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUlRvb2wuaW5zLmdldEJ1bmRsZUJ5U3RyaW5nKCdqaWdzYXcnKVwiLCB0KTtcbiAgICAgICAgICAgIH0pIDpcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKFxuICAgICAgICAgICAgICAgIF9nbG9iYWwuT3NzQ29uZmlnLmppZ3N3YXdVcmwgKyBcInBpbnR1X1wiICsgZSArIFwiLmpwZ1wiLCB7IGV4dDogX2dsb2JhbC5oZWFkSW1nRXh0IH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oZSwgbykge1xuICAgICAgICAgICAgICAgICAgICAhZSAmJiB0Lm5vZGUgJiYgdC5ub2RlLmlzVmFsaWQgJiYgdC5pbml0VW5sb2NrV2l0aEltZyhvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApIDpcbiAgICAgICAgICAgIDIgPT09IHRoaXMudGhlbWVUeXBlICYmXG4gICAgICAgICAgICAoKG8gPSBcImZlc19cIiArIGUpLFxuICAgICAgICAgICAgICAgIF9yZXMuZGVmYXVsdC5pbnNcbiAgICAgICAgICAgICAgICAuZ2V0QnVuZGxlQnlTdHJpbmcoXCJqaWdzYXdcIilcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUubG9hZChvLCBjYy5UZXh0dXJlMkQsIGZ1bmN0aW9uKGUsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFlICYmIHQubm9kZSAmJiB0Lm5vZGUuaXNWYWxpZCAmJiB0LmluaXRVbmxvY2tXaXRoSW1nKG8pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSVG9vbC5pbnMuZ2V0QnVuZGxlQnlTdHJpbmcoJ2ppZ3NhdycpXCIsIHQpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRVbmxvY2tXaXRoSW1nID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLmppZ18yZCA9IHQ7XG4gICAgICAgIHRoaXMuZmluSW1nLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHQpO1xuICAgICAgICB0aGlzLmxvY2tOb2RlLmFjdGl2ZSA9ICExO1xuICAgICAgICB0aGlzLm1lbnVOb2RlLmFjdGl2ZSA9ICEwO1xuICAgICAgICB0aGlzLmxvY2tJbWcubm9kZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgdGhpcy5pc0FsbFJpZ2h0ID0gdGhpcy5Jc0ppZ3Nhd0NvbXBsZXRlZCh0aGlzLnRoZW1lX2lkKTtcbiAgICAgICAgdGhpcy5pc0FsbFJpZ2h0ID8gdGhpcy5pbml0Q29tcGxldGUoKSA6IHRoaXMuaW5pdFVuQ29tcGxldGUoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgdGhpcy5sb2NrSW1nLm5vZGUuYWN0aXZlID0gITE7XG4gICAgICAgIHRoaXMuZmluSW1nLm5vZGUuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5ub2RlLnBhcmVudC5hY3RpdmUgPSAhMTtcbiAgICAgICAgdGhpcy5tZW51Tm9kZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgdGhpcy5sb2NrTm9kZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgdGhpcy5idG5SZXNldC5hY3RpdmUgPSAhMDtcbiAgICAgICAgdGhpcy5iZ05vZGUueSA9IDMyNjtcbiAgICAgICAgdGhpcy5iZ05vZGUuaGVpZ2h0ID0gNzkwO1xuICAgICAgICAxID09PSB0aGlzLnRoZW1lVHlwZSA/ICh0ID0gX2ppZ3Nhd01nci5kZWZhdWx0LmlucykgOiAyID09PSB0aGlzLnRoZW1lVHlwZSAmJiAodCA9IF9uZXdKaWdNZ3IuZGVmYXVsdC5pbnMpO1xuICAgICAgICB0LmNoZWNrU2V0RmluKHRoaXMudGhlbWVfaWQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdFVuQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc19pbml0IHx8XG4gICAgICAgICAgICAoKHRoaXMubG9ja0ltZy5ub2RlLmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAodGhpcy5zY3JvbGxWaWV3Lm5vZGUucGFyZW50LmFjdGl2ZSA9ICEwKSxcbiAgICAgICAgICAgICAgICAodGhpcy5tZW51Tm9kZS5hY3RpdmUgPSAhMCksXG4gICAgICAgICAgICAgICAgKHRoaXMubG9ja05vZGUuYWN0aXZlID0gITEpLFxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFRpbGVQb3MoKSxcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRBcm91bmRUaWxlcygpLFxuICAgICAgICAgICAgICAgIHRoaXMuSW5pdFRpbGVzKCksXG4gICAgICAgICAgICAgICAgdGhpcy5SZWZyZXNoSWRsZUl0ZW1zKCEwKSxcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0JnaW5nKCksXG4gICAgICAgICAgICAgICAgKHRoaXMuaXNfaW5pdCA9ICEwKSxcbiAgICAgICAgICAgICAgICAodGhpcy5iZ05vZGUueSA9IDM5NiksXG4gICAgICAgICAgICAgICAgKHRoaXMuYmdOb2RlLmhlaWdodCA9IDk2MCkpO1xuICAgICAgICB2YXIgdCA9IHRoaXMuc2hvd0JnRW5kVGltZSAtIF90aW1lLmRlZmF1bHQuaW5zLnNlcnZlclRpbWUgfHwgTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDFlMyk7XG4gICAgICAgIHRoaXMubG9ja05vZGUuYWN0aXZlID0gISh0IDwgMCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pc1Nob3dCZ2luZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAodGhpcy5zaG93QmdFbmRUaW1lIC0gX3RpbWUuZGVmYXVsdC5pbnMuc2VydmVyVGltZSB8fCBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMWUzKSkgPCAwXG4gICAgICAgICAgICA/XG4gICAgICAgICAgICAoKHRoaXMuZmluSW1nLm5vZGUuYWN0aXZlID0gITEpLFxuICAgICAgICAgICAgICAgICh0aGlzLmxvY2tOb2RlLmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAodGhpcy5iZ0J0bi5lbmFibGVkID0gITApLFxuICAgICAgICAgICAgICAgICh0aGlzLnRpbWVMYi5zdHJpbmcgPSB0aGlzLmRlZmF1bHRTaG93VGltZSArIFwic1wiKSxcbiAgICAgICAgICAgICAgICAodGhpcy50aW1lTGIubm9kZS5hY3RpdmUgPSAhMSksXG4gICAgICAgICAgICAgICAgKHRoaXMudGltZUFkLmFjdGl2ZSA9ICEwKSxcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5iZWdpblNob3cpKSA6XG4gICAgICAgICAgICAoKHRoaXMuYmdCdG4uZW5hYmxlZCA9ICExKSxcbiAgICAgICAgICAgICAgICAodGhpcy5maW5JbWcubm9kZS5hY3RpdmUgPSAhMCksXG4gICAgICAgICAgICAgICAgKHRoaXMubG9ja05vZGUuYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICh0aGlzLnRpbWVBZC5hY3RpdmUgPSAhMSksXG4gICAgICAgICAgICAgICAgKHRoaXMudGltZUxiLm5vZGUuYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5iZWdpblNob3csIDEpLFxuICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5TaG93KCkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubG9ja2VkVG9VbmxvY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc1VubG9jayB8fCAoKHRoaXMuaXNVbmxvY2sgPSAhMCksICh0aGlzLmxvY2tOb2RlLmFjdGl2ZSA9ICExKSwgdGhpcy5pbml0VW5Mb2NrKCkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuSW5pdFRpbGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIHQgPSAwLCBlID0gdGhpcy5qaWdUaWxlczsgdCA8IGUubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgIHZhciBvID0gZVt0XTtcbiAgICAgICAgICAgIHZhciBuID0gb1swXTtcbiAgICAgICAgICAgIHZhciBpID0gb1sxXTsgLVxuICAgICAgICAgICAgMSAhPSBpICYmIHRoaXMuY1RpbGUobiwgaSwgITEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5hZGRBcm91bmRUaWxlcyA9IGZ1bmN0aW9uKHQsIGUsIG8sIG4pIHtcbiAgICAgICAgdmFyIGkgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBpLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zaGFkb3cwO1xuICAgICAgICBpLnBvc2l0aW9uID0gY2MudjModCArIC00LCBlICsgLTkpO1xuICAgICAgICBpLnpJbmRleCA9IC0xO1xuICAgICAgICBpLnBhcmVudCA9IHRoaXMudGlsZV9hO1xuICAgICAgICB2YXIgciA9IHRoaXMuY1RpbGVTcHJpdGUobywgbik7XG4gICAgICAgIHIucG9zaXRpb24gPSBjYy52Myh0LCBlKTtcbiAgICAgICAgci5zY2FsZSA9IDEuMDI7XG4gICAgICAgIHIuekluZGV4ID0gMTtcbiAgICAgICAgci5wYXJlbnQgPSB0aGlzLnRpbGVfYTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRBcm91bmRUaWxlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDExOyB0KyspIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5nZXRUaWxlUG9zKHQpO1xuICAgICAgICAgICAgdGhpcy5hZGRBcm91bmRUaWxlcyhlLnggKyA0OS41LCAtZS55IC0gNDQuNSArIDY5LCBlLngsIGUueSAtIDY5KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBvID0gWzk5LCA4OSwgMTAwLCA5MSwgMTAxLCA5MywgMTAyLCA5NSwgMTAzLCA5NywgMTA0XSwgbiA9IDA7IG4gPCAxMTsgbisrKVxuICAgICAgICAgICAgKHQgPSBvW25dKSwgKGUgPSB0aGlzLmdldFRpbGVQb3ModCkpLCB0aGlzLmFkZEFyb3VuZFRpbGVzKGUueCArIDQ5LjUsIC1lLnkgLSA0NC41IC0gNjksIGUueCwgZS55ICsgNjkpO1xuICAgICAgICB2YXIgaSA9IFswLCAxMSwgMjIsIDMzLCA0NCwgNTUsIDY2LCA3NywgODgsIDk5LCA5OV07XG4gICAgICAgIGZvciAobiA9IDA7IG4gPCAxMTsgbisrKVxuICAgICAgICAgICAgKHQgPSBpW25dKSxcbiAgICAgICAgICAgIChlID0gdGhpcy5nZXRUaWxlUG9zKHQpKSxcbiAgICAgICAgICAgIDEwID09IG4gP1xuICAgICAgICAgICAgdGhpcy5hZGRBcm91bmRUaWxlcyhlLnggKyA0OS41IC0gUCwgLWUueSAtIDQ0LjUgLSAzNC41LCBlLnggLSBQLCBlLnkgKyAzNC41KSA6XG4gICAgICAgICAgICB0aGlzLmFkZEFyb3VuZFRpbGVzKGUueCArIDQ5LjUgLSBQLCAtZS55IC0gNDQuNSArIDM0LjUsIGUueCAtIFAsIGUueSAtIDM0LjUpO1xuICAgICAgICB2YXIgciA9IFsxMCwgMjEsIDMyLCA0MywgNTQsIDY1LCA3NiwgODcsIDk4LCAxMDQsIDEwNF07XG4gICAgICAgIGZvciAobiA9IDA7IG4gPCAxMTsgbisrKVxuICAgICAgICAgICAgKHQgPSByW25dKSxcbiAgICAgICAgICAgIChlID0gdGhpcy5nZXRUaWxlUG9zKHQpKSxcbiAgICAgICAgICAgIDEwID09IG4gP1xuICAgICAgICAgICAgdGhpcy5hZGRBcm91bmRUaWxlcyhlLnggKyA0OS41ICsgUCwgLWUueSAtIDQ0LjUgLSAzNC41LCBlLnggKyBQLCBlLnkgKyAzNC41KSA6XG4gICAgICAgICAgICB0aGlzLmFkZEFyb3VuZFRpbGVzKGUueCArIDQ5LjUgKyBQLCAtZS55IC0gNDQuNSArIDM0LjUsIGUueCArIFAsIGUueSAtIDM0LjUpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY0lkbGVUaWxlID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IG5ldyBjYy5Ob2RlKHQudG9TdHJpbmcoKSk7XG4gICAgICAgIGUuc2NhbGUgPSAxLjAxO1xuICAgICAgICBlLnNldENvbnRlbnRTaXplKGNjLnNpemUoNzksIDY5KSk7XG4gICAgICAgIHRoaXMuYWRkVGlsZVNoYWRvdyhlKTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmdldFRpbGVQb3ModCk7XG4gICAgICAgIHRoaXMuY1RpbGVTcHJpdGUoby54LCBvLnkpLnBhcmVudCA9IGU7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuUmVmcmVzaElkbGVJdGVtcyA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgaWYgKCh2b2lkIDAgPT09IGUgJiYgKGUgPSAhMSksICF0aGlzLmlzQWxsUmlnaHQgJiYgdGhpcy5qaWdfMmQpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBvID0gdGhpcy5qaWdUaWxlcywgbiA9IHt9LCBpID0gMCwgciA9IHRoaXMudGlsZXNfaWRsZTsgaSA8IHIubGVuZ3RoOyBpKyspIG5bKGcgPSByW2ldKS5uYW1lXSA9IGc7XG4gICAgICAgICAgICB0aGlzLnRpbGVzX2lkbGUgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwLCBzID0gMCwgYyA9IG87IHMgPCBjLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBjW3NdO1xuICAgICAgICAgICAgICAgIHZhciB1ID0gbFswXTtcbiAgICAgICAgICAgICAgICBpZiAoLTEgPT0gbFsxXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IG5bKGYgPSB1LnRvU3RyaW5nKCkpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBwXG4gICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICAoKGQgPSBwKSwgKG5bZl0gPSB2b2lkIDApKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAoKGQgPSB0aGlzLmNJZGxlVGlsZSh1KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCB8fCAoKGQub3BhY2l0eSA9IDApLCBjYy50d2VlbihkKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkLnBhcmVudCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50KSk7XG4gICAgICAgICAgICAgICAgICAgIGQuc2V0UG9zaXRpb24oNTAgKyAxMDAgKiBhKyssIDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVzX2lkbGUucHVzaChkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaCA9IE1hdGgubWF4KDEwMCAqIHRoaXMudGlsZXNfaWRsZS5sZW5ndGgsIHRoaXMuc2Nyb2xsVmlldy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggKyAxKTtcbiAgICAgICAgICAgIGZvciAodmFyIGYgaW4gKHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnNldENvbnRlbnRTaXplKGNjLnNpemUoaCwgMTEwKSksIG4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGc7XG4gICAgICAgICAgICAgICAgKGcgPSBuW2ZdKSAmJiBnLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hnVmlzSXRlbXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hnVmlzSXRlbXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudDtcbiAgICAgICAgdmFyIGUgPSB0LmNoaWxkcmVuO1xuICAgICAgICBpZiAoMCAhPSBlLmxlbmd0aClcbiAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgdmFyIG8gPSB0LnBhcmVudC5nZXRDb250ZW50U2l6ZSgpLCBuID0gLW8ud2lkdGggLyAyIC0gNTAsIGkgPSBvLndpZHRoIC8gMiArIDUwLCByID0gdC54LCBhID0gMCwgcyA9IGU7IGEgPCBzLmxlbmd0aDsgYSsrXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHNbYV07XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBjLnggKyByO1xuICAgICAgICAgICAgICAgIHZhciB1ID0gbCA+PSBuICYmIGwgPD0gaTtcbiAgICAgICAgICAgICAgICBjLmFjdGl2ZSA9IHU7XG4gICAgICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS50dElkbGVUaWxlID0gZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodGhpcy50aWxlc19pZGxlLmxlbmd0aCA8PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIGUgPSBfbWFpbi5kZWZhdWx0Lmlucy5nZXRXb3JsZFBvaW50QnlUb3VjaCh0KTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlKTtcbiAgICAgICAgaWYgKG8ueSA8IC00NSB8fCBvLnkgPiA0NSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGZvciAodmFyIG4gPSAwLCBpID0gdGhpcy50aWxlc19pZGxlOyBuIDwgaS5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgdmFyIHIgPSBpW25dO1xuICAgICAgICAgICAgdmFyIGEgPSByLnBvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKG8ueCA+IGEueCAtIDQ1ICYmIG8ueCA8IGEueCArIDQ1KSByZXR1cm4gcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnRpbGVGbHlWaWV3ID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICB2YXIgbyA9IHRoaXMuY0RyYWdUaWxlKGUpO1xuICAgICAgICBvLnBvc2l0aW9uID0gdDtcbiAgICAgICAgby5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHZhciBuID0gdGhpcy5zY3JvbGxWaWV3Lm5vZGUucGFyZW50LnBvc2l0aW9uO1xuICAgICAgICBjYy50d2VlbihvKS50bygwLjUsIHsgcG9zaXRpb246IG4gfSkudG8oMC4xNSwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jRHJhZ1RpbGUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIF92Yi5kZWZhdWx0LnAoX3ZiLlZFbnVtMy5TSE9SVCk7XG4gICAgICAgIHZhciBlID0gbmV3IGNjLk5vZGUodC50b1N0cmluZygpKTtcbiAgICAgICAgZS5zY2FsZSA9IDEuMDE7XG4gICAgICAgIGUuc2V0Q29udGVudFNpemUoY2Muc2l6ZSg3OSwgNjkpKTtcbiAgICAgICAgdGhpcy5hZGRUaWxlU2hhZG93KGUpO1xuICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0VGlsZVBvcyh0KTtcbiAgICAgICAgdGhpcy5jVGlsZVNwcml0ZShvLngsIG8ueSkucGFyZW50ID0gZTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRUaWxlVmlzID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICB0LmRpLmFjdGl2ZSA9IGU7XG4gICAgICAgIHQuaW1nLmFjdGl2ZSA9IGU7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jVGlsZSA9IGZ1bmN0aW9uKHQsIGUsIG8pIHtcbiAgICAgICAgaWYgKCh2b2lkIDAgPT09IG8gJiYgKG8gPSAhMCksICF0aGlzLmdldFRpbGVCeVBvcyhlKSkpIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy50aWxlX3BbZV07XG4gICAgICAgICAgICB2YXIgaSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICBpLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zaGFkb3cwO1xuICAgICAgICAgICAgaS5wb3NpdGlvbiA9IGNjLnYzKG4ueCwgbi55IC0gNyk7XG4gICAgICAgICAgICBpLnBhcmVudCA9IHRoaXMudGlsZV9hO1xuICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmdldFRpbGVQb3ModCk7XG4gICAgICAgICAgICB2YXIgYSA9IHRoaXMuY1RpbGVTcHJpdGUoci54LCByLnkpO1xuICAgICAgICAgICAgYS5wb3NpdGlvbiA9IGNjLnYzKG4ueCwgbi55KTtcbiAgICAgICAgICAgIGEuc2NhbGUgPSAxLjAyO1xuICAgICAgICAgICAgYS56SW5kZXggPSAxO1xuICAgICAgICAgICAgYS5wYXJlbnQgPSB0aGlzLnRpbGVfYTtcbiAgICAgICAgICAgIHRoaXMudGlsZXNbZV0gPSB7IGRpOiBpLCBpbWc6IGEsIHRpbGVfaWQ6IHQgfTtcbiAgICAgICAgICAgIG8gJiYgZSA9PSB0ICYmICh0aGlzLnBsYXlUcnVlQW5pKG4pLCBfdmIuZGVmYXVsdC5wKF92Yi5WRW51bTMuU0hPUlQpKTtcbiAgICAgICAgICAgIHRoaXMucmVHdWlkZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5kZWxUaWxlID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMudGlsZXNbdF07XG4gICAgICAgIGUgJiYgKGUuZGkuZGVzdHJveSgpLCBlLmltZy5kZXN0cm95KCksICh0aGlzLnRpbGVzW3RdID0gbnVsbCkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubW92ZVRpbGUgPSBmdW5jdGlvbih0LCBlLCBvKSB7XG4gICAgICAgIHZhciBuID0gdGhpcy50aWxlc1t0XTtcbiAgICAgICAgaWYgKG4gJiYgbi50aWxlX2lkID09IG8pIHtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy50aWxlX3BbZV07XG4gICAgICAgICAgICBuLmRpLnBvc2l0aW9uID0gY2MudjMoaS54LCBpLnkgLSA3KTtcbiAgICAgICAgICAgIG4uaW1nLnBvc2l0aW9uID0gY2MudjMoaS54LCBpLnkpO1xuICAgICAgICAgICAgdGhpcy50aWxlc1tlXSA9IG47XG4gICAgICAgICAgICB0aGlzLnRpbGVzW3RdID0gbnVsbDtcbiAgICAgICAgICAgIGUgPT0gbyAmJiAodGhpcy5wbGF5VHJ1ZUFuaShpKSwgX3ZiLmRlZmF1bHQucChfdmIuVkVudW0zLlNIT1JUKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFRpbGVCeVBvcyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZXNbdF07XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jVGlsZVNwcml0ZSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmppZ18yZC53aWR0aDtcbiAgICAgICAgdmFyIG4gPSB0aGlzLmppZ18yZC5oZWlnaHQ7XG4gICAgICAgIHZhciBpID0gdCArIDEwO1xuICAgICAgICB2YXIgciA9IGUgKyAxMDtcbiAgICAgICAgdmFyIGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRpbGVQcmUpO1xuICAgICAgICBhLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KFwidGV4dHVyZTJcIiwgdGhpcy5qaWdfMmQpO1xuICAgICAgICB2YXIgcyA9IChpIC8gbykgKiAyNTU7XG4gICAgICAgIHZhciBjID0gKHIgLyBuKSAqIDI1NTtcbiAgICAgICAgdmFyIGwgPSBjYy5jb2xvcigpO1xuICAgICAgICBsLnIgPSBzID4gMCA/IHMgOiAwO1xuICAgICAgICBsLmcgPSBjID4gMCA/IGMgOiAwO1xuICAgICAgICB2YXIgdSA9IDA7XG4gICAgICAgIHMgPiAwICYmIGMgPD0gLTIxID9cbiAgICAgICAgICAgICh1ID0gNTEpIDpcbiAgICAgICAgICAgIHMgPiAwICYmIGMgPD0gLTggP1xuICAgICAgICAgICAgKHUgPSAxMDIpIDpcbiAgICAgICAgICAgIHMgPD0gLTE4ICYmIGMgPD0gLTggP1xuICAgICAgICAgICAgKHUgPSAxNTMpIDpcbiAgICAgICAgICAgIHMgPD0gLTE4ICYmIGMgPiAwICYmICh1ID0gMjA0KTtcbiAgICAgICAgbC5iID0gdSArIDU7XG4gICAgICAgIGEuY29sb3IgPSBsO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFRpbGVQb3MgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBlID0gTWF0aC5mbG9vcih0IC8gMTEpO1xuICAgICAgICB2YXIgbyA9IHQgJSAxMTtcbiAgICAgICAgdCA+IDk5ICYmIChvICs9IHQgLSA5OSk7XG4gICAgICAgIHZhciBuID0gUCAqIG87XG4gICAgICAgIHZhciBpID0gNjkgKiBlO1xuICAgICAgICBvICUgMiA9PSAxICYmIChpICs9IDM0LjUpO1xuICAgICAgICByZXR1cm4gY2MudjIobiwgaSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0VGlsZVBvcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoISh0aGlzLnRpbGVfcC5sZW5ndGggPiAwKSlcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgMTA1OyB0KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuZ2V0VGlsZVBvcyh0KTtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IGUueCArIDQ5LjU7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSAtZS55IC0gNDQuNTtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICAgICAgaS5jb2xvciA9IGNjLmNvbG9yKDUyLCAxNTYsIDE5Myk7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBpLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgci5zdHJpbmcgPSB0ICsgXCJcIjtcbiAgICAgICAgICAgICAgICByLmZvbnQgPSBfbG9hZGluZy5ERUZBVUxURk9OVDtcbiAgICAgICAgICAgICAgICBpLnBhcmVudCA9IHRoaXMudGlsZUxiTm9kZTtcbiAgICAgICAgICAgICAgICBpLnBvc2l0aW9uID0gY2MudjMobywgbiArIDMpO1xuICAgICAgICAgICAgICAgIHZhciBhID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgICAgICAgICBhLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jZWxsU3ByO1xuICAgICAgICAgICAgICAgIGEuc2NhbGUgPSAwLjkzO1xuICAgICAgICAgICAgICAgIGEucGFyZW50ID0gdGhpcy5jZWxsTm9kZTtcbiAgICAgICAgICAgICAgICBhLnBvc2l0aW9uID0gY2MudjMobywgbiwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlX3AucHVzaChjYy52MihvLCBuKSk7XG4gICAgICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS50VGlsZVBvc0lEID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IF9tYWluLmRlZmF1bHQuaW5zLmdldFdvcmxkUG9pbnRCeVRvdWNoKHQpO1xuICAgICAgICB2YXIgbyA9IHRoaXMudGlsZXNOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGUpO1xuICAgICAgICBpZiAoby54IDw9IDAgfHwgby54ID49IDY5NCB8fCBvLnkgPj0gMCB8fCBvLnkgPD0gLTcxMSkgcmV0dXJuIC0xO1xuICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHRoaXMudGlsZV9wLmxlbmd0aDsgbisrKVxuICAgICAgICAgICAgaWYgKGNjLlZlYzIuZGlzdGFuY2UobywgdGhpcy50aWxlX3Bbbl0pIDw9IDM0LjUpIHJldHVybiBuO1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vblRCZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBbGxSaWdodCB8fCB0aGlzLmlzX2hpbnRpbmcpIHJldHVybiAhMDtcbiAgICAgICAgdGhpcy50aWxlU2VsZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy50aWxlUG9zSWQgPSAtMTtcbiAgICAgICAgdGhpcy5pZGxlX3RpbGVfc2VsZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmFnX3RpbGUgPSBudWxsO1xuICAgICAgICB0aGlzLnNjcm9sbF9kaXIgPSAwO1xuICAgICAgICB2YXIgZSA9IHRoaXMudFRpbGVQb3NJRCh0LnRvdWNoKTtcbiAgICAgICAgaWYgKC0xICE9IGUpIHtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5nZXRUaWxlQnlQb3MoZSk7XG4gICAgICAgICAgICBpZiAobyAmJiBvLnRpbGVfaWQgIT0gZSkgcmV0dXJuICh0aGlzLnRpbGVTZWxlY3QgPSBvKSwgKHRoaXMudGlsZVBvc0lkID0gZSksICExO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpbGVzX2lkbGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIG4gPSBfbWFpbi5kZWZhdWx0Lmlucy5nZXRXb3JsZFBvaW50QnlUb3VjaCh0LnRvdWNoKTtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5zY3JvbGxWaWV3Lm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG4pO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsVmlldy5ub2RlLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnMoaSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3Ll9vblRvdWNoQmVnYW4odCksXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmlkbGVfdGlsZV9zZWxlY3QgPSB0aGlzLnR0SWRsZVRpbGUodC50b3VjaCkpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVfdGlsZV9zZWxlY3QgJiYgKHRoaXMuaWRsZV90aWxlX3NlbGVjdC5zY2FsZSA9IDEuMDEgKiAxLjEpLCAhMVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEwO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25UTSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBbGxSaWdodCB8fCB0aGlzLmlzX2hpbnRpbmcpIHJldHVybiAhMDtcbiAgICAgICAgaWYgKDAgPT0gdGhpcy5zY3JvbGxfZGlyKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHQudG91Y2g7XG4gICAgICAgICAgICB2YXIgbyA9IGUuZ2V0U3RhcnRMb2NhdGlvbkluVmlldygpO1xuICAgICAgICAgICAgdmFyIG4gPSBlLmdldExvY2F0aW9uSW5WaWV3KCk7XG4gICAgICAgICAgICBpZiAoY2MuVmVjMi5kaXN0YW5jZShvLCBuKSA+IDUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IG4uc3ViKG8pO1xuICAgICAgICAgICAgICAgIHZhciByID0gNTcuMjk1NyAqIE1hdGguYXRhbjIoaS55LCBpLngpO1xuICAgICAgICAgICAgICAgIHIgPiAzMCAmJiByIDwgMTUwID9cbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc2Nyb2xsX2RpciA9IDIpIDpcbiAgICAgICAgICAgICAgICAgICAgciA8IC0zMCAmJiByID4gLTE1MCA/XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnNjcm9sbF9kaXIgPSAyKSA6XG4gICAgICAgICAgICAgICAgICAgIHIgPj0gLTMwICYmIHIgPD0gMzAgP1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5zY3JvbGxfZGlyID0gMSkgOlxuICAgICAgICAgICAgICAgICAgICAociA8PSAtMTUwIHx8IHIgPj0gMTUwKSAmJiAodGhpcy5zY3JvbGxfZGlyID0gMSk7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlU2VsZWN0ID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnX3RpbGUgfHxcbiAgICAgICAgICAgICAgICAgICAgMCA9PSB0aGlzLnNjcm9sbF9kaXIgfHxcbiAgICAgICAgICAgICAgICAgICAgKCh0aGlzLmRyYWdfdGlsZSA9IHRoaXMuY0RyYWdUaWxlKHRoaXMudGlsZVNlbGVjdC50aWxlX2lkKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kcmFnX3RpbGUuc2NhbGUgPSAwLjg4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRyYWdfdGlsZS5wYXJlbnQgPSB0aGlzLm5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUaWxlVmlzKHRoaXMudGlsZVNlbGVjdCwgITEpKSA6XG4gICAgICAgICAgICAgICAgICAgIDEgPT0gdGhpcy5zY3JvbGxfZGlyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlX3RpbGVfc2VsZWN0ICYmICh0aGlzLmlkbGVfdGlsZV9zZWxlY3Quc2NhbGUgPSAxLjAxKSA6XG4gICAgICAgICAgICAgICAgICAgIDIgPT0gdGhpcy5zY3JvbGxfZGlyICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZV90aWxlX3NlbGVjdCAmJlxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5kcmFnX3RpbGUgJiZcbiAgICAgICAgICAgICAgICAgICAgKCh0aGlzLmRyYWdfdGlsZSA9IHRoaXMuY0RyYWdUaWxlKE51bWJlcih0aGlzLmlkbGVfdGlsZV9zZWxlY3QubmFtZSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRyYWdfdGlsZS5wYXJlbnQgPSB0aGlzLm5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaWRsZV90aWxlX3NlbGVjdC5hY3RpdmUgPSAhMSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBhID0gX21haW4uZGVmYXVsdC5pbnMuZ2V0V29ybGRQb2ludEJ5VG91Y2godC50b3VjaCk7XG4gICAgICAgIHZhciBzID0gdGhpcy5zY3JvbGxWaWV3Lm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGEpO1xuICAgICAgICB2YXIgYyA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnMocyk7XG4gICAgICAgIGlmICgodGhpcy50aWxlU2VsZWN0IHx8IDEgIT0gdGhpcy5zY3JvbGxfZGlyIHx8ICFjIHx8IHRoaXMuc2Nyb2xsVmlldy5fb25Ub3VjaE1vdmVkKHQpLCB0aGlzLmRyYWdfdGlsZSkpIHtcbiAgICAgICAgICAgIHZhciBsID0gX21haW4uZGVmYXVsdC5pbnMuZ2V0V29ybGRQb2ludEJ5VG91Y2godC50b3VjaCk7XG4gICAgICAgICAgICB2YXIgdSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsKTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ190aWxlLnBvc2l0aW9uID0gY2MudjModS54LCB1LnkgKyAxOTUpO1xuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuZHJhZ190aWxlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIHZhciBkID0gKChvID0gdGhpcy50aWxlc05vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocCkpLCAwKTtcbiAgICAgICAgICAgIHZhciBoID0gLTE7XG4gICAgICAgICAgICB2YXIgZiA9IGNjLnYzKCk7XG4gICAgICAgICAgICBpZiAoby54ID4gMCAmJiBvLnggPCA2OTQgJiYgby55IDwgMCAmJiBvLnkgPiAtNzExKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZyA9IHRoaXMudGlsZV9wLmxlbmd0aCAtIDE7IGcgPj0gMDsgZy0tKVxuICAgICAgICAgICAgICAgICAgICBpZiAoKChmLnggPSB0aGlzLnRpbGVfcFtnXS54KSwgKGYueSA9IHRoaXMudGlsZV9wW2ddLnkpLCAtMSA9PSBoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIChoID0gZyksIChkID0gY2MuVmVjMi5kaXN0YW5jZShvLCBmKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBjYy5WZWMyLmRpc3RhbmNlKG8sIGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeSA8IGQgJiYgKChkID0geSksIChoID0gZykpO1xuICAgICAgICAgICAgICAgICAgICB9IC1cbiAgICAgICAgICAgICAgICAxICE9IGggJiYgZCA+IDUwICYmIChoID0gLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmFnUHV0UG9zSWQgPSBoOyAtXG4gICAgICAgICAgICAxID09IGggP1xuICAgICAgICAgICAgICAgICh0aGlzLmRyYWdUYWcuYWN0aXZlID0gITEpIDpcbiAgICAgICAgICAgICAgICAoKHRoaXMuZHJhZ1RhZy5hY3RpdmUgPSAhMCksICh0aGlzLmRyYWdUYWcucG9zaXRpb24gPSBjYy52Myh0aGlzLnRpbGVfcFtoXS54LCB0aGlzLnRpbGVfcFtoXS55KSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vblRFID0gZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodGhpcy5pc0FsbFJpZ2h0IHx8IHRoaXMuaXNfaGludGluZykgcmV0dXJuICEwO1xuICAgICAgICB0aGlzLnRpbGVTZWxlY3QgfHwgMSAhPSB0aGlzLnNjcm9sbF9kaXIgfHwgdGhpcy5zY3JvbGxWaWV3Ll9vblRvdWNoRW5kZWQodCk7XG4gICAgICAgIHRoaXMucHV0RHJhZ1RpbGUoKTtcbiAgICAgICAgdGhpcy5pZGxlX3RpbGVfc2VsZWN0ICYmICgodGhpcy5pZGxlX3RpbGVfc2VsZWN0LnNjYWxlID0gMS4wMSksICh0aGlzLmlkbGVfdGlsZV9zZWxlY3QgPSBudWxsKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vblRDID0gZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodGhpcy5pc0FsbFJpZ2h0IHx8IHRoaXMuaXNfaGludGluZykgcmV0dXJuICEwO1xuICAgICAgICB0aGlzLnRpbGVTZWxlY3QgfHwgMSAhPSB0aGlzLnNjcm9sbF9kaXIgfHwgdGhpcy5zY3JvbGxWaWV3Ll9vblRvdWNoQ2FuY2VsbGVkKHQpO1xuICAgICAgICB0aGlzLnB1dERyYWdUaWxlKCk7XG4gICAgICAgIHRoaXMuaWRsZV90aWxlX3NlbGVjdCAmJiAoKHRoaXMuaWRsZV90aWxlX3NlbGVjdC5zY2FsZSA9IDEuMDEpLCAodGhpcy5pZGxlX3RpbGVfc2VsZWN0ID0gbnVsbCkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucHV0RHJhZ1RpbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ190aWxlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IE51bWJlcih0aGlzLmRyYWdfdGlsZS5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ1RhZy5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5kcmFnX3RpbGU7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGNjXG4gICAgICAgICAgICAgICAgICAgIC50d2Vlbih0aGlzLmRyYWdfdGlsZSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMTUsIHsgb3BhY2l0eTogMCB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKSxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuZHJhZ190aWxlID0gbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmlzX2hpbnRpbmcgPSAhMSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZV90aWxlX3NlbGVjdClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKCh0aGlzLmlkbGVfdGlsZV9zZWxlY3Quc2NhbGUgPSAxLjAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmlkbGVfdGlsZV9zZWxlY3QuYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaWRsZV90aWxlX3NlbGVjdC5vcGFjaXR5ID0gMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmlkbGVfdGlsZV9zZWxlY3QpLnRvKDAuMywgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmlkbGVfdGlsZV9zZWxlY3QgPSBudWxsKSwgLTEgPT0gdGhpcy5kcmFnUHV0UG9zSWQpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmdldFRpbGVCeVBvcyh0aGlzLmRyYWdQdXRQb3NJZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG8gP1xuICAgICAgICAgICAgICAgICAgICB2b2lkKFxuICAgICAgICAgICAgICAgICAgICAgICAgby50aWxlX2lkID09IHRoaXMuZHJhZ1B1dFBvc0lkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5tb2RKaWdUaWxlKHRoaXMudGhlbWVfaWQsIG8udGlsZV9pZCwgLTEsICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbFRpbGUodGhpcy5kcmFnUHV0UG9zSWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kSmlnVGlsZSh0aGlzLnRoZW1lX2lkLCB0LCB0aGlzLmRyYWdQdXRQb3NJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jVGlsZSh0LCB0aGlzLmRyYWdQdXRQb3NJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWZyZXNoSWRsZUl0ZW1zKCExLCAhMCkpXG4gICAgICAgICAgICAgICAgICAgICkgOlxuICAgICAgICAgICAgICAgICAgICAodGhpcy5tb2RKaWdUaWxlKHRoaXMudGhlbWVfaWQsIHQsIHRoaXMuZHJhZ1B1dFBvc0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY1RpbGUodCwgdGhpcy5kcmFnUHV0UG9zSWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWZyZXNoSWRsZUl0ZW1zKCExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQodCA9PSB0aGlzLmRyYWdQdXRQb3NJZCAmJiB0aGlzLmNoZWNrQWxsUigpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlU2VsZWN0ICYmXG4gICAgICAgICAgICAgICAgKHRoaXMuc2V0VGlsZVZpcyh0aGlzLnRpbGVTZWxlY3QsICEwKSwgKHRoaXMudGlsZVNlbGVjdCA9IG51bGwpLCB0aGlzLnRpbGVQb3NJZCAhPSB0aGlzLmRyYWdQdXRQb3NJZClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5nZXRUaWxlQnlQb3ModGhpcy5kcmFnUHV0UG9zSWQpO1xuICAgICAgICAgICAgICAgIGlmICgtMSA9PSB0aGlzLmRyYWdQdXRQb3NJZCB8fCAobiAmJiBuLnRpbGVfaWQgPT0gdGhpcy5kcmFnUHV0UG9zSWQpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RKaWdUaWxlKHRoaXMudGhlbWVfaWQsIHQsIC0xKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsVGlsZSh0aGlzLnRpbGVQb3NJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2lkIHRoaXMuUmVmcmVzaElkbGVJdGVtcyghMSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobiAmJiBuLnRpbGVfaWQgIT0gdGhpcy5kcmFnUHV0UG9zSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBuLnRpbGVfaWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kSmlnVGlsZSh0aGlzLnRoZW1lX2lkLCBuLnRpbGVfaWQsIC0xLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsVGlsZSh0aGlzLmRyYWdQdXRQb3NJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kSmlnVGlsZSh0aGlzLnRoZW1lX2lkLCB0LCB0aGlzLmRyYWdQdXRQb3NJZCwgITEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUaWxlKHRoaXMudGlsZVBvc0lkLCB0aGlzLmRyYWdQdXRQb3NJZCwgdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kSmlnVGlsZSh0aGlzLnRoZW1lX2lkLCBpLCB0aGlzLnRpbGVQb3NJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY1RpbGUoaSwgdGhpcy50aWxlUG9zSWQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCB0aGlzLmNoZWNrQWxsUigpO1xuICAgICAgICAgICAgICAgIH0gLVxuICAgICAgICAgICAgICAgIDEgIT0gdGhpcy50aWxlUG9zSWQgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlUG9zSWQgIT0gdGhpcy5kcmFnUHV0UG9zSWQgJiZcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMubW9kSmlnVGlsZSh0aGlzLnRoZW1lX2lkLCB0LCB0aGlzLmRyYWdQdXRQb3NJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUaWxlKHRoaXMudGlsZVBvc0lkLCB0aGlzLmRyYWdQdXRQb3NJZCwgdCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0ID09IHRoaXMuZHJhZ1B1dFBvc0lkICYmIHRoaXMuY2hlY2tBbGxSKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5PbkJ0bkhpbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCEodGhpcy5pc19oaW50aW5nIHx8IHRoaXMuaXNBbGxSaWdodCB8fCB0aGlzLnRpbGVTZWxlY3QgfHwgdGhpcy5pZGxlX3RpbGVfc2VsZWN0KSkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLnRpbGVzX2lkbGUubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGlmICghdClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBlIGluIHRoaXMudGlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLnRpbGVzW2VdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobyAmJiBOdW1iZXIoZSkgIT0gby50aWxlX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRcbiAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgX2JhZ01nci5kZWZhdWx0Lmlucy5nZXRJdGVtQ291bnQoXCJwdXp6bGVfbm90aWNlXCIpID4gMCA/XG4gICAgICAgICAgICAgICAgKF9iYWdNZ3IuZGVmYXVsdC5pbnMudXNlSXRlbShcInB1enpsZV9ub3RpY2VcIiksIHRoaXMuX2RvSGludCgpKSA6XG4gICAgICAgICAgICAgICAgX3BhbmVsTWdyLmRlZmF1bHQuaW5zLm9wZW4oXCJ1aS91aV9nZXRJdGVtXCIsIHsgaXRlbUlkOiBcInB1enpsZV9ub3RpY2VcIiB9KSA6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkJ0bkdldCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5fZG9IaW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIgZSBpbiAoKHRoaXMuaXNfaGludGluZyA9ICExKSwgdGhpcy50aWxlcykpXG4gICAgICAgICAgICBpZiAoKGwgPSB0aGlzLnRpbGVzW2VdKSkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gTnVtYmVyKGUpO1xuICAgICAgICAgICAgICAgIGlmIChvICE9IGwudGlsZV9pZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVQb3NJZCA9IG87XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVNlbGVjdCA9IGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1B1dFBvc0lkID0gbC50aWxlX2lkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpbGVTZWxlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ190aWxlID0gdGhpcy5jRHJhZ1RpbGUodGhpcy50aWxlU2VsZWN0LnRpbGVfaWQpO1xuICAgICAgICAgICAgdGhpcy5kcmFnX3RpbGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgdGhpcy5zZXRUaWxlVmlzKHRoaXMudGlsZVNlbGVjdCwgITEpO1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLnRpbGVzTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy50aWxlX3BbdGhpcy50aWxlUG9zSWRdKTtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG4pO1xuICAgICAgICAgICAgdmFyIHIgPSB0aGlzLnRpbGVzTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy50aWxlX3BbdGhpcy5kcmFnUHV0UG9zSWRdKTtcbiAgICAgICAgICAgIHZhciBhID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHIpO1xuICAgICAgICAgICAgdGhpcy5kcmFnX3RpbGUucG9zaXRpb24gPSBjYy52MyhpLngsIGkueSk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmRyYWdfdGlsZSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHg6IGEueCwgeTogYS55IH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHQucHV0RHJhZ1RpbGUoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgcmV0dXJuIHZvaWQodGhpcy5pc19oaW50aW5nID0gITApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHMgPSAwLCBjID0gdGhpcy50aWxlc19pZGxlOyBzIDwgYy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgdmFyIGwgPSBjW3NdO1xuICAgICAgICAgICAgdGhpcy5pZGxlX3RpbGVfc2VsZWN0ID0gbDtcbiAgICAgICAgICAgIHZhciB1ID0gTnVtYmVyKGwubmFtZSk7XG4gICAgICAgICAgICB0aGlzLmRyYWdQdXRQb3NJZCA9IHU7XG4gICAgICAgICAgICB0aGlzLmRyYWdfdGlsZSA9IHRoaXMuY0RyYWdUaWxlKHUpO1xuICAgICAgICAgICAgdGhpcy5kcmFnX3RpbGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgaSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pKTtcbiAgICAgICAgICAgIGwuYWN0aXZlIHx8ICgoaS54ID0gdGhpcy5zY3JvbGxWaWV3Lm5vZGUucGFyZW50LngpLCAoaS55ID0gdGhpcy5zY3JvbGxWaWV3Lm5vZGUucGFyZW50LnkpKTtcbiAgICAgICAgICAgIGEgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy50aWxlc05vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMudGlsZV9wW3RoaXMuZHJhZ1B1dFBvc0lkXSkpO1xuICAgICAgICAgICAgdGhpcy5kcmFnX3RpbGUuc2V0UG9zaXRpb24oaS54LCBpLnkpO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5kcmFnX3RpbGUpXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiBhLngsIHk6IGEueSB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0LnB1dERyYWdUaWxlKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuaXNfaGludGluZyA9ICEwO1xuICAgICAgICAgICAgbC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRDYW5IaW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIHQgaW4gdGhpcy50aWxlcykge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnRpbGVzW3RdO1xuICAgICAgICAgICAgaWYgKGUgJiYgTnVtYmVyKHQpICE9IGUudGlsZV9pZCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmFkZFRpbGVTaGFkb3cgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc2hhZG93MDtcbiAgICAgICAgZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC01KTtcbiAgICAgICAgZS5wYXJlbnQgPSB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheVRydWVBbmkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIF9mZXN0aXZhbE1nci5kZWZhdWx0Lmlucy51cGRQcm8oX2Zlc3RpdmFsTWdyLmZlc1Rhc2tLZXkuZmluaXNoUHV6emxlLCAxKTtcbiAgICAgICAgX3NvdW5kLmRlZmF1bHQuaW5zLnBsYXkoX3NvdW5kLmRlZmF1bHQuRklOSVNIX1BVWlpMRSk7XG4gICAgICAgIDEgPT09IHRoaXMudGhlbWVUeXBlID9cbiAgICAgICAgICAgIF9pZHgucGxhdGZvcm0ucmVwb3J0RXZlbnQoX2lkeC5FUmVwRXZ0LnBhcnRKaWdzYXcpIDpcbiAgICAgICAgICAgIDIgPT09IHRoaXMudGhlbWVUeXBlICYmIF9pZHgucGxhdGZvcm0ucmVwb3J0RXZlbnQoX2lkeC5FUmVwRXZ0LmZlc0ppZ051bSk7XG4gICAgICAgIHZhciBlID0gdGhpcy5yaW5nTm9kZTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLnRpbGVzTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodCk7XG4gICAgICAgIHZhciBuID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG8pO1xuICAgICAgICBlLmFjdGl2ZSA9ICEwO1xuICAgICAgICBlLnNldFBvc2l0aW9uKG4pO1xuICAgICAgICBlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgY2MudHdlZW4oZSlcbiAgICAgICAgICAgIC5zZXQoeyBzY2FsZTogMC44OCwgb3BhY2l0eTogMjU1IH0pXG4gICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjIsIG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGUuYWN0aXZlID0gITE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja0FsbFIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWxsUmlnaHQgJiYgKCh0aGlzLmlzQWxsUmlnaHQgPSB0aGlzLklzSmlnc2F3Q29tcGxldGVkKHRoaXMudGhlbWVfaWQpKSwgdGhpcy5pc0FsbFJpZ2h0KSkge1xuICAgICAgICAgICAgdGhpcy50aWxlc05vZGUuYWN0aXZlID0gITE7XG4gICAgICAgICAgICB0aGlzLmZpbkltZy5ub2RlLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgdGhpcy5maW5JbWcubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZmluSW1nLm5vZGUpLnRvKDEsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcubm9kZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIHRoaXMubWVudU5vZGUuYWN0aXZlID0gITE7XG4gICAgICAgICAgICB0aGlzLmxvY2tOb2RlLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgdGhpcy5idG5SZXNldC5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgIHRoaXMuYmdOb2RlLnkgPSAzMjY7XG4gICAgICAgICAgICB0aGlzLmJnTm9kZS5oZWlnaHQgPSA3OTA7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMudGhlbWVfaWQgKyBcIlwiO1xuICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5yZXBvcnRFdmVudChfaWR4LkVSZXBFdnQuZmluaXNoSG9sZUppZ3NhdywgeyBpZHg6IHQgfSk7XG4gICAgICAgICAgICB2YXIgZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIDEgPT09IHRoaXMudGhlbWVUeXBlID8gKGUgPSBfamlnc2F3TWdyLmRlZmF1bHQuaW5zKSA6IDIgPT09IHRoaXMudGhlbWVUeXBlICYmIChlID0gX25ld0ppZ01nci5kZWZhdWx0Lmlucyk7XG4gICAgICAgICAgICBlLnNldEZpbmZpc2hKaWdzYXcodGhpcy50aGVtZV9pZCk7XG4gICAgICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX2ppZ0ZpbmlzaFwiLCB7IHRoZW1lSWQ6IHRoaXMudGhlbWVfaWQsIHRoZW1lVHlwZTogdGhpcy50aGVtZVR5cGUgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLklzSmlnc2F3Q29tcGxldGVkID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgMSA9PT0gdGhpcy50aGVtZVR5cGUgPyAoZSA9IF9qaWdzYXdNZ3IuZGVmYXVsdC5pbnMpIDogMiA9PT0gdGhpcy50aGVtZVR5cGUgJiYgKGUgPSBfbmV3SmlnTWdyLmRlZmF1bHQuaW5zKTtcbiAgICAgICAgdmFyIG8gPSBlLmNoZWNrSGFzRmluKHQpO1xuICAgICAgICBpZiAobykgcmV0dXJuIG87XG4gICAgICAgIHZhciBuID0gZS5nZXRKaWdzYXdUaWxlc0J5SWR4KHQpO1xuICAgICAgICBpZiAoMTA1ID09IG4ubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgciA9IG47IGkgPCByLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSByW2ldO1xuICAgICAgICAgICAgICAgIGlmIChhWzBdICE9IGFbMV0pIHJldHVybiAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5TaG93R3VpZGUgPSBmdW5jdGlvbigpIHt9O1xuICAgIGUucHJvdG90eXBlLnJlR3VpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5ndWlkZUYgJiYgKHRoaXMuZ3VpZGVGLmRlc3Ryb3koKSwgKHRoaXMuZ3VpZGVGID0gbnVsbCkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25CdG5CZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoX2JhZ01nci5kZWZhdWx0Lmlucy5nZXRJdGVtQ291bnQoXCJwdXp6bGVfYmFja2dyb3VuZFwiKSA+IDApIHtcbiAgICAgICAgICAgIF9iYWdNZ3IuZGVmYXVsdC5pbnMudXNlSXRlbShcInB1enpsZV9iYWNrZ3JvdW5kXCIpO1xuICAgICAgICAgICAgdmFyIHQgPSBfdGltZS5kZWZhdWx0Lmlucy5zZXJ2ZXJUaW1lIHx8IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxZTMpO1xuICAgICAgICAgICAgdGhpcy5zaG93QmdFbmRUaW1lID0gdGhpcy5kZWZhdWx0U2hvd1RpbWUgKyB0O1xuICAgICAgICAgICAgMSA9PT0gdGhpcy50aGVtZVR5cGUgP1xuICAgICAgICAgICAgICAgIF9wSW5mby5kZWZhdWx0Lmlucy5zZXRKaWdzYXdCZ0VuZFRpbWVzQnlJZHgodGhpcy50aGVtZV9pZCwgdGhpcy5zaG93QmdFbmRUaW1lKSA6XG4gICAgICAgICAgICAgICAgMiA9PT0gdGhpcy50aGVtZVR5cGUgJiZcbiAgICAgICAgICAgICAgICBfcEluZm8uZGVmYXVsdC5pbnMuc2V0TmV3SmlnQmdFbmRUaW1lc0J5SWR4KHRoaXMudGhlbWVfaWQsIHRoaXMuc2hvd0JnRW5kVGltZSk7XG4gICAgICAgICAgICB0aGlzLmJnQnRuLmVuYWJsZWQgPSAhMTtcbiAgICAgICAgICAgIHRoaXMuZmluSW1nLm5vZGUuYWN0aXZlID0gITA7XG4gICAgICAgICAgICB0aGlzLmxvY2tOb2RlLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgdGhpcy50aW1lQWQuYWN0aXZlID0gITE7XG4gICAgICAgICAgICB0aGlzLnRpbWVMYi5ub2RlLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmJlZ2luU2hvdywgMSk7XG4gICAgICAgIH0gZWxzZSBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX2dldEl0ZW1cIiwgeyBpdGVtSWQ6IFwicHV6emxlX2JhY2tncm91bmRcIiB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmJlZ2luU2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IF90aW1lLmRlZmF1bHQuaW5zLnNlcnZlclRpbWUgfHwgTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDFlMyk7XG4gICAgICAgIHZhciBlID0gdGhpcy5zaG93QmdFbmRUaW1lIC0gdDtcbiAgICAgICAgaWYgKGUgPCAwKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAodGhpcy5maW5JbWcubm9kZS5hY3RpdmUgPSAhMSksXG4gICAgICAgICAgICAgICAgKHRoaXMubG9ja05vZGUuYWN0aXZlID0gITEpLFxuICAgICAgICAgICAgICAgIChlID0gMzApLFxuICAgICAgICAgICAgICAgICh0aGlzLmJnQnRuLmVuYWJsZWQgPSAhMCksXG4gICAgICAgICAgICAgICAgKHRoaXMudGltZUxiLnN0cmluZyA9IHRoaXMuZGVmYXVsdFNob3dUaW1lICsgXCJzXCIpLFxuICAgICAgICAgICAgICAgICh0aGlzLnRpbWVMYi5ub2RlLmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAodGhpcy50aW1lQWQuYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgIHZvaWQgdGhpcy51bnNjaGVkdWxlKHRoaXMuYmVnaW5TaG93KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy50aW1lTGIuc3RyaW5nID0gZSArIFwic1wiO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25CdG5HZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgMSA9PT0gdGhpcy50aGVtZVR5cGUgP1xuICAgICAgICAgICAgX3BhbmVsTWdyLmRlZmF1bHQuaW5zLm9wZW4oXCJ1aS91aV9nZXRJdGVtXCIsIHsgaXRlbUlkOiBcInB1enpsZV9waWVjZXNcIiB9KSA6XG4gICAgICAgICAgICAyID09PSB0aGlzLnRoZW1lVHlwZSAmJiBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX2dldEl0ZW1cIiwgeyBpdGVtSWQ6IFwibmV3WWVhcl9waWVjZXNcIiB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uQnRuTGIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy50aWxlTGJOb2RlLmFjdGl2ZSA9ICF0aGlzLnRpbGVMYk5vZGUuYWN0aXZlO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25CdG5SZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX2ppZ1RpcFwiLCB7IG9rQ2I6IHRoaXMucmVzZXRJdGVtLmJpbmQodGhpcykgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZXNldEl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIDEgPT09IHRoaXMudGhlbWVUeXBlID8gKHQgPSBfamlnc2F3TWdyLmRlZmF1bHQuaW5zKSA6IDIgPT09IHRoaXMudGhlbWVUeXBlICYmICh0ID0gX25ld0ppZ01nci5kZWZhdWx0Lmlucyk7XG4gICAgICAgIHQucmVzZXRKaWdCeUlkeCh0aGlzLnRoZW1lX2lkKTtcbiAgICAgICAgdGhpcy5pc19pbml0IHx8ICh0aGlzLmluaXRUaWxlUG9zKCksIHRoaXMuaW5pdEFyb3VuZFRpbGVzKCksICh0aGlzLmlzX2luaXQgPSAhMCkpO1xuICAgICAgICB0aGlzLmNsZWFyVGlsZXMoKTtcbiAgICAgICAgdGhpcy5pc0FsbFJpZ2h0ID0gITE7XG4gICAgICAgIHRoaXMudGlsZXNOb2RlLmFjdGl2ZSA9ICEwO1xuICAgICAgICB0aGlzLmppZ1RpbGVzID0gdC5nZXRKaWdzYXdUaWxlc0J5SWR4KHRoaXMudGhlbWVfaWQpO1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLnRpbGVzX2lkbGUubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5SZWZyZXNoSWRsZUl0ZW1zKCEwKTtcbiAgICAgICAgdGhpcy5sb2NrSW1nLm5vZGUuYWN0aXZlID0gITE7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5ub2RlLmFjdGl2ZSA9ICEwO1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcubm9kZS5wYXJlbnQuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMubWVudU5vZGUuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMubG9ja05vZGUuYWN0aXZlID0gITE7XG4gICAgICAgIHRoaXMuYnRuUmVzZXQuYWN0aXZlID0gITE7XG4gICAgICAgIHRoaXMuZmluSW1nLm5vZGUuYWN0aXZlID0gITE7XG4gICAgICAgIHRoaXMuYmdOb2RlLnkgPSAzOTY7XG4gICAgICAgIHRoaXMuYmdOb2RlLmhlaWdodCA9IDk2MDtcbiAgICAgICAgdGhpcy51cEl0ZW1OdW0oKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsZWFyVGlsZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgdCBpbiB0aGlzLnRpbGVzKSB0aGlzLmRlbFRpbGUodCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5tb2RKaWdUaWxlID0gZnVuY3Rpb24odCwgZSwgbywgbikge1xuICAgICAgICBpZiAoKHZvaWQgMCA9PT0gbiAmJiAobiA9ICEwKSwgdm9pZCAwID09PSBuICYmIChuID0gITApLCAhKGUgPCAwIHx8IGUgPj0gMTA1IHx8IG8gPCAtMSB8fCBvID49IDEwNSkpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5qaWdUaWxlcywgciA9IDAsIHMgPSBpOyByIDwgcy5sZW5ndGg7IHIrKylcbiAgICAgICAgICAgICAgICBpZiAoKHUgPSBzW3JdKVsxXSA9PSBvICYmIC0xICE9IG8pIHtcbiAgICAgICAgICAgICAgICAgICAgbyA9IC0xO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMCwgbCA9IGk7IGMgPCBsLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHU7XG4gICAgICAgICAgICAgICAgaWYgKCh1ID0gbFtjXSlbMF0gPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICB1WzFdID0gbztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICBfZXZ0cy5kZWZhdWx0Lm9wRS5lbWl0KHsgYWN0aW9uOiBfZXZ0cy5kZWZhdWx0LlVQRF9NQUlOX1JFRCB9KTtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAxID09PSB0aGlzLnRoZW1lVHlwZSA/XG4gICAgICAgICAgICAgICAgICAgIChwID0gX2ppZ3Nhd01nci5kZWZhdWx0LmlucykgOlxuICAgICAgICAgICAgICAgICAgICAyID09PSB0aGlzLnRoZW1lVHlwZSAmJiAocCA9IF9uZXdKaWdNZ3IuZGVmYXVsdC5pbnMpO1xuICAgICAgICAgICAgICAgIHAuc2V0Smlnc2F3VGlsZXNCeUlkeCh0aGlzLnRoZW1lX2lkLCB0aGlzLmppZ1RpbGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIF9ldnRzLmRlZmF1bHQub3BFLm9mZih0aGlzLmV2ZW50RnVuYyk7XG4gICAgICAgIHRoaXMuZXZlbnRGdW5jID0gbnVsbDtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJyaW5nTm9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuUHJlZmFiKV0sIGUucHJvdG90eXBlLCBcInRpbGVQcmVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKGNjLlNwcml0ZUZyYW1lKV0sIGUucHJvdG90eXBlLCBcInNoYWRvdzBcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwidGlsZXNOb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcIm1lbnVOb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5TY3JvbGxWaWV3KV0sIGUucHJvdG90eXBlLCBcInNjcm9sbFZpZXdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKGNjLlNwcml0ZSldLCBlLnByb3RvdHlwZSwgXCJmaW5JbWdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiZHJhZ1RhZ1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJsb2NrTm9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwidGltZUxiXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5CdXR0b24pXSwgZS5wcm90b3R5cGUsIFwiYmdCdG5cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcImdldExiXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcInRpbWVBZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuU3ByaXRlKV0sIGUucHJvdG90eXBlLCBcImxvY2tJbWdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwidGlsZUxiTm9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJjZWxsTm9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuU3ByaXRlRnJhbWUpXSwgZS5wcm90b3R5cGUsIFwiY2VsbFNwclwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwiaGludE51bVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwiYmdOdW1cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiYmdOb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5MYWJlbCldLCBlLnByb3RvdHlwZSwgXCJ0aXBMYlwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJiZ0J0bk5vZGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKGNjLlNwcml0ZSldLCBlLnByb3RvdHlwZSwgXCJnZXRQaWVjZVNwXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImJ0blJlc2V0XCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW0ldLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBrOyJdfQ==