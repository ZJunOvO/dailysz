var n;
Object.defineProperty(exports, "__esModule", { value: !0 });
var a;
var _evts = require("evts");
var _idx = require("idx");
var _pConst = require("pConst");
var _request = require("request");
var _res = require("res");
var _sound = require("sound");
var _time = require("time");
var _uData = require("uData");
var _cfgMgr = require("cfgMgr");
var _page_jigsaw = require("page_jigsaw");
var _top = require("top");
var _global = require("global");
var _bagMgr = require("bagMgr");
var _challengeMgr = require("challengeMgr");
var _jigsawMgr = require("jigsawMgr");
var _newJigMgr = require("newJigMgr");
var _panelMgr = require("panelMgr");
var _shopMgr = require("shopMgr");
var _tipMgr = require("tipMgr");
var _pInfo = require("pInfo");
var k = cc._decorator;
var R = k.ccclass;
var N = k.property;
(function(t) {
    t.bottomShowBtns = "bottomShowBtns";
    t.bottomHideBtns = "bottomHideBtns";
})(a || (a = {}));
var C = (function(t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.blockComp = null;
        e.pages = null;
        e.downNode = null;
        e.downAnis = [];
        e.top = null;
        e.lPfb = null;
        e.powerSp = null;
        e.camera = null;
        e.rankBtn1 = null;
        e.btnBgNode = null;
        e.curPageIdx = 2;
        e.viewPage = {};
        e.viewLPage = {};
        e.viewPageInd = ["page_shop", "page_jigsaw", "page_level", "page_challenge", "page_race"];
        e.canUseL = [];
        e.isAni = !1;
        e.redLbs = [];
        e.authorized = !1;
        e.isWx = !1;
        return e;
    }
    var o;
    __extends(e, t);
    o = e;
    e.prototype.onLoad = function() {
        _global.default.padScale &&
            (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_HEIGHT),
                (this.btnBgNode.scaleX = _global.default.padScale));
        _sound.default.ins.playBGM();
        this.viewPage.page_level = this.pages.getChildByName("page_level");
        (_pInfo.default.ins.isMianLocked() || _global.default.loadToRace) &&
        (_pInfo.default.ins.isMianLocked() && (_global.default.loadToRace = 4),
            (this.viewPage.page_level.active = !1),
            this.chgPage(_global.default.loadToRace));
        this.loadDown();
        _evts.default.opE.on(this.onOperTap.bind(this));
        o.ins = this;
        this.upMainRed();
        this.isWx = _idx.platform.string() == _pConst.PFCode.Wechat;
        this.checkPopNewGift();
        this.checkPopPrivacy();
        _global.default.loadCb || (this.checkSerPack(), (_global.default.loadCb = !0));
    };
    e.prototype.onDestroy = function() {
        this.hideWxBtns();
        o.ins = null;
        delete o.ins;
    };
    e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e)
            switch (e) {
                case _evts.default.MAINJUMP:
                    this.jumpToPage(t.data, t.param);
                    break;
                case _evts.default.UPD_MAIN_RED:
                    this.upMainRed();
                    break;
                case _evts.default.CHECK_WX_BTNS:
                    this.checkGetUserInfo();
                    break;
                case _evts.default.HIDE_WX_BTNS:
                    this.hideWxBtns();
            }
    };
    e.prototype.onEnable = function() {};
    e.prototype.onDisable = function() {};
    e.prototype.jumpToPage = function(t, e) {
        var o = this;
        if (!this.isAni) {
            var n = this.curPageIdx;
            if (n != t) {
                if (3 == t) return void _tipMgr.default.ins.showTip("暂未开放");
                var i = this.downAnis;
                i[n].play(a.bottomHideBtns);
                i[t].play(a.bottomShowBtns);
                this.curPageIdx = t;
                cc.Tween.stopAllByTarget(this.pages);
                var r = t > n ? -1 : 1;
                var s = this.pages.x + cc.view.getVisibleSize().width * r;
                if (this.viewPage[this.viewPageInd[t]] || this.viewLPage[this.viewPageInd[t]])
                    (this.viewPage[this.viewPageInd[t]].x = -s),
                    this.viewPage[this.viewPageInd[t]] && (this.viewPage[this.viewPageInd[t]].active = !0);
                else {
                    var c = this.canUseL.shift();
                    c || (c = cc.instantiate(this.lPfb));
                    c.setPosition(-s, 0);
                    this.pages.addChild(c, 100);
                    this.loadPage(this.viewPageInd[t], function(e) {
                        var n = cc.instantiate(e);
                        o.viewPage[o.viewPageInd[t]] = n;
                        !n.active && (n.active = !0);
                        n.setPosition(-s, 0);
                        o.pages.addChild(n);
                        c.removeFromParent();
                        o.canUseL.push(c);
                    });
                }
                e &&
                    "festival" === e &&
                    this.viewPage[this.viewPageInd[t]] &&
                    this.viewPage[this.viewPageInd[t]].getComponent(_page_jigsaw.default).chgToFes();
                this.isAni = !0;
                cc.tween(this.pages)
                    .to(0.5, { x: s }, { easing: this.customEaseInOut })
                    .call(function() {
                        o.viewPage[o.viewPageInd[n]] && (o.viewPage[o.viewPageInd[n]].active = !1);
                        o.isAni = !1;
                    })
                    .start();
                var l = this.checkGetUserInfo();
                "page_level" == this.viewPageInd[t] ?
                    l && this.setWxBtnShow1(!0) :
                    "page_level" == this.viewPageInd[n] && (this.setWxBtnShow1(!1), (this.isAni = !0));
            }
        }
    };
    e.prototype.chgPage = function(t) {
        var e = this;
        if (!this.isAni) {
            var o = this.curPageIdx;
            if (o != t) {
                if (3 == t) return void _tipMgr.default.ins.showTip("暂未开放");
                this.curPageIdx = t;
                var n = t > o ? -1 : 1;
                var i = this.pages.x + cc.view.getVisibleSize().width * n;
                if (this.viewPage[this.viewPageInd[t]] || this.viewLPage[this.viewPageInd[t]])
                    (this.viewPage[this.viewPageInd[t]].x = -i),
                    this.viewPage[this.viewPageInd[t]] && (this.viewPage[this.viewPageInd[t]].active = !0);
                else {
                    var r = this.canUseL.shift();
                    r || (r = cc.instantiate(this.lPfb));
                    r.setPosition(-i, 0);
                    this.pages.addChild(r, 100);
                    this.loadPage(this.viewPageInd[t], function(o) {
                        var n = cc.instantiate(o);
                        e.viewPage[e.viewPageInd[t]] = n;
                        !n.active && (n.active = !0);
                        n.setPosition(-i, 0);
                        e.pages.addChild(n);
                        r.removeFromParent();
                        e.canUseL.push(r);
                    });
                }
                this.pages.x = i;
                this.viewPage[this.viewPageInd[o]] && (this.viewPage[this.viewPageInd[o]].active = !1);
            }
        }
    };
    e.prototype.lockBtnState = function(t) {
        var e = this.downAnis;
        e[2].play(a.bottomHideBtns, 0.05);
        e[t].play(a.bottomShowBtns, 0.2);
    };
    e.prototype.customEaseInOut = function(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    };
    e.prototype.loadDown = function() {
        var t = this;
        _res.default.ins
            .getBundleByString("prefab")
            .then(function(e) {
                var o = "prefab/down/";
                var n = ["btn_quest", "btn_jigsaw", "btn_puzzle", "btn_chanllage", "btn_race"];
                e.loadDir(o, cc.Prefab, function(i) {
                    if (!i && t.node && t.node.isValid) {
                        var r = cc.view.getVisibleSize().width / 5;
                        var a = 2 * -r;
                        var s = t.downNode;
                        n.forEach(function(n, i) {
                            var c = cc.instantiate(e.get(o + n, cc.Prefab));
                            var l = cc.find("img/tip/num", c);
                            t.redLbs.push(l.getComponent(cc.Label)),
                                c.setPosition(a, 18),
                                c.setParent(s),
                                (c.width = r),
                                (a += r),
                                t.downAnis.push(c.getComponent(cc.Animation)),
                                c.on(
                                    "click",
                                    function() {
                                        t.jumpToPage(i);
                                    },
                                    t
                                ),
                                "btn_race" == n && (t.rankBtn2 = c);
                        });
                        t.createBtns();
                        (_pInfo.default.ins.isMianLocked() || _global.default.loadToRace) &&
                        (_pInfo.default.ins.isMianLocked() && (_global.default.loadToRace = 4),
                            t.lockBtnState(_global.default.loadToRace),
                            (_global.default.loadToRace = 0));
                        t.upMainRed();
                    }
                });
            })
            .catch(function(t) {
                console.error("RTool.ins.getBundleByString('resSps')", t);
            });
    };
    e.prototype.loadPage = function(t, e) {
        this.viewLPage[t] ||
            ((this.viewLPage[t] = !0),
                _res.default.ins
                .lPre("prefab/" + t)
                .then(function(t) {
                    e && e(t);
                })
                .catch(function() {
                    console.error("getPrefabErr");
                }));
    };
    e.prototype.usePower = function(t, e, o) {
        if (!(t > 0)) {
            _pInfo.default.ins.addPower(t);
            var n = this.powerSp;
            var i = n.node;
            var r = i.parent.convertToWorldSpaceAR(i.position);
            this.node.convertToNodeSpaceAR(r, r);
            var a = new cc.Node("flyPower");
            a.addComponent(cc.Sprite).spriteFrame = n.spriteFrame;
            a.setParent(this.node);
            this.node.convertToNodeSpaceAR(e, e);
            e.add(cc.v3(cc.winSize.width / 2, cc.winSize.height / 2));
            cc.tween(a)
                .set({ position: r, scale: 0.8 })
                .parallel(
                    cc.tween(a).by(0.2, { scale: 0.2 }).delay(0.1).by(0.2, { scale: -0.2 }),
                    cc.tween(a).to(0.5, { position: e })
                )
                .call(function() {
                    a.destroy();
                    _global.default.levelDone ?
                        _pInfo.chgScene(_pInfo.sceneType.game, { gameType: _pInfo.gameType.freedom, freedomSize: o }) :
                        _pInfo.chgScene(_pInfo.sceneType.game);
                })
                .start();
        }
    };
    e.prototype.getWorldPointByTouch = function(t) {
        var e = cc.Vec2.ZERO;
        this.camera.getScreenToWorldPoint(t.getLocation(), e);
        return e;
    };
    e.prototype.upMainRed = function() {
        var t;
        var e;
        var o = _jigsawMgr.default.ins.getUnPlacedNum() + _newJigMgr.default.ins.getUnPlacedNum();
        var n = this.redLbs[1];
        if (n)
            if (o > 0) {
                var i = o > 99 ? "99+" : o + "";
                n.node.parent.active = !0;
                n.string = i + "";
                n.node.x = _global.default.getCharXOffset(n.string);
            } else n.node.parent.active = !1;
        var r = _bagMgr.default.ins.getItemCount("qw_line_ticket");
        var a = this.redLbs[4];
        a &&
            (r > 0 ?
                ((a.node.parent.active = !0),
                    (a.string = r + ""),
                    (a.node.x = _global.default.getCharXOffset(a.string))) :
                (a.node.parent.active = !1));
        var s =
            (null === (e = null === (t = _cfgMgr.default.serverCfg) || void 0 === t ? void 0 : t.daily_challenge) ||
                void 0 === e ?
                void 0 :
                e.open) || 50;
        _pInfo.default.ins.getPuzzleLvl() > s &&
            (_challengeMgr.default.ins.getTodayIsFin(), _challengeMgr.default.ins.getAllMonthRed());
        var c = _shopMgr.default.ins.getAllRed();
        var l = this.redLbs[0];
        l && (c > 0 ? ((l.node.parent.active = !0), (l.string = c + "")) : (l.node.parent.active = !1));
    };
    e.prototype.checkPopNewGift = function() {
        _global.default.twoDaysLeft &&
            ((_global.default.twoDaysLeft = !1),
                _panelMgr.default.ins.open("ui/ui_backReward", null).then(function() {
                    _global.default.isPopNewGift = !0;
                }));
    };
    e.prototype.checkPopPrivacy = function() {
        _idx.platform.isQQ &&
            _uData.default.ins.getIsNewUser() &&
            _panelMgr.default.ins.open("ui/ui_privacy", {}, { MaskNoHide: !0 });
    };
    e.prototype.checkSerPack = function() {
        // _request.default.ins
        //     .getUnshippedOrders()
        //     .then(function (t) {
        //         t &&
        //             t.status &&
        //             t.data &&
        //             t.data.length &&
        //             _panelMgr.default.ins.open("ui/ui_reiGift", {serPacks: t.data});
        //     })
        //     .catch(function () {});
    };
    e.prototype.createBtns = function() {
        this.isWx && (this.createUserInfoButton1(), this.createUserInfoButton2());
    };
    e.prototype.checkGetUserInfo = function() {
        if (this.isWx) {
            var t = !1;
            (_time.default.ins.serverTime || Math.floor(new Date().getTime() / 1e3)) -
            _pInfo.default.ins.getRankLastTimeData() >=
                3600 &&
                !this.authorized &&
                !_panelMgr.default.ins.hasPop() ?
                (this.showWxBtns(), (t = !0)) :
                (this.hideWxBtns(), (t = !1));
            return t;
        }
    };
    e.prototype.showWxBtns = function() {
        this.isWx && (this.setWxBtnShow1(!0), this.setWxBtnShow2(!0));
    };
    e.prototype.hideWxBtns = function() {
        this.isWx && (this.setWxBtnShow1(!1), this.setWxBtnShow2(!1));
    };
    e.prototype.setWxBtnShow1 = function(t) {
        this.isWx && null != this.wxBtn1 && (t ? this.wxBtn1.show() : this.wxBtn1.hide());
    };
    e.prototype.setWxBtnShow2 = function(t) {
        this.isWx && null != this.wxBtn2 && (t ? this.wxBtn2.show() : this.wxBtn2.hide());
    };
    e.prototype.createUserInfoButton1 = function() {
        var t = this;
        wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] ?
                    ((t.authorized = !0), t.updateUserInfo()) :
                    ((t.wxBtn1 = t.authUersInfo(t.rankBtn1)),
                        t.wxBtn1.onTap(function(e) {
                            var o;
                            var n;
                            console.log(JSON.stringify(e));
                            "getUserInfo:ok" == e.errMsg ?
                                (t.setUserInfo1(e.userInfo),
                                    null === (o = t.wxBtn2) || void 0 === o || o.destroy(),
                                    (t.wxBtn2 = null),
                                    null === (n = t.wxBtn1) || void 0 === n || n.destroy(),
                                    (t.wxBtn1 = null)) :
                                (console.log("授权失败"), t.getFail1());
                        }),
                        t.checkGetUserInfo());
            }
        });
    };
    e.prototype.createUserInfoButton2 = function() {
        var t = this;
        wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] ?
                    ((t.authorized = !0), t.updateUserInfo()) :
                    ((t.wxBtn2 = t.authUersInfo(t.rankBtn2)),
                        t.wxBtn2.onTap(function(e) {
                            var o;
                            var n;
                            console.log(JSON.stringify(e));
                            "getUserInfo:ok" == e.errMsg ?
                                (t.setUserInfo2(e.userInfo),
                                    null === (o = t.wxBtn2) || void 0 === o || o.destroy(),
                                    (t.wxBtn2 = null),
                                    null === (n = t.wxBtn1) || void 0 === n || n.destroy(),
                                    (t.wxBtn1 = null)) :
                                (console.log("授权失败"), t.getFail2());
                        }),
                        t.checkGetUserInfo());
            }
        });
    };
    e.prototype.authUersInfo = function(t) {
        var e = wx.getSystemInfoSync();
        var o = e.screenWidth;
        var n = e.screenHeight;
        var i = 0;
        var r = 0;
        if (t && cc.isValid(t)) {
            var a = e.screenWidth / cc.winSize.width;
            var s = t.convertToWorldSpaceAR(cc.Vec2.ZERO);
            var c = 0.5 * (cc.view.getVisibleSize().height - cc.winSize.height);
            r = n - (s.y + 0.5 * t.height + c) * a;
            i = (s.x - 0.5 * t.width) * a;
            o = t.width * a;
            n = t.height * a;
        }
        return wx.createUserInfoButton({
            type: "text",
            text: "",
            style: {
                left: i,
                top: r,
                width: o,
                height: n,
                lineHeight: 40,
                backgroundColor: "#00000000",
                color: "#ffffff",
                textAlign: "center",
                fontSize: 16,
                borderRadius: 4,
                borderColor: "#ffffff",
                borderWidth: 0
            }
        });
    };
    e.prototype.updateUserInfo = function() {
        wx.getUserInfo({
            success: function(t) {
                _request.default.ins.updateUserInfo(t.userInfo);
            }
        });
    };
    e.prototype.setUserInfo1 = function() {
        this.authorized = !0;
        this.checkGetUserInfo();
        _panelMgr.default.ins.open("ui/ui_rank", null);
    };
    e.prototype.setUserInfo2 = function() {
        this.authorized = !0;
        this.jumpToPage(4);
    };
    e.prototype.getFail1 = function() {
        var t = _time.default.ins.serverTime || Math.floor(new Date().getTime() / 1e3);
        _pInfo.default.ins.setRankLastTimeData(t);
        this.checkGetUserInfo();
        _panelMgr.default.ins.open("ui/ui_rank", null);
    };
    e.prototype.getFail2 = function() {
        var t = _time.default.ins.serverTime || Math.floor(new Date().getTime() / 1e3);
        _pInfo.default.ins.setRankLastTimeData(t);
        this.jumpToPage(4);
    };
    __decorate([N(cc.BlockInputEvents)], e.prototype, "blockComp", void 0);
    __decorate([N(cc.Node)], e.prototype, "pages", void 0);
    __decorate([N(cc.Node)], e.prototype, "downNode", void 0);
    __decorate([N(_top.default)], e.prototype, "top", void 0);
    __decorate([N(cc.Prefab)], e.prototype, "lPfb", void 0);
    __decorate([N(cc.Sprite)], e.prototype, "powerSp", void 0);
    __decorate([N(cc.Camera)], e.prototype, "camera", void 0);
    __decorate([N(cc.Node)], e.prototype, "rankBtn1", void 0);
    __decorate([N(cc.Node)], e.prototype, "btnBgNode", void 0);
    return (o = __decorate([R], e));
})(cc.Component);
exports.default = C;