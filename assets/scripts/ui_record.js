var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _baseUI = require("baseUI");
var _pInfo = require("pInfo");
var _chaptBtn = require("chaptBtn");
var l = cc._decorator;
var u = l.ccclass;
var p = l.property;
var d = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.view = null;
        e.viewItem = null;
        e.btnsNode = null;
        e.nameStrs = {
            main: {gTimes: "游戏次数", wTimes: "胜利次数", heWins: "最高连胜", winRate: "胜率"},
            daily: {gTimes: "游戏次数", wTimes: "胜利次数", winRate: "胜率"},
            race: {gTimes: "游戏次数", tPoints: "总积分", hePoints: "最高积分"}
        };
        e.allData = {};
        e.btnsComp = [];
        e.rowSpace = 108;
        e.top_offest = 50;
        e.curPageIdx = 1;
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {
        for (
            var t = this,
                e = _pInfo.default.ins.getRecordData(),
                o = function (e, o, i) {
                    var r = o[e].getComponent(_chaptBtn.default);
                    r.setState(!1);
                    i.push(r);
                    o[e].on(
                        "click",
                        function () {
                            t.chgViewData(e);
                        },
                        n
                    );
                },
                n = this,
                i = 0,
                r = this.btnsNode.children,
                a = this.btnsComp,
                l = r.length;
            i < l;
            i++
        )
            o(i, r, a);
        this.allData = Object.assign({}, e);
        this.chgViewData(0);
    };
    e.prototype.chgViewData = function (t) {
        var e = this.curPageIdx;
        if (e != t) {
            var o;
            var n = {};
            var i = {};
            switch (t) {
                case 0:
                    (n = this.allData.main),
                        (i = this.nameStrs.main),
                        (o = (n.wTimes / n.gTimes) * 100 || 0),
                        (n.winRate = o.toFixed(0) + "%");
                    break;
                case 1:
                    (n = this.allData.daily),
                        (i = this.nameStrs.daily),
                        (o = (n.wTimes / n.gTimes) * 100 || 0),
                        (n.winRate = o.toFixed(0) + "%");
                    break;
                case 2:
                    (n = this.allData.race), (i = this.nameStrs.race);
            }
            this.initListView(n, i);
            var r = this.btnsComp;
            r[e].setState(!1);
            r[t].setState(!0);
            this.curPageIdx = t;
        }
    };
    e.prototype.initListView = function (t, e) {
        for (var o = 0, n = this.view.content.childrenCount; o < n; o++) this.view.content.children[o].active = !1;
        var i = 0;
        for (var r in e) {
            var a;
            var s = e[r];
            var c = t[r] || 0;
            "feTime" == r && (c = this.timeFormat(c));
            this.view.content.childrenCount > i
                ? (((a = this.view.content.children[i]).active = !0),
                  (a.getChildByName("name").getComponent(cc.Label).string = s),
                  (a.getChildByName("num").getComponent(cc.Label).string = c))
                : (((a = cc.instantiate(this.viewItem)).parent = this.view.content),
                  (a.y = -i * this.rowSpace - this.top_offest),
                  (a.active = !0),
                  (a.getChildByName("name").getComponent(cc.Label).string = s),
                  (a.getChildByName("num").getComponent(cc.Label).string = c));
            i++;
        }
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    e.prototype.timeFormat = function (t, e) {
        void 0 === e && (e = !0);
        var o = this.PrefixInteger;
        if (t < 86400) {
            var n = o(Math.floor(t / 3600), 2);
            var i = o(Math.floor((t % 3600) / 60), 2);
            var r = o(t % 60, 2);
            return e && "00" == n ? i + ":" + r : n + ":" + i + ":" + r;
        }
        return (
            Math.floor(t / 86400) +
            "d " +
            o(Math.floor((t % 86400) / 3600), 2) +
            ":" +
            o(Math.floor((t % 3600) / 60), 2) +
            ":" +
            o(t % 60, 2)
        );
    };
    e.prototype.PrefixInteger = function (t, e) {
        return (t / Math.pow(10, e)).toFixed(e).substring(2);
    };
    __decorate([p(cc.ScrollView)], e.prototype, "view", void 0);
    __decorate([p(cc.Node)], e.prototype, "viewItem", void 0);
    __decorate([p(cc.Node)], e.prototype, "btnsNode", void 0);
    return __decorate([u], e);
})(_baseUI.default);
exports.default = d;
