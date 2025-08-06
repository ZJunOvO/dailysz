
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/random_notice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1568XYcd5KxbBwNiWbgXvK', 'random_notice');
// scripts/random_notice.js

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
    e.tmpV3 = new cc.Vec3();
    return e;
  }

  __extends(e, t);

  e.prototype.init = function () {
    this.preV3 = this.node.position;
    this.isMoveing = !0;
  };

  e.prototype.update = function () {
    var t = this.preV3;
    var e = this.node.position;
    var o = this.tmpV3;
    cc.Vec3.subtract(o, e, t);
    t.set(e);
    var n = cc.Vec3.angle(o, cc.Vec3.RIGHT);
    var i = cc.misc.radiansToDegrees(n);
    this.node.angle = i - 90;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccmFuZG9tX25vdGljZS5qcyJdLCJuYW1lcyI6WyJuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJhIiwiY2MiLCJfZGVjb3JhdG9yIiwicyIsImNjY2xhc3MiLCJjIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwidG1wVjMiLCJWZWMzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdCIsInByZVYzIiwibm9kZSIsInBvc2l0aW9uIiwiaXNNb3ZlaW5nIiwidXBkYXRlIiwibyIsInN1YnRyYWN0Iiwic2V0IiwiYW5nbGUiLCJSSUdIVCIsImkiLCJtaXNjIiwicmFkaWFuc1RvRGVncmVlcyIsIl9fZGVjb3JhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxJQUNBTCxDQUFDLENBQUNNLFFBQUYsRUFDQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLEtBQUYsR0FBVSxJQUFJVixFQUFFLENBQUNXLElBQVAsRUFBVjtJQUNBLE9BQU9KLENBQVA7RUFDSDs7RUFDREssU0FBUyxDQUFDTCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDTSxTQUFGLENBQVlDLElBQVosR0FBbUIsWUFBWTtJQUMzQixLQUFLQyxLQUFMLEdBQWEsS0FBS0MsSUFBTCxDQUFVQyxRQUF2QjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsQ0FBQyxDQUFsQjtFQUNILENBSEQ7O0VBSUFYLENBQUMsQ0FBQ00sU0FBRixDQUFZTSxNQUFaLEdBQXFCLFlBQVk7SUFDN0IsSUFBSWIsQ0FBQyxHQUFHLEtBQUtTLEtBQWI7SUFDQSxJQUFJUixDQUFDLEdBQUcsS0FBS1MsSUFBTCxDQUFVQyxRQUFsQjtJQUNBLElBQUlHLENBQUMsR0FBRyxLQUFLVixLQUFiO0lBQ0FWLEVBQUUsQ0FBQ1csSUFBSCxDQUFRVSxRQUFSLENBQWlCRCxDQUFqQixFQUFvQmIsQ0FBcEIsRUFBdUJELENBQXZCO0lBQ0FBLENBQUMsQ0FBQ2dCLEdBQUYsQ0FBTWYsQ0FBTjtJQUNBLElBQUliLENBQUMsR0FBR00sRUFBRSxDQUFDVyxJQUFILENBQVFZLEtBQVIsQ0FBY0gsQ0FBZCxFQUFpQnBCLEVBQUUsQ0FBQ1csSUFBSCxDQUFRYSxLQUF6QixDQUFSO0lBQ0EsSUFBSUMsQ0FBQyxHQUFHekIsRUFBRSxDQUFDMEIsSUFBSCxDQUFRQyxnQkFBUixDQUF5QmpDLENBQXpCLENBQVI7SUFDQSxLQUFLc0IsSUFBTCxDQUFVTyxLQUFWLEdBQWtCRSxDQUFDLEdBQUcsRUFBdEI7RUFDSCxDQVREOztFQVVBLE9BQU9HLFVBQVUsQ0FBQyxDQUFDMUIsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQXRCRCxDQXNCR1AsRUFBRSxDQUFDNkIsU0F0Qk4sQ0FGQyxDQUFMO0FBeUJBaEMsT0FBTyxXQUFQLEdBQWtCTyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG47XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBhID0gY2MuX2RlY29yYXRvcjtcbnZhciBzID0gYS5jY2NsYXNzO1xudmFyIGMgPVxuICAgIChhLnByb3BlcnR5LFxuICAgIChmdW5jdGlvbiAodCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgICAgICBlLnRtcFYzID0gbmV3IGNjLlZlYzMoKTtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICAgICAgZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucHJlVjMgPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgICAgICAgICB0aGlzLmlzTW92ZWluZyA9ICEwO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMucHJlVjM7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy50bXBWMztcbiAgICAgICAgICAgIGNjLlZlYzMuc3VidHJhY3QobywgZSwgdCk7XG4gICAgICAgICAgICB0LnNldChlKTtcbiAgICAgICAgICAgIHZhciBuID0gY2MuVmVjMy5hbmdsZShvLCBjYy5WZWMzLlJJR0hUKTtcbiAgICAgICAgICAgIHZhciBpID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKG4pO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gaSAtIDkwO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbc10sIGUpO1xuICAgIH0pKGNjLkNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gYztcbiJdfQ==