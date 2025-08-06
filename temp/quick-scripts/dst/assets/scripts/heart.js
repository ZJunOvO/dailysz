
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/heart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b20bSJnh5P8p51eQRE+xVD', 'heart');
// scripts/heart.js

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

  e.prototype.playLose = function () {
    this.getComponent(cc.Animation).play();
  };

  e.prototype.getHeart = function () {
    var t = this.node;
    t.getChildByName("noHas").active = !1;
    t.getChildByName("has").active = !0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaGVhcnQuanMiXSwibmFtZXMiOlsibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiYSIsImNjIiwiX2RlY29yYXRvciIsInMiLCJjY2NsYXNzIiwiYyIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsInBsYXlMb3NlIiwiZ2V0Q29tcG9uZW50IiwiQW5pbWF0aW9uIiwicGxheSIsImdldEhlYXJ0Iiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiYWN0aXZlIiwiX19kZWNvcmF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFBQ0MsS0FBSyxFQUFFLENBQUM7QUFBVCxDQUE3QztBQUNBLElBQUlDLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULE9BQVEsU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFuRDtFQUNIOztFQUNEQyxTQUFTLENBQUNILENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNJLFNBQUYsQ0FBWUMsUUFBWixHQUF1QixZQUFZO0lBQy9CLEtBQUtDLFlBQUwsQ0FBa0JiLEVBQUUsQ0FBQ2MsU0FBckIsRUFBZ0NDLElBQWhDO0VBQ0gsQ0FGRDs7RUFHQVIsQ0FBQyxDQUFDSSxTQUFGLENBQVlLLFFBQVosR0FBdUIsWUFBWTtJQUMvQixJQUFJVixDQUFDLEdBQUcsS0FBS1csSUFBYjtJQUNBWCxDQUFDLENBQUNZLGNBQUYsQ0FBaUIsT0FBakIsRUFBMEJDLE1BQTFCLEdBQW1DLENBQUMsQ0FBcEM7SUFDQWIsQ0FBQyxDQUFDWSxjQUFGLENBQWlCLEtBQWpCLEVBQXdCQyxNQUF4QixHQUFpQyxDQUFDLENBQWxDO0VBQ0gsQ0FKRDs7RUFLQSxPQUFPQyxVQUFVLENBQUMsQ0FBQ2xCLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0FkRCxDQWNHUCxFQUFFLENBQUNxQixTQWROLENBRkMsQ0FBTDtBQWlCQXhCLE9BQU8sV0FBUCxHQUFrQk8sQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBuO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6ICEwfSk7XG52YXIgYSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgcyA9IGEuY2NjbGFzcztcbnZhciBjID1cbiAgICAoYS5wcm9wZXJ0eSxcbiAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xuICAgICAgICBlLnByb3RvdHlwZS5wbGF5TG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5nZXRIZWFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcIm5vSGFzXCIpLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcImhhc1wiKS5hY3RpdmUgPSAhMDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW3NdLCBlKTtcbiAgICB9KShjYy5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGM7XG4iXX0=