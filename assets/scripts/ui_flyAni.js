var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _mySafeArea = require("mySafeArea");
var _res = require("res");
var _vb = require("vb");
var _pInfo = require("pInfo");
var _baseUI = require("baseUI");
var p = cc._decorator;
var d = p.ccclass;
var h = p.property;
var f = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.aniParent = null;
        e.flyPre = null;
        e.coinNode = null;
        e.coinLb = null;
        e.posArrsX = [
            [0],
            [0],
            [-75, 75],
            [-150, 0, 150],
            [-225, -75, 75, 225],
            [-300, -150, 0, 150, 300],
            [-150, 0, 150, -150, 0, 150],
            [-150, 0, 150, -225, -75, 75, 225],
            [-225, -75, 75, 225, -225, -75, 75, 225],
            [-150, 0, 150, -150, 0, 150, -150, 0, 150],
            [-150, 0, 150, -225, -75, 75, 225, -150, 0, 150]
        ];
        e.posArrsY = [
            [0],
            [0],
            [0, 0],
            [0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [90, 90, 90, -90, -90, -90],
            [90, 90, 90, -90, -90, -90, -90],
            [90, 90, 90, 90, -90, -90, -90, -90],
            [180, 180, 180, 0, 0, 0, -180, -180, -180],
            [180, 180, 180, 0, 0, 0, 0, -180, -180, -180]
        ];
        e.nodesArr = [];
        e.itemDatas = null;
        e.hideCb = null;
        e.isShowCoin = !1;
        e.isAni = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.init = function (t) {
        var e = this;
        var o = t.itemDatas;
        var n = t.hideCb;
        var i = t.showCoin;
        (o && o.length) || this.hide();
        o.length > 10 && (o.length = 10);
        this.hideCb = n;
        this.itemDatas = o;
        var r = this.aniParent;
        this.coinLb.string = i + "";
        this.coinNode.active = !1;
        this.coinNode.y = cc.winSize.height / 2 - 60 - _mySafeArea.getSafeAreaRect().yMin;
        for (
            var u = function (t, n) {
                    var a = o[t];
                    r.convertToNodeSpaceAR(a.worldPos, a.worldPos);
                    var u = cc.instantiate(p.flyPre);
                    u.getChildByName("lbl").getComponent(cc.Label).string = "x" + a.value;
                    u.active = !0;
                    u.parent = r;
                    u.position = a.worldPos;
                    _res.default.ins
                        .getBundleByString("resSps")
                        .then(function (t) {
                            t.load("item/" + a.itemId, cc.SpriteFrame, function (t, o) {
                                !t &&
                                    e.node &&
                                    u &&
                                    u.isValid &&
                                    (u.getChildByName("spr").getComponent(cc.Sprite).spriteFrame = o);
                            });
                        })
                        .catch(function (t) {
                            console.error("RTool.ins.getBundleByString('resSps')", t);
                        });
                    (!i && 0 != i) || "coin" != a.itemId || (p.coinNode.active = !0);
                    p.nodesArr.push(u);
                    var d = p.posArrsX[n];
                    var h = p.posArrsY[n];
                    var f = cc.v2(d[t], h[t]);
                    var g = cc.v2(
                        (d[t] + a.worldPos.x) / 2,
                        ((Math.abs(a.worldPos.y) + 200) * a.worldPos.y) / a.worldPos.y
                    );
                    var y = cc.v3(0, -cc.winSize.height / 2);
                    var m = cc.v2(d[t] / 2, 500);
                    switch (a.itemId) {
                        case "coin":
                            (y = cc.v3(-72, cc.winSize.height / 2)), (m = cc.v2(d[t] - 200, -500));
                            break;
                        case "times":
                            (y = cc.v3(174, cc.winSize.height / 2)), (m = cc.v2(d[t] + 200, -500));
                    }
                    cc.tween(u)
                        .delay(0.2 * t)
                        .bezierTo(0.35, a.worldPos, g, f, cc.easeInOut(1.2))
                        .to(0.04, {scale: 0.9})
                        .to(0.066, {scale: 1.1})
                        .to(0.12, {scale: 0.95})
                        .to(0.053, {scale: 1})
                        .call(function () {
                            t == n - 1 && (e.isAni = !0);
                        })
                        .delay(0.2)
                        .bezierTo(0.5, f, m, y, cc.easeInOut(0.8))
                        .call(function () {
                            _vb.default.p(_vb.VEnum3.SHORT);
                            "coin" == a.itemId && (e.coinLb.string = _pInfo.default.ins.getCoin() + "");
                            u.active = !1;
                            t == n - 1 && (e.hideCb && e.hideCb(), e.hide());
                        })
                        .start();
                },
                p = this,
                d = 0,
                h = o.length;
            d < h;
            d++
        )
            u(d, h);
    };
    e.prototype.skipAni = function () {
        var t = this;
        if (!this.isAni) {
            this.isAni = !0;
            for (
                var e = this.itemDatas,
                    o = function (o, i) {
                        var r = e[o];
                        var a = n.nodesArr[o];
                        cc.Tween.stopAllByTarget(a);
                        var s = n.posArrsX[i];
                        var u = n.posArrsY[i];
                        var p = cc.v2(s[o], u[o]);
                        a.position = p;
                        var d = cc.v3(0, -cc.winSize.height / 2);
                        var h = cc.v2(s[o] / 2, 500);
                        switch (r.itemId) {
                            case "coin":
                                (d = cc.v3(-72, cc.winSize.height / 2)), (h = cc.v2(s[o] - 200, -500));
                                break;
                            case "times":
                                (d = cc.v3(174, cc.winSize.height / 2)), (h = cc.v2(s[o] + 200, -500));
                        }
                        n.scheduleOnce(function () {
                            cc.tween(a)
                                .bezierTo(0.3, p, h, d, cc.easeInOut(0.8))
                                .call(function () {
                                    _vb.default.p(_vb.VEnum3.SHORT);
                                    "coin" == r.itemId && (t.coinLb.string = _pInfo.default.ins.getCoin() + "");
                                    a.active = !1;
                                    o == i - 1 && (t.hideCb && t.hideCb(), t.hide());
                                })
                                .start();
                        }, 0.1 * o);
                    },
                    n = this,
                    i = 0,
                    r = e.length;
                i < r;
                i++
            )
                o(i, r);
        }
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    __decorate([h(cc.Node)], e.prototype, "aniParent", void 0);
    __decorate([h(cc.Node)], e.prototype, "flyPre", void 0);
    __decorate([h(cc.Node)], e.prototype, "coinNode", void 0);
    __decorate([h(cc.Label)], e.prototype, "coinLb", void 0);
    return __decorate([d], e);
})(_baseUI.default);
exports.default = f;
