
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui_gamesetlattice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26dfbJvCClAmpxj5mN5QzJI', 'ui_gamesetlattice');
// scripts/ui_gamesetlattice.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _idx = require("idx");

var _baseUI = require("baseUI");

var c = cc._decorator;
var l = c.ccclass;
var u = (c.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.init = function () {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
  };

  e.prototype.onBtnAdd = function () {
    var t;
    null === (t = _idx.platform.addGamesetlattice) || void 0 === t || t.call(_idx.platform);
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  return __decorate([l], e);
}(_baseUI["default"]));
exports["default"] = u;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlfZ2FtZXNldGxhdHRpY2UuanMiXSwibmFtZXMiOlsibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2lkeCIsInJlcXVpcmUiLCJfYmFzZVVJIiwiYyIsImNjIiwiX2RlY29yYXRvciIsImwiLCJjY2NsYXNzIiwidSIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImluaXQiLCJsZW5ndGgiLCJvbkJ0bkFkZCIsInBsYXRmb3JtIiwiYWRkR2FtZXNldGxhdHRpY2UiLCJjYWxsIiwiaGlkZVRoaXMiLCJoaWRlIiwiX19kZWNvcmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFBQ0MsS0FBSyxFQUFFLENBQUM7QUFBVCxDQUE3Qzs7QUFDQSxJQUFJQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxLQUFELENBQWxCOztBQUNBLElBQUlDLE9BQU8sR0FBR0QsT0FBTyxDQUFDLFFBQUQsQ0FBckI7O0FBQ0EsSUFBSUUsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsT0FBUSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQW5EO0VBQ0g7O0VBQ0RDLFNBQVMsQ0FBQ0gsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ0ksU0FBRixDQUFZQyxJQUFaLEdBQW1CLFlBQVk7SUFDM0IsS0FBSyxJQUFJTixDQUFDLEdBQUcsRUFBUixFQUFZQyxDQUFDLEdBQUcsQ0FBckIsRUFBd0JBLENBQUMsR0FBR0UsU0FBUyxDQUFDSSxNQUF0QyxFQUE4Q04sQ0FBQyxFQUEvQztNQUFtREQsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBT0UsU0FBUyxDQUFDRixDQUFELENBQWhCO0lBQW5EO0VBQ0gsQ0FGRDs7RUFHQUEsQ0FBQyxDQUFDSSxTQUFGLENBQVlHLFFBQVosR0FBdUIsWUFBWTtJQUMvQixJQUFJUixDQUFKO0lBQ0EsVUFBVUEsQ0FBQyxHQUFHVixJQUFJLENBQUNtQixRQUFMLENBQWNDLGlCQUE1QixLQUFrRCxLQUFLLENBQUwsS0FBV1YsQ0FBN0QsSUFBa0VBLENBQUMsQ0FBQ1csSUFBRixDQUFPckIsSUFBSSxDQUFDbUIsUUFBWixDQUFsRTtFQUNILENBSEQ7O0VBSUFSLENBQUMsQ0FBQ0ksU0FBRixDQUFZTyxRQUFaLEdBQXVCLFlBQVk7SUFDL0IsS0FBS0MsSUFBTDtFQUNILENBRkQ7O0VBR0EsT0FBT0MsVUFBVSxDQUFDLENBQUNsQixDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBaEJELENBZ0JHVCxPQUFPLFdBaEJWLENBRkMsQ0FBTDtBQW1CQUosT0FBTyxXQUFQLEdBQWtCVSxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG47XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBfaWR4ID0gcmVxdWlyZShcImlkeFwiKTtcbnZhciBfYmFzZVVJID0gcmVxdWlyZShcImJhc2VVSVwiKTtcbnZhciBjID0gY2MuX2RlY29yYXRvcjtcbnZhciBsID0gYy5jY2NsYXNzO1xudmFyIHUgPVxuICAgIChjLnByb3BlcnR5LFxuICAgIChmdW5jdGlvbiAodCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB0ID0gW10sIGUgPSAwOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgZSsrKSB0W2VdID0gYXJndW1lbnRzW2VdO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5vbkJ0bkFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgbnVsbCA9PT0gKHQgPSBfaWR4LnBsYXRmb3JtLmFkZEdhbWVzZXRsYXR0aWNlKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5jYWxsKF9pZHgucGxhdGZvcm0pO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5oaWRlVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbbF0sIGUpO1xuICAgIH0pKF9iYXNlVUkuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gdTtcbiJdfQ==