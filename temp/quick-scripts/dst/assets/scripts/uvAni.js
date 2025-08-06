
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/uvAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41094vwy3ZOuZaeoTXDRToI', 'uvAni');
// scripts/uvAni.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var a = cc._decorator;
var s = a.ccclass;
var c = (a.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.bgMat = null;
    e.time = 0;
    e._speed = 0.5;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    var t = this.getComponent(cc.Sprite);
    this.bgMat = t.getMaterial(0);
    this.time = 0;
  };

  Object.defineProperty(e.prototype, "speed", {
    set: function set(t) {
      this._speed = t;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "stop", {
    set: function set(t) {
      this.isStop = t;
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.update = function (t) {
    this.isStop || (this.time += t * this._speed, this.bgMat.setProperty("time", this.time));
  };

  return __decorate([s], e);
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdXZBbmkuanMiXSwibmFtZXMiOlsibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiYSIsImNjIiwiX2RlY29yYXRvciIsInMiLCJjY2NsYXNzIiwiYyIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImJnTWF0IiwidGltZSIsIl9zcGVlZCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsInN0YXJ0IiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiZ2V0TWF0ZXJpYWwiLCJzZXQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiaXNTdG9wIiwidXBkYXRlIiwic2V0UHJvcGVydHkiLCJfX2RlY29yYXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxLQUFGLEdBQVUsSUFBVjtJQUNBSCxDQUFDLENBQUNJLElBQUYsR0FBUyxDQUFUO0lBQ0FKLENBQUMsQ0FBQ0ssTUFBRixHQUFXLEdBQVg7SUFDQSxPQUFPTCxDQUFQO0VBQ0g7O0VBQ0RNLFNBQVMsQ0FBQ04sQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ08sU0FBRixDQUFZQyxLQUFaLEdBQW9CLFlBQVk7SUFDNUIsSUFBSVQsQ0FBQyxHQUFHLEtBQUtVLFlBQUwsQ0FBa0JoQixFQUFFLENBQUNpQixNQUFyQixDQUFSO0lBQ0EsS0FBS1AsS0FBTCxHQUFhSixDQUFDLENBQUNZLFdBQUYsQ0FBYyxDQUFkLENBQWI7SUFDQSxLQUFLUCxJQUFMLEdBQVksQ0FBWjtFQUNILENBSkQ7O0VBS0FoQixNQUFNLENBQUNDLGNBQVAsQ0FBc0JXLENBQUMsQ0FBQ08sU0FBeEIsRUFBbUMsT0FBbkMsRUFBNEM7SUFDeENLLEdBQUcsRUFBRSxhQUFVYixDQUFWLEVBQWE7TUFDZCxLQUFLTSxNQUFMLEdBQWNOLENBQWQ7SUFDSCxDQUh1QztJQUl4Q2MsVUFBVSxFQUFFLENBQUMsQ0FKMkI7SUFLeENDLFlBQVksRUFBRSxDQUFDO0VBTHlCLENBQTVDO0VBT0ExQixNQUFNLENBQUNDLGNBQVAsQ0FBc0JXLENBQUMsQ0FBQ08sU0FBeEIsRUFBbUMsTUFBbkMsRUFBMkM7SUFDdkNLLEdBQUcsRUFBRSxhQUFVYixDQUFWLEVBQWE7TUFDZCxLQUFLZ0IsTUFBTCxHQUFjaEIsQ0FBZDtJQUNILENBSHNDO0lBSXZDYyxVQUFVLEVBQUUsQ0FBQyxDQUowQjtJQUt2Q0MsWUFBWSxFQUFFLENBQUM7RUFMd0IsQ0FBM0M7O0VBT0FkLENBQUMsQ0FBQ08sU0FBRixDQUFZUyxNQUFaLEdBQXFCLFVBQVVqQixDQUFWLEVBQWE7SUFDOUIsS0FBS2dCLE1BQUwsS0FBaUIsS0FBS1gsSUFBTCxJQUFhTCxDQUFDLEdBQUcsS0FBS00sTUFBdkIsRUFBZ0MsS0FBS0YsS0FBTCxDQUFXYyxXQUFYLENBQXVCLE1BQXZCLEVBQStCLEtBQUtiLElBQXBDLENBQWhEO0VBQ0gsQ0FGRDs7RUFHQSxPQUFPYyxVQUFVLENBQUMsQ0FBQ3ZCLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0FoQ0QsQ0FnQ0dQLEVBQUUsQ0FBQzBCLFNBaENOLENBRkMsQ0FBTDtBQW1DQTdCLE9BQU8sV0FBUCxHQUFrQk8sQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBuO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6ICEwfSk7XG52YXIgYSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgcyA9IGEuY2NjbGFzcztcbnZhciBjID1cbiAgICAoYS5wcm9wZXJ0eSxcbiAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICAgICAgZS5iZ01hdCA9IG51bGw7XG4gICAgICAgICAgICBlLnRpbWUgPSAwO1xuICAgICAgICAgICAgZS5fc3BlZWQgPSAwLjU7XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgdGhpcy5iZ01hdCA9IHQuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsIFwic3BlZWRcIiwge1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NwZWVkID0gdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSwgXCJzdG9wXCIsIHtcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3RvcCA9IHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3AgfHwgKCh0aGlzLnRpbWUgKz0gdCAqIHRoaXMuX3NwZWVkKSwgdGhpcy5iZ01hdC5zZXRQcm9wZXJ0eShcInRpbWVcIiwgdGhpcy50aW1lKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtzXSwgZSk7XG4gICAgfSkoY2MuQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjO1xuIl19