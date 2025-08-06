"use strict";
cc._RF.push(module, '77b848PH0BISYS7vYKq3Ogo', 'Creator');
// scripts/Creator.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _solver = require("Solver");

var _puzzle = require("Puzzle");

var _puzzleCell = require("PuzzleCell");

var a = function () {
  function t(t) {
    t && (this.seed = t);
  }

  t.prototype.seedRandom = function () {
    return null == this.seed ? Math.random() : (this.seed = (9301 * this.seed + 49297) % 233280, this.seed / 233280);
  };

  t.prototype.getRandomIntBetween = function (t, e) {
    var o = Math.ceil(t);
    var n = Math.floor(e);
    return Math.floor(this.seedRandom() * (n - o + 1)) + o;
  };

  t.prototype.getRandomData = function (t, e, o) {
    void 0 === o && (o = 3);
    var n = this.createRandom(t, t, e, o - 1);
    var i = [];
    n.cells.forEach(function (t) {
      i.push(t.solution);
    });
    return i;
  };

  t.prototype.createRandom = function (e, o, r, a) {
    var s;
    var c;
    var l;
    var u;
    var p = !1;
    var d = "number" == typeof r && r >= 0 && r <= 1;
    var h = [];
    var f = [];
    var g = 0;
    var y = 1;

    for (this.puzzle = new _puzzle["default"](e, o); !1 === p;) {
      for (c = d ? r : this.getRandomIntBetween(200, 800) / 1e3, h.length = 0, f.length = 0, s = 0, u = 0; u < this.puzzle.totalCells; u++) {
        l = this.seedRandom() < c ? 1 : 0, a && (0 == l && 1 == y && g++, g > a && (l = 1, g--), y = l), s += l, u % this.puzzle.width == 0 && u > 0 && (y = 1, g = 0, h.push(f), f = []), f.push(l);
      }

      0 !== s && s !== this.puzzle.totalCells && (h.push(f), this.puzzle = t._populatePuzzleFromGrid(this.puzzle, h), new _solver["default"](this.puzzle).solve() && (p = !0));
    }

    this.puzzle.creator = this;
    return this.puzzle;
  };

  t.prototype.createFromGrid = function (e) {
    new Date();
    var o;
    var r = 0;
    var a = 0;
    if (!(e instanceof Array)) throw "grid is not an array";
    e.forEach(function (t, e) {
      if (!(t instanceof Array)) throw "grid is not a multi-dimensional array";
      if (0 === r) r = t.length;else if (t.length !== r) throw "row " + e + " has an invalid length (" + t.length + ") - expecting " + r;
      a++;
    });
    o = new _puzzle["default"](r, a);
    this.puzzle = t._populatePuzzleFromGrid(o, e);
    this.puzzle.creator = this;
    return !!new _solver["default"](this.puzzle).solve() && this.puzzle;
  };

  t.prototype.createFromHints = function (t) {
    var e;
    var o;
    var a;
    var s;
    var c = this;
    if ("object" != typeof t || !t.row || !t.column) throw 'parameter passed to createFromHints() must be an object containing "row" and "column" properties';
    if (!(t.row instanceof Array && t.column instanceof Array)) throw "hints.row or hints.column must be an array.";
    e = t.column.length;
    o = t.row.length;
    (a = new _puzzle["default"](e, o)).rowHints = t.row;
    a.columnHints = t.column;
    a.creator = this;
    a.grid.forEach(function (t, e) {
      t.forEach(function (t, o) {
        a.cells.push(new _puzzleCell["default"]({
          index: e * a.width + o,
          column: o,
          row: e
        }));
      });
    });
    this.puzzle = a;
    return !!(s = new _solver["default"](this.puzzle)).solve() && (s.puzzle.cells.forEach(function (t, e) {
      var o = c.puzzle.getCellByIndex(e);
      o.aiSolution = t.aiSolution;
      o.solution = t.aiSolution;
    }), this.puzzle);
  };

  t._populatePuzzleFromGrid = function (t, e) {
    var o;
    var n;
    var i;
    var a;
    var s;
    var c;
    var l;
    var u;
    var p;
    var d;
    var h;

    for (t.reset(), t.grid = e, n = 0; n < t.grid.length; n++) {
      for (i = t.grid[n], p = [], t.rowHints[n] = [], a = 0; a < i.length; a++) {
        l = s = i[a], u = a > 0 ? t.grid[n][a - 1] : 0, t.cells.push(new _puzzleCell["default"]({
          index: n * t.width + a,
          column: a,
          row: n,
          solution: s
        })), 1 === l && 0 === u ? p.push(1) : 0 === l && 1 === u ? p.push(0) : 1 === l && 1 === u && p[p.length - 1]++;
      }

      for (d = 0; d < p.length; d++) {
        (h = p[d]) > 0 && t.rowHints[n].push(h);
      }
    }

    for (a = 0; a < t.width; a++) {
      for (t.columnHints[a] = [], o = [], c = a; c < t.totalCells; c += t.width) {
        i = Math.floor(c / t.width), l = t.grid[i][a], u = i > 0 ? t.grid[i - 1][a] : 0, 1 === l && 0 === u ? o.push(1) : 0 === l && 1 === u ? o.push(0) : 1 === l && 1 === u && o[o.length - 1]++;
      }

      for (d = 0; d < o.length; d++) {
        (h = o[d]) > 0 && t.columnHints[a].push(h);
      }
    }

    return t;
  };

  return t;
}();

exports["default"] = a;

cc._RF.pop();