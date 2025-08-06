"use strict";
cc._RF.push(module, '15b97t+7MtFCLfTRDvhWmnX', 'dayReward');
// scripts/dayReward.js

"use strict";

//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _res = require("res");

var _item = require("item");

var c = cc._decorator;
var l = c.ccclass;
var u = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.maskNode = null;
    e.recivedNode = null;
    e.canRecive = null;
    e.rewardItem = null;
    e.rewards = null;
    e.aniDatas = [];
    e.lightNode = null;
    e.showLight = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.initItem = function (t) {
    var e = this;

    if (t) {
      var o = 0;

      var n = function n(_n) {
        var r = t[_n],
            c = i.rewards.children[o];
        c || (c = cc.instantiate(i.rewardItem));

        _res["default"].ins.getBundleByString("resSps").then(function (t) {
          t.load("spine/light/action", sp.SkeletonData, function (t, o) {
            if (!t && e.node && e.node.isValid) {
              var n = new cc.Node(),
                  i = n.addComponent(sp.Skeleton);
              i.skeletonData = o, i.animation = "animation", n.parent = c, e.lightNode = n, n.active = e.showLight;
            }
          });
        })["catch"](function (t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });

        c.parent = i.rewards;
        var l = c.getComponent(_item["default"]);
        l && l.initByData(_n, r);
        var u = {};
        u.itemId = _n;
        u.itemNode = c;
        u.value = Number(r);
        i.aniDatas.push(u);
        o++;
      };

      var i = this;

      for (var r in t) {
        n(r);
      }
    }
  };

  e.prototype.setDefault = function () {
    this.maskNode.active = !1;
    this.recivedNode.active = !1;
    this.canRecive.active = !1;
    this.showLight = !0;
    this.lightNode && (this.lightNode.active = !0);
  };

  e.prototype.setCanRecive = function () {
    this.maskNode.active = !1;
    this.recivedNode.active = !1;
    this.canRecive.active = !0;
    this.showLight = !0;
    this.lightNode && (this.lightNode.active = !0);
  };

  e.prototype.setRecived = function () {
    this.maskNode.active = !0;
    this.recivedNode.active = !0;
    this.canRecive.active = !1;
    this.showLight = !1;
    this.lightNode && (this.lightNode.active = !1);
  };

  __decorate([u(cc.Node)], e.prototype, "maskNode", void 0);

  __decorate([u(cc.Node)], e.prototype, "recivedNode", void 0);

  __decorate([u(cc.Node)], e.prototype, "canRecive", void 0);

  __decorate([u(cc.Node)], e.prototype, "rewardItem", void 0);

  __decorate([u(cc.Node)], e.prototype, "rewards", void 0);

  return __decorate([l], e);
}(cc.Component);

exports["default"] = p;

cc._RF.pop();