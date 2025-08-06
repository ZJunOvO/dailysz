var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _idx = require("idx");
var _panelMgr = require("panelMgr");
var _tipMgr = require("tipMgr");
var _baseUI = require("baseUI");
var d = cc._decorator;
var h = d.ccclass;
var f = d.property;
var g = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.timeL = null;
        e.lvL = null;
        e.coinNumL = null;
        e.timeR = null;
        e.lvR = null;
        e.coinNumR = null;
        e.infoL = null;
        e.infoR = null;
        e.nodeL = null;
        e.nodeR = null;
        e.userDatas = [];
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {};
    e.prototype.init = function (t) {
        var e = t.userDatas;
        this.rePanel(e);
    };
    e.prototype.rePanel = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var e;
            var o;
            var n;
            var i;
            var r;
            var a;
            var c;
            var l;
            var u;
            var p;
            var d;
            var h;
            var f;
            return __generator(this, function (s) {
                switch (s.label) {
                    case 0:
                        return (
                            (this.userDatas = []),
                            (this.timeL.string = "暂无数据"),
                            (this.lvL.string = ""),
                            (this.coinNumL.string = "0"),
                            (this.timeR.string = "暂无数据"),
                            (this.lvR.string = ""),
                            (this.coinNumL.string = "0"),
                            t
                                ? ((e = t[0]),
                                  (o = t[1]),
                                  e && e.update_at
                                      ? ((r = e.update_at),
                                        (a = new Date(r)),
                                        (c = a.getFullYear()),
                                        (l = a.getMonth() + 1),
                                        (u = a.getDate()),
                                        (this.timeL.string = c + "/" + l + "/" + u),
                                        (n = JSON.parse(e.user_data)),
                                        "localData" != e.save_tag
                                            ? [3, 2]
                                            : ((this.infoL.string = "自动备份"), [4, this.compareData(n)]))
                                      : [3, 4])
                                : [3, 10]
                        );
                    case 1:
                        return (n = s.sent()), [3, 3];
                    case 2:
                        (this.infoL.string = "手动备份"), (s.label = 3);
                    case 3:
                        return (
                            (d = n.puzzleLvl || 0),
                            (h = n.coin || 0),
                            (this.lvL.string = "关卡：" + d),
                            (this.coinNumL.string = "" + h),
                            (i = JSON.stringify(n)),
                            (e.user_data = i),
                            this.userDatas.push(e),
                            [3, 5]
                        );
                    case 4:
                        (this.nodeL.active = !1), (s.label = 5);
                    case 5:
                        return o && o.update_at
                            ? ((r = o.update_at),
                              (a = new Date(r)),
                              (c = a.getFullYear()),
                              (l = a.getMonth() + 1),
                              (u = a.getDate()),
                              (this.timeR.string = c + "/" + l + "/" + u),
                              (p = JSON.parse(o.user_data)),
                              "localData" != o.save_tag
                                  ? [3, 7]
                                  : ((this.infoR.string = "自动备份"), [4, this.compareData(p)]))
                            : [3, 9];
                    case 6:
                        return (p = s.sent()), [3, 8];
                    case 7:
                        (this.infoR.string = "手动备份"), (s.label = 8);
                    case 8:
                        return (
                            (d = p.puzzleLvl || 0),
                            (h = p.coin || 0),
                            (this.lvR.string = "关卡：" + d),
                            (this.coinNumR.string = "" + h),
                            (f = JSON.stringify(p)),
                            (o.user_data = f),
                            this.userDatas.push(o),
                            [3, 10]
                        );
                    case 9:
                        (this.nodeR.active = !1), (s.label = 10);
                    case 10:
                        return [2];
                }
            });
        });
    };
    e.prototype.compareData = function (t) {
        var e;
        var o;
        return __awaiter(this, void 0, void 0, function () {
            var n;
            var i;
            var r;
            var a;
            var l;
            var u;
            return __generator(this, function (s) {
                switch (s.label) {
                    case 0:
                        return _idx.platform.getCloudData ? [4, _idx.platform.getCloudData()] : [3, 2];
                    case 1:
                        (n = s.sent()), (s.label = 2);
                    case 2:
                        return (
                            (r = (null == t ? void 0 : t.puzzleLvl) || 0),
                            (a =
                                (null === (e = null == t ? void 0 : t.bag) || void 0 === e
                                    ? void 0
                                    : e.puzzle_pieces) || 0),
                            (l = (null == n ? void 0 : n.puzzleLvl) || 0),
                            (u =
                                (null === (o = null == n ? void 0 : n.bag) || void 0 === o
                                    ? void 0
                                    : o.puzzle_pieces) || 0),
                            (i = r > l || a > u ? t : n) ? [2, i] : [2, t]
                        );
                }
            });
        });
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    e.prototype.onBtnCheck = function (t, e) {
        var o = this.userDatas[e];
        o && o.update_at
            ? _panelMgr.default.ins.open("ui/ui_saveConfirm", {cData: o})
            : _tipMgr.default.ins.showTip("暂无数据");
    };
    __decorate([f(cc.Label)], e.prototype, "timeL", void 0);
    __decorate([f(cc.Label)], e.prototype, "lvL", void 0);
    __decorate([f(cc.Label)], e.prototype, "coinNumL", void 0);
    __decorate([f(cc.Label)], e.prototype, "timeR", void 0);
    __decorate([f(cc.Label)], e.prototype, "lvR", void 0);
    __decorate([f(cc.Label)], e.prototype, "coinNumR", void 0);
    __decorate([f(cc.Label)], e.prototype, "infoL", void 0);
    __decorate([f(cc.Label)], e.prototype, "infoR", void 0);
    __decorate([f(cc.Node)], e.prototype, "nodeL", void 0);
    __decorate([f(cc.Node)], e.prototype, "nodeR", void 0);
    return __decorate([h], e);
})(_baseUI.default);
exports.default = g;
