
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui_jigTip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fafd+wZatAc4UtHon65T2w', 'ui_jigTip');
// scripts/ui_jigTip.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _baseUI = require("baseUI");

var s = cc._decorator;
var c = s.ccclass;
var l = (s.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.okCb = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    var e = t.okCb;
    this.okCb = e;
  };

  e.prototype.onBtnEnsure = function () {
    this.okCb && this.okCb();
    this.hideThis();
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  return __decorate([c], e);
}(_baseUI["default"]));
exports["default"] = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlfamlnVGlwLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9iYXNlVUkiLCJyZXF1aXJlIiwicyIsImNjIiwiX2RlY29yYXRvciIsImMiLCJjY2NsYXNzIiwibCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9rQ2IiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0Iiwib25CdG5FbnN1cmUiLCJoaWRlVGhpcyIsImhpZGUiLCJfX2RlY29yYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxJQUFGLEdBQVMsSUFBVDtJQUNBLE9BQU9ILENBQVA7RUFDSDs7RUFDREksU0FBUyxDQUFDSixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSyxTQUFGLENBQVlDLElBQVosR0FBbUIsVUFBVVAsQ0FBVixFQUFhO0lBQzVCLElBQUlDLENBQUMsR0FBR0QsQ0FBQyxDQUFDSSxJQUFWO0lBQ0EsS0FBS0EsSUFBTCxHQUFZSCxDQUFaO0VBQ0gsQ0FIRDs7RUFJQUEsQ0FBQyxDQUFDSyxTQUFGLENBQVlFLFdBQVosR0FBMEIsWUFBWTtJQUNsQyxLQUFLSixJQUFMLElBQWEsS0FBS0EsSUFBTCxFQUFiO0lBQ0EsS0FBS0ssUUFBTDtFQUNILENBSEQ7O0VBSUFSLENBQUMsQ0FBQ0ssU0FBRixDQUFZRyxRQUFaLEdBQXVCLFlBQVk7SUFDL0IsS0FBS0MsSUFBTDtFQUNILENBRkQ7O0VBR0EsT0FBT0MsVUFBVSxDQUFDLENBQUNmLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0FuQkQsQ0FtQkdWLE9BQU8sV0FuQlYsQ0FGQyxDQUFMO0FBc0JBRixPQUFPLFdBQVAsR0FBa0JTLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIF9iYXNlVUkgPSByZXF1aXJlKFwiYmFzZVVJXCIpO1xudmFyIHMgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGMgPSBzLmNjY2xhc3M7XG52YXIgbCA9XG4gICAgKHMucHJvcGVydHksXG4gICAgKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgICAgIGUub2tDYiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0Lm9rQ2I7XG4gICAgICAgICAgICB0aGlzLm9rQ2IgPSBlO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5vbkJ0bkVuc3VyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMub2tDYiAmJiB0aGlzLm9rQ2IoKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZVRoaXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuaGlkZVRoaXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2NdLCBlKTtcbiAgICB9KShfYmFzZVVJLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGw7XG4iXX0=