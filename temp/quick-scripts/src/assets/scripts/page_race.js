"use strict";
cc._RF.push(module, '57a50JN9w9EQJ5/pwcl4QsY', 'page_race');
// scripts/page_race.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var a;

var _evts = require("evts");

var _idx = require("idx");

var _mySafeArea = require("mySafeArea");

var _pConst = require("pConst");

var _request = require("request");

var _time = require("time");

var _uData = require("uData");

var _rankItem = require("rankItem");

var _global = require("global");

var _bagMgr = require("bagMgr");

var _panelMgr = require("panelMgr");

var _rankMgr = require("rankMgr");

var _taskMgr = require("taskMgr");

var _pInfo = require("pInfo");

var w = cc._decorator;
var S = w.ccclass;
var T = w.property;

(function (t) {
  t[t.today = 0] = "today";
  t[t.yday = 1] = "yday";
})(a || (a = {}));

var I = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.scrollView = null;
    e.dayTypeBtnsSps = [];
    e.friendRankBtn = null;
    e.viewItem = null;
    e.rankTop = [];
    e.myRank = null;
    e.ticketCount = null;
    e.topNode = null;
    e.loadingNode = null;
    e.bgSpr = null;
    e.last_view_inner_y = -1;
    e.THEME_H = 122;
    e.top_offest = 61;
    e.designContH = 410;
    e.itemCount = 0;
    e.items = [];
    e.bottom_offest = 0;
    e.rankData = [];
    e.nowDataTag = a.today;
    e.isFirstLoad = !0;
    e.playAni = !0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.node.height = cc.winSize.height;
    _global["default"].padScale && (this.bgSpr.node.scale = _global["default"].padScale);
    this.scrollView.vertical = !1;

    _evts["default"].opE.on(this.onOperTap.bind(this));
  };

  e.prototype.onOperTap = function (t) {
    var e = null == t ? void 0 : t.action;
    if (e) switch (e) {
      case _evts["default"].UPD_PANEL:
      case _evts["default"].UPD_MAIN_RED:
        this.initData();
        break;

      case _evts["default"].SKIN_CHG:
        this.setMySelf();
    }
  };

  e.prototype.start = function () {
    var t = this;
    this.scheduleOnce(function () {
      t.adapter();
      t.scrollView.node.on("scrolling", function () {
        t.RefreshThemesVisible();
      }, t);
      t.initData();
      t.refreshData();
      t.updateFriendRankBtn();
    });
  };

  e.prototype.adapter = function () {
    var t = _mySafeArea.getSafeAreaRect().yMin;

    var e = this.node.height - 1280 - t;
    this.scrollView.node.height = this.designContH + e;
    this.scrollView.node.getChildByName("view").height = this.designContH + e;
    this.topNode.y -= t;
    this.scrollView.node.y -= t / 2;
    this.loadingNode.position = this.scrollView.node.position;
  };

  e.prototype.onEnable = function () {
    var t = this;
    this.isFirstLoad || (this.scrollView.vertical = !1, this.scheduleOnce(function () {
      t.adapter(), t.scrollView.scrollToTop(), t.playAni = !0, t.last_view_inner_y = -1, t.RefreshThemesVisible();
    }, 0.2));
    this.isFirstLoad = !1;
    var e = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);

    if (e - _pInfo["default"].ins.getRankLastTimeData() >= 3600 && !_pInfo["default"].ins.isOpenLock) {
      _pInfo["default"].ins.setRankLastTimeData(e);

      var o = _idx.platform.getUserInfo();

      var n = this.myRank.getComponent(_rankItem["default"]);
      o ? o.then(function (t) {
        _request["default"].ins.updateUserInfo(t);

        n.setHeadSp(_uData["default"].ins.getHeadImg());
      }, function () {
        n.setDefaultHead();
      }) : n.setDefaultHead();
    }
  };

  e.prototype.onDisable = function () {
    this.initAni();
  };

  e.prototype.initData = function () {
    var t = _bagMgr["default"].ins.getItemCount("qw_line_ticket") || 0;
    this.ticketCount.string = t + "/1";
  };

  e.prototype.refreshData = function () {
    this.getRankData();
  };

  e.prototype.getRankData = function () {
    var t;
    var e = this;
    this.nowDataTag === a.today ? t = _rankMgr["default"].ins.getTodayRaceData() : this.nowDataTag === a.yday && (t = _rankMgr["default"].ins.getYdayRaceData());
    t.then(function (t) {
      e.dealData(t.data);
      e.nowDataTag === a.yday && _rankMgr["default"].ins.setYdayRaceRankData(t.data);
    })["catch"](function (t) {
      console.error("getRankDataErr" + t);
    });
  };

  e.prototype.dealData = function (t) {
    this.node && (this.loadingNode.active = !1);
    var e = !1;
    var o = [];
    var n = 0;
    if (this.nowDataTag === a.today ? n = _rankMgr["default"].ins.getMyRaceTodayData() : this.nowDataTag === a.yday && (n = _rankMgr["default"].ins.getMyRaceYdayData()), t) for (var i in o = o.concat(t)) {
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
    this.last_view_inner_y = -1;
    this.itemCount = 97;
    var t = this.THEME_H * this.itemCount + this.top_offest / 2;
    this.scrollView.content.setContentSize(cc.size(cc.winSize.width, t));
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
          if (u.items[s].x = 0, l) return u.items[s].opacity = 0, u.scheduleOnce(function () {
            e.items[s].active = !0;
            e.last_view_inner_y = -1;
            e.RefreshThemesVisible(d + 1);
            l && e.showChgAni(e.items[s]);
          }, 0.06), "break";
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
      }, u = this, p = this.scrollView.node.height / 5 * 4, d = t; d < this.itemCount && "break" !== l(); d++) {
        ;
      }
    }
  };

  e.prototype.setRankTop = function (t, e) {
    var o = t.getComponent(_rankItem["default"]);
    e ? (o.setRankData(e), o.setGameUid(e.game_uid), o.setScore(e.sort_value), e.game_uid == _uData["default"].ins.getUid() ? (o.setSkin(_pInfo["default"].ins.getUsingSkin(), !1, !0), o.setNickName(_uData["default"].ins.getName()), o.setHeadSp(_uData["default"].ins.getHeadImg())) : (o.setSkin(null == e ? void 0 : e.uSkin, !1, !0), o.setNickName(e.nickname), e.avatar ? o.setHeadSp(e.avatar) : o.setDefaultHead())) : (o.clearFrame(), o.setNickName("暂无"), o.setScore("0"), o.setDefaultHead());
  };

  e.prototype.setItemInfo = function (t, e, o, n) {
    void 0 === n && (n = !1);
    var i = t.getComponent(_rankItem["default"]);
    i.setIdx(Number(e) + 1 + "");
    o ? (i.setRankData(o), i.setGameUid(o.game_uid), i.setScore(o.sort_value), o.game_uid == _uData["default"].ins.getUid() ? (i.setSkin(_pInfo["default"].ins.getUsingSkin(), n), i.setNickName(_uData["default"].ins.getName()), i.setHeadSp(_uData["default"].ins.getHeadImg())) : (i.setSkin(null == o ? void 0 : o.uSkin), i.setNickName(o.nickname), o.avatar ? i.setHeadSp(o.avatar) : i.setDefaultHead())) : (i.clearFrame(), i.setNickName("暂无"), i.setScore("0"), i.setDefaultHead());
  };

  e.prototype.setMySelf = function () {
    var t = this.rankData;

    for (var e in t) {
      var o = t[e];
      if (o.game_uid == _uData["default"].ins.getUid() && Number(e) < 100) return void this.setItemInfo(this.myRank, e, o, !0);
    }

    var n = 0;
    this.nowDataTag === a.today ? n = _rankMgr["default"].ins.getMyRaceTodayData() : this.nowDataTag === a.yday && (n = _rankMgr["default"].ins.getMyRaceYdayData());
    var i = this.myRank.getComponent(_rankItem["default"]);
    i.setSkin(_pInfo["default"].ins.getUsingSkin(), !0);
    i.setGameUid(_uData["default"].ins.getUid().toString());
    i.setIdx("99+");
    i.setNickName(_uData["default"].ins.getName());
    i.setScore(n + "");
    _uData["default"].ins.getHeadImg() ? i.setHeadSp(_uData["default"].ins.getHeadImg()) : i.setDefaultHead();
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

  e.prototype.onBtnStart = function () {
    _bagMgr["default"].ins.getItemCount("qw_line_ticket") <= 0 ? _panelMgr["default"].ins.open("ui/ui_getItem", {
      itemId: "qw_line_ticket",
      cb: this.initData.bind(this),
      gType: _pInfo.gameType.race
    }) : (_pInfo.chgScene(_pInfo.sceneType.game, {
      gameType: _pInfo.gameType.race
    }), _bagMgr["default"].ins.useItem("qw_line_ticket", 1, _pInfo.gameType.race), _taskMgr["default"].taskCheck(_pInfo.gameType.race));
  };

  e.prototype.onBtnTip = function () {
    _panelMgr["default"].ins.open("ui/ui_raceTip", {
      pageIdx: 2
    });
  };

  e.prototype.onBtnChange = function () {
    this.initAni();
    this.nowDataTag === a.yday ? (this.nowDataTag = a.today, this.dayTypeBtnsSps[0].active = !1, this.dayTypeBtnsSps[1].active = !0, this.refreshData()) : this.nowDataTag === a.today && (this.nowDataTag = a.yday, this.dayTypeBtnsSps[0].active = !0, this.dayTypeBtnsSps[1].active = !1, this.refreshData());
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

  e.prototype.updateFriendRankBtn = function () {
    this.friendRankBtn.active = _idx.platform.string() === _pConst.PFCode.Bytedance;
  };

  e.prototype.onBtnFriendRank = function () {
    _idx.platform.showFriendRank(_pConst.SDKConfig.ttZoneId.race);
  };

  e.prototype.onDestroy = function () {
    cc.assetManager.releaseAsset(this.bgSpr.spriteFrame);
  };

  __decorate([T(cc.ScrollView)], e.prototype, "scrollView", void 0);

  __decorate([T([cc.Node])], e.prototype, "dayTypeBtnsSps", void 0);

  __decorate([T(cc.Node)], e.prototype, "friendRankBtn", void 0);

  __decorate([T(cc.Node)], e.prototype, "viewItem", void 0);

  __decorate([T([cc.Node])], e.prototype, "rankTop", void 0);

  __decorate([T(cc.Node)], e.prototype, "myRank", void 0);

  __decorate([T(cc.Label)], e.prototype, "ticketCount", void 0);

  __decorate([T(cc.Node)], e.prototype, "topNode", void 0);

  __decorate([T(cc.Node)], e.prototype, "loadingNode", void 0);

  __decorate([T(cc.Sprite)], e.prototype, "bgSpr", void 0);

  return __decorate([S], e);
}(cc.Component);

exports["default"] = I;

cc._RF.pop();