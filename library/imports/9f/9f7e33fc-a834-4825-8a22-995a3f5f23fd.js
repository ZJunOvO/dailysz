"use strict";
cc._RF.push(module, '9f7e3P8qDRIJYoimVo/XyP9', 'ui_userInfo');
// scripts/ui_userInfo.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _request = require("request");

var _uData = require("uData");

var _head = require("head");

var _skinMgr = require("skinMgr");

var _pInfo = require("pInfo");

var _baseUI = require("baseUI");

var d = cc._decorator;
var h = d.ccclass;
var f = d.property;

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.lsTxt = null;
    e.raceScoreTxt = null;
    e.normalScoreTxt = null;
    e.jigsawTxt = null;
    e.achiTxt = null;
    e.headTxt = null;
    e.bgTxt = null;
    e.nameTxt = null;
    e.roleTxt = null;
    e.headComp = null;
    e.pNameTxt = null;
    e.nameSpr = null;
    e.bgSpr = null;
    e.girlNode = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    var e;
    var o = this;
    var n = t.gameUid;
    var i = t.baseData;
    var r = {};
    var c = _uData["default"].ins;
    var l = _pInfo["default"].ins;
    var p = "";
    var d = "";
    n == c.getUid() ? (p = c.getName(), d = c.getHeadImg(), r.recordData = JSON.parse(JSON.stringify(l.getRecordData())), r.jigFin = l.getHasFinJig(), r.mySkin = l.getMySkin(), r.uSkin = l.getUsingSkin(), this.rePanel(r)) : (i && (p = i.nickname, d = i.avatar, r.uSkin = null === (e = null == i ? void 0 : i.extra_data) || void 0 === e ? void 0 : e.usingSkin), _request["default"].ins.getUserDataByUid(n).then(function (t) {
      if (t && o.node && o.node.isValid) {
        var e = t.data;
        e && (r.recordData = null == e ? void 0 : e.recordData, r.jigFin = null == e ? void 0 : e.hasFinJig, r.mySkin = null == e ? void 0 : e.mySkin);
        o.rePanel(r);
      }
    }));
    var h = p;
    h.length > 7 && (h = h.substring(0, 6) + "...");
    this.pNameTxt.string = h;
    this.headComp.loadHeadImg(d);
  };

  e.prototype.rePanel = function (t) {
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
    var d;
    var h;
    var f;
    var g;
    var y;
    var m;
    var v;

    var _;

    if (t) {
      var b = _skinMgr["default"].ins;
      var w = (null === (e = null == t ? void 0 : t.uSkin) || void 0 === e ? void 0 : e.headFrame) || 1;
      b.updateHeadFrame(w, this.headComp.bg);
      var S = (null === (o = null == t ? void 0 : t.uSkin) || void 0 === o ? void 0 : o.nameFrame) || 1;
      b.updateNameFrame(S, this.nameSpr);
      var T = (null === (n = null == t ? void 0 : t.uSkin) || void 0 === n ? void 0 : n.bg) || 1;
      b.updateBg(T, this.bgSpr);
      var I = (null === (i = null == t ? void 0 : t.uSkin) || void 0 === i ? void 0 : i.role) || 1;
      b.updateRole(I, this.girlNode);
      this.headTxt.string = (null === (a = null === (r = null == t ? void 0 : t.mySkin) || void 0 === r ? void 0 : r.headFrame) || void 0 === a ? void 0 : a.length) || 1;
      this.bgTxt.string = (null === (c = null === (s = null == t ? void 0 : t.mySkin) || void 0 === s ? void 0 : s.bg) || void 0 === c ? void 0 : c.length) || 1;
      this.nameTxt.string = (null === (p = null === (u = null == t ? void 0 : t.mySkin) || void 0 === u ? void 0 : u.nameFrame) || void 0 === p ? void 0 : p.length) || 1;
      this.roleTxt.string = (null === (h = null === (d = null == t ? void 0 : t.mySkin) || void 0 === d ? void 0 : d.role) || void 0 === h ? void 0 : h.length) || 1;
      this.lsTxt.string = (null === (g = null === (f = null == t ? void 0 : t.recordData) || void 0 === f ? void 0 : f.main) || void 0 === g ? void 0 : g.heWins) || 0;
      this.raceScoreTxt.string = (null === (m = null === (y = null == t ? void 0 : t.recordData) || void 0 === y ? void 0 : y.race) || void 0 === m ? void 0 : m.hePoints) || 0;
      this.normalScoreTxt.string = (null === (_ = null === (v = null == t ? void 0 : t.recordData) || void 0 === v ? void 0 : v.main) || void 0 === _ ? void 0 : _.tPoints) || 0;
      var D = 0;
      if (t.jigFin) for (var P in t.jigFin) {
        t.jigFin[P] && D++;
      }
      this.jigsawTxt.string = "" + D;
      this.achiTxt.string = "0";
    }
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  __decorate([f(cc.Label)], e.prototype, "lsTxt", void 0);

  __decorate([f(cc.Label)], e.prototype, "raceScoreTxt", void 0);

  __decorate([f(cc.Label)], e.prototype, "normalScoreTxt", void 0);

  __decorate([f(cc.Label)], e.prototype, "jigsawTxt", void 0);

  __decorate([f(cc.Label)], e.prototype, "achiTxt", void 0);

  __decorate([f(cc.Label)], e.prototype, "headTxt", void 0);

  __decorate([f(cc.Label)], e.prototype, "bgTxt", void 0);

  __decorate([f(cc.Label)], e.prototype, "nameTxt", void 0);

  __decorate([f(cc.Label)], e.prototype, "roleTxt", void 0);

  __decorate([f(_head["default"])], e.prototype, "headComp", void 0);

  __decorate([f(cc.Label)], e.prototype, "pNameTxt", void 0);

  __decorate([f(cc.Sprite)], e.prototype, "nameSpr", void 0);

  __decorate([f(cc.Sprite)], e.prototype, "bgSpr", void 0);

  __decorate([f(cc.Node)], e.prototype, "girlNode", void 0);

  return __decorate([h], e);
}(_baseUI["default"]);

exports["default"] = g;

cc._RF.pop();