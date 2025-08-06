
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/loadingAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d72c1FxE5EP6uGCDaZ+H5L', 'loadingAni');
// scripts/loadingAni.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var a;
var s = cc._decorator;
var c = s.ccclass;
var l = s.property;

(function (t) {
  t.to = "loadingTo";
  t.back = "loadingBack";
})(a || (a = {}));

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.bg = null;
    e.ani = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.ani.on(cc.Animation.EventType.FINISHED, this.playEnd, this);
  };

  e.prototype.playEnd = function (t, e) {
    var o = this;
    if (e.name == a.to) cc.director.loadScene(this.newRoot, function () {
      o.playBack();
      o.cb && o.cb();
    });else {
      var n = this.node;
      cc.game.removePersistRootNode(n);
      n.destroy();
    }
  };

  e.prototype.playTo = function (t, e, o, n) {
    this.bg.setContentSize(t, e);
    this.newRoot = o;
    this.cb = n;
    this.ani.play(a.to);
  };

  e.prototype.playBack = function () {
    this.ani.play(a.back);
  };

  __decorate([l(cc.Node)], e.prototype, "bg", void 0);

  __decorate([l(cc.Animation)], e.prototype, "ani", void 0);

  return __decorate([c], e);
}(cc.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbG9hZGluZ0FuaS5qcyJdLCJuYW1lcyI6WyJuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJhIiwicyIsImNjIiwiX2RlY29yYXRvciIsImMiLCJjY2NsYXNzIiwibCIsInByb3BlcnR5IiwidCIsInRvIiwiYmFjayIsInUiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJiZyIsImFuaSIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsIm9uIiwiQW5pbWF0aW9uIiwiRXZlbnRUeXBlIiwiRklOSVNIRUQiLCJwbGF5RW5kIiwibyIsIm5hbWUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm5ld1Jvb3QiLCJwbGF5QmFjayIsImNiIiwibm9kZSIsImdhbWUiLCJyZW1vdmVQZXJzaXN0Um9vdE5vZGUiLCJkZXN0cm95IiwicGxheVRvIiwic2V0Q29udGVudFNpemUiLCJwbGF5IiwiX19kZWNvcmF0ZSIsIk5vZGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7QUFDQSxJQUFJQyxDQUFKO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLENBQUMsVUFBVUMsQ0FBVixFQUFhO0VBQ1ZBLENBQUMsQ0FBQ0MsRUFBRixHQUFPLFdBQVA7RUFDQUQsQ0FBQyxDQUFDRSxJQUFGLEdBQVMsYUFBVDtBQUNILENBSEQsRUFHR1YsQ0FBQyxLQUFLQSxDQUFDLEdBQUcsRUFBVCxDQUhKOztBQUlBLElBQUlXLENBQUMsR0FBSSxVQUFVSCxDQUFWLEVBQWE7RUFDbEIsU0FBU0ksQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNKLENBQVQsSUFBY0EsQ0FBQyxDQUFDSyxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxFQUFGLEdBQU8sSUFBUDtJQUNBSCxDQUFDLENBQUNJLEdBQUYsR0FBUSxJQUFSO0lBQ0EsT0FBT0osQ0FBUDtFQUNIOztFQUNESyxTQUFTLENBQUNMLENBQUQsRUFBSUosQ0FBSixDQUFUOztFQUNBSSxDQUFDLENBQUNNLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixZQUFZO0lBQzdCLEtBQUtILEdBQUwsQ0FBU0ksRUFBVCxDQUFZbEIsRUFBRSxDQUFDbUIsU0FBSCxDQUFhQyxTQUFiLENBQXVCQyxRQUFuQyxFQUE2QyxLQUFLQyxPQUFsRCxFQUEyRCxJQUEzRDtFQUNILENBRkQ7O0VBR0FaLENBQUMsQ0FBQ00sU0FBRixDQUFZTSxPQUFaLEdBQXNCLFVBQVVoQixDQUFWLEVBQWFJLENBQWIsRUFBZ0I7SUFDbEMsSUFBSWEsQ0FBQyxHQUFHLElBQVI7SUFDQSxJQUFJYixDQUFDLENBQUNjLElBQUYsSUFBVTFCLENBQUMsQ0FBQ1MsRUFBaEIsRUFDSVAsRUFBRSxDQUFDeUIsUUFBSCxDQUFZQyxTQUFaLENBQXNCLEtBQUtDLE9BQTNCLEVBQW9DLFlBQVk7TUFDNUNKLENBQUMsQ0FBQ0ssUUFBRjtNQUNBTCxDQUFDLENBQUNNLEVBQUYsSUFBUU4sQ0FBQyxDQUFDTSxFQUFGLEVBQVI7SUFDSCxDQUhELEVBREosS0FLSztNQUNELElBQUlwQyxDQUFDLEdBQUcsS0FBS3FDLElBQWI7TUFDQTlCLEVBQUUsQ0FBQytCLElBQUgsQ0FBUUMscUJBQVIsQ0FBOEJ2QyxDQUE5QjtNQUNBQSxDQUFDLENBQUN3QyxPQUFGO0lBQ0g7RUFDSixDQVpEOztFQWFBdkIsQ0FBQyxDQUFDTSxTQUFGLENBQVlrQixNQUFaLEdBQXFCLFVBQVU1QixDQUFWLEVBQWFJLENBQWIsRUFBZ0JhLENBQWhCLEVBQW1COUIsQ0FBbkIsRUFBc0I7SUFDdkMsS0FBS29CLEVBQUwsQ0FBUXNCLGNBQVIsQ0FBdUI3QixDQUF2QixFQUEwQkksQ0FBMUI7SUFDQSxLQUFLaUIsT0FBTCxHQUFlSixDQUFmO0lBQ0EsS0FBS00sRUFBTCxHQUFVcEMsQ0FBVjtJQUNBLEtBQUtxQixHQUFMLENBQVNzQixJQUFULENBQWN0QyxDQUFDLENBQUNTLEVBQWhCO0VBQ0gsQ0FMRDs7RUFNQUcsQ0FBQyxDQUFDTSxTQUFGLENBQVlZLFFBQVosR0FBdUIsWUFBWTtJQUMvQixLQUFLZCxHQUFMLENBQVNzQixJQUFULENBQWN0QyxDQUFDLENBQUNVLElBQWhCO0VBQ0gsQ0FGRDs7RUFHQTZCLFVBQVUsQ0FBQyxDQUFDakMsQ0FBQyxDQUFDSixFQUFFLENBQUNzQyxJQUFKLENBQUYsQ0FBRCxFQUFlNUIsQ0FBQyxDQUFDTSxTQUFqQixFQUE0QixJQUE1QixFQUFrQyxLQUFLLENBQXZDLENBQVY7O0VBQ0FxQixVQUFVLENBQUMsQ0FBQ2pDLENBQUMsQ0FBQ0osRUFBRSxDQUFDbUIsU0FBSixDQUFGLENBQUQsRUFBb0JULENBQUMsQ0FBQ00sU0FBdEIsRUFBaUMsS0FBakMsRUFBd0MsS0FBSyxDQUE3QyxDQUFWOztFQUNBLE9BQU9xQixVQUFVLENBQUMsQ0FBQ25DLENBQUQsQ0FBRCxFQUFNUSxDQUFOLENBQWpCO0FBQ0gsQ0FwQ08sQ0FvQ0xWLEVBQUUsQ0FBQ3VDLFNBcENFLENBQVI7O0FBcUNBM0MsT0FBTyxXQUFQLEdBQWtCYSxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG47XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBhO1xudmFyIHMgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGMgPSBzLmNjY2xhc3M7XG52YXIgbCA9IHMucHJvcGVydHk7XG4oZnVuY3Rpb24gKHQpIHtcbiAgICB0LnRvID0gXCJsb2FkaW5nVG9cIjtcbiAgICB0LmJhY2sgPSBcImxvYWRpbmdCYWNrXCI7XG59KShhIHx8IChhID0ge30pKTtcbnZhciB1ID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuYmcgPSBudWxsO1xuICAgICAgICBlLmFuaSA9IG51bGw7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFuaS5vbihjYy5BbmltYXRpb24uRXZlbnRUeXBlLkZJTklTSEVELCB0aGlzLnBsYXlFbmQsIHRoaXMpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheUVuZCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgaWYgKGUubmFtZSA9PSBhLnRvKVxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMubmV3Um9vdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG8ucGxheUJhY2soKTtcbiAgICAgICAgICAgICAgICBvLmNiICYmIG8uY2IoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgY2MuZ2FtZS5yZW1vdmVQZXJzaXN0Um9vdE5vZGUobik7XG4gICAgICAgICAgICBuLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheVRvID0gZnVuY3Rpb24gKHQsIGUsIG8sIG4pIHtcbiAgICAgICAgdGhpcy5iZy5zZXRDb250ZW50U2l6ZSh0LCBlKTtcbiAgICAgICAgdGhpcy5uZXdSb290ID0gbztcbiAgICAgICAgdGhpcy5jYiA9IG47XG4gICAgICAgIHRoaXMuYW5pLnBsYXkoYS50byk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wbGF5QmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hbmkucGxheShhLmJhY2spO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbbChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImJnXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbbChjYy5BbmltYXRpb24pXSwgZS5wcm90b3R5cGUsIFwiYW5pXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2NdLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSB1O1xuIl19