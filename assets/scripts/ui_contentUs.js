var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _idx = require("idx");
var _request = require("request");
var _lang = require("lang");
var _tipMgr = require("tipMgr");
var _baseUI = require("baseUI");
var p = cc._decorator;
var d = p.ccclass;
var h = p.property;
var f = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.ediBox = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {};
    e.prototype.init = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    e.prototype.editEnd = function () {
        var t = this;
        _idx.platform.onKeyboardComplete &&
            ((this.inCorrect = !0),
            _idx.platform.onKeyboardComplete(function (e) {
                t.ediBox && (t.ediBox.string = e.value);
                t.inCorrect = !1;
            }));
    };
    e.prototype.editChange = function (t, e) {
        e.string = t;
    };
    e.prototype.feedMsg = function () {
        var t = this;
        this.inCorrect ||
            (this.ediBox.string
                ? _request.default.ins
                      .userFeedBack(this.ediBox.string)
                      .then(function (e) {
                          var o = (e && e.msg) || _lang.lang[10007];
                          _tipMgr.default.ins.showTip(o, !0);
                          t.ediBox.string = "";
                      })
                      .catch(function (t) {
                          console.error(t);
                      })
                : _tipMgr.default.ins.showTip(_lang.lang[10008]));
    };
    __decorate([h(cc.EditBox)], e.prototype, "ediBox", void 0);
    return __decorate([d], e);
})(_baseUI.default);
exports.default = f;
