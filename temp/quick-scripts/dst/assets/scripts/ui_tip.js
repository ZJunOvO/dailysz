
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui_tip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed9b2LsSfRIso6X0TSRTqgj', 'ui_tip');
// scripts/ui_tip.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _loading = require("loading");

var _baseUI = require("baseUI");

var c = cc._decorator;
var l = c.ccclass;
var u = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.showLab = null;
    e.tNode = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t, e) {
    var o = this;
    this.showLab.font = e ? "" : _loading.DEFAULTFONT;
    this.showLab.fontSize = e ? 35 : 40;
    this.showLab.string = t;
    this.tNode.scale = 0;
    this.showLab.scheduleOnce(function () {
      o.tNode.height = o.showLab.node.height + 30;
    }, 0);
    cc.Tween.stopAllByTarget(this.tNode);
    this.tNode.setPosition(cc.v2());
    this.onShow();
  };

  e.prototype.onShow = function () {
    cc.tween(this.tNode).parallel(cc.tween(this.tNode).to(0.2, {
      scale: 1
    }), cc.tween(this.tNode).to(2, {
      y: 120
    })).delay(0.1).to(0.2, {
      scale: 0
    }).start();
  };

  __decorate([u(cc.Label)], e.prototype, "showLab", void 0);

  __decorate([u(cc.Node)], e.prototype, "tNode", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlfdGlwLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9sb2FkaW5nIiwicmVxdWlyZSIsIl9iYXNlVUkiLCJjIiwiY2MiLCJfZGVjb3JhdG9yIiwibCIsImNjY2xhc3MiLCJ1IiwicHJvcGVydHkiLCJwIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInNob3dMYWIiLCJ0Tm9kZSIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImluaXQiLCJvIiwiZm9udCIsIkRFRkFVTFRGT05UIiwiZm9udFNpemUiLCJzdHJpbmciLCJzY2FsZSIsInNjaGVkdWxlT25jZSIsImhlaWdodCIsIm5vZGUiLCJUd2VlbiIsInN0b3BBbGxCeVRhcmdldCIsInNldFBvc2l0aW9uIiwidjIiLCJvblNob3ciLCJ0d2VlbiIsInBhcmFsbGVsIiwidG8iLCJ5IiwiZGVsYXkiLCJzdGFydCIsIl9fZGVjb3JhdGUiLCJMYWJlbCIsIk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUF0Qjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxRQUFELENBQXJCOztBQUNBLElBQUlFLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csT0FBRixHQUFZLElBQVo7SUFDQUgsQ0FBQyxDQUFDSSxLQUFGLEdBQVUsSUFBVjtJQUNBLE9BQU9KLENBQVA7RUFDSDs7RUFDREssU0FBUyxDQUFDTCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDTSxTQUFGLENBQVlDLElBQVosR0FBbUIsVUFBVVIsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQy9CLElBQUlRLENBQUMsR0FBRyxJQUFSO0lBQ0EsS0FBS0wsT0FBTCxDQUFhTSxJQUFiLEdBQW9CVCxDQUFDLEdBQUcsRUFBSCxHQUFRWixRQUFRLENBQUNzQixXQUF0QztJQUNBLEtBQUtQLE9BQUwsQ0FBYVEsUUFBYixHQUF3QlgsQ0FBQyxHQUFHLEVBQUgsR0FBUSxFQUFqQztJQUNBLEtBQUtHLE9BQUwsQ0FBYVMsTUFBYixHQUFzQmIsQ0FBdEI7SUFDQSxLQUFLSyxLQUFMLENBQVdTLEtBQVgsR0FBbUIsQ0FBbkI7SUFDQSxLQUFLVixPQUFMLENBQWFXLFlBQWIsQ0FBMEIsWUFBWTtNQUNsQ04sQ0FBQyxDQUFDSixLQUFGLENBQVFXLE1BQVIsR0FBaUJQLENBQUMsQ0FBQ0wsT0FBRixDQUFVYSxJQUFWLENBQWVELE1BQWYsR0FBd0IsRUFBekM7SUFDSCxDQUZELEVBRUcsQ0FGSDtJQUdBdkIsRUFBRSxDQUFDeUIsS0FBSCxDQUFTQyxlQUFULENBQXlCLEtBQUtkLEtBQTlCO0lBQ0EsS0FBS0EsS0FBTCxDQUFXZSxXQUFYLENBQXVCM0IsRUFBRSxDQUFDNEIsRUFBSCxFQUF2QjtJQUNBLEtBQUtDLE1BQUw7RUFDSCxDQVpEOztFQWFBckIsQ0FBQyxDQUFDTSxTQUFGLENBQVllLE1BQVosR0FBcUIsWUFBWTtJQUM3QjdCLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBUyxLQUFLbEIsS0FBZCxFQUNLbUIsUUFETCxDQUNjL0IsRUFBRSxDQUFDOEIsS0FBSCxDQUFTLEtBQUtsQixLQUFkLEVBQXFCb0IsRUFBckIsQ0FBd0IsR0FBeEIsRUFBNkI7TUFBQ1gsS0FBSyxFQUFFO0lBQVIsQ0FBN0IsQ0FEZCxFQUN3RHJCLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBUyxLQUFLbEIsS0FBZCxFQUFxQm9CLEVBQXJCLENBQXdCLENBQXhCLEVBQTJCO01BQUNDLENBQUMsRUFBRTtJQUFKLENBQTNCLENBRHhELEVBRUtDLEtBRkwsQ0FFVyxHQUZYLEVBR0tGLEVBSEwsQ0FHUSxHQUhSLEVBR2E7TUFBQ1gsS0FBSyxFQUFFO0lBQVIsQ0FIYixFQUlLYyxLQUpMO0VBS0gsQ0FORDs7RUFPQUMsVUFBVSxDQUFDLENBQUNoQyxDQUFDLENBQUNKLEVBQUUsQ0FBQ3FDLEtBQUosQ0FBRixDQUFELEVBQWdCN0IsQ0FBQyxDQUFDTSxTQUFsQixFQUE2QixTQUE3QixFQUF3QyxLQUFLLENBQTdDLENBQVY7O0VBQ0FzQixVQUFVLENBQUMsQ0FBQ2hDLENBQUMsQ0FBQ0osRUFBRSxDQUFDc0MsSUFBSixDQUFGLENBQUQsRUFBZTlCLENBQUMsQ0FBQ00sU0FBakIsRUFBNEIsT0FBNUIsRUFBcUMsS0FBSyxDQUExQyxDQUFWOztFQUNBLE9BQU9zQixVQUFVLENBQUMsQ0FBQ2xDLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0EvQk8sQ0ErQkxWLE9BQU8sV0EvQkYsQ0FBUjs7QUFnQ0FKLE9BQU8sV0FBUCxHQUFrQlksQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBuO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6ICEwfSk7XG52YXIgX2xvYWRpbmcgPSByZXF1aXJlKFwibG9hZGluZ1wiKTtcbnZhciBfYmFzZVVJID0gcmVxdWlyZShcImJhc2VVSVwiKTtcbnZhciBjID0gY2MuX2RlY29yYXRvcjtcbnZhciBsID0gYy5jY2NsYXNzO1xudmFyIHUgPSBjLnByb3BlcnR5O1xudmFyIHAgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5zaG93TGFiID0gbnVsbDtcbiAgICAgICAgZS50Tm9kZSA9IG51bGw7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgdGhpcy5zaG93TGFiLmZvbnQgPSBlID8gXCJcIiA6IF9sb2FkaW5nLkRFRkFVTFRGT05UO1xuICAgICAgICB0aGlzLnNob3dMYWIuZm9udFNpemUgPSBlID8gMzUgOiA0MDtcbiAgICAgICAgdGhpcy5zaG93TGFiLnN0cmluZyA9IHQ7XG4gICAgICAgIHRoaXMudE5vZGUuc2NhbGUgPSAwO1xuICAgICAgICB0aGlzLnNob3dMYWIuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG8udE5vZGUuaGVpZ2h0ID0gby5zaG93TGFiLm5vZGUuaGVpZ2h0ICsgMzA7XG4gICAgICAgIH0sIDApO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy50Tm9kZSk7XG4gICAgICAgIHRoaXMudE5vZGUuc2V0UG9zaXRpb24oY2MudjIoKSk7XG4gICAgICAgIHRoaXMub25TaG93KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vblNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudE5vZGUpXG4gICAgICAgICAgICAucGFyYWxsZWwoY2MudHdlZW4odGhpcy50Tm9kZSkudG8oMC4yLCB7c2NhbGU6IDF9KSwgY2MudHdlZW4odGhpcy50Tm9kZSkudG8oMiwge3k6IDEyMH0pKVxuICAgICAgICAgICAgLmRlbGF5KDAuMSlcbiAgICAgICAgICAgIC50bygwLjIsIHtzY2FsZTogMH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW3UoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwic2hvd0xhYlwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW3UoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJ0Tm9kZVwiLCB2b2lkIDApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtsXSwgZSk7XG59KShfYmFzZVVJLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcDtcbiJdfQ==