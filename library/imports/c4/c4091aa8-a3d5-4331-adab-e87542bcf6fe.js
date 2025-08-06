"use strict";
cc._RF.push(module, 'c4091qoo9VDMa2r6HVCvPb+', 'ui_rePlayRace');
// scripts/ui_rePlayRace.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _uData = require("uData");

var _lang = require("lang");

var _rankMgr = require("rankMgr");

var _raceRankItem = require("raceRankItem");

var _ui_rePlay = require("ui_rePlay");

var h = cc._decorator;
var f = h.ccclass;
var g = h.property;

var y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.scrollRank = null;
    e.selfRank = null;
    e.idxIconArr = [];
    e.rankLb = null;
    e.rankItem = null;
    e.rankLength = 10;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.rankLb.string = _lang.lang[40003];
    this.rankItem = this.scrollRank.content.children[0];
  };

  e.prototype.init = function (e) {
    var o = e.curScore;
    var n = e.continueCb;
    return __awaiter(this, void 0, void 0, function () {
      var e;
      var i;
      var r;
      var a;
      var l;
      var d;
      var h;
      var f;
      var g;
      var y;
      var m;
      var v;

      var _;

      var b;
      var w = this;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            return t.prototype.init.call(this, {
              curScore: o,
              continueCb: n
            }), [4, _rankMgr["default"].ins.getYdayRaceData()];

          case 1:
            for (e = s.sent(), i = [], e.data && (i = [].concat(e.data)), r = this.rankLength - 1, a = this.getRandomScoreArr(), l = [], d = _uData["default"].ins, h = {
              nick: d.getName(),
              score: o,
              idx: "",
              headUrl: d.getHeadImg()
            }, i.sort(function () {
              return Math.random() - 0.5;
            }), f = 0, g = 0; g < i.length && !(g >= r); g++) {
              y = i[g], m = d.getUid(), y.game_uid != m && (f++, l.push({
                nick: y.nickname,
                score: a[g].toString(),
                idx: "",
                headUrl: y.avatar
              }));
            }

            if (l.length < r) for (v = r - l.length, _ = 0; _ < v; _++) {
              b = "卷卷大王" + this.getRandString(), l.push({
                nick: b,
                score: a[f + _].toString(),
                idx: "",
                headUrl: ""
              });
            }
            return l.push(h), l.sort(function (t, e) {
              return parseInt(e.score) - parseInt(t.score);
            }), l.forEach(function (t, e) {
              t.idx = (e + 1).toString();
              var o = null;
              w.scrollRank.content.childrenCount > e ? o = w.scrollRank.content.children[e] : (o = cc.instantiate(w.rankItem), w.scrollRank.content.addChild(o));
              o.x = (cc.winSize.width + o.width) / 2;
              w.scheduleOnce(function () {
                w.showLoadAni(o);
              }, 0.05 * e);
              o.getComponent(_raceRankItem["default"]).initItem(t, w.idxIconArr[e]);
            }), this.selfRank.getComponent(_raceRankItem["default"]).initItem(h, this.idxIconArr[h.idx]), [2];
        }
      });
    });
  };

  e.prototype.showLoadAni = function (t) {
    cc.tween(t).to(0.5, {
      x: 0
    }, {
      easing: "backInOut"
    }).start();
  };

  e.prototype.getRandomScoreArr = function () {
    for (var t = [], e = this.rankLength - 1, o = 0; o < e; o++) {
      var n = void 0;
      var i = void 0;
      o < 7 ? (n = 100 * (7 - o), i = 100 * (8 - o)) : o >= 7 && o <= 8 && (n = -20 * (o - 8), i = -80 * o + 660);
      var r = Math.floor(Math.random() * (i - n)) + n;
      t.push(r);
    }

    return t;
  };

  e.prototype.getRandString = function () {
    for (var t = [], e = 0; e < 4; e++) {
      var o;
      var n = Math.floor(3 * Math.random());
      o = 0 === n ? Math.floor(26 * Math.random()) + 65 : 1 === n ? Math.floor(26 * Math.random()) + 97 : Math.floor(10 * Math.random()) + 48;
      t.push(o);
    }

    return String.fromCharCode.apply(String, t);
  };

  __decorate([g(cc.ScrollView)], e.prototype, "scrollRank", void 0);

  __decorate([g(_raceRankItem["default"])], e.prototype, "selfRank", void 0);

  __decorate([g([cc.SpriteFrame])], e.prototype, "idxIconArr", void 0);

  __decorate([g(cc.Label)], e.prototype, "rankLb", void 0);

  return __decorate([f], e);
}(_ui_rePlay["default"]);

exports["default"] = y;

cc._RF.pop();