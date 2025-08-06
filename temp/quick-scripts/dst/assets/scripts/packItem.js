
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/packItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7abceAnT1dHcJZ6MEKrASAc', 'packItem');
// scripts/packItem.js

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
    e.spine = null;
    e.getSp = null;
    e.idx = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initItem = function (t, e) {
    this.spine.skeletonData = e;
    this.idx = t + 1;
    this.spine.animation = "box_" + this.idx + "_" + this.idx;
    this.getSp.active = !1;
  };

  e.prototype.setFinish = function (t) {
    var e = this.idx;
    this.spine.animation = t ? "box_" + e : "box_" + e + "_" + e;
  };

  e.prototype.setIsGet = function (t) {
    this.getSp.active = t;
    t && this.setFinish(!1);
  };

  __decorate([c(sp.Skeleton)], e.prototype, "spine", void 0);

  __decorate([c(cc.Node)], e.prototype, "getSp", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGFja0l0ZW0uanMiXSwibmFtZXMiOlsibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiYSIsImNjIiwiX2RlY29yYXRvciIsInMiLCJjY2NsYXNzIiwiYyIsInByb3BlcnR5IiwibCIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzcGluZSIsImdldFNwIiwiaWR4IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEl0ZW0iLCJza2VsZXRvbkRhdGEiLCJhbmltYXRpb24iLCJhY3RpdmUiLCJzZXRGaW5pc2giLCJzZXRJc0dldCIsIl9fZGVjb3JhdGUiLCJzcCIsIlNrZWxldG9uIiwiTm9kZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFBQ0MsS0FBSyxFQUFFLENBQUM7QUFBVCxDQUE3QztBQUNBLElBQUlDLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csS0FBRixHQUFVLElBQVY7SUFDQUgsQ0FBQyxDQUFDSSxLQUFGLEdBQVUsSUFBVjtJQUNBSixDQUFDLENBQUNLLEdBQUYsR0FBUSxDQUFSO0lBQ0EsT0FBT0wsQ0FBUDtFQUNIOztFQUNETSxTQUFTLENBQUNOLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNPLFNBQUYsQ0FBWUMsUUFBWixHQUF1QixVQUFVVCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDbkMsS0FBS0csS0FBTCxDQUFXTSxZQUFYLEdBQTBCVCxDQUExQjtJQUNBLEtBQUtLLEdBQUwsR0FBV04sQ0FBQyxHQUFHLENBQWY7SUFDQSxLQUFLSSxLQUFMLENBQVdPLFNBQVgsR0FBdUIsU0FBUyxLQUFLTCxHQUFkLEdBQW9CLEdBQXBCLEdBQTBCLEtBQUtBLEdBQXREO0lBQ0EsS0FBS0QsS0FBTCxDQUFXTyxNQUFYLEdBQW9CLENBQUMsQ0FBckI7RUFDSCxDQUxEOztFQU1BWCxDQUFDLENBQUNPLFNBQUYsQ0FBWUssU0FBWixHQUF3QixVQUFVYixDQUFWLEVBQWE7SUFDakMsSUFBSUMsQ0FBQyxHQUFHLEtBQUtLLEdBQWI7SUFDQSxLQUFLRixLQUFMLENBQVdPLFNBQVgsR0FBdUJYLENBQUMsR0FBRyxTQUFTQyxDQUFaLEdBQWdCLFNBQVNBLENBQVQsR0FBYSxHQUFiLEdBQW1CQSxDQUEzRDtFQUNILENBSEQ7O0VBSUFBLENBQUMsQ0FBQ08sU0FBRixDQUFZTSxRQUFaLEdBQXVCLFVBQVVkLENBQVYsRUFBYTtJQUNoQyxLQUFLSyxLQUFMLENBQVdPLE1BQVgsR0FBb0JaLENBQXBCO0lBQ0FBLENBQUMsSUFBSSxLQUFLYSxTQUFMLENBQWUsQ0FBQyxDQUFoQixDQUFMO0VBQ0gsQ0FIRDs7RUFJQUUsVUFBVSxDQUFDLENBQUNsQixDQUFDLENBQUNtQixFQUFFLENBQUNDLFFBQUosQ0FBRixDQUFELEVBQW1CaEIsQ0FBQyxDQUFDTyxTQUFyQixFQUFnQyxPQUFoQyxFQUF5QyxLQUFLLENBQTlDLENBQVY7O0VBQ0FPLFVBQVUsQ0FBQyxDQUFDbEIsQ0FBQyxDQUFDSixFQUFFLENBQUN5QixJQUFKLENBQUYsQ0FBRCxFQUFlakIsQ0FBQyxDQUFDTyxTQUFqQixFQUE0QixPQUE1QixFQUFxQyxLQUFLLENBQTFDLENBQVY7O0VBQ0EsT0FBT08sVUFBVSxDQUFDLENBQUNwQixDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBMUJPLENBMEJMUixFQUFFLENBQUMwQixTQTFCRSxDQUFSOztBQTJCQTdCLE9BQU8sV0FBUCxHQUFrQlMsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBuO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6ICEwfSk7XG52YXIgYSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgcyA9IGEuY2NjbGFzcztcbnZhciBjID0gYS5wcm9wZXJ0eTtcbnZhciBsID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuc3BpbmUgPSBudWxsO1xuICAgICAgICBlLmdldFNwID0gbnVsbDtcbiAgICAgICAgZS5pZHggPSAwO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLmluaXRJdGVtID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdGhpcy5zcGluZS5za2VsZXRvbkRhdGEgPSBlO1xuICAgICAgICB0aGlzLmlkeCA9IHQgKyAxO1xuICAgICAgICB0aGlzLnNwaW5lLmFuaW1hdGlvbiA9IFwiYm94X1wiICsgdGhpcy5pZHggKyBcIl9cIiArIHRoaXMuaWR4O1xuICAgICAgICB0aGlzLmdldFNwLmFjdGl2ZSA9ICExO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0RmluaXNoID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmlkeDtcbiAgICAgICAgdGhpcy5zcGluZS5hbmltYXRpb24gPSB0ID8gXCJib3hfXCIgKyBlIDogXCJib3hfXCIgKyBlICsgXCJfXCIgKyBlO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0SXNHZXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0aGlzLmdldFNwLmFjdGl2ZSA9IHQ7XG4gICAgICAgIHQgJiYgdGhpcy5zZXRGaW5pc2goITEpO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbYyhzcC5Ta2VsZXRvbildLCBlLnByb3RvdHlwZSwgXCJzcGluZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW2MoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJnZXRTcFwiLCB2b2lkIDApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtzXSwgZSk7XG59KShjYy5Db21wb25lbnQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbDtcbiJdfQ==