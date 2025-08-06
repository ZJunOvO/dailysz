
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/nameFrame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d594+dIy1LgYWXL4uGdb1G', 'nameFrame');
// scripts/nameFrame.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _skinMgr = require("skinMgr");

var _pInfo = require("pInfo");

var l = cc._decorator;
var u = l.ccclass;
var p = (l.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.icon = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.icon = this.node.getComponent(cc.Sprite);
    this.updateNameFrame();
    this.eventFunc = this.onOperTap.bind(this);

    _evts["default"].opE.on(this.eventFunc);
  };

  e.prototype.onDestroy = function () {
    _evts["default"].opE.off(this.eventFunc);

    this.eventFunc = null;
  };

  e.prototype.onOperTap = function (t) {
    var e;
    (null == t ? void 0 : t.action) === _evts["default"].SKIN_CHG && (null === (e = t.data) || void 0 === e ? void 0 : e.skinId) === _skinMgr.SkinIdEnum.nameFrame && this.updateNameFrame();
  };

  e.prototype.updateNameFrame = function () {
    var t = _pInfo["default"].ins.getUsingSkin()[_skinMgr.SkinIdEnum.nameFrame];

    _skinMgr["default"].ins.updateNameFrame(t, this.icon);
  };

  return __decorate([u], e);
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbmFtZUZyYW1lLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9ldnRzIiwicmVxdWlyZSIsIl9za2luTWdyIiwiX3BJbmZvIiwibCIsImNjIiwiX2RlY29yYXRvciIsInUiLCJjY2NsYXNzIiwicCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImljb24iLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwidXBkYXRlTmFtZUZyYW1lIiwiZXZlbnRGdW5jIiwib25PcGVyVGFwIiwiYmluZCIsIm9wRSIsIm9uIiwib25EZXN0cm95Iiwib2ZmIiwiYWN0aW9uIiwiU0tJTl9DSEciLCJkYXRhIiwic2tpbklkIiwiU2tpbklkRW51bSIsIm5hbWVGcmFtZSIsImlucyIsImdldFVzaW5nU2tpbiIsIl9fZGVjb3JhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7O0FBQ0EsSUFBSUMsS0FBSyxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFuQjs7QUFDQSxJQUFJQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxTQUFELENBQXRCOztBQUNBLElBQUlFLE1BQU0sR0FBR0YsT0FBTyxDQUFDLE9BQUQsQ0FBcEI7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxJQUFGLEdBQVMsSUFBVDtJQUNBLE9BQU9ILENBQVA7RUFDSDs7RUFDREksU0FBUyxDQUFDSixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSyxTQUFGLENBQVlDLE1BQVosR0FBcUIsWUFBWTtJQUM3QixLQUFLSCxJQUFMLEdBQVksS0FBS0ksSUFBTCxDQUFVQyxZQUFWLENBQXVCZixFQUFFLENBQUNnQixNQUExQixDQUFaO0lBQ0EsS0FBS0MsZUFBTDtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQWpCOztJQUNBekIsS0FBSyxXQUFMLENBQWMwQixHQUFkLENBQWtCQyxFQUFsQixDQUFxQixLQUFLSixTQUExQjtFQUNILENBTEQ7O0VBTUFYLENBQUMsQ0FBQ0ssU0FBRixDQUFZVyxTQUFaLEdBQXdCLFlBQVk7SUFDaEM1QixLQUFLLFdBQUwsQ0FBYzBCLEdBQWQsQ0FBa0JHLEdBQWxCLENBQXNCLEtBQUtOLFNBQTNCOztJQUNBLEtBQUtBLFNBQUwsR0FBaUIsSUFBakI7RUFDSCxDQUhEOztFQUlBWCxDQUFDLENBQUNLLFNBQUYsQ0FBWU8sU0FBWixHQUF3QixVQUFVYixDQUFWLEVBQWE7SUFDakMsSUFBSUMsQ0FBSjtJQUNBLENBQUMsUUFBUUQsQ0FBUixHQUFZLEtBQUssQ0FBakIsR0FBcUJBLENBQUMsQ0FBQ21CLE1BQXhCLE1BQW9DOUIsS0FBSyxXQUFMLENBQWMrQixRQUFsRCxJQUNJLENBQUMsVUFBVW5CLENBQUMsR0FBR0QsQ0FBQyxDQUFDcUIsSUFBaEIsS0FBeUIsS0FBSyxDQUFMLEtBQVdwQixDQUFwQyxHQUF3QyxLQUFLLENBQTdDLEdBQWlEQSxDQUFDLENBQUNxQixNQUFwRCxNQUFnRS9CLFFBQVEsQ0FBQ2dDLFVBQVQsQ0FBb0JDLFNBRHhGLElBRUksS0FBS2IsZUFBTCxFQUZKO0VBR0gsQ0FMRDs7RUFNQVYsQ0FBQyxDQUFDSyxTQUFGLENBQVlLLGVBQVosR0FBOEIsWUFBWTtJQUN0QyxJQUFJWCxDQUFDLEdBQUdSLE1BQU0sV0FBTixDQUFlaUMsR0FBZixDQUFtQkMsWUFBbkIsR0FBa0NuQyxRQUFRLENBQUNnQyxVQUFULENBQW9CQyxTQUF0RCxDQUFSOztJQUNBakMsUUFBUSxXQUFSLENBQWlCa0MsR0FBakIsQ0FBcUJkLGVBQXJCLENBQXFDWCxDQUFyQyxFQUF3QyxLQUFLSSxJQUE3QztFQUNILENBSEQ7O0VBSUEsT0FBT3VCLFVBQVUsQ0FBQyxDQUFDL0IsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQTVCRCxDQTRCR1AsRUFBRSxDQUFDa0MsU0E1Qk4sQ0FGQyxDQUFMO0FBK0JBekMsT0FBTyxXQUFQLEdBQWtCVyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG47XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBfZXZ0cyA9IHJlcXVpcmUoXCJldnRzXCIpO1xudmFyIF9za2luTWdyID0gcmVxdWlyZShcInNraW5NZ3JcIik7XG52YXIgX3BJbmZvID0gcmVxdWlyZShcInBJbmZvXCIpO1xudmFyIGwgPSBjYy5fZGVjb3JhdG9yO1xudmFyIHUgPSBsLmNjY2xhc3M7XG52YXIgcCA9XG4gICAgKGwucHJvcGVydHksXG4gICAgKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgICAgIGUuaWNvbiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmFtZUZyYW1lKCk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RnVuYyA9IHRoaXMub25PcGVyVGFwLmJpbmQodGhpcyk7XG4gICAgICAgICAgICBfZXZ0cy5kZWZhdWx0Lm9wRS5vbih0aGlzLmV2ZW50RnVuYyk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF9ldnRzLmRlZmF1bHQub3BFLm9mZih0aGlzLmV2ZW50RnVuYyk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RnVuYyA9IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm9uT3BlclRhcCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIChudWxsID09IHQgPyB2b2lkIDAgOiB0LmFjdGlvbikgPT09IF9ldnRzLmRlZmF1bHQuU0tJTl9DSEcgJiZcbiAgICAgICAgICAgICAgICAobnVsbCA9PT0gKGUgPSB0LmRhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuc2tpbklkKSA9PT0gX3NraW5NZ3IuU2tpbklkRW51bS5uYW1lRnJhbWUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU5hbWVGcmFtZSgpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGVOYW1lRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdCA9IF9wSW5mby5kZWZhdWx0Lmlucy5nZXRVc2luZ1NraW4oKVtfc2tpbk1nci5Ta2luSWRFbnVtLm5hbWVGcmFtZV07XG4gICAgICAgICAgICBfc2tpbk1nci5kZWZhdWx0Lmlucy51cGRhdGVOYW1lRnJhbWUodCwgdGhpcy5pY29uKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW3VdLCBlKTtcbiAgICB9KShjYy5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHA7XG4iXX0=