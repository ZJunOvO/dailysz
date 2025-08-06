
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Puzzle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4cbfbVyuLJBPbnN8fp3n4Nt', 'Puzzle');
// scripts/Puzzle.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _utility = require("Utility");

var i = function () {
  function t(t, e) {
    if (void 0 === t || void 0 === e) throw "width and height are required constructor parameters.";
    if (t <= 0 || e <= 0 || 1 === t && 1 === e) throw "invalid dimensions: " + t.toString() + " x " + e.toString();
    this.width = "number" == typeof t ? t : parseInt(t.toString(), 10);
    this.height = "number" == typeof e ? e : parseInt(e.toString(), 10);
    this.totalCells = this.width * this.height;
    this.reset();
  }

  t.prototype.reset = function () {
    var t = this;
    var e = _utility["default"].getZeroFilledArray;
    this.creator = null;
    this.cells = [];
    this.rowHints = [];
    this.columnHints = [];
    this.grid = e(this.height).map(function () {
      return e(t.width);
    });
  };

  t.prototype.checkUserSolution = function () {
    return this.cells.every(function (t) {
      var e = 1 === t.userSolution ? 1 : 0;
      return t.solution === e;
    });
  };

  t.prototype.getRowCells = function (t) {
    var e;
    var o = [];
    var n = t * this.width;
    var i = n + this.width;

    for (e = n; e < i; e++) {
      o.push(this.cells[e]);
    }

    return o.length > 0 && o;
  };

  t.prototype.getColumnCells = function (t) {
    var e;
    var o = [];

    for (e = t; e < this.cells.length; e += this.width) {
      o.push(this.cells[e]);
    }

    return o.length > 0 && o;
  };

  t.prototype.getCellByIndex = function (t) {
    var e = "number" != typeof t ? parseInt(t, 10) : t;
    return !!this.cells[e] && this.cells[e];
  };

  return t;
}();

exports["default"] = i;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUHV6emxlLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX3V0aWxpdHkiLCJyZXF1aXJlIiwiaSIsInQiLCJlIiwidG9TdHJpbmciLCJ3aWR0aCIsInBhcnNlSW50IiwiaGVpZ2h0IiwidG90YWxDZWxscyIsInJlc2V0IiwicHJvdG90eXBlIiwiZ2V0WmVyb0ZpbGxlZEFycmF5IiwiY3JlYXRvciIsImNlbGxzIiwicm93SGludHMiLCJjb2x1bW5IaW50cyIsImdyaWQiLCJtYXAiLCJjaGVja1VzZXJTb2x1dGlvbiIsImV2ZXJ5IiwidXNlclNvbHV0aW9uIiwic29sdXRpb24iLCJnZXRSb3dDZWxscyIsIm8iLCJuIiwicHVzaCIsImxlbmd0aCIsImdldENvbHVtbkNlbGxzIiwiZ2V0Q2VsbEJ5SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFBQ0MsS0FBSyxFQUFFLENBQUM7QUFBVCxDQUE3Qzs7QUFDQSxJQUFJQyxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXRCOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsQ0FBV0EsQ0FBWCxFQUFjQyxDQUFkLEVBQWlCO0lBQ2IsSUFBSSxLQUFLLENBQUwsS0FBV0QsQ0FBWCxJQUFnQixLQUFLLENBQUwsS0FBV0MsQ0FBL0IsRUFBa0MsTUFBTSx1REFBTjtJQUNsQyxJQUFJRCxDQUFDLElBQUksQ0FBTCxJQUFVQyxDQUFDLElBQUksQ0FBZixJQUFxQixNQUFNRCxDQUFOLElBQVcsTUFBTUMsQ0FBMUMsRUFDSSxNQUFNLHlCQUF5QkQsQ0FBQyxDQUFDRSxRQUFGLEVBQXpCLEdBQXdDLEtBQXhDLEdBQWdERCxDQUFDLENBQUNDLFFBQUYsRUFBdEQ7SUFDSixLQUFLQyxLQUFM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V1YsQ0FBWCxDQUExQjtFQUNILENBSEQ7O0VBSUEsT0FBT0QsQ0FBUDtBQUNILENBOUNPLEVBQVI7O0FBK0NBTCxPQUFPLFdBQVAsR0FBa0JJLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBfdXRpbGl0eSA9IHJlcXVpcmUoXCJVdGlsaXR5XCIpO1xudmFyIGkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQodCwgZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0IHx8IHZvaWQgMCA9PT0gZSkgdGhyb3cgXCJ3aWR0aCBhbmQgaGVpZ2h0IGFyZSByZXF1aXJlZCBjb25zdHJ1Y3RvciBwYXJhbWV0ZXJzLlwiO1xuICAgICAgICBpZiAodCA8PSAwIHx8IGUgPD0gMCB8fCAoMSA9PT0gdCAmJiAxID09PSBlKSlcbiAgICAgICAgICAgIHRocm93IFwiaW52YWxpZCBkaW1lbnNpb25zOiBcIiArIHQudG9TdHJpbmcoKSArIFwiIHggXCIgKyBlLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMud2lkdGggPSBcIm51bWJlclwiID09IHR5cGVvZiB0ID8gdCA6IHBhcnNlSW50KHQudG9TdHJpbmcoKSwgMTApO1xuICAgICAgICB0aGlzLmhlaWdodCA9IFwibnVtYmVyXCIgPT0gdHlwZW9mIGUgPyBlIDogcGFyc2VJbnQoZS50b1N0cmluZygpLCAxMCk7XG4gICAgICAgIHRoaXMudG90YWxDZWxscyA9IHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICB0LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgZSA9IF91dGlsaXR5LmRlZmF1bHQuZ2V0WmVyb0ZpbGxlZEFycmF5O1xuICAgICAgICB0aGlzLmNyZWF0b3IgPSBudWxsO1xuICAgICAgICB0aGlzLmNlbGxzID0gW107XG4gICAgICAgIHRoaXMucm93SGludHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2x1bW5IaW50cyA9IFtdO1xuICAgICAgICB0aGlzLmdyaWQgPSBlKHRoaXMuaGVpZ2h0KS5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGUodC53aWR0aCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuY2hlY2tVc2VyU29sdXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzLmV2ZXJ5KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgZSA9IDEgPT09IHQudXNlclNvbHV0aW9uID8gMSA6IDA7XG4gICAgICAgICAgICByZXR1cm4gdC5zb2x1dGlvbiA9PT0gZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRSb3dDZWxscyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlO1xuICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICB2YXIgbiA9IHQgKiB0aGlzLndpZHRoO1xuICAgICAgICB2YXIgaSA9IG4gKyB0aGlzLndpZHRoO1xuICAgICAgICBmb3IgKGUgPSBuOyBlIDwgaTsgZSsrKSBvLnB1c2godGhpcy5jZWxsc1tlXSk7XG4gICAgICAgIHJldHVybiBvLmxlbmd0aCA+IDAgJiYgbztcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldENvbHVtbkNlbGxzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIHZhciBvID0gW107XG4gICAgICAgIGZvciAoZSA9IHQ7IGUgPCB0aGlzLmNlbGxzLmxlbmd0aDsgZSArPSB0aGlzLndpZHRoKSBvLnB1c2godGhpcy5jZWxsc1tlXSk7XG4gICAgICAgIHJldHVybiBvLmxlbmd0aCA+IDAgJiYgbztcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldENlbGxCeUluZGV4ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSBcIm51bWJlclwiICE9IHR5cGVvZiB0ID8gcGFyc2VJbnQodCwgMTApIDogdDtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5jZWxsc1tlXSAmJiB0aGlzLmNlbGxzW2VdO1xuICAgIH07XG4gICAgcmV0dXJuIHQ7XG59KSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gaTtcbiJdfQ==