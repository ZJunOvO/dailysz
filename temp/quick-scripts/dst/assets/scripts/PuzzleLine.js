
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PuzzleLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d7a9hUs9pK9rzKlQnQWDCz', 'PuzzleLine');
// scripts/PuzzleLine.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

exports["default"] = function (t) {
  this.type = "", this.index = -1, this.length = 0, this.minimumSectionLength = 0, this.sections = [], this.cells = [], this.solved = !1, Object.assign(this, t);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUHV6emxlTGluZS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInQiLCJ0eXBlIiwiaW5kZXgiLCJsZW5ndGgiLCJtaW5pbXVtU2VjdGlvbkxlbmd0aCIsInNlY3Rpb25zIiwiY2VsbHMiLCJzb2x2ZWQiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFBQ0MsS0FBSyxFQUFFLENBQUM7QUFBVCxDQUE3Qzs7QUFDQUQsT0FBTyxXQUFQLEdBQWtCLFVBQVVFLENBQVYsRUFBYTtFQUMxQixLQUFLQyxJQUFMLEdBQVksRUFBYixFQUNLLEtBQUtDLEtBQUwsR0FBYSxDQUFDLENBRG5CLEVBRUssS0FBS0MsTUFBTCxHQUFjLENBRm5CLEVBR0ssS0FBS0Msb0JBQUwsR0FBNEIsQ0FIakMsRUFJSyxLQUFLQyxRQUFMLEdBQWdCLEVBSnJCLEVBS0ssS0FBS0MsS0FBTCxHQUFhLEVBTGxCLEVBTUssS0FBS0MsTUFBTCxHQUFjLENBQUMsQ0FOcEIsRUFPSVgsTUFBTSxDQUFDWSxNQUFQLENBQWMsSUFBZCxFQUFvQlIsQ0FBcEIsQ0FQSjtBQVFILENBVEQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAodGhpcy50eXBlID0gXCJcIiksXG4gICAgICAgICh0aGlzLmluZGV4ID0gLTEpLFxuICAgICAgICAodGhpcy5sZW5ndGggPSAwKSxcbiAgICAgICAgKHRoaXMubWluaW11bVNlY3Rpb25MZW5ndGggPSAwKSxcbiAgICAgICAgKHRoaXMuc2VjdGlvbnMgPSBbXSksXG4gICAgICAgICh0aGlzLmNlbGxzID0gW10pLFxuICAgICAgICAodGhpcy5zb2x2ZWQgPSAhMSksXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgdCk7XG59O1xuIl19