"use strict";
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