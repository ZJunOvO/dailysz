"use strict";
cc._RF.push(module, '14ce18JY+pOW5bs9htHgdMC', 'page_level');
// scripts/page_level.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _res = require("res");

var _cfgMgr = require("cfgMgr");

var _lang = require("lang");

var _global = require("global");

var _festivalMgr = require("festivalMgr");

var _levelMgr = require("levelMgr");

var _panelMgr = require("panelMgr");

var _tipMgr = require("tipMgr");

var _pInfo = require("pInfo");

var _levelItem = require("levelItem");

var m = cc._decorator;
var v = m.ccclass;
var _ = m.property;

var b = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.bg = null;
    e.content = null;
    e.levelItemPrefab = null;
    e.lockedSp = null;
    e.unlockSp = null;
    e.startBtnLbl = null;
    e.jigsawPfb = null;
    e.bgSpr = null;
    e.startNode = null;
    e.startNodeGray = null;
    e.chaLb = null;
    e.secLb = null;
    e.secPro = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = this;

    _res["default"].ins.getBundleByString("resSps").then(function (e) {
      var o = _global["default"].padScale ? "ipad/" : "";
      e.load("pages/page_level/" + o + "bg" + _levelMgr["default"].ins.getBgId(), cc.SpriteFrame, function (e, o) {
        t.node && t.node.isValid && !e && (t.bg.spriteFrame = o);
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('resSps')", t);
    });

    _global["default"].padScale && (this.bg.node.width = 1080);
    this.halfHeight = cc.view.getVisibleSize().height / 2;
    this.upChapter();
    this.checkStartBtn();
    this.initScrollView();
    this.initLvl();

    _evts["default"].opE.on(this.onOperTap.bind(this));

    this.onE();
  };

  e.prototype.start = function () {
    var t = this;
    _global["default"].padScale && this.scheduleOnce(function () {
      var e = (cc.view.getVisibleSize().width - 720) / 2;
      t.chaLb.node.parent.x -= e;
    });
  };

  e.prototype.upChapter = function () {
    var t = _pInfo["default"].ins.getPuzzleLvl();

    var e = Math.ceil(t / 54);
    this.chaLb.string = "第" + e + "章";
    var o = t - 54 * (e - 1) - 1;
    _global["default"].levelDone && (o = 54);
    this.secLb.string = o + "/54";
    var n = o / 54;
    this.secPro.fillRange = n;
  };

  e.prototype.checkStartBtn = function () {
    var t = _pInfo["default"].ins.isMianLocked();

    this.startNodeGray.active = t;
    this.startNode.active = !t;
    _global["default"].levelDone ? this.startBtnLbl.node.parent.active = !1 : this.startBtnLbl.node.parent.active = !0;
  };

  e.prototype.initScrollView = function () {
    for (var t = Math.floor, e = cc.instantiate, o = [45, -57, -160, -147, -113, 18, 37, -36, -102, 14, 55, 88, 12, -52], n = [35, 110, 186, 288, 391, 423, 545, 648, 746, 806, 911, 1014, 1093, 1188], i = _levelMgr["default"].ins.getPuzzleLvlCount(), r = this.levelItemPrefab, a = this.lockedSp, s = this.unlockSp, c = this.content, l = (_pInfo["default"].ins.getPuzzleLvl() - 1) % i, p = _global["default"].levelDone, h = 0, f = 5; h < i; h++, f++) {
      14 == f && (f = 0);
      var m = t((h + 5) / 14);
      var v = o[f];

      var _ = n[f] + 1280 * m;

      var b = e(r);
      b.name = "level_" + (h + 1);
      b.setParent(c);
      b.setPosition(v, _);
      b.active = !1;
      var w = b.getComponent(_levelItem["default"]);
      w.setLvlLbl(h + 1 + "");
      w.sp.spriteFrame = h < l || p ? s : a; // 💝 允许点击任何已解锁的关卡

      var levelNumber = h + 1;
      var isUnlocked = h < l || p;

      if (isUnlocked) {
        // 为已解锁关卡添加点击事件处理
        b.off('click');
        b.on('click', function () {
          console.log('🎯 选择关卡:', levelNumber); // 设置当前要玩的关卡

          _global["default"].selectedLevel = levelNumber; // 触发开始游戏

          this.onStart.call(this);
        }.bind(this)); // 确保有Button组件用于点击

        var buttonComp = b.getComponent(cc.Button);

        if (!buttonComp) {
          buttonComp = b.addComponent(cc.Button);
          buttonComp.transition = cc.Button.Transition.SCALE;
          buttonComp.zoomScale = 0.9;
        }
      }

      l !== h || p || cc.tween(b).sequence(cc.tween().to(1, {
        scale: 1.1
      }), cc.tween().to(1, {
        scale: 0.9
      })).repeatForever().start();
      (h + 1) % 9 == 0 && this.addJigsaw(v, _, h, l);
    }
  };

  e.prototype.initLvl = function () {
    var t = _levelMgr["default"].ins.getPuzzleLvlCount();

    var e = (_pInfo["default"].ins.getPuzzleLvl() - 1) % t;
    this.startBtnLbl.string = "-" + _levelMgr["default"].ins.getLevelCost();
    var o = this.content;
    var n = 0;

    if (0 != e) {
      var i = o.children;
      var r = i[1].position.y;
      n = i[e].position.y - r;
    }

    n = (n = -this.halfHeight - n) < -4980 ? -4980 : n;
    o.setPosition(0, n);
    this.onScrollForItemVis();
  };

  e.prototype.onScrollForItemVis = function () {
    for (var t = this.content, e = t.position.y, o = this.halfHeight, n = t.children, i = 1, r = n.length; i < r; i++) {
      var a = n[i];
      var s = a.position.y + e;
      a.active = -o < s && s < o;
    }

    for (var c = this.content.children[0].children, l = (i = 0, c.length); i < l; i++) {
      var u = c[i];
      s = u.position.y + e;
      u.active = -o < s && s < o;
    }
  };

  e.prototype.onStart = function () {
    if (_pInfo["default"].ins.isMianLocked()) {
      var t = _cfgMgr["default"].serverCfg.lock_rules.main_line_lock.main_line_val;

      _tipMgr["default"].ins.showTip(_lang.lang[30001].format(t));
    } else {
      var e = _levelMgr["default"].ins.getLevelCost();

      _pInfo["default"].ins.getPower() < e ? _panelMgr["default"].ins.open("ui/ui_getRes", {
        itemId: "times"
      }) : this.startSelectedLevel();
    }
  }; // 💝 新增：开始选择的关卡


  e.prototype.startSelectedLevel = function () {
    // 如果有选择的关卡，设置为当前关卡
    if (_global["default"].selectedLevel) {
      console.log('🚀 开始选择的关卡:', _global["default"].selectedLevel); // 临时保存原始关卡进度

      if (!_global["default"].originalLevel) {
        _global["default"].originalLevel = _pInfo["default"].ins.getPuzzleLvl();
      } // 设置选择的关卡为当前关卡


      _pInfo["default"].ins.setPuzzleLvl(_global["default"].selectedLevel); // 清除选择的关卡


      _global["default"].selectedLevel = null;
    } // 继续原来的游戏开始流程


    if (_global["default"].levelDone) {
      _panelMgr["default"].ins.open("ui/ui_selectMode", null);
    } else {
      _panelMgr["default"].ins.open("ui/ui_lvInfo", null);
    }
  };

  e.prototype.addJigsaw = function (t, e, o, n) {
    var i = cc.instantiate(this.jigsawPfb);
    var r = this.content.children[0].childrenCount;
    var a = [218, -206, 132, -172, 194, 115][r];
    var s = [1188, 1838, 2835, 3532, 4548, 5364][r];
    i.off("click", this.onBtnChapter, this);
    i.on("click", this.onBtnChapter, this);
    i.setPosition(a, s);
    i.active = !1;
    i.setParent(this.content.children[0]);
    i.name = "jigsaw_" + this.content.children[0].childrenCount;
    var c;
    var l = i.children[1].getComponent(cc.Sprite);
    var p = Math.ceil((o + 1) / 9);

    _levelMgr["default"].ins.getJigsawIcon(p).then(function (t) {
      t && (l.spriteFrame = t);
    })["catch"](function () {
      console.error("getJigsawIconErr");
    });

    0 == n || "number" == typeof _global["default"].puzzlv && (_global["default"].puzzlv = _global["default"].puzzlv % _levelMgr["default"].ins.getPuzzleLvlCount(), n = _global["default"].puzzlv);
    c = _global["default"].levelDone ? 9 : n >= 9 * p ? 9 : n > 9 * p - 9 ? n % 9 : 0;
    l.getMaterial(0).setProperty("height", c);
  };

  e.prototype.onBtnChapter = function () {
    _panelMgr["default"].ins.open("ui/ui_chapter", null);
  };

  e.prototype.onE = function () {
    var t = _pInfo["default"].ins.getPuzzleLvl();

    this.checkShowFinger(t <= 3);
  };

  e.prototype.onD = function () {
    this.checkShowFinger(!1);
  };

  e.prototype.checkShowFinger = function (t) {
    var e = this;
    t ? this._fingerNode ? this._fingerNode.active = !0 : _res["default"].ins.lPre("prefab/finger").then(function (t) {
      e._fingerNode = cc.instantiate(t);
      e.node.getChildByName("startBtn").addChild(e._fingerNode);
      var o = cc.v3(80, 0);

      e._fingerNode.setPosition(o);

      e._fingerNode.active = !0;
    })["catch"](function () {
      console.error("getPrefabErr");
    }) : this._fingerNode && this._fingerNode.active && (this._fingerNode.active = !1);
  };

  e.prototype.onOperTap = function (t) {
    var e = null == t ? void 0 : t.action;
    if (e) switch (e) {
      case _evts["default"].UPDJIGSAW:
        this.checkJigsaw();
        break;

      case _evts["default"].FINISH_PUZZLELV:
        this.checkAndPop();
        break;

      case _evts["default"].POP_FESTIVAL:
        this.popFestival();
        break;

      case _evts["default"].UPDATA_LEVEL_TMP:
        this.updateLvlTmp();
    }
  };

  e.prototype.updateLvlTmp = function () {
    _global["default"].levelTmp;
  };

  e.prototype.checkAndPop = function () {
    this.checkJigsaw();
    this.scheduleOnce(function () {
      _global["default"].levelDone ? _panelMgr["default"].ins.open("ui/ui_selectMode", null) : 1 == _pInfo["default"].ins.getPuzzleLvl() % 54 ? _panelMgr["default"].ins.open("ui/ui_chapterDone", {}) : _panelMgr["default"].ins.open("ui/ui_lvInfo", {
        isShow: !0
      });
    }, 0);
  };

  e.prototype.popFestival = function () {
    !_festivalMgr["default"].ins.isFesEnd() && _festivalMgr["default"].ins.fesTaskDatas && _panelMgr["default"].ins.open("ui/ui_festival", null);
  };

  e.prototype.checkJigsaw = function () {
    if ("number" == typeof _global["default"].puzzlv) {
      var t = (_pInfo["default"].ins.getPuzzleLvl() - 1) % _levelMgr["default"].ins.getPuzzleLvlCount();

      if (t) {
        if (_global["default"].puzzlv != t || 1 == t) {
          var e = this.content.getChildByName("level_" + t);
          var o = Math.ceil(t / 9);
          var n = this.content.children[0].getChildByName("jigsaw_" + o);
          var i = cc.instantiate(e);
          i.setParent(e.parent);
          i.setPosition(e.position);
          var r = cc.v2(i.x, i.y);
          var a = cc.v2(n.x, n.y);
          var s = t % 9 || 9;
          var c = Math.floor((s - 1) / 3);
          var l = (s - 1) % 3;
          a.x += (l - 1) * n.width * n.scale / 3;
          a.y += (1 - c) * n.width * n.scale / 3;
          var p = a.add(r).multiplyScalar(0.7);
          cc.tween(i).bezierTo(1, r, p, a).call(function () {
            i.active = !1;
            setTimeout(function () {
              i.destroy();
            }, 100);
            n.children[1].getComponent(cc.Sprite).getMaterial(0).setProperty("height", s);
          }).start();
        }

        _global["default"].puzzlv = null;
      }
    }
  };

  e.prototype.onDestroy = function () {
    _evts["default"].opE.off(this.onOperTap.bind(this));

    this.onD();

    for (var t = _levelMgr["default"].ins.getPuzzleLvlCount(), e = 0, o = 5; e < t; e++, o++) {
      (e + 1) % 9 == 0 && this.releaseJigsaw(e);
    }

    cc.assetManager.releaseAsset(this.bgSpr.spriteFrame);
  };

  e.prototype.releaseJigsaw = function (t) {
    var e = Math.ceil((t + 1) / 9);

    _levelMgr["default"].ins.releaseJigsawIcon(e);
  };

  e.prototype.onBtnFes = function () {
    _panelMgr["default"].ins.open("ui/ui_festival", null);
  };

  __decorate([_(cc.Sprite)], e.prototype, "bg", void 0);

  __decorate([_(cc.Node)], e.prototype, "content", void 0);

  __decorate([_(cc.Prefab)], e.prototype, "levelItemPrefab", void 0);

  __decorate([_(cc.SpriteFrame)], e.prototype, "lockedSp", void 0);

  __decorate([_(cc.SpriteFrame)], e.prototype, "unlockSp", void 0);

  __decorate([_(cc.Label)], e.prototype, "startBtnLbl", void 0);

  __decorate([_(cc.Prefab)], e.prototype, "jigsawPfb", void 0);

  __decorate([_(cc.Sprite)], e.prototype, "bgSpr", void 0);

  __decorate([_(cc.Node)], e.prototype, "startNode", void 0);

  __decorate([_(cc.Node)], e.prototype, "startNodeGray", void 0);

  __decorate([_(cc.Label)], e.prototype, "chaLb", void 0);

  __decorate([_(cc.Label)], e.prototype, "secLb", void 0);

  __decorate([_(cc.Sprite)], e.prototype, "secPro", void 0);

  return __decorate([v], e);
}(cc.Component);

exports["default"] = b;

cc._RF.pop();