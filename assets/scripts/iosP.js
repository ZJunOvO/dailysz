var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var r;
var _com = require("com");
var _pConst = require("pConst");
var c = (function (t) {
    function e() {
        var e = t.call(this) || this;
        r = jsb.reflection.callStaticMethod;
        return e;
    }
    __extends(e, t);
    Object.defineProperty(e.prototype, "appId", {
        get: function () {
            return "6478914767";
        },
        enumerable: !1,
        configurable: !0
    });
    e.prototype.string = function () {
        return _pConst.PFCode.Ios;
    };
    e.prototype.vibrate = function () {
        r("AppController", "vibrate:", null);
    };
    e.prototype.showLogin = function (e) {
        t.prototype.showLogin.call(this, e);
        r("AppController", "showLogin:", null);
    };
    Object.defineProperty(e.prototype, "isLogin", {
        get: function () {
            return r("AppController", "getOpenId:", null);
        },
        enumerable: !1,
        configurable: !0
    });
    e.prototype.login = function () {
        return Promise.resolve({
            code: Date.now() + _com.default.ins.rad(1, 1e5),
            openid: r("AppController", "getOpenId:", null)
        });
    };
    e.prototype.setCloudData = function () {};
    e.prototype.doWatchAD = function () {
        return Promise.resolve();
    };
    e.prototype.showLoading = function () {
        this.isShowLoading || ((this.isShowLoading = !0), r("AppController", "showLoading:", null));
    };
    e.prototype.hideLoading = function () {
        this.isShowLoading = !1;
        r("AppController", "hideLoading:", null);
    };
    e.prototype.showTip = function (t) {
        r("AppController", "showTip:", t);
    };
    return e;
})(require("nativeP").default);
exports.default = c;
