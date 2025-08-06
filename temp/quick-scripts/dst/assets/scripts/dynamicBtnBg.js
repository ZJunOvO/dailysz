
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/dynamicBtnBg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa179uJATZCx7GK8QWUgMQD', 'dynamicBtnBg');
// scripts/dynamicBtnBg.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _res = require("res");

var s = cc._decorator;
var c = s.ccclass;
var l = s.property;

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.bg = null;
    e.url = "";
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    var t = this;
    this.node.active = !1;
    this.url && _res["default"].ins.l(this.url, cc.SpriteFrame, "resSps").then(function (e) {
      t.node && t.node.isValid && (t.bg.spriteFrame = e, t.node.active = !0, t.destroy());
    })["catch"](function () {
      console.error("getResSpErr");
    });
  };

  __decorate([l(cc.Sprite)], e.prototype, "bg", void 0);

  __decorate([l(cc.String)], e.prototype, "url", void 0);

  return __decorate([c], e);
}(cc.Component);

exports["default"] = u;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZHluYW1pY0J0bkJnLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZXMiLCJyZXF1aXJlIiwicyIsImNjIiwiX2RlY29yYXRvciIsImMiLCJjY2NsYXNzIiwibCIsInByb3BlcnR5IiwidSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJiZyIsInVybCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsInN0YXJ0Iiwibm9kZSIsImFjdGl2ZSIsImlucyIsIlNwcml0ZUZyYW1lIiwidGhlbiIsImlzVmFsaWQiLCJzcHJpdGVGcmFtZSIsImRlc3Ryb3kiLCJjb25zb2xlIiwiZXJyb3IiLCJfX2RlY29yYXRlIiwiU3ByaXRlIiwiU3RyaW5nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBLElBQUlDLElBQUksR0FBR0MsT0FBTyxDQUFDLEtBQUQsQ0FBbEI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxFQUFGLEdBQU8sSUFBUDtJQUNBSCxDQUFDLENBQUNJLEdBQUYsR0FBUSxFQUFSO0lBQ0EsT0FBT0osQ0FBUDtFQUNIOztFQUNESyxTQUFTLENBQUNMLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNNLFNBQUYsQ0FBWUMsS0FBWixHQUFvQixZQUFZO0lBQzVCLElBQUlSLENBQUMsR0FBRyxJQUFSO0lBQ0EsS0FBS1MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLENBQUMsQ0FBcEI7SUFDQSxLQUFLTCxHQUFMLElBQ0lmLElBQUksV0FBSixDQUFhcUIsR0FBYixDQUNLZCxDQURMLENBQ08sS0FBS1EsR0FEWixFQUNpQlosRUFBRSxDQUFDbUIsV0FEcEIsRUFDaUMsUUFEakMsRUFFS0MsSUFGTCxDQUVVLFVBQVVaLENBQVYsRUFBYTtNQUNmRCxDQUFDLENBQUNTLElBQUYsSUFBVVQsQ0FBQyxDQUFDUyxJQUFGLENBQU9LLE9BQWpCLEtBQThCZCxDQUFDLENBQUNJLEVBQUYsQ0FBS1csV0FBTCxHQUFtQmQsQ0FBcEIsRUFBeUJELENBQUMsQ0FBQ1MsSUFBRixDQUFPQyxNQUFQLEdBQWdCLENBQUMsQ0FBMUMsRUFBOENWLENBQUMsQ0FBQ2dCLE9BQUYsRUFBM0U7SUFDSCxDQUpMLFdBS1csWUFBWTtNQUNmQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxhQUFkO0lBQ0gsQ0FQTCxDQURKO0VBU0gsQ0FaRDs7RUFhQUMsVUFBVSxDQUFDLENBQUN0QixDQUFDLENBQUNKLEVBQUUsQ0FBQzJCLE1BQUosQ0FBRixDQUFELEVBQWlCbkIsQ0FBQyxDQUFDTSxTQUFuQixFQUE4QixJQUE5QixFQUFvQyxLQUFLLENBQXpDLENBQVY7O0VBQ0FZLFVBQVUsQ0FBQyxDQUFDdEIsQ0FBQyxDQUFDSixFQUFFLENBQUM0QixNQUFKLENBQUYsQ0FBRCxFQUFpQnBCLENBQUMsQ0FBQ00sU0FBbkIsRUFBOEIsS0FBOUIsRUFBcUMsS0FBSyxDQUExQyxDQUFWOztFQUNBLE9BQU9ZLFVBQVUsQ0FBQyxDQUFDeEIsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQXhCTyxDQXdCTFIsRUFBRSxDQUFDNkIsU0F4QkUsQ0FBUjs7QUF5QkFsQyxPQUFPLFdBQVAsR0FBa0JXLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIF9yZXMgPSByZXF1aXJlKFwicmVzXCIpO1xudmFyIHMgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGMgPSBzLmNjY2xhc3M7XG52YXIgbCA9IHMucHJvcGVydHk7XG52YXIgdSA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLmJnID0gbnVsbDtcbiAgICAgICAgZS51cmwgPSBcIlwiO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgdGhpcy51cmwgJiZcbiAgICAgICAgICAgIF9yZXMuZGVmYXVsdC5pbnNcbiAgICAgICAgICAgICAgICAubCh0aGlzLnVybCwgY2MuU3ByaXRlRnJhbWUsIFwicmVzU3BzXCIpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5ub2RlICYmIHQubm9kZS5pc1ZhbGlkICYmICgodC5iZy5zcHJpdGVGcmFtZSA9IGUpLCAodC5ub2RlLmFjdGl2ZSA9ICEwKSwgdC5kZXN0cm95KCkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImdldFJlc1NwRXJyXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbbChjYy5TcHJpdGUpXSwgZS5wcm90b3R5cGUsIFwiYmdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtsKGNjLlN0cmluZyldLCBlLnByb3RvdHlwZSwgXCJ1cmxcIiwgdm9pZCAwKTtcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbY10sIGUpO1xufSkoY2MuQ29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHU7XG4iXX0=