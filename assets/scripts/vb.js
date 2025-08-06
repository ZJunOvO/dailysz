Object.defineProperty(exports, "__esModule", {value: !0});
exports.VEnum3 = void 0;
var n;
var _idx = require("idx");
var _pConst = require("pConst");
var _uData = require("uData");
(function (t) {
    t[(t.SHORT = 0)] = "SHORT";
    t[(t.LONG = 1)] = "LONG";
    t[(t.DOUBLE = 2)] = "DOUBLE";
})((n = exports.VEnum3 || (exports.VEnum3 = {})));
var s = (function () {
    function t() {}
    t.p = function (t) {
        if (_uData.default.ins.getSetting().vibrate)
            switch (t) {
                case n.SHORT:
                    _idx.platform.vibrate(_pConst.VEnum4.SHORT);
                    break;
                case n.LONG:
                    _idx.platform.vibrate(_pConst.VEnum4.LONG);
                    break;
                case n.DOUBLE:
                    _idx.platform.vibrate(_pConst.VEnum4.LONG);
                    var e = cc.director.getScene().getChildByName("Canvas");
                    cc.tween(e)
                        .delay(0.4)
                        .call(function () {
                            _idx.platform.vibrate(_pConst.VEnum4.LONG);
                        })
                        .start();
            }
    };
    return t;
})();
exports.default = s;
