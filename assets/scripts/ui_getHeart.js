var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _idx = require("idx");
var _cfgMgr = require("cfgMgr");
var _lang = require("lang");
var _panelMgr = require("panelMgr");
var _pInfo = require("pInfo");
var _baseUI = require("baseUI");
var d = cc._decorator;
var h = d.ccclass;
var f = d.property;
var g = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.curConsLbls = null;
        e.restLifeLbls = null;
        e.needGoldLbl = null;
        e.normalNode = null;
        e.adNode = null;
        e.needGold = 300;
        e.eventFunc = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        t.prototype.onLoad.call(this);
        var e = this.needGold;
        try {
            e = this.needGold = _cfgMgr.default.serverCfg.qw_line_rules.rules.relive.set.coin.val || 300;
        } catch (o) {}
        this.needGoldLbl.string = e + "";
    };
    e.prototype.init = function (t) {
        var e = t.time;
        var o = t.cb;
        var n = t.closeCb;
        var i = t.gType;
        (this.normalNode.active = i != _pInfo.gameType.race && i != _pInfo.gameType.challenge) ||
            (this.restLifeLbls.node.y = 30);
        this.curConsLbls.string = "当前连胜：" + _pInfo.default.ins.getConsWinTimes();
        e < 0 ? (this.restLifeLbls.node.active = !1) : (this.restLifeLbls.string = "剩余复活次数：" + e);
        this.getCb = o;
        this.closeCb = n;
        this.gType = i;
        this.initAdDotEvent(i);
    };
    e.prototype.initAdDotEvent = function (t) {
        switch (t) {
            case _pInfo.gameType.challenge:
                this.adNode.adDotData = "每日挑战-复活";
                break;
            case _pInfo.gameType.normal:
                this.adNode.adDotData = "主线-复活";
                break;
            case _pInfo.gameType.practice:
                this.adNode.adDotData = "练习模式-复活";
                break;
            case _pInfo.gameType.race:
                this.adNode.adDotData = "趣味赛-复活";
        }
    };
    e.prototype.onGet = function () {
        var t = _pInfo.default.ins;
        t.getCoin() < this.needGold
            ? _panelMgr.default.ins.open("ui/ui_getRes", {
                  itemId: "coin",
                  gType: this.gType,
                  useTo: _lang.getCoinFor.Rebirth
              })
            : (t.addCoin(-this.needGold), this.hideThis(), this.getCb(), this.eventDot("使用元宝"));
    };
    e.prototype.onAdGet = function () {
        this.hideThis();
        this.getCb();
        this.eventDot("看广告");
    };
    e.prototype.eventDot = function (t) {
        var e = "使用元宝" == t;
        this.gType == _pInfo.gameType.normal
            ? (e || !_pInfo.default.ins.isMaxAdCount()) &&
              _idx.platform.reportEvent(_idx.ERepEvt.dungeonReview, {way: t})
            : this.gType == _pInfo.gameType.race &&
              (e || !_pInfo.default.ins.isMaxAdCount()) &&
              _idx.platform.reportEvent(_idx.ERepEvt.raceReview, {way: t});
    };
    e.prototype.onClose = function () {
        this.hideThis();
        this.closeCb();
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    __decorate([f(cc.Label)], e.prototype, "curConsLbls", void 0);
    __decorate([f(cc.Label)], e.prototype, "restLifeLbls", void 0);
    __decorate([f(cc.Label)], e.prototype, "needGoldLbl", void 0);
    __decorate([f(cc.Node)], e.prototype, "normalNode", void 0);
    __decorate([f(cc.Node)], e.prototype, "adNode", void 0);
    return __decorate([h], e);
})(_baseUI.default);
exports.default = g;
