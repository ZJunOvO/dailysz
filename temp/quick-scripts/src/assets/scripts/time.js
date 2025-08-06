"use strict";
cc._RF.push(module, '59024eX+axMOIBY16DZlWQV', 'time');
// scripts/time.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _uData = require("uData");

var i = function () {
  function t() {}

  Object.defineProperty(t, "ins", {
    get: function get() {
      this._ins || (this._ins = new t());
      return this._ins;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.sync = function (t) {
    this.serverStartT = t || Date.now();
    this.clientStartT = Date.now();
  };

  Object.defineProperty(t.prototype, "serverTime", {
    get: function get() {
      return Math.floor((this.serverStartT + Date.now() - this.clientStartT) / 1e3);
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "loginTime", {
    get: function get() {
      this.loginT || (this.loginT = _uData["default"].ins.getLocalDataByKey("login_date"));
      return this.loginT;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "isSameDay", {
    get: function get() {
      if (!t.ins.serverTime || !t.ins.loginTime) return !0;
      var e = new Date(1e3 * t.ins.serverTime);
      var o = new Date(1e3 * t.ins.loginTime);
      return e.getFullYear() == o.getFullYear() && e.getMonth() == o.getMonth() && e.getDate() == o.getDate();
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "nextZeroTime", {
    get: function get() {
      var t = 1e3 * this.serverTime;
      var e = new Date(t);
      e.setDate(e.getDate() + 1);
      e.setHours(0, 0, 0, 0);
      return e.getTime() - t;
    },
    enumerable: !1,
    configurable: !0
  });

  t.getFormatHMS = function (t, e, o) {
    void 0 === e && (e = "HH:MM:SS");
    void 0 === o && (o = !0);
    var n = Math.floor(t / 86400);
    var i = n.toString();
    o && (i = (i = "00" + n).substring(i.length - 2));
    var r = Math.floor(t % 86400 / 3600);
    var a = r.toString();
    o && (a = (a = "00" + r).substring(a.length - 2));
    var s = Math.floor(t % 3600 / 60);
    var c = s.toString();
    o && (c = (c = "00" + s).substring(c.length - 2));
    var l = Math.floor(t % 3600 % 60);
    var u = l.toString();
    o && (u = (u = "00" + l).substring(u.length - 2));
    var p = {
      "D+": i,
      "H+": a,
      "M+": c,
      "S+": u
    };

    for (var d in p) {
      var h = new RegExp("(" + d + ")").exec(e);
      h && (e = e.replace(h[1], p[d]));
    }

    return e;
  };

  t.formatDate2Str = function (t, e) {
    void 0 === e && (e = !1);
    var o;
    var n;
    var i;
    var r = Math.floor(t / 86400);

    if (r > 0) {
      var a = r.toString();
      e && (a = (a = "00" + r).substring(a.length - 2));
      return a + "天";
    }

    if ((o = Math.floor(t % 86400 / 3600)) > 0) {
      var s = o.toString();
      e && (s = (s = "00" + o).substring(s.length - 2));
      return s + "小时";
    }

    if ((n = Math.floor(t % 3600 / 60)) > 0) {
      var c = n.toString();
      e && (c = (c = "00" + n).substring(c.length - 2));
      return c + "分钟";
    }

    if ((i = Math.floor(t % 3600 % 60)) > 0) {
      var l = i.toString();
      e && (l = (l = "00" + i).substring(l.length - 2));
      return l + "秒";
    }

    return "0秒";
  };

  t.prototype.formatDate = function (t) {
    var e = new Date(t);
    var o = e.getFullYear();
    var n = e.getMonth() + 1;
    var i = e.getDate();
    var r = e.getHours();
    var a = e.getMinutes();
    var s = e.getSeconds();
    return o + "-" + (n < 10 ? "0" : "") + n + "-" + (i < 10 ? "0" : "") + i + " " + (r < 10 ? "0" : "") + r + ":" + (a < 10 ? "0" : "") + a + ":" + (s < 10 ? "0" : "") + s;
  };

  return t;
}();

exports["default"] = i;

cc._RF.pop();