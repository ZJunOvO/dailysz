"use strict";
cc._RF.push(module, 'b79dds9PTVL16Wia/aps1uK', 'festivalMgr');
// scripts/festivalMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.fesTaskKey = void 0;
var a;

var _time = require("time");

var _cfgMgr = require("cfgMgr");

var _pInfo = require("pInfo");

var _bagMgr = require("bagMgr");

var p = cc._decorator;
var d = p.ccclass;
p.property;

(function (t) {
  t.raceScore = "race_score";
  t.raceTimes = "race_times";
  t.costPower = "cost_power";
  t.throughMain = "through_main";
  t.finishPuzzle = "finish_puzzle";
})(a = exports.fesTaskKey || (exports.fesTaskKey = {}));

var h = function () {
  function t() {
    this.fesBeginTime = 0;
    this.fesEndTime = 0;
    this.fesTaskDatas = null;
    this.jigsawNum = 1;
  }

  var e;
  e = t;
  Object.defineProperty(t, "ins", {
    get: function get() {
      return this._ins || (this._ins = new e());
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.isFesEnd = function () {
    var t = _time["default"].ins.serverTime;
    return t < this.fesBeginTime || t >= this.fesEndTime;
  };

  t.prototype.isFesNotOpen = function () {
    return _time["default"].ins.serverTime < this.fesBeginTime;
  };

  t.prototype.getTodayMaxPro = function () {
    var t = _time["default"].ins.serverTime;
    var e = Math.floor((t - this.fesBeginTime) / 86400);
    return e < 0 ? 0 : e;
  };

  t.prototype.getNowTaskIdx = function () {
    var t = this.getTodayMaxPro();

    var e = _pInfo["default"].ins.getFesPro();

    return Math.min(e, t, 24);
  };

  t.prototype.getNowTaskPro = function () {
    return _pInfo["default"].ins.getFesTaskPro();
  };

  t.prototype.getFesPro = function () {
    return _pInfo["default"].ins.getFesPro();
  };

  t.prototype.getNowTaskData = function () {
    var t = this.getNowTaskIdx();
    return this.fesTaskDatas[t];
  };

  t.prototype.isTaskLocked = function () {
    return _pInfo["default"].ins.getFesPro() > this.getTodayMaxPro();
  };

  t.prototype.isTaskAllFinished = function () {
    return _pInfo["default"].ins.getFesPro() >= this.fesTaskDatas.length;
  };

  t.prototype.updPro = function (t, e) {
    if (!this.isTaskLocked() && this.fesTaskDatas && this.getNowTaskData().get_by == t) {
      var o = _pInfo["default"].ins.getFesTaskPro();

      var n = 0;

      switch (t) {
        case a.raceScore:
          n = e;
          break;

        default:
          n = e + Number(o);
      }

      _pInfo["default"].ins.setFesTaskPro(n);
    }
  };

  t.prototype.finishFesTask = function () {
    var t = _pInfo["default"].ins;
    var e = t.getFesPro();
    t.setFesPro(e + 1);
    t.setFesTaskPro(0);
  };

  t.prototype.isPuzzleLocked = function () {
    return this.getFesPuzzleLv() - 1 > this.getTodayMaxPro();
  };

  t.prototype.getFesPuzzleLv = function () {
    return _pInfo["default"].ins.getFesPuzzleLv();
  };

  t.prototype.finishFesPuzzleLv = function () {
    var t = _pInfo["default"].ins.getFesPuzzleLv();

    _pInfo["default"].ins.setFesPuzzleLv(t + 1);
  };

  t.prototype.clearFesPuzzleLv = function () {
    var t = _pInfo["default"].ins;
    t.setFesPuzzleLv(1);
    t.setFesPro(0);
    t.setFesTaskPro(0);
  };

  t.prototype.getRedNum = function () {
    var t = 0;
    if (!this.fesTaskDatas) return t;

    if (this.isPuzzleLocked() || t++, !this.isTaskLocked()) {
      var e = this.getNowTaskData().nums;
      this.getNowTaskPro() >= e && t++;
    }

    return t;
  };

  t.prototype.updateFestivalData = function () {
    var t;
    return __awaiter(this, void 0, void 0, function () {
      var e;
      var o;
      return __generator(this, function (n) {
        switch (n.label) {
          case 0:
            return e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.festival_tasks, o = (null == e ? void 0 : e.fesName) || "newYear", _pInfo["default"].ins.getFesName() != o && (_pInfo["default"].ins.setFesName(o), this.clearFesPuzzleLv()), this.fesBeginTime = Number(null == e ? void 0 : e.beginTime) || 1707148800, this.fesEndTime = Number(null == e ? void 0 : e.endTime) || this.fesBeginTime + 216e4, this.fesTaskDatas = null == e ? void 0 : e.rules, this.jigsawNum = (null == e ? void 0 : e.jigsawNum) || 1, [2];

          case 1:
            return [2, n.sent()];
        }
      });
    });
  };

  t.prototype.getFesPuzzleInfo = function () {
    var t = this.fesPuzzleData;
    var e = t[0];
    var o = t[1];
    var n = this.getFesPuzzleLv() - 1;
    var i = t[2 + o + (0 == n ? 0 : t[2 + n - 1] + n)];
    return {
      id: n,
      type: e,
      size: 255 & i,
      diff: i >> 8 & 255
    };
  };

  t.prototype.getFesPuzzleData = function () {
    for (var t = this.fesPuzzleData, e = t[1], o = this.getFesPuzzleLv() - 1, n = 0 == o ? 0 : t[2 + o - 1] + o, i = t[2 + o] + o, r = t[2 + e + n], a = Math.pow(255 & r, 2), s = 2 + e + i + 1, c = [], l = 0, u = 2 + e + n + 1; u < s; u++) {
      for (var p = t[u], d = 0; d < 32; d++) {
        var h = 1 << d & 4294967295;
        if (c[l++] = (p & h) == h ? 1 : 0, l == a) break;
      }

      if (l == a) break;
    }

    return c;
  };

  t.prototype.getFesPuzzleDiff = function () {
    return this.getFesPuzzleInfo().diff;
  };

  t.prototype.getFesLevelCost = function () {
    var t = e.ins.getFesPuzzleDiff();
    var o = _cfgMgr["default"].serverCfg.difficulty_rules.rules;
    var n = 10;
    var i = 1;

    for (var r in o) {
      var a = o[r];
      if (n = Number(a.times_val), i === t) break;
      i++;
    }

    return n;
  };

  t.prototype.getFesPuzzleSprFrame = function () {
    var t = this;
    return new Promise(function (e, o) {
      t.bundle.load("levels/" + t.getFesPuzzleLv(), cc.SpriteFrame, function (t, n) {
        t ? o() : e(n);
      });
    });
  };

  t.prototype.getFesDownSprFrame = function () {
    var t = this;
    return new Promise(function (e, o) {
      t.bundle.load("chapter", cc.SpriteFrame, function (t, n) {
        t ? o() : e(n);
      });
    });
  };

  t.prototype.isPuzzleMax = function () {
    return e.ins.getFesPuzzleLv() > 25;
  };

  t.prototype.isJigsawMax = function () {
    return _bagMgr["default"].ins.getItemCount("newYear_pieces") >= 105 * this.jigsawNum;
  };

  t.prototype.getJigsawNum = function () {
    return this.jigsawNum;
  };

  return e = __decorate([d], t);
}();

exports["default"] = h;

cc._RF.pop();