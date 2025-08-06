"use strict";
cc._RF.push(module, 'fcc69/466NH/5HdjeFaWPR1', 'challengeMgr');
// scripts/challengeMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _numberUtils = require("NumberUtils");

var _request = require("request");

var _time = require("time");

var _uData = require("uData");

var _global = require("global");

var _pInfo = require("pInfo");

var p = function () {
  function t() {
    this.firstYear = 2024;
    this.firstMonth = 2;
    this.lvDatas = [];
    this.defalutLvData = [{
      id: 1,
      type: 1,
      diff: 3,
      count: 500
    }, {
      id: 2,
      type: 2,
      diff: 4,
      size: 15,
      denstiy: 0.6,
      count: 10
    }, {
      id: 3,
      type: 3,
      diff: 3,
      size: 15,
      denstiy: 0.6,
      count: 5
    }, {
      id: 4,
      type: 1,
      diff: 3,
      count: 501
    }, {
      id: 5,
      type: 2,
      diff: 4,
      size: 15,
      denstiy: 0.6,
      count: 10
    }, {
      id: 6,
      type: 3,
      diff: 3,
      size: 15,
      denstiy: 0.6,
      count: 5
    }, {
      id: 7,
      type: 1,
      diff: 3,
      count: 502
    }, {
      id: 8,
      type: 2,
      diff: 4,
      size: 15,
      denstiy: 0.6,
      count: 10
    }, {
      id: 9,
      type: 3,
      diff: 3,
      size: 15,
      denstiy: 0.6,
      count: 5
    }, {
      id: 10,
      type: 1,
      diff: 3,
      count: 503
    }, {
      id: 11,
      type: 2,
      diff: 4,
      size: 15,
      denstiy: 0.6,
      count: 10
    }, {
      id: 12,
      type: 3,
      diff: 3,
      size: 15,
      denstiy: 0.6,
      count: 5
    }, {
      id: 13,
      type: 1,
      diff: 3,
      count: 504
    }, {
      id: 14,
      type: 2,
      diff: 4,
      size: 15,
      denstiy: 0.6,
      count: 10
    }, {
      id: 15,
      type: 3,
      diff: 3,
      size: 15,
      denstiy: 0.6,
      count: 5
    }, {
      id: 16,
      type: 1,
      diff: 3,
      count: 505
    }, {
      id: 17,
      type: 2,
      diff: 4,
      size: 15,
      denstiy: 0.6,
      count: 10
    }, {
      id: 18,
      type: 3,
      diff: 3,
      size: 15,
      denstiy: 0.6,
      count: 5
    }, {
      id: 19,
      type: 1,
      diff: 3,
      count: 506
    }, {
      id: 20,
      type: 2,
      diff: 4,
      size: 15,
      denstiy: 0.6,
      count: 10
    }, {
      id: 21,
      type: 3,
      diff: 3,
      size: 15,
      denstiy: 0.6,
      count: 5
    }, {
      id: 22,
      type: 1,
      diff: 3,
      count: 507
    }, {
      id: 23,
      type: 2,
      diff: 4,
      size: 15,
      denstiy: 0.6,
      count: 10
    }, {
      id: 24,
      type: 3,
      diff: 3,
      size: 15,
      denstiy: 0.6,
      count: 5
    }, {
      id: 25,
      type: 1,
      diff: 3,
      count: 508
    }, {
      id: 26,
      type: 2,
      diff: 4,
      size: 15,
      denstiy: 0.6,
      count: 10
    }, {
      id: 27,
      type: 3,
      diff: 3,
      size: 15,
      denstiy: 0.6,
      count: 5
    }, {
      id: 28,
      type: 1,
      diff: 3,
      count: 509
    }, {
      id: 29,
      type: 2,
      diff: 4,
      size: 15,
      denstiy: 0.6,
      count: 10
    }, {
      id: 30,
      type: 3,
      diff: 3,
      size: 15,
      denstiy: 0.6,
      count: 5
    }, {
      id: 31,
      type: 1,
      diff: 3,
      count: 600
    }];
  }

  Object.defineProperty(t, "ins", {
    get: function get() {
      return this._ins || (this._ins = new t());
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.initNowMonthData = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      var n;
      var r;
      var a;
      var c = this;
      return __generator(this, function () {
        return this.loaded ? [2] : (this.loaded = 1, t = 1e3 * _time["default"].ins.serverTime, e = new Date(t), o = e.getFullYear(), n = e.getMonth() + 1, r = this.getIdxByDate(o, n), a = 100 * o + n, cc.resources.load("challenge", cc.JsonAsset, function (t, e) {
          !t && e && e.json ? c.lvDatas[r] = e.json : c.lvDatas[r] = c.defalutLvData;
        }), [2]);
      });
    });
  };

  t.prototype.getTodayIsFin = function () {
    var t = 1e3 * _time["default"].ins.serverTime;
    var e = new Date(t);
    var o = e.getFullYear();
    var n = e.getMonth() + 1;
    var i = e.getDate() - 1;
    return this.getfinData(o, n)[i];
  };

  t.prototype.getMonthData = function (t, e) {
    var o = new Date(t, e - 1, 1).getDay();
    return [o = 0 == o ? 7 : o, new Date(t, e, 0).getDate()];
  };

  t.prototype.getfinData = function (t, e) {
    var o = this.getIdxByDate(t, e);
    this.getLvData(o, t, e);

    for (var n = _pInfo["default"].ins.getChallengeData()[o] || 0, i = [], r = 0; r < 31; r++) {
      var a = this.getIsFin(n, r);
      i.push(a);
    }

    return i;
  };

  t.prototype.getLastUnFinIdx = function (t, e) {
    for (var o = this.getfinData(t, e), n = this.getMonthData(t, e), i = (n[0], n[1]), r = 0, a = 0; a < i; a++) {
      o[a] || this.isLocked(t, e, a) || (r = a);
    }

    return r;
  };

  t.prototype.getFinLvNum = function (t, e) {
    for (var o = this.getfinData(t, e), n = 0, i = 0, r = o.length; i < r; i++) {
      o[i] && n++;
    }

    return n;
  };

  t.prototype.getTheMonthIsFin = function (t, e) {
    for (var o = this.getfinData(t, e), n = this.getMonthData(t, e), i = (n[0], n[1]), r = 0, a = 0; a < i; a++) {
      o[a] && r++;
    }

    return r >= i;
  };

  t.prototype.getIsFin = function (t, e) {
    return (t & 1 << e) >> e != 0;
  };

  t.prototype.getLvData = function (t, e, o) {
    var n = this;

    if (!(t < 0)) {
      var i = this.lvDatas[t];
      if (i) return i;
      var r = 100 * e + o;
      cc.resources.load("challenge", cc.JsonAsset, function (e, o) {
        !e && o && o.json && Array.isArray(o.json) ? n.lvDatas[t] = o.json : n.lvDatas[t] = n.defalutLvData;
      });
    }
  };

  t.prototype.getLvDataByDate = function (t, e, o) {
    var n = this.getIdxByDate(t, e);
    var i = this.lvDatas[n];

    if (i) {
      var a = i[o];

      var s = _numberUtils["default"].RandomInt(0, this.defalutLvData.length - 1);

      a || (a = this.defalutLvData[s]);
      return a;
    }

    this.getLvData(n, t, e);
    return this.defalutLvData[o];
  };

  t.prototype.winChallenge = function (t) {
    var e = t.year;
    var o = t.month;
    var n = t.day;

    if (!this.getfinData(e, o)[n - 1]) {
      var i = this.getIdxByDate(e, o);

      var r = _pInfo["default"].ins.getChallengeData();

      var a = r[i] || 0;
      a += Math.pow(2, n - 1);
      r[i] = a;

      _pInfo["default"].ins.setChallengeData(r);

      this.updateChallengeData(e, o, n);

      _uData["default"].ins._setLocalAndCloudData();
    }
  };

  t.prototype.updateChallengeData = function (t, e, o) {
    var n = t + this.addZeroToNum(e) + this.addZeroToNum(o);

    _request["default"].ins.updateChallengeData(n);
  };

  t.prototype.getRequestChallengeData = function (t, e) {
    var o = t + this.addZeroToNum(e);
    return _request["default"].ins.getChallengeData(o);
  };

  t.prototype.addZeroToNum = function (t) {
    if (t < 0) return "";
    var e = "";
    t < 10 && (e = "0");
    return e + t;
  };

  t.prototype.getIdxByDate = function (t, e) {
    return 12 * (t - this.firstYear) + (e - this.firstMonth);
  };

  t.prototype.isLocked = function (t, e, o) {
    var n = 1e3 * _time["default"].ins.serverTime;
    var i = new Date(n);
    var r = i.getFullYear();
    var a = i.getMonth() + 1;
    var c = i.getDate() - 1;
    return t != r ? t > r : e != a ? e > a : o > c;
  };

  t.prototype.getChaPackData = function (t, e) {
    for (var o = this.getIdxByDate(t, e), n = _pInfo["default"].ins.getChallengePackData()[o] || 0, i = [], r = 0; r < 4; r++) {
      var a = this.getIsFin(n, r);
      i.push(a);
    }

    return i;
  };

  t.prototype.setChaPackData = function (t, e, o) {
    var n = this.getIdxByDate(t, e);

    var i = _pInfo["default"].ins.getChallengePackData();

    var r = i[n] || 0;
    r += Math.pow(2, o);
    i[n] = r;

    _pInfo["default"].ins.setChallengePackData(i);
  };

  t.prototype.getMonthRed = function (t, e) {
    for (var o = this.getFinLvNum(t, e), n = this.getChaPackData(t, e), i = 0, r = 0; r < 4; r++) {
      o >= 7 * (r + 1) && !n[r] && i++;
    }

    return i;
  };

  t.prototype.getBeforeMonthRed = function (t, e) {
    for (var o = t, n = e, i = this.getIdxByDate(o, n) + 1, r = 0, a = 0; a < i; a++) {
      r += this.getMonthRed(o, n), --n < 1 && (o -= 1, n = 12);
    }

    return r;
  };

  t.prototype.getAllMonthRed = function () {
    var t = 1e3 * _time["default"].ins.serverTime;
    var e = new Date(t);
    var o = e.getFullYear();
    var n = e.getMonth() + 1;
    return this.getBeforeMonthRed(o, n);
  };

  return t;
}();

exports["default"] = p;

cc._RF.pop();