
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed1e6oh4MhAKYXj2NqhTJgo', 'pInfo');
// scripts/pInfo.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.chgScene = exports.challengeType = exports.gameType = exports.sceneType = exports.ROOT = void 0;
var r;

var _evts = require("evts");

var _idx = require("idx");

var _pConst = require("pConst");

var _time = require("time");

var _uData = require("uData");

var _cfgMgr = require("cfgMgr");

var _loadingAni = require("loadingAni");

var _global = require("global");

var _bagMgr = require("bagMgr");

var _jigsawMgr = require("jigsawMgr");

var _levelMgr = require("levelMgr");

var _rankMgr = require("rankMgr");

var _shopMgr = require("shopMgr");

var _ = (require("skinMgr"), require("game"));

exports.sceneType = {
  loading: "loading",
  main: "main",
  game: "game",
  guide: "guide"
};

(function (t) {
  t[t.normal = 0] = "normal", t[t.race = 1] = "race", t[t.challenge = 2] = "challenge", t[t.practice = 3] = "practice", t[t.festival = 4] = "festival", t[t.freedom = 5] = "freedom";
})(r = exports.gameType || (exports.gameType = {}));

(function (t) {
  t[t.worm = 1] = "worm", t[t.tree = 2] = "tree", t[t.ice = 3] = "ice";
})(exports.challengeType || (exports.challengeType = {}));

exports.chgScene = function (t, e) {
  var n;
  var i;
  var s;
  e && (n = e.cb, i = e.noAni, s = e.gameType);

  _evts["default"].opE.clear();

  var c = cc.director;
  exports.ROOT = t;
  t == exports.sceneType.game ? (s = _["default"].type = s || r.normal) == r.challenge && (_["default"].challageData = e.challengeData || {}) : (delete _["default"].type, delete _["default"].challageData, _levelMgr["default"].ins.clearPrcitceId());
  s == r.freedom && (_global["default"].freedomSize = e.freedomSize || 10);

  var l = function l() {
    null == n || n();
  };

  if (i) c.loadScene(t, l);else {
    var u = cc.assetManager.getBundle("prefab");
    u || c.loadScene(t, l);
    u.load("prefab/loadingAni", cc.Prefab, function (e, o) {
      var i;

      if (!e) {
        var r = cc.find("Canvas");

        if (r) {
          var a = cc.view.getVisibleSize();
          var s = a.width;
          var u = a.height;
          var p = new cc.Node("mask");
          p.setContentSize(s, u);
          p.addComponent(cc.BlockInputEvents);
          r.addChild(p);
          (i = cc.instantiate(o)).setPosition(s / 2, u / 2);
          r.parent.addChild(i);
          i.getComponent(_loadingAni["default"]).playTo(s, u, t, n);
          cc.game.addPersistRootNode(i);
        }
      }

      i ? c.preloadScene(t) : c.loadScene(t, l);
    });
  }
};

var b = function () {
  function t() {
    this.gameType = {
      nomal: "nomal"
    };
  }

  Object.defineProperty(t, "ins", {
    get: function get() {
      return this._ins || (this._ins = new w());
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.saveCoinData = function () {};

  return t;
}();

exports["default"] = b;

var w = function () {
  function t() {
    this.isOpenLock = !0;
    this.recordData = {
      main: {
        gTimes: 0,
        wTimes: 0,
        heWins: 0,
        tPoints: 0,
        hePoints: 0
      },
      daily: {
        gTimes: 0,
        wTimes: 0,
        heWins: 0,
        tPoints: 0,
        hePoints: 0,
        feTime: 0
      },
      race: {
        gTimes: 0,
        tPoints: 0,
        hePoints: 0,
        feTime: 0
      }
    };
    this.uploadData = {
      ttMScore: 0,
      ttDScore: 0,
      ttMWin: 0,
      ttDWin: 0,
      tdMScore: 0,
      tdDScore: 0,
      tdMWin: 0,
      tdDWin: 0,
      tdRScore: 0
    };
    this.usingSkin = {
      bg: 1,
      role: 1,
      headFrame: 1,
      nameFrame: 1
    };
  }

  t.prototype.getPerPowerNeedTime = function () {
    var t = _cfgMgr["default"].serverCfg.times.forUser;
    return (_uData["default"].ins.getIsNewUser() ? t.new_user.rules.one_time.val : t.all.rules.one_time.val) || 180;
  };

  t.prototype.getInitPower = function () {
    var t = _cfgMgr["default"].serverCfg.times.forUser;
    return (_uData["default"].ins.getIsNewUser() ? t.new_user.rules.int_times.val : t.all.rules.int_times.val) || 100;
  };

  t.prototype.getLevel = function () {
    var t = _uData["default"].ins.getLocalData().lvl;

    return null == t ? 1 : Number(t);
  };

  t.prototype.setLevel = function (t) {
    _uData["default"].ins.setLocalData({
      lvl: t
    });
  };

  t.prototype.finishLvl = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function () {
        return [2, {
          data: {
            lvl: this.getLevel() + 1
          }
        }];
      });
    });
  };

  t.prototype.getGuideDone = function () {
    return _uData["default"].ins.getLocalData().guideDone;
  };

  t.prototype.setGuideDone = function () {
    _uData["default"].ins.setLocalData({
      guideDone: 1
    });
  };

  t.prototype.getPuzzleLvl = function () {
    var t = _uData["default"].ins.getLocalData().puzzleLvl;

    var e = _global["default"].chapterCount;
    t > 54 * e && (t = 54 * e, _global["default"].levelDone = !0);
    return null == t ? 1 : Number(t);
  };

  t.prototype.setPuzzleLvl = function (t) {
    _uData["default"].ins.setLocalData({
      puzzleLvl: t
    });

    return _levelMgr["default"].ins.updateData();
  };

  t.prototype.finishPuzzleLvl = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      return __generator(this, function (e) {
        switch (e.label) {
          case 0:
            return t = this.getPuzzleLvl(), [4, this.setPuzzleLvl(t + 1)];

          case 1:
            return e.sent(), [2];
        }
      });
    });
  };

  t.prototype.getJisawLvl = function () {
    var t = _uData["default"].ins.getLocalData().jisawLvl;

    return null == t ? 1 : Number(t);
  };

  t.prototype.setJisawLvl = function (t) {
    _uData["default"].ins.setLocalData({
      jisawLvl: t
    });
  };

  t.prototype.finishJisawLvl = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function () {
        return [2, {
          data: {
            lvl: this.getJisawLvl() + 1
          }
        }];
      });
    });
  };

  t.prototype.getCoin = function () {
    var t = _uData["default"].ins.getLocalData().coin;

    return null == t ? 0 : Number(t);
  };

  t.prototype.addCoin = function (t, e) {
    if (void 0 === e && (e = !0), !isNaN(t)) {
      var o = this.getCoin() + t;
      o < 0 && (o = 0);
      this.setCoin(o);
      e && _evts["default"].opE.emit({
        action: _evts["default"].COIN_CHG
      });
    }
  };

  t.prototype.setCoin = function (t) {
    _uData["default"].ins.setLocalData({
      coin: t
    });
  };

  t.prototype.getlevel = function () {
    var t = _uData["default"].ins.getLocalData().level;

    return null == t ? 0 : Number(t);
  };

  t.prototype.addLevel = function (t) {
    if (void 0 === t && (t = 1), !isNaN(t)) {
      var e = this.getlevel() + t;
      e < 0 && (e = 0);

      _uData["default"].ins.setLocalData({
        level: e
      });

      _evts["default"].opE.emit({
        action: _evts["default"].LEV_CHG
      });
    }
  };

  t.prototype.addExp = function (t) {
    if (!isNaN(t)) {
      var e = this.getExp() + t;
      e < 0 && (e = 0);
      var o = this.getlevel();

      if (o * o * 20 < e) {
        for (var n = 0, i = 8; o * o * 20 < e && i > 0;) {
          n += 1, o += 1, i--;
        }

        this.addLevel(n);
      }

      _uData["default"].ins.setLocalData({
        exp: e
      });

      _evts["default"].opE.emit({
        action: _evts["default"].EXP_CHG
      });
    }
  };

  t.prototype.getExp = function () {
    var t = _uData["default"].ins.getLocalData().exp;

    return null == t ? 0 : Number(t);
  };

  t.prototype.getPower = function () {
    var t = _uData["default"].ins.getLocalData().power;

    return null == t ? this.getInitPower() : Number(t);
  };

  t.prototype.addPower = function (t, e) {
    if (void 0 === e && (e = !0), !isNaN(t)) {
      var o = this.getPower();
      var n = o + t;
      n < 0 && (n = 0);
      this.setPower(n);
      var i = this.getInitPower();

      if (n <= i) {
        var r = o - n;
        o >= i && (this.setPowerFullTime(0), r = i - n);
        this.updatePowerFullTime(r);
      } else o < i && this.updatePowerFullTime(o - i);

      e && _evts["default"].opE.emit({
        action: _evts["default"].POWER_CHG
      });
    }
  };

  t.prototype.setPower = function (t) {
    t != this.getPower() && (t < 0 && (t = 0), _uData["default"].ins.setLocalData({
      power: t
    }));
  };

  t.prototype.getPowerFullTime = function () {
    var t = _uData["default"].ins.getLocalData().powerFullTime;

    return null == t ? 0 : Number(t);
  };

  t.prototype.updatePowerFullTime = function (t) {
    var e = this.getPowerFullTime() || _time["default"].ins.serverTime;

    e += t * this.getPerPowerNeedTime();
    this.setPowerFullTime(e);
  };

  t.prototype.setPowerFullTime = function (t) {
    _uData["default"].ins.setLocalData({
      powerFullTime: t
    });
  };

  t.prototype.getTask = function (t) {
    var e = _uData["default"].ins.getLocalData()[t];

    null == e && (e = {});
    return e;
  };

  t.prototype.setTask = function (t, e) {
    var o;
    e && _uData["default"].ins.setLocalData(((o = {})[t] = e, o));
  };

  t.prototype.getItem = function () {
    var t = _uData["default"].ins.getLocalData().item;

    null == t && (t = {});
    return t;
  };

  t.prototype.recordGameResult = function (t, e, o, n, i) {
    var a;
    var l;

    if (t === r.normal) {
      var u = this.getRecordMainData();
      e ? (u.wTimes = Number(u.wTimes) + 1, this.winMainLevel(), u.heWins = u.heWins > this.getConsWinTimes() ? u.heWins : this.getConsWinTimes(), this.getLuckyState() || 0 == Number(u.wTimes) % 2 && this.setLuckState(!0)) : this.setConsWinTimes(0);
      u.tPoints = Number(u.tPoints) + o;
      u.hePoints = u.hePoints > o ? u.hePoints : o;
      this.setTodayMainScore(this.getTodayMainScore() + o);
      null != i && (null === (a = _idx.platform.setFriendRankData) || void 0 === a || a.call(_idx.platform, i, _pConst.SDKConfig.ttZoneId.normal));
    } else if (t === r.challenge) {
      var p = this.getRecordDailyData();
      e ? (p.wTimes = Number(p.wTimes) + 1, this.winDailyLevel(), p.heWins = p.heWins > this.getDailyWinTimes() ? p.heWins : this.getDailyWinTimes()) : this.setDailyWinTimes(0);
      p.tPoints = Number(p.tPoints) + o;
      p.hePoints = p.hePoints > o ? p.hePoints : o;
      n && (p.feTime = p.feTime < n ? p.feTime : n);
      this.setTodayDailyScore(this.getTodayDailyScore() + o);
    } else if (t === r.race) {
      var d = this.getRecordRaceData();
      d.tPoints = Number(d.tPoints) + o;
      d.hePoints = d.hePoints > o ? d.hePoints : o;
      null === (l = _idx.platform.setFriendRankData) || void 0 === l || l.call(_idx.platform, d.hePoints, _pConst.SDKConfig.ttZoneId.race);
      n && (d.feTime = d.feTime < n ? d.feTime : n);
      this.setTodayRaceScore(o);
    }

    this.setRecordData(this.getRecordData());
  };

  t.prototype.recordGameTimes = function (t) {
    var e;

    switch (t) {
      case r.normal:
        e = this.getRecordMainData();
        break;

      case r.challenge:
        e = this.getRecordDailyData();
        break;

      case r.race:
        e = this.getRecordRaceData();
    }

    e && (e.gTimes = Number(e.gTimes) + 1, this.setRecordData(this.getRecordData()));
  };

  t.prototype.getRecordData = function () {
    var t = _uData["default"].ins.getLocalData().recordData;

    return null == t ? this.recordData : t;
  };

  t.prototype.setRecordData = function (t) {
    _uData["default"].ins.setLocalData({
      recordData: t
    });
  };

  t.prototype.getRecordMainData = function () {
    return this.getRecordData().main;
  };

  t.prototype.getRecordDailyData = function () {
    return this.getRecordData().daily;
  };

  t.prototype.getRecordRaceData = function () {
    return this.getRecordData().race;
  };

  t.prototype.getConsWinTimes = function () {
    var t = _uData["default"].ins.getLocalData().mConsWTimes;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setConsWinTimes = function (t) {
    _uData["default"].ins.setLocalData({
      mConsWTimes: t
    });
  };

  t.prototype.winMainLevel = function () {
    var t = this.getConsWinTimes();
    this.setConsWinTimes(t + 1);
    var e = this.getTodayMainWin();
    this.setTodayMainWin(e + 1);
  };

  t.prototype.getDailyWinTimes = function () {
    var t = _uData["default"].ins.getLocalData().dConsWTimes;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setDailyWinTimes = function (t) {
    _uData["default"].ins.setLocalData({
      dConsWTimes: t
    });
  };

  t.prototype.winDailyLevel = function () {
    var t = this.getDailyWinTimes();
    this.setDailyWinTimes(t + 1);
    var e = this.getTodayDailyWin();
    this.setTodayDailyWin(e + 1);
  };

  t.prototype.getTodayMainScore = function () {
    var t = _uData["default"].ins.getLocalData().tdMScore;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setTodayMainScore = function (t) {
    _uData["default"].ins.setLocalData({
      tdMScore: t
    });
  };

  t.prototype.getTodayMainWin = function () {
    var t = _uData["default"].ins.getLocalData().tdMWin;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setTodayMainWin = function (t) {
    _uData["default"].ins.setLocalData({
      tdMWin: t
    });
  };

  t.prototype.getTodayDailyScore = function () {
    var t = _uData["default"].ins.getLocalData().tdDScore;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setTodayDailyScore = function (t) {
    _uData["default"].ins.setLocalData({
      tdDScore: t
    });
  };

  t.prototype.getTodayDailyWin = function () {
    var t = _uData["default"].ins.getLocalData().tdDWin;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setTodayDailyWin = function (t) {
    _uData["default"].ins.setLocalData({
      tdDWin: t
    });
  };

  t.prototype.getTodayRaceScore = function () {
    var t = _uData["default"].ins.getLocalData().tdRScore;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setTodayRaceScore = function (t) {
    t > this.getTodayRaceScore() && (_uData["default"].ins.setLocalData({
      tdRScore: t
    }), _rankMgr["default"].ins.uploadRaceData());
  };

  t.prototype.chgTodayRaceScore = function (t) {
    _uData["default"].ins.setLocalData({
      tdRScore: t
    });
  };

  t.prototype.getYdayRaceScore = function () {
    var t = _uData["default"].ins.getLocalData().ydRScore;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setYdayRaceScore = function (t) {
    _uData["default"].ins.setLocalData({
      ydRScore: t
    });
  };

  t.prototype.clearDailyData = function () {
    this.setYdayRaceScore(this.getTodayRaceScore());
    this.clearDayUpLoad();
    this.setTodayMainScore(0);
    this.setTodayMainWin(0);
    this.setTodayDailyScore(0);
    this.setTodayDailyWin(0);
    this.chgTodayRaceScore(0);
    this.setTicketAdTimes(0);
    this.setYdayRaceRankData([]);

    _rankMgr["default"].ins.setYdayRaceRankData([]);

    this.setShareNames([]);
    this.setIsGetSlider(!1);
    this.setFirstRaceTip(!1);
    this.setNormalShareTime(0);
    this.setRaceShareTime(0);
    this.setJigsawAdTimes(0);
    this.setNewJigAdTimes(0);
    this.setAdCount(0);
    this.setShareCount(0);
    this.setShopRecord({});

    _shopMgr["default"].ins.setPackRed({});

    _shopMgr["default"].ins.setTabsRed({});
  };

  t.prototype.getLuckTimes = function () {
    var t = _uData["default"].ins.getLocalData().luckyTimes;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setLuckyTimes = function (t) {
    _uData["default"].ins.setLocalData({
      luckyTimes: t
    });
  };

  t.prototype.addLuckyTimes = function () {
    var t = this.getLuckTimes();
    t = (t += 1) > 10 ? 1 : t;
    this.setLuckyTimes(t);
    this.setLuckState(!1);
  };

  t.prototype.getLuckyState = function () {
    var t = _uData["default"].ins.getLocalData().luckyState;

    return null != t && t;
  };

  t.prototype.setLuckState = function (t) {
    _uData["default"].ins.setLocalData({
      luckyState: t
    });
  };

  t.prototype.getPowerAdTimes = function () {
    var t = _uData["default"].ins.getLocalData().powerAdTimes;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setPowerAdTimes = function (t) {
    _uData["default"].ins.setLocalData({
      powerAdTimes: t
    });
  };

  t.prototype.addPowerAdTimes = function () {
    var t = this.getPowerAdTimes();
    t = (t += 1) > 1 ? 0 : t;
    this.setPowerAdTimes(t);
  };

  t.prototype.getCoinAdTimes = function () {
    var t = _uData["default"].ins.getLocalData().coinAdTimes;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setCoinAdTimes = function (t) {
    _uData["default"].ins.setLocalData({
      coinAdTimes: t
    });
  };

  t.prototype.addCoinAdTimes = function () {
    var t = this.getCoinAdTimes();
    t = (t += 1) > 2 ? 0 : t;
    this.setCoinAdTimes(t);
  };

  t.prototype.getTicketAdTimes = function () {
    var t = _uData["default"].ins.getLocalData().ticketAdTimes;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setTicketAdTimes = function (t) {
    _uData["default"].ins.setLocalData({
      ticketAdTimes: t
    });
  };

  t.prototype.addTicketAdTimes = function () {
    var t = this.getTicketAdTimes();
    this.setTicketAdTimes(t + 1);
  };

  t.prototype.getLastUploadRankData = function () {
    var t = _uData["default"].ins.getLocalData().lastUploadRank;

    return null == t ? this.uploadData : t;
  };

  t.prototype.setLastUploadRankData = function (t) {
    _uData["default"].ins.setLocalData({
      lastUploadRank: t
    });
  };

  t.prototype.clearDayUpLoad = function () {
    var t = this.getLastUploadRankData();
    t.tdMScore = 0;
    t.tdDScore = 0;
    t.tdMWin = 0;
    t.tdDWin = 0;
    t.tdRScore = 0;
    this.setLastUploadRankData(t);
  };

  t.prototype.setYdayRaceRankData = function (t) {
    _uData["default"].ins.setLocalData({
      ydayRRData: t
    });
  };

  t.prototype.getRankLastTimeData = function () {
    var t = _uData["default"].ins.getLocalData().rLastTime;

    return null == t ? 0 : t;
  };

  t.prototype.setRankLastTimeData = function (t) {
    _uData["default"].ins.setLocalData({
      rLastTime: t
    });
  };

  t.prototype.getIsGetSlider = function () {
    var t = _uData["default"].ins.getLocalData().isSlider;

    return null != t && t;
  };

  t.prototype.setIsGetSlider = function (t) {
    _uData["default"].ins.setLocalData({
      isSlider: t
    });
  };

  t.prototype.getAliAddHome = function () {
    var t = _uData["default"].ins.getLocalData().aliAddHome;

    return null == t ? -1 : t;
  };

  t.prototype.setAliAddHome = function (t) {
    _uData["default"].ins.setLocalData({
      aliAddHome: t
    });
  };

  t.prototype.getIsFirstRaceTip = function () {
    var t = _uData["default"].ins.getLocalData().isRaceTip;

    return null != t && t;
  };

  t.prototype.setFirstRaceTip = function (t) {
    _uData["default"].ins.setLocalData({
      isRaceTip: t
    });
  };

  t.prototype.getNormalShareTime = function () {
    var t = _uData["default"].ins.getLocalData().norShareT;

    return null == t ? 0 : t;
  };

  t.prototype.setNormalShareTime = function (t) {
    _uData["default"].ins.setLocalData({
      norShareT: t
    });
  };

  t.prototype.getRaceShareTime = function () {
    var t = _uData["default"].ins.getLocalData().raceShareT;

    return null == t ? 0 : t;
  };

  t.prototype.setRaceShareTime = function (t) {
    _uData["default"].ins.setLocalData({
      raceShareT: t
    });
  };

  t.prototype.getJigsawAdTimes = function () {
    var t = _uData["default"].ins.getLocalData().jigsawAdTimes;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setJigsawAdTimes = function (t) {
    _uData["default"].ins.setLocalData({
      jigsawAdTimes: t
    });
  };

  t.prototype.addJigsawAdTimes = function () {
    var t = this.getJigsawAdTimes();
    this.setJigsawAdTimes(t + 1);
  };

  t.prototype.getNewJigAdTimes = function () {
    var t = _uData["default"].ins.getLocalData().newJigAdTimes;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setNewJigAdTimes = function (t) {
    _uData["default"].ins.setLocalData({
      newJigAdTimes: t
    });
  };

  t.prototype.addNewJigAdTimes = function () {
    var t = this.getNewJigAdTimes();
    this.setNewJigAdTimes(t + 1);
  };

  t.prototype.getAdCount = function () {
    var t = _uData["default"].ins.getLocalData().adCount;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setAdCount = function (t) {
    _uData["default"].ins.setLocalData({
      adCount: t
    });
  };

  t.prototype.addAdCount = function () {
    var t = this.getAdCount();
    this.setAdCount(t + 1);
    this.isMaxAdCount() && (_idx.platform.reportEvent(_idx.ERepEvt.adMax), _evts["default"].opE.emit({
      action: _evts["default"].AD_MAX
    }));
  };

  t.prototype.isMaxAdCount = function () {
    return void 0 !== _cfgMgr["default"].serverCfg.daily_max_ad_times.val && this.getAdCount() >= _cfgMgr["default"].serverCfg.daily_max_ad_times.val;
  };

  t.prototype.getShareCount = function () {
    var t = _uData["default"].ins.getLocalData().shareCount;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setShareCount = function (t) {
    _uData["default"].ins.setLocalData({
      shareCount: t
    });
  };

  t.prototype.addShareCount = function () {
    var t = this.getShareCount();
    this.setShareCount(t + 1);
  };

  t.prototype.isMaxShareCount = function () {
    var t;
    var e = null !== (t = _cfgMgr["default"].serverCfg.daily_max_ad_times.share_times_limit) && void 0 !== t ? t : 5;
    return this.getShareCount() >= e;
  };

  t.prototype.getJigsawBgEndTimesByIdx = function (t) {
    return this.getJigsawBgEndTimes()[t] || 0;
  };

  t.prototype.setJigsawBgEndTimesByIdx = function (t, e) {
    var o = this.getJigsawBgEndTimes();
    o[t] = e;
    this.setJigsawBgEndTimes(o);
  };

  t.prototype.getJigsawBgEndTimes = function () {
    var t = _uData["default"].ins.getLocalData().jigEndTimes;

    return null == t ? [] : t;
  };

  t.prototype.setJigsawBgEndTimes = function (t) {
    _uData["default"].ins.setLocalData({
      jigEndTimes: t
    });
  };

  t.prototype.getNewJigBgEndTimesByIdx = function (t) {
    return this.getNewJigBgEndTimes()[t] || 0;
  };

  t.prototype.setNewJigBgEndTimesByIdx = function (t, e) {
    var o = this.getNewJigBgEndTimes();
    o[t] = e;
    this.setNewJigBgEndTimes(o);
  };

  t.prototype.getNewJigBgEndTimes = function () {
    var t = _uData["default"].ins.getLocalData().newJigEndTimes;

    return null == t ? [] : t;
  };

  t.prototype.setNewJigBgEndTimes = function (t) {
    _uData["default"].ins.setLocalData({
      newJigEndTimes: t
    });
  };

  t.prototype.getIsClearJigsawData = function () {
    var t = _uData["default"].ins.getLocalData().isClearJig1;

    return null == t || t;
  };

  t.prototype.setIsClearJigsawData = function (t) {
    _uData["default"].ins.setLocalData({
      isClearJig1: t
    });
  };

  t.prototype.getIsCheckdLock = function () {
    var t = _uData["default"].ins.getLocalData().isCheckdLock;

    return null != t && t;
  };

  t.prototype.setIsCheckdLock = function (t) {
    _uData["default"].ins.setLocalData({
      isCheckdLock: t
    });
  };

  t.prototype.getIsOpenLocked = function () {
    var t = _uData["default"].ins.getLocalData().localIsOpen;

    return null == t || t;
  };

  t.prototype.setIsOpenLocked = function (t) {
    _uData["default"].ins.setLocalData({
      localIsOpen: t
    });
  };

  t.prototype.checkIsOpenLock = function () {
    if (this.isOpenLock = this.getIsOpenLocked(), !this.getIsCheckdLock()) {
      var t = this.getPuzzleLvl();

      var e = _bagMgr["default"].ins.getItemCount("puzzle_pieces");

      var o = _jigsawMgr["default"].ins.getUnPlacedNum();

      (t > 1 || e != o) && (this.isOpenLock = !1, this.setIsOpenLocked(!1));
      this.setIsCheckdLock(!0);
    }
  };

  t.prototype.isMianLocked = function () {
    var t;
    var e;
    var o;
    if (this.checkIsOpenLock(), !this.isOpenLock) return !1;
    if (this.getPuzzleLvl() < 55) return !1;
    var n = JSON.parse(JSON.stringify(b.ins.getRecordData())).race.hePoints;
    var i = (null === (o = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.lock_rules) || void 0 === e ? void 0 : e.main_line_lock) || void 0 === o ? void 0 : o.main_line_val) || 0;
    return Number(n) < Number(i);
  };

  t.prototype.isJigsawLocked = function () {
    var t;
    var e;
    var o;
    if (this.checkIsOpenLock(), !this.isOpenLock) return !1;
    var n = JSON.parse(JSON.stringify(b.ins.getRecordData())).race.hePoints;
    var i = (null === (o = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.lock_rules) || void 0 === e ? void 0 : e.main_line_lock) || void 0 === o ? void 0 : o.puzzle_line_val) || 0;
    return Number(n) < Number(i);
  };

  t.prototype.getIsGetNewGift = function () {
    var t = _uData["default"].ins.getLocalData().isGetNewGift;

    return null != t && t;
  };

  t.prototype.setIsGetNewGif = function (t) {
    _uData["default"].ins.setLocalData({
      isGetNewGift: t
    });
  };

  t.prototype.getHasFinJig = function () {
    var t = _uData["default"].ins.getLocalData().hasFinJig;

    return null == t ? {} : t;
  };

  t.prototype.setHasFinJig = function (t) {
    _uData["default"].ins.setLocalData({
      hasFinJig: t
    });

    _uData["default"].ins._setLocalAndCloudData();
  };

  t.prototype.getHasFinFesJig = function () {
    var t = _uData["default"].ins.getLocalData().hasFinFesJig;

    return null == t ? {} : t;
  };

  t.prototype.setHasFinFesJig = function (t) {
    _uData["default"].ins.setLocalData({
      hasFinFesJig: t
    });

    _uData["default"].ins._setLocalAndCloudData();
  };

  t.prototype.getFesName = function () {
    var t = _uData["default"].ins.getLocalData().fesName;

    return null == t ? "" : t;
  };

  t.prototype.setFesName = function (t) {
    _uData["default"].ins.setLocalData({
      fesName: t
    });
  };

  t.prototype.getFesPro = function () {
    var t = _uData["default"].ins.getLocalData().fesPro;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setFesPro = function (t) {
    _uData["default"].ins.setLocalData({
      fesPro: t
    });
  };

  t.prototype.getFesTaskPro = function () {
    var t = _uData["default"].ins.getLocalData().fesTaskPro;

    return null == t ? 0 : Number(t);
  };

  t.prototype.setFesTaskPro = function (t) {
    _uData["default"].ins.setLocalData({
      fesTaskPro: t
    });
  };

  t.prototype.getFesPuzzleLv = function () {
    var t = _uData["default"].ins.getLocalData().fesPuzzleLv;

    return null == t ? 1 : Number(t);
  };

  t.prototype.setFesPuzzleLv = function (t) {
    _uData["default"].ins.setLocalData({
      fesPuzzleLv: t
    });
  };

  t.prototype.getShareNames = function () {
    var t = _uData["default"].ins.getLocalData().sNames;

    return null == t ? [] : t;
  };

  t.prototype.setShareNames = function (t) {
    _uData["default"].ins.setLocalData({
      sNames: t
    });
  };

  t.prototype.getChallengeData = function () {
    var t = _uData["default"].ins.getLocalData().chaData;

    return null == t ? [] : t;
  };

  t.prototype.setChallengeData = function (t) {
    _uData["default"].ins.setLocalData({
      chaData: t
    });
  };

  t.prototype.getChallengePackData = function () {
    var t = _uData["default"].ins.getLocalData().chaPackData;

    return null == t ? [] : t;
  };

  t.prototype.setChallengePackData = function (t) {
    _uData["default"].ins.setLocalData({
      chaPackData: t
    });
  };

  t.prototype.getAddDesk = function () {
    var t = _uData["default"].ins.getLocalData().addDesk;

    return null != t && t;
  };

  t.prototype.setAddDesk = function (t) {
    _uData["default"].ins.setLocalData({
      addDesk: t
    });
  };

  t.prototype.getJigTiles = function () {
    var t = _uData["default"].ins.getLocalData().jigTiles;

    return null == t ? [-1, ""] : t;
  };

  t.prototype.setJigTiles = function (t) {
    _uData["default"].ins.setLocalData({
      jigTiles: t
    }, 15);
  };

  t.prototype.addSevenDays = function () {
    var t = this.getSevenDays();
    var e = Math.min(7, t + 1);
    this.setSevenDays(e);
  };

  t.prototype.getSevenDays = function () {
    var t = _uData["default"].ins.getLocalData().sevenLogin;

    return null == t ? 0 : t;
  };

  t.prototype.setSevenDays = function (t) {
    _uData["default"].ins.setLocalData({
      sevenLogin: t
    });
  };

  t.prototype.getSevenReward = function () {
    var t = _uData["default"].ins.getLocalData().sevenReward;

    return null == t ? 0 : t;
  };

  t.prototype.setSevenReward = function (t) {
    _uData["default"].ins.setLocalData({
      sevenReward: t
    });
  };

  t.prototype.addShopRecord = function (t) {
    var e = this.getShopRecord();
    e[t] ? e[t] += 1 : e[t] = 1;
    this.setShopRecord(e);
  };

  t.prototype.getShopRecord = function () {
    var t = _uData["default"].ins.getLocalData().shopRecord;

    return null == t ? {} : t;
  };

  t.prototype.setShopRecord = function (t) {
    _uData["default"].ins.setLocalData({
      shopRecord: t
    });
  };

  t.prototype.addShopUnreset = function (t) {
    var e = this.getShopUnreset();
    e[t] ? e[t] += 1 : e[t] = 1;
    this.setShopUnreset(e);
  };

  t.prototype.getShopUnreset = function () {
    var t = _uData["default"].ins.getLocalData().shopReUn;

    return null == t ? {} : t;
  };

  t.prototype.setShopUnreset = function (t) {
    _uData["default"].ins.setLocalData({
      shopReUn: t
    });
  };

  Object.defineProperty(t.prototype, "Bag", {
    get: function get() {
      var t = _uData["default"].ins.getLocalData().bag;

      null == t && (t = {});
      return t;
    },
    set: function set(t) {
      t && _uData["default"].ins.setLocalData({
        bag: t
      });
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "Mail", {
    get: function get() {
      var t = _uData["default"].ins.getLocalData().mail;

      null == t && (t = {});
      return t;
    },
    set: function set(t) {
      t && _uData["default"].ins.setLocalData({
        mail: t
      });
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "mySkin", {
    get: function get() {
      this._mySkin || (this._mySkin = {
        bg: [1],
        role: [1],
        headFrame: [1],
        nameFrame: [1]
      });
      return this._mySkin;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.getUsingSkin = function () {
    return this.usingSkin;
  };

  t.prototype.setUsingSkin = function () {};

  t.prototype.getMySkin = function () {};

  t.prototype.addMySkin = function () {};

  t.prototype.getSkinAdPro = function () {};

  t.prototype.addSkinAdPro = function () {};

  return t;
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccEluZm8uanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJjaGdTY2VuZSIsImNoYWxsZW5nZVR5cGUiLCJnYW1lVHlwZSIsInNjZW5lVHlwZSIsIlJPT1QiLCJyIiwiX2V2dHMiLCJyZXF1aXJlIiwiX2lkeCIsIl9wQ29uc3QiLCJfdGltZSIsIl91RGF0YSIsIl9jZmdNZ3IiLCJfbG9hZGluZ0FuaSIsIl9nbG9iYWwiLCJfYmFnTWdyIiwiX2ppZ3Nhd01nciIsIl9sZXZlbE1nciIsIl9yYW5rTWdyIiwiX3Nob3BNZ3IiLCJfIiwibG9hZGluZyIsIm1haW4iLCJnYW1lIiwiZ3VpZGUiLCJ0Iiwibm9ybWFsIiwicmFjZSIsImNoYWxsZW5nZSIsInByYWN0aWNlIiwiZmVzdGl2YWwiLCJmcmVlZG9tIiwid29ybSIsInRyZWUiLCJpY2UiLCJlIiwibiIsImkiLCJzIiwiY2IiLCJub0FuaSIsIm9wRSIsImNsZWFyIiwiYyIsImNjIiwiZGlyZWN0b3IiLCJ0eXBlIiwiY2hhbGxhZ2VEYXRhIiwiY2hhbGxlbmdlRGF0YSIsImlucyIsImNsZWFyUHJjaXRjZUlkIiwiZnJlZWRvbVNpemUiLCJsIiwibG9hZFNjZW5lIiwidSIsImFzc2V0TWFuYWdlciIsImdldEJ1bmRsZSIsImxvYWQiLCJQcmVmYWIiLCJvIiwiZmluZCIsImEiLCJ2aWV3IiwiZ2V0VmlzaWJsZVNpemUiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJOb2RlIiwic2V0Q29udGVudFNpemUiLCJhZGRDb21wb25lbnQiLCJCbG9ja0lucHV0RXZlbnRzIiwiYWRkQ2hpbGQiLCJpbnN0YW50aWF0ZSIsInNldFBvc2l0aW9uIiwicGFyZW50IiwiZ2V0Q29tcG9uZW50IiwicGxheVRvIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwicHJlbG9hZFNjZW5lIiwiYiIsIm5vbWFsIiwiZ2V0IiwiX2lucyIsInciLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHJvdG90eXBlIiwic2F2ZUNvaW5EYXRhIiwiaXNPcGVuTG9jayIsInJlY29yZERhdGEiLCJnVGltZXMiLCJ3VGltZXMiLCJoZVdpbnMiLCJ0UG9pbnRzIiwiaGVQb2ludHMiLCJkYWlseSIsImZlVGltZSIsInVwbG9hZERhdGEiLCJ0dE1TY29yZSIsInR0RFNjb3JlIiwidHRNV2luIiwidHREV2luIiwidGRNU2NvcmUiLCJ0ZERTY29yZSIsInRkTVdpbiIsInRkRFdpbiIsInRkUlNjb3JlIiwidXNpbmdTa2luIiwiYmciLCJyb2xlIiwiaGVhZEZyYW1lIiwibmFtZUZyYW1lIiwiZ2V0UGVyUG93ZXJOZWVkVGltZSIsInNlcnZlckNmZyIsInRpbWVzIiwiZm9yVXNlciIsImdldElzTmV3VXNlciIsIm5ld191c2VyIiwicnVsZXMiLCJvbmVfdGltZSIsInZhbCIsImFsbCIsImdldEluaXRQb3dlciIsImludF90aW1lcyIsImdldExldmVsIiwiZ2V0TG9jYWxEYXRhIiwibHZsIiwiTnVtYmVyIiwic2V0TGV2ZWwiLCJzZXRMb2NhbERhdGEiLCJmaW5pc2hMdmwiLCJfX2F3YWl0ZXIiLCJfX2dlbmVyYXRvciIsImRhdGEiLCJnZXRHdWlkZURvbmUiLCJndWlkZURvbmUiLCJzZXRHdWlkZURvbmUiLCJnZXRQdXp6bGVMdmwiLCJwdXp6bGVMdmwiLCJjaGFwdGVyQ291bnQiLCJsZXZlbERvbmUiLCJzZXRQdXp6bGVMdmwiLCJ1cGRhdGVEYXRhIiwiZmluaXNoUHV6emxlTHZsIiwibGFiZWwiLCJzZW50IiwiZ2V0SmlzYXdMdmwiLCJqaXNhd0x2bCIsInNldEppc2F3THZsIiwiZmluaXNoSmlzYXdMdmwiLCJnZXRDb2luIiwiY29pbiIsImFkZENvaW4iLCJpc05hTiIsInNldENvaW4iLCJlbWl0IiwiYWN0aW9uIiwiQ09JTl9DSEciLCJnZXRsZXZlbCIsImxldmVsIiwiYWRkTGV2ZWwiLCJMRVZfQ0hHIiwiYWRkRXhwIiwiZ2V0RXhwIiwiZXhwIiwiRVhQX0NIRyIsImdldFBvd2VyIiwicG93ZXIiLCJhZGRQb3dlciIsInNldFBvd2VyIiwic2V0UG93ZXJGdWxsVGltZSIsInVwZGF0ZVBvd2VyRnVsbFRpbWUiLCJQT1dFUl9DSEciLCJnZXRQb3dlckZ1bGxUaW1lIiwicG93ZXJGdWxsVGltZSIsInNlcnZlclRpbWUiLCJnZXRUYXNrIiwic2V0VGFzayIsImdldEl0ZW0iLCJpdGVtIiwicmVjb3JkR2FtZVJlc3VsdCIsImdldFJlY29yZE1haW5EYXRhIiwid2luTWFpbkxldmVsIiwiZ2V0Q29uc1dpblRpbWVzIiwiZ2V0THVja3lTdGF0ZSIsInNldEx1Y2tTdGF0ZSIsInNldENvbnNXaW5UaW1lcyIsInNldFRvZGF5TWFpblNjb3JlIiwiZ2V0VG9kYXlNYWluU2NvcmUiLCJwbGF0Zm9ybSIsInNldEZyaWVuZFJhbmtEYXRhIiwiY2FsbCIsIlNES0NvbmZpZyIsInR0Wm9uZUlkIiwiZ2V0UmVjb3JkRGFpbHlEYXRhIiwid2luRGFpbHlMZXZlbCIsImdldERhaWx5V2luVGltZXMiLCJzZXREYWlseVdpblRpbWVzIiwic2V0VG9kYXlEYWlseVNjb3JlIiwiZ2V0VG9kYXlEYWlseVNjb3JlIiwiZCIsImdldFJlY29yZFJhY2VEYXRhIiwic2V0VG9kYXlSYWNlU2NvcmUiLCJzZXRSZWNvcmREYXRhIiwiZ2V0UmVjb3JkRGF0YSIsInJlY29yZEdhbWVUaW1lcyIsIm1Db25zV1RpbWVzIiwiZ2V0VG9kYXlNYWluV2luIiwic2V0VG9kYXlNYWluV2luIiwiZENvbnNXVGltZXMiLCJnZXRUb2RheURhaWx5V2luIiwic2V0VG9kYXlEYWlseVdpbiIsImdldFRvZGF5UmFjZVNjb3JlIiwidXBsb2FkUmFjZURhdGEiLCJjaGdUb2RheVJhY2VTY29yZSIsImdldFlkYXlSYWNlU2NvcmUiLCJ5ZFJTY29yZSIsInNldFlkYXlSYWNlU2NvcmUiLCJjbGVhckRhaWx5RGF0YSIsImNsZWFyRGF5VXBMb2FkIiwic2V0VGlja2V0QWRUaW1lcyIsInNldFlkYXlSYWNlUmFua0RhdGEiLCJzZXRTaGFyZU5hbWVzIiwic2V0SXNHZXRTbGlkZXIiLCJzZXRGaXJzdFJhY2VUaXAiLCJzZXROb3JtYWxTaGFyZVRpbWUiLCJzZXRSYWNlU2hhcmVUaW1lIiwic2V0Smlnc2F3QWRUaW1lcyIsInNldE5ld0ppZ0FkVGltZXMiLCJzZXRBZENvdW50Iiwic2V0U2hhcmVDb3VudCIsInNldFNob3BSZWNvcmQiLCJzZXRQYWNrUmVkIiwic2V0VGFic1JlZCIsImdldEx1Y2tUaW1lcyIsImx1Y2t5VGltZXMiLCJzZXRMdWNreVRpbWVzIiwiYWRkTHVja3lUaW1lcyIsImx1Y2t5U3RhdGUiLCJnZXRQb3dlckFkVGltZXMiLCJwb3dlckFkVGltZXMiLCJzZXRQb3dlckFkVGltZXMiLCJhZGRQb3dlckFkVGltZXMiLCJnZXRDb2luQWRUaW1lcyIsImNvaW5BZFRpbWVzIiwic2V0Q29pbkFkVGltZXMiLCJhZGRDb2luQWRUaW1lcyIsImdldFRpY2tldEFkVGltZXMiLCJ0aWNrZXRBZFRpbWVzIiwiYWRkVGlja2V0QWRUaW1lcyIsImdldExhc3RVcGxvYWRSYW5rRGF0YSIsImxhc3RVcGxvYWRSYW5rIiwic2V0TGFzdFVwbG9hZFJhbmtEYXRhIiwieWRheVJSRGF0YSIsImdldFJhbmtMYXN0VGltZURhdGEiLCJyTGFzdFRpbWUiLCJzZXRSYW5rTGFzdFRpbWVEYXRhIiwiZ2V0SXNHZXRTbGlkZXIiLCJpc1NsaWRlciIsImdldEFsaUFkZEhvbWUiLCJhbGlBZGRIb21lIiwic2V0QWxpQWRkSG9tZSIsImdldElzRmlyc3RSYWNlVGlwIiwiaXNSYWNlVGlwIiwiZ2V0Tm9ybWFsU2hhcmVUaW1lIiwibm9yU2hhcmVUIiwiZ2V0UmFjZVNoYXJlVGltZSIsInJhY2VTaGFyZVQiLCJnZXRKaWdzYXdBZFRpbWVzIiwiamlnc2F3QWRUaW1lcyIsImFkZEppZ3Nhd0FkVGltZXMiLCJnZXROZXdKaWdBZFRpbWVzIiwibmV3SmlnQWRUaW1lcyIsImFkZE5ld0ppZ0FkVGltZXMiLCJnZXRBZENvdW50IiwiYWRDb3VudCIsImFkZEFkQ291bnQiLCJpc01heEFkQ291bnQiLCJyZXBvcnRFdmVudCIsIkVSZXBFdnQiLCJhZE1heCIsIkFEX01BWCIsImRhaWx5X21heF9hZF90aW1lcyIsImdldFNoYXJlQ291bnQiLCJzaGFyZUNvdW50IiwiYWRkU2hhcmVDb3VudCIsImlzTWF4U2hhcmVDb3VudCIsInNoYXJlX3RpbWVzX2xpbWl0IiwiZ2V0Smlnc2F3QmdFbmRUaW1lc0J5SWR4IiwiZ2V0Smlnc2F3QmdFbmRUaW1lcyIsInNldEppZ3Nhd0JnRW5kVGltZXNCeUlkeCIsInNldEppZ3Nhd0JnRW5kVGltZXMiLCJqaWdFbmRUaW1lcyIsImdldE5ld0ppZ0JnRW5kVGltZXNCeUlkeCIsImdldE5ld0ppZ0JnRW5kVGltZXMiLCJzZXROZXdKaWdCZ0VuZFRpbWVzQnlJZHgiLCJzZXROZXdKaWdCZ0VuZFRpbWVzIiwibmV3SmlnRW5kVGltZXMiLCJnZXRJc0NsZWFySmlnc2F3RGF0YSIsImlzQ2xlYXJKaWcxIiwic2V0SXNDbGVhckppZ3Nhd0RhdGEiLCJnZXRJc0NoZWNrZExvY2siLCJpc0NoZWNrZExvY2siLCJzZXRJc0NoZWNrZExvY2siLCJnZXRJc09wZW5Mb2NrZWQiLCJsb2NhbElzT3BlbiIsInNldElzT3BlbkxvY2tlZCIsImNoZWNrSXNPcGVuTG9jayIsImdldEl0ZW1Db3VudCIsImdldFVuUGxhY2VkTnVtIiwiaXNNaWFuTG9ja2VkIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibG9ja19ydWxlcyIsIm1haW5fbGluZV9sb2NrIiwibWFpbl9saW5lX3ZhbCIsImlzSmlnc2F3TG9ja2VkIiwicHV6emxlX2xpbmVfdmFsIiwiZ2V0SXNHZXROZXdHaWZ0IiwiaXNHZXROZXdHaWZ0Iiwic2V0SXNHZXROZXdHaWYiLCJnZXRIYXNGaW5KaWciLCJoYXNGaW5KaWciLCJzZXRIYXNGaW5KaWciLCJfc2V0TG9jYWxBbmRDbG91ZERhdGEiLCJnZXRIYXNGaW5GZXNKaWciLCJoYXNGaW5GZXNKaWciLCJzZXRIYXNGaW5GZXNKaWciLCJnZXRGZXNOYW1lIiwiZmVzTmFtZSIsInNldEZlc05hbWUiLCJnZXRGZXNQcm8iLCJmZXNQcm8iLCJzZXRGZXNQcm8iLCJnZXRGZXNUYXNrUHJvIiwiZmVzVGFza1BybyIsInNldEZlc1Rhc2tQcm8iLCJnZXRGZXNQdXp6bGVMdiIsImZlc1B1enpsZUx2Iiwic2V0RmVzUHV6emxlTHYiLCJnZXRTaGFyZU5hbWVzIiwic05hbWVzIiwiZ2V0Q2hhbGxlbmdlRGF0YSIsImNoYURhdGEiLCJzZXRDaGFsbGVuZ2VEYXRhIiwiZ2V0Q2hhbGxlbmdlUGFja0RhdGEiLCJjaGFQYWNrRGF0YSIsInNldENoYWxsZW5nZVBhY2tEYXRhIiwiZ2V0QWRkRGVzayIsImFkZERlc2siLCJzZXRBZGREZXNrIiwiZ2V0SmlnVGlsZXMiLCJqaWdUaWxlcyIsInNldEppZ1RpbGVzIiwiYWRkU2V2ZW5EYXlzIiwiZ2V0U2V2ZW5EYXlzIiwiTWF0aCIsIm1pbiIsInNldFNldmVuRGF5cyIsInNldmVuTG9naW4iLCJnZXRTZXZlblJld2FyZCIsInNldmVuUmV3YXJkIiwic2V0U2V2ZW5SZXdhcmQiLCJhZGRTaG9wUmVjb3JkIiwiZ2V0U2hvcFJlY29yZCIsInNob3BSZWNvcmQiLCJhZGRTaG9wVW5yZXNldCIsImdldFNob3BVbnJlc2V0Iiwic2V0U2hvcFVucmVzZXQiLCJzaG9wUmVVbiIsImJhZyIsInNldCIsIm1haWwiLCJfbXlTa2luIiwiZ2V0VXNpbmdTa2luIiwic2V0VXNpbmdTa2luIiwiZ2V0TXlTa2luIiwiYWRkTXlTa2luIiwiZ2V0U2tpbkFkUHJvIiwiYWRkU2tpbkFkUHJvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7QUFDQUQsT0FBTyxDQUFDRSxRQUFSLEdBQW1CRixPQUFPLENBQUNHLGFBQVIsR0FBd0JILE9BQU8sQ0FBQ0ksUUFBUixHQUFtQkosT0FBTyxDQUFDSyxTQUFSLEdB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QzFRLEVBQUUsRUFBRSxDQUFDLENBQUQsQ0FBTDtRQUFVQyxJQUFJLEVBQUUsQ0FBQyxDQUFELENBQWhCO1FBQXFCQyxTQUFTLEVBQUUsQ0FBQyxDQUFELENBQWhDO1FBQXFDQyxTQUFTLEVBQUUsQ0FBQyxDQUFEO01BQWhELENBQWhDO01BQ0EsT0FBTyxLQUFLdVEsT0FBWjtJQUNILENBSndDO0lBS3pDbFMsVUFBVSxFQUFFLENBQUMsQ0FMNEI7SUFNekNDLFlBQVksRUFBRSxDQUFDO0VBTjBCLENBQTdDOztFQVFBNUQsQ0FBQyxDQUFDNkQsU0FBRixDQUFZaVMsWUFBWixHQUEyQixZQUFZO0lBQ25DLE9BQU8sS0FBSzVRLFNBQVo7RUFDSCxDQUZEOztFQUdBbEYsQ0FBQyxDQUFDNkQsU0FBRixDQUFZa1MsWUFBWixHQUEyQixZQUFZLENBQUUsQ0FBekM7O0VBQ0EvVixDQUFDLENBQUM2RCxTQUFGLENBQVltUyxTQUFaLEdBQXdCLFlBQVksQ0FBRSxDQUF0Qzs7RUFDQWhXLENBQUMsQ0FBQzZELFNBQUYsQ0FBWW9TLFNBQVosR0FBd0IsWUFBWSxDQUFFLENBQXRDOztFQUNBalcsQ0FBQyxDQUFDNkQsU0FBRixDQUFZcVMsWUFBWixHQUEyQixZQUFZLENBQUUsQ0FBekM7O0VBQ0FsVyxDQUFDLENBQUM2RCxTQUFGLENBQVlzUyxZQUFaLEdBQTJCLFlBQVksQ0FBRSxDQUF6Qzs7RUFDQSxPQUFPblcsQ0FBUDtBQUNILENBL3dCTyxFQUFSIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbmV4cG9ydHMuY2hnU2NlbmUgPSBleHBvcnRzLmNoYWxsZW5nZVR5cGUgPSBleHBvcnRzLmdhbWVUeXBlID0gZXhwb3J0cy5zY2VuZVR5cGUgPSBleHBvcnRzLlJPT1QgPSB2b2lkIDA7XG52YXIgcjtcbnZhciBfZXZ0cyA9IHJlcXVpcmUoXCJldnRzXCIpO1xudmFyIF9pZHggPSByZXF1aXJlKFwiaWR4XCIpO1xudmFyIF9wQ29uc3QgPSByZXF1aXJlKFwicENvbnN0XCIpO1xudmFyIF90aW1lID0gcmVxdWlyZShcInRpbWVcIik7XG52YXIgX3VEYXRhID0gcmVxdWlyZShcInVEYXRhXCIpO1xudmFyIF9jZmdNZ3IgPSByZXF1aXJlKFwiY2ZnTWdyXCIpO1xudmFyIF9sb2FkaW5nQW5pID0gcmVxdWlyZShcImxvYWRpbmdBbmlcIik7XG52YXIgX2dsb2JhbCA9IHJlcXVpcmUoXCJnbG9iYWxcIik7XG52YXIgX2JhZ01nciA9IHJlcXVpcmUoXCJiYWdNZ3JcIik7XG52YXIgX2ppZ3Nhd01nciA9IHJlcXVpcmUoXCJqaWdzYXdNZ3JcIik7XG52YXIgX2xldmVsTWdyID0gcmVxdWlyZShcImxldmVsTWdyXCIpO1xudmFyIF9yYW5rTWdyID0gcmVxdWlyZShcInJhbmtNZ3JcIik7XG52YXIgX3Nob3BNZ3IgPSByZXF1aXJlKFwic2hvcE1nclwiKTtcbnZhciBfID0gKHJlcXVpcmUoXCJza2luTWdyXCIpLCByZXF1aXJlKFwiZ2FtZVwiKSk7XG5leHBvcnRzLnNjZW5lVHlwZSA9IHtsb2FkaW5nOiBcImxvYWRpbmdcIiwgbWFpbjogXCJtYWluXCIsIGdhbWU6IFwiZ2FtZVwiLCBndWlkZTogXCJndWlkZVwifTtcbihmdW5jdGlvbiAodCkge1xuICAgICh0Wyh0Lm5vcm1hbCA9IDApXSA9IFwibm9ybWFsXCIpLFxuICAgICAgICAodFsodC5yYWNlID0gMSldID0gXCJyYWNlXCIpLFxuICAgICAgICAodFsodC5jaGFsbGVuZ2UgPSAyKV0gPSBcImNoYWxsZW5nZVwiKSxcbiAgICAgICAgKHRbKHQucHJhY3RpY2UgPSAzKV0gPSBcInByYWN0aWNlXCIpLFxuICAgICAgICAodFsodC5mZXN0aXZhbCA9IDQpXSA9IFwiZmVzdGl2YWxcIiksXG4gICAgICAgICh0Wyh0LmZyZWVkb20gPSA1KV0gPSBcImZyZWVkb21cIik7XG59KSgociA9IGV4cG9ydHMuZ2FtZVR5cGUgfHwgKGV4cG9ydHMuZ2FtZVR5cGUgPSB7fSkpKTtcbihmdW5jdGlvbiAodCkge1xuICAgICh0Wyh0Lndvcm0gPSAxKV0gPSBcIndvcm1cIiksICh0Wyh0LnRyZWUgPSAyKV0gPSBcInRyZWVcIiksICh0Wyh0LmljZSA9IDMpXSA9IFwiaWNlXCIpO1xufSkoZXhwb3J0cy5jaGFsbGVuZ2VUeXBlIHx8IChleHBvcnRzLmNoYWxsZW5nZVR5cGUgPSB7fSkpO1xuZXhwb3J0cy5jaGdTY2VuZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgdmFyIG47XG4gICAgdmFyIGk7XG4gICAgdmFyIHM7XG4gICAgZSAmJiAoKG4gPSBlLmNiKSwgKGkgPSBlLm5vQW5pKSwgKHMgPSBlLmdhbWVUeXBlKSk7XG4gICAgX2V2dHMuZGVmYXVsdC5vcEUuY2xlYXIoKTtcbiAgICB2YXIgYyA9IGNjLmRpcmVjdG9yO1xuICAgIGV4cG9ydHMuUk9PVCA9IHQ7XG4gICAgdCA9PSBleHBvcnRzLnNjZW5lVHlwZS5nYW1lXG4gICAgICAgID8gKHMgPSBfLmRlZmF1bHQudHlwZSA9IHMgfHwgci5ub3JtYWwpID09IHIuY2hhbGxlbmdlICYmIChfLmRlZmF1bHQuY2hhbGxhZ2VEYXRhID0gZS5jaGFsbGVuZ2VEYXRhIHx8IHt9KVxuICAgICAgICA6IChkZWxldGUgXy5kZWZhdWx0LnR5cGUsIGRlbGV0ZSBfLmRlZmF1bHQuY2hhbGxhZ2VEYXRhLCBfbGV2ZWxNZ3IuZGVmYXVsdC5pbnMuY2xlYXJQcmNpdGNlSWQoKSk7XG4gICAgcyA9PSByLmZyZWVkb20gJiYgKF9nbG9iYWwuZGVmYXVsdC5mcmVlZG9tU2l6ZSA9IGUuZnJlZWRvbVNpemUgfHwgMTApO1xuICAgIHZhciBsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBudWxsID09IG4gfHwgbigpO1xuICAgIH07XG4gICAgaWYgKGkpIGMubG9hZFNjZW5lKHQsIGwpO1xuICAgIGVsc2Uge1xuICAgICAgICB2YXIgdSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJwcmVmYWJcIik7XG4gICAgICAgIHUgfHwgYy5sb2FkU2NlbmUodCwgbCk7XG4gICAgICAgIHUubG9hZChcInByZWZhYi9sb2FkaW5nQW5pXCIsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgaWYgKCFlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGEud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1ID0gYS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gbmV3IGNjLk5vZGUoXCJtYXNrXCIpO1xuICAgICAgICAgICAgICAgICAgICBwLnNldENvbnRlbnRTaXplKHMsIHUpO1xuICAgICAgICAgICAgICAgICAgICBwLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgci5hZGRDaGlsZChwKTtcbiAgICAgICAgICAgICAgICAgICAgKGkgPSBjYy5pbnN0YW50aWF0ZShvKSkuc2V0UG9zaXRpb24ocyAvIDIsIHUgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgci5wYXJlbnQuYWRkQ2hpbGQoaSk7XG4gICAgICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KF9sb2FkaW5nQW5pLmRlZmF1bHQpLnBsYXlUbyhzLCB1LCB0LCBuKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA/IGMucHJlbG9hZFNjZW5lKHQpIDogYy5sb2FkU2NlbmUodCwgbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG52YXIgYiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgdGhpcy5nYW1lVHlwZSA9IHtub21hbDogXCJub21hbFwifTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiaW5zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zIHx8ICh0aGlzLl9pbnMgPSBuZXcgdygpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICB9KTtcbiAgICB0LnByb3RvdHlwZS5zYXZlQ29pbkRhdGEgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBiO1xudmFyIHcgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuTG9jayA9ICEwO1xuICAgICAgICB0aGlzLnJlY29yZERhdGEgPSB7XG4gICAgICAgICAgICBtYWluOiB7Z1RpbWVzOiAwLCB3VGltZXM6IDAsIGhlV2luczogMCwgdFBvaW50czogMCwgaGVQb2ludHM6IDB9LFxuICAgICAgICAgICAgZGFpbHk6IHtnVGltZXM6IDAsIHdUaW1lczogMCwgaGVXaW5zOiAwLCB0UG9pbnRzOiAwLCBoZVBvaW50czogMCwgZmVUaW1lOiAwfSxcbiAgICAgICAgICAgIHJhY2U6IHtnVGltZXM6IDAsIHRQb2ludHM6IDAsIGhlUG9pbnRzOiAwLCBmZVRpbWU6IDB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBsb2FkRGF0YSA9IHtcbiAgICAgICAgICAgIHR0TVNjb3JlOiAwLFxuICAgICAgICAgICAgdHREU2NvcmU6IDAsXG4gICAgICAgICAgICB0dE1XaW46IDAsXG4gICAgICAgICAgICB0dERXaW46IDAsXG4gICAgICAgICAgICB0ZE1TY29yZTogMCxcbiAgICAgICAgICAgIHRkRFNjb3JlOiAwLFxuICAgICAgICAgICAgdGRNV2luOiAwLFxuICAgICAgICAgICAgdGREV2luOiAwLFxuICAgICAgICAgICAgdGRSU2NvcmU6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51c2luZ1NraW4gPSB7Ymc6IDEsIHJvbGU6IDEsIGhlYWRGcmFtZTogMSwgbmFtZUZyYW1lOiAxfTtcbiAgICB9XG4gICAgdC5wcm90b3R5cGUuZ2V0UGVyUG93ZXJOZWVkVGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfY2ZnTWdyLmRlZmF1bHQuc2VydmVyQ2ZnLnRpbWVzLmZvclVzZXI7XG4gICAgICAgIHJldHVybiAoX3VEYXRhLmRlZmF1bHQuaW5zLmdldElzTmV3VXNlcigpID8gdC5uZXdfdXNlci5ydWxlcy5vbmVfdGltZS52YWwgOiB0LmFsbC5ydWxlcy5vbmVfdGltZS52YWwpIHx8IDE4MDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldEluaXRQb3dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfY2ZnTWdyLmRlZmF1bHQuc2VydmVyQ2ZnLnRpbWVzLmZvclVzZXI7XG4gICAgICAgIHJldHVybiAoX3VEYXRhLmRlZmF1bHQuaW5zLmdldElzTmV3VXNlcigpID8gdC5uZXdfdXNlci5ydWxlcy5pbnRfdGltZXMudmFsIDogdC5hbGwucnVsZXMuaW50X3RpbWVzLnZhbCkgfHwgMTAwO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0TGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLmx2bDtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdCA/IDEgOiBOdW1iZXIodCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRMZXZlbCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe2x2bDogdH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZmluaXNoTHZsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiwge2RhdGE6IHtsdmw6IHRoaXMuZ2V0TGV2ZWwoKSArIDF9fV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRHdWlkZURvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuZ3VpZGVEb25lO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0R3VpZGVEb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHtndWlkZURvbmU6IDF9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldFB1enpsZUx2bCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkucHV6emxlTHZsO1xuICAgICAgICB2YXIgZSA9IF9nbG9iYWwuZGVmYXVsdC5jaGFwdGVyQ291bnQ7XG4gICAgICAgIHQgPiA1NCAqIGUgJiYgKCh0ID0gNTQgKiBlKSwgKF9nbG9iYWwuZGVmYXVsdC5sZXZlbERvbmUgPSAhMCkpO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8gMSA6IE51bWJlcih0KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldFB1enpsZUx2bCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe3B1enpsZUx2bDogdH0pO1xuICAgICAgICByZXR1cm4gX2xldmVsTWdyLmRlZmF1bHQuaW5zLnVwZGF0ZURhdGEoKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmZpbmlzaFB1enpsZUx2bCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0ID0gdGhpcy5nZXRQdXp6bGVMdmwoKSksIFs0LCB0aGlzLnNldFB1enpsZUx2bCh0ICsgMSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5zZW50KCksIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRKaXNhd0x2bCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuamlzYXdMdmw7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyAxIDogTnVtYmVyKHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0SmlzYXdMdmwgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHtqaXNhd0x2bDogdH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZmluaXNoSmlzYXdMdmwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7ZGF0YToge2x2bDogdGhpcy5nZXRKaXNhd0x2bCgpICsgMX19XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldENvaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLmNvaW47XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyAwIDogTnVtYmVyKHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuYWRkQ29pbiA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICgodm9pZCAwID09PSBlICYmIChlID0gITApLCAhaXNOYU4odCkpKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0Q29pbigpICsgdDtcbiAgICAgICAgICAgIG8gPCAwICYmIChvID0gMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvaW4obyk7XG4gICAgICAgICAgICBlICYmIF9ldnRzLmRlZmF1bHQub3BFLmVtaXQoe2FjdGlvbjogX2V2dHMuZGVmYXVsdC5DT0lOX0NIR30pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRDb2luID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7Y29pbjogdH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0bGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLmxldmVsO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8gMCA6IE51bWJlcih0KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmFkZExldmVsID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKCh2b2lkIDAgPT09IHQgJiYgKHQgPSAxKSwgIWlzTmFOKHQpKSkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmdldGxldmVsKCkgKyB0O1xuICAgICAgICAgICAgZSA8IDAgJiYgKGUgPSAwKTtcbiAgICAgICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe2xldmVsOiBlfSk7XG4gICAgICAgICAgICBfZXZ0cy5kZWZhdWx0Lm9wRS5lbWl0KHthY3Rpb246IF9ldnRzLmRlZmF1bHQuTEVWX0NIR30pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5hZGRFeHAgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoIWlzTmFOKHQpKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuZ2V0RXhwKCkgKyB0O1xuICAgICAgICAgICAgZSA8IDAgJiYgKGUgPSAwKTtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5nZXRsZXZlbCgpO1xuICAgICAgICAgICAgaWYgKG8gKiBvICogMjAgPCBlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDAsIGkgPSA4OyBvICogbyAqIDIwIDwgZSAmJiBpID4gMDsgKSAobiArPSAxKSwgKG8gKz0gMSksIGktLTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExldmVsKG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7ZXhwOiBlfSk7XG4gICAgICAgICAgICBfZXZ0cy5kZWZhdWx0Lm9wRS5lbWl0KHthY3Rpb246IF9ldnRzLmRlZmF1bHQuRVhQX0NIR30pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRFeHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLmV4cDtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdCA/IDAgOiBOdW1iZXIodCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRQb3dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkucG93ZXI7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyB0aGlzLmdldEluaXRQb3dlcigpIDogTnVtYmVyKHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuYWRkUG93ZXIgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAoKHZvaWQgMCA9PT0gZSAmJiAoZSA9ICEwKSwgIWlzTmFOKHQpKSkge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmdldFBvd2VyKCk7XG4gICAgICAgICAgICB2YXIgbiA9IG8gKyB0O1xuICAgICAgICAgICAgbiA8IDAgJiYgKG4gPSAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0UG93ZXIobik7XG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMuZ2V0SW5pdFBvd2VyKCk7XG4gICAgICAgICAgICBpZiAobiA8PSBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBvIC0gbjtcbiAgICAgICAgICAgICAgICBvID49IGkgJiYgKHRoaXMuc2V0UG93ZXJGdWxsVGltZSgwKSwgKHIgPSBpIC0gbikpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUG93ZXJGdWxsVGltZShyKTtcbiAgICAgICAgICAgIH0gZWxzZSBvIDwgaSAmJiB0aGlzLnVwZGF0ZVBvd2VyRnVsbFRpbWUobyAtIGkpO1xuICAgICAgICAgICAgZSAmJiBfZXZ0cy5kZWZhdWx0Lm9wRS5lbWl0KHthY3Rpb246IF9ldnRzLmRlZmF1bHQuUE9XRVJfQ0hHfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldFBvd2VyID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdCAhPSB0aGlzLmdldFBvd2VyKCkgJiYgKHQgPCAwICYmICh0ID0gMCksIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe3Bvd2VyOiB0fSkpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0UG93ZXJGdWxsVGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkucG93ZXJGdWxsVGltZTtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdCA/IDAgOiBOdW1iZXIodCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS51cGRhdGVQb3dlckZ1bGxUaW1lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmdldFBvd2VyRnVsbFRpbWUoKSB8fCBfdGltZS5kZWZhdWx0Lmlucy5zZXJ2ZXJUaW1lO1xuICAgICAgICBlICs9IHQgKiB0aGlzLmdldFBlclBvd2VyTmVlZFRpbWUoKTtcbiAgICAgICAgdGhpcy5zZXRQb3dlckZ1bGxUaW1lKGUpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0UG93ZXJGdWxsVGltZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe3Bvd2VyRnVsbFRpbWU6IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldFRhc2sgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKVt0XTtcbiAgICAgICAgbnVsbCA9PSBlICYmIChlID0ge30pO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldFRhc2sgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbztcbiAgICAgICAgZSAmJiBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKCgoKG8gPSB7fSlbdF0gPSBlKSwgbykpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuaXRlbTtcbiAgICAgICAgbnVsbCA9PSB0ICYmICh0ID0ge30pO1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnJlY29yZEdhbWVSZXN1bHQgPSBmdW5jdGlvbiAodCwgZSwgbywgbiwgaSkge1xuICAgICAgICB2YXIgYTtcbiAgICAgICAgdmFyIGw7XG4gICAgICAgIGlmICh0ID09PSByLm5vcm1hbCkge1xuICAgICAgICAgICAgdmFyIHUgPSB0aGlzLmdldFJlY29yZE1haW5EYXRhKCk7XG4gICAgICAgICAgICBlXG4gICAgICAgICAgICAgICAgPyAoKHUud1RpbWVzID0gTnVtYmVyKHUud1RpbWVzKSArIDEpLFxuICAgICAgICAgICAgICAgICAgdGhpcy53aW5NYWluTGV2ZWwoKSxcbiAgICAgICAgICAgICAgICAgICh1LmhlV2lucyA9IHUuaGVXaW5zID4gdGhpcy5nZXRDb25zV2luVGltZXMoKSA/IHUuaGVXaW5zIDogdGhpcy5nZXRDb25zV2luVGltZXMoKSksXG4gICAgICAgICAgICAgICAgICB0aGlzLmdldEx1Y2t5U3RhdGUoKSB8fCAoMCA9PSBOdW1iZXIodS53VGltZXMpICUgMiAmJiB0aGlzLnNldEx1Y2tTdGF0ZSghMCkpKVxuICAgICAgICAgICAgICAgIDogdGhpcy5zZXRDb25zV2luVGltZXMoMCk7XG4gICAgICAgICAgICB1LnRQb2ludHMgPSBOdW1iZXIodS50UG9pbnRzKSArIG87XG4gICAgICAgICAgICB1LmhlUG9pbnRzID0gdS5oZVBvaW50cyA+IG8gPyB1LmhlUG9pbnRzIDogbztcbiAgICAgICAgICAgIHRoaXMuc2V0VG9kYXlNYWluU2NvcmUodGhpcy5nZXRUb2RheU1haW5TY29yZSgpICsgbyk7XG4gICAgICAgICAgICBudWxsICE9IGkgJiZcbiAgICAgICAgICAgICAgICAobnVsbCA9PT0gKGEgPSBfaWR4LnBsYXRmb3JtLnNldEZyaWVuZFJhbmtEYXRhKSB8fFxuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGEgfHxcbiAgICAgICAgICAgICAgICAgICAgYS5jYWxsKF9pZHgucGxhdGZvcm0sIGksIF9wQ29uc3QuU0RLQ29uZmlnLnR0Wm9uZUlkLm5vcm1hbCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHQgPT09IHIuY2hhbGxlbmdlKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMuZ2V0UmVjb3JkRGFpbHlEYXRhKCk7XG4gICAgICAgICAgICBlXG4gICAgICAgICAgICAgICAgPyAoKHAud1RpbWVzID0gTnVtYmVyKHAud1RpbWVzKSArIDEpLFxuICAgICAgICAgICAgICAgICAgdGhpcy53aW5EYWlseUxldmVsKCksXG4gICAgICAgICAgICAgICAgICAocC5oZVdpbnMgPSBwLmhlV2lucyA+IHRoaXMuZ2V0RGFpbHlXaW5UaW1lcygpID8gcC5oZVdpbnMgOiB0aGlzLmdldERhaWx5V2luVGltZXMoKSkpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNldERhaWx5V2luVGltZXMoMCk7XG4gICAgICAgICAgICBwLnRQb2ludHMgPSBOdW1iZXIocC50UG9pbnRzKSArIG87XG4gICAgICAgICAgICBwLmhlUG9pbnRzID0gcC5oZVBvaW50cyA+IG8gPyBwLmhlUG9pbnRzIDogbztcbiAgICAgICAgICAgIG4gJiYgKHAuZmVUaW1lID0gcC5mZVRpbWUgPCBuID8gcC5mZVRpbWUgOiBuKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9kYXlEYWlseVNjb3JlKHRoaXMuZ2V0VG9kYXlEYWlseVNjb3JlKCkgKyBvKTtcbiAgICAgICAgfSBlbHNlIGlmICh0ID09PSByLnJhY2UpIHtcbiAgICAgICAgICAgIHZhciBkID0gdGhpcy5nZXRSZWNvcmRSYWNlRGF0YSgpO1xuICAgICAgICAgICAgZC50UG9pbnRzID0gTnVtYmVyKGQudFBvaW50cykgKyBvO1xuICAgICAgICAgICAgZC5oZVBvaW50cyA9IGQuaGVQb2ludHMgPiBvID8gZC5oZVBvaW50cyA6IG87XG4gICAgICAgICAgICBudWxsID09PSAobCA9IF9pZHgucGxhdGZvcm0uc2V0RnJpZW5kUmFua0RhdGEpIHx8XG4gICAgICAgICAgICAgICAgdm9pZCAwID09PSBsIHx8XG4gICAgICAgICAgICAgICAgbC5jYWxsKF9pZHgucGxhdGZvcm0sIGQuaGVQb2ludHMsIF9wQ29uc3QuU0RLQ29uZmlnLnR0Wm9uZUlkLnJhY2UpO1xuICAgICAgICAgICAgbiAmJiAoZC5mZVRpbWUgPSBkLmZlVGltZSA8IG4gPyBkLmZlVGltZSA6IG4pO1xuICAgICAgICAgICAgdGhpcy5zZXRUb2RheVJhY2VTY29yZShvKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFJlY29yZERhdGEodGhpcy5nZXRSZWNvcmREYXRhKCkpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUucmVjb3JkR2FtZVRpbWVzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIHN3aXRjaCAodCkge1xuICAgICAgICAgICAgY2FzZSByLm5vcm1hbDpcbiAgICAgICAgICAgICAgICBlID0gdGhpcy5nZXRSZWNvcmRNYWluRGF0YSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSByLmNoYWxsZW5nZTpcbiAgICAgICAgICAgICAgICBlID0gdGhpcy5nZXRSZWNvcmREYWlseURhdGEoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugci5yYWNlOlxuICAgICAgICAgICAgICAgIGUgPSB0aGlzLmdldFJlY29yZFJhY2VEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgZSAmJiAoKGUuZ1RpbWVzID0gTnVtYmVyKGUuZ1RpbWVzKSArIDEpLCB0aGlzLnNldFJlY29yZERhdGEodGhpcy5nZXRSZWNvcmREYXRhKCkpKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldFJlY29yZERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLnJlY29yZERhdGE7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyB0aGlzLnJlY29yZERhdGEgOiB0O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0UmVjb3JkRGF0YSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe3JlY29yZERhdGE6IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldFJlY29yZE1haW5EYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWNvcmREYXRhKCkubWFpbjtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldFJlY29yZERhaWx5RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVjb3JkRGF0YSgpLmRhaWx5O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0UmVjb3JkUmFjZURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJlY29yZERhdGEoKS5yYWNlO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0Q29uc1dpblRpbWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5tQ29uc1dUaW1lcztcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdCA/IDAgOiBOdW1iZXIodCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRDb25zV2luVGltZXMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHttQ29uc1dUaW1lczogdH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUud2luTWFpbkxldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuZ2V0Q29uc1dpblRpbWVzKCk7XG4gICAgICAgIHRoaXMuc2V0Q29uc1dpblRpbWVzKHQgKyAxKTtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmdldFRvZGF5TWFpbldpbigpO1xuICAgICAgICB0aGlzLnNldFRvZGF5TWFpbldpbihlICsgMSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXREYWlseVdpblRpbWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5kQ29uc1dUaW1lcztcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdCA/IDAgOiBOdW1iZXIodCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXREYWlseVdpblRpbWVzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7ZENvbnNXVGltZXM6IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLndpbkRhaWx5TGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5nZXREYWlseVdpblRpbWVzKCk7XG4gICAgICAgIHRoaXMuc2V0RGFpbHlXaW5UaW1lcyh0ICsgMSk7XG4gICAgICAgIHZhciBlID0gdGhpcy5nZXRUb2RheURhaWx5V2luKCk7XG4gICAgICAgIHRoaXMuc2V0VG9kYXlEYWlseVdpbihlICsgMSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRUb2RheU1haW5TY29yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkudGRNU2NvcmU7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyAwIDogTnVtYmVyKHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0VG9kYXlNYWluU2NvcmUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHt0ZE1TY29yZTogdH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0VG9kYXlNYWluV2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS50ZE1XaW47XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyAwIDogTnVtYmVyKHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0VG9kYXlNYWluV2luID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7dGRNV2luOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRUb2RheURhaWx5U2NvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLnRkRFNjb3JlO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8gMCA6IE51bWJlcih0KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldFRvZGF5RGFpbHlTY29yZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe3RkRFNjb3JlOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRUb2RheURhaWx5V2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS50ZERXaW47XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyAwIDogTnVtYmVyKHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0VG9kYXlEYWlseVdpbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe3RkRFdpbjogdH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0VG9kYXlSYWNlU2NvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLnRkUlNjb3JlO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8gMCA6IE51bWJlcih0KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldFRvZGF5UmFjZVNjb3JlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdCA+IHRoaXMuZ2V0VG9kYXlSYWNlU2NvcmUoKSAmJlxuICAgICAgICAgICAgKF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe3RkUlNjb3JlOiB0fSksIF9yYW5rTWdyLmRlZmF1bHQuaW5zLnVwbG9hZFJhY2VEYXRhKCkpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuY2hnVG9kYXlSYWNlU2NvcmUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHt0ZFJTY29yZTogdH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0WWRheVJhY2VTY29yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkueWRSU2NvcmU7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyAwIDogTnVtYmVyKHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0WWRheVJhY2VTY29yZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe3lkUlNjb3JlOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5jbGVhckRhaWx5RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXRZZGF5UmFjZVNjb3JlKHRoaXMuZ2V0VG9kYXlSYWNlU2NvcmUoKSk7XG4gICAgICAgIHRoaXMuY2xlYXJEYXlVcExvYWQoKTtcbiAgICAgICAgdGhpcy5zZXRUb2RheU1haW5TY29yZSgwKTtcbiAgICAgICAgdGhpcy5zZXRUb2RheU1haW5XaW4oMCk7XG4gICAgICAgIHRoaXMuc2V0VG9kYXlEYWlseVNjb3JlKDApO1xuICAgICAgICB0aGlzLnNldFRvZGF5RGFpbHlXaW4oMCk7XG4gICAgICAgIHRoaXMuY2hnVG9kYXlSYWNlU2NvcmUoMCk7XG4gICAgICAgIHRoaXMuc2V0VGlja2V0QWRUaW1lcygwKTtcbiAgICAgICAgdGhpcy5zZXRZZGF5UmFjZVJhbmtEYXRhKFtdKTtcbiAgICAgICAgX3JhbmtNZ3IuZGVmYXVsdC5pbnMuc2V0WWRheVJhY2VSYW5rRGF0YShbXSk7XG4gICAgICAgIHRoaXMuc2V0U2hhcmVOYW1lcyhbXSk7XG4gICAgICAgIHRoaXMuc2V0SXNHZXRTbGlkZXIoITEpO1xuICAgICAgICB0aGlzLnNldEZpcnN0UmFjZVRpcCghMSk7XG4gICAgICAgIHRoaXMuc2V0Tm9ybWFsU2hhcmVUaW1lKDApO1xuICAgICAgICB0aGlzLnNldFJhY2VTaGFyZVRpbWUoMCk7XG4gICAgICAgIHRoaXMuc2V0Smlnc2F3QWRUaW1lcygwKTtcbiAgICAgICAgdGhpcy5zZXROZXdKaWdBZFRpbWVzKDApO1xuICAgICAgICB0aGlzLnNldEFkQ291bnQoMCk7XG4gICAgICAgIHRoaXMuc2V0U2hhcmVDb3VudCgwKTtcbiAgICAgICAgdGhpcy5zZXRTaG9wUmVjb3JkKHt9KTtcbiAgICAgICAgX3Nob3BNZ3IuZGVmYXVsdC5pbnMuc2V0UGFja1JlZCh7fSk7XG4gICAgICAgIF9zaG9wTWdyLmRlZmF1bHQuaW5zLnNldFRhYnNSZWQoe30pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0THVja1RpbWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5sdWNreVRpbWVzO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8gMCA6IE51bWJlcih0KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldEx1Y2t5VGltZXMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHtsdWNreVRpbWVzOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5hZGRMdWNreVRpbWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuZ2V0THVja1RpbWVzKCk7XG4gICAgICAgIHQgPSAodCArPSAxKSA+IDEwID8gMSA6IHQ7XG4gICAgICAgIHRoaXMuc2V0THVja3lUaW1lcyh0KTtcbiAgICAgICAgdGhpcy5zZXRMdWNrU3RhdGUoITEpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0THVja3lTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkubHVja3lTdGF0ZTtcbiAgICAgICAgcmV0dXJuIG51bGwgIT0gdCAmJiB0O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0THVja1N0YXRlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7bHVja3lTdGF0ZTogdH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0UG93ZXJBZFRpbWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5wb3dlckFkVGltZXM7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyAwIDogTnVtYmVyKHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0UG93ZXJBZFRpbWVzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7cG93ZXJBZFRpbWVzOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5hZGRQb3dlckFkVGltZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5nZXRQb3dlckFkVGltZXMoKTtcbiAgICAgICAgdCA9ICh0ICs9IDEpID4gMSA/IDAgOiB0O1xuICAgICAgICB0aGlzLnNldFBvd2VyQWRUaW1lcyh0KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldENvaW5BZFRpbWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5jb2luQWRUaW1lcztcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdCA/IDAgOiBOdW1iZXIodCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRDb2luQWRUaW1lcyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe2NvaW5BZFRpbWVzOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5hZGRDb2luQWRUaW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmdldENvaW5BZFRpbWVzKCk7XG4gICAgICAgIHQgPSAodCArPSAxKSA+IDIgPyAwIDogdDtcbiAgICAgICAgdGhpcy5zZXRDb2luQWRUaW1lcyh0KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldFRpY2tldEFkVGltZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLnRpY2tldEFkVGltZXM7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyAwIDogTnVtYmVyKHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0VGlja2V0QWRUaW1lcyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe3RpY2tldEFkVGltZXM6IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmFkZFRpY2tldEFkVGltZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5nZXRUaWNrZXRBZFRpbWVzKCk7XG4gICAgICAgIHRoaXMuc2V0VGlja2V0QWRUaW1lcyh0ICsgMSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRMYXN0VXBsb2FkUmFua0RhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLmxhc3RVcGxvYWRSYW5rO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8gdGhpcy51cGxvYWREYXRhIDogdDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldExhc3RVcGxvYWRSYW5rRGF0YSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe2xhc3RVcGxvYWRSYW5rOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5jbGVhckRheVVwTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmdldExhc3RVcGxvYWRSYW5rRGF0YSgpO1xuICAgICAgICB0LnRkTVNjb3JlID0gMDtcbiAgICAgICAgdC50ZERTY29yZSA9IDA7XG4gICAgICAgIHQudGRNV2luID0gMDtcbiAgICAgICAgdC50ZERXaW4gPSAwO1xuICAgICAgICB0LnRkUlNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5zZXRMYXN0VXBsb2FkUmFua0RhdGEodCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRZZGF5UmFjZVJhbmtEYXRhID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7eWRheVJSRGF0YTogdH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0UmFua0xhc3RUaW1lRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuckxhc3RUaW1lO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8gMCA6IHQ7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRSYW5rTGFzdFRpbWVEYXRhID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7ckxhc3RUaW1lOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRJc0dldFNsaWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuaXNTbGlkZXI7XG4gICAgICAgIHJldHVybiBudWxsICE9IHQgJiYgdDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldElzR2V0U2xpZGVyID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7aXNTbGlkZXI6IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldEFsaUFkZEhvbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLmFsaUFkZEhvbWU7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyAtMSA6IHQ7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRBbGlBZGRIb21lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7YWxpQWRkSG9tZTogdH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0SXNGaXJzdFJhY2VUaXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLmlzUmFjZVRpcDtcbiAgICAgICAgcmV0dXJuIG51bGwgIT0gdCAmJiB0O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0Rmlyc3RSYWNlVGlwID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7aXNSYWNlVGlwOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXROb3JtYWxTaGFyZVRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLm5vclNoYXJlVDtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdCA/IDAgOiB0O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0Tm9ybWFsU2hhcmVUaW1lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7bm9yU2hhcmVUOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRSYWNlU2hhcmVUaW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5yYWNlU2hhcmVUO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8gMCA6IHQ7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRSYWNlU2hhcmVUaW1lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7cmFjZVNoYXJlVDogdH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0Smlnc2F3QWRUaW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuamlnc2F3QWRUaW1lcztcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdCA/IDAgOiBOdW1iZXIodCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRKaWdzYXdBZFRpbWVzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7amlnc2F3QWRUaW1lczogdH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuYWRkSmlnc2F3QWRUaW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmdldEppZ3Nhd0FkVGltZXMoKTtcbiAgICAgICAgdGhpcy5zZXRKaWdzYXdBZFRpbWVzKHQgKyAxKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldE5ld0ppZ0FkVGltZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLm5ld0ppZ0FkVGltZXM7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyAwIDogTnVtYmVyKHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0TmV3SmlnQWRUaW1lcyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe25ld0ppZ0FkVGltZXM6IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmFkZE5ld0ppZ0FkVGltZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5nZXROZXdKaWdBZFRpbWVzKCk7XG4gICAgICAgIHRoaXMuc2V0TmV3SmlnQWRUaW1lcyh0ICsgMSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRBZENvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5hZENvdW50O1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8gMCA6IE51bWJlcih0KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldEFkQ291bnQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHthZENvdW50OiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5hZGRBZENvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuZ2V0QWRDb3VudCgpO1xuICAgICAgICB0aGlzLnNldEFkQ291bnQodCArIDEpO1xuICAgICAgICB0aGlzLmlzTWF4QWRDb3VudCgpICYmXG4gICAgICAgICAgICAoX2lkeC5wbGF0Zm9ybS5yZXBvcnRFdmVudChfaWR4LkVSZXBFdnQuYWRNYXgpLCBfZXZ0cy5kZWZhdWx0Lm9wRS5lbWl0KHthY3Rpb246IF9ldnRzLmRlZmF1bHQuQURfTUFYfSkpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuaXNNYXhBZENvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdm9pZCAwICE9PSBfY2ZnTWdyLmRlZmF1bHQuc2VydmVyQ2ZnLmRhaWx5X21heF9hZF90aW1lcy52YWwgJiZcbiAgICAgICAgICAgIHRoaXMuZ2V0QWRDb3VudCgpID49IF9jZmdNZ3IuZGVmYXVsdC5zZXJ2ZXJDZmcuZGFpbHlfbWF4X2FkX3RpbWVzLnZhbFxuICAgICAgICApO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0U2hhcmVDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuc2hhcmVDb3VudDtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdCA/IDAgOiBOdW1iZXIodCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRTaGFyZUNvdW50ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7c2hhcmVDb3VudDogdH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuYWRkU2hhcmVDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmdldFNoYXJlQ291bnQoKTtcbiAgICAgICAgdGhpcy5zZXRTaGFyZUNvdW50KHQgKyAxKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmlzTWF4U2hhcmVDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHZhciBlID0gbnVsbCAhPT0gKHQgPSBfY2ZnTWdyLmRlZmF1bHQuc2VydmVyQ2ZnLmRhaWx5X21heF9hZF90aW1lcy5zaGFyZV90aW1lc19saW1pdCkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDU7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFNoYXJlQ291bnQoKSA+PSBlO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0Smlnc2F3QmdFbmRUaW1lc0J5SWR4ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Smlnc2F3QmdFbmRUaW1lcygpW3RdIHx8IDA7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRKaWdzYXdCZ0VuZFRpbWVzQnlJZHggPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0Smlnc2F3QmdFbmRUaW1lcygpO1xuICAgICAgICBvW3RdID0gZTtcbiAgICAgICAgdGhpcy5zZXRKaWdzYXdCZ0VuZFRpbWVzKG8pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0Smlnc2F3QmdFbmRUaW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuamlnRW5kVGltZXM7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyBbXSA6IHQ7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRKaWdzYXdCZ0VuZFRpbWVzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7amlnRW5kVGltZXM6IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldE5ld0ppZ0JnRW5kVGltZXNCeUlkeCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE5ld0ppZ0JnRW5kVGltZXMoKVt0XSB8fCAwO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0TmV3SmlnQmdFbmRUaW1lc0J5SWR4ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmdldE5ld0ppZ0JnRW5kVGltZXMoKTtcbiAgICAgICAgb1t0XSA9IGU7XG4gICAgICAgIHRoaXMuc2V0TmV3SmlnQmdFbmRUaW1lcyhvKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldE5ld0ppZ0JnRW5kVGltZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLm5ld0ppZ0VuZFRpbWVzO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8gW10gOiB0O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0TmV3SmlnQmdFbmRUaW1lcyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe25ld0ppZ0VuZFRpbWVzOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRJc0NsZWFySmlnc2F3RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuaXNDbGVhckppZzE7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgfHwgdDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldElzQ2xlYXJKaWdzYXdEYXRhID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7aXNDbGVhckppZzE6IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldElzQ2hlY2tkTG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuaXNDaGVja2RMb2NrO1xuICAgICAgICByZXR1cm4gbnVsbCAhPSB0ICYmIHQ7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRJc0NoZWNrZExvY2sgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHtpc0NoZWNrZExvY2s6IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldElzT3BlbkxvY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkubG9jYWxJc09wZW47XG4gICAgICAgIHJldHVybiBudWxsID09IHQgfHwgdDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldElzT3BlbkxvY2tlZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe2xvY2FsSXNPcGVuOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5jaGVja0lzT3BlbkxvY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgoKHRoaXMuaXNPcGVuTG9jayA9IHRoaXMuZ2V0SXNPcGVuTG9ja2VkKCkpLCAhdGhpcy5nZXRJc0NoZWNrZExvY2soKSkpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy5nZXRQdXp6bGVMdmwoKTtcbiAgICAgICAgICAgIHZhciBlID0gX2JhZ01nci5kZWZhdWx0Lmlucy5nZXRJdGVtQ291bnQoXCJwdXp6bGVfcGllY2VzXCIpO1xuICAgICAgICAgICAgdmFyIG8gPSBfamlnc2F3TWdyLmRlZmF1bHQuaW5zLmdldFVuUGxhY2VkTnVtKCk7XG4gICAgICAgICAgICAodCA+IDEgfHwgZSAhPSBvKSAmJiAoKHRoaXMuaXNPcGVuTG9jayA9ICExKSwgdGhpcy5zZXRJc09wZW5Mb2NrZWQoITEpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0SXNDaGVja2RMb2NrKCEwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5wcm90b3R5cGUuaXNNaWFuTG9ja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIHZhciBvO1xuICAgICAgICBpZiAoKHRoaXMuY2hlY2tJc09wZW5Mb2NrKCksICF0aGlzLmlzT3BlbkxvY2spKSByZXR1cm4gITE7XG4gICAgICAgIGlmICh0aGlzLmdldFB1enpsZUx2bCgpIDwgNTUpIHJldHVybiAhMTtcbiAgICAgICAgdmFyIG4gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGIuaW5zLmdldFJlY29yZERhdGEoKSkpLnJhY2UuaGVQb2ludHM7XG4gICAgICAgIHZhciBpID1cbiAgICAgICAgICAgIChudWxsID09PVxuICAgICAgICAgICAgICAgIChvID1cbiAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gKGUgPSBudWxsID09PSAodCA9IF9jZmdNZ3IuZGVmYXVsdC5zZXJ2ZXJDZmcpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQubG9ja19ydWxlcykgfHxcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBlLm1haW5fbGluZV9sb2NrKSB8fCB2b2lkIDAgPT09IG9cbiAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgIDogby5tYWluX2xpbmVfdmFsKSB8fCAwO1xuICAgICAgICByZXR1cm4gTnVtYmVyKG4pIDwgTnVtYmVyKGkpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuaXNKaWdzYXdMb2NrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgdmFyIG87XG4gICAgICAgIGlmICgodGhpcy5jaGVja0lzT3BlbkxvY2soKSwgIXRoaXMuaXNPcGVuTG9jaykpIHJldHVybiAhMTtcbiAgICAgICAgdmFyIG4gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGIuaW5zLmdldFJlY29yZERhdGEoKSkpLnJhY2UuaGVQb2ludHM7XG4gICAgICAgIHZhciBpID1cbiAgICAgICAgICAgIChudWxsID09PVxuICAgICAgICAgICAgICAgIChvID1cbiAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gKGUgPSBudWxsID09PSAodCA9IF9jZmdNZ3IuZGVmYXVsdC5zZXJ2ZXJDZmcpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQubG9ja19ydWxlcykgfHxcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBlLm1haW5fbGluZV9sb2NrKSB8fCB2b2lkIDAgPT09IG9cbiAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgIDogby5wdXp6bGVfbGluZV92YWwpIHx8IDA7XG4gICAgICAgIHJldHVybiBOdW1iZXIobikgPCBOdW1iZXIoaSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRJc0dldE5ld0dpZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLmlzR2V0TmV3R2lmdDtcbiAgICAgICAgcmV0dXJuIG51bGwgIT0gdCAmJiB0O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0SXNHZXROZXdHaWYgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHtpc0dldE5ld0dpZnQ6IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldEhhc0ZpbkppZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuaGFzRmluSmlnO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8ge30gOiB0O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0SGFzRmluSmlnID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7aGFzRmluSmlnOiB0fSk7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5fc2V0TG9jYWxBbmRDbG91ZERhdGEoKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldEhhc0ZpbkZlc0ppZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuaGFzRmluRmVzSmlnO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8ge30gOiB0O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0SGFzRmluRmVzSmlnID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7aGFzRmluRmVzSmlnOiB0fSk7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5fc2V0TG9jYWxBbmRDbG91ZERhdGEoKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldEZlc05hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLmZlc05hbWU7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyBcIlwiIDogdDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldEZlc05hbWUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHtmZXNOYW1lOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRGZXNQcm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLmZlc1BybztcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdCA/IDAgOiBOdW1iZXIodCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRGZXNQcm8gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHtmZXNQcm86IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldEZlc1Rhc2tQcm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLmZlc1Rhc2tQcm87XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyAwIDogTnVtYmVyKHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0RmVzVGFza1BybyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe2Zlc1Rhc2tQcm86IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldEZlc1B1enpsZUx2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5mZXNQdXp6bGVMdjtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdCA/IDEgOiBOdW1iZXIodCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRGZXNQdXp6bGVMdiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe2Zlc1B1enpsZUx2OiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRTaGFyZU5hbWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5zTmFtZXM7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyBbXSA6IHQ7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRTaGFyZU5hbWVzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7c05hbWVzOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRDaGFsbGVuZ2VEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5jaGFEYXRhO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8gW10gOiB0O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0Q2hhbGxlbmdlRGF0YSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe2NoYURhdGE6IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldENoYWxsZW5nZVBhY2tEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5jaGFQYWNrRGF0YTtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdCA/IFtdIDogdDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldENoYWxsZW5nZVBhY2tEYXRhID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7Y2hhUGFja0RhdGE6IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldEFkZERlc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX3VEYXRhLmRlZmF1bHQuaW5zLmdldExvY2FsRGF0YSgpLmFkZERlc2s7XG4gICAgICAgIHJldHVybiBudWxsICE9IHQgJiYgdDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldEFkZERlc2sgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHthZGREZXNrOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRKaWdUaWxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuamlnVGlsZXM7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyBbLTEsIFwiXCJdIDogdDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldEppZ1RpbGVzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7amlnVGlsZXM6IHR9LCAxNSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5hZGRTZXZlbkRheXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5nZXRTZXZlbkRheXMoKTtcbiAgICAgICAgdmFyIGUgPSBNYXRoLm1pbig3LCB0ICsgMSk7XG4gICAgICAgIHRoaXMuc2V0U2V2ZW5EYXlzKGUpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0U2V2ZW5EYXlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5zZXZlbkxvZ2luO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8gMCA6IHQ7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRTZXZlbkRheXMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHtzZXZlbkxvZ2luOiB0fSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRTZXZlblJld2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuc2V2ZW5SZXdhcmQ7XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyAwIDogdDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldFNldmVuUmV3YXJkID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLnNldExvY2FsRGF0YSh7c2V2ZW5SZXdhcmQ6IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmFkZFNob3BSZWNvcmQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMuZ2V0U2hvcFJlY29yZCgpO1xuICAgICAgICBlW3RdID8gKGVbdF0gKz0gMSkgOiAoZVt0XSA9IDEpO1xuICAgICAgICB0aGlzLnNldFNob3BSZWNvcmQoZSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRTaG9wUmVjb3JkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5zaG9wUmVjb3JkO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0ID8ge30gOiB0O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0U2hvcFJlY29yZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe3Nob3BSZWNvcmQ6IHR9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmFkZFNob3BVbnJlc2V0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmdldFNob3BVbnJlc2V0KCk7XG4gICAgICAgIGVbdF0gPyAoZVt0XSArPSAxKSA6IChlW3RdID0gMSk7XG4gICAgICAgIHRoaXMuc2V0U2hvcFVucmVzZXQoZSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRTaG9wVW5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkuc2hvcFJlVW47XG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyB7fSA6IHQ7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRTaG9wVW5yZXNldCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe3Nob3BSZVVuOiB0fSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsIFwiQmFnXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdCA9IF91RGF0YS5kZWZhdWx0Lmlucy5nZXRMb2NhbERhdGEoKS5iYWc7XG4gICAgICAgICAgICBudWxsID09IHQgJiYgKHQgPSB7fSk7XG4gICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdCAmJiBfdURhdGEuZGVmYXVsdC5pbnMuc2V0TG9jYWxEYXRhKHtiYWc6IHR9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsIFwiTWFpbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHQgPSBfdURhdGEuZGVmYXVsdC5pbnMuZ2V0TG9jYWxEYXRhKCkubWFpbDtcbiAgICAgICAgICAgIG51bGwgPT0gdCAmJiAodCA9IHt9KTtcbiAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0ICYmIF91RGF0YS5kZWZhdWx0Lmlucy5zZXRMb2NhbERhdGEoe21haWw6IHR9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsIFwibXlTa2luXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9teVNraW4gfHwgKHRoaXMuX215U2tpbiA9IHtiZzogWzFdLCByb2xlOiBbMV0sIGhlYWRGcmFtZTogWzFdLCBuYW1lRnJhbWU6IFsxXX0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX215U2tpbjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICB9KTtcbiAgICB0LnByb3RvdHlwZS5nZXRVc2luZ1NraW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzaW5nU2tpbjtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldFVzaW5nU2tpbiA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHQucHJvdG90eXBlLmdldE15U2tpbiA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHQucHJvdG90eXBlLmFkZE15U2tpbiA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHQucHJvdG90eXBlLmdldFNraW5BZFBybyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHQucHJvdG90eXBlLmFkZFNraW5BZFBybyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHJldHVybiB0O1xufSkoKTtcbiJdfQ==