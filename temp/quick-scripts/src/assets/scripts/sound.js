"use strict";
cc._RF.push(module, '9e58fSpOr5KX6wp5ukpL3BX', 'sound');
// scripts/sound.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _pInfo = require("pInfo");

var _c = require("c");

var _evts = require("evts");

var _uData = require("uData");

var l = function () {
  function t() {
    this.isSharing = !1;
    this.isHiding = !1;
    this.delayID = 0;
    this.clips = {};

    _evts["default"].plE.on(function (e) {
      e.onShow ? (t.ins.isHiding = !1, t.ins.onSoundChange()) : e.onHide && (t.ins.isHiding = !0, t.ins.onSoundChange());
    });

    _evts["default"].adE.on(function (e) {
      t.ins.isSharing = e == _c.ADE.SHARE || e == _c.ADE.VIDEO;
      t.ins.onSoundChange();
    });
  }

  Object.defineProperty(t, "ins", {
    get: function get() {
      this._ins || (this._ins = new t());
      return this._ins;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "bgmVolume", {
    get: function get() {
      void 0 === this._bgmVolume && (this._bgmVolume = _uData["default"].ins.getSetting().bgmVolume);
      return this._bgmVolume;
    },
    set: function set(t) {
      cc.audioEngine.setMusicVolume(t);
      this._bgmVolume = t;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "effectVolume", {
    get: function get() {
      void 0 === this._effectVolume && (this._effectVolume = _uData["default"].ins.getSetting().effectVolume);
      return this._effectVolume;
    },
    set: function set(t) {
      this._effectVolume = t;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.onSoundChange = function () {
    clearTimeout(this.delayID);
    this.delayID = setTimeout(function () {
      clearTimeout(t.ins.delayID);
      t.ins.delayID = 0;
      t.ins.isSharing || t.ins.isHiding ? t.ins.stopAll() : t.ins.resumeAll();
    }, 100);
  };

  t.prototype.stopAllEffects = function () {
    cc.audioEngine.stopAllEffects();
  };

  t.prototype.resumeAll = function () {
    cc.audioEngine.resumeMusic();
    cc.audioEngine.resumeAllEffects();
  };

  t.prototype.stopAll = function () {
    cc.audioEngine.stopMusic();
    cc.audioEngine.stopAllEffects();
  };

  t.prototype.play = function (t, e) {
    void 0 === e && (e = 0);
    return __awaiter(this, void 0, void 0, function () {
      var o;
      var n;
      var r;
      return __generator(this, function (i) {
        switch (i.label) {
          case 0:
            return !1 !== _uData["default"].ins.getSetting().effectSound && null != t ? [3, 1] : [2];

          case 1:
            return e = Math.max(1, Math.min(0, e)), t instanceof cc.AudioClip ? (o = t, [3, 5]) : [3, 2];

          case 2:
            return null != this.clips[t] ? [3, 4] : (n = this.clips, r = t, [4, new Promise(function (e) {
              cc.assetManager.loadBundle("sound", function (o, n) {
                o ? e(o) : n.load(t, cc.AudioClip, function (t, o) {
                  e(t ? null : o);
                });
              });
            })]);

          case 3:
            return o = n[r] = i.sent(), [3, 5];

          case 4:
            o = this.clips[t], i.label = 5;

          case 5:
            return o ? (cc.audioEngine.playEffect(o, !1), cc.audioEngine.setEffectsVolume(e * this.effectVolume), [2, o.duration]) : [2];

          case 6:
            return [2];
        }
      });
    });
  };

  t.prototype.playBGM = function () {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      var o;
      var n = this;
      return __generator(this, function () {
        return 0 == (e = _uData["default"].ins.getSetting().bgmSound) ? [2] : (o = _pInfo.ROOT == _pInfo.sceneType.game || _pInfo.ROOT == _pInfo.sceneType.guide ? "Game" : "Main", cc.assetManager.loadBundle("sound", function (i, r) {
          i || r.load(t.BGM + o, cc.AudioClip, function (t, i) {
            if (!t) {
              var r = cc.audioEngine;
              n.curBg == o && r.isMusicPlaying() || !e || (n.curBg = o, r.playMusic(i, !0), r.setMusicVolume(n.bgmVolume));
            }
          });
        }), [2]);
      });
    });
  };

  t.prototype.stopBGM = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function () {
        return _uData["default"].ins.getSetting().bgmSound && !t ? [2] : (cc.audioEngine.stopMusic(), [2]);
      });
    });
  };

  t.CLICK = "click";
  t.BGM = "BGM";
  t.WIN = "win";
  t.LOSE = "lose";
  t.RIGHT = "right";
  t.ERROR = "error";
  t.SHOVEL = "shovel";
  t.ROCKETLAUNCH = "rocketLaunch";
  t.ROCKETATTACK = "rocketAttack";
  t.TIME = "time";
  t.FINISH_PUZZLE = "finish_puzzle";
  return t;
}();

exports["default"] = l;

cc._RF.pop();