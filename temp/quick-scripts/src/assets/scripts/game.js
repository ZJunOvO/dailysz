"use strict";
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