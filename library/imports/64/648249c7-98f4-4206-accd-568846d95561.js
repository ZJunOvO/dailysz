"use strict";
cc._RF.push(module, '64824nHmPRCBqzNVohG2VVh', 'rankItem');
// scripts/rankItem.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _res = require("res");

var _global = require("global");

var _panelMgr = require("panelMgr");

var _skinMgr = require("skinMgr");

var u = cc._decorator;
var p = u.ccclass;
var d = u.property;

var h = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.nickNameLb = null;
    e.scoreLb = null;
    e.idxLb = null;
    e.headSp = null;
    e.headFSp = null;
    e.nameFSp = null;
    e.game_uid = "";
    e.rankInfo = {};
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.setHeadBtn();
    this.game_uid = "";
  };

  e.prototype.setNickName = function (t) {
    t.length > 6 && (t = t.substring(0, 5) + "...");
    this.nickNameLb.string = t;
  };

  e.prototype.setScore = function (t) {
    this.scoreLb.string = t;
  };

  e.prototype.setIdx = function (t) {
    this.idxLb.string = t;
  };

  e.prototype.setHeadSp = function (t) {
    var e = this;
    t ? cc.assetManager.loadRemote(t, {
      ext: _global.headImgExt
    }, function (t, o) {
      e.node && e.node.isValid && (t ? e.setDefaultHead() : e.headSp.spriteFrame = new cc.SpriteFrame(o));
    }) : this.setDefaultHead();
  };

  e.prototype.setDefaultHead = function () {
    _res["default"].ins.lSF("common/head_1", this.headSp);
  };

  e.prototype.setHeadBtn = function () {};

  e.prototype.setGameUid = function (t) {
    this.game_uid = t;
  };

  e.prototype.setRankData = function (t) {
    this.rankInfo = t;
  };

  e.prototype.setSkin = function (t, e, o) {
    void 0 === e && (e = !1);
    void 0 === o && (o = !1);
    t ? (t.headFrame && 1 != t.headFrame ? _skinMgr["default"].ins.updateHeadFrame(t.headFrame, this.headFSp, !0) : _skinMgr["default"].ins.updateHeadFrame(1, this.headFSp, !0), t.nameFrame && 1 != t.nameFrame ? _skinMgr["default"].ins.updateNameFrame(t.nameFrame, this.nameFSp) : this.nameFSp.spriteFrame = null) : (_skinMgr["default"].ins.updateHeadFrame(1, this.headFSp, !0), this.nameFSp.spriteFrame = null);
  };

  e.prototype.clearFrame = function () {
    _skinMgr["default"].ins.updateHeadFrame(1, this.headFSp, !0);

    this.nameFSp.spriteFrame = null;
  };

  e.prototype.clickHead = function () {
    this.game_uid && _panelMgr["default"].ins.open("ui/ui_userInfo", {
      gameUid: this.game_uid,
      baseData: this.rankInfo
    });
  };

  e.nameColor1 = new cc.Color(166, 86, 31);
  e.nameColor2 = new cc.Color(64, 109, 30);
  e.nameColor3 = new cc.Color(152, 54, 38);

  __decorate([d(cc.Label)], e.prototype, "nickNameLb", void 0);

  __decorate([d(cc.Label)], e.prototype, "scoreLb", void 0);

  __decorate([d(cc.Label)], e.prototype, "idxLb", void 0);

  __decorate([d(cc.Sprite)], e.prototype, "headSp", void 0);

  __decorate([d(cc.Sprite)], e.prototype, "headFSp", void 0);

  __decorate([d(cc.Sprite)], e.prototype, "nameFSp", void 0);

  return __decorate([p], e);
}(cc.Component);

exports["default"] = h;

cc._RF.pop();