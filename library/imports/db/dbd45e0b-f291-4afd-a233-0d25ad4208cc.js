"use strict";
cc._RF.push(module, 'dbd454L8pFK/aIzDSWtQgjM', 'ui_backReward');
// scripts/ui_backReward.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _cfgMgr = require("cfgMgr");

var _item = require("item");

var _bagMgr = require("bagMgr");

var _panelMgr = require("panelMgr");

var _skinMgr = require("skinMgr");

var _pInfo = require("pInfo");

var _baseUI = require("baseUI");

var g = cc._decorator;
var y = g.ccclass;
var m = g.property;

var v = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.rewardItem = null;
    e.rewards = null;
    e.spineNode = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {};

  e.prototype.init = function () {
    var t;
    var e;
    var o = (null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.seven_day_reward) || void 0 === e ? void 0 : e.backtrack) || {
      times: 50
    };
    var n = 0;

    for (var i in o) {
      var r = Number(o[i]);
      var a = this.rewards.children[n];
      a || (a = cc.instantiate(this.rewardItem));
      a.parent = this.rewards;
      var s = a.getComponent(_item["default"]);
      s && s.initByData(i, r);
      var p = {};
      p.itemId = i;
      p.itemNode = a;
      p.value = r;

      _bagMgr["default"].ins.addItem(i, r);

      n++;
    }

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

  e.prototype.hideThis = function () {
    this.hide();
  };

  e.prototype.onBtnGet = function () {
    for (var t = this, e = [], o = 0, n = this.rewards.childrenCount; o < n; o++) {
      var i = this.rewards.children[o];
      var r = i.getComponent(_item["default"]);
      var a = {};
      a.itemId = r.key;
      a.worldPos = i.parent.convertToWorldSpaceAR(i.position);
      a.value = r.count;
      e.push(a);
    }

    _panelMgr["default"].ins.open("ui/ui_flyAni", {
      itemDatas: e,
      hideCb: function hideCb() {
        t.hideThis();
      }
    });
  };

  __decorate([m(cc.Node)], e.prototype, "rewardItem", void 0);

  __decorate([m(cc.Node)], e.prototype, "rewards", void 0);

  __decorate([m(cc.Node)], e.prototype, "spineNode", void 0);

  return __decorate([y], e);
}(_baseUI["default"]);

exports["default"] = v;

cc._RF.pop();