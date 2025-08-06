"use strict";
cc._RF.push(module, 'f4a76CUybNNl5+41191uovc', 'Solver');
// scripts/Solver.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _puzzleLine = require("PuzzleLine");

var _utility = require("Utility");

var r = function () {
  function t(t) {
    this.puzzle = t;

    this._reset();
  }

  t.prototype.solve = function () {
    var t;
    var e;
    var o;
    var n;
    var i = new Date().getTime();
    var r = -1;

    for (this.isReset || this._reset(), this.isReset = !1; this._getProgress() > r && this._getTotalSolved() < this.puzzle.cells.length;) {
      for (new Date().getTime(), r = this._getProgress(), o = 0; o < this.lines.length; o++) {
        (n = this.lines[o]).solved || this.eliminateImpossibleFits(n), n.solved || this.findKnownPositivesAndNegatives(n), n.solved || this.findSectionDefiningChains(n), n.solved || this.findAnchoredSections(n), n.solved || this.findCompletedSections(n), n.solved || this.findCompletedLines(n);
      }

      new Date().getTime();
    }

    t = this._getTotalSolved() === this.puzzle.cells.length;
    e = (new Date().getTime() - i) / 1e3;
    this.elapsedTime = e;
    return t;
  };

  t.prototype.eliminateImpossibleFits = function (t) {
    var e;
    var o;
    var n;
    var r;
    var a;
    var s;
    var c;
    var l;
    var u;
    var p;
    var d = 0;
    var h = t.length - t.minimumSectionLength;
    if (0 === t.sections.length) for (u = 0; u < t.cells.length; u++) {
      this._setCellSolution(t.cells[u], 0);
    }

    for (p = 0; p < t.length && 0 === t.cells[p].aiSolution; p++) {
      d++;
    }

    for (p = t.length - 1; p >= 0 && 0 === t.cells[p].aiSolution; p--) {
      h--;
    }

    for (a = 0; a < t.sections.length; a++) {
      for (o = t.sections[a], r = _utility["default"].cloneArray(o.possibleStartIndexes), s = 0; s < o.possibleStartIndexes.length; s++) {
        for (n = o.possibleStartIndexes[s], c = t.cells[n + o.length], (n < d || n > h) && (r = _utility["default"].removeFromArray(r, n)), c && 1 === c.aiSolution && (r = _utility["default"].removeFromArray(r, n)), l = (l = n + o.length - 1) > t.length - 1 ? t.length - 1 : l, e = n; e <= l; e++) {
          (e > t.length - 1 || 0 === t.cells[e].aiSolution) && (r = _utility["default"].removeFromArray(r, n));
        }
      }

      d += o.length + 1;
      h += o.length + 1;
      o.possibleStartIndexes = r;
    }
  };

  t.prototype.findKnownPositivesAndNegatives = function (t) {
    var e;
    var o;
    var n;
    var r;
    var a;
    var s;
    var c;
    var l;
    var u;
    var p;

    var d = _utility["default"].getZeroFilledArray(t.length);

    for (e = 0; e < t.sections.length; e++) {
      for (o = t.sections[e], n = _utility["default"].getZeroFilledArray(t.length), r = 0; r < o.possibleStartIndexes.length; r++) {
        for (s = (a = o.possibleStartIndexes[r]) + o.length - 1, c = a; c <= s; c++) {
          n[c]++, d[c]++;
        }
      }

      for (l = 0; l < n.length; l++) {
        u = n[l], (p = t.cells[l]) && null === p.aiSolution && u === o.possibleStartIndexes.length && this._setCellSolution(p, 1);
      }
    }

    for (l = 0; l < d.length; l++) {
      u = d[l], (p = t.cells[l]) && null === p.aiSolution && 0 === u && this._setCellSolution(p, 0);
    }
  };

  t.prototype.findAnchoredSections = function (t) {
    var e;
    var o;
    var n;
    var i;

    if (t.sections.length > 0) {
      for (n = t.sections[0], i = t.sections[t.sections.length - 1], o = null, e = 0; e < t.cells.length && null !== t.cells[e].aiSolution; e++) {
        if (1 === t.cells[e].aiSolution) {
          o = [e, e + n.length - 1];
          break;
        }
      }

      if (null !== o) {
        for (e = o[0]; e <= o[1]; e++) {
          t.cells[e] && this._setCellSolution(t.cells[e], 1);
        }

        t.cells[e] && this._setCellSolution(t.cells[e], 0);
      }

      for (o = null, e = t.cells.length - 1; e >= 0 && null !== t.cells[e].aiSolution; e--) {
        if (1 === t.cells[e].aiSolution) {
          o = [e - i.length + 1, e];
          break;
        }
      }

      if (null !== o) {
        for (e = o[0]; e <= o[1]; e++) {
          t.cells[e] && this._setCellSolution(t.cells[e], 1);
        }

        t.cells[o[0] - 1] && this._setCellSolution(t.cells[o[0] - 1], 0);
      }
    }
  };

  t.prototype.findSectionDefiningChains = function (t) {
    var e;
    var o;
    var n;
    var r;
    var a;
    var s = [];
    var c = 0;

    for (a = _utility["default"].cloneArray(t.sections).sort(function (t, e) {
      return t.length > e.length ? -1 : 1;
    })[0], e = 0; e < t.cells.length; e++) {
      1 === (o = t.cells[e]).aiSolution && (1 !== c ? (n = {
        start: e,
        length: 1
      }, s.push(n)) : n && n.length++), c = o.aiSolution;
    }

    for (r = 0; r < s.length; r++) {
      (n = s[r]).length === a.length && (t.cells[n.start - 1] && this._setCellSolution(t.cells[n.start - 1], 0), t.cells[n.start + a.length] && this._setCellSolution(t.cells[n.start + a.length], 0), a.solved = !0);
    }
  };

  t.prototype.findCompletedSections = function (t) {
    var e;
    var o;
    var n;
    var i;

    for (e = 0; e < t.sections.length; e++) {
      (o = t.sections[e]).solved || 1 !== o.possibleStartIndexes.length || (n = o.possibleStartIndexes[0] - 1, i = o.possibleStartIndexes[0] + o.length, t.cells[n] && null === t.cells[n].aiSolution && this._setCellSolution(t.cells[n], 0), t.cells[i] && null === t.cells[i].aiSolution && this._setCellSolution(t.cells[i], 0), o.solved = !0);
    }
  };

  t.prototype.findCompletedLines = function (t) {
    var e;
    var o;
    var n;
    var i = 0;
    var r = 0;

    for (e = 0; e < t.sections.length; e++) {
      i += t.sections[e].length;
    }

    for (o = 0; o < t.cells.length; o++) {
      r += 1 === (n = t.cells[o]).aiSolution ? 1 : 0;
    }

    if (i === r) for (o = 0; o < t.cells.length; o++) {
      null === (n = t.cells[o]).aiSolution && this._setCellSolution(n, 0);
    }
  };

  t.prototype._reset = function () {
    var t;
    var e;
    var o;
    var i;
    var r;
    var a;
    var s;
    var c;
    var l;
    var u;
    var p = [];
    var d = [];

    for (this.isReset = !0, this.elapsedTime = 0, this.solutionLog = [], this.lines = [], e = 0; e < this.puzzle.cells.length; e++) {
      this.puzzle.cells[e].aiSolution = null;
    }

    for (t = 0; t < this.puzzle.width; t++) {
      p.push(t);
    }

    for (t = 0; t < this.puzzle.height; t++) {
      d.push(t);
    }

    for (o = 0; o < this.puzzle.rowHints.length; o++) {
      if (i = this.puzzle.rowHints[o], r = this.puzzle.getRowCells(o)) {
        for (a = new _puzzleLine["default"]({
          type: "row",
          index: o,
          length: this.puzzle.width,
          cells: r
        }), s = 0; s < i.length; s++) {
          c = i[s], a.sections.push({
            index: s,
            length: c,
            possibleStartIndexes: p,
            knownIndexes: [],
            solved: !1
          }), a.minimumSectionLength += c + 1;
        }

        a.minimumSectionLength--;
        this.lines.push(a);
      }
    }

    for (l = 0; l < this.puzzle.columnHints.length; l++) {
      for (u = this.puzzle.columnHints[l], a = new _puzzleLine["default"]({
        type: "column",
        index: l,
        length: this.puzzle.height,
        cells: this.puzzle.getColumnCells(l)
      }), s = 0; s < u.length; s++) {
        c = u[s], a.sections.push({
          index: s,
          length: c,
          possibleStartIndexes: d,
          knownIndexes: [],
          solved: !1
        }), a.minimumSectionLength += c + 1;
      }

      a.minimumSectionLength--;
      this.lines.push(a);
    }
  };

  t.prototype._setCellSolution = function (t, e) {
    var o;
    var n;
    var i;
    var r;
    var a;
    var s;
    var c;
    if (null === t.aiSolution) for (o = 0; o < this.lines.length; o++) {
      if (i = "row" === (n = this.lines[o]).type && n.index === t.row, r = "column" === n.type && n.index === t.column, a = 0, i || r) {
        for (s = 0; s < n.cells.length; s++) {
          (c = n.cells[s]).index === t.index ? (c.aiSolution = e, a++) : null !== c.aiSolution && a++;
        }

        a === n.length && (n.solved = !0);
      }
    }
  };

  t.prototype._getTotalSolved = function () {
    var t;
    var e = 0;

    for (t = 0; t < this.puzzle.cells.length; t++) {
      e += null !== this.puzzle.cells[t].aiSolution ? 1 : 0;
    }

    return e;
  };

  t.prototype._getProgress = function () {
    var t;
    var e;
    var o;
    var n = 0;
    var i = 0;

    for (t = 0; t < this.lines.length; t++) {
      for (n += (e = this.lines[t]).sections.length * ("row" === e.type ? this.puzzle.width : this.puzzle.height), o = 0; o < e.sections.length; o++) {
        i += e.sections[o].possibleStartIndexes.length;
      }
    }

    return n - i;
  };

  return t;
}();

exports["default"] = r;

cc._RF.pop();