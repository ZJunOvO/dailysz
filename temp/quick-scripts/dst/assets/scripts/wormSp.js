
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/wormSp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d0d4CPN3hK1I6Lx4gDVS6P', 'wormSp');
// scripts/wormSp.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _com = require("com");

var s = cc._decorator;
var c = s.ccclass;
var l = s.property;

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.spine = null;
    e.countLbl = null;
    e.idles = ["", "2", "3"];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.spine.setCompleteListener(this._playIdle.bind(this));

    this._playIdle();
  };

  e.prototype.init = function (t) {
    this.curCount = 0;
    this.maxCount = t;
    this.countLbl.string = this.curCount + "/" + this.maxCount;
  };

  e.prototype.addCount = function () {
    var t = this.curCount = this.curCount + 1;
    t == this.maxCount && this.playDone();
    this.countLbl.string = t + "/" + this.maxCount;
  };

  e.prototype._playIdle = function () {
    this.isDone || (this.spine.animation = "idle" + this.idles[_com["default"].ins.rad(0, 2)]);
  };

  e.prototype.playDone = function () {
    this.isDone = !0;
    var t = this.spine;
    t.loop = !1;
    t.animation = "xiaoshi";
  };

  __decorate([l(sp.Skeleton)], e.prototype, "spine", void 0);

  __decorate([l(cc.Label)], e.prototype, "countLbl", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcd29ybVNwLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9jb20iLCJyZXF1aXJlIiwicyIsImNjIiwiX2RlY29yYXRvciIsImMiLCJjY2NsYXNzIiwibCIsInByb3BlcnR5IiwidSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzcGluZSIsImNvdW50TGJsIiwiaWRsZXMiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJzZXRDb21wbGV0ZUxpc3RlbmVyIiwiX3BsYXlJZGxlIiwiYmluZCIsImluaXQiLCJjdXJDb3VudCIsIm1heENvdW50Iiwic3RyaW5nIiwiYWRkQ291bnQiLCJwbGF5RG9uZSIsImlzRG9uZSIsImFuaW1hdGlvbiIsImlucyIsInJhZCIsImxvb3AiLCJfX2RlY29yYXRlIiwic3AiLCJTa2VsZXRvbiIsIkxhYmVsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBLElBQUlDLElBQUksR0FBR0MsT0FBTyxDQUFDLEtBQUQsQ0FBbEI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxLQUFGLEdBQVUsSUFBVjtJQUNBSCxDQUFDLENBQUNJLFFBQUYsR0FBYSxJQUFiO0lBQ0FKLENBQUMsQ0FBQ0ssS0FBRixHQUFVLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLENBQVY7SUFDQSxPQUFPTCxDQUFQO0VBQ0g7O0VBQ0RNLFNBQVMsQ0FBQ04sQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ08sU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVk7SUFDN0IsS0FBS0wsS0FBTCxDQUFXTSxtQkFBWCxDQUErQixLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBL0I7O0lBQ0EsS0FBS0QsU0FBTDtFQUNILENBSEQ7O0VBSUFWLENBQUMsQ0FBQ08sU0FBRixDQUFZSyxJQUFaLEdBQW1CLFVBQVViLENBQVYsRUFBYTtJQUM1QixLQUFLYyxRQUFMLEdBQWdCLENBQWhCO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQmYsQ0FBaEI7SUFDQSxLQUFLSyxRQUFMLENBQWNXLE1BQWQsR0FBdUIsS0FBS0YsUUFBTCxHQUFnQixHQUFoQixHQUFzQixLQUFLQyxRQUFsRDtFQUNILENBSkQ7O0VBS0FkLENBQUMsQ0FBQ08sU0FBRixDQUFZUyxRQUFaLEdBQXVCLFlBQVk7SUFDL0IsSUFBSWpCLENBQUMsR0FBSSxLQUFLYyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsR0FBZ0IsQ0FBekM7SUFDQWQsQ0FBQyxJQUFJLEtBQUtlLFFBQVYsSUFBc0IsS0FBS0csUUFBTCxFQUF0QjtJQUNBLEtBQUtiLFFBQUwsQ0FBY1csTUFBZCxHQUF1QmhCLENBQUMsR0FBRyxHQUFKLEdBQVUsS0FBS2UsUUFBdEM7RUFDSCxDQUpEOztFQUtBZCxDQUFDLENBQUNPLFNBQUYsQ0FBWUcsU0FBWixHQUF3QixZQUFZO0lBQ2hDLEtBQUtRLE1BQUwsS0FBZ0IsS0FBS2YsS0FBTCxDQUFXZ0IsU0FBWCxHQUF1QixTQUFTLEtBQUtkLEtBQUwsQ0FBV2hCLElBQUksV0FBSixDQUFhK0IsR0FBYixDQUFpQkMsR0FBakIsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBWCxDQUFoRDtFQUNILENBRkQ7O0VBR0FyQixDQUFDLENBQUNPLFNBQUYsQ0FBWVUsUUFBWixHQUF1QixZQUFZO0lBQy9CLEtBQUtDLE1BQUwsR0FBYyxDQUFDLENBQWY7SUFDQSxJQUFJbkIsQ0FBQyxHQUFHLEtBQUtJLEtBQWI7SUFDQUosQ0FBQyxDQUFDdUIsSUFBRixHQUFTLENBQUMsQ0FBVjtJQUNBdkIsQ0FBQyxDQUFDb0IsU0FBRixHQUFjLFNBQWQ7RUFDSCxDQUxEOztFQU1BSSxVQUFVLENBQUMsQ0FBQzNCLENBQUMsQ0FBQzRCLEVBQUUsQ0FBQ0MsUUFBSixDQUFGLENBQUQsRUFBbUJ6QixDQUFDLENBQUNPLFNBQXJCLEVBQWdDLE9BQWhDLEVBQXlDLEtBQUssQ0FBOUMsQ0FBVjs7RUFDQWdCLFVBQVUsQ0FBQyxDQUFDM0IsQ0FBQyxDQUFDSixFQUFFLENBQUNrQyxLQUFKLENBQUYsQ0FBRCxFQUFnQjFCLENBQUMsQ0FBQ08sU0FBbEIsRUFBNkIsVUFBN0IsRUFBeUMsS0FBSyxDQUE5QyxDQUFWOztFQUNBLE9BQU9nQixVQUFVLENBQUMsQ0FBQzdCLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0FuQ08sQ0FtQ0xSLEVBQUUsQ0FBQ21DLFNBbkNFLENBQVI7O0FBb0NBeEMsT0FBTyxXQUFQLEdBQWtCVyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG47XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBfY29tID0gcmVxdWlyZShcImNvbVwiKTtcbnZhciBzID0gY2MuX2RlY29yYXRvcjtcbnZhciBjID0gcy5jY2NsYXNzO1xudmFyIGwgPSBzLnByb3BlcnR5O1xudmFyIHUgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5zcGluZSA9IG51bGw7XG4gICAgICAgIGUuY291bnRMYmwgPSBudWxsO1xuICAgICAgICBlLmlkbGVzID0gW1wiXCIsIFwiMlwiLCBcIjNcIl07XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNwaW5lLnNldENvbXBsZXRlTGlzdGVuZXIodGhpcy5fcGxheUlkbGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX3BsYXlJZGxlKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdGhpcy5jdXJDb3VudCA9IDA7XG4gICAgICAgIHRoaXMubWF4Q291bnQgPSB0O1xuICAgICAgICB0aGlzLmNvdW50TGJsLnN0cmluZyA9IHRoaXMuY3VyQ291bnQgKyBcIi9cIiArIHRoaXMubWF4Q291bnQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5hZGRDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSAodGhpcy5jdXJDb3VudCA9IHRoaXMuY3VyQ291bnQgKyAxKTtcbiAgICAgICAgdCA9PSB0aGlzLm1heENvdW50ICYmIHRoaXMucGxheURvbmUoKTtcbiAgICAgICAgdGhpcy5jb3VudExibC5zdHJpbmcgPSB0ICsgXCIvXCIgKyB0aGlzLm1heENvdW50O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuX3BsYXlJZGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzRG9uZSB8fCAodGhpcy5zcGluZS5hbmltYXRpb24gPSBcImlkbGVcIiArIHRoaXMuaWRsZXNbX2NvbS5kZWZhdWx0Lmlucy5yYWQoMCwgMildKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnBsYXlEb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzRG9uZSA9ICEwO1xuICAgICAgICB2YXIgdCA9IHRoaXMuc3BpbmU7XG4gICAgICAgIHQubG9vcCA9ICExO1xuICAgICAgICB0LmFuaW1hdGlvbiA9IFwieGlhb3NoaVwiO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbbChzcC5Ta2VsZXRvbildLCBlLnByb3RvdHlwZSwgXCJzcGluZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW2woY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwiY291bnRMYmxcIiwgdm9pZCAwKTtcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbY10sIGUpO1xufSkoY2MuQ29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHU7XG4iXX0=