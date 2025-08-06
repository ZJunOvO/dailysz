var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _evts = require("evts");
var _mySafeArea = require("mySafeArea");
var _time = require("time");
var _cfgMgr = require("cfgMgr");
var _lang = require("lang");
var _questItem = require("questItem");
var _global = require("global");
var _taskMgr = require("taskMgr");
var _tipMgr = require("tipMgr");
var _loading = require("loading");
var _baseUI = require("baseUI");
var m = cc._decorator;
var v = m.ccclass;
var _ = m.property;
var b = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.content = null;
        e.questItem = null;
        e.tLable = null;
        e.btnspf = [];
        e.btnsp = [];
        e.scrollView = null;
        e.top = null;
        e.bgNode = null;
        e.topBgSp = null;
        e.topBgSp1 = null;
        e._taskTyp = _taskMgr.taskChannel.daily;
        e.questPool = new cc.NodePool(_questItem.default);
        e.lastScrollPosition = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        var t = this;
        this.node.height = cc.winSize.height;
        this.taskTyp = _taskMgr.taskChannel.daily;
        this.tLable.font = _loading.DEFAULTFONT;
        _global.default.padScale && (this.bgNode.scale = _global.default.padScale);
        this.scrollView.node.on(
            "scrolling",
            function () {
                t.pageScroll(!0);
            },
            this
        );
        this.onResize();
    };
    e.prototype.start = function () {};
    e.prototype.loadItem = function (t, e, o) {
        var n = this.questItem;
        if (t < o.length) {
            var i = o[t];
            (a = this.questPool.get()) || (a = cc.instantiate(n));
            this.content.addChild(a);
            a.active = !1;
            a.zIndex = 0;
            a.getComponent(_questItem.default).init(e[i.key]);
            t++;
            this.scheduleOnce(this.loadItem.bind(this, t, e, o), 0);
        } else {
            this.content.children.sort(function (t, e) {
                var o = t.getComponent(_questItem.default).taskData.data.state;
                var n = e.getComponent(_questItem.default).taskData.data.state;
                return o == n
                    ? 0
                    : o == _taskMgr.taskState.Finish
                    ? -1
                    : n == _taskMgr.taskState.Finish
                    ? 1
                    : o == _taskMgr.taskState.Rewared
                    ? 1
                    : n == _taskMgr.taskState.Rewared
                    ? -1
                    : void 0;
            });
            for (var r = 0; r < this.content.children.length; r++) {
                var a;
                (a = this.content.children[r]).active = !0;
                this.showChgAni ||
                    ((a.opacity = 0), this.scheduleOnce(this.showChangegAni.bind(this, a), 0.1 * (r + 1)));
            }
            this.lastScrollPosition = 0;
            this.scheduleOnce(this.pageScroll.bind(this, !1), 0);
            this.showChgAni || (this.showChgAni = !0);
        }
    };
    e.prototype.initView = function () {
        var t = this;
        this.countTaskUpdTime();
        var e = _cfgMgr.default.serverCfg[this._taskTyp];
        var o = _taskMgr.default.getTaskByType(this._taskTyp);
        this.content.children.forEach(function (e) {
            t.despawnNode(e);
        });
        this.content.removeAllChildren();
        var n = null == e ? void 0 : e.rules;
        this.loadItem(0, o, n);
    };
    e.prototype.updTask = function () {
        this.initView();
    };
    e.prototype.countTaskUpdTime = function () {
        var t = _time.default.ins.nextZeroTime / 1e3;
        this.tLable.string = _time.default.getFormatHMS(t);
        t <= 0 && this.initView();
    };
    e.prototype.onEnable = function () {
        var t = this;
        _evts.default.opE.on(this.onOperTap.bind(this));
        this.schedule(this.countTaskUpdTime, 1, cc.macro.REPEAT_FOREVER);
        this.initView();
        this.scheduleOnce(function () {
            t.top.y -= _mySafeArea.getSafeAreaRect().yMin;
        });
    };
    e.prototype.onDisable = function () {
        _evts.default.opE.off(this.onOperTap.bind(this));
        this.unschedule(this.countTaskUpdTime);
    };
    e.prototype.onOperTap = function (t) {
        var e = null == t ? void 0 : t.action;
        if (e)
            switch (e) {
                case _evts.default.UPD_PANEL:
                    this.updTask();
            }
    };
    e.prototype.pageSwitch = function (t, e) {
        this._taskTyp != e &&
            (e != _taskMgr.taskChannel.achieve
                ? ((this.taskTyp = e), this.initView())
                : _tipMgr.default.ins.showTip(_lang.lang[10004]));
    };
    Object.defineProperty(e.prototype, "taskTyp", {
        set: function (t) {
            this._taskTyp = t;
            var e = t == _taskMgr.taskChannel.daily ? 0 : 1;
            this.btnsp[0].spriteFrame = this.btnspf[e];
            this.btnsp[1].spriteFrame = this.btnspf[1 ^ e];
        },
        enumerable: !1,
        configurable: !0
    });
    e.prototype.despawnNode = function (t) {
        this.questPool.put(t);
    };
    e.prototype.onResize = function () {
        this.node.height = cc.winSize.height;
        var t = _mySafeArea.getSafeAreaRect().yMin;
        var e = cc.winSize.height - 1280 - t;
        this.scrollView.node.height += e;
        this.scrollView.content.height += e;
        this.scrollView.content.parent.height += e;
        this.topBgSp.height += e;
        this.topBgSp1.height += e;
    };
    e.prototype.pageScroll = function (t) {
        void 0 === t && (t = !0);
        var e = this.content.children;
        var o = this.scrollView.getScrollOffset().y;
        if (!(t && Math.abs(o - this.lastScrollPosition) < 1)) {
            for (var n = this.content.parent.height, i = 0; i < e.length; i++) {
                var r = e[i];
                var a = r.convertToWorldSpaceAR(cc.Vec2.ZERO);
                (a = this.content.parent.convertToNodeSpaceAR(a)).y + 110 < -n || a.y - 110 > 0
                    ? (r.children[0].active = !1)
                    : (r.children[0].active = !0);
            }
            this.lastScrollPosition = o;
        }
    };
    e.prototype.showChangegAni = function (t) {
        cc.tween(t).to(0.2, {opacity: 255}).start();
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    __decorate([_(cc.Node)], e.prototype, "content", void 0);
    __decorate([_(cc.Prefab)], e.prototype, "questItem", void 0);
    __decorate([_(cc.Label)], e.prototype, "tLable", void 0);
    __decorate([_(cc.SpriteFrame)], e.prototype, "btnspf", void 0);
    __decorate([_(cc.Sprite)], e.prototype, "btnsp", void 0);
    __decorate([_(cc.ScrollView)], e.prototype, "scrollView", void 0);
    __decorate([_(cc.Node)], e.prototype, "top", void 0);
    __decorate([_(cc.Node)], e.prototype, "bgNode", void 0);
    __decorate([_(cc.Node)], e.prototype, "topBgSp", void 0);
    __decorate([_(cc.Node)], e.prototype, "topBgSp1", void 0);
    return __decorate([v], e);
})(_baseUI.default);
exports.default = b;
