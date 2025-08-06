"use strict";
cc._RF.push(module, 'e7bedtBQEVEDLcEkhi9q9lw', 'rankMgr');
// scripts/rankMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.rankSortType = exports.rankType = exports.rankTag = void 0;
var n;
var i;
var r;

var _idx = require("idx");

var _request = require("request");

var _time = require("time");

var _pInfo = require("pInfo");

(function (t) {
  t.mainScore = "main_score", t.dailyScore = "daily_score", t.mainWin = "main_win", t.dailyWin = "daily_win", t.raceScore = "race_score";
})(n = exports.rankTag || (exports.rankTag = {}));

(function (t) {
  t.Total = "total", t.Today = "daily";
})(i = exports.rankType || (exports.rankType = {}));

(function (t) {
  t.Desc = "desc";
  t.Asc = "asc";
})(r = exports.rankSortType || (exports.rankSortType = {}));

var u = function () {
  function t() {
    this.lastRequestTime = 0;
    this.lastReqRaceTime = 0;
    this.ttMScore = null;
    this.ttDScore = null;
    this.ttMWin = null;
    this.ttDWin = null;
    this.tdMScore = null;
    this.tdDScore = null;
    this.tdMWin = null;
    this.tdDWin = null;
    this.tdRScore = null;
    this.localData = null;
  }

  Object.defineProperty(t, "ins", {
    get: function get() {
      return this._ins || (this._ins = new t());
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.uploadRankData = function () {
    var t = i.Total;
    var e = n.mainScore;
    this.uploadRankDataByTag(e, t);
    e = n.mainWin;
    this.uploadRankDataByTag(e, t);
    e = n.dailyScore;
    this.uploadRankDataByTag(e, t);
    e = n.dailyWin;
    this.uploadRankDataByTag(e, t);
    t = i.Today;
    e = n.mainScore;
    this.uploadRankDataByTag(e, t);
    e = n.dailyScore;
    this.uploadRankDataByTag(e, t);
    e = n.mainWin;
    this.uploadRankDataByTag(e, t);
    e = n.dailyWin;
    this.uploadRankDataByTag(e, t);
  };

  t.prototype.uploadRankDataByTag = function (t, e) {
    var o = _pInfo["default"].ins;
    var n = JSON.parse(JSON.stringify(o.getLastUploadRankData()));
    var i = this.getValueAndKeyByTag(t, e);
    var a = i[0];
    var c = i[1];
    var u = n[c];
    var p = Number(a);

    if (p > Number(u)) {
      var d = this.getRankDataByType(t, e);
      n[c] = a;
      d.then(function (n) {
        var i = n.data;
        var a = 0;

        if (i) {
          i.sort(function (t, e) {
            return e.sort_value - t.sort_value;
          });
          var c = i[99];
          c && (a = c.sort_value);
        }

        if (p > Number(a)) {
          var l = {};
          l.uSkin = o.getUsingSkin();
          var u = {
            rank_tag: t,
            sort_value: p,
            sort_type: r.Desc,
            extra_data: l
          };

          _request["default"].ins.uploadRank(u, e);
        }
      })["catch"](function () {
        console.error("getRankDataErr");
      });
      o.setLastUploadRankData(n);
    }
  };

  t.prototype.getValueAndKeyByTag = function (t, e) {
    var o = _pInfo["default"].ins;
    var r = Object.assign({}, _pInfo["default"].ins.getRecordData());
    if (e === i.Total) switch (t) {
      case n.mainScore:
        return [r.main.tPoints, "ttMScore"];

      case n.dailyScore:
        return [r.daily.tPoints, "ttDScore"];

      case n.mainWin:
        return [r.main.heWins, "ttMWin"];

      case n.dailyWin:
        return [r.daily.heWins, "ttDWin"];
    } else if (e === i.Today) switch (t) {
      case n.mainScore:
        return [o.getTodayMainScore(), "tdMScore"];

      case n.dailyScore:
        return [o.getTodayDailyScore(), "tdDScore"];

      case n.mainWin:
        return [o.getTodayMainWin(), "tdMWin"];

      case n.dailyWin:
        return [o.getTodayDailyWin(), "tdDWin"];
    }
  };

  t.prototype.uploadRaceData = function () {
    this.getTodayRaceData().then(function (t) {
      var e = _pInfo["default"].ins;
      var o = t.data;
      o && o.sort(function (t, e) {
        return e.sort_value - t.sort_value;
      });
      var a = e.getLastUploadRankData();
      var c = n.raceScore;
      var u = e.getTodayRaceScore();
      var p = a.tdRScore;
      var d = 0;
      var h = o[99];

      if (h && (d = h.sort_value), Number(u) > Number(p) && Number(u) > Number(d)) {
        a.tdRScore = u;
        var f = {};
        f.uSkin = e.getUsingSkin();
        var g = {
          rank_tag: c,
          sort_value: u,
          sort_type: r.Desc,
          extra_data: f
        };

        _request["default"].ins.uploadRank(g, i.Today);
      }

      e.setLastUploadRankData(a);
    })["catch"](function () {
      console.error("uploadRaceData");
    });
  };

  t.prototype.getRankDataByType = function (t, e, o) {
    void 0 === o && (o = r.Desc);
    var n = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
    var a = n - this.lastRequestTime >= 3600;
    a && this.clearData();
    var l = this.getCachedDataByType(t, e);
    if (!a && l) return this.getCachedDataByType(t, e);

    if (this.lastRequestTime = n, e === i.Total) {
      var u = _request["default"].ins.getRank(t, e, o);

      this.setCachedDataByType(t, e, u);
      return u;
    }

    if (e === i.Today) {
      var p = _time["default"].ins.serverTime || new Date().getTime();
      p -= (p + 28800) % 86400;
      p *= 1e3;

      var d = _request["default"].ins.getRank(t, e, o, p);

      this.setCachedDataByType(t, e, d);
      return d;
    }
  };

  t.prototype.getMyRankDataByTag = function (t, e) {
    var o = _pInfo["default"].ins.getRecordData();

    if (e === i.Today) switch (t) {
      case n.mainScore:
        return _pInfo["default"].ins.getTodayMainScore();

      case n.dailyScore:
        return _pInfo["default"].ins.getTodayDailyScore();

      case n.mainWin:
        return _pInfo["default"].ins.getTodayMainWin();

      case n.dailyWin:
        return _pInfo["default"].ins.getTodayDailyWin();
    } else if (e === i.Total) switch (t) {
      case n.mainScore:
        return o.main.tPoints;

      case n.dailyScore:
        return o.daily.tPoints;

      case n.mainWin:
        return o.main.heWins;

      case n.dailyWin:
        return o.daily.heWins;
    }
  };

  t.prototype.getTodayRaceData = function () {
    var t = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
    var e = t - this.lastReqRaceTime >= 3600;
    e && (this.tdDWin = null);
    var o = this.getCachedDataByType(n.raceScore, i.Today);

    if (e || !o) {
      this.lastReqRaceTime = t;
      var a = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
      a -= (a + 28800) % 86400;
      a *= 1e3;

      var l = _request["default"].ins.getRank(n.raceScore, i.Today, r.Desc, a);

      this.setCachedDataByType(n.raceScore, i.Today, l);
      return l;
    }

    return this.getCachedDataByType(n.raceScore, i.Today);
  };

  t.prototype.getYdayRaceData = function () {
    var t = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
    t -= 86400;
    t -= (t + 28800) % 86400;
    t *= 1e3;
    var e = this.getYdayRaceRankData();

    if (0 != e.length) {
      var o = {
        data: e
      };
      return Promise.resolve(o);
    }

    return _request["default"].ins.getRank(n.raceScore, i.Today, r.Desc, t);
  };

  t.prototype.getMyRaceTodayData = function () {
    return _pInfo["default"].ins.getTodayRaceScore();
  };

  t.prototype.getMyRaceYdayData = function () {
    return _pInfo["default"].ins.getYdayRaceScore();
  };

  t.prototype.setCachedDataByType = function (t, e, o) {
    if (e === i.Total) switch (t) {
      case n.mainScore:
        this.ttMScore = o;
        break;

      case n.dailyScore:
        this.ttDScore = o;
        break;

      case n.mainWin:
        this.ttMWin = o;
        break;

      case n.dailyWin:
        this.ttDWin = o;
    } else if (e === i.Today) switch (t) {
      case n.mainScore:
        this.tdMScore = o;
        break;

      case n.dailyScore:
        this.tdDScore = o;
        break;

      case n.mainWin:
        this.tdMWin = o;
        break;

      case n.dailyWin:
        this.tdDWin = o;
        break;

      case n.raceScore:
        this.tdDWin = o;
    }
  };

  t.prototype.getCachedDataByType = function (t, e) {
    if (e === i.Total) switch (t) {
      case n.mainScore:
        return this.ttMScore;

      case n.dailyScore:
        return this.ttDScore;

      case n.mainWin:
        return this.ttMWin;

      case n.dailyWin:
        return this.ttDWin;
    } else if (e === i.Today) switch (t) {
      case n.mainScore:
        return this.tdMScore;

      case n.dailyScore:
        return this.tdDScore;

      case n.mainWin:
        return this.tdMWin;

      case n.dailyWin:
      case n.raceScore:
        return this.tdDWin;
    }
  };

  t.prototype.clearData = function () {
    this.ttMScore = null;
    this.ttDScore = null;
    this.ttMWin = null;
    this.ttDWin = null;
    this.tdMScore = null;
    this.tdDScore = null;
    this.tdMWin = null;
    this.tdDWin = null;
  };

  t.prototype.getYdayRaceRankData = function () {
    var t = this.getLocalRaceRankData().ydayRRData;
    return null == t ? [] : t;
  };

  t.prototype.setYdayRaceRankData = function (t) {
    this.setLocalRaceRankData({
      ydayRRData: t
    });
  };

  t.prototype.setLocalRaceRankData = function (t) {
    var e = this.getLocalRaceRankData();
    this.localData = Object.assign(Object.assign({}, e), t);

    _idx.platform.setStorage("ydayRankData", this.localData);
  };

  t.prototype.getLocalRaceRankData = function () {
    null == this.localData && (this.localData = _idx.platform.getStorage("ydayRankData") || {});
    return this.localData;
  };

  return t;
}();

exports["default"] = u;

cc._RF.pop();