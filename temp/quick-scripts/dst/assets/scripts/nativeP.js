
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/nativeP.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3eb69/8EbJE/rYyIHzTmHB4', 'nativeP');
// scripts/nativeP.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _pConst = require("pConst");

var a = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isNative = !0;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function () {
    this.initListener();
  };

  Object.defineProperty(e.prototype, "isLogin", {
    get: function get() {
      return !1;
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.showLogin = function (t) {
    t && (this.loginResolve = t);
  };

  e.prototype.loginSuceess = function () {
    this.loginResolve();
  };

  e.prototype.videoError = function (t) {
    this.reject(t);
  };

  e.prototype.videoEnd = function (t) {
    t == _pConst.VideoFailCode.CANCELED ? this.reject(t) : this.resolve();
  };

  return e;
}(require("h5")["default"]);

exports["default"] = a;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbmF0aXZlUC5qcyJdLCJuYW1lcyI6WyJuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfcENvbnN0IiwicmVxdWlyZSIsImEiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaXNOYXRpdmUiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0IiwiaW5pdExpc3RlbmVyIiwiZ2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInNob3dMb2dpbiIsImxvZ2luUmVzb2x2ZSIsImxvZ2luU3VjZWVzcyIsInZpZGVvRXJyb3IiLCJyZWplY3QiLCJ2aWRlb0VuZCIsIlZpZGVvRmFpbENvZGUiLCJDQU5DRUxFRCIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csUUFBRixHQUFhLENBQUMsQ0FBZDtJQUNBLE9BQU9ILENBQVA7RUFDSDs7RUFDREksU0FBUyxDQUFDSixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSyxTQUFGLENBQVlDLElBQVosR0FBbUIsWUFBWTtJQUMzQixLQUFLQyxZQUFMO0VBQ0gsQ0FGRDs7RUFHQWYsTUFBTSxDQUFDQyxjQUFQLENBQXNCTyxDQUFDLENBQUNLLFNBQXhCLEVBQW1DLFNBQW5DLEVBQThDO0lBQzFDRyxHQUFHLEVBQUUsZUFBWTtNQUNiLE9BQU8sQ0FBQyxDQUFSO0lBQ0gsQ0FIeUM7SUFJMUNDLFVBQVUsRUFBRSxDQUFDLENBSjZCO0lBSzFDQyxZQUFZLEVBQUUsQ0FBQztFQUwyQixDQUE5Qzs7RUFPQVYsQ0FBQyxDQUFDSyxTQUFGLENBQVlNLFNBQVosR0FBd0IsVUFBVVosQ0FBVixFQUFhO0lBQ2pDQSxDQUFDLEtBQUssS0FBS2EsWUFBTCxHQUFvQmIsQ0FBekIsQ0FBRDtFQUNILENBRkQ7O0VBR0FDLENBQUMsQ0FBQ0ssU0FBRixDQUFZUSxZQUFaLEdBQTJCLFlBQVk7SUFDbkMsS0FBS0QsWUFBTDtFQUNILENBRkQ7O0VBR0FaLENBQUMsQ0FBQ0ssU0FBRixDQUFZUyxVQUFaLEdBQXlCLFVBQVVmLENBQVYsRUFBYTtJQUNsQyxLQUFLZ0IsTUFBTCxDQUFZaEIsQ0FBWjtFQUNILENBRkQ7O0VBR0FDLENBQUMsQ0FBQ0ssU0FBRixDQUFZVyxRQUFaLEdBQXVCLFVBQVVqQixDQUFWLEVBQWE7SUFDaENBLENBQUMsSUFBSUgsT0FBTyxDQUFDcUIsYUFBUixDQUFzQkMsUUFBM0IsR0FBc0MsS0FBS0gsTUFBTCxDQUFZaEIsQ0FBWixDQUF0QyxHQUF1RCxLQUFLb0IsT0FBTCxFQUF2RDtFQUNILENBRkQ7O0VBR0EsT0FBT25CLENBQVA7QUFDSCxDQTlCTyxDQThCTEgsT0FBTyxDQUFDLElBQUQsQ0FBUCxXQTlCSyxDQUFSOztBQStCQUgsT0FBTyxXQUFQLEdBQWtCSSxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG47XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBfcENvbnN0ID0gcmVxdWlyZShcInBDb25zdFwiKTtcbnZhciBhID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuaXNOYXRpdmUgPSAhMDtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmluaXRMaXN0ZW5lcigpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLCBcImlzTG9naW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICB9KTtcbiAgICBlLnByb3RvdHlwZS5zaG93TG9naW4gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0ICYmICh0aGlzLmxvZ2luUmVzb2x2ZSA9IHQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubG9naW5TdWNlZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxvZ2luUmVzb2x2ZSgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudmlkZW9FcnJvciA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMucmVqZWN0KHQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudmlkZW9FbmQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0ID09IF9wQ29uc3QuVmlkZW9GYWlsQ29kZS5DQU5DRUxFRCA/IHRoaXMucmVqZWN0KHQpIDogdGhpcy5yZXNvbHZlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gZTtcbn0pKHJlcXVpcmUoXCJoNVwiKS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGE7XG4iXX0=