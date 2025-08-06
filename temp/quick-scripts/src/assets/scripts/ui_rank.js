"use strict";
cc._RF.push(module, '26842+g3mFAKqs5eUSbH3PX', 'ui_rank');
// scripts/ui_rank.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var a;
var s;

var _idx = require("idx");

var _mySafeArea = require("mySafeArea");

var _request = require("request");

var _res = require("res");

var _time = require("time");

var _uData = require("uData");

var _lang = require("lang");

var _global = require("global");

var _rankMgr = require("rankMgr");

var _tipMgr = require("tipMgr");

var _pInfo = require("pInfo");

var _baseUI = require("baseUI");

var _rankItem = require("rankItem");

var w = cc._decorator;
var S = w.ccclass;
var T = w.property;

(function (t) {
  t[t.mian = 0] = "mian", t[t.daily = 1] = "daily", t[t.race = 2] = "race";
})(a || (a = {}));

(function (t) {
  t[t.score = 0] = "score";
  t[t.win = 1] = "win";
})(s || (s = {}));

var I = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.scrollView = null;
    e.dataTagBtnsSps = [];
    e.levelTagBtnsSps = [];
    e.dayTypeBtnsSps = [];
    e.viewItem = null;
    e.rankTop = [];
    e.myRank = null;
    e.topNode = null;
    e.loadingNode = null;
    e.closeNode = null;
    e.bgSpr = null;
    e.type = _rankMgr.rankType.Total;
    e.tag = _rankMgr.rankTag.mainScore;
    e.levelTag = a.mian;
    e.dataTag = s.score;
    e.last_view_inner_y = -1;
    e.THEME_H = 122;
    e.top_offest = 61;
    e.itemCount = 0;
    e.items = [];
    e.rankData = [];
    e.playAni = !0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    if (this.node.height = cc.winSize.height, _global["default"].padScale) {
      this.bgSpr.node.scale = _global["default"].padScale;
      var t = (cc.view.getVisibleSize().width - 720) / 2;
      this.closeNode.x -= t;
    }

    var e = this.node.height - 1280;
    this.scrollView.node.height += e;
    this.scrollView.node.getChildByName("view").height += e;
    this.scrollView.vertical = !1;
    var o = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);

    if (o - _pInfo["default"].ins.getRankLastTimeData() >= 3600) {
      _pInfo["default"].ins.setRankLastTimeData(o);

      var n = _idx.platform.getUserInfo();

      var i = this.myRank.getComponent(_rankItem["default"]);
      n ? n.then(function (t) {
        _request["default"].ins.updateUserInfo(t);

        i.setHeadSp(_uData["default"].ins.getHeadImg());
      }, function () {
        i.setDefaultHead();
      }) : i.setDefaultHead();
    }
  };

  e.prototype.start = function () {
    var t = this;
    this.scheduleOnce(function () {
      var e = _mySafeArea.getSafeAreaRect().yMin;

      t.topNode.y -= e;
      t.scrollView.node.y -= e / 2;
      t.scrollView.node.getChildByName("view").height -= e;
      t.scrollView.content.y -= e / 2;
      t.scrollView.node.on("scrolling", function () {
        t.RefreshThemesVisible();
      }, t);
      t.loadingNode.position = t.scrollView.node.position;
      t.initData();

      _rankMgr["default"].ins.uploadRankData();
    });
  };

  e.prototype.initData = function () {
    this.refreshData();
  };

  e.prototype.refreshData = function () {
    this.levelTag === a.mian ? this.dataTag === s.score ? this.tag = _rankMgr.rankTag.mainScore : this.tag = _rankMgr.rankTag.mainWin : this.levelTag === a.daily && (this.dataTag === s.score ? this.tag = _rankMgr.rankTag.dailyScore : this.tag = _rankMgr.rankTag.dailyWin);
    this.getRankdata();
  };

  e.prototype.getRankdata = function () {
    var t = this;

    _rankMgr["default"].ins.getRankDataByType(this.tag, this.type).then(function (e) {
      t.dealData(e.data);
    }, function () {
      t.dealData([]);
    });
  };

  e.prototype.dealData = function (t) {
    this.node && (this.loadingNode.active = !1);
    var e = !1;
    var o = [];
    var n = _rankMgr["default"].ins.getMyRankDataByTag(this.tag, this.type) || 0;
    if (t) for (var i in o = o.concat(t)) {
      if ((r = o[i]).game_uid == _uData["default"].ins.getUid()) {
        r.nickname = _uData["default"].ins.getName();
        r.sort_value = n;
        r.game_uid = _uData["default"].ins.getUid();
        r.avatar = _uData["default"].ins.getHeadImg();
        e = !0;
        break;
      }
    }

    if (!e) {
      var r = {
        nickname: _uData["default"].ins.getName(),
        sort_value: n,
        game_uid: _uData["default"].ins.getUid(),
        avatar: _uData["default"].ins.getHeadImg()
      };
      o.push(r);
    }

    o.sort(function (t, e) {
      return e.sort_value - t.sort_value;
    });
    this.rankData = o;
    this.refreshPanel();
  };

  e.prototype.refreshPanel = function () {
    this.setMySelf();
    this.itemCount = 97;
    var t = this.THEME_H * this.itemCount + this.top_offest;
    this.scrollView.content.setContentSize(cc.size(cc.winSize.width, t));
    this.last_view_inner_y = -1;
    this.scrollView.stopAutoScroll();
    this.scrollView.scrollToTop();

    for (var e = 0; e < 3; e++) {
      var o = this.rankData[e];
      var n = this.rankTop[e];
      this.setRankTop(n, o);
    }

    this.RefreshThemesVisible();
  };

  e.prototype.RefreshThemesVisible = function (t) {
    var e = this;
    void 0 === t && (t = 0);
    var o = this.scrollView.getContentPosition();

    if (!(Math.abs(this.last_view_inner_y - o.y) < 0.01)) {
      this.last_view_inner_y = o.y;

      for (var n, i, r, a, s, c, l = function l() {
        n = -d * u.THEME_H - u.top_offest;
        i = u.scrollView.content.convertToWorldSpaceAR(cc.v2(0, n));
        r = u.node.convertToNodeSpaceAR(i);
        a = r.y < -p || r.y + u.THEME_H > p;
        s = d;
        var t = d + 3;
        var o = u.rankData[t];
        if (a) u.items[s] && (u.items[s].active = !1);else if (u.items[s]) {
          u.setItemInfo(u.items[s], t, o);
          var l = u.playAni;
          if (l) return u.items[s].x = 0, u.items[s].opacity = 0, u.scheduleOnce(function () {
            e.items[s].active = !0;
            e.last_view_inner_y = -1;
            e.RefreshThemesVisible(d + 1);
            l && e.showChgAni(e.items[s]);
          }, 0.06), "break";
          u.items[s].x = 0;
          u.items[s].opacity = 255;
          u.items[s].active = !0;
        } else {
          (c = cc.instantiate(u.viewItem)).active = !0;
          c.position = cc.v3(0, -d * u.THEME_H - u.top_offest);
          c.parent = u.scrollView.content;
          u.items[s] = c;
          u.setItemInfo(c, t, o);
          var h = u.playAni;
          if (h) return c.x = (cc.winSize.width + u.items[s].width) / 2, c.opacity = 255, u.scheduleOnce(function () {
            e.last_view_inner_y = -1;
            e.RefreshThemesVisible(d + 1);
            h && e.showLoadAni(c);
          }, 0.02), "break";
          c.opacity = 255;
          c.x = 0;
        }
        u.playAni = !1;
        d === u.itemCount - 1 && u.scheduleOnce(function () {
          e.scrollView.vertical = !0;
        }, 0.5);
      }, u = this, p = this.scrollView.node.height / 4 * 3, d = t; d < this.itemCount && "break" !== l(); d++) {
        ;
      }
    }
  };

  e.prototype.setRankTop = function (t, e) {
    var o = t.getComponent(_rankItem["default"]);
    e ? (o.setRankData(e), o.setGameUid(e.game_uid), o.setScore(e.sort_value), e.game_uid == _uData["default"].ins.getUid() ? (o.setSkin(_pInfo["default"].ins.getUsingSkin(), !1, !0), o.setNickName(_uData["default"].ins.getName()), o.setHeadSp(_uData["default"].ins.getHeadImg())) : (o.setSkin(null == e ? void 0 : e.uSkin, !1, !0), o.setNickName(e.nickname), e.avatar ? o.setHeadSp(e.avatar) : o.setDefaultHead())) : (o.setNickName("暂无"), o.setScore("0"), o.setDefaultHead());
  };

  e.prototype.setItemInfo = function (t, e, o, n) {
    void 0 === n && (n = !1);
    var i = t.getComponent(_rankItem["default"]);
    i.setIdx(Number(e) + 1 + "");
    o ? (i.setRankData(o), i.setGameUid(o.game_uid), i.setScore(o.sort_value), o.game_uid == _uData["default"].ins.getUid() ? (i.setSkin(_pInfo["default"].ins.getUsingSkin(), n), i.setNickName(_uData["default"].ins.getName()), i.setHeadSp(_uData["default"].ins.getHeadImg())) : (i.setSkin(null == o ? void 0 : o.uSkin), i.setNickName(o.nickname), o.avatar ? i.setHeadSp(o.avatar) : i.setDefaultHead())) : (i.setNickName("暂无"), i.setScore("0"), i.setDefaultHead());
  };

  e.prototype.setMySelf = function () {
    var t = this.rankData;

    for (var e in t) {
      var o = t[e];
      if (o.game_uid == _uData["default"].ins.getUid() && Number(e) < 100) return void this.setItemInfo(this.myRank, e, o, !0);
    }

    var n = _rankMgr["default"].ins.getMyRankDataByTag(this.tag, this.type);

    var i = this.myRank.getComponent(_rankItem["default"]);
    i.setSkin(_pInfo["default"].ins.getUsingSkin(), !0);
    i.setGameUid(_uData["default"].ins.getUid().toString());
    i.setIdx("99+");
    i.setNickName(_uData["default"].ins.getName());
    i.setScore(n + "");
    _uData["default"].ins.getHeadImg() ? i.setHeadSp(_uData["default"].ins.getHeadImg()) : i.setDefaultHead();
  };

  e.prototype.setHeadOnLine = function (t, e) {
    var o = this;
    cc.assetManager.loadRemote(e, function (e, n) {
      !e && o.node && o.node.isValid && (t.spriteFrame = new cc.SpriteFrame(n));
    });
  };

  e.prototype.setDefaultHead = function (t) {
    var e = this;

    _res["default"].ins.getBundleByString("resSps").then(function (o) {
      o.load("common/head_1", cc.SpriteFrame, function (o, n) {
        !o && e.node && e.node.isValid && (t.spriteFrame = n);
      });
    })["catch"](function (t) {
      console.error("RTool.ins.getBundleByString('resSps')", t);
    });
  };

  e.prototype.showLoadAni = function (t) {
    cc.tween(t).to(0.5, {
      x: 0
    }, {
      easing: "backInOut"
    }).start();
  };

  e.prototype.showChgAni = function (t) {
    cc.tween(t).to(0.5, {
      opacity: 255
    }).start();
  };

  e.prototype.onBtnChgDayType = function () {
    this.initAni();
    this.type == _rankMgr.rankType.Total ? (this.type = _rankMgr.rankType.Today, this.refreshData(), this.dayTypeBtnsSps[0].active = !1, this.dayTypeBtnsSps[1].active = !0) : this.type == _rankMgr.rankType.Today && (this.type = _rankMgr.rankType.Total, this.refreshData(), this.dayTypeBtnsSps[0].active = !0, this.dayTypeBtnsSps[1].active = !1);
  };

  e.prototype.onBtnMain = function () {
    this.levelTag !== a.mian && (this.initAni(), this.levelTag = a.mian, this.refreshData(), this.chgLevelTagBtns(!0));
  };

  e.prototype.onBtnDaily = function () {
    _tipMgr["default"].ins.showTip(_lang.lang[10004]);
  };

  e.prototype.chgLevelTagBtns = function (t) {
    this.levelTagBtnsSps[0].active = t;
    this.levelTagBtnsSps[1].active = !t;
    this.levelTagBtnsSps[2].active = !t;
    this.levelTagBtnsSps[3].active = t;
  };

  e.prototype.onBtnChgDataType = function () {
    this.initAni();
    this.dataTag == s.score ? (this.dataTag = s.win, this.refreshData(), this.dataTagBtnsSps[0].active = !1, this.dataTagBtnsSps[1].active = !0) : this.dataTag == s.win && (this.dataTag = s.score, this.refreshData(), this.dataTagBtnsSps[0].active = !0, this.dataTagBtnsSps[1].active = !1);
  };

  e.prototype.initAni = function () {
    this.unscheduleAllCallbacks();

    for (var t = 0, e = this.items.length; t < e; t++) {
      var o = this.items[t];
      cc.Tween.stopAllByTarget(o);
      o && (o.opacity = 0);
    }

    this.scrollView.stopAutoScroll();
    this.scrollView.scrollToTop();
    this.scrollView.vertical = !1;
    this.playAni = !0;
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  e.prototype.onDestroy = function () {
    cc.assetManager.releaseAsset(this.bgSpr.spriteFrame);
  };

  __decorate([T(cc.ScrollView)], e.prototype, "scrollView", void 0);

  __decorate([T([cc.Node])], e.prototype, "dataTagBtnsSps", void 0);

  __decorate([T([cc.Node])], e.prototype, "levelTagBtnsSps", void 0);

  __decorate([T([cc.Node])], e.prototype, "dayTypeBtnsSps", void 0);

  __decorate([T(cc.Node)], e.prototype, "viewItem", void 0);

  __decorate([T([cc.Node])], e.prototype, "rankTop", void 0);

  __decorate([T(cc.Node)], e.prototype, "myRank", void 0);

  __decorate([T(cc.Node)], e.prototype, "topNode", void 0);

  __decorate([T(cc.Node)], e.prototype, "loadingNode", void 0);

  __decorate([T(cc.Node)], e.prototype, "closeNode", void 0);

  __decorate([T(cc.Sprite)], e.prototype, "bgSpr", void 0);

  return __decorate([S], e);
}(_baseUI["default"]);

exports["default"] = I;

cc._RF.pop();