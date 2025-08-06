
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui_preReward.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1e17kl/lRDSpgVpOh23ktk', 'ui_preReward');
// scripts/ui_preReward.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _item = require("item");

var _baseUI = require("baseUI");

var c = cc._decorator;
var l = c.ccclass;
var u = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.itemsNode = null;
    e.itemPre = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    var e = this;
    t.itemDatas.forEach(function (t) {
      if (Number(t.value) > 0) {
        var o = cc.instantiate(e.itemPre);
        o.active = !0;
        o.parent = e.itemsNode;
        o.getComponent(_item["default"]).initByData(t.itemId, t.value);
      }
    });
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  e.prototype.getItem = function () {};

  __decorate([u(cc.Node)], e.prototype, "itemsNode", void 0);

  __decorate([u(cc.Node)], e.prototype, "itemPre", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlfcHJlUmV3YXJkLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9pdGVtIiwicmVxdWlyZSIsIl9iYXNlVUkiLCJjIiwiY2MiLCJfZGVjb3JhdG9yIiwibCIsImNjY2xhc3MiLCJ1IiwicHJvcGVydHkiLCJwIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIml0ZW1zTm9kZSIsIml0ZW1QcmUiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0IiwiaXRlbURhdGFzIiwiZm9yRWFjaCIsIk51bWJlciIsIm8iLCJpbnN0YW50aWF0ZSIsImFjdGl2ZSIsInBhcmVudCIsImdldENvbXBvbmVudCIsImluaXRCeURhdGEiLCJpdGVtSWQiLCJoaWRlVGhpcyIsImhpZGUiLCJnZXRJdGVtIiwiX19kZWNvcmF0ZSIsIk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7O0FBQ0EsSUFBSUMsS0FBSyxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFuQjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxRQUFELENBQXJCOztBQUNBLElBQUlFLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csU0FBRixHQUFjLElBQWQ7SUFDQUgsQ0FBQyxDQUFDSSxPQUFGLEdBQVksSUFBWjtJQUNBLE9BQU9KLENBQVA7RUFDSDs7RUFDREssU0FBUyxDQUFDTCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDTSxTQUFGLENBQVlDLElBQVosR0FBbUIsVUFBVVIsQ0FBVixFQUFhO0lBQzVCLElBQUlDLENBQUMsR0FBRyxJQUFSO0lBQ0FELENBQUMsQ0FBQ1MsU0FBRixDQUFZQyxPQUFaLENBQW9CLFVBQVVWLENBQVYsRUFBYTtNQUM3QixJQUFJVyxNQUFNLENBQUNYLENBQUMsQ0FBQ1osS0FBSCxDQUFOLEdBQWtCLENBQXRCLEVBQXlCO1FBQ3JCLElBQUl3QixDQUFDLEdBQUduQixFQUFFLENBQUNvQixXQUFILENBQWVaLENBQUMsQ0FBQ0ksT0FBakIsQ0FBUjtRQUNBTyxDQUFDLENBQUNFLE1BQUYsR0FBVyxDQUFDLENBQVo7UUFDQUYsQ0FBQyxDQUFDRyxNQUFGLEdBQVdkLENBQUMsQ0FBQ0csU0FBYjtRQUNBUSxDQUFDLENBQUNJLFlBQUYsQ0FBZTNCLEtBQUssV0FBcEIsRUFBOEI0QixVQUE5QixDQUF5Q2pCLENBQUMsQ0FBQ2tCLE1BQTNDLEVBQW1EbEIsQ0FBQyxDQUFDWixLQUFyRDtNQUNIO0lBQ0osQ0FQRDtFQVFILENBVkQ7O0VBV0FhLENBQUMsQ0FBQ00sU0FBRixDQUFZWSxRQUFaLEdBQXVCLFlBQVk7SUFDL0IsS0FBS0MsSUFBTDtFQUNILENBRkQ7O0VBR0FuQixDQUFDLENBQUNNLFNBQUYsQ0FBWWMsT0FBWixHQUFzQixZQUFZLENBQUUsQ0FBcEM7O0VBQ0FDLFVBQVUsQ0FBQyxDQUFDekIsQ0FBQyxDQUFDSixFQUFFLENBQUM4QixJQUFKLENBQUYsQ0FBRCxFQUFldEIsQ0FBQyxDQUFDTSxTQUFqQixFQUE0QixXQUE1QixFQUF5QyxLQUFLLENBQTlDLENBQVY7O0VBQ0FlLFVBQVUsQ0FBQyxDQUFDekIsQ0FBQyxDQUFDSixFQUFFLENBQUM4QixJQUFKLENBQUYsQ0FBRCxFQUFldEIsQ0FBQyxDQUFDTSxTQUFqQixFQUE0QixTQUE1QixFQUF1QyxLQUFLLENBQTVDLENBQVY7O0VBQ0EsT0FBT2UsVUFBVSxDQUFDLENBQUMzQixDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBMUJPLENBMEJMVixPQUFPLFdBMUJGLENBQVI7O0FBMkJBSixPQUFPLFdBQVAsR0FBa0JZLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIF9pdGVtID0gcmVxdWlyZShcIml0ZW1cIik7XG52YXIgX2Jhc2VVSSA9IHJlcXVpcmUoXCJiYXNlVUlcIik7XG52YXIgYyA9IGNjLl9kZWNvcmF0b3I7XG52YXIgbCA9IGMuY2NjbGFzcztcbnZhciB1ID0gYy5wcm9wZXJ0eTtcbnZhciBwID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuaXRlbXNOb2RlID0gbnVsbDtcbiAgICAgICAgZS5pdGVtUHJlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICB0Lml0ZW1EYXRhcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyKHQudmFsdWUpID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gY2MuaW5zdGFudGlhdGUoZS5pdGVtUHJlKTtcbiAgICAgICAgICAgICAgICBvLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgIG8ucGFyZW50ID0gZS5pdGVtc05vZGU7XG4gICAgICAgICAgICAgICAgby5nZXRDb21wb25lbnQoX2l0ZW0uZGVmYXVsdCkuaW5pdEJ5RGF0YSh0Lml0ZW1JZCwgdC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGlkZVRoaXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIF9fZGVjb3JhdGUoW3UoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJpdGVtc05vZGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFt1KGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiaXRlbVByZVwiLCB2b2lkIDApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtsXSwgZSk7XG59KShfYmFzZVVJLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcDtcbiJdfQ==