"use strict";
cc._RF.push(module, '6d3d4wIWL9INoHkuewVRpux', 'ui_luckyGift');
// scripts/ui_luckyGift.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _cfgMgr = require("cfgMgr");

var _baseUI = require("baseUI");

var _com = require("com");

var _pInfo = require("pInfo");

var _bagMgr = require("bagMgr");

var _panelMgr = require("panelMgr");

var d = cc._decorator;
var h = d.ccclass;
var f = d.property;

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.giftsNode = null;
    e.btn_start = null;
    e.pointerNode = null;
    e.labTip = null;
    e.proGiftNode = null;
    e.giftsDatas = null;
    e.isCurPlayAni = !1;
    e.drawedTime = 0;
    e.nowHaveTime = !1;
    e.crossedLevel = 0;
    e.proMax = 10;
    e.proGift = null;
    e.proGiftDatas = [];
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.giftsDatas = _cfgMgr["default"].serverCfg.lucky_gift.rules;
    this.pointRots = [0, 22, 67, 112, 157, 202, 247, 292, 337];
    this.isCurPlayAni = !1;
    this.proMax = 10;
    this.proGiftDatas = [];
    this.proGift = [2, 3, 5, 7, 9];
    this.initData();
    this.initPro();
    this.initInfo();
    this.initItems();
  };

  e.prototype.initData = function () {
    var t = _pInfo["default"].ins;
    this.drawedTime = t.getLuckTimes();
    this.nowHaveTime = t.getLuckyState();
    this.crossedLevel = t.getRecordData().main.wTimes;
  };

  e.prototype.initPro = function () {};

  e.prototype.updatePro = function () {};

  e.prototype.initInfo = function () {
    if (this.nowHaveTime) this.btn_start.enabled = !0, this.labTip.node.active = !1;else {
      this.btn_start.enabled = !1;
      this.labTip.node.active = !0;
      var t = 2 - this.crossedLevel % 2;
      this.labTip.string = "(再通过" + t + "关即可抽奖)";
    }
  };

  e.prototype.initItems = function () {
    for (var t = 1; t <= 8; t++) {
      var e = this.giftsDatas[t - 1];
      var o = this.giftsNode.getChildByName("" + t);
      o.getChildByName("light").active = !1;
      o.getChildByName("lab").getComponent(cc.Label).string = e.title;
    }
  };

  e.prototype.getProGift = function () {};

  e.prototype.onBtnStart = function () {
    var t = this;

    if (!this.isCurPlayAni) {
      var e = _com["default"].ins.rad(1, 8);

      this.playAni(e, !0, function () {
        _pInfo["default"].ins.addLuckyTimes();

        t.initData();
        t.addGoodToData(t.giftsDatas[e - 1], t.giftsNode.getChildByName("" + e).getChildByName("spr"));
        t.getProGift();
        t.updatePro(t.drawedTime, t.proMax);
        t.initInfo();
      });
    }
  };

  e.prototype.addGoodToData = function (t, e) {
    switch (t.props) {
      case "notice":
      case "full_row_col":
      case "random_notice":
        _bagMgr["default"].ins.addItem(t.props, t.val);

        break;

      case "times":
        _pInfo["default"].ins.addPower(t.val);

        break;

      case "coin":
        _pInfo["default"].ins.addCoin(t.val);

    }

    var o = e.parent.convertToWorldSpaceAR(e.position);

    _panelMgr["default"].ins.open("ui/ui_flyAni", {
      itemDatas: [{
        itemId: t.props,
        worldPos: o,
        value: t.val
      }]
    });
  };

  e.prototype.playAni = function (t, e, o) {
    var n = this;

    if (!this.isCurPlayAni) {
      if (this.isCurPlayAni = !0, !e) return this.actionIndex(t), this.pointerNode.angle = -this.pointRots[t], void (this.isCurPlayAni = !1);
      var i = t;
      var r = 0;

      var a = function a() {
        if (r += 1, n.actionIndex(r), r > 15) {
          var t = 0;

          var e = function e() {
            t += 1;
            n.actionIndex(t);
            t > i && (n.blingbling(i, function () {
              n.isCurPlayAni = !1;
              o && o();
            }), n.unschedule(e));
          };

          n.unschedule(a);
          n.schedule(e, 0.1);
        }
      };

      this.schedule(a, 0.1);
      this.pointerNode.angle = 0;
      var s = 720 + this.pointRots[t];
      var c = 1.8 + 0.1 * t;
      cc.tween(this.pointerNode).to(c, {
        angle: -s
      }).call(function () {}).start();
    }
  };

  e.prototype.actionIndex = function (t) {
    this.hideAllGiftLight();
    var e = t % 8;
    0 == e && (e = 8);
    this.giftsNode.getChildByName("" + e).getChildByName("light").active = !0;
  };

  e.prototype.blingbling = function (t, e) {
    var o = this;

    if (this.hideAllGiftLight(), t) {
      var n = 0;

      var i = function i() {
        n += 1;
        o.giftsNode.getChildByName("" + t).getChildByName("light").active = n % 2 != 0;
        n > 20 && (o.actionIndex(t), e && e(), o.unschedule(i));
      };

      this.schedule(i, 0.05);
    }
  };

  e.prototype.hideAllGiftLight = function () {
    for (var t = 1; t <= 8; t++) {
      this.giftsNode.getChildByName("" + t).getChildByName("light").active = !1;
    }
  };

  e.prototype.hideThis = function () {
    this.isCurPlayAni || this.hide();
  };

  __decorate([f(cc.Node)], e.prototype, "giftsNode", void 0);

  __decorate([f(cc.Button)], e.prototype, "btn_start", void 0);

  __decorate([f(cc.Node)], e.prototype, "pointerNode", void 0);

  __decorate([f(cc.Label)], e.prototype, "labTip", void 0);

  __decorate([f(cc.Node)], e.prototype, "proGiftNode", void 0);

  return __decorate([h], e);
}(_baseUI["default"]);

exports["default"] = g;

cc._RF.pop();