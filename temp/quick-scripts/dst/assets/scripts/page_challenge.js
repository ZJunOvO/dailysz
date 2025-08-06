
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/page_challenge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ffe87NgStNFVZHkaf3sEeX1', 'page_challenge');
// scripts/page_challenge.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _idx = require("idx");

var _mySafeArea = require("mySafeArea");

var _numberUtils = require("NumberUtils");

var _res = require("res");

var _time = require("time");

var _cfgMgr = require("cfgMgr");

var _global = require("global");

var _bagMgr = require("bagMgr");

var _challengeMgr = require("challengeMgr");

var _panelMgr = require("panelMgr");

var _skinMgr = require("skinMgr");

var _pInfo = require("pInfo");

var _dateItem = require("dateItem");

var _packItem = require("packItem");

var T = cc._decorator;
var I = T.ccclass;
var D = T.property;

var P = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.dateNodes = null;
    e.dateNode0 = null;
    e.dateNode1 = null;
    e.dateItem = null;
    e.yearLb = null;
    e.monthLb = null;
    e.costLb = null;
    e.topNode = null;
    e.leftNode = null;
    e.rightNode = null;
    e.lvPerLb = null;
    e.finNumLb = null;
    e.packPro = null;
    e.packItems = [];
    e.midBg = null;
    e.packageNode = null;
    e.maskNode = null;
    e.topSp = null;
    e.spineNode = null;
    e.beforeRedLb = null;
    e.afterRedLb = null;
    e.bgNode = null;
    e.hengNode = null;
    e.curYear = 0;
    e.curMonth = 0;
    e.curDay = 0;
    e.lvData = {
      type: 1,
      diff: 3
    };
    e.isAni = !1;
    e.isFin = !1;
    e.gameDate = null;
    e.loadPackEnd = !1;
    e.crossData = {};
    e.isLoad = !0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = this;
    this.node.height = cc.winSize.height;
    _global["default"].padScale && (this.hengNode.scaleX = this.bgNode.scaleX = this.topSp.node.parent.scale = _global["default"].padScale);

    _evts["default"].opE.on(this.onOperTap.bind(this));

    _res["default"].ins.getBundleByString("resSps").then(function (e) {
      e.load("game/normal/top1", cc.SpriteFrame, function (e, o) {
        !e && t.node && t.node.isValid && (t.topSp.spriteFrame = o);
      }), e.load("spine/package/action", sp.SkeletonData, function (e, o) {
        if (!e && t.node && t.node.isValid) {
          for (var n = 0, i = t.packItems.length; n < i; n++) {
            t.packItems[n].initItem(n, o);
          }

          t.setPackPer(), t.loadPackEnd = !0;
        }
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('resSps')", t);
    });

    this.loadGirl();
  };

  e.prototype.loadGirl = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function () {
        _skinMgr["default"].ins.updateRole(_pInfo["default"].ins.getUsingSkin().role, this.spineNode);

        return [2];
      });
    });
  };

  e.prototype.onOperTap = function (t) {
    var e = null == t ? void 0 : t.action;
    if (e) switch (e) {
      case _evts["default"].UPD_MAIN_RED:
        this.updateReds();
        break;

      case _evts["default"].SKIN_CHG:
        this.loadGirl();
    }
  };

  e.prototype.start = function () {
    var t = this;
    this.scheduleOnce(function () {
      t.adapter();
      t.initPanel();
    });
  };

  e.prototype.onEnable = function () {
    var t = this;
    this.isLoad || _challengeMgr["default"].ins.getRequestChallengeData(this.curYear, this.curMonth).then(function (e) {
      e.status && (t.crossData = e.data, t.setCrossNum());
    })["catch"](function (t) {
      console.error("getRequestChallengeDataErr", t);
    });
    this.isLoad = !1;
  };

  e.prototype.adapter = function () {
    var t = _mySafeArea.getSafeAreaRect().yMin;

    var e = this.node.height - 1280 - t;
    this.spineNode.y += e / 6;
    this.topNode.y -= t;
    this.topNode.removeComponent(cc.Widget);
  };

  e.prototype.initPanel = function () {
    var t = this;
    var e = 1e3 * _time["default"].ins.serverTime;
    var o = new Date(e);
    var n = o.getDate();
    var i = o.getFullYear();
    var r = o.getMonth() + 1;

    if (_global["default"].challengeLv) {
      var a = Math.trunc;
      var s = a(_global["default"].challengeLv / 1e4);
      var c = a(_global["default"].challengeLv % 1e4 / 100);
      _challengeMgr["default"].ins.getTheMonthIsFin(i, r) || (i = s, r = c);
    }

    this.curYear = i;
    this.curMonth = r;
    this.curDay = n;
    this.yearLb.string = this.curYear + "年";
    this.monthLb.string = this.curMonth + "";
    this.initItems();
    this.checkBtns();
    this.getCrossData();

    _res["default"].ins.getBundleByString("resSps").then(function (e) {
      e.load("spine/package/action", sp.SkeletonData, function (e, o) {
        if (!e && t.node && t.node.isValid) {
          for (var n = 0, i = t.packItems.length; n < i; n++) {
            t.packItems[n].initItem(n, o);
          }

          t.setPackPer();
          t.loadPackEnd = !0;
        }
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('resSps')", t);
    });
  };

  e.prototype.initItems = function () {
    for (var t = this.curYear, e = this.curMonth, o = 0, n = 0, i = 0; i < 42; i++) {
      var r = cc.instantiate(this.dateItem);
      r.active = !0;
      r.parent = this.dateNode1;
      r.x = 92 * o;
      r.y = -86 * n;
      ++o > 6 && (o = 0, n++);
    }

    this.setItemsByDate(this.dateNode1, t, e);
    var a = 1e3 * _time["default"].ins.serverTime;
    var s = new Date(a);
    var c = s.getFullYear();
    var l = s.getMonth() + 1;
    var u = s.getDate();
    var p = _challengeMgr["default"].ins;
    var d = p.getLastUnFinIdx(t, e);
    var f = p.getFinLvNum(t, e);
    c == t && l == e && u == f && (d = u - 1);
    this.setIsSelect(d);
    this.dateNode0.y += 516;
    o = 0;
    n = 0;
    this.loadDateItem(0, o, n);
  };

  e.prototype.loadDateItem = function (t, e, o) {
    var n = this;

    if (!(t >= 42)) {
      var i = cc.instantiate(this.dateItem);
      i.active = !0;
      i.parent = this.dateNode0;
      i.x = 92 * e;
      i.y = -86 * o;
      ++e > 6 && (e = 0, o++);
      t++;
      this.scheduleOnce(function () {
        n.loadDateItem(t, e, o);
      }, 0);
    }
  };

  e.prototype.checkBtns = function () {
    var t = 1e3 * _time["default"].ins.serverTime;
    var e = new Date(t);
    var o = e.getFullYear();
    var n = e.getMonth() + 1;
    var i = _challengeMgr["default"].ins;
    var r = this.curYear;
    var a = this.curMonth;
    this.rightNode.active = o != r || n != a;
    r == i.firstYear && a == i.firstMonth ? this.leftNode.active = !1 : this.leftNode.active = !0;
    this.updateReds();
  };

  e.prototype.updateReds = function () {
    var t = _challengeMgr["default"].ins;
    var e = this.curYear;
    var o = this.curMonth;
    var n = t.getMonthRed(e, o);
    var i = t.getBeforeMonthRed(e, o);
    var r = i - n;
    var a = t.getAllMonthRed() - i;
    r > 0 ? (this.beforeRedLb.node.parent.active = !0, this.beforeRedLb.string = r + "", this.beforeRedLb.node.x = _global["default"].getCharXOffset(this.beforeRedLb.string)) : this.beforeRedLb.node.parent.active = !1;
    a > 0 ? (this.afterRedLb.node.parent.active = !0, this.afterRedLb.string = a + "", this.afterRedLb.node.x = _global["default"].getCharXOffset(this.afterRedLb.string)) : this.afterRedLb.node.parent.active = !1;
  };

  e.prototype.rePanel = function (t) {
    var e = this;
    var o = this.curYear;
    var n = this.curMonth;
    var i = 516 * t;
    var r = this.dateNode0.active ? this.dateNode0 : this.dateNode1;
    var a = this.dateNode0.active ? this.dateNode1 : this.dateNode0;
    a.y = r.y - i;
    this.setItemsByDate(a, o, n);
    this.dateNode0.active = !0;
    this.dateNode1.active = !0;
    this.isAni = !0;
    cc.tween(this.dateNodes).by(0.2, {
      y: i
    }).call(function () {
      e.isAni = !1, r.active = !1, a.active = !0;

      var t = _challengeMgr["default"].ins.getLastUnFinIdx(e.curYear, e.curMonth);

      e.setIsSelect(t);
    }).start();
    this.yearLb.string = o + "年";
    this.monthLb.string = n + "";
    this.loadPackEnd && this.setPackPer();
    this.getCrossData();
  };

  e.prototype.setPackPer = function () {
    var t = _challengeMgr["default"].ins;
    var e = this.curYear;
    var o = this.curMonth;
    var n = t.getMonthData(e, o);
    var i = (n[0], n[1]);
    var r = t.getFinLvNum(e, o);
    this.lvPerLb.string = r + "/" + i;
    this.packPro.progress = r / 28;

    for (var a = t.getChaPackData(e, o), s = 0, c = this.packItems.length; s < c; s++) {
      var l = 7 * (s + 1);
      var u = this.packItems[s];
      u.setIsGet(!1);
      u.setFinish(!1);
      r >= l && u.setFinish(!0);
      a[s] && u.setIsGet(!0);
    }
  };

  e.prototype.setItemsByDate = function (t, e, o) {
    for (var n = this, i = _challengeMgr["default"].ins, r = i.getfinData(e, o), a = i.getMonthData(e, o), s = a[0], c = a[1], l = function l(a) {
      var l = t.children[a];
      var p = a - s + 1;
      var d = l.getComponent(_dateItem["default"]);
      p < 0 || p >= c ? l.active = !1 : (l.active = !0, d.setDate(p + 1), l.off("click"), i.isLocked(e, o, p) ? d.setLocked(!0) : (l.on("click", function () {
        n.onBtnChgStartData(p);
      }, u), d.setLocked(!1)), d.setFinish(r[p]));
    }, u = this, p = 0, d = t.childrenCount; p < d; p++) {
      l(p);
    }
  };

  e.prototype.setIsSelect = function (t) {
    for (var e = this.dateNode0.active ? this.dateNode0 : this.dateNode1, o = 0, n = e.childrenCount; o < n; o++) {
      var i = e.children[o];
      i && i.getComponent(_dateItem["default"]).setSelected(!1);
    }

    var r = _challengeMgr["default"].ins;
    var a = r.getMonthData(this.curYear, this.curMonth);
    var s = a[0];
    var c = (a[1], t + s - 1);
    var l = r.getfinData(this.curYear, this.curMonth);
    this.isFin = l[t];
    var u = e.children[c];
    u && u.getComponent(_dateItem["default"]).setSelected(!0);
    this.lvData = r.getLvDataByDate(this.curYear, this.curMonth, t);
    var p = {};
    p.year = this.curYear;
    p.month = this.curMonth;
    p.day = t + 1;
    p.isFin = l[t];
    this.gameDate = p;
    this.setCrossNum();
    var d = this.getLevelCost();
    this.costLb.string = "-" + d;
  };

  e.prototype.getCrossData = function () {
    var t = this;

    var e = _challengeMgr["default"].ins.getRequestChallengeData(this.curYear, this.curMonth);

    this.crossData = {};
    e.then(function (e) {
      e.status && (t.crossData = e.data, t.setCrossNum());
    })["catch"](function (t) {
      console.error("getRequestChallengeDataErr", t);
    });
  };

  e.prototype.setCrossNum = function () {
    var t = this.gameDate;
    var e = _challengeMgr["default"].ins;
    var o = e.addZeroToNum(t.month);
    var n = e.addZeroToNum(t.day);
    var i = t.year + "-" + o + "-" + n;
    var r = e.getfinData(t.year, t.month);
    var a = r[t.day - 1] ? 1 : 0;
    var s = this.crossData[i] || a;
    this.finNumLb.string = s + "";
    var c = r[t.day - 1] ? s : s + 1;
    this.gameDate.num = c;
  };

  e.prototype.onBtnChgStartData = function (t) {
    this.isAni || this.setIsSelect(t);
  };

  e.prototype.onBtnStart = function () {
    var t = this;

    if (!this.isAni) {
      var e = this.getLevelCost();
      if (_pInfo["default"].ins.getPower() < e) _panelMgr["default"].ins.open("ui/ui_getRes", {
        itemId: "times"
      });else {
        var o = this.lvData;

        if (o.date = this.gameDate, o.type === _pInfo.challengeType.worm) {
          var n = o.count || _numberUtils["default"].RandomInt(1, 460);

          (n < 0 || n > 460) && (n = Math.abs(n) % 460);
          o.count = n;

          _idx.platform.showLoading();

          cc.assetManager.loadRemote(_global.OssConfig.challengeWormUrl + n + ".json", cc.JsonAsset, function (n, i) {
            _idx.platform.hideLoading();

            !n && i && i.json ? o.data = i.json : o.data = {
              size: 15,
              data: [[188, 203, 218, 219, 220, 221, 206, 191, 192, 193, 194, 179, 164, 149, 148, 147, 132, 117, 102, 87, 72, 71, 70, 69, 84, 99, 114, 113, 112, 111, 110, 95, 80, 65, 50, 49, 48, 47, 62, 77, 76, 75, 90, 105, 120], [186, 185, 170, 155, 154, 153, 138, 123, 108, 107, 122, 137, 152, 151, 166, 167, 182, 197], [74, 59, 44, 43, 28, 13, 12, 11, 26, 41, 40, 39, 38, 23, 22, 21, 6, 5, 4, 3, 18, 17, 16, 15], [160, 159, 158, 157, 142, 143, 144, 145]]
            };

            _panelMgr["default"].ins.open("ui/ui_challengeInfo", {
              lvData: o,
              cost: e,
              crossNum: t.finNumLb.string
            });
          });
        } else _panelMgr["default"].ins.open("ui/ui_challengeInfo", {
          lvData: o,
          cost: e,
          crossNum: this.finNumLb.string
        });
      }
    }
  };

  e.prototype.onBtnChgMonth = function (t, e) {
    if (!this.isAni) {
      var o = Number(e);
      var n = this.getNewDate(o);
      var i = n[0];
      var r = n[1];
      this.curYear = i;
      this.curMonth = r;
      var a = _challengeMgr["default"].ins;
      var s = 1e3 * _time["default"].ins.serverTime;
      var c = new Date(s);
      var l = c.getFullYear();
      var u = c.getMonth() + 1;
      this.curYear == a.firstYear && this.curMonth < a.firstMonth ? this.curMonth = a.firstMonth : this.curYear == l && this.curMonth > u ? this.curMonth = u : (this.checkBtns(), this.rePanel(o));
    }
  };

  e.prototype.getNewDate = function (t) {
    var e = t;
    var o = this.curYear;
    var n = this.curMonth;
    (n += e) < 1 ? (o -= 1, n = 12) : n > 12 && (o += 1, n = 1);
    return [o, n];
  };

  e.prototype.getLevelCost = function () {
    var t;
    var e;
    var o = (null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.daily_challenge) || void 0 === e ? void 0 : e.consume) || 30;
    this.isFin && (o = 0);
    return o;
  };

  e.prototype.onBtnPack = function (t, e) {
    var o;
    var n;

    if (!this.isAni) {
      var i = Number(e);
      var r = this.curYear;
      var a = this.curMonth;
      var s = _challengeMgr["default"].ins;
      var l = s.getFinLvNum(r, a);
      var u = s.getChaPackData(r, a);
      var p = 7 * (i + 1);
      var d = (null === (n = null === (o = _cfgMgr["default"].serverCfg) || void 0 === o ? void 0 : o.daily_challenge) || void 0 === n ? void 0 : n.numreward)[i] || {
        times: 150,
        coin: 150,
        puzzle_pieces: 20
      };
      var h = this.packItems[i];
      var g = [];

      for (var _ in d) {
        var b = d[_];
        var w = h.node;
        var S = w.parent.convertToWorldSpaceAR(w.position);
        var T = {};
        T.itemId = _;
        T.worldPos = S;
        T.value = Number(b);
        g.push(T);
      }

      if (g.length) if (l >= p && !u[i]) {
        for (var _ in h.setIsGet(!0), s.setChaPackData(r, a, i), d) {
          b = d[_], _bagMgr["default"].ins.addItem(_, Number(b));
        }

        _evts["default"].opE.emit({
          action: _evts["default"].UPD_MAIN_RED
        });

        _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: g
        });
      } else _panelMgr["default"].ins.open("ui/ui_preReward", {
        itemDatas: g
      });
    }
  };

  __decorate([D(cc.Node)], e.prototype, "dateNodes", void 0);

  __decorate([D(cc.Node)], e.prototype, "dateNode0", void 0);

  __decorate([D(cc.Node)], e.prototype, "dateNode1", void 0);

  __decorate([D(cc.Prefab)], e.prototype, "dateItem", void 0);

  __decorate([D(cc.Label)], e.prototype, "yearLb", void 0);

  __decorate([D(cc.Label)], e.prototype, "monthLb", void 0);

  __decorate([D(cc.Label)], e.prototype, "costLb", void 0);

  __decorate([D(cc.Node)], e.prototype, "topNode", void 0);

  __decorate([D(cc.Node)], e.prototype, "leftNode", void 0);

  __decorate([D(cc.Node)], e.prototype, "rightNode", void 0);

  __decorate([D(cc.Label)], e.prototype, "lvPerLb", void 0);

  __decorate([D(cc.Label)], e.prototype, "finNumLb", void 0);

  __decorate([D(cc.ProgressBar)], e.prototype, "packPro", void 0);

  __decorate([D([_packItem["default"]])], e.prototype, "packItems", void 0);

  __decorate([D(cc.Node)], e.prototype, "midBg", void 0);

  __decorate([D(cc.Node)], e.prototype, "packageNode", void 0);

  __decorate([D(cc.Node)], e.prototype, "maskNode", void 0);

  __decorate([D(cc.Sprite)], e.prototype, "topSp", void 0);

  __decorate([D(cc.Node)], e.prototype, "spineNode", void 0);

  __decorate([D(cc.Label)], e.prototype, "beforeRedLb", void 0);

  __decorate([D(cc.Label)], e.prototype, "afterRedLb", void 0);

  __decorate([D(cc.Node)], e.prototype, "bgNode", void 0);

  __decorate([D(cc.Node)], e.prototype, "hengNode", void 0);

  return __decorate([I], e);
}(cc.Component);

exports["default"] = P;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGFnZV9jaGFsbGVuZ2UuanMiXSwibmFtZXMiOlsibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2V2dHMiLCJyZXF1aXJlIiwiX2lkeCIsIl9teVNhZmVBcmVhIiwiX251bWJlclV0aWxzIiwiX3JlcyIsIl90aW1lIiwiX2NmZ01nciIsIl9nbG9iYWwiLCJfYmFnTWdyIiwiX2NoYWxsZW5nZU1nciIsIl9wYW5lbE1nciIsIl9za2luTWdyIiwiX3BJbmZvIiwiX2RhdGVJdGVtIiwiX3BhY2tJdGVtIiwiVCIsImNjIiwiX2RlY29yYXRvciIsIkkiLCJjY2NsYXNzIiwiRCIsInByb3BlcnR5IiwiUCIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJkYXRlTm9kZXMiLCJkYXRlTm9kZTAiLCJkYXRlTm9kZTEiLCJkYXRlSXRlbSIsInllYXJMYiIsIm1vbnRoTGIiLCJjb3N0TGIiLCJ0b3BOb2RlIiwibGVmdE5vZGUiLCJyaWdodE5vZGUiLCJsdlBlckxiIiwiZmluTnVtTGIiLCJwYWNrUHJvIiwicGFja0l0ZW1zIiwibWlkQmciLCJwYWNrYWdlTm9kZSIsIm1hc2tOb2RlIiwidG9wU3AiLCJzcGluZU5vZGUiLCJiZWZvcmVSZWRMYiIsImFmdGVyUmVkTGIiLCJiZ05vZGUiLCJoZW5nTm9kZSIsImN1clllYXIiLCJjdXJNb250aCIsImN1ckRheSIsImx2RGF0YSIsInR5cGUiLCJkaWZmIiwiaXNBbmkiLCJpc0ZpbiIsImdhbWVEYXRlIiwibG9hZFBhY2tFbmQiLCJjcm9zc0RhdGEiLCJpc0xvYWQiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJub2RlIiwiaGVpZ2h0Iiwid2luU2l6ZSIsInBhZFNjYWxlIiwic2NhbGVYIiwicGFyZW50Iiwic2NhbGUiLCJvcEUiLCJvbiIsIm9uT3BlclRhcCIsImJpbmQiLCJpbnMiLCJnZXRCdW5kbGVCeVN0cmluZyIsInRoZW4iLCJsb2FkIiwiU3ByaXRlRnJhbWUiLCJvIiwiaXNWYWxpZCIsInNwcml0ZUZyYW1lIiwic3AiLCJTa2VsZXRvbkRhdGEiLCJpIiwibGVuZ3RoIiwiaW5pdEl0ZW0iLCJzZXRQYWNrUGVyIiwiY29uc29sZSIsImVycm9yIiwibG9hZEdpcmwiLCJfX2F3YWl0ZXIiLCJfX2dlbmVyYXRvciIsInVwZGF0ZVJvbGUiLCJnZXRVc2luZ1NraW4iLCJyb2xlIiwiYWN0aW9uIiwiVVBEX01BSU5fUkVEIiwidXBkYXRlUmVkcyIsIlNLSU5fQ0hHIiwic3RhcnQiLCJzY2hlZHVsZU9uY2UiLCJhZGFwdGVyIiwiaW5pdFBhbmVsIiwib25FbmFibGUiLCJnZXRSZXF1ZXN0Q2hhbGxlbmdlRGF0YSIsInN0YXR1cyIsImRhdGEiLCJzZXRDcm9zc051bSIsImdldFNhZmVBcmVhUmVjdCIsInlNaW4iLCJ5IiwicmVtb3ZlQ29tcG9uZW50IiwiV2lkZ2V0Iiwic2VydmVyVGltZSIsIkRhdGUiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJyIiwiZ2V0TW9udGgiLCJjaGFsbGVuZ2VMdiIsImEiLCJNYXRoIiwidHJ1bmMiLCJzIiwiYyIsImdldFRoZU1vbnRoSXNGaW4iLCJzdHJpbmciLCJpbml0SXRlbXMiLCJjaGVja0J0bnMiLCJnZXRDcm9zc0RhdGEiLCJpbnN0YW50aWF0ZSIsImFjdGl2ZSIsIngiLCJzZXRJdGVtc0J5RGF0ZSIsImwiLCJ1IiwicCIsImQiLCJnZXRMYXN0VW5GaW5JZHgiLCJmIiwiZ2V0RmluTHZOdW0iLCJzZXRJc1NlbGVjdCIsImxvYWREYXRlSXRlbSIsImZpcnN0WWVhciIsImZpcnN0TW9udGgiLCJnZXRNb250aFJlZCIsImdldEJlZm9yZU1vbnRoUmVkIiwiZ2V0QWxsTW9udGhSZWQiLCJnZXRDaGFyWE9mZnNldCIsInJlUGFuZWwiLCJ0d2VlbiIsImJ5IiwiY2FsbCIsImdldE1vbnRoRGF0YSIsInByb2dyZXNzIiwiZ2V0Q2hhUGFja0RhdGEiLCJzZXRJc0dldCIsInNldEZpbmlzaCIsImdldGZpbkRhdGEiLCJjaGlsZHJlbiIsImdldENvbXBvbmVudCIsInNldERhdGUiLCJvZmYiLCJpc0xvY2tlZCIsInNldExvY2tlZCIsIm9uQnRuQ2hnU3RhcnREYXRhIiwiY2hpbGRyZW5Db3VudCIsInNldFNlbGVjdGVkIiwiZ2V0THZEYXRhQnlEYXRlIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiZ2V0TGV2ZWxDb3N0IiwiYWRkWmVyb1RvTnVtIiwibnVtIiwib25CdG5TdGFydCIsImdldFBvd2VyIiwib3BlbiIsIml0ZW1JZCIsImRhdGUiLCJjaGFsbGVuZ2VUeXBlIiwid29ybSIsImNvdW50IiwiUmFuZG9tSW50IiwiYWJzIiwicGxhdGZvcm0iLCJzaG93TG9hZGluZyIsImFzc2V0TWFuYWdlciIsImxvYWRSZW1vdGUiLCJPc3NDb25maWciLCJjaGFsbGVuZ2VXb3JtVXJsIiwiSnNvbkFzc2V0IiwiaGlkZUxvYWRpbmciLCJqc29uIiwic2l6ZSIsImNvc3QiLCJjcm9zc051bSIsIm9uQnRuQ2hnTW9udGgiLCJOdW1iZXIiLCJnZXROZXdEYXRlIiwic2VydmVyQ2ZnIiwiZGFpbHlfY2hhbGxlbmdlIiwiY29uc3VtZSIsIm9uQnRuUGFjayIsIm51bXJld2FyZCIsInRpbWVzIiwiY29pbiIsInB1enpsZV9waWVjZXMiLCJoIiwiZyIsIl8iLCJiIiwidyIsIlMiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJwb3NpdGlvbiIsIndvcmxkUG9zIiwicHVzaCIsInNldENoYVBhY2tEYXRhIiwiYWRkSXRlbSIsImVtaXQiLCJpdGVtRGF0YXMiLCJfX2RlY29yYXRlIiwiTm9kZSIsIlByZWZhYiIsIkxhYmVsIiwiUHJvZ3Jlc3NCYXIiLCJTcHJpdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7O0FBQ0EsSUFB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LFdBQTVCLEVBQXlDLEtBQUssQ0FBOUMsQ0FBVjs7RUFDQWtLLFVBQVUsQ0FBQyxDQUFDN00sQ0FBQyxDQUFDSixFQUFFLENBQUNvTixLQUFKLENBQUYsQ0FBRCxFQUFnQjVNLENBQUMsQ0FBQ3VDLFNBQWxCLEVBQTZCLGFBQTdCLEVBQTRDLEtBQUssQ0FBakQsQ0FBVjs7RUFDQWtLLFVBQVUsQ0FBQyxDQUFDN00sQ0FBQyxDQUFDSixFQUFFLENBQUNvTixLQUFKLENBQUYsQ0FBRCxFQUFnQjVNLENBQUMsQ0FBQ3VDLFNBQWxCLEVBQTZCLFlBQTdCLEVBQTJDLEtBQUssQ0FBaEQsQ0FBVjs7RUFDQWtLLFVBQVUsQ0FBQyxDQUFDN00sQ0FBQyxDQUFDSixFQUFFLENBQUNrTixJQUFKLENBQUYsQ0FBRCxFQUFlMU0sQ0FBQyxDQUFDdUMsU0FBakIsRUFBNEIsUUFBNUIsRUFBc0MsS0FBSyxDQUEzQyxDQUFWOztFQUNBa0ssVUFBVSxDQUFDLENBQUM3TSxDQUFDLENBQUNKLEVBQUUsQ0FBQ2tOLElBQUosQ0FBRixDQUFELEVBQWUxTSxDQUFDLENBQUN1QyxTQUFqQixFQUE0QixVQUE1QixFQUF3QyxLQUFLLENBQTdDLENBQVY7O0VBQ0EsT0FBT2tLLFVBQVUsQ0FBQyxDQUFDL00sQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQW5mTyxDQW1mTFIsRUFBRSxDQUFDdU4sU0FuZkUsQ0FBUjs7QUFvZkExTyxPQUFPLFdBQVAsR0FBa0J5QixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG47XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBfZXZ0cyA9IHJlcXVpcmUoXCJldnRzXCIpO1xudmFyIF9pZHggPSByZXF1aXJlKFwiaWR4XCIpO1xudmFyIF9teVNhZmVBcmVhID0gcmVxdWlyZShcIm15U2FmZUFyZWFcIik7XG52YXIgX251bWJlclV0aWxzID0gcmVxdWlyZShcIk51bWJlclV0aWxzXCIpO1xudmFyIF9yZXMgPSByZXF1aXJlKFwicmVzXCIpO1xudmFyIF90aW1lID0gcmVxdWlyZShcInRpbWVcIik7XG52YXIgX2NmZ01nciA9IHJlcXVpcmUoXCJjZmdNZ3JcIik7XG52YXIgX2dsb2JhbCA9IHJlcXVpcmUoXCJnbG9iYWxcIik7XG52YXIgX2JhZ01nciA9IHJlcXVpcmUoXCJiYWdNZ3JcIik7XG52YXIgX2NoYWxsZW5nZU1nciA9IHJlcXVpcmUoXCJjaGFsbGVuZ2VNZ3JcIik7XG52YXIgX3BhbmVsTWdyID0gcmVxdWlyZShcInBhbmVsTWdyXCIpO1xudmFyIF9za2luTWdyID0gcmVxdWlyZShcInNraW5NZ3JcIik7XG52YXIgX3BJbmZvID0gcmVxdWlyZShcInBJbmZvXCIpO1xudmFyIF9kYXRlSXRlbSA9IHJlcXVpcmUoXCJkYXRlSXRlbVwiKTtcbnZhciBfcGFja0l0ZW0gPSByZXF1aXJlKFwicGFja0l0ZW1cIik7XG52YXIgVCA9IGNjLl9kZWNvcmF0b3I7XG52YXIgSSA9IFQuY2NjbGFzcztcbnZhciBEID0gVC5wcm9wZXJ0eTtcbnZhciBQID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuZGF0ZU5vZGVzID0gbnVsbDtcbiAgICAgICAgZS5kYXRlTm9kZTAgPSBudWxsO1xuICAgICAgICBlLmRhdGVOb2RlMSA9IG51bGw7XG4gICAgICAgIGUuZGF0ZUl0ZW0gPSBudWxsO1xuICAgICAgICBlLnllYXJMYiA9IG51bGw7XG4gICAgICAgIGUubW9udGhMYiA9IG51bGw7XG4gICAgICAgIGUuY29zdExiID0gbnVsbDtcbiAgICAgICAgZS50b3BOb2RlID0gbnVsbDtcbiAgICAgICAgZS5sZWZ0Tm9kZSA9IG51bGw7XG4gICAgICAgIGUucmlnaHROb2RlID0gbnVsbDtcbiAgICAgICAgZS5sdlBlckxiID0gbnVsbDtcbiAgICAgICAgZS5maW5OdW1MYiA9IG51bGw7XG4gICAgICAgIGUucGFja1BybyA9IG51bGw7XG4gICAgICAgIGUucGFja0l0ZW1zID0gW107XG4gICAgICAgIGUubWlkQmcgPSBudWxsO1xuICAgICAgICBlLnBhY2thZ2VOb2RlID0gbnVsbDtcbiAgICAgICAgZS5tYXNrTm9kZSA9IG51bGw7XG4gICAgICAgIGUudG9wU3AgPSBudWxsO1xuICAgICAgICBlLnNwaW5lTm9kZSA9IG51bGw7XG4gICAgICAgIGUuYmVmb3JlUmVkTGIgPSBudWxsO1xuICAgICAgICBlLmFmdGVyUmVkTGIgPSBudWxsO1xuICAgICAgICBlLmJnTm9kZSA9IG51bGw7XG4gICAgICAgIGUuaGVuZ05vZGUgPSBudWxsO1xuICAgICAgICBlLmN1clllYXIgPSAwO1xuICAgICAgICBlLmN1ck1vbnRoID0gMDtcbiAgICAgICAgZS5jdXJEYXkgPSAwO1xuICAgICAgICBlLmx2RGF0YSA9IHt0eXBlOiAxLCBkaWZmOiAzfTtcbiAgICAgICAgZS5pc0FuaSA9ICExO1xuICAgICAgICBlLmlzRmluID0gITE7XG4gICAgICAgIGUuZ2FtZURhdGUgPSBudWxsO1xuICAgICAgICBlLmxvYWRQYWNrRW5kID0gITE7XG4gICAgICAgIGUuY3Jvc3NEYXRhID0ge307XG4gICAgICAgIGUuaXNMb2FkID0gITA7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICAgICAgX2dsb2JhbC5kZWZhdWx0LnBhZFNjYWxlICYmXG4gICAgICAgICAgICAodGhpcy5oZW5nTm9kZS5zY2FsZVggPSB0aGlzLmJnTm9kZS5zY2FsZVggPSB0aGlzLnRvcFNwLm5vZGUucGFyZW50LnNjYWxlID0gX2dsb2JhbC5kZWZhdWx0LnBhZFNjYWxlKTtcbiAgICAgICAgX2V2dHMuZGVmYXVsdC5vcEUub24odGhpcy5vbk9wZXJUYXAuYmluZCh0aGlzKSk7XG4gICAgICAgIF9yZXMuZGVmYXVsdC5pbnNcbiAgICAgICAgICAgIC5nZXRCdW5kbGVCeVN0cmluZyhcInJlc1Nwc1wiKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLmxvYWQoXCJnYW1lL25vcm1hbC90b3AxXCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZSwgbykge1xuICAgICAgICAgICAgICAgICAgICAhZSAmJiB0Lm5vZGUgJiYgdC5ub2RlLmlzVmFsaWQgJiYgKHQudG9wU3Auc3ByaXRlRnJhbWUgPSBvKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgZS5sb2FkKFwic3BpbmUvcGFja2FnZS9hY3Rpb25cIiwgc3AuU2tlbGV0b25EYXRhLCBmdW5jdGlvbiAoZSwgbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlICYmIHQubm9kZSAmJiB0Lm5vZGUuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwLCBpID0gdC5wYWNrSXRlbXMubGVuZ3RoOyBuIDwgaTsgbisrKSB0LnBhY2tJdGVtc1tuXS5pbml0SXRlbShuLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnNldFBhY2tQZXIoKSwgKHQubG9hZFBhY2tFbmQgPSAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSVG9vbC5pbnMuZ2V0QnVuZGxlQnlTdHJpbmcoJ3Jlc1NwcycpXCIsIHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZEdpcmwoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmxvYWRHaXJsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF9za2luTWdyLmRlZmF1bHQuaW5zLnVwZGF0ZVJvbGUoX3BJbmZvLmRlZmF1bHQuaW5zLmdldFVzaW5nU2tpbigpLnJvbGUsIHRoaXMuc3BpbmVOb2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25PcGVyVGFwID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmFjdGlvbjtcbiAgICAgICAgaWYgKGUpXG4gICAgICAgICAgICBzd2l0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIF9ldnRzLmRlZmF1bHQuVVBEX01BSU5fUkVEOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfZXZ0cy5kZWZhdWx0LlNLSU5fQ0hHOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRHaXJsKCk7XG4gICAgICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LmFkYXB0ZXIoKTtcbiAgICAgICAgICAgIHQuaW5pdFBhbmVsKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25FbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5pc0xvYWQgfHxcbiAgICAgICAgICAgIF9jaGFsbGVuZ2VNZ3IuZGVmYXVsdC5pbnNcbiAgICAgICAgICAgICAgICAuZ2V0UmVxdWVzdENoYWxsZW5nZURhdGEodGhpcy5jdXJZZWFyLCB0aGlzLmN1ck1vbnRoKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RhdHVzICYmICgodC5jcm9zc0RhdGEgPSBlLmRhdGEpLCB0LnNldENyb3NzTnVtKCkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJnZXRSZXF1ZXN0Q2hhbGxlbmdlRGF0YUVyclwiLCB0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc0xvYWQgPSAhMTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmFkYXB0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gX215U2FmZUFyZWEuZ2V0U2FmZUFyZWFSZWN0KCkueU1pbjtcbiAgICAgICAgdmFyIGUgPSB0aGlzLm5vZGUuaGVpZ2h0IC0gMTI4MCAtIHQ7XG4gICAgICAgIHRoaXMuc3BpbmVOb2RlLnkgKz0gZSAvIDY7XG4gICAgICAgIHRoaXMudG9wTm9kZS55IC09IHQ7XG4gICAgICAgIHRoaXMudG9wTm9kZS5yZW1vdmVDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRQYW5lbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgZSA9IDFlMyAqIF90aW1lLmRlZmF1bHQuaW5zLnNlcnZlclRpbWU7XG4gICAgICAgIHZhciBvID0gbmV3IERhdGUoZSk7XG4gICAgICAgIHZhciBuID0gby5nZXREYXRlKCk7XG4gICAgICAgIHZhciBpID0gby5nZXRGdWxsWWVhcigpO1xuICAgICAgICB2YXIgciA9IG8uZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGlmIChfZ2xvYmFsLmRlZmF1bHQuY2hhbGxlbmdlTHYpIHtcbiAgICAgICAgICAgIHZhciBhID0gTWF0aC50cnVuYztcbiAgICAgICAgICAgIHZhciBzID0gYShfZ2xvYmFsLmRlZmF1bHQuY2hhbGxlbmdlTHYgLyAxZTQpO1xuICAgICAgICAgICAgdmFyIGMgPSBhKChfZ2xvYmFsLmRlZmF1bHQuY2hhbGxlbmdlTHYgJSAxZTQpIC8gMTAwKTtcbiAgICAgICAgICAgIF9jaGFsbGVuZ2VNZ3IuZGVmYXVsdC5pbnMuZ2V0VGhlTW9udGhJc0ZpbihpLCByKSB8fCAoKGkgPSBzKSwgKHIgPSBjKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJZZWFyID0gaTtcbiAgICAgICAgdGhpcy5jdXJNb250aCA9IHI7XG4gICAgICAgIHRoaXMuY3VyRGF5ID0gbjtcbiAgICAgICAgdGhpcy55ZWFyTGIuc3RyaW5nID0gdGhpcy5jdXJZZWFyICsgXCLlubRcIjtcbiAgICAgICAgdGhpcy5tb250aExiLnN0cmluZyA9IHRoaXMuY3VyTW9udGggKyBcIlwiO1xuICAgICAgICB0aGlzLmluaXRJdGVtcygpO1xuICAgICAgICB0aGlzLmNoZWNrQnRucygpO1xuICAgICAgICB0aGlzLmdldENyb3NzRGF0YSgpO1xuICAgICAgICBfcmVzLmRlZmF1bHQuaW5zXG4gICAgICAgICAgICAuZ2V0QnVuZGxlQnlTdHJpbmcoXCJyZXNTcHNcIilcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5sb2FkKFwic3BpbmUvcGFja2FnZS9hY3Rpb25cIiwgc3AuU2tlbGV0b25EYXRhLCBmdW5jdGlvbiAoZSwgbykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWUgJiYgdC5ub2RlICYmIHQubm9kZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMCwgaSA9IHQucGFja0l0ZW1zLmxlbmd0aDsgbiA8IGk7IG4rKykgdC5wYWNrSXRlbXNbbl0uaW5pdEl0ZW0obiwgbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnNldFBhY2tQZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubG9hZFBhY2tFbmQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSVG9vbC5pbnMuZ2V0QnVuZGxlQnlTdHJpbmcoJ3Jlc1NwcycpXCIsIHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0SXRlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIHQgPSB0aGlzLmN1clllYXIsIGUgPSB0aGlzLmN1ck1vbnRoLCBvID0gMCwgbiA9IDAsIGkgPSAwOyBpIDwgNDI7IGkrKykge1xuICAgICAgICAgICAgdmFyIHIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRhdGVJdGVtKTtcbiAgICAgICAgICAgIHIuYWN0aXZlID0gITA7XG4gICAgICAgICAgICByLnBhcmVudCA9IHRoaXMuZGF0ZU5vZGUxO1xuICAgICAgICAgICAgci54ID0gOTIgKiBvO1xuICAgICAgICAgICAgci55ID0gLTg2ICogbjtcbiAgICAgICAgICAgICsrbyA+IDYgJiYgKChvID0gMCksIG4rKyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRJdGVtc0J5RGF0ZSh0aGlzLmRhdGVOb2RlMSwgdCwgZSk7XG4gICAgICAgIHZhciBhID0gMWUzICogX3RpbWUuZGVmYXVsdC5pbnMuc2VydmVyVGltZTtcbiAgICAgICAgdmFyIHMgPSBuZXcgRGF0ZShhKTtcbiAgICAgICAgdmFyIGMgPSBzLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHZhciBsID0gcy5nZXRNb250aCgpICsgMTtcbiAgICAgICAgdmFyIHUgPSBzLmdldERhdGUoKTtcbiAgICAgICAgdmFyIHAgPSBfY2hhbGxlbmdlTWdyLmRlZmF1bHQuaW5zO1xuICAgICAgICB2YXIgZCA9IHAuZ2V0TGFzdFVuRmluSWR4KHQsIGUpO1xuICAgICAgICB2YXIgZiA9IHAuZ2V0RmluTHZOdW0odCwgZSk7XG4gICAgICAgIGMgPT0gdCAmJiBsID09IGUgJiYgdSA9PSBmICYmIChkID0gdSAtIDEpO1xuICAgICAgICB0aGlzLnNldElzU2VsZWN0KGQpO1xuICAgICAgICB0aGlzLmRhdGVOb2RlMC55ICs9IDUxNjtcbiAgICAgICAgbyA9IDA7XG4gICAgICAgIG4gPSAwO1xuICAgICAgICB0aGlzLmxvYWREYXRlSXRlbSgwLCBvLCBuKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmxvYWREYXRlSXRlbSA9IGZ1bmN0aW9uICh0LCBlLCBvKSB7XG4gICAgICAgIHZhciBuID0gdGhpcztcbiAgICAgICAgaWYgKCEodCA+PSA0MikpIHtcbiAgICAgICAgICAgIHZhciBpID0gY2MuaW5zdGFudGlhdGUodGhpcy5kYXRlSXRlbSk7XG4gICAgICAgICAgICBpLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgaS5wYXJlbnQgPSB0aGlzLmRhdGVOb2RlMDtcbiAgICAgICAgICAgIGkueCA9IDkyICogZTtcbiAgICAgICAgICAgIGkueSA9IC04NiAqIG87XG4gICAgICAgICAgICArK2UgPiA2ICYmICgoZSA9IDApLCBvKyspO1xuICAgICAgICAgICAgdCsrO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG4ubG9hZERhdGVJdGVtKHQsIGUsIG8pO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrQnRucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSAxZTMgKiBfdGltZS5kZWZhdWx0Lmlucy5zZXJ2ZXJUaW1lO1xuICAgICAgICB2YXIgZSA9IG5ldyBEYXRlKHQpO1xuICAgICAgICB2YXIgbyA9IGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdmFyIG4gPSBlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICB2YXIgaSA9IF9jaGFsbGVuZ2VNZ3IuZGVmYXVsdC5pbnM7XG4gICAgICAgIHZhciByID0gdGhpcy5jdXJZZWFyO1xuICAgICAgICB2YXIgYSA9IHRoaXMuY3VyTW9udGg7XG4gICAgICAgIHRoaXMucmlnaHROb2RlLmFjdGl2ZSA9IG8gIT0gciB8fCBuICE9IGE7XG4gICAgICAgIHIgPT0gaS5maXJzdFllYXIgJiYgYSA9PSBpLmZpcnN0TW9udGggPyAodGhpcy5sZWZ0Tm9kZS5hY3RpdmUgPSAhMSkgOiAodGhpcy5sZWZ0Tm9kZS5hY3RpdmUgPSAhMCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVkcygpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlUmVkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfY2hhbGxlbmdlTWdyLmRlZmF1bHQuaW5zO1xuICAgICAgICB2YXIgZSA9IHRoaXMuY3VyWWVhcjtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmN1ck1vbnRoO1xuICAgICAgICB2YXIgbiA9IHQuZ2V0TW9udGhSZWQoZSwgbyk7XG4gICAgICAgIHZhciBpID0gdC5nZXRCZWZvcmVNb250aFJlZChlLCBvKTtcbiAgICAgICAgdmFyIHIgPSBpIC0gbjtcbiAgICAgICAgdmFyIGEgPSB0LmdldEFsbE1vbnRoUmVkKCkgLSBpO1xuICAgICAgICByID4gMFxuICAgICAgICAgICAgPyAoKHRoaXMuYmVmb3JlUmVkTGIubm9kZS5wYXJlbnQuYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAodGhpcy5iZWZvcmVSZWRMYi5zdHJpbmcgPSByICsgXCJcIiksXG4gICAgICAgICAgICAgICh0aGlzLmJlZm9yZVJlZExiLm5vZGUueCA9IF9nbG9iYWwuZGVmYXVsdC5nZXRDaGFyWE9mZnNldCh0aGlzLmJlZm9yZVJlZExiLnN0cmluZykpKVxuICAgICAgICAgICAgOiAodGhpcy5iZWZvcmVSZWRMYi5ub2RlLnBhcmVudC5hY3RpdmUgPSAhMSk7XG4gICAgICAgIGEgPiAwXG4gICAgICAgICAgICA/ICgodGhpcy5hZnRlclJlZExiLm5vZGUucGFyZW50LmFjdGl2ZSA9ICEwKSxcbiAgICAgICAgICAgICAgKHRoaXMuYWZ0ZXJSZWRMYi5zdHJpbmcgPSBhICsgXCJcIiksXG4gICAgICAgICAgICAgICh0aGlzLmFmdGVyUmVkTGIubm9kZS54ID0gX2dsb2JhbC5kZWZhdWx0LmdldENoYXJYT2Zmc2V0KHRoaXMuYWZ0ZXJSZWRMYi5zdHJpbmcpKSlcbiAgICAgICAgICAgIDogKHRoaXMuYWZ0ZXJSZWRMYi5ub2RlLnBhcmVudC5hY3RpdmUgPSAhMSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZVBhbmVsID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICB2YXIgbyA9IHRoaXMuY3VyWWVhcjtcbiAgICAgICAgdmFyIG4gPSB0aGlzLmN1ck1vbnRoO1xuICAgICAgICB2YXIgaSA9IDUxNiAqIHQ7XG4gICAgICAgIHZhciByID0gdGhpcy5kYXRlTm9kZTAuYWN0aXZlID8gdGhpcy5kYXRlTm9kZTAgOiB0aGlzLmRhdGVOb2RlMTtcbiAgICAgICAgdmFyIGEgPSB0aGlzLmRhdGVOb2RlMC5hY3RpdmUgPyB0aGlzLmRhdGVOb2RlMSA6IHRoaXMuZGF0ZU5vZGUwO1xuICAgICAgICBhLnkgPSByLnkgLSBpO1xuICAgICAgICB0aGlzLnNldEl0ZW1zQnlEYXRlKGEsIG8sIG4pO1xuICAgICAgICB0aGlzLmRhdGVOb2RlMC5hY3RpdmUgPSAhMDtcbiAgICAgICAgdGhpcy5kYXRlTm9kZTEuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMuaXNBbmkgPSAhMDtcbiAgICAgICAgY2MudHdlZW4odGhpcy5kYXRlTm9kZXMpXG4gICAgICAgICAgICAuYnkoMC4yLCB7eTogaX0pXG4gICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgKGUuaXNBbmkgPSAhMSksIChyLmFjdGl2ZSA9ICExKSwgKGEuYWN0aXZlID0gITApO1xuICAgICAgICAgICAgICAgIHZhciB0ID0gX2NoYWxsZW5nZU1nci5kZWZhdWx0Lmlucy5nZXRMYXN0VW5GaW5JZHgoZS5jdXJZZWFyLCBlLmN1ck1vbnRoKTtcbiAgICAgICAgICAgICAgICBlLnNldElzU2VsZWN0KHQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB0aGlzLnllYXJMYi5zdHJpbmcgPSBvICsgXCLlubRcIjtcbiAgICAgICAgdGhpcy5tb250aExiLnN0cmluZyA9IG4gKyBcIlwiO1xuICAgICAgICB0aGlzLmxvYWRQYWNrRW5kICYmIHRoaXMuc2V0UGFja1BlcigpO1xuICAgICAgICB0aGlzLmdldENyb3NzRGF0YSgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0UGFja1BlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBfY2hhbGxlbmdlTWdyLmRlZmF1bHQuaW5zO1xuICAgICAgICB2YXIgZSA9IHRoaXMuY3VyWWVhcjtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmN1ck1vbnRoO1xuICAgICAgICB2YXIgbiA9IHQuZ2V0TW9udGhEYXRhKGUsIG8pO1xuICAgICAgICB2YXIgaSA9IChuWzBdLCBuWzFdKTtcbiAgICAgICAgdmFyIHIgPSB0LmdldEZpbkx2TnVtKGUsIG8pO1xuICAgICAgICB0aGlzLmx2UGVyTGIuc3RyaW5nID0gciArIFwiL1wiICsgaTtcbiAgICAgICAgdGhpcy5wYWNrUHJvLnByb2dyZXNzID0gciAvIDI4O1xuICAgICAgICBmb3IgKHZhciBhID0gdC5nZXRDaGFQYWNrRGF0YShlLCBvKSwgcyA9IDAsIGMgPSB0aGlzLnBhY2tJdGVtcy5sZW5ndGg7IHMgPCBjOyBzKyspIHtcbiAgICAgICAgICAgIHZhciBsID0gNyAqIChzICsgMSk7XG4gICAgICAgICAgICB2YXIgdSA9IHRoaXMucGFja0l0ZW1zW3NdO1xuICAgICAgICAgICAgdS5zZXRJc0dldCghMSk7XG4gICAgICAgICAgICB1LnNldEZpbmlzaCghMSk7XG4gICAgICAgICAgICByID49IGwgJiYgdS5zZXRGaW5pc2goITApO1xuICAgICAgICAgICAgYVtzXSAmJiB1LnNldElzR2V0KCEwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0SXRlbXNCeURhdGUgPSBmdW5jdGlvbiAodCwgZSwgbykge1xuICAgICAgICBmb3IgKFxuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLFxuICAgICAgICAgICAgICAgIGkgPSBfY2hhbGxlbmdlTWdyLmRlZmF1bHQuaW5zLFxuICAgICAgICAgICAgICAgIHIgPSBpLmdldGZpbkRhdGEoZSwgbyksXG4gICAgICAgICAgICAgICAgYSA9IGkuZ2V0TW9udGhEYXRhKGUsIG8pLFxuICAgICAgICAgICAgICAgIHMgPSBhWzBdLFxuICAgICAgICAgICAgICAgIGMgPSBhWzFdLFxuICAgICAgICAgICAgICAgIGwgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IHQuY2hpbGRyZW5bYV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gYSAtIHMgKyAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGwuZ2V0Q29tcG9uZW50KF9kYXRlSXRlbS5kZWZhdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgcCA8IDAgfHwgcCA+PSBjXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChsLmFjdGl2ZSA9ICExKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoKGwuYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkLnNldERhdGUocCArIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsLm9mZihcImNsaWNrXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpLmlzTG9ja2VkKGUsIG8sIHApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGQuc2V0TG9ja2VkKCEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAobC5vbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLm9uQnRuQ2hnU3RhcnREYXRhKHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5zZXRMb2NrZWQoITEpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZC5zZXRGaW5pc2gocltwXSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdSA9IHRoaXMsXG4gICAgICAgICAgICAgICAgcCA9IDAsXG4gICAgICAgICAgICAgICAgZCA9IHQuY2hpbGRyZW5Db3VudDtcbiAgICAgICAgICAgIHAgPCBkO1xuICAgICAgICAgICAgcCsrXG4gICAgICAgIClcbiAgICAgICAgICAgIGwocCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRJc1NlbGVjdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGZvciAodmFyIGUgPSB0aGlzLmRhdGVOb2RlMC5hY3RpdmUgPyB0aGlzLmRhdGVOb2RlMCA6IHRoaXMuZGF0ZU5vZGUxLCBvID0gMCwgbiA9IGUuY2hpbGRyZW5Db3VudDsgbyA8IG47IG8rKykge1xuICAgICAgICAgICAgdmFyIGkgPSBlLmNoaWxkcmVuW29dO1xuICAgICAgICAgICAgaSAmJiBpLmdldENvbXBvbmVudChfZGF0ZUl0ZW0uZGVmYXVsdCkuc2V0U2VsZWN0ZWQoITEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gX2NoYWxsZW5nZU1nci5kZWZhdWx0LmlucztcbiAgICAgICAgdmFyIGEgPSByLmdldE1vbnRoRGF0YSh0aGlzLmN1clllYXIsIHRoaXMuY3VyTW9udGgpO1xuICAgICAgICB2YXIgcyA9IGFbMF07XG4gICAgICAgIHZhciBjID0gKGFbMV0sIHQgKyBzIC0gMSk7XG4gICAgICAgIHZhciBsID0gci5nZXRmaW5EYXRhKHRoaXMuY3VyWWVhciwgdGhpcy5jdXJNb250aCk7XG4gICAgICAgIHRoaXMuaXNGaW4gPSBsW3RdO1xuICAgICAgICB2YXIgdSA9IGUuY2hpbGRyZW5bY107XG4gICAgICAgIHUgJiYgdS5nZXRDb21wb25lbnQoX2RhdGVJdGVtLmRlZmF1bHQpLnNldFNlbGVjdGVkKCEwKTtcbiAgICAgICAgdGhpcy5sdkRhdGEgPSByLmdldEx2RGF0YUJ5RGF0ZSh0aGlzLmN1clllYXIsIHRoaXMuY3VyTW9udGgsIHQpO1xuICAgICAgICB2YXIgcCA9IHt9O1xuICAgICAgICBwLnllYXIgPSB0aGlzLmN1clllYXI7XG4gICAgICAgIHAubW9udGggPSB0aGlzLmN1ck1vbnRoO1xuICAgICAgICBwLmRheSA9IHQgKyAxO1xuICAgICAgICBwLmlzRmluID0gbFt0XTtcbiAgICAgICAgdGhpcy5nYW1lRGF0ZSA9IHA7XG4gICAgICAgIHRoaXMuc2V0Q3Jvc3NOdW0oKTtcbiAgICAgICAgdmFyIGQgPSB0aGlzLmdldExldmVsQ29zdCgpO1xuICAgICAgICB0aGlzLmNvc3RMYi5zdHJpbmcgPSBcIi1cIiArIGQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRDcm9zc0RhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdmFyIGUgPSBfY2hhbGxlbmdlTWdyLmRlZmF1bHQuaW5zLmdldFJlcXVlc3RDaGFsbGVuZ2VEYXRhKHRoaXMuY3VyWWVhciwgdGhpcy5jdXJNb250aCk7XG4gICAgICAgIHRoaXMuY3Jvc3NEYXRhID0ge307XG4gICAgICAgIGUudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5zdGF0dXMgJiYgKCh0LmNyb3NzRGF0YSA9IGUuZGF0YSksIHQuc2V0Q3Jvc3NOdW0oKSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZ2V0UmVxdWVzdENoYWxsZW5nZURhdGFFcnJcIiwgdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0Q3Jvc3NOdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5nYW1lRGF0ZTtcbiAgICAgICAgdmFyIGUgPSBfY2hhbGxlbmdlTWdyLmRlZmF1bHQuaW5zO1xuICAgICAgICB2YXIgbyA9IGUuYWRkWmVyb1RvTnVtKHQubW9udGgpO1xuICAgICAgICB2YXIgbiA9IGUuYWRkWmVyb1RvTnVtKHQuZGF5KTtcbiAgICAgICAgdmFyIGkgPSB0LnllYXIgKyBcIi1cIiArIG8gKyBcIi1cIiArIG47XG4gICAgICAgIHZhciByID0gZS5nZXRmaW5EYXRhKHQueWVhciwgdC5tb250aCk7XG4gICAgICAgIHZhciBhID0gclt0LmRheSAtIDFdID8gMSA6IDA7XG4gICAgICAgIHZhciBzID0gdGhpcy5jcm9zc0RhdGFbaV0gfHwgYTtcbiAgICAgICAgdGhpcy5maW5OdW1MYi5zdHJpbmcgPSBzICsgXCJcIjtcbiAgICAgICAgdmFyIGMgPSByW3QuZGF5IC0gMV0gPyBzIDogcyArIDE7XG4gICAgICAgIHRoaXMuZ2FtZURhdGUubnVtID0gYztcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uQnRuQ2hnU3RhcnREYXRhID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdGhpcy5pc0FuaSB8fCB0aGlzLnNldElzU2VsZWN0KHQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25CdG5TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNBbmkpIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5nZXRMZXZlbENvc3QoKTtcbiAgICAgICAgICAgIGlmIChfcEluZm8uZGVmYXVsdC5pbnMuZ2V0UG93ZXIoKSA8IGUpIF9wYW5lbE1nci5kZWZhdWx0Lmlucy5vcGVuKFwidWkvdWlfZ2V0UmVzXCIsIHtpdGVtSWQ6IFwidGltZXNcIn0pO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmx2RGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoKChvLmRhdGUgPSB0aGlzLmdhbWVEYXRlKSwgby50eXBlID09PSBfcEluZm8uY2hhbGxlbmdlVHlwZS53b3JtKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG8uY291bnQgfHwgX251bWJlclV0aWxzLmRlZmF1bHQuUmFuZG9tSW50KDEsIDQ2MCk7XG4gICAgICAgICAgICAgICAgICAgIChuIDwgMCB8fCBuID4gNDYwKSAmJiAobiA9IE1hdGguYWJzKG4pICUgNDYwKTtcbiAgICAgICAgICAgICAgICAgICAgby5jb3VudCA9IG47XG4gICAgICAgICAgICAgICAgICAgIF9pZHgucGxhdGZvcm0uc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBfZ2xvYmFsLk9zc0NvbmZpZy5jaGFsbGVuZ2VXb3JtVXJsICsgbiArIFwiLmpzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLkpzb25Bc3NldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFuICYmIGkgJiYgaS5qc29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKG8uZGF0YSA9IGkuanNvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoby5kYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE4OCwgMjAzLCAyMTgsIDIxOSwgMjIwLCAyMjEsIDIwNiwgMTkxLCAxOTIsIDE5MywgMTk0LCAxNzksIDE2NCwgMTQ5LCAxNDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTQ3LCAxMzIsIDExNywgMTAyLCA4NywgNzIsIDcxLCA3MCwgNjksIDg0LCA5OSwgMTE0LCAxMTMsIDExMiwgMTExLCAxMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOTUsIDgwLCA2NSwgNTAsIDQ5LCA0OCwgNDcsIDYyLCA3NywgNzYsIDc1LCA5MCwgMTA1LCAxMjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTg2LCAxODUsIDE3MCwgMTU1LCAxNTQsIDE1MywgMTM4LCAxMjMsIDEwOCwgMTA3LCAxMjIsIDEzNywgMTUyLCAxNTEsIDE2NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNjcsIDE4MiwgMTk3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDc0LCA1OSwgNDQsIDQzLCAyOCwgMTMsIDEyLCAxMSwgMjYsIDQxLCA0MCwgMzksIDM4LCAyMywgMjIsIDIxLCA2LCA1LCA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMsIDE4LCAxNywgMTYsIDE1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzE2MCwgMTU5LCAxNTgsIDE1NywgMTQyLCAxNDMsIDE0NCwgMTQ1XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3BhbmVsTWdyLmRlZmF1bHQuaW5zLm9wZW4oXCJ1aS91aV9jaGFsbGVuZ2VJbmZvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbHZEYXRhOiBvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3N0OiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc051bTogdC5maW5OdW1MYi5zdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgX3BhbmVsTWdyLmRlZmF1bHQuaW5zLm9wZW4oXCJ1aS91aV9jaGFsbGVuZ2VJbmZvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2RGF0YTogbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvc3Q6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjcm9zc051bTogdGhpcy5maW5OdW1MYi5zdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uQnRuQ2hnTW9udGggPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBbmkpIHtcbiAgICAgICAgICAgIHZhciBvID0gTnVtYmVyKGUpO1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLmdldE5ld0RhdGUobyk7XG4gICAgICAgICAgICB2YXIgaSA9IG5bMF07XG4gICAgICAgICAgICB2YXIgciA9IG5bMV07XG4gICAgICAgICAgICB0aGlzLmN1clllYXIgPSBpO1xuICAgICAgICAgICAgdGhpcy5jdXJNb250aCA9IHI7XG4gICAgICAgICAgICB2YXIgYSA9IF9jaGFsbGVuZ2VNZ3IuZGVmYXVsdC5pbnM7XG4gICAgICAgICAgICB2YXIgcyA9IDFlMyAqIF90aW1lLmRlZmF1bHQuaW5zLnNlcnZlclRpbWU7XG4gICAgICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKHMpO1xuICAgICAgICAgICAgdmFyIGwgPSBjLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICB2YXIgdSA9IGMuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICB0aGlzLmN1clllYXIgPT0gYS5maXJzdFllYXIgJiYgdGhpcy5jdXJNb250aCA8IGEuZmlyc3RNb250aFxuICAgICAgICAgICAgICAgID8gKHRoaXMuY3VyTW9udGggPSBhLmZpcnN0TW9udGgpXG4gICAgICAgICAgICAgICAgOiB0aGlzLmN1clllYXIgPT0gbCAmJiB0aGlzLmN1ck1vbnRoID4gdVxuICAgICAgICAgICAgICAgID8gKHRoaXMuY3VyTW9udGggPSB1KVxuICAgICAgICAgICAgICAgIDogKHRoaXMuY2hlY2tCdG5zKCksIHRoaXMucmVQYW5lbChvKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldE5ld0RhdGUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHQ7XG4gICAgICAgIHZhciBvID0gdGhpcy5jdXJZZWFyO1xuICAgICAgICB2YXIgbiA9IHRoaXMuY3VyTW9udGg7XG4gICAgICAgIChuICs9IGUpIDwgMSA/ICgobyAtPSAxKSwgKG4gPSAxMikpIDogbiA+IDEyICYmICgobyArPSAxKSwgKG4gPSAxKSk7XG4gICAgICAgIHJldHVybiBbbywgbl07XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRMZXZlbENvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgdmFyIG8gPVxuICAgICAgICAgICAgKG51bGwgPT09IChlID0gbnVsbCA9PT0gKHQgPSBfY2ZnTWdyLmRlZmF1bHQuc2VydmVyQ2ZnKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmRhaWx5X2NoYWxsZW5nZSkgfHxcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gZVxuICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgOiBlLmNvbnN1bWUpIHx8IDMwO1xuICAgICAgICB0aGlzLmlzRmluICYmIChvID0gMCk7XG4gICAgICAgIHJldHVybiBvO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25CdG5QYWNrID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG87XG4gICAgICAgIHZhciBuO1xuICAgICAgICBpZiAoIXRoaXMuaXNBbmkpIHtcbiAgICAgICAgICAgIHZhciBpID0gTnVtYmVyKGUpO1xuICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmN1clllYXI7XG4gICAgICAgICAgICB2YXIgYSA9IHRoaXMuY3VyTW9udGg7XG4gICAgICAgICAgICB2YXIgcyA9IF9jaGFsbGVuZ2VNZ3IuZGVmYXVsdC5pbnM7XG4gICAgICAgICAgICB2YXIgbCA9IHMuZ2V0RmluTHZOdW0ociwgYSk7XG4gICAgICAgICAgICB2YXIgdSA9IHMuZ2V0Q2hhUGFja0RhdGEociwgYSk7XG4gICAgICAgICAgICB2YXIgcCA9IDcgKiAoaSArIDEpO1xuICAgICAgICAgICAgdmFyIGQgPSAobnVsbCA9PT1cbiAgICAgICAgICAgICAgICAobiA9IG51bGwgPT09IChvID0gX2NmZ01nci5kZWZhdWx0LnNlcnZlckNmZykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5kYWlseV9jaGFsbGVuZ2UpIHx8XG4gICAgICAgICAgICB2b2lkIDAgPT09IG5cbiAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgIDogbi5udW1yZXdhcmQpW2ldIHx8IHt0aW1lczogMTUwLCBjb2luOiAxNTAsIHB1enpsZV9waWVjZXM6IDIwfTtcbiAgICAgICAgICAgIHZhciBoID0gdGhpcy5wYWNrSXRlbXNbaV07XG4gICAgICAgICAgICB2YXIgZyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgXyBpbiBkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSBkW19dO1xuICAgICAgICAgICAgICAgIHZhciB3ID0gaC5ub2RlO1xuICAgICAgICAgICAgICAgIHZhciBTID0gdy5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHcucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHZhciBUID0ge307XG4gICAgICAgICAgICAgICAgVC5pdGVtSWQgPSBfO1xuICAgICAgICAgICAgICAgIFQud29ybGRQb3MgPSBTO1xuICAgICAgICAgICAgICAgIFQudmFsdWUgPSBOdW1iZXIoYik7XG4gICAgICAgICAgICAgICAgZy5wdXNoKFQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGcubGVuZ3RoKVxuICAgICAgICAgICAgICAgIGlmIChsID49IHAgJiYgIXVbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgXyBpbiAoaC5zZXRJc0dldCghMCksIHMuc2V0Q2hhUGFja0RhdGEociwgYSwgaSksIGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKGIgPSBkW19dKSwgX2JhZ01nci5kZWZhdWx0Lmlucy5hZGRJdGVtKF8sIE51bWJlcihiKSk7XG4gICAgICAgICAgICAgICAgICAgIF9ldnRzLmRlZmF1bHQub3BFLmVtaXQoe2FjdGlvbjogX2V2dHMuZGVmYXVsdC5VUERfTUFJTl9SRUR9KTtcbiAgICAgICAgICAgICAgICAgICAgX3BhbmVsTWdyLmRlZmF1bHQuaW5zLm9wZW4oXCJ1aS91aV9mbHlBbmlcIiwge2l0ZW1EYXRhczogZ30pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX3ByZVJld2FyZFwiLCB7aXRlbURhdGFzOiBnfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJkYXRlTm9kZXNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiZGF0ZU5vZGUwXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImRhdGVOb2RlMVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuUHJlZmFiKV0sIGUucHJvdG90eXBlLCBcImRhdGVJdGVtXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5MYWJlbCldLCBlLnByb3RvdHlwZSwgXCJ5ZWFyTGJcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcIm1vbnRoTGJcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcImNvc3RMYlwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJ0b3BOb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImxlZnROb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcInJpZ2h0Tm9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwibHZQZXJMYlwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwiZmluTnVtTGJcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKGNjLlByb2dyZXNzQmFyKV0sIGUucHJvdG90eXBlLCBcInBhY2tQcm9cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKFtfcGFja0l0ZW0uZGVmYXVsdF0pXSwgZS5wcm90b3R5cGUsIFwicGFja0l0ZW1zXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcIm1pZEJnXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcInBhY2thZ2VOb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcIm1hc2tOb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5TcHJpdGUpXSwgZS5wcm90b3R5cGUsIFwidG9wU3BcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwic3BpbmVOb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRChjYy5MYWJlbCldLCBlLnByb3RvdHlwZSwgXCJiZWZvcmVSZWRMYlwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwiYWZ0ZXJSZWRMYlwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW0QoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJiZ05vZGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtEKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiaGVuZ05vZGVcIiwgdm9pZCAwKTtcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbSV0sIGUpO1xufSkoY2MuQ29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFA7XG4iXX0=