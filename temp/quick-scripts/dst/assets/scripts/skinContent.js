
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/skinContent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25d4cZd7RtM460Zomkgx+9w', 'skinContent');
// scripts/skinContent.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _skinItemBase = require("skinItemBase");

var s = cc._decorator;
var c = s.ccclass;
var l = (s.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isInit = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.initContent = function (t) {
    if (!this.isInit) {
      for (var e = this.node.children[0], o = t.itemData, n = t.skinId, i = 0; i < o.length; i++) {
        var r = null;
        this.node.childrenCount > i ? r = this.node.children[i] : (r = cc.instantiate(e), this.node.addChild(r));
        r.getComponent(_skinItemBase["default"]).initItem(o[i], n);
      }

      this.isInit = !0;
    }
  };

  return __decorate([c], e);
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2tpbkNvbnRlbnQuanMiXSwibmFtZXMiOlsibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX3NraW5JdGVtQmFzZSIsInJlcXVpcmUiLCJzIiwiY2MiLCJfZGVjb3JhdG9yIiwiYyIsImNjY2xhc3MiLCJsIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaXNJbml0IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdENvbnRlbnQiLCJub2RlIiwiY2hpbGRyZW4iLCJvIiwiaXRlbURhdGEiLCJza2luSWQiLCJpIiwibGVuZ3RoIiwiciIsImNoaWxkcmVuQ291bnQiLCJpbnN0YW50aWF0ZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwiaW5pdEl0ZW0iLCJfX2RlY29yYXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBLElBQUlDLGFBQWEsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBM0I7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxNQUFGLEdBQVcsQ0FBQyxDQUFaO0lBQ0EsT0FBT0gsQ0FBUDtFQUNIOztFQUNESSxTQUFTLENBQUNKLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNLLFNBQUYsQ0FBWUMsV0FBWixHQUEwQixVQUFVUCxDQUFWLEVBQWE7SUFDbkMsSUFBSSxDQUFDLEtBQUtJLE1BQVYsRUFBa0I7TUFDZCxLQUFLLElBQUlILENBQUMsR0FBRyxLQUFLTyxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsQ0FBUixFQUErQkMsQ0FBQyxHQUFHVixDQUFDLENBQUNXLFFBQXJDLEVBQStDekIsQ0FBQyxHQUFHYyxDQUFDLENBQUNZLE1BQXJELEVBQTZEQyxDQUFDLEdBQUcsQ0FBdEUsRUFBeUVBLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxNQUEvRSxFQUF1RkQsQ0FBQyxFQUF4RixFQUE0RjtRQUN4RixJQUFJRSxDQUFDLEdBQUcsSUFBUjtRQUNBLEtBQUtQLElBQUwsQ0FBVVEsYUFBVixHQUEwQkgsQ0FBMUIsR0FDT0UsQ0FBQyxHQUFHLEtBQUtQLElBQUwsQ0FBVUMsUUFBVixDQUFtQkksQ0FBbkIsQ0FEWCxJQUVRRSxDQUFDLEdBQUdyQixFQUFFLENBQUN1QixXQUFILENBQWVoQixDQUFmLENBQUwsRUFBeUIsS0FBS08sSUFBTCxDQUFVVSxRQUFWLENBQW1CSCxDQUFuQixDQUZoQztRQUdBQSxDQUFDLENBQUNJLFlBQUYsQ0FBZTVCLGFBQWEsV0FBNUIsRUFBc0M2QixRQUF0QyxDQUErQ1YsQ0FBQyxDQUFDRyxDQUFELENBQWhELEVBQXFEM0IsQ0FBckQ7TUFDSDs7TUFDRCxLQUFLa0IsTUFBTCxHQUFjLENBQUMsQ0FBZjtJQUNIO0VBQ0osQ0FYRDs7RUFZQSxPQUFPaUIsVUFBVSxDQUFDLENBQUN6QixDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBcEJELENBb0JHUCxFQUFFLENBQUM0QixTQXBCTixDQUZDLENBQUw7QUF1QkFqQyxPQUFPLFdBQVAsR0FBa0JTLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIF9za2luSXRlbUJhc2UgPSByZXF1aXJlKFwic2tpbkl0ZW1CYXNlXCIpO1xudmFyIHMgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGMgPSBzLmNjY2xhc3M7XG52YXIgbCA9XG4gICAgKHMucHJvcGVydHksXG4gICAgKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgICAgIGUuaXNJbml0ID0gITE7XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLmluaXRDb250ZW50ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBlID0gdGhpcy5ub2RlLmNoaWxkcmVuWzBdLCBvID0gdC5pdGVtRGF0YSwgbiA9IHQuc2tpbklkLCBpID0gMDsgaSA8IG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCA+IGlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKHIgPSB0aGlzLm5vZGUuY2hpbGRyZW5baV0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICgociA9IGNjLmluc3RhbnRpYXRlKGUpKSwgdGhpcy5ub2RlLmFkZENoaWxkKHIpKTtcbiAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoX3NraW5JdGVtQmFzZS5kZWZhdWx0KS5pbml0SXRlbShvW2ldLCBuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0luaXQgPSAhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2NdLCBlKTtcbiAgICB9KShjYy5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGw7XG4iXX0=