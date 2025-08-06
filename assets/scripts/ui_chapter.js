var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _mySafeArea = require("mySafeArea");
var _chapterItem = require("chapterItem");
var _global = require("global");
var _pInfo = require("pInfo");
var _baseUI = require("baseUI");
var _chaptBtn = require("chaptBtn");
var d = cc._decorator;
var h = d.ccclass;
var f = d.property;
var g = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.scrollView = null;
        e.chaptPfb = null;
        e.btnView = null;
        e.btnPre = null;
        e.bgNode = null;
        e.bookNode = null;
        e.lineNode = null;
        e.lineNode1 = null;
        e.topNode = null;
        e.closeNode = null;
        e.chapterJigsawPos = {};
        e.itemHeight = 460;
        e.swBtns = [];
        e.endChapterCount = 0;
        e.startIdx = 1;
        e.chapterItem = [];
        e.lastScrollPosition = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        var t = this;
        if (((this.node.height = cc.winSize.height), _global.default.padScale)) {
            this.bgNode.scale = _global.default.padScale;
            var e = (cc.view.getVisibleSize().width - 720) / 2;
            this.closeNode.x -= e;
        }
        this.onResize();
        this.btnView.content.removeAllChildren();
        this.loadBtns();
        this.initChpaterPos()
            .then(function () {
                return t.initData();
            })
            .catch(function (t) {
                console.error("initChpaterPosErr", t);
            });
    };
    e.prototype.onResize = function () {
        this.node.height = cc.winSize.height;
        var t = _mySafeArea.getSafeAreaRect().yMin;
        var e = cc.winSize.height - 1280 - t;
        this.bookNode.height += e;
        this.lineNode.height += e;
        this.lineNode1.height += e;
        this.btnView.content.height += e;
        this.scrollView.content.height += e;
        this.btnView.node.height += e;
        this.scrollView.node.height += e;
        this.btnView.content.parent.height += e;
        this.scrollView.content.parent.height += e;
    };
    e.prototype.start = function () {
        var t = this;
        this.scheduleOnce(function () {
            t.topNode.y -= _mySafeArea.getSafeAreaRect().yMin / 2;
            t.topNode.removeComponent(cc.Widget);
        });
    };
    e.prototype.init = function () {};
    e.prototype.hideThis = function () {
        this.hide();
    };
    e.prototype.loadBtns = function () {
        for (
            var t = this,
                e = _global.default.chapterCount,
                o = Math.ceil(e / 10),
                n = e % 10,
                i = function (e) {
                    var i = cc.instantiate(r.btnPre);
                    i.parent = r.btnView.content;
                    i.active = !0;
                    var a = i.getComponent(_chaptBtn.default);
                    var s = 1 + 10 * e;
                    var c = 10 * (e + 1);
                    n && (c = s + n - 1);
                    var l = s + "-" + (e === o - 1 ? c : 10 * (e + 1));
                    a.setLb(l);
                    a.setState(!1);
                    r.swBtns.push(a);
                    i.on(
                        "click",
                        function () {
                            t.btnClick(e);
                        },
                        r
                    );
                },
                r = this,
                a = 0;
            a < o;
            a++
        )
            i(a);
        var s = _pInfo.default.ins.getPuzzleLvl();
        var u = Math.ceil(s / 54);
        var d = Math.ceil(u / 10);
        this.startIdx = 1 + 10 * (d - 1);
        this.swBtns[d - 1].setState(!0);
        var h = 10;
        var f = u % 10;
        f && (h = f);
        var g = (h - 1) * this.itemHeight;
        this.scrollView.scrollToOffset(cc.v2(0, g));
        var y = 10 * d;
        this.endChapterCount = Math.min(y, e);
        var m = this.endChapterCount - this.startIdx + 1;
        this.scrollView.content.setContentSize(cc.size(560, this.itemHeight * m));
    };
    e.prototype.btnClick = function (t) {
        if (!this.swBtns[t].getState()) {
            for (var e = 0, o = this.swBtns.length; e < o; e++) this.swBtns[e].setState(!1);
            this.swBtns[t].setState(!0);
            this.startIdx = 1 + 10 * t;
            var n = 10 * (t + 1);
            this.endChapterCount = Math.min(n, _global.default.chapterCount);
            var i = this.endChapterCount - this.startIdx + 1;
            this.scrollView.content.setContentSize(cc.size(560, this.itemHeight * i));
            this.scrollView.stopAutoScroll();
            this.scrollView.scrollToTop();
            this.initData();
        }
    };
    e.prototype.initData = function () {
        var t = this;
        this.scrollView.content.children.forEach(function (e) {
            t.chapterItem.push(e);
        });
        this.scrollView.content.removeAllChildren();
        this.loadItem(this.startIdx, 0);
    };
    e.prototype.loadItem = function (t, e) {
        if (t <= this.endChapterCount) {
            var o = this.chapterItem.shift();
            o || (o = cc.instantiate(this.chaptPfb));
            this.scrollView.content.addChild(o);
            o.name = "chapter_" + t;
            o.opacity = 0;
            o.position = cc.v3(0, -this.itemHeight * e);
            o.getComponent(_chapterItem.default).init(t, this.chapterJigsawPos);
            t++;
            e++;
            this.scheduleOnce(this.loadItem.bind(this, t, e), 0);
        } else {
            for (var n = this.scrollView.content, i = 0; i < n.children.length; i++) {
                var r = n.children[i];
                r.active = !0;
                r.opacity = 255;
                this.showChgAni;
            }
            this.lastScrollPosition = 0;
            this.pageScroll(!1);
            this.showChgAni || (this.showChgAni = !0);
        }
    };
    e.prototype.pageScroll = function (t) {
        void 0 === t && (t = !0);
        var e = this.scrollView.content.children;
        var o = this.scrollView.getScrollOffset().y;
        if (!(t && Math.abs(o - this.lastScrollPosition) < 1)) {
            for (var n = this.itemHeight, i = this.scrollView.content.parent.height, r = 0; r < e.length; r++) {
                var a = e[r];
                var s = a.convertToWorldSpaceAR(cc.Vec2.ZERO);
                (s = this.scrollView.content.parent.convertToNodeSpaceAR(s)).y + n < -i || s.y - n > 0
                    ? (a.children[0].active = !1)
                    : (a.children[0].active = !0);
            }
            this.lastScrollPosition = o;
        }
    };
    e.prototype.initChpaterPos = function () {
        var t;
        var e = this;
        var o = new Promise(function (e) {
            t = e;
        });
        cc.assetManager.loadRemote(_global.OssConfig.chapterUrl + "pos.json", cc.JsonAsset, function (o, n) {
            var i = [
                [
                    [-40, 127],
                    [129, 127],
                    [-88, -28],
                    [195, -60],
                    [-224, -128],
                    [49, -128]
                ],
                [
                    [-195, 134],
                    [192, 119],
                    [144, -71],
                    [53, 34],
                    [-40, -81],
                    [-209, -44]
                ],
                [
                    [-133, 59],
                    [40, 62],
                    [210, 95],
                    [-191, -104],
                    [-28, -98],
                    [181, -95]
                ],
                [
                    [-167, 122],
                    [-24, 39],
                    [136, 122],
                    [-198, -42],
                    [35, -80],
                    [191, -112]
                ],
                [
                    [20, 98],
                    [-89, -44],
                    [22, -40],
                    [149, -75],
                    [-193, -128],
                    [15, -138]
                ],
                [
                    [-80, 30],
                    [101, 132],
                    [-216, -72],
                    [-95, -123],
                    [32, -91],
                    [184, -66]
                ],
                [
                    [-90, 29],
                    [76, 126],
                    [79, -22],
                    [-199, -112],
                    [-51, -122],
                    [197, -95]
                ],
                [
                    [-117, 125],
                    [162, 110],
                    [-217, -119],
                    [-79, -101],
                    [57, -118],
                    [162, -126]
                ],
                [
                    [-129, 71],
                    [162, 62],
                    [-2, -37],
                    [150.5, -101.6],
                    [-9, -136.4],
                    [-177, -136]
                ],
                [
                    [-183, -56],
                    [22, -70],
                    [-81, -121],
                    [188, -130],
                    [-74, 114],
                    [73, -149]
                ],
                [
                    [-135, 96],
                    [14, 51],
                    [188, 58],
                    [-169, -134],
                    [-3, -97],
                    [187, -124]
                ],
                [
                    [209, -84],
                    [-205, 97],
                    [-173, -136],
                    [172, 56],
                    [68, -21],
                    [-118, -15]
                ],
                [
                    [-198, -108],
                    [32, -139],
                    [183, -107],
                    [-159, 133],
                    [15, -14],
                    [180, 97]
                ],
                [
                    [-7, -51],
                    [-35, 121],
                    [-196, 24],
                    [-159, -117],
                    [154, -136],
                    [149, 99]
                ],
                [
                    [172, -116],
                    [13, 42],
                    [-152, 98],
                    [-145, -127],
                    [164, 124],
                    [31, -122]
                ],
                [
                    [121, -115],
                    [-5, 80],
                    [-165, -122],
                    [202, 28],
                    [-183, 116],
                    [-173, -8.4]
                ],
                [
                    [156, -25],
                    [-206, -126],
                    [-21.5, 103.4],
                    [5, -114],
                    [-92, -34],
                    [-198, 3]
                ],
                [
                    [-112, 84],
                    [142, 93],
                    [-189, -97],
                    [185, -57],
                    [53, -99],
                    [-58, -90]
                ]
            ];
            !o && n && n.json && Array.isArray(n.json) && e.node && i.push.apply(i, n.json);
            var r = e.chapterJigsawPos;
            var a = 1;
            i.forEach(function (t) {
                t.forEach(function (t) {
                    (r[9 * a] = cc.v2(t[0], t[1])), a++;
                });
            });
            t(1);
        });
        return o;
    };
    e.prototype.showLoadAni = function (t) {
        cc.tween(t).to(0.5, {x: 0}, {easing: "backInOut"}).start();
    };
    e.prototype.showChangegAni = function (t) {
        cc.tween(t).to(0.2, {opacity: 255}).start();
    };
    __decorate([f(cc.ScrollView)], e.prototype, "scrollView", void 0);
    __decorate([f(cc.Prefab)], e.prototype, "chaptPfb", void 0);
    __decorate([f(cc.ScrollView)], e.prototype, "btnView", void 0);
    __decorate([f(cc.Node)], e.prototype, "btnPre", void 0);
    __decorate([f(cc.Node)], e.prototype, "bgNode", void 0);
    __decorate([f(cc.Node)], e.prototype, "bookNode", void 0);
    __decorate([f(cc.Node)], e.prototype, "lineNode", void 0);
    __decorate([f(cc.Node)], e.prototype, "lineNode1", void 0);
    __decorate([f(cc.Node)], e.prototype, "topNode", void 0);
    __decorate([f(cc.Node)], e.prototype, "closeNode", void 0);
    return __decorate([h], e);
})(_baseUI.default);
exports.default = g;
