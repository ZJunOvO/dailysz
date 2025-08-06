
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/skinHeadFrame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '495e1u4RCpPV7Xh5v/0L5/6', 'skinHeadFrame');
// scripts/skinHeadFrame.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _skinMgr = require("skinMgr");

var _skinItemBase = require("skinItemBase");

var c = cc._decorator;
var l = c.ccclass;
var u = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.itemSp = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
  };

  e.prototype.loadItem = function () {
    _skinMgr["default"].ins.updateHeadFrame(this.ref, this.itemSp);
  };

  e.prototype.clickItem = function () {
    var t;
    this.state !== _skinMgr.SkinState.using && (t = this.itemSp.node, this.openSkinInfo(t));
  };

  __decorate([u(cc.Sprite)], e.prototype, "itemSp", void 0);

  return __decorate([l], e);
}(_skinItemBase["default"]);

exports["default"] = p;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2tpbkhlYWRGcmFtZS5qcyJdLCJuYW1lcyI6WyJuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfc2tpbk1nciIsInJlcXVpcmUiLCJfc2tpbkl0ZW1CYXNlIiwiYyIsImNjIiwiX2RlY29yYXRvciIsImwiLCJjY2NsYXNzIiwidSIsInByb3BlcnR5IiwicCIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJpdGVtU3AiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJjYWxsIiwibG9hZEl0ZW0iLCJpbnMiLCJ1cGRhdGVIZWFkRnJhbWUiLCJyZWYiLCJjbGlja0l0ZW0iLCJzdGF0ZSIsIlNraW5TdGF0ZSIsInVzaW5nIiwibm9kZSIsIm9wZW5Ta2luSW5mbyIsIl9fZGVjb3JhdGUiLCJTcHJpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUF0Qjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBQTNCOztBQUNBLElBQUlFLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csTUFBRixHQUFXLElBQVg7SUFDQSxPQUFPSCxDQUFQO0VBQ0g7O0VBQ0RJLFNBQVMsQ0FBQ0osQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ0ssU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVk7SUFDN0JQLENBQUMsQ0FBQ00sU0FBRixDQUFZQyxNQUFaLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QjtFQUNILENBRkQ7O0VBR0FQLENBQUMsQ0FBQ0ssU0FBRixDQUFZRyxRQUFaLEdBQXVCLFlBQVk7SUFDL0JwQixRQUFRLFdBQVIsQ0FBaUJxQixHQUFqQixDQUFxQkMsZUFBckIsQ0FBcUMsS0FBS0MsR0FBMUMsRUFBK0MsS0FBS1IsTUFBcEQ7RUFDSCxDQUZEOztFQUdBSCxDQUFDLENBQUNLLFNBQUYsQ0FBWU8sU0FBWixHQUF3QixZQUFZO0lBQ2hDLElBQUliLENBQUo7SUFDQSxLQUFLYyxLQUFMLEtBQWV6QixRQUFRLENBQUMwQixTQUFULENBQW1CQyxLQUFsQyxLQUE2Q2hCLENBQUMsR0FBRyxLQUFLSSxNQUFMLENBQVlhLElBQWpCLEVBQXdCLEtBQUtDLFlBQUwsQ0FBa0JsQixDQUFsQixDQUFwRTtFQUNILENBSEQ7O0VBSUFtQixVQUFVLENBQUMsQ0FBQ3RCLENBQUMsQ0FBQ0osRUFBRSxDQUFDMkIsTUFBSixDQUFGLENBQUQsRUFBaUJuQixDQUFDLENBQUNLLFNBQW5CLEVBQThCLFFBQTlCLEVBQXdDLEtBQUssQ0FBN0MsQ0FBVjs7RUFDQSxPQUFPYSxVQUFVLENBQUMsQ0FBQ3hCLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0FuQk8sQ0FtQkxWLGFBQWEsV0FuQlIsQ0FBUjs7QUFvQkFKLE9BQU8sV0FBUCxHQUFrQlksQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBuO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6ICEwfSk7XG52YXIgX3NraW5NZ3IgPSByZXF1aXJlKFwic2tpbk1nclwiKTtcbnZhciBfc2tpbkl0ZW1CYXNlID0gcmVxdWlyZShcInNraW5JdGVtQmFzZVwiKTtcbnZhciBjID0gY2MuX2RlY29yYXRvcjtcbnZhciBsID0gYy5jY2NsYXNzO1xudmFyIHUgPSBjLnByb3BlcnR5O1xudmFyIHAgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5pdGVtU3AgPSBudWxsO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5wcm90b3R5cGUub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5sb2FkSXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3NraW5NZ3IuZGVmYXVsdC5pbnMudXBkYXRlSGVhZEZyYW1lKHRoaXMucmVmLCB0aGlzLml0ZW1TcCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja0l0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICB0aGlzLnN0YXRlICE9PSBfc2tpbk1nci5Ta2luU3RhdGUudXNpbmcgJiYgKCh0ID0gdGhpcy5pdGVtU3Aubm9kZSksIHRoaXMub3BlblNraW5JbmZvKHQpKTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW3UoY2MuU3ByaXRlKV0sIGUucHJvdG90eXBlLCBcIml0ZW1TcFwiLCB2b2lkIDApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtsXSwgZSk7XG59KShfc2tpbkl0ZW1CYXNlLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcDtcbiJdfQ==