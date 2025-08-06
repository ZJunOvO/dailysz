
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PuzzleCell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd167dLHxotLS6RqGxYST/a2', 'PuzzleCell');
// scripts/PuzzleCell.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

exports["default"] = function (t) {
  this.index = -1, this.column = -1, this.row = -1, this.solution = null, this.userSolution = null, this.aiSolution = null, Object.assign(this, t);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUHV6emxlQ2VsbC5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInQiLCJpbmRleCIsImNvbHVtbiIsInJvdyIsInNvbHV0aW9uIiwidXNlclNvbHV0aW9uIiwiYWlTb2x1dGlvbiIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBRCxPQUFPLFdBQVAsR0FBa0IsVUFBVUUsQ0FBVixFQUFhO0VBQzFCLEtBQUtDLEtBQUwsR0FBYSxDQUFDLENBQWYsRUFDSyxLQUFLQyxNQUFMLEdBQWMsQ0FBQyxDQURwQixFQUVLLEtBQUtDLEdBQUwsR0FBVyxDQUFDLENBRmpCLEVBR0ssS0FBS0MsUUFBTCxHQUFnQixJQUhyQixFQUlLLEtBQUtDLFlBQUwsR0FBb0IsSUFKekIsRUFLSyxLQUFLQyxVQUFMLEdBQWtCLElBTHZCLEVBTUlWLE1BQU0sQ0FBQ1csTUFBUCxDQUFjLElBQWQsRUFBb0JQLENBQXBCLENBTko7QUFPSCxDQVJEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgKHRoaXMuaW5kZXggPSAtMSksXG4gICAgICAgICh0aGlzLmNvbHVtbiA9IC0xKSxcbiAgICAgICAgKHRoaXMucm93ID0gLTEpLFxuICAgICAgICAodGhpcy5zb2x1dGlvbiA9IG51bGwpLFxuICAgICAgICAodGhpcy51c2VyU29sdXRpb24gPSBudWxsKSxcbiAgICAgICAgKHRoaXMuYWlTb2x1dGlvbiA9IG51bGwpLFxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHQpO1xufTtcbiJdfQ==