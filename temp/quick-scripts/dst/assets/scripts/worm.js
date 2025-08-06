
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/worm.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd1faxCdE9AcbmxbzuujTdp', 'worm');
// scripts/worm.js

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
    e.sps = [];
    e.sp = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    this.sp.spriteFrame = this.sps[t];
  };

  __decorate([c([cc.SpriteFrame])], e.prototype, "sps", void 0);

  __decorate([c(cc.Sprite)], e.prototype, "sp", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcd29ybS5qcyJdLCJuYW1lcyI6WyJuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJhIiwiY2MiLCJfZGVjb3JhdG9yIiwicyIsImNjY2xhc3MiLCJjIiwicHJvcGVydHkiLCJsIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInNwcyIsInNwIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdCIsInNwcml0ZUZyYW1lIiwiX19kZWNvcmF0ZSIsIlNwcml0ZUZyYW1lIiwiU3ByaXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxHQUFGLEdBQVEsRUFBUjtJQUNBSCxDQUFDLENBQUNJLEVBQUYsR0FBTyxJQUFQO0lBQ0EsT0FBT0osQ0FBUDtFQUNIOztFQUNESyxTQUFTLENBQUNMLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNNLFNBQUYsQ0FBWUMsSUFBWixHQUFtQixVQUFVUixDQUFWLEVBQWE7SUFDNUIsS0FBS0ssRUFBTCxDQUFRSSxXQUFSLEdBQXNCLEtBQUtMLEdBQUwsQ0FBU0osQ0FBVCxDQUF0QjtFQUNILENBRkQ7O0VBR0FVLFVBQVUsQ0FBQyxDQUFDYixDQUFDLENBQUMsQ0FBQ0osRUFBRSxDQUFDa0IsV0FBSixDQUFELENBQUYsQ0FBRCxFQUF3QlYsQ0FBQyxDQUFDTSxTQUExQixFQUFxQyxLQUFyQyxFQUE0QyxLQUFLLENBQWpELENBQVY7O0VBQ0FHLFVBQVUsQ0FBQyxDQUFDYixDQUFDLENBQUNKLEVBQUUsQ0FBQ21CLE1BQUosQ0FBRixDQUFELEVBQWlCWCxDQUFDLENBQUNNLFNBQW5CLEVBQThCLElBQTlCLEVBQW9DLEtBQUssQ0FBekMsQ0FBVjs7RUFDQSxPQUFPRyxVQUFVLENBQUMsQ0FBQ2YsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQWRPLENBY0xSLEVBQUUsQ0FBQ29CLFNBZEUsQ0FBUjs7QUFlQXZCLE9BQU8sV0FBUCxHQUFrQlMsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBuO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6ICEwfSk7XG52YXIgYSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgcyA9IGEuY2NjbGFzcztcbnZhciBjID0gYS5wcm9wZXJ0eTtcbnZhciBsID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuc3BzID0gW107XG4gICAgICAgIGUuc3AgPSBudWxsO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0aGlzLnNwLnNwcml0ZUZyYW1lID0gdGhpcy5zcHNbdF07XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtjKFtjYy5TcHJpdGVGcmFtZV0pXSwgZS5wcm90b3R5cGUsIFwic3BzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbYyhjYy5TcHJpdGUpXSwgZS5wcm90b3R5cGUsIFwic3BcIiwgdm9pZCAwKTtcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbc10sIGUpO1xufSkoY2MuQ29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGw7XG4iXX0=