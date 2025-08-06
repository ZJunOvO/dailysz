"use strict";
cc._RF.push(module, '9335eNcn6hC4YaMUkwXQ5k8', 'skinMgr');
// scripts/skinMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.SkinUnlockType = exports.SkinIdEnum = exports.SkinState = void 0;
var r;

var _evts = require("evts");

var _idx = require("idx");

var _res = require("res");

var _uData = require("uData");

var _global = require("global");

var _pInfo = require("pInfo");

(function (t) {
  t[t.none = 0] = "none", t[t.unlock = 1] = "unlock", t[t.lock = 2] = "lock", t[t.using = 3] = "using";
})(exports.SkinState || (exports.SkinState = {}));

(function (t) {
  t.bg = "bg", t.role = "role", t.nameFrame = "nameFrame", t.headFrame = "headFrame";
})(r = exports.SkinIdEnum || (exports.SkinIdEnum = {}));

(function (t) {
  t[t.none = 0] = "none";
  t[t.video = 1] = "video";
  t[t.coin = 2] = "coin";
})(exports.SkinUnlockType || (exports.SkinUnlockType = {}));

var d = function () {
  function t() {
    this.defaultConfig = {
      bg: {
        skinId: "bg",
        itemData: [{
          ref: 1,
          name: "默认背景",
          unlockType: 0,
          unlockValue: 0,
          desc: ""
        }, {
          ref: 2,
          name: "夜色降临",
          unlockType: 1,
          unlockValue: 20,
          desc: ""
        }]
      },
      role: {
        skinId: "role",
        itemData: [{
          ref: 1,
          name: "默认角色",
          unlockType: 0,
          unlockValue: 0,
          desc: ""
        }, {
          ref: 2,
          name: "流连忘返",
          unlockType: 1,
          unlockValue: 20,
          desc: ""
        }]
      },
      nameFrame: {
        skinId: "nameFrame",
        itemData: [{
          ref: 1,
          name: "默认名字框",
          unlockType: 0,
          unlockValue: 0,
          desc: ""
        }, {
          ref: 2,
          name: "心旷神怡",
          unlockType: 2,
          unlockValue: 1e4,
          desc: ""
        }, {
          ref: 3,
          name: "海誓山盟",
          unlockType: 2,
          unlockValue: 1e4,
          desc: ""
        }, {
          ref: 4,
          name: "旖旎风光",
          unlockType: 2,
          unlockValue: 2e4,
          desc: ""
        }, {
          ref: 5,
          name: "柳暗花遮",
          unlockType: 2,
          unlockValue: 2e4,
          desc: ""
        }, {
          ref: 6,
          name: "姹紫嫣红",
          unlockType: 2,
          unlockValue: 2e4,
          desc: ""
        }]
      },
      headFrame: {
        skinId: "headFrame",
        itemData: [{
          ref: 1,
          name: "默认头像框",
          unlockType: 0,
          unlockValue: 0,
          desc: ""
        }, {
          ref: 2,
          name: "秀色可餐",
          unlockType: 2,
          unlockValue: 2e4,
          desc: ""
        }, {
          ref: 3,
          name: "火树银花",
          unlockType: 2,
          unlockValue: 2e4,
          desc: ""
        }, {
          ref: 4,
          name: "湖光山色",
          unlockType: 2,
          unlockValue: 2e3,
          desc: ""
        }, {
          ref: 5,
          name: "鸟语花香",
          unlockType: 1,
          unlockValue: 10,
          desc: ""
        }, {
          ref: 6,
          name: "江山如画",
          unlockType: 1,
          unlockValue: 10,
          desc: ""
        }]
      }
    };
    this.skinConfig = this.defaultConfig;
  }

  Object.defineProperty(t, "ins", {
    get: function get() {
      return this._ins || (this._ins = new t());
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.init = function () {
    var t = this;
    cc.resources.load("config", cc.JsonAsset, function (e, o) {
      !e && o && o.json ? t.skinConfig = o.json : t.skinConfig = t.defaultConfig;
    });
  };

  t.prototype.isUsingSkin = function (t, e) {
    return _pInfo["default"].ins.getUsingSkin()[t] === e;
  };

  t.prototype.isHasSkin = function (t, e) {
    var o = _pInfo["default"].ins.getMySkin();

    return o[t] && o[t].includes(e);
  };

  t.prototype.getSkinConfig = function (t) {
    return this.skinConfig[t];
  };

  t.prototype.getSkinData = function (t, e) {
    for (var o = this.getSkinConfig(t).itemData, n = 0; n < o.length; n++) {
      if (o[n].ref === e) return o[n];
    }

    return null;
  };

  t.prototype.addSkin = function (t, e) {
    _pInfo["default"].ins.addMySkin(t, e);

    _idx.platform.reportEvent(_idx.ERepEvt.buySkin, {
      skinId: t,
      ref: e
    });

    _evts["default"].opE.emit({
      action: _evts["default"].SKIN_CHG,
      data: {
        skinId: t,
        ref: e,
        isUse: !1
      }
    });

    _uData["default"].ins._setLocalAndCloudData();
  };

  t.prototype.usingSkin = function (t, e) {
    var o;

    _pInfo["default"].ins.setUsingSkin(((o = {})[t] = e, o));

    _idx.platform.reportEvent(_idx.ERepEvt.useSkin, {
      skinId: t,
      ref: e
    });

    _evts["default"].opE.emit({
      action: _evts["default"].SKIN_CHG,
      data: {
        skinId: t,
        ref: e,
        isUse: !0
      }
    });
  };

  t.prototype.updateHeadFrame = function (t, e, o) {
    var n;
    var i;

    if (void 0 === o && (o = !1), e) {
      t || (t = 1);
      var a;
      var s = (null === (i = null === (n = this.getSkinConfig(r.headFrame)) || void 0 === n ? void 0 : n.itemData) || void 0 === i ? void 0 : i.length) || 1;
      (t = Math.min(t, s)) > 6 ? (a = _global.OssConfig.skinUrl + "headFrame/head" + t + ".png", cc.assetManager.loadRemote(a, cc.Texture2D, function (t, n) {
        if (!t && n && e.isValid) {
          var i = new cc.SpriteFrame(n);
          e.spriteFrame = i;
        } else o ? (a = "game/skin/headFrame/head1", _res["default"].ins.lSF(a, e)) : e.spriteFrame = null;
      })) : (a = "game/skin/headFrame/head" + t, _res["default"].ins.lSF(a, e));
    }
  };

  t.prototype.updateBg = function (t, e, o) {
    var n;
    var i;

    if (void 0 === o && (o = !1), e) {
      t || (t = 1);
      var a;
      var s = (null === (i = null === (n = this.getSkinConfig(r.bg)) || void 0 === n ? void 0 : n.itemData) || void 0 === i ? void 0 : i.length) || 1;
      (t = Math.min(t, s)) > 2 ? (a = _global.OssConfig.skinUrl + "bg/top" + t + ".jpg", cc.assetManager.loadRemote(a, cc.Texture2D, function (t, n) {
        if (!t && n && e.isValid) {
          var i = new cc.SpriteFrame(n);
          e.spriteFrame = i;
        } else o ? (a = "game/normal/top1", _res["default"].ins.lSF(a, e)) : e.spriteFrame = null;
      })) : (a = "game/normal/top" + t, _res["default"].ins.lSF(a, e));
    }
  };

  t.prototype.updateNameFrame = function (t, e, o) {
    var n;
    var i;

    if (void 0 === o && (o = !1), e) {
      t || (t = 1);
      var a;
      var s = (null === (i = null === (n = this.getSkinConfig(r.nameFrame)) || void 0 === n ? void 0 : n.itemData) || void 0 === i ? void 0 : i.length) || 1;
      (t = Math.min(t, s)) > 6 ? (a = _global.OssConfig.skinUrl + "nameFrame/name" + t + ".png", cc.assetManager.loadRemote(a, cc.Texture2D, function (t, n) {
        if (!t && n && e.isValid) {
          var i = new cc.SpriteFrame(n);
          e.spriteFrame = i;
        } else o ? (a = "game/skin/nameFrame/name1", _res["default"].ins.lSF(a, e)) : e.spriteFrame = null;
      })) : (a = "game/skin/nameFrame/name" + t, _res["default"].ins.lSF(a, e));
    }
  };

  t.prototype.updateRole = function (t, e, o) {
    var a;
    var s;
    var l = this;

    if (void 0 === o && (o = !1), e) {
      t || (t = 1);
      var u = (null === (s = null === (a = this.getSkinConfig(r.role)) || void 0 === a ? void 0 : a.itemData) || void 0 === s ? void 0 : s.length) || 1;
      if ((t = Math.min(t, u)) > 2) this.curRoleNode = e, this.curRoleRef = t, Promise.all([this._remoteAtlas(), this._remoteImg(), this._remoteJson()]).then(function (t) {
        var o = t[0];
        var r = t[1];
        var a = t[2];
        return __awaiter(l, void 0, void 0, function () {
          var t;
          var n;
          var s;
          var l;
          return __generator(this, function (i) {
            switch (i.label) {
              case 0:
                return (t = new sp.SkeletonData()).skeletonJson = a.json, t.atlasText = o.text, t.textures = [r], t.textureNames = ["1.png"], [4, _res["default"].ins.lPre("skin/girl1")];

              case 1:
                return n = i.sent(), s = cc.instantiate(n), (l = s.getComponent(sp.Skeleton)) ? (l.skeletonData = t, s.position = cc.Vec3.ZERO, l.animation = "idle", e.addChild(s), [2]) : [2];
            }
          });
        });
      })["catch"](function (t) {
        if (console.error(t), e.removeAllChildren(), o) {
          if (!e) return;

          _res["default"].ins.lPre("skin/girl1").then(function (t) {
            var o = cc.instantiate(t);
            o.position = cc.Vec3.ZERO;
            e.addChild(o);
          });
        }
      });else {
        var p = "skin/girl" + t;
        e.removeAllChildren();

        _res["default"].ins.lPre(p).then(function (t) {
          var o = cc.instantiate(t);
          o.position = cc.Vec3.ZERO;
          e.addChild(o);
        });
      }
    }
  };

  t.prototype._remoteAtlas = function () {
    var t = this;
    var e = _global.OssConfig.skinUrl + "role/" + this.curRoleRef + "/1.atlas";
    return new Promise(function (o, n) {
      cc.assetManager.loadRemote(e, function (e, i) {
        e && n(e);
        t.curRoleNode.isValid || n("this.curRoleNode.isValid === false");
        i || n("atlasText is null");
        o(i);
      });
    });
  };

  t.prototype._remoteImg = function () {
    var t = this;
    var e = _global.OssConfig.skinUrl + "role/" + this.curRoleRef + "/1.png";
    return new Promise(function (o, n) {
      cc.assetManager.loadRemote(e, function (e, i) {
        e && n(e);
        t.curRoleNode.isValid || n("this.curRoleNode.isValid === false");
        i || n("texture is null");
        o(i);
      });
    });
  };

  t.prototype._remoteJson = function () {
    var t = this;
    var e = _global.OssConfig.skinUrl + "role/" + this.curRoleRef + "/1.json";
    return new Promise(function (o, r) {
      cc.assetManager.loadRemote(e, function (e, a) {
        return __awaiter(t, void 0, void 0, function () {
          return __generator(this, function () {
            e && r(e);
            this.curRoleNode.isValid || r("this.curRoleNode.isValid === false");
            a || r("skeletonJson is null");
            o(a);
            return [2];
          });
        });
      });
    });
  };

  return t;
}();

exports["default"] = d;

cc._RF.pop();