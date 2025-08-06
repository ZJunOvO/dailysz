
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PopupLoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e230uEA9dEv6CDagtCkl4n', 'PopupLoading');
// scripts/PopupLoading.js

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
    e.loadingIcon = null;
    e.loadingTxt = null;
    e.speed = 0.5;
    e.bgNode = null;
    e.charPoint = [".", "..", "..."];
    e.charIndex = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.bgNode.height = this.node.height = cc.winSize.height;
  };

  e.prototype.onEnable = function () {
    this.start();
  };

  e.prototype.onDisable = function () {
    cc.Tween.stopAllByTarget(this.loadingIcon);
    this.unschedule(this.txtAppend);
  };

  e.prototype.onShow = function () {
    this.loadingIcon.angle = 0;
    var t = cc.tween().by(0.6, {
      angle: -90
    }).by(0.6, {
      angle: -180
    }).by(0.6, {
      angle: -90
    });
    cc.tween(this.loadingIcon).repeatForever(t).start();
  };

  e.prototype.onHide = function () {};

  e.prototype.start = function () {
    this.charIndex = 0;
    this.onShow();
    this.unschedule(this.txtAppend);
    this.schedule(this.txtAppend, this.speed, cc.macro.REPEAT_FOREVER);
  };

  e.prototype.txtAppend = function () {
    this.loadingTxt.string = "loading" + this.charPoint[this.charIndex];
    this.charIndex++;
    this.charIndex > this.charPoint.length - 1 && (this.charIndex = 0);
  };

  e.prototype.update = function () {};

  __decorate([c(cc.Node)], e.prototype, "loadingIcon", void 0);

  __decorate([c(cc.Label)], e.prototype, "loadingTxt", void 0);

  __decorate([c(cc.Integer)], e.prototype, "speed", void 0);

  __decorate([c(cc.Node)], e.prototype, "bgNode", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUG9wdXBMb2FkaW5nLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImEiLCJjYyIsIl9kZWNvcmF0b3IiLCJzIiwiY2NjbGFzcyIsImMiLCJwcm9wZXJ0eSIsImwiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibG9hZGluZ0ljb24iLCJsb2FkaW5nVHh0Iiwic3BlZWQiLCJiZ05vZGUiLCJjaGFyUG9pbnQiLCJjaGFySW5kZXgiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJoZWlnaHQiLCJub2RlIiwid2luU2l6ZSIsIm9uRW5hYmxlIiwic3RhcnQiLCJvbkRpc2FibGUiLCJUd2VlbiIsInN0b3BBbGxCeVRhcmdldCIsInVuc2NoZWR1bGUiLCJ0eHRBcHBlbmQiLCJvblNob3ciLCJhbmdsZSIsInR3ZWVuIiwiYnkiLCJyZXBlYXRGb3JldmVyIiwib25IaWRlIiwic2NoZWR1bGUiLCJtYWNybyIsIlJFUEVBVF9GT1JFVkVSIiwic3RyaW5nIiwibGVuZ3RoIiwidXBkYXRlIiwiX19kZWNvcmF0ZSIsIk5vZGUiLCJMYWJlbCIsIkludGVnZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdB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QTRCLGFBQTVCLEVBQTJDLEtBQUssQ0FBaEQsQ0FBVjs7RUFDQXdCLFVBQVUsQ0FBQyxDQUFDdEMsQ0FBQyxDQUFDSixFQUFFLENBQUM0QyxLQUFKLENBQUYsQ0FBRCxFQUFnQnBDLENBQUMsQ0FBQ1UsU0FBbEIsRUFBNkIsWUFBN0IsRUFBMkMsS0FBSyxDQUFoRCxDQUFWOztFQUNBd0IsVUFBVSxDQUFDLENBQUN0QyxDQUFDLENBQUNKLEVBQUUsQ0FBQzZDLE9BQUosQ0FBRixDQUFELEVBQWtCckMsQ0FBQyxDQUFDVSxTQUFwQixFQUErQixPQUEvQixFQUF3QyxLQUFLLENBQTdDLENBQVY7O0VBQ0F3QixVQUFVLENBQUMsQ0FBQ3RDLENBQUMsQ0FBQ0osRUFBRSxDQUFDMkMsSUFBSixDQUFGLENBQUQsRUFBZW5DLENBQUMsQ0FBQ1UsU0FBakIsRUFBNEIsUUFBNUIsRUFBc0MsS0FBSyxDQUEzQyxDQUFWOztFQUNBLE9BQU93QixVQUFVLENBQUMsQ0FBQ3hDLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0E3Q08sQ0E2Q0xSLEVBQUUsQ0FBQzhDLFNBN0NFLENBQVI7O0FBOENBakQsT0FBTyxXQUFQLEdBQWtCUyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG47XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBhID0gY2MuX2RlY29yYXRvcjtcbnZhciBzID0gYS5jY2NsYXNzO1xudmFyIGMgPSBhLnByb3BlcnR5O1xudmFyIGwgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5sb2FkaW5nSWNvbiA9IG51bGw7XG4gICAgICAgIGUubG9hZGluZ1R4dCA9IG51bGw7XG4gICAgICAgIGUuc3BlZWQgPSAwLjU7XG4gICAgICAgIGUuYmdOb2RlID0gbnVsbDtcbiAgICAgICAgZS5jaGFyUG9pbnQgPSBbXCIuXCIsIFwiLi5cIiwgXCIuLi5cIl07XG4gICAgICAgIGUuY2hhckluZGV4ID0gMDtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYmdOb2RlLmhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uRW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmxvYWRpbmdJY29uKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudHh0QXBwZW5kKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uU2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nSWNvbi5hbmdsZSA9IDA7XG4gICAgICAgIHZhciB0ID0gY2MudHdlZW4oKS5ieSgwLjYsIHthbmdsZTogLTkwfSkuYnkoMC42LCB7YW5nbGU6IC0xODB9KS5ieSgwLjYsIHthbmdsZTogLTkwfSk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubG9hZGluZ0ljb24pLnJlcGVhdEZvcmV2ZXIodCkuc3RhcnQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uSGlkZSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNoYXJJbmRleCA9IDA7XG4gICAgICAgIHRoaXMub25TaG93KCk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnR4dEFwcGVuZCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50eHRBcHBlbmQsIHRoaXMuc3BlZWQsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnR4dEFwcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nVHh0LnN0cmluZyA9IFwibG9hZGluZ1wiICsgdGhpcy5jaGFyUG9pbnRbdGhpcy5jaGFySW5kZXhdO1xuICAgICAgICB0aGlzLmNoYXJJbmRleCsrO1xuICAgICAgICB0aGlzLmNoYXJJbmRleCA+IHRoaXMuY2hhclBvaW50Lmxlbmd0aCAtIDEgJiYgKHRoaXMuY2hhckluZGV4ID0gMCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBfX2RlY29yYXRlKFtjKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwibG9hZGluZ0ljb25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtjKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcImxvYWRpbmdUeHRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtjKGNjLkludGVnZXIpXSwgZS5wcm90b3R5cGUsIFwic3BlZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtjKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiYmdOb2RlXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3NdLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBsO1xuIl19