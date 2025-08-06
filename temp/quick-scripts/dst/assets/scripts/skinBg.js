
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/skinBg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a56ebbKS9OsZ5A4r1830oM', 'skinBg');
// scripts/skinBg.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _skinMgr = require("skinMgr");

var _skinItemBase = require("skinItemBase");

var c = cc._decorator;
var l = c.ccclass;
var u = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.itemSp = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
  };

  e.prototype.loadItem = function () {
    _skinMgr["default"].ins.updateBg(this.ref, this.itemSp);
  };

  e.prototype.clickItem = function () {
    var t;
    this.state !== _skinMgr.SkinState.using && (t = this.itemSp.node, this.openSkinInfo(t));
  };

  __decorate([u(cc.Sprite)], e.prototype, "itemSp", void 0);

  return __decorate([l], e);
}(_skinItemBase["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2tpbkJnLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9za2luTWdyIiwicmVxdWlyZSIsIl9za2luSXRlbUJhc2UiLCJjIiwiY2MiLCJfZGVjb3JhdG9yIiwibCIsImNjY2xhc3MiLCJ1IiwicHJvcGVydHkiLCJwIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIml0ZW1TcCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsImNhbGwiLCJsb2FkSXRlbSIsImlucyIsInVwZGF0ZUJnIiwicmVmIiwiY2xpY2tJdGVtIiwic3RhdGUiLCJTa2luU3RhdGUiLCJ1c2luZyIsIm5vZGUiLCJvcGVuU2tpbkluZm8iLCJfX2RlY29yYXRlIiwiU3ByaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBLElBQUlDLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBdEI7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHRCxPQUFPLENBQUMsY0FBRCxDQUEzQjs7QUFDQSxJQUFJRSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLE1BQUYsR0FBVyxJQUFYO0lBQ0EsT0FBT0gsQ0FBUDtFQUNIOztFQUNESSxTQUFTLENBQUNKLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNLLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixZQUFZO0lBQzdCUCxDQUFDLENBQUNNLFNBQUYsQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7RUFDSCxDQUZEOztFQUdBUCxDQUFDLENBQUNLLFNBQUYsQ0FBWUcsUUFBWixHQUF1QixZQUFZO0lBQy9CcEIsUUFBUSxXQUFSLENBQWlCcUIsR0FBakIsQ0FBcUJDLFFBQXJCLENBQThCLEtBQUtDLEdBQW5DLEVBQXdDLEtBQUtSLE1BQTdDO0VBQ0gsQ0FGRDs7RUFHQUgsQ0FBQyxDQUFDSyxTQUFGLENBQVlPLFNBQVosR0FBd0IsWUFBWTtJQUNoQyxJQUFJYixDQUFKO0lBQ0EsS0FBS2MsS0FBTCxLQUFlekIsUUFBUSxDQUFDMEIsU0FBVCxDQUFtQkMsS0FBbEMsS0FBNkNoQixDQUFDLEdBQUcsS0FBS0ksTUFBTCxDQUFZYSxJQUFqQixFQUF3QixLQUFLQyxZQUFMLENBQWtCbEIsQ0FBbEIsQ0FBcEU7RUFDSCxDQUhEOztFQUlBbUIsVUFBVSxDQUFDLENBQUN0QixDQUFDLENBQUNKLEVBQUUsQ0FBQzJCLE1BQUosQ0FBRixDQUFELEVBQWlCbkIsQ0FBQyxDQUFDSyxTQUFuQixFQUE4QixRQUE5QixFQUF3QyxLQUFLLENBQTdDLENBQVY7O0VBQ0EsT0FBT2EsVUFBVSxDQUFDLENBQUN4QixDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBbkJPLENBbUJMVixhQUFhLFdBbkJSLENBQVI7O0FBb0JBSixPQUFPLFdBQVAsR0FBa0JZLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIF9za2luTWdyID0gcmVxdWlyZShcInNraW5NZ3JcIik7XG52YXIgX3NraW5JdGVtQmFzZSA9IHJlcXVpcmUoXCJza2luSXRlbUJhc2VcIik7XG52YXIgYyA9IGNjLl9kZWNvcmF0b3I7XG52YXIgbCA9IGMuY2NjbGFzcztcbnZhciB1ID0gYy5wcm9wZXJ0eTtcbnZhciBwID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuaXRlbVNwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQucHJvdG90eXBlLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubG9hZEl0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9za2luTWdyLmRlZmF1bHQuaW5zLnVwZGF0ZUJnKHRoaXMucmVmLCB0aGlzLml0ZW1TcCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja0l0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICB0aGlzLnN0YXRlICE9PSBfc2tpbk1nci5Ta2luU3RhdGUudXNpbmcgJiYgKCh0ID0gdGhpcy5pdGVtU3Aubm9kZSksIHRoaXMub3BlblNraW5JbmZvKHQpKTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW3UoY2MuU3ByaXRlKV0sIGUucHJvdG90eXBlLCBcIml0ZW1TcFwiLCB2b2lkIDApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtsXSwgZSk7XG59KShfc2tpbkl0ZW1CYXNlLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcDtcbiJdfQ==