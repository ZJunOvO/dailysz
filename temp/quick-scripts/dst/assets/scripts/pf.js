
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d08eGcGmRG/bMCOUzEMeOL', 'pf');
// scripts/pf.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _request = require("request");

var i = function () {
  function t() {}

  t.prototype.syncTime = function () {
    return new Promise(function (t) {
      t(Date.now()); // _request.default.ins
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
}();

exports["default"] = i;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGYuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfcmVxdWVzdCIsInJlcXVpcmUiLCJpIiwidCIsInByb3RvdHlwZSIsInN5bmNUaW1lIiwiUHJvbWlzZSIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFBRUMsS0FBSyxFQUFFLENBQUM7QUFBVixDQUE3Qzs7QUFDQSxJQUFJQyxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXRCOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFXO0VBQ2hCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLFNBQUYsQ0FBWUMsUUFBWixHQUF1QixZQUFXO0lBQzlCLE9BQU8sSUFBSUMsT0FBSixDQUFZLFVBQVNILENBQVQsRUFBWTtNQUMzQkEsQ0FBQyxDQUFDSSxJQUFJLENBQUNDLEdBQUwsRUFBRCxDQUFELENBRDJCLENBRTNCO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDSCxDQVZNLENBQVA7RUFXSCxDQVpEOztFQWFBLE9BQU9MLENBQVA7QUFDSCxDQWhCTyxFQUFSOztBQWlCQUwsT0FBTyxXQUFQLEdBQWtCSSxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTtcbnZhciBfcmVxdWVzdCA9IHJlcXVpcmUoXCJyZXF1ZXN0XCIpO1xudmFyIGkgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gdCgpIHt9XG4gICAgdC5wcm90b3R5cGUuc3luY1RpbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHQoRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICAvLyBfcmVxdWVzdC5kZWZhdWx0Lmluc1xuICAgICAgICAgICAgLy8gICAgIC5nZXRUaW1lKClcbiAgICAgICAgICAgIC8vICAgICAudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gICAgICAgICB0KGUuc2VydmVyX3RpbWUpO1xuICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdChudWxsKTtcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBpOyJdfQ==