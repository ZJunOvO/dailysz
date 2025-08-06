"use strict";
cc._RF.push(module, 'e7ea9rOEC9HW6BXUtMwquOJ', 'ui_mail');
// scripts/ui_mail.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _lang = require("lang");

var _mailItem = require("mailItem");

var _mailMgr = require("mailMgr");

var _panelMgr = require("panelMgr");

var _tipMgr = require("tipMgr");

var _pInfo = require("pInfo");

var _baseUI = require("baseUI");

var f = cc._decorator;
var g = f.ccclass;
var y = f.property;

var m = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.scrollView = null;
    e.mailPfb = null;
    e.emptyNode = null;
    e.getAllNode = null;
    e.eventFunc = null;
    e.isLoad = !1;
    e._mailItem = [];
    e.lastScrollPosition = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {};

  e.prototype.init = function () {
    for (var t = this, e = [], o = 0; o < arguments.length; o++) {
      e[o] = arguments[o];
    }

    _mailMgr["default"].ins.getMail(this.updMail.bind(this));

    this.scrollView.node.on("scrolling", function () {
      t.pageScroll();
    }, this);
  };

  e.prototype.updMail = function () {
    var t = this;

    if (!this.isLoad && this.scrollView) {
      this.isLoad = !0;
      var e = this.scrollView.content;
      e.children.forEach(function (e) {
        t._mailItem.push(e);
      });
      e.removeAllChildren();
      var o = _mailMgr["default"].ins.mailInfo.mail;
      var n = Object.keys(o);

      if (this.emptyNode.active = 0 == n.length, n.length) {
        for (var i = this.mailPfb, r = _mailMgr["default"].ins, a = 0; a < n.length; a++) {
          var s = n[a];

          if (r.serverMail[s]) {
            var u = r.mailInfo.mail[s];

            var p = this._mailItem.shift();

            p || (p = cc.instantiate(i));
            this.scrollView.content.addChild(p, 0);
            p.active = !1;
            p.getComponent(_mailItem["default"]).init(Number(s), u);
          }
        }

        this.isLoad = !1;
        this.lastScrollPosition = 0;
        this.updState({
          type: "load"
        });
        this.scheduleOnce(this.pageScroll.bind(this, !1), 0);
      } else this.isLoad = !1;
    }
  };

  e.prototype.pageScroll = function (t) {
    void 0 === t && (t = !0);
    var e = this.scrollView.content.children;
    var o = this.scrollView.getScrollOffset().y;

    if (!(t && Math.abs(o - this.lastScrollPosition) < 1)) {
      for (var n = this.scrollView.content.parent.height / 2, i = 0; i < e.length; i++) {
        var r = e[i];
        var a = r.convertToWorldSpaceAR(cc.Vec2.ZERO);
        (a = this.scrollView.content.parent.convertToNodeSpaceAR(a)).y + r.height / 2 < -n || a.y - r.height / 2 > n ? r.children[0].active = !1 : r.children[0].active = !0;
      }

      this.lastScrollPosition = o;
    }
  };

  e.prototype.showLoadAni = function (t) {
    cc.tween(t).to(0.5, {
      x: 0
    }, {
      easing: "backInOut"
    }).start();
  };

  e.prototype.showChangegAni = function (t) {
    cc.tween(t).to(0.2, {
      opacity: 255
    }).start();
  };

  e.prototype.chgAni = function (t, e) {
    void 0 === e && (e = 0);
    t.active = !0;
    this.showChgAni ? (t.opacity = 0, this.scheduleOnce(this.showChangegAni.bind(this, t), 0.1 * (e + 1))) : (t.x = (cc.winSize.width + t.width) / 2, this.scheduleOnce(this.showLoadAni.bind(this, t), 0.05 * e));
  };

  e.prototype.mailSort = function () {
    this.scrollView.content.children.sort(function (t, e) {
      return t.getComponent(_mailItem["default"]).state - e.getComponent(_mailItem["default"]).state;
    });
    this.scrollView.content.getComponent(cc.Layout).updateLayout();
  };

  e.prototype.getItemById = function (t) {
    for (var e = this.scrollView.content.children, o = 0; o < e.length; o++) {
      var n = e[o].getComponent(_mailItem["default"]);
      if (t === n.id) return {
        item: n,
        index: o
      };
    }
  };

  e.prototype.updState = function (t) {
    var e = this;
    var o = this.scrollView.content;
    var n = _mailMgr["default"].ins.serverMail;
    if (t) if ("keyAward" === t.type) o.children.forEach(function (t, o) {
      var i = t.getComponent(_mailItem["default"]);
      n[i.id].props && i.state !== _mailMgr.mailState.award && (i.updateState(_mailMgr.mailState.award), e.chgAni(t, o));
    });else if ("load" === t.type) this.mailSort(), o.children.forEach(function (t, o) {
      e.chgAni(t, o);
    });else if ("keyDelete" === t.type) {
      var i = [];
      o.children.forEach(function (t, e) {
        var o = t.getComponent(_mailItem["default"]);
        o.state === _mailMgr.mailState.award && i.push({
          node: o.node,
          index: e
        });
      });
      i.forEach(function (t) {
        o.children.splice(t.index, 1);
        t.node.destroy();
        o.getComponent(cc.Layout).updateLayout();
      });
    } else if ("read" === t.type) {
      if (t.id) {
        var r = this.getItemById(t.id);
        var a = _mailMgr["default"].ins.mailInfo.mail[t.id];
        r && r.item && (r.item.updateState(a), this.chgAni(r.item.node), this.mailSort());
      }
    } else if ("delete" === t.type) {
      var s = this.getItemById(t.id);
      s && s.item.node.destroy();
      this.scheduleOnce(function () {
        o.children.splice(s.index, 1);
        e.mailSort();
      });
    }
    this.scheduleOnce(function () {
      e.emptyNode.active = 0 == e.scrollView.content.children.length, e.pageScroll.bind(e, !1);
    });
    this.showChgAni || (this.showChgAni = !0);
  };

  e.prototype.keyDelete = function () {
    if (!this.isLoad) {
      var t = 0;
      Object.values(_mailMgr["default"].ins.mailInfo.mail).forEach(function (e) {
        e === _mailMgr.mailState.award && t++;
      });
      t <= 0 ? _tipMgr["default"].ins.showTip(_lang.lang[10005]) : _mailMgr["default"].ins.deleteMail();
    }
  };

  e.prototype.keyAward = function () {
    if (!this.isLoad) if (Object.keys(_mailMgr["default"].ins.mailInfo.mail).length <= 0) _tipMgr["default"].ins.showTip(_lang.lang[10006]);else {
      var t = _pInfo["default"].ins.Mail;
      var e = _mailMgr["default"].ins;
      var o = {};

      for (var n in t.mail) {
        if (t.mail[n] !== _mailMgr.mailState.award) {
          var i = e.serverMail;

          if (n && i[n]) {
            var r = JSON.parse(i[n].props);

            for (var a in r) {
              r.hasOwnProperty(a) && (o[a] ? o[a] += Number(r[a]) : o[a] = Number(r[a]));
            }
          }
        }
      }

      if (_mailMgr["default"].ins.getAward()) {
        var c = [];
        var h = this.getAllNode.parent.convertToWorldSpaceAR(this.getAllNode.position);

        for (var f in o) {
          var g = o[f];
          var y = {};
          y.itemId = f;
          y.worldPos = h;
          y.value = g;
          c.push(y);
        }

        c.length && (c.length > 10 && (c.length = 10), _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: c
        }));
      } else _tipMgr["default"].ins.showTip(_lang.lang[10006]);
    }
  };

  e.prototype.onLoad = function () {
    this.eventFunc = this.onOperTap.bind(this);

    _evts["default"].opE.on(this.eventFunc);
  };

  e.prototype.onDestroy = function () {
    _evts["default"].opE.off(this.eventFunc);

    this.eventFunc = null;
  };

  e.prototype.onOperTap = function (t) {
    var e = null == t ? void 0 : t.action;
    if (e) switch (e) {
      case _evts["default"].UPDMAIL:
        this.updState(t.data);
    }
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  __decorate([y(cc.ScrollView)], e.prototype, "scrollView", void 0);

  __decorate([y(cc.Prefab)], e.prototype, "mailPfb", void 0);

  __decorate([y(cc.Node)], e.prototype, "emptyNode", void 0);

  __decorate([y(cc.Node)], e.prototype, "getAllNode", void 0);

  return __decorate([g], e);
}(_baseUI["default"]);

exports["default"] = m;

cc._RF.pop();