
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a0307mRBFNnr9D0weC/cVX', 'vb');
// scripts/vb.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.VEnum3 = void 0;
var n;

var _idx = require("idx");

var _pConst = require("pConst");

var _uData = require("uData");

(function (t) {
  t[t.SHORT = 0] = "SHORT";
  t[t.LONG = 1] = "LONG";
  t[t.DOUBLE = 2] = "DOUBLE";
})(n = exports.VEnum3 || (exports.VEnum3 = {}));

var s = function () {
  function t() {}

  t.p = function (t) {
    if (_uData["default"].ins.getSetting().vibrate) switch (t) {
      case n.SHORT:
        _idx.platform.vibrate(_pConst.VEnum4.SHORT);

        break;

      case n.LONG:
        _idx.platform.vibrate(_pConst.VEnum4.LONG);

        break;

      case n.DOUBLE:
        _idx.platform.vibrate(_pConst.VEnum4.LONG);

        var e = cc.director.getScene().getChildByName("Canvas");
        cc.tween(e).delay(0.4).call(function () {
          _idx.platform.vibrate(_pConst.VEnum4.LONG);
        }).start();
    }
  };

  return t;
}();

exports["default"] = s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmIuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJWRW51bTMiLCJuIiwiX2lkeCIsInJlcXVpcmUiLCJfcENvbnN0IiwiX3VEYXRhIiwidCIsIlNIT1JUIiwiTE9ORyIsIkRPVUJMRSIsInMiLCJwIiwiaW5zIiwiZ2V0U2V0dGluZyIsInZpYnJhdGUiLCJwbGF0Zm9ybSIsIlZFbnVtNCIsImUiLCJjYyIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJnZXRDaGlsZEJ5TmFtZSIsInR3ZWVuIiwiZGVsYXkiLCJjYWxsIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFBQ0MsS0FBSyxFQUFFLENBQUM7QUFBVCxDQUE3QztBQUNBRCxPQUFPLENBQUNFLE1BQVIsR0FBaUIsS0FBSyxDQUF0QjtBQUNBLElBQUlDLENBQUo7O0FBQ0EsSUFBSUMsSUFBSSxHQUFHQyxPQUFPLENBQUMsS0FBRCxDQUFsQjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxRQUFELENBQXJCOztBQUNBLElBQUlFLE1BQU0sR0FBR0YsT0FBTyxDQUFDLE9BQUQsQ0FBcEI7O0FBQ0EsQ0FBQyxVQUFVRyxDQUFWLEVBQWE7RUFDVkEsQ0FBQyxDQUFFQSxDQUFDLENBQUNDLEtBQUYsR0FBVSxDQUFaLENBQUQsR0FBbUIsT0FBbkI7RUFDQUQsQ0FBQyxDQUFFQSxDQUFDLENBQUNFLElBQUYsR0FBUyxDQUFYLENBQUQsR0FBa0IsTUFBbEI7RUFDQUYsQ0FBQyxDQUFFQSxDQUFDLENBQUNHLE1BQUYsR0FBVyxDQUFiLENBQUQsR0FBb0IsUUFBcEI7QUFDSCxDQUpELEVBSUlSLENBQUMsR0FBR0gsT0FBTyxDQUFDRSxNQUFSLEtBQW1CRixPQUFPLENBQUNFLE1BQVIsR0FBaUIsRUFBcEMsQ0FKUjs7QUFLQSxJQUFJVSxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTSixDQUFULEdBQWEsQ0FBRTs7RUFDZkEsQ0FBQyxDQUFDSyxDQUFGLEdBQU0sVUFBVUwsQ0FBVixFQUFhO0lBQ2YsSUFBSUQsTUFBTSxXQUFOLENBQWVPLEdBQWYsQ0FBbUJDLFVBQW5CLEdBQWdDQyxPQUFwQyxFQUNJLFFBQVFSLENBQVI7TUFDSSxLQUFLTCxDQUFDLENBQUNNLEtBQVA7UUFDSUwsSUFBSSxDQUFDYSxRQUFMLENBQWNELE9BQWQsQ0FBc0JWLE9BQU8sQ0FBQ1ksTUFBUixDQUFlVCxLQUFyQzs7UUFDQTs7TUFDSixLQUFLTixDQUFDLENBQUNPLElBQVA7UUFDSU4sSUFBSSxDQUFDYSxRQUFMLENBQWNELE9BQWQsQ0FBc0JWLE9BQU8sQ0FBQ1ksTUFBUixDQUFlUixJQUFyQzs7UUFDQTs7TUFDSixLQUFLUCxDQUFDLENBQUNRLE1BQVA7UUFDSVAsSUFBSSxDQUFDYSxRQUFMLENBQWNELE9BQWQsQ0FBc0JWLE9BQU8sQ0FBQ1ksTUFBUixDQUFlUixJQUFyQzs7UUFDQSxJQUFJUyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZQyxRQUFaLEdBQXVCQyxjQUF2QixDQUFzQyxRQUF0QyxDQUFSO1FBQ0FILEVBQUUsQ0FBQ0ksS0FBSCxDQUFTTCxDQUFULEVBQ0tNLEtBREwsQ0FDVyxHQURYLEVBRUtDLElBRkwsQ0FFVSxZQUFZO1VBQ2R0QixJQUFJLENBQUNhLFFBQUwsQ0FBY0QsT0FBZCxDQUFzQlYsT0FBTyxDQUFDWSxNQUFSLENBQWVSLElBQXJDO1FBQ0gsQ0FKTCxFQUtLaUIsS0FMTDtJQVZSO0VBaUJQLENBbkJEOztFQW9CQSxPQUFPbkIsQ0FBUDtBQUNILENBdkJPLEVBQVI7O0FBd0JBUixPQUFPLFdBQVAsR0FBa0JZLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbmV4cG9ydHMuVkVudW0zID0gdm9pZCAwO1xudmFyIG47XG52YXIgX2lkeCA9IHJlcXVpcmUoXCJpZHhcIik7XG52YXIgX3BDb25zdCA9IHJlcXVpcmUoXCJwQ29uc3RcIik7XG52YXIgX3VEYXRhID0gcmVxdWlyZShcInVEYXRhXCIpO1xuKGZ1bmN0aW9uICh0KSB7XG4gICAgdFsodC5TSE9SVCA9IDApXSA9IFwiU0hPUlRcIjtcbiAgICB0Wyh0LkxPTkcgPSAxKV0gPSBcIkxPTkdcIjtcbiAgICB0Wyh0LkRPVUJMRSA9IDIpXSA9IFwiRE9VQkxFXCI7XG59KSgobiA9IGV4cG9ydHMuVkVudW0zIHx8IChleHBvcnRzLlZFbnVtMyA9IHt9KSkpO1xudmFyIHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7fVxuICAgIHQucCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmIChfdURhdGEuZGVmYXVsdC5pbnMuZ2V0U2V0dGluZygpLnZpYnJhdGUpXG4gICAgICAgICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIG4uU0hPUlQ6XG4gICAgICAgICAgICAgICAgICAgIF9pZHgucGxhdGZvcm0udmlicmF0ZShfcENvbnN0LlZFbnVtNC5TSE9SVCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugbi5MT05HOlxuICAgICAgICAgICAgICAgICAgICBfaWR4LnBsYXRmb3JtLnZpYnJhdGUoX3BDb25zdC5WRW51bTQuTE9ORyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugbi5ET1VCTEU6XG4gICAgICAgICAgICAgICAgICAgIF9pZHgucGxhdGZvcm0udmlicmF0ZShfcENvbnN0LlZFbnVtNC5MT05HKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWR4LnBsYXRmb3JtLnZpYnJhdGUoX3BDb25zdC5WRW51bTQuTE9ORyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBzO1xuIl19