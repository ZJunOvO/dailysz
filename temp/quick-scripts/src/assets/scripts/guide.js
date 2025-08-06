"use strict";
cc._RF.push(module, 'a0385aQUj5Mn4U3i4O115Wr', 'guide');
// scripts/guide.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _idx = require("idx");

var _res = require("res");

var _sound = require("sound");

var _vb = require("vb");

var _grid = require("grid");

var _global = require("global");

var _pInfo = require("pInfo");

var _game = require("game");

var f = cc._decorator;
var g = f.ccclass;
var y = f.property;
var m = cc.color(252, 254, 94);
var v = cc.color(169, 109, 52, 255);
var _ = {
  2e4: "数字会告诉你一行中有多少方块需要涂上颜色。试试吧！",
  20001: "太棒了！如果有多个数字，那么每段涂色的方块中间至少会有一个空格。",
  20002: "顺序也很重要。涂色的方块的个数的顺序，需要同数字的顺序一致。",
  20003: "恭喜！您已完成教程！让我们去练习一下吧！"
};

var b = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.top = null;
    e.fadeNode = null;
    e.fadeAni = null;
    e.dialogAni = null;
    e.mapAni = null;
    e.hintsLbl = [];
    e.grids = [];
    e.contentLbl = null;
    e.glows = [];
    e.arrows = [];
    e.arrowTops = [];
    e.finger = null;
    e.soundIdx = 1;
    e.emptyArr = [];
    e.steps = [{
      data: [1, 1, 1, 1, 1],
      hint: [5],
      x: [231],
      width: [472],
      content: _[2e4]
    }, {
      data: [1, 1, 0, 1, 1],
      hint: [2, 2],
      x: [99, 363],
      width: [208, 208],
      content: _[20001]
    }, {
      data: [1, 0, 1, 1, 1],
      hint: [1, 3],
      x: [55, 319],
      width: [120, 296],
      content: _[20002]
    }, {
      content: _[20003]
    }];
    e.curStep = 0;
    e.maxStep = e.steps.length - 1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = this;
    _global["default"].padScale && (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_HEIGHT), this.top.node.scale = _global["default"].padScale);

    _sound["default"].ins.playBGM();

    this.updateView(1);
    this.fadeAni.on(cc.Animation.EventType.FINISHED, this.stepDone, this);
    this.mapAni.on(cc.Animation.EventType.FINISHED, this.reCanTouch, this);
    var e = cc.Node.EventType.TOUCH_START;
    var o = cc.Node.EventType.TOUCH_MOVE;
    var n = cc.Node.EventType.TOUCH_END;
    var i = cc.Node.EventType.TOUCH_CANCEL;
    this.grids.forEach(function (r) {
      r.on(e, t.touchStart, t), r.on(o, t.touchMove, t), r.on(n, t.touchEnd, t), r.on(i, t.touchEnd, t);
    });

    _res["default"].ins.lSF("game/normal/top1", this.top);

    _res["default"].ins.getBundleByString("prefab").then(function (e) {
      e.load("skin/girl1", cc.Prefab, function (e, o) {
        if (t.node && !e && t.node.isValid) {
          var n = cc.instantiate(o);
          t.dialogAni.node.parent.addChild(n), n.setPosition(250, -251), n.setSiblingIndex(0);
          var i = t.topGirlSk = n.getComponent(sp.Skeleton);
          i.animation = _game.grilAni.idle, i.setEndListener(t.playGirlEnd.bind(t));
        }

        if (e) throw new Error(e.message);
      });
    })["catch"](function (t) {
      console.error("guide scene girl load fail", t);
    });

    this.preLoad();
  };

  e.prototype.playGirlAni = function (t) {
    t != this.curGirlAni && this.topGirlSk && (this.curGirlAni = t, this.topGirlSk.animation = t, (this.topGirlSk.loop = t == _game.grilAni.idle) && (this.curGirlAni = null));
  };

  e.prototype.playGirlEnd = function () {
    this.curGirlAni != _game.grilAni.idle && (this.curGirlAni = null, this.playGirlAni && this.playGirlAni(_game.grilAni.idle));
  };

  e.prototype.touchStart = function (t) {
    var e = t.getLocation();
    this.chg(e);
  };

  e.prototype.touchMove = function (t) {
    var e = t.getLocation();
    this.chg(e);
  };

  e.prototype.touchEnd = function () {
    this.soundIdx = 1;
  };

  e.prototype.chg = function (t) {
    var e = this;
    var o = this.grids;
    o.forEach(function (n) {
      if (n.getBoundingBoxToWorld().contains(t)) {
        var i = n.getComponent(_grid["default"]);

        if (i.isRight && i.isEmpty) {
          _vb["default"].p(_vb.VEnum3.SHORT);

          _sound["default"].ins.play("tile_note_" + e.soundIdx);

          e.soundIdx++;
          i.select(1);

          for (var r = e.hintsLbl, a = e.steps[e.curStep].hint, s = 0, p = r.length; s < p; s++) {
            var d = r[s].node;

            if (d.active && d.color.equals(m)) {
              for (var h = a[s], f = 1 == s ? a[s - 1] + 1 : 0, g = 0, y = f; y < h + f; y++) {
                var _ = o[y].getComponent(_grid["default"]);

                !_.isEmpty && _.isRight && g++;
              }

              g == h && (d.color = v);
            }
          }

          if (e.curRightCount++, e.curRightCount == e.allRightCount) {
            e.emptyArr.forEach(function (t) {
              o[t].getComponent(_grid["default"]).select(0, !0);
            });

            for (var b = 0; b < 5; b++) {
              o[b].getComponent(_grid["default"]).playHL(0.04 * b);
            }

            e.fadeNode.active = !0;
            e.fadeAni.play();
          }
        }
      }
    });
  };

  e.prototype.stepDone = function () {
    this.fadeNode.active = !1;
    this.finger.active = !1;
    this.curStep++;
    this.curStep == this.maxStep && (this.playGirlAni(_game.grilAni.happy), _pInfo["default"].ins.setGuideDone(), this.getComponent(cc.Animation).play());
    this.mapAni.play("mapHide");

    _idx.platform.reportEvent(_idx.ERepEvt.guide, {
      step: this.curStep
    });
  };

  e.prototype.updateView = function (t) {
    this.curStep = this.curStep > this.maxStep ? this.maxStep : this.curStep;
    var e = this.curStep;
    var o = this.steps[e];
    var n = o.data;
    var i = o.hint;
    var r = o.content;
    var a = o.x;
    var s = o.width;
    this.contentLbl.string = "        " + r;
    var c = this.arrows;

    if (c.forEach(function (t) {
      return t.clear();
    }), e < this.maxStep) {
      var l = this.grids;
      var p = this.emptyArr;
      p.length = 0;

      for (var d = 0, h = void 0, f = 0; f < 5; f++) {
        var g = l[f];
        var y = n[f];
        d += y;
        y || (p.push(f), h = g);
        g.setSiblingIndex(f + 2);
        var v = g.getComponent(_grid["default"]);
        v.init(y);
        v.isEmpty = !0;
        v.emptyNode.active = !0;
        v.stateNodes.forEach(function (t) {
          t.active = !1;
        });
      }

      h && h.setSiblingIndex(0);
      this.curRightCount = 0;
      this.allRightCount = d;

      for (var _ = this.glows, b = this.arrowTops, w = this.hintsLbl, S = void (f = 0), T = i.length; f < 2; f++) {
        S = 2 == e || 1 == e ? 1 - f : f;
        var I = _[f];
        var D = c[S];
        var P = b[S];
        var k = w[f];

        if (I.active = D.node.active = P.active = k.node.active = f < T) {
          k.string = i[f] + "";
          k.node.setSiblingIndex(0);
          k.node.color = m;
          I.x = P.x = a[f];
          I.width = s[f];
          var R = D.node.position;
          var N = I.position;
          D.moveTo(0, 0);
          D.quadraticCurveTo((R.x + N.x) / 2, 150, N.x, 44);
          D.stroke();
        }
      }

      this.mapAni.play("mapShow");
    }

    t || this.dialogAni.play();
    this.canTouch = !1;
  };

  e.prototype.reCanTouch = function (t, e) {
    "mapShow" == e.name ? this.canTouch = !0 : this.updateView();
  };

  e.prototype.onQuit = function () {
    _global["default"].byGuide = 1;

    _pInfo.chgScene(_pInfo.sceneType.game, {
      gameType: _pInfo.gameType.practice
    });
  };

  e.prototype.preLoad = function () {
    cc.director.preloadScene(_pInfo.sceneType.game);
  };

  __decorate([y(cc.Sprite)], e.prototype, "top", void 0);

  __decorate([y(cc.Node)], e.prototype, "fadeNode", void 0);

  __decorate([y(cc.Animation)], e.prototype, "fadeAni", void 0);

  __decorate([y(cc.Animation)], e.prototype, "dialogAni", void 0);

  __decorate([y(cc.Animation)], e.prototype, "mapAni", void 0);

  __decorate([y([cc.Label])], e.prototype, "hintsLbl", void 0);

  __decorate([y([cc.Node])], e.prototype, "grids", void 0);

  __decorate([y(cc.Label)], e.prototype, "contentLbl", void 0);

  __decorate([y([cc.Node])], e.prototype, "glows", void 0);

  __decorate([y([cc.Graphics])], e.prototype, "arrows", void 0);

  __decorate([y([cc.Node])], e.prototype, "arrowTops", void 0);

  __decorate([y(cc.Node)], e.prototype, "finger", void 0);

  return __decorate([g], e);
}(cc.Component);

exports["default"] = b;

cc._RF.pop();