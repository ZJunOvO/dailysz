
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui_privacy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a457crloztMaIIPhRnZ7Hh/', 'ui_privacy');
// scripts/ui_privacy.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _panelMgr = require("panelMgr");

var _baseUI = require("baseUI");

var c = cc._decorator;
var l = c.ccclass;
var u = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.btnService = null;
    e.btnPrivacy = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function () {
    var t = this.btnService.node;
    var e = this.btnPrivacy.node;
    t.active = e.active = !0;
    t.on(cc.Node.EventType.TOUCH_END, function () {
      return _panelMgr["default"].ins.open("ui/ui_info", {
        type: 1
      });
    }, this);
    e.on(cc.Node.EventType.TOUCH_END, function () {
      return _panelMgr["default"].ins.open("ui/ui_info", {
        type: 2
      });
    }, this);
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  __decorate([u(cc.Label)], e.prototype, "btnService", void 0);

  __decorate([u(cc.Label)], e.prototype, "btnPrivacy", void 0);

  return __decorate([l], e);
}(_baseUI["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlfcHJpdmFjeS5qcyJdLCJuYW1lcyI6WyJuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfcGFuZWxNZ3IiLCJyZXF1aXJlIiwiX2Jhc2VVSSIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJsIiwiY2NjbGFzcyIsInUiLCJwcm9wZXJ0eSIsInAiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnRuU2VydmljZSIsImJ0blByaXZhY3kiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0Iiwibm9kZSIsImFjdGl2ZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX0VORCIsImlucyIsIm9wZW4iLCJ0eXBlIiwiaGlkZVRoaXMiLCJoaWRlIiwiX19kZWNvcmF0ZSIsIkxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBLElBQUlDLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRCxPQUFPLENBQUMsUUFBRCxDQUFyQjs7QUFDQSxJQUFJRSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLFVBQUYsR0FBZSxJQUFmO0lBQ0FILENBQUMsQ0FBQ0ksVUFBRixHQUFlLElBQWY7SUFDQSxPQUFPSixDQUFQO0VBQ0g7O0VBQ0RLLFNBQVMsQ0FBQ0wsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ00sU0FBRixDQUFZQyxJQUFaLEdBQW1CLFlBQVk7SUFDM0IsSUFBSVIsQ0FBQyxHQUFHLEtBQUtJLFVBQUwsQ0FBZ0JLLElBQXhCO0lBQ0EsSUFBSVIsQ0FBQyxHQUFHLEtBQUtJLFVBQUwsQ0FBZ0JJLElBQXhCO0lBQ0FULENBQUMsQ0FBQ1UsTUFBRixHQUFXVCxDQUFDLENBQUNTLE1BQUYsR0FBVyxDQUFDLENBQXZCO0lBQ0FWLENBQUMsQ0FBQ1csRUFBRixDQUNJbEIsRUFBRSxDQUFDbUIsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxTQUR0QixFQUVJLFlBQVk7TUFDUixPQUFPekIsU0FBUyxXQUFULENBQWtCMEIsR0FBbEIsQ0FBc0JDLElBQXRCLENBQTJCLFlBQTNCLEVBQXlDO1FBQUNDLElBQUksRUFBRTtNQUFQLENBQXpDLENBQVA7SUFDSCxDQUpMLEVBS0ksSUFMSjtJQU9BaEIsQ0FBQyxDQUFDVSxFQUFGLENBQ0lsQixFQUFFLENBQUNtQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFNBRHRCLEVBRUksWUFBWTtNQUNSLE9BQU96QixTQUFTLFdBQVQsQ0FBa0IwQixHQUFsQixDQUFzQkMsSUFBdEIsQ0FBMkIsWUFBM0IsRUFBeUM7UUFBQ0MsSUFBSSxFQUFFO01BQVAsQ0FBekMsQ0FBUDtJQUNILENBSkwsRUFLSSxJQUxKO0VBT0gsQ0FsQkQ7O0VBbUJBaEIsQ0FBQyxDQUFDTSxTQUFGLENBQVlXLFFBQVosR0FBdUIsWUFBWTtJQUMvQixLQUFLQyxJQUFMO0VBQ0gsQ0FGRDs7RUFHQUMsVUFBVSxDQUFDLENBQUN2QixDQUFDLENBQUNKLEVBQUUsQ0FBQzRCLEtBQUosQ0FBRixDQUFELEVBQWdCcEIsQ0FBQyxDQUFDTSxTQUFsQixFQUE2QixZQUE3QixFQUEyQyxLQUFLLENBQWhELENBQVY7O0VBQ0FhLFVBQVUsQ0FBQyxDQUFDdkIsQ0FBQyxDQUFDSixFQUFFLENBQUM0QixLQUFKLENBQUYsQ0FBRCxFQUFnQnBCLENBQUMsQ0FBQ00sU0FBbEIsRUFBNkIsWUFBN0IsRUFBMkMsS0FBSyxDQUFoRCxDQUFWOztFQUNBLE9BQU9hLFVBQVUsQ0FBQyxDQUFDekIsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQWpDTyxDQWlDTFYsT0FBTyxXQWpDRixDQUFSOztBQWtDQUosT0FBTyxXQUFQLEdBQWtCWSxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG47XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBfcGFuZWxNZ3IgPSByZXF1aXJlKFwicGFuZWxNZ3JcIik7XG52YXIgX2Jhc2VVSSA9IHJlcXVpcmUoXCJiYXNlVUlcIik7XG52YXIgYyA9IGNjLl9kZWNvcmF0b3I7XG52YXIgbCA9IGMuY2NjbGFzcztcbnZhciB1ID0gYy5wcm9wZXJ0eTtcbnZhciBwID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuYnRuU2VydmljZSA9IG51bGw7XG4gICAgICAgIGUuYnRuUHJpdmFjeSA9IG51bGw7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmJ0blNlcnZpY2Uubm9kZTtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmJ0blByaXZhY3kubm9kZTtcbiAgICAgICAgdC5hY3RpdmUgPSBlLmFjdGl2ZSA9ICEwO1xuICAgICAgICB0Lm9uKFxuICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcGFuZWxNZ3IuZGVmYXVsdC5pbnMub3BlbihcInVpL3VpX2luZm9cIiwge3R5cGU6IDF9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICAgIGUub24oXG4gICAgICAgICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wYW5lbE1nci5kZWZhdWx0Lmlucy5vcGVuKFwidWkvdWlfaW5mb1wiLCB7dHlwZTogMn0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmhpZGVUaGlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW3UoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwiYnRuU2VydmljZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW3UoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwiYnRuUHJpdmFjeVwiLCB2b2lkIDApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtsXSwgZSk7XG59KShfYmFzZVVJLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcDtcbiJdfQ==