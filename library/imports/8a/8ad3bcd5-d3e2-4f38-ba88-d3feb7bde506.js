"use strict";
cc._RF.push(module, '8ad3bzV0+JPOLqI0/63veUG', 'ui_deskReward');
// scripts/ui_deskReward.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _idx = require("idx");

var _pConst = require("pConst");

var _res = require("res");

var _cfgMgr = require("cfgMgr");

var _panelMgr = require("panelMgr");

var _pInfo = require("pInfo");

var _baseUI = require("baseUI");

var f = cc._decorator;
var g = f.ccclass;
var y = f.property;

var m = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.iconSpr = null;
    e.deskSpr = null;
    e.numLb = null;
    e.infoLb = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    _evts["default"].opE.on(this.onOperTap.bind(this));
  };

  e.prototype.onOperTap = function (t) {
    var e = null == t ? void 0 : t.action;
    if (e) switch (e) {
      case _evts["default"].ADD_DESKTOP:
        this.addDesktopCb(t.data);
    }
  };

  e.prototype.init = function () {
    var t;
    var e;
    var o = this;

    _res["default"].ins.l("pages/page_level/zhuxian_07_3", cc.SpriteFrame, "resSps").then(function (t) {
      o.node && o.node.isValid && (o.deskSpr.spriteFrame = t);
    })["catch"](function () {
      console.error("getResSpErr");
    });

    var n = (null === (e = null === (t = _cfgMgr["default"].serverCfg.add_desktop) || void 0 === t ? void 0 : t.rules) || void 0 === e ? void 0 : e.times) || 50;
    this.numLb.string = "+" + n;
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  e.prototype.onBtnAdd = function () {
    switch (_idx.platform.string()) {
      case _pConst.PFCode.Bytedance:
        _idx.platform.addShortcut();

    }
  };

  e.prototype.addDesktopCb = function (t) {
    var e;
    var o;

    var n = _pInfo["default"].ins.getAddDesk();

    if (t && !n) {
      _pInfo["default"].ins.setAddDesk(!0);

      var i = (null === (o = null === (e = _cfgMgr["default"].serverCfg.add_desktop) || void 0 === e ? void 0 : e.rules) || void 0 === o ? void 0 : o.times) || 50;

      _pInfo["default"].ins.addPower(i);

      var r = this.numLb.node;
      var a = r.parent.convertToWorldSpaceAR(r.position);

      _panelMgr["default"].ins.open("ui/ui_flyAni", {
        itemDatas: [{
          itemId: "times",
          worldPos: a,
          value: i
        }]
      });

      this.hideThis();
    }
  };

  e.prototype.onDestroy = function () {
    cc.assetManager.releaseAsset(this.iconSpr.spriteFrame);
  };

  __decorate([y(cc.Sprite)], e.prototype, "iconSpr", void 0);

  __decorate([y(cc.Sprite)], e.prototype, "deskSpr", void 0);

  __decorate([y(cc.Label)], e.prototype, "numLb", void 0);

  __decorate([y(cc.Label)], e.prototype, "infoLb", void 0);

  return __decorate([g], e);
}(_baseUI["default"]);

exports["default"] = m;

cc._RF.pop();