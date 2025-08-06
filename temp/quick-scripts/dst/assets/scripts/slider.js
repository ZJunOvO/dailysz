
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/slider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dfa43OykftLfa6ThTFErZTe', 'slider');
// scripts/slider.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.handle = null;
    e.slideEvents = [];
    e.pro = null;
    e._progress = 0;
    return e;
  }

  __extends(e, t);

  Object.defineProperty(e.prototype, "progress", {
    get: function get() {
      return this._progress;
    },
    set: function set(t) {
      this._progress = cc.misc.clamp01(t);
      this.pro.width = this._progress * this.node.width;
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.onLoad = function () {
    this.handle && this.handle.isValid && this.handle.node.on(cc.Node.EventType.TOUCH_MOVE, this.tM, this);
  };

  e.prototype.init = function (t) {
    this.progress = t;
    this.handle.node.x = this.progress * this.node.width;
  };

  e.prototype.tM = function (t) {
    var e = t.getLocation();
    var o = this.node.convertToNodeSpaceAR(e);
    this.handle.node.x = cc.misc.clampf(o.x, 0, this.node.width);
    this.progress = this.handle.node.x / this.node.width;
    this.slideEvents.length > 0 && cc.Component.EventHandler.emitEvents(this.slideEvents, this);
  };

  __decorate([c(cc.Button)], e.prototype, "handle", void 0);

  __decorate([c([cc.Component.EventHandler])], e.prototype, "slideEvents", void 0);

  __decorate([c(cc.Node)], e.prototype, "pro", void 0);

  return __decorate([s], e);
}(cc.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2xpZGVyLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImEiLCJjYyIsIl9kZWNvcmF0b3IiLCJzIiwiY2NjbGFzcyIsImMiLCJwcm9wZXJ0eSIsImwiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlIiwic2xpZGVFdmVudHMiLCJwcm8iLCJfcHJvZ3Jlc3MiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJnZXQiLCJzZXQiLCJtaXNjIiwiY2xhbXAwMSIsIndpZHRoIiwibm9kZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJvbkxvYWQiLCJpc1ZhbGlkIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfTU9WRSIsInRNIiwiaW5pdCIsInByb2dyZXNzIiwieCIsImdldExvY2F0aW9uIiwibyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiY2xhbXBmIiwibGVuZ3RoIiwiQ29tcG9uZW50IiwiRXZlbnRIYW5kbGVyIiwiZW1pdEV2ZW50cyIsIl9fZGVjb3JhdGUiLCJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJ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LENBQVY7O0VBQ0EyQixVQUFVLENBQUMsQ0FBQ3ZDLENBQUMsQ0FBQ0osRUFBRSxDQUFDNEIsSUFBSixDQUFGLENBQUQsRUFBZXBCLENBQUMsQ0FBQ1EsU0FBakIsRUFBNEIsS0FBNUIsRUFBbUMsS0FBSyxDQUF4QyxDQUFWOztFQUNBLE9BQU8yQixVQUFVLENBQUMsQ0FBQ3pDLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0F2Q08sQ0F1Q0xSLEVBQUUsQ0FBQ3dDLFNBdkNFLENBQVI7O0FBd0NBM0MsT0FBTyxXQUFQLEdBQWtCUyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG47XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBhID0gY2MuX2RlY29yYXRvcjtcbnZhciBzID0gYS5jY2NsYXNzO1xudmFyIGMgPSBhLnByb3BlcnR5O1xudmFyIGwgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5oYW5kbGUgPSBudWxsO1xuICAgICAgICBlLnNsaWRlRXZlbnRzID0gW107XG4gICAgICAgIGUucHJvID0gbnVsbDtcbiAgICAgICAgZS5fcHJvZ3Jlc3MgPSAwO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSwgXCJwcm9ncmVzc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9ncmVzcyA9IGNjLm1pc2MuY2xhbXAwMSh0KTtcbiAgICAgICAgICAgIHRoaXMucHJvLndpZHRoID0gdGhpcy5fcHJvZ3Jlc3MgKiB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgfSk7XG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhbmRsZSAmJiB0aGlzLmhhbmRsZS5pc1ZhbGlkICYmIHRoaXMuaGFuZGxlLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50TSwgdGhpcyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHQ7XG4gICAgICAgIHRoaXMuaGFuZGxlLm5vZGUueCA9IHRoaXMucHJvZ3Jlc3MgKiB0aGlzLm5vZGUud2lkdGg7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS50TSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdC5nZXRMb2NhdGlvbigpO1xuICAgICAgICB2YXIgbyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlKTtcbiAgICAgICAgdGhpcy5oYW5kbGUubm9kZS54ID0gY2MubWlzYy5jbGFtcGYoby54LCAwLCB0aGlzLm5vZGUud2lkdGgpO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gdGhpcy5oYW5kbGUubm9kZS54IC8gdGhpcy5ub2RlLndpZHRoO1xuICAgICAgICB0aGlzLnNsaWRlRXZlbnRzLmxlbmd0aCA+IDAgJiYgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKHRoaXMuc2xpZGVFdmVudHMsIHRoaXMpO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbYyhjYy5CdXR0b24pXSwgZS5wcm90b3R5cGUsIFwiaGFuZGxlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbYyhbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0pXSwgZS5wcm90b3R5cGUsIFwic2xpZGVFdmVudHNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtjKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwicHJvXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3NdLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBsO1xuIl19