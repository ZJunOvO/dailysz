var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _evts = require("evts");
var _idx = require("idx");
var _mySafeArea = require("mySafeArea");
var _numberUtils = require("NumberUtils");
var _res = require("res");
var _time = require("time");
var _cfgMgr = require("cfgMgr");
var _global = require("global");
var _bagMgr = require("bagMgr");
var _challengeMgr = require("challengeMgr");
var _panelMgr = require("panelMgr");
var _skinMgr = require("skinMgr");
var _pInfo = require("pInfo");
var _dateItem = require("dateItem");
var _packItem = require("packItem");
var T = cc._decorator;
var I = T.ccclass;
var D = T.property;
var P = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.dateNodes = null;
        e.dateNode0 = null;
        e.dateNode1 = null;
        e.dateItem = null;
        e.yearLb = null;
        e.monthLb = null;
        e.costLb = null;
        e.topNode = null;
        e.leftNode = null;
        e.rightNode = null;
        e.lvPerLb = null;
        e.finNumLb = null;
        e.packPro = null;
        e.packItems = [];
        e.midBg = null;
        e.packageNode = null;
        e.maskNode = null;
        e.topSp = null;
        e.spineNode = null;
        e.beforeRedLb = null;
        e.afterRedLb = null;
        e.bgNode = null;
        e.hengNode = null;
        e.curYear = 0;
        e.curMonth = 0;
        e.curDay = 0;
        e.lvData = {type: 1, diff: 3};
        e.isAni = !1;
        e.isFin = !1;
        e.gameDate = null;
        e.loadPackEnd = !1;
        e.crossData = {};
        e.isLoad = !0;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        var t = this;
        this.node.height = cc.winSize.height;
        _global.default.padScale &&
            (this.hengNode.scaleX = this.bgNode.scaleX = this.topSp.node.parent.scale = _global.default.padScale);
        _evts.default.opE.on(this.onOperTap.bind(this));
        _res.default.ins
            .getBundleByString("resSps")
            .then(function (e) {
                e.load("game/normal/top1", cc.SpriteFrame, function (e, o) {
                    !e && t.node && t.node.isValid && (t.topSp.spriteFrame = o);
                }),
                    e.load("spine/package/action", sp.SkeletonData, function (e, o) {
                        if (!e && t.node && t.node.isValid) {
                            for (var n = 0, i = t.packItems.length; n < i; n++) t.packItems[n].initItem(n, o);
                            t.setPackPer(), (t.loadPackEnd = !0);
                        }
                    });
            })
            .catch(function (t) {
                console.error("RTool.ins.getBundleByString('resSps')", t);
            });
        this.loadGirl();
    };
    e.prototype.loadGirl = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function () {
                _skinMgr.default.ins.updateRole(_pInfo.default.ins.getUsingSkin().role, this.spineNode);
                return [2];
            });
        });
    };
    e.prototype.onOperTap = function (t) {
        var e = null == t ? void 0 : t.action;
        if (e)
            switch (e) {
                case _evts.default.UPD_MAIN_RED:
                    this.updateReds();
                    break;
                case _evts.default.SKIN_CHG:
                    this.loadGirl();
            }
    };
    e.prototype.start = function () {
        var t = this;
        this.scheduleOnce(function () {
            t.adapter();
            t.initPanel();
        });
    };
    e.prototype.onEnable = function () {
        var t = this;
        this.isLoad ||
            _challengeMgr.default.ins
                .getRequestChallengeData(this.curYear, this.curMonth)
                .then(function (e) {
                    e.status && ((t.crossData = e.data), t.setCrossNum());
                })
                .catch(function (t) {
                    console.error("getRequestChallengeDataErr", t);
                });
        this.isLoad = !1;
    };
    e.prototype.adapter = function () {
        var t = _mySafeArea.getSafeAreaRect().yMin;
        var e = this.node.height - 1280 - t;
        this.spineNode.y += e / 6;
        this.topNode.y -= t;
        this.topNode.removeComponent(cc.Widget);
    };
    e.prototype.initPanel = function () {
        var t = this;
        var e = 1e3 * _time.default.ins.serverTime;
        var o = new Date(e);
        var n = o.getDate();
        var i = o.getFullYear();
        var r = o.getMonth() + 1;
        if (_global.default.challengeLv) {
            var a = Math.trunc;
            var s = a(_global.default.challengeLv / 1e4);
            var c = a((_global.default.challengeLv % 1e4) / 100);
            _challengeMgr.default.ins.getTheMonthIsFin(i, r) || ((i = s), (r = c));
        }
        this.curYear = i;
        this.curMonth = r;
        this.curDay = n;
        this.yearLb.string = this.curYear + "年";
        this.monthLb.string = this.curMonth + "";
        this.initItems();
        this.checkBtns();
        this.getCrossData();
        _res.default.ins
            .getBundleByString("resSps")
            .then(function (e) {
                e.load("spine/package/action", sp.SkeletonData, function (e, o) {
                    if (!e && t.node && t.node.isValid) {
                        for (var n = 0, i = t.packItems.length; n < i; n++) t.packItems[n].initItem(n, o);
                        t.setPackPer();
                        t.loadPackEnd = !0;
                    }
                });
            })
            .catch(function (t) {
                console.error("RTool.ins.getBundleByString('resSps')", t);
            });
    };
    e.prototype.initItems = function () {
        for (var t = this.curYear, e = this.curMonth, o = 0, n = 0, i = 0; i < 42; i++) {
            var r = cc.instantiate(this.dateItem);
            r.active = !0;
            r.parent = this.dateNode1;
            r.x = 92 * o;
            r.y = -86 * n;
            ++o > 6 && ((o = 0), n++);
        }
        this.setItemsByDate(this.dateNode1, t, e);
        var a = 1e3 * _time.default.ins.serverTime;
        var s = new Date(a);
        var c = s.getFullYear();
        var l = s.getMonth() + 1;
        var u = s.getDate();
        var p = _challengeMgr.default.ins;
        var d = p.getLastUnFinIdx(t, e);
        var f = p.getFinLvNum(t, e);
        c == t && l == e && u == f && (d = u - 1);
        this.setIsSelect(d);
        this.dateNode0.y += 516;
        o = 0;
        n = 0;
        this.loadDateItem(0, o, n);
    };
    e.prototype.loadDateItem = function (t, e, o) {
        var n = this;
        if (!(t >= 42)) {
            var i = cc.instantiate(this.dateItem);
            i.active = !0;
            i.parent = this.dateNode0;
            i.x = 92 * e;
            i.y = -86 * o;
            ++e > 6 && ((e = 0), o++);
            t++;
            this.scheduleOnce(function () {
                n.loadDateItem(t, e, o);
            }, 0);
        }
    };
    e.prototype.checkBtns = function () {
        var t = 1e3 * _time.default.ins.serverTime;
        var e = new Date(t);
        var o = e.getFullYear();
        var n = e.getMonth() + 1;
        var i = _challengeMgr.default.ins;
        var r = this.curYear;
        var a = this.curMonth;
        this.rightNode.active = o != r || n != a;
        r == i.firstYear && a == i.firstMonth ? (this.leftNode.active = !1) : (this.leftNode.active = !0);
        this.updateReds();
    };
    e.prototype.updateReds = function () {
        var t = _challengeMgr.default.ins;
        var e = this.curYear;
        var o = this.curMonth;
        var n = t.getMonthRed(e, o);
        var i = t.getBeforeMonthRed(e, o);
        var r = i - n;
        var a = t.getAllMonthRed() - i;
        r > 0
            ? ((this.beforeRedLb.node.parent.active = !0),
              (this.beforeRedLb.string = r + ""),
              (this.beforeRedLb.node.x = _global.default.getCharXOffset(this.beforeRedLb.string)))
            : (this.beforeRedLb.node.parent.active = !1);
        a > 0
            ? ((this.afterRedLb.node.parent.active = !0),
              (this.afterRedLb.string = a + ""),
              (this.afterRedLb.node.x = _global.default.getCharXOffset(this.afterRedLb.string)))
            : (this.afterRedLb.node.parent.active = !1);
    };
    e.prototype.rePanel = function (t) {
        var e = this;
        var o = this.curYear;
        var n = this.curMonth;
        var i = 516 * t;
        var r = this.dateNode0.active ? this.dateNode0 : this.dateNode1;
        var a = this.dateNode0.active ? this.dateNode1 : this.dateNode0;
        a.y = r.y - i;
        this.setItemsByDate(a, o, n);
        this.dateNode0.active = !0;
        this.dateNode1.active = !0;
        this.isAni = !0;
        cc.tween(this.dateNodes)
            .by(0.2, {y: i})
            .call(function () {
                (e.isAni = !1), (r.active = !1), (a.active = !0);
                var t = _challengeMgr.default.ins.getLastUnFinIdx(e.curYear, e.curMonth);
                e.setIsSelect(t);
            })
            .start();
        this.yearLb.string = o + "年";
        this.monthLb.string = n + "";
        this.loadPackEnd && this.setPackPer();
        this.getCrossData();
    };
    e.prototype.setPackPer = function () {
        var t = _challengeMgr.default.ins;
        var e = this.curYear;
        var o = this.curMonth;
        var n = t.getMonthData(e, o);
        var i = (n[0], n[1]);
        var r = t.getFinLvNum(e, o);
        this.lvPerLb.string = r + "/" + i;
        this.packPro.progress = r / 28;
        for (var a = t.getChaPackData(e, o), s = 0, c = this.packItems.length; s < c; s++) {
            var l = 7 * (s + 1);
            var u = this.packItems[s];
            u.setIsGet(!1);
            u.setFinish(!1);
            r >= l && u.setFinish(!0);
            a[s] && u.setIsGet(!0);
        }
    };
    e.prototype.setItemsByDate = function (t, e, o) {
        for (
            var n = this,
                i = _challengeMgr.default.ins,
                r = i.getfinData(e, o),
                a = i.getMonthData(e, o),
                s = a[0],
                c = a[1],
                l = function (a) {
                    var l = t.children[a];
                    var p = a - s + 1;
                    var d = l.getComponent(_dateItem.default);
                    p < 0 || p >= c
                        ? (l.active = !1)
                        : ((l.active = !0),
                          d.setDate(p + 1),
                          l.off("click"),
                          i.isLocked(e, o, p)
                              ? d.setLocked(!0)
                              : (l.on(
                                    "click",
                                    function () {
                                        n.onBtnChgStartData(p);
                                    },
                                    u
                                ),
                                d.setLocked(!1)),
                          d.setFinish(r[p]));
                },
                u = this,
                p = 0,
                d = t.childrenCount;
            p < d;
            p++
        )
            l(p);
    };
    e.prototype.setIsSelect = function (t) {
        for (var e = this.dateNode0.active ? this.dateNode0 : this.dateNode1, o = 0, n = e.childrenCount; o < n; o++) {
            var i = e.children[o];
            i && i.getComponent(_dateItem.default).setSelected(!1);
        }
        var r = _challengeMgr.default.ins;
        var a = r.getMonthData(this.curYear, this.curMonth);
        var s = a[0];
        var c = (a[1], t + s - 1);
        var l = r.getfinData(this.curYear, this.curMonth);
        this.isFin = l[t];
        var u = e.children[c];
        u && u.getComponent(_dateItem.default).setSelected(!0);
        this.lvData = r.getLvDataByDate(this.curYear, this.curMonth, t);
        var p = {};
        p.year = this.curYear;
        p.month = this.curMonth;
        p.day = t + 1;
        p.isFin = l[t];
        this.gameDate = p;
        this.setCrossNum();
        var d = this.getLevelCost();
        this.costLb.string = "-" + d;
    };
    e.prototype.getCrossData = function () {
        var t = this;
        var e = _challengeMgr.default.ins.getRequestChallengeData(this.curYear, this.curMonth);
        this.crossData = {};
        e.then(function (e) {
            e.status && ((t.crossData = e.data), t.setCrossNum());
        }).catch(function (t) {
            console.error("getRequestChallengeDataErr", t);
        });
    };
    e.prototype.setCrossNum = function () {
        var t = this.gameDate;
        var e = _challengeMgr.default.ins;
        var o = e.addZeroToNum(t.month);
        var n = e.addZeroToNum(t.day);
        var i = t.year + "-" + o + "-" + n;
        var r = e.getfinData(t.year, t.month);
        var a = r[t.day - 1] ? 1 : 0;
        var s = this.crossData[i] || a;
        this.finNumLb.string = s + "";
        var c = r[t.day - 1] ? s : s + 1;
        this.gameDate.num = c;
    };
    e.prototype.onBtnChgStartData = function (t) {
        this.isAni || this.setIsSelect(t);
    };
    e.prototype.onBtnStart = function () {
        var t = this;
        if (!this.isAni) {
            var e = this.getLevelCost();
            if (_pInfo.default.ins.getPower() < e) _panelMgr.default.ins.open("ui/ui_getRes", {itemId: "times"});
            else {
                var o = this.lvData;
                if (((o.date = this.gameDate), o.type === _pInfo.challengeType.worm)) {
                    var n = o.count || _numberUtils.default.RandomInt(1, 460);
                    (n < 0 || n > 460) && (n = Math.abs(n) % 460);
                    o.count = n;
                    _idx.platform.showLoading();
                    cc.assetManager.loadRemote(
                        _global.OssConfig.challengeWormUrl + n + ".json",
                        cc.JsonAsset,
                        function (n, i) {
                            _idx.platform.hideLoading();
                            !n && i && i.json
                                ? (o.data = i.json)
                                : (o.data = {
                                      size: 15,
                                      data: [
                                          [
                                              188, 203, 218, 219, 220, 221, 206, 191, 192, 193, 194, 179, 164, 149, 148,
                                              147, 132, 117, 102, 87, 72, 71, 70, 69, 84, 99, 114, 113, 112, 111, 110,
                                              95, 80, 65, 50, 49, 48, 47, 62, 77, 76, 75, 90, 105, 120
                                          ],
                                          [
                                              186, 185, 170, 155, 154, 153, 138, 123, 108, 107, 122, 137, 152, 151, 166,
                                              167, 182, 197
                                          ],
                                          [
                                              74, 59, 44, 43, 28, 13, 12, 11, 26, 41, 40, 39, 38, 23, 22, 21, 6, 5, 4,
                                              3, 18, 17, 16, 15
                                          ],
                                          [160, 159, 158, 157, 142, 143, 144, 145]
                                      ]
                                  });
                            _panelMgr.default.ins.open("ui/ui_challengeInfo", {
                                lvData: o,
                                cost: e,
                                crossNum: t.finNumLb.string
                            });
                        }
                    );
                } else
                    _panelMgr.default.ins.open("ui/ui_challengeInfo", {
                        lvData: o,
                        cost: e,
                        crossNum: this.finNumLb.string
                    });
            }
        }
    };
    e.prototype.onBtnChgMonth = function (t, e) {
        if (!this.isAni) {
            var o = Number(e);
            var n = this.getNewDate(o);
            var i = n[0];
            var r = n[1];
            this.curYear = i;
            this.curMonth = r;
            var a = _challengeMgr.default.ins;
            var s = 1e3 * _time.default.ins.serverTime;
            var c = new Date(s);
            var l = c.getFullYear();
            var u = c.getMonth() + 1;
            this.curYear == a.firstYear && this.curMonth < a.firstMonth
                ? (this.curMonth = a.firstMonth)
                : this.curYear == l && this.curMonth > u
                ? (this.curMonth = u)
                : (this.checkBtns(), this.rePanel(o));
        }
    };
    e.prototype.getNewDate = function (t) {
        var e = t;
        var o = this.curYear;
        var n = this.curMonth;
        (n += e) < 1 ? ((o -= 1), (n = 12)) : n > 12 && ((o += 1), (n = 1));
        return [o, n];
    };
    e.prototype.getLevelCost = function () {
        var t;
        var e;
        var o =
            (null === (e = null === (t = _cfgMgr.default.serverCfg) || void 0 === t ? void 0 : t.daily_challenge) ||
            void 0 === e
                ? void 0
                : e.consume) || 30;
        this.isFin && (o = 0);
        return o;
    };
    e.prototype.onBtnPack = function (t, e) {
        var o;
        var n;
        if (!this.isAni) {
            var i = Number(e);
            var r = this.curYear;
            var a = this.curMonth;
            var s = _challengeMgr.default.ins;
            var l = s.getFinLvNum(r, a);
            var u = s.getChaPackData(r, a);
            var p = 7 * (i + 1);
            var d = (null ===
                (n = null === (o = _cfgMgr.default.serverCfg) || void 0 === o ? void 0 : o.daily_challenge) ||
            void 0 === n
                ? void 0
                : n.numreward)[i] || {times: 150, coin: 150, puzzle_pieces: 20};
            var h = this.packItems[i];
            var g = [];
            for (var _ in d) {
                var b = d[_];
                var w = h.node;
                var S = w.parent.convertToWorldSpaceAR(w.position);
                var T = {};
                T.itemId = _;
                T.worldPos = S;
                T.value = Number(b);
                g.push(T);
            }
            if (g.length)
                if (l >= p && !u[i]) {
                    for (var _ in (h.setIsGet(!0), s.setChaPackData(r, a, i), d))
                        (b = d[_]), _bagMgr.default.ins.addItem(_, Number(b));
                    _evts.default.opE.emit({action: _evts.default.UPD_MAIN_RED});
                    _panelMgr.default.ins.open("ui/ui_flyAni", {itemDatas: g});
                } else _panelMgr.default.ins.open("ui/ui_preReward", {itemDatas: g});
        }
    };
    __decorate([D(cc.Node)], e.prototype, "dateNodes", void 0);
    __decorate([D(cc.Node)], e.prototype, "dateNode0", void 0);
    __decorate([D(cc.Node)], e.prototype, "dateNode1", void 0);
    __decorate([D(cc.Prefab)], e.prototype, "dateItem", void 0);
    __decorate([D(cc.Label)], e.prototype, "yearLb", void 0);
    __decorate([D(cc.Label)], e.prototype, "monthLb", void 0);
    __decorate([D(cc.Label)], e.prototype, "costLb", void 0);
    __decorate([D(cc.Node)], e.prototype, "topNode", void 0);
    __decorate([D(cc.Node)], e.prototype, "leftNode", void 0);
    __decorate([D(cc.Node)], e.prototype, "rightNode", void 0);
    __decorate([D(cc.Label)], e.prototype, "lvPerLb", void 0);
    __decorate([D(cc.Label)], e.prototype, "finNumLb", void 0);
    __decorate([D(cc.ProgressBar)], e.prototype, "packPro", void 0);
    __decorate([D([_packItem.default])], e.prototype, "packItems", void 0);
    __decorate([D(cc.Node)], e.prototype, "midBg", void 0);
    __decorate([D(cc.Node)], e.prototype, "packageNode", void 0);
    __decorate([D(cc.Node)], e.prototype, "maskNode", void 0);
    __decorate([D(cc.Sprite)], e.prototype, "topSp", void 0);
    __decorate([D(cc.Node)], e.prototype, "spineNode", void 0);
    __decorate([D(cc.Label)], e.prototype, "beforeRedLb", void 0);
    __decorate([D(cc.Label)], e.prototype, "afterRedLb", void 0);
    __decorate([D(cc.Node)], e.prototype, "bgNode", void 0);
    __decorate([D(cc.Node)], e.prototype, "hengNode", void 0);
    return __decorate([I], e);
})(cc.Component);
exports.default = P;
