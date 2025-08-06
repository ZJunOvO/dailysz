
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/swBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c4e0aUwodIo6AqBp46T8p1', 'swBtn');
// scripts/swBtn.js

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
    e.sprNode = null;
    e.flag = !0;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.u();
  };

  e.prototype.setState = function (t) {
    this.flag = t;
    this.u();
  };

  e.prototype.u = function () {
    null != this.sprNode && (this.sprNode.active = this.flag);
  };

  __decorate([c(cc.Node)], e.prototype, "sprNode", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3dCdG4uanMiXSwibmFtZXMiOlsibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiYSIsImNjIiwiX2RlY29yYXRvciIsInMiLCJjY2NsYXNzIiwiYyIsInByb3BlcnR5IiwibCIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzcHJOb2RlIiwiZmxhZyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsInN0YXJ0IiwidSIsInNldFN0YXRlIiwiYWN0aXZlIiwiX19kZWNvcmF0ZSIsIk5vZGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLE9BQUYsR0FBWSxJQUFaO0lBQ0FILENBQUMsQ0FBQ0ksSUFBRixHQUFTLENBQUMsQ0FBVjtJQUNBLE9BQU9KLENBQVA7RUFDSDs7RUFDREssU0FBUyxDQUFDTCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDTSxTQUFGLENBQVlDLEtBQVosR0FBb0IsWUFBWTtJQUM1QixLQUFLQyxDQUFMO0VBQ0gsQ0FGRDs7RUFHQVIsQ0FBQyxDQUFDTSxTQUFGLENBQVlHLFFBQVosR0FBdUIsVUFBVVYsQ0FBVixFQUFhO0lBQ2hDLEtBQUtLLElBQUwsR0FBWUwsQ0FBWjtJQUNBLEtBQUtTLENBQUw7RUFDSCxDQUhEOztFQUlBUixDQUFDLENBQUNNLFNBQUYsQ0FBWUUsQ0FBWixHQUFnQixZQUFZO0lBQ3hCLFFBQVEsS0FBS0wsT0FBYixLQUF5QixLQUFLQSxPQUFMLENBQWFPLE1BQWIsR0FBc0IsS0FBS04sSUFBcEQ7RUFDSCxDQUZEOztFQUdBTyxVQUFVLENBQUMsQ0FBQ2YsQ0FBQyxDQUFDSixFQUFFLENBQUNvQixJQUFKLENBQUYsQ0FBRCxFQUFlWixDQUFDLENBQUNNLFNBQWpCLEVBQTRCLFNBQTVCLEVBQXVDLEtBQUssQ0FBNUMsQ0FBVjs7RUFDQSxPQUFPSyxVQUFVLENBQUMsQ0FBQ2pCLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0FwQk8sQ0FvQkxSLEVBQUUsQ0FBQ3FCLFNBcEJFLENBQVI7O0FBcUJBeEIsT0FBTyxXQUFQLEdBQWtCUyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG47XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBhID0gY2MuX2RlY29yYXRvcjtcbnZhciBzID0gYS5jY2NsYXNzO1xudmFyIGMgPSBhLnByb3BlcnR5O1xudmFyIGwgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5zcHJOb2RlID0gbnVsbDtcbiAgICAgICAgZS5mbGFnID0gITA7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudSgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0aGlzLmZsYWcgPSB0O1xuICAgICAgICB0aGlzLnUoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG51bGwgIT0gdGhpcy5zcHJOb2RlICYmICh0aGlzLnNwck5vZGUuYWN0aXZlID0gdGhpcy5mbGFnKTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW2MoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJzcHJOb2RlXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3NdLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBsO1xuIl19