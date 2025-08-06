
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/raceRankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e2e8kHoUZNVrkBvdUrlq5X', 'raceRankItem');
// scripts/raceRankItem.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _rankItem = require("rankItem");

var s = cc._decorator;
var c = s.ccclass;
var l = s.property;

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.idxIcon = null;
    e.idxBg = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.scoreLb.string = "";
    this.idxLb.string = "";
    this.nickNameLb.string = "";
    this.idxIcon && (this.idxIcon.spriteFrame = null);
  };

  e.prototype.initItem = function (t, e) {
    this.setNickName(t.nick);
    this.setScore(t.score);
    e ? this.setIdxSp(e) : this.setIdx(t.idx);
    t.headUrl ? this.setHeadSp(t.headUrl) : this.setDefaultHead();
  };

  e.prototype.setIdx = function (e) {
    t.prototype.setIdx.call(this, e);
    this.idxBg.active = !0;
  };

  e.prototype.setIdxSp = function (t) {
    this.idxIcon.spriteFrame = t;
    this.idxBg.active = !1;
  };

  __decorate([l(cc.Sprite)], e.prototype, "idxIcon", void 0);

  __decorate([l(cc.Node)], e.prototype, "idxBg", void 0);

  return __decorate([c], e);
}(_rankItem["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccmFjZVJhbmtJdGVtLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yYW5rSXRlbSIsInJlcXVpcmUiLCJzIiwiY2MiLCJfZGVjb3JhdG9yIiwiYyIsImNjY2xhc3MiLCJsIiwicHJvcGVydHkiLCJ1IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImlkeEljb24iLCJpZHhCZyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsInNjb3JlTGIiLCJzdHJpbmciLCJpZHhMYiIsIm5pY2tOYW1lTGIiLCJzcHJpdGVGcmFtZSIsImluaXRJdGVtIiwic2V0Tmlja05hbWUiLCJuaWNrIiwic2V0U2NvcmUiLCJzY29yZSIsInNldElkeFNwIiwic2V0SWR4IiwiaWR4IiwiaGVhZFVybCIsInNldEhlYWRTcCIsInNldERlZmF1bHRIZWFkIiwiY2FsbCIsImFjdGl2ZSIsIl9fZGVjb3JhdGUiLCJTcHJpdGUiLCJOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBLElBQUlDLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxPQUFGLEdBQVksSUFBWjtJQUNBSCxDQUFDLENBQUNJLEtBQUYsR0FBVSxJQUFWO0lBQ0EsT0FBT0osQ0FBUDtFQUNIOztFQUNESyxTQUFTLENBQUNMLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNNLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixZQUFZO0lBQzdCLEtBQUtDLE9BQUwsQ0FBYUMsTUFBYixHQUFzQixFQUF0QjtJQUNBLEtBQUtDLEtBQUwsQ0FBV0QsTUFBWCxHQUFvQixFQUFwQjtJQUNBLEtBQUtFLFVBQUwsQ0FBZ0JGLE1BQWhCLEdBQXlCLEVBQXpCO0lBQ0EsS0FBS04sT0FBTCxLQUFpQixLQUFLQSxPQUFMLENBQWFTLFdBQWIsR0FBMkIsSUFBNUM7RUFDSCxDQUxEOztFQU1BWixDQUFDLENBQUNNLFNBQUYsQ0FBWU8sUUFBWixHQUF1QixVQUFVZCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDbkMsS0FBS2MsV0FBTCxDQUFpQmYsQ0FBQyxDQUFDZ0IsSUFBbkI7SUFDQSxLQUFLQyxRQUFMLENBQWNqQixDQUFDLENBQUNrQixLQUFoQjtJQUNBakIsQ0FBQyxHQUFHLEtBQUtrQixRQUFMLENBQWNsQixDQUFkLENBQUgsR0FBc0IsS0FBS21CLE1BQUwsQ0FBWXBCLENBQUMsQ0FBQ3FCLEdBQWQsQ0FBdkI7SUFDQXJCLENBQUMsQ0FBQ3NCLE9BQUYsR0FBWSxLQUFLQyxTQUFMLENBQWV2QixDQUFDLENBQUNzQixPQUFqQixDQUFaLEdBQXdDLEtBQUtFLGNBQUwsRUFBeEM7RUFDSCxDQUxEOztFQU1BdkIsQ0FBQyxDQUFDTSxTQUFGLENBQVlhLE1BQVosR0FBcUIsVUFBVW5CLENBQVYsRUFBYTtJQUM5QkQsQ0FBQyxDQUFDTyxTQUFGLENBQVlhLE1BQVosQ0FBbUJLLElBQW5CLENBQXdCLElBQXhCLEVBQThCeEIsQ0FBOUI7SUFDQSxLQUFLSSxLQUFMLENBQVdxQixNQUFYLEdBQW9CLENBQUMsQ0FBckI7RUFDSCxDQUhEOztFQUlBekIsQ0FBQyxDQUFDTSxTQUFGLENBQVlZLFFBQVosR0FBdUIsVUFBVW5CLENBQVYsRUFBYTtJQUNoQyxLQUFLSSxPQUFMLENBQWFTLFdBQWIsR0FBMkJiLENBQTNCO0lBQ0EsS0FBS0ssS0FBTCxDQUFXcUIsTUFBWCxHQUFvQixDQUFDLENBQXJCO0VBQ0gsQ0FIRDs7RUFJQUMsVUFBVSxDQUFDLENBQUM5QixDQUFDLENBQUNKLEVBQUUsQ0FBQ21DLE1BQUosQ0FBRixDQUFELEVBQWlCM0IsQ0FBQyxDQUFDTSxTQUFuQixFQUE4QixTQUE5QixFQUF5QyxLQUFLLENBQTlDLENBQVY7O0VBQ0FvQixVQUFVLENBQUMsQ0FBQzlCLENBQUMsQ0FBQ0osRUFBRSxDQUFDb0MsSUFBSixDQUFGLENBQUQsRUFBZTVCLENBQUMsQ0FBQ00sU0FBakIsRUFBNEIsT0FBNUIsRUFBcUMsS0FBSyxDQUExQyxDQUFWOztFQUNBLE9BQU9vQixVQUFVLENBQUMsQ0FBQ2hDLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0EvQk8sQ0ErQkxYLFNBQVMsV0EvQkosQ0FBUjs7QUFnQ0FGLE9BQU8sV0FBUCxHQUFrQlcsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBuO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6ICEwfSk7XG52YXIgX3JhbmtJdGVtID0gcmVxdWlyZShcInJhbmtJdGVtXCIpO1xudmFyIHMgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGMgPSBzLmNjY2xhc3M7XG52YXIgbCA9IHMucHJvcGVydHk7XG52YXIgdSA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLmlkeEljb24gPSBudWxsO1xuICAgICAgICBlLmlkeEJnID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2NvcmVMYi5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB0aGlzLmlkeExiLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHRoaXMubmlja05hbWVMYi5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB0aGlzLmlkeEljb24gJiYgKHRoaXMuaWR4SWNvbi5zcHJpdGVGcmFtZSA9IG51bGwpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdEl0ZW0gPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB0aGlzLnNldE5pY2tOYW1lKHQubmljayk7XG4gICAgICAgIHRoaXMuc2V0U2NvcmUodC5zY29yZSk7XG4gICAgICAgIGUgPyB0aGlzLnNldElkeFNwKGUpIDogdGhpcy5zZXRJZHgodC5pZHgpO1xuICAgICAgICB0LmhlYWRVcmwgPyB0aGlzLnNldEhlYWRTcCh0LmhlYWRVcmwpIDogdGhpcy5zZXREZWZhdWx0SGVhZCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0SWR4ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdC5wcm90b3R5cGUuc2V0SWR4LmNhbGwodGhpcywgZSk7XG4gICAgICAgIHRoaXMuaWR4QmcuYWN0aXZlID0gITA7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRJZHhTcCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMuaWR4SWNvbi5zcHJpdGVGcmFtZSA9IHQ7XG4gICAgICAgIHRoaXMuaWR4QmcuYWN0aXZlID0gITE7XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtsKGNjLlNwcml0ZSldLCBlLnByb3RvdHlwZSwgXCJpZHhJY29uXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbbChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImlkeEJnXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2NdLCBlKTtcbn0pKF9yYW5rSXRlbS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHU7XG4iXX0=