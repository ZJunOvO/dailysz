"use strict";
cc._RF.push(module, '24caeZaNyxM8KAZRT3lrCcp', 'ui_rePlay');
// scripts/ui_rePlay.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _idx = require("idx");

var _res = require("res");

var _cfgMgr = require("cfgMgr");

var _global = require("global");

var _bagMgr = require("bagMgr");

var _festivalMgr = require("festivalMgr");

var _levelMgr = require("levelMgr");

var _panelMgr = require("panelMgr");

var _pInfo = require("pInfo");

var _game = require("game");

var _baseUI = require("baseUI");

var v = cc._decorator;
var _ = v.ccclass;
var b = v.property;

var w = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.endTitleNode = null;
    e.pauseTitleNode = null;
    e.shareBtn = null;
    e.shareIcon = null;
    e.shareCount = null;
    e.curLb = null;
    e.preLb = null;
    e.curScoreLbl = null;
    e.preBestScore = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    _evts["default"].opE.on(this.onOperTap.bind(this));
  };

  e.prototype.onOperTap = function (t) {
    var e = null == t ? void 0 : t.action;
    if (e) switch (e) {
      case _evts["default"].SHOWVIDEOSHARE:
        _game["default"].type != _pInfo.gameType.practice && this.shareBtn && (this.shareBtn.active = !0);
    }
  };

  e.prototype.init = function (t) {
    var e = t.curScore;
    var o = t.continueCb;
    this.continueCb = o;
    var n = this.endTitleNode.active = !o;
    this.pauseTitleNode.active = !!o;
    n && _idx.platform.stopVideoRecord();
    var i = _game["default"].type;
    var r = _pInfo["default"].ins;
    var a = this.shareIcon;
    var u = this.shareCount;
    var p = _cfgMgr["default"].serverCfg.share_rules.rules;
    var d = p.main_line.val;
    var f = p.main_line.props;
    this.curScore = e;

    _levelMgr["default"].ins.getLevelCost();

    var m = "当前连胜:";
    var v = "最高连胜:";

    var _ = r.getConsWinTimes();

    var b = r.getRecordData().main.heWins || 0;
    i == _pInfo.gameType.race && (m = "当前积分:", v = "最高积分:", _ = e, b = r.getRecordData().race.hePoints || 0, d = p.qw_line.val, f = p.qw_line.props);
    this.curLb.string = m;
    this.preLb.string = v;
    this.curScoreLbl.string = _ + "";
    this.preBestScore.string = b + "";

    _res["default"].ins.getBundleByString("resSps").then(function (t) {
      a.spriteFrame = t.get("item/" + f, cc.SpriteFrame);
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('resSps')", t);
    });

    u.string = "+" + d;
    a.node.active = (i == _pInfo.gameType.race ? r.getRaceShareTime() : r.getNormalShareTime()) < 3;
  };

  e.prototype.getPower = function (t) {
    _pInfo["default"].ins.addPower(t);
  };

  e.prototype.onContinue = function () {
    var t;
    this.hide();
    null === (t = this.continueCb) || void 0 === t || t.call(this);
  };

  e.prototype.onClose = function () {
    this.continueCb ? this.onContinue() : this.hideThis();
  };

  e.prototype.onShare = function () {
    var t = this;

    _idx.platform.shareVideoRecord().then(function (e) {
      var o = t.shareIcon;

      if (1 == e && o && o.isValid && o.node.active) {
        var n = _game["default"].type == _pInfo.gameType.race;
        var i = _pInfo["default"].ins;
        var r = void 0;
        var a = void 0;
        var s = void 0;
        var c = _cfgMgr["default"].serverCfg.share_rules.rules;

        if (n) {
          s = c.qw_line.val;
          a = c.qw_line.props;
          var u = i.getRaceShareTime();
          i.setRaceShareTime(u + 1);
        } else s = c.main_line.val, a = c.main_line.props, u = i.getNormalShareTime(), i.setNormalShareTime(u + 1);

        switch (a) {
          case "coin":
            r = i.getCoin(), i.addCoin(s);
            break;

          case "times":
            i.addPower(s);
            break;

          default:
            _bagMgr["default"].ins.addItem(a, s);

        }

        var d = t.shareIcon.node.parent.convertToWorldSpaceAR(t.shareIcon.node.position);

        _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: [{
            itemId: a,
            worldPos: d,
            value: s
          }],
          showCoin: r
        });

        t.shareBtn.active = !1;
      }
    })["catch"](function () {
      console.error("shareErr");
    });
  };

  e.prototype.onBtnGuide = function () {
    _pInfo.chgScene(_pInfo.sceneType.guide);
  };

  e.prototype.onBtnTrain = function () {
    _pInfo.chgScene(_pInfo.sceneType.game, {
      gameType: _pInfo.gameType.practice
    });
  };

  e.prototype.hideThis = function () {
    var t = _game["default"].type;
    t == _pInfo.gameType.race ? (_global["default"].loadToRace = 4, _festivalMgr["default"].ins.updPro(_festivalMgr.fesTaskKey.raceScore, this.curScore)) : t == _pInfo.gameType.challenge && (_global["default"].loadToRace = 3);
    t != _pInfo.gameType.practice ? (_pInfo["default"].ins.recordGameResult(_game["default"].type, !1, this.curScore), _pInfo.chgScene(_pInfo.sceneType.main, {
      cb: void 0
    })) : _pInfo.chgScene(_pInfo.sceneType.main);
  };

  __decorate([b(cc.Node)], e.prototype, "endTitleNode", void 0);

  __decorate([b(cc.Node)], e.prototype, "pauseTitleNode", void 0);

  __decorate([b(cc.Node)], e.prototype, "shareBtn", void 0);

  __decorate([b(cc.Sprite)], e.prototype, "shareIcon", void 0);

  __decorate([b(cc.Label)], e.prototype, "shareCount", void 0);

  __decorate([b(cc.Label)], e.prototype, "curLb", void 0);

  __decorate([b(cc.Label)], e.prototype, "preLb", void 0);

  __decorate([b(cc.Label)], e.prototype, "curScoreLbl", void 0);

  __decorate([b(cc.Label)], e.prototype, "preBestScore", void 0);

  return __decorate([_], e);
}(_baseUI["default"]);

exports["default"] = w;

cc._RF.pop();