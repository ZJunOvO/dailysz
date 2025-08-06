"use strict";
cc._RF.push(module, '0adafKMQFRHBqpLMtwJNSJZ', 'grid');
// scripts/grid.js

"use strict";

//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.GridState = void 0;

var _evts = require("evts");

var _sound = require("sound");

var c = cc._decorator;
var l = c.ccclass;
var u = c.property;

(function (t) {
  t[t.empty = 0] = "empty";
  t[t.rightTile = 1] = "rightTile";
  t[t.wrongTile = 2] = "wrongTile";
  t[t.rightCross = 3] = "rightCross";
  t[t.wrongCross = 4] = "wrongCross";
})(exports.GridState || (exports.GridState = {}));

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.emptyNode = null;
    e.itemTipNode = null;
    e.itemTipAni = null;
    e.stateNodes = [];
    e.anis = [];
    e.crossShineNode = null;
    e.crossShineAni = null;
    e.norSf = null;
    e.tileSp = null;
    e.tileHLSp = null;
    e.isEmpty = !0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    for (var t = function t(_t) {
      _t.on(cc.Animation.EventType.FINISHED, function () {
        _t.node.active = !1;
      }, e);
    }, e = this, o = 0, n = this.anis; o < n.length; o++) {
      t(n[o]);
    }
  };

  e.prototype.shine = function () {
    if (this.isEmpty) {
      var t = this.crossShineNode;
      (t.active = !t.active) && this.crossShineAni.play();
    }
  };

  e.prototype.init = function (t) {
    this.isRight = t > 0 ? 1 : 0;
  };

  e.prototype.initType = function (t, e) {
    var o = t || this.norSf;
    this.tileSp.spriteFrame = this.tileHLSp.spriteFrame = o;
    e && (this.itemTipNode.getComponent(cc.Sprite).spriteFrame = e);
  };

  e.prototype.select = function (t, e) {
    if (void 0 === e && (e = !1), this.isEmpty) {
      this.isEmpty = !1;
      this.emptyNode.active = this.crossShineNode.active = !1;
      this.itemTipNode && (this.itemTipNode.active = !1);
      this.unschedule(this.tipShine);
      var o = this.isRight;
      var n = 0;
      e || (n = (t << 1) + o);
      var i = this.stateNodes[n];
      i.active = !0;
      i.getComponent(cc.Animation).play();
      e || 3 == n || _sound["default"].ins.play(0 == n ? _sound["default"].RIGHT : _sound["default"].ERROR);
      this.aniIdx = n < 2 ? 0 : 1;

      _evts["default"].opE.emit({
        action: _evts["default"].UPDATESCORE
      });

      e || 1 != n && 2 != n || _evts["default"].opE.emit({
        action: _evts["default"].LOSEHEART,
        data: this.node.position
      });
    }
  };

  e.prototype.playWormAni = function (t) {
    this.isEmpty || cc.tween(this.node).delay(t).to(7 / 30, {
      scale: 1.5
    }).to(5 / 30, {
      opacity: 0
    }).start();
  };

  e.prototype.playItemTip = function (t) {
    if (this.isEmpty) {
      var e = this.itemTipNode;
      this.unschedule(this.tipShine);
      e.active = t;
      t ? this.scheduleOnce(this.tipShine, 2 * Math.random()) : (this.itemTipAni.stop(), this.itemTipNode.opacity = 0);
    }
  };

  e.prototype.tipShine = function () {
    this.isEmpty ? (this.itemTipNode.active = !0, this.itemTipAni.play()) : this.unschedule(this.tipShine);
  };

  e.prototype.playHL = function (t) {
    this.isEmpty || (this.unschedule(this._playHL), this.scheduleOnce(this._playHL, t));
  };

  e.prototype._playHL = function () {
    var t = this.anis[this.aniIdx];
    t.node.active = !0;
    t.play();
  };

  e.prototype.playShow = function (t) {
    cc.tween(this.node).delay(6 * (Math.random() + 1.5) / 60).to(0.1, {
      scale: t + 0.2
    }).to(0.05, {
      scaleX: t - 0.1,
      scaleY: t - 0.3
    }).to(0.05, {
      scaleX: t + 0.1,
      scaleY: t + 0.1
    }).to(0.05, {
      scale: t
    }).start();
  };

  e.prototype.playFallDown = function () {
    var t = this;
    cc.tween(this.node).by(0.1, {
      angle: 60 * Math.random() - 30
    }).to(1, {
      y: -1e3
    }, {
      easing: "quadOut"
    }).call(function () {
      t.node.destroy();
    }).start();
  };

  e.prototype.playWalk = function (t) {
    var e = this.node;
    var o = e.scale;
    var n = cc.tween(e).to(0.1, {
      position: t
    });
    var i = cc.tween(e).to(0.05, {
      scale: o - 0.4
    }, {
      easing: "cubicOut"
    }).to(0.1, {
      scale: o
    }, {
      easing: "cubicIn"
    });
    cc.tween(e).delay(6 * (Math.random() + 0.5) / 60).parallel(n, i).start();
  };

  __decorate([u(cc.Node)], e.prototype, "emptyNode", void 0);

  __decorate([u(cc.Node)], e.prototype, "itemTipNode", void 0);

  __decorate([u(cc.Animation)], e.prototype, "itemTipAni", void 0);

  __decorate([u([cc.Node])], e.prototype, "stateNodes", void 0);

  __decorate([u([cc.Animation])], e.prototype, "anis", void 0);

  __decorate([u(cc.Node)], e.prototype, "crossShineNode", void 0);

  __decorate([u(cc.Animation)], e.prototype, "crossShineAni", void 0);

  __decorate([u(cc.SpriteFrame)], e.prototype, "norSf", void 0);

  __decorate([u(cc.Sprite)], e.prototype, "tileSp", void 0);

  __decorate([u(cc.Sprite)], e.prototype, "tileHLSp", void 0);

  return __decorate([l], e);
}(cc.Component);

exports["default"] = p;

cc._RF.pop();