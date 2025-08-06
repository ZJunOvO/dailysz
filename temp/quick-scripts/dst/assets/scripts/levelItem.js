
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levelItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2980049qItDablK/zeCxVwI', 'levelItem');
// scripts/levelItem.js

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
    e.sp = null;
    e.lvlLbl = null;
    return e;
  }

  __extends(e, t);

  e.prototype.setLvlLbl = function (t) {
    var e = 0;
    if (1 == t.length) -1 != t.indexOf("1") && (e = -2);else for (var o = 0, n = t; o < n.length; o++) {
      "1" == n[o] && e--;
    }
    this.lvlLbl.string = t;
    this.lvlLbl.node.x = e;
  };

  __decorate([c(cc.Sprite)], e.prototype, "sp", void 0);

  __decorate([c(cc.Label)], e.prototype, "lvlLbl", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxJdGVtLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImEiLCJjYyIsIl9kZWNvcmF0b3IiLCJzIiwiY2NjbGFzcyIsImMiLCJwcm9wZXJ0eSIsImwiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwic3AiLCJsdmxMYmwiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJzZXRMdmxMYmwiLCJsZW5ndGgiLCJpbmRleE9mIiwibyIsInN0cmluZyIsIm5vZGUiLCJ4IiwiX19kZWNvcmF0ZSIsIlNwcml0ZSIsIkxhYmVsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxFQUFGLEdBQU8sSUFBUDtJQUNBSCxDQUFDLENBQUNJLE1BQUYsR0FBVyxJQUFYO0lBQ0EsT0FBT0osQ0FBUDtFQUNIOztFQUNESyxTQUFTLENBQUNMLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNNLFNBQUYsQ0FBWUMsU0FBWixHQUF3QixVQUFVUixDQUFWLEVBQWE7SUFDakMsSUFBSUMsQ0FBQyxHQUFHLENBQVI7SUFDQSxJQUFJLEtBQUtELENBQUMsQ0FBQ1MsTUFBWCxFQUFtQixDQUFDLENBQUQsSUFBTVQsQ0FBQyxDQUFDVSxPQUFGLENBQVUsR0FBVixDQUFOLEtBQXlCVCxDQUFDLEdBQUcsQ0FBQyxDQUE5QixFQUFuQixLQUNLLEtBQUssSUFBSVUsQ0FBQyxHQUFHLENBQVIsRUFBV3hCLENBQUMsR0FBR2EsQ0FBcEIsRUFBdUJXLENBQUMsR0FBR3hCLENBQUMsQ0FBQ3NCLE1BQTdCLEVBQXFDRSxDQUFDLEVBQXRDO01BQTBDLE9BQU94QixDQUFDLENBQUN3QixDQUFELENBQVIsSUFBZVYsQ0FBQyxFQUFoQjtJQUExQztJQUNMLEtBQUtJLE1BQUwsQ0FBWU8sTUFBWixHQUFxQlosQ0FBckI7SUFDQSxLQUFLSyxNQUFMLENBQVlRLElBQVosQ0FBaUJDLENBQWpCLEdBQXFCYixDQUFyQjtFQUNILENBTkQ7O0VBT0FjLFVBQVUsQ0FBQyxDQUFDbEIsQ0FBQyxDQUFDSixFQUFFLENBQUN1QixNQUFKLENBQUYsQ0FBRCxFQUFpQmYsQ0FBQyxDQUFDTSxTQUFuQixFQUE4QixJQUE5QixFQUFvQyxLQUFLLENBQXpDLENBQVY7O0VBQ0FRLFVBQVUsQ0FBQyxDQUFDbEIsQ0FBQyxDQUFDSixFQUFFLENBQUN3QixLQUFKLENBQUYsQ0FBRCxFQUFnQmhCLENBQUMsQ0FBQ00sU0FBbEIsRUFBNkIsUUFBN0IsRUFBdUMsS0FBSyxDQUE1QyxDQUFWOztFQUNBLE9BQU9RLFVBQVUsQ0FBQyxDQUFDcEIsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQWxCTyxDQWtCTFIsRUFBRSxDQUFDeUIsU0FsQkUsQ0FBUjs7QUFtQkE1QixPQUFPLFdBQVAsR0FBa0JTLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIGEgPSBjYy5fZGVjb3JhdG9yO1xudmFyIHMgPSBhLmNjY2xhc3M7XG52YXIgYyA9IGEucHJvcGVydHk7XG52YXIgbCA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLnNwID0gbnVsbDtcbiAgICAgICAgZS5sdmxMYmwgPSBudWxsO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLnNldEx2bExibCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gMDtcbiAgICAgICAgaWYgKDEgPT0gdC5sZW5ndGgpIC0xICE9IHQuaW5kZXhPZihcIjFcIikgJiYgKGUgPSAtMik7XG4gICAgICAgIGVsc2UgZm9yICh2YXIgbyA9IDAsIG4gPSB0OyBvIDwgbi5sZW5ndGg7IG8rKykgXCIxXCIgPT0gbltvXSAmJiBlLS07XG4gICAgICAgIHRoaXMubHZsTGJsLnN0cmluZyA9IHQ7XG4gICAgICAgIHRoaXMubHZsTGJsLm5vZGUueCA9IGU7XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtjKGNjLlNwcml0ZSldLCBlLnByb3RvdHlwZSwgXCJzcFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW2MoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwibHZsTGJsXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3NdLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBsO1xuIl19