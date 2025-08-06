Object.defineProperty(exports, "__esModule", { value: !0 });
exports.mailState = void 0;
var n;
var _numberUtils = require("NumberUtils");
var _evts = require("evts");
var _request = require("request");
var _time = require("time");
var _pInfo = require("pInfo");
var _bagMgr = require("bagMgr");
var u = (function() {
    function t() {
        if (((this._mailInfo = {}), (this._serverMail = {}), (this.isGetting = !1), (this.getCb = []), t._ins))
            throw new Error("mailMgr can only be one！");
        t._ins = this;
        this.initMail();
    }
    Object.defineProperty(t, "ins", {
        get: function() {
            t._ins || new t();
            return t._ins;
        },
        enumerable: !1,
        configurable: !0
    });
    t.prototype.initMail = function() {
        this._mailInfo = _pInfo.default.ins.Mail;
        this._mailInfo.mail || (this._mailInfo.mail = {});
        this._mailInfo.outMail || (this._mailInfo.outMail = []);
    };
    t.prototype.saveMail = function() {
        _pInfo.default.ins.Mail = this._mailInfo;
    };
    Object.defineProperty(t.prototype, "mailInfo", {
        get: function() {
            return this._mailInfo;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(t.prototype, "serverMail", {
        get: function() {
            return this._serverMail;
        },
        enumerable: !1,
        configurable: !0
    });
    t.prototype.getMail = function(t) {
        if ((t && this.getCb.push(t), !this.isGetting)) {
            var e = this;
            var o = function(t) {
                e.getCb.length > 0 &&
                    e.getCb.forEach(function(e) {
                        return e && e(t);
                    });
                e.getCb = [];
                e.isGetting = !1;
            };
            e.isGetting = !0;
            var t = {
                "status": 0,
                "msg": "无邮件信息",
                "code": 0,
                "server_time": Date.now()
            };
            // _request.default.ins
            //     .getMailData(void 0, this._mailInfo.outMail)
            //     .then(function (t) {
            if (t && t.code && t.data) {
                var i;
                if (e.mailInfo.mail instanceof Array)(i = e.mailInfo.mail), (e.mailInfo.mail = {});
                else if (Object.keys(e._mailInfo.mail).length !== t.data.length) {
                    var r = new Set();
                    var a = JSON.parse(JSON.stringify(e._mailInfo.mail));
                    for (var c in (JSON.parse(JSON.stringify(t.data)).forEach(function(t) {
                                r.add(t.id);
                            }),
                            a))
                        r.has(Number(c)) || delete e._mailInfo.mail[c];
                }
                t.data.forEach(function(t) {
                    e._serverMail[t.id] = t;
                    t.end_time < 1e3 * _time.default.ins.serverTime ?
                        e._mailInfo.outMail.indexOf(t.id) < 0 && e._mailInfo.outMail.push(t.id) :
                        e.mailInfo.mail[t.id] ||
                        (i && i.indexOf(t.id) > -1 ?
                            (e.mailInfo.mail[t.id] = i[t.id]) :
                            (e.mailInfo.mail[t.id] = n.noRead));
                });
            } else t && 0 === t.code && (e.mailInfo.mail = {});
            e.saveMail();
            o(e._serverMail);
            // })
            // .catch(function (t) {
            //     console.error("getMailDataErr", t);
            //     o({errMsg: "error"});
            // });
        }
    };
    t.prototype.deleteMail = function(t) {
        if ((void 0 === t && (t = null), (t = _numberUtils.default.parseNum(t))))
            return (
                this._mailInfo.mail[t] && delete this._mailInfo.mail[t], -1 == this._mailInfo.outMail.indexOf(t) && this._mailInfo.outMail.push(t),
                this.saveMail(), !0
            );
        for (var e in this._mailInfo.mail)
            if (this._mailInfo.mail[e] === n.award) {
                var o = _numberUtils.default.parseNum(e); -
                1 == this._mailInfo.outMail.indexOf(o) && this._mailInfo.outMail.push(o);
                this._mailInfo.mail[e] && delete this._mailInfo.mail[e];
            }
        this.saveMail();
        _evts.default.opE.emit({ action: _evts.default.UPDMAIL, data: { type: "keyDelete" } });
        return !0;
    };
    t.prototype.getAward = function(t) {
        if ((void 0 === t && (t = null), t))
            return (
                this._mailInfo.mail[t] != n.award &&
                ((this._mailInfo.mail[t] = n.award), this.addItem(t), this.saveMail(), !0)
            );
        var e = !1;
        for (var o in this._mailInfo.mail)
            this._mailInfo.mail[o] !== n.award && (e || (e = !0), (this._mailInfo.mail[o] = n.award), this.addItem(o));
        e && this.saveMail();
        _evts.default.opE.emit({ action: _evts.default.UPDMAIL, data: { type: "keyAward" } });
        return e;
    };
    t.prototype.readMail = function(t) {
        void 0 === t && (t = null);
        return !(!t ||
            !this._mailInfo.mail[t] ||
            (this._mailInfo.mail[t] != n.award &&
                (this._mailInfo.mail[t] != n.noRead || ((this._mailInfo.mail[t] = n.read), this.saveMail(), 0)))
        );
    };
    t.prototype.addItem = function(t) {
        var e = this.serverMail;
        if (t) {
            if (!e[t]) return;
            for (var o = JSON.parse(e[t].props), n = Object.keys(o), i = 0; i < n.length; i++) {
                var r = n[i];
                if (o.hasOwnProperty(r)) {
                    var a = i === n.length - 1;
                    _bagMgr.default.ins.addItem(r, o[r], !0, a);
                }
            }
        }
    };
    return t;
})();
exports.default = u;
(function(t) {
    (t[(t.none = 0)] = "none"),
    (t[(t.noRead = 1)] = "noRead"),
    (t[(t.read = 2)] = "read"),
    (t[(t.award = 3)] = "award");
})((n = exports.mailState || (exports.mailState = {})));