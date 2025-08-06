var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _evts = require("evts");
var _idx = require("idx");
var _mySafeArea = require("mySafeArea");
var _res = require("res");
var _time = require("time");
var _global = require("global");
var _bagMgr = require("bagMgr");
var _festivalMgr = require("festivalMgr");
var _newJigMgr = require("newJigMgr");
var _panelMgr = require("panelMgr");
var _tipMgr = require("tipMgr");
var _pInfo = require("pInfo");
var _baseUI = require("baseUI");
var _ = cc._decorator;
var b = _.ccclass;
var w = _.property;
var S = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.proLb = null;
        e.taskLb = null;
        e.timeLb = null;
        e.imgNode = null;
        e.tianNode = null;
        e.dayTimeLb = null;
        e.costLb = null;
        e.startBtn = null;
        e.topNode = null;
        e.upEggNode = null;
        e.eggNode = null;
        e.spineNode = null;
        e.jigsawNum = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        this.node.height = cc.winSize.height;
        this.checkEndTime();
    };
    e.prototype.start = function () {
        var t = this;
        this.initPanel();
        this.upNewJigRed();
        this.scheduleOnce(function () {
            t.adapter();
        });
    };
    e.prototype.adapter = function () {
        var t = _mySafeArea.getSafeAreaRect().yMin;
        this.topNode.y -= t;
    };
    e.prototype.upNewJigRed = function () {
        var t = _newJigMgr.default.ins.getUnPlacedNum();
        if (t > 0) {
            var e = t > 99 ? "99+" : t + "";
            this.jigsawNum.node.parent.active = !0;
            this.jigsawNum.string = e + "";
            this.jigsawNum.node.x = _global.default.getCharXOffset(this.jigsawNum.string);
        } else this.jigsawNum.node.parent.active = !1;
    };
    e.prototype.initPanel = function () {
        this.initTask();
        this.initImg();
        this.initBtn();
        this.initReward();
    };
    e.prototype.initTask = function () {
        var t = _festivalMgr.default.ins;
        var e = t.getNowTaskData();
        var o = e.nums;
        var n = t.getNowTaskPro();
        this.taskLb.string = e.title.format(o);
        this.schedule(this.showTime, 1);
        this.showTime();
        t.isTaskLocked()
            ? ((this.proLb.string = ""), (this.upEggNode.active = !1))
            : ((this.proLb.string = n + "/" + o), (this.upEggNode.active = !0));
    };
    e.prototype.initImg = function () {
        for (
            var t = _festivalMgr.default.ins.getFesPuzzleLv() - 1, e = this.imgNode.children, o = 0, n = e.length;
            o < n;
            o++
        )
            e[o].active = o >= t;
        if (_festivalMgr.default.ins.isPuzzleMax()) this.spineNode.active = !1;
        else {
            this.spineNode.active = !0;
            var i = this.imgNode.children[t];
            this.spineNode.position = cc.v3(i.x + this.imgNode.x + 54, i.y + this.imgNode.y - 55);
        }
    };
    e.prototype.initBtn = function () {
        var t = _festivalMgr.default.ins.getFesLevelCost();
        this.costLb.string = "-" + t;
        this.startBtn.active = !_festivalMgr.default.ins.isPuzzleMax();
    };
    e.prototype.initReward = function () {
        var t = this.upEggNode;
        if (_festivalMgr.default.ins.isTaskLocked())
            return (
                this.checkShowFinger(!1),
                (this.eggNode.angle = 0),
                cc.Tween.stopAllByTarget(this.eggNode),
                void (t.active = !1)
            );
        t.active = !0;
        var e = _festivalMgr.default.ins;
        var o = e.getNowTaskData().nums;
        e.getNowTaskPro() >= o
            ? (this.checkShowFinger(!0),
              cc.Tween.stopAllByTarget(this.eggNode),
              cc
                  .tween(this.eggNode)
                  .sequence(
                      cc.tween().to(0.5, {angle: 10}),
                      cc.tween().to(1, {angle: 0}, {easing: "elasticOut"}).delay(0.5)
                  )
                  .repeatForever()
                  .start())
            : (this.checkShowFinger(!1), (this.eggNode.angle = 0), cc.Tween.stopAllByTarget(this.eggNode));
    };
    e.prototype.checkShowFinger = function (t) {
        var e = this;
        t
            ? this._fingerNode
                ? (this._fingerNode.active = !0)
                : _res.default.ins
                      .lPre("prefab/finger")
                      .then(function (t) {
                          e._fingerNode = cc.instantiate(t);
                          e.eggNode.parent.addChild(e._fingerNode);
                          var o = cc.v3(0, 105);
                          e._fingerNode.setPosition(o);
                          e._fingerNode.active = !0;
                      })
                      .catch(function () {})
            : this._fingerNode && this._fingerNode.active && (this._fingerNode.active = !1);
    };
    e.prototype.showTime = function () {
        var t = _time.default.ins.nextZeroTime / 1e3;
        if (t <= 0) return this.initTask(), void this.unschedule(this.showTime);
        this.dayTimeLb.string = _time.default.getFormatHMS(t);
    };
    e.prototype.checkEndTime = function () {
        var t = _festivalMgr.default.ins.fesEndTime - _time.default.ins.serverTime;
        if (t > 0) {
            var e = Math.floor(t / 86400);
            if (e <= 0) (this.tianNode.active = !1), this.schedule(this.showEndTime, 1), this.showEndTime();
            else {
                var o = (this.timeLb.string = e + "");
                this.tianNode.active = !0;
                1 == o.length && (this.tianNode.x = 112);
            }
        } else (this.timeLb.string = ""), (this.tianNode.active = !1);
    };
    e.prototype.showEndTime = function () {
        var t = _festivalMgr.default.ins.fesEndTime - _time.default.ins.serverTime;
        if (t <= 0) return this.initTask(), (this.timeLb.string = "已结束"), void this.unschedule(this.showTime);
        this.timeLb.string = _time.default.getFormatHMS(t);
    };
    e.prototype.hideThis = function () {
        _evts.default.opE.emit({action: _evts.default.UPD_FES_RED});
        this.hide();
    };
    e.prototype.onBtnGet = function () {
        if (_festivalMgr.default.ins.isTaskLocked()) _tipMgr.default.ins.showTip("今日任务已完成");
        else {
            var t = _festivalMgr.default.ins;
            var e = t.getFesPro();
            var o = t.getNowTaskData();
            var n = o.nums;
            var i = t.getNowTaskPro();
            var r = o.val;
            var a = [];
            for (var c in r) {
                var l = r[c];
                var u = this.imgNode.children[e];
                var p = u.parent.convertToWorldSpaceAR(u.position);
                var f = {};
                f.itemId = c;
                f.worldPos = p;
                f.value = Number(l);
                a.push(f);
            }
            if (i >= n) {
                for (var c in r) (l = r[c]), _bagMgr.default.ins.addItem(c, Number(l));
                _panelMgr.default.ins.open("ui/ui_flyAni", {itemDatas: a});
                var m = Number(t.getFesPro());
                _idx.platform.reportEvent(_idx.ERepEvt.fesTaskFinish, {id: m});
                _festivalMgr.default.ins.finishFesTask();
                this.initPanel();
            } else _panelMgr.default.ins.open("ui/ui_preReward", {itemDatas: a});
        }
    };
    e.prototype.onBtnStart = function () {
        var t = _festivalMgr.default.ins.getFesLevelCost();
        _pInfo.default.ins.getPower() < t
            ? _panelMgr.default.ins.open("ui/ui_getRes", {itemId: "times"})
            : _festivalMgr.default.ins.isPuzzleLocked()
            ? _tipMgr.default.ins.showTip("明天开启")
            : (_festivalMgr.default.ins.updPro(_festivalMgr.fesTaskKey.costPower, t),
              _pInfo.default.ins.addPower(-t),
              _pInfo.chgScene(_pInfo.sceneType.game, {gameType: _pInfo.gameType.festival}));
    };
    e.prototype.onBtnJig = function () {
        this.hideThis();
        _evts.default.opE.emit({action: _evts.default.MAINJUMP, data: 0, param: "festival"});
    };
    e.prototype.onBtnGo = function () {
        var t = _festivalMgr.default.ins.getNowTaskData();
        switch ((this.hideThis(), t.get_by)) {
            case _festivalMgr.fesTaskKey.raceScore:
            case _festivalMgr.fesTaskKey.raceTimes:
                _evts.default.opE.emit({action: _evts.default.MAINJUMP, data: 4});
                break;
            case _festivalMgr.fesTaskKey.costPower:
            case _festivalMgr.fesTaskKey.throughMain:
                _global.default.levelDone
                    ? _panelMgr.default.ins.open("ui/ui_selectMode", null)
                    : _panelMgr.default.ins.open("ui/ui_lvInfo", null);
                break;
            case _festivalMgr.fesTaskKey.finishPuzzle:
                _evts.default.opE.emit({action: _evts.default.MAINJUMP, data: 0});
        }
    };
    __decorate([w(cc.Label)], e.prototype, "proLb", void 0);
    __decorate([w(cc.Label)], e.prototype, "taskLb", void 0);
    __decorate([w(cc.Label)], e.prototype, "timeLb", void 0);
    __decorate([w(cc.Node)], e.prototype, "imgNode", void 0);
    __decorate([w(cc.Node)], e.prototype, "tianNode", void 0);
    __decorate([w(cc.Label)], e.prototype, "dayTimeLb", void 0);
    __decorate([w(cc.Label)], e.prototype, "costLb", void 0);
    __decorate([w(cc.Node)], e.prototype, "startBtn", void 0);
    __decorate([w(cc.Node)], e.prototype, "topNode", void 0);
    __decorate([w(cc.Node)], e.prototype, "upEggNode", void 0);
    __decorate([w(cc.Node)], e.prototype, "eggNode", void 0);
    __decorate([w(cc.Node)], e.prototype, "spineNode", void 0);
    __decorate([w(cc.Label)], e.prototype, "jigsawNum", void 0);
    return __decorate([b], e);
})(_baseUI.default);
exports.default = S;
