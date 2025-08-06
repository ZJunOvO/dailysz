"use strict";
cc._RF.push(module, '43d38GhCKVBYrlCS5iT8Rpi', 'taskMgr');
// scripts/taskMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.taskState = exports.taskChannel = exports.TaskType = exports.taskPro = exports.taskBase = void 0;

var _evts = require("evts");

var _idx = require("idx");

var _cfgMgr = require("cfgMgr");

var _pInfo = require("pInfo");

var _bagMgr = require("bagMgr");

var _lang = require("lang");

var l = function () {
  function t() {}

  t.initTask = function () {
    t.getTaskByType(d.daily, !0);
    t.getTaskByType(d.achieve, !0);
  };

  t.getTaskByType = function (e) {
    var o;
    var n = this;
    var i = _cfgMgr["default"].serverCfg[e];
    var s = t.baseTask[e];

    var c = t.saveData[e] || _pInfo["default"].ins.getTask(e);

    t.baseTask[e] = s = {};
    var l = 0 === Object.keys(c).length;
    null === (o = null == i ? void 0 : i.rules) || void 0 === o || o.forEach(function (t) {
      var o = n.baseTask[e][t.key];
      o || ((o = new u()).temp = t, o.data = c[t.key] || new f(), s[t.key] = o, c[t.key] = o.data);
    });
    l && _pInfo["default"].ins.setTask(e, c);
    t.saveData[e] || (t.saveData[e] = c);
    return s;
  };

  t.taskReset = function () {
    t.taskResetByTyp(d.daily);
  };

  t.taskResetByTyp = function (e) {
    var o;
    var n = _cfgMgr["default"].serverCfg[e];
    var i = t.saveData[e] || {};
    null === (o = null == n ? void 0 : n.rules) || void 0 === o || o.forEach(function (t) {
      i[t.key] ? (i[t.key].count = 0, i[t.key].state = h.Receive) : i[t.key] = new f();
    });
    t.saveData[e] = i;

    _pInfo["default"].ins.setTask(e, i);
  };

  t.updateTask = function (e, o) {
    void 0 === o && (o = d.daily);
    var r = t.baseTask[o];
    var l = t.saveData[o];
    if (r && e.data.state == h.Finish) for (var u in e.temp.get_by == p.ad_reward ? e.data.state = e.data.count >= e.temp.nums ? h.Rewared : h.Receive : e.data.state = h.Rewared, r[e.temp.key] = e, l[e.temp.key] = e.data, _pInfo["default"].ins.setTask(o, l), _idx.platform.reportEvent(_idx.ERepEvt.dailyTask, {
      taskId: _lang.lang[e.temp.key]
    }), _evts["default"].opE.emit({
      action: _evts["default"].UPDTASK,
      data: e
    }), e.temp.val) {
      e.temp.val.hasOwnProperty(u) && _bagMgr["default"].ins.addItem(u, e.temp.val[u]);
    }
  };

  t.doTask = function (e, o) {
    void 0 === o && (o = d.daily);
    var i = t.baseTask[o];
    var r = t.saveData[o];

    if (i) {
      var s;

      for (var c in i) {
        if (i.hasOwnProperty(c)) {
          var l = i[c];
          if (l.data.state != h.Receive) continue;
          var u = "string" == typeof e && Object.values(p).includes(e) ? "get_by" : "key";
          l.temp[u] == e && (l.data.count += 1, (l.data.count >= l.temp.nums || l.temp.get_by == p.ad_reward) && (l.data.state = h.Finish, r[c] = l.data), s = !0, _evts["default"].opE.emit({
            action: _evts["default"].UPDTASK,
            data: l
          }));

          _evts["default"].opE.emit({
            action: _evts["default"].UPD_MAIN_RED
          });
        }
      }

      s && _pInfo["default"].ins.setTask(o, r);
    }
  };

  t.taskCheck = function (e) {
    switch (e) {
      case _pInfo.gameType.normal:
      case _pInfo.gameType.freedom:
        t.doTask(p.cg_line);
        break;

      case _pInfo.gameType.race:
        t.doTask(p.qw_line);
        break;

      case _pInfo.gameType.challenge:
        t.doTask(p.daily_challenge);
    }
  };

  t.getFinishNum = function () {
    for (var e = _cfgMgr["default"].serverCfg[d.daily], o = t.getTaskByType(d.daily), n = null == e ? void 0 : e.rules, i = 0, a = 0, s = n.length; a < s; a++) {
      o[n[a].key].data.state == h.Finish && i++;
    }

    return i;
  };

  t.getUnFinishNum = function () {
    for (var e = _cfgMgr["default"].serverCfg[d.daily], o = t.getTaskByType(d.daily), n = null == e ? void 0 : e.rules, i = 0, a = 0, s = n.length; a < s; a++) {
      o[n[a].key].data.state == h.Receive && i++;
    }

    return i;
  };

  t.baseTask = {};
  t.saveData = {};
  return t;
}();

exports["default"] = l;

var u = function u() {};

exports.taskBase = u;
var p;
var d;
var h;

var f = function f() {
  this.count = 0;
  this.state = h.Receive;
};

exports.taskPro = f;

(function (t) {
  t.ad_reward = "ad_reward", t.cg_line = "cg_line", t.daily_challenge = "daily_challenge", t.qw_line = "qw_line";
})(p = exports.TaskType || (exports.TaskType = {}));

(function (t) {
  t.daily = "daily_tasks", t.achieve = "achieve_tasks";
})(d = exports.taskChannel || (exports.taskChannel = {}));

(function (t) {
  t[t.None = 0] = "None", t[t.Receive = 1] = "Receive", t[t.Finish = 2] = "Finish", t[t.Rewared = 3] = "Rewared";
})(h = exports.taskState || (exports.taskState = {}));

cc._RF.pop();