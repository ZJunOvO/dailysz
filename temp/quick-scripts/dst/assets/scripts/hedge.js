
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/hedge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07d98niZe5NzrFQ7E0lWKMH', 'hedge');
// scripts/hedge.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var a = cc._decorator;
var s = a.ccclass;
var c = (a.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = this;
    this.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, function () {
      t.node.destroy();
    }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaGVkZ2UuanMiXSwibmFtZXMiOlsibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiYSIsImNjIiwiX2RlY29yYXRvciIsInMiLCJjY2NsYXNzIiwiYyIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsImdldENvbXBvbmVudCIsIkFuaW1hdGlvbiIsIm9uIiwiRXZlbnRUeXBlIiwiRklOSVNIRUQiLCJub2RlIiwiZGVzdHJveSIsIl9fZGVjb3JhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxJQUNBTCxDQUFDLENBQUNNLFFBQUYsRUFDQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxPQUFRLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBbkQ7RUFDSDs7RUFDREMsU0FBUyxDQUFDSCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSSxTQUFGLENBQVlDLE1BQVosR0FBcUIsWUFBWTtJQUM3QixJQUFJTixDQUFDLEdBQUcsSUFBUjtJQUNBLEtBQUtPLFlBQUwsQ0FBa0JiLEVBQUUsQ0FBQ2MsU0FBckIsRUFBZ0NDLEVBQWhDLENBQ0lmLEVBQUUsQ0FBQ2MsU0FBSCxDQUFhRSxTQUFiLENBQXVCQyxRQUQzQixFQUVJLFlBQVk7TUFDUlgsQ0FBQyxDQUFDWSxJQUFGLENBQU9DLE9BQVA7SUFDSCxDQUpMLEVBS0ksSUFMSjtFQU9ILENBVEQ7O0VBVUEsT0FBT0MsVUFBVSxDQUFDLENBQUNsQixDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBaEJELENBZ0JHUCxFQUFFLENBQUNxQixTQWhCTixDQUZDLENBQUw7QUFtQkF4QixPQUFPLFdBQVAsR0FBa0JPLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIGEgPSBjYy5fZGVjb3JhdG9yO1xudmFyIHMgPSBhLmNjY2xhc3M7XG52YXIgYyA9XG4gICAgKGEucHJvcGVydHksXG4gICAgKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICAgICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbihcbiAgICAgICAgICAgICAgICBjYy5BbmltYXRpb24uRXZlbnRUeXBlLkZJTklTSEVELFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtzXSwgZSk7XG4gICAgfSkoY2MuQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjO1xuIl19