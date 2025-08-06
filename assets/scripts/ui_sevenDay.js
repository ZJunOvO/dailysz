var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _evts = require("evts");
var _idx = require("idx");
var _pConst = require("pConst");
var _request = require("request");
var _cfgMgr = require("cfgMgr");
var _bagMgr = require("bagMgr");
var _panelMgr = require("panelMgr");
var _tipMgr = require("tipMgr");
var _pInfo = require("pInfo");
var _baseUI = require("baseUI");
var _dayReward = require("dayReward");
var m = cc._decorator;
var v = m.ccclass;
var _ = m.property;
var b = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.dayNodes = [];
        e.getBtnNode = null;
        e.hasGetNode = null;
        e.reciveReward = {};
        e.aniData = [];
        e.canRecive = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {};
    e.prototype.init = function () {
        for (
            var t = _pInfo.default.ins.getSevenDays(),
                e = _pInfo.default.ins.getSevenReward(),
                o = _cfgMgr.default.serverCfg.seven_day_reward.rules,
                n = {},
                i = 0,
                r = this.dayNodes.length;
            i < r;
            i++
        ) {
            var a = o[i].val;
            var s = this.dayNodes[i];
            if (
                (s.initItem(a),
                s.setDefault(),
                6 === i && s.setCanRecive(),
                i < t && (s.setCanRecive(), i < e && s.setRecived()),
                t > i && i >= e)
            )
                for (var c in ((this.aniData = this.aniData.concat(s.aniDatas)), (this.canRecive = !0), a)) {
                    var l = a[c];
                    n[c] ? (n[c] += l) : (n[c] = l);
                }
        }
        this.reciveReward = n;
        this.checkBtns();
    };
    e.prototype.checkBtns = function () {
        this.getBtnNode.active = this.canRecive;
        this.hasGetNode.active = !this.canRecive;
    };
    e.prototype.onBtnGet = function () {
        var t = this;
        if (this.canRecive) {
            this.canRecive = !1;
            this.checkBtns();
            for (var e = [], o = 0, n = this.aniData.length; o < n; o++) {
                var i = this.aniData[o];
                var r = {};
                var u = i.itemId;
                var g = Number(i.value);
                r.itemId = u;
                r.worldPos = i.itemNode.parent.convertToWorldSpaceAR(i.itemNode.position);
                r.value = g;
                e.push(r);
                _bagMgr.default.ins.addItem(u, g);
            }
            var y = _pInfo.default.ins.getSevenDays();
            _pInfo.default.ins.setSevenReward(y);
            _evts.default.opE.emit({action: _evts.default.SIGN_RED});
            var m = _pInfo.default.ins.getSevenReward();
            for (o = 0, n = this.dayNodes.length; o < n; o++) {
                var v = this.dayNodes[o];
                v.setDefault();
                6 === o && v.setCanRecive();
                o < y && (v.setCanRecive(), o < m && v.setRecived());
            }
            if (_idx.platform.string() == _pConst.PFCode.Bytedance) {
                var _ = _idx.platform.getSystemData();
                if (_) {
                    var b = 0;
                    switch (_.appName) {
                        case "Douyin":
                            b = 1;
                            break;
                        case "douyin_lite":
                            b = 2;
                    }
                    var w = -1 != _.system.indexOf("iOS");
                    b && y < 7 && !w && _request.default.ins.sendSevenCard(b, y + 1);
                }
            }
            _panelMgr.default.ins.open("ui/ui_flyAni", {
                itemDatas: e,
                hideCb: function () {
                    t.hideThis();
                }
            });
        } else _tipMgr.default.ins.showTip("已领取");
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    __decorate([_([_dayReward.default])], e.prototype, "dayNodes", void 0);
    __decorate([_(cc.Node)], e.prototype, "getBtnNode", void 0);
    __decorate([_(cc.Node)], e.prototype, "hasGetNode", void 0);
    return __decorate([v], e);
})(_baseUI.default);
exports.default = b;
