"use strict";
cc._RF.push(module, '18935KmlCBN86TB4yHqLYf5', 'panelMgr');
// scripts/panelMgr.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.PanelShowResult = void 0;
var c;

var _evts = require("evts");

var _res = require("res");

var _baseUI = require("baseUI");

var d = cc._decorator;
var h = d.ccclass;
var f = d.property;

(function (t) {
  t[t.DONE = 0] = "DONE";
  t[t.FAILED = 1] = "FAILED";
  t[t.WAITING = 2] = "WAITING";
})(c = exports.PanelShowResult || (exports.PanelShowResult = {}));

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.container = null;
    e.mask = null;
    return e;
  }

  var o;

  __extends(e, t);

  o = e;

  e.prototype.onLoad = function () {
    o.ins = this;
    this.panelQueue = [];
    this.panelList = [];
    this.mask.active = !1;
    this.mask.opacity = 0;
  };

  e.prototype.open = function (t, e, o) {
    void 0 === o && (o = {});
    return __awaiter(this, void 0, void 0, function () {
      var n;
      var i;
      var r;
      var a;
      var d;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            return o.inQueue && this.panelList.length > 0 ? (this.panelQueue.push({
              prefab: t,
              data: e,
              opt: o
            }), [2, {
              panelResult: c.WAITING
            }]) : [3, 1];

          case 1:
            return [4, new Promise(function (e, o) {
              _res["default"].ins.getBundleByString("prefab").then(function (n) {
                n.load(t, cc.Prefab, function (t, n) {
                  t ? o(t) : e(n);
                });
              });
            })];

          case 2:
            return n = s.sent(), d = this, cc.isValid(n) ? (i = cc.instantiate(n), (r = i.getComponent(_baseUI["default"])) ? ((a = i.getComponent(cc.Widget) || i.addComponent(cc.Widget)).verticalCenter = 0, a.horizontalCenter = 0, a.isAlignVerticalCenter = !0, a.isAlignHorizontalCenter = !0, this.currentPanel = i, this.panelList.push({
              prefab: t,
              data: e,
              opt: o,
              node: i
            }), i.setParent(this.container), r.show(e), this.ensureMask(), _evts["default"].laE.emit({
              comp: r
            }), [2, new Promise(function (t) {
              r.setCb(function (e, o) {
                d.currentPanel = null;
                e.destroy();

                for (var n = 0; n < d.panelList.length; n++) {
                  if (e == d.panelList[n].node) {
                    d.panelList.splice(n, 1);
                    break;
                  }
                }

                t({
                  panelResult: c.DONE,
                  values: o
                });
                d.onNext();
                d.scheduleOnce(function () {
                  d.ensureMask();

                  _evts["default"].laE.emit({
                    comp: null
                  });
                }, 0);
              });
            })]) : (console.warn("failed to load component of prefab", t), [2, {
              panelResult: c.FAILED
            }])) : (console.warn("invalid prefab", t), [2, {
              panelResult: c.FAILED
            }]);

          case 3:
            return [2];
        }
      });
    });
  };

  e.prototype.getPanelByPath = function (t) {
    for (var e = this.panelList, o = e.length - 1; o >= 0; --o) {
      if (e[o].prefab === t && null != e[o].node) {
        var n = e[o].node.getComponent(_baseUI["default"]);
        if (null != n) return n;
      }
    }

    return null;
  };

  e.prototype.close = function (t) {
    for (var e = this.panelList, o = e.length - 1; o >= 0; --o) {
      if (e[o].prefab === t) {
        var n = e[o].node;

        if (null != n) {
          var i = n.getComponent(_baseUI["default"]);
          null != i && i.hide();
        }

        break;
      }
    }
  };

  e.prototype.closeAllPanel = function () {
    this.panelQueue = [];

    for (var t = this.panelList, e = t.length - 1; e >= 0; --e) {
      if (null != t[e].node) {
        var o = t[e].node.getComponent(_baseUI["default"]);
        null != o && o.hide();
      }
    }
  };

  e.prototype.onNext = function () {
    if (!(this.panelList.length > 0) && null == this.currentPanel && 0 != this.panelQueue.length) {
      var t = this.panelQueue.shift();
      this.open(t.prefab, t.data, t.opt);
    }
  };

  e.prototype.ensureMask = function () {
    var t = this.panelList;
    var e = t.length;
    var o = t[e - 1];
    var n = this.container.childrenCount;
    var i = this.mask;
    if (e <= 0) i.opacity = 0, i.isValid && (i.active = !1), _evts["default"].opE.emit({
      action: _evts["default"].CHECK_WX_BTNS
    });else {
      var r = o.node;
      i.active = !0;
      cc.tween(i).to(0.2, {
        opacity: 200
      }).start();
      r.active = !0;
      i.setSiblingIndex(n);
      r.setSiblingIndex(n);

      _evts["default"].opE.emit({
        action: _evts["default"].HIDE_WX_BTNS
      });
    }
  };

  e.prototype.onMaskClick = function () {
    var t = this.panelList;
    var e = t.length;

    if (!(e <= 0)) {
      var o = t[e - 1];
      var n = o.opt;
      var i = o.node;
      !n.MaskNoHide && i.getComponent(_baseUI["default"]).hide();
    }
  };

  e.prototype.hasPop = function () {
    return this.panelList.length > 0;
  };

  __decorate([f(cc.Node)], e.prototype, "container", void 0);

  __decorate([f(cc.Node)], e.prototype, "mask", void 0);

  return o = __decorate([h], e);
}(cc.Component);

exports["default"] = g;

cc._RF.pop();