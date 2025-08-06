
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc1c1x9AEFHuo0WacUaPgZF', 'ice');
// scripts/ice.js

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
    e.ani = null;
    e.count = 4;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.ani = this.getComponent(cc.Animation);
    this.ani.on(cc.Animation.EventType.FINISHED, this.playDone, this);
  };

  e.prototype.playDone = function () {
    0 == this.count && this.node.destroy();
  };

  e.prototype.drop = function () {
    var t = this.count;
    if (!(t < 1)) return this.ani.play(), t = this.count = t - 1, this.sp.spriteFrame = t > 0 ? this.sps[t - 1] : null, t;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaWNlLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImEiLCJjYyIsIl9kZWNvcmF0b3IiLCJzIiwiY2NjbGFzcyIsImMiLCJwcm9wZXJ0eSIsImwiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwic3BzIiwic3AiLCJhbmkiLCJjb3VudCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsImdldENvbXBvbmVudCIsIkFuaW1hdGlvbiIsIm9uIiwiRXZlbnRUeXBlIiwiRklOSVNIRUQiLCJwbGF5RG9uZSIsIm5vZGUiLCJkZXN0cm95IiwiZHJvcCIsInBsYXkiLCJzcHJpdGVGcmFtZSIsIl9fZGVjb3JhdGUiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFBQ0MsS0FBSyxFQUFFLENBQUM7QUFBVCxDQUE3QztBQUNBLElBQUlDLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csR0FBRixHQUFRLEVBQVI7SUFDQUgsQ0FBQyxDQUFDSSxFQUFGLEdBQU8sSUFBUDtJQUNBSixDQUFDLENBQUNLLEdBQUYsR0FBUSxJQUFSO0lBQ0FMLENBQUMsQ0FBQ00sS0FBRixHQUFVLENBQVY7SUFDQSxPQUFPTixDQUFQO0VBQ0g7O0VBQ0RPLFNBQVMsQ0FBQ1AsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ1EsU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVk7SUFDN0IsS0FBS0osR0FBTCxHQUFXLEtBQUtLLFlBQUwsQ0FBa0JsQixFQUFFLENBQUNtQixTQUFyQixDQUFYO0lBQ0EsS0FBS04sR0FBTCxDQUFTTyxFQUFULENBQVlwQixFQUFFLENBQUNtQixTQUFILENBQWFFLFNBQWIsQ0FBdUJDLFFBQW5DLEVBQTZDLEtBQUtDLFFBQWxELEVBQTRELElBQTVEO0VBQ0gsQ0FIRDs7RUFJQWYsQ0FBQyxDQUFDUSxTQUFGLENBQVlPLFFBQVosR0FBdUIsWUFBWTtJQUMvQixLQUFLLEtBQUtULEtBQVYsSUFBbUIsS0FBS1UsSUFBTCxDQUFVQyxPQUFWLEVBQW5CO0VBQ0gsQ0FGRDs7RUFHQWpCLENBQUMsQ0FBQ1EsU0FBRixDQUFZVSxJQUFaLEdBQW1CLFlBQVk7SUFDM0IsSUFBSW5CLENBQUMsR0FBRyxLQUFLTyxLQUFiO0lBQ0EsSUFBSSxFQUFFUCxDQUFDLEdBQUcsQ0FBTixDQUFKLEVBQ0ksT0FBTyxLQUFLTSxHQUFMLENBQVNjLElBQVQsSUFBa0JwQixDQUFDLEdBQUcsS0FBS08sS0FBTCxHQUFhUCxDQUFDLEdBQUcsQ0FBdkMsRUFBNEMsS0FBS0ssRUFBTCxDQUFRZ0IsV0FBUixHQUFzQnJCLENBQUMsR0FBRyxDQUFKLEdBQVEsS0FBS0ksR0FBTCxDQUFTSixDQUFDLEdBQUcsQ0FBYixDQUFSLEdBQTBCLElBQTVGLEVBQW1HQSxDQUExRztFQUNQLENBSkQ7O0VBS0FzQixVQUFVLENBQUMsQ0FBQ3pCLENBQUMsQ0FBQyxDQUFDSixFQUFFLENBQUM4QixXQUFKLENBQUQsQ0FBRixDQUFELEVBQXdCdEIsQ0FBQyxDQUFDUSxTQUExQixFQUFxQyxLQUFyQyxFQUE0QyxLQUFLLENBQWpELENBQVY7O0VBQ0FhLFVBQVUsQ0FBQyxDQUFDekIsQ0FBQyxDQUFDSixFQUFFLENBQUMrQixNQUFKLENBQUYsQ0FBRCxFQUFpQnZCLENBQUMsQ0FBQ1EsU0FBbkIsRUFBOEIsSUFBOUIsRUFBb0MsS0FBSyxDQUF6QyxDQUFWOztFQUNBLE9BQU9hLFVBQVUsQ0FBQyxDQUFDM0IsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQXpCTyxDQXlCTFIsRUFBRSxDQUFDZ0MsU0F6QkUsQ0FBUjs7QUEwQkFuQyxPQUFPLFdBQVAsR0FBa0JTLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIGEgPSBjYy5fZGVjb3JhdG9yO1xudmFyIHMgPSBhLmNjY2xhc3M7XG52YXIgYyA9IGEucHJvcGVydHk7XG52YXIgbCA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLnNwcyA9IFtdO1xuICAgICAgICBlLnNwID0gbnVsbDtcbiAgICAgICAgZS5hbmkgPSBudWxsO1xuICAgICAgICBlLmNvdW50ID0gNDtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYW5pID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgdGhpcy5hbmkub24oY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCwgdGhpcy5wbGF5RG9uZSwgdGhpcyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wbGF5RG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgMCA9PSB0aGlzLmNvdW50ICYmIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5kcm9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuY291bnQ7XG4gICAgICAgIGlmICghKHQgPCAxKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFuaS5wbGF5KCksICh0ID0gdGhpcy5jb3VudCA9IHQgLSAxKSwgKHRoaXMuc3Auc3ByaXRlRnJhbWUgPSB0ID4gMCA/IHRoaXMuc3BzW3QgLSAxXSA6IG51bGwpLCB0O1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbYyhbY2MuU3ByaXRlRnJhbWVdKV0sIGUucHJvdG90eXBlLCBcInNwc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW2MoY2MuU3ByaXRlKV0sIGUucHJvdG90eXBlLCBcInNwXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3NdLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBsO1xuIl19