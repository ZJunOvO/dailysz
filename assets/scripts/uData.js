Object.defineProperty(exports, "__esModule", { value: !0 });
var _cfgMgr = require("cfgMgr");
var _global = require("global");
var _bagMgr = require("bagMgr");
var _taskMgr = require("taskMgr");
var _pInfo = require("pInfo");
var _adC = require("adC");
var _evts = require("evts");
var _idx = require("idx");
var _numberUtils = require("NumberUtils");
var _pConst = require("pConst");
var _request = require("request");
var _time = require("time");
var g = (function() {
    function t() {
        this.basic = {
            name: "",
            uid: 0,
            userId: "123",
            openId: "test2",
            sessionKey: "",
            headImg: "",
            isAuth: null,
            isNew: null,
            anonymous_openid: null
        };
        this.setting = { effectSound: !0, bgmSound: !0, vibrate: !0, effectVolume: 0.5, bgmVolume: 0.5, tip: !0 };
        this.localData = null;
        this.network = { networkType: "none" };
        this.launchOption = { scene: 0, query: {} };
        this.flushTimeoutKeys = {};
        this.enterAt = Date.now();
        this.loginAt = null;
    }
    Object.defineProperty(t, "ins", {
        get: function() {
            this._ins || (this._ins = new t());
            return this._ins;
        },
        enumerable: !1,
        configurable: !0
    });
    t.prototype.onLogin = function(t) {
        var e;
        var o;
        var n = this;
        if (!this.loginAt) {
            var i;
            this.loadSetting();
            var r = this.getLocalData();
            if (t) {
                var a = t.puzzleLvl || 0;
                var s = (null === (e = null == t ? void 0 : t.bag) || void 0 === e ? void 0 : e.puzzle_pieces) || 0;
                var p = (null == r ? void 0 : r.puzzleLvl) || 0;
                var d = (null === (o = null == r ? void 0 : r.bag) || void 0 === o ? void 0 : o.puzzle_pieces) || 0;
                (a > p || s > d || !r.guideDone) && this.setLocalData(t);
            }
            this.loginAt = _time.default.ins.serverTime;
            var h = this.basic;
            if (
                ((h.recordFlag = null !== (i = h.recordFlag) && void 0 !== i ? i : {}),
                    null == this.getLocalDataByKey("register_date"))
            ) {
                var g = new Date();
                this.setLocalData({ register_date: g.getTime() });
                _idx.platform.reportEvent(_idx.ERepEvt.createNewRole);
            } else _idx.platform.reportEvent(_idx.ERepEvt.login);
            this.getLocalDataByKey("login_date") || this.setLocalData({ login_date: this.loginAt - 864e5 });
            this.checkNewDay();
            _idx.platform.preloadVideo(_adC.VEnum[60]);
            var y = (_time.default.ins.serverTime || Math.floor(new Date().getTime() / 1e3)) % 60;
            0 != y && (y = 60 - y);
            setTimeout(function() {
                n.checkNewDay(),
                    setInterval(function() {
                        n.checkNewDay();
                    }, 6e4);
            }, 1e3 * y);
            _evts.default.plE.on(this.onOperTap.bind(this));
        }
    };
    t.prototype.onOperTap = function(t) {
        (null == t ? void 0 : t.onHide) && this.timeId && this._setLocalAndCloudData();
    };
    t.prototype.checkNewDay = function(t) {
        if ((void 0 === t && (t = !0), !t || !_time.default.ins.isSameDay)) {
            _taskMgr.default.taskReset();
            _pInfo.default.ins.clearDailyData();
            var e = _cfgMgr.default.serverCfg.qw_line_rules.rules.times.set.basic_times.val;
            _bagMgr.default.ins.chgItemCount("qw_line_ticket", Number(e));
            _evts.default.opE.emit({ action: _evts.default.UPD_MAIN_RED });
            this.loginAt = _time.default.ins.serverTime;
            _time.default.ins.loginT = _time.default.ins.serverTime;
            var o = this.getLocalDataByKey("login_date");
            if (
                (_time.default.ins.serverTime - o >= 1728e5 && (_global.default.twoDaysLeft = !0),
                    this.setLocalData({ login_date: this.loginAt }),
                    t && !this.basic.isNew)
            ) {
                var c = 1e3 * _numberUtils.default.RandomInt(1, 30);
                this.timeId = setTimeout(this._setLocalAndCloudData.bind(this), c);
            }
            _evts.default.opE.emit({ action: _evts.default.UPD_PANEL });
        }
    };
    t.prototype.loadSetting = function() {
        var t = this;
        var e = Object.keys(this.setting);
        var o = this.setting;
        this.setting = _idx.platform.getStorage("setting") || this.setting;
        e.forEach(function(e) {
            var n;
            null == t.setting[e] && t.setSetting((((n = {})[e] = o[e]), n));
        });
    };
    t.prototype.setSetting = function(t, e) {
        void 0 === e && (e = !0);
        this.setting = Object.assign(Object.assign({}, this.setting), t);
        _evts.default.usE.emit({ userData: this, kind: "setting" });
        e && _idx.platform.setStorage("setting", this.setting);
    };
    t.prototype.getSetting = function() {
        return this.setting;
    };
    t.prototype.setLocalData = function(t, e) {
        void 0 === e && (e = 10);
        var o = this.getLocalData();
        var n = (this.localData = Object.assign(Object.assign({}, o), t));
        _idx.platform.setStorage("localData", this.localData);
        n && !this.timeId && (this.timeId = setTimeout(this._setLocalAndCloudData.bind(this), 1e3 * e));
    };
    t.prototype._setLocalAndCloudData = function() {
        // var t;
        // var e;
        // var o = this.localData;
        // if (o) {
        //     clearTimeout(this.timeId);
        //     this.timeId = null;
        //     var i =
        //         (null ===
        //             (e = null === (t = _cfgMgr.default.serverCfg) || void 0 === t ? void 0 : t.upload_user_backup) ||
        //         void 0 === e
        //             ? void 0
        //             : e.val) || 5;
        //     o.puzzleLvl > i && _request.default.ins.updateServerData(this.localData, "localData");
        //     _idx.platform.setCloudData && _idx.platform.setCloudData(JSON.stringify(this.localData));
        // }
    };
    t.prototype.restoreData = function(t) {
        t &&
            ((this.localData = t),
                _bagMgr.default.ins.clearItem(),
                _idx.platform.setStorage("localData", this.localData),
                this.checkNewDay(),
                this._setLocalAndCloudData(),
                (_global.default.isReStore = 1),
                cc.game.restart());
    };
    t.prototype.getLocalData = function() {
        null == this.localData && (this.localData = _idx.platform.getStorage("localData") || {});
        return this.localData;
    };
    t.prototype.getLocalDataByKey = function(t) {
        return null == this.localData ? null : this.localData[t];
    };
    Object.defineProperty(t.prototype, "fakeUID", {
        get: function() {
            return 10005 + 2 * this.basic.uid;
        },
        enumerable: !1,
        configurable: !0
    });
    t.prototype.setUserId = function(t) {
        this.basic.userId = t;
    };
    t.prototype.getUserId = function() {
        return this.basic.userId;
    };
    t.prototype.getUid = function() {
        return this.basic.uid;
    };
    t.prototype.setName = function(t) {
        this.basic.name = t;
    };
    t.prototype.getName = function() {
        return this.basic.name;
    };
    t.prototype.setHeadImg = function(t) {
        this.basic.headImg = t;
    };
    t.prototype.getHeadImg = function() {
        return this.basic.headImg;
    };
    t.prototype.setIsAuth = function(t) {
        this.basic.isAuth = t;
    };
    t.prototype.getIsAuth = function() {
        return this.basic.isAuth;
    };
    t.prototype.getIsNewUser = function() {
        return this.basic.isNew;
    };
    t.prototype.syncLaunchOption = function(t) {
        if (
            ((this.launchOption.query = {}),
                (this.launchOption = Object.assign(Object.assign({}, this.launchOption), t)),
                null == this.getLocalDataByKey("register_date"))
        ) {
            var e = this.getLaunchParam("ad_type", "");
            if ("" !== e) {
                this.setLocalData({ ad_type: e });
                var o = this.getLaunchParam("addict_type", "");
                "" !== o && this.setLocalData({ addict_type: o });
                var n = this.getLaunchParam("clickid", "");
                "" !== n && this.setLocalData({ clickid: n });
            }
        }
    };
    t.prototype.getLaunchParam = function(t, e) {
        if (null == this.launchOption) return e;
        var o = this.launchOption[t];
        return null == o && null != this.launchOption.query && null != this.launchOption.query[t] ?
            (o = this.launchOption.query[t]) :
            e;
    };
    t.prototype.getLaunchOption = function() {
        return this.launchOption;
    };
    t.prototype.delayFlush = function(t, e, o) {
        void 0 === o && (o = 0);
        var n = this;
        var i = this.flushTimeoutKeys[e];
        i
            ?
            0 === o && (clearTimeout(i), (this.flushTimeoutKeys[e] = null), _idx.platform.setStorage(e, t)) :
            (this.flushTimeoutKeys[e] = setTimeout(function() {
                n.flushTimeoutKeys[e] = null;
                _idx.platform.setStorage(e, t);
            }, 1e3 * o));
    };
    t.prototype.syncLoginData = function(t) {
        void 0 === t && (t = {});
        var e = this.basic;
        e.name = t.nickname;
        e.headImg = t.avatar;
        e.uid = t.game_uid;
        e.openId = t.openid;
        e.sessionKey = t.session_key;
        e.anonymous_openid = t.anonymous_openid;
        e.isNew = t.is_new_user;
        _evts.default.opE.emit({ action: _evts.default.UPD_TOP_HEADINFO });
        var o = !t.is_register;
        var n = null == _idx.platform.getStorage("localData");
        _pConst.SDKConfig.comQuery = "from_game_uid=" + t.game_uid + "&share_time=";
        return [false, n];
    };
    return t;
})();
exports.default = g;