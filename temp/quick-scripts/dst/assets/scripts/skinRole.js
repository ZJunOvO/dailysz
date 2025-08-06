
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/skinRole.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3f91k0OeBK2Z1h7DbieN6o', 'skinRole');
// scripts/skinRole.js

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
    e.roleNode = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
  };

  e.prototype.loadItem = function () {
    _skinMgr["default"].ins.updateRole(this.ref, this.roleNode);
  };

  e.prototype.clickItem = function () {
    var t;
    this.state !== _skinMgr.SkinState.using && (t = this.roleNode.children[0], this.openSkinInfo(t));
  };

  __decorate([u(cc.Node)], e.prototype, "roleNode", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2tpblJvbGUuanMiXSwibmFtZXMiOlsibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX3NraW5NZ3IiLCJyZXF1aXJlIiwiX3NraW5JdGVtQmFzZSIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJsIiwiY2NjbGFzcyIsInUiLCJwcm9wZXJ0eSIsInAiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwicm9sZU5vZGUiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJjYWxsIiwibG9hZEl0ZW0iLCJpbnMiLCJ1cGRhdGVSb2xlIiwicmVmIiwiY2xpY2tJdGVtIiwic3RhdGUiLCJTa2luU3RhdGUiLCJ1c2luZyIsImNoaWxkcmVuIiwib3BlblNraW5JbmZvIiwiX19kZWNvcmF0ZSIsIk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUF0Qjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBQTNCOztBQUNBLElBQUlFLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csUUFBRixHQUFhLElBQWI7SUFDQSxPQUFPSCxDQUFQO0VBQ0g7O0VBQ0RJLFNBQVMsQ0FBQ0osQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ0ssU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVk7SUFDN0JQLENBQUMsQ0FBQ00sU0FBRixDQUFZQyxNQUFaLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QjtFQUNILENBRkQ7O0VBR0FQLENBQUMsQ0FBQ0ssU0FBRixDQUFZRyxRQUFaLEdBQXVCLFlBQVk7SUFDL0JwQixRQUFRLFdBQVIsQ0FBaUJxQixHQUFqQixDQUFxQkMsVUFBckIsQ0FBZ0MsS0FBS0MsR0FBckMsRUFBMEMsS0FBS1IsUUFBL0M7RUFDSCxDQUZEOztFQUdBSCxDQUFDLENBQUNLLFNBQUYsQ0FBWU8sU0FBWixHQUF3QixZQUFZO0lBQ2hDLElBQUliLENBQUo7SUFDQSxLQUFLYyxLQUFMLEtBQWV6QixRQUFRLENBQUMwQixTQUFULENBQW1CQyxLQUFsQyxLQUE2Q2hCLENBQUMsR0FBRyxLQUFLSSxRQUFMLENBQWNhLFFBQWQsQ0FBdUIsQ0FBdkIsQ0FBTCxFQUFpQyxLQUFLQyxZQUFMLENBQWtCbEIsQ0FBbEIsQ0FBN0U7RUFDSCxDQUhEOztFQUlBbUIsVUFBVSxDQUFDLENBQUN0QixDQUFDLENBQUNKLEVBQUUsQ0FBQzJCLElBQUosQ0FBRixDQUFELEVBQWVuQixDQUFDLENBQUNLLFNBQWpCLEVBQTRCLFVBQTVCLEVBQXdDLEtBQUssQ0FBN0MsQ0FBVjs7RUFDQSxPQUFPYSxVQUFVLENBQUMsQ0FBQ3hCLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0FuQk8sQ0FtQkxWLGFBQWEsV0FuQlIsQ0FBUjs7QUFvQkFKLE9BQU8sV0FBUCxHQUFrQlksQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBuO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6ICEwfSk7XG52YXIgX3NraW5NZ3IgPSByZXF1aXJlKFwic2tpbk1nclwiKTtcbnZhciBfc2tpbkl0ZW1CYXNlID0gcmVxdWlyZShcInNraW5JdGVtQmFzZVwiKTtcbnZhciBjID0gY2MuX2RlY29yYXRvcjtcbnZhciBsID0gYy5jY2NsYXNzO1xudmFyIHUgPSBjLnByb3BlcnR5O1xudmFyIHAgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5yb2xlTm9kZSA9IG51bGw7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmxvYWRJdGVtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc2tpbk1nci5kZWZhdWx0Lmlucy51cGRhdGVSb2xlKHRoaXMucmVmLCB0aGlzLnJvbGVOb2RlKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrSXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHRoaXMuc3RhdGUgIT09IF9za2luTWdyLlNraW5TdGF0ZS51c2luZyAmJiAoKHQgPSB0aGlzLnJvbGVOb2RlLmNoaWxkcmVuWzBdKSwgdGhpcy5vcGVuU2tpbkluZm8odCkpO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbdShjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcInJvbGVOb2RlXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2xdLCBlKTtcbn0pKF9za2luSXRlbUJhc2UuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBwO1xuIl19