"use strict";
cc._RF.push(module, 'd0be4dW861Nob8k4ZQf0SYa', 'ui_sidebar');
// scripts/ui_sidebar.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _idx = require("idx");

var _res = require("res");

var _panelMgr = require("panelMgr");

var _pInfo = require("pInfo");

var _baseUI = require("baseUI");

var d = cc._decorator;
var h = d.ccclass;
var f = d.property;

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.getBtn = null;
    e.intoBtn = null;
    e.tipNode = null;
    e.exampleNode = null;
    e.exampleSpr = null;
    e.exampleTxtNode = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {};

  e.prototype.start = function () {
    this.loadSp();
  };

  e.prototype.init = function () {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }

    this.updateSliderStatus();
  };

  e.prototype.loadSp = function () {
    var t = this;
    var e = null;
    var o = cc.sys.platform === cc.sys.ALIPAY_GAME ? "ali" : "tt";
    this.exampleTxtNode.active = cc.sys.platform == cc.sys.ALIPAY_GAME;

    _res["default"].ins.getBundleByString("resSps").then(function (n) {
      n.loadDir("platform/" + o, cc.SpriteFrame, function (o, n) {
        !o && t.node && t.node.isValid && n.forEach(function (o) {
          if (-1 !== o.name.indexOf("txt")) ;else if (-1 !== o.name.indexOf("exa")) if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) e = cc.v3(0, 90, 0), t.exampleSpr.spriteFrame = o, t.exampleSpr.node.position = e;else if (cc.sys.platform === cc.sys.ALIPAY_GAME) if (e = cc.v3(-132, 35, 0), -1 !== o.name.indexOf("exa1")) t.exampleSpr.spriteFrame = o, t.exampleSpr.node.position = e;else {
            var n = new cc.Node();
            n.addComponent(cc.Sprite).spriteFrame = o;
            n.parent = t.exampleNode;
            e.x += 264;
            n.position = e;
          }
        });
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('resSps')", t);
    });
  };

  e.prototype.updateSliderStatus = function () {
    var t = this.bySlider = _idx.platform.bySlider;
    this.getBtn.active = t;
    this.intoBtn.active = !t;
    _pInfo["default"].ins.getIsGetSlider() ? (this.getBtn.active = !1, this.intoBtn.active = !1, this.tipNode.active = !0) : this.tipNode.active = !1;
  };

  e.prototype.onGet = function () {
    var t = this;

    _pInfo["default"].ins.addCoin(20);

    _pInfo["default"].ins.setIsGetSlider(!0);

    var e = this.getBtn.parent.convertToWorldSpaceAR(this.getBtn.position);

    _panelMgr["default"].ins.open("ui/ui_flyAni", {
      itemDatas: [{
        itemId: "coin",
        worldPos: e,
        value: 20
      }],
      hideCb: function hideCb() {
        t.hideThis();

        _evts["default"].opE.emit({
          action: _evts["default"].Slider_Chg
        });
      }
    });
  };

  e.prototype.onInto = function () {
    _idx.platform.navigateToScene();

    this.hideThis();
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  e.prototype.onDestroy = function () {};

  __decorate([f(cc.Node)], e.prototype, "getBtn", void 0);

  __decorate([f(cc.Node)], e.prototype, "intoBtn", void 0);

  __decorate([f(cc.Node)], e.prototype, "tipNode", void 0);

  __decorate([f(cc.Node)], e.prototype, "exampleNode", void 0);

  __decorate([f(cc.Sprite)], e.prototype, "exampleSpr", void 0);

  __decorate([f(cc.Node)], e.prototype, "exampleTxtNode", void 0);

  return __decorate([h], e);
}(_baseUI["default"]);

exports["default"] = g;

cc._RF.pop();