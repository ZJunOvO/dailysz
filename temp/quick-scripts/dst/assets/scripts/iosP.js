
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/iosP.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b63a8c4FAtD1LUSpIutFX8H', 'iosP');
// scripts/iosP.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r;

var _com = require("com");

var _pConst = require("pConst");

var c = function (t) {
  function e() {
    var e = t.call(this) || this;
    r = jsb.reflection.callStaticMethod;
    return e;
  }

  __extends(e, t);

  Object.defineProperty(e.prototype, "appId", {
    get: function get() {
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
    get: function get() {
      return r("AppController", "getOpenId:", null);
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.login = function () {
    return Promise.resolve({
      code: Date.now() + _com["default"].ins.rad(1, 1e5),
      openid: r("AppController", "getOpenId:", null)
    });
  };

  e.prototype.setCloudData = function () {};

  e.prototype.doWatchAD = function () {
    return Promise.resolve();
  };

  e.prototype.showLoading = function () {
    this.isShowLoading || (this.isShowLoading = !0, r("AppController", "showLoading:", null));
  };

  e.prototype.hideLoading = function () {
    this.isShowLoading = !1;
    r("AppController", "hideLoading:", null);
  };

  e.prototype.showTip = function (t) {
    r("AppController", "showTip:", t);
  };

  return e;
}(require("nativeP")["default"]);

exports["default"] = c;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaW9zUC5qcyJdLCJuYW1lcyI6WyJuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJyIiwiX2NvbSIsInJlcXVpcmUiLCJfcENvbnN0IiwiYyIsInQiLCJlIiwiY2FsbCIsImpzYiIsInJlZmxlY3Rpb24iLCJjYWxsU3RhdGljTWV0aG9kIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiZ2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInN0cmluZyIsIlBGQ29kZSIsIklvcyIsInZpYnJhdGUiLCJzaG93TG9naW4iLCJsb2dpbiIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29kZSIsIkRhdGUiLCJub3ciLCJpbnMiLCJyYWQiLCJvcGVuaWQiLCJzZXRDbG91ZERhdGEiLCJkb1dhdGNoQUQiLCJzaG93TG9hZGluZyIsImlzU2hvd0xvYWRpbmciLCJoaWRlTG9hZGluZyIsInNob3dUaXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7QUFDQSxJQUFJQyxDQUFKOztBQUNBLElBQUlDLElBQUksR0FBR0MsT0FBTyxDQUFDLEtBQUQsQ0FBbEI7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRCxPQUFPLENBQUMsUUFBRCxDQUFyQjs7QUFDQSxJQUFJRSxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBR0QsQ0FBQyxDQUFDRSxJQUFGLENBQU8sSUFBUCxLQUFnQixJQUF4QjtJQUNBUCxDQUFDLEdBQUdRLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBbkI7SUFDQSxPQUFPSixDQUFQO0VBQ0g7O0VBQ0RLLFNBQVMsQ0FBQ0wsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FULE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQlMsQ0FBQyxDQUFDTSxTQUF4QixFQUFtQyxPQUFuQyxFQUE0QztJQUN4Q0MsR0FBRyxFQUFFLGVBQVk7TUFDYixPQUFPLFlBQVA7SUFDSCxDQUh1QztJQUl4Q0MsVUFBVSxFQUFFLENBQUMsQ0FKMkI7SUFLeENDLFlBQVksRUFBRSxDQUFDO0VBTHlCLENBQTVDOztFQU9BVCxDQUFDLENBQUNNLFNBQUYsQ0FBWUksTUFBWixHQUFxQixZQUFZO0lBQzdCLE9BQU9iLE9BQU8sQ0FBQ2MsTUFBUixDQUFlQyxHQUF0QjtFQUNILENBRkQ7O0VBR0FaLENBQUMsQ0FBQ00sU0FBRixDQUFZTyxPQUFaLEdBQXNCLFlBQVk7SUFDOUJuQixDQUFDLENBQUMsZUFBRCxFQUFrQixVQUFsQixFQUE4QixJQUE5QixDQUFEO0VBQ0gsQ0FGRDs7RUFHQU0sQ0FBQyxDQUFDTSxTQUFGLENBQVlRLFNBQVosR0FBd0IsVUFBVWQsQ0FBVixFQUFhO0lBQ2pDRCxDQUFDLENBQUNPLFNBQUYsQ0FBWVEsU0FBWixDQUFzQmIsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUNELENBQWpDO0lBQ0FOLENBQUMsQ0FBQyxlQUFELEVBQWtCLFlBQWxCLEVBQWdDLElBQWhDLENBQUQ7RUFDSCxDQUhEOztFQUlBSixNQUFNLENBQUNDLGNBQVAsQ0FBc0JTLENBQUMsQ0FBQ00sU0FBeEIsRUFBbUMsU0FBbkMsRUFBOEM7SUFDMUNDLEdBQUcsRUFBRSxlQUFZO01BQ2IsT0FBT2IsQ0FBQyxDQUFDLGVBQUQsRUFBa0IsWUFBbEIsRUFBZ0MsSUFBaEMsQ0FBUjtJQUNILENBSHlDO0lBSTFDYyxVQUFVLEVBQUUsQ0FBQyxDQUo2QjtJQUsxQ0MsWUFBWSxFQUFFLENBQUM7RUFMMkIsQ0FBOUM7O0VBT0FULENBQUMsQ0FBQ00sU0FBRixDQUFZUyxLQUFaLEdBQW9CLFlBQVk7SUFDNUIsT0FBT0MsT0FBTyxDQUFDQyxPQUFSLENBQWdCO01BQ25CQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxLQUFhekIsSUFBSSxXQUFKLENBQWEwQixHQUFiLENBQWlCQyxHQUFqQixDQUFxQixDQUFyQixFQUF3QixHQUF4QixDQURBO01BRW5CQyxNQUFNLEVBQUU3QixDQUFDLENBQUMsZUFBRCxFQUFrQixZQUFsQixFQUFnQyxJQUFoQztJQUZVLENBQWhCLENBQVA7RUFJSCxDQUxEOztFQU1BTSxDQUFDLENBQUNNLFNBQUYsQ0FBWWtCLFlBQVosR0FBMkIsWUFBWSxDQUFFLENBQXpDOztFQUNBeEIsQ0FBQyxDQUFDTSxTQUFGLENBQVltQixTQUFaLEdBQXdCLFlBQVk7SUFDaEMsT0FBT1QsT0FBTyxDQUFDQyxPQUFSLEVBQVA7RUFDSCxDQUZEOztFQUdBakIsQ0FBQyxDQUFDTSxTQUFGLENBQVlvQixXQUFaLEdBQTBCLFlBQVk7SUFDbEMsS0FBS0MsYUFBTCxLQUF3QixLQUFLQSxhQUFMLEdBQXFCLENBQUMsQ0FBdkIsRUFBMkJqQyxDQUFDLENBQUMsZUFBRCxFQUFrQixjQUFsQixFQUFrQyxJQUFsQyxDQUFuRDtFQUNILENBRkQ7O0VBR0FNLENBQUMsQ0FBQ00sU0FBRixDQUFZc0IsV0FBWixHQUEwQixZQUFZO0lBQ2xDLEtBQUtELGFBQUwsR0FBcUIsQ0FBQyxDQUF0QjtJQUNBakMsQ0FBQyxDQUFDLGVBQUQsRUFBa0IsY0FBbEIsRUFBa0MsSUFBbEMsQ0FBRDtFQUNILENBSEQ7O0VBSUFNLENBQUMsQ0FBQ00sU0FBRixDQUFZdUIsT0FBWixHQUFzQixVQUFVOUIsQ0FBVixFQUFhO0lBQy9CTCxDQUFDLENBQUMsZUFBRCxFQUFrQixVQUFsQixFQUE4QkssQ0FBOUIsQ0FBRDtFQUNILENBRkQ7O0VBR0EsT0FBT0MsQ0FBUDtBQUNILENBcERPLENBb0RMSixPQUFPLENBQUMsU0FBRCxDQUFQLFdBcERLLENBQVI7O0FBcURBSixPQUFPLFdBQVAsR0FBa0JNLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIHI7XG52YXIgX2NvbSA9IHJlcXVpcmUoXCJjb21cIik7XG52YXIgX3BDb25zdCA9IHJlcXVpcmUoXCJwQ29uc3RcIik7XG52YXIgYyA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gdC5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIHIgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSwgXCJhcHBJZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiNjQ3ODkxNDc2N1wiO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgIH0pO1xuICAgIGUucHJvdG90eXBlLnN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9wQ29uc3QuUEZDb2RlLklvcztcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnZpYnJhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHIoXCJBcHBDb250cm9sbGVyXCIsIFwidmlicmF0ZTpcIiwgbnVsbCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93TG9naW4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0LnByb3RvdHlwZS5zaG93TG9naW4uY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgcihcIkFwcENvbnRyb2xsZXJcIiwgXCJzaG93TG9naW46XCIsIG51bGwpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLCBcImlzTG9naW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByKFwiQXBwQ29udHJvbGxlclwiLCBcImdldE9wZW5JZDpcIiwgbnVsbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgfSk7XG4gICAgZS5wcm90b3R5cGUubG9naW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgY29kZTogRGF0ZS5ub3coKSArIF9jb20uZGVmYXVsdC5pbnMucmFkKDEsIDFlNSksXG4gICAgICAgICAgICBvcGVuaWQ6IHIoXCJBcHBDb250cm9sbGVyXCIsIFwiZ2V0T3BlbklkOlwiLCBudWxsKVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldENsb3VkRGF0YSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLmRvV2F0Y2hBRCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd0xvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNTaG93TG9hZGluZyB8fCAoKHRoaXMuaXNTaG93TG9hZGluZyA9ICEwKSwgcihcIkFwcENvbnRyb2xsZXJcIiwgXCJzaG93TG9hZGluZzpcIiwgbnVsbCkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGlkZUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNTaG93TG9hZGluZyA9ICExO1xuICAgICAgICByKFwiQXBwQ29udHJvbGxlclwiLCBcImhpZGVMb2FkaW5nOlwiLCBudWxsKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNob3dUaXAgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByKFwiQXBwQ29udHJvbGxlclwiLCBcInNob3dUaXA6XCIsIHQpO1xuICAgIH07XG4gICAgcmV0dXJuIGU7XG59KShyZXF1aXJlKFwibmF0aXZlUFwiKS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGM7XG4iXX0=