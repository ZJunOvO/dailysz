Object.defineProperty(exports, "__esModule", { value: !0 });
var _request = require("request");
var i = (function() {
    function t() {}
    t.prototype.syncTime = function() {
        return new Promise(function(t) {
            t(Date.now());
            // _request.default.ins
            //     .getTime()
            //     .then(function (e) {
            //         t(e.server_time);
            //     })
            //     .catch(function () {
            //         t(null);
            //     });
        });
    };
    return t;
})();
exports.default = i;