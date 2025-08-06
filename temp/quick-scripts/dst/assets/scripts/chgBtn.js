
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/chgBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db62fK//GZEhp0t7svoB+gK', 'chgBtn');
// scripts/chgBtn.js

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
    e.bg = null;
    e.lbSpr = null;
    e.offBg = null;
    e.onBg = null;
    e.offLb = null;
    e.onLb = null;
    e.flag = !1;
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
    null != this.bg && (this.bg.spriteFrame = this.flag ? this.onBg : this.offBg);
    null != this.lbSpr && (this.lbSpr.spriteFrame = this.flag ? this.onLb : this.offLb);
  };

  __decorate([c(cc.Sprite)], e.prototype, "bg", void 0);

  __decorate([c(cc.Sprite)], e.prototype, "lbSpr", void 0);

  __decorate([c(cc.SpriteFrame)], e.prototype, "offBg", void 0);

  __decorate([c(cc.SpriteFrame)], e.prototype, "onBg", void 0);

  __decorate([c(cc.SpriteFrame)], e.prototype, "offLb", void 0);

  __decorate([c(cc.SpriteFrame)], e.prototype, "onLb", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2hnQnRuLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImEiLCJjYyIsIl9kZWNvcmF0b3IiLCJzIiwiY2NjbGFzcyIsImMiLCJwcm9wZXJ0eSIsImwiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYmciLCJsYlNwciIsIm9mZkJnIiwib25CZyIsIm9mZkxiIiwib25MYiIsImZsYWciLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJzdGFydCIsInUiLCJzZXRTdGF0ZSIsInNwcml0ZUZyYW1lIiwiX19kZWNvcmF0ZSIsIlNwcml0ZSIsIlNwcml0ZUZyYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxFQUFGLEdBQU8sSUFBUDtJQUNBSCxDQUFDLENBQUNJLEtBQUYsR0FBVSxJQUFWO0lBQ0FKLENBQUMsQ0FBQ0ssS0FBRixHQUFVLElBQVY7SUFDQUwsQ0FBQyxDQUFDTSxJQUFGLEdBQVMsSUFBVDtJQUNBTixDQUFDLENBQUNPLEtBQUYsR0FBVSxJQUFWO0lBQ0FQLENBQUMsQ0FBQ1EsSUFBRixHQUFTLElBQVQ7SUFDQVIsQ0FBQyxDQUFDUyxJQUFGLEdBQVMsQ0FBQyxDQUFWO0lBQ0EsT0FBT1QsQ0FBUDtFQUNIOztFQUNEVSxTQUFTLENBQUNWLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNXLFNBQUYsQ0FBWUMsS0FBWixHQUFvQixZQUFZO0lBQzVCLEtBQUtDLENBQUw7RUFDSCxDQUZEOztFQUdBYixDQUFDLENBQUNXLFNBQUYsQ0FBWUcsUUFBWixHQUF1QixVQUFVZixDQUFWLEVBQWE7SUFDaEMsS0FBS1UsSUFBTCxHQUFZVixDQUFaO0lBQ0EsS0FBS2MsQ0FBTDtFQUNILENBSEQ7O0VBSUFiLENBQUMsQ0FBQ1csU0FBRixDQUFZRSxDQUFaLEdBQWdCLFlBQVk7SUFDeEIsUUFBUSxLQUFLVixFQUFiLEtBQW9CLEtBQUtBLEVBQUwsQ0FBUVksV0FBUixHQUFzQixLQUFLTixJQUFMLEdBQVksS0FBS0gsSUFBakIsR0FBd0IsS0FBS0QsS0FBdkU7SUFDQSxRQUFRLEtBQUtELEtBQWIsS0FBdUIsS0FBS0EsS0FBTCxDQUFXVyxXQUFYLEdBQXlCLEtBQUtOLElBQUwsR0FBWSxLQUFLRCxJQUFqQixHQUF3QixLQUFLRCxLQUE3RTtFQUNILENBSEQ7O0VBSUFTLFVBQVUsQ0FBQyxDQUFDcEIsQ0FBQyxDQUFDSixFQUFFLENBQUN5QixNQUFKLENBQUYsQ0FBRCxFQUFpQmpCLENBQUMsQ0FBQ1csU0FBbkIsRUFBOEIsSUFBOUIsRUFBb0MsS0FBSyxDQUF6QyxDQUFWOztFQUNBSyxVQUFVLENBQUMsQ0FBQ3BCLENBQUMsQ0FBQ0osRUFBRSxDQUFDeUIsTUFBSixDQUFGLENBQUQsRUFBaUJqQixDQUFDLENBQUNXLFNBQW5CLEVBQThCLE9BQTlCLEVBQXVDLEtBQUssQ0FBNUMsQ0FBVjs7RUFDQUssVUFBVSxDQUFDLENBQUNwQixDQUFDLENBQUNKLEVBQUUsQ0FBQzBCLFdBQUosQ0FBRixDQUFELEVBQXNCbEIsQ0FBQyxDQUFDVyxTQUF4QixFQUFtQyxPQUFuQyxFQUE0QyxLQUFLLENBQWpELENBQVY7O0VBQ0FLLFVBQVUsQ0FBQyxDQUFDcEIsQ0FBQyxDQUFDSixFQUFFLENBQUMwQixXQUFKLENBQUYsQ0FBRCxFQUFzQmxCLENBQUMsQ0FBQ1csU0FBeEIsRUFBbUMsTUFBbkMsRUFBMkMsS0FBSyxDQUFoRCxDQUFWOztFQUNBSyxVQUFVLENBQUMsQ0FBQ3BCLENBQUMsQ0FBQ0osRUFBRSxDQUFDMEIsV0FBSixDQUFGLENBQUQsRUFBc0JsQixDQUFDLENBQUNXLFNBQXhCLEVBQW1DLE9BQW5DLEVBQTRDLEtBQUssQ0FBakQsQ0FBVjs7RUFDQUssVUFBVSxDQUFDLENBQUNwQixDQUFDLENBQUNKLEVBQUUsQ0FBQzBCLFdBQUosQ0FBRixDQUFELEVBQXNCbEIsQ0FBQyxDQUFDVyxTQUF4QixFQUFtQyxNQUFuQyxFQUEyQyxLQUFLLENBQWhELENBQVY7O0VBQ0EsT0FBT0ssVUFBVSxDQUFDLENBQUN0QixDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBL0JPLENBK0JMUixFQUFFLENBQUMyQixTQS9CRSxDQUFSOztBQWdDQTlCLE9BQU8sV0FBUCxHQUFrQlMsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBuO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6ICEwfSk7XG52YXIgYSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgcyA9IGEuY2NjbGFzcztcbnZhciBjID0gYS5wcm9wZXJ0eTtcbnZhciBsID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuYmcgPSBudWxsO1xuICAgICAgICBlLmxiU3ByID0gbnVsbDtcbiAgICAgICAgZS5vZmZCZyA9IG51bGw7XG4gICAgICAgIGUub25CZyA9IG51bGw7XG4gICAgICAgIGUub2ZmTGIgPSBudWxsO1xuICAgICAgICBlLm9uTGIgPSBudWxsO1xuICAgICAgICBlLmZsYWcgPSAhMTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMuZmxhZyA9IHQ7XG4gICAgICAgIHRoaXMudSgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbnVsbCAhPSB0aGlzLmJnICYmICh0aGlzLmJnLnNwcml0ZUZyYW1lID0gdGhpcy5mbGFnID8gdGhpcy5vbkJnIDogdGhpcy5vZmZCZyk7XG4gICAgICAgIG51bGwgIT0gdGhpcy5sYlNwciAmJiAodGhpcy5sYlNwci5zcHJpdGVGcmFtZSA9IHRoaXMuZmxhZyA/IHRoaXMub25MYiA6IHRoaXMub2ZmTGIpO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbYyhjYy5TcHJpdGUpXSwgZS5wcm90b3R5cGUsIFwiYmdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtjKGNjLlNwcml0ZSldLCBlLnByb3RvdHlwZSwgXCJsYlNwclwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW2MoY2MuU3ByaXRlRnJhbWUpXSwgZS5wcm90b3R5cGUsIFwib2ZmQmdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtjKGNjLlNwcml0ZUZyYW1lKV0sIGUucHJvdG90eXBlLCBcIm9uQmdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtjKGNjLlNwcml0ZUZyYW1lKV0sIGUucHJvdG90eXBlLCBcIm9mZkxiXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbYyhjYy5TcHJpdGVGcmFtZSldLCBlLnByb3RvdHlwZSwgXCJvbkxiXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3NdLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBsO1xuIl19