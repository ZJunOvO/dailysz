
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1e2eOdqJJNRYqNOnj+M+iI', 'game');
// scripts/game.js

"use strict";

//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.grilAni = void 0;
var c;
var l;
var u;
var p;
var d;
var h;
var f;
var g;

var _com = require("com");

var _evts = require("evts");

var _idx = require("idx");

var _mySafeArea = require("mySafeArea");

var _pConst = require("pConst");

var _res = require("res");

var _sound = require("sound");

var _uData = require("uData");

var _vb = require("vb");

var _uvAni = require("uvAni");

var _cfgMgr = require("cfgMgr");

var _grid = require("grid");

var _heart = require("heart");

var _item = require("item");

var _random_notice = require("random_notice");

var _creator = require("Creator");

var _global = require("global");

var _bagMgr = require("bagMgr");

var _challengeMgr = require("challengeMgr");

var _festivalMgr = require("festivalMgr");

var _levelMgr = require("levelMgr");

var _panelMgr = require("panelMgr");

var _taskMgr = require("taskMgr");

var _pInfo = require("pInfo");

var _tipMgr = require("tipMgr");

var _banner = require("banner");

var _rewardMgr = require("rewardMgr");

var z = cc._decorator;
var H = z.ccclass;
var G = z.property;
var J = Math.floor;
var W = (cc.color(230, 234, 247), cc.color(252, 254, 94));
var q = cc.color(181, 142, 34, 255);
(d = c || (c = {}))[d.X = 0] = "X";
d[d.O = 1] = "O";
d[d.Empty = 3] = "Empty";

(function (t) {
  t[t.None = 0] = "None", t[t.HeadRow = 1] = "HeadRow", t[t.HeadCol = 2] = "HeadCol", t[t.Grid = 3] = "Grid";
})(l || (l = {}));

(function (t) {
  t[t.None = 0] = "None", t[t.Vertical = 1] = "Vertical", t[t.Horizontal = 2] = "Horizontal";
})(u || (u = {}));

(function (t) {
  t[t.None = 0] = "None", t[t.Set = 1] = "Set", t[t.Clean = 2] = "Clean";
})(p || (p = {}));

(function (t) {
  t.run = "run", t.idle = "idle", t.happy = "happy", t.sad = "sad";
})(h = exports.grilAni || (exports.grilAni = {}));

(function (t) {
  t.showBtns = "showBtns", t.hideBtns = "hideBtns", t.gameLose = "gameLose", t.gameRelife = "gameRelife", t.gameWin = "gameWin", t.gameWinFailSf = "gameWinFailSf", t.openItemSelect = "openItemSelect", t.closeItemSelect = "closeItemSelect";
})(f || (f = {}));

(function (t) {
  t.tipIn = "tipIn";
  t.tipOut = "tipOut";
})(g || (g = {}));

var K = {
  2e4: "点击显示格子内容",
  20001: "点击随机显示\n3个格子内容",
  20002: "点击显示一行\n或是一列格子内容"
};

var Y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.topSp = null;
    e.topGirlSk = null;
    e.topGooseSk = null;
    e.downSp = null;
    e.gridBgSp = null;
    e.topNode = null;
    e.downNode = null;
    e.downBeginY = 0;
    e.font4 = null;
    e.camera = null;
    e.panelAni = null;
    e.uHintSf = null;
    e.lHintSf = null;
    e.gridPrefab = null;
    e.map_node_ = null;
    e.tilesParent = null;
    e.selectMask = null;
    e.selectMaskBg = null;
    e.rowHintsParent = null;
    e.colHintsParent = null;
    e.scoreLbl = null;
    e.score = 0;
    e.useTimeLbl = null;
    e.consLbl = null;
    e.cons2Lbl = null;
    e.consBestLbl = null;
    e.rew1Lbl = null;
    e.rew2Lbl = null;
    e.threeNode = null;
    e.tenNode = null;
    e.oxTagAni = null;
    e.fadePrefab = null;
    e.patices = null;
    e.heartsPatic = null;
    e.hearts = [];
    e.heartInfinity = null;
    e.tipNode = null;
    e.tipLabel = null;
    e.tipAni = null;
    e.winAniNode = null;
    e.winCircleMask = null;
    e.winSpParent = null;
    e.winSps = null;
    e.winLight = null;
    e.singleSf = null;
    e.levelLbl = null;
    e.clockWarn = null;
    e.norClock = null;
    e.speClock = null;
    e.clockLbl = null;
    e.clockLbl2 = null;
    e.tipActNode = null;
    e.tipUnActNode = null;
    e.shareBtn = null;
    e.shareIcon = null;
    e.shareLbl = null;
    e.noticeLbl = null;
    e.noticeAni = null;
    e.random_noticeLbl = null;
    e.random_noticeAni = null;
    e.full_row_colLbl = null;
    e.full_row_colAni = null;
    e.itemSelectEff = null;
    e.itemSelectIcon = null;
    e.itemSelectLbl = null;
    e.adGetBtn = null;
    e.getBtnsp = null;
    e.rewItems = null;
    e.rewItemPre = null;
    e.stopPraNode = null;
    e.heartBgNode = null;
    e.noticePrefab = null;
    e.random_noticePrefab = null;
    e.full_row_colPrefab = null;
    e.lineW = 2;
    e.relifeTime = 3;
    e.isAllRight = !1;
    e.rows_ = 15;
    e.cols_ = 15;
    e.grid_count = 0;
    e.grids = [];
    e.baseData = null;
    e.workData = null;
    e.baseOTotal = -1;
    e.gridHeadRowVec = [];
    e.gridHeadColVec = [];
    e.rowHeadNums = [];
    e.rowHeadBegins = [];
    e.colHeadNums = [];
    e.colHeadBegins = [];
    e.fontSize = 36;
    e.gridSize = 40;
    e.gridsStartX = 0;
    e.gridTouchStart = null;
    e.touchDir = u.None;
    e.fillMode = p.None;
    e.pen = c.O;
    e.lastTouchRow = -1;
    e.lastTouchCol = -1;
    e.click_touch_ = !1;
    e.colAutoXCols = new Map();
    e.colAutoXRows = new Map();
    e.opStep = null;
    e._showResultTime = 0;
    e.heartsNum = 3;
    e.soundIdx = 1;
    e.items = [{
      icon: "notice",
      tip: K[2e4],
      count: 0,
      itemMax: -1,
      itemCur: 0
    }, {
      icon: "random_notice",
      tip: K[20001],
      count: 0,
      itemMax: -1,
      itemCur: 0
    }, {
      icon: "full_row_col",
      tip: K[20002],
      count: 0,
      itemMax: -1,
      itemCur: 0
    }];
    e.eventFunc = null;
    e.raceRefreshPop = [];
    e.selectData = {
      row: -1,
      col: -1
    };
    return e;
  }

  var o;

  __extends(e, t);

  o = e;
  Object.defineProperty(e.prototype, "canTouch", {
    get: function get() {
      return this._canTouch;
    },
    set: function set(t) {
      this._canTouch = t;
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.onLoad = function () {
    var t = this;

    if (this.byGuide = _global["default"].byGuide, delete _global["default"].byGuide, _global["default"].padScale) {
      cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_HEIGHT);
      var e = this.topSp.node;
      var o = (cc.view.getVisibleSize().width - 720) / 2;

      if (this.heartInfinity.x -= o, this.norClock.parent.x -= o, this.clockWarn.width += 2 * o, this.hearts.forEach(function (t) {
        t.node.x -= o;
      }), this.heartBgNode.x -= o, e.removeComponent(cc.Widget), this.topNode.removeComponent(cc.Widget), this.scheduleOnce(function () {
        e.y = 220;
        t.topNode.y = 0;
      }), !this.byGuide) {
        var n = this.downNode.children;
        n[0].setPosition(-252, -570);

        for (var i = 1; i < 4; i++) {
          n[i].x += 30;
        }

        n[4].children[1].active = !0;
        n[5].active = !1;
      }
    }

    _idx.platform.string() == _pConst.PFCode.Alipay && this.scheduleOnce(function () {
      t.heartInfinity.parent.y -= _mySafeArea.getSafeAreaRect().yMin, t.topSp.node.y -= _mySafeArea.getSafeAreaRect().yMin;
    });

    _sound["default"].ins.playBGM();

    this.opStep = {
      grids: [],
      row_autox_cols: new Map(),
      col_autox_rows: new Map(),
      hint_rows: [],
      hint_cols: [],
      is_row_autox_changed: !1,
      is_col_autox_changed: !1,
      is_hint_rows_changed: !1,
      is_hint_cols_changed: !1
    };
    this.panelAni.on(cc.Animation.EventType.FINISHED, this.playAniDone, this);
    this.oxTagAni.on(cc.Animation.EventType.FINISHED, this.oxAniDone, this);
    this.tipAni.on(cc.Animation.EventType.FINISHED, this.tipAniDone, this);
    this.eventFunc = this.onOperTap.bind(this);

    _evts["default"].opE.on(this.eventFunc);
  };

  e.prototype.checkLocalData = function () {
    var t;
    o.type;
    (t = new Array(this.grid_count)).fill(c.Empty);
    this.workData = t;
  };

  e.prototype.checkGuide = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      var n;
      var i;
      var r;
      var a;
      var c;
      var l;
      var u;
      var p;
      var d;
      var f;
      var g;
      var y;
      var m;
      var v = this;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            return this.byGuide ? (this.clockWarn.destroy(), this.stopPraNode.x = 0, t = this.node, e = new cc.Node("guideOthers"), this.guideSteps = [{
              yIdx: 3,
              glows: [[0, 5]],
              finger: 1,
              content: "让我们从最简单的步骤开始，找刚好可以填满的一行。填满这5格吧！"
            }, {
              none: 1,
              content: "太棒啦！"
            }, {
              xIdx: 0,
              finger: 2,
              content: "让我们先看这一列，数字与色块数目一样。我们先切换到打叉模式！"
            }, {
              xIdx: 0,
              glows: [[2, 1], [4, 1]],
              content: "现在可以把我们肯定是空格的格子打上X！"
            }, {
              xIdx: 4,
              glows: [[2, 1], [4, 1]],
              content: "太棒啦！同理，可以在这列标上两个X。"
            }, {
              yIdx: 2,
              glows: [[1, 3]],
              finger: 3,
              content: "现在我们可以很容易的确定这行的3个色块啦。快给他们上色吧！"
            }, {
              yIdx: 2,
              glows: [[1, 3]]
            }, {
              yIdx: 1,
              glows: [[0, 1], [2, 1], [4, 1]],
              content: "这行有3个1，那么在它们的中间必须有2个空白块的。\n       1+1+1+2=5。刚好占满整行啦。给他们上色吧。"
            }, {
              yIdx: 0,
              glows: [[1, 3]],
              content: "又找到3个连续的涂色块！"
            }, {
              yIdx: 4,
              glows: [[1, 1], [3, 1]],
              content: "快要完成了，把最后的格子都上色吧！"
            }], this.guideCurStep = -1, this.guideMaxStep = this.guideSteps.length - 1, [4, _res["default"].ins.lPre("prefab/game/gridGlow")]) : [3, 4];

          case 1:
            for (o = s.sent(), n = this.guideGlows = [], i = 0; i < 3; i++) {
              (r = cc.instantiate(o)).setAnchorPoint(0, 0.5), n.push(r), e.addChild(r);
            }

            return c = this, u = (l = cc).instantiate, [4, _res["default"].ins.lPre("prefab/game/npc")];

          case 2:
            return (a = c.guideNpc = u.apply(l, [s.sent()])).setPosition(380, 610), _res["default"].ins.getBundleByString("resSps").then(function (t) {
              t.load("game/girl", cc.Prefab, function (t, e) {
                if (!t && v.node && v.node.isValid) {
                  var o = cc.instantiate(e);
                  a.addChild(o);
                  o.setPosition(250, -251);
                  o.setSiblingIndex(0);
                  var n = v.topGirlSk = o.getComponent(sp.Skeleton);
                  n.animation = h.idle;
                  n.setEndListener(v.playGirlEnd.bind(v));
                }
              });
            }), p = a.getChildByName("dialog"), this.guideNpcAni = p.getComponent(cc.Animation), this.guideNpcLbl = p.getChildByName("content").getComponent(cc.Label), (d = this.guideFinger = new cc.Node("guideFinger")).setAnchorPoint(0.1, 0.91), _res["default"].ins.lSF("common/shouzhi", d.addComponent(cc.Sprite)), e.addChild(d), e.addChild(a), e.setPosition(this.map_node_.position), e.setAnchorPoint(0, 0), t.getChildByName("up").active = !1, (f = t.getChildByName("down")).children.forEach(function (t) {
              t.active = !1;
            }), this.guideFingerTogY = this.oxTagAni.node.y + f.y - this.map_node_.y, t.getChildByName("bg").getChildByName("winBg").active = !0, (g = this.guideMask = new cc.Node("guideMask")).addComponent(cc.Mask).inverted = !0, y = this.guideMaskBg = new cc.Node("mask"), m = y.addComponent(cc.Sprite), [4, _res["default"].ins.lSF("common/default_sprite_splash")];

          case 3:
            m.spriteFrame = s.sent(), y.addComponent(cc.BlockInputEvents), y.color = cc.Color.BLACK, y.opacity = 100, this.scheduleOnce(function () {
              y.setContentSize(cc.view.getVisibleSize());
            }), g.addChild(y), t.addChild(g), t.addChild(e), g.setSiblingIndex(3), this.guideCheckGrid = [], this.updateGuideStep(), s.label = 4;

          case 4:
            return [2];
        }
      });
    });
  };

  e.prototype.updateGuideStep = function () {
    var t = this;
    this.unschedule(this.updateGuideStep);
    var e = this.guideCurStep = this.guideCurStep + 1;
    var o = this.guideMask;
    var n = this.guideSteps[e];
    var i = this.guideFinger;
    var r = this.guideGlows;

    if (!n) {
      _idx.platform.reportEvent(_idx.ERepEvt.finshGuide);

      o.active = !1;
      r.forEach(function (t) {
        t.active = !1;
      });
      var a = this.guideNpc;
      a.y = a.opacity = 0;
      this.guideNpcLbl.string = "       太棒了！我们收集到了一朵美丽的花，现在前往主线继续收集其他图画吧。";
      return void this.playGirlAni(h.happy);
    }

    var s = n.content;
    var c = n.xIdx;
    var l = n.yIdx;
    var u = n.glows;
    var p = n.finger;
    var d = n.none;
    var f = this.guideMaskBg;
    if (this.oxTagAni.node.active = 2 == e || 5 == e, d) r[0].active = !1, i.active = !1, cc.Tween.stopAllByTarget(i), this.scheduleOnce(function () {
      return t.updateGuideStep();
    }, 1);else {
      var g = this.map_node_;
      var y = this.gridSize;
      var m = this.gridsStartX;
      var _ = this.guideCheckGrid;
      var b = 548;
      var w = b;
      var S = -68;
      var T = -48;
      var I = void 0 !== c;
      var D = void 0 !== l;
      if (I ? (S = m + c * y + y / 2 + g.x, b = y) : D && (T = l * y + y / 2 + g.y, w = y), o.setPosition(S, T), o.setContentSize(b, w), f.setPosition(-S, -T), u) for (var P = 0, k = u.length; P < 3; P++) {
        var R = r[P];

        if (R.active = P < k) {
          var N = u[P];
          var C = N[0];
          var O = N[1];
          var M = void 0;
          var L = void 0;
          var A = void 0;
          var E = void 0;
          I ? (M = 110, L = O * y + 30, A = m + c * y - 15, E = C * y + y / 2) : D && (L = 110, M = O * y + 30, A = m + C * y - 15, E = l * y + y / 2);
          R.setContentSize(M, L);
          R.setPosition(A, E);

          for (var x = 0; x < O; x++) {
            D ? _.push(l + "_" + (C + x)) : I && _.push(C + x + "_" + c);
          }
        }
      }

      if (p) {
        if (1 == p) {
          var B;
          E = 268;
          B = Math.abs(311) / 200;
          cc.tween(i).set({
            active: !0,
            opacity: 0,
            x: 212,
            y: E,
            scale: 1
          }).to(17 / 30, {
            opacity: 255
          }).to(B, {
            x: 523
          }).to(17 / 30, {
            opacity: 0
          }).union().repeatForever().start();
        } else E = this.guideFingerTogY, A = 2 == p ? 400 : 330, A += this.oxTagAni.node.x, cc.tween(i).set({
          active: !0,
          x: A,
          y: E,
          scale: 1,
          opacity: 255
        }).to(0.5, {
          scale: 1.2
        }).to(0.5, {
          scale: 1
        }, {
          easing: "cubicOut"
        }).union().repeatForever().start();
      } else cc.Tween.stopAllByTarget(i), i.active = !1;

      5 == e && (_.length = 0);
    }
    s && (this.guideNpcLbl.string = "       " + s, this.guideNpcAni.play());
  };

  e.prototype.onDestroy = function () {
    _idx.platform.stopVideoRecord();
  };

  e.prototype.onOperTap = function (t) {
    var e = null == t ? void 0 : t.action;
    if (e) switch (e) {
      case _evts["default"].PURCHASED:
        this.onPurchased();
        break;

      case _evts["default"].LOSEHEART:
        this.loseHeart(t.data);
        break;

      case _evts["default"].UPDATESCORE:
        this.updateScore();
        break;

      case _evts["default"].SHOWVIDEOSHARE:
        o.type == _pInfo.gameType.normal && this.shareBtn && (this.shareBtn.active = !0);
    }
  };

  e.prototype.start = function () {
    var t = this;
    this.node.on(cc.Node.EventType.TOUCH_START, this.OnTouchBegan, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.OnTouchMoved, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.OnTouchEnded, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnTouchCancelled, this);

    var e = _uData["default"].ins.getSetting();

    this.tipTog = e.tip;
    this.updateTip();
    this.downBeginY = 640 - cc.view.getVisibleSize().height / 2;
    var n;
    var i = _pInfo["default"].ins;
    var r = i.getRecordData();
    var a = o.type;

    switch (a) {
      case _pInfo.gameType.race:
        n = r.race;
        break;

      case _pInfo.gameType.challenge:
        n = r.daily;
        break;

      default:
        n = r.main;
    }

    this.recData = n;
    this.consLbl.string = "连胜: " + i.getConsWinTimes();
    this.consBestLbl.string = n.heWins + "";
    i.recordGameTimes(a);
    cc.assetManager.loadBundle("resSps", function () {
      t.initGame(); // 💝 现金奖励和菌子支持消息已集成完成
    });
  };

  e.prototype.onPurchased = function () {}; // 💝 获取关卡难度


  e.prototype.getLevelDifficulty = function (levelNumber) {
    // 根据关卡数量判断难度
    if (levelNumber <= 10) return 'beginner'; // 入门：1-10关

    if (levelNumber <= 25) return 'easy'; // 简单：11-25关  

    if (levelNumber <= 40) return 'medium'; // 中等：26-40关

    if (levelNumber <= 50) return 'hard'; // 困难：41-50关

    return 'expert'; // 专家：51关以上
  }; // 💝 强制触发现金奖励测试（调试用）


  e.prototype.forceCashReward = function () {
    try {
      console.log("🚀 强制触发现金奖励测试...");

      var currentLevel = _pInfo["default"].ins.getPuzzleLvl();

      var difficulty = this.getLevelDifficulty(currentLevel);
      console.log("当前关卡:", currentLevel, "难度:", difficulty);
      console.log("奖励前余额:", _rewardMgr["default"].getCashDisplay()); // 强制触发奖励（绕过随机概率）

      _rewardMgr["default"].addCash(Math.floor(Math.random() * 468) + 52); // 52-520分


      console.log("奖励后余额:", _rewardMgr["default"].getCashDisplay());
      console.log("✅ 强制奖励测试完成！");
    } catch (error) {
      console.log("❌ 强制奖励测试失败:", error);
    }
  }; // 💝 一键通关（调试用）


  e.prototype.oneClickWin = function () {
    try {
      console.log("🎯 一键通关开始..."); // 方法1：尝试自动填充格子

      if (this.cells && this.cells.length > 0) {
        console.log("📝 自动填充答案...");

        for (var i = 0; i < this.cells.length; i++) {
          var cell = this.cells[i];

          if (cell && cell.solution !== undefined) {
            // 设置为正确答案
            cell.userSolution = cell.solution;
            cell.state = cell.solution === 1 ? 1 : 0; // 1为填充，0为空白
            // 更新UI显示

            if (cell.node && cell.node.isValid) {
              var gridComp = cell.node.getComponent('grid');

              if (gridComp) {
                gridComp.setState(cell.state);
              }
            }
          }
        }

        console.log("✅ 答案填充完成，触发游戏胜利..."); // 手动触发胜利检测

        this.scheduleOnce(function () {
          this.IsAllRight() && this.gameWin();
        }.bind(this), 0.1);
      } else {
        console.log("❌ 未找到游戏格子数据，尝试直接触发胜利"); // 方法2：直接调用gameWin

        this.gameWin();
      }
    } catch (error) {
      console.log("❌ 一键通关失败:", error);
      console.error(error);
    }
  }; // 💝 简单的直接胜利（调试用）


  e.prototype.directWin = function () {
    console.log("🚀 直接触发游戏胜利...");

    try {
      this.gameWin();
    } catch (error) {
      console.log("❌ 直接胜利失败:", error);
    }
  }; // 💝 调试功能（供控制台或UI按钮调用）


  e.prototype.testCashReward = function () {
    console.log("💰 测试现金奖励");

    try {
      _rewardMgr["default"].onPuzzleComplete('expert', true, true);
    } catch (e) {
      console.log("现金测试失败:", e);
    }
  };

  e.prototype.testLoveMessage = function () {
    console.log("💕 测试菌子支持消息");

    _rewardMgr["default"].showLoveSupportMessage();
  };

  e.prototype.initGame = function () {
    var t;
    var e;
    var n;
    var i;
    var r;
    var c;
    return __awaiter(this, void 0, void 0, function () {
      var a;
      var l;
      var u;
      var p;
      var d;
      var f;
      var g;
      var m;

      var _;

      var b;
      var S;
      var T;
      var I;
      var k;
      var R;
      var N;
      var C;
      var L;
      var A;
      var B;
      var F;
      var V;
      var U;
      var z;
      var H;
      var G;
      var J;
      var W;
      var q;
      var K;
      var Y;
      var X;
      var Z;
      var Q;
      var $;
      var tt;
      var et;
      var ot;
      var nt;
      var it;
      var rt;
      var at;
      var st;
      var ct;
      var lt;
      var ut;
      var pt;
      var dt;
      var ht;
      var ft;
      var gt;
      var yt;
      var mt;
      var vt;

      var _t;

      var bt;
      var wt;
      var St;
      var Tt;
      var It;
      var Dt;
      var Pt;
      var kt = this;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            switch (u = "normal", d = cc.assetManager.getBundle("resSps") || cc.assetManager.getBundle("chapter"), f = o.type) {
              case _pInfo.gameType.normal:
                return [3, 1];

              case _pInfo.gameType.race:
                return [3, 2];

              case _pInfo.gameType.freedom:
                return [3, 3];

              case _pInfo.gameType.practice:
                return [3, 4];

              case _pInfo.gameType.festival:
                return [3, 5];

              case _pInfo.gameType.challenge:
                return [3, 6];
            }

            return [3, 12];

          case 1:
            return T = _levelMgr["default"].ins, (R = T.getPuzzleInfo()) && (a = R.size, l = T.getPuzzleData()), g = _pInfo["default"].ins.getPuzzleLvl(), m = (null === (n = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.more_set) || void 0 === e ? void 0 : e.protect_times) || void 0 === n ? void 0 : n.val) || 10, _ = (null === (c = null === (r = null === (i = _cfgMgr["default"].serverCfg) || void 0 === i ? void 0 : i.more_set) || void 0 === r ? void 0 : r.protect_charter) || void 0 === c ? void 0 : c.val) || 30, g <= m ? this.infinityLife = !0 : g < _ && (this.relifeTime = -1), this.getBtnsp.string = "下一关", [3, 12];

          case 2:
            p = 1, u = "normal", this.norClock.parent.active = !0, this.heartsNum = 1, this.raceTime = 31, this.raceMaxDenstiy = 0.85, this.raceMinDenstiy = 0.7, this.raceDensity = this.raceMaxDenstiy, this.raceRefeshTime = -1, this.raceFromX = 180, this.raceAllX = this.raceFromX - 70, a = 10, l = new _creator["default"]().getRandomData(a, this.raceMaxDenstiy), _festivalMgr["default"].ins.updPro(_festivalMgr.fesTaskKey.raceTimes, 1), b = this.items;

            try {
              S = _cfgMgr["default"].serverCfg.qw_line_rules.rules;
              this.relifeTime = S.relive.limit || 3;
              b[0].itemMax = S.limit.notice || 1;
              b[1].itemMax = S.limit.random_notice || 1;
              b[2].itemMax = S.limit.full_row_col || 1;
            } catch (Rt) {
              this.relifeTime = 3;
              b[0].itemMax = b[1].itemMax = b[2].itemMax = 1;
            }

            return this.clockWarn.height = cc.view.getVisibleSize().height, [3, 12];

          case 3:
            return a = _global["default"].freedomSize, l = new _creator["default"]().getRandomData(a, this.raceMaxDenstiy, 5), [3, 12];

          case 4:
            return _idx.platform.reportEvent(_idx.ERepEvt.beginPractice), this.infinityLife = !0, T = _levelMgr["default"].ins, I = this.byGuide ? 1 : T.getPracticeId(), this.practiceId = I, (R = T.getPuzzleInfo(!0, I)) && (a = R.size, l = T.getPuzzleData(!0, I)), this.getBtnsp.node.parent.active = !1, this.stopPraNode.active = !0, [3, 12];

          case 5:
            return k = _festivalMgr["default"].ins, (R = k.getFesPuzzleInfo()) && (a = R.size, l = k.getFesPuzzleData()), this.getBtnsp.string = "返回主页", k.isJigsawMax(), [3, 12];

          case 6:
            try {
              N = _cfgMgr["default"].serverCfg.daily_challenge;
              this.relifeTime = N.revive || 3;
              C = N.limit;
              (L = this.items)[0].itemMax = C.notice || 1;
              L[1].itemMax = C.random_notice || 1;
              L[2].itemMax = C.full_row_col || 1;
            } catch (Nt) {
              this.relifeTime = 3;
              b[0].itemMax = b[1].itemMax = b[2].itemMax = 1;
            }

            switch (A = this.cons2Lbl.node.parent, B = A.parent.getChildByName("top"), F = B.getChildByName("cha"), A.getChildByName("midLblL").getComponent(cc.Label).string = "通关时间", A.getChildByName("midLblR").getComponent(cc.Label).string = "通关人数", A.getChildByName("nor").active = B.getChildByName("nor").active = this.consLbl.node.parent.active = !1, A.getChildByName("cha").active = F.active = this.useTimeLbl.node.active = !0, _res["default"].ins.lSF("game/chaTitle", F.getComponent(cc.Sprite)), this.rewItems.node.parent.y = -325, this.chaTime = 0, V = o.challageData, U = V.date, z = U.year, H = U.month, G = U.day, J = 1e4 * z + 100 * H + G, W = f in _pInfo.challengeType && V.type ? V.type : _pInfo.challengeType.tree, q = void 0, W != _pInfo.challengeType.worm && (a = 10 != (a = V.size) || 15 != a ? 15 : a, K = V.denstiy < 0.2 || !V.denstiy ? null : V.denstiy, q = new _creator["default"](J), l = q.getRandomData(a, K || 0.75, 5)), Y = q ? q.getRandomIntBetween.bind(q) : _com["default"].ins.rad, X = void 0, W) {
              case _pInfo.challengeType.worm:
                return [3, 7];

              case _pInfo.challengeType.tree:
                return [3, 9];

              case _pInfo.challengeType.ice:
                return [3, 10];
            }

            return [3, 11];

          case 7:
            return Z = V.data, Q = Z.size, $ = Z.data, a = Q, (l = new Array(Math.pow(a, 2))).fill(0), tt = this.wormData = {
              counts: [],
              sps: []
            }, et = function et(t, e) {
              var o = t - e;
              return o < 0 ? -1 == o ? 1 : 0 : 1 == o ? 3 : 2;
            }, ot = 0, [4, _res["default"].ins.lPre("prefab/game/wormSp")];

          case 8:
            return (nt = s.sent()) && ((it = new cc.Node("wormSps")).width = 500, it.height = 200, it.x = 100, (rt = it.addComponent(cc.Layout)).type = cc.Layout.Type.HORIZONTAL, rt.resizeMode = cc.Layout.ResizeMode.CHILDREN, this.topSp.node.addChild(it)), $.forEach(function (t) {
              var e;
              var o;
              var n;
              var i;
              var r;
              var a;
              var s;
              var c;
              var u;
              var p;
              var d = 0;
              var h = [0, 0, 0, 0];
              var f = t.length;

              if (tt.counts.push(f), nt) {
                var g = cc.instantiate(nt);
                it.addChild(g);
                var y = g.getComponent("wormSp");
                y.init(f);
                tt.sps.push(y);
              }

              t.forEach(function (f) {
                e = t[d - 1], o = t[d + 1], h[0] = h[1] = h[2] = h[3] = 0, p = void 0 !== o, (u = void 0 !== e) && (n = et(e, f), h[n] = 1), p && (n = et(o, f), h[n] = 1), i = h[0], r = h[1], a = h[2], s = h[3], u && p ? i && a || r && s ? (n = i && a ? 90 : 0, c = 2) : (n = i && r ? 0 : i && s ? 270 : s && a ? 180 : 90, c = 3) : (c = p ? 0 : 1, n = r ? 0 : a ? 90 : s ? 180 : 270), tt[f] = {
                  i: ot,
                  tex: c,
                  dir: n
                }, l[f] = 1, d++;
              });
              ot++;
            }), [3, 11];

          case 9:
            return X = V.count || 10, at = this.treeData = {}, st = Math.ceil(X / 2), ct = X - st, at.minRow = Y(0, a - st - 1), at.minCol = Y(0, a - ct - 1), at.maxRow = at.minRow + st + 1, at.maxCol = at.minCol + ct + 1, d.preload("game/hedge/mask", cc.SpriteFrame), cc.assetManager.loadBundle("prefab", function (t, e) {
              t || e.preload("prefab/game/hedge", cc.Prefab);
            }), [3, 11];

          case 10:
            for (X = V.count || 3, lt = this.iceData = {}, ut = lt.rHints = [], pt = lt.cHints = [], dt = []; X;) {
              ht = Y(1, a - 2), ft = Y(1, a - 2), gt = (a - ht - 1) * a + ft, -1 == dt.indexOf(gt) && (dt.push(gt, gt - 1, gt + 1, gt + a, gt - a), lt[gt] = 1, ut[ht] = (ut[ht] || 0) + 1, pt[ft] = (pt[ft] || 0) + 1, X--);
            }

            return dt = null, d.preload("game/ice/mask", cc.SpriteFrame), d.preload("game/ice/pit", cc.SpriteFrame), cc.assetManager.loadBundle("prefab", function (t, e) {
              t || e.preload("prefab/game/ice", cc.Prefab);
            }), [3, 11];

          case 11:
            return [3, 12];

          case 12:
            if (1 == this.heartsNum || this.infinityLife) {
              for (yt = 0, mt = this.hearts; yt < 3; yt++) {
                vt = mt[yt].node, this.infinityLife ? (2 == yt && (vt.active = !0, vt.setPosition(mt[0].node.position)), vt.active = 2 == yt) : vt.active = 0 == yt;
              }

              this.infinityLife && (this.heartInfinity.active = !0);
              this.heartBgNode.width = 70;
            }

            if (u = "game/" + u + "/", _t = _pInfo["default"].ins.getUsingSkin().bg, bt = p ? 1 : _t, d.loadDir(u, cc.SpriteFrame, function (t) {
              if (!t && kt.node && kt.node.isValid) {
                var e = kt.topSp;
                e.spriteFrame = d.get(u + "top" + bt, cc.SpriteFrame);
                var o = _global["default"].padScale;
                o && (e.node.width *= o, e.node.height *= o);
              }

              kt._initGame(a, l);
            }), 1 != _t) {
              switch (wt = this.downSp.node, St = new cc.Color(), Tt = new cc.Color(), It = "game/skin/" + _t + "/", _t) {
                case 2:
                  St.r = 222, St.g = 146, St.b = 52, Tt.r = 248, Tt.g = 221, Tt.b = 82;
              }

              wt.color = St;
              wt.parent.getChildByName("bg").color = Tt;
              Dt = wt.parent.getChildByName("winBg");

              _res["default"].ins.lSF(It + "sky", Dt.getComponent(cc.Sprite));

              _res["default"].ins.lSF(It + "cloud", Dt.children[0].getComponent(cc.Sprite));

              _res["default"].ins.lSF(It + "cloud", Dt.children[1].getComponent(cc.Sprite));
            }

            return this.byGuide ? [2] : (Pt = _pInfo["default"].ins.getUsingSkin().role, cc.assetManager.loadBundle("prefab", function (t, e) {
              t || e.load("skin/girl" + Pt, cc.Prefab, function (t, n) {
                if (!t && kt.node && kt.node.isValid) {
                  var i = cc.instantiate(n);
                  var r = kt.topGirlSk = i.getComponent(sp.Skeleton);
                  if (p) e.load("prefab/game/goose", cc.Prefab, function (t, e) {
                    if (!t && kt.node && kt.node.isValid) {
                      var o = kt.topSp;
                      kt.downSp;
                      o.addComponent(_uvAni["default"]).speed = 0.1;
                      var n = cc.instantiate(e);
                      kt.topGooseSk = n.getComponent(sp.Skeleton);
                      r.animation = h.run;
                      n.x = kt.raceFromX;
                      i.x = -n.x;
                      i.y = n.y = 0;
                      o.node.addChild(n);
                      o.node.addChild(i);
                    }
                  });else {
                    var a = kt.topSp.node.children.length ? -225 : 0;

                    if (i.setPosition(a, -20), kt.topSp.node.addChild(i), f === _pInfo.gameType.challenge) {
                      var s = o.challageData;
                      (f in _pInfo.challengeType && s.type ? s.type : _pInfo.challengeType.tree) === _pInfo.challengeType.worm && (i.scaleX = -i.scaleX);
                    }

                    r.animation = h.idle;
                    r.setEndListener(kt.playGirlEnd.bind(kt));
                  }
                }
              });
            }), [2]);
        }
      });
    });
  };

  e.prototype._initGame = function (t, e) {
    this.rows_ = this.cols_ = t;
    this.grid_count = this.rows_ * this.cols_;
    this.baseData = e;
    this.checkLocalData();
    this.initView();
  };

  e.prototype.initView = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var n;
      var i;
      var r;
      var a;
      var c;
      var l;
      var u;
      var p;
      var d;
      var h;
      var f;
      var g;
      var y;
      var m;

      var _;

      var b;
      var w;
      var S;
      var T;
      var I;
      var D;
      var P;
      var k = this;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            for (t = o.type, e = t == _pInfo.gameType.race, n = t == _pInfo.gameType.practice, i = 67, this.fontSize = 36, r = 0; r < this.rows_; r++) {
              for (a = this.GetBaseRowHeadNums(r), c = 2, l = 0, u = a; l < u.length; l++) {
                p = u[l], c += 21.39 * (p + "").length;
              }

              c > i && (i = c);
            }

            switch (e && (i = 90), d = this.rows_, h = -528 + i, f = -403, g = 0, y = 5, m = 1, (_ = 1 - 0.07 / 45 * (i - 67.5)) < 0.93 ? _ = 0.93 : _ > 1 && (_ = 1), b = 1, S = 172, d) {
              case 5:
                w = 384, _ = 0.608, S = 175, h = -360, f = -319, b = 1.78, i = 86, g = -72, y = -17, m = 0.78;
                break;

              case 10:
                w = 640 * (_ -= 0.09), h += 45, f = -429, b = 1.5, y = -21;
                break;

              case 15:
                w = 640 * (_ -= 0.02);
            }

            return _global["default"].padScale && !this.byGuide && (f -= 50, y -= 50), this.map_node_.setPosition(h, f), this.gridBgSp.node.scale = _, this.selectMaskBg.scale = _, y -= this.downNode.y, (T = this.itemSelectEff.parent.children[0]).setPosition(g, y), T.setScale(m), T.children[0].y += this.downNode.y, this.gridSize = w / this.rows_, this.gridsStartX = S, this.hintScale = b, this.hintWidth = i, [4, this.addHeads()];

          case 1:
            return s.sent(), [4, this.SetWorkGridTagWithInit()];

          case 2:
            for (s.sent(), I = 0; I < 3; I++) {
              this.updateItemNum(I);
            }

            return [4, this.checkGuide()];

          case 3:
            return s.sent(), !n && _idx.platform.startVideoRecord(), D = _pInfo["default"].ins, P = D.getIsFirstRaceTip(), e && !P ? (D.setFirstRaceTip(!0), this.canTouch = !1, _panelMgr["default"].ins.open("ui/ui_raceTip", {
              pageIdx: 2,
              closeCb: function closeCb() {
                k.canTouch = !0;
              }
            })) : this.canTouch = !0, [2];
        }
      });
    });
  };

  e.prototype.addHeads = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var n;
      var i;
      var r;
      var a;
      var c;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            for (this.rowHeadNums.length = this.colHeadNums.length = 0, this.rowHeadBegins.length = this.colHeadBegins.length = 0, this.gridHeadColVec.length = this.gridHeadRowVec.length = 0, this.rowHintsParent.removeAllChildren(), this.colHintsParent.removeAllChildren(), t = 1, a = 0; a < this.rows_; a++) {
              (e = this.GetBaseColHeadNums(a).length) > t && (t = e);
            }

            if (o.type == _pInfo.gameType.race && t < 3 && (t = 3), this.byGuide ? this.hintHeight = 85 : this.hintHeight = 5 == this.rows_ ? 105 : 70 + 30 * (t - 2), !(r = o.challageData)) return [3, 5];

            switch (r.type) {
              case _pInfo.challengeType.tree:
                return [3, 1];

              case _pInfo.challengeType.ice:
                return [3, 3];
            }

            return [3, 5];

          case 1:
            return [4, _res["default"].ins.lSF("game/hedge/mask")];

          case 2:
            return n = s.sent(), [3, 5];

          case 3:
            return [4, _res["default"].ins.lSF("game/ice/mask")];

          case 4:
            return i = s.sent(), [3, 5];

          case 5:
            for (a = 0; a < this.rows_; a++) {
              this.AddRowHead(a, n, i);
            }

            for (c = 0; c < this.cols_; c++) {
              this.AddColHead(c, n, i);
            }

            return this.beginAni(), [2];
        }
      });
    });
  };

  e.prototype.beginAni = function (t, e) {
    void 0 === t && (t = this.hintWidth);
    void 0 === e && (e = this.hintHeight);
    cc.tween(this.tilesParent).to(0.2, {
      opacity: 255
    }).start();
    cc.tween(this.colHintsParent).set({
      y: -e
    }).to(0.2, {
      y: 0
    }).start();
    cc.tween(this.rowHintsParent).set({
      x: t
    }).to(0.2, {
      x: 0
    }).start();
    var n = o.type;
    n == _pInfo.gameType.race ? this.raceCountDown() : n == _pInfo.gameType.challenge ? this.chaCD() : this.commonCD();
  };

  e.prototype.commonCD = function () {
    this.schedule(this._commonCD, 1, cc.macro.REPEAT_FOREVER);
  };

  e.prototype._commonCD = function () {
    if (this.canTouch) {
      if (this.touchTime++, this.touchTime > 5 && null == this.curItemAni) {
        for (var t = 0, e = this.items, o = e.length; t < o; t++) {
          var n = e[t];
          var i = n.count;
          var r = n.icon;

          if (0 != i) {
            (this.curItemAni = this[r + "Ani"]).play();
            break;
          }
        }

        this.curItemAni || (this.touchTime = 0);
      }
    } else this.resetCD();
  };

  e.prototype.resetCD = function () {
    this.touchTime = 0;
    var t = this.curItemAni;

    if (t) {
      t.stop();
      var e = t.node;
      cc.tween(e).to(0.2, {
        y: 5,
        angle: 0
      }).start();
      this.curItemAni = null;
    }
  };

  e.prototype.raceCountDown = function () {
    this.hasCountDown ? this.raceTime = 31 : (this.hasCountDown = !0, this.schedule(this._raceCoundDown, 1, cc.macro.REPEAT_FOREVER));

    this._raceCoundDown(void 0, !0);
  };

  e.prototype._raceCoundDown = function (t, e) {
    if (this.canTouch) {
      var o = this.raceTime = this.raceTime - 1;
      this.updateRaceNpcs(o, e);
      o < 10 && 0 != o ? (this.norClock.active = !1, this.speClock.active = this.clockWarn.active = !0, this.clockLbl2.string = o + "", this.clockLbl2.node.x = 1 != o ? 0 : -6, _sound["default"].ins.play(_sound["default"].TIME), _vb["default"].p(_vb.VEnum3.DOUBLE)) : (this.norClock.active = !0, this.speClock.active = this.clockWarn.active = !1, this.clockLbl.string = o + "");
      0 == o && this.loseHeart(this.grids[90].node.position);
    }
  };

  e.prototype.chaCD = function () {
    this.schedule(this._chaCD, 1, cc.macro.REPEAT_FOREVER);
  };

  e.prototype._chaCD = function () {
    var t = this.chaTime = this.chaTime + 1;
    var e = J(t / 86400);
    var o = J((t -= 86400 * e) / 3600);
    var n = J((t -= 3600 * o) / 60);
    var i = (n < 10 ? "0" : "") + n + ":" + ((t -= 60 * n) < 10 ? "0" : "") + t;
    var r = "";
    o && (r = (o < 10 ? "0" : "") + o + ":");
    this.useTimeLbl.string = r + i;
  };

  e.prototype.updateRaceNpcs = function (t, e) {
    var o = this.topGirlSk;
    var n = this.topGooseSk;

    if (n) {
      var i = this.raceFromX;
      var r = (1 - t / 30) * this.raceAllX - i;
      var a = -r;
      var s = e ? 0.5 : 1;
      o.timeScale = e ? 1.7 : 1;
      cc.tween(o.node).to(s, {
        x: r
      }).call(function () {
        o.timeScale = 1;
      }).start();
      cc.tween(n.node).to(s, {
        x: a
      }).start();
    }
  };

  e.prototype.loseHeart = function (t) {
    var e = this;
    var o = this.heartsNum;

    if (!(o < 1)) {
      this.showOrHideSelectMask();
      var n = !this.infinityLife;
      var i = this.hearts[o - 1];
      var r = this.patices;
      n && this.heartsNum--;
      this.playGirlAni(h.sad);
      var a = i.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
      r.convertToNodeSpaceAR(a, a);
      var s = cc.instantiate(this.heartsPatic);
      s.setPosition(t);
      s.setParent(r);
      s.scale = 1 / this.gridBgSp.node.scale;
      this.canTouch = !1;
      cc.tween(s).to(0.8, {
        x: a.x,
        y: a.y
      }).call(function () {
        s.destroy();
        n ? (i.playLose(), 0 == e.heartsNum ? (_sound["default"].ins.play(_sound["default"].LOSE), e.playAni(f.gameLose), e.eventDot(!1)) : e.canTouch = !0) : e.canTouch = !0;
      }).start();
    }
  };

  e.prototype.updateItemNum = function (t, e) {
    var n = this;
    void 0 === t && (t = this.curItemIdx);
    var i = this.items[t];
    var r = i.icon;
    var a = o.type == _pInfo.gameType.practice;
    var s = this[r + "Lbl"];

    if (e) {
      a || _bagMgr["default"].ins.useItem(r, 1, o.type);
      this.OnBtnHideItem();
      var c = i.itemMax;

      if (c > 0 && c == (i.itemCur = i.itemCur + 1)) {
        var l = s.node.parent.parent.getChildByName("canUse");
        l && (l.active = !0);
      }
    } else _res["default"].ins.getBundleByString("prefab").then(function (t) {
      t.load("prefab/game/" + r, cc.Prefab, function (t, e) {
        n.node && cc.isValid(n.node) && !t && (n[r + "Prefab"] = e);
      });
    });

    if (a) {
      var u = s.node;
      u.active = !1;
      u.parent.getChildByName("wuxian").active = !0;
      i.count = 1;
    } else {
      var p = i.count = _bagMgr["default"].ins.getItemCount(r);

      s.string = 0 == p ? "+" : "x" + p;
    }
  };

  e.prototype.useItem = function (t, e, o) {
    return __awaiter(this, void 0, void 0, function () {
      var n;
      var i;
      var r;
      var a;
      var c;
      var l;
      var u;
      var p;
      var d;
      var h;
      var f;
      var g;
      var m;
      var v;

      var _;

      var b;
      var T;
      var I;
      var D;
      var P;
      var k;
      var R;
      var N;
      var O;
      var M;
      var L;
      var A;
      var E;
      var x;
      var B;
      var F;
      var j;
      var V = this;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            return this.canTouch = !1, n = this.curItemIdx, i = this.items[n], r = i.icon, (a = this[r + "Prefab"]) ? [3, 2] : [4, _res["default"].ins.lPre("prefab/game/" + r)];

          case 1:
            a = s.sent(), s.label = 2;

          case 2:
            switch (c = this.patices, this.curItemIdx) {
              case 0:
                if (l = function l() {
                  V.OnClickGrid(e, o, !0);
                  V.canTouch = !0;
                }, !a) return l(), [2];
                (u = cc.instantiate(a)).setPosition(t.node.position), u.setParent(c), u.scale = 1 / this.gridBgSp.node.scale, _sound["default"].ins.play(_sound["default"].SHOVEL), (p = u.getComponent(cc.Animation)).play(), p.on(cc.Animation.EventType.FINISHED, function () {
                  u.destroy();
                  l();
                }, this);
                break;

              case 1:
                for (d = this.random_noticeLbl.node.parent.convertToWorldSpaceAR(cc.Vec2.ZERO), c.convertToNodeSpaceAR(d, d), h = _com["default"].ins.rad, f = this.grids, g = [], m = this.rows_, v = this.cols_, _ = this.treeData, F = 0, b = void 0; F < m; F++) {
                  for (T = 0; T < v && (I = f[b = F * v + T], _ && _[b] || !I.isEmpty || (g.push({
                    t: m - F - 1,
                    e: T,
                    data: I
                  }), 3 != g.length)); T++) {
                    ;
                  }
                }

                for (_com["default"].ins.randSort(g), D = Math.min(g.length, 3), P = function P(t) {
                  var e = g[t];
                  var o = e.t;
                  var n = e.e;
                  var i = e.data;
                  if (!i) return "break";

                  var r = function r() {
                    V.OnClickGrid(o, n, !0);
                    t == D - 1 && (V.canTouch = !0);
                  };

                  if (a) {
                    var s = cc.instantiate(a);
                    s.setParent(c);
                    s.setPosition(d);
                    s.getComponent(_random_notice["default"]).init();
                    s.scale = 1 / k.gridBgSp.node.scale;
                    var l = i.node.position;
                    var u = new cc.Vec2(l.x, l.y);
                    var p = new cc.Vec2();
                    1 == h(1, 2) ? (p.x = (d.x + d.y + u.x - u.y) / 2, p.y = (d.y + u.x + u.y - d.x) / 2) : (p.x = (u.x + u.y + d.x - d.y) / 2, p.y = (u.y + d.x + d.y - u.x) / 2);
                    cc.tween(s).delay(0.2 * t).call(function () {
                      _sound["default"].ins.play(_sound["default"].ROCKETLAUNCH);
                    }).bezierTo(1, d, p, u).call(function () {
                      _sound["default"].ins.play(_sound["default"].ROCKETATTACK);

                      s.destroy();
                      r();
                    }).start();
                  } else r();
                }, k = this, F = 0; F < D && "break" !== P(F); F++) {
                  ;
                }

                break;

              case 2:
                if (R = void 0, N = void 0, O = this.grids, M = this.cols_, L = this.rows_, null != e) for (A = function A(t) {
                  var o = O[(L - e - 1) * M + t];
                  0 == t && (R = o.node.position);
                  t == M - 1 && (N = o.node.position);
                  E.scheduleOnce(function () {
                    V.OnClickGrid(e, t, !0);
                  }, t / M * 1);
                }, E = this, F = 0; F < M; F++) {
                  A(F);
                } else if (null != o) for (x = function x(t) {
                  var e = O[(L - t - 1) * M + o];
                  0 == t && (N = e.node.position);
                  t == L - 1 && (R = e.node.position);
                  B.scheduleOnce(function () {
                    V.OnClickGrid(t, o, !0);
                  }, (L - t) / L * 1);
                }, B = this, F = 0; F < L; F++) {
                  x(F);
                }
                a ? ((j = cc.instantiate(a)).setParent(c), j.angle = null != o ? -90 : 0, j.scale = 1 / this.gridBgSp.node.scale, cc.tween(j).set({
                  position: R
                }).to(1, {
                  position: N
                }).call(function () {
                  j.destroy();
                  V.canTouch = !0;
                }).start()) : this.scheduleOnce(function () {
                  V.canTouch = !0;
                }, 1);
            }

            return [2];
        }
      });
    });
  };

  e.prototype.playAni = function (t) {
    if (!this.curAni) switch (this.curAni = t, this.panelAni.play(t), t) {
      case f.gameLose:
        this.playDownAni(!0);
        break;

      case f.gameRelife:
        this.playDownAni(!1);
        break;

      case f.gameWinFailSf:
        this.tilesWinAni();
    }
  };

  e.prototype.playAniDone = function () {
    switch (this.curAni) {
      case f.gameWin:
        this.playWinDone();
        break;

      case f.gameRelife:
        this.reLife();
        break;

      case f.openItemSelect:
        this.canTouch = !0;
        break;

      case f.closeItemSelect:
        this.curItemBtn.setSiblingIndex(this.curItemIdx + 1), this.curItemBtn = this.curItemIdx = null;
    }

    this.curAni = null;
  };

  e.prototype.playWinDone = function () {
    var t;
    var e;
    var n = this;
    if (this.byGuide) cc.tween(this.guideNpc).to(0.2, {
      opacity: 255
    }).call(function () {
      var t = n.shareBtn.parent.getChildByName("getBtn");
      var e = n.guideFinger;
      e.setParent(t);
      n.guideNpcAni.play();
      cc.tween(t).to(0.2, {
        opacity: 255
      }).start();
      cc.tween(e).set({
        active: !0,
        x: 80,
        y: 0,
        scale: 1,
        opacity: 255
      }).to(0.5, {
        scale: 1.2
      }).to(0.5, {
        scale: 1
      }, {
        easing: "cubicOut"
      }).union().repeatForever().start();
    }).start();else if (o.type != _pInfo.gameType.practice && _idx.platform.stopVideoRecord(), o.type === _pInfo.gameType.normal) {
      var i = _pInfo["default"].ins.getPuzzleLvl() - 1;
      var r = (null === (e = null === (t = _cfgMgr["default"].serverCfg.add_desktop) || void 0 === t ? void 0 : t.rules) || void 0 === e ? void 0 : e.nums) || 7;

      var a = _pInfo["default"].ins.getAddDesk();

      _idx.platform.string() != _pConst.PFCode.Bytedance || i != r || a || _panelMgr["default"].ins.open("ui/ui_deskReward", null);
    }
  };

  e.prototype.playDownAni = function (t) {
    var e = t ? -360 : this.downBeginY;
    var o = t ? 0 : 1.1;
    cc.tween(this.downNode).delay(o).to(10 / 30, {
      y: e,
      opacity: t ? 0 : 255
    }).start();
  };

  e.prototype.reLife = function () {
    this.heartsNum = 1;
    this.hearts[0].getHeart();
    this.canTouch = !0;
    o.type == _pInfo.gameType.race && this.raceCountDown();
  };

  e.prototype.GetBaseRowHeadNums = function (t) {
    if (0 == this.rowHeadNums.length) for (var e = this.baseData, o = this.rows_ - 1; o >= 0; o--) {
      for (var n = o * this.cols_, i = [], r = [], a = 0, s = n; s < n + this.cols_; s++) {
        e[s] == c.O ? 1 == ++a && r.push(s) : a > 0 && (i.push(a), a = 0);
      }

      a > 0 && i.push(a);
      0 == i.length && i.push(0);
      this.rowHeadNums.push(i);
      this.rowHeadBegins.push(r);
    }
    return this.rowHeadNums[t];
  };

  e.prototype.GetBaseColHeadNums = function (t) {
    if (0 == this.colHeadNums.length) for (var e = this.baseData, o = 0; o < this.cols_; o++) {
      for (var n = [], i = 0, r = 0, a = []; r < this.rows_; r++) {
        var s = o + r * this.rows_;
        e[s] == c.O ? 1 == ++i && a.push(s) : i > 0 && (n.push(i), i = 0);
      }

      i > 0 && n.push(i);
      0 == n.length && n.push(0);
      this.colHeadNums.push(n);
      this.colHeadBegins.push(a);
    }
    return this.colHeadNums[t];
  };

  e.prototype.GetBaseRowBeginNums = function (t) {
    0 == this.rowHeadBegins.length && this.GetBaseRowHeadNums(t);
    return this.rowHeadBegins[t];
  };

  e.prototype.GetBaseColBeginNums = function (t) {
    0 == this.colHeadBegins.length && this.GetBaseColHeadNums(t);
    return this.colHeadBegins[t];
  };

  e.prototype.GetWorkRowHeadNums = function (t) {
    for (var e = (this.rows_ - t - 1) * this.cols_, o = [], n = 0, i = e; i < e + this.cols_; i++) {
      this.workData[i] == c.O ? n++ : n > 0 && (o.push(n), n = 0);
    }

    n > 0 && o.push(n);
    0 == o.length && o.push(0);
    return o;
  };

  e.prototype.GetWorkColHeadNums = function (t) {
    for (var e = [], o = 0, n = 0; n < this.rows_; n++) {
      var i = t + n * this.rows_;
      this.workData[i] == c.O ? o++ : o > 0 && (e.push(o), o = 0);
    }

    o > 0 && e.push(o);
    0 == e.length && e.push(0);
    return e;
  };

  e.prototype.AddRowHead = function (t, e, o) {
    var n = {
      shineBg: null,
      labels: [],
      allRight: !1
    };
    var i = this.hintScale;
    var r = this.hintWidth;
    var a = new cc.Node("rowHint");
    var s = new cc.Node("bg");
    var c = new cc.Node("shineBg");
    var l = s.addComponent(cc.Sprite);
    var u = c.addComponent(cc.Sprite);
    l.spriteFrame = u.spriteFrame = this.lHintSf;
    l.sizeMode = u.sizeMode = cc.Sprite.SizeMode.CUSTOM;
    l.type = u.type = cc.Sprite.Type.SLICED;
    s.setAnchorPoint(1, 0.5);
    c.setAnchorPoint(1, 0.5);
    s.width = c.width = r;
    c.parent = s.parent = a;
    u.dstBlendFactor = cc.macro.BlendFactor.ONE;
    c.opacity = 100;
    c.active = !1;

    for (var p = this.lineW, d = this.font4, h = this.fontSize, f = 5 == this.rows_, g = new cc.Node("lbls"), y = this.GetBaseRowHeadNums(t), m = f ? 5 : 2, v = y.length, _ = 1 - 0.04 * (v - 2), b = v - 1; b >= 0; b--) {
      var w = new cc.Node("lbl");
      var S = w.addComponent(cc.Label);
      S.font = d;
      S.fontSize = h;
      var T = y[b];
      var I = S.string = T + "";
      S.spacingX = -6;
      w.color = W;
      w.setAnchorPoint(1, 0.5);
      w.position = cc.v3(-m, -6);
      w.parent = g;
      m = m + (h - 13) * _ + 13 * (I.length - 1);
      n.labels[b] = w;
    }

    if (g.parent = a, a.position = cc.v3(this.gridsStartX - 2, t * this.gridSize + this.gridSize / 2 + Math.floor(t / 5) * p - 1), a.parent = this.rowHintsParent, n.shineBg = c, this.gridHeadRowVec.push(n), a.scale = i, e && t > this.treeData.minRow && t < this.treeData.maxRow || o && this.iceData && this.iceData.rHints[t]) {
      var D = e ? "treeMask" : "iceMask";
      var P = new cc.Node(D);
      P.setAnchorPoint(1, 0.5);
      var k = P.addComponent(cc.Sprite);
      k.spriteFrame = e || o;
      k.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      k.type = e ? cc.Sprite.Type.TILED : cc.Sprite.Type.SLICED;
      P.width = r;
      a.addChild(P);
      n[D] = P;
    }
  };

  e.prototype.AddColHead = function (t, e, o) {
    var n = {
      shineBg: null,
      labels: [],
      allRight: !1
    };
    var i = this.hintScale;
    var r = this.hintHeight;
    var a = new cc.Node("colHint");
    var s = new cc.Node("bg");
    var c = new cc.Node("shineBg");
    var l = s.addComponent(cc.Sprite);
    var u = c.addComponent(cc.Sprite);
    l.spriteFrame = u.spriteFrame = this.uHintSf;
    l.sizeMode = u.sizeMode = cc.Sprite.SizeMode.CUSTOM;
    l.type = u.type = cc.Sprite.Type.SLICED;
    s.setAnchorPoint(0.5, 0);
    c.setAnchorPoint(0.5, 0);
    s.height = c.height = r;
    c.parent = s.parent = a;
    u.dstBlendFactor = cc.macro.BlendFactor.ONE;
    c.opacity = 100;
    c.active = !1;

    for (var p = this.font4, d = this.fontSize, h = this.lineW, f = new cc.Node("lbls"), g = this.GetBaseColHeadNums(t), y = 0, m = g.length - 1; m >= 0; m--) {
      var v = new cc.Node("lbl");

      var _ = v.addComponent(cc.Label);

      _.font = p;
      _.fontSize = d;
      var b = g[m];
      var w = 0;
      b > 11 && (w = -2);
      _.string = b;
      _.spacingX = -6;
      v.color = W;
      v.setAnchorPoint(0.5, 0);
      v.position = cc.v3(w - 1, y - 10);
      v.parent = f;
      y = y + d - 6;
      n.labels[m] = v;
    }

    if (f.parent = a, a.position = cc.v3(this.gridsStartX + t * this.gridSize + this.gridSize / 2 + Math.floor(t / 5) * h + 1, this.rows_ * this.gridSize + 5), a.parent = this.colHintsParent, n.shineBg = c, this.gridHeadColVec.push(n), a.scale = i, e && t > this.treeData.minCol && t < this.treeData.maxCol || o && this.iceData && this.iceData.cHints[t]) {
      var S = e ? "treeMask" : "iceMask";
      var T = new cc.Node(S);
      T.setAnchorPoint(0.5, 0);
      var I = T.addComponent(cc.Sprite);
      I.spriteFrame = e || o;
      I.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      I.type = e ? cc.Sprite.Type.TILED : cc.Sprite.Type.SLICED;
      T.height = r;
      a.addChild(T);
      n[S] = T;
    }
  };

  e.prototype.getWorldPointByTouch = function (t) {
    var e = cc.Vec2.ZERO;
    this.camera.getScreenToWorldPoint(t.getLocation(), e);
    return e;
  };

  e.prototype.TestTouch = function (t, e) {
    void 0 === e && (e = !1);
    var o = this.getWorldPointByTouch(t.touch);
    var n = this.map_node_.convertToNodeSpaceAR(o);
    var i = n.x;
    var r = n.y;
    var a = {
      area: l.None,
      row: -1,
      col: -1
    };

    if (this.touchDir != u.None && e) {
      var s = Math.floor(r / this.gridSize);
      var c = Math.floor((i - this.gridsStartX) / this.gridSize);
      a.area = l.Grid;
      a.row = s;
      a.col = c;
      return a;
    }

    var p = this.map_node_.getContentSize();
    return i < 0 || r < 0 || r > p.height || i > p.width ? a : (i < this.gridsStartX - 15 ? (s = Math.floor(r / this.gridSize)) >= 0 && s < this.rows_ && (a.area = l.HeadRow, a.row = s) : r > this.rows_ * this.gridSize + 15 ? (c = Math.floor((i - this.gridsStartX) / this.gridSize)) >= 0 && c < this.cols_ && (a.area = l.HeadCol, a.col = c) : (s = Math.floor(r / this.gridSize), c = Math.floor((i - this.gridsStartX) / this.gridSize), s >= 0 && s < this.rows_ && c >= 0 && c < this.cols_ && (a.area = l.Grid, a.row = s, a.col = c)), a);
  };

  e.prototype.OnTouchBegan = function (t) {
    if (this.resetCD(), this.canTouch) return !this.click_touch_ && (this.click_touch_ = !0, this.gridTouchStart = null, void (this.isAllRight || (this.gridTouchStart = this.TestTouch(t), this.gridTouchStart.area == l.Grid && this.OperationStepBegin(), this.gridTouchStart.area == l.Grid && (this.touchDir = u.None, this.fillMode = p.None, this.OnClickGrid(this.gridTouchStart.row, this.gridTouchStart.col)))));
  };

  e.prototype.OnTouchMoved = function (t) {
    if (this.canTouch && !this.isAllRight && this.gridTouchStart && this.gridTouchStart.area != l.None) do {
      if (this.gridTouchStart.area != l.Grid) break;
      var e = this.TestTouch(t, !0);
      if (e.area != l.Grid) break;
      if (this.touchDir == u.Horizontal ? e.row = this.lastTouchRow : this.touchDir == u.Vertical && (e.col = this.lastTouchCol), e.row == this.lastTouchRow && e.col == this.lastTouchCol) break;
      this.touchDir == u.None && (e.row == this.lastTouchRow ? this.touchDir = u.Horizontal : e.col == this.lastTouchCol && (this.touchDir = u.Vertical));
      var o = e.row;
      var n = e.col;
      this.OnClickGrid(o, n);
    } while (0);
  };

  e.prototype.OnTouchEnded = function (t) {
    do {
      if (!this.gridTouchStart) break;
      if (this.gridTouchStart.area != l.HeadRow && this.gridTouchStart.area != l.HeadCol) break;
      var e = this.TestTouch(t);

      if (e.area == l.HeadRow && this.gridTouchStart.area == l.HeadRow) {
        this.OnClickRowHead(e.row);
        break;
      }

      e.area == l.HeadCol && this.gridTouchStart.area == l.HeadCol && this.OnClickColHead(e.col);
    } while (0);

    this.CancelGridTouch();
  };

  e.prototype.OnTouchCancelled = function () {
    this.CancelGridTouch();
  };

  e.prototype.GetWorkGridTag = function (t, e) {
    var o = (this.rows_ - t - 1) * this.cols_ + e;
    return o < 0 || o >= this.workData.length ? c.Empty : this.workData[o];
  };

  e.prototype.SetWorkGridTag = function (t, e, n, i) {
    var r;
    var a = this.rows_;
    var s = this.cols_;
    var l = (a - e - 1) * s + n;
    if ((r = this.grids[l]) && !r.isEmpty) return !0;
    var u = this.soundIdx;

    if (u = this.soundIdx > 15 ? 15 : this.soundIdx, !(l < 0 || l >= this.workData.length) && this.workData[l] != t && (this.OperationStepBySetWorkTag(this.workData[l], t, e * s + n), t == c.O || t == c.X)) {
      var p = this.treeData;
      var d = this.wormData;
      var h = this.iceData;
      if (this.curItemBtn && !i) return 2 == this.curItemIdx || !(!p || !p[l]) || !(!h || !h[l]) || (this.updateItemNum(this.curItemIdx, !0), this.useItem(r, e, n), _vb["default"].p(_vb.VEnum3.SHORT), !0);

      if (r.isEmpty) {
        var f = this.guideCheckGrid;

        if (f) {
          var y = e + "_" + n;
          if (-1 == (b = f.indexOf(y))) return !0;
          f.splice(b, 1);
          0 == f.length && this.scheduleOnce(this.updateGuideStep, 0.5);
        }

        if (i && (t = r.isRight), p) {
          if (p[l]) return !0;
          this.treeCheck(e, n);
        }

        if (h) {
          if ((m = h[l]) && m.drop) return !0;
          this.iceCheck(e, n);
        }

        if (r.select(t), _vb["default"].p(_vb.VEnum3.SHORT), r.isRight && (this.workData[l] = c.O, t == c.O)) {
          if (d) {
            var m = d[l];
            var v = d.counts;
            var _ = d.sps;

            if (m && v) {
              var b;
              var w = v[b = m.i] = v[b] - 1;
              var T = _[b];

              if (T && T.addCount(), 0 == w) {
                var D = this.tilesParent.getChildByName("wormParent");
                var P = o.challageData.data.data;

                if (D && D.children[b] && P && P[b]) {
                  D.children[b].active = !0;
                  var k = this.grids;
                  var R = 0;
                  P[b].forEach(function (t) {
                    k[t].playWormAni(0.06 * R);
                    R++;
                  });
                }
              }
            }
          }

          _sound["default"].ins.play("tile_note_" + u);

          this.soundIdx++;
        }

        this.tipTog && !i && (this.tipLabel.string = u + "", 1 == u ? this.tipNode.setPosition(r.node.position) : 2 == u ? (this.tipNode.active = !0, this.tipAni.play(g.tipIn)) : (this.tipLabel.node.x = u > 9 ? -14 : -13, cc.tween(this.tipNode).to(0.1, {
          scale: 1.1
        }).to(0.1, {
          scale: 1
        }).start()));
      }
    }
  };

  e.prototype.treeCheck = function (t, e) {
    var o = this.treeData;

    if (void 0 !== o && void 0 !== t && void 0 !== e) {
      var n = this.rows_;
      var i = this.cols_;
      var r = this.gridHeadRowVec;
      var a = this.gridHeadColVec;
      var s = o.tmp || (o.tmp = []);
      var c = o.minRow;
      var l = o.maxRow;
      var u = o.minCol;
      var p = o.maxCol;
      s.push(t > 0 && {
        r: t - 1,
        c: e
      }, t < n - 1 && {
        r: t + 1,
        c: e
      }, e > 0 && {
        r: t,
        c: e - 1
      }, e < i - 1 && {
        r: t,
        c: e + 1
      });
      s.forEach(function (t) {
        if (t) {
          var e = t.r;
          var s = t.c;
          var d = (n - e - 1) * i + s;
          var h = o[d];

          if (h) {
            h.play(), delete o[d];
            var f = a[s].treeMask;

            if (f) {
              for (var g = 1, y = c + 1; y < l && 1 == g; y++) {
                o[(n - y - 1) * i + s] && (g = 0);
              }

              g && (delete a[s].treeMask, cc.tween(f).to(0.5, {
                height: 0
              }).call(function () {
                f.destroy();
              }).start());
            }

            var m = r[e].treeMask;

            if (m) {
              g = 1;

              for (var v = u + 1; v < p && 1 == g; v++) {
                o[(n - e - 1) * i + v] && (g = 0);
              }

              g && (delete r[e].treeMask, cc.tween(m).to(0.5, {
                width: 0
              }).call(function () {
                m.destroy();
              }).start());
            }
          }
        }
      });
      s.length = 0;
    }
  };

  e.prototype.iceCheck = function (t, e) {
    var o = this;
    var n = this.iceData;

    if (void 0 !== n && void 0 !== t && void 0 !== e) {
      var i = this.rows_;
      var r = this.cols_;
      var a = this.gridHeadRowVec;
      var s = this.gridHeadColVec;
      var c = n.rHints;
      var l = n.cHints;
      var u = n.tmp || (n.tmp = []);
      u.push(t > 0 && {
        r: t - 1,
        c: e
      }, t < i - 1 && {
        r: t + 1,
        c: e
      }, e > 0 && {
        r: t,
        c: e - 1
      }, e < r - 1 && {
        r: t,
        c: e + 1
      });
      u.forEach(function (t) {
        if (t) {
          var e = t.r;
          var u = t.c;
          var p = (i - e - 1) * r + u;
          var d = n[p];

          if (d && d.drop) {
            if (0 == d.drop()) {
              delete n[p];
              var h = c[e] = c[e] - 1;
              var f = l[u] = l[u] - 1;
              var g = s[u].iceMask;
              g && 0 == f && (delete s[u].iceMask, cc.tween(g).to(0.5, {
                height: 0
              }).call(function () {
                g.destroy();
              }).start());
              var y = a[e].iceMask;
              y && 0 == h && (delete a[e].iceMask, cc.tween(y).to(0.5, {
                width: 0
              }).call(function () {
                y.destroy();
              }).start());
            }

            var m = new cc.Node("icePit");
            var v = d.node;
            m.scale = v.scale, m.setPosition(v.x, v.y), v.parent.addChild(m), _res["default"].ins.lSF("game/ice/pit", m.addComponent(cc.Sprite));
            var _ = o.gridSize;
            var b = cc.v2(v.x, v.y);
            var S = cc.v2(b.x + _, b.y + 3 * _);
            var T = cc.v2(b.x + 1.5 * _, b.y - 3 * _);
            cc.tween(m).bezierTo(1, b, S, T).start(), cc.tween(m).delay(0.2).by(20 / 30, {
              scale: -0.3
            }).to(4 / 30, {
              opacity: 0
            }).call(function () {
              m.destroy();
            }).start();
          }
        }
      });
      u.length = 0;
    }
  };

  e.prototype.tipAniDone = function (t, e) {
    e.name == g.tipOut && (this.tipNode.active = !1);
  };

  e.prototype.SetWorkGridTagWithInit = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var n;
      var i;
      var r;
      var a;
      var c;
      var l;
      var u;
      var p;
      var d;
      var h;
      var f;
      var g;
      var y;
      var m;
      var v;

      var _;

      var b;
      var S;
      var T;
      var I;
      var D;
      var P;
      var R;
      var N;
      var C;
      var O;
      var M;
      var L;
      var A;
      var E;
      var x;
      var B;
      var F;
      var V;
      var U;
      var z;
      var H;
      var G;
      var J;
      var W;
      var q;
      var K;
      var Y;
      var X;
      var Z;
      var Q = this;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            if (e = (t = this).rows_, n = t.cols_, i = t.gridPrefab, r = t.gridsStartX, a = t.gridSize, c = t.grids, l = t.tilesParent, u = t.baseData, p = t.treeData, d = t.wormData, h = t.iceData, !(b = o.challageData)) return [3, 7];

            switch (b.type) {
              case _pInfo.challengeType.tree:
                return [3, 1];

              case _pInfo.challengeType.worm:
                return [3, 3];

              case _pInfo.challengeType.ice:
                return [3, 5];
            }

            return [3, 7];

          case 1:
            return [4, _res["default"].ins.lPre("prefab/game/hedge")];

          case 2:
            return f = s.sent(), g = new cc.Node("treeMasks"), l.addChild(g), [3, 7];

          case 3:
            return [4, _res["default"].ins.lPre("prefab/game/worm")];

          case 4:
            for (y = s.sent(), m = new cc.Node("wormParent"), M = b.data.data.length, L = 0; L < M; L++) {
              Y = new cc.Node("worms"), m.addChild(Y), Y.active = !1;
            }

            return l.addChild(m), [3, 7];

          case 5:
            return [4, _res["default"].ins.lPre("prefab/game/ice")];

          case 6:
            return v = s.sent(), _ = new cc.Node("iceParent"), l.addChild(_), [3, 7];

          case 7:
            return S = a / 44, T = Math.floor, I = this.lineW, 1 == (R = _pInfo["default"].ins.getUsingSkin().bg) ? [3, 10] : (N = "game/skin/" + R + "/", [4, _res["default"].ins.lSF(N + "grid")]);

          case 8:
            return D = s.sent(), [4, _res["default"].ins.lSF(N + "gridTip")];

          case 9:
            P = s.sent(), s.label = 10;

          case 10:
            for (C = 0, O = this.workData, M = O.length; C < M; C++) {
              L = e - Math.floor(C / n) - 1, E = T((A = C % n) / 5), x = T(L / 5), B = r + A * a + 0.5 * a + E * I, F = L * a + 0.5 * a + x * I, (V = cc.instantiate(i)).setPosition(B, F), V.setScale(S, S, 1), U = c[C] = V.getComponent(_grid["default"]), z = u[C], U.init(z), U.initType(D, P), l.addChild(V), f && L > p.minRow && L < p.maxRow && A > p.minCol && A < p.maxCol && ((H = cc.instantiate(f)).setPosition(B, F), H.setScale(S, S, 1), g.addChild(H), p[C] = H.getComponent(cc.Animation)), y && z && (G = d[C], J = G.i, W = G.tex, q = G.dir, (K = cc.instantiate(y)).angle = q, K.setPosition(B, F), K.setScale(S, S, 1), K.getComponent("worm").init(W), (Y = m.children[J]).addChild(K)), v && h && h[C] && ((X = cc.instantiate(v)).setPosition(B, F), X.setScale(S, S, 1), (Z = X.getComponent("ice")).r = L, Z.c = A, h[C] = Z, _.addChild(X));
            }

            return g && g.setSiblingIndex(l.childrenCount - 1), m && m.setSiblingIndex(0), _ && _.setSiblingIndex(l.childrenCount - 1), this.schedule(function () {
              Q.playHightLight(1, 1);
            }, 30), [2];
        }
      });
    });
  };

  e.prototype.GetBaseGridTag = function (t, e) {
    var o = (this.rows_ - t - 1) * this.cols_ + e;
    return o < 0 || o >= this.grid_count ? c.Empty : this.baseData[o];
  };

  e.prototype.IsRowLogicRight = function (t) {
    var e = this.GetBaseRowHeadNums(t);
    var o = this.GetWorkRowHeadNums(t);
    if (e.length != o.length) return !1;

    for (var n = 0; n < e.length; n++) {
      if (e[n] != o[n]) return !1;
    }

    return !0;
  };

  e.prototype.IsColLogicRight = function (t) {
    var e = this.GetBaseColHeadNums(t);
    var o = this.GetWorkColHeadNums(t);
    if (e.length != o.length) return !1;

    for (var n = 0; n < e.length; n++) {
      if (e[n] != o[n]) return !1;
    }

    return !0;
  };

  e.prototype.IsRowFillRight = function (t) {
    for (var e = 0; e < this.cols_; e++) {
      var o = this.GetBaseGridTag(t, e);
      var n = this.GetWorkGridTag(t, e);
      if (o == c.O && n != c.O) return !1;
      if (o == c.X && n == c.O) return !1;
    }

    return !0;
  };

  e.prototype.IsColFillRight = function (t) {
    for (var e = 0; e < this.rows_; e++) {
      var o = this.GetBaseGridTag(e, t);
      var n = this.GetWorkGridTag(e, t);
      if (o == c.O && n != c.O) return !1;
      if (o == c.X && n == c.O) return !1;
    }

    return !0;
  };

  e.prototype.RefreshRowHeadState = function (t) {
    var e = o.type != _pInfo.gameType.race;
    var n = this.gridHeadRowVec[t];
    var i = n.labels;

    if (this.IsRowLogicRight(t)) {
      for (var r = 0; r < i.length; r++) {
        e && (i[r].color = q), this.playHightLight(t);
      }

      this.raceRefresh(t);
      n.allRight = !0;
      this.selectData.row == t && this.showOrHideSelectMask();
      !this.byGuide && this.playGirlAni(h.happy);
    } else if (e) for (var a = this.GetBaseRowHeadNums(t), s = this.GetBaseRowBeginNums(t), l = this.workData, u = 0, p = a.length; u < p; u++) {
      if (!q.equals(i[u].color)) {
        for (var d = !0, f = s[u], g = s[u] + a[u]; f < g; f++) {
          if (l[f] != c.O) {
            d = !1;
            break;
          }
        }

        d && (i[u].color = q);
      }
    }
  };

  e.prototype.RefreshColHeadState = function (t) {
    var e = o.type != _pInfo.gameType.race;
    var n = this.gridHeadColVec[t];
    var i = n.labels;

    if (this.IsColLogicRight(t)) {
      for (var r = 0; r < i.length; r++) {
        e && (i[r].color = q), this.playHightLight(void 0, t);
      }

      this.raceRefresh(void 0, t);
      n.allRight = !0;
      this.selectData.col == t && this.showOrHideSelectMask();
    } else if (e) for (var a = this.GetBaseColHeadNums(t), s = this.GetBaseColBeginNums(t), l = this.workData, u = this.rows_, p = 0, d = a.length; p < d; p++) {
      if (!q.equals(i[p].color)) {
        for (var h = !0, f = s[p], g = s[p] + a[p] * u; f < g; f += u) {
          if (l[f] != c.O) {
            h = !1;
            break;
          }
        }

        h && (i[p].color = q);
      }
    }
  };

  e.prototype.playHightLight = function (t, e) {
    var o;
    var n = this.grids;
    var i = this.rows_;
    var r = this.cols_;

    if (void 0 === e) {
      for (var a = void 0, s = void 0, l = 0; l < r; l++) {
        (o = n[l + (i - t - 1) * i]).isEmpty && (o.select(c.X, !0), this.treeCheck(t, l), this.iceCheck(t, l)), o.playHL(0.02 * l), 0 == l ? a = o.node.position : l == r - 1 && (s = o.node.position);
      }

      if (a) {
        var u = cc.instantiate(this.fadePrefab);
        u.setPosition(a.x - this.gridSize / 2, a.y);
        u.angle = 90;
        u.scale = 1 / this.gridBgSp.node.scale;
        this.patices.addChild(u);
        cc.tween(u).to(0.02 * (r - 1), {
          position: s
        }).delay(0.2).call(function () {
          u.destroy();
        }).start();
      }
    } else if (void 0 === t) {
      for (a = void 0, s = void 0, l = 0; l < i; l++) {
        (o = n[e + l * i]).isEmpty && (o.select(c.X, !0), this.treeCheck(i - 1 - l, e), this.iceCheck(i - 1 - l, e)), o.playHL(0.02 * l), 0 == l ? a = o.node.position : l == r - 1 && (s = o.node.position);
      }

      if (a) {
        var p = cc.instantiate(this.fadePrefab);
        p.setPosition(a.x - this.gridSize / 2, a.y);
        p.scale = 1 / this.gridBgSp.node.scale;
        this.patices.addChild(p);
        cc.tween(p).to(0.02 * (r - 1), {
          position: s
        }).delay(0.2).call(function () {
          p.destroy();
        }).start();
      }
    } else {
      var d = void 0;

      for (l = 0; l < i; l++) {
        for (var h = 0; h < r; h++) {
          d = 0.02 * (i - l - 1 + h), (o = n[l + h * i]).playHL(d);
        }
      }
    }
  };

  e.prototype.raceRefresh = function (t, e) {
    if (o.type == _pInfo.gameType.race) {
      var n = this.raceRefreshPop;
      n.push({
        r: t,
        c: e
      });
      1 == n.length && (this.canTouch = !1, this.scheduleOnce(this.checkRaceFresh));
    }
  };

  e.prototype._raceRefresh = function (t, e) {
    if (this.isRefreshing) this.raceRefreshPop.push({
      r: t,
      c: e
    });else {
      this.isRefreshing = !0;
      var n = this.raceDensity;
      (this.raceRefeshTime = this.raceRefeshTime + 1) % 2 == 0 && ((n = this.raceDensity - 0.05) < this.raceMinDenstiy && (n = this.raceMinDenstiy), this.raceDensity = n);
      var i = this.baseData;
      var r = this.workData;
      var a = this.grids;
      var s = this.gridPrefab;
      var l = this.tilesParent;
      var u = cc.instantiate;
      var p = null != e;
      var d = null != t;
      d && (t = 9 - t);
      o.type;

      for (var h, f = p && e < 5, g = f ? -1 : 1, y = d && t < 5, m = y ? -10 : 10, v = 0, _ = 1, b = 0, w = 1, S = 0, T = void 0; S < 10; S++) {
        T = y ? S : 9 - S;

        for (var I = 0, D = void 0; I < 10; I++) {
          var P = a[x = (D = f ? I : 9 - I) + 10 * T];
          var k = i[x];
          var R = r[x];
          if (p && (0 == k && 1 == w && b++, w = k), p && D == e || d && T == t) P.playFallDown();else if (p ? (f && D > e || !f && D < e) && (P.playWalk(a[x + g].node.position), a[x + g] = P, i[x + g] = k, r[x + g] = R) : d && (y && T > t || !y && T < t) && (P.playWalk(a[x + m].node.position), a[x + m] = P, i[x + m] = k, r[x + m] = R), p && 9 == I || d && 9 == S) {
            0 == (h = Math.random() < n ? 1 : 0) && 1 == _ && v++;
            (v > 2 || b > 2) && (h = 1, v--);
            _ = h;
            b = 0;
            w = 0;
            var N = P.node;
            var C = u(s);
            C.setPosition(N.position);
            C.setParent(l);
            C.setScale(0);
            var O = C.getComponent("grid");
            O.init(h);
            O.initType();
            O.playShow(N.scale);
            a[x] = O;
            i[x] = h;
            r[x] = c.Empty;
          }
        }
      }

      if (d) {
        t = y ? 9 : 0;
        var M = [];
        var L = 0;
        var A = void 0;

        for (I = 0; I < 10; I++) {
          var E = a[I + 10 * t].isRight;
          M[M.length - 1] != E && (E && L++, M.push(E));
        }

        if (L > 4) for (_ = 1, I = 0; I < 10; I++) {
          var x;
          var B = a[x = I + 10 * t];
          if (1 == _ && 0 == B.isRight) B.isRight = 1, i[x] = 1, A = !0;else if (A) break;
          _ = B.isRight;
        }
      }

      this.addHeads();
      this.scheduleOnce(this.checkRaceFresh.bind(this), 0.5);
    }
  };

  e.prototype.checkRaceFresh = function () {
    var t = this.raceRefreshPop;

    if (this.isRefreshing = !1, t.length) {
      var e = t.pop();
      var o = e.r;
      var n = e.c;

      this._raceRefresh(o, n);
    } else this.canTouch = !0;
  };

  e.prototype.OnClickGrid = function (t, e, o) {
    if (!(t < 0 || e < 0 || t >= this.rows_ || e >= this.cols_)) {
      var n = this.GetWorkGridTag(t, e);
      var i = -1;
      n == c.Empty ? i = this.pen : n == c.O && this.pen == c.O ? i = c.Empty : n == c.X && this.pen == c.X && (i = c.Empty);
      this.fillMode == p.Set && n != c.Empty || this.fillMode == p.Clean && n == c.Empty || (-1 != i && (this.fillMode == p.None && (this.fillMode = n == c.Empty ? p.Set : p.Clean), !this.SetWorkGridTag(i, t, e, o) && (this.RefreshRowHeadState(t), this.RefreshColHeadState(e), this.CheckAllRight())), this.lastTouchRow = t, this.lastTouchCol = e);
    }
  };

  e.prototype.OnClickRowHead = function (t) {
    if (!this.byGuide && !this.IsRowLogicRight(t)) {
      var e = this.gridHeadRowVec[t];
      e.treeMask || e.iceMask || (this.curItemBtn && 2 == this.curItemIdx ? (this.updateItemNum(this.curItemIdx, !0), this.useItem(null, t, null)) : this.showOrHideSelectMask(t), _vb["default"].p(_vb.VEnum3.SHORT));
    }
  };

  e.prototype.OnClickColHead = function (t) {
    if (!this.byGuide && !this.IsColLogicRight(t)) {
      var e = this.gridHeadColVec[t];
      e.treeMask || e.iceMask || (this.curItemBtn && 2 == this.curItemIdx ? (this.updateItemNum(this.curItemIdx, !0), this.useItem(null, null, t)) : this.showOrHideSelectMask(void 0, t), _vb["default"].p(_vb.VEnum3.SHORT));
    }
  };

  e.prototype.showOrHideSelectMask = function (t, e) {
    var o = this.selectMask;
    var n = this.selectData;
    if (void 0 === t && void 0 === e) o.active = !1, -1 != n.row && ((m = this.gridHeadRowVec[n.row].shineBg).active = !1, cc.Tween.stopAllByTarget(m), n.row = -1), -1 != n.col && ((m = this.gridHeadColVec[n.col].shineBg).active = !1, cc.Tween.stopAllByTarget(m), n.col = -1);else {
      var i = o.active;
      var r = this.selectMaskBg;
      var a = this.gridBgSp.node;
      var s = this.gridSize;
      var c = this.cols_;
      var l = this.lineW;
      var u = c * s + this.gridsStartX + l * (c / 5 - 1);
      var p = u / 2;
      var d = p;

      if (i || (o.active = !0, o.width = o.height = u, o.setPosition(p, d), cc.tween(r).set({
        opacity: 0
      }).to(0.2, {
        opacity: 128
      }).start()), void 0 !== t) {
        var h = this.gridHeadRowVec;
        var f = n.row;
        var g = n.col;

        if (-1 != f && ((m = h[f].shineBg).active = !1, cc.Tween.stopAllByTarget(m)), f == t) {
          if (n.row = -1, -1 == g) return void (o.active = !1);
          o.y = d;
          o.height = u;
        } else o.height = s, n.row = t, o.y = t * s + s / 2 + Math.floor(t / 5) * l - 1, (m = h[t].shineBg).active = !0, cc.tween(m).to(0.8, {
          opacity: 0
        }).to(0.8, {
          opacity: 100
        }).union().repeatForever().start();
      } else {
        var y = this.gridHeadColVec;

        if (f = n.row, -1 != (g = n.col) && ((m = y[g].shineBg).active = !1, cc.Tween.stopAllByTarget(m)), g == e) {
          if (n.col = -1, -1 == f) return void (o.active = !1);
          o.x = p;
          o.width = u;
        } else {
          var m;
          o.width = s;
          n.col = e;
          o.x = e * s + s / 2 + this.gridsStartX + Math.floor(e / 5) * l - 1;
          (m = y[e].shineBg).active = !0;
          cc.tween(m).to(0.8, {
            opacity: 0
          }).to(0.8, {
            opacity: 100
          }).union().repeatForever().start();
        }
      }

      r.setPosition(a.x - o.x, a.y - o.y + 8);
    }
  };

  e.prototype.CancelGridTouch = function () {
    this.soundIdx = 1;
    this.tipNode.active && this.tipAni.play(g.tipOut);
    this.click_touch_ = !1;
    this.gridTouchStart && this.gridTouchStart.area != l.None && (this.gridTouchStart.area = l.None, this.OperationStepEnd());
  };

  e.prototype.IsAllRight = function () {
    if (this.baseOTotal < 0) {
      this.baseOTotal = 0;

      for (var t = 0; t < this.grid_count; t++) {
        this.baseData[t] == c.O && (this.baseOTotal += 1);
      }
    }

    var e = this.baseOTotal;
    var o = 0;

    for (t = 0; t < this.workData.length; t++) {
      this.workData[t] == c.O && (o += 1);
    }

    if (e != o) return !1;

    for (var n = 0; n < this.rows_; n++) {
      if (!this.IsRowLogicRight(n)) return !1;
    }

    for (var i = 0; i < this.cols_; i++) {
      if (!this.IsColLogicRight(i)) return !1;
    }

    return !0;
  };

  e.prototype.CheckAllRight = function () {
    !this.isAllRight && this.IsAllRight() && (this.isAllRight = !0, this.showOrHideSelectMask(), this.gameWin());
  };

  e.prototype.winSpScaleAni = function () {
    var t = this.winSpParent;
    var e = this.winAniNode.parent;
    var o = new cc.Vec3();
    t.parent.convertToWorldSpaceAR(t.position, o);
    e.convertToNodeSpaceAR(o, o);
    t.setParent(e);
    t.setSiblingIndex(3);
    t.setScale(this.gridBgSp.node.scale);
    t.setPosition(o);
    cc.tween(t).to(0.5, {
      scale: 1.2
    }).delay(5 / 30).to(1, {
      scale: 0.5,
      x: 0,
      y: _global["default"].padScale ? 75 : 175
    }, {
      easing: "cubicIn"
    }).call(this.PlayFireworks.bind(this)).by(5 / 30, {
      scale: 0.05
    }, {
      easing: "cubicOut"
    }).by(5 / 30, {
      scale: -0.05
    }, {
      easing: "cubicIn"
    }).start();
  };

  e.prototype.tilesWinAni = function () {
    var t = this.map_node_;
    cc.tween(t).delay(20 / 30).to(1, {
      scale: 0.606,
      x: -288,
      y: 100
    }, {
      easing: "cubicIn"
    }).call(this.PlayFireworks.bind(this)).start();
  };

  e.prototype.gameWin = function () {
    var t;
    var e;
    var n = this;
    this.canTouch = !1;

    _sound["default"].ins.play(_sound["default"].WIN); // 💝 卷宝专属现金奖励系统 - 游戏完成后的处理


    var self = this; // 立即获取当前游戏状态，避免作用域问题

    var currentGameType = o.type;

    var currentLevel = _pInfo["default"].ins.getPuzzleLvl();

    console.log('🎮 游戏完成检测 - 类型:', currentGameType, '关卡:', currentLevel);
    console.log('🎮 游戏完成检测 - o对象:', o);
    console.log('🎮 游戏完成检测 - _pInfo.gameType:', _pInfo.gameType);
    this.scheduleOnce(function () {
      try {
        // 恢复原始关卡进度（如果是手动选择的关卡）
        if (_global["default"].originalLevel) {
          console.log('🔄 恢复原始关卡进度:', _global["default"].originalLevel);

          _pInfo["default"].ins.setPuzzleLvl(_global["default"].originalLevel);

          _global["default"].originalLevel = null;
        }

        var isNormalGame = currentGameType == _pInfo.gameType.normal;
        console.log('🔍 游戏类型检查 - 是否普通游戏:', isNormalGame, '游戏类型值:', currentGameType, '普通类型值:', _pInfo.gameType.normal);

        if (isNormalGame) {
          var difficulty = self.getLevelDifficulty(currentLevel);
          console.log('🎯 关卡' + currentLevel + '完成，难度:', difficulty); // 触发现金奖励检查

          var hasReward = _rewardMgr["default"].onPuzzleComplete(difficulty, true);

          if (hasReward) {
            console.log("🎉 现金奖励已立即添加到余额并更新UI！");
          } else {
            console.log("⭕ 本次没有获得现金奖励（随机概率40%不触发）");
          }
        } else {
          console.log('ℹ️ 非普通游戏模式，跳过现金奖励');
        }
      } catch (rewardError) {
        console.log("现金奖励系统错误:", rewardError);
        console.error(rewardError);
      }
    }, 1.0); // 减少延迟到1秒

    var i;
    var r;
    var a = _pInfo["default"].ins;
    var s = o.type;
    var c = s == _pInfo.gameType.normal;
    var l = s == _pInfo.gameType.practice;
    var u = s == _pInfo.gameType.festival;
    var p = s == _pInfo.gameType.freedom;
    var d = s == _pInfo.gameType.challenge;

    _taskMgr["default"].taskCheck(s);

    (c || u || p) && _festivalMgr["default"].ins.updPro(_festivalMgr.fesTaskKey.throughMain, 1);
    this.eventDot(!0);
    u ? r = _festivalMgr["default"].ins.getFesPuzzleSprFrame() : p || d || (r = c ? _levelMgr["default"].ins.getPuzzleSprFrame(_pInfo["default"].ins.getPuzzleLvl()) : _levelMgr["default"].ins.getPracitceSprfFrame(this.practiceId));
    var h = this.node.getChildByName("win");
    var g = h.getChildByName("top");
    var y = h.getChildByName("mid");

    if (l) {
      g.active = !1;
      y.active = !1;
      var m = h.getChildByName("down");

      if (m.getChildByName("adGetBtn").active = !1, m.getChildByName("nextPraBtn").active = !this.byGuide, this.byGuide) {
        var v = m.getChildByName("getBtn");
        v.x = 0;
        v.opacity = 0;
      }
    } else {
      var _ = void 0;

      d ? (this.unschedule(this._chaCD), _challengeMgr["default"].ins.winChallenge(o.challageData.date), _global["default"].loadToRace = 3) : p ? (this.levelLbl.node.parent.active = !1, g.scaleX = 0, _ = 15 == this.rows_) : (i = c ? a.getPuzzleLvl() : _festivalMgr["default"].ins.getFesPuzzleLv(), this.levelLbl.string = "" + i, _ = i % 3 == 0, c ? a.finishPuzzleLvl() : _festivalMgr["default"].ins.finishFesPuzzleLv());
      a.recordGameResult(s, !0, this.score, void 0, i);
      var b = {};

      if (b[s !== _pInfo.gameType.festival || _festivalMgr["default"].ins.isJigsawMax() ? "puzzle_pieces" : "newYear_pieces"] = 1, d) {
        this.cons2Lbl.string = this.useTimeLbl.string;
        this.mult = 3;
        this.adGetBtn.node.adDotData = "每日挑战三倍奖励";
        var T = o.challageData.date.num || 1;
        this.consBestLbl.string = T + "";
        b = (null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.daily_challenge) || void 0 === e ? void 0 : e.reward) || {
          times: 50,
          coin: 100,
          puzzle_pieces: 10
        };
        o.challageData.date.isFin && (b = {});
      } else {
        var I = a.getConsWinTimes();
        this.cons2Lbl.string = I + "";
        this.consBestLbl.string = this.recData.heWins;
        var D = this.baseReward = 2;
        var k = this.reward = Math.min(D * I, 20);
        this.mult = _ ? 10 : 3;
        this.adGetBtn.node.adDotData = _ ? "主线十倍奖励" : "主线三倍奖励";
        this.tenNode.active = _;
        this.threeNode.active = !_;
        this.rew1Lbl.string = D + "";
        this.rew2Lbl.string = k + "";
      }

      for (var R in b) {
        var C = b[R];
        var O = cc.instantiate(this.rewItemPre);
        O.scale = 1.3;
        O.getComponent(_item["default"]).initByData(R, C);
        this.rewItems.content.addChild(O);
      }

      if (!d || !o.challageData.date.isFin) {
        var L = this.rewItems.content.children[0].width * this.rewItems.content.childrenCount;
        this.rewItems.node.x = L > this.rewItems.node.width ? -180 : (this.rewItems.node.width - L) / 2 - 180;
        L = Math.min(L, 360);
        this.rewItems.node.width = L;
        this.rewItems.scrollToLeft();
      }

      var B = _cfgMgr["default"].serverCfg.share_rules.rules.main_line;
      var V = a.getNormalShareTime();
      this.shareIcon.spriteFrame = cc.assetManager.getBundle("resSps").get("item/" + B.props, cc.SpriteFrame);
      this.shareLbl.string = "+" + B.val;
      this.shareIcon.node.active = V < B.daily_limit_reward_times;

      _res["default"].ins.getBundleByString("prefab").then(function (t) {
        t.preload("prefab/game/banner", cc.Prefab);
      });
    }

    r ? r.then(function (t) {
      var e = n.cols_;
      var o = n.rows_;
      var i = n.gridSize;
      var r = n.map_node_;
      var a = n.gridBgSp.node;
      var s = a.scale;
      var c = a.x + a.width * s / 2 + r.x;
      var l = a.y + a.height * s / 2 + r.y;
      _global["default"].padScale && (l -= 150, g.isValid && (g.removeComponent(cc.Widget), n.scheduleOnce(function () {
        g.y = -100;
      })), h.getChildByName("mid").y = -100);
      n.winAniNode.setPosition(c, l);
      n.winAniNode.setScale(s);
      var u = n.lastTouchRow - o / 2;
      var p = (n.lastTouchCol - e / 2) * i + i / 2;
      var d = u * i + i / 2;
      n.winCircleMask.setPosition(p, d);
      n.winSpParent.setPosition(-p, -d);
      n.winLight.setPosition(p, d);
      var y = new cc.Node();
      y.addComponent(cc.Sprite).spriteFrame = t;
      y.parent = n.node;
      var m = y.width;
      var v = y.height;

      var _ = new cc.RenderTexture();

      _.initWithSize(y.width, y.height);

      var b = new cc.Node();
      b.setParent(y);
      var w = b.addComponent(cc.Camera);
      w.clearFlags |= cc.Camera.ClearFlags.COLOR;
      w.backgroundColor = cc.color(0, 0, 0, 0);
      w.zoomRatio = cc.winSize.height / v;
      w.targetTexture = _;
      w.render(y);
      b.destroy();
      y.destroy();
      n.scheduleOnce(function () {
        var t = _.readPixels();

        _.destroy();

        var r = n.winSps;
        var a = J(m / e);
        var c = J(v / o);
        var l = n.singleSf;
        i /= s;

        for (var u = 0; u < e; u++) {
          for (var p = 0; p < o; p++) {
            var d = p * c * m + u * a;
            var h = t[d *= 4];
            var g = t[d + 1];
            var y = t[d + 2];
            var b = (t[d + 3], new cc.Node());
            var w = b.addComponent(cc.Sprite);
            w.spriteFrame = l;
            w.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            b.parent = r;
            b.color = new cc.Color(h, g, y);
            b.setContentSize(i, i);
            b.setPosition(u * i + i / 2, p * i + i / 2);
          }
        }

        n.scheduleOnce(function () {
          n.playAni(f.gameWin);
        }, 0.5);
      });
    })["catch"](function () {
      n.scheduleOnce(function () {
        n.playAni(f.gameWinFailSf);
      }, 0.5);
    }) : this.scheduleOnce(function () {
      n.playAni(f.gameWinFailSf);
    }, 0.5);
  };

  e.prototype.PlayFireworks = function () {
    if (!this.byGuide) {
      var t = this.consBestLbl.node.parent.parent;
      var e = this.levelLbl.node.parent.parent;

      _res["default"].ins.getBundleByString("prefab").then(function (o) {
        t.isValid && o.load("prefab/game/banner", cc.Prefab, function (o, n) {
          if (!o && t.isValid) {
            var i = cc.instantiate(n);
            var r = e.getChildByName("img_gk_ss");
            var a = e.convertToWorldSpaceAR(r.getPosition());
            var s = t.convertToNodeSpaceAR(a);
            i.setParent(t);
            i.y = s.y - 100;
            i.getComponent(_banner["default"]).play();
          }
        });
      })["catch"](function () {});
    }
  };

  e.prototype.OperationStepBegin = function () {
    var t = this.opStep;
    t.grids = [];
    t.row_autox_cols.clear();
    t.col_autox_rows.clear();
    Object.assign(t.row_autox_cols, this.colAutoXCols);
    Object.assign(t.col_autox_rows, this.colAutoXRows);
    t.hint_rows = [];
    t.hint_cols = [];
    t.is_row_autox_changed = !1;
    t.is_col_autox_changed = !1;
    t.is_hint_rows_changed = !1;
    t.is_hint_cols_changed = !1;
  };

  e.prototype.OperationStepEnd = function () {
    this.isAllRight || (this.opStep.is_row_autox_changed || this.opStep.is_col_autox_changed || this.opStep.is_hint_rows_changed || this.opStep.is_hint_cols_changed || 0 != this.opStep.grids.length) && (this.opStep.is_row_autox_changed || this.opStep.row_autox_cols.clear(), this.opStep.is_col_autox_changed || this.opStep.col_autox_rows.clear());
  };

  e.prototype.OperationStepBySetWorkTag = function (t, e, o) {
    this.opStep.grids.push({
      tag_undo: t,
      tag_redo: e,
      grid: o
    });
  };

  e.prototype.OnBtnOX = function () {
    if (!this.oxAning && (this.resetCD(), this.canTouch)) {
      var t = this.pen;
      var e = (t = this.pen = t == c.X ? c.O : c.X) == c.X;
      this.oxAning = !0;
      this.oxTagAni.play(e ? "togToX" : "togToO");
      this.playShine();

      _vb["default"].p(_vb.VEnum3.SHORT);
    }
  };

  e.prototype.oxAniDone = function () {
    var t = this;
    this.byGuide ? this.scheduleOnce(function () {
      t.updateGuideStep();
      t.oxAning = !1;
    }, 0.2) : this.oxAning = !1;
  };

  e.prototype.playShine = function () {
    this.grids.forEach(function (t) {
      t.shine();
    });
  };

  e.prototype.OnBtnSet = function () {
    if (!this.curAni) {
      this.showOrHideSelectMask();
      this.resetCD();
      var t = this.isShowBtn = !this.isShowBtn;
      this.playAni(t ? f.showBtns : f.hideBtns);
      this.canTouch = !t;
      this.raceChgVis();

      _vb["default"].p(_vb.VEnum3.SHORT);
    }
  };

  e.prototype.OnBtnHelp = function () {
    this.resetCD();

    _panelMgr["default"].ins.open("ui/ui_raceTip", {
      pageIdx: o.type == _pInfo.gameType.race ? 2 : 0
    });

    _vb["default"].p(_vb.VEnum3.SHORT);
  };

  e.prototype.OnBtnMusic = function () {
    this.resetCD();

    _panelMgr["default"].ins.open("ui/ui_set", null);

    _vb["default"].p(_vb.VEnum3.SHORT);
  };

  e.prototype.OnBtnTip = function () {
    this.resetCD();
    this.tipTog = !this.tipTog;

    _uData["default"].ins.setSetting({
      tip: this.tipTog
    });

    this.updateTip();

    _vb["default"].p(_vb.VEnum3.SHORT);
  };

  e.prototype.updateTip = function () {
    this.tipActNode.active = this.tipTog;
    this.tipUnActNode.active = !this.tipTog;
  };

  e.prototype.OnBtnHome = function () {
    this.resetCD();

    _panelMgr["default"].ins.open("ui/ui_rePlay", {
      curScore: this.score,
      continueCb: this.continueCb.bind(this)
    }, {
      MaskNoHide: !0
    });

    _vb["default"].p(_vb.VEnum3.SHORT);
  };

  e.prototype.OnBtnShare = function () {
    var t = this;
    this.resetCD();

    _idx.platform.shareVideoRecord().then(function (e) {
      var o = t.shareIcon;

      if (1 == e && o && o.isValid && o.node.active) {
        var n = _pInfo["default"].ins;
        var i = _cfgMgr["default"].serverCfg.share_rules.rules.main_line;
        var r = i.props;
        var a = i.val;
        o.spriteFrame = cc.assetManager.getBundle("resSps").get("item/" + r, cc.SpriteFrame);
        var s = n.getNormalShareTime();
        n.setNormalShareTime(s + 1);
        var c = void 0;

        switch (r) {
          case "coin":
            c = n.getCoin(), n.addCoin(a);
            break;

          case "times":
            n.addPower(a);
            break;

          default:
            _bagMgr["default"].ins.addItem(r, a);

        }

        var l = o.node.parent.convertToWorldSpaceAR(o.node.position);

        _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: [{
            itemId: r,
            worldPos: l,
            value: a
          }],
          showCoin: c
        });

        t.shareBtn.active = !1;
      }
    });
  };

  e.prototype.continueCb = function () {
    this.canTouch = !0;
    this.raceChgVis();
    this.OnBtnSet();
  };

  e.prototype.raceChgVis = function () {
    if (o.type == _pInfo.gameType.race) {
      var t = this.canTouch;
      this.tilesParent.active = t;
      this.gridHeadColVec.forEach(function (e) {
        e.labels.forEach(function (e) {
          e.active = t;
        });
      });
      this.gridHeadRowVec.forEach(function (e) {
        e.labels.forEach(function (e) {
          e.active = t;
        });
      });
    }
  };

  e.prototype.OnBtnItem = function (t, e) {
    var n = this;
    if (this.showOrHideSelectMask(), this.resetCD(), this.canTouch) if (this.curItemBtn) this.OnBtnHideItem();else {
      this.curItemIdx = Number(e);
      var i = this.items[e];

      if (i.itemMax != i.itemCur) {
        if (0 == i.count) return this.canTouch = !1, this.raceChgVis(), void _panelMgr["default"].ins.open("ui/ui_getItem", {
          itemId: i.icon,
          cb: this.updateItemNum.bind(this),
          closeCb: function closeCb() {
            n.canTouch = !0;
            n.raceChgVis();
          },
          gType: o.type
        });
        var r = this.curItemBtn = t.currentTarget;
        r.setSiblingIndex(7);

        _res["default"].ins.lSF("item/" + i.icon, this.itemSelectIcon);

        this.itemSelectLbl.string = i.tip;
        this.itemSelectEff.setPosition(r.position);
        this.canTouch = !1;
        this.playAni(f.openItemSelect);
        this.chgGridItemShine(!0);

        _vb["default"].p(_vb.VEnum3.SHORT);
      } else _tipMgr["default"].ins.showTip("每关只能使用" + i.itemMax + "次");
    }
  };

  e.prototype.OnBtnHideItem = function () {
    this.resetCD();
    this.canTouch && (this.playAni(f.closeItemSelect), this.chgGridItemShine(!1), _vb["default"].p(_vb.VEnum3.SHORT));
  };

  e.prototype.tmpGet = function (t) {
    var e;
    var n;
    var i;

    switch (this.resetCD(), o.type) {
      case _pInfo.gameType.normal:
      case _pInfo.gameType.freedom:
        i = _levelMgr["default"].ins.updJigAndPop;
        break;

      case _pInfo.gameType.festival:
        i = _levelMgr["default"].ins.popFestival;
    }

    if (o.type == _pInfo.gameType.challenge) {
      h = t ? this.mult : 1;
      var r = (null === (n = null === (e = _cfgMgr["default"].serverCfg) || void 0 === e ? void 0 : e.daily_challenge) || void 0 === n ? void 0 : n.reward) || {
        times: 50,
        coin: 100,
        puzzle_pieces: 10
      };
      o.challageData.date.isFin && (r = {});
      var a = [];
      var s = 0;

      for (var c in r) {
        var l = r[c] * h;
        var u = this.rewItems.content.children[s];
        var p = u.parent.convertToWorldSpaceAR(u.position);
        var d = {};
        d.itemId = c;
        d.worldPos = p;
        d.value = Number(l);
        a.push(d);

        _bagMgr["default"].ins.addItem(c, l);

        s++;
      }

      a.length ? _panelMgr["default"].ins.open("ui/ui_flyAni", {
        itemDatas: a,
        hideCb: function hideCb() {
          _pInfo.chgScene(_pInfo.sceneType.main, {
            cb: i
          });
        }
      }) : _pInfo.chgScene(_pInfo.sceneType.main, {
        cb: i
      });
    } else if (this.reward) {
      // 💝 优先检查现金奖励，如果有就完全跳过游戏道具奖励
      if (_rewardMgr["default"].hasPendingCashReward()) {
        console.log("🎯 检测到现金奖励待处理，完全跳过游戏道具奖励逻辑，直接返回主界面");
        return void _pInfo.chgScene(_pInfo.sceneType.main, {
          cb: i
        });
      } // 💝 无现金奖励时，执行原有游戏道具奖励逻辑


      if (!t && 10 == this.mult) {
        return void _panelMgr["default"].ins.open("ui/ui_getReward", {
          gold: this.reward + this.baseReward
        }, {
          MaskNoHide: !0
        });
      }

      var h = t ? this.mult : 1;

      var f = _pInfo["default"].ins.getCoin();

      _pInfo["default"].ins.addCoin((this.reward + this.baseReward) * h);

      var g;
      g = o.type !== _pInfo.gameType.festival || _festivalMgr["default"].ins.isJigsawMax() ? "puzzle_pieces" : "newYear_pieces";

      _bagMgr["default"].ins.addItem(g, h);

      var y = this.baseReward * h;
      var m = this.reward * h;
      var v = h;
      var _ = this.rew1Lbl.node;
      var b = this.rew2Lbl.node;
      var w = _.parent;
      var S = this.rewItems.content.children[0];
      var T = w.convertToWorldSpaceAR(_.position);
      var I = w.convertToWorldSpaceAR(b.position);
      var D = S.parent.convertToWorldSpaceAR(S.position);

      _panelMgr["default"].ins.open("ui/ui_flyAni", {
        itemDatas: [{
          itemId: "coin",
          worldPos: T,
          value: y
        }, {
          itemId: "coin",
          worldPos: I,
          value: m
        }, {
          itemId: g,
          worldPos: D,
          value: v
        }],
        hideCb: function hideCb() {
          _pInfo.chgScene(_pInfo.sceneType.main, {
            cb: i
          });
        },
        showCoin: f
      });
    } else _pInfo.chgScene(_pInfo.sceneType.main, {
      cb: i
    });
  };

  e.prototype.OnGet = function () {
    this.tmpGet(!1);
  };

  e.prototype.OnAdGet = function () {
    this.tmpGet(!0);
  };

  e.prototype.OnNextPracice = function () {
    _pInfo.chgScene(_pInfo.sceneType.game, {
      gameType: _pInfo.gameType.practice
    });
  };

  e.prototype.chgGridItemShine = function (t) {
    if (2 == this.curItemIdx) {
      var e = o.type == _pInfo.gameType.race;
      this.gridHeadColVec.forEach(function (o) {
        if (!o.allRight || e) {
          var n = o.shineBg;
          n.active = t, t ? cc.tween(n).to(0.8, {
            opacity: 0
          }).to(0.8, {
            opacity: 100
          }).union().repeatForever().start() : cc.Tween.stopAllByTarget(n);
        }
      });
      this.gridHeadRowVec.forEach(function (o) {
        if (!o.allRight || e) {
          var n = o.shineBg;
          n.active = t;
          t ? cc.tween(n).to(0.8, {
            opacity: 0
          }).to(0.8, {
            opacity: 100
          }).union().repeatForever().start() : cc.Tween.stopAllByTarget(n);
        }
      });
    } else this.grids.forEach(function (e) {
      e.playItemTip(t);
    });
  };

  e.prototype.openLose = function () {
    0 != this.relifeTime ? _panelMgr["default"].ins.open("ui/ui_getHeart", {
      time: this.relifeTime,
      cb: this.getHeartCb.bind(this),
      closeCb: this.getHeartCloseCb.bind(this),
      gType: o.type
    }, {
      MaskNoHide: !0
    }) : this.getHeartCloseCb();
  };

  e.prototype.getHeartCb = function () {
    this.relifeTime > 0 && this.relifeTime--;
    this.playAni(f.gameRelife);
  };

  e.prototype.getHeartCloseCb = function () {
    var t = this;
    this.scheduleOnce(function () {
      var e = o.type === _pInfo.gameType.race ? "ui/ui_rePlayRace" : "ui/ui_rePlay";

      _panelMgr["default"].ins.open(e, {
        curScore: t.score
      }, {
        MaskNoHide: !0
      });
    }, 0.5);
  };

  e.prototype.onAppHide = function () {};

  e.prototype.updateScore = function (t) {
    void 0 === t && (t = 1);
    var e = this.score = this.score + t;
    this.scoreLbl.string = e + "";
  };

  e.prototype.playGirlAni = function (t) {
    t != this.curGirlAni && o.type != _pInfo.gameType.race && this.topGirlSk && (this.curGirlAni = t, this.topGirlSk.animation = t, (this.topGirlSk.loop = t == h.idle) && (this.curGirlAni = null));
  };

  e.prototype.playGirlEnd = function () {
    this.curGirlAni != h.idle && (this.curGirlAni = null, this.playGirlAni && this.playGirlAni(h.idle));
  };

  e.prototype.eventDot = function (t) {
    if (o.type == _pInfo.gameType.normal) {
      var e = _pInfo["default"].ins.getPuzzleLvl() + "";

      _idx.platform.reportEvent(_idx.ERepEvt.maindungeon, {
        iswin: t ? "胜利" : "失败",
        level: e
      });
    } else if (o.type == _pInfo.gameType.race) _idx.platform.reportEvent(_idx.ERepEvt.raceEnd, {
      score: this.score
    });else if (o.type == _pInfo.gameType.festival) {
      var n = Number(_festivalMgr["default"].ins.getFesPuzzleLv());

      _idx.platform.reportEvent(_idx.ERepEvt.fesMainPuzzle, {
        iswin: t ? "胜利" : "失败",
        id: n
      });
    } else if (o.type == _pInfo.gameType.challenge) {
      var i = o.challageData.date;
      var r = 1e4 * i.year + 100 * i.month + i.day;

      _idx.platform.reportEvent(_idx.ERepEvt.dailyChallenge, {
        iswin: t ? "胜利" : "失败",
        time: r
      });
    }
  };

  e.prototype.onDestory = function () {
    var t = cc.assetManager.getBundle("resSps");
    t.release("game/normal/top", cc.SpriteFrame);
    t.release("game/race/top", cc.SpriteFrame);
    t.release("game/race/girl", cc.Prefab);
    t.release("game/race/goose", cc.Prefab);
  };

  __decorate([G(cc.Sprite)], e.prototype, "topSp", void 0);

  __decorate([G(cc.Sprite)], e.prototype, "downSp", void 0);

  __decorate([G(cc.Sprite)], e.prototype, "gridBgSp", void 0);

  __decorate([G(cc.Node)], e.prototype, "topNode", void 0);

  __decorate([G(cc.Node)], e.prototype, "downNode", void 0);

  __decorate([G(cc.BitmapFont)], e.prototype, "font4", void 0);

  __decorate([G(cc.Camera)], e.prototype, "camera", void 0);

  __decorate([G(cc.Animation)], e.prototype, "panelAni", void 0);

  __decorate([G(cc.SpriteFrame)], e.prototype, "uHintSf", void 0);

  __decorate([G(cc.SpriteFrame)], e.prototype, "lHintSf", void 0);

  __decorate([G(cc.Prefab)], e.prototype, "gridPrefab", void 0);

  __decorate([G(cc.Node)], e.prototype, "map_node_", void 0);

  __decorate([G(cc.Node)], e.prototype, "tilesParent", void 0);

  __decorate([G(cc.Node)], e.prototype, "selectMask", void 0);

  __decorate([G(cc.Node)], e.prototype, "selectMaskBg", void 0);

  __decorate([G(cc.Node)], e.prototype, "rowHintsParent", void 0);

  __decorate([G(cc.Node)], e.prototype, "colHintsParent", void 0);

  __decorate([G(cc.Label)], e.prototype, "scoreLbl", void 0);

  __decorate([G(cc.Label)], e.prototype, "useTimeLbl", void 0);

  __decorate([G(cc.Label)], e.prototype, "consLbl", void 0);

  __decorate([G(cc.Label)], e.prototype, "cons2Lbl", void 0);

  __decorate([G(cc.Label)], e.prototype, "consBestLbl", void 0);

  __decorate([G(cc.Label)], e.prototype, "rew1Lbl", void 0);

  __decorate([G(cc.Label)], e.prototype, "rew2Lbl", void 0);

  __decorate([G(cc.Node)], e.prototype, "threeNode", void 0);

  __decorate([G(cc.Node)], e.prototype, "tenNode", void 0);

  __decorate([G(cc.Animation)], e.prototype, "oxTagAni", void 0);

  __decorate([G(cc.Prefab)], e.prototype, "fadePrefab", void 0);

  __decorate([G(cc.Node)], e.prototype, "patices", void 0);

  __decorate([G(cc.Prefab)], e.prototype, "heartsPatic", void 0);

  __decorate([G([_heart["default"]])], e.prototype, "hearts", void 0);

  __decorate([G(cc.Node)], e.prototype, "heartInfinity", void 0);

  __decorate([G(cc.Node)], e.prototype, "tipNode", void 0);

  __decorate([G(cc.Label)], e.prototype, "tipLabel", void 0);

  __decorate([G(cc.Animation)], e.prototype, "tipAni", void 0);

  __decorate([G(cc.Node)], e.prototype, "winAniNode", void 0);

  __decorate([G(cc.Node)], e.prototype, "winCircleMask", void 0);

  __decorate([G(cc.Node)], e.prototype, "winSpParent", void 0);

  __decorate([G(cc.Node)], e.prototype, "winSps", void 0);

  __decorate([G(cc.Node)], e.prototype, "winLight", void 0);

  __decorate([G(cc.SpriteFrame)], e.prototype, "singleSf", void 0);

  __decorate([G(cc.Label)], e.prototype, "levelLbl", void 0);

  __decorate([G(cc.Node)], e.prototype, "clockWarn", void 0);

  __decorate([G(cc.Node)], e.prototype, "norClock", void 0);

  __decorate([G(cc.Node)], e.prototype, "speClock", void 0);

  __decorate([G(cc.Label)], e.prototype, "clockLbl", void 0);

  __decorate([G(cc.Label)], e.prototype, "clockLbl2", void 0);

  __decorate([G(cc.Node)], e.prototype, "tipActNode", void 0);

  __decorate([G(cc.Node)], e.prototype, "tipUnActNode", void 0);

  __decorate([G(cc.Node)], e.prototype, "shareBtn", void 0);

  __decorate([G(cc.Sprite)], e.prototype, "shareIcon", void 0);

  __decorate([G(cc.Label)], e.prototype, "shareLbl", void 0);

  __decorate([G(cc.Label)], e.prototype, "noticeLbl", void 0);

  __decorate([G(cc.Animation)], e.prototype, "noticeAni", void 0);

  __decorate([G(cc.Label)], e.prototype, "random_noticeLbl", void 0);

  __decorate([G(cc.Animation)], e.prototype, "random_noticeAni", void 0);

  __decorate([G(cc.Label)], e.prototype, "full_row_colLbl", void 0);

  __decorate([G(cc.Animation)], e.prototype, "full_row_colAni", void 0);

  __decorate([G(cc.Node)], e.prototype, "itemSelectEff", void 0);

  __decorate([G(cc.Sprite)], e.prototype, "itemSelectIcon", void 0);

  __decorate([G(cc.Label)], e.prototype, "itemSelectLbl", void 0);

  __decorate([G(cc.Button)], e.prototype, "adGetBtn", void 0);

  __decorate([G(cc.Label)], e.prototype, "getBtnsp", void 0);

  __decorate([G(cc.ScrollView)], e.prototype, "rewItems", void 0);

  __decorate([G(cc.Prefab)], e.prototype, "rewItemPre", void 0);

  __decorate([G(cc.Node)], e.prototype, "stopPraNode", void 0);

  __decorate([G(cc.Node)], e.prototype, "heartBgNode", void 0);

  return o = __decorate([H], e);
}(cc.Component);

exports["default"] = Y;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZS5qcyJdLCJuYW1lcyI6WyJuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJncmlsQW5pIiwiYyIsImwiLCJ1IiwicCIsImQiLCJoIiwiZiIsImciLCJfY29tIiwicmVxdWlyZSIsIl9ldnRzIiwiX2lkeCIsIl9teVNhZmVBcmVhIiwiX3BDb25zdCIsIl9yZXMiLCJfc291bmQiLCJfdURhdGEiLCJfdmIiLCJfdXZBbmkiLCJfY2ZnTWdyIiwiX2dyaWQiLCJfaGVhcnQiLCJfaXRlbSIsIl9yYW5kb21fbm90aWNlIiwiX2NyZWF0b3IiLCJfZ2xvYmFsIiwiX2JhZ01nciIsIl9jaGFsbGVuZ2VNZ3IiLCJfZmVzdGl2YWxNZ3IiLCJfbGV2ZWxNZ3IiLCJfcGFuZWxNZ3IiLCJfdGFza01nciIsIl9wSW5mbyIsIl90aXBNZ3IiLCJfYmFubmVyIiwiX3Jld2FyZE1nciIsInoiLCJjYyIsIl9kZWNvcmF0b3IiLCJIIiwiY2NjbGFzcyIsIkciLCJwcm9wZXJ0eSIsIkoiLCJNYXRoIiwiZmxvb3IiLCJXIiwiY29sb3IiLCJxIiwiWCIsIk8iLCJFbXB0eSIsInQiLCJOb25lIiwiSGVhZFJvdyIsIkhlYWRDb2wiLCJHcmlkIiwiVmVydGljYWwiLCJIb3Jpem9udGFsIiwiU2V0IiwiQ2xlYW4iLCJydW4iLCJpZGxlIiwiaGFwcHkiLCJzYWQiLCJzaG93QnRucyIsImhpZGVCdG5zIiwiZ2FtZUxvc2UiLCJnYW1lUmVsaWZlIiwiZ2FtZVdpbiIsImdhbWVXaW5GYWlsU2YiLCJvcGVuSXRlbVNlbGVjdCIsImNsb3NlSXRlbVNlbGVjdCIsInRpcEluIiwidGlwT3V0IiwiSyIsIlkiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ0b3BTcCIsInRvcEdpcmxTayIsInRvcEdvb3NlU2siLCJkb3duU3AiLCJncmlkQmdTcCIsInRvcE5vZGUiLCJkb3duTm9kZSIsImRvd25CZWdpblkiLCJmb250NCIsImNhbWVyYSIsInBhbmVsQW5pIiwidUhpbnRTZiIsImxIaW50U2YiLCJncmlkUHJlZmFiIiwibWFwX25vZGVfIiwidGlsZXNQYXJlbnQiLCJzZWxlY3RNYXNrIiwic2VsZWN0TWFza0JnIiwicm93SGludHNQYXJlbnQiLCJjb2xIaW50c1BhcmVudCIsInNjb3JlTGJsIiwic2NvcmUiLCJ1c2VUaW1lTGJsIiwiY29uc0xibCIsImNvbnMyTGJsIiwiY29uc0Jlc3RMYmwiLCJyZXcxTGJsIiwicmV3MkxibCIsInRocmVlTm9kZSIsInRlbk5vZGUiLCJveFRhZ0FuaSIsImZhZGVQcmVmYWIiLCJwYXRpY2VzIiwiaGVhcnRzUGF0aWMiLCJoZWFydHMiLCJoZWFydEluZmluaXR5IiwidGlwTm9kZSIsInRpcExhYmVsIiwidGlwQW5pIiwid2luQW5pTm9kZSIsIndpbkNpcmNsZU1hc2siLCJ3aW5TcFBhcmVudCIsIndpblNwcyIsIndpbkxpZ2h0Iiwic2luZ2xlU2YiLCJsZXZlbExibCIsImNsb2NrV2FybiIsIm5vckNsb2NrIiwic3BlQ2xvY2siLCJjbG9ja0xibCIsImNsb2NrTGJsMiIsInRpcEFjdE5vZGUiLCJ0aXBVbkFjdE5vZGUiLCJzaGFyZUJ0biIsInNoYXJlSWNvbiIsInNoYXJlTGJsIiwibm90aWNlTGJsIiwibm90aWNlQW5pIiwicmFuZG9tX25vdGljZUxibCIsInJhbmRvbV9ub3RpY2VBbmkiLCJmdWxsX3Jvd19jb2xMYmwiLCJmdWxsX3Jvd19jb2xBbmkiLCJpdGVtU2VsZWN0RWZmIiwiaXRlbVNlbGVjdEljb24iLCJpdGVtU2VsZWN0TGJsIiwiYWRHZXRCdG4iLCJnZXRCdG5zcCIsInJld0l0ZW1zIiwicmV3SXRlbVByZSIsInN0b3BQcmFOb2RlIiwiaGVhcnRCZ05vZGUiLCJub3RpY2VQcmVmYWIiLCJyYW5kb21fbm90aWNlUHJlZmFiIiwiZnVsbF9yb3dfY29sUHJlZmFiIiwibGluZVciLCJyZWxpZmVUaW1lIiwiaXNBbGxSaWdodCIsInJvd3NfIiwiY29sc18iLCJncmlkX2NvdW50IiwiZ3JpZHMiLCJiYXNlRGF0YSIsIndvcmtEYXRhIiwiYmFzZU9Ub3RhbCIsImdyaWRIZWFkUm93VmVjIiwiZ3JpZEhlYWRDb2xWZWMiLCJyb3dIZWFkTnVtcyIsInJvd0hlYWRCZWdpbnMiLCJjb2xIZWFkTnVtcyIsImNvbEhlYWRCZWdpbnMiLCJmb250U2l6ZSIsImdyaWRTaXplIiwiZ3JpZHNTdGFydFgiLCJncmlkVG91Y2hTdGFydCIsInRvdWNoRGlyIiwiZmlsbE1vZGUiLCJwZW4iLCJsYXN0VG91Y2hSb3ciLCJsYXN0VG91Y2hDb2wiLCJjbGlja190b3VjaF8iLCJjb2xBdXRvWENvbHMiLCJNYXAiLCJjb2xBdXRvWFJvd3MiLCJvcFN0ZXAiLCJfc2hvd1Jlc3VsdFRpbWUiLCJoZWFydHNOdW0iLCJzb3VuZElkeCIsIml0ZW1zIiwiaWNvbiIsInRpcCIsImNvdW50IiwiaXRlbU1heCIsIml0ZW1DdXIiLCJldmVudEZ1bmMiLCJyYWNlUmVmcmVzaFBvcCIsInNlbGVjdERhdGEiLCJyb3ciLCJjb2wiLCJvIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiZ2V0IiwiX2NhblRvdWNoIiwic2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIm9uTG9hZCIsImJ5R3VpZGUiLCJwYWRTY2FsZSIsInZpZXciLCJzZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSIsIlJlc29sdXRpb25Qb2xpY3kiLCJGSVhFRF9IRUlHSFQiLCJub2RlIiwiZ2V0VmlzaWJsZVNpemUiLCJ3aWR0aCIsIngiLCJwYXJlbnQiLCJmb3JFYWNoIiwicmVtb3ZlQ29tcG9uZW50IiwiV2lkZ2V0Iiwic2NoZWR1bGVPbmNlIiwieSIsImNoaWxkcmVuIiwic2V0UG9zaXRpb24iLCJpIiwiYWN0aXZlIiwicGxhdGZvcm0iLCJzdHJpbmciLCJQRkNvZGUiLCJBbGlwYXkiLCJnZXRTYWZlQXJlYVJlY3QiLCJ5TWluIiwiaW5zIiwicGxheUJHTSIsInJvd19hdXRveF9jb2xzIiwiY29sX2F1dG94X3Jvd3MiLCJoaW50X3Jvd3MiLCJoaW50X2NvbHMiLCJpc19yb3dfYXV0b3hfY2hhbmdlZCIsImlzX2NvbF9hdXRveF9jaGFuZ2VkIiwiaXNfaGludF9yb3dzX2NoYW5nZWQiLCJpc19oaW50X2NvbHNfY2hhbmdlZCIsIm9uIiwiQW5pbWF0aW9uIiwiRXZlbnRUeXBlIiwiRklOSVNIRUQiLCJwbGF5QW5pRG9uZSIsIm94QW5pRG9uZSIsInRpcEFuaURvbmUiLCJvbk9wZXJUYXAiLCJiaW5kIiwib3BFIiwiY2hlY2tMb2NhbERhdGEiLCJ0eXBlIiwiQXJyYXkiLCJmaWxsIiwiY2hlY2tHdWlkZSIsIl9fYXdhaXRlciIsInIiLCJhIiwibSIsInYiLCJfX2dlbmVyYXRvciIsInMiLCJsYWJlbCIsImRlc3Ryb3kiLCJOb2RlIiwiZ3VpZGVTdGVwcyIsInlJZHgiLCJnbG93cyIsImZpbmdlciIsImNvbnRlbnQiLCJub25lIiwieElkeCIsImd1aWRlQ3VyU3RlcCIsImd1aWRlTWF4U3RlcCIsImxlbmd0aCIsImxQcmUiLCJzZW50IiwiZ3VpZGVHbG93cyIsImluc3RhbnRpYXRlIiwic2V0QW5jaG9yUG9pbnQiLCJwdXNoIiwiYWRkQ2hpbGQiLCJndWlkZU5wYyIsImdldEJ1bmRsZUJ5U3RyaW5nIiwidGhlbiIsImxvYWQiLCJQcmVmYWIiLCJpc1ZhbGlkIiwic2V0U2libGluZ0luZGV4IiwiZ2V0Q29tcG9uZW50Iiwic3AiLCJTa2VsZXRvbiIsImFuaW1hdGlvbiIsInNldEVuZExpc3RlbmVyIiwicGxheUdpcmxFbmQiLCJnZXRDaGlsZEJ5TmFtZSIsImd1aWRlTnBjQW5pIiwiZ3VpZGVOcGNMYmwiLCJMYWJlbCIsImd1aWRlRmluZ2VyIiwibFNGIiwiYWRkQ29tcG9uZW50IiwiU3ByaXRlIiwicG9zaXRpb24iLCJndWlkZUZpbmdlclRvZ1kiLCJndWlkZU1hc2siLCJNYXNrIiwiaW52ZXJ0ZWQiLCJndWlkZU1hc2tCZyIsInNwcml0ZUZyYW1lIiwiQmxvY2tJbnB1dEV2ZW50cyIsIkNvbG9yIiwiQkxBQ0siLCJvcGFjaXR5Iiwic2V0Q29udGVudFNpemUiLCJndWlkZUNoZWNrR3JpZCIsInVwZGF0ZUd1aWRlU3RlcCIsInVuc2NoZWR1bGUiLCJyZXBvcnRFdmVudCIsIkVSZXBFdnQiLCJmaW5zaEd1aWRlIiwicGxheUdpcmxBbmkiLCJUd2VlbiIsInN0b3BBbGxCeVRhcmdldCIsIl8iLCJiIiwidyIsIlMiLCJUIiwiSSIsIkQiLCJQIiwiayIsIlIiLCJOIiwiQyIsIk0iLCJMIiwiQSIsIkUiLCJCIiwiYWJzIiwidHdlZW4iLCJzY2FsZSIsInRvIiwidW5pb24iLCJyZXBlYXRGb3JldmVyIiwic3RhcnQiLCJlYXNpbmciLCJwbGF5Iiwib25EZXN0cm95Iiwic3RvcFZpZGVvUmVjb3JkIiwiYWN0aW9uIiwiUFVSQ0hBU0VEIiwib25QdXJjaGFzZWQiLCJMT1NFSEVBUlQiLCJsb3NlSGVhcnQiLCJkYXRhIiwiVVBEQVRFU0NPUkUiLCJ1cGRhdGVTY29yZSIsIlNIT1dWSURFT1NIQVJFIiwiZ2FtZVR5cGUiLCJub3JtYWwiLCJUT1VDSF9TVEFSVCIsIk9uVG91Y2hCZWdhbiIsIlRPVUNIX01PVkUiLCJPblRvdWNoTW92ZWQiLCJUT1VDSF9FTkQiLCJPblRvdWNoRW5kZWQiLCJUT1VDSF9DQU5DRUwiLCJPblRvdWNoQ2FuY2VsbGVkIiwiZ2V0U2V0dGluZyIsInRpcFRvZyIsInVwZGF0ZVRpcCIsImhlaWdodCIsImdldFJlY29yZERhdGEiLCJyYWNlIiwiY2hhbGxlbmdlIiwiZGFpbHkiLCJtYWluIiwicmVjRGF0YSIsImdldENvbnNXaW5UaW1lcyIsImhlV2lucyIsInJlY29yZEdhbWVUaW1lcyIsImFzc2V0TWFuYWdlciIsImxvYWRCdW5kbGUiLCJpbml0R2FtZSIsImdldExldmVsRGlmZmljdWx0eSIsImxldmVsTnVtYmVyIiwiZm9yY2VDYXNoUmV3YXJkIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRMZXZlbCIsImdldFB1enpsZUx2bCIsImRpZmZpY3VsdHkiLCJnZXRDYXNoRGlzcGxheSIsImFkZENhc2giLCJyYW5kb20iLCJlcnJvciIsIm9uZUNsaWNrV2luIiwiY2VsbHMiLCJjZWxsIiwic29sdXRpb24iLCJ1bmRlZmluZWQiLCJ1c2VyU29sdXRpb24iLCJzdGF0ZSIsImdyaWRDb21wIiwic2V0U3RhdGUiLCJJc0FsbFJpZ2h0IiwiZGlyZWN0V2luIiwidGVzdENhc2hSZXdhcmQiLCJvblB1enpsZUNvbXBsZXRlIiwidGVzdExvdmVNZXNzYWdlIiwic2hvd0xvdmVTdXBwb3J0TWVzc2FnZSIsIkYiLCJWIiwiVSIsIloiLCJRIiwiJCIsInR0IiwiZXQiLCJvdCIsIm50IiwiaXQiLCJydCIsImF0Iiwic3QiLCJjdCIsImx0IiwidXQiLCJwdCIsImR0IiwiaHQiLCJmdCIsImd0IiwieXQiLCJtdCIsInZ0IiwiX3QiLCJidCIsInd0IiwiU3QiLCJUdCIsIkl0IiwiRHQiLCJQdCIsImt0IiwiZ2V0QnVuZGxlIiwiZnJlZWRvbSIsInByYWN0aWNlIiwiZmVzdGl2YWwiLCJnZXRQdXp6bGVJbmZvIiwic2l6ZSIsImdldFB1enpsZURhdGEiLCJzZXJ2ZXJDZmciLCJtb3JlX3NldCIsInByb3RlY3RfdGltZXMiLCJ2YWwiLCJwcm90ZWN0X2NoYXJ0ZXIiLCJpbmZpbml0eUxpZmUiLCJyYWNlVGltZSIsInJhY2VNYXhEZW5zdGl5IiwicmFjZU1pbkRlbnN0aXkiLCJyYWNlRGVuc2l0eSIsInJhY2VSZWZlc2hUaW1lIiwicmFjZUZyb21YIiwicmFjZUFsbFgiLCJnZXRSYW5kb21EYXRhIiwidXBkUHJvIiwiZmVzVGFza0tleSIsInJhY2VUaW1lcyIsInF3X2xpbmVfcnVsZXMiLCJydWxlcyIsInJlbGl2ZSIsImxpbWl0Iiwibm90aWNlIiwicmFuZG9tX25vdGljZSIsImZ1bGxfcm93X2NvbCIsIlJ0IiwiZnJlZWRvbVNpemUiLCJiZWdpblByYWN0aWNlIiwiZ2V0UHJhY3RpY2VJZCIsInByYWN0aWNlSWQiLCJnZXRGZXNQdXp6bGVJbmZvIiwiZ2V0RmVzUHV6emxlRGF0YSIsImlzSmlnc2F3TWF4IiwiZGFpbHlfY2hhbGxlbmdlIiwicmV2aXZlIiwiTnQiLCJjaGFUaW1lIiwiY2hhbGxhZ2VEYXRhIiwiZGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsImNoYWxsZW5nZVR5cGUiLCJ0cmVlIiwid29ybSIsImRlbnN0aXkiLCJnZXRSYW5kb21JbnRCZXR3ZWVuIiwicmFkIiwiaWNlIiwicG93Iiwid29ybURhdGEiLCJjb3VudHMiLCJzcHMiLCJMYXlvdXQiLCJUeXBlIiwiSE9SSVpPTlRBTCIsInJlc2l6ZU1vZGUiLCJSZXNpemVNb2RlIiwiQ0hJTERSRU4iLCJpbml0IiwidGV4IiwiZGlyIiwidHJlZURhdGEiLCJjZWlsIiwibWluUm93IiwibWluQ29sIiwibWF4Um93IiwibWF4Q29sIiwicHJlbG9hZCIsIlNwcml0ZUZyYW1lIiwiaWNlRGF0YSIsInJIaW50cyIsImNIaW50cyIsImluZGV4T2YiLCJnZXRVc2luZ1NraW4iLCJiZyIsImxvYWREaXIiLCJfaW5pdEdhbWUiLCJyb2xlIiwic3BlZWQiLCJzY2FsZVgiLCJpbml0VmlldyIsIkdldEJhc2VSb3dIZWFkTnVtcyIsInNldFNjYWxlIiwiaGludFNjYWxlIiwiaGludFdpZHRoIiwiYWRkSGVhZHMiLCJTZXRXb3JrR3JpZFRhZ1dpdGhJbml0IiwidXBkYXRlSXRlbU51bSIsInN0YXJ0VmlkZW9SZWNvcmQiLCJnZXRJc0ZpcnN0UmFjZVRpcCIsInNldEZpcnN0UmFjZVRpcCIsImNhblRvdWNoIiwib3BlbiIsInBhZ2VJZHgiLCJjbG9zZUNiIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJHZXRCYXNlQ29sSGVhZE51bXMiLCJoaW50SGVpZ2h0IiwiQWRkUm93SGVhZCIsIkFkZENvbEhlYWQiLCJiZWdpbkFuaSIsInJhY2VDb3VudERvd24iLCJjaGFDRCIsImNvbW1vbkNEIiwic2NoZWR1bGUiLCJfY29tbW9uQ0QiLCJtYWNybyIsIlJFUEVBVF9GT1JFVkVSIiwidG91Y2hUaW1lIiwiY3VySXRlbUFuaSIsInJlc2V0Q0QiLCJzdG9wIiwiYW5nbGUiLCJoYXNDb3VudERvd24iLCJfcmFjZUNvdW5kRG93biIsInVwZGF0ZVJhY2VOcGNzIiwiVElNRSIsIlZFbnVtMyIsIkRPVUJMRSIsIl9jaGFDRCIsInRpbWVTY2FsZSIsImNhbGwiLCJzaG93T3JIaWRlU2VsZWN0TWFzayIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsIlZlYzIiLCJaRVJPIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJzZXRQYXJlbnQiLCJwbGF5TG9zZSIsIkxPU0UiLCJwbGF5QW5pIiwiZXZlbnREb3QiLCJjdXJJdGVtSWR4IiwidXNlSXRlbSIsIk9uQnRuSGlkZUl0ZW0iLCJnZXRJdGVtQ291bnQiLCJqIiwiT25DbGlja0dyaWQiLCJTSE9WRUwiLCJpc0VtcHR5IiwicmFuZFNvcnQiLCJtaW4iLCJkZWxheSIsIlJPQ0tFVExBVU5DSCIsImJlemllclRvIiwiUk9DS0VUQVRUQUNLIiwiY3VyQW5pIiwicGxheURvd25BbmkiLCJ0aWxlc1dpbkFuaSIsInBsYXlXaW5Eb25lIiwicmVMaWZlIiwiY3VySXRlbUJ0biIsImFkZF9kZXNrdG9wIiwibnVtcyIsImdldEFkZERlc2siLCJCeXRlZGFuY2UiLCJnZXRIZWFydCIsIkdldEJhc2VSb3dCZWdpbk51bXMiLCJHZXRCYXNlQ29sQmVnaW5OdW1zIiwiR2V0V29ya1Jvd0hlYWROdW1zIiwiR2V0V29ya0NvbEhlYWROdW1zIiwic2hpbmVCZyIsImxhYmVscyIsImFsbFJpZ2h0Iiwic2l6ZU1vZGUiLCJTaXplTW9kZSIsIkNVU1RPTSIsIlNMSUNFRCIsImRzdEJsZW5kRmFjdG9yIiwiQmxlbmRGYWN0b3IiLCJPTkUiLCJmb250Iiwic3BhY2luZ1giLCJ2MyIsIlRJTEVEIiwiZ2V0V29ybGRQb2ludEJ5VG91Y2giLCJnZXRTY3JlZW5Ub1dvcmxkUG9pbnQiLCJnZXRMb2NhdGlvbiIsIlRlc3RUb3VjaCIsInRvdWNoIiwiYXJlYSIsImdldENvbnRlbnRTaXplIiwiT3BlcmF0aW9uU3RlcEJlZ2luIiwiT25DbGlja1Jvd0hlYWQiLCJPbkNsaWNrQ29sSGVhZCIsIkNhbmNlbEdyaWRUb3VjaCIsIkdldFdvcmtHcmlkVGFnIiwiU2V0V29ya0dyaWRUYWciLCJPcGVyYXRpb25TdGVwQnlTZXRXb3JrVGFnIiwiU0hPUlQiLCJzcGxpY2UiLCJpc1JpZ2h0IiwidHJlZUNoZWNrIiwiZHJvcCIsImljZUNoZWNrIiwic2VsZWN0IiwiYWRkQ291bnQiLCJwbGF5V29ybUFuaSIsInRtcCIsInRyZWVNYXNrIiwiaWNlTWFzayIsInYyIiwiYnkiLCJuYW1lIiwiaW5pdFR5cGUiLCJjaGlsZHJlbkNvdW50IiwicGxheUhpZ2h0TGlnaHQiLCJHZXRCYXNlR3JpZFRhZyIsIklzUm93TG9naWNSaWdodCIsIklzQ29sTG9naWNSaWdodCIsIklzUm93RmlsbFJpZ2h0IiwiSXNDb2xGaWxsUmlnaHQiLCJSZWZyZXNoUm93SGVhZFN0YXRlIiwicmFjZVJlZnJlc2giLCJlcXVhbHMiLCJSZWZyZXNoQ29sSGVhZFN0YXRlIiwicGxheUhMIiwiY2hlY2tSYWNlRnJlc2giLCJfcmFjZVJlZnJlc2giLCJpc1JlZnJlc2hpbmciLCJwbGF5RmFsbERvd24iLCJwbGF5V2FsayIsInBsYXlTaG93IiwicG9wIiwiQ2hlY2tBbGxSaWdodCIsIk9wZXJhdGlvblN0ZXBFbmQiLCJ3aW5TcFNjYWxlQW5pIiwiVmVjMyIsIlBsYXlGaXJld29ya3MiLCJXSU4iLCJzZWxmIiwiY3VycmVudEdhbWVUeXBlIiwib3JpZ2luYWxMZXZlbCIsInNldFB1enpsZUx2bCIsImlzTm9ybWFsR2FtZSIsImhhc1Jld2FyZCIsInJld2FyZEVycm9yIiwidGFza0NoZWNrIiwidGhyb3VnaE1haW4iLCJnZXRGZXNQdXp6bGVTcHJGcmFtZSIsImdldFB1enpsZVNwckZyYW1lIiwiZ2V0UHJhY2l0Y2VTcHJmRnJhbWUiLCJ3aW5DaGFsbGVuZ2UiLCJsb2FkVG9SYWNlIiwiZ2V0RmVzUHV6emxlTHYiLCJmaW5pc2hQdXp6bGVMdmwiLCJmaW5pc2hGZXNQdXp6bGVMdiIsInJlY29yZEdhbWVSZXN1bHQiLCJtdWx0IiwiYWREb3REYXRhIiwibnVtIiwicmV3YXJkIiwidGltZXMiLCJjb2luIiwicHV6emxlX3BpZWNlcyIsImlzRmluIiwiYmFzZVJld2FyZCIsImluaXRCeURhdGEiLCJzY3JvbGxUb0xlZnQiLCJzaGFyZV9ydWxlcyIsIm1haW5fbGluZSIsImdldE5vcm1hbFNoYXJlVGltZSIsInByb3BzIiwiZGFpbHlfbGltaXRfcmV3YXJkX3RpbWVzIiwiUmVuZGVyVGV4dHVyZSIsImluaXRXaXRoU2l6ZSIsIkNhbWVyYSIsImNsZWFyRmxhZ3MiLCJDbGVhckZsYWdzIiwiQ09MT1IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6b29tUmF0aW8iLCJ3aW5TaXplIiwidGFyZ2V0VGV4dHVyZSIsInJlbmRlciIsInJlYWRQaXhlbHMiLCJnZXRQb3NpdGlvbiIsImNsZWFyIiwiYXNzaWduIiwidGFnX3VuZG8iLCJ0YWdfcmVkbyIsImdyaWQiLCJPbkJ0bk9YIiwib3hBbmluZyIsInBsYXlTaGluZSIsInNoaW5lIiwiT25CdG5TZXQiLCJpc1Nob3dCdG4iLCJyYWNlQ2hnVmlzIiwiT25CdG5IZWxwIiwiT25CdG5NdXNpYyIsIk9uQnRuVGlwIiwic2V0U2V0dGluZyIsIk9uQnRuSG9tZSIsImN1clNjb3JlIiwiY29udGludWVDYiIsIk1hc2tOb0hpZGUiLCJPbkJ0blNoYXJlIiwic2hhcmVWaWRlb1JlY29yZCIsInNldE5vcm1hbFNoYXJlVGltZSIsImdldENvaW4iLCJhZGRDb2luIiwiYWRkUG93ZXIiLCJhZGRJdGVtIiwiaXRlbURhdGFzIiwiaXRlbUlkIiwid29ybGRQb3MiLCJzaG93Q29pbiIsIk9uQnRuSXRlbSIsIk51bWJlciIsImNiIiwiZ1R5cGUiLCJjdXJyZW50VGFyZ2V0IiwiY2hnR3JpZEl0ZW1TaGluZSIsInNob3dUaXAiLCJ0bXBHZXQiLCJ1cGRKaWdBbmRQb3AiLCJwb3BGZXN0aXZhbCIsImhpZGVDYiIsImNoZ1NjZW5lIiwic2NlbmVUeXBlIiwiaGFzUGVuZGluZ0Nhc2hSZXdhcmQiLCJnb2xkIiwiT25HZXQiLCJPbkFkR2V0IiwiT25OZXh0UHJhY2ljZSIsImdhbWUiLCJwbGF5SXRlbVRpcCIsIm9wZW5Mb3NlIiwidGltZSIsImdldEhlYXJ0Q2IiLCJnZXRIZWFydENsb3NlQ2IiLCJvbkFwcEhpZGUiLCJjdXJHaXJsQW5pIiwibG9vcCIsIm1haW5kdW5nZW9uIiwiaXN3aW4iLCJsZXZlbCIsInJhY2VFbmQiLCJmZXNNYWluUHV6emxlIiwiaWQiLCJkYWlseUNoYWxsZW5nZSIsIm9uRGVzdG9yeSIsInJlbGVhc2UiLCJfX2RlY29yYXRlIiwiQml0bWFwRm9udCIsIkJ1dHRvbiIsIlNjcm9sbFZpZXciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxDQUFKO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFBQ0MsS0FBSyxFQUFFLENBQUM7QUFBVCxDQUE3QztBQUNBRCxPQUFPLENBQUNFLE9BQVIsR0FBa0IsS0FBSyxDQUF2QjtBQUNBLElBQUlDLENBQUo7QUFDQSxJQUFJQyxDQUFKO0FBQ0EsSUFBSUMsQ0FBSjtBQUNBLElBQUlDLENBQUo7QUFDQSxJQUFJQyxDQUFKO0FBQ0EsSUFBSUMsQ0FBSjtBQUNBLElBQUlDLENBQUo7QUFDQSxJQUFJQyxDQUFKOztBQUNBLElBQUlDLElBQUksR0FBR0MsT0FBTyxDQUFDLEtBQUQsQ0FBbEI7O0FBQ0EsSUFBSUMsS0FBSyxHQUFHRCxPQUFPLENBQUMsTUFBRCxDQUFuQjs7QUFDQSxJQUFJRSxJQUFJLEdBQUdGLE9BQU8sQ0FBQyxLQUFELENBQWxCOztBQUNBLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLFlBQUQsQ0FBekI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHSixPQUFPLENBQUMsUUFBRCxDQUFyQjs7QUFDQSxJQUFJSyxJQUFJLEdBQUdMLE9BQU8sQ0FBQyxLQUFELENBQWxCOztBQUNBLElBQUlNLE1BQU0sR0FBR04sT0FBTyxDQUFDLE9BQUQsQ0FBcEI7O0FBQ0EsSUFBSU8sTUFBTSxHQUFHUCxPQUFPLENBQUMsT0FB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QXZCLEVBQWtDLFVBQWxDLEVBQThDLEtBQUssQ0FBbkQsQ0FBVjs7RUFDQTBsQixVQUFVLENBQUMsQ0FBQ3p2QixDQUFDLENBQUNKLEVBQUUsQ0FBQzRQLE1BQUosQ0FBRixDQUFELEVBQWlCcE4sQ0FBQyxDQUFDMkgsU0FBbkIsRUFBOEIsWUFBOUIsRUFBNEMsS0FBSyxDQUFqRCxDQUFWOztFQUNBMGxCLFVBQVUsQ0FBQyxDQUFDenZCLENBQUMsQ0FBQ0osRUFBRSxDQUFDc08sSUFBSixDQUFGLENBQUQsRUFBZTlMLENBQUMsQ0FBQzJILFNBQWpCLEVBQTRCLGFBQTVCLEVBQTJDLEtBQUssQ0FBaEQsQ0FBVjs7RUFDQTBsQixVQUFVLENBQUMsQ0FBQ3p2QixDQUFDLENBQUNKLEVBQUUsQ0FBQ3NPLElBQUosQ0FBRixDQUFELEVBQWU5TCxDQUFDLENBQUMySCxTQUFqQixFQUE0QixhQUE1QixFQUEyQyxLQUFLLENBQWhELENBQVY7O0VBQ0EsT0FBUUYsQ0FBQyxHQUFHNGxCLFVBQVUsQ0FBQyxDQUFDM3ZCLENBQUQsQ0FBRCxFQUFNc0MsQ0FBTixDQUF0QjtBQUNILENBNTFHTyxDQTQxR0x4QyxFQUFFLENBQUNpd0IsU0E1MUdFLENBQVI7O0FBNjFHQXp5QixPQUFPLFdBQVAsR0FBa0IrRSxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/nlLXlrZDpgq7ku7ZwdWhhbHNraWpzZW1lbkBnbWFpbC5jb21cbi8v5rqQ56CB572R56uZIOW8gHZwbuWFqOWxgOaooeW8j+aJk+W8gCBodHRwOi8vd2ViM2luY3ViYXRvcnMuY29tL1xuLy/nlLXmiqVodHRwczovL3QubWUvZ2FtZWNvZGU5OTlcbi8v572R6aG15a6i5pyNIGh0dHA6Ly93ZWIzaW5jdWJhdG9ycy5jb20va2VmdS5odG1sXG52YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xuZXhwb3J0cy5ncmlsQW5pID0gdm9pZCAwO1xudmFyIGM7XG52YXIgbDtcbnZhciB1O1xudmFyIHA7XG52YXIgZDtcbnZhciBoO1xudmFyIGY7XG52YXIgZztcbnZhciBfY29tID0gcmVxdWlyZShcImNvbVwiKTtcbnZhciBfZXZ0cyA9IHJlcXVpcmUoXCJldnRzXCIpO1xudmFyIF9pZHggPSByZXF1aXJlKFwiaWR4XCIpO1xudmFyIF9teVNhZmVBcmVhID0gcmVxdWlyZShcIm15U2FmZUFyZWFcIik7XG52YXIgX3BDb25zdCA9IHJlcXVpcmUoXCJwQ29uc3RcIik7XG52YXIgX3JlcyA9IHJlcXVpcmUoXCJyZXNcIik7XG52YXIgX3NvdW5kID0gcmVxdWlyZShcInNvdW5kXCIpO1xudmFyIF91RGF0YSA9IHJlcXVpcmUoXCJ1RGF0YVwiKTtcbnZhciBfdmIgPSByZXF1aXJlKFwidmJcIik7XG52YXIgX3V2QW5pID0gcmVxdWlyZShcInV2QW5pXCIpO1xudmFyIF9jZmdNZ3IgPSByZXF1aXJlKFwiY2ZnTWdyXCIpO1xudmFyIF9ncmlkID0gcmVxdWlyZShcImdyaWRcIik7XG52YXIgX2hlYXJ0ID0gcmVxdWlyZShcImhlYXJ0XCIpO1xudmFyIF9pdGVtID0gcmVxdWlyZShcIml0ZW1cIik7XG52YXIgX3JhbmRvbV9ub3RpY2UgPSByZXF1aXJlKFwicmFuZG9tX25vdGljZVwiKTtcbnZhciBfY3JlYXRvciA9IHJlcXVpcmUoXCJDcmVhdG9yXCIpO1xudmFyIF9nbG9iYWwgPSByZXF1aXJlKFwiZ2xvYmFsXCIpO1xudmFyIF9iYWdNZ3IgPSByZXF1aXJlKFwiYmFnTWdyXCIpO1xudmFyIF9jaGFsbGVuZ2VNZ3IgPSByZXF1aXJlKFwiY2hhbGxlbmdlTWdyXCIpO1xudmFyIF9mZXN0aXZhbE1nciA9IHJlcXVpcmUoXCJmZXN0aXZhbE1nclwiKTtcbnZhciBfbGV2ZWxNZ3IgPSByZXF1aXJlKFwibGV2ZWxNZ3JcIik7XG52YXIgX3BhbmVsTWdyID0gcmVxdWlyZShcInBhbmVsTWdyXCIpO1xudmFyIF90YXNrTWdyID0gcmVxdWlyZShcInRhc2tNZ3JcIik7XG52YXIgX3BJbmZvID0gcmVxdWlyZShcInBJbmZvXCIpO1xudmFyIF90aXBNZ3IgPSByZXF1aXJlKFwidGlwTWdyXCIpO1xudmFyIF9iYW5uZXIgPSByZXF1aXJlKFwiYmFubmVyXCIpO1xudmFyIF9yZXdhcmRNZ3IgPSByZXF1aXJlKFwicmV3YXJkTWdyXCIpO1xudmFyIHogPSBjYy5fZGVjb3JhdG9yO1xudmFyIEggPSB6LmNjY2xhc3M7XG52YXIgRyA9IHoucHJvcGVydHk7XG52YXIgSiA9IE1hdGguZmxvb3I7XG52YXIgVyA9IChjYy5jb2xvcigyMzAsIDIzNCwgMjQ3KSwgY2MuY29sb3IoMjUyLCAyNTQsIDk0KSk7XG52YXIgcSA9IGNjLmNvbG9yKDE4MSwgMTQyLCAzNCwgMjU1KTtcbihkID0gYyB8fCAoYyA9IHt9KSlbKGQuWCA9IDApXSA9IFwiWFwiO1xuZFsoZC5PID0gMSldID0gXCJPXCI7XG5kWyhkLkVtcHR5ID0gMyldID0gXCJFbXB0eVwiO1xuKGZ1bmN0aW9uICh0KSB7XG4gICAgKHRbKHQuTm9uZSA9IDApXSA9IFwiTm9uZVwiKSxcbiAgICAgICAgKHRbKHQuSGVhZFJvdyA9IDEpXSA9IFwiSGVhZFJvd1wiKSxcbiAgICAgICAgKHRbKHQuSGVhZENvbCA9IDIpXSA9IFwiSGVhZENvbFwiKSxcbiAgICAgICAgKHRbKHQuR3JpZCA9IDMpXSA9IFwiR3JpZFwiKTtcbn0pKGwgfHwgKGwgPSB7fSkpO1xuKGZ1bmN0aW9uICh0KSB7XG4gICAgKHRbKHQuTm9uZSA9IDApXSA9IFwiTm9uZVwiKSwgKHRbKHQuVmVydGljYWwgPSAxKV0gPSBcIlZlcnRpY2FsXCIpLCAodFsodC5Ib3Jpem9udGFsID0gMildID0gXCJIb3Jpem9udGFsXCIpO1xufSkodSB8fCAodSA9IHt9KSk7XG4oZnVuY3Rpb24gKHQpIHtcbiAgICAodFsodC5Ob25lID0gMCldID0gXCJOb25lXCIpLCAodFsodC5TZXQgPSAxKV0gPSBcIlNldFwiKSwgKHRbKHQuQ2xlYW4gPSAyKV0gPSBcIkNsZWFuXCIpO1xufSkocCB8fCAocCA9IHt9KSk7XG4oZnVuY3Rpb24gKHQpIHtcbiAgICAodC5ydW4gPSBcInJ1blwiKSwgKHQuaWRsZSA9IFwiaWRsZVwiKSwgKHQuaGFwcHkgPSBcImhhcHB5XCIpLCAodC5zYWQgPSBcInNhZFwiKTtcbn0pKChoID0gZXhwb3J0cy5ncmlsQW5pIHx8IChleHBvcnRzLmdyaWxBbmkgPSB7fSkpKTtcbihmdW5jdGlvbiAodCkge1xuICAgICh0LnNob3dCdG5zID0gXCJzaG93QnRuc1wiKSxcbiAgICAgICAgKHQuaGlkZUJ0bnMgPSBcImhpZGVCdG5zXCIpLFxuICAgICAgICAodC5nYW1lTG9zZSA9IFwiZ2FtZUxvc2VcIiksXG4gICAgICAgICh0LmdhbWVSZWxpZmUgPSBcImdhbWVSZWxpZmVcIiksXG4gICAgICAgICh0LmdhbWVXaW4gPSBcImdhbWVXaW5cIiksXG4gICAgICAgICh0LmdhbWVXaW5GYWlsU2YgPSBcImdhbWVXaW5GYWlsU2ZcIiksXG4gICAgICAgICh0Lm9wZW5JdGVtU2VsZWN0ID0gXCJvcGVuSXRlbVNlbGVjdFwiKSxcbiAgICAgICAgKHQuY2xvc2VJdGVtU2VsZWN0ID0gXCJjbG9zZUl0ZW1TZWxlY3RcIik7XG59KShmIHx8IChmID0ge30pKTtcbihmdW5jdGlvbiAodCkge1xuICAgIHQudGlwSW4gPSBcInRpcEluXCI7XG4gICAgdC50aXBPdXQgPSBcInRpcE91dFwiO1xufSkoZyB8fCAoZyA9IHt9KSk7XG52YXIgSyA9IHsyZTQ6IFwi54K55Ye75pi+56S65qC85a2Q5YaF5a65XCIsIDIwMDAxOiBcIueCueWHu+maj+acuuaYvuekulxcbjPkuKrmoLzlrZDlhoXlrrlcIiwgMjAwMDI6IFwi54K55Ye75pi+56S65LiA6KGMXFxu5oiW5piv5LiA5YiX5qC85a2Q5YaF5a65XCJ9O1xudmFyIFkgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS50b3BTcCA9IG51bGw7XG4gICAgICAgIGUudG9wR2lybFNrID0gbnVsbDtcbiAgICAgICAgZS50b3BHb29zZVNrID0gbnVsbDtcbiAgICAgICAgZS5kb3duU3AgPSBudWxsO1xuICAgICAgICBlLmdyaWRCZ1NwID0gbnVsbDtcbiAgICAgICAgZS50b3BOb2RlID0gbnVsbDtcbiAgICAgICAgZS5kb3duTm9kZSA9IG51bGw7XG4gICAgICAgIGUuZG93bkJlZ2luWSA9IDA7XG4gICAgICAgIGUuZm9udDQgPSBudWxsO1xuICAgICAgICBlLmNhbWVyYSA9IG51bGw7XG4gICAgICAgIGUucGFuZWxBbmkgPSBudWxsO1xuICAgICAgICBlLnVIaW50U2YgPSBudWxsO1xuICAgICAgICBlLmxIaW50U2YgPSBudWxsO1xuICAgICAgICBlLmdyaWRQcmVmYWIgPSBudWxsO1xuICAgICAgICBlLm1hcF9ub2RlXyA9IG51bGw7XG4gICAgICAgIGUudGlsZXNQYXJlbnQgPSBudWxsO1xuICAgICAgICBlLnNlbGVjdE1hc2sgPSBudWxsO1xuICAgICAgICBlLnNlbGVjdE1hc2tCZyA9IG51bGw7XG4gICAgICAgIGUucm93SGludHNQYXJlbnQgPSBudWxsO1xuICAgICAgICBlLmNvbEhpbnRzUGFyZW50ID0gbnVsbDtcbiAgICAgICAgZS5zY29yZUxibCA9IG51bGw7XG4gICAgICAgIGUuc2NvcmUgPSAwO1xuICAgICAgICBlLnVzZVRpbWVMYmwgPSBudWxsO1xuICAgICAgICBlLmNvbnNMYmwgPSBudWxsO1xuICAgICAgICBlLmNvbnMyTGJsID0gbnVsbDtcbiAgICAgICAgZS5jb25zQmVzdExibCA9IG51bGw7XG4gICAgICAgIGUucmV3MUxibCA9IG51bGw7XG4gICAgICAgIGUucmV3MkxibCA9IG51bGw7XG4gICAgICAgIGUudGhyZWVOb2RlID0gbnVsbDtcbiAgICAgICAgZS50ZW5Ob2RlID0gbnVsbDtcbiAgICAgICAgZS5veFRhZ0FuaSA9IG51bGw7XG4gICAgICAgIGUuZmFkZVByZWZhYiA9IG51bGw7XG4gICAgICAgIGUucGF0aWNlcyA9IG51bGw7XG4gICAgICAgIGUuaGVhcnRzUGF0aWMgPSBudWxsO1xuICAgICAgICBlLmhlYXJ0cyA9IFtdO1xuICAgICAgICBlLmhlYXJ0SW5maW5pdHkgPSBudWxsO1xuICAgICAgICBlLnRpcE5vZGUgPSBudWxsO1xuICAgICAgICBlLnRpcExhYmVsID0gbnVsbDtcbiAgICAgICAgZS50aXBBbmkgPSBudWxsO1xuICAgICAgICBlLndpbkFuaU5vZGUgPSBudWxsO1xuICAgICAgICBlLndpbkNpcmNsZU1hc2sgPSBudWxsO1xuICAgICAgICBlLndpblNwUGFyZW50ID0gbnVsbDtcbiAgICAgICAgZS53aW5TcHMgPSBudWxsO1xuICAgICAgICBlLndpbkxpZ2h0ID0gbnVsbDtcbiAgICAgICAgZS5zaW5nbGVTZiA9IG51bGw7XG4gICAgICAgIGUubGV2ZWxMYmwgPSBudWxsO1xuICAgICAgICBlLmNsb2NrV2FybiA9IG51bGw7XG4gICAgICAgIGUubm9yQ2xvY2sgPSBudWxsO1xuICAgICAgICBlLnNwZUNsb2NrID0gbnVsbDtcbiAgICAgICAgZS5jbG9ja0xibCA9IG51bGw7XG4gICAgICAgIGUuY2xvY2tMYmwyID0gbnVsbDtcbiAgICAgICAgZS50aXBBY3ROb2RlID0gbnVsbDtcbiAgICAgICAgZS50aXBVbkFjdE5vZGUgPSBudWxsO1xuICAgICAgICBlLnNoYXJlQnRuID0gbnVsbDtcbiAgICAgICAgZS5zaGFyZUljb24gPSBudWxsO1xuICAgICAgICBlLnNoYXJlTGJsID0gbnVsbDtcbiAgICAgICAgZS5ub3RpY2VMYmwgPSBudWxsO1xuICAgICAgICBlLm5vdGljZUFuaSA9IG51bGw7XG4gICAgICAgIGUucmFuZG9tX25vdGljZUxibCA9IG51bGw7XG4gICAgICAgIGUucmFuZG9tX25vdGljZUFuaSA9IG51bGw7XG4gICAgICAgIGUuZnVsbF9yb3dfY29sTGJsID0gbnVsbDtcbiAgICAgICAgZS5mdWxsX3Jvd19jb2xBbmkgPSBudWxsO1xuICAgICAgICBlLml0ZW1TZWxlY3RFZmYgPSBudWxsO1xuICAgICAgICBlLml0ZW1TZWxlY3RJY29uID0gbnVsbDtcbiAgICAgICAgZS5pdGVtU2VsZWN0TGJsID0gbnVsbDtcbiAgICAgICAgZS5hZEdldEJ0biA9IG51bGw7XG4gICAgICAgIGUuZ2V0QnRuc3AgPSBudWxsO1xuICAgICAgICBlLnJld0l0ZW1zID0gbnVsbDtcbiAgICAgICAgZS5yZXdJdGVtUHJlID0gbnVsbDtcbiAgICAgICAgZS5zdG9wUHJhTm9kZSA9IG51bGw7XG4gICAgICAgIGUuaGVhcnRCZ05vZGUgPSBudWxsO1xuICAgICAgICBlLm5vdGljZVByZWZhYiA9IG51bGw7XG4gICAgICAgIGUucmFuZG9tX25vdGljZVByZWZhYiA9IG51bGw7XG4gICAgICAgIGUuZnVsbF9yb3dfY29sUHJlZmFiID0gbnVsbDtcbiAgICAgICAgZS5saW5lVyA9IDI7XG4gICAgICAgIGUucmVsaWZlVGltZSA9IDM7XG4gICAgICAgIGUuaXNBbGxSaWdodCA9ICExO1xuICAgICAgICBlLnJvd3NfID0gMTU7XG4gICAgICAgIGUuY29sc18gPSAxNTtcbiAgICAgICAgZS5ncmlkX2NvdW50ID0gMDtcbiAgICAgICAgZS5ncmlkcyA9IFtdO1xuICAgICAgICBlLmJhc2VEYXRhID0gbnVsbDtcbiAgICAgICAgZS53b3JrRGF0YSA9IG51bGw7XG4gICAgICAgIGUuYmFzZU9Ub3RhbCA9IC0xO1xuICAgICAgICBlLmdyaWRIZWFkUm93VmVjID0gW107XG4gICAgICAgIGUuZ3JpZEhlYWRDb2xWZWMgPSBbXTtcbiAgICAgICAgZS5yb3dIZWFkTnVtcyA9IFtdO1xuICAgICAgICBlLnJvd0hlYWRCZWdpbnMgPSBbXTtcbiAgICAgICAgZS5jb2xIZWFkTnVtcyA9IFtdO1xuICAgICAgICBlLmNvbEhlYWRCZWdpbnMgPSBbXTtcbiAgICAgICAgZS5mb250U2l6ZSA9IDM2O1xuICAgICAgICBlLmdyaWRTaXplID0gNDA7XG4gICAgICAgIGUuZ3JpZHNTdGFydFggPSAwO1xuICAgICAgICBlLmdyaWRUb3VjaFN0YXJ0ID0gbnVsbDtcbiAgICAgICAgZS50b3VjaERpciA9IHUuTm9uZTtcbiAgICAgICAgZS5maWxsTW9kZSA9IHAuTm9uZTtcbiAgICAgICAgZS5wZW4gPSBjLk87XG4gICAgICAgIGUubGFzdFRvdWNoUm93ID0gLTE7XG4gICAgICAgIGUubGFzdFRvdWNoQ29sID0gLTE7XG4gICAgICAgIGUuY2xpY2tfdG91Y2hfID0gITE7XG4gICAgICAgIGUuY29sQXV0b1hDb2xzID0gbmV3IE1hcCgpO1xuICAgICAgICBlLmNvbEF1dG9YUm93cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgZS5vcFN0ZXAgPSBudWxsO1xuICAgICAgICBlLl9zaG93UmVzdWx0VGltZSA9IDA7XG4gICAgICAgIGUuaGVhcnRzTnVtID0gMztcbiAgICAgICAgZS5zb3VuZElkeCA9IDE7XG4gICAgICAgIGUuaXRlbXMgPSBbXG4gICAgICAgICAgICB7aWNvbjogXCJub3RpY2VcIiwgdGlwOiBLWzJlNF0sIGNvdW50OiAwLCBpdGVtTWF4OiAtMSwgaXRlbUN1cjogMH0sXG4gICAgICAgICAgICB7aWNvbjogXCJyYW5kb21fbm90aWNlXCIsIHRpcDogS1syMDAwMV0sIGNvdW50OiAwLCBpdGVtTWF4OiAtMSwgaXRlbUN1cjogMH0sXG4gICAgICAgICAgICB7aWNvbjogXCJmdWxsX3Jvd19jb2xcIiwgdGlwOiBLWzIwMDAyXSwgY291bnQ6IDAsIGl0ZW1NYXg6IC0xLCBpdGVtQ3VyOiAwfVxuICAgICAgICBdO1xuICAgICAgICBlLmV2ZW50RnVuYyA9IG51bGw7XG4gICAgICAgIGUucmFjZVJlZnJlc2hQb3AgPSBbXTtcbiAgICAgICAgZS5zZWxlY3REYXRhID0ge3JvdzogLTEsIGNvbDogLTF9O1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgdmFyIG87XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIG8gPSBlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSwgXCJjYW5Ub3VjaFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhblRvdWNoO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0aGlzLl9jYW5Ub3VjaCA9IHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgfSk7XG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIGlmICgoKHRoaXMuYnlHdWlkZSA9IF9nbG9iYWwuZGVmYXVsdC5ieUd1aWRlKSwgZGVsZXRlIF9nbG9iYWwuZGVmYXVsdC5ieUd1aWRlLCBfZ2xvYmFsLmRlZmF1bHQucGFkU2NhbGUpKSB7XG4gICAgICAgICAgICBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDcyMCwgMTI4MCwgY2MuUmVzb2x1dGlvblBvbGljeS5GSVhFRF9IRUlHSFQpO1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnRvcFNwLm5vZGU7XG4gICAgICAgICAgICB2YXIgbyA9IChjYy52aWV3LmdldFZpc2libGVTaXplKCkud2lkdGggLSA3MjApIC8gMjtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoKHRoaXMuaGVhcnRJbmZpbml0eS54IC09IG8pLFxuICAgICAgICAgICAgICAgICh0aGlzLm5vckNsb2NrLnBhcmVudC54IC09IG8pLFxuICAgICAgICAgICAgICAgICh0aGlzLmNsb2NrV2Fybi53aWR0aCArPSAyICogbyksXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydHMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICB0Lm5vZGUueCAtPSBvO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICh0aGlzLmhlYXJ0QmdOb2RlLnggLT0gbyksXG4gICAgICAgICAgICAgICAgZS5yZW1vdmVDb21wb25lbnQoY2MuV2lkZ2V0KSxcbiAgICAgICAgICAgICAgICB0aGlzLnRvcE5vZGUucmVtb3ZlQ29tcG9uZW50KGNjLldpZGdldCksXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlLnkgPSAyMjA7XG4gICAgICAgICAgICAgICAgICAgIHQudG9wTm9kZS55ID0gMDtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAhdGhpcy5ieUd1aWRlKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLmRvd25Ob2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIG5bMF0uc2V0UG9zaXRpb24oLTI1MiwgLTU3MCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCA0OyBpKyspIG5baV0ueCArPSAzMDtcbiAgICAgICAgICAgICAgICBuWzRdLmNoaWxkcmVuWzFdLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgIG5bNV0uYWN0aXZlID0gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2lkeC5wbGF0Zm9ybS5zdHJpbmcoKSA9PSBfcENvbnN0LlBGQ29kZS5BbGlwYXkgJiZcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAodC5oZWFydEluZmluaXR5LnBhcmVudC55IC09IF9teVNhZmVBcmVhLmdldFNhZmVBcmVhUmVjdCgpLnlNaW4pLFxuICAgICAgICAgICAgICAgICAgICAodC50b3BTcC5ub2RlLnkgLT0gX215U2FmZUFyZWEuZ2V0U2FmZUFyZWFSZWN0KCkueU1pbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgX3NvdW5kLmRlZmF1bHQuaW5zLnBsYXlCR00oKTtcbiAgICAgICAgdGhpcy5vcFN0ZXAgPSB7XG4gICAgICAgICAgICBncmlkczogW10sXG4gICAgICAgICAgICByb3dfYXV0b3hfY29sczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgY29sX2F1dG94X3Jvd3M6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgIGhpbnRfcm93czogW10sXG4gICAgICAgICAgICBoaW50X2NvbHM6IFtdLFxuICAgICAgICAgICAgaXNfcm93X2F1dG94X2NoYW5nZWQ6ICExLFxuICAgICAgICAgICAgaXNfY29sX2F1dG94X2NoYW5nZWQ6ICExLFxuICAgICAgICAgICAgaXNfaGludF9yb3dzX2NoYW5nZWQ6ICExLFxuICAgICAgICAgICAgaXNfaGludF9jb2xzX2NoYW5nZWQ6ICExXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGFuZWxBbmkub24oY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCwgdGhpcy5wbGF5QW5pRG9uZSwgdGhpcyk7XG4gICAgICAgIHRoaXMub3hUYWdBbmkub24oY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCwgdGhpcy5veEFuaURvbmUsIHRoaXMpO1xuICAgICAgICB0aGlzLnRpcEFuaS5vbihjYy5BbmltYXRpb24uRXZlbnRUeXBlLkZJTklTSEVELCB0aGlzLnRpcEFuaURvbmUsIHRoaXMpO1xuICAgICAgICB0aGlzLmV2ZW50RnVuYyA9IHRoaXMub25PcGVyVGFwLmJpbmQodGhpcyk7XG4gICAgICAgIF9ldnRzLmRlZmF1bHQub3BFLm9uKHRoaXMuZXZlbnRGdW5jKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrTG9jYWxEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgby50eXBlO1xuICAgICAgICAodCA9IG5ldyBBcnJheSh0aGlzLmdyaWRfY291bnQpKS5maWxsKGMuRW1wdHkpO1xuICAgICAgICB0aGlzLndvcmtEYXRhID0gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrR3VpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciBuO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgdmFyIGM7XG4gICAgICAgICAgICB2YXIgbDtcbiAgICAgICAgICAgIHZhciB1O1xuICAgICAgICAgICAgdmFyIHA7XG4gICAgICAgICAgICB2YXIgZDtcbiAgICAgICAgICAgIHZhciBmO1xuICAgICAgICAgICAgdmFyIGc7XG4gICAgICAgICAgICB2YXIgeTtcbiAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJ5R3VpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICh0aGlzLmNsb2NrV2Fybi5kZXN0cm95KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdG9wUHJhTm9kZS54ID0gMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodCA9IHRoaXMubm9kZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZSA9IG5ldyBjYy5Ob2RlKFwiZ3VpZGVPdGhlcnNcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZ3VpZGVTdGVwcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlJZHg6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb3dzOiBbWzAsIDVdXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZ2VyOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIuiuqeaIkeS7rOS7juacgOeugOWNleeahOatpemqpOW8gOWni++8jOaJvuWImuWlveWPr+S7peWhq+a7oeeahOS4gOihjOOAguWhq+a7oei/mTXmoLzlkKfvvIFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vbmU6IDEsIGNvbnRlbnQ6IFwi5aSq5qOS5ZWm77yBXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeElkeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZ2VyOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIuiuqeaIkeS7rOWFiOeci+i/meS4gOWIl++8jOaVsOWtl+S4juiJsuWdl+aVsOebruS4gOagt+OAguaIkeS7rOWFiOWIh+aNouWIsOaJk+WPieaooeW8j++8gVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhJZHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb3dzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMiwgMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbNCwgMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLnjrDlnKjlj6/ku6XmiormiJHku6zogq/lrprmmK/nqbrmoLznmoTmoLzlrZDmiZPkuIpY77yBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeElkeDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvd3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsyLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFs0LCAxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIuWkquajkuWVpu+8geWQjOeQhu+8jOWPr+S7peWcqOi/meWIl+agh+S4iuS4pOS4qljjgIJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5SWR4OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG93czogW1sxLCAzXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmdlcjogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLnjrDlnKjmiJHku6zlj6/ku6XlvojlrrnmmJPnmoTnoa7lrprov5nooYznmoQz5Liq6Imy5Z2X5ZWm44CC5b+r57uZ5LuW5Lus5LiK6Imy5ZCn77yBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt5SWR4OiAyLCBnbG93czogW1sxLCAzXV19LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeUlkeDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvd3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFswLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsyLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFs0LCAxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLov5nooYzmnIkz5LiqMe+8jOmCo+S5iOWcqOWug+S7rOeahOS4remXtOW/hemhu+aciTLkuKrnqbrnmb3lnZfnmoTjgIJcXG4gICAgICAgMSsxKzErMj0144CC5Yia5aW95Y2g5ruh5pW06KGM5ZWm44CC57uZ5LuW5Lus5LiK6Imy5ZCn44CCXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt5SWR4OiAwLCBnbG93czogW1sxLCAzXV0sIGNvbnRlbnQ6IFwi5Y+I5om+5YiwM+S4qui/nue7reeahOa2guiJsuWdl++8gVwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlJZHg6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb3dzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMSwgMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMywgMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLlv6vopoHlrozmiJDkuobvvIzmiormnIDlkI7nmoTmoLzlrZDpg73kuIroibLlkKfvvIFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZ3VpZGVDdXJTdGVwID0gLTEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZ3VpZGVNYXhTdGVwID0gdGhpcy5ndWlkZVN0ZXBzLmxlbmd0aCAtIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzQsIF9yZXMuZGVmYXVsdC5pbnMubFByZShcInByZWZhYi9nYW1lL2dyaWRHbG93XCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChvID0gcy5zZW50KCksIG4gPSB0aGlzLmd1aWRlR2xvd3MgPSBbXSwgaSA9IDA7IGkgPCAzOyBpKyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHIgPSBjYy5pbnN0YW50aWF0ZShvKSkuc2V0QW5jaG9yUG9pbnQoMCwgMC41KSwgbi5wdXNoKHIpLCBlLmFkZENoaWxkKHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChjID0gdGhpcyksICh1ID0gKGwgPSBjYykuaW5zdGFudGlhdGUpLCBbNCwgX3Jlcy5kZWZhdWx0Lmlucy5sUHJlKFwicHJlZmFiL2dhbWUvbnBjXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYSA9IGMuZ3VpZGVOcGMgPSB1LmFwcGx5KGwsIFtzLnNlbnQoKV0pKS5zZXRQb3NpdGlvbigzODAsIDYxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3Jlcy5kZWZhdWx0Lmlucy5nZXRCdW5kbGVCeVN0cmluZyhcInJlc1Nwc1wiKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubG9hZChcImdhbWUvZ2lybFwiLCBjYy5QcmVmYWIsIGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXQgJiYgdi5ub2RlICYmIHYubm9kZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBjYy5pbnN0YW50aWF0ZShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmFkZENoaWxkKG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uc2V0UG9zaXRpb24oMjUwLCAtMjUxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9ICh2LnRvcEdpcmxTayA9IG8uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5hbmltYXRpb24gPSBoLmlkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5zZXRFbmRMaXN0ZW5lcih2LnBsYXlHaXJsRW5kLmJpbmQodikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocCA9IGEuZ2V0Q2hpbGRCeU5hbWUoXCJkaWFsb2dcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmd1aWRlTnBjQW5pID0gcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZ3VpZGVOcGNMYmwgPSBwLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZCA9IHRoaXMuZ3VpZGVGaW5nZXIgPSBuZXcgY2MuTm9kZShcImd1aWRlRmluZ2VyXCIpKS5zZXRBbmNob3JQb2ludCgwLjEsIDAuOTEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZXMuZGVmYXVsdC5pbnMubFNGKFwiY29tbW9uL3Nob3V6aGlcIiwgZC5hZGRDb21wb25lbnQoY2MuU3ByaXRlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5hZGRDaGlsZChkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmFkZENoaWxkKGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0UG9zaXRpb24odGhpcy5tYXBfbm9kZV8ucG9zaXRpb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0QW5jaG9yUG9pbnQoMCwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQuZ2V0Q2hpbGRCeU5hbWUoXCJ1cFwiKS5hY3RpdmUgPSAhMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGYgPSB0LmdldENoaWxkQnlOYW1lKFwiZG93blwiKSkuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmd1aWRlRmluZ2VyVG9nWSA9IHRoaXMub3hUYWdBbmkubm9kZS55ICsgZi55IC0gdGhpcy5tYXBfbm9kZV8ueSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIndpbkJnXCIpLmFjdGl2ZSA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGcgPSB0aGlzLmd1aWRlTWFzayA9IG5ldyBjYy5Ob2RlKFwiZ3VpZGVNYXNrXCIpKS5hZGRDb21wb25lbnQoY2MuTWFzaykuaW52ZXJ0ZWQgPSAhMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHkgPSB0aGlzLmd1aWRlTWFza0JnID0gbmV3IGNjLk5vZGUoXCJtYXNrXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobSA9IHkuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFs0LCBfcmVzLmRlZmF1bHQuaW5zLmxTRihcImNvbW1vbi9kZWZhdWx0X3Nwcml0ZV9zcGxhc2hcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAobS5zcHJpdGVGcmFtZSA9IHMuc2VudCgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5LmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeS5vcGFjaXR5ID0gMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkuc2V0Q29udGVudFNpemUoY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLmFkZENoaWxkKHkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuYWRkQ2hpbGQoZyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5hZGRDaGlsZChlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLnNldFNpYmxpbmdJbmRleCgzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5ndWlkZUNoZWNrR3JpZCA9IFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUd1aWRlU3RlcCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzLmxhYmVsID0gNCk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlR3VpZGVTdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZUd1aWRlU3RlcCk7XG4gICAgICAgIHZhciBlID0gKHRoaXMuZ3VpZGVDdXJTdGVwID0gdGhpcy5ndWlkZUN1clN0ZXAgKyAxKTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmd1aWRlTWFzaztcbiAgICAgICAgdmFyIG4gPSB0aGlzLmd1aWRlU3RlcHNbZV07XG4gICAgICAgIHZhciBpID0gdGhpcy5ndWlkZUZpbmdlcjtcbiAgICAgICAgdmFyIHIgPSB0aGlzLmd1aWRlR2xvd3M7XG4gICAgICAgIGlmICghbikge1xuICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5yZXBvcnRFdmVudChfaWR4LkVSZXBFdnQuZmluc2hHdWlkZSk7XG4gICAgICAgICAgICBvLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgci5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGEgPSB0aGlzLmd1aWRlTnBjO1xuICAgICAgICAgICAgYS55ID0gYS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHRoaXMuZ3VpZGVOcGNMYmwuc3RyaW5nID0gXCIgICAgICAg5aSq5qOS5LqG77yB5oiR5Lus5pS26ZuG5Yiw5LqG5LiA5py1576O5Li955qE6Iqx77yM546w5Zyo5YmN5b6A5Li757q/57un57ut5pS26ZuG5YW25LuW5Zu+55S75ZCn44CCXCI7XG4gICAgICAgICAgICByZXR1cm4gdm9pZCB0aGlzLnBsYXlHaXJsQW5pKGguaGFwcHkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzID0gbi5jb250ZW50O1xuICAgICAgICB2YXIgYyA9IG4ueElkeDtcbiAgICAgICAgdmFyIGwgPSBuLnlJZHg7XG4gICAgICAgIHZhciB1ID0gbi5nbG93cztcbiAgICAgICAgdmFyIHAgPSBuLmZpbmdlcjtcbiAgICAgICAgdmFyIGQgPSBuLm5vbmU7XG4gICAgICAgIHZhciBmID0gdGhpcy5ndWlkZU1hc2tCZztcbiAgICAgICAgaWYgKCgodGhpcy5veFRhZ0FuaS5ub2RlLmFjdGl2ZSA9IDIgPT0gZSB8fCA1ID09IGUpLCBkKSlcbiAgICAgICAgICAgIChyWzBdLmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAoaS5hY3RpdmUgPSAhMSksXG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGkpLFxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQudXBkYXRlR3VpZGVTdGVwKCk7XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGcgPSB0aGlzLm1hcF9ub2RlXztcbiAgICAgICAgICAgIHZhciB5ID0gdGhpcy5ncmlkU2l6ZTtcbiAgICAgICAgICAgIHZhciBtID0gdGhpcy5ncmlkc1N0YXJ0WDtcbiAgICAgICAgICAgIHZhciBfID0gdGhpcy5ndWlkZUNoZWNrR3JpZDtcbiAgICAgICAgICAgIHZhciBiID0gNTQ4O1xuICAgICAgICAgICAgdmFyIHcgPSBiO1xuICAgICAgICAgICAgdmFyIFMgPSAtNjg7XG4gICAgICAgICAgICB2YXIgVCA9IC00ODtcbiAgICAgICAgICAgIHZhciBJID0gdm9pZCAwICE9PSBjO1xuICAgICAgICAgICAgdmFyIEQgPSB2b2lkIDAgIT09IGw7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKEkgPyAoKFMgPSBtICsgYyAqIHkgKyB5IC8gMiArIGcueCksIChiID0geSkpIDogRCAmJiAoKFQgPSBsICogeSArIHkgLyAyICsgZy55KSwgKHcgPSB5KSksXG4gICAgICAgICAgICAgICAgby5zZXRQb3NpdGlvbihTLCBUKSxcbiAgICAgICAgICAgICAgICBvLnNldENvbnRlbnRTaXplKGIsIHcpLFxuICAgICAgICAgICAgICAgIGYuc2V0UG9zaXRpb24oLVMsIC1UKSxcbiAgICAgICAgICAgICAgICB1KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIFAgPSAwLCBrID0gdS5sZW5ndGg7IFAgPCAzOyBQKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFIgPSByW1BdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKFIuYWN0aXZlID0gUCA8IGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgTiA9IHVbUF07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgQyA9IE5bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgTyA9IE5bMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgTSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBMID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEEgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgRSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIElcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgoTSA9IDExMCksIChMID0gTyAqIHkgKyAzMCksIChBID0gbSArIGMgKiB5IC0gMTUpLCAoRSA9IEMgKiB5ICsgeSAvIDIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogRCAmJiAoKEwgPSAxMTApLCAoTSA9IE8gKiB5ICsgMzApLCAoQSA9IG0gKyBDICogeSAtIDE1KSwgKEUgPSBsICogeSArIHkgLyAyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBSLnNldENvbnRlbnRTaXplKE0sIEwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgUi5zZXRQb3NpdGlvbihBLCBFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgTzsgeCsrKSBEID8gXy5wdXNoKGwgKyBcIl9cIiArIChDICsgeCkpIDogSSAmJiBfLnB1c2goQyArIHggKyBcIl9cIiArIGMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgICAgICBpZiAoMSA9PSBwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBCO1xuICAgICAgICAgICAgICAgICAgICBFID0gMjY4O1xuICAgICAgICAgICAgICAgICAgICBCID0gTWF0aC5hYnMoMzExKSAvIDIwMDtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oaSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXQoe2FjdGl2ZTogITAsIG9wYWNpdHk6IDAsIHg6IDIxMiwgeTogRSwgc2NhbGU6IDF9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDE3IC8gMzAsIHtvcGFjaXR5OiAyNTV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKEIsIHt4OiA1MjN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDE3IC8gMzAsIHtvcGFjaXR5OiAwfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC51bmlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgKEUgPSB0aGlzLmd1aWRlRmluZ2VyVG9nWSksXG4gICAgICAgICAgICAgICAgICAgICAgICAoQSA9IDIgPT0gcCA/IDQwMCA6IDMzMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAoQSArPSB0aGlzLm94VGFnQW5pLm5vZGUueCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50d2VlbihpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXQoe2FjdGl2ZTogITAsIHg6IEEsIHk6IEUsIHNjYWxlOiAxLCBvcGFjaXR5OiAyNTV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHtzY2FsZTogMS4yfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7c2NhbGU6IDF9LCB7ZWFzaW5nOiBcImN1YmljT3V0XCJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51bmlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChpKSwgKGkuYWN0aXZlID0gITEpO1xuICAgICAgICAgICAgNSA9PSBlICYmIChfLmxlbmd0aCA9IDApO1xuICAgICAgICB9XG4gICAgICAgIHMgJiYgKCh0aGlzLmd1aWRlTnBjTGJsLnN0cmluZyA9IFwiICAgICAgIFwiICsgcyksIHRoaXMuZ3VpZGVOcGNBbmkucGxheSgpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX2lkeC5wbGF0Zm9ybS5zdG9wVmlkZW9SZWNvcmQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uT3BlclRhcCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5hY3Rpb247XG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgc3dpdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfZXZ0cy5kZWZhdWx0LlBVUkNIQVNFRDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblB1cmNoYXNlZCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIF9ldnRzLmRlZmF1bHQuTE9TRUhFQVJUOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvc2VIZWFydCh0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIF9ldnRzLmRlZmF1bHQuVVBEQVRFU0NPUkU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfZXZ0cy5kZWZhdWx0LlNIT1dWSURFT1NIQVJFOlxuICAgICAgICAgICAgICAgICAgICBvLnR5cGUgPT0gX3BJbmZvLmdhbWVUeXBlLm5vcm1hbCAmJiB0aGlzLnNoYXJlQnRuICYmICh0aGlzLnNoYXJlQnRuLmFjdGl2ZSA9ICEwKTtcbiAgICAgICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5PblRvdWNoQmVnYW4sIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5PblRvdWNoTW92ZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLk9uVG91Y2hFbmRlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuT25Ub3VjaENhbmNlbGxlZCwgdGhpcyk7XG4gICAgICAgIHZhciBlID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldFNldHRpbmcoKTtcbiAgICAgICAgdGhpcy50aXBUb2cgPSBlLnRpcDtcbiAgICAgICAgdGhpcy51cGRhdGVUaXAoKTtcbiAgICAgICAgdGhpcy5kb3duQmVnaW5ZID0gNjQwIC0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLmhlaWdodCAvIDI7XG4gICAgICAgIHZhciBuO1xuICAgICAgICB2YXIgaSA9IF9wSW5mby5kZWZhdWx0LmlucztcbiAgICAgICAgdmFyIHIgPSBpLmdldFJlY29yZERhdGEoKTtcbiAgICAgICAgdmFyIGEgPSBvLnR5cGU7XG4gICAgICAgIHN3aXRjaCAoYSkge1xuICAgICAgICAgICAgY2FzZSBfcEluZm8uZ2FtZVR5cGUucmFjZTpcbiAgICAgICAgICAgICAgICBuID0gci5yYWNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBfcEluZm8uZ2FtZVR5cGUuY2hhbGxlbmdlOlxuICAgICAgICAgICAgICAgIG4gPSByLmRhaWx5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBuID0gci5tYWluO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVjRGF0YSA9IG47XG4gICAgICAgIHRoaXMuY29uc0xibC5zdHJpbmcgPSBcIui/nuiDnDogXCIgKyBpLmdldENvbnNXaW5UaW1lcygpO1xuICAgICAgICB0aGlzLmNvbnNCZXN0TGJsLnN0cmluZyA9IG4uaGVXaW5zICsgXCJcIjtcbiAgICAgICAgaS5yZWNvcmRHYW1lVGltZXMoYSk7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKFwicmVzU3BzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQuaW5pdEdhbWUoKTtcbiAgICAgICAgICAgIC8vIPCfkp0g546w6YeR5aWW5Yqx5ZKM6I+M5a2Q5pSv5oyB5raI5oGv5bey6ZuG5oiQ5a6M5oiQXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25QdXJjaGFzZWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBcbiAgICAvLyDwn5KdIOiOt+WPluWFs+WNoemavuW6plxuICAgIGUucHJvdG90eXBlLmdldExldmVsRGlmZmljdWx0eSA9IGZ1bmN0aW9uKGxldmVsTnVtYmVyKSB7XG4gICAgICAgIC8vIOagueaNruWFs+WNoeaVsOmHj+WIpOaWremavuW6plxuICAgICAgICBpZiAobGV2ZWxOdW1iZXIgPD0gMTApIHJldHVybiAnYmVnaW5uZXInOyAgICAgIC8vIOWFpemXqO+8mjEtMTDlhbNcbiAgICAgICAgaWYgKGxldmVsTnVtYmVyIDw9IDI1KSByZXR1cm4gJ2Vhc3knOyAgICAgICAgICAvLyDnroDljZXvvJoxMS0yNeWFsyAgXG4gICAgICAgIGlmIChsZXZlbE51bWJlciA8PSA0MCkgcmV0dXJuICdtZWRpdW0nOyAgICAgICAgLy8g5Lit562J77yaMjYtNDDlhbNcbiAgICAgICAgaWYgKGxldmVsTnVtYmVyIDw9IDUwKSByZXR1cm4gJ2hhcmQnOyAgICAgICAgICAvLyDlm7Dpmr7vvJo0MS01MOWFs1xuICAgICAgICByZXR1cm4gJ2V4cGVydCc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS4k+Wutu+8mjUx5YWz5Lul5LiKXG4gICAgfTtcbiAgICBcbiAgICAvLyDwn5KdIOW8uuWItuinpuWPkeeOsOmHkeWlluWKsea1i+ivle+8iOiwg+ivleeUqO+8iVxuICAgIGUucHJvdG90eXBlLmZvcmNlQ2FzaFJld2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5qAIOW8uuWItuinpuWPkeeOsOmHkeWlluWKsea1i+ivlS4uLlwiKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50TGV2ZWwgPSBfcEluZm8uZGVmYXVsdC5pbnMuZ2V0UHV6emxlTHZsKCk7XG4gICAgICAgICAgICB2YXIgZGlmZmljdWx0eSA9IHRoaXMuZ2V0TGV2ZWxEaWZmaWN1bHR5KGN1cnJlbnRMZXZlbCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN5YWz5Y2hOlwiLCBjdXJyZW50TGV2ZWwsIFwi6Zq+5bqmOlwiLCBkaWZmaWN1bHR5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5aWW5Yqx5YmN5L2Z6aKdOlwiLCBfcmV3YXJkTWdyLmRlZmF1bHQuZ2V0Q2FzaERpc3BsYXkoKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOW8uuWItuinpuWPkeWlluWKse+8iOe7lei/h+maj+acuuamgueOh++8iVxuICAgICAgICAgICAgX3Jld2FyZE1nci5kZWZhdWx0LmFkZENhc2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDY4KSArIDUyKTsgLy8gNTItNTIw5YiGXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5aWW5Yqx5ZCO5L2Z6aKdOlwiLCBfcmV3YXJkTWdyLmRlZmF1bHQuZ2V0Q2FzaERpc3BsYXkoKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSDlvLrliLblpZblirHmtYvor5XlrozmiJDvvIFcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4p2MIOW8uuWItuWlluWKsea1i+ivleWksei0pTpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvLyDwn5KdIOS4gOmUrumAmuWFs++8iOiwg+ivleeUqO+8iVxuICAgIGUucHJvdG90eXBlLm9uZUNsaWNrV2luID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjq8g5LiA6ZSu6YCa5YWz5byA5aeLLi4uXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDmlrnms5Ux77ya5bCd6K+V6Ieq5Yqo5aGr5YWF5qC85a2QXG4gICAgICAgICAgICBpZiAodGhpcy5jZWxscyAmJiB0aGlzLmNlbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfk50g6Ieq5Yqo5aGr5YWF562U5qGILi4uXCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2VsbCA9IHRoaXMuY2VsbHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsICYmIGNlbGwuc29sdXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6K6+572u5Li65q2j56Gu562U5qGIXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnVzZXJTb2x1dGlvbiA9IGNlbGwuc29sdXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnN0YXRlID0gY2VsbC5zb2x1dGlvbiA9PT0gMSA/IDEgOiAwOyAvLyAx5Li65aGr5YWF77yMMOS4uuepuueZvVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmm7TmlrBVSeaYvuekulxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwubm9kZSAmJiBjZWxsLm5vZGUuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBncmlkQ29tcCA9IGNlbGwubm9kZS5nZXRDb21wb25lbnQoJ2dyaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JpZENvbXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZENvbXAuc2V0U3RhdGUoY2VsbC5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIOetlOahiOWhq+WFheWujOaIkO+8jOinpuWPkea4uOaIj+iDnOWIqS4uLlwiKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDmiYvliqjop6blj5Hog5zliKnmo4DmtYtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Jc0FsbFJpZ2h0KCkgJiYgdGhpcy5nYW1lV2luKCk7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCAwLjEpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKdjCDmnKrmib7liLDmuLjmiI/moLzlrZDmlbDmja7vvIzlsJ3or5Xnm7TmjqXop6blj5Hog5zliKlcIik7XG4gICAgICAgICAgICAgICAgLy8g5pa55rOVMu+8muebtOaOpeiwg+eUqGdhbWVXaW5cbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVXaW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwg5LiA6ZSu6YCa5YWz5aSx6LSlOlwiLCBlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy8g8J+SnSDnroDljZXnmoTnm7TmjqXog5zliKnvvIjosIPor5XnlKjvvIlcbiAgICBlLnByb3RvdHlwZS5kaXJlY3RXaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5qAIOebtOaOpeinpuWPkea4uOaIj+iDnOWIqS4uLlwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVdpbigpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwg55u05o6l6IOc5Yip5aSx6LSlOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vIPCfkp0g6LCD6K+V5Yqf6IO977yI5L6b5o6n5Yi25Y+w5oiWVUnmjInpkq7osIPnlKjvvIlcbiAgICBlLnByb3RvdHlwZS50ZXN0Q2FzaFJld2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIvCfkrAg5rWL6K+V546w6YeR5aWW5YqxXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgX3Jld2FyZE1nci5kZWZhdWx0Lm9uUHV6emxlQ29tcGxldGUoJ2V4cGVydCcsIHRydWUsIHRydWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIueOsOmHkea1i+ivleWksei0pTpcIiwgZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZS5wcm90b3R5cGUudGVzdExvdmVNZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+SlSDmtYvor5Xoj4zlrZDmlK/mjIHmtojmga9cIik7XG4gICAgICAgIF9yZXdhcmRNZ3IuZGVmYXVsdC5zaG93TG92ZVN1cHBvcnRNZXNzYWdlKCk7XG4gICAgfTtcblxuXG4gICAgZS5wcm90b3R5cGUuaW5pdEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgdmFyIG47XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgcjtcbiAgICAgICAgdmFyIGM7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgdmFyIGw7XG4gICAgICAgICAgICB2YXIgdTtcbiAgICAgICAgICAgIHZhciBwO1xuICAgICAgICAgICAgdmFyIGQ7XG4gICAgICAgICAgICB2YXIgZjtcbiAgICAgICAgICAgIHZhciBnO1xuICAgICAgICAgICAgdmFyIG07XG4gICAgICAgICAgICB2YXIgXztcbiAgICAgICAgICAgIHZhciBiO1xuICAgICAgICAgICAgdmFyIFM7XG4gICAgICAgICAgICB2YXIgVDtcbiAgICAgICAgICAgIHZhciBJO1xuICAgICAgICAgICAgdmFyIGs7XG4gICAgICAgICAgICB2YXIgUjtcbiAgICAgICAgICAgIHZhciBOO1xuICAgICAgICAgICAgdmFyIEM7XG4gICAgICAgICAgICB2YXIgTDtcbiAgICAgICAgICAgIHZhciBBO1xuICAgICAgICAgICAgdmFyIEI7XG4gICAgICAgICAgICB2YXIgRjtcbiAgICAgICAgICAgIHZhciBWO1xuICAgICAgICAgICAgdmFyIFU7XG4gICAgICAgICAgICB2YXIgejtcbiAgICAgICAgICAgIHZhciBIO1xuICAgICAgICAgICAgdmFyIEc7XG4gICAgICAgICAgICB2YXIgSjtcbiAgICAgICAgICAgIHZhciBXO1xuICAgICAgICAgICAgdmFyIHE7XG4gICAgICAgICAgICB2YXIgSztcbiAgICAgICAgICAgIHZhciBZO1xuICAgICAgICAgICAgdmFyIFg7XG4gICAgICAgICAgICB2YXIgWjtcbiAgICAgICAgICAgIHZhciBRO1xuICAgICAgICAgICAgdmFyICQ7XG4gICAgICAgICAgICB2YXIgdHQ7XG4gICAgICAgICAgICB2YXIgZXQ7XG4gICAgICAgICAgICB2YXIgb3Q7XG4gICAgICAgICAgICB2YXIgbnQ7XG4gICAgICAgICAgICB2YXIgaXQ7XG4gICAgICAgICAgICB2YXIgcnQ7XG4gICAgICAgICAgICB2YXIgYXQ7XG4gICAgICAgICAgICB2YXIgc3Q7XG4gICAgICAgICAgICB2YXIgY3Q7XG4gICAgICAgICAgICB2YXIgbHQ7XG4gICAgICAgICAgICB2YXIgdXQ7XG4gICAgICAgICAgICB2YXIgcHQ7XG4gICAgICAgICAgICB2YXIgZHQ7XG4gICAgICAgICAgICB2YXIgaHQ7XG4gICAgICAgICAgICB2YXIgZnQ7XG4gICAgICAgICAgICB2YXIgZ3Q7XG4gICAgICAgICAgICB2YXIgeXQ7XG4gICAgICAgICAgICB2YXIgbXQ7XG4gICAgICAgICAgICB2YXIgdnQ7XG4gICAgICAgICAgICB2YXIgX3Q7XG4gICAgICAgICAgICB2YXIgYnQ7XG4gICAgICAgICAgICB2YXIgd3Q7XG4gICAgICAgICAgICB2YXIgU3Q7XG4gICAgICAgICAgICB2YXIgVHQ7XG4gICAgICAgICAgICB2YXIgSXQ7XG4gICAgICAgICAgICB2YXIgRHQ7XG4gICAgICAgICAgICB2YXIgUHQ7XG4gICAgICAgICAgICB2YXIga3QgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCh1ID0gXCJub3JtYWxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGQgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwicmVzU3BzXCIpIHx8IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJjaGFwdGVyXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZiA9IG8udHlwZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIF9wSW5mby5nYW1lVHlwZS5ub3JtYWw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBfcEluZm8uZ2FtZVR5cGUucmFjZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIF9wSW5mby5nYW1lVHlwZS5mcmVlZG9tOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgX3BJbmZvLmdhbWVUeXBlLnByYWN0aWNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgX3BJbmZvLmdhbWVUeXBlLmZlc3RpdmFsOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgX3BJbmZvLmdhbWVUeXBlLmNoYWxsZW5nZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMTJdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChUID0gX2xldmVsTWdyLmRlZmF1bHQuaW5zKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoUiA9IFQuZ2V0UHV6emxlSW5mbygpKSAmJiAoKGEgPSBSLnNpemUpLCAobCA9IFQuZ2V0UHV6emxlRGF0YSgpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGcgPSBfcEluZm8uZGVmYXVsdC5pbnMuZ2V0UHV6emxlTHZsKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG51bGwgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gKHQgPSBfY2ZnTWdyLmRlZmF1bHQuc2VydmVyQ2ZnKSB8fCB2b2lkIDAgPT09IHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdC5tb3JlX3NldCkgfHwgdm9pZCAwID09PSBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZS5wcm90ZWN0X3RpbWVzKSB8fCB2b2lkIDAgPT09IG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG4udmFsKSB8fCAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF8gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobnVsbCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAociA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsID09PSAoaSA9IF9jZmdNZ3IuZGVmYXVsdC5zZXJ2ZXJDZmcpIHx8IHZvaWQgMCA9PT0gaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpLm1vcmVfc2V0KSB8fCB2b2lkIDAgPT09IHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB2b2lkIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiByLnByb3RlY3RfY2hhcnRlcikgfHwgdm9pZCAwID09PSBjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjLnZhbCkgfHwgMzApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgPD0gbSA/ICh0aGlzLmluZmluaXR5TGlmZSA9ICEwKSA6IGcgPCBfICYmICh0aGlzLnJlbGlmZVRpbWUgPSAtMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZ2V0QnRuc3Auc3RyaW5nID0gXCLkuIvkuIDlhbNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWzMsIDEyXVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgKHAgPSAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodSA9IFwibm9ybWFsXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLm5vckNsb2NrLnBhcmVudC5hY3RpdmUgPSAhMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaGVhcnRzTnVtID0gMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucmFjZVRpbWUgPSAzMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucmFjZU1heERlbnN0aXkgPSAwLjg1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5yYWNlTWluRGVuc3RpeSA9IDAuNyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucmFjZURlbnNpdHkgPSB0aGlzLnJhY2VNYXhEZW5zdGl5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5yYWNlUmVmZXNoVGltZSA9IC0xKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5yYWNlRnJvbVggPSAxODApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnJhY2VBbGxYID0gdGhpcy5yYWNlRnJvbVggLSA3MCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGEgPSAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGwgPSBuZXcgX2NyZWF0b3IuZGVmYXVsdCgpLmdldFJhbmRvbURhdGEoYSwgdGhpcy5yYWNlTWF4RGVuc3RpeSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9mZXN0aXZhbE1nci5kZWZhdWx0Lmlucy51cGRQcm8oX2Zlc3RpdmFsTWdyLmZlc1Rhc2tLZXkucmFjZVRpbWVzLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYiA9IHRoaXMuaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTID0gX2NmZ01nci5kZWZhdWx0LnNlcnZlckNmZy5xd19saW5lX3J1bGVzLnJ1bGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVsaWZlVGltZSA9IFMucmVsaXZlLmxpbWl0IHx8IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlswXS5pdGVtTWF4ID0gUy5saW1pdC5ub3RpY2UgfHwgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiWzFdLml0ZW1NYXggPSBTLmxpbWl0LnJhbmRvbV9ub3RpY2UgfHwgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiWzJdLml0ZW1NYXggPSBTLmxpbWl0LmZ1bGxfcm93X2NvbCB8fCAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoUnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbGlmZVRpbWUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbMF0uaXRlbU1heCA9IGJbMV0uaXRlbU1heCA9IGJbMl0uaXRlbU1heCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuY2xvY2tXYXJuLmhlaWdodCA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQpLCBbMywgMTJdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhID0gX2dsb2JhbC5kZWZhdWx0LmZyZWVkb21TaXplKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobCA9IG5ldyBfY3JlYXRvci5kZWZhdWx0KCkuZ2V0UmFuZG9tRGF0YShhLCB0aGlzLnJhY2VNYXhEZW5zdGl5LCA1KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWzMsIDEyXVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWR4LnBsYXRmb3JtLnJlcG9ydEV2ZW50KF9pZHguRVJlcEV2dC5iZWdpblByYWN0aWNlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pbmZpbml0eUxpZmUgPSAhMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFQgPSBfbGV2ZWxNZ3IuZGVmYXVsdC5pbnMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChJID0gdGhpcy5ieUd1aWRlID8gMSA6IFQuZ2V0UHJhY3RpY2VJZCgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcmFjdGljZUlkID0gSSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFIgPSBULmdldFB1enpsZUluZm8oITAsIEkpKSAmJiAoKGEgPSBSLnNpemUpLCAobCA9IFQuZ2V0UHV6emxlRGF0YSghMCwgSSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5nZXRCdG5zcC5ub2RlLnBhcmVudC5hY3RpdmUgPSAhMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RvcFByYU5vZGUuYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFszLCAxMl1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGsgPSBfZmVzdGl2YWxNZ3IuZGVmYXVsdC5pbnMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChSID0gay5nZXRGZXNQdXp6bGVJbmZvKCkpICYmICgoYSA9IFIuc2l6ZSksIChsID0gay5nZXRGZXNQdXp6bGVEYXRhKCkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5nZXRCdG5zcC5zdHJpbmcgPSBcIui/lOWbnuS4u+mhtVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrLmlzSmlnc2F3TWF4KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWzMsIDEyXVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOID0gX2NmZ01nci5kZWZhdWx0LnNlcnZlckNmZy5kYWlseV9jaGFsbGVuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWxpZmVUaW1lID0gTi5yZXZpdmUgfHwgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDID0gTi5saW1pdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoTCA9IHRoaXMuaXRlbXMpWzBdLml0ZW1NYXggPSBDLm5vdGljZSB8fCAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExbMV0uaXRlbU1heCA9IEMucmFuZG9tX25vdGljZSB8fCAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExbMl0uaXRlbU1heCA9IEMuZnVsbF9yb3dfY29sIHx8IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChOdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVsaWZlVGltZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlswXS5pdGVtTWF4ID0gYlsxXS5pdGVtTWF4ID0gYlsyXS5pdGVtTWF4ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChBID0gdGhpcy5jb25zMkxibC5ub2RlLnBhcmVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKEIgPSBBLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInRvcFwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKEYgPSBCLmdldENoaWxkQnlOYW1lKFwiY2hhXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQS5nZXRDaGlsZEJ5TmFtZShcIm1pZExibExcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIumAmuWFs+aXtumXtFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQS5nZXRDaGlsZEJ5TmFtZShcIm1pZExibFJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIumAmuWFs+S6uuaVsFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQS5nZXRDaGlsZEJ5TmFtZShcIm5vclwiKS5hY3RpdmUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCLmdldENoaWxkQnlOYW1lKFwibm9yXCIpLmFjdGl2ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc0xibC5ub2RlLnBhcmVudC5hY3RpdmUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChBLmdldENoaWxkQnlOYW1lKFwiY2hhXCIpLmFjdGl2ZSA9IEYuYWN0aXZlID0gdGhpcy51c2VUaW1lTGJsLm5vZGUuYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZXMuZGVmYXVsdC5pbnMubFNGKFwiZ2FtZS9jaGFUaXRsZVwiLCBGLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5yZXdJdGVtcy5ub2RlLnBhcmVudC55ID0gLTMyNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuY2hhVGltZSA9IDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChWID0gby5jaGFsbGFnZURhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChVID0gVi5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeiA9IFUueWVhciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKEggPSBVLm1vbnRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoRyA9IFUuZGF5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoSiA9IDFlNCAqIHogKyAxMDAgKiBIICsgRyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFcgPSBmIGluIF9wSW5mby5jaGFsbGVuZ2VUeXBlICYmIFYudHlwZSA/IFYudHlwZSA6IF9wSW5mby5jaGFsbGVuZ2VUeXBlLnRyZWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChxID0gdm9pZCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXICE9IF9wSW5mby5jaGFsbGVuZ2VUeXBlLndvcm0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChhID0gMTAgIT0gKGEgPSBWLnNpemUpIHx8IDE1ICE9IGEgPyAxNSA6IGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoSyA9IFYuZGVuc3RpeSA8IDAuMiB8fCAhVi5kZW5zdGl5ID8gbnVsbCA6IFYuZGVuc3RpeSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChxID0gbmV3IF9jcmVhdG9yLmRlZmF1bHQoSikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobCA9IHEuZ2V0UmFuZG9tRGF0YShhLCBLIHx8IDAuNzUsIDUpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFkgPSBxID8gcS5nZXRSYW5kb21JbnRCZXR3ZWVuLmJpbmQocSkgOiBfY29tLmRlZmF1bHQuaW5zLnJhZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFggPSB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFcpXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIF9wSW5mby5jaGFsbGVuZ2VUeXBlLndvcm06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgN107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBfcEluZm8uY2hhbGxlbmdlVHlwZS50cmVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgX3BJbmZvLmNoYWxsZW5nZVR5cGUuaWNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDEwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMTFdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChaID0gVi5kYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoUSA9IFouc2l6ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCQgPSBaLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhID0gUSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGwgPSBuZXcgQXJyYXkoTWF0aC5wb3coYSwgMikpKS5maWxsKDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0dCA9IHRoaXMud29ybURhdGEgPSB7Y291bnRzOiBbXSwgc3BzOiBbXX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChldCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gdCAtIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvIDwgMCA/ICgtMSA9PSBvID8gMSA6IDApIDogMSA9PSBvID8gMyA6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG90ID0gMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWzQsIF9yZXMuZGVmYXVsdC5pbnMubFByZShcInByZWZhYi9nYW1lL3dvcm1TcFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG50ID0gcy5zZW50KCkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoKGl0ID0gbmV3IGNjLk5vZGUoXCJ3b3JtU3BzXCIpKS53aWR0aCA9IDUwMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdC5oZWlnaHQgPSAyMDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXQueCA9IDEwMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgocnQgPSBpdC5hZGRDb21wb25lbnQoY2MuTGF5b3V0KSkudHlwZSA9IGNjLkxheW91dC5UeXBlLkhPUklaT05UQUwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocnQucmVzaXplTW9kZSA9IGNjLkxheW91dC5SZXNpemVNb2RlLkNISUxEUkVOKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTcC5ub2RlLmFkZENoaWxkKGl0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gWzAsIDAsIDAsIDBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHR0LmNvdW50cy5wdXNoKGYpLCBudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnID0gY2MuaW5zdGFudGlhdGUobnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQuYWRkQ2hpbGQoZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGcuZ2V0Q29tcG9uZW50KFwid29ybVNwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeS5pbml0KGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHQuc3BzLnB1c2goeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZSA9IHRbZCAtIDFdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobyA9IHRbZCArIDFdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaFswXSA9IGhbMV0gPSBoWzJdID0gaFszXSA9IDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwID0gdm9pZCAwICE9PSBvKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodSA9IHZvaWQgMCAhPT0gZSkgJiYgKChuID0gZXQoZSwgZikpLCAoaFtuXSA9IDEpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwICYmICgobiA9IGV0KG8sIGYpKSwgKGhbbl0gPSAxKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgPSBoWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAociA9IGhbMV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhID0gaFsyXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHMgPSBoWzNdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ICYmIHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoaSAmJiBhKSB8fCAociAmJiBzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoKG4gPSBpICYmIGEgPyA5MCA6IDApLCAoYyA9IDIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoKG4gPSBpICYmIHIgPyAwIDogaSAmJiBzID8gMjcwIDogcyAmJiBhID8gMTgwIDogOTApLCAoYyA9IDMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICgoYyA9IHAgPyAwIDogMSksIChuID0gciA/IDAgOiBhID8gOTAgOiBzID8gMTgwIDogMjcwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHR0W2ZdID0ge2k6IG90LCB0ZXg6IGMsIGRpcjogbn0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsW2ZdID0gMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3QrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMywgMTFdXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChYID0gVi5jb3VudCB8fCAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGF0ID0gdGhpcy50cmVlRGF0YSA9IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3QgPSBNYXRoLmNlaWwoWCAvIDIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3QgPSBYIC0gc3QpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhdC5taW5Sb3cgPSBZKDAsIGEgLSBzdCAtIDEpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYXQubWluQ29sID0gWSgwLCBhIC0gY3QgLSAxKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGF0Lm1heFJvdyA9IGF0Lm1pblJvdyArIHN0ICsgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGF0Lm1heENvbCA9IGF0Lm1pbkNvbCArIGN0ICsgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wcmVsb2FkKFwiZ2FtZS9oZWRnZS9tYXNrXCIsIGNjLlNwcml0ZUZyYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShcInByZWZhYlwiLCBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0IHx8IGUucHJlbG9hZChcInByZWZhYi9nYW1lL2hlZGdlXCIsIGNjLlByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWzMsIDExXVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWCA9IFYuY291bnQgfHwgMywgbHQgPSB0aGlzLmljZURhdGEgPSB7fSwgdXQgPSBsdC5ySGludHMgPSBbXSwgcHQgPSBsdC5jSGludHMgPSBbXSwgZHQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBYO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGh0ID0gWSgxLCBhIC0gMikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZnQgPSBZKDEsIGEgLSAyKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChndCA9IChhIC0gaHQgLSAxKSAqIGEgKyBmdCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xID09IGR0LmluZGV4T2YoZ3QpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZHQucHVzaChndCwgZ3QgLSAxLCBndCArIDEsIGd0ICsgYSwgZ3QgLSBhKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsdFtndF0gPSAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh1dFtodF0gPSAodXRbaHRdIHx8IDApICsgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHRbZnRdID0gKHB0W2Z0XSB8fCAwKSArIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWC0tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGR0ID0gbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wcmVsb2FkKFwiZ2FtZS9pY2UvbWFza1wiLCBjYy5TcHJpdGVGcmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wcmVsb2FkKFwiZ2FtZS9pY2UvcGl0XCIsIGNjLlNwcml0ZUZyYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShcInByZWZhYlwiLCBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0IHx8IGUucHJlbG9hZChcInByZWZhYi9nYW1lL2ljZVwiLCBjYy5QcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFszLCAxMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDEyXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgxID09IHRoaXMuaGVhcnRzTnVtIHx8IHRoaXMuaW5maW5pdHlMaWZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh5dCA9IDAsIG10ID0gdGhpcy5oZWFydHM7IHl0IDwgMzsgeXQrKylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZ0ID0gbXRbeXRdLm5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZpbml0eUxpZmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgyID09IHl0ICYmICgodnQuYWN0aXZlID0gITApLCB2dC5zZXRQb3NpdGlvbihtdFswXS5ub2RlLnBvc2l0aW9uKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodnQuYWN0aXZlID0gMiA9PSB5dCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodnQuYWN0aXZlID0gMCA9PSB5dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZpbml0eUxpZmUgJiYgKHRoaXMuaGVhcnRJbmZpbml0eS5hY3RpdmUgPSAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydEJnTm9kZS53aWR0aCA9IDcwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgodSA9IFwiZ2FtZS9cIiArIHUgKyBcIi9cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF90ID0gX3BJbmZvLmRlZmF1bHQuaW5zLmdldFVzaW5nU2tpbigpLmJnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYnQgPSBwID8gMSA6IF90KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmxvYWREaXIodSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdCAmJiBrdC5ub2RlICYmIGt0Lm5vZGUuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBrdC50b3BTcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3ByaXRlRnJhbWUgPSBkLmdldCh1ICsgXCJ0b3BcIiArIGJ0LCBjYy5TcHJpdGVGcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IF9nbG9iYWwuZGVmYXVsdC5wYWRTY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gJiYgKChlLm5vZGUud2lkdGggKj0gbyksIChlLm5vZGUuaGVpZ2h0ICo9IG8pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrdC5faW5pdEdhbWUoYSwgbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSAhPSBfdClcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgod3QgPSB0aGlzLmRvd25TcC5ub2RlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFN0ID0gbmV3IGNjLkNvbG9yKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoVHQgPSBuZXcgY2MuQ29sb3IoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChJdCA9IFwiZ2FtZS9za2luL1wiICsgX3QgKyBcIi9cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoU3QuciA9IDIyMiksIChTdC5nID0gMTQ2KSwgKFN0LmIgPSA1MiksIChUdC5yID0gMjQ4KSwgKFR0LmcgPSAyMjEpLCAoVHQuYiA9IDgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3QuY29sb3IgPSBTdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3dC5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5jb2xvciA9IFR0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIER0ID0gd3QucGFyZW50LmdldENoaWxkQnlOYW1lKFwid2luQmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3Jlcy5kZWZhdWx0Lmlucy5sU0YoSXQgKyBcInNreVwiLCBEdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3Jlcy5kZWZhdWx0Lmlucy5sU0YoSXQgKyBcImNsb3VkXCIsIER0LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVzLmRlZmF1bHQuaW5zLmxTRihJdCArIFwiY2xvdWRcIiwgRHQuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnlHdWlkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gWzJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoKFB0ID0gX3BJbmZvLmRlZmF1bHQuaW5zLmdldFVzaW5nU2tpbigpLnJvbGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoXCJwcmVmYWJcIiwgZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubG9hZChcInNraW4vZ2lybFwiICsgUHQsIGNjLlByZWZhYiwgZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdCAmJiBrdC5ub2RlICYmIGt0Lm5vZGUuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gY2MuaW5zdGFudGlhdGUobik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSAoa3QudG9wR2lybFNrID0gaS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5sb2FkKFwicHJlZmFiL2dhbWUvZ29vc2VcIiwgY2MuUHJlZmFiLCBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0ICYmIGt0Lm5vZGUgJiYga3Qubm9kZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBrdC50b3BTcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrdC5kb3duU3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5hZGRDb21wb25lbnQoX3V2QW5pLmRlZmF1bHQpLnNwZWVkID0gMC4xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gY2MuaW5zdGFudGlhdGUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga3QudG9wR29vc2VTayA9IG4uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmFuaW1hdGlvbiA9IGgucnVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4ueCA9IGt0LnJhY2VGcm9tWDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnggPSAtbi54O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkueSA9IG4ueSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5ub2RlLmFkZENoaWxkKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ubm9kZS5hZGRDaGlsZChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0ga3QudG9wU3Aubm9kZS5jaGlsZHJlbi5sZW5ndGggPyAtMjI1IDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkuc2V0UG9zaXRpb24oYSwgLTIwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGt0LnRvcFNwLm5vZGUuYWRkQ2hpbGQoaSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmID09PSBfcEluZm8uZ2FtZVR5cGUuY2hhbGxlbmdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gby5jaGFsbGFnZURhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZiBpbiBfcEluZm8uY2hhbGxlbmdlVHlwZSAmJiBzLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHMudHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3BJbmZvLmNoYWxsZW5nZVR5cGUudHJlZSkgPT09IF9wSW5mby5jaGFsbGVuZ2VUeXBlLndvcm0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaS5zY2FsZVggPSAtaS5zY2FsZVgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuYW5pbWF0aW9uID0gaC5pZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnNldEVuZExpc3RlbmVyKGt0LnBsYXlHaXJsRW5kLmJpbmQoa3QpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLl9pbml0R2FtZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHRoaXMucm93c18gPSB0aGlzLmNvbHNfID0gdDtcbiAgICAgICAgdGhpcy5ncmlkX2NvdW50ID0gdGhpcy5yb3dzXyAqIHRoaXMuY29sc187XG4gICAgICAgIHRoaXMuYmFzZURhdGEgPSBlO1xuICAgICAgICB0aGlzLmNoZWNrTG9jYWxEYXRhKCk7XG4gICAgICAgIHRoaXMuaW5pdFZpZXcoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICB2YXIgYztcbiAgICAgICAgICAgIHZhciBsO1xuICAgICAgICAgICAgdmFyIHU7XG4gICAgICAgICAgICB2YXIgcDtcbiAgICAgICAgICAgIHZhciBkO1xuICAgICAgICAgICAgdmFyIGg7XG4gICAgICAgICAgICB2YXIgZjtcbiAgICAgICAgICAgIHZhciBnO1xuICAgICAgICAgICAgdmFyIHk7XG4gICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgIHZhciBfO1xuICAgICAgICAgICAgdmFyIGI7XG4gICAgICAgICAgICB2YXIgdztcbiAgICAgICAgICAgIHZhciBTO1xuICAgICAgICAgICAgdmFyIFQ7XG4gICAgICAgICAgICB2YXIgSTtcbiAgICAgICAgICAgIHZhciBEO1xuICAgICAgICAgICAgdmFyIFA7XG4gICAgICAgICAgICB2YXIgayA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gby50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gdCA9PSBfcEluZm8uZ2FtZVR5cGUucmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9IHQgPT0gX3BJbmZvLmdhbWVUeXBlLnByYWN0aWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gNjcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9udFNpemUgPSAzNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciA8IHRoaXMucm93c187XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcisrXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGEgPSB0aGlzLkdldEJhc2VSb3dIZWFkTnVtcyhyKSwgYyA9IDIsIGwgPSAwLCB1ID0gYTsgbCA8IHUubGVuZ3RoOyBsKyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwID0gdVtsXSksIChjICs9IDIxLjM5ICogKHAgKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPiBpICYmIChpID0gYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlICYmIChpID0gOTApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkID0gdGhpcy5yb3dzXyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGggPSAtNTI4ICsgaSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGYgPSAtNDAzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZyA9IDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh5ID0gNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG0gPSAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXyA9IDEgLSAoMC4wNyAvIDQ1KSAqIChpIC0gNjcuNSkpIDwgMC45MyA/IChfID0gMC45MykgOiBfID4gMSAmJiAoXyA9IDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChiID0gMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFMgPSAxNzIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQpXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3ID0gMzg0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfID0gMC42MDgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFMgPSAxNzUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGggPSAtMzYwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmID0gLTMxOSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYiA9IDEuNzgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgPSA4NiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZyA9IC03MiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeSA9IC0xNyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobSA9IDAuNzgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodyA9IDY0MCAqIChfIC09IDAuMDkpKSwgKGggKz0gNDUpLCAoZiA9IC00MjkpLCAoYiA9IDEuNSksICh5ID0gLTIxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdyA9IDY0MCAqIChfIC09IDAuMDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZ2xvYmFsLmRlZmF1bHQucGFkU2NhbGUgJiYgIXRoaXMuYnlHdWlkZSAmJiAoKGYgLT0gNTApLCAoeSAtPSA1MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwX25vZGVfLnNldFBvc2l0aW9uKGgsIGYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmdyaWRCZ1NwLm5vZGUuc2NhbGUgPSBfKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zZWxlY3RNYXNrQmcuc2NhbGUgPSBfKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeSAtPSB0aGlzLmRvd25Ob2RlLnkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChUID0gdGhpcy5pdGVtU2VsZWN0RWZmLnBhcmVudC5jaGlsZHJlblswXSkuc2V0UG9zaXRpb24oZywgeSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVC5zZXRTY2FsZShtKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoVC5jaGlsZHJlblswXS55ICs9IHRoaXMuZG93bk5vZGUueSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZ3JpZFNpemUgPSB3IC8gdGhpcy5yb3dzXyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZ3JpZHNTdGFydFggPSBTKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oaW50U2NhbGUgPSBiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oaW50V2lkdGggPSBpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbNCwgdGhpcy5hZGRIZWFkcygpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMuc2VudCgpLCBbNCwgdGhpcy5TZXRXb3JrR3JpZFRhZ1dpdGhJbml0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHMuc2VudCgpLCBJID0gMDsgSSA8IDM7IEkrKykgdGhpcy51cGRhdGVJdGVtTnVtKEkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmNoZWNrR3VpZGUoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zZW50KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIW4gJiYgX2lkeC5wbGF0Zm9ybS5zdGFydFZpZGVvUmVjb3JkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKEQgPSBfcEluZm8uZGVmYXVsdC5pbnMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChQID0gRC5nZXRJc0ZpcnN0UmFjZVRpcCgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlICYmICFQXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKEQuc2V0Rmlyc3RSYWNlVGlwKCEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5jYW5Ub3VjaCA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX3JhY2VUaXBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlSWR4OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUNiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrLmNhblRvdWNoID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodGhpcy5jYW5Ub3VjaCA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMl1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuYWRkSGVhZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgIHZhciBjO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dIZWFkTnVtcy5sZW5ndGggPSB0aGlzLmNvbEhlYWROdW1zLmxlbmd0aCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm93SGVhZEJlZ2lucy5sZW5ndGggPSB0aGlzLmNvbEhlYWRCZWdpbnMubGVuZ3RoID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkSGVhZENvbFZlYy5sZW5ndGggPSB0aGlzLmdyaWRIZWFkUm93VmVjLmxlbmd0aCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm93SGludHNQYXJlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xIaW50c1BhcmVudC5yZW1vdmVBbGxDaGlsZHJlbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA8IHRoaXMucm93c187XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSsrXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUgPSB0aGlzLkdldEJhc2VDb2xIZWFkTnVtcyhhKS5sZW5ndGgpID4gdCAmJiAodCA9IGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvLnR5cGUgPT0gX3BJbmZvLmdhbWVUeXBlLnJhY2UgJiYgdCA8IDMgJiYgKHQgPSAzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ5R3VpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAodGhpcy5oaW50SGVpZ2h0ID0gODUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHRoaXMuaGludEhlaWdodCA9IDUgPT0gdGhpcy5yb3dzXyA/IDEwNSA6IDcwICsgMzAgKiAodCAtIDIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKHIgPSBvLmNoYWxsYWdlRGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoci50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBfcEluZm8uY2hhbGxlbmdlVHlwZS50cmVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgX3BJbmZvLmNoYWxsZW5nZVR5cGUuaWNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBfcmVzLmRlZmF1bHQuaW5zLmxTRihcImdhbWUvaGVkZ2UvbWFza1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAobiA9IHMuc2VudCgpKSwgWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIF9yZXMuZGVmYXVsdC5pbnMubFNGKFwiZ2FtZS9pY2UvbWFza1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoaSA9IHMuc2VudCgpKSwgWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5yb3dzXzsgYSsrKSB0aGlzLkFkZFJvd0hlYWQoYSwgbiwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGMgPSAwOyBjIDwgdGhpcy5jb2xzXzsgYysrKSB0aGlzLkFkZENvbEhlYWQoYywgbiwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iZWdpbkFuaSgpLCBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuYmVnaW5BbmkgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2b2lkIDAgPT09IHQgJiYgKHQgPSB0aGlzLmhpbnRXaWR0aCk7XG4gICAgICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9IHRoaXMuaGludEhlaWdodCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGlsZXNQYXJlbnQpLnRvKDAuMiwge29wYWNpdHk6IDI1NX0pLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY29sSGludHNQYXJlbnQpLnNldCh7eTogLWV9KS50bygwLjIsIHt5OiAwfSkuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5yb3dIaW50c1BhcmVudCkuc2V0KHt4OiB0fSkudG8oMC4yLCB7eDogMH0pLnN0YXJ0KCk7XG4gICAgICAgIHZhciBuID0gby50eXBlO1xuICAgICAgICBuID09IF9wSW5mby5nYW1lVHlwZS5yYWNlXG4gICAgICAgICAgICA/IHRoaXMucmFjZUNvdW50RG93bigpXG4gICAgICAgICAgICA6IG4gPT0gX3BJbmZvLmdhbWVUeXBlLmNoYWxsZW5nZVxuICAgICAgICAgICAgPyB0aGlzLmNoYUNEKClcbiAgICAgICAgICAgIDogdGhpcy5jb21tb25DRCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY29tbW9uQ0QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5fY29tbW9uQ0QsIDEsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLl9jb21tb25DRCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuVG91Y2gpIHtcbiAgICAgICAgICAgIGlmICgodGhpcy50b3VjaFRpbWUrKywgdGhpcy50b3VjaFRpbWUgPiA1ICYmIG51bGwgPT0gdGhpcy5jdXJJdGVtQW5pKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgPSAwLCBlID0gdGhpcy5pdGVtcywgbyA9IGUubGVuZ3RoOyB0IDwgbzsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gZVt0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBuLmNvdW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IG4uaWNvbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgIT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuY3VySXRlbUFuaSA9IHRoaXNbciArIFwiQW5pXCJdKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmN1ckl0ZW1BbmkgfHwgKHRoaXMudG91Y2hUaW1lID0gMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB0aGlzLnJlc2V0Q0QoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJlc2V0Q0QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudG91Y2hUaW1lID0gMDtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmN1ckl0ZW1Bbmk7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICB0LnN0b3AoKTtcbiAgICAgICAgICAgIHZhciBlID0gdC5ub2RlO1xuICAgICAgICAgICAgY2MudHdlZW4oZSkudG8oMC4yLCB7eTogNSwgYW5nbGU6IDB9KS5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5jdXJJdGVtQW5pID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmFjZUNvdW50RG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oYXNDb3VudERvd25cbiAgICAgICAgICAgID8gKHRoaXMucmFjZVRpbWUgPSAzMSlcbiAgICAgICAgICAgIDogKCh0aGlzLmhhc0NvdW50RG93biA9ICEwKSwgdGhpcy5zY2hlZHVsZSh0aGlzLl9yYWNlQ291bmREb3duLCAxLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUikpO1xuICAgICAgICB0aGlzLl9yYWNlQ291bmREb3duKHZvaWQgMCwgITApO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuX3JhY2VDb3VuZERvd24gPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAodGhpcy5jYW5Ub3VjaCkge1xuICAgICAgICAgICAgdmFyIG8gPSAodGhpcy5yYWNlVGltZSA9IHRoaXMucmFjZVRpbWUgLSAxKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmFjZU5wY3MobywgZSk7XG4gICAgICAgICAgICBvIDwgMTAgJiYgMCAhPSBvXG4gICAgICAgICAgICAgICAgPyAoKHRoaXMubm9yQ2xvY2suYWN0aXZlID0gITEpLFxuICAgICAgICAgICAgICAgICAgKHRoaXMuc3BlQ2xvY2suYWN0aXZlID0gdGhpcy5jbG9ja1dhcm4uYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgKHRoaXMuY2xvY2tMYmwyLnN0cmluZyA9IG8gKyBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICh0aGlzLmNsb2NrTGJsMi5ub2RlLnggPSAxICE9IG8gPyAwIDogLTYpLFxuICAgICAgICAgICAgICAgICAgX3NvdW5kLmRlZmF1bHQuaW5zLnBsYXkoX3NvdW5kLmRlZmF1bHQuVElNRSksXG4gICAgICAgICAgICAgICAgICBfdmIuZGVmYXVsdC5wKF92Yi5WRW51bTMuRE9VQkxFKSlcbiAgICAgICAgICAgICAgICA6ICgodGhpcy5ub3JDbG9jay5hY3RpdmUgPSAhMCksXG4gICAgICAgICAgICAgICAgICAodGhpcy5zcGVDbG9jay5hY3RpdmUgPSB0aGlzLmNsb2NrV2Fybi5hY3RpdmUgPSAhMSksXG4gICAgICAgICAgICAgICAgICAodGhpcy5jbG9ja0xibC5zdHJpbmcgPSBvICsgXCJcIikpO1xuICAgICAgICAgICAgMCA9PSBvICYmIHRoaXMubG9zZUhlYXJ0KHRoaXMuZ3JpZHNbOTBdLm5vZGUucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGFDRCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLl9jaGFDRCwgMSwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuX2NoYUNEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9ICh0aGlzLmNoYVRpbWUgPSB0aGlzLmNoYVRpbWUgKyAxKTtcbiAgICAgICAgdmFyIGUgPSBKKHQgLyA4NjQwMCk7XG4gICAgICAgIHZhciBvID0gSigodCAtPSA4NjQwMCAqIGUpIC8gMzYwMCk7XG4gICAgICAgIHZhciBuID0gSigodCAtPSAzNjAwICogbykgLyA2MCk7XG4gICAgICAgIHZhciBpID0gKG4gPCAxMCA/IFwiMFwiIDogXCJcIikgKyBuICsgXCI6XCIgKyAoKHQgLT0gNjAgKiBuKSA8IDEwID8gXCIwXCIgOiBcIlwiKSArIHQ7XG4gICAgICAgIHZhciByID0gXCJcIjtcbiAgICAgICAgbyAmJiAociA9IChvIDwgMTAgPyBcIjBcIiA6IFwiXCIpICsgbyArIFwiOlwiKTtcbiAgICAgICAgdGhpcy51c2VUaW1lTGJsLnN0cmluZyA9IHIgKyBpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlUmFjZU5wY3MgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IHRoaXMudG9wR2lybFNrO1xuICAgICAgICB2YXIgbiA9IHRoaXMudG9wR29vc2VTaztcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5yYWNlRnJvbVg7XG4gICAgICAgICAgICB2YXIgciA9ICgxIC0gdCAvIDMwKSAqIHRoaXMucmFjZUFsbFggLSBpO1xuICAgICAgICAgICAgdmFyIGEgPSAtcjtcbiAgICAgICAgICAgIHZhciBzID0gZSA/IDAuNSA6IDE7XG4gICAgICAgICAgICBvLnRpbWVTY2FsZSA9IGUgPyAxLjcgOiAxO1xuICAgICAgICAgICAgY2MudHdlZW4oby5ub2RlKVxuICAgICAgICAgICAgICAgIC50byhzLCB7eDogcn0pXG4gICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBvLnRpbWVTY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKG4ubm9kZSkudG8ocywge3g6IGF9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5sb3NlSGVhcnQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHZhciBvID0gdGhpcy5oZWFydHNOdW07XG4gICAgICAgIGlmICghKG8gPCAxKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93T3JIaWRlU2VsZWN0TWFzaygpO1xuICAgICAgICAgICAgdmFyIG4gPSAhdGhpcy5pbmZpbml0eUxpZmU7XG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMuaGVhcnRzW28gLSAxXTtcbiAgICAgICAgICAgIHZhciByID0gdGhpcy5wYXRpY2VzO1xuICAgICAgICAgICAgbiAmJiB0aGlzLmhlYXJ0c051bS0tO1xuICAgICAgICAgICAgdGhpcy5wbGF5R2lybEFuaShoLnNhZCk7XG4gICAgICAgICAgICB2YXIgYSA9IGkubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcbiAgICAgICAgICAgIHIuY29udmVydFRvTm9kZVNwYWNlQVIoYSwgYSk7XG4gICAgICAgICAgICB2YXIgcyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaGVhcnRzUGF0aWMpO1xuICAgICAgICAgICAgcy5zZXRQb3NpdGlvbih0KTtcbiAgICAgICAgICAgIHMuc2V0UGFyZW50KHIpO1xuICAgICAgICAgICAgcy5zY2FsZSA9IDEgLyB0aGlzLmdyaWRCZ1NwLm5vZGUuc2NhbGU7XG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gITE7XG4gICAgICAgICAgICBjYy50d2VlbihzKVxuICAgICAgICAgICAgICAgIC50bygwLjgsIHt4OiBhLngsIHk6IGEueX0pXG4gICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgblxuICAgICAgICAgICAgICAgICAgICAgICAgPyAoaS5wbGF5TG9zZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAwID09IGUuaGVhcnRzTnVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChfc291bmQuZGVmYXVsdC5pbnMucGxheShfc291bmQuZGVmYXVsdC5MT1NFKSwgZS5wbGF5QW5pKGYuZ2FtZUxvc2UpLCBlLmV2ZW50RG90KCExKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGUuY2FuVG91Y2ggPSAhMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChlLmNhblRvdWNoID0gITApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZUl0ZW1OdW0gPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbiA9IHRoaXM7XG4gICAgICAgIHZvaWQgMCA9PT0gdCAmJiAodCA9IHRoaXMuY3VySXRlbUlkeCk7XG4gICAgICAgIHZhciBpID0gdGhpcy5pdGVtc1t0XTtcbiAgICAgICAgdmFyIHIgPSBpLmljb247XG4gICAgICAgIHZhciBhID0gby50eXBlID09IF9wSW5mby5nYW1lVHlwZS5wcmFjdGljZTtcbiAgICAgICAgdmFyIHMgPSB0aGlzW3IgKyBcIkxibFwiXTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGEgfHwgX2JhZ01nci5kZWZhdWx0Lmlucy51c2VJdGVtKHIsIDEsIG8udHlwZSk7XG4gICAgICAgICAgICB0aGlzLk9uQnRuSGlkZUl0ZW0oKTtcbiAgICAgICAgICAgIHZhciBjID0gaS5pdGVtTWF4O1xuICAgICAgICAgICAgaWYgKGMgPiAwICYmIGMgPT0gKGkuaXRlbUN1ciA9IGkuaXRlbUN1ciArIDEpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImNhblVzZVwiKTtcbiAgICAgICAgICAgICAgICBsICYmIChsLmFjdGl2ZSA9ICEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBfcmVzLmRlZmF1bHQuaW5zLmdldEJ1bmRsZUJ5U3RyaW5nKFwicHJlZmFiXCIpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0LmxvYWQoXCJwcmVmYWIvZ2FtZS9cIiArIHIsIGNjLlByZWZhYiwgZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbi5ub2RlICYmIGNjLmlzVmFsaWQobi5ub2RlKSAmJiAhdCAmJiAobltyICsgXCJQcmVmYWJcIl0gPSBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgdmFyIHUgPSBzLm5vZGU7XG4gICAgICAgICAgICB1LmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgdS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ3dXhpYW5cIikuYWN0aXZlID0gITA7XG4gICAgICAgICAgICBpLmNvdW50ID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwID0gKGkuY291bnQgPSBfYmFnTWdyLmRlZmF1bHQuaW5zLmdldEl0ZW1Db3VudChyKSk7XG4gICAgICAgICAgICBzLnN0cmluZyA9IDAgPT0gcCA/IFwiK1wiIDogXCJ4XCIgKyBwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51c2VJdGVtID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICB2YXIgYztcbiAgICAgICAgICAgIHZhciBsO1xuICAgICAgICAgICAgdmFyIHU7XG4gICAgICAgICAgICB2YXIgcDtcbiAgICAgICAgICAgIHZhciBkO1xuICAgICAgICAgICAgdmFyIGg7XG4gICAgICAgICAgICB2YXIgZjtcbiAgICAgICAgICAgIHZhciBnO1xuICAgICAgICAgICAgdmFyIG07XG4gICAgICAgICAgICB2YXIgdjtcbiAgICAgICAgICAgIHZhciBfO1xuICAgICAgICAgICAgdmFyIGI7XG4gICAgICAgICAgICB2YXIgVDtcbiAgICAgICAgICAgIHZhciBJO1xuICAgICAgICAgICAgdmFyIEQ7XG4gICAgICAgICAgICB2YXIgUDtcbiAgICAgICAgICAgIHZhciBrO1xuICAgICAgICAgICAgdmFyIFI7XG4gICAgICAgICAgICB2YXIgTjtcbiAgICAgICAgICAgIHZhciBPO1xuICAgICAgICAgICAgdmFyIE07XG4gICAgICAgICAgICB2YXIgTDtcbiAgICAgICAgICAgIHZhciBBO1xuICAgICAgICAgICAgdmFyIEU7XG4gICAgICAgICAgICB2YXIgeDtcbiAgICAgICAgICAgIHZhciBCO1xuICAgICAgICAgICAgdmFyIEY7XG4gICAgICAgICAgICB2YXIgajtcbiAgICAgICAgICAgIHZhciBWID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmNhblRvdWNoID0gITEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuID0gdGhpcy5jdXJJdGVtSWR4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA9IHRoaXMuaXRlbXNbbl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyID0gaS5pY29uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYSA9IHRoaXNbciArIFwiUHJlZmFiXCJdKSA/IFszLCAyXSA6IFs0LCBfcmVzLmRlZmF1bHQuaW5zLmxQcmUoXCJwcmVmYWIvZ2FtZS9cIiArIHIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgKGEgPSBzLnNlbnQoKSksIChzLmxhYmVsID0gMik7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoKChjID0gdGhpcy5wYXRpY2VzKSwgdGhpcy5jdXJJdGVtSWR4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFYuT25DbGlja0dyaWQoZSwgbywgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFYuY2FuVG91Y2ggPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsKCksIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHUgPSBjYy5pbnN0YW50aWF0ZShhKSkuc2V0UG9zaXRpb24odC5ub2RlLnBvc2l0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUuc2V0UGFyZW50KGMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHUuc2NhbGUgPSAxIC8gdGhpcy5ncmlkQmdTcC5ub2RlLnNjYWxlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zb3VuZC5kZWZhdWx0Lmlucy5wbGF5KF9zb3VuZC5kZWZhdWx0LlNIT1ZFTCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocCA9IHUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikpLnBsYXkoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAub24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gdGhpcy5yYW5kb21fbm90aWNlTGJsLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuY29udmVydFRvTm9kZVNwYWNlQVIoZCwgZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9IF9jb20uZGVmYXVsdC5pbnMucmFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYgPSB0aGlzLmdyaWRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gdGhpcy5yb3dzXyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5jb2xzXyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfID0gdGhpcy50cmVlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRiA8IG07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGKytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUIDwgdiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoSSA9IGZbKGIgPSBGICogdiArIFQpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF8gJiYgX1tiXSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIUkuaXNFbXB0eSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZy5wdXNoKHt0OiBtIC0gRiAtIDEsIGU6IFQsIGRhdGE6IEl9KSwgMyAhPSBnLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFQrK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb20uZGVmYXVsdC5pbnMucmFuZFNvcnQoZyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRCA9IE1hdGgubWluKGcubGVuZ3RoLCAzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBnW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGUudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBlLmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWkpIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVi5PbkNsaWNrR3JpZChvLCBuLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID09IEQgLSAxICYmIChWLmNhblRvdWNoID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBjYy5pbnN0YW50aWF0ZShhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2V0UGFyZW50KGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zZXRQb3NpdGlvbihkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZ2V0Q29tcG9uZW50KF9yYW5kb21fbm90aWNlLmRlZmF1bHQpLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2NhbGUgPSAxIC8gay5ncmlkQmdTcC5ub2RlLnNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBpLm5vZGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IG5ldyBjYy5WZWMyKGwueCwgbC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gbmV3IGNjLlZlYzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgPT0gaCgxLCAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKChwLnggPSAoZC54ICsgZC55ICsgdS54IC0gdS55KSAvIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHAueSA9IChkLnkgKyB1LnggKyB1LnkgLSBkLngpIC8gMikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoKHAueCA9ICh1LnggKyB1LnkgKyBkLnggLSBkLnkpIC8gMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocC55ID0gKHUueSArIGQueCArIGQueSAtIHUueCkgLyAyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjIgKiB0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NvdW5kLmRlZmF1bHQuaW5zLnBsYXkoX3NvdW5kLmRlZmF1bHQuUk9DS0VUTEFVTkNIKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iZXppZXJUbygxLCBkLCBwLCB1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NvdW5kLmRlZmF1bHQuaW5zLnBsYXkoX3NvdW5kLmRlZmF1bHQuUk9DS0VUQVRUQUNLKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgayA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGIDwgRCAmJiBcImJyZWFrXCIgIT09IFAoRik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGKytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKFIgPSB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKE4gPSB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKE8gPSB0aGlzLmdyaWRzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChNID0gdGhpcy5jb2xzXyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoTCA9IHRoaXMucm93c18pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPSBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IE9bKEwgLSBlIC0gMSkgKiBNICsgdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgPT0gdCAmJiAoUiA9IG8ubm9kZS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPT0gTSAtIDEgJiYgKE4gPSBvLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWLk9uQ2xpY2tHcmlkKGUsIHQsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKHQgLyBNKSAqIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGIDwgTTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGKytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBKEYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChudWxsICE9IG8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IE9bKEwgLSB0IC0gMSkgKiBNICsgb107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgPT0gdCAmJiAoTiA9IGUubm9kZS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPT0gTCAtIDEgJiYgKFIgPSBlLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWLk9uQ2xpY2tHcmlkKHQsIG8sICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKChMIC0gdCkgLyBMKSAqIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEIgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGIDwgTDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGKytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4KEYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgoaiA9IGNjLmluc3RhbnRpYXRlKGEpKS5zZXRQYXJlbnQoYyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChqLmFuZ2xlID0gbnVsbCAhPSBvID8gLTkwIDogMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChqLnNjYWxlID0gMSAvIHRoaXMuZ3JpZEJnU3Aubm9kZS5zY2FsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHdlZW4oailcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXQoe3Bvc2l0aW9uOiBSfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7cG9zaXRpb246IE59KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGouZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFYuY2FuVG91Y2ggPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVi5jYW5Ub3VjaCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheUFuaSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJBbmkpXG4gICAgICAgICAgICBzd2l0Y2ggKCgodGhpcy5jdXJBbmkgPSB0KSwgdGhpcy5wYW5lbEFuaS5wbGF5KHQpLCB0KSkge1xuICAgICAgICAgICAgICAgIGNhc2UgZi5nYW1lTG9zZTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5RG93bkFuaSghMCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZi5nYW1lUmVsaWZlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlEb3duQW5pKCExKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBmLmdhbWVXaW5GYWlsU2Y6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZXNXaW5BbmkoKTtcbiAgICAgICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnBsYXlBbmlEb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY3VyQW5pKSB7XG4gICAgICAgICAgICBjYXNlIGYuZ2FtZVdpbjpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlXaW5Eb25lKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGYuZ2FtZVJlbGlmZTpcbiAgICAgICAgICAgICAgICB0aGlzLnJlTGlmZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBmLm9wZW5JdGVtU2VsZWN0OlxuICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSAhMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZi5jbG9zZUl0ZW1TZWxlY3Q6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJJdGVtQnRuLnNldFNpYmxpbmdJbmRleCh0aGlzLmN1ckl0ZW1JZHggKyAxKSwgKHRoaXMuY3VySXRlbUJ0biA9IHRoaXMuY3VySXRlbUlkeCA9IG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VyQW5pID0gbnVsbDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnBsYXlXaW5Eb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIHZhciBuID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYnlHdWlkZSlcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZ3VpZGVOcGMpXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwge29wYWNpdHk6IDI1NX0pXG4gICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IG4uc2hhcmVCdG4ucGFyZW50LmdldENoaWxkQnlOYW1lKFwiZ2V0QnRuXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IG4uZ3VpZGVGaW5nZXI7XG4gICAgICAgICAgICAgICAgICAgIGUuc2V0UGFyZW50KHQpO1xuICAgICAgICAgICAgICAgICAgICBuLmd1aWRlTnBjQW5pLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odCkudG8oMC4yLCB7b3BhY2l0eTogMjU1fSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXQoe2FjdGl2ZTogITAsIHg6IDgwLCB5OiAwLCBzY2FsZTogMSwgb3BhY2l0eTogMjU1fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHtzY2FsZTogMS4yfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHtzY2FsZTogMX0sIHtlYXNpbmc6IFwiY3ViaWNPdXRcIn0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudW5pb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgZWxzZSBpZiAoXG4gICAgICAgICAgICAoby50eXBlICE9IF9wSW5mby5nYW1lVHlwZS5wcmFjdGljZSAmJiBfaWR4LnBsYXRmb3JtLnN0b3BWaWRlb1JlY29yZCgpLCBvLnR5cGUgPT09IF9wSW5mby5nYW1lVHlwZS5ub3JtYWwpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdmFyIGkgPSBfcEluZm8uZGVmYXVsdC5pbnMuZ2V0UHV6emxlTHZsKCkgLSAxO1xuICAgICAgICAgICAgdmFyIHIgPVxuICAgICAgICAgICAgICAgIChudWxsID09PVxuICAgICAgICAgICAgICAgICAgICAoZSA9IG51bGwgPT09ICh0ID0gX2NmZ01nci5kZWZhdWx0LnNlcnZlckNmZy5hZGRfZGVza3RvcCkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5ydWxlcykgfHxcbiAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGVcbiAgICAgICAgICAgICAgICAgICAgPyB2b2lkIDBcbiAgICAgICAgICAgICAgICAgICAgOiBlLm51bXMpIHx8IDc7XG4gICAgICAgICAgICB2YXIgYSA9IF9wSW5mby5kZWZhdWx0Lmlucy5nZXRBZGREZXNrKCk7XG4gICAgICAgICAgICBfaWR4LnBsYXRmb3JtLnN0cmluZygpICE9IF9wQ29uc3QuUEZDb2RlLkJ5dGVkYW5jZSB8fFxuICAgICAgICAgICAgICAgIGkgIT0gciB8fFxuICAgICAgICAgICAgICAgIGEgfHxcbiAgICAgICAgICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX2Rlc2tSZXdhcmRcIiwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnBsYXlEb3duQW5pID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0ID8gLTM2MCA6IHRoaXMuZG93bkJlZ2luWTtcbiAgICAgICAgdmFyIG8gPSB0ID8gMCA6IDEuMTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5kb3duTm9kZSlcbiAgICAgICAgICAgIC5kZWxheShvKVxuICAgICAgICAgICAgLnRvKDEwIC8gMzAsIHt5OiBlLCBvcGFjaXR5OiB0ID8gMCA6IDI1NX0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJlTGlmZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oZWFydHNOdW0gPSAxO1xuICAgICAgICB0aGlzLmhlYXJ0c1swXS5nZXRIZWFydCgpO1xuICAgICAgICB0aGlzLmNhblRvdWNoID0gITA7XG4gICAgICAgIG8udHlwZSA9PSBfcEluZm8uZ2FtZVR5cGUucmFjZSAmJiB0aGlzLnJhY2VDb3VudERvd24oKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLkdldEJhc2VSb3dIZWFkTnVtcyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICgwID09IHRoaXMucm93SGVhZE51bXMubGVuZ3RoKVxuICAgICAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMuYmFzZURhdGEsIG8gPSB0aGlzLnJvd3NfIC0gMTsgbyA+PSAwOyBvLS0pIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gbyAqIHRoaXMuY29sc18sIGkgPSBbXSwgciA9IFtdLCBhID0gMCwgcyA9IG47IHMgPCBuICsgdGhpcy5jb2xzXzsgcysrKVxuICAgICAgICAgICAgICAgICAgICBlW3NdID09IGMuTyA/IDEgPT0gKythICYmIHIucHVzaChzKSA6IGEgPiAwICYmIChpLnB1c2goYSksIChhID0gMCkpO1xuICAgICAgICAgICAgICAgIGEgPiAwICYmIGkucHVzaChhKTtcbiAgICAgICAgICAgICAgICAwID09IGkubGVuZ3RoICYmIGkucHVzaCgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd0hlYWROdW1zLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dIZWFkQmVnaW5zLnB1c2gocik7XG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJvd0hlYWROdW1zW3RdO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuR2V0QmFzZUNvbEhlYWROdW1zID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKDAgPT0gdGhpcy5jb2xIZWFkTnVtcy5sZW5ndGgpXG4gICAgICAgICAgICBmb3IgKHZhciBlID0gdGhpcy5iYXNlRGF0YSwgbyA9IDA7IG8gPCB0aGlzLmNvbHNfOyBvKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gW10sIGkgPSAwLCByID0gMCwgYSA9IFtdOyByIDwgdGhpcy5yb3dzXzsgcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gbyArIHIgKiB0aGlzLnJvd3NfO1xuICAgICAgICAgICAgICAgICAgICBlW3NdID09IGMuTyA/IDEgPT0gKytpICYmIGEucHVzaChzKSA6IGkgPiAwICYmIChuLnB1c2goaSksIChpID0gMCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpID4gMCAmJiBuLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgMCA9PSBuLmxlbmd0aCAmJiBuLnB1c2goMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xIZWFkTnVtcy5wdXNoKG4pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sSGVhZEJlZ2lucy5wdXNoKGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb2xIZWFkTnVtc1t0XTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLkdldEJhc2VSb3dCZWdpbk51bXMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAwID09IHRoaXMucm93SGVhZEJlZ2lucy5sZW5ndGggJiYgdGhpcy5HZXRCYXNlUm93SGVhZE51bXModCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd0hlYWRCZWdpbnNbdF07XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5HZXRCYXNlQ29sQmVnaW5OdW1zID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgMCA9PSB0aGlzLmNvbEhlYWRCZWdpbnMubGVuZ3RoICYmIHRoaXMuR2V0QmFzZUNvbEhlYWROdW1zKHQpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xIZWFkQmVnaW5zW3RdO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuR2V0V29ya1Jvd0hlYWROdW1zID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZm9yICh2YXIgZSA9ICh0aGlzLnJvd3NfIC0gdCAtIDEpICogdGhpcy5jb2xzXywgbyA9IFtdLCBuID0gMCwgaSA9IGU7IGkgPCBlICsgdGhpcy5jb2xzXzsgaSsrKVxuICAgICAgICAgICAgdGhpcy53b3JrRGF0YVtpXSA9PSBjLk8gPyBuKysgOiBuID4gMCAmJiAoby5wdXNoKG4pLCAobiA9IDApKTtcbiAgICAgICAgbiA+IDAgJiYgby5wdXNoKG4pO1xuICAgICAgICAwID09IG8ubGVuZ3RoICYmIG8ucHVzaCgwKTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5HZXRXb3JrQ29sSGVhZE51bXMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBmb3IgKHZhciBlID0gW10sIG8gPSAwLCBuID0gMDsgbiA8IHRoaXMucm93c187IG4rKykge1xuICAgICAgICAgICAgdmFyIGkgPSB0ICsgbiAqIHRoaXMucm93c187XG4gICAgICAgICAgICB0aGlzLndvcmtEYXRhW2ldID09IGMuTyA/IG8rKyA6IG8gPiAwICYmIChlLnB1c2gobyksIChvID0gMCkpO1xuICAgICAgICB9XG4gICAgICAgIG8gPiAwICYmIGUucHVzaChvKTtcbiAgICAgICAgMCA9PSBlLmxlbmd0aCAmJiBlLnB1c2goMCk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuQWRkUm93SGVhZCA9IGZ1bmN0aW9uICh0LCBlLCBvKSB7XG4gICAgICAgIHZhciBuID0ge3NoaW5lQmc6IG51bGwsIGxhYmVsczogW10sIGFsbFJpZ2h0OiAhMX07XG4gICAgICAgIHZhciBpID0gdGhpcy5oaW50U2NhbGU7XG4gICAgICAgIHZhciByID0gdGhpcy5oaW50V2lkdGg7XG4gICAgICAgIHZhciBhID0gbmV3IGNjLk5vZGUoXCJyb3dIaW50XCIpO1xuICAgICAgICB2YXIgcyA9IG5ldyBjYy5Ob2RlKFwiYmdcIik7XG4gICAgICAgIHZhciBjID0gbmV3IGNjLk5vZGUoXCJzaGluZUJnXCIpO1xuICAgICAgICB2YXIgbCA9IHMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHZhciB1ID0gYy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgbC5zcHJpdGVGcmFtZSA9IHUuc3ByaXRlRnJhbWUgPSB0aGlzLmxIaW50U2Y7XG4gICAgICAgIGwuc2l6ZU1vZGUgPSB1LnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICAgICAgbC50eXBlID0gdS50eXBlID0gY2MuU3ByaXRlLlR5cGUuU0xJQ0VEO1xuICAgICAgICBzLnNldEFuY2hvclBvaW50KDEsIDAuNSk7XG4gICAgICAgIGMuc2V0QW5jaG9yUG9pbnQoMSwgMC41KTtcbiAgICAgICAgcy53aWR0aCA9IGMud2lkdGggPSByO1xuICAgICAgICBjLnBhcmVudCA9IHMucGFyZW50ID0gYTtcbiAgICAgICAgdS5kc3RCbGVuZEZhY3RvciA9IGNjLm1hY3JvLkJsZW5kRmFjdG9yLk9ORTtcbiAgICAgICAgYy5vcGFjaXR5ID0gMTAwO1xuICAgICAgICBjLmFjdGl2ZSA9ICExO1xuICAgICAgICBmb3IgKFxuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLmxpbmVXLFxuICAgICAgICAgICAgICAgIGQgPSB0aGlzLmZvbnQ0LFxuICAgICAgICAgICAgICAgIGggPSB0aGlzLmZvbnRTaXplLFxuICAgICAgICAgICAgICAgIGYgPSA1ID09IHRoaXMucm93c18sXG4gICAgICAgICAgICAgICAgZyA9IG5ldyBjYy5Ob2RlKFwibGJsc1wiKSxcbiAgICAgICAgICAgICAgICB5ID0gdGhpcy5HZXRCYXNlUm93SGVhZE51bXModCksXG4gICAgICAgICAgICAgICAgbSA9IGYgPyA1IDogMixcbiAgICAgICAgICAgICAgICB2ID0geS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgXyA9IDEgLSAwLjA0ICogKHYgLSAyKSxcbiAgICAgICAgICAgICAgICBiID0gdiAtIDE7XG4gICAgICAgICAgICBiID49IDA7XG4gICAgICAgICAgICBiLS1cbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgdyA9IG5ldyBjYy5Ob2RlKFwibGJsXCIpO1xuICAgICAgICAgICAgdmFyIFMgPSB3LmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBTLmZvbnQgPSBkO1xuICAgICAgICAgICAgUy5mb250U2l6ZSA9IGg7XG4gICAgICAgICAgICB2YXIgVCA9IHlbYl07XG4gICAgICAgICAgICB2YXIgSSA9IChTLnN0cmluZyA9IFQgKyBcIlwiKTtcbiAgICAgICAgICAgIFMuc3BhY2luZ1ggPSAtNjtcbiAgICAgICAgICAgIHcuY29sb3IgPSBXO1xuICAgICAgICAgICAgdy5zZXRBbmNob3JQb2ludCgxLCAwLjUpO1xuICAgICAgICAgICAgdy5wb3NpdGlvbiA9IGNjLnYzKC1tLCAtNik7XG4gICAgICAgICAgICB3LnBhcmVudCA9IGc7XG4gICAgICAgICAgICBtID0gbSArIChoIC0gMTMpICogXyArIDEzICogKEkubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBuLmxhYmVsc1tiXSA9IHc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKChnLnBhcmVudCA9IGEpLFxuICAgICAgICAgICAgKGEucG9zaXRpb24gPSBjYy52MyhcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRzU3RhcnRYIC0gMixcbiAgICAgICAgICAgICAgICB0ICogdGhpcy5ncmlkU2l6ZSArIHRoaXMuZ3JpZFNpemUgLyAyICsgTWF0aC5mbG9vcih0IC8gNSkgKiBwIC0gMVxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgICAoYS5wYXJlbnQgPSB0aGlzLnJvd0hpbnRzUGFyZW50KSxcbiAgICAgICAgICAgIChuLnNoaW5lQmcgPSBjKSxcbiAgICAgICAgICAgIHRoaXMuZ3JpZEhlYWRSb3dWZWMucHVzaChuKSxcbiAgICAgICAgICAgIChhLnNjYWxlID0gaSksXG4gICAgICAgICAgICAoZSAmJiB0ID4gdGhpcy50cmVlRGF0YS5taW5Sb3cgJiYgdCA8IHRoaXMudHJlZURhdGEubWF4Um93KSB8fFxuICAgICAgICAgICAgICAgIChvICYmIHRoaXMuaWNlRGF0YSAmJiB0aGlzLmljZURhdGEuckhpbnRzW3RdKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgRCA9IGUgPyBcInRyZWVNYXNrXCIgOiBcImljZU1hc2tcIjtcbiAgICAgICAgICAgIHZhciBQID0gbmV3IGNjLk5vZGUoRCk7XG4gICAgICAgICAgICBQLnNldEFuY2hvclBvaW50KDEsIDAuNSk7XG4gICAgICAgICAgICB2YXIgayA9IFAuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBrLnNwcml0ZUZyYW1lID0gZSB8fCBvO1xuICAgICAgICAgICAgay5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgICAgICAgICBrLnR5cGUgPSBlID8gY2MuU3ByaXRlLlR5cGUuVElMRUQgOiBjYy5TcHJpdGUuVHlwZS5TTElDRUQ7XG4gICAgICAgICAgICBQLndpZHRoID0gcjtcbiAgICAgICAgICAgIGEuYWRkQ2hpbGQoUCk7XG4gICAgICAgICAgICBuW0RdID0gUDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuQWRkQ29sSGVhZCA9IGZ1bmN0aW9uICh0LCBlLCBvKSB7XG4gICAgICAgIHZhciBuID0ge3NoaW5lQmc6IG51bGwsIGxhYmVsczogW10sIGFsbFJpZ2h0OiAhMX07XG4gICAgICAgIHZhciBpID0gdGhpcy5oaW50U2NhbGU7XG4gICAgICAgIHZhciByID0gdGhpcy5oaW50SGVpZ2h0O1xuICAgICAgICB2YXIgYSA9IG5ldyBjYy5Ob2RlKFwiY29sSGludFwiKTtcbiAgICAgICAgdmFyIHMgPSBuZXcgY2MuTm9kZShcImJnXCIpO1xuICAgICAgICB2YXIgYyA9IG5ldyBjYy5Ob2RlKFwic2hpbmVCZ1wiKTtcbiAgICAgICAgdmFyIGwgPSBzLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB2YXIgdSA9IGMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGwuc3ByaXRlRnJhbWUgPSB1LnNwcml0ZUZyYW1lID0gdGhpcy51SGludFNmO1xuICAgICAgICBsLnNpemVNb2RlID0gdS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgICAgIGwudHlwZSA9IHUudHlwZSA9IGNjLlNwcml0ZS5UeXBlLlNMSUNFRDtcbiAgICAgICAgcy5zZXRBbmNob3JQb2ludCgwLjUsIDApO1xuICAgICAgICBjLnNldEFuY2hvclBvaW50KDAuNSwgMCk7XG4gICAgICAgIHMuaGVpZ2h0ID0gYy5oZWlnaHQgPSByO1xuICAgICAgICBjLnBhcmVudCA9IHMucGFyZW50ID0gYTtcbiAgICAgICAgdS5kc3RCbGVuZEZhY3RvciA9IGNjLm1hY3JvLkJsZW5kRmFjdG9yLk9ORTtcbiAgICAgICAgYy5vcGFjaXR5ID0gMTAwO1xuICAgICAgICBjLmFjdGl2ZSA9ICExO1xuICAgICAgICBmb3IgKFxuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLmZvbnQ0LFxuICAgICAgICAgICAgICAgIGQgPSB0aGlzLmZvbnRTaXplLFxuICAgICAgICAgICAgICAgIGggPSB0aGlzLmxpbmVXLFxuICAgICAgICAgICAgICAgIGYgPSBuZXcgY2MuTm9kZShcImxibHNcIiksXG4gICAgICAgICAgICAgICAgZyA9IHRoaXMuR2V0QmFzZUNvbEhlYWROdW1zKHQpLFxuICAgICAgICAgICAgICAgIHkgPSAwLFxuICAgICAgICAgICAgICAgIG0gPSBnLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBtID49IDA7XG4gICAgICAgICAgICBtLS1cbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgdiA9IG5ldyBjYy5Ob2RlKFwibGJsXCIpO1xuICAgICAgICAgICAgdmFyIF8gPSB2LmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBfLmZvbnQgPSBwO1xuICAgICAgICAgICAgXy5mb250U2l6ZSA9IGQ7XG4gICAgICAgICAgICB2YXIgYiA9IGdbbV07XG4gICAgICAgICAgICB2YXIgdyA9IDA7XG4gICAgICAgICAgICBiID4gMTEgJiYgKHcgPSAtMik7XG4gICAgICAgICAgICBfLnN0cmluZyA9IGI7XG4gICAgICAgICAgICBfLnNwYWNpbmdYID0gLTY7XG4gICAgICAgICAgICB2LmNvbG9yID0gVztcbiAgICAgICAgICAgIHYuc2V0QW5jaG9yUG9pbnQoMC41LCAwKTtcbiAgICAgICAgICAgIHYucG9zaXRpb24gPSBjYy52Myh3IC0gMSwgeSAtIDEwKTtcbiAgICAgICAgICAgIHYucGFyZW50ID0gZjtcbiAgICAgICAgICAgIHkgPSB5ICsgZCAtIDY7XG4gICAgICAgICAgICBuLmxhYmVsc1ttXSA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKChmLnBhcmVudCA9IGEpLFxuICAgICAgICAgICAgKGEucG9zaXRpb24gPSBjYy52MyhcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRzU3RhcnRYICsgdCAqIHRoaXMuZ3JpZFNpemUgKyB0aGlzLmdyaWRTaXplIC8gMiArIE1hdGguZmxvb3IodCAvIDUpICogaCArIDEsXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzXyAqIHRoaXMuZ3JpZFNpemUgKyA1XG4gICAgICAgICAgICApKSxcbiAgICAgICAgICAgIChhLnBhcmVudCA9IHRoaXMuY29sSGludHNQYXJlbnQpLFxuICAgICAgICAgICAgKG4uc2hpbmVCZyA9IGMpLFxuICAgICAgICAgICAgdGhpcy5ncmlkSGVhZENvbFZlYy5wdXNoKG4pLFxuICAgICAgICAgICAgKGEuc2NhbGUgPSBpKSxcbiAgICAgICAgICAgIChlICYmIHQgPiB0aGlzLnRyZWVEYXRhLm1pbkNvbCAmJiB0IDwgdGhpcy50cmVlRGF0YS5tYXhDb2wpIHx8XG4gICAgICAgICAgICAgICAgKG8gJiYgdGhpcy5pY2VEYXRhICYmIHRoaXMuaWNlRGF0YS5jSGludHNbdF0pKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciBTID0gZSA/IFwidHJlZU1hc2tcIiA6IFwiaWNlTWFza1wiO1xuICAgICAgICAgICAgdmFyIFQgPSBuZXcgY2MuTm9kZShTKTtcbiAgICAgICAgICAgIFQuc2V0QW5jaG9yUG9pbnQoMC41LCAwKTtcbiAgICAgICAgICAgIHZhciBJID0gVC5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIEkuc3ByaXRlRnJhbWUgPSBlIHx8IG87XG4gICAgICAgICAgICBJLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICAgICAgICAgIEkudHlwZSA9IGUgPyBjYy5TcHJpdGUuVHlwZS5USUxFRCA6IGNjLlNwcml0ZS5UeXBlLlNMSUNFRDtcbiAgICAgICAgICAgIFQuaGVpZ2h0ID0gcjtcbiAgICAgICAgICAgIGEuYWRkQ2hpbGQoVCk7XG4gICAgICAgICAgICBuW1NdID0gVDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0V29ybGRQb2ludEJ5VG91Y2ggPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IGNjLlZlYzIuWkVSTztcbiAgICAgICAgdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHQuZ2V0TG9jYXRpb24oKSwgZSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuVGVzdFRvdWNoID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gITEpO1xuICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0V29ybGRQb2ludEJ5VG91Y2godC50b3VjaCk7XG4gICAgICAgIHZhciBuID0gdGhpcy5tYXBfbm9kZV8uY29udmVydFRvTm9kZVNwYWNlQVIobyk7XG4gICAgICAgIHZhciBpID0gbi54O1xuICAgICAgICB2YXIgciA9IG4ueTtcbiAgICAgICAgdmFyIGEgPSB7YXJlYTogbC5Ob25lLCByb3c6IC0xLCBjb2w6IC0xfTtcbiAgICAgICAgaWYgKHRoaXMudG91Y2hEaXIgIT0gdS5Ob25lICYmIGUpIHtcbiAgICAgICAgICAgIHZhciBzID0gTWF0aC5mbG9vcihyIC8gdGhpcy5ncmlkU2l6ZSk7XG4gICAgICAgICAgICB2YXIgYyA9IE1hdGguZmxvb3IoKGkgLSB0aGlzLmdyaWRzU3RhcnRYKSAvIHRoaXMuZ3JpZFNpemUpO1xuICAgICAgICAgICAgYS5hcmVhID0gbC5HcmlkO1xuICAgICAgICAgICAgYS5yb3cgPSBzO1xuICAgICAgICAgICAgYS5jb2wgPSBjO1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHAgPSB0aGlzLm1hcF9ub2RlXy5nZXRDb250ZW50U2l6ZSgpO1xuICAgICAgICByZXR1cm4gaSA8IDAgfHwgciA8IDAgfHwgciA+IHAuaGVpZ2h0IHx8IGkgPiBwLndpZHRoXG4gICAgICAgICAgICA/IGFcbiAgICAgICAgICAgIDogKGkgPCB0aGlzLmdyaWRzU3RhcnRYIC0gMTVcbiAgICAgICAgICAgICAgICAgID8gKHMgPSBNYXRoLmZsb29yKHIgLyB0aGlzLmdyaWRTaXplKSkgPj0gMCAmJiBzIDwgdGhpcy5yb3dzXyAmJiAoKGEuYXJlYSA9IGwuSGVhZFJvdyksIChhLnJvdyA9IHMpKVxuICAgICAgICAgICAgICAgICAgOiByID4gdGhpcy5yb3dzXyAqIHRoaXMuZ3JpZFNpemUgKyAxNVxuICAgICAgICAgICAgICAgICAgPyAoYyA9IE1hdGguZmxvb3IoKGkgLSB0aGlzLmdyaWRzU3RhcnRYKSAvIHRoaXMuZ3JpZFNpemUpKSA+PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIGMgPCB0aGlzLmNvbHNfICYmXG4gICAgICAgICAgICAgICAgICAgICgoYS5hcmVhID0gbC5IZWFkQ29sKSwgKGEuY29sID0gYykpXG4gICAgICAgICAgICAgICAgICA6ICgocyA9IE1hdGguZmxvb3IociAvIHRoaXMuZ3JpZFNpemUpKSxcbiAgICAgICAgICAgICAgICAgICAgKGMgPSBNYXRoLmZsb29yKChpIC0gdGhpcy5ncmlkc1N0YXJ0WCkgLyB0aGlzLmdyaWRTaXplKSksXG4gICAgICAgICAgICAgICAgICAgIHMgPj0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcyA8IHRoaXMucm93c18gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPj0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYyA8IHRoaXMuY29sc18gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgoYS5hcmVhID0gbC5HcmlkKSwgKGEucm93ID0gcyksIChhLmNvbCA9IGMpKSksXG4gICAgICAgICAgICAgIGEpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuT25Ub3VjaEJlZ2FuID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKCh0aGlzLnJlc2V0Q0QoKSwgdGhpcy5jYW5Ub3VjaCkpXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICF0aGlzLmNsaWNrX3RvdWNoXyAmJlxuICAgICAgICAgICAgICAgICgodGhpcy5jbGlja190b3VjaF8gPSAhMCksXG4gICAgICAgICAgICAgICAgKHRoaXMuZ3JpZFRvdWNoU3RhcnQgPSBudWxsKSxcbiAgICAgICAgICAgICAgICB2b2lkIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FsbFJpZ2h0IHx8XG4gICAgICAgICAgICAgICAgICAgICgodGhpcy5ncmlkVG91Y2hTdGFydCA9IHRoaXMuVGVzdFRvdWNoKHQpKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkVG91Y2hTdGFydC5hcmVhID09IGwuR3JpZCAmJiB0aGlzLk9wZXJhdGlvblN0ZXBCZWdpbigpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRUb3VjaFN0YXJ0LmFyZWEgPT0gbC5HcmlkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMudG91Y2hEaXIgPSB1Lk5vbmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZmlsbE1vZGUgPSBwLk5vbmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5PbkNsaWNrR3JpZCh0aGlzLmdyaWRUb3VjaFN0YXJ0LnJvdywgdGhpcy5ncmlkVG91Y2hTdGFydC5jb2wpKSlcbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLk9uVG91Y2hNb3ZlZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0aGlzLmNhblRvdWNoICYmICF0aGlzLmlzQWxsUmlnaHQgJiYgdGhpcy5ncmlkVG91Y2hTdGFydCAmJiB0aGlzLmdyaWRUb3VjaFN0YXJ0LmFyZWEgIT0gbC5Ob25lKVxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRUb3VjaFN0YXJ0LmFyZWEgIT0gbC5HcmlkKSBicmVhaztcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuVGVzdFRvdWNoKHQsICEwKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5hcmVhICE9IGwuR3JpZCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAodGhpcy50b3VjaERpciA9PSB1Lkhvcml6b250YWxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKGUucm93ID0gdGhpcy5sYXN0VG91Y2hSb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMudG91Y2hEaXIgPT0gdS5WZXJ0aWNhbCAmJiAoZS5jb2wgPSB0aGlzLmxhc3RUb3VjaENvbCksXG4gICAgICAgICAgICAgICAgICAgIGUucm93ID09IHRoaXMubGFzdFRvdWNoUm93ICYmIGUuY29sID09IHRoaXMubGFzdFRvdWNoQ29sKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaERpciA9PSB1Lk5vbmUgJiZcbiAgICAgICAgICAgICAgICAgICAgKGUucm93ID09IHRoaXMubGFzdFRvdWNoUm93XG4gICAgICAgICAgICAgICAgICAgICAgICA/ICh0aGlzLnRvdWNoRGlyID0gdS5Ib3Jpem9udGFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBlLmNvbCA9PSB0aGlzLmxhc3RUb3VjaENvbCAmJiAodGhpcy50b3VjaERpciA9IHUuVmVydGljYWwpKTtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IGUucm93O1xuICAgICAgICAgICAgICAgIHZhciBuID0gZS5jb2w7XG4gICAgICAgICAgICAgICAgdGhpcy5PbkNsaWNrR3JpZChvLCBuKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKDApO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuT25Ub3VjaEVuZGVkID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdyaWRUb3VjaFN0YXJ0KSBicmVhaztcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWRUb3VjaFN0YXJ0LmFyZWEgIT0gbC5IZWFkUm93ICYmIHRoaXMuZ3JpZFRvdWNoU3RhcnQuYXJlYSAhPSBsLkhlYWRDb2wpIGJyZWFrO1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLlRlc3RUb3VjaCh0KTtcbiAgICAgICAgICAgIGlmIChlLmFyZWEgPT0gbC5IZWFkUm93ICYmIHRoaXMuZ3JpZFRvdWNoU3RhcnQuYXJlYSA9PSBsLkhlYWRSb3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLk9uQ2xpY2tSb3dIZWFkKGUucm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUuYXJlYSA9PSBsLkhlYWRDb2wgJiYgdGhpcy5ncmlkVG91Y2hTdGFydC5hcmVhID09IGwuSGVhZENvbCAmJiB0aGlzLk9uQ2xpY2tDb2xIZWFkKGUuY29sKTtcbiAgICAgICAgfSB3aGlsZSAoMCk7XG4gICAgICAgIHRoaXMuQ2FuY2VsR3JpZFRvdWNoKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5PblRvdWNoQ2FuY2VsbGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLkNhbmNlbEdyaWRUb3VjaCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuR2V0V29ya0dyaWRUYWcgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9ICh0aGlzLnJvd3NfIC0gdCAtIDEpICogdGhpcy5jb2xzXyArIGU7XG4gICAgICAgIHJldHVybiBvIDwgMCB8fCBvID49IHRoaXMud29ya0RhdGEubGVuZ3RoID8gYy5FbXB0eSA6IHRoaXMud29ya0RhdGFbb107XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5TZXRXb3JrR3JpZFRhZyA9IGZ1bmN0aW9uICh0LCBlLCBuLCBpKSB7XG4gICAgICAgIHZhciByO1xuICAgICAgICB2YXIgYSA9IHRoaXMucm93c187XG4gICAgICAgIHZhciBzID0gdGhpcy5jb2xzXztcbiAgICAgICAgdmFyIGwgPSAoYSAtIGUgLSAxKSAqIHMgKyBuO1xuICAgICAgICBpZiAoKHIgPSB0aGlzLmdyaWRzW2xdKSAmJiAhci5pc0VtcHR5KSByZXR1cm4gITA7XG4gICAgICAgIHZhciB1ID0gdGhpcy5zb3VuZElkeDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCh1ID0gdGhpcy5zb3VuZElkeCA+IDE1ID8gMTUgOiB0aGlzLnNvdW5kSWR4KSxcbiAgICAgICAgICAgICEobCA8IDAgfHwgbCA+PSB0aGlzLndvcmtEYXRhLmxlbmd0aCkgJiZcbiAgICAgICAgICAgICAgICB0aGlzLndvcmtEYXRhW2xdICE9IHQgJiZcbiAgICAgICAgICAgICAgICAodGhpcy5PcGVyYXRpb25TdGVwQnlTZXRXb3JrVGFnKHRoaXMud29ya0RhdGFbbF0sIHQsIGUgKiBzICsgbiksIHQgPT0gYy5PIHx8IHQgPT0gYy5YKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMudHJlZURhdGE7XG4gICAgICAgICAgICB2YXIgZCA9IHRoaXMud29ybURhdGE7XG4gICAgICAgICAgICB2YXIgaCA9IHRoaXMuaWNlRGF0YTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1ckl0ZW1CdG4gJiYgIWkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgMiA9PSB0aGlzLmN1ckl0ZW1JZHggfHxcbiAgICAgICAgICAgICAgICAgICAgISghcCB8fCAhcFtsXSkgfHxcbiAgICAgICAgICAgICAgICAgICAgISghaCB8fCAhaFtsXSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMudXBkYXRlSXRlbU51bSh0aGlzLmN1ckl0ZW1JZHgsICEwKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VJdGVtKHIsIGUsIG4pLFxuICAgICAgICAgICAgICAgICAgICBfdmIuZGVmYXVsdC5wKF92Yi5WRW51bTMuU0hPUlQpLFxuICAgICAgICAgICAgICAgICAgICAhMClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHIuaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgIHZhciBmID0gdGhpcy5ndWlkZUNoZWNrR3JpZDtcbiAgICAgICAgICAgICAgICBpZiAoZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGUgKyBcIl9cIiArIG47XG4gICAgICAgICAgICAgICAgICAgIGlmICgtMSA9PSAoYiA9IGYuaW5kZXhPZih5KSkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgZi5zcGxpY2UoYiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIDAgPT0gZi5sZW5ndGggJiYgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy51cGRhdGVHdWlkZVN0ZXAsIDAuNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoaSAmJiAodCA9IHIuaXNSaWdodCksIHApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwW2xdKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJlZUNoZWNrKGUsIG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKG0gPSBoW2xdKSAmJiBtLmRyb3ApIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pY2VDaGVjayhlLCBuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChyLnNlbGVjdCh0KSwgX3ZiLmRlZmF1bHQucChfdmIuVkVudW0zLlNIT1JUKSwgci5pc1JpZ2h0ICYmICgodGhpcy53b3JrRGF0YVtsXSA9IGMuTyksIHQgPT0gYy5PKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0gZFtsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gZC5jb3VudHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgXyA9IGQuc3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0gJiYgdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gKHZbKGIgPSBtLmkpXSA9IHZbYl0gLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVCA9IF9bYl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChUICYmIFQuYWRkQ291bnQoKSwgMCA9PSB3KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgRCA9IHRoaXMudGlsZXNQYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ3b3JtUGFyZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgUCA9IG8uY2hhbGxhZ2VEYXRhLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEQgJiYgRC5jaGlsZHJlbltiXSAmJiBQICYmIFBbYl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEQuY2hpbGRyZW5bYl0uYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IHRoaXMuZ3JpZHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgUiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQW2JdLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrW3RdLnBsYXlXb3JtQW5pKDAuMDYgKiBSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfc291bmQuZGVmYXVsdC5pbnMucGxheShcInRpbGVfbm90ZV9cIiArIHUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdW5kSWR4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGlwVG9nICYmXG4gICAgICAgICAgICAgICAgICAgICFpICYmXG4gICAgICAgICAgICAgICAgICAgICgodGhpcy50aXBMYWJlbC5zdHJpbmcgPSB1ICsgXCJcIiksXG4gICAgICAgICAgICAgICAgICAgIDEgPT0gdVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnRpcE5vZGUuc2V0UG9zaXRpb24oci5ub2RlLnBvc2l0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAyID09IHVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKCh0aGlzLnRpcE5vZGUuYWN0aXZlID0gITApLCB0aGlzLnRpcEFuaS5wbGF5KGcudGlwSW4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoKHRoaXMudGlwTGFiZWwubm9kZS54ID0gdSA+IDkgPyAtMTQgOiAtMTMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnRpcE5vZGUpLnRvKDAuMSwge3NjYWxlOiAxLjF9KS50bygwLjEsIHtzY2FsZTogMX0pLnN0YXJ0KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudHJlZUNoZWNrID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLnRyZWVEYXRhO1xuICAgICAgICBpZiAodm9pZCAwICE9PSBvICYmIHZvaWQgMCAhPT0gdCAmJiB2b2lkIDAgIT09IGUpIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5yb3dzXztcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5jb2xzXztcbiAgICAgICAgICAgIHZhciByID0gdGhpcy5ncmlkSGVhZFJvd1ZlYztcbiAgICAgICAgICAgIHZhciBhID0gdGhpcy5ncmlkSGVhZENvbFZlYztcbiAgICAgICAgICAgIHZhciBzID0gby50bXAgfHwgKG8udG1wID0gW10pO1xuICAgICAgICAgICAgdmFyIGMgPSBvLm1pblJvdztcbiAgICAgICAgICAgIHZhciBsID0gby5tYXhSb3c7XG4gICAgICAgICAgICB2YXIgdSA9IG8ubWluQ29sO1xuICAgICAgICAgICAgdmFyIHAgPSBvLm1heENvbDtcbiAgICAgICAgICAgIHMucHVzaChcbiAgICAgICAgICAgICAgICB0ID4gMCAmJiB7cjogdCAtIDEsIGM6IGV9LFxuICAgICAgICAgICAgICAgIHQgPCBuIC0gMSAmJiB7cjogdCArIDEsIGM6IGV9LFxuICAgICAgICAgICAgICAgIGUgPiAwICYmIHtyOiB0LCBjOiBlIC0gMX0sXG4gICAgICAgICAgICAgICAgZSA8IGkgLSAxICYmIHtyOiB0LCBjOiBlICsgMX1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHQucjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB0LmM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gKG4gLSBlIC0gMSkgKiBpICsgcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBvW2RdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaC5wbGF5KCksIGRlbGV0ZSBvW2RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBhW3NdLnRyZWVNYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBnID0gMSwgeSA9IGMgKyAxOyB5IDwgbCAmJiAxID09IGc7IHkrKykgb1sobiAtIHkgLSAxKSAqIGkgKyBzXSAmJiAoZyA9IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlbGV0ZSBhW3NdLnRyZWVNYXNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnR3ZWVuKGYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7aGVpZ2h0OiAwfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IHJbZV0udHJlZU1hc2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHYgPSB1ICsgMTsgdiA8IHAgJiYgMSA9PSBnOyB2KyspIG9bKG4gLSBlIC0gMSkgKiBpICsgdl0gJiYgKGcgPSAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZWxldGUgcltlXS50cmVlTWFzayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50d2VlbihtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwge3dpZHRoOiAwfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaWNlQ2hlY2sgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IHRoaXM7XG4gICAgICAgIHZhciBuID0gdGhpcy5pY2VEYXRhO1xuICAgICAgICBpZiAodm9pZCAwICE9PSBuICYmIHZvaWQgMCAhPT0gdCAmJiB2b2lkIDAgIT09IGUpIHtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5yb3dzXztcbiAgICAgICAgICAgIHZhciByID0gdGhpcy5jb2xzXztcbiAgICAgICAgICAgIHZhciBhID0gdGhpcy5ncmlkSGVhZFJvd1ZlYztcbiAgICAgICAgICAgIHZhciBzID0gdGhpcy5ncmlkSGVhZENvbFZlYztcbiAgICAgICAgICAgIHZhciBjID0gbi5ySGludHM7XG4gICAgICAgICAgICB2YXIgbCA9IG4uY0hpbnRzO1xuICAgICAgICAgICAgdmFyIHUgPSBuLnRtcCB8fCAobi50bXAgPSBbXSk7XG4gICAgICAgICAgICB1LnB1c2goXG4gICAgICAgICAgICAgICAgdCA+IDAgJiYge3I6IHQgLSAxLCBjOiBlfSxcbiAgICAgICAgICAgICAgICB0IDwgaSAtIDEgJiYge3I6IHQgKyAxLCBjOiBlfSxcbiAgICAgICAgICAgICAgICBlID4gMCAmJiB7cjogdCwgYzogZSAtIDF9LFxuICAgICAgICAgICAgICAgIGUgPCByIC0gMSAmJiB7cjogdCwgYzogZSArIDF9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0LnI7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1ID0gdC5jO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IChpIC0gZSAtIDEpICogciArIHU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gbltwXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgJiYgZC5kcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSBkLmRyb3AoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuW3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gKGNbZV0gPSBjW2VdIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSAobFt1XSA9IGxbdV0gLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IHNbdV0uaWNlTWFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgPT0gZiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGVsZXRlIHNbdV0uaWNlTWFzayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50d2VlbihnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwge2hlaWdodDogMH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gYVtlXS5pY2VNYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA9PSBoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZWxldGUgYVtlXS5pY2VNYXNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnR3ZWVuKHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7d2lkdGg6IDB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0gbmV3IGNjLk5vZGUoXCJpY2VQaXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IGQubm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChtLnNjYWxlID0gdi5zY2FsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5zZXRQb3NpdGlvbih2LngsIHYueSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5wYXJlbnQuYWRkQ2hpbGQobSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3Jlcy5kZWZhdWx0Lmlucy5sU0YoXCJnYW1lL2ljZS9waXRcIiwgbS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgXyA9IG8uZ3JpZFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IGNjLnYyKHYueCwgdi55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBTID0gY2MudjIoYi54ICsgXywgYi55ICsgMyAqIF8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFQgPSBjYy52MihiLnggKyAxLjUgKiBfLCBiLnkgLSAzICogXyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihtKS5iZXppZXJUbygxLCBiLCBTLCBUKS5zdGFydCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50d2VlbihtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnkoMjAgLyAzMCwge3NjYWxlOiAtMC4zfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDQgLyAzMCwge29wYWNpdHk6IDB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHUubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudGlwQW5pRG9uZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGUubmFtZSA9PSBnLnRpcE91dCAmJiAodGhpcy50aXBOb2RlLmFjdGl2ZSA9ICExKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLlNldFdvcmtHcmlkVGFnV2l0aEluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgIHZhciBjO1xuICAgICAgICAgICAgdmFyIGw7XG4gICAgICAgICAgICB2YXIgdTtcbiAgICAgICAgICAgIHZhciBwO1xuICAgICAgICAgICAgdmFyIGQ7XG4gICAgICAgICAgICB2YXIgaDtcbiAgICAgICAgICAgIHZhciBmO1xuICAgICAgICAgICAgdmFyIGc7XG4gICAgICAgICAgICB2YXIgeTtcbiAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgdmFyIHY7XG4gICAgICAgICAgICB2YXIgXztcbiAgICAgICAgICAgIHZhciBiO1xuICAgICAgICAgICAgdmFyIFM7XG4gICAgICAgICAgICB2YXIgVDtcbiAgICAgICAgICAgIHZhciBJO1xuICAgICAgICAgICAgdmFyIEQ7XG4gICAgICAgICAgICB2YXIgUDtcbiAgICAgICAgICAgIHZhciBSO1xuICAgICAgICAgICAgdmFyIE47XG4gICAgICAgICAgICB2YXIgQztcbiAgICAgICAgICAgIHZhciBPO1xuICAgICAgICAgICAgdmFyIE07XG4gICAgICAgICAgICB2YXIgTDtcbiAgICAgICAgICAgIHZhciBBO1xuICAgICAgICAgICAgdmFyIEU7XG4gICAgICAgICAgICB2YXIgeDtcbiAgICAgICAgICAgIHZhciBCO1xuICAgICAgICAgICAgdmFyIEY7XG4gICAgICAgICAgICB2YXIgVjtcbiAgICAgICAgICAgIHZhciBVO1xuICAgICAgICAgICAgdmFyIHo7XG4gICAgICAgICAgICB2YXIgSDtcbiAgICAgICAgICAgIHZhciBHO1xuICAgICAgICAgICAgdmFyIEo7XG4gICAgICAgICAgICB2YXIgVztcbiAgICAgICAgICAgIHZhciBxO1xuICAgICAgICAgICAgdmFyIEs7XG4gICAgICAgICAgICB2YXIgWTtcbiAgICAgICAgICAgIHZhciBYO1xuICAgICAgICAgICAgdmFyIFo7XG4gICAgICAgICAgICB2YXIgUSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZSA9ICh0ID0gdGhpcykucm93c18pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuID0gdC5jb2xzXyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgPSB0LmdyaWRQcmVmYWIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyID0gdC5ncmlkc1N0YXJ0WCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGEgPSB0LmdyaWRTaXplKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYyA9IHQuZ3JpZHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsID0gdC50aWxlc1BhcmVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHUgPSB0LmJhc2VEYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocCA9IHQudHJlZURhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkID0gdC53b3JtRGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGggPSB0LmljZURhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEoYiA9IG8uY2hhbGxhZ2VEYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChiLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIF9wSW5mby5jaGFsbGVuZ2VUeXBlLnRyZWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBfcEluZm8uY2hhbGxlbmdlVHlwZS53b3JtOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgX3BJbmZvLmNoYWxsZW5nZVR5cGUuaWNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBfcmVzLmRlZmF1bHQuaW5zLmxQcmUoXCJwcmVmYWIvZ2FtZS9oZWRnZVwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoZiA9IHMuc2VudCgpKSwgKGcgPSBuZXcgY2MuTm9kZShcInRyZWVNYXNrc1wiKSksIGwuYWRkQ2hpbGQoZyksIFszLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBfcmVzLmRlZmF1bHQuaW5zLmxQcmUoXCJwcmVmYWIvZ2FtZS93b3JtXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh5ID0gcy5zZW50KCksIG0gPSBuZXcgY2MuTm9kZShcIndvcm1QYXJlbnRcIiksIE0gPSBiLmRhdGEuZGF0YS5sZW5ndGgsIEwgPSAwOyBMIDwgTTsgTCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChZID0gbmV3IGNjLk5vZGUoXCJ3b3Jtc1wiKSksIG0uYWRkQ2hpbGQoWSksIChZLmFjdGl2ZSA9ICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsLmFkZENoaWxkKG0pLCBbMywgN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgX3Jlcy5kZWZhdWx0Lmlucy5sUHJlKFwicHJlZmFiL2dhbWUvaWNlXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh2ID0gcy5zZW50KCkpLCAoXyA9IG5ldyBjYy5Ob2RlKFwiaWNlUGFyZW50XCIpKSwgbC5hZGRDaGlsZChfKSwgWzMsIDddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChTID0gYSAvIDQ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoVCA9IE1hdGguZmxvb3IpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChJID0gdGhpcy5saW5lVyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSA9PSAoUiA9IF9wSW5mby5kZWZhdWx0Lmlucy5nZXRVc2luZ1NraW4oKS5iZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbMywgMTBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKChOID0gXCJnYW1lL3NraW4vXCIgKyBSICsgXCIvXCIpLCBbNCwgX3Jlcy5kZWZhdWx0Lmlucy5sU0YoTiArIFwiZ3JpZFwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKEQgPSBzLnNlbnQoKSksIFs0LCBfcmVzLmRlZmF1bHQuaW5zLmxTRihOICsgXCJncmlkVGlwXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgKFAgPSBzLnNlbnQoKSksIChzLmxhYmVsID0gMTApO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChDID0gMCwgTyA9IHRoaXMud29ya0RhdGEsIE0gPSBPLmxlbmd0aDsgQyA8IE07IEMrKylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoTCA9IGUgLSBNYXRoLmZsb29yKEMgLyBuKSAtIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoRSA9IFQoKEEgPSBDICUgbikgLyA1KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh4ID0gVChMIC8gNSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQiA9IHIgKyBBICogYSArIDAuNSAqIGEgKyBFICogSSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChGID0gTCAqIGEgKyAwLjUgKiBhICsgeCAqIEkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoViA9IGNjLmluc3RhbnRpYXRlKGkpKS5zZXRQb3NpdGlvbihCLCBGKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVi5zZXRTY2FsZShTLCBTLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFUgPSBjW0NdID0gVi5nZXRDb21wb25lbnQoX2dyaWQuZGVmYXVsdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeiA9IHVbQ10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVLmluaXQoeiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFUuaW5pdFR5cGUoRCwgUCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwuYWRkQ2hpbGQoViksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEwgPiBwLm1pblJvdyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTCA8IHAubWF4Um93ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBID4gcC5taW5Db2wgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgPCBwLm1heENvbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChIID0gY2MuaW5zdGFudGlhdGUoZikpLnNldFBvc2l0aW9uKEIsIEYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSC5zZXRTY2FsZShTLCBTLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcuYWRkQ2hpbGQoSCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocFtDXSA9IEguZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChHID0gZFtDXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoSiA9IEcuaSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoVyA9IEcudGV4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChxID0gRy5kaXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChLID0gY2MuaW5zdGFudGlhdGUoeSkpLmFuZ2xlID0gcSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLLnNldFBvc2l0aW9uKEIsIEYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSy5zZXRTY2FsZShTLCBTLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEsuZ2V0Q29tcG9uZW50KFwid29ybVwiKS5pbml0KFcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFkgPSBtLmNoaWxkcmVuW0pdKS5hZGRDaGlsZChLKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhbQ10gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoWCA9IGNjLmluc3RhbnRpYXRlKHYpKS5zZXRQb3NpdGlvbihCLCBGKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFguc2V0U2NhbGUoUywgUywgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKFogPSBYLmdldENvbXBvbmVudChcImljZVwiKSkuciA9IEwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFouYyA9IEEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGhbQ10gPSBaKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYWRkQ2hpbGQoWCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnICYmIGcuc2V0U2libGluZ0luZGV4KGwuY2hpbGRyZW5Db3VudCAtIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gJiYgbS5zZXRTaWJsaW5nSW5kZXgoMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXyAmJiBfLnNldFNpYmxpbmdJbmRleChsLmNoaWxkcmVuQ291bnQgLSAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUS5wbGF5SGlnaHRMaWdodCgxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWzJdXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLkdldEJhc2VHcmlkVGFnID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSAodGhpcy5yb3dzXyAtIHQgLSAxKSAqIHRoaXMuY29sc18gKyBlO1xuICAgICAgICByZXR1cm4gbyA8IDAgfHwgbyA+PSB0aGlzLmdyaWRfY291bnQgPyBjLkVtcHR5IDogdGhpcy5iYXNlRGF0YVtvXTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLklzUm93TG9naWNSaWdodCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcy5HZXRCYXNlUm93SGVhZE51bXModCk7XG4gICAgICAgIHZhciBvID0gdGhpcy5HZXRXb3JrUm93SGVhZE51bXModCk7XG4gICAgICAgIGlmIChlLmxlbmd0aCAhPSBvLmxlbmd0aCkgcmV0dXJuICExO1xuICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIGlmIChlW25dICE9IG9bbl0pIHJldHVybiAhMTtcbiAgICAgICAgcmV0dXJuICEwO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuSXNDb2xMb2dpY1JpZ2h0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLkdldEJhc2VDb2xIZWFkTnVtcyh0KTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLkdldFdvcmtDb2xIZWFkTnVtcyh0KTtcbiAgICAgICAgaWYgKGUubGVuZ3RoICE9IG8ubGVuZ3RoKSByZXR1cm4gITE7XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykgaWYgKGVbbl0gIT0gb1tuXSkgcmV0dXJuICExO1xuICAgICAgICByZXR1cm4gITA7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5Jc1Jvd0ZpbGxSaWdodCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5jb2xzXzsgZSsrKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMuR2V0QmFzZUdyaWRUYWcodCwgZSk7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuR2V0V29ya0dyaWRUYWcodCwgZSk7XG4gICAgICAgICAgICBpZiAobyA9PSBjLk8gJiYgbiAhPSBjLk8pIHJldHVybiAhMTtcbiAgICAgICAgICAgIGlmIChvID09IGMuWCAmJiBuID09IGMuTykgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhMDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLklzQ29sRmlsbFJpZ2h0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLnJvd3NfOyBlKyspIHtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5HZXRCYXNlR3JpZFRhZyhlLCB0KTtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5HZXRXb3JrR3JpZFRhZyhlLCB0KTtcbiAgICAgICAgICAgIGlmIChvID09IGMuTyAmJiBuICE9IGMuTykgcmV0dXJuICExO1xuICAgICAgICAgICAgaWYgKG8gPT0gYy5YICYmIG4gPT0gYy5PKSByZXR1cm4gITE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEwO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuUmVmcmVzaFJvd0hlYWRTdGF0ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gby50eXBlICE9IF9wSW5mby5nYW1lVHlwZS5yYWNlO1xuICAgICAgICB2YXIgbiA9IHRoaXMuZ3JpZEhlYWRSb3dWZWNbdF07XG4gICAgICAgIHZhciBpID0gbi5sYWJlbHM7XG4gICAgICAgIGlmICh0aGlzLklzUm93TG9naWNSaWdodCh0KSkge1xuICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBpLmxlbmd0aDsgcisrKSBlICYmIChpW3JdLmNvbG9yID0gcSksIHRoaXMucGxheUhpZ2h0TGlnaHQodCk7XG4gICAgICAgICAgICB0aGlzLnJhY2VSZWZyZXNoKHQpO1xuICAgICAgICAgICAgbi5hbGxSaWdodCA9ICEwO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REYXRhLnJvdyA9PSB0ICYmIHRoaXMuc2hvd09ySGlkZVNlbGVjdE1hc2soKTtcbiAgICAgICAgICAgICF0aGlzLmJ5R3VpZGUgJiYgdGhpcy5wbGF5R2lybEFuaShoLmhhcHB5KTtcbiAgICAgICAgfSBlbHNlIGlmIChlKVxuICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMuR2V0QmFzZVJvd0hlYWROdW1zKHQpLFxuICAgICAgICAgICAgICAgICAgICBzID0gdGhpcy5HZXRCYXNlUm93QmVnaW5OdW1zKHQpLFxuICAgICAgICAgICAgICAgICAgICBsID0gdGhpcy53b3JrRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIHAgPSBhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB1IDwgcDtcbiAgICAgICAgICAgICAgICB1KytcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBpZiAoIXEuZXF1YWxzKGlbdV0uY29sb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGQgPSAhMCwgZiA9IHNbdV0sIGcgPSBzW3VdICsgYVt1XTsgZiA8IGc7IGYrKylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsW2ZdICE9IGMuTykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZCAmJiAoaVt1XS5jb2xvciA9IHEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLlJlZnJlc2hDb2xIZWFkU3RhdGUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IG8udHlwZSAhPSBfcEluZm8uZ2FtZVR5cGUucmFjZTtcbiAgICAgICAgdmFyIG4gPSB0aGlzLmdyaWRIZWFkQ29sVmVjW3RdO1xuICAgICAgICB2YXIgaSA9IG4ubGFiZWxzO1xuICAgICAgICBpZiAodGhpcy5Jc0NvbExvZ2ljUmlnaHQodCkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgaS5sZW5ndGg7IHIrKykgZSAmJiAoaVtyXS5jb2xvciA9IHEpLCB0aGlzLnBsYXlIaWdodExpZ2h0KHZvaWQgMCwgdCk7XG4gICAgICAgICAgICB0aGlzLnJhY2VSZWZyZXNoKHZvaWQgMCwgdCk7XG4gICAgICAgICAgICBuLmFsbFJpZ2h0ID0gITA7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdERhdGEuY29sID09IHQgJiYgdGhpcy5zaG93T3JIaWRlU2VsZWN0TWFzaygpO1xuICAgICAgICB9IGVsc2UgaWYgKGUpXG4gICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgIHZhciBhID0gdGhpcy5HZXRCYXNlQ29sSGVhZE51bXModCksXG4gICAgICAgICAgICAgICAgICAgIHMgPSB0aGlzLkdldEJhc2VDb2xCZWdpbk51bXModCksXG4gICAgICAgICAgICAgICAgICAgIGwgPSB0aGlzLndvcmtEYXRhLFxuICAgICAgICAgICAgICAgICAgICB1ID0gdGhpcy5yb3dzXyxcbiAgICAgICAgICAgICAgICAgICAgcCA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGQgPSBhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBwIDwgZDtcbiAgICAgICAgICAgICAgICBwKytcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBpZiAoIXEuZXF1YWxzKGlbcF0uY29sb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGggPSAhMCwgZiA9IHNbcF0sIGcgPSBzW3BdICsgYVtwXSAqIHU7IGYgPCBnOyBmICs9IHUpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobFtmXSAhPSBjLk8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGggJiYgKGlbcF0uY29sb3IgPSBxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wbGF5SGlnaHRMaWdodCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvO1xuICAgICAgICB2YXIgbiA9IHRoaXMuZ3JpZHM7XG4gICAgICAgIHZhciBpID0gdGhpcy5yb3dzXztcbiAgICAgICAgdmFyIHIgPSB0aGlzLmNvbHNfO1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gdm9pZCAwLCBzID0gdm9pZCAwLCBsID0gMDsgbCA8IHI7IGwrKylcbiAgICAgICAgICAgICAgICAobyA9IG5bbCArIChpIC0gdCAtIDEpICogaV0pLmlzRW1wdHkgJiYgKG8uc2VsZWN0KGMuWCwgITApLCB0aGlzLnRyZWVDaGVjayh0LCBsKSwgdGhpcy5pY2VDaGVjayh0LCBsKSksXG4gICAgICAgICAgICAgICAgICAgIG8ucGxheUhMKDAuMDIgKiBsKSxcbiAgICAgICAgICAgICAgICAgICAgMCA9PSBsID8gKGEgPSBvLm5vZGUucG9zaXRpb24pIDogbCA9PSByIC0gMSAmJiAocyA9IG8ubm9kZS5wb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgIHZhciB1ID0gY2MuaW5zdGFudGlhdGUodGhpcy5mYWRlUHJlZmFiKTtcbiAgICAgICAgICAgICAgICB1LnNldFBvc2l0aW9uKGEueCAtIHRoaXMuZ3JpZFNpemUgLyAyLCBhLnkpO1xuICAgICAgICAgICAgICAgIHUuYW5nbGUgPSA5MDtcbiAgICAgICAgICAgICAgICB1LnNjYWxlID0gMSAvIHRoaXMuZ3JpZEJnU3Aubm9kZS5zY2FsZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGljZXMuYWRkQ2hpbGQodSk7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDIgKiAociAtIDEpLCB7cG9zaXRpb246IHN9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4yKVxuICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICBmb3IgKGEgPSB2b2lkIDAsIHMgPSB2b2lkIDAsIGwgPSAwOyBsIDwgaTsgbCsrKVxuICAgICAgICAgICAgICAgIChvID0gbltlICsgbCAqIGldKS5pc0VtcHR5ICYmXG4gICAgICAgICAgICAgICAgICAgIChvLnNlbGVjdChjLlgsICEwKSwgdGhpcy50cmVlQ2hlY2soaSAtIDEgLSBsLCBlKSwgdGhpcy5pY2VDaGVjayhpIC0gMSAtIGwsIGUpKSxcbiAgICAgICAgICAgICAgICAgICAgby5wbGF5SEwoMC4wMiAqIGwpLFxuICAgICAgICAgICAgICAgICAgICAwID09IGwgPyAoYSA9IG8ubm9kZS5wb3NpdGlvbikgOiBsID09IHIgLSAxICYmIChzID0gby5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZhZGVQcmVmYWIpO1xuICAgICAgICAgICAgICAgIHAuc2V0UG9zaXRpb24oYS54IC0gdGhpcy5ncmlkU2l6ZSAvIDIsIGEueSk7XG4gICAgICAgICAgICAgICAgcC5zY2FsZSA9IDEgLyB0aGlzLmdyaWRCZ1NwLm5vZGUuc2NhbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXRpY2VzLmFkZENoaWxkKHApO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHApXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjAyICogKHIgLSAxKSwge3Bvc2l0aW9uOiBzfSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuMilcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGQgPSB2b2lkIDA7XG4gICAgICAgICAgICBmb3IgKGwgPSAwOyBsIDwgaTsgbCsrKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGggPSAwOyBoIDwgcjsgaCsrKSAoZCA9IDAuMDIgKiAoaSAtIGwgLSAxICsgaCkpLCAobyA9IG5bbCArIGggKiBpXSkucGxheUhMKGQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yYWNlUmVmcmVzaCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmIChvLnR5cGUgPT0gX3BJbmZvLmdhbWVUeXBlLnJhY2UpIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5yYWNlUmVmcmVzaFBvcDtcbiAgICAgICAgICAgIG4ucHVzaCh7cjogdCwgYzogZX0pO1xuICAgICAgICAgICAgMSA9PSBuLmxlbmd0aCAmJiAoKHRoaXMuY2FuVG91Y2ggPSAhMSksIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2hlY2tSYWNlRnJlc2gpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuX3JhY2VSZWZyZXNoID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWZyZXNoaW5nKSB0aGlzLnJhY2VSZWZyZXNoUG9wLnB1c2goe3I6IHQsIGM6IGV9KTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVmcmVzaGluZyA9ICEwO1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLnJhY2VEZW5zaXR5O1xuICAgICAgICAgICAgKHRoaXMucmFjZVJlZmVzaFRpbWUgPSB0aGlzLnJhY2VSZWZlc2hUaW1lICsgMSkgJSAyID09IDAgJiZcbiAgICAgICAgICAgICAgICAoKG4gPSB0aGlzLnJhY2VEZW5zaXR5IC0gMC4wNSkgPCB0aGlzLnJhY2VNaW5EZW5zdGl5ICYmIChuID0gdGhpcy5yYWNlTWluRGVuc3RpeSksXG4gICAgICAgICAgICAgICAgKHRoaXMucmFjZURlbnNpdHkgPSBuKSk7XG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMuYmFzZURhdGE7XG4gICAgICAgICAgICB2YXIgciA9IHRoaXMud29ya0RhdGE7XG4gICAgICAgICAgICB2YXIgYSA9IHRoaXMuZ3JpZHM7XG4gICAgICAgICAgICB2YXIgcyA9IHRoaXMuZ3JpZFByZWZhYjtcbiAgICAgICAgICAgIHZhciBsID0gdGhpcy50aWxlc1BhcmVudDtcbiAgICAgICAgICAgIHZhciB1ID0gY2MuaW5zdGFudGlhdGU7XG4gICAgICAgICAgICB2YXIgcCA9IG51bGwgIT0gZTtcbiAgICAgICAgICAgIHZhciBkID0gbnVsbCAhPSB0O1xuICAgICAgICAgICAgZCAmJiAodCA9IDkgLSB0KTtcbiAgICAgICAgICAgIG8udHlwZTtcbiAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgdmFyIGgsXG4gICAgICAgICAgICAgICAgICAgIGYgPSBwICYmIGUgPCA1LFxuICAgICAgICAgICAgICAgICAgICBnID0gZiA/IC0xIDogMSxcbiAgICAgICAgICAgICAgICAgICAgeSA9IGQgJiYgdCA8IDUsXG4gICAgICAgICAgICAgICAgICAgIG0gPSB5ID8gLTEwIDogMTAsXG4gICAgICAgICAgICAgICAgICAgIHYgPSAwLFxuICAgICAgICAgICAgICAgICAgICBfID0gMSxcbiAgICAgICAgICAgICAgICAgICAgYiA9IDAsXG4gICAgICAgICAgICAgICAgICAgIHcgPSAxLFxuICAgICAgICAgICAgICAgICAgICBTID0gMCxcbiAgICAgICAgICAgICAgICAgICAgVCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBTIDwgMTA7XG4gICAgICAgICAgICAgICAgUysrXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBUID0geSA/IFMgOiA5IC0gUztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBJID0gMCwgRCA9IHZvaWQgMDsgSSA8IDEwOyBJKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBhWyh4ID0gKEQgPSBmID8gSSA6IDkgLSBJKSArIDEwICogVCldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgayA9IGlbeF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBSID0gclt4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwICYmICgwID09IGsgJiYgMSA9PSB3ICYmIGIrKywgKHcgPSBrKSksIChwICYmIEQgPT0gZSkgfHwgKGQgJiYgVCA9PSB0KSkpIFAucGxheUZhbGxEb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgoZiAmJiBEID4gZSkgfHwgKCFmICYmIEQgPCBlKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChQLnBsYXlXYWxrKGFbeCArIGddLm5vZGUucG9zaXRpb24pLCAoYVt4ICsgZ10gPSBQKSwgKGlbeCArIGddID0gayksIChyW3ggKyBnXSA9IFIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCh5ICYmIFQgPiB0KSB8fCAoIXkgJiYgVCA8IHQpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFAucGxheVdhbGsoYVt4ICsgbV0ubm9kZS5wb3NpdGlvbiksIChhW3ggKyBtXSA9IFApLCAoaVt4ICsgbV0gPSBrKSwgKHJbeCArIG1dID0gUikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHAgJiYgOSA9PSBJKSB8fCAoZCAmJiA5ID09IFMpKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAgPT0gKGggPSBNYXRoLnJhbmRvbSgpIDwgbiA/IDEgOiAwKSAmJiAxID09IF8gJiYgdisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgKHYgPiAyIHx8IGIgPiAyKSAmJiAoKGggPSAxKSwgdi0tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8gPSBoO1xuICAgICAgICAgICAgICAgICAgICAgICAgYiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBOID0gUC5ub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEMgPSB1KHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQy5zZXRQb3NpdGlvbihOLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEMuc2V0UGFyZW50KGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQy5zZXRTY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBPID0gQy5nZXRDb21wb25lbnQoXCJncmlkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTy5pbml0KGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTy5pbml0VHlwZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTy5wbGF5U2hvdyhOLnNjYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFbeF0gPSBPO1xuICAgICAgICAgICAgICAgICAgICAgICAgaVt4XSA9IGg7XG4gICAgICAgICAgICAgICAgICAgICAgICByW3hdID0gYy5FbXB0eTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICAgICAgdCA9IHkgPyA5IDogMDtcbiAgICAgICAgICAgICAgICB2YXIgTSA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBMID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgQSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBmb3IgKEkgPSAwOyBJIDwgMTA7IEkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgRSA9IGFbSSArIDEwICogdF0uaXNSaWdodDtcbiAgICAgICAgICAgICAgICAgICAgTVtNLmxlbmd0aCAtIDFdICE9IEUgJiYgKEUgJiYgTCsrLCBNLnB1c2goRSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoTCA+IDQpXG4gICAgICAgICAgICAgICAgICAgIGZvciAoXyA9IDEsIEkgPSAwOyBJIDwgMTA7IEkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgQiA9IGFbKHggPSBJICsgMTAgKiB0KV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMSA9PSBfICYmIDAgPT0gQi5pc1JpZ2h0KSAoQi5pc1JpZ2h0ID0gMSksIChpW3hdID0gMSksIChBID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoQSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBfID0gQi5pc1JpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkZEhlYWRzKCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmNoZWNrUmFjZUZyZXNoLmJpbmQodGhpcyksIDAuNSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrUmFjZUZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMucmFjZVJlZnJlc2hQb3A7XG4gICAgICAgIGlmICgoKHRoaXMuaXNSZWZyZXNoaW5nID0gITEpLCB0Lmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHZhciBlID0gdC5wb3AoKTtcbiAgICAgICAgICAgIHZhciBvID0gZS5yO1xuICAgICAgICAgICAgdmFyIG4gPSBlLmM7XG4gICAgICAgICAgICB0aGlzLl9yYWNlUmVmcmVzaChvLCBuKTtcbiAgICAgICAgfSBlbHNlIHRoaXMuY2FuVG91Y2ggPSAhMDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLk9uQ2xpY2tHcmlkID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgaWYgKCEodCA8IDAgfHwgZSA8IDAgfHwgdCA+PSB0aGlzLnJvd3NfIHx8IGUgPj0gdGhpcy5jb2xzXykpIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5HZXRXb3JrR3JpZFRhZyh0LCBlKTtcbiAgICAgICAgICAgIHZhciBpID0gLTE7XG4gICAgICAgICAgICBuID09IGMuRW1wdHlcbiAgICAgICAgICAgICAgICA/IChpID0gdGhpcy5wZW4pXG4gICAgICAgICAgICAgICAgOiBuID09IGMuTyAmJiB0aGlzLnBlbiA9PSBjLk9cbiAgICAgICAgICAgICAgICA/IChpID0gYy5FbXB0eSlcbiAgICAgICAgICAgICAgICA6IG4gPT0gYy5YICYmIHRoaXMucGVuID09IGMuWCAmJiAoaSA9IGMuRW1wdHkpO1xuICAgICAgICAgICAgKHRoaXMuZmlsbE1vZGUgPT0gcC5TZXQgJiYgbiAhPSBjLkVtcHR5KSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLmZpbGxNb2RlID09IHAuQ2xlYW4gJiYgbiA9PSBjLkVtcHR5KSB8fFxuICAgICAgICAgICAgICAgICgtMSAhPSBpICYmXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmZpbGxNb2RlID09IHAuTm9uZSAmJiAodGhpcy5maWxsTW9kZSA9IG4gPT0gYy5FbXB0eSA/IHAuU2V0IDogcC5DbGVhbiksXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLlNldFdvcmtHcmlkVGFnKGksIHQsIGUsIG8pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5SZWZyZXNoUm93SGVhZFN0YXRlKHQpLCB0aGlzLlJlZnJlc2hDb2xIZWFkU3RhdGUoZSksIHRoaXMuQ2hlY2tBbGxSaWdodCgpKSksXG4gICAgICAgICAgICAgICAgKHRoaXMubGFzdFRvdWNoUm93ID0gdCksXG4gICAgICAgICAgICAgICAgKHRoaXMubGFzdFRvdWNoQ29sID0gZSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5PbkNsaWNrUm93SGVhZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICghdGhpcy5ieUd1aWRlICYmICF0aGlzLklzUm93TG9naWNSaWdodCh0KSkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmdyaWRIZWFkUm93VmVjW3RdO1xuICAgICAgICAgICAgZS50cmVlTWFzayB8fFxuICAgICAgICAgICAgICAgIGUuaWNlTWFzayB8fFxuICAgICAgICAgICAgICAgICh0aGlzLmN1ckl0ZW1CdG4gJiYgMiA9PSB0aGlzLmN1ckl0ZW1JZHhcbiAgICAgICAgICAgICAgICAgICAgPyAodGhpcy51cGRhdGVJdGVtTnVtKHRoaXMuY3VySXRlbUlkeCwgITApLCB0aGlzLnVzZUl0ZW0obnVsbCwgdCwgbnVsbCkpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5zaG93T3JIaWRlU2VsZWN0TWFzayh0KSxcbiAgICAgICAgICAgICAgICBfdmIuZGVmYXVsdC5wKF92Yi5WRW51bTMuU0hPUlQpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuT25DbGlja0NvbEhlYWQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoIXRoaXMuYnlHdWlkZSAmJiAhdGhpcy5Jc0NvbExvZ2ljUmlnaHQodCkpIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5ncmlkSGVhZENvbFZlY1t0XTtcbiAgICAgICAgICAgIGUudHJlZU1hc2sgfHxcbiAgICAgICAgICAgICAgICBlLmljZU1hc2sgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5jdXJJdGVtQnRuICYmIDIgPT0gdGhpcy5jdXJJdGVtSWR4XG4gICAgICAgICAgICAgICAgICAgID8gKHRoaXMudXBkYXRlSXRlbU51bSh0aGlzLmN1ckl0ZW1JZHgsICEwKSwgdGhpcy51c2VJdGVtKG51bGwsIG51bGwsIHQpKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuc2hvd09ySGlkZVNlbGVjdE1hc2sodm9pZCAwLCB0KSxcbiAgICAgICAgICAgICAgICBfdmIuZGVmYXVsdC5wKF92Yi5WRW51bTMuU0hPUlQpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd09ySGlkZVNlbGVjdE1hc2sgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IHRoaXMuc2VsZWN0TWFzaztcbiAgICAgICAgdmFyIG4gPSB0aGlzLnNlbGVjdERhdGE7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQgJiYgdm9pZCAwID09PSBlKVxuICAgICAgICAgICAgKG8uYWN0aXZlID0gITEpLFxuICAgICAgICAgICAgICAgIC0xICE9IG4ucm93ICYmXG4gICAgICAgICAgICAgICAgICAgICgoKG0gPSB0aGlzLmdyaWRIZWFkUm93VmVjW24ucm93XS5zaGluZUJnKS5hY3RpdmUgPSAhMSksIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChtKSwgKG4ucm93ID0gLTEpKSxcbiAgICAgICAgICAgICAgICAtMSAhPSBuLmNvbCAmJlxuICAgICAgICAgICAgICAgICAgICAoKChtID0gdGhpcy5ncmlkSGVhZENvbFZlY1tuLmNvbF0uc2hpbmVCZykuYWN0aXZlID0gITEpLCBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobSksIChuLmNvbCA9IC0xKSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGkgPSBvLmFjdGl2ZTtcbiAgICAgICAgICAgIHZhciByID0gdGhpcy5zZWxlY3RNYXNrQmc7XG4gICAgICAgICAgICB2YXIgYSA9IHRoaXMuZ3JpZEJnU3Aubm9kZTtcbiAgICAgICAgICAgIHZhciBzID0gdGhpcy5ncmlkU2l6ZTtcbiAgICAgICAgICAgIHZhciBjID0gdGhpcy5jb2xzXztcbiAgICAgICAgICAgIHZhciBsID0gdGhpcy5saW5lVztcbiAgICAgICAgICAgIHZhciB1ID0gYyAqIHMgKyB0aGlzLmdyaWRzU3RhcnRYICsgbCAqIChjIC8gNSAtIDEpO1xuICAgICAgICAgICAgdmFyIHAgPSB1IC8gMjtcbiAgICAgICAgICAgIHZhciBkID0gcDtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoaSB8fFxuICAgICAgICAgICAgICAgICAgICAoKG8uYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgICAoby53aWR0aCA9IG8uaGVpZ2h0ID0gdSksXG4gICAgICAgICAgICAgICAgICAgIG8uc2V0UG9zaXRpb24ocCwgZCksXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHIpLnNldCh7b3BhY2l0eTogMH0pLnRvKDAuMiwge29wYWNpdHk6IDEyOH0pLnN0YXJ0KCkpLFxuICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gdClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZhciBoID0gdGhpcy5ncmlkSGVhZFJvd1ZlYztcbiAgICAgICAgICAgICAgICB2YXIgZiA9IG4ucm93O1xuICAgICAgICAgICAgICAgIHZhciBnID0gbi5jb2w7XG4gICAgICAgICAgICAgICAgaWYgKCgtMSAhPSBmICYmICgoKG0gPSBoW2ZdLnNoaW5lQmcpLmFjdGl2ZSA9ICExKSwgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG0pKSwgZiA9PSB0KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKChuLnJvdyA9IC0xKSwgLTEgPT0gZykpIHJldHVybiB2b2lkIChvLmFjdGl2ZSA9ICExKTtcbiAgICAgICAgICAgICAgICAgICAgby55ID0gZDtcbiAgICAgICAgICAgICAgICAgICAgby5oZWlnaHQgPSB1O1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICAoby5oZWlnaHQgPSBzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChuLnJvdyA9IHQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKG8ueSA9IHQgKiBzICsgcyAvIDIgKyBNYXRoLmZsb29yKHQgLyA1KSAqIGwgLSAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgobSA9IGhbdF0uc2hpbmVCZykuYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obSkudG8oMC44LCB7b3BhY2l0eTogMH0pLnRvKDAuOCwge29wYWNpdHk6IDEwMH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB5ID0gdGhpcy5ncmlkSGVhZENvbFZlYztcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICgoZiA9IG4ucm93KSxcbiAgICAgICAgICAgICAgICAgICAgLTEgIT0gKGcgPSBuLmNvbCkgJiYgKCgobSA9IHlbZ10uc2hpbmVCZykuYWN0aXZlID0gITEpLCBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobSkpLFxuICAgICAgICAgICAgICAgICAgICBnID09IGUpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoKG4uY29sID0gLTEpLCAtMSA9PSBmKSkgcmV0dXJuIHZvaWQgKG8uYWN0aXZlID0gITEpO1xuICAgICAgICAgICAgICAgICAgICBvLnggPSBwO1xuICAgICAgICAgICAgICAgICAgICBvLndpZHRoID0gdTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICAgICAgby53aWR0aCA9IHM7XG4gICAgICAgICAgICAgICAgICAgIG4uY29sID0gZTtcbiAgICAgICAgICAgICAgICAgICAgby54ID0gZSAqIHMgKyBzIC8gMiArIHRoaXMuZ3JpZHNTdGFydFggKyBNYXRoLmZsb29yKGUgLyA1KSAqIGwgLSAxO1xuICAgICAgICAgICAgICAgICAgICAobSA9IHlbZV0uc2hpbmVCZykuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG0pLnRvKDAuOCwge29wYWNpdHk6IDB9KS50bygwLjgsIHtvcGFjaXR5OiAxMDB9KS51bmlvbigpLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHIuc2V0UG9zaXRpb24oYS54IC0gby54LCBhLnkgLSBvLnkgKyA4KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuQ2FuY2VsR3JpZFRvdWNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNvdW5kSWR4ID0gMTtcbiAgICAgICAgdGhpcy50aXBOb2RlLmFjdGl2ZSAmJiB0aGlzLnRpcEFuaS5wbGF5KGcudGlwT3V0KTtcbiAgICAgICAgdGhpcy5jbGlja190b3VjaF8gPSAhMTtcbiAgICAgICAgdGhpcy5ncmlkVG91Y2hTdGFydCAmJlxuICAgICAgICAgICAgdGhpcy5ncmlkVG91Y2hTdGFydC5hcmVhICE9IGwuTm9uZSAmJlxuICAgICAgICAgICAgKCh0aGlzLmdyaWRUb3VjaFN0YXJ0LmFyZWEgPSBsLk5vbmUpLCB0aGlzLk9wZXJhdGlvblN0ZXBFbmQoKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5Jc0FsbFJpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5iYXNlT1RvdGFsIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlT1RvdGFsID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5ncmlkX2NvdW50OyB0KyspIHRoaXMuYmFzZURhdGFbdF0gPT0gYy5PICYmICh0aGlzLmJhc2VPVG90YWwgKz0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGUgPSB0aGlzLmJhc2VPVG90YWw7XG4gICAgICAgIHZhciBvID0gMDtcbiAgICAgICAgZm9yICh0ID0gMDsgdCA8IHRoaXMud29ya0RhdGEubGVuZ3RoOyB0KyspIHRoaXMud29ya0RhdGFbdF0gPT0gYy5PICYmIChvICs9IDEpO1xuICAgICAgICBpZiAoZSAhPSBvKSByZXR1cm4gITE7XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdGhpcy5yb3dzXzsgbisrKSBpZiAoIXRoaXMuSXNSb3dMb2dpY1JpZ2h0KG4pKSByZXR1cm4gITE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2xzXzsgaSsrKSBpZiAoIXRoaXMuSXNDb2xMb2dpY1JpZ2h0KGkpKSByZXR1cm4gITE7XG4gICAgICAgIHJldHVybiAhMDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLkNoZWNrQWxsUmlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICF0aGlzLmlzQWxsUmlnaHQgJiYgdGhpcy5Jc0FsbFJpZ2h0KCkgJiYgKCh0aGlzLmlzQWxsUmlnaHQgPSAhMCksIHRoaXMuc2hvd09ySGlkZVNlbGVjdE1hc2soKSwgdGhpcy5nYW1lV2luKCkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUud2luU3BTY2FsZUFuaSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLndpblNwUGFyZW50O1xuICAgICAgICB2YXIgZSA9IHRoaXMud2luQW5pTm9kZS5wYXJlbnQ7XG4gICAgICAgIHZhciBvID0gbmV3IGNjLlZlYzMoKTtcbiAgICAgICAgdC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHQucG9zaXRpb24sIG8pO1xuICAgICAgICBlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG8sIG8pO1xuICAgICAgICB0LnNldFBhcmVudChlKTtcbiAgICAgICAgdC5zZXRTaWJsaW5nSW5kZXgoMyk7XG4gICAgICAgIHQuc2V0U2NhbGUodGhpcy5ncmlkQmdTcC5ub2RlLnNjYWxlKTtcbiAgICAgICAgdC5zZXRQb3NpdGlvbihvKTtcbiAgICAgICAgY2MudHdlZW4odClcbiAgICAgICAgICAgIC50bygwLjUsIHtzY2FsZTogMS4yfSlcbiAgICAgICAgICAgIC5kZWxheSg1IC8gMzApXG4gICAgICAgICAgICAudG8oMSwge3NjYWxlOiAwLjUsIHg6IDAsIHk6IF9nbG9iYWwuZGVmYXVsdC5wYWRTY2FsZSA/IDc1IDogMTc1fSwge2Vhc2luZzogXCJjdWJpY0luXCJ9KVxuICAgICAgICAgICAgLmNhbGwodGhpcy5QbGF5RmlyZXdvcmtzLmJpbmQodGhpcykpXG4gICAgICAgICAgICAuYnkoNSAvIDMwLCB7c2NhbGU6IDAuMDV9LCB7ZWFzaW5nOiBcImN1YmljT3V0XCJ9KVxuICAgICAgICAgICAgLmJ5KDUgLyAzMCwge3NjYWxlOiAtMC4wNX0sIHtlYXNpbmc6IFwiY3ViaWNJblwifSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudGlsZXNXaW5BbmkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5tYXBfbm9kZV87XG4gICAgICAgIGNjLnR3ZWVuKHQpXG4gICAgICAgICAgICAuZGVsYXkoMjAgLyAzMClcbiAgICAgICAgICAgIC50bygxLCB7c2NhbGU6IDAuNjA2LCB4OiAtMjg4LCB5OiAxMDB9LCB7ZWFzaW5nOiBcImN1YmljSW5cIn0pXG4gICAgICAgICAgICAuY2FsbCh0aGlzLlBsYXlGaXJld29ya3MuYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2FtZVdpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHZhciBlO1xuICAgICAgICB2YXIgbiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSAhMTtcbiAgICAgICAgX3NvdW5kLmRlZmF1bHQuaW5zLnBsYXkoX3NvdW5kLmRlZmF1bHQuV0lOKTtcbiAgICAgICAgXG4gICAgICAgIC8vIPCfkp0g5Y235a6d5LiT5bGe546w6YeR5aWW5Yqx57O757ufIC0g5ri45oiP5a6M5oiQ5ZCO55qE5aSE55CGXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy8g56uL5Y2z6I635Y+W5b2T5YmN5ri45oiP54q25oCB77yM6YG/5YWN5L2c55So5Z+f6Zeu6aKYXG4gICAgICAgIHZhciBjdXJyZW50R2FtZVR5cGUgPSBvLnR5cGU7XG4gICAgICAgIHZhciBjdXJyZW50TGV2ZWwgPSBfcEluZm8uZGVmYXVsdC5pbnMuZ2V0UHV6emxlTHZsKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygn8J+OriDmuLjmiI/lrozmiJDmo4DmtYsgLSDnsbvlnos6JywgY3VycmVudEdhbWVUeXBlLCAn5YWz5Y2hOicsIGN1cnJlbnRMZXZlbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCfwn46uIOa4uOaIj+WujOaIkOajgOa1iyAtIG/lr7nosaE6Jywgbyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCfwn46uIOa4uOaIj+WujOaIkOajgOa1iyAtIF9wSW5mby5nYW1lVHlwZTonLCBfcEluZm8uZ2FtZVR5cGUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIOaBouWkjeWOn+Wni+WFs+WNoei/m+W6pu+8iOWmguaenOaYr+aJi+WKqOmAieaLqeeahOWFs+WNoe+8iVxuICAgICAgICAgICAgICAgIGlmIChfZ2xvYmFsLmRlZmF1bHQub3JpZ2luYWxMZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn8J+UhCDmgaLlpI3ljp/lp4vlhbPljaHov5vluqY6JywgX2dsb2JhbC5kZWZhdWx0Lm9yaWdpbmFsTGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICBfcEluZm8uZGVmYXVsdC5pbnMuc2V0UHV6emxlTHZsKF9nbG9iYWwuZGVmYXVsdC5vcmlnaW5hbExldmVsKTtcbiAgICAgICAgICAgICAgICAgICAgX2dsb2JhbC5kZWZhdWx0Lm9yaWdpbmFsTGV2ZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgaXNOb3JtYWxHYW1lID0gY3VycmVudEdhbWVUeXBlID09IF9wSW5mby5nYW1lVHlwZS5ub3JtYWw7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ/CflI0g5ri45oiP57G75Z6L5qOA5p+lIC0g5piv5ZCm5pmu6YCa5ri45oiPOicsIGlzTm9ybWFsR2FtZSwgJ+a4uOaIj+exu+Wei+WAvDonLCBjdXJyZW50R2FtZVR5cGUsICfmma7pgJrnsbvlnovlgLw6JywgX3BJbmZvLmdhbWVUeXBlLm5vcm1hbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzTm9ybWFsR2FtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlmZmljdWx0eSA9IHNlbGYuZ2V0TGV2ZWxEaWZmaWN1bHR5KGN1cnJlbnRMZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfwn46vIOWFs+WNoScgKyBjdXJyZW50TGV2ZWwgKyAn5a6M5oiQ77yM6Zq+5bqmOicsIGRpZmZpY3VsdHkpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g6Kem5Y+R546w6YeR5aWW5Yqx5qOA5p+lXG4gICAgICAgICAgICAgICAgICAgIHZhciBoYXNSZXdhcmQgPSBfcmV3YXJkTWdyLmRlZmF1bHQub25QdXp6bGVDb21wbGV0ZShkaWZmaWN1bHR5LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNSZXdhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OiSDnjrDph5HlpZblirHlt7Lnq4vljbPmt7vliqDliLDkvZnpop3lubbmm7TmlrBVSe+8gVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4q2VIOacrOasoeayoeacieiOt+W+l+eOsOmHkeWlluWKse+8iOmaj+acuuamgueOhzQwJeS4jeinpuWPke+8iVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfihLnvuI8g6Z2e5pmu6YCa5ri45oiP5qih5byP77yM6Lez6L+H546w6YeR5aWW5YqxJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAocmV3YXJkRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueOsOmHkeWlluWKseezu+e7n+mUmeivrzpcIiwgcmV3YXJkRXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmV3YXJkRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxLjApOyAvLyDlh4/lsJHlu7bov5/liLAx56eSXG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgcjtcbiAgICAgICAgdmFyIGEgPSBfcEluZm8uZGVmYXVsdC5pbnM7XG4gICAgICAgIHZhciBzID0gby50eXBlO1xuICAgICAgICB2YXIgYyA9IHMgPT0gX3BJbmZvLmdhbWVUeXBlLm5vcm1hbDtcbiAgICAgICAgdmFyIGwgPSBzID09IF9wSW5mby5nYW1lVHlwZS5wcmFjdGljZTtcbiAgICAgICAgdmFyIHUgPSBzID09IF9wSW5mby5nYW1lVHlwZS5mZXN0aXZhbDtcbiAgICAgICAgdmFyIHAgPSBzID09IF9wSW5mby5nYW1lVHlwZS5mcmVlZG9tO1xuICAgICAgICB2YXIgZCA9IHMgPT0gX3BJbmZvLmdhbWVUeXBlLmNoYWxsZW5nZTtcbiAgICAgICAgX3Rhc2tNZ3IuZGVmYXVsdC50YXNrQ2hlY2socyk7XG4gICAgICAgIChjIHx8IHUgfHwgcCkgJiYgX2Zlc3RpdmFsTWdyLmRlZmF1bHQuaW5zLnVwZFBybyhfZmVzdGl2YWxNZ3IuZmVzVGFza0tleS50aHJvdWdoTWFpbiwgMSk7XG4gICAgICAgIHRoaXMuZXZlbnREb3QoITApO1xuICAgICAgICB1XG4gICAgICAgICAgICA/IChyID0gX2Zlc3RpdmFsTWdyLmRlZmF1bHQuaW5zLmdldEZlc1B1enpsZVNwckZyYW1lKCkpXG4gICAgICAgICAgICA6IHAgfHxcbiAgICAgICAgICAgICAgZCB8fFxuICAgICAgICAgICAgICAociA9IGNcbiAgICAgICAgICAgICAgICAgID8gX2xldmVsTWdyLmRlZmF1bHQuaW5zLmdldFB1enpsZVNwckZyYW1lKF9wSW5mby5kZWZhdWx0Lmlucy5nZXRQdXp6bGVMdmwoKSlcbiAgICAgICAgICAgICAgICAgIDogX2xldmVsTWdyLmRlZmF1bHQuaW5zLmdldFByYWNpdGNlU3ByZkZyYW1lKHRoaXMucHJhY3RpY2VJZCkpO1xuICAgICAgICB2YXIgaCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndpblwiKTtcbiAgICAgICAgdmFyIGcgPSBoLmdldENoaWxkQnlOYW1lKFwidG9wXCIpO1xuICAgICAgICB2YXIgeSA9IGguZ2V0Q2hpbGRCeU5hbWUoXCJtaWRcIik7XG4gICAgICAgIGlmIChsKSB7XG4gICAgICAgICAgICBnLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgeS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIHZhciBtID0gaC5nZXRDaGlsZEJ5TmFtZShcImRvd25cIik7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKChtLmdldENoaWxkQnlOYW1lKFwiYWRHZXRCdG5cIikuYWN0aXZlID0gITEpLFxuICAgICAgICAgICAgICAgIChtLmdldENoaWxkQnlOYW1lKFwibmV4dFByYUJ0blwiKS5hY3RpdmUgPSAhdGhpcy5ieUd1aWRlKSxcbiAgICAgICAgICAgICAgICB0aGlzLmJ5R3VpZGUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IG0uZ2V0Q2hpbGRCeU5hbWUoXCJnZXRCdG5cIik7XG4gICAgICAgICAgICAgICAgdi54ID0gMDtcbiAgICAgICAgICAgICAgICB2Lm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIF8gPSB2b2lkIDA7XG4gICAgICAgICAgICBkXG4gICAgICAgICAgICAgICAgPyAodGhpcy51bnNjaGVkdWxlKHRoaXMuX2NoYUNEKSxcbiAgICAgICAgICAgICAgICAgIF9jaGFsbGVuZ2VNZ3IuZGVmYXVsdC5pbnMud2luQ2hhbGxlbmdlKG8uY2hhbGxhZ2VEYXRhLmRhdGUpLFxuICAgICAgICAgICAgICAgICAgKF9nbG9iYWwuZGVmYXVsdC5sb2FkVG9SYWNlID0gMykpXG4gICAgICAgICAgICAgICAgOiBwXG4gICAgICAgICAgICAgICAgPyAoKHRoaXMubGV2ZWxMYmwubm9kZS5wYXJlbnQuYWN0aXZlID0gITEpLCAoZy5zY2FsZVggPSAwKSwgKF8gPSAxNSA9PSB0aGlzLnJvd3NfKSlcbiAgICAgICAgICAgICAgICA6ICgoaSA9IGMgPyBhLmdldFB1enpsZUx2bCgpIDogX2Zlc3RpdmFsTWdyLmRlZmF1bHQuaW5zLmdldEZlc1B1enpsZUx2KCkpLFxuICAgICAgICAgICAgICAgICAgKHRoaXMubGV2ZWxMYmwuc3RyaW5nID0gXCJcIiArIGkpLFxuICAgICAgICAgICAgICAgICAgKF8gPSBpICUgMyA9PSAwKSxcbiAgICAgICAgICAgICAgICAgIGMgPyBhLmZpbmlzaFB1enpsZUx2bCgpIDogX2Zlc3RpdmFsTWdyLmRlZmF1bHQuaW5zLmZpbmlzaEZlc1B1enpsZUx2KCkpO1xuICAgICAgICAgICAgYS5yZWNvcmRHYW1lUmVzdWx0KHMsICEwLCB0aGlzLnNjb3JlLCB2b2lkIDAsIGkpO1xuICAgICAgICAgICAgdmFyIGIgPSB7fTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoKGJbXG4gICAgICAgICAgICAgICAgICAgIHMgIT09IF9wSW5mby5nYW1lVHlwZS5mZXN0aXZhbCB8fCBfZmVzdGl2YWxNZ3IuZGVmYXVsdC5pbnMuaXNKaWdzYXdNYXgoKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInB1enpsZV9waWVjZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5ld1llYXJfcGllY2VzXCJcbiAgICAgICAgICAgICAgICBdID0gMSksXG4gICAgICAgICAgICAgICAgZClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uczJMYmwuc3RyaW5nID0gdGhpcy51c2VUaW1lTGJsLnN0cmluZztcbiAgICAgICAgICAgICAgICB0aGlzLm11bHQgPSAzO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRHZXRCdG4ubm9kZS5hZERvdERhdGEgPSBcIuavj+aXpeaMkeaImOS4ieWAjeWlluWKsVwiO1xuICAgICAgICAgICAgICAgIHZhciBUID0gby5jaGFsbGFnZURhdGEuZGF0ZS5udW0gfHwgMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnNCZXN0TGJsLnN0cmluZyA9IFQgKyBcIlwiO1xuICAgICAgICAgICAgICAgIGIgPSAobnVsbCA9PT1cbiAgICAgICAgICAgICAgICAgICAgKGUgPSBudWxsID09PSAodCA9IF9jZmdNZ3IuZGVmYXVsdC5zZXJ2ZXJDZmcpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZGFpbHlfY2hhbGxlbmdlKSB8fFxuICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gZVxuICAgICAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICA6IGUucmV3YXJkKSB8fCB7dGltZXM6IDUwLCBjb2luOiAxMDAsIHB1enpsZV9waWVjZXM6IDEwfTtcbiAgICAgICAgICAgICAgICBvLmNoYWxsYWdlRGF0YS5kYXRlLmlzRmluICYmIChiID0ge30pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgSSA9IGEuZ2V0Q29uc1dpblRpbWVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zMkxibC5zdHJpbmcgPSBJICsgXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnNCZXN0TGJsLnN0cmluZyA9IHRoaXMucmVjRGF0YS5oZVdpbnM7XG4gICAgICAgICAgICAgICAgdmFyIEQgPSAodGhpcy5iYXNlUmV3YXJkID0gMik7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSAodGhpcy5yZXdhcmQgPSBNYXRoLm1pbihEICogSSwgMjApKTtcbiAgICAgICAgICAgICAgICB0aGlzLm11bHQgPSBfID8gMTAgOiAzO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRHZXRCdG4ubm9kZS5hZERvdERhdGEgPSBfID8gXCLkuLvnur/ljYHlgI3lpZblirFcIiA6IFwi5Li757q/5LiJ5YCN5aWW5YqxXCI7XG4gICAgICAgICAgICAgICAgdGhpcy50ZW5Ob2RlLmFjdGl2ZSA9IF87XG4gICAgICAgICAgICAgICAgdGhpcy50aHJlZU5vZGUuYWN0aXZlID0gIV87XG4gICAgICAgICAgICAgICAgdGhpcy5yZXcxTGJsLnN0cmluZyA9IEQgKyBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMucmV3MkxibC5zdHJpbmcgPSBrICsgXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIFIgaW4gYikge1xuICAgICAgICAgICAgICAgIHZhciBDID0gYltSXTtcbiAgICAgICAgICAgICAgICB2YXIgTyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucmV3SXRlbVByZSk7XG4gICAgICAgICAgICAgICAgTy5zY2FsZSA9IDEuMztcbiAgICAgICAgICAgICAgICBPLmdldENvbXBvbmVudChfaXRlbS5kZWZhdWx0KS5pbml0QnlEYXRhKFIsIEMpO1xuICAgICAgICAgICAgICAgIHRoaXMucmV3SXRlbXMuY29udGVudC5hZGRDaGlsZChPKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZCB8fCAhby5jaGFsbGFnZURhdGEuZGF0ZS5pc0Zpbikge1xuICAgICAgICAgICAgICAgIHZhciBMID0gdGhpcy5yZXdJdGVtcy5jb250ZW50LmNoaWxkcmVuWzBdLndpZHRoICogdGhpcy5yZXdJdGVtcy5jb250ZW50LmNoaWxkcmVuQ291bnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXdJdGVtcy5ub2RlLnggPSBMID4gdGhpcy5yZXdJdGVtcy5ub2RlLndpZHRoID8gLTE4MCA6ICh0aGlzLnJld0l0ZW1zLm5vZGUud2lkdGggLSBMKSAvIDIgLSAxODA7XG4gICAgICAgICAgICAgICAgTCA9IE1hdGgubWluKEwsIDM2MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXdJdGVtcy5ub2RlLndpZHRoID0gTDtcbiAgICAgICAgICAgICAgICB0aGlzLnJld0l0ZW1zLnNjcm9sbFRvTGVmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIEIgPSBfY2ZnTWdyLmRlZmF1bHQuc2VydmVyQ2ZnLnNoYXJlX3J1bGVzLnJ1bGVzLm1haW5fbGluZTtcbiAgICAgICAgICAgIHZhciBWID0gYS5nZXROb3JtYWxTaGFyZVRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMuc2hhcmVJY29uLnNwcml0ZUZyYW1lID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShcInJlc1Nwc1wiKS5nZXQoXCJpdGVtL1wiICsgQi5wcm9wcywgY2MuU3ByaXRlRnJhbWUpO1xuICAgICAgICAgICAgdGhpcy5zaGFyZUxibC5zdHJpbmcgPSBcIitcIiArIEIudmFsO1xuICAgICAgICAgICAgdGhpcy5zaGFyZUljb24ubm9kZS5hY3RpdmUgPSBWIDwgQi5kYWlseV9saW1pdF9yZXdhcmRfdGltZXM7XG4gICAgICAgICAgICBfcmVzLmRlZmF1bHQuaW5zLmdldEJ1bmRsZUJ5U3RyaW5nKFwicHJlZmFiXCIpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0LnByZWxvYWQoXCJwcmVmYWIvZ2FtZS9iYW5uZXJcIiwgY2MuUHJlZmFiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJcbiAgICAgICAgICAgID8gclxuICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IG4uY29sc187XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBuLnJvd3NfO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gbi5ncmlkU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IG4ubWFwX25vZGVfO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gbi5ncmlkQmdTcC5ub2RlO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gYS5zY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGEueCArIChhLndpZHRoICogcykgLyAyICsgci54O1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gYS55ICsgKGEuaGVpZ2h0ICogcykgLyAyICsgci55O1xuICAgICAgICAgICAgICAgICAgICAgIF9nbG9iYWwuZGVmYXVsdC5wYWRTY2FsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoKGwgLT0gMTUwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZy5pc1ZhbGlkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZy5yZW1vdmVDb21wb25lbnQoY2MuV2lkZ2V0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLnkgPSAtMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoaC5nZXRDaGlsZEJ5TmFtZShcIm1pZFwiKS55ID0gLTEwMCkpO1xuICAgICAgICAgICAgICAgICAgICAgIG4ud2luQW5pTm9kZS5zZXRQb3NpdGlvbihjLCBsKTtcbiAgICAgICAgICAgICAgICAgICAgICBuLndpbkFuaU5vZGUuc2V0U2NhbGUocyk7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSBuLmxhc3RUb3VjaFJvdyAtIG8gLyAyO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gKG4ubGFzdFRvdWNoQ29sIC0gZSAvIDIpICogaSArIGkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gdSAqIGkgKyBpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICBuLndpbkNpcmNsZU1hc2suc2V0UG9zaXRpb24ocCwgZCk7XG4gICAgICAgICAgICAgICAgICAgICAgbi53aW5TcFBhcmVudC5zZXRQb3NpdGlvbigtcCwgLWQpO1xuICAgICAgICAgICAgICAgICAgICAgIG4ud2luTGlnaHQuc2V0UG9zaXRpb24ocCwgZCk7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIHkuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgIHkucGFyZW50ID0gbi5ub2RlO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0geS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IHkuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBfID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICBfLmluaXRXaXRoU2l6ZSh5LndpZHRoLCB5LmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIGIuc2V0UGFyZW50KHkpO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gYi5hZGRDb21wb25lbnQoY2MuQ2FtZXJhKTtcbiAgICAgICAgICAgICAgICAgICAgICB3LmNsZWFyRmxhZ3MgfD0gY2MuQ2FtZXJhLkNsZWFyRmxhZ3MuQ09MT1I7XG4gICAgICAgICAgICAgICAgICAgICAgdy5iYWNrZ3JvdW5kQ29sb3IgPSBjYy5jb2xvcigwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICB3Lnpvb21SYXRpbyA9IGNjLndpblNpemUuaGVpZ2h0IC8gdjtcbiAgICAgICAgICAgICAgICAgICAgICB3LnRhcmdldFRleHR1cmUgPSBfO1xuICAgICAgICAgICAgICAgICAgICAgIHcucmVuZGVyKHkpO1xuICAgICAgICAgICAgICAgICAgICAgIGIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgIHkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgIG4uc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBfLnJlYWRQaXhlbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gbi53aW5TcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gSihtIC8gZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gSih2IC8gbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gbi5zaW5nbGVTZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaSAvPSBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IGU7IHUrKylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgPSAwOyBwIDwgbzsgcCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBwICogYyAqIG0gKyB1ICogYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IHRbKGQgKj0gNCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnID0gdFtkICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSB0W2QgKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYiA9ICh0W2QgKyAzXSwgbmV3IGNjLk5vZGUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSBiLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHcuc3ByaXRlRnJhbWUgPSBsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHcuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIucGFyZW50ID0gcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiLmNvbG9yID0gbmV3IGNjLkNvbG9yKGgsIGcsIHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIuc2V0Q29udGVudFNpemUoaSwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYi5zZXRQb3NpdGlvbih1ICogaSArIGkgLyAyLCBwICogaSArIGkgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbi5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5wbGF5QW5pKGYuZ2FtZVdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG4ucGxheUFuaShmLmdhbWVXaW5GYWlsU2YpO1xuICAgICAgICAgICAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBuLnBsYXlBbmkoZi5nYW1lV2luRmFpbFNmKTtcbiAgICAgICAgICAgICAgfSwgMC41KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLlBsYXlGaXJld29ya3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5ieUd1aWRlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMuY29uc0Jlc3RMYmwubm9kZS5wYXJlbnQucGFyZW50O1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxldmVsTGJsLm5vZGUucGFyZW50LnBhcmVudDtcbiAgICAgICAgICAgIF9yZXMuZGVmYXVsdC5pbnNcbiAgICAgICAgICAgICAgICAuZ2V0QnVuZGxlQnlTdHJpbmcoXCJwcmVmYWJcIilcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICB0LmlzVmFsaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ubG9hZChcInByZWZhYi9nYW1lL2Jhbm5lclwiLCBjYy5QcmVmYWIsIGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvICYmIHQuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGNjLmluc3RhbnRpYXRlKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdfZ2tfc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoci5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB0LmNvbnZlcnRUb05vZGVTcGFjZUFSKGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnNldFBhcmVudCh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS55ID0gcy55IC0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmdldENvbXBvbmVudChfYmFubmVyLmRlZmF1bHQpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLk9wZXJhdGlvblN0ZXBCZWdpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLm9wU3RlcDtcbiAgICAgICAgdC5ncmlkcyA9IFtdO1xuICAgICAgICB0LnJvd19hdXRveF9jb2xzLmNsZWFyKCk7XG4gICAgICAgIHQuY29sX2F1dG94X3Jvd3MuY2xlYXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0LnJvd19hdXRveF9jb2xzLCB0aGlzLmNvbEF1dG9YQ29scyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odC5jb2xfYXV0b3hfcm93cywgdGhpcy5jb2xBdXRvWFJvd3MpO1xuICAgICAgICB0LmhpbnRfcm93cyA9IFtdO1xuICAgICAgICB0LmhpbnRfY29scyA9IFtdO1xuICAgICAgICB0LmlzX3Jvd19hdXRveF9jaGFuZ2VkID0gITE7XG4gICAgICAgIHQuaXNfY29sX2F1dG94X2NoYW5nZWQgPSAhMTtcbiAgICAgICAgdC5pc19oaW50X3Jvd3NfY2hhbmdlZCA9ICExO1xuICAgICAgICB0LmlzX2hpbnRfY29sc19jaGFuZ2VkID0gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5PcGVyYXRpb25TdGVwRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWxsUmlnaHQgfHxcbiAgICAgICAgICAgICgodGhpcy5vcFN0ZXAuaXNfcm93X2F1dG94X2NoYW5nZWQgfHxcbiAgICAgICAgICAgICAgICB0aGlzLm9wU3RlcC5pc19jb2xfYXV0b3hfY2hhbmdlZCB8fFxuICAgICAgICAgICAgICAgIHRoaXMub3BTdGVwLmlzX2hpbnRfcm93c19jaGFuZ2VkIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5vcFN0ZXAuaXNfaGludF9jb2xzX2NoYW5nZWQgfHxcbiAgICAgICAgICAgICAgICAwICE9IHRoaXMub3BTdGVwLmdyaWRzLmxlbmd0aCkgJiZcbiAgICAgICAgICAgICAgICAodGhpcy5vcFN0ZXAuaXNfcm93X2F1dG94X2NoYW5nZWQgfHwgdGhpcy5vcFN0ZXAucm93X2F1dG94X2NvbHMuY2xlYXIoKSxcbiAgICAgICAgICAgICAgICB0aGlzLm9wU3RlcC5pc19jb2xfYXV0b3hfY2hhbmdlZCB8fCB0aGlzLm9wU3RlcC5jb2xfYXV0b3hfcm93cy5jbGVhcigpKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5PcGVyYXRpb25TdGVwQnlTZXRXb3JrVGFnID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgdGhpcy5vcFN0ZXAuZ3JpZHMucHVzaCh7dGFnX3VuZG86IHQsIHRhZ19yZWRvOiBlLCBncmlkOiBvfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5PbkJ0bk9YID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMub3hBbmluZyAmJiAodGhpcy5yZXNldENEKCksIHRoaXMuY2FuVG91Y2gpKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMucGVuO1xuICAgICAgICAgICAgdmFyIGUgPSAodCA9IHRoaXMucGVuID0gdCA9PSBjLlggPyBjLk8gOiBjLlgpID09IGMuWDtcbiAgICAgICAgICAgIHRoaXMub3hBbmluZyA9ICEwO1xuICAgICAgICAgICAgdGhpcy5veFRhZ0FuaS5wbGF5KGUgPyBcInRvZ1RvWFwiIDogXCJ0b2dUb09cIik7XG4gICAgICAgICAgICB0aGlzLnBsYXlTaGluZSgpO1xuICAgICAgICAgICAgX3ZiLmRlZmF1bHQucChfdmIuVkVudW0zLlNIT1JUKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUub3hBbmlEb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuYnlHdWlkZVxuICAgICAgICAgICAgPyB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB0LnVwZGF0ZUd1aWRlU3RlcCgpO1xuICAgICAgICAgICAgICAgICAgdC5veEFuaW5nID0gITE7XG4gICAgICAgICAgICAgIH0sIDAuMilcbiAgICAgICAgICAgIDogKHRoaXMub3hBbmluZyA9ICExKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnBsYXlTaGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ncmlkcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0LnNoaW5lKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuT25CdG5TZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJBbmkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd09ySGlkZVNlbGVjdE1hc2soKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRDRCgpO1xuICAgICAgICAgICAgdmFyIHQgPSAodGhpcy5pc1Nob3dCdG4gPSAhdGhpcy5pc1Nob3dCdG4pO1xuICAgICAgICAgICAgdGhpcy5wbGF5QW5pKHQgPyBmLnNob3dCdG5zIDogZi5oaWRlQnRucyk7XG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gIXQ7XG4gICAgICAgICAgICB0aGlzLnJhY2VDaGdWaXMoKTtcbiAgICAgICAgICAgIF92Yi5kZWZhdWx0LnAoX3ZiLlZFbnVtMy5TSE9SVCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLk9uQnRuSGVscCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNldENEKCk7XG4gICAgICAgIF9wYW5lbE1nci5kZWZhdWx0Lmlucy5vcGVuKFwidWkvdWlfcmFjZVRpcFwiLCB7cGFnZUlkeDogby50eXBlID09IF9wSW5mby5nYW1lVHlwZS5yYWNlID8gMiA6IDB9KTtcbiAgICAgICAgX3ZiLmRlZmF1bHQucChfdmIuVkVudW0zLlNIT1JUKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLk9uQnRuTXVzaWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXRDRCgpO1xuICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX3NldFwiLCBudWxsKTtcbiAgICAgICAgX3ZiLmRlZmF1bHQucChfdmIuVkVudW0zLlNIT1JUKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLk9uQnRuVGlwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc2V0Q0QoKTtcbiAgICAgICAgdGhpcy50aXBUb2cgPSAhdGhpcy50aXBUb2c7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRTZXR0aW5nKHt0aXA6IHRoaXMudGlwVG9nfSk7XG4gICAgICAgIHRoaXMudXBkYXRlVGlwKCk7XG4gICAgICAgIF92Yi5kZWZhdWx0LnAoX3ZiLlZFbnVtMy5TSE9SVCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVUaXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGlwQWN0Tm9kZS5hY3RpdmUgPSB0aGlzLnRpcFRvZztcbiAgICAgICAgdGhpcy50aXBVbkFjdE5vZGUuYWN0aXZlID0gIXRoaXMudGlwVG9nO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuT25CdG5Ib21lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc2V0Q0QoKTtcbiAgICAgICAgX3BhbmVsTWdyLmRlZmF1bHQuaW5zLm9wZW4oXG4gICAgICAgICAgICBcInVpL3VpX3JlUGxheVwiLFxuICAgICAgICAgICAge2N1clNjb3JlOiB0aGlzLnNjb3JlLCBjb250aW51ZUNiOiB0aGlzLmNvbnRpbnVlQ2IuYmluZCh0aGlzKX0sXG4gICAgICAgICAgICB7TWFza05vSGlkZTogITB9XG4gICAgICAgICk7XG4gICAgICAgIF92Yi5kZWZhdWx0LnAoX3ZiLlZFbnVtMy5TSE9SVCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5PbkJ0blNoYXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHRoaXMucmVzZXRDRCgpO1xuICAgICAgICBfaWR4LnBsYXRmb3JtLnNoYXJlVmlkZW9SZWNvcmQoKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHQuc2hhcmVJY29uO1xuICAgICAgICAgICAgaWYgKDEgPT0gZSAmJiBvICYmIG8uaXNWYWxpZCAmJiBvLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBfcEluZm8uZGVmYXVsdC5pbnM7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBfY2ZnTWdyLmRlZmF1bHQuc2VydmVyQ2ZnLnNoYXJlX3J1bGVzLnJ1bGVzLm1haW5fbGluZTtcbiAgICAgICAgICAgICAgICB2YXIgciA9IGkucHJvcHM7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBpLnZhbDtcbiAgICAgICAgICAgICAgICBvLnNwcml0ZUZyYW1lID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShcInJlc1Nwc1wiKS5nZXQoXCJpdGVtL1wiICsgciwgY2MuU3ByaXRlRnJhbWUpO1xuICAgICAgICAgICAgICAgIHZhciBzID0gbi5nZXROb3JtYWxTaGFyZVRpbWUoKTtcbiAgICAgICAgICAgICAgICBuLnNldE5vcm1hbFNoYXJlVGltZShzICsgMSk7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2luXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAoYyA9IG4uZ2V0Q29pbigpKSwgbi5hZGRDb2luKGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0aW1lc1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hZGRQb3dlcihhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2JhZ01nci5kZWZhdWx0Lmlucy5hZGRJdGVtKHIsIGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbCA9IG8ubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG8ubm9kZS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgX3BhbmVsTWdyLmRlZmF1bHQuaW5zLm9wZW4oXCJ1aS91aV9mbHlBbmlcIiwge1xuICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YXM6IFt7aXRlbUlkOiByLCB3b3JsZFBvczogbCwgdmFsdWU6IGF9XSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvaW46IGNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0LnNoYXJlQnRuLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNvbnRpbnVlQ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSAhMDtcbiAgICAgICAgdGhpcy5yYWNlQ2hnVmlzKCk7XG4gICAgICAgIHRoaXMuT25CdG5TZXQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJhY2VDaGdWaXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChvLnR5cGUgPT0gX3BJbmZvLmdhbWVUeXBlLnJhY2UpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy5jYW5Ub3VjaDtcbiAgICAgICAgICAgIHRoaXMudGlsZXNQYXJlbnQuYWN0aXZlID0gdDtcbiAgICAgICAgICAgIHRoaXMuZ3JpZEhlYWRDb2xWZWMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUubGFiZWxzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5hY3RpdmUgPSB0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmdyaWRIZWFkUm93VmVjLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLmxhYmVscy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuYWN0aXZlID0gdDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5PbkJ0bkl0ZW0gPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbiA9IHRoaXM7XG4gICAgICAgIGlmICgodGhpcy5zaG93T3JIaWRlU2VsZWN0TWFzaygpLCB0aGlzLnJlc2V0Q0QoKSwgdGhpcy5jYW5Ub3VjaCkpXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJJdGVtQnRuKSB0aGlzLk9uQnRuSGlkZUl0ZW0oKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VySXRlbUlkeCA9IE51bWJlcihlKTtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMuaXRlbXNbZV07XG4gICAgICAgICAgICAgICAgaWYgKGkuaXRlbU1heCAhPSBpLml0ZW1DdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gaS5jb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuY2FuVG91Y2ggPSAhMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWNlQ2hnVmlzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX2dldEl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSWQ6IGkuaWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2I6IHRoaXMudXBkYXRlSXRlbU51bS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUNiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmNhblRvdWNoID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnJhY2VDaGdWaXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ1R5cGU6IG8udHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9ICh0aGlzLmN1ckl0ZW1CdG4gPSB0LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICByLnNldFNpYmxpbmdJbmRleCg3KTtcbiAgICAgICAgICAgICAgICAgICAgX3Jlcy5kZWZhdWx0Lmlucy5sU0YoXCJpdGVtL1wiICsgaS5pY29uLCB0aGlzLml0ZW1TZWxlY3RJY29uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtU2VsZWN0TGJsLnN0cmluZyA9IGkudGlwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxlY3RFZmYuc2V0UG9zaXRpb24oci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pKGYub3Blbkl0ZW1TZWxlY3QpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZ0dyaWRJdGVtU2hpbmUoITApO1xuICAgICAgICAgICAgICAgICAgICBfdmIuZGVmYXVsdC5wKF92Yi5WRW51bTMuU0hPUlQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBfdGlwTWdyLmRlZmF1bHQuaW5zLnNob3dUaXAoXCLmr4/lhbPlj6rog73kvb/nlKhcIiArIGkuaXRlbU1heCArIFwi5qyhXCIpO1xuICAgICAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuT25CdG5IaWRlSXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNldENEKCk7XG4gICAgICAgIHRoaXMuY2FuVG91Y2ggJiYgKHRoaXMucGxheUFuaShmLmNsb3NlSXRlbVNlbGVjdCksIHRoaXMuY2hnR3JpZEl0ZW1TaGluZSghMSksIF92Yi5kZWZhdWx0LnAoX3ZiLlZFbnVtMy5TSE9SVCkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudG1wR2V0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIHZhciBuO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgc3dpdGNoICgodGhpcy5yZXNldENEKCksIG8udHlwZSkpIHtcbiAgICAgICAgICAgIGNhc2UgX3BJbmZvLmdhbWVUeXBlLm5vcm1hbDpcbiAgICAgICAgICAgIGNhc2UgX3BJbmZvLmdhbWVUeXBlLmZyZWVkb206XG4gICAgICAgICAgICAgICAgaSA9IF9sZXZlbE1nci5kZWZhdWx0Lmlucy51cGRKaWdBbmRQb3A7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIF9wSW5mby5nYW1lVHlwZS5mZXN0aXZhbDpcbiAgICAgICAgICAgICAgICBpID0gX2xldmVsTWdyLmRlZmF1bHQuaW5zLnBvcEZlc3RpdmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvLnR5cGUgPT0gX3BJbmZvLmdhbWVUeXBlLmNoYWxsZW5nZSkge1xuICAgICAgICAgICAgaCA9IHQgPyB0aGlzLm11bHQgOiAxO1xuICAgICAgICAgICAgdmFyIHIgPSAobnVsbCA9PT1cbiAgICAgICAgICAgICAgICAobiA9IG51bGwgPT09IChlID0gX2NmZ01nci5kZWZhdWx0LnNlcnZlckNmZykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5kYWlseV9jaGFsbGVuZ2UpIHx8XG4gICAgICAgICAgICB2b2lkIDAgPT09IG5cbiAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgIDogbi5yZXdhcmQpIHx8IHt0aW1lczogNTAsIGNvaW46IDEwMCwgcHV6emxlX3BpZWNlczogMTB9O1xuICAgICAgICAgICAgby5jaGFsbGFnZURhdGEuZGF0ZS5pc0ZpbiAmJiAociA9IHt9KTtcbiAgICAgICAgICAgIHZhciBhID0gW107XG4gICAgICAgICAgICB2YXIgcyA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBjIGluIHIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IHJbY10gKiBoO1xuICAgICAgICAgICAgICAgIHZhciB1ID0gdGhpcy5yZXdJdGVtcy5jb250ZW50LmNoaWxkcmVuW3NdO1xuICAgICAgICAgICAgICAgIHZhciBwID0gdS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHUucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHZhciBkID0ge307XG4gICAgICAgICAgICAgICAgZC5pdGVtSWQgPSBjO1xuICAgICAgICAgICAgICAgIGQud29ybGRQb3MgPSBwO1xuICAgICAgICAgICAgICAgIGQudmFsdWUgPSBOdW1iZXIobCk7XG4gICAgICAgICAgICAgICAgYS5wdXNoKGQpO1xuICAgICAgICAgICAgICAgIF9iYWdNZ3IuZGVmYXVsdC5pbnMuYWRkSXRlbShjLCBsKTtcbiAgICAgICAgICAgICAgICBzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gX3BhbmVsTWdyLmRlZmF1bHQuaW5zLm9wZW4oXCJ1aS91aV9mbHlBbmlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhczogYSxcbiAgICAgICAgICAgICAgICAgICAgICBoaWRlQ2I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3BJbmZvLmNoZ1NjZW5lKF9wSW5mby5zY2VuZVR5cGUubWFpbiwge2NiOiBpfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF9wSW5mby5jaGdTY2VuZShfcEluZm8uc2NlbmVUeXBlLm1haW4sIHtjYjogaX0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmV3YXJkKSB7XG4gICAgICAgICAgICAvLyDwn5KdIOS8mOWFiOajgOafpeeOsOmHkeWlluWKse+8jOWmguaenOacieWwseWujOWFqOi3s+i/h+a4uOaIj+mBk+WFt+WlluWKsVxuICAgICAgICAgICAgaWYgKF9yZXdhcmRNZ3IuZGVmYXVsdC5oYXNQZW5kaW5nQ2FzaFJld2FyZCgpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn46vIOajgOa1i+WIsOeOsOmHkeWlluWKseW+heWkhOeQhu+8jOWujOWFqOi3s+i/h+a4uOaIj+mBk+WFt+WlluWKsemAu+i+ke+8jOebtOaOpei/lOWbnuS4u+eVjOmdolwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCBfcEluZm8uY2hnU2NlbmUoX3BJbmZvLnNjZW5lVHlwZS5tYWluLCB7Y2I6IGl9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g8J+SnSDml6DnjrDph5HlpZblirHml7bvvIzmiafooYzljp/mnInmuLjmiI/pgZPlhbflpZblirHpgLvovpFcbiAgICAgICAgICAgIGlmICghdCAmJiAxMCA9PSB0aGlzLm11bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS91aV9nZXRSZXdhcmRcIixcbiAgICAgICAgICAgICAgICAgICAge2dvbGQ6IHRoaXMucmV3YXJkICsgdGhpcy5iYXNlUmV3YXJkfSxcbiAgICAgICAgICAgICAgICAgICAge01hc2tOb0hpZGU6ICEwfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaCA9IHQgPyB0aGlzLm11bHQgOiAxO1xuICAgICAgICAgICAgdmFyIGYgPSBfcEluZm8uZGVmYXVsdC5pbnMuZ2V0Q29pbigpO1xuICAgICAgICAgICAgX3BJbmZvLmRlZmF1bHQuaW5zLmFkZENvaW4oKHRoaXMucmV3YXJkICsgdGhpcy5iYXNlUmV3YXJkKSAqIGgpO1xuICAgICAgICAgICAgdmFyIGc7XG4gICAgICAgICAgICBnID1cbiAgICAgICAgICAgICAgICBvLnR5cGUgIT09IF9wSW5mby5nYW1lVHlwZS5mZXN0aXZhbCB8fCBfZmVzdGl2YWxNZ3IuZGVmYXVsdC5pbnMuaXNKaWdzYXdNYXgoKVxuICAgICAgICAgICAgICAgICAgICA/IFwicHV6emxlX3BpZWNlc1wiXG4gICAgICAgICAgICAgICAgICAgIDogXCJuZXdZZWFyX3BpZWNlc1wiO1xuICAgICAgICAgICAgX2JhZ01nci5kZWZhdWx0Lmlucy5hZGRJdGVtKGcsIGgpO1xuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLmJhc2VSZXdhcmQgKiBoO1xuICAgICAgICAgICAgdmFyIG0gPSB0aGlzLnJld2FyZCAqIGg7XG4gICAgICAgICAgICB2YXIgdiA9IGg7XG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMucmV3MUxibC5ub2RlO1xuICAgICAgICAgICAgdmFyIGIgPSB0aGlzLnJldzJMYmwubm9kZTtcbiAgICAgICAgICAgIHZhciB3ID0gXy5wYXJlbnQ7XG4gICAgICAgICAgICB2YXIgUyA9IHRoaXMucmV3SXRlbXMuY29udGVudC5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIHZhciBUID0gdy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoXy5wb3NpdGlvbik7XG4gICAgICAgICAgICB2YXIgSSA9IHcuY29udmVydFRvV29ybGRTcGFjZUFSKGIucG9zaXRpb24pO1xuICAgICAgICAgICAgdmFyIEQgPSBTLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoUy5wb3NpdGlvbik7XG4gICAgICAgICAgICBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX2ZseUFuaVwiLCB7XG4gICAgICAgICAgICAgICAgaXRlbURhdGFzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtSWQ6IFwiY29pblwiLCB3b3JsZFBvczogVCwgdmFsdWU6IHl9LFxuICAgICAgICAgICAgICAgICAgICB7aXRlbUlkOiBcImNvaW5cIiwgd29ybGRQb3M6IEksIHZhbHVlOiBtfSxcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1JZDogZywgd29ybGRQb3M6IEQsIHZhbHVlOiB2fVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgaGlkZUNiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wSW5mby5jaGdTY2VuZShfcEluZm8uc2NlbmVUeXBlLm1haW4sIHtjYjogaX0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvd0NvaW46IGZcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgX3BJbmZvLmNoZ1NjZW5lKF9wSW5mby5zY2VuZVR5cGUubWFpbiwge2NiOiBpfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5PbkdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50bXBHZXQoITEpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuT25BZEdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50bXBHZXQoITApO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuT25OZXh0UHJhY2ljZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3BJbmZvLmNoZ1NjZW5lKF9wSW5mby5zY2VuZVR5cGUuZ2FtZSwge2dhbWVUeXBlOiBfcEluZm8uZ2FtZVR5cGUucHJhY3RpY2V9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZ0dyaWRJdGVtU2hpbmUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoMiA9PSB0aGlzLmN1ckl0ZW1JZHgpIHtcbiAgICAgICAgICAgIHZhciBlID0gby50eXBlID09IF9wSW5mby5nYW1lVHlwZS5yYWNlO1xuICAgICAgICAgICAgdGhpcy5ncmlkSGVhZENvbFZlYy5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvLmFsbFJpZ2h0IHx8IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBvLnNoaW5lQmc7XG4gICAgICAgICAgICAgICAgICAgIChuLmFjdGl2ZSA9IHQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2MudHdlZW4obikudG8oMC44LCB7b3BhY2l0eTogMH0pLnRvKDAuOCwge29wYWNpdHk6IDEwMH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZEhlYWRSb3dWZWMuZm9yRWFjaChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgIGlmICghby5hbGxSaWdodCB8fCBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gby5zaGluZUJnO1xuICAgICAgICAgICAgICAgICAgICBuLmFjdGl2ZSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIHRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY2MudHdlZW4obikudG8oMC44LCB7b3BhY2l0eTogMH0pLnRvKDAuOCwge29wYWNpdHk6IDEwMH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHRoaXMuZ3JpZHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucGxheUl0ZW1UaXAodCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9wZW5Mb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAwICE9IHRoaXMucmVsaWZlVGltZVxuICAgICAgICAgICAgPyBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcbiAgICAgICAgICAgICAgICAgIFwidWkvdWlfZ2V0SGVhcnRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lOiB0aGlzLnJlbGlmZVRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2I6IHRoaXMuZ2V0SGVhcnRDYi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQ2I6IHRoaXMuZ2V0SGVhcnRDbG9zZUNiLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgZ1R5cGU6IG8udHlwZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtNYXNrTm9IaWRlOiAhMH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiB0aGlzLmdldEhlYXJ0Q2xvc2VDYigpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0SGVhcnRDYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZWxpZmVUaW1lID4gMCAmJiB0aGlzLnJlbGlmZVRpbWUtLTtcbiAgICAgICAgdGhpcy5wbGF5QW5pKGYuZ2FtZVJlbGlmZSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRIZWFydENsb3NlQ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGUgPSBvLnR5cGUgPT09IF9wSW5mby5nYW1lVHlwZS5yYWNlID8gXCJ1aS91aV9yZVBsYXlSYWNlXCIgOiBcInVpL3VpX3JlUGxheVwiO1xuICAgICAgICAgICAgX3BhbmVsTWdyLmRlZmF1bHQuaW5zLm9wZW4oZSwge2N1clNjb3JlOiB0LnNjb3JlfSwge01hc2tOb0hpZGU6ICEwfSk7XG4gICAgICAgIH0sIDAuNSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkFwcEhpZGUgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVTY29yZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZvaWQgMCA9PT0gdCAmJiAodCA9IDEpO1xuICAgICAgICB2YXIgZSA9ICh0aGlzLnNjb3JlID0gdGhpcy5zY29yZSArIHQpO1xuICAgICAgICB0aGlzLnNjb3JlTGJsLnN0cmluZyA9IGUgKyBcIlwiO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheUdpcmxBbmkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0ICE9IHRoaXMuY3VyR2lybEFuaSAmJlxuICAgICAgICAgICAgby50eXBlICE9IF9wSW5mby5nYW1lVHlwZS5yYWNlICYmXG4gICAgICAgICAgICB0aGlzLnRvcEdpcmxTayAmJlxuICAgICAgICAgICAgKCh0aGlzLmN1ckdpcmxBbmkgPSB0KSxcbiAgICAgICAgICAgICh0aGlzLnRvcEdpcmxTay5hbmltYXRpb24gPSB0KSxcbiAgICAgICAgICAgICh0aGlzLnRvcEdpcmxTay5sb29wID0gdCA9PSBoLmlkbGUpICYmICh0aGlzLmN1ckdpcmxBbmkgPSBudWxsKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wbGF5R2lybEVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdXJHaXJsQW5pICE9IGguaWRsZSAmJiAoKHRoaXMuY3VyR2lybEFuaSA9IG51bGwpLCB0aGlzLnBsYXlHaXJsQW5pICYmIHRoaXMucGxheUdpcmxBbmkoaC5pZGxlKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5ldmVudERvdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmIChvLnR5cGUgPT0gX3BJbmZvLmdhbWVUeXBlLm5vcm1hbCkge1xuICAgICAgICAgICAgdmFyIGUgPSBfcEluZm8uZGVmYXVsdC5pbnMuZ2V0UHV6emxlTHZsKCkgKyBcIlwiO1xuICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5yZXBvcnRFdmVudChfaWR4LkVSZXBFdnQubWFpbmR1bmdlb24sIHtpc3dpbjogdCA/IFwi6IOc5YipXCIgOiBcIuWksei0pVwiLCBsZXZlbDogZX0pO1xuICAgICAgICB9IGVsc2UgaWYgKG8udHlwZSA9PSBfcEluZm8uZ2FtZVR5cGUucmFjZSkgX2lkeC5wbGF0Zm9ybS5yZXBvcnRFdmVudChfaWR4LkVSZXBFdnQucmFjZUVuZCwge3Njb3JlOiB0aGlzLnNjb3JlfSk7XG4gICAgICAgIGVsc2UgaWYgKG8udHlwZSA9PSBfcEluZm8uZ2FtZVR5cGUuZmVzdGl2YWwpIHtcbiAgICAgICAgICAgIHZhciBuID0gTnVtYmVyKF9mZXN0aXZhbE1nci5kZWZhdWx0Lmlucy5nZXRGZXNQdXp6bGVMdigpKTtcbiAgICAgICAgICAgIF9pZHgucGxhdGZvcm0ucmVwb3J0RXZlbnQoX2lkeC5FUmVwRXZ0LmZlc01haW5QdXp6bGUsIHtpc3dpbjogdCA/IFwi6IOc5YipXCIgOiBcIuWksei0pVwiLCBpZDogbn0pO1xuICAgICAgICB9IGVsc2UgaWYgKG8udHlwZSA9PSBfcEluZm8uZ2FtZVR5cGUuY2hhbGxlbmdlKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG8uY2hhbGxhZ2VEYXRhLmRhdGU7XG4gICAgICAgICAgICB2YXIgciA9IDFlNCAqIGkueWVhciArIDEwMCAqIGkubW9udGggKyBpLmRheTtcbiAgICAgICAgICAgIF9pZHgucGxhdGZvcm0ucmVwb3J0RXZlbnQoX2lkeC5FUmVwRXZ0LmRhaWx5Q2hhbGxlbmdlLCB7aXN3aW46IHQgPyBcIuiDnOWIqVwiIDogXCLlpLHotKVcIiwgdGltZTogcn0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkRlc3RvcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShcInJlc1Nwc1wiKTtcbiAgICAgICAgdC5yZWxlYXNlKFwiZ2FtZS9ub3JtYWwvdG9wXCIsIGNjLlNwcml0ZUZyYW1lKTtcbiAgICAgICAgdC5yZWxlYXNlKFwiZ2FtZS9yYWNlL3RvcFwiLCBjYy5TcHJpdGVGcmFtZSk7XG4gICAgICAgIHQucmVsZWFzZShcImdhbWUvcmFjZS9naXJsXCIsIGNjLlByZWZhYik7XG4gICAgICAgIHQucmVsZWFzZShcImdhbWUvcmFjZS9nb29zZVwiLCBjYy5QcmVmYWIpO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbRyhjYy5TcHJpdGUpXSwgZS5wcm90b3R5cGUsIFwidG9wU3BcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLlNwcml0ZSldLCBlLnByb3RvdHlwZSwgXCJkb3duU3BcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLlNwcml0ZSldLCBlLnByb3RvdHlwZSwgXCJncmlkQmdTcFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJ0b3BOb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImRvd25Ob2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5CaXRtYXBGb250KV0sIGUucHJvdG90eXBlLCBcImZvbnQ0XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5DYW1lcmEpXSwgZS5wcm90b3R5cGUsIFwiY2FtZXJhXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5BbmltYXRpb24pXSwgZS5wcm90b3R5cGUsIFwicGFuZWxBbmlcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLlNwcml0ZUZyYW1lKV0sIGUucHJvdG90eXBlLCBcInVIaW50U2ZcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLlNwcml0ZUZyYW1lKV0sIGUucHJvdG90eXBlLCBcImxIaW50U2ZcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLlByZWZhYildLCBlLnByb3RvdHlwZSwgXCJncmlkUHJlZmFiXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcIm1hcF9ub2RlX1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJ0aWxlc1BhcmVudFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJzZWxlY3RNYXNrXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcInNlbGVjdE1hc2tCZ1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJyb3dIaW50c1BhcmVudFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJjb2xIaW50c1BhcmVudFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwic2NvcmVMYmxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcInVzZVRpbWVMYmxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcImNvbnNMYmxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcImNvbnMyTGJsXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5MYWJlbCldLCBlLnByb3RvdHlwZSwgXCJjb25zQmVzdExibFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwicmV3MUxibFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwicmV3MkxibFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJ0aHJlZU5vZGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwidGVuTm9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuQW5pbWF0aW9uKV0sIGUucHJvdG90eXBlLCBcIm94VGFnQW5pXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5QcmVmYWIpXSwgZS5wcm90b3R5cGUsIFwiZmFkZVByZWZhYlwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJwYXRpY2VzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5QcmVmYWIpXSwgZS5wcm90b3R5cGUsIFwiaGVhcnRzUGF0aWNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKFtfaGVhcnQuZGVmYXVsdF0pXSwgZS5wcm90b3R5cGUsIFwiaGVhcnRzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImhlYXJ0SW5maW5pdHlcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwidGlwTm9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwidGlwTGFiZWxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLkFuaW1hdGlvbildLCBlLnByb3RvdHlwZSwgXCJ0aXBBbmlcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwid2luQW5pTm9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJ3aW5DaXJjbGVNYXNrXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcIndpblNwUGFyZW50XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcIndpblNwc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJ3aW5MaWdodFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuU3ByaXRlRnJhbWUpXSwgZS5wcm90b3R5cGUsIFwic2luZ2xlU2ZcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcImxldmVsTGJsXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImNsb2NrV2FyblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJub3JDbG9ja1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJzcGVDbG9ja1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwiY2xvY2tMYmxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcImNsb2NrTGJsMlwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJ0aXBBY3ROb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcInRpcFVuQWN0Tm9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJzaGFyZUJ0blwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuU3ByaXRlKV0sIGUucHJvdG90eXBlLCBcInNoYXJlSWNvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwic2hhcmVMYmxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcIm5vdGljZUxibFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuQW5pbWF0aW9uKV0sIGUucHJvdG90eXBlLCBcIm5vdGljZUFuaVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwicmFuZG9tX25vdGljZUxibFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuQW5pbWF0aW9uKV0sIGUucHJvdG90eXBlLCBcInJhbmRvbV9ub3RpY2VBbmlcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcImZ1bGxfcm93X2NvbExibFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuQW5pbWF0aW9uKV0sIGUucHJvdG90eXBlLCBcImZ1bGxfcm93X2NvbEFuaVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJpdGVtU2VsZWN0RWZmXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5TcHJpdGUpXSwgZS5wcm90b3R5cGUsIFwiaXRlbVNlbGVjdEljb25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcIml0ZW1TZWxlY3RMYmxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLkJ1dHRvbildLCBlLnByb3RvdHlwZSwgXCJhZEdldEJ0blwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0coY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwiZ2V0QnRuc3BcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLlNjcm9sbFZpZXcpXSwgZS5wcm90b3R5cGUsIFwicmV3SXRlbXNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtHKGNjLlByZWZhYildLCBlLnByb3RvdHlwZSwgXCJyZXdJdGVtUHJlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcInN0b3BQcmFOb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImhlYXJ0QmdOb2RlXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIChvID0gX19kZWNvcmF0ZShbSF0sIGUpKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBZO1xuIl19