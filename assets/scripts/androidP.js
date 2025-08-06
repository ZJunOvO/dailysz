//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var r;
var _pConst = require("pConst");
var s = (function (t) {
    function e() {
        var e = t.call(this) || this;
        r = jsb.reflection.callStaticMethod;
        return e;
    }
    __extends(e, t);
    Object.defineProperty(e.prototype, "appId", {
        get: function () {
            return "dev_nonogram";
        },
        enumerable: !1,
        configurable: !0
    });
    e.prototype.string = function () {
        return _pConst.PFCode.Android;
    };
    e.prototype.vibrate = function () {
        r("org/cocos2dx/javascript/InstantAppActivity", "vibrate", "()V");
    };
    e.prototype.login = function () {
        return t.prototype.login.call(this);
    };
    e.prototype.setStorage = function (t, e) {
        var o = jsb.fileUtils.getWritablePath() + t;
        jsb.fileUtils.isDirectoryExist(o) || jsb.fileUtils.createDirectory(o);
        jsb.fileUtils.writeStringToFile(JSON.stringify(e), o + "/android_nonogram.txt");
    };
    e.prototype.getStorage = function (t) {
        var e = jsb.fileUtils.getWritablePath() + t;
        jsb.fileUtils.isDirectoryExist(e) ||
            (jsb.fileUtils.createDirectory(e), jsb.fileUtils.writeStringToFile("", e + "/android_nonogram.txt"));
        var o = jsb.fileUtils.getStringFromFile(e + "/android_nonogram.txt");
        return null == o || "" == o ? null : JSON.parse(o);
    };
    e.prototype.setCloudData = function () {};
    e.prototype.doWatchAD = function () {
        var t = this;
        return new Promise(function (e, o) {
            t.resolve = e;
            t.reject = o;
            r("org/cocos2dx/javascript/InstantAppActivity", "playAd", "()V");
        });
    };
    return e;
})(require("nativeP").default);
exports.default = s;
