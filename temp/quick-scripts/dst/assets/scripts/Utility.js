
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Utility.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35509Oblm1OqYii3D8KZBBq', 'Utility');
// scripts/Utility.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var n = function () {
  function t() {}

  t.removeFromArray = function (t, e) {
    var o = t.indexOf(e);
    -1 !== o && t.splice(o, 1);
    return t;
  };

  t.getZeroFilledArray = function (t) {
    return new Array(t).fill(0);
  };

  t.cloneArray = function (t) {
    return t.slice(0);
  };

  return t;
}();

exports["default"] = n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVXRpbGl0eS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm4iLCJ0IiwicmVtb3ZlRnJvbUFycmF5IiwiZSIsIm8iLCJpbmRleE9mIiwic3BsaWNlIiwiZ2V0WmVyb0ZpbGxlZEFycmF5IiwiQXJyYXkiLCJmaWxsIiwiY2xvbmVBcnJheSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhLENBQUU7O0VBQ2ZBLENBQUMsQ0FBQ0MsZUFBRixHQUFvQixVQUFVRCxDQUFWLEVBQWFFLENBQWIsRUFBZ0I7SUFDaEMsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQUYsQ0FBVUYsQ0FBVixDQUFSO0lBQ0EsQ0FBQyxDQUFELEtBQU9DLENBQVAsSUFBWUgsQ0FBQyxDQUFDSyxNQUFGLENBQVNGLENBQVQsRUFBWSxDQUFaLENBQVo7SUFDQSxPQUFPSCxDQUFQO0VBQ0gsQ0FKRDs7RUFLQUEsQ0FBQyxDQUFDTSxrQkFBRixHQUF1QixVQUFVTixDQUFWLEVBQWE7SUFDaEMsT0FBTyxJQUFJTyxLQUFKLENBQVVQLENBQVYsRUFBYVEsSUFBYixDQUFrQixDQUFsQixDQUFQO0VBQ0gsQ0FGRDs7RUFHQVIsQ0FBQyxDQUFDUyxVQUFGLEdBQWUsVUFBVVQsQ0FBVixFQUFhO0lBQ3hCLE9BQU9BLENBQUMsQ0FBQ1UsS0FBRixDQUFRLENBQVIsQ0FBUDtFQUNILENBRkQ7O0VBR0EsT0FBT1YsQ0FBUDtBQUNILENBZE8sRUFBUjs7QUFlQUgsT0FBTyxXQUFQLEdBQWtCRSxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6ICEwfSk7XG52YXIgbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gdCgpIHt9XG4gICAgdC5yZW1vdmVGcm9tQXJyYXkgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IHQuaW5kZXhPZihlKTtcbiAgICAgICAgLTEgIT09IG8gJiYgdC5zcGxpY2UobywgMSk7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgdC5nZXRaZXJvRmlsbGVkQXJyYXkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5KHQpLmZpbGwoMCk7XG4gICAgfTtcbiAgICB0LmNsb25lQXJyYXkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5zbGljZSgwKTtcbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IG47XG4iXX0=