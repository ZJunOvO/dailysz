"use strict";
cc._RF.push(module, 'c5238cXPXJEF72dKgiQwbZ5', 'ui_getItem');
// scripts/ui_getItem.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _idx = require("idx");

var _res = require("res");

var _cfgMgr = require("cfgMgr");

var _lang = require("lang");

var _bagMgr = require("bagMgr");

var _panelMgr = require("panelMgr");

var _tipMgr = require("tipMgr");

var _pInfo = require("pInfo");

var _baseUI = require("baseUI");

var g = cc._decorator;
var y = g.ccclass;
var m = g.property;

var v = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.typeSps = [];
    e.getBtnNode = null;
    e.adGetBtn = null;
    e.needGoldLbl = null;
    e.getNumLbl = null;
    e.getNum2Lbl = null;
    e.tipLbl = null;
    e.adNormal = null;
    e.adGray = null;
    e.nowGold = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    var e = this;
    var o = t.itemId;
    var n = t.cb;
    var i = t.closeCb;
    var r = t.gType;
    this.gType = r;
    this.itemId = o;
    this.getCb = n;
    this.closeCb = i;
    var a = _cfgMgr["default"].serverCfg;
    var l = this.data = {};
    var u = "道具";
    var p = "";
    this.tipLbl.node.active = !1;
    this.adNormal.active = !0;
    this.adGray.active = !1;
    var d = a.props.set;

    switch (this.nowGold.string = _pInfo["default"].ins.getCoin() + "", o) {
      case "qw_line_ticket":
        var f = _pInfo["default"].ins.getTicketAdTimes(),
            g = a.qw_line_rules.rules.times.set.ad_times,
            y = g.max_val;

        this.ticketIsMax = f >= y, l.normalGet = l.adGet = g.val, u = "挑战券", this.tipLbl.node.active = !0, this.tipLbl.string = "今日剩余" + (y - f) + "次", this.ticketIsMax ? (this.adGetBtn.enabled = !1, this.adNormal.active = !1, this.adGray.active = !0) : (this.adGetBtn.enabled = !0, this.adNormal.active = !0, this.adGray.active = !1), p = "购买" + u;
        break;

      case "notice":
      case "random_notice":
      case "full_row_col":
        for (var m = 0, v = d; m < v.length; m++) {
          var _ = v[m];

          if (_.key == o) {
            l.needGold = _.price;
            l.normalGet = l.adGet = _.ad_to_nums;
            u = _.title;
            break;
          }
        }

        p = "购买" + u;
        break;

      case "puzzle_pieces":
        for (var b = 5, w = 0, S = d; w < S.length; w++) {
          if ((k = S[w]).key == o) {
            l.needGold = k.price;
            l.normalGet = l.adGet = k.ad_to_nums;
            u = k.title;
            k.daily_limit_times && (b = Number(k.daily_limit_times) || 5);
            break;
          }
        }

        var T = _pInfo["default"].ins.getJigsawAdTimes();

        this.ticketIsMax = T >= b, this.tipLbl.node.active = !0, this.tipLbl.string = "今日剩余" + (b - T) + "次", this.ticketIsMax ? (this.adGetBtn.enabled = !1, this.adNormal.active = !1, this.adGray.active = !0) : (this.adGetBtn.enabled = !0, this.adNormal.active = !0, this.adGray.active = !1), p = "拼图碎片用于拼图玩法，\n可以通过每日任务及主线关卡获得。";
        break;

      case "newYear_pieces":
        for (var I = 5, D = 0, P = d; D < P.length; D++) {
          var k;

          if ((k = P[D]).key == o) {
            l.needGold = k.price;
            l.normalGet = l.adGet = k.ad_to_nums;
            u = k.title;
            k.daily_limit_times && (I = Number(k.daily_limit_times) || 5);
            break;
          }
        }

        l.needGold = 0, l.normalGet = l.adGet = 5, u = "新春拼图碎片";

        var R = _pInfo["default"].ins.getNewJigAdTimes();

        this.ticketIsMax = R >= I, this.tipLbl.node.active = !0, this.tipLbl.string = "今日剩余" + (I - R) + "次", this.ticketIsMax ? (this.adGetBtn.enabled = !1, this.adNormal.active = !1, this.adGray.active = !0) : (this.adGetBtn.enabled = !0, this.adNormal.active = !0, this.adGray.active = !1), p = "新春活动获取";
        break;

      case "puzzle_notice":
        for (var N = 0, C = d; N < C.length; N++) {
          var O = C[N];

          if (O.key == o) {
            l.needGold = O.price;
            l.normalGet = l.adGet = O.ad_to_nums;
            u = O.title;
            break;
          }
        }

        p = "使用提示可以随机拼好一个碎片。";
        break;

      case "puzzle_background":
        for (var M = 0, L = d; M < L.length; M++) {
          var A = L[M];

          if (A.key == o) {
            l.needGold = A.price;
            l.normalGet = l.adGet = A.ad_to_nums;
            u = A.title;
            break;
          }
        }

        p = "开启背景可获得一定时间的背景显示。";
    }

    l.needGold ? this.needGoldLbl.string = l.needGold + "" : (this.getBtnNode.active = !1, this.adGetBtn.node.x = 0);
    this.getNumLbl.string = "x" + l.normalGet;
    this.getNum2Lbl.string = p;

    _res["default"].ins.getBundleByString("resSps").then(function (t) {
      t.load("item/" + o, cc.SpriteFrame, function (t, o) {
        !t && e.node && e.node.isValid && e.typeSps.forEach(function (t) {
          t.spriteFrame = o;
        });
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('resSps')", t);
    });

    this.initAdDotEvent();
  };

  e.prototype.initAdDotEvent = function () {
    var t = "拼图";
    _lang.gemeTypeKey[this.gType] && (t = _lang.gemeTypeKey[this.gType]);
    this.adGetBtn.node.adDotData = t + "-道具-" + _lang.reportKey[this.itemId];
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  e.prototype.hide = function () {
    var e;
    null === (e = this.closeCb) || void 0 === e || e.call(this);
    return t.prototype.hide.call(this);
  };

  e.prototype.onGet = function () {
    _pInfo["default"].ins.getCoin() < this.data.needGold ? _panelMgr["default"].ins.open("ui/ui_getRes", {
      itemId: "coin",
      gType: this.gType,
      useTo: _lang.getCoinFor.Item
    }) : (this.getItem(!1), this.buyEventDot("使用元宝"));
  };

  e.prototype.onAdGet = function () {
    this.ticketIsMax ? _tipMgr["default"].ins.showTip("今日已达上限") : (this.getItem(!0), this.buyEventDot("看广告"));
  };

  e.prototype.buyEventDot = function (t) {
    var e = "拼图";
    _lang.gemeTypeKey[this.gType] && (e = _lang.gemeTypeKey[this.gType]);
    !_pInfo["default"].ins.isMaxAdCount() && _idx.platform.reportEvent(_idx.ERepEvt.buyItem, {
      way: t,
      gameType: e,
      itemId: _lang.reportKey[this.itemId]
    });
  };

  e.prototype.getItem = function (t) {
    var e = this;
    var o = this.data;
    var n = t ? o.normalGet : o.adGet;
    var i = this.typeSps[0].node;
    var r = i.parent.convertToWorldSpaceAR(i.position);

    _panelMgr["default"].ins.open("ui/ui_flyAni", {
      itemDatas: [{
        itemId: this.itemId,
        worldPos: r,
        value: n
      }],
      hideCb: function hideCb() {
        var o;

        switch (e.itemId) {
          case "qw_line_ticket":
            _pInfo["default"].ins.addTicketAdTimes(), _bagMgr["default"].ins.addItem(e.itemId, n);
            break;

          case "notice":
          case "random_notice":
          case "full_row_col":
            _bagMgr["default"].ins.addItem(e.itemId, n), t || _pInfo["default"].ins.addCoin(-e.data.needGold);
            break;

          case "puzzle_pieces":
            _pInfo["default"].ins.addJigsawAdTimes(), _bagMgr["default"].ins.addItem(e.itemId, n);
            break;

          case "newYear_pieces":
            _pInfo["default"].ins.addNewJigAdTimes(), _bagMgr["default"].ins.addItem(e.itemId, n);
            break;

          case "puzzle_notice":
          case "puzzle_background":
            _bagMgr["default"].ins.addItem(e.itemId, n);

        }

        null === (o = e.getCb) || void 0 === o || o.call(e);
        e.hideThis();
      }
    });
  };

  __decorate([m([cc.Sprite])], e.prototype, "typeSps", void 0);

  __decorate([m(cc.Node)], e.prototype, "getBtnNode", void 0);

  __decorate([m(cc.Button)], e.prototype, "adGetBtn", void 0);

  __decorate([m(cc.Label)], e.prototype, "needGoldLbl", void 0);

  __decorate([m(cc.Label)], e.prototype, "getNumLbl", void 0);

  __decorate([m(cc.Label)], e.prototype, "getNum2Lbl", void 0);

  __decorate([m(cc.Label)], e.prototype, "tipLbl", void 0);

  __decorate([m(cc.Node)], e.prototype, "adNormal", void 0);

  __decorate([m(cc.Node)], e.prototype, "adGray", void 0);

  __decorate([m(cc.Label)], e.prototype, "nowGold", void 0);

  return __decorate([y], e);
}(_baseUI["default"]);

exports["default"] = v;

cc._RF.pop();