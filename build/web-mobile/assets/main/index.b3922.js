window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Creator: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "77b848PH0BISYS7vYKq3Ogo", "Creator");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _solver = require("Solver");
    var _puzzle = require("Puzzle");
    var _puzzleCell = require("PuzzleCell");
    var a = function() {
      function t(t) {
        t && (this.seed = t);
      }
      t.prototype.seedRandom = function() {
        return null == this.seed ? Math.random() : (this.seed = (9301 * this.seed + 49297) % 233280, 
        this.seed / 233280);
      };
      t.prototype.getRandomIntBetween = function(t, e) {
        var o = Math.ceil(t);
        var n = Math.floor(e);
        return Math.floor(this.seedRandom() * (n - o + 1)) + o;
      };
      t.prototype.getRandomData = function(t, e, o) {
        void 0 === o && (o = 3);
        var n = this.createRandom(t, t, e, o - 1);
        var i = [];
        n.cells.forEach(function(t) {
          i.push(t.solution);
        });
        return i;
      };
      t.prototype.createRandom = function(e, o, r, a) {
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
        for (this.puzzle = new _puzzle["default"](e, o); !1 === p; ) {
          for (c = d ? r : this.getRandomIntBetween(200, 800) / 1e3, h.length = 0, f.length = 0, 
          s = 0, u = 0; u < this.puzzle.totalCells; u++) l = this.seedRandom() < c ? 1 : 0, 
          a && (0 == l && 1 == y && g++, g > a && (l = 1, g--), y = l), s += l, u % this.puzzle.width == 0 && u > 0 && (y = 1, 
          g = 0, h.push(f), f = []), f.push(l);
          0 !== s && s !== this.puzzle.totalCells && (h.push(f), this.puzzle = t._populatePuzzleFromGrid(this.puzzle, h), 
          new _solver["default"](this.puzzle).solve() && (p = !0));
        }
        this.puzzle.creator = this;
        return this.puzzle;
      };
      t.prototype.createFromGrid = function(e) {
        new Date();
        var o;
        var r = 0;
        var a = 0;
        if (!(e instanceof Array)) throw "grid is not an array";
        e.forEach(function(t, e) {
          if (!(t instanceof Array)) throw "grid is not a multi-dimensional array";
          if (0 === r) r = t.length; else if (t.length !== r) throw "row " + e + " has an invalid length (" + t.length + ") - expecting " + r;
          a++;
        });
        o = new _puzzle["default"](r, a);
        this.puzzle = t._populatePuzzleFromGrid(o, e);
        this.puzzle.creator = this;
        return !!new _solver["default"](this.puzzle).solve() && this.puzzle;
      };
      t.prototype.createFromHints = function(t) {
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
        a.grid.forEach(function(t, e) {
          t.forEach(function(t, o) {
            a.cells.push(new _puzzleCell["default"]({
              index: e * a.width + o,
              column: o,
              row: e
            }));
          });
        });
        this.puzzle = a;
        return !!(s = new _solver["default"](this.puzzle)).solve() && (s.puzzle.cells.forEach(function(t, e) {
          var o = c.puzzle.getCellByIndex(e);
          o.aiSolution = t.aiSolution;
          o.solution = t.aiSolution;
        }), this.puzzle);
      };
      t._populatePuzzleFromGrid = function(t, e) {
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
          for (i = t.grid[n], p = [], t.rowHints[n] = [], a = 0; a < i.length; a++) l = s = i[a], 
          u = a > 0 ? t.grid[n][a - 1] : 0, t.cells.push(new _puzzleCell["default"]({
            index: n * t.width + a,
            column: a,
            row: n,
            solution: s
          })), 1 === l && 0 === u ? p.push(1) : 0 === l && 1 === u ? p.push(0) : 1 === l && 1 === u && p[p.length - 1]++;
          for (d = 0; d < p.length; d++) (h = p[d]) > 0 && t.rowHints[n].push(h);
        }
        for (a = 0; a < t.width; a++) {
          for (t.columnHints[a] = [], o = [], c = a; c < t.totalCells; c += t.width) i = Math.floor(c / t.width), 
          l = t.grid[i][a], u = i > 0 ? t.grid[i - 1][a] : 0, 1 === l && 0 === u ? o.push(1) : 0 === l && 1 === u ? o.push(0) : 1 === l && 1 === u && o[o.length - 1]++;
          for (d = 0; d < o.length; d++) (h = o[d]) > 0 && t.columnHints[a].push(h);
        }
        return t;
      };
      return t;
    }();
    exports["default"] = a;
    cc._RF.pop();
  }, {
    Puzzle: "Puzzle",
    PuzzleCell: "PuzzleCell",
    Solver: "Solver"
  } ],
  IServerCfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0bcfbD71yFNrYEKzKfhcP4r", "IServerCfg");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    cc._RF.pop();
  }, {} ],
  NumberUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26435KE1/pIvr8//0gRYvdJ", "NumberUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var n = function() {
      function t() {}
      t.parseNum = function(t, e) {
        void 0 === e && (e = 0);
        "string" == typeof t ? t = parseInt(t) : isNaN(t) && (t = 0);
        return 0 === t ? e : t;
      };
      t.FormatCurrency = function(t) {
        "string" == typeof t && (t = parseInt(t));
        return t >= this.TENBILLION ? parseInt(t / this.TENBILLION + "") + "B" : t >= this.MILLION ? parseInt(t / this.MILLION + "") + "M" : t >= this.KILO ? parseInt(t / this.KILO + "") + "K" : t.toString();
      };
      t.RandomInt = function(t, e) {
        return Math.ceil(Math.random() * (e - t + 1) + t - 1);
      };
      t.stringToNumArr = function(t) {
        var e = [];
        if (!t) return e;
        for (var o = t.split(";"), n = 0, i = o.length; n < i; n++) e.push(this.parseNum(o[n]));
        return e;
      };
      t.clamp = function(t, e, o) {
        e > o && (e = [ o, o = e ][0]);
        t > o && (t = o);
        (t < e || Number.isNaN(t)) && (t = e);
        return t;
      };
      t.KILO = 1e3;
      t.MILLION = 1e6;
      t.TENBILLION = 1e9;
      t.BILLION = 1e8;
      t.TENKILO = 1e4;
      return t;
    }();
    exports["default"] = n;
    cc._RF.pop();
  }, {} ],
  PopupLoading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e230uEA9dEv6CDagtCkl4n", "PopupLoading");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = a.property;
    var l = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.loadingIcon = null;
        e.loadingTxt = null;
        e.speed = .5;
        e.bgNode = null;
        e.charPoint = [ ".", "..", "..." ];
        e.charIndex = 0;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        this.bgNode.height = this.node.height = cc.winSize.height;
      };
      e.prototype.onEnable = function() {
        this.start();
      };
      e.prototype.onDisable = function() {
        cc.Tween.stopAllByTarget(this.loadingIcon);
        this.unschedule(this.txtAppend);
      };
      e.prototype.onShow = function() {
        this.loadingIcon.angle = 0;
        var t = cc.tween().by(.6, {
          angle: -90
        }).by(.6, {
          angle: -180
        }).by(.6, {
          angle: -90
        });
        cc.tween(this.loadingIcon).repeatForever(t).start();
      };
      e.prototype.onHide = function() {};
      e.prototype.start = function() {
        this.charIndex = 0;
        this.onShow();
        this.unschedule(this.txtAppend);
        this.schedule(this.txtAppend, this.speed, cc.macro.REPEAT_FOREVER);
      };
      e.prototype.txtAppend = function() {
        this.loadingTxt.string = "loading" + this.charPoint[this.charIndex];
        this.charIndex++;
        this.charIndex > this.charPoint.length - 1 && (this.charIndex = 0);
      };
      e.prototype.update = function() {};
      __decorate([ c(cc.Node) ], e.prototype, "loadingIcon", void 0);
      __decorate([ c(cc.Label) ], e.prototype, "loadingTxt", void 0);
      __decorate([ c(cc.Integer) ], e.prototype, "speed", void 0);
      __decorate([ c(cc.Node) ], e.prototype, "bgNode", void 0);
      return __decorate([ s ], e);
    }(cc.Component);
    exports["default"] = l;
    cc._RF.pop();
  }, {} ],
  PuzzleCell: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d167dLHxotLS6RqGxYST/a2", "PuzzleCell");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports["default"] = function(t) {
      this.index = -1, this.column = -1, this.row = -1, this.solution = null, this.userSolution = null, 
      this.aiSolution = null, Object.assign(this, t);
    };
    cc._RF.pop();
  }, {} ],
  PuzzleLine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d7a9hUs9pK9rzKlQnQWDCz", "PuzzleLine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports["default"] = function(t) {
      this.type = "", this.index = -1, this.length = 0, this.minimumSectionLength = 0, 
      this.sections = [], this.cells = [], this.solved = !1, Object.assign(this, t);
    };
    cc._RF.pop();
  }, {} ],
  Puzzle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4cbfbVyuLJBPbnN8fp3n4Nt", "Puzzle");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _utility = require("Utility");
    var i = function() {
      function t(t, e) {
        if (void 0 === t || void 0 === e) throw "width and height are required constructor parameters.";
        if (t <= 0 || e <= 0 || 1 === t && 1 === e) throw "invalid dimensions: " + t.toString() + " x " + e.toString();
        this.width = "number" == typeof t ? t : parseInt(t.toString(), 10);
        this.height = "number" == typeof e ? e : parseInt(e.toString(), 10);
        this.totalCells = this.width * this.height;
        this.reset();
      }
      t.prototype.reset = function() {
        var t = this;
        var e = _utility["default"].getZeroFilledArray;
        this.creator = null;
        this.cells = [];
        this.rowHints = [];
        this.columnHints = [];
        this.grid = e(this.height).map(function() {
          return e(t.width);
        });
      };
      t.prototype.checkUserSolution = function() {
        return this.cells.every(function(t) {
          var e = 1 === t.userSolution ? 1 : 0;
          return t.solution === e;
        });
      };
      t.prototype.getRowCells = function(t) {
        var e;
        var o = [];
        var n = t * this.width;
        var i = n + this.width;
        for (e = n; e < i; e++) o.push(this.cells[e]);
        return o.length > 0 && o;
      };
      t.prototype.getColumnCells = function(t) {
        var e;
        var o = [];
        for (e = t; e < this.cells.length; e += this.width) o.push(this.cells[e]);
        return o.length > 0 && o;
      };
      t.prototype.getCellByIndex = function(t) {
        var e = "number" != typeof t ? parseInt(t, 10) : t;
        return !!this.cells[e] && this.cells[e];
      };
      return t;
    }();
    exports["default"] = i;
    cc._RF.pop();
  }, {
    Utility: "Utility"
  } ],
  Solver: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f4a76CUybNNl5+41191uovc", "Solver");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _puzzleLine = require("PuzzleLine");
    var _utility = require("Utility");
    var r = function() {
      function t(t) {
        this.puzzle = t;
        this._reset();
      }
      t.prototype.solve = function() {
        var t;
        var e;
        var o;
        var n;
        var i = new Date().getTime();
        var r = -1;
        for (this.isReset || this._reset(), this.isReset = !1; this._getProgress() > r && this._getTotalSolved() < this.puzzle.cells.length; ) {
          for (new Date().getTime(), r = this._getProgress(), o = 0; o < this.lines.length; o++) (n = this.lines[o]).solved || this.eliminateImpossibleFits(n), 
          n.solved || this.findKnownPositivesAndNegatives(n), n.solved || this.findSectionDefiningChains(n), 
          n.solved || this.findAnchoredSections(n), n.solved || this.findCompletedSections(n), 
          n.solved || this.findCompletedLines(n);
          new Date().getTime();
        }
        t = this._getTotalSolved() === this.puzzle.cells.length;
        e = (new Date().getTime() - i) / 1e3;
        this.elapsedTime = e;
        return t;
      };
      t.prototype.eliminateImpossibleFits = function(t) {
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
        if (0 === t.sections.length) for (u = 0; u < t.cells.length; u++) this._setCellSolution(t.cells[u], 0);
        for (p = 0; p < t.length && 0 === t.cells[p].aiSolution; p++) d++;
        for (p = t.length - 1; p >= 0 && 0 === t.cells[p].aiSolution; p--) h--;
        for (a = 0; a < t.sections.length; a++) {
          for (o = t.sections[a], r = _utility["default"].cloneArray(o.possibleStartIndexes), 
          s = 0; s < o.possibleStartIndexes.length; s++) for (n = o.possibleStartIndexes[s], 
          c = t.cells[n + o.length], (n < d || n > h) && (r = _utility["default"].removeFromArray(r, n)), 
          c && 1 === c.aiSolution && (r = _utility["default"].removeFromArray(r, n)), l = (l = n + o.length - 1) > t.length - 1 ? t.length - 1 : l, 
          e = n; e <= l; e++) (e > t.length - 1 || 0 === t.cells[e].aiSolution) && (r = _utility["default"].removeFromArray(r, n));
          d += o.length + 1;
          h += o.length + 1;
          o.possibleStartIndexes = r;
        }
      };
      t.prototype.findKnownPositivesAndNegatives = function(t) {
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
          for (o = t.sections[e], n = _utility["default"].getZeroFilledArray(t.length), r = 0; r < o.possibleStartIndexes.length; r++) for (s = (a = o.possibleStartIndexes[r]) + o.length - 1, 
          c = a; c <= s; c++) n[c]++, d[c]++;
          for (l = 0; l < n.length; l++) u = n[l], (p = t.cells[l]) && null === p.aiSolution && u === o.possibleStartIndexes.length && this._setCellSolution(p, 1);
        }
        for (l = 0; l < d.length; l++) u = d[l], (p = t.cells[l]) && null === p.aiSolution && 0 === u && this._setCellSolution(p, 0);
      };
      t.prototype.findAnchoredSections = function(t) {
        var e;
        var o;
        var n;
        var i;
        if (t.sections.length > 0) {
          for (n = t.sections[0], i = t.sections[t.sections.length - 1], o = null, e = 0; e < t.cells.length && null !== t.cells[e].aiSolution; e++) if (1 === t.cells[e].aiSolution) {
            o = [ e, e + n.length - 1 ];
            break;
          }
          if (null !== o) {
            for (e = o[0]; e <= o[1]; e++) t.cells[e] && this._setCellSolution(t.cells[e], 1);
            t.cells[e] && this._setCellSolution(t.cells[e], 0);
          }
          for (o = null, e = t.cells.length - 1; e >= 0 && null !== t.cells[e].aiSolution; e--) if (1 === t.cells[e].aiSolution) {
            o = [ e - i.length + 1, e ];
            break;
          }
          if (null !== o) {
            for (e = o[0]; e <= o[1]; e++) t.cells[e] && this._setCellSolution(t.cells[e], 1);
            t.cells[o[0] - 1] && this._setCellSolution(t.cells[o[0] - 1], 0);
          }
        }
      };
      t.prototype.findSectionDefiningChains = function(t) {
        var e;
        var o;
        var n;
        var r;
        var a;
        var s = [];
        var c = 0;
        for (a = _utility["default"].cloneArray(t.sections).sort(function(t, e) {
          return t.length > e.length ? -1 : 1;
        })[0], e = 0; e < t.cells.length; e++) 1 === (o = t.cells[e]).aiSolution && (1 !== c ? (n = {
          start: e,
          length: 1
        }, s.push(n)) : n && n.length++), c = o.aiSolution;
        for (r = 0; r < s.length; r++) (n = s[r]).length === a.length && (t.cells[n.start - 1] && this._setCellSolution(t.cells[n.start - 1], 0), 
        t.cells[n.start + a.length] && this._setCellSolution(t.cells[n.start + a.length], 0), 
        a.solved = !0);
      };
      t.prototype.findCompletedSections = function(t) {
        var e;
        var o;
        var n;
        var i;
        for (e = 0; e < t.sections.length; e++) (o = t.sections[e]).solved || 1 !== o.possibleStartIndexes.length || (n = o.possibleStartIndexes[0] - 1, 
        i = o.possibleStartIndexes[0] + o.length, t.cells[n] && null === t.cells[n].aiSolution && this._setCellSolution(t.cells[n], 0), 
        t.cells[i] && null === t.cells[i].aiSolution && this._setCellSolution(t.cells[i], 0), 
        o.solved = !0);
      };
      t.prototype.findCompletedLines = function(t) {
        var e;
        var o;
        var n;
        var i = 0;
        var r = 0;
        for (e = 0; e < t.sections.length; e++) i += t.sections[e].length;
        for (o = 0; o < t.cells.length; o++) r += 1 === (n = t.cells[o]).aiSolution ? 1 : 0;
        if (i === r) for (o = 0; o < t.cells.length; o++) null === (n = t.cells[o]).aiSolution && this._setCellSolution(n, 0);
      };
      t.prototype._reset = function() {
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
        for (this.isReset = !0, this.elapsedTime = 0, this.solutionLog = [], this.lines = [], 
        e = 0; e < this.puzzle.cells.length; e++) this.puzzle.cells[e].aiSolution = null;
        for (t = 0; t < this.puzzle.width; t++) p.push(t);
        for (t = 0; t < this.puzzle.height; t++) d.push(t);
        for (o = 0; o < this.puzzle.rowHints.length; o++) if (i = this.puzzle.rowHints[o], 
        r = this.puzzle.getRowCells(o)) {
          for (a = new _puzzleLine["default"]({
            type: "row",
            index: o,
            length: this.puzzle.width,
            cells: r
          }), s = 0; s < i.length; s++) c = i[s], a.sections.push({
            index: s,
            length: c,
            possibleStartIndexes: p,
            knownIndexes: [],
            solved: !1
          }), a.minimumSectionLength += c + 1;
          a.minimumSectionLength--;
          this.lines.push(a);
        }
        for (l = 0; l < this.puzzle.columnHints.length; l++) {
          for (u = this.puzzle.columnHints[l], a = new _puzzleLine["default"]({
            type: "column",
            index: l,
            length: this.puzzle.height,
            cells: this.puzzle.getColumnCells(l)
          }), s = 0; s < u.length; s++) c = u[s], a.sections.push({
            index: s,
            length: c,
            possibleStartIndexes: d,
            knownIndexes: [],
            solved: !1
          }), a.minimumSectionLength += c + 1;
          a.minimumSectionLength--;
          this.lines.push(a);
        }
      };
      t.prototype._setCellSolution = function(t, e) {
        var o;
        var n;
        var i;
        var r;
        var a;
        var s;
        var c;
        if (null === t.aiSolution) for (o = 0; o < this.lines.length; o++) if (i = "row" === (n = this.lines[o]).type && n.index === t.row, 
        r = "column" === n.type && n.index === t.column, a = 0, i || r) {
          for (s = 0; s < n.cells.length; s++) (c = n.cells[s]).index === t.index ? (c.aiSolution = e, 
          a++) : null !== c.aiSolution && a++;
          a === n.length && (n.solved = !0);
        }
      };
      t.prototype._getTotalSolved = function() {
        var t;
        var e = 0;
        for (t = 0; t < this.puzzle.cells.length; t++) e += null !== this.puzzle.cells[t].aiSolution ? 1 : 0;
        return e;
      };
      t.prototype._getProgress = function() {
        var t;
        var e;
        var o;
        var n = 0;
        var i = 0;
        for (t = 0; t < this.lines.length; t++) for (n += (e = this.lines[t]).sections.length * ("row" === e.type ? this.puzzle.width : this.puzzle.height), 
        o = 0; o < e.sections.length; o++) i += e.sections[o].possibleStartIndexes.length;
        return n - i;
      };
      return t;
    }();
    exports["default"] = r;
    cc._RF.pop();
  }, {
    PuzzleLine: "PuzzleLine",
    Utility: "Utility"
  } ],
  Utility: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "35509Oblm1OqYii3D8KZBBq", "Utility");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var n = function() {
      function t() {}
      t.removeFromArray = function(t, e) {
        var o = t.indexOf(e);
        -1 !== o && t.splice(o, 1);
        return t;
      };
      t.getZeroFilledArray = function(t) {
        return new Array(t).fill(0);
      };
      t.cloneArray = function(t) {
        return t.slice(0);
      };
      return t;
    }();
    exports["default"] = n;
    cc._RF.pop();
  }, {} ],
  adC: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "80b6eItmFZEdbpPpK3DOIed", "adC");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.VEnum = exports.VEnum2 = void 0;
    (function(t) {
      t[t.SHORT = 15] = "SHORT", t[t.MEDIUM = 30] = "MEDIUM", t[t.LONG = 60] = "LONG";
    })(exports.VEnum2 || (exports.VEnum2 = {}));
    exports.VEnum = {
      15: "adunit-c0d0468d71e666b4",
      30: "adunit-c0d0468d71e666b4",
      60: "adunit-c0d0468d71e666b4"
    };
    cc._RF.pop();
  }, {} ],
  ali: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ea91av6hxDDJyMqyRofUmH", "ali");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.my = void 0;
    var _c = require("c");
    var _com = require("com");
    var _env = require("env");
    var _evts = require("evts");
    var _pConst = require("pConst");
    var _request = require("request");
    var _sound = require("sound");
    var _time = require("time");
    var _uData = require("uData");
    var _pInfo = require("pInfo");
    var v = function(t) {
      function e() {
        var e = t.call(this) || this;
        e.isSharing = !1;
        e.sdkSwitch = _pConst.DefaultSDKSwitch;
        e.videoCheckedMap = {};
        e.videoCheckedLastT = {};
        e.uniqueVideoUnitId = "ad_tiny_2021004133656183_202401292200080698";
        e.isLoading = !1;
        e.isLoggedIn = !1;
        e.onHideT = 0;
        e.noAd = !1;
        e.noVideo = !1;
        e.lastInterAdShowT = 0;
        e.switchesInitd = !1;
        e.gameRecorder = null;
        e.ta = null;
        e.m_nStartRecordT = 0;
        e.m_nRecordT = 0;
        e.m_bIsRecording = !1;
        e.m_nAutoStopVideoId = 0;
        e.m_strVideoPath = "";
        e.cDeskCatch = !1;
        e.isRejed = !1;
        e.onKeyboardComplete = null === exports.my || void 0 === exports.my ? void 0 : exports.my.onKeyboardComplete;
        exports.my = e.string() === _pConst.PFCode.Alipay ? window.my : globalThis.my;
        XMLHttpRequest.prototype.getResponseHeader = function() {};
        var n = console.log;
        console.log = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          var o = t.some(function(t) {
            return "string" == typeof t && t.includes("\u5185\u5bb9\u5de1\u68c0");
          });
          o || n.apply(console, t);
        };
        return e;
      }
      __extends(e, t);
      Object.defineProperty(e.prototype, "appId", {
        get: function get() {
          return "2021004133656183";
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.string = function() {
        return _pConst.PFCode.Alipay;
      };
      e.prototype.init = function() {
        this.initAliListener();
        this.initCommonSetting();
      };
      e.prototype.initTga = function() {};
      e.prototype.isSwitchedInitd = function() {
        return this.switchesInitd;
      };
      e.prototype.initAliListener = function() {
        var t = this;
        exports.my.onShow(function(e) {
          _evts["default"].plE.emit({
            onShow: !0,
            isSharing: t.isSharing
          }), _uData["default"].ins.syncLaunchOption(e), t.isSharing || t.reenter(), t.bySlider = "gamecenter" == e.query.sourceChannel, 
          t.checkDesktopExist().then(function() {
            _evts["default"].opE.emit({
              action: _evts["default"].Desktop_Chg
            });
          }), _evts["default"].opE.emit({
            action: _evts["default"].Slider_Chg
          });
        });
        t.sidebarExist = t.canUse("10.5.60");
        exports.my.onHide(function() {
          t.onHideT = _time["default"].ins.serverTime, _evts["default"].plE.emit({
            onHide: !0
          });
        });
        exports.my.onError(function(t) {
          _env.env.mode !== _env.EM.PROD && exports.my.alert({
            title: t.error || "\u5f02\u5e38\u62a5\u9519",
            content: t.stack || t + "",
            showCancel: !1,
            buttonText: "\u597d\u7684"
          });
        });
        var e = _pConst.SDKConfig.shareData();
        var n = "iOS" === this.getSystemData().platform || "iPhone OS" === this.getSystemData().platform ? "https://tjkj300.oss-cn-shenzhen.aliyuncs.com/web/tjkj300web/other/share.jpg" : e.imageUrl;
        exports.my.onShareAppMessage = function() {
          return {
            title: e.title,
            desc: "",
            bgImgUrl: n,
            success: function success() {
              _sound["default"].ins.playBGM();
            },
            fail: function fail() {
              _sound["default"].ins.playBGM();
            }
          };
        };
        exports.my.onMemoryWarning && exports.my.onMemoryWarning(function() {
          exports.my.triggerGC && exports.my.triggerGC();
        });
        var i = this.uniqueVideoUnitId;
        null == this.videoAd && (this.videoAd = exports.my.createRewardedAd({
          adUnitId: i
        }));
        null == this.videoAd && this.videoAd.load();
      };
      e.prototype.initCommonSetting = function() {
        _uData["default"].ins.syncLaunchOption(exports.my.getLaunchOptionsSync());
        exports.my.getNetworkType({
          success: function success() {},
          fail: function fail() {}
        });
        _evts["default"].chE.on(function() {});
      };
      e.prototype.setAccountID = function() {
        _env.env.mode;
        _env.EM.TEST;
      };
      e.prototype.login = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            return [ 2, new Promise(function(t) {
              exports.my.getAuthCode({
                scopes: "auth_base",
                success: function success(e) {
                  var o = {};
                  o.code = e.authCode;
                  try {
                    t(o);
                  } catch (n) {}
                },
                fail: function fail(e) {
                  console.error("my.getAuthCode \u8c03\u7528\u5931\u8d25", e);
                  t({});
                }
              });
            }) ];
          });
        });
      };
      e.prototype.initCloud = function() {
        return Promise.resolve(null);
      };
      e.prototype.syncTime = function() {
        return Promise.resolve(null);
      };
      e.prototype.reenter = function() {};
      e.prototype.getStorage = function(t) {
        try {
          var e = exports.my.getStorageSync({
            key: t
          });
          return e.success ? null == e.data || "" == e.data ? null : JSON.parse(e.data) : null == e || "" == e ? null : JSON.parse(e);
        } catch (n) {}
      };
      e.prototype.setStorage = function(t, e) {
        try {
          var n = exports.my.setStorageSync({
            key: t,
            data: JSON.stringify(e)
          });
          n.success || console.error("setStorageSync fail", n.errorMessage, "\n", n.error);
        } catch (i) {}
      };
      e.prototype.clearStorage = function() {
        try {
          exports.my.clearStorageSync();
        } catch (t) {}
      };
      e.prototype.removeStorage = function(t) {
        try {
          exports.my.removeStorageSync(t);
        } catch (e) {}
      };
      e.prototype.trackLogin = function() {};
      e.prototype.trackUserSet = function() {};
      e.prototype.trackUserSetOnce = function() {};
      e.prototype.trackEvent = function() {};
      e.prototype.getSeq = function() {};
      e.prototype.consumeSeq = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(e) {
            switch (e.label) {
             case 0:
              return t.sequenceInfo.type != _pConst.STDSeqType.VIDEO ? [ 3, 2 ] : [ 4, this.doWatchAD(t) ];

             case 1:
              e.sent(), this.doShare(), e.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      e.prototype.doWatchAD = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          var e;
          return __generator(this, function() {
            return this.noAd ? [ 2 ] : this.noVideo ? (console.error("[error] no video"), [ 2, Promise.reject(_pConst.VideoFailCode.NO_AD) ]) : (_evts["default"].adE.emit(_c.ADE.VIDEO), 
            this.showLoading(), e = this, [ 2, new Promise(function(o, n) {
              e.videoAd.onClose(function(i) {
                null != i && i.isEnded ? (_evts["default"].adE.emit(_c.ADE.VIDEO_END), e.trackEvent("video", {
                  step: "complete",
                  unit: void 0,
                  type: t.videoSource,
                  item: t.item
                }), o(1)) : (_evts["default"].adE.emit(_c.ADE.VIDEO_END), n(_pConst.VideoFailCode.CANCELED));
              });
              e.videoAd.load().then(function() {
                e.videoAd.show().then(function() {
                  e.hideLoading();
                })["catch"](function() {
                  e.hideLoading();
                  _evts["default"].adE.emit(_c.ADE.VIDEO_END);
                  e.videoAd = null;
                  n(_pConst.VideoFailCode.NO_AD);
                });
              })["catch"](function() {
                e.hideLoading();
                n(_pConst.VideoFailCode.NO_AD);
              }).then(function() {});
            }) ]);
          });
        });
      };
      e.prototype.doShare = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            return [ 2 ];
          });
        });
      };
      e.prototype._askReShare = function() {};
      e.prototype.canUse = function(t) {
        return _com["default"].ins.compareVersion(this.getSystemData().version, t) >= 0;
      };
      e.prototype.getSystemData = function() {
        if (null == this.systemInfoCache) try {
          this.systemInfoCache = exports.my.getSystemInfoSync();
        } catch (t) {
          return _pConst.DefaultSystemInfo;
        }
        return this.systemInfoCache;
      };
      e.prototype.getSwitches = function() {};
      e.prototype.vibrate = function(t) {
        t == _pConst.VEnum4.SHORT ? exports.my.vibrateShort("heavy") : t == _pConst.VEnum4.LONG && exports.my.vibrateLong({
          success: function success() {},
          fail: function fail() {}
        });
      };
      e.prototype.preloadVideo = function() {
        return !1;
      };
      e.prototype.showConfirm = function(t) {
        return new Promise(function(e) {
          exports.my.confirm(Object.assign(Object.assign({}, t), {
            success: function success(t) {
              t.confirm ? e(!0) : e(!1);
            },
            fail: function fail() {
              e(!1);
            }
          }));
        });
      };
      e.prototype.refreshGame = function() {
        location.reload();
      };
      e.prototype.showLoading = function() {
        this.isLoading = !0;
        exports.my.showLoading({
          content: "\u52a0\u8f7d\u4e2d",
          mask: !0
        });
      };
      e.prototype.hideLoading = function() {
        this.isLoading && (exports.my.hideLoading(), this.isLoading = !1);
      };
      e.prototype.log = function() {};
      e.prototype.getMenuBounding = function() {};
      e.prototype.createShareImage = function() {};
      e.prototype.preloadInterstitialAD = function() {};
      e.prototype.showInterstitialAD = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            return [ 2, null ];
          });
        });
      };
      e.prototype.canShowBanner = function() {
        return !1;
      };
      e.prototype.getBannerSize = function() {
        return new cc.Size(0, 0);
      };
      e.prototype.showBanner = function() {};
      e.prototype.hideBanner = function() {};
      e.prototype.getSubscribeCnt = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            return [ 2, 0 ];
          });
        });
      };
      e.prototype.subscribe = function() {};
      e.prototype.initVideoRecorder = function() {};
      e.prototype.startVideoRecord = function() {};
      e.prototype.pauseVideoRecord = function() {};
      e.prototype.resumeVideoRecord = function() {};
      e.prototype.stopVideoRecord = function() {};
      e.prototype.startStopRecordTimeout = function() {};
      e.prototype.clearStopRecordTimeout = function() {};
      e.prototype.autoStopVideoRecord = function() {};
      e.prototype.onVideoRecordStart = function() {};
      e.prototype.onVideoRecordEnd = function() {};
      e.prototype.onVideoRecordError = function() {};
      e.prototype.hasVideoRecord = function() {};
      e.prototype.shareVideoRecord = function() {};
      e.prototype.uploadAdEvent = function() {};
      e.prototype.PostMessage = function() {};
      e.prototype.SetUserCloudStorage = function() {};
      e.prototype.GetOpenDataContext = function() {};
      e.prototype.addShortcut = function() {};
      e.prototype.checkDesktopExist = function() {
        var t = this;
        return new Promise(function(e) {
          var o = _request["default"].ins;
          t.cDeskCatch = !1;
          o.addHomepageConsult().then(function(o) {
            if (1 === o.status) {
              var n = _uData["default"].ins.getLocalData().aliAddHome;
              var i = "N" === o.data ? 1 : 0;
              1 === n && 0 === i && _evts["default"].opE.emit({
                action: _evts["default"].ALIPAY_MAIN
              });
              _pInfo["default"].ins.setAliAddHome(i);
              e(1);
            } else t.cDeskCatch = !0, e(0);
          })["catch"](function(o) {
            t.cDeskCatch = !0;
            e(0);
            console.error(o);
          });
        });
      };
      e.prototype.addGamesetlattice = function() {
        this.navigateToMiniProgramBySchema("alipays://platformapi/startapp?appId=2021003125685383&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fyuyan%2F180020010001206617%2Findex.html%3FcaprMode%3Dsync&chInfo=gamesetlattice&sms=YES&appClearTop=false", function() {}, function() {});
      };
      e.prototype.share = function() {
        return new Promise(function(t) {
          exports.my.showSharePanel({
            from: "code",
            success: function success() {
              _sound["default"].ins.playBGM();
              t(1);
            },
            fail: function fail(e) {
              console.error("alisharedata fail:", e);
              _sound["default"].ins.playBGM();
              t(0);
            }
          });
        });
      };
      e.prototype.getUserInfo = function() {
        var t = this;
        return new Promise(function(e, n) {
          exports.my.getAuthCode && exports.my.getAuthCode({
            scopes: "auth_user",
            success: function success() {
              exports.my.getAuthUserInfo({
                success: function success(t) {
                  var o = t.avatar;
                  t.avatar = o.replace("http://", "https://");
                  e(t);
                },
                fail: function fail(t) {
                  n(t);
                }
              });
            },
            fail: function fail() {
              t.showRefuseTip(e, n);
            }
          });
        });
      };
      e.prototype.showRefuseTip = function(t, e) {
        return __awaiter(this, void 0, void 0, function() {
          var t = this;
          return __generator(this, function() {
            this.showConfirm({
              title: "\u53cb\u60c5\u63d0\u793a",
              content: "\u7533\u8bf7\u4f7f\u7528\u60a8\u7684\u7528\u6237\u4fe1\u606f\uff0c\u5c55\u793a\u6392\u884c\u699c\u3002",
              confirmButtonText: "\u5141\u8bb8",
              cancelButtonText: "\u62d2\u7edd"
            }).then(function(o) {
              o ? t.getUserInfo() : e();
            });
            return [ 2 ];
          });
        });
      };
      e.prototype._getUserInfo = function() {};
      e.prototype.schemaToParams = function(t) {
        if (!t.startsWith("alipays:")) return {
          message: "! \u975e alipays: \u5f00\u5934"
        };
        for (var e = {}, o = 0, n = t.replace(/^.*?\?/, "").split("&").map(function(t) {
          var e = t.includes("=") ? t.indexOf("=") : t.length;
          return [ t.slice(0, e), t.slice(e + 1) ].map(decodeURIComponent);
        }); o < n.length; o++) {
          var i = n[o];
          var r = i[0];
          var a = i[1];
          if ("appId" == r) {
            if (16 != a.length) return {
              message: "! \u975e 16 \u4f4d appId '" + a + "'"
            };
            e[r] = a;
          } else if ("chInfo" === r) {
            var s = e.startParam || {};
            s[r] = a;
            e.startParam = s;
            continue;
          }
        }
        return {
          params: e
        };
      };
      e.prototype.navigateToMiniProgramBySchema = function(t, e, n) {
        var i = this.schemaToParams(t);
        var a = i.params;
        var s = i.message;
        a ? exports.my.navigateToMiniProgram(__assign(__assign({}, a), {
          success: e,
          fail: n
        })) : n && n({
          error: -1,
          errorMessage: "\u65e0\u6548\u7684\u5c0f\u7a0b\u5e8f schema " + t + ": " + s
        });
      };
      e.prototype.navigateToScene = function(t) {
        void 0 === t && (t = "sidebar");
        this.navigateToMiniProgramBySchema("alipays://platformapi/startapp?appId=2021003125685383&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fyuyan%2F180020010001206617%2Findex.html%3FcaprMode%3Dsync&chInfo=returnvisit&sms=YES&appClearTop=false", function() {}, function() {});
      };
      e.prototype.reportEvent = function(t, e) {
        void 0 === e && (e = {});
      };
      e.prototype.showModal = function(t) {
        var e = t.title;
        var o = t.content;
        var n = t.confirmText;
        var i = (t.showCancel, {
          title: e,
          content: o,
          buttonText: n
        });
        return this.showAlert(i);
      };
      e.prototype.showAlert = function(t) {
        return new Promise(function(e, n) {
          exports.my.alert(Object.assign(Object.assign({}, t), {
            success: function success() {
              e(1);
            },
            fail: function fail(t) {
              console.error(t);
              n(t);
            }
          }));
        });
      };
      e.prototype.requestSubscribeMessage = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return new Promise(function(e, n) {
          exports.my.getSetting({
            withSubscriptions: !0,
            success: function success(i) {
              i.authSetting.subscriptionsSetting.mainSwitch ? e(1) : exports.my.requestSubscribeMessage({
                entityIds: t,
                success: function success(t) {
                  t.success && "subscribe" === t.behavior && e(1);
                },
                fail: function fail(t) {
                  n(t);
                }
              });
            },
            fail: function fail() {
              n();
            }
          });
        });
      };
      return e;
    }(require("pf")["default"]);
    exports["default"] = v;
    cc._RF.pop();
  }, {
    c: "c",
    com: "com",
    env: "env",
    evts: "evts",
    pConst: "pConst",
    pInfo: "pInfo",
    pf: "pf",
    request: "request",
    sound: "sound",
    time: "time",
    uData: "uData"
  } ],
  androidP: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65e81r/NHpIf7QB9ks4KiDS", "androidP");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var r;
    var _pConst = require("pConst");
    var s = function(t) {
      function e() {
        var e = t.call(this) || this;
        r = jsb.reflection.callStaticMethod;
        return e;
      }
      __extends(e, t);
      Object.defineProperty(e.prototype, "appId", {
        get: function get() {
          return "dev_nonogram";
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.string = function() {
        return _pConst.PFCode.Android;
      };
      e.prototype.vibrate = function() {
        r("org/cocos2dx/javascript/InstantAppActivity", "vibrate", "()V");
      };
      e.prototype.login = function() {
        return t.prototype.login.call(this);
      };
      e.prototype.setStorage = function(t, e) {
        var o = jsb.fileUtils.getWritablePath() + t;
        jsb.fileUtils.isDirectoryExist(o) || jsb.fileUtils.createDirectory(o);
        jsb.fileUtils.writeStringToFile(JSON.stringify(e), o + "/android_nonogram.txt");
      };
      e.prototype.getStorage = function(t) {
        var e = jsb.fileUtils.getWritablePath() + t;
        jsb.fileUtils.isDirectoryExist(e) || (jsb.fileUtils.createDirectory(e), jsb.fileUtils.writeStringToFile("", e + "/android_nonogram.txt"));
        var o = jsb.fileUtils.getStringFromFile(e + "/android_nonogram.txt");
        return null == o || "" == o ? null : JSON.parse(o);
      };
      e.prototype.setCloudData = function() {};
      e.prototype.doWatchAD = function() {
        var t = this;
        return new Promise(function(e, o) {
          t.resolve = e;
          t.reject = o;
          r("org/cocos2dx/javascript/InstantAppActivity", "playAd", "()V");
        });
      };
      return e;
    }(require("nativeP")["default"]);
    exports["default"] = s;
    cc._RF.pop();
  }, {
    nativeP: "nativeP",
    pConst: "pConst"
  } ],
  bagMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dfb15KhzmROJKM0MC8wEsot", "bagMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.bagItem = void 0;
    var _evts = require("evts");
    var _idx = require("idx");
    var _cfgMgr = require("cfgMgr");
    var _lang = require("lang");
    var _pInfo = require("pInfo");
    var c = function() {
      function t() {
        if (this._propTag = "props", t._ins) throw new Error("bagMgr can only be one\uff01");
        t._ins = this;
      }
      Object.defineProperty(t, "ins", {
        get: function get() {
          t._ins || new t();
          return t._ins;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.initBag = function(t) {
        if (t) {
          var e = _cfgMgr["default"].serverCfg.qw_line_rules.rules.times.set.basic_times.val;
          this.chgItemCount("qw_line_ticket", e, !1);
          this.updItem();
        }
      };
      Object.defineProperty(t.prototype, "bagItem", {
        get: function get() {
          this._bagItem || (this._bagItem = _pInfo["default"].ins.Bag);
          return this._bagItem;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.clearItem = function() {
        this._bagItem = null;
      };
      t.prototype.updItem = function() {
        _pInfo["default"].ins.Bag = this._bagItem;
      };
      t.prototype.useItem = function(t, e, o) {
        if (void 0 === e && (e = 1), t) if (this.bagItem[t]) {
          this.bagItem[t] -= e;
          this.bagItem[t] <= 0 && delete this.bagItem[t];
          this.updItem();
          var r = "\u62fc\u56fe";
          _lang.gemeTypeKey[o] && (r = _lang.gemeTypeKey[o]);
          _idx.platform.reportEvent(_idx.ERepEvt.useItem, {
            gameType: r,
            itemId: _lang.reportKey[t]
          });
          _evts["default"].opE.emit({
            action: _evts["default"].UPD_MAIN_RED
          });
        } else cc.log("\u4f7f\u7528\u5931\u8d25\uff0c\u65e0\u8be5\u9053\u5177\uff1a" + t);
      };
      t.prototype.checkItemEnough = function(t, e) {
        void 0 === e && (e = 1);
        return this.bagItem[t] && this.bagItem[t] >= e;
      };
      t.prototype.addItem = function(t, e, o, i) {
        void 0 === e && (e = 1);
        void 0 === o && (o = !0);
        void 0 === i && (i = !0);
        this.specialItemCheck(t, e) || t && (null == this.bagItem[t] && (this.bagItem[t] = 0), 
        this.bagItem[t] += e, o && this.updItem(), "puzzle_pieces" !== t && "newYear_pieces" !== t || _evts["default"].opE.emit({
          action: _evts["default"].UPDJIGSAWGAME
        }), i && _evts["default"].opE.emit({
          action: _evts["default"].UPD_MAIN_RED
        }));
      };
      t.prototype.chgItemCount = function(t, e, o) {
        void 0 === e && (e = 1);
        void 0 === o && (o = !0);
        t && (null == this.bagItem[t] && (this.bagItem[t] = 0), this.bagItem[t] = e, o && this.updItem());
      };
      t.prototype.getItemCount = function(t) {
        return t && this.bagItem[t] ? this.bagItem[t] : 0;
      };
      t.prototype.specialItemCheck = function(t, e) {
        switch (t) {
         case "coin":
          return _pInfo["default"].ins.addCoin(e), !0;

         case "exp":
          return _pInfo["default"].ins.addExp(e), !0;

         case "times":
          return _pInfo["default"].ins.addPower(e), !0;

         default:
          return !1;
        }
      };
      return t;
    }();
    exports["default"] = c;
    exports.bagItem = function() {
      this.count = 0;
    };
    cc._RF.pop();
  }, {
    cfgMgr: "cfgMgr",
    evts: "evts",
    idx: "idx",
    lang: "lang",
    pInfo: "pInfo"
  } ],
  banner: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b491bWadyVEz4fDbYZRH4YG", "banner");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _com = require("com");
    var _lang = require("lang");
    var _pInfo = require("pInfo");
    var l = cc._decorator;
    var u = l.ccclass;
    var p = l.property;
    var d = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.ani = null;
        e.par = null;
        e.bannerLabel = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        var t = _pInfo["default"].ins.getRecordData().heWins;
        var e = t >= 50 ? 40002 : 40001;
        40001 === e && (t = _com["default"].ins.rad(80, 99));
        this.bannerLabel.string = _lang.lang[e].format(t);
      };
      e.prototype.play = function() {
        this.ani.play();
        this.par.resetSystem();
      };
      __decorate([ p(cc.Animation) ], e.prototype, "ani", void 0);
      __decorate([ p(cc.ParticleSystem) ], e.prototype, "par", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "bannerLabel", void 0);
      return __decorate([ u ], e);
    }(cc.Component);
    exports["default"] = d;
    cc._RF.pop();
  }, {
    com: "com",
    lang: "lang",
    pInfo: "pInfo"
  } ],
  baseUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d5a9qK3IdB0LQLFV0VPhWU", "baseUI");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.HIERARCHY = void 0;
    var a;
    var _com = require("com");
    var _idx = require("idx");
    var l = cc._decorator;
    var u = l.ccclass;
    var p = l.property;
    (function(t) {
      t[t.None = 0] = "None";
      t[t.Left = 1] = "Left";
      t[t.Right = 2] = "Right";
      t[t.Down = 3] = "Down";
    })(a = exports.HIERARCHY || (exports.HIERARCHY = {}));
    var d = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.ctx = null;
        e.closeBtn = null;
        e.sAni = !0;
        e.hAni = !0;
        e.panelHierachy = a.Down;
        e.a = .5;
        e.cb = null;
        e.b = null;
        e.c = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        this.closeBtn && this.closeBtn.node.on("click", this.hideThis, this);
      };
      e.prototype.hideThis = function() {};
      e.prototype.show = function(t, e) {
        void 0 === e && (e = this.a);
        this.c = t;
        this.init(this.c);
        this.uD(this.c);
        this.aUI();
        this.checkShow(e);
      };
      e.prototype.hide = function(t) {
        if (!this.isHideing) {
          this.isHideing = !0;
          var e = this;
          _com["default"].ins.a(t, 1);
          _com["default"].ins.b(this.node, !0);
          var o = this.node;
          var n = this.getK(e, o);
          return n ? new Promise(function(t) {
            n.call(function() {
              t(1);
            }).start();
          }) : new Promise(function(t) {
            o.active = !1;
            e.onHide && e.onHide();
            _com["default"].ins.b(e.node, !1);
            e.cb && e.cb(o, e.b);
            t(1);
          });
        }
      };
      e.prototype.getK = function(t, e) {
        switch (this.panelHierachy) {
         case a.Down:
          return cc.tween(this.ctx).to(.1, {
            y: 60
          }).to(.2, {
            y: -(cc.winSize.height + e.height) / 2
          }).call(function() {
            e.active = !1;
            t.onHide && t.onHide();
            _com["default"].ins.b(t.node, !1);
            t.cb && t.cb(e, t.b);
          });

         case a.Left:
          return this.moveHideAni(t, e, -cc.view.getVisibleSize().width);

         case a.Right:
          return this.moveHideAni(t, e, cc.view.getVisibleSize().width);

         default:
          return null;
        }
      };
      e.prototype.moveHideAni = function(t, e, o) {
        return cc.tween(this.ctx).to(.25, {
          x: o
        }, {
          easing: this.customEaseInOut
        }).call(function() {
          e.active = !1;
          t.onHide && t.onHide();
          _com["default"].ins.b(t.node, !1);
          t.cb && t.cb(e, t.b);
        });
      };
      e.prototype.init = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      };
      e.prototype.aUI = function() {
        if (_idx.platform.canShowBanner()) {
          var t = _idx.platform.getBannerSize().height / _idx.platform.getSystemData().windowHeight * cc.view.getVisibleSize().height;
          if (null != this.ctx) {
            var e = (cc.view.getVisibleSize().height - cc.view.getDesignResolutionSize().height) / 2;
            e < t && (this.ctx.y += t - e);
          }
        }
        var o = this.ctx.getComponent(cc.Widget);
        o && (o.enabled = !0, o.updateAlignment(), o.enabled = !1);
        var n = this.ctx.getComponentsInChildren(cc.Widget);
        if (n) for (var i = 0; i < n.length; i++) {
          var r = n[i];
          r.enabled = !0;
          r.updateAlignment();
          r.enabled = !1;
        }
      };
      e.prototype.uD = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      };
      e.prototype.onShow = function() {};
      e.prototype.onHide = function() {};
      e.prototype.setCb = function(t) {
        this.cb = t;
      };
      e.prototype.showAni = function(t) {
        var e = this;
        if (null != this.ctx && this.sAni) {
          var o = this.ctx;
          o.active = !0;
          o.scale = .5;
          o.opacity = 0;
          cc.tween(o).to(t, {
            scale: 1,
            opacity: 255
          }, {
            easing: "backOut"
          }).call(function() {
            e.onShow && e.onShow();
          }).start();
        } else this.onShow && this.onShow();
      };
      e.prototype.downAni = function() {
        var t = this;
        if (null != this.ctx && this.sAni) {
          var e = this.ctx;
          e.active = !0;
          e.y = -(cc.winSize.height + e.height) / 2;
          cc.tween(e).to(.2, {
            y: 60
          }).to(.1, {
            y: -20
          }).to(.04, {
            y: 0
          }).call(function() {
            t.onShow && t.onShow();
          }).start();
        } else this.onShow && this.onShow();
      };
      e.prototype.moveAni = function(t, e) {
        if (this.ctx) {
          this.ctx.x = e;
          var o = this;
          o.onShow && o.onShow();
          cc.tween(this.ctx).to(t, {
            x: 0
          }, {
            easing: this.customEaseInOut
          }).call(function() {
            o.onShow && o.onShow();
          }).start();
        }
      };
      e.prototype.customEaseInOut = function(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
      };
      e.prototype.checkShow = function(t) {
        switch (this.panelHierachy) {
         case a.Right:
          this.moveAni(t, cc.view.getVisibleSize().width);
          break;

         case a.Down:
          this.downAni();
          break;

         case a.Left:
          this.moveAni(t, -cc.view.getVisibleSize().width);
          break;

         default:
          this.onShow && this.onShow();
        }
        this.node.active = !0;
      };
      __decorate([ p(cc.Node) ], e.prototype, "ctx", void 0);
      __decorate([ p(cc.Button) ], e.prototype, "closeBtn", void 0);
      __decorate([ p(cc.Boolean) ], e.prototype, "sAni", void 0);
      __decorate([ p(cc.Boolean) ], e.prototype, "hAni", void 0);
      __decorate([ p({
        displayName: "\u5165\u573a\u65b9\u5f0f",
        tooltip: "\u8bbe\u7f6e\u5f53\u524d\u754c\u9762\u7684\u5165\u573a\u65b9\u5f0f\uff1a\nPop-\u5f39\u7a97\u8fdb\u5165\nLeft-\u5de6\u8fb9\u6ed1\u52a8\u8fdb\u5165\uff0c\nRight-\u53f3\u8fb9\u6ed1\u52a8\u8fdb\u5165\uff0c\nDown-\u4ece\u5e95\u90e8\u5f39\u51fa",
        type: cc.Enum(a)
      }) ], e.prototype, "panelHierachy", void 0);
      return __decorate([ u ], e);
    }(cc.Component);
    exports["default"] = d;
    cc._RF.pop();
  }, {
    com: "com",
    idx: "idx"
  } ],
  cfgMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f62a8NIu0RKNrbUIyQ8mN40", "cfgMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _res = require("res");
    var s = function() {
      function t() {}
      t.syncServerCfg = function(e) {
        t.serverCfg = e.times ? e : Object.assign(Object.assign({}, this.serverCfg), e);
        _evts["default"].opE.emit({
          action: _evts["default"].REFRESH_CFGDATA
        });
      };
      t.init = function() {
        return __awaiter(this, void 0, void 0, function() {
          var e;
          return __generator(this, function(o) {
            switch (o.label) {
             case 0:
              return t.serverCfg ? [ 3, 2 ] : [ 4, _res["default"].ins.l("json/serverCfgBackup", cc.JsonAsset) ];

             case 1:
              (e = o.sent()) && (t.serverCfg = e.json), o.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      return t;
    }();
    exports["default"] = s;
    cc._RF.pop();
  }, {
    evts: "evts",
    res: "res"
  } ],
  challengeMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fcc69/466NH/5HdjeFaWPR1", "challengeMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _numberUtils = require("NumberUtils");
    var _request = require("request");
    var _time = require("time");
    var _uData = require("uData");
    var _global = require("global");
    var _pInfo = require("pInfo");
    var p = function() {
      function t() {
        this.firstYear = 2024;
        this.firstMonth = 2;
        this.lvDatas = [];
        this.defalutLvData = [ {
          id: 1,
          type: 1,
          diff: 3,
          count: 500
        }, {
          id: 2,
          type: 2,
          diff: 4,
          size: 15,
          denstiy: .6,
          count: 10
        }, {
          id: 3,
          type: 3,
          diff: 3,
          size: 15,
          denstiy: .6,
          count: 5
        }, {
          id: 4,
          type: 1,
          diff: 3,
          count: 501
        }, {
          id: 5,
          type: 2,
          diff: 4,
          size: 15,
          denstiy: .6,
          count: 10
        }, {
          id: 6,
          type: 3,
          diff: 3,
          size: 15,
          denstiy: .6,
          count: 5
        }, {
          id: 7,
          type: 1,
          diff: 3,
          count: 502
        }, {
          id: 8,
          type: 2,
          diff: 4,
          size: 15,
          denstiy: .6,
          count: 10
        }, {
          id: 9,
          type: 3,
          diff: 3,
          size: 15,
          denstiy: .6,
          count: 5
        }, {
          id: 10,
          type: 1,
          diff: 3,
          count: 503
        }, {
          id: 11,
          type: 2,
          diff: 4,
          size: 15,
          denstiy: .6,
          count: 10
        }, {
          id: 12,
          type: 3,
          diff: 3,
          size: 15,
          denstiy: .6,
          count: 5
        }, {
          id: 13,
          type: 1,
          diff: 3,
          count: 504
        }, {
          id: 14,
          type: 2,
          diff: 4,
          size: 15,
          denstiy: .6,
          count: 10
        }, {
          id: 15,
          type: 3,
          diff: 3,
          size: 15,
          denstiy: .6,
          count: 5
        }, {
          id: 16,
          type: 1,
          diff: 3,
          count: 505
        }, {
          id: 17,
          type: 2,
          diff: 4,
          size: 15,
          denstiy: .6,
          count: 10
        }, {
          id: 18,
          type: 3,
          diff: 3,
          size: 15,
          denstiy: .6,
          count: 5
        }, {
          id: 19,
          type: 1,
          diff: 3,
          count: 506
        }, {
          id: 20,
          type: 2,
          diff: 4,
          size: 15,
          denstiy: .6,
          count: 10
        }, {
          id: 21,
          type: 3,
          diff: 3,
          size: 15,
          denstiy: .6,
          count: 5
        }, {
          id: 22,
          type: 1,
          diff: 3,
          count: 507
        }, {
          id: 23,
          type: 2,
          diff: 4,
          size: 15,
          denstiy: .6,
          count: 10
        }, {
          id: 24,
          type: 3,
          diff: 3,
          size: 15,
          denstiy: .6,
          count: 5
        }, {
          id: 25,
          type: 1,
          diff: 3,
          count: 508
        }, {
          id: 26,
          type: 2,
          diff: 4,
          size: 15,
          denstiy: .6,
          count: 10
        }, {
          id: 27,
          type: 3,
          diff: 3,
          size: 15,
          denstiy: .6,
          count: 5
        }, {
          id: 28,
          type: 1,
          diff: 3,
          count: 509
        }, {
          id: 29,
          type: 2,
          diff: 4,
          size: 15,
          denstiy: .6,
          count: 10
        }, {
          id: 30,
          type: 3,
          diff: 3,
          size: 15,
          denstiy: .6,
          count: 5
        }, {
          id: 31,
          type: 1,
          diff: 3,
          count: 600
        } ];
      }
      Object.defineProperty(t, "ins", {
        get: function get() {
          return this._ins || (this._ins = new t());
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.initNowMonthData = function() {
        return __awaiter(this, void 0, void 0, function() {
          var t;
          var e;
          var o;
          var n;
          var r;
          var a;
          var c = this;
          return __generator(this, function() {
            return this.loaded ? [ 2 ] : (this.loaded = 1, t = 1e3 * _time["default"].ins.serverTime, 
            e = new Date(t), o = e.getFullYear(), n = e.getMonth() + 1, r = this.getIdxByDate(o, n), 
            a = 100 * o + n, cc.resources.load("challenge", cc.JsonAsset, function(t, e) {
              !t && e && e.json ? c.lvDatas[r] = e.json : c.lvDatas[r] = c.defalutLvData;
            }), [ 2 ]);
          });
        });
      };
      t.prototype.getTodayIsFin = function() {
        var t = 1e3 * _time["default"].ins.serverTime;
        var e = new Date(t);
        var o = e.getFullYear();
        var n = e.getMonth() + 1;
        var i = e.getDate() - 1;
        return this.getfinData(o, n)[i];
      };
      t.prototype.getMonthData = function(t, e) {
        var o = new Date(t, e - 1, 1).getDay();
        return [ o = 0 == o ? 7 : o, new Date(t, e, 0).getDate() ];
      };
      t.prototype.getfinData = function(t, e) {
        var o = this.getIdxByDate(t, e);
        this.getLvData(o, t, e);
        for (var n = _pInfo["default"].ins.getChallengeData()[o] || 0, i = [], r = 0; r < 31; r++) {
          var a = this.getIsFin(n, r);
          i.push(a);
        }
        return i;
      };
      t.prototype.getLastUnFinIdx = function(t, e) {
        for (var o = this.getfinData(t, e), n = this.getMonthData(t, e), i = (n[0], n[1]), r = 0, a = 0; a < i; a++) o[a] || this.isLocked(t, e, a) || (r = a);
        return r;
      };
      t.prototype.getFinLvNum = function(t, e) {
        for (var o = this.getfinData(t, e), n = 0, i = 0, r = o.length; i < r; i++) o[i] && n++;
        return n;
      };
      t.prototype.getTheMonthIsFin = function(t, e) {
        for (var o = this.getfinData(t, e), n = this.getMonthData(t, e), i = (n[0], n[1]), r = 0, a = 0; a < i; a++) o[a] && r++;
        return r >= i;
      };
      t.prototype.getIsFin = function(t, e) {
        return (t & 1 << e) >> e != 0;
      };
      t.prototype.getLvData = function(t, e, o) {
        var n = this;
        if (!(t < 0)) {
          var i = this.lvDatas[t];
          if (i) return i;
          var r = 100 * e + o;
          cc.resources.load("challenge", cc.JsonAsset, function(e, o) {
            !e && o && o.json && Array.isArray(o.json) ? n.lvDatas[t] = o.json : n.lvDatas[t] = n.defalutLvData;
          });
        }
      };
      t.prototype.getLvDataByDate = function(t, e, o) {
        var n = this.getIdxByDate(t, e);
        var i = this.lvDatas[n];
        if (i) {
          var a = i[o];
          var s = _numberUtils["default"].RandomInt(0, this.defalutLvData.length - 1);
          a || (a = this.defalutLvData[s]);
          return a;
        }
        this.getLvData(n, t, e);
        return this.defalutLvData[o];
      };
      t.prototype.winChallenge = function(t) {
        var e = t.year;
        var o = t.month;
        var n = t.day;
        if (!this.getfinData(e, o)[n - 1]) {
          var i = this.getIdxByDate(e, o);
          var r = _pInfo["default"].ins.getChallengeData();
          var a = r[i] || 0;
          a += Math.pow(2, n - 1);
          r[i] = a;
          _pInfo["default"].ins.setChallengeData(r);
          this.updateChallengeData(e, o, n);
          _uData["default"].ins._setLocalAndCloudData();
        }
      };
      t.prototype.updateChallengeData = function(t, e, o) {
        var n = t + this.addZeroToNum(e) + this.addZeroToNum(o);
        _request["default"].ins.updateChallengeData(n);
      };
      t.prototype.getRequestChallengeData = function(t, e) {
        var o = t + this.addZeroToNum(e);
        return _request["default"].ins.getChallengeData(o);
      };
      t.prototype.addZeroToNum = function(t) {
        if (t < 0) return "";
        var e = "";
        t < 10 && (e = "0");
        return e + t;
      };
      t.prototype.getIdxByDate = function(t, e) {
        return 12 * (t - this.firstYear) + (e - this.firstMonth);
      };
      t.prototype.isLocked = function(t, e, o) {
        var n = 1e3 * _time["default"].ins.serverTime;
        var i = new Date(n);
        var r = i.getFullYear();
        var a = i.getMonth() + 1;
        var c = i.getDate() - 1;
        return t != r ? t > r : e != a ? e > a : o > c;
      };
      t.prototype.getChaPackData = function(t, e) {
        for (var o = this.getIdxByDate(t, e), n = _pInfo["default"].ins.getChallengePackData()[o] || 0, i = [], r = 0; r < 4; r++) {
          var a = this.getIsFin(n, r);
          i.push(a);
        }
        return i;
      };
      t.prototype.setChaPackData = function(t, e, o) {
        var n = this.getIdxByDate(t, e);
        var i = _pInfo["default"].ins.getChallengePackData();
        var r = i[n] || 0;
        r += Math.pow(2, o);
        i[n] = r;
        _pInfo["default"].ins.setChallengePackData(i);
      };
      t.prototype.getMonthRed = function(t, e) {
        for (var o = this.getFinLvNum(t, e), n = this.getChaPackData(t, e), i = 0, r = 0; r < 4; r++) o >= 7 * (r + 1) && !n[r] && i++;
        return i;
      };
      t.prototype.getBeforeMonthRed = function(t, e) {
        for (var o = t, n = e, i = this.getIdxByDate(o, n) + 1, r = 0, a = 0; a < i; a++) r += this.getMonthRed(o, n), 
        --n < 1 && (o -= 1, n = 12);
        return r;
      };
      t.prototype.getAllMonthRed = function() {
        var t = 1e3 * _time["default"].ins.serverTime;
        var e = new Date(t);
        var o = e.getFullYear();
        var n = e.getMonth() + 1;
        return this.getBeforeMonthRed(o, n);
      };
      return t;
    }();
    exports["default"] = p;
    cc._RF.pop();
  }, {
    NumberUtils: "NumberUtils",
    global: "global",
    pInfo: "pInfo",
    request: "request",
    time: "time",
    uData: "uData"
  } ],
  chaptBtn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9caaaxFVHdG34DDZ87Jv+Sy", "chaptBtn");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = a.property;
    var l = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.sprNode = null;
        e.lbls = [];
        e.redNumLb = null;
        e.flag = !0;
        return e;
      }
      __extends(e, t);
      e.prototype.start = function() {
        this.u();
      };
      e.prototype.getState = function() {
        return this.flag;
      };
      e.prototype.setLb = function(t) {
        this.lbls.forEach(function(e) {
          e.string = t;
        });
      };
      e.prototype.setState = function(t) {
        this.flag = t;
        this.u();
      };
      e.prototype.u = function() {
        null != this.sprNode && (this.sprNode.active = this.flag);
      };
      e.prototype.setRed = function(t) {
        this.redNumLb && (t ? (this.redNumLb.string = t + "", this.redNumLb.node.parent.active = !0) : this.redNumLb.node.parent.active = !1);
      };
      __decorate([ c(cc.Node) ], e.prototype, "sprNode", void 0);
      __decorate([ c([ cc.Label ]) ], e.prototype, "lbls", void 0);
      __decorate([ c(cc.Label) ], e.prototype, "redNumLb", void 0);
      return __decorate([ s ], e);
    }(cc.Component);
    exports["default"] = l;
    cc._RF.pop();
  }, {} ],
  chapterItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b3964ueQUBM7pwnBS90wcFu", "chapterItem");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _idx = require("idx");
    var _global = require("global");
    var _levelMgr = require("levelMgr");
    var _panelMgr = require("panelMgr");
    var _pInfo = require("pInfo");
    var d = cc._decorator;
    var h = d.ccclass;
    var f = d.property;
    var g = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.nameLbl = null;
        e.pro = null;
        e.proLbl = null;
        e.goBtn = null;
        e.pics = [];
        e.grayMater = null;
        e.normalMater = null;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t, e) {
        var o = this;
        this.posObj = e;
        this._chapter = t;
        this.nameLbl.string = "\u7b2c" + t + "\u7ae0";
        var n = _pInfo["default"].ins.getPuzzleLvl();
        this.pro.progress = 0;
        var i = n - (54 * (this._chapter - 1) + 1);
        i = i < 0 ? 0 : i;
        _global["default"].levelDone && (i = 54);
        var r = 0;
        i > 0 && (r = Math.floor(i / 9));
        n > 54 * this._chapter && (r = 6, i = 54);
        _levelMgr["default"].ins.getchapterBunder().then(function() {
          for (var t = "" + (100 + o._chapter), e = function e(_e) {
            _levelMgr["default"].ins.getJigsawIcon(_e, t).then(function(t) {
              t && (o.pics[_e - 1].spriteFrame = t, _e <= r ? o.pics[_e - 1].setMaterial(0, o.normalMater) : o.pics[_e - 1].setMaterial(0, o.grayMater));
            })["catch"](function() {
              console.error("getJigsawIconErr");
            });
          }, n = 1; n <= 6; n++) e(n);
        })["catch"](function() {
          console.error("getChapterBundleErr");
        });
        this.updPro();
      };
      e.prototype.updPro = function() {
        if (this._chapter) {
          var t = _pInfo["default"].ins.getPuzzleLvl();
          this.pro.progress = 0;
          var e = t - (54 * (this._chapter - 1) + 1);
          e = (e = e < 0 ? 0 : e) > 54 ? 54 : e;
          cc.tween(this.pro).to(.5, {
            progress: e / 54
          }).start();
          this.proLbl.string = e + "/54";
        }
      };
      e.prototype.unuse = function() {};
      e.prototype.reuse = function() {};
      e.prototype.onEnable = function() {};
      e.prototype.onDisable = function() {};
      e.prototype.onGoBtn = function() {
        _idx.platform.showLoading();
        var t = _global["default"].levelTmp = this._chapter;
        _levelMgr["default"].ins.updateTmpData(t).then(function() {
          _idx.platform.hideLoading();
          _panelMgr["default"].ins.closeAllPanel();
          _evts["default"].opE.emit({
            action: _evts["default"].UPDATA_LEVEL_TMP
          });
        });
      };
      e.prototype.onDestroy = function() {
        var t = "" + (100 + this._chapter);
        _levelMgr["default"].ins.getchapterBunder().then(function(e) {
          cc.assetManager.releaseAsset(e.get(t + "/chapter", cc.SpriteFrame));
        })["catch"](function() {
          console.error("getBundleErr");
        });
      };
      __decorate([ f(cc.Label) ], e.prototype, "nameLbl", void 0);
      __decorate([ f(cc.ProgressBar) ], e.prototype, "pro", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "proLbl", void 0);
      __decorate([ f(cc.Button) ], e.prototype, "goBtn", void 0);
      __decorate([ f([ cc.Sprite ]) ], e.prototype, "pics", void 0);
      __decorate([ f(cc.Material) ], e.prototype, "grayMater", void 0);
      __decorate([ f(cc.Material) ], e.prototype, "normalMater", void 0);
      return __decorate([ h ], e);
    }(cc.Component);
    exports["default"] = g;
    cc._RF.pop();
  }, {
    evts: "evts",
    global: "global",
    idx: "idx",
    levelMgr: "levelMgr",
    pInfo: "pInfo",
    panelMgr: "panelMgr"
  } ],
  chgBtn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "db62fK//GZEhp0t7svoB+gK", "chgBtn");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = a.property;
    var l = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.bg = null;
        e.lbSpr = null;
        e.offBg = null;
        e.onBg = null;
        e.offLb = null;
        e.onLb = null;
        e.flag = !1;
        return e;
      }
      __extends(e, t);
      e.prototype.start = function() {
        this.u();
      };
      e.prototype.setState = function(t) {
        this.flag = t;
        this.u();
      };
      e.prototype.u = function() {
        null != this.bg && (this.bg.spriteFrame = this.flag ? this.onBg : this.offBg);
        null != this.lbSpr && (this.lbSpr.spriteFrame = this.flag ? this.onLb : this.offLb);
      };
      __decorate([ c(cc.Sprite) ], e.prototype, "bg", void 0);
      __decorate([ c(cc.Sprite) ], e.prototype, "lbSpr", void 0);
      __decorate([ c(cc.SpriteFrame) ], e.prototype, "offBg", void 0);
      __decorate([ c(cc.SpriteFrame) ], e.prototype, "onBg", void 0);
      __decorate([ c(cc.SpriteFrame) ], e.prototype, "offLb", void 0);
      __decorate([ c(cc.SpriteFrame) ], e.prototype, "onLb", void 0);
      return __decorate([ s ], e);
    }(cc.Component);
    exports["default"] = l;
    cc._RF.pop();
  }, {} ],
  com: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5120eEchVJEpIIgUMDKJDde", "com");
    "use strict";
    function n(t, e) {
      t.interactable = !e;
    }
    function i(t) {
      for (var e = t.length - 1; e >= 0; e--) {
        var o = Math.floor(Math.random() * (e + 1));
        var n = t[o];
        t[o] = t[e];
        t[e] = n;
      }
      return t;
    }
    function r(t) {
      return t && "object" == typeof t && !Array.isArray(t);
    }
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = function() {
      function t() {
        this.bigs = [ , "K", "M", "B", "T", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
        this.e = i;
        this.f = function t(e, o) {
          for (var n, i, a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
          if (!a.length) return e;
          var l = a.shift();
          if (r(e) && r(l)) for (var u in l) r(l[u]) ? (e[u] || Object.assign(e, ((n = {})[u] = {}, 
          n)), t(e[u], l[u])) : Object.assign(e, ((i = {})[u] = l[u], i));
          return t.apply(void 0, s([ e ], a));
        };
      }
      Object.defineProperty(t, "ins", {
        get: function get() {
          this._ins || (this._ins = new t());
          return this._ins;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.randSort = function(t) {
        t.sort(function() {
          return Math.random() - .5;
        });
        return t;
      };
      t.prototype.bigNum = function(t) {
        if (t < 1e3) return t + "";
        for (var e = 0; t > 999; ) t /= 1e3, e++;
        var o = this.bigs[e] || "z";
        return Math.floor(100 * t) / 100 + o;
      };
      t.prototype.a = function(t, e) {
        if (void 0 === e && (e = 0), null != t) {
          t instanceof cc.Event.EventTouch && (t = t.target);
          var o = null;
          if (t instanceof cc.Button ? o = t : t instanceof cc.Node && (o = t.getComponent(cc.Button)), 
          null != o) {
            var i = function i() {
              n(o, !1);
            };
            n(o, !0);
            o.scheduleOnce(i, e);
            return function() {
              i();
              o.unschedule(i);
            };
          }
        }
      };
      t.prototype.b = function(t, e) {
        e ? t.pauseSystemEvents(!0) : t.resumeSystemEvents(!0);
      };
      t.prototype.rad = function(t, e) {
        return Math.round(Math.random() * (e - t)) + t;
      };
      t.prototype.compareVersion = function(t, e) {
        for (var o = t.split("."), n = e.split("."), i = Math.max(o.length, n.length); o.length < i; ) o.push("0");
        for (;n.length < i; ) n.push("0");
        for (var r = 0; r < i; r++) {
          var a = parseInt(o[r]);
          var s = parseInt(n[r]);
          if (a > s) return 1;
          if (a < s) return -1;
        }
        return 0;
      };
      return t;
    }();
    exports["default"] = a;
    var s = function s() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      for (var o = 0, n = 0, i = arguments.length; n < i; n++) o += arguments[n].length;
      var r = Array(o);
      var a = 0;
      for (n = 0; n < i; n++) for (var s = arguments[n], c = 0, l = s.length; c < l; c++, 
      a++) r[a] = s[c];
      return r;
    };
    String.prototype.format = function() {
      if (!arguments.length) return this;
      for (var t = this, e = 0, o = arguments.length; e < o; e++) t = t.replace("{" + e + "}", arguments[e]);
      return t;
    };
    cc._RF.pop();
  }, {} ],
  c: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68495iWIy9Gaa3DMhCPw98o", "c");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.ADE = void 0;
    (function(t) {
      t[t.VIDEO = 0] = "VIDEO", t[t.VIDEO_END = 1] = "VIDEO_END", t[t.SHARE = 2] = "SHARE", 
      t[t.SHARE_END = 3] = "SHARE_END";
    })(exports.ADE || (exports.ADE = {}));
    cc._RF.pop();
  }, {} ],
  dateItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd235ZZ7QVCtYwyn8Ct+nY3", "dateItem");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = a.property;
    var l = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.bg = null;
        e.bgTypes = [];
        e.dateLb = null;
        e.select = null;
        e.finish = null;
        return e;
      }
      var o;
      __extends(e, t);
      o = e;
      e.prototype.setDate = function(t) {
        this.dateLb.string = t;
      };
      e.prototype.setLocked = function(t) {
        t ? (this.bg.spriteFrame = this.bgTypes[1], this.dateLb.node.color = o.color2, this.dateLb.node.opacity = 180) : (this.bg.spriteFrame = this.bgTypes[0], 
        this.dateLb.node.color = o.color1, this.dateLb.node.opacity = 255);
      };
      e.prototype.setSelected = function(t) {
        this.select.active = t;
      };
      e.prototype.setFinish = function(t) {
        this.finish.active = t;
        t && (this.bg.spriteFrame = this.bgTypes[2], this.dateLb.node.color = cc.Color.WHITE, 
        this.dateLb.node.opacity = 255);
      };
      e.color1 = new cc.Color(201, 103, 23);
      e.color2 = new cc.Color(255, 231, 209);
      __decorate([ c(cc.Sprite) ], e.prototype, "bg", void 0);
      __decorate([ c([ cc.SpriteFrame ]) ], e.prototype, "bgTypes", void 0);
      __decorate([ c(cc.Label) ], e.prototype, "dateLb", void 0);
      __decorate([ c(cc.Node) ], e.prototype, "select", void 0);
      __decorate([ c(cc.Node) ], e.prototype, "finish", void 0);
      return o = __decorate([ s ], e);
    }(cc.Component);
    exports["default"] = l;
    cc._RF.pop();
  }, {} ],
  dayReward: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15b97t+7MtFCLfTRDvhWmnX", "dayReward");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _res = require("res");
    var _item = require("item");
    var c = cc._decorator;
    var l = c.ccclass;
    var u = c.property;
    var p = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.maskNode = null;
        e.recivedNode = null;
        e.canRecive = null;
        e.rewardItem = null;
        e.rewards = null;
        e.aniDatas = [];
        e.lightNode = null;
        e.showLight = !1;
        return e;
      }
      __extends(e, t);
      e.prototype.initItem = function(t) {
        var e = this;
        if (t) {
          var o = 0;
          var n = function n(_n) {
            var r = t[_n], c = i.rewards.children[o];
            c || (c = cc.instantiate(i.rewardItem));
            _res["default"].ins.getBundleByString("resSps").then(function(t) {
              t.load("spine/light/action", sp.SkeletonData, function(t, o) {
                if (!t && e.node && e.node.isValid) {
                  var n = new cc.Node(), i = n.addComponent(sp.Skeleton);
                  i.skeletonData = o, i.animation = "animation", n.parent = c, e.lightNode = n, n.active = e.showLight;
                }
              });
            })["catch"](function(t) {
              console.error("RTool.ins.getBundleByString('resSps')", t);
            });
            c.parent = i.rewards;
            var l = c.getComponent(_item["default"]);
            l && l.initByData(_n, r);
            var u = {};
            u.itemId = _n;
            u.itemNode = c;
            u.value = Number(r);
            i.aniDatas.push(u);
            o++;
          };
          var i = this;
          for (var r in t) n(r);
        }
      };
      e.prototype.setDefault = function() {
        this.maskNode.active = !1;
        this.recivedNode.active = !1;
        this.canRecive.active = !1;
        this.showLight = !0;
        this.lightNode && (this.lightNode.active = !0);
      };
      e.prototype.setCanRecive = function() {
        this.maskNode.active = !1;
        this.recivedNode.active = !1;
        this.canRecive.active = !0;
        this.showLight = !0;
        this.lightNode && (this.lightNode.active = !0);
      };
      e.prototype.setRecived = function() {
        this.maskNode.active = !0;
        this.recivedNode.active = !0;
        this.canRecive.active = !1;
        this.showLight = !1;
        this.lightNode && (this.lightNode.active = !1);
      };
      __decorate([ u(cc.Node) ], e.prototype, "maskNode", void 0);
      __decorate([ u(cc.Node) ], e.prototype, "recivedNode", void 0);
      __decorate([ u(cc.Node) ], e.prototype, "canRecive", void 0);
      __decorate([ u(cc.Node) ], e.prototype, "rewardItem", void 0);
      __decorate([ u(cc.Node) ], e.prototype, "rewards", void 0);
      return __decorate([ l ], e);
    }(cc.Component);
    exports["default"] = p;
    cc._RF.pop();
  }, {
    item: "item",
    res: "res"
  } ],
  dynamicBtnBg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa179uJATZCx7GK8QWUgMQD", "dynamicBtnBg");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _res = require("res");
    var s = cc._decorator;
    var c = s.ccclass;
    var l = s.property;
    var u = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.bg = null;
        e.url = "";
        return e;
      }
      __extends(e, t);
      e.prototype.start = function() {
        var t = this;
        this.node.active = !1;
        this.url && _res["default"].ins.l(this.url, cc.SpriteFrame, "resSps").then(function(e) {
          t.node && t.node.isValid && (t.bg.spriteFrame = e, t.node.active = !0, t.destroy());
        })["catch"](function() {
          console.error("getResSpErr");
        });
      };
      __decorate([ l(cc.Sprite) ], e.prototype, "bg", void 0);
      __decorate([ l(cc.String) ], e.prototype, "url", void 0);
      return __decorate([ c ], e);
    }(cc.Component);
    exports["default"] = u;
    cc._RF.pop();
  }, {
    res: "res"
  } ],
  env: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d6367RuL4ROs7ur5md6t/Gj", "env");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.env = exports.EM = void 0;
    exports.EM = {
      PROD: "PROD",
      TEST: "TEST"
    };
    exports.env = {
      version: "1.0.0",
      mode: exports.EM.PROD,
      network: {
        server: "",
        retryT: 2,
        defaultRetryCnt: 3,
        resourceURL: ""
      },
      game: "sudoku",
      name: "\u6bcf\u5929\u6570\u72ec",
      logo: 0,
      noAds: !1
    };
    cc._RF.pop();
  }, {} ],
  errorCode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12906Gi7KRMjKBS+7tO7/q6", "errorCode");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.errorCode = void 0;
    (function(t) {
      t[t.LOGIN_ERR = 1] = "LOGIN_ERR", t[t.PF_LOGIN_ERR = 2] = "PF_LOGIN_ERR", t[t.PF_CLOUD_ERR = 3] = "PF_CLOUD_ERR", 
      t[t.LOGIN_STATE_ERR = 4] = "LOGIN_STATE_ERR", t[t.PARSE_JSON_ERR = 5] = "PARSE_JSON_ERR", 
      t[t.PARSE_JSON_ERR2 = 6] = "PARSE_JSON_ERR2", t[t.CANGET_DATE_ERR = 7] = "CANGET_DATE_ERR", 
      t[t.HTTP_ERR = 8] = "HTTP_ERR";
    })(exports.errorCode || (exports.errorCode = {}));
    cc._RF.pop();
  }, {} ],
  evts: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "42cc1Gb2IdEbZRAT34iQX1H", "evts");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _tE = require("tE");
    var i = function() {
      function t() {}
      t.chE = new _tE["default"]();
      t.plE = new _tE["default"]();
      t.usE = new _tE["default"]();
      t.adE = new _tE["default"]();
      t.laE = new _tE["default"]();
      t.opE = new _tE["default"]();
      t.COIN_CHG = "COIN_CHG";
      t.POWER_CHG = "POWER_CHG";
      t.EXP_CHG = "EXP_CHG";
      t.LEV_CHG = "LEV_CHG";
      t.Slider_Chg = "Slider_Chg";
      t.MAIL_Chg = "MAIL_Chg";
      t.FINISH_PUZZLE = "FINISH_PUZZLE";
      t.UNLOCK_PUZZLE = "UNLOCK_PUZZLE";
      t.PURCHASED = "PURCHASED";
      t.LOSEHEART = "LOSEHEART";
      t.UPDATESCORE = "UPDATESCORE";
      t.MAINJUMP = "MAINJUMP";
      t.UPDTASK = "UPDTASK";
      t.UPDJIGSAW = "UPDJIGSAW";
      t.SHOWVIDEOSHARE = "SHOWVIDEOSHARE";
      t.UPDMAIL = "UPDMAIL";
      t.UPDJIGSAWGAME = "UPDJIGSAWGAME";
      t.UPD_MAIN_RED = "UPD_MAIN_RED";
      t.UPD_PANEL = "UPD_PANEL";
      t.FINISH_PUZZLELV = "FINISH_PUZZLELV";
      t.UPD_NEW_GIFT = "UPD_NEW_GIFT";
      t.HIDE_WX_BTNS = "HIDE_WX_BTNS";
      t.CHECK_WX_BTNS = "CHECK_WX_BTNS";
      t.POP_FESTIVAL = "POP_FESTIVAL";
      t.UPD_TOP_HEADINFO = "UPD_TOP_HEADINFO";
      t.UPD_FES_RED = "UPD_FES_RED";
      t.AD_MAX = "AD_MAX";
      t.UPDATA_LEVEL_TMP = "UPDATA_LEVEL_TMP";
      t.ADD_DESKTOP = "ADD_DESKTOP";
      t.Desktop_Chg = "Desktop_Chg";
      t.ALIPAY_MAIN = "ALIPAY_MAIN";
      t.SKIN_CHG = "SKIN_CHG";
      t.SIGN_RED = "SIGN_RED";
      t.REFRESH_CFGDATA = "REFRESH_CFGDATA";
      return t;
    }();
    exports["default"] = i;
    cc._RF.pop();
  }, {
    tE: "tE"
  } ],
  festivalMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b79dds9PTVL16Wia/aps1uK", "festivalMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.fesTaskKey = void 0;
    var a;
    var _time = require("time");
    var _cfgMgr = require("cfgMgr");
    var _pInfo = require("pInfo");
    var _bagMgr = require("bagMgr");
    var p = cc._decorator;
    var d = p.ccclass;
    p.property;
    (function(t) {
      t.raceScore = "race_score";
      t.raceTimes = "race_times";
      t.costPower = "cost_power";
      t.throughMain = "through_main";
      t.finishPuzzle = "finish_puzzle";
    })(a = exports.fesTaskKey || (exports.fesTaskKey = {}));
    var h = function() {
      function t() {
        this.fesBeginTime = 0;
        this.fesEndTime = 0;
        this.fesTaskDatas = null;
        this.jigsawNum = 1;
      }
      var e;
      e = t;
      Object.defineProperty(t, "ins", {
        get: function get() {
          return this._ins || (this._ins = new e());
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.isFesEnd = function() {
        var t = _time["default"].ins.serverTime;
        return t < this.fesBeginTime || t >= this.fesEndTime;
      };
      t.prototype.isFesNotOpen = function() {
        return _time["default"].ins.serverTime < this.fesBeginTime;
      };
      t.prototype.getTodayMaxPro = function() {
        var t = _time["default"].ins.serverTime;
        var e = Math.floor((t - this.fesBeginTime) / 86400);
        return e < 0 ? 0 : e;
      };
      t.prototype.getNowTaskIdx = function() {
        var t = this.getTodayMaxPro();
        var e = _pInfo["default"].ins.getFesPro();
        return Math.min(e, t, 24);
      };
      t.prototype.getNowTaskPro = function() {
        return _pInfo["default"].ins.getFesTaskPro();
      };
      t.prototype.getFesPro = function() {
        return _pInfo["default"].ins.getFesPro();
      };
      t.prototype.getNowTaskData = function() {
        var t = this.getNowTaskIdx();
        return this.fesTaskDatas[t];
      };
      t.prototype.isTaskLocked = function() {
        return _pInfo["default"].ins.getFesPro() > this.getTodayMaxPro();
      };
      t.prototype.isTaskAllFinished = function() {
        return _pInfo["default"].ins.getFesPro() >= this.fesTaskDatas.length;
      };
      t.prototype.updPro = function(t, e) {
        if (!this.isTaskLocked() && this.fesTaskDatas && this.getNowTaskData().get_by == t) {
          var o = _pInfo["default"].ins.getFesTaskPro();
          var n = 0;
          switch (t) {
           case a.raceScore:
            n = e;
            break;

           default:
            n = e + Number(o);
          }
          _pInfo["default"].ins.setFesTaskPro(n);
        }
      };
      t.prototype.finishFesTask = function() {
        var t = _pInfo["default"].ins;
        var e = t.getFesPro();
        t.setFesPro(e + 1);
        t.setFesTaskPro(0);
      };
      t.prototype.isPuzzleLocked = function() {
        return this.getFesPuzzleLv() - 1 > this.getTodayMaxPro();
      };
      t.prototype.getFesPuzzleLv = function() {
        return _pInfo["default"].ins.getFesPuzzleLv();
      };
      t.prototype.finishFesPuzzleLv = function() {
        var t = _pInfo["default"].ins.getFesPuzzleLv();
        _pInfo["default"].ins.setFesPuzzleLv(t + 1);
      };
      t.prototype.clearFesPuzzleLv = function() {
        var t = _pInfo["default"].ins;
        t.setFesPuzzleLv(1);
        t.setFesPro(0);
        t.setFesTaskPro(0);
      };
      t.prototype.getRedNum = function() {
        var t = 0;
        if (!this.fesTaskDatas) return t;
        if (this.isPuzzleLocked() || t++, !this.isTaskLocked()) {
          var e = this.getNowTaskData().nums;
          this.getNowTaskPro() >= e && t++;
        }
        return t;
      };
      t.prototype.updateFestivalData = function() {
        var t;
        return __awaiter(this, void 0, void 0, function() {
          var e;
          var o;
          return __generator(this, function(n) {
            switch (n.label) {
             case 0:
              return e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.festival_tasks, 
              o = (null == e ? void 0 : e.fesName) || "newYear", _pInfo["default"].ins.getFesName() != o && (_pInfo["default"].ins.setFesName(o), 
              this.clearFesPuzzleLv()), this.fesBeginTime = Number(null == e ? void 0 : e.beginTime) || 1707148800, 
              this.fesEndTime = Number(null == e ? void 0 : e.endTime) || this.fesBeginTime + 216e4, 
              this.fesTaskDatas = null == e ? void 0 : e.rules, this.jigsawNum = (null == e ? void 0 : e.jigsawNum) || 1, 
              [ 2 ];

             case 1:
              return [ 2, n.sent() ];
            }
          });
        });
      };
      t.prototype.getFesPuzzleInfo = function() {
        var t = this.fesPuzzleData;
        var e = t[0];
        var o = t[1];
        var n = this.getFesPuzzleLv() - 1;
        var i = t[2 + o + (0 == n ? 0 : t[2 + n - 1] + n)];
        return {
          id: n,
          type: e,
          size: 255 & i,
          diff: i >> 8 & 255
        };
      };
      t.prototype.getFesPuzzleData = function() {
        for (var t = this.fesPuzzleData, e = t[1], o = this.getFesPuzzleLv() - 1, n = 0 == o ? 0 : t[2 + o - 1] + o, i = t[2 + o] + o, r = t[2 + e + n], a = Math.pow(255 & r, 2), s = 2 + e + i + 1, c = [], l = 0, u = 2 + e + n + 1; u < s; u++) {
          for (var p = t[u], d = 0; d < 32; d++) {
            var h = 1 << d & 4294967295;
            if (c[l++] = (p & h) == h ? 1 : 0, l == a) break;
          }
          if (l == a) break;
        }
        return c;
      };
      t.prototype.getFesPuzzleDiff = function() {
        return this.getFesPuzzleInfo().diff;
      };
      t.prototype.getFesLevelCost = function() {
        var t = e.ins.getFesPuzzleDiff();
        var o = _cfgMgr["default"].serverCfg.difficulty_rules.rules;
        var n = 10;
        var i = 1;
        for (var r in o) {
          var a = o[r];
          if (n = Number(a.times_val), i === t) break;
          i++;
        }
        return n;
      };
      t.prototype.getFesPuzzleSprFrame = function() {
        var t = this;
        return new Promise(function(e, o) {
          t.bundle.load("levels/" + t.getFesPuzzleLv(), cc.SpriteFrame, function(t, n) {
            t ? o() : e(n);
          });
        });
      };
      t.prototype.getFesDownSprFrame = function() {
        var t = this;
        return new Promise(function(e, o) {
          t.bundle.load("chapter", cc.SpriteFrame, function(t, n) {
            t ? o() : e(n);
          });
        });
      };
      t.prototype.isPuzzleMax = function() {
        return e.ins.getFesPuzzleLv() > 25;
      };
      t.prototype.isJigsawMax = function() {
        return _bagMgr["default"].ins.getItemCount("newYear_pieces") >= 105 * this.jigsawNum;
      };
      t.prototype.getJigsawNum = function() {
        return this.jigsawNum;
      };
      return e = __decorate([ d ], t);
    }();
    exports["default"] = h;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    cfgMgr: "cfgMgr",
    pInfo: "pInfo",
    time: "time"
  } ],
  flyio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51480P4Eh5Njbdz0SzmweFP", "flyio");
    "use strict";
    var o = new (require("fly"))();
    module.exports = o;
    cc._RF.pop();
  }, {
    fly: "fly"
  } ],
  fly: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5cb399zOCVMQ7XhcfvghvHe", "fly");
    "use strict";
    (function(t, n) {
      if ("object" == typeof exports && "object" == typeof module) module.exports = n(); else if ("function" == typeof define && define.amd) define([], n); else {
        var i = n();
        for (var r in i) ("object" == typeof exports ? exports : t)[r] = i[r];
      }
    })(void 0, function() {
      return function(t) {
        var e = {};
        function o(n) {
          if (e[n]) return e[n].exports;
          var i = e[n] = {
            i: n,
            l: !1,
            exports: {}
          };
          t[n].call(i.exports, i, i.exports, o);
          i.l = !0;
          return i.exports;
        }
        o.m = t;
        o.c = e;
        o.i = function(t) {
          return t;
        };
        o.d = function(t, e, n) {
          o.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: n
          });
        };
        o.n = function(t) {
          var e = t && t.__esModule ? function() {
            return t["default"];
          } : function() {
            return t;
          };
          o.d(e, "a", e);
          return e;
        };
        o.o = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        };
        o.p = "";
        return o(o.s = 2);
      }([ function(t) {
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t;
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        };
        t.exports = {
          type: function type(t) {
            return Object.prototype.toString.call(t).slice(8, -1).toLowerCase();
          },
          isObject: function isObject(t, o) {
            return o ? "object" === this.type(t) : t && "object" === (void 0 === t ? "undefined" : e(t));
          },
          isFormData: function isFormData(t) {
            return "undefined" != typeof FormData && t instanceof FormData;
          },
          trim: function trim(t) {
            return t.replace(/(^\s*)|(\s*$)/g, "");
          },
          encode: function encode(t) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
          },
          formatParams: function formatParams(t) {
            var e = "";
            var o = !0;
            var n = this;
            return this.isObject(t) ? (function t(i, r) {
              var a = n.encode;
              var s = n.type(i);
              if ("array" == s) i.forEach(function(e, o) {
                n.isObject(e) || (o = "");
                t(e, r + "%5B" + o + "%5D");
              }); else if ("object" == s) for (var c in i) t(i[c], r ? r + "%5B" + a(c) + "%5D" : a(c)); else o || (e += "&"), 
              o = !1, e += r + "=" + a(i);
            }(t, ""), e) : t;
          },
          merge: function merge(t, e) {
            for (var o in e) t.hasOwnProperty(o) ? this.isObject(e[o], 1) && this.isObject(t[o], 1) && this.merge(t[o], e[o]) : t[o] = e[o];
            return t;
          }
        };
      }, , function(t, e, o) {
        var n = function() {
          function t(t, e) {
            for (var o = 0; o < e.length; o++) {
              var n = e[o];
              n.enumerable = n.enumerable || !1;
              n.configurable = !0;
              "value" in n && (n.writable = !0);
              Object.defineProperty(t, n.key, n);
            }
          }
          return function(e, o, n) {
            o && t(e.prototype, o);
            n && t(e, n);
            return e;
          };
        }();
        function i(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        var r = o(0);
        var a = "undefined" != typeof document;
        var s = function() {
          function t(e) {
            function o(t) {
              var e = void 0;
              var o = void 0;
              function n() {
                t.p = e = o = null;
              }
              r.merge(t, {
                lock: function lock() {
                  e || (t.p = new Promise(function(t, n) {
                    e = t;
                    o = n;
                  }));
                },
                unlock: function unlock() {
                  e && (e(), n());
                },
                clear: function clear() {
                  o && (o("cancel"), n());
                }
              });
            }
            i(this, t);
            this.engine = e || XMLHttpRequest;
            this["default"] = this;
            var n = this.interceptors = {
              response: {
                use: function use(t, e) {
                  this.handler = t;
                  this.onerror = e;
                }
              },
              request: {
                use: function use(t) {
                  this.handler = t;
                }
              }
            };
            var a = n.request;
            o(n.response);
            o(a);
            this.config = {
              method: "GET",
              baseURL: "",
              headers: {},
              timeout: 0,
              params: {},
              parseJson: !0,
              withCredentials: !1
            };
          }
          n(t, [ {
            key: "request",
            value: function value(t, e, o) {
              var n = this;
              var i = new this.engine();
              var s = "Content-Type";
              var c = s.toLowerCase();
              var l = this.interceptors;
              var u = l.request;
              var p = l.response;
              var d = u.handler;
              var h = new Promise(function(l, h) {
                function f(t) {
                  return t && t.then && t["catch"];
                }
                function g(t, e) {
                  t ? t.then(function() {
                    e();
                  }) : e();
                }
                function y(o) {
                  e = o.body;
                  t = r.trim(o.url);
                  var n = r.trim(o.baseURL || "");
                  if (t || !a || n || (t = location.href), 0 !== t.indexOf("http")) {
                    var u = "/" === t[0];
                    if (!n && a) {
                      var d = location.pathname.split("/");
                      d.pop();
                      n = location.protocol + "//" + location.host + (u ? "" : d.join("/"));
                    }
                    if ("/" !== n[n.length - 1] && (n += "/"), t = n + (u ? t.substr(1) : t), a) {
                      var y = document.createElement("a");
                      y.href = t;
                      t = y.href;
                    }
                  }
                  var m = r.trim(o.responseType || "");
                  var v = -1 !== [ "GET", "HEAD", "DELETE", "OPTION" ].indexOf(o.method);
                  var _ = r.type(e);
                  var b = o.params || {};
                  v && "object" === _ && (b = r.merge(e, b));
                  var w = [];
                  (b = r.formatParams(b)) && w.push(b);
                  v && e && "string" === _ && w.push(e);
                  w.length > 0 && (t += (-1 === t.indexOf("?") ? "?" : "&") + w.join("&"));
                  i.open(o.method, t);
                  try {
                    i.withCredentials = !!o.withCredentials;
                    i.timeout = o.timeout || 0;
                    "stream" !== m && (i.responseType = m);
                  } catch (R) {}
                  var S = o.headers[s] || o.headers[c];
                  var T = "application/x-www-form-urlencoded";
                  for (var I in r.trim((S || "").toLowerCase()) === T ? e = r.formatParams(e) : r.isFormData(e) || -1 === [ "object", "array" ].indexOf(r.type(e)) || (T = "application/json;charset=utf-8", 
                  e = JSON.stringify(e)), S || v || (o.headers[s] = T), o.headers) if (I === s && r.isFormData(e)) delete o.headers[I]; else try {
                    i.setRequestHeader(I, o.headers[I]);
                  } catch (R) {}
                  function D(t, e, n) {
                    g(p.p, function() {
                      if (t) {
                        n && (e.request = o);
                        var i = t.call(p, e, Promise);
                        e = void 0 === i ? e : i;
                      }
                      f(e) || (e = Promise[0 === n ? "resolve" : "reject"](e));
                      e.then(function(t) {
                        l(t);
                      })["catch"](function(t) {
                        h(t);
                      });
                    });
                  }
                  function P(t) {
                    t.engine = i;
                    D(p.onerror, t, -1);
                  }
                  function k(t, e) {
                    this.message = t;
                    this.status = e;
                  }
                  i.onload = function() {
                    try {
                      var t = i.response || i.responseText;
                      t && o.parseJson && -1 !== (i.getResponseHeader(s) || "").indexOf("json") && !r.isObject(t) && (t = JSON.parse(t));
                      var e = i.responseHeaders;
                      if (!e) {
                        e = {};
                        var n = (i.getAllResponseHeaders() || "").split("\r\n");
                        n.pop(), n.forEach(function(t) {
                          if (t) {
                            var o = t.split(":")[0];
                            e[o] = i.getResponseHeader(o);
                          }
                        });
                      }
                      var a = i.status;
                      var c = i.statusText;
                      var l = {
                        data: t,
                        headers: e,
                        status: a,
                        statusText: c
                      };
                      if (r.merge(l, i._response), a >= 200 && a < 300 || 304 === a) l.engine = i, l.request = o, 
                      D(p.handler, l, 0); else {
                        var u = new k(c, a);
                        u.response = l, P(u);
                      }
                    } catch (u) {
                      P(new k(u.msg, i.status));
                    }
                  };
                  i.onerror = function(t) {
                    P(new k(t.msg || "Network Error", 0));
                  };
                  i.ontimeout = function() {
                    P(new k("timeout [ " + i.timeout + "ms ]", 1));
                  };
                  i._options = o;
                  setTimeout(function() {
                    i.send(v ? null : e);
                  }, 0);
                }
                r.isObject(t) && (t = (o = t).url);
                (o = o || {}).headers = o.headers || {};
                g(u.p, function() {
                  r.merge(o, JSON.parse(JSON.stringify(n.config)));
                  var i = o.headers;
                  i[s] = i[s] || i[c] || "";
                  delete i[c];
                  o.body = e || o.body;
                  t = r.trim(t || "");
                  o.method = o.method.toUpperCase();
                  o.url = t;
                  var a = o;
                  d && (a = d.call(u, o, Promise) || o);
                  f(a) || (a = Promise.resolve(a));
                  a.then(function(t) {
                    t === o ? y(t) : l(t);
                  }, function(t) {
                    h(t);
                  });
                });
              });
              h.engine = i;
              return h;
            }
          }, {
            key: "all",
            value: function value(t) {
              return Promise.all(t);
            }
          }, {
            key: "spread",
            value: function value(t) {
              return function(e) {
                return t.apply(null, e);
              };
            }
          } ]);
          return t;
        }();
        s["default"] = s;
        [ "get", "post", "put", "patch", "head", "delete" ].forEach(function(t) {
          s.prototype[t] = function(e, o, n) {
            return this.request(e, o, r.merge({
              method: t
            }, n));
          };
        });
        [ "lock", "unlock", "clear" ].forEach(function(t) {
          s.prototype[t] = function() {
            this.interceptors.request[t]();
          };
        });
        t.exports = s;
      } ]);
    });
    cc._RF.pop();
  }, {} ],
  game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1e2eOdqJJNRYqNOnj+M+iI", "game");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.grilAni = void 0;
    var c;
    var l;
    var u;
    var p;
    var d;
    var h;
    var f;
    var g;
    var _com = require("com");
    var _evts = require("evts");
    var _idx = require("idx");
    var _mySafeArea = require("mySafeArea");
    var _pConst = require("pConst");
    var _res = require("res");
    var _sound = require("sound");
    var _uData = require("uData");
    var _vb = require("vb");
    var _uvAni = require("uvAni");
    var _cfgMgr = require("cfgMgr");
    var _grid = require("grid");
    var _heart = require("heart");
    var _item = require("item");
    var _random_notice = require("random_notice");
    var _creator = require("Creator");
    var _global = require("global");
    var _bagMgr = require("bagMgr");
    var _challengeMgr = require("challengeMgr");
    var _festivalMgr = require("festivalMgr");
    var _levelMgr = require("levelMgr");
    var _panelMgr = require("panelMgr");
    var _taskMgr = require("taskMgr");
    var _pInfo = require("pInfo");
    var _tipMgr = require("tipMgr");
    var _banner = require("banner");
    var _rewardMgr = require("rewardMgr");
    var z = cc._decorator;
    var H = z.ccclass;
    var G = z.property;
    var J = Math.floor;
    var W = (cc.color(230, 234, 247), cc.color(252, 254, 94));
    var q = cc.color(181, 142, 34, 255);
    (d = c || (c = {}))[d.X = 0] = "X";
    d[d.O = 1] = "O";
    d[d.Empty = 3] = "Empty";
    (function(t) {
      t[t.None = 0] = "None", t[t.HeadRow = 1] = "HeadRow", t[t.HeadCol = 2] = "HeadCol", 
      t[t.Grid = 3] = "Grid";
    })(l || (l = {}));
    (function(t) {
      t[t.None = 0] = "None", t[t.Vertical = 1] = "Vertical", t[t.Horizontal = 2] = "Horizontal";
    })(u || (u = {}));
    (function(t) {
      t[t.None = 0] = "None", t[t.Set = 1] = "Set", t[t.Clean = 2] = "Clean";
    })(p || (p = {}));
    (function(t) {
      t.run = "run", t.idle = "idle", t.happy = "happy", t.sad = "sad";
    })(h = exports.grilAni || (exports.grilAni = {}));
    (function(t) {
      t.showBtns = "showBtns", t.hideBtns = "hideBtns", t.gameLose = "gameLose", t.gameRelife = "gameRelife", 
      t.gameWin = "gameWin", t.gameWinFailSf = "gameWinFailSf", t.openItemSelect = "openItemSelect", 
      t.closeItemSelect = "closeItemSelect";
    })(f || (f = {}));
    (function(t) {
      t.tipIn = "tipIn";
      t.tipOut = "tipOut";
    })(g || (g = {}));
    var K = {
      2e4: "\u70b9\u51fb\u663e\u793a\u683c\u5b50\u5185\u5bb9",
      20001: "\u70b9\u51fb\u968f\u673a\u663e\u793a\n3\u4e2a\u683c\u5b50\u5185\u5bb9",
      20002: "\u70b9\u51fb\u663e\u793a\u4e00\u884c\n\u6216\u662f\u4e00\u5217\u683c\u5b50\u5185\u5bb9"
    };
    var Y = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.topSp = null;
        e.topGirlSk = null;
        e.topGooseSk = null;
        e.downSp = null;
        e.gridBgSp = null;
        e.topNode = null;
        e.downNode = null;
        e.downBeginY = 0;
        e.font4 = null;
        e.camera = null;
        e.panelAni = null;
        e.uHintSf = null;
        e.lHintSf = null;
        e.gridPrefab = null;
        e.map_node_ = null;
        e.tilesParent = null;
        e.selectMask = null;
        e.selectMaskBg = null;
        e.rowHintsParent = null;
        e.colHintsParent = null;
        e.scoreLbl = null;
        e.score = 0;
        e.useTimeLbl = null;
        e.consLbl = null;
        e.cons2Lbl = null;
        e.consBestLbl = null;
        e.rew1Lbl = null;
        e.rew2Lbl = null;
        e.threeNode = null;
        e.tenNode = null;
        e.oxTagAni = null;
        e.fadePrefab = null;
        e.patices = null;
        e.heartsPatic = null;
        e.hearts = [];
        e.heartInfinity = null;
        e.tipNode = null;
        e.tipLabel = null;
        e.tipAni = null;
        e.winAniNode = null;
        e.winCircleMask = null;
        e.winSpParent = null;
        e.winSps = null;
        e.winLight = null;
        e.singleSf = null;
        e.levelLbl = null;
        e.clockWarn = null;
        e.norClock = null;
        e.speClock = null;
        e.clockLbl = null;
        e.clockLbl2 = null;
        e.tipActNode = null;
        e.tipUnActNode = null;
        e.shareBtn = null;
        e.shareIcon = null;
        e.shareLbl = null;
        e.noticeLbl = null;
        e.noticeAni = null;
        e.random_noticeLbl = null;
        e.random_noticeAni = null;
        e.full_row_colLbl = null;
        e.full_row_colAni = null;
        e.itemSelectEff = null;
        e.itemSelectIcon = null;
        e.itemSelectLbl = null;
        e.adGetBtn = null;
        e.getBtnsp = null;
        e.rewItems = null;
        e.rewItemPre = null;
        e.stopPraNode = null;
        e.heartBgNode = null;
        e.noticePrefab = null;
        e.random_noticePrefab = null;
        e.full_row_colPrefab = null;
        e.lineW = 2;
        e.relifeTime = 3;
        e.isAllRight = !1;
        e.rows_ = 15;
        e.cols_ = 15;
        e.grid_count = 0;
        e.grids = [];
        e.baseData = null;
        e.workData = null;
        e.baseOTotal = -1;
        e.gridHeadRowVec = [];
        e.gridHeadColVec = [];
        e.rowHeadNums = [];
        e.rowHeadBegins = [];
        e.colHeadNums = [];
        e.colHeadBegins = [];
        e.fontSize = 36;
        e.gridSize = 40;
        e.gridsStartX = 0;
        e.gridTouchStart = null;
        e.touchDir = u.None;
        e.fillMode = p.None;
        e.pen = c.O;
        e.lastTouchRow = -1;
        e.lastTouchCol = -1;
        e.click_touch_ = !1;
        e.colAutoXCols = new Map();
        e.colAutoXRows = new Map();
        e.opStep = null;
        e._showResultTime = 0;
        e.heartsNum = 3;
        e.soundIdx = 1;
        e.items = [ {
          icon: "notice",
          tip: K[2e4],
          count: 0,
          itemMax: -1,
          itemCur: 0
        }, {
          icon: "random_notice",
          tip: K[20001],
          count: 0,
          itemMax: -1,
          itemCur: 0
        }, {
          icon: "full_row_col",
          tip: K[20002],
          count: 0,
          itemMax: -1,
          itemCur: 0
        } ];
        e.eventFunc = null;
        e.raceRefreshPop = [];
        e.selectData = {
          row: -1,
          col: -1
        };
        return e;
      }
      var o;
      __extends(e, t);
      o = e;
      Object.defineProperty(e.prototype, "canTouch", {
        get: function get() {
          return this._canTouch;
        },
        set: function set(t) {
          this._canTouch = t;
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.onLoad = function() {
        var t = this;
        if (this.byGuide = _global["default"].byGuide, delete _global["default"].byGuide, 
        _global["default"].padScale) {
          cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_HEIGHT);
          var e = this.topSp.node;
          var o = (cc.view.getVisibleSize().width - 720) / 2;
          if (this.heartInfinity.x -= o, this.norClock.parent.x -= o, this.clockWarn.width += 2 * o, 
          this.hearts.forEach(function(t) {
            t.node.x -= o;
          }), this.heartBgNode.x -= o, e.removeComponent(cc.Widget), this.topNode.removeComponent(cc.Widget), 
          this.scheduleOnce(function() {
            e.y = 220;
            t.topNode.y = 0;
          }), !this.byGuide) {
            var n = this.downNode.children;
            n[0].setPosition(-252, -570);
            for (var i = 1; i < 4; i++) n[i].x += 30;
            n[4].children[1].active = !0;
            n[5].active = !1;
          }
        }
        _idx.platform.string() == _pConst.PFCode.Alipay && this.scheduleOnce(function() {
          t.heartInfinity.parent.y -= _mySafeArea.getSafeAreaRect().yMin, t.topSp.node.y -= _mySafeArea.getSafeAreaRect().yMin;
        });
        _sound["default"].ins.playBGM();
        this.opStep = {
          grids: [],
          row_autox_cols: new Map(),
          col_autox_rows: new Map(),
          hint_rows: [],
          hint_cols: [],
          is_row_autox_changed: !1,
          is_col_autox_changed: !1,
          is_hint_rows_changed: !1,
          is_hint_cols_changed: !1
        };
        this.panelAni.on(cc.Animation.EventType.FINISHED, this.playAniDone, this);
        this.oxTagAni.on(cc.Animation.EventType.FINISHED, this.oxAniDone, this);
        this.tipAni.on(cc.Animation.EventType.FINISHED, this.tipAniDone, this);
        this.eventFunc = this.onOperTap.bind(this);
        _evts["default"].opE.on(this.eventFunc);
      };
      e.prototype.checkLocalData = function() {
        var t;
        o.type;
        (t = new Array(this.grid_count)).fill(c.Empty);
        this.workData = t;
      };
      e.prototype.checkGuide = function() {
        return __awaiter(this, void 0, void 0, function() {
          var t;
          var e;
          var o;
          var n;
          var i;
          var r;
          var a;
          var c;
          var l;
          var u;
          var p;
          var d;
          var f;
          var g;
          var y;
          var m;
          var v = this;
          return __generator(this, function(s) {
            switch (s.label) {
             case 0:
              return this.byGuide ? (this.clockWarn.destroy(), this.stopPraNode.x = 0, t = this.node, 
              e = new cc.Node("guideOthers"), this.guideSteps = [ {
                yIdx: 3,
                glows: [ [ 0, 5 ] ],
                finger: 1,
                content: "\u8ba9\u6211\u4eec\u4ece\u6700\u7b80\u5355\u7684\u6b65\u9aa4\u5f00\u59cb\uff0c\u627e\u521a\u597d\u53ef\u4ee5\u586b\u6ee1\u7684\u4e00\u884c\u3002\u586b\u6ee1\u8fd95\u683c\u5427\uff01"
              }, {
                none: 1,
                content: "\u592a\u68d2\u5566\uff01"
              }, {
                xIdx: 0,
                finger: 2,
                content: "\u8ba9\u6211\u4eec\u5148\u770b\u8fd9\u4e00\u5217\uff0c\u6570\u5b57\u4e0e\u8272\u5757\u6570\u76ee\u4e00\u6837\u3002\u6211\u4eec\u5148\u5207\u6362\u5230\u6253\u53c9\u6a21\u5f0f\uff01"
              }, {
                xIdx: 0,
                glows: [ [ 2, 1 ], [ 4, 1 ] ],
                content: "\u73b0\u5728\u53ef\u4ee5\u628a\u6211\u4eec\u80af\u5b9a\u662f\u7a7a\u683c\u7684\u683c\u5b50\u6253\u4e0aX\uff01"
              }, {
                xIdx: 4,
                glows: [ [ 2, 1 ], [ 4, 1 ] ],
                content: "\u592a\u68d2\u5566\uff01\u540c\u7406\uff0c\u53ef\u4ee5\u5728\u8fd9\u5217\u6807\u4e0a\u4e24\u4e2aX\u3002"
              }, {
                yIdx: 2,
                glows: [ [ 1, 3 ] ],
                finger: 3,
                content: "\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u786e\u5b9a\u8fd9\u884c\u76843\u4e2a\u8272\u5757\u5566\u3002\u5feb\u7ed9\u4ed6\u4eec\u4e0a\u8272\u5427\uff01"
              }, {
                yIdx: 2,
                glows: [ [ 1, 3 ] ]
              }, {
                yIdx: 1,
                glows: [ [ 0, 1 ], [ 2, 1 ], [ 4, 1 ] ],
                content: "\u8fd9\u884c\u67093\u4e2a1\uff0c\u90a3\u4e48\u5728\u5b83\u4eec\u7684\u4e2d\u95f4\u5fc5\u987b\u67092\u4e2a\u7a7a\u767d\u5757\u7684\u3002\n       1+1+1+2=5\u3002\u521a\u597d\u5360\u6ee1\u6574\u884c\u5566\u3002\u7ed9\u4ed6\u4eec\u4e0a\u8272\u5427\u3002"
              }, {
                yIdx: 0,
                glows: [ [ 1, 3 ] ],
                content: "\u53c8\u627e\u52303\u4e2a\u8fde\u7eed\u7684\u6d82\u8272\u5757\uff01"
              }, {
                yIdx: 4,
                glows: [ [ 1, 1 ], [ 3, 1 ] ],
                content: "\u5feb\u8981\u5b8c\u6210\u4e86\uff0c\u628a\u6700\u540e\u7684\u683c\u5b50\u90fd\u4e0a\u8272\u5427\uff01"
              } ], this.guideCurStep = -1, this.guideMaxStep = this.guideSteps.length - 1, [ 4, _res["default"].ins.lPre("prefab/game/gridGlow") ]) : [ 3, 4 ];

             case 1:
              for (o = s.sent(), n = this.guideGlows = [], i = 0; i < 3; i++) (r = cc.instantiate(o)).setAnchorPoint(0, .5), 
              n.push(r), e.addChild(r);
              return c = this, u = (l = cc).instantiate, [ 4, _res["default"].ins.lPre("prefab/game/npc") ];

             case 2:
              return (a = c.guideNpc = u.apply(l, [ s.sent() ])).setPosition(380, 610), _res["default"].ins.getBundleByString("resSps").then(function(t) {
                t.load("game/girl", cc.Prefab, function(t, e) {
                  if (!t && v.node && v.node.isValid) {
                    var o = cc.instantiate(e);
                    a.addChild(o);
                    o.setPosition(250, -251);
                    o.setSiblingIndex(0);
                    var n = v.topGirlSk = o.getComponent(sp.Skeleton);
                    n.animation = h.idle;
                    n.setEndListener(v.playGirlEnd.bind(v));
                  }
                });
              }), p = a.getChildByName("dialog"), this.guideNpcAni = p.getComponent(cc.Animation), 
              this.guideNpcLbl = p.getChildByName("content").getComponent(cc.Label), (d = this.guideFinger = new cc.Node("guideFinger")).setAnchorPoint(.1, .91), 
              _res["default"].ins.lSF("common/shouzhi", d.addComponent(cc.Sprite)), e.addChild(d), 
              e.addChild(a), e.setPosition(this.map_node_.position), e.setAnchorPoint(0, 0), t.getChildByName("up").active = !1, 
              (f = t.getChildByName("down")).children.forEach(function(t) {
                t.active = !1;
              }), this.guideFingerTogY = this.oxTagAni.node.y + f.y - this.map_node_.y, t.getChildByName("bg").getChildByName("winBg").active = !0, 
              (g = this.guideMask = new cc.Node("guideMask")).addComponent(cc.Mask).inverted = !0, 
              y = this.guideMaskBg = new cc.Node("mask"), m = y.addComponent(cc.Sprite), [ 4, _res["default"].ins.lSF("common/default_sprite_splash") ];

             case 3:
              m.spriteFrame = s.sent(), y.addComponent(cc.BlockInputEvents), y.color = cc.Color.BLACK, 
              y.opacity = 100, this.scheduleOnce(function() {
                y.setContentSize(cc.view.getVisibleSize());
              }), g.addChild(y), t.addChild(g), t.addChild(e), g.setSiblingIndex(3), this.guideCheckGrid = [], 
              this.updateGuideStep(), s.label = 4;

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      e.prototype.updateGuideStep = function() {
        var t = this;
        this.unschedule(this.updateGuideStep);
        var e = this.guideCurStep = this.guideCurStep + 1;
        var o = this.guideMask;
        var n = this.guideSteps[e];
        var i = this.guideFinger;
        var r = this.guideGlows;
        if (!n) {
          _idx.platform.reportEvent(_idx.ERepEvt.finshGuide);
          o.active = !1;
          r.forEach(function(t) {
            t.active = !1;
          });
          var a = this.guideNpc;
          a.y = a.opacity = 0;
          this.guideNpcLbl.string = "       \u592a\u68d2\u4e86\uff01\u6211\u4eec\u6536\u96c6\u5230\u4e86\u4e00\u6735\u7f8e\u4e3d\u7684\u82b1\uff0c\u73b0\u5728\u524d\u5f80\u4e3b\u7ebf\u7ee7\u7eed\u6536\u96c6\u5176\u4ed6\u56fe\u753b\u5427\u3002";
          return void this.playGirlAni(h.happy);
        }
        var s = n.content;
        var c = n.xIdx;
        var l = n.yIdx;
        var u = n.glows;
        var p = n.finger;
        var d = n.none;
        var f = this.guideMaskBg;
        if (this.oxTagAni.node.active = 2 == e || 5 == e, d) r[0].active = !1, i.active = !1, 
        cc.Tween.stopAllByTarget(i), this.scheduleOnce(function() {
          return t.updateGuideStep();
        }, 1); else {
          var g = this.map_node_;
          var y = this.gridSize;
          var m = this.gridsStartX;
          var _ = this.guideCheckGrid;
          var b = 548;
          var w = b;
          var S = -68;
          var T = -48;
          var I = void 0 !== c;
          var D = void 0 !== l;
          if (I ? (S = m + c * y + y / 2 + g.x, b = y) : D && (T = l * y + y / 2 + g.y, w = y), 
          o.setPosition(S, T), o.setContentSize(b, w), f.setPosition(-S, -T), u) for (var P = 0, k = u.length; P < 3; P++) {
            var R = r[P];
            if (R.active = P < k) {
              var N = u[P];
              var C = N[0];
              var O = N[1];
              var M = void 0;
              var L = void 0;
              var A = void 0;
              var E = void 0;
              I ? (M = 110, L = O * y + 30, A = m + c * y - 15, E = C * y + y / 2) : D && (L = 110, 
              M = O * y + 30, A = m + C * y - 15, E = l * y + y / 2);
              R.setContentSize(M, L);
              R.setPosition(A, E);
              for (var x = 0; x < O; x++) D ? _.push(l + "_" + (C + x)) : I && _.push(C + x + "_" + c);
            }
          }
          if (p) if (1 == p) {
            var B;
            E = 268;
            B = Math.abs(311) / 200;
            cc.tween(i).set({
              active: !0,
              opacity: 0,
              x: 212,
              y: E,
              scale: 1
            }).to(17 / 30, {
              opacity: 255
            }).to(B, {
              x: 523
            }).to(17 / 30, {
              opacity: 0
            }).union().repeatForever().start();
          } else E = this.guideFingerTogY, A = 2 == p ? 400 : 330, A += this.oxTagAni.node.x, 
          cc.tween(i).set({
            active: !0,
            x: A,
            y: E,
            scale: 1,
            opacity: 255
          }).to(.5, {
            scale: 1.2
          }).to(.5, {
            scale: 1
          }, {
            easing: "cubicOut"
          }).union().repeatForever().start(); else cc.Tween.stopAllByTarget(i), i.active = !1;
          5 == e && (_.length = 0);
        }
        s && (this.guideNpcLbl.string = "       " + s, this.guideNpcAni.play());
      };
      e.prototype.onDestroy = function() {
        _idx.platform.stopVideoRecord();
      };
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].PURCHASED:
          this.onPurchased();
          break;

         case _evts["default"].LOSEHEART:
          this.loseHeart(t.data);
          break;

         case _evts["default"].UPDATESCORE:
          this.updateScore();
          break;

         case _evts["default"].SHOWVIDEOSHARE:
          o.type == _pInfo.gameType.normal && this.shareBtn && (this.shareBtn.active = !0);
        }
      };
      e.prototype.start = function() {
        var t = this;
        this.node.on(cc.Node.EventType.TOUCH_START, this.OnTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.OnTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.OnTouchEnded, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnTouchCancelled, this);
        var e = _uData["default"].ins.getSetting();
        this.tipTog = e.tip;
        this.updateTip();
        this.downBeginY = 640 - cc.view.getVisibleSize().height / 2;
        var n;
        var i = _pInfo["default"].ins;
        var r = i.getRecordData();
        var a = o.type;
        switch (a) {
         case _pInfo.gameType.race:
          n = r.race;
          break;

         case _pInfo.gameType.challenge:
          n = r.daily;
          break;

         default:
          n = r.main;
        }
        this.recData = n;
        this.consLbl.string = "\u8fde\u80dc: " + i.getConsWinTimes();
        this.consBestLbl.string = n.heWins + "";
        i.recordGameTimes(a);
        cc.assetManager.loadBundle("resSps", function() {
          t.initGame();
        });
      };
      e.prototype.onPurchased = function() {};
      e.prototype.getLevelDifficulty = function(levelNumber) {
        if (levelNumber <= 10) return "beginner";
        if (levelNumber <= 25) return "easy";
        if (levelNumber <= 40) return "medium";
        if (levelNumber <= 50) return "hard";
        return "expert";
      };
      e.prototype.forceCashReward = function() {
        try {
          console.log("\ud83d\ude80 \u5f3a\u5236\u89e6\u53d1\u73b0\u91d1\u5956\u52b1\u6d4b\u8bd5...");
          var currentLevel = _pInfo["default"].ins.getPuzzleLvl();
          var difficulty = this.getLevelDifficulty(currentLevel);
          console.log("\u5f53\u524d\u5173\u5361:", currentLevel, "\u96be\u5ea6:", difficulty);
          console.log("\u5956\u52b1\u524d\u4f59\u989d:", _rewardMgr["default"].getCashDisplay());
          _rewardMgr["default"].addCash(Math.floor(468 * Math.random()) + 52);
          console.log("\u5956\u52b1\u540e\u4f59\u989d:", _rewardMgr["default"].getCashDisplay());
          console.log("\u2705 \u5f3a\u5236\u5956\u52b1\u6d4b\u8bd5\u5b8c\u6210\uff01");
        } catch (error) {
          console.log("\u274c \u5f3a\u5236\u5956\u52b1\u6d4b\u8bd5\u5931\u8d25:", error);
        }
      };
      e.prototype.oneClickWin = function() {
        try {
          console.log("\ud83c\udfaf \u4e00\u952e\u901a\u5173\u5f00\u59cb...");
          if (this.cells && this.cells.length > 0) {
            console.log("\ud83d\udcdd \u81ea\u52a8\u586b\u5145\u7b54\u6848...");
            for (var i = 0; i < this.cells.length; i++) {
              var cell = this.cells[i];
              if (cell && void 0 !== cell.solution) {
                cell.userSolution = cell.solution;
                cell.state = 1 === cell.solution ? 1 : 0;
                if (cell.node && cell.node.isValid) {
                  var gridComp = cell.node.getComponent("grid");
                  gridComp && gridComp.setState(cell.state);
                }
              }
            }
            console.log("\u2705 \u7b54\u6848\u586b\u5145\u5b8c\u6210\uff0c\u89e6\u53d1\u6e38\u620f\u80dc\u5229...");
            this.scheduleOnce(function() {
              this.IsAllRight() && this.gameWin();
            }.bind(this), .1);
          } else {
            console.log("\u274c \u672a\u627e\u5230\u6e38\u620f\u683c\u5b50\u6570\u636e\uff0c\u5c1d\u8bd5\u76f4\u63a5\u89e6\u53d1\u80dc\u5229");
            this.gameWin();
          }
        } catch (error) {
          console.log("\u274c \u4e00\u952e\u901a\u5173\u5931\u8d25:", error);
          console.error(error);
        }
      };
      e.prototype.directWin = function() {
        console.log("\ud83d\ude80 \u76f4\u63a5\u89e6\u53d1\u6e38\u620f\u80dc\u5229...");
        try {
          this.gameWin();
        } catch (error) {
          console.log("\u274c \u76f4\u63a5\u80dc\u5229\u5931\u8d25:", error);
        }
      };
      e.prototype.testCashReward = function() {
        console.log("\ud83d\udcb0 \u6d4b\u8bd5\u73b0\u91d1\u5956\u52b1");
        try {
          _rewardMgr["default"].onPuzzleComplete("expert", true, true);
        } catch (e) {
          console.log("\u73b0\u91d1\u6d4b\u8bd5\u5931\u8d25:", e);
        }
      };
      e.prototype.testLoveMessage = function() {
        console.log("\ud83d\udc95 \u6d4b\u8bd5\u83cc\u5b50\u652f\u6301\u6d88\u606f");
        _rewardMgr["default"].showLoveSupportMessage();
      };
      e.prototype.initGame = function() {
        var t;
        var e;
        var n;
        var i;
        var r;
        var c;
        return __awaiter(this, void 0, void 0, function() {
          var a;
          var l;
          var u;
          var p;
          var d;
          var f;
          var g;
          var m;
          var _;
          var b;
          var S;
          var T;
          var I;
          var k;
          var R;
          var N;
          var C;
          var L;
          var A;
          var B;
          var F;
          var V;
          var U;
          var z;
          var H;
          var G;
          var J;
          var W;
          var q;
          var K;
          var Y;
          var X;
          var Z;
          var Q;
          var $;
          var tt;
          var et;
          var ot;
          var nt;
          var it;
          var rt;
          var at;
          var st;
          var ct;
          var lt;
          var ut;
          var pt;
          var dt;
          var ht;
          var ft;
          var gt;
          var yt;
          var mt;
          var vt;
          var _t;
          var bt;
          var wt;
          var St;
          var Tt;
          var It;
          var Dt;
          var Pt;
          var kt = this;
          return __generator(this, function(s) {
            switch (s.label) {
             case 0:
              switch (u = "normal", d = cc.assetManager.getBundle("resSps") || cc.assetManager.getBundle("chapter"), 
              f = o.type) {
               case _pInfo.gameType.normal:
                return [ 3, 1 ];

               case _pInfo.gameType.race:
                return [ 3, 2 ];

               case _pInfo.gameType.freedom:
                return [ 3, 3 ];

               case _pInfo.gameType.practice:
                return [ 3, 4 ];

               case _pInfo.gameType.festival:
                return [ 3, 5 ];

               case _pInfo.gameType.challenge:
                return [ 3, 6 ];
              }
              return [ 3, 12 ];

             case 1:
              return T = _levelMgr["default"].ins, (R = T.getPuzzleInfo()) && (a = R.size, l = T.getPuzzleData()), 
              g = _pInfo["default"].ins.getPuzzleLvl(), m = (null === (n = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.more_set) || void 0 === e ? void 0 : e.protect_times) || void 0 === n ? void 0 : n.val) || 10, 
              _ = (null === (c = null === (r = null === (i = _cfgMgr["default"].serverCfg) || void 0 === i ? void 0 : i.more_set) || void 0 === r ? void 0 : r.protect_charter) || void 0 === c ? void 0 : c.val) || 30, 
              g <= m ? this.infinityLife = !0 : g < _ && (this.relifeTime = -1), this.getBtnsp.string = "\u4e0b\u4e00\u5173", 
              [ 3, 12 ];

             case 2:
              p = 1, u = "normal", this.norClock.parent.active = !0, this.heartsNum = 1, this.raceTime = 31, 
              this.raceMaxDenstiy = .85, this.raceMinDenstiy = .7, this.raceDensity = this.raceMaxDenstiy, 
              this.raceRefeshTime = -1, this.raceFromX = 180, this.raceAllX = this.raceFromX - 70, 
              a = 10, l = new _creator["default"]().getRandomData(a, this.raceMaxDenstiy), _festivalMgr["default"].ins.updPro(_festivalMgr.fesTaskKey.raceTimes, 1), 
              b = this.items;
              try {
                S = _cfgMgr["default"].serverCfg.qw_line_rules.rules;
                this.relifeTime = S.relive.limit || 3;
                b[0].itemMax = S.limit.notice || 1;
                b[1].itemMax = S.limit.random_notice || 1;
                b[2].itemMax = S.limit.full_row_col || 1;
              } catch (Rt) {
                this.relifeTime = 3;
                b[0].itemMax = b[1].itemMax = b[2].itemMax = 1;
              }
              return this.clockWarn.height = cc.view.getVisibleSize().height, [ 3, 12 ];

             case 3:
              return a = _global["default"].freedomSize, l = new _creator["default"]().getRandomData(a, this.raceMaxDenstiy, 5), 
              [ 3, 12 ];

             case 4:
              return _idx.platform.reportEvent(_idx.ERepEvt.beginPractice), this.infinityLife = !0, 
              T = _levelMgr["default"].ins, I = this.byGuide ? 1 : T.getPracticeId(), this.practiceId = I, 
              (R = T.getPuzzleInfo(!0, I)) && (a = R.size, l = T.getPuzzleData(!0, I)), this.getBtnsp.node.parent.active = !1, 
              this.stopPraNode.active = !0, [ 3, 12 ];

             case 5:
              return k = _festivalMgr["default"].ins, (R = k.getFesPuzzleInfo()) && (a = R.size, 
              l = k.getFesPuzzleData()), this.getBtnsp.string = "\u8fd4\u56de\u4e3b\u9875", k.isJigsawMax(), 
              [ 3, 12 ];

             case 6:
              try {
                N = _cfgMgr["default"].serverCfg.daily_challenge;
                this.relifeTime = N.revive || 3;
                C = N.limit;
                (L = this.items)[0].itemMax = C.notice || 1;
                L[1].itemMax = C.random_notice || 1;
                L[2].itemMax = C.full_row_col || 1;
              } catch (Nt) {
                this.relifeTime = 3;
                b[0].itemMax = b[1].itemMax = b[2].itemMax = 1;
              }
              switch (A = this.cons2Lbl.node.parent, B = A.parent.getChildByName("top"), F = B.getChildByName("cha"), 
              A.getChildByName("midLblL").getComponent(cc.Label).string = "\u901a\u5173\u65f6\u95f4", 
              A.getChildByName("midLblR").getComponent(cc.Label).string = "\u901a\u5173\u4eba\u6570", 
              A.getChildByName("nor").active = B.getChildByName("nor").active = this.consLbl.node.parent.active = !1, 
              A.getChildByName("cha").active = F.active = this.useTimeLbl.node.active = !0, _res["default"].ins.lSF("game/chaTitle", F.getComponent(cc.Sprite)), 
              this.rewItems.node.parent.y = -325, this.chaTime = 0, V = o.challageData, U = V.date, 
              z = U.year, H = U.month, G = U.day, J = 1e4 * z + 100 * H + G, W = f in _pInfo.challengeType && V.type ? V.type : _pInfo.challengeType.tree, 
              q = void 0, W != _pInfo.challengeType.worm && (a = 10 != (a = V.size) || 15 != a ? 15 : a, 
              K = V.denstiy < .2 || !V.denstiy ? null : V.denstiy, q = new _creator["default"](J), 
              l = q.getRandomData(a, K || .75, 5)), Y = q ? q.getRandomIntBetween.bind(q) : _com["default"].ins.rad, 
              X = void 0, W) {
               case _pInfo.challengeType.worm:
                return [ 3, 7 ];

               case _pInfo.challengeType.tree:
                return [ 3, 9 ];

               case _pInfo.challengeType.ice:
                return [ 3, 10 ];
              }
              return [ 3, 11 ];

             case 7:
              return Z = V.data, Q = Z.size, $ = Z.data, a = Q, (l = new Array(Math.pow(a, 2))).fill(0), 
              tt = this.wormData = {
                counts: [],
                sps: []
              }, et = function et(t, e) {
                var o = t - e;
                return o < 0 ? -1 == o ? 1 : 0 : 1 == o ? 3 : 2;
              }, ot = 0, [ 4, _res["default"].ins.lPre("prefab/game/wormSp") ];

             case 8:
              return (nt = s.sent()) && ((it = new cc.Node("wormSps")).width = 500, it.height = 200, 
              it.x = 100, (rt = it.addComponent(cc.Layout)).type = cc.Layout.Type.HORIZONTAL, 
              rt.resizeMode = cc.Layout.ResizeMode.CHILDREN, this.topSp.node.addChild(it)), $.forEach(function(t) {
                var e;
                var o;
                var n;
                var i;
                var r;
                var a;
                var s;
                var c;
                var u;
                var p;
                var d = 0;
                var h = [ 0, 0, 0, 0 ];
                var f = t.length;
                if (tt.counts.push(f), nt) {
                  var g = cc.instantiate(nt);
                  it.addChild(g);
                  var y = g.getComponent("wormSp");
                  y.init(f);
                  tt.sps.push(y);
                }
                t.forEach(function(f) {
                  e = t[d - 1], o = t[d + 1], h[0] = h[1] = h[2] = h[3] = 0, p = void 0 !== o, (u = void 0 !== e) && (n = et(e, f), 
                  h[n] = 1), p && (n = et(o, f), h[n] = 1), i = h[0], r = h[1], a = h[2], s = h[3], 
                  u && p ? i && a || r && s ? (n = i && a ? 90 : 0, c = 2) : (n = i && r ? 0 : i && s ? 270 : s && a ? 180 : 90, 
                  c = 3) : (c = p ? 0 : 1, n = r ? 0 : a ? 90 : s ? 180 : 270), tt[f] = {
                    i: ot,
                    tex: c,
                    dir: n
                  }, l[f] = 1, d++;
                });
                ot++;
              }), [ 3, 11 ];

             case 9:
              return X = V.count || 10, at = this.treeData = {}, st = Math.ceil(X / 2), ct = X - st, 
              at.minRow = Y(0, a - st - 1), at.minCol = Y(0, a - ct - 1), at.maxRow = at.minRow + st + 1, 
              at.maxCol = at.minCol + ct + 1, d.preload("game/hedge/mask", cc.SpriteFrame), cc.assetManager.loadBundle("prefab", function(t, e) {
                t || e.preload("prefab/game/hedge", cc.Prefab);
              }), [ 3, 11 ];

             case 10:
              for (X = V.count || 3, lt = this.iceData = {}, ut = lt.rHints = [], pt = lt.cHints = [], 
              dt = []; X; ) ht = Y(1, a - 2), ft = Y(1, a - 2), gt = (a - ht - 1) * a + ft, -1 == dt.indexOf(gt) && (dt.push(gt, gt - 1, gt + 1, gt + a, gt - a), 
              lt[gt] = 1, ut[ht] = (ut[ht] || 0) + 1, pt[ft] = (pt[ft] || 0) + 1, X--);
              return dt = null, d.preload("game/ice/mask", cc.SpriteFrame), d.preload("game/ice/pit", cc.SpriteFrame), 
              cc.assetManager.loadBundle("prefab", function(t, e) {
                t || e.preload("prefab/game/ice", cc.Prefab);
              }), [ 3, 11 ];

             case 11:
              return [ 3, 12 ];

             case 12:
              if (1 == this.heartsNum || this.infinityLife) {
                for (yt = 0, mt = this.hearts; yt < 3; yt++) vt = mt[yt].node, this.infinityLife ? (2 == yt && (vt.active = !0, 
                vt.setPosition(mt[0].node.position)), vt.active = 2 == yt) : vt.active = 0 == yt;
                this.infinityLife && (this.heartInfinity.active = !0);
                this.heartBgNode.width = 70;
              }
              if (u = "game/" + u + "/", _t = _pInfo["default"].ins.getUsingSkin().bg, bt = p ? 1 : _t, 
              d.loadDir(u, cc.SpriteFrame, function(t) {
                if (!t && kt.node && kt.node.isValid) {
                  var e = kt.topSp;
                  e.spriteFrame = d.get(u + "top" + bt, cc.SpriteFrame);
                  var o = _global["default"].padScale;
                  o && (e.node.width *= o, e.node.height *= o);
                }
                kt._initGame(a, l);
              }), 1 != _t) {
                switch (wt = this.downSp.node, St = new cc.Color(), Tt = new cc.Color(), It = "game/skin/" + _t + "/", 
                _t) {
                 case 2:
                  St.r = 222, St.g = 146, St.b = 52, Tt.r = 248, Tt.g = 221, Tt.b = 82;
                }
                wt.color = St;
                wt.parent.getChildByName("bg").color = Tt;
                Dt = wt.parent.getChildByName("winBg");
                _res["default"].ins.lSF(It + "sky", Dt.getComponent(cc.Sprite));
                _res["default"].ins.lSF(It + "cloud", Dt.children[0].getComponent(cc.Sprite));
                _res["default"].ins.lSF(It + "cloud", Dt.children[1].getComponent(cc.Sprite));
              }
              return this.byGuide ? [ 2 ] : (Pt = _pInfo["default"].ins.getUsingSkin().role, cc.assetManager.loadBundle("prefab", function(t, e) {
                t || e.load("skin/girl" + Pt, cc.Prefab, function(t, n) {
                  if (!t && kt.node && kt.node.isValid) {
                    var i = cc.instantiate(n);
                    var r = kt.topGirlSk = i.getComponent(sp.Skeleton);
                    if (p) e.load("prefab/game/goose", cc.Prefab, function(t, e) {
                      if (!t && kt.node && kt.node.isValid) {
                        var o = kt.topSp;
                        kt.downSp;
                        o.addComponent(_uvAni["default"]).speed = .1;
                        var n = cc.instantiate(e);
                        kt.topGooseSk = n.getComponent(sp.Skeleton);
                        r.animation = h.run;
                        n.x = kt.raceFromX;
                        i.x = -n.x;
                        i.y = n.y = 0;
                        o.node.addChild(n);
                        o.node.addChild(i);
                      }
                    }); else {
                      var a = kt.topSp.node.children.length ? -225 : 0;
                      if (i.setPosition(a, -20), kt.topSp.node.addChild(i), f === _pInfo.gameType.challenge) {
                        var s = o.challageData;
                        (f in _pInfo.challengeType && s.type ? s.type : _pInfo.challengeType.tree) === _pInfo.challengeType.worm && (i.scaleX = -i.scaleX);
                      }
                      r.animation = h.idle;
                      r.setEndListener(kt.playGirlEnd.bind(kt));
                    }
                  }
                });
              }), [ 2 ]);
            }
          });
        });
      };
      e.prototype._initGame = function(t, e) {
        this.rows_ = this.cols_ = t;
        this.grid_count = this.rows_ * this.cols_;
        this.baseData = e;
        this.checkLocalData();
        this.initView();
      };
      e.prototype.initView = function() {
        return __awaiter(this, void 0, void 0, function() {
          var t;
          var e;
          var n;
          var i;
          var r;
          var a;
          var c;
          var l;
          var u;
          var p;
          var d;
          var h;
          var f;
          var g;
          var y;
          var m;
          var _;
          var b;
          var w;
          var S;
          var T;
          var I;
          var D;
          var P;
          var k = this;
          return __generator(this, function(s) {
            switch (s.label) {
             case 0:
              for (t = o.type, e = t == _pInfo.gameType.race, n = t == _pInfo.gameType.practice, 
              i = 67, this.fontSize = 36, r = 0; r < this.rows_; r++) {
                for (a = this.GetBaseRowHeadNums(r), c = 2, l = 0, u = a; l < u.length; l++) p = u[l], 
                c += 21.39 * (p + "").length;
                c > i && (i = c);
              }
              switch (e && (i = 90), d = this.rows_, h = -528 + i, f = -403, g = 0, y = 5, m = 1, 
              (_ = 1 - .07 / 45 * (i - 67.5)) < .93 ? _ = .93 : _ > 1 && (_ = 1), b = 1, S = 172, 
              d) {
               case 5:
                w = 384, _ = .608, S = 175, h = -360, f = -319, b = 1.78, i = 86, g = -72, y = -17, 
                m = .78;
                break;

               case 10:
                w = 640 * (_ -= .09), h += 45, f = -429, b = 1.5, y = -21;
                break;

               case 15:
                w = 640 * (_ -= .02);
              }
              return _global["default"].padScale && !this.byGuide && (f -= 50, y -= 50), this.map_node_.setPosition(h, f), 
              this.gridBgSp.node.scale = _, this.selectMaskBg.scale = _, y -= this.downNode.y, 
              (T = this.itemSelectEff.parent.children[0]).setPosition(g, y), T.setScale(m), T.children[0].y += this.downNode.y, 
              this.gridSize = w / this.rows_, this.gridsStartX = S, this.hintScale = b, this.hintWidth = i, 
              [ 4, this.addHeads() ];

             case 1:
              return s.sent(), [ 4, this.SetWorkGridTagWithInit() ];

             case 2:
              for (s.sent(), I = 0; I < 3; I++) this.updateItemNum(I);
              return [ 4, this.checkGuide() ];

             case 3:
              return s.sent(), !n && _idx.platform.startVideoRecord(), D = _pInfo["default"].ins, 
              P = D.getIsFirstRaceTip(), e && !P ? (D.setFirstRaceTip(!0), this.canTouch = !1, 
              _panelMgr["default"].ins.open("ui/ui_raceTip", {
                pageIdx: 2,
                closeCb: function closeCb() {
                  k.canTouch = !0;
                }
              })) : this.canTouch = !0, [ 2 ];
            }
          });
        });
      };
      e.prototype.addHeads = function() {
        return __awaiter(this, void 0, void 0, function() {
          var t;
          var e;
          var n;
          var i;
          var r;
          var a;
          var c;
          return __generator(this, function(s) {
            switch (s.label) {
             case 0:
              for (this.rowHeadNums.length = this.colHeadNums.length = 0, this.rowHeadBegins.length = this.colHeadBegins.length = 0, 
              this.gridHeadColVec.length = this.gridHeadRowVec.length = 0, this.rowHintsParent.removeAllChildren(), 
              this.colHintsParent.removeAllChildren(), t = 1, a = 0; a < this.rows_; a++) (e = this.GetBaseColHeadNums(a).length) > t && (t = e);
              if (o.type == _pInfo.gameType.race && t < 3 && (t = 3), this.byGuide ? this.hintHeight = 85 : this.hintHeight = 5 == this.rows_ ? 105 : 70 + 30 * (t - 2), 
              !(r = o.challageData)) return [ 3, 5 ];
              switch (r.type) {
               case _pInfo.challengeType.tree:
                return [ 3, 1 ];

               case _pInfo.challengeType.ice:
                return [ 3, 3 ];
              }
              return [ 3, 5 ];

             case 1:
              return [ 4, _res["default"].ins.lSF("game/hedge/mask") ];

             case 2:
              return n = s.sent(), [ 3, 5 ];

             case 3:
              return [ 4, _res["default"].ins.lSF("game/ice/mask") ];

             case 4:
              return i = s.sent(), [ 3, 5 ];

             case 5:
              for (a = 0; a < this.rows_; a++) this.AddRowHead(a, n, i);
              for (c = 0; c < this.cols_; c++) this.AddColHead(c, n, i);
              return this.beginAni(), [ 2 ];
            }
          });
        });
      };
      e.prototype.beginAni = function(t, e) {
        void 0 === t && (t = this.hintWidth);
        void 0 === e && (e = this.hintHeight);
        cc.tween(this.tilesParent).to(.2, {
          opacity: 255
        }).start();
        cc.tween(this.colHintsParent).set({
          y: -e
        }).to(.2, {
          y: 0
        }).start();
        cc.tween(this.rowHintsParent).set({
          x: t
        }).to(.2, {
          x: 0
        }).start();
        var n = o.type;
        n == _pInfo.gameType.race ? this.raceCountDown() : n == _pInfo.gameType.challenge ? this.chaCD() : this.commonCD();
      };
      e.prototype.commonCD = function() {
        this.schedule(this._commonCD, 1, cc.macro.REPEAT_FOREVER);
      };
      e.prototype._commonCD = function() {
        if (this.canTouch) {
          if (this.touchTime++, this.touchTime > 5 && null == this.curItemAni) {
            for (var t = 0, e = this.items, o = e.length; t < o; t++) {
              var n = e[t];
              var i = n.count;
              var r = n.icon;
              if (0 != i) {
                (this.curItemAni = this[r + "Ani"]).play();
                break;
              }
            }
            this.curItemAni || (this.touchTime = 0);
          }
        } else this.resetCD();
      };
      e.prototype.resetCD = function() {
        this.touchTime = 0;
        var t = this.curItemAni;
        if (t) {
          t.stop();
          var e = t.node;
          cc.tween(e).to(.2, {
            y: 5,
            angle: 0
          }).start();
          this.curItemAni = null;
        }
      };
      e.prototype.raceCountDown = function() {
        this.hasCountDown ? this.raceTime = 31 : (this.hasCountDown = !0, this.schedule(this._raceCoundDown, 1, cc.macro.REPEAT_FOREVER));
        this._raceCoundDown(void 0, !0);
      };
      e.prototype._raceCoundDown = function(t, e) {
        if (this.canTouch) {
          var o = this.raceTime = this.raceTime - 1;
          this.updateRaceNpcs(o, e);
          o < 10 && 0 != o ? (this.norClock.active = !1, this.speClock.active = this.clockWarn.active = !0, 
          this.clockLbl2.string = o + "", this.clockLbl2.node.x = 1 != o ? 0 : -6, _sound["default"].ins.play(_sound["default"].TIME), 
          _vb["default"].p(_vb.VEnum3.DOUBLE)) : (this.norClock.active = !0, this.speClock.active = this.clockWarn.active = !1, 
          this.clockLbl.string = o + "");
          0 == o && this.loseHeart(this.grids[90].node.position);
        }
      };
      e.prototype.chaCD = function() {
        this.schedule(this._chaCD, 1, cc.macro.REPEAT_FOREVER);
      };
      e.prototype._chaCD = function() {
        var t = this.chaTime = this.chaTime + 1;
        var e = J(t / 86400);
        var o = J((t -= 86400 * e) / 3600);
        var n = J((t -= 3600 * o) / 60);
        var i = (n < 10 ? "0" : "") + n + ":" + ((t -= 60 * n) < 10 ? "0" : "") + t;
        var r = "";
        o && (r = (o < 10 ? "0" : "") + o + ":");
        this.useTimeLbl.string = r + i;
      };
      e.prototype.updateRaceNpcs = function(t, e) {
        var o = this.topGirlSk;
        var n = this.topGooseSk;
        if (n) {
          var i = this.raceFromX;
          var r = (1 - t / 30) * this.raceAllX - i;
          var a = -r;
          var s = e ? .5 : 1;
          o.timeScale = e ? 1.7 : 1;
          cc.tween(o.node).to(s, {
            x: r
          }).call(function() {
            o.timeScale = 1;
          }).start();
          cc.tween(n.node).to(s, {
            x: a
          }).start();
        }
      };
      e.prototype.loseHeart = function(t) {
        var e = this;
        var o = this.heartsNum;
        if (!(o < 1)) {
          this.showOrHideSelectMask();
          var n = !this.infinityLife;
          var i = this.hearts[o - 1];
          var r = this.patices;
          n && this.heartsNum--;
          this.playGirlAni(h.sad);
          var a = i.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
          r.convertToNodeSpaceAR(a, a);
          var s = cc.instantiate(this.heartsPatic);
          s.setPosition(t);
          s.setParent(r);
          s.scale = 1 / this.gridBgSp.node.scale;
          this.canTouch = !1;
          cc.tween(s).to(.8, {
            x: a.x,
            y: a.y
          }).call(function() {
            s.destroy();
            n ? (i.playLose(), 0 == e.heartsNum ? (_sound["default"].ins.play(_sound["default"].LOSE), 
            e.playAni(f.gameLose), e.eventDot(!1)) : e.canTouch = !0) : e.canTouch = !0;
          }).start();
        }
      };
      e.prototype.updateItemNum = function(t, e) {
        var n = this;
        void 0 === t && (t = this.curItemIdx);
        var i = this.items[t];
        var r = i.icon;
        var a = o.type == _pInfo.gameType.practice;
        var s = this[r + "Lbl"];
        if (e) {
          a || _bagMgr["default"].ins.useItem(r, 1, o.type);
          this.OnBtnHideItem();
          var c = i.itemMax;
          if (c > 0 && c == (i.itemCur = i.itemCur + 1)) {
            var l = s.node.parent.parent.getChildByName("canUse");
            l && (l.active = !0);
          }
        } else _res["default"].ins.getBundleByString("prefab").then(function(t) {
          t.load("prefab/game/" + r, cc.Prefab, function(t, e) {
            n.node && cc.isValid(n.node) && !t && (n[r + "Prefab"] = e);
          });
        });
        if (a) {
          var u = s.node;
          u.active = !1;
          u.parent.getChildByName("wuxian").active = !0;
          i.count = 1;
        } else {
          var p = i.count = _bagMgr["default"].ins.getItemCount(r);
          s.string = 0 == p ? "+" : "x" + p;
        }
      };
      e.prototype.useItem = function(t, e, o) {
        return __awaiter(this, void 0, void 0, function() {
          var n;
          var i;
          var r;
          var a;
          var c;
          var l;
          var u;
          var p;
          var d;
          var h;
          var f;
          var g;
          var m;
          var v;
          var _;
          var b;
          var T;
          var I;
          var D;
          var P;
          var k;
          var R;
          var N;
          var O;
          var M;
          var L;
          var A;
          var E;
          var x;
          var B;
          var F;
          var j;
          var V = this;
          return __generator(this, function(s) {
            switch (s.label) {
             case 0:
              return this.canTouch = !1, n = this.curItemIdx, i = this.items[n], r = i.icon, (a = this[r + "Prefab"]) ? [ 3, 2 ] : [ 4, _res["default"].ins.lPre("prefab/game/" + r) ];

             case 1:
              a = s.sent(), s.label = 2;

             case 2:
              switch (c = this.patices, this.curItemIdx) {
               case 0:
                if (l = function l() {
                  V.OnClickGrid(e, o, !0);
                  V.canTouch = !0;
                }, !a) return l(), [ 2 ];
                (u = cc.instantiate(a)).setPosition(t.node.position), u.setParent(c), u.scale = 1 / this.gridBgSp.node.scale, 
                _sound["default"].ins.play(_sound["default"].SHOVEL), (p = u.getComponent(cc.Animation)).play(), 
                p.on(cc.Animation.EventType.FINISHED, function() {
                  u.destroy();
                  l();
                }, this);
                break;

               case 1:
                for (d = this.random_noticeLbl.node.parent.convertToWorldSpaceAR(cc.Vec2.ZERO), 
                c.convertToNodeSpaceAR(d, d), h = _com["default"].ins.rad, f = this.grids, g = [], 
                m = this.rows_, v = this.cols_, _ = this.treeData, F = 0, b = void 0; F < m; F++) for (T = 0; T < v && (I = f[b = F * v + T], 
                _ && _[b] || !I.isEmpty || (g.push({
                  t: m - F - 1,
                  e: T,
                  data: I
                }), 3 != g.length)); T++) ;
                for (_com["default"].ins.randSort(g), D = Math.min(g.length, 3), P = function P(t) {
                  var e = g[t];
                  var o = e.t;
                  var n = e.e;
                  var i = e.data;
                  if (!i) return "break";
                  var r = function r() {
                    V.OnClickGrid(o, n, !0);
                    t == D - 1 && (V.canTouch = !0);
                  };
                  if (a) {
                    var s = cc.instantiate(a);
                    s.setParent(c);
                    s.setPosition(d);
                    s.getComponent(_random_notice["default"]).init();
                    s.scale = 1 / k.gridBgSp.node.scale;
                    var l = i.node.position;
                    var u = new cc.Vec2(l.x, l.y);
                    var p = new cc.Vec2();
                    1 == h(1, 2) ? (p.x = (d.x + d.y + u.x - u.y) / 2, p.y = (d.y + u.x + u.y - d.x) / 2) : (p.x = (u.x + u.y + d.x - d.y) / 2, 
                    p.y = (u.y + d.x + d.y - u.x) / 2);
                    cc.tween(s).delay(.2 * t).call(function() {
                      _sound["default"].ins.play(_sound["default"].ROCKETLAUNCH);
                    }).bezierTo(1, d, p, u).call(function() {
                      _sound["default"].ins.play(_sound["default"].ROCKETATTACK);
                      s.destroy();
                      r();
                    }).start();
                  } else r();
                }, k = this, F = 0; F < D && "break" !== P(F); F++) ;
                break;

               case 2:
                if (R = void 0, N = void 0, O = this.grids, M = this.cols_, L = this.rows_, null != e) for (A = function A(t) {
                  var o = O[(L - e - 1) * M + t];
                  0 == t && (R = o.node.position);
                  t == M - 1 && (N = o.node.position);
                  E.scheduleOnce(function() {
                    V.OnClickGrid(e, t, !0);
                  }, t / M * 1);
                }, E = this, F = 0; F < M; F++) A(F); else if (null != o) for (x = function x(t) {
                  var e = O[(L - t - 1) * M + o];
                  0 == t && (N = e.node.position);
                  t == L - 1 && (R = e.node.position);
                  B.scheduleOnce(function() {
                    V.OnClickGrid(t, o, !0);
                  }, (L - t) / L * 1);
                }, B = this, F = 0; F < L; F++) x(F);
                a ? ((j = cc.instantiate(a)).setParent(c), j.angle = null != o ? -90 : 0, j.scale = 1 / this.gridBgSp.node.scale, 
                cc.tween(j).set({
                  position: R
                }).to(1, {
                  position: N
                }).call(function() {
                  j.destroy();
                  V.canTouch = !0;
                }).start()) : this.scheduleOnce(function() {
                  V.canTouch = !0;
                }, 1);
              }
              return [ 2 ];
            }
          });
        });
      };
      e.prototype.playAni = function(t) {
        if (!this.curAni) switch (this.curAni = t, this.panelAni.play(t), t) {
         case f.gameLose:
          this.playDownAni(!0);
          break;

         case f.gameRelife:
          this.playDownAni(!1);
          break;

         case f.gameWinFailSf:
          this.tilesWinAni();
        }
      };
      e.prototype.playAniDone = function() {
        switch (this.curAni) {
         case f.gameWin:
          this.playWinDone();
          break;

         case f.gameRelife:
          this.reLife();
          break;

         case f.openItemSelect:
          this.canTouch = !0;
          break;

         case f.closeItemSelect:
          this.curItemBtn.setSiblingIndex(this.curItemIdx + 1), this.curItemBtn = this.curItemIdx = null;
        }
        this.curAni = null;
      };
      e.prototype.playWinDone = function() {
        var t;
        var e;
        var n = this;
        if (this.byGuide) cc.tween(this.guideNpc).to(.2, {
          opacity: 255
        }).call(function() {
          var t = n.shareBtn.parent.getChildByName("getBtn");
          var e = n.guideFinger;
          e.setParent(t);
          n.guideNpcAni.play();
          cc.tween(t).to(.2, {
            opacity: 255
          }).start();
          cc.tween(e).set({
            active: !0,
            x: 80,
            y: 0,
            scale: 1,
            opacity: 255
          }).to(.5, {
            scale: 1.2
          }).to(.5, {
            scale: 1
          }, {
            easing: "cubicOut"
          }).union().repeatForever().start();
        }).start(); else if (o.type != _pInfo.gameType.practice && _idx.platform.stopVideoRecord(), 
        o.type === _pInfo.gameType.normal) {
          var i = _pInfo["default"].ins.getPuzzleLvl() - 1;
          var r = (null === (e = null === (t = _cfgMgr["default"].serverCfg.add_desktop) || void 0 === t ? void 0 : t.rules) || void 0 === e ? void 0 : e.nums) || 7;
          var a = _pInfo["default"].ins.getAddDesk();
          _idx.platform.string() != _pConst.PFCode.Bytedance || i != r || a || _panelMgr["default"].ins.open("ui/ui_deskReward", null);
        }
      };
      e.prototype.playDownAni = function(t) {
        var e = t ? -360 : this.downBeginY;
        var o = t ? 0 : 1.1;
        cc.tween(this.downNode).delay(o).to(10 / 30, {
          y: e,
          opacity: t ? 0 : 255
        }).start();
      };
      e.prototype.reLife = function() {
        this.heartsNum = 1;
        this.hearts[0].getHeart();
        this.canTouch = !0;
        o.type == _pInfo.gameType.race && this.raceCountDown();
      };
      e.prototype.GetBaseRowHeadNums = function(t) {
        if (0 == this.rowHeadNums.length) for (var e = this.baseData, o = this.rows_ - 1; o >= 0; o--) {
          for (var n = o * this.cols_, i = [], r = [], a = 0, s = n; s < n + this.cols_; s++) e[s] == c.O ? 1 == ++a && r.push(s) : a > 0 && (i.push(a), 
          a = 0);
          a > 0 && i.push(a);
          0 == i.length && i.push(0);
          this.rowHeadNums.push(i);
          this.rowHeadBegins.push(r);
        }
        return this.rowHeadNums[t];
      };
      e.prototype.GetBaseColHeadNums = function(t) {
        if (0 == this.colHeadNums.length) for (var e = this.baseData, o = 0; o < this.cols_; o++) {
          for (var n = [], i = 0, r = 0, a = []; r < this.rows_; r++) {
            var s = o + r * this.rows_;
            e[s] == c.O ? 1 == ++i && a.push(s) : i > 0 && (n.push(i), i = 0);
          }
          i > 0 && n.push(i);
          0 == n.length && n.push(0);
          this.colHeadNums.push(n);
          this.colHeadBegins.push(a);
        }
        return this.colHeadNums[t];
      };
      e.prototype.GetBaseRowBeginNums = function(t) {
        0 == this.rowHeadBegins.length && this.GetBaseRowHeadNums(t);
        return this.rowHeadBegins[t];
      };
      e.prototype.GetBaseColBeginNums = function(t) {
        0 == this.colHeadBegins.length && this.GetBaseColHeadNums(t);
        return this.colHeadBegins[t];
      };
      e.prototype.GetWorkRowHeadNums = function(t) {
        for (var e = (this.rows_ - t - 1) * this.cols_, o = [], n = 0, i = e; i < e + this.cols_; i++) this.workData[i] == c.O ? n++ : n > 0 && (o.push(n), 
        n = 0);
        n > 0 && o.push(n);
        0 == o.length && o.push(0);
        return o;
      };
      e.prototype.GetWorkColHeadNums = function(t) {
        for (var e = [], o = 0, n = 0; n < this.rows_; n++) {
          var i = t + n * this.rows_;
          this.workData[i] == c.O ? o++ : o > 0 && (e.push(o), o = 0);
        }
        o > 0 && e.push(o);
        0 == e.length && e.push(0);
        return e;
      };
      e.prototype.AddRowHead = function(t, e, o) {
        var n = {
          shineBg: null,
          labels: [],
          allRight: !1
        };
        var i = this.hintScale;
        var r = this.hintWidth;
        var a = new cc.Node("rowHint");
        var s = new cc.Node("bg");
        var c = new cc.Node("shineBg");
        var l = s.addComponent(cc.Sprite);
        var u = c.addComponent(cc.Sprite);
        l.spriteFrame = u.spriteFrame = this.lHintSf;
        l.sizeMode = u.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        l.type = u.type = cc.Sprite.Type.SLICED;
        s.setAnchorPoint(1, .5);
        c.setAnchorPoint(1, .5);
        s.width = c.width = r;
        c.parent = s.parent = a;
        u.dstBlendFactor = cc.macro.BlendFactor.ONE;
        c.opacity = 100;
        c.active = !1;
        for (var p = this.lineW, d = this.font4, h = this.fontSize, f = 5 == this.rows_, g = new cc.Node("lbls"), y = this.GetBaseRowHeadNums(t), m = f ? 5 : 2, v = y.length, _ = 1 - .04 * (v - 2), b = v - 1; b >= 0; b--) {
          var w = new cc.Node("lbl");
          var S = w.addComponent(cc.Label);
          S.font = d;
          S.fontSize = h;
          var T = y[b];
          var I = S.string = T + "";
          S.spacingX = -6;
          w.color = W;
          w.setAnchorPoint(1, .5);
          w.position = cc.v3(-m, -6);
          w.parent = g;
          m = m + (h - 13) * _ + 13 * (I.length - 1);
          n.labels[b] = w;
        }
        if (g.parent = a, a.position = cc.v3(this.gridsStartX - 2, t * this.gridSize + this.gridSize / 2 + Math.floor(t / 5) * p - 1), 
        a.parent = this.rowHintsParent, n.shineBg = c, this.gridHeadRowVec.push(n), a.scale = i, 
        e && t > this.treeData.minRow && t < this.treeData.maxRow || o && this.iceData && this.iceData.rHints[t]) {
          var D = e ? "treeMask" : "iceMask";
          var P = new cc.Node(D);
          P.setAnchorPoint(1, .5);
          var k = P.addComponent(cc.Sprite);
          k.spriteFrame = e || o;
          k.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          k.type = e ? cc.Sprite.Type.TILED : cc.Sprite.Type.SLICED;
          P.width = r;
          a.addChild(P);
          n[D] = P;
        }
      };
      e.prototype.AddColHead = function(t, e, o) {
        var n = {
          shineBg: null,
          labels: [],
          allRight: !1
        };
        var i = this.hintScale;
        var r = this.hintHeight;
        var a = new cc.Node("colHint");
        var s = new cc.Node("bg");
        var c = new cc.Node("shineBg");
        var l = s.addComponent(cc.Sprite);
        var u = c.addComponent(cc.Sprite);
        l.spriteFrame = u.spriteFrame = this.uHintSf;
        l.sizeMode = u.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        l.type = u.type = cc.Sprite.Type.SLICED;
        s.setAnchorPoint(.5, 0);
        c.setAnchorPoint(.5, 0);
        s.height = c.height = r;
        c.parent = s.parent = a;
        u.dstBlendFactor = cc.macro.BlendFactor.ONE;
        c.opacity = 100;
        c.active = !1;
        for (var p = this.font4, d = this.fontSize, h = this.lineW, f = new cc.Node("lbls"), g = this.GetBaseColHeadNums(t), y = 0, m = g.length - 1; m >= 0; m--) {
          var v = new cc.Node("lbl");
          var _ = v.addComponent(cc.Label);
          _.font = p;
          _.fontSize = d;
          var b = g[m];
          var w = 0;
          b > 11 && (w = -2);
          _.string = b;
          _.spacingX = -6;
          v.color = W;
          v.setAnchorPoint(.5, 0);
          v.position = cc.v3(w - 1, y - 10);
          v.parent = f;
          y = y + d - 6;
          n.labels[m] = v;
        }
        if (f.parent = a, a.position = cc.v3(this.gridsStartX + t * this.gridSize + this.gridSize / 2 + Math.floor(t / 5) * h + 1, this.rows_ * this.gridSize + 5), 
        a.parent = this.colHintsParent, n.shineBg = c, this.gridHeadColVec.push(n), a.scale = i, 
        e && t > this.treeData.minCol && t < this.treeData.maxCol || o && this.iceData && this.iceData.cHints[t]) {
          var S = e ? "treeMask" : "iceMask";
          var T = new cc.Node(S);
          T.setAnchorPoint(.5, 0);
          var I = T.addComponent(cc.Sprite);
          I.spriteFrame = e || o;
          I.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          I.type = e ? cc.Sprite.Type.TILED : cc.Sprite.Type.SLICED;
          T.height = r;
          a.addChild(T);
          n[S] = T;
        }
      };
      e.prototype.getWorldPointByTouch = function(t) {
        var e = cc.Vec2.ZERO;
        this.camera.getScreenToWorldPoint(t.getLocation(), e);
        return e;
      };
      e.prototype.TestTouch = function(t, e) {
        void 0 === e && (e = !1);
        var o = this.getWorldPointByTouch(t.touch);
        var n = this.map_node_.convertToNodeSpaceAR(o);
        var i = n.x;
        var r = n.y;
        var a = {
          area: l.None,
          row: -1,
          col: -1
        };
        if (this.touchDir != u.None && e) {
          var s = Math.floor(r / this.gridSize);
          var c = Math.floor((i - this.gridsStartX) / this.gridSize);
          a.area = l.Grid;
          a.row = s;
          a.col = c;
          return a;
        }
        var p = this.map_node_.getContentSize();
        return i < 0 || r < 0 || r > p.height || i > p.width ? a : (i < this.gridsStartX - 15 ? (s = Math.floor(r / this.gridSize)) >= 0 && s < this.rows_ && (a.area = l.HeadRow, 
        a.row = s) : r > this.rows_ * this.gridSize + 15 ? (c = Math.floor((i - this.gridsStartX) / this.gridSize)) >= 0 && c < this.cols_ && (a.area = l.HeadCol, 
        a.col = c) : (s = Math.floor(r / this.gridSize), c = Math.floor((i - this.gridsStartX) / this.gridSize), 
        s >= 0 && s < this.rows_ && c >= 0 && c < this.cols_ && (a.area = l.Grid, a.row = s, 
        a.col = c)), a);
      };
      e.prototype.OnTouchBegan = function(t) {
        if (this.resetCD(), this.canTouch) return !this.click_touch_ && (this.click_touch_ = !0, 
        this.gridTouchStart = null, void (this.isAllRight || (this.gridTouchStart = this.TestTouch(t), 
        this.gridTouchStart.area == l.Grid && this.OperationStepBegin(), this.gridTouchStart.area == l.Grid && (this.touchDir = u.None, 
        this.fillMode = p.None, this.OnClickGrid(this.gridTouchStart.row, this.gridTouchStart.col)))));
      };
      e.prototype.OnTouchMoved = function(t) {
        if (this.canTouch && !this.isAllRight && this.gridTouchStart && this.gridTouchStart.area != l.None) do {
          if (this.gridTouchStart.area != l.Grid) break;
          var e = this.TestTouch(t, !0);
          if (e.area != l.Grid) break;
          if (this.touchDir == u.Horizontal ? e.row = this.lastTouchRow : this.touchDir == u.Vertical && (e.col = this.lastTouchCol), 
          e.row == this.lastTouchRow && e.col == this.lastTouchCol) break;
          this.touchDir == u.None && (e.row == this.lastTouchRow ? this.touchDir = u.Horizontal : e.col == this.lastTouchCol && (this.touchDir = u.Vertical));
          var o = e.row;
          var n = e.col;
          this.OnClickGrid(o, n);
        } while (0);
      };
      e.prototype.OnTouchEnded = function(t) {
        do {
          if (!this.gridTouchStart) break;
          if (this.gridTouchStart.area != l.HeadRow && this.gridTouchStart.area != l.HeadCol) break;
          var e = this.TestTouch(t);
          if (e.area == l.HeadRow && this.gridTouchStart.area == l.HeadRow) {
            this.OnClickRowHead(e.row);
            break;
          }
          e.area == l.HeadCol && this.gridTouchStart.area == l.HeadCol && this.OnClickColHead(e.col);
        } while (0);
        this.CancelGridTouch();
      };
      e.prototype.OnTouchCancelled = function() {
        this.CancelGridTouch();
      };
      e.prototype.GetWorkGridTag = function(t, e) {
        var o = (this.rows_ - t - 1) * this.cols_ + e;
        return o < 0 || o >= this.workData.length ? c.Empty : this.workData[o];
      };
      e.prototype.SetWorkGridTag = function(t, e, n, i) {
        var r;
        var a = this.rows_;
        var s = this.cols_;
        var l = (a - e - 1) * s + n;
        if ((r = this.grids[l]) && !r.isEmpty) return !0;
        var u = this.soundIdx;
        if (u = this.soundIdx > 15 ? 15 : this.soundIdx, !(l < 0 || l >= this.workData.length) && this.workData[l] != t && (this.OperationStepBySetWorkTag(this.workData[l], t, e * s + n), 
        t == c.O || t == c.X)) {
          var p = this.treeData;
          var d = this.wormData;
          var h = this.iceData;
          if (this.curItemBtn && !i) return 2 == this.curItemIdx || !(!p || !p[l]) || !(!h || !h[l]) || (this.updateItemNum(this.curItemIdx, !0), 
          this.useItem(r, e, n), _vb["default"].p(_vb.VEnum3.SHORT), !0);
          if (r.isEmpty) {
            var f = this.guideCheckGrid;
            if (f) {
              var y = e + "_" + n;
              if (-1 == (b = f.indexOf(y))) return !0;
              f.splice(b, 1);
              0 == f.length && this.scheduleOnce(this.updateGuideStep, .5);
            }
            if (i && (t = r.isRight), p) {
              if (p[l]) return !0;
              this.treeCheck(e, n);
            }
            if (h) {
              if ((m = h[l]) && m.drop) return !0;
              this.iceCheck(e, n);
            }
            if (r.select(t), _vb["default"].p(_vb.VEnum3.SHORT), r.isRight && (this.workData[l] = c.O, 
            t == c.O)) {
              if (d) {
                var m = d[l];
                var v = d.counts;
                var _ = d.sps;
                if (m && v) {
                  var b;
                  var w = v[b = m.i] = v[b] - 1;
                  var T = _[b];
                  if (T && T.addCount(), 0 == w) {
                    var D = this.tilesParent.getChildByName("wormParent");
                    var P = o.challageData.data.data;
                    if (D && D.children[b] && P && P[b]) {
                      D.children[b].active = !0;
                      var k = this.grids;
                      var R = 0;
                      P[b].forEach(function(t) {
                        k[t].playWormAni(.06 * R);
                        R++;
                      });
                    }
                  }
                }
              }
              _sound["default"].ins.play("tile_note_" + u);
              this.soundIdx++;
            }
            this.tipTog && !i && (this.tipLabel.string = u + "", 1 == u ? this.tipNode.setPosition(r.node.position) : 2 == u ? (this.tipNode.active = !0, 
            this.tipAni.play(g.tipIn)) : (this.tipLabel.node.x = u > 9 ? -14 : -13, cc.tween(this.tipNode).to(.1, {
              scale: 1.1
            }).to(.1, {
              scale: 1
            }).start()));
          }
        }
      };
      e.prototype.treeCheck = function(t, e) {
        var o = this.treeData;
        if (void 0 !== o && void 0 !== t && void 0 !== e) {
          var n = this.rows_;
          var i = this.cols_;
          var r = this.gridHeadRowVec;
          var a = this.gridHeadColVec;
          var s = o.tmp || (o.tmp = []);
          var c = o.minRow;
          var l = o.maxRow;
          var u = o.minCol;
          var p = o.maxCol;
          s.push(t > 0 && {
            r: t - 1,
            c: e
          }, t < n - 1 && {
            r: t + 1,
            c: e
          }, e > 0 && {
            r: t,
            c: e - 1
          }, e < i - 1 && {
            r: t,
            c: e + 1
          });
          s.forEach(function(t) {
            if (t) {
              var e = t.r;
              var s = t.c;
              var d = (n - e - 1) * i + s;
              var h = o[d];
              if (h) {
                h.play(), delete o[d];
                var f = a[s].treeMask;
                if (f) {
                  for (var g = 1, y = c + 1; y < l && 1 == g; y++) o[(n - y - 1) * i + s] && (g = 0);
                  g && (delete a[s].treeMask, cc.tween(f).to(.5, {
                    height: 0
                  }).call(function() {
                    f.destroy();
                  }).start());
                }
                var m = r[e].treeMask;
                if (m) {
                  g = 1;
                  for (var v = u + 1; v < p && 1 == g; v++) o[(n - e - 1) * i + v] && (g = 0);
                  g && (delete r[e].treeMask, cc.tween(m).to(.5, {
                    width: 0
                  }).call(function() {
                    m.destroy();
                  }).start());
                }
              }
            }
          });
          s.length = 0;
        }
      };
      e.prototype.iceCheck = function(t, e) {
        var o = this;
        var n = this.iceData;
        if (void 0 !== n && void 0 !== t && void 0 !== e) {
          var i = this.rows_;
          var r = this.cols_;
          var a = this.gridHeadRowVec;
          var s = this.gridHeadColVec;
          var c = n.rHints;
          var l = n.cHints;
          var u = n.tmp || (n.tmp = []);
          u.push(t > 0 && {
            r: t - 1,
            c: e
          }, t < i - 1 && {
            r: t + 1,
            c: e
          }, e > 0 && {
            r: t,
            c: e - 1
          }, e < r - 1 && {
            r: t,
            c: e + 1
          });
          u.forEach(function(t) {
            if (t) {
              var e = t.r;
              var u = t.c;
              var p = (i - e - 1) * r + u;
              var d = n[p];
              if (d && d.drop) {
                if (0 == d.drop()) {
                  delete n[p];
                  var h = c[e] = c[e] - 1;
                  var f = l[u] = l[u] - 1;
                  var g = s[u].iceMask;
                  g && 0 == f && (delete s[u].iceMask, cc.tween(g).to(.5, {
                    height: 0
                  }).call(function() {
                    g.destroy();
                  }).start());
                  var y = a[e].iceMask;
                  y && 0 == h && (delete a[e].iceMask, cc.tween(y).to(.5, {
                    width: 0
                  }).call(function() {
                    y.destroy();
                  }).start());
                }
                var m = new cc.Node("icePit");
                var v = d.node;
                m.scale = v.scale, m.setPosition(v.x, v.y), v.parent.addChild(m), _res["default"].ins.lSF("game/ice/pit", m.addComponent(cc.Sprite));
                var _ = o.gridSize;
                var b = cc.v2(v.x, v.y);
                var S = cc.v2(b.x + _, b.y + 3 * _);
                var T = cc.v2(b.x + 1.5 * _, b.y - 3 * _);
                cc.tween(m).bezierTo(1, b, S, T).start(), cc.tween(m).delay(.2).by(20 / 30, {
                  scale: -.3
                }).to(4 / 30, {
                  opacity: 0
                }).call(function() {
                  m.destroy();
                }).start();
              }
            }
          });
          u.length = 0;
        }
      };
      e.prototype.tipAniDone = function(t, e) {
        e.name == g.tipOut && (this.tipNode.active = !1);
      };
      e.prototype.SetWorkGridTagWithInit = function() {
        return __awaiter(this, void 0, void 0, function() {
          var t;
          var e;
          var n;
          var i;
          var r;
          var a;
          var c;
          var l;
          var u;
          var p;
          var d;
          var h;
          var f;
          var g;
          var y;
          var m;
          var v;
          var _;
          var b;
          var S;
          var T;
          var I;
          var D;
          var P;
          var R;
          var N;
          var C;
          var O;
          var M;
          var L;
          var A;
          var E;
          var x;
          var B;
          var F;
          var V;
          var U;
          var z;
          var H;
          var G;
          var J;
          var W;
          var q;
          var K;
          var Y;
          var X;
          var Z;
          var Q = this;
          return __generator(this, function(s) {
            switch (s.label) {
             case 0:
              if (e = (t = this).rows_, n = t.cols_, i = t.gridPrefab, r = t.gridsStartX, a = t.gridSize, 
              c = t.grids, l = t.tilesParent, u = t.baseData, p = t.treeData, d = t.wormData, 
              h = t.iceData, !(b = o.challageData)) return [ 3, 7 ];
              switch (b.type) {
               case _pInfo.challengeType.tree:
                return [ 3, 1 ];

               case _pInfo.challengeType.worm:
                return [ 3, 3 ];

               case _pInfo.challengeType.ice:
                return [ 3, 5 ];
              }
              return [ 3, 7 ];

             case 1:
              return [ 4, _res["default"].ins.lPre("prefab/game/hedge") ];

             case 2:
              return f = s.sent(), g = new cc.Node("treeMasks"), l.addChild(g), [ 3, 7 ];

             case 3:
              return [ 4, _res["default"].ins.lPre("prefab/game/worm") ];

             case 4:
              for (y = s.sent(), m = new cc.Node("wormParent"), M = b.data.data.length, L = 0; L < M; L++) Y = new cc.Node("worms"), 
              m.addChild(Y), Y.active = !1;
              return l.addChild(m), [ 3, 7 ];

             case 5:
              return [ 4, _res["default"].ins.lPre("prefab/game/ice") ];

             case 6:
              return v = s.sent(), _ = new cc.Node("iceParent"), l.addChild(_), [ 3, 7 ];

             case 7:
              return S = a / 44, T = Math.floor, I = this.lineW, 1 == (R = _pInfo["default"].ins.getUsingSkin().bg) ? [ 3, 10 ] : (N = "game/skin/" + R + "/", 
              [ 4, _res["default"].ins.lSF(N + "grid") ]);

             case 8:
              return D = s.sent(), [ 4, _res["default"].ins.lSF(N + "gridTip") ];

             case 9:
              P = s.sent(), s.label = 10;

             case 10:
              for (C = 0, O = this.workData, M = O.length; C < M; C++) L = e - Math.floor(C / n) - 1, 
              E = T((A = C % n) / 5), x = T(L / 5), B = r + A * a + .5 * a + E * I, F = L * a + .5 * a + x * I, 
              (V = cc.instantiate(i)).setPosition(B, F), V.setScale(S, S, 1), U = c[C] = V.getComponent(_grid["default"]), 
              z = u[C], U.init(z), U.initType(D, P), l.addChild(V), f && L > p.minRow && L < p.maxRow && A > p.minCol && A < p.maxCol && ((H = cc.instantiate(f)).setPosition(B, F), 
              H.setScale(S, S, 1), g.addChild(H), p[C] = H.getComponent(cc.Animation)), y && z && (G = d[C], 
              J = G.i, W = G.tex, q = G.dir, (K = cc.instantiate(y)).angle = q, K.setPosition(B, F), 
              K.setScale(S, S, 1), K.getComponent("worm").init(W), (Y = m.children[J]).addChild(K)), 
              v && h && h[C] && ((X = cc.instantiate(v)).setPosition(B, F), X.setScale(S, S, 1), 
              (Z = X.getComponent("ice")).r = L, Z.c = A, h[C] = Z, _.addChild(X));
              return g && g.setSiblingIndex(l.childrenCount - 1), m && m.setSiblingIndex(0), _ && _.setSiblingIndex(l.childrenCount - 1), 
              this.schedule(function() {
                Q.playHightLight(1, 1);
              }, 30), [ 2 ];
            }
          });
        });
      };
      e.prototype.GetBaseGridTag = function(t, e) {
        var o = (this.rows_ - t - 1) * this.cols_ + e;
        return o < 0 || o >= this.grid_count ? c.Empty : this.baseData[o];
      };
      e.prototype.IsRowLogicRight = function(t) {
        var e = this.GetBaseRowHeadNums(t);
        var o = this.GetWorkRowHeadNums(t);
        if (e.length != o.length) return !1;
        for (var n = 0; n < e.length; n++) if (e[n] != o[n]) return !1;
        return !0;
      };
      e.prototype.IsColLogicRight = function(t) {
        var e = this.GetBaseColHeadNums(t);
        var o = this.GetWorkColHeadNums(t);
        if (e.length != o.length) return !1;
        for (var n = 0; n < e.length; n++) if (e[n] != o[n]) return !1;
        return !0;
      };
      e.prototype.IsRowFillRight = function(t) {
        for (var e = 0; e < this.cols_; e++) {
          var o = this.GetBaseGridTag(t, e);
          var n = this.GetWorkGridTag(t, e);
          if (o == c.O && n != c.O) return !1;
          if (o == c.X && n == c.O) return !1;
        }
        return !0;
      };
      e.prototype.IsColFillRight = function(t) {
        for (var e = 0; e < this.rows_; e++) {
          var o = this.GetBaseGridTag(e, t);
          var n = this.GetWorkGridTag(e, t);
          if (o == c.O && n != c.O) return !1;
          if (o == c.X && n == c.O) return !1;
        }
        return !0;
      };
      e.prototype.RefreshRowHeadState = function(t) {
        var e = o.type != _pInfo.gameType.race;
        var n = this.gridHeadRowVec[t];
        var i = n.labels;
        if (this.IsRowLogicRight(t)) {
          for (var r = 0; r < i.length; r++) e && (i[r].color = q), this.playHightLight(t);
          this.raceRefresh(t);
          n.allRight = !0;
          this.selectData.row == t && this.showOrHideSelectMask();
          !this.byGuide && this.playGirlAni(h.happy);
        } else if (e) for (var a = this.GetBaseRowHeadNums(t), s = this.GetBaseRowBeginNums(t), l = this.workData, u = 0, p = a.length; u < p; u++) if (!q.equals(i[u].color)) {
          for (var d = !0, f = s[u], g = s[u] + a[u]; f < g; f++) if (l[f] != c.O) {
            d = !1;
            break;
          }
          d && (i[u].color = q);
        }
      };
      e.prototype.RefreshColHeadState = function(t) {
        var e = o.type != _pInfo.gameType.race;
        var n = this.gridHeadColVec[t];
        var i = n.labels;
        if (this.IsColLogicRight(t)) {
          for (var r = 0; r < i.length; r++) e && (i[r].color = q), this.playHightLight(void 0, t);
          this.raceRefresh(void 0, t);
          n.allRight = !0;
          this.selectData.col == t && this.showOrHideSelectMask();
        } else if (e) for (var a = this.GetBaseColHeadNums(t), s = this.GetBaseColBeginNums(t), l = this.workData, u = this.rows_, p = 0, d = a.length; p < d; p++) if (!q.equals(i[p].color)) {
          for (var h = !0, f = s[p], g = s[p] + a[p] * u; f < g; f += u) if (l[f] != c.O) {
            h = !1;
            break;
          }
          h && (i[p].color = q);
        }
      };
      e.prototype.playHightLight = function(t, e) {
        var o;
        var n = this.grids;
        var i = this.rows_;
        var r = this.cols_;
        if (void 0 === e) {
          for (var a = void 0, s = void 0, l = 0; l < r; l++) (o = n[l + (i - t - 1) * i]).isEmpty && (o.select(c.X, !0), 
          this.treeCheck(t, l), this.iceCheck(t, l)), o.playHL(.02 * l), 0 == l ? a = o.node.position : l == r - 1 && (s = o.node.position);
          if (a) {
            var u = cc.instantiate(this.fadePrefab);
            u.setPosition(a.x - this.gridSize / 2, a.y);
            u.angle = 90;
            u.scale = 1 / this.gridBgSp.node.scale;
            this.patices.addChild(u);
            cc.tween(u).to(.02 * (r - 1), {
              position: s
            }).delay(.2).call(function() {
              u.destroy();
            }).start();
          }
        } else if (void 0 === t) {
          for (a = void 0, s = void 0, l = 0; l < i; l++) (o = n[e + l * i]).isEmpty && (o.select(c.X, !0), 
          this.treeCheck(i - 1 - l, e), this.iceCheck(i - 1 - l, e)), o.playHL(.02 * l), 0 == l ? a = o.node.position : l == r - 1 && (s = o.node.position);
          if (a) {
            var p = cc.instantiate(this.fadePrefab);
            p.setPosition(a.x - this.gridSize / 2, a.y);
            p.scale = 1 / this.gridBgSp.node.scale;
            this.patices.addChild(p);
            cc.tween(p).to(.02 * (r - 1), {
              position: s
            }).delay(.2).call(function() {
              p.destroy();
            }).start();
          }
        } else {
          var d = void 0;
          for (l = 0; l < i; l++) for (var h = 0; h < r; h++) d = .02 * (i - l - 1 + h), (o = n[l + h * i]).playHL(d);
        }
      };
      e.prototype.raceRefresh = function(t, e) {
        if (o.type == _pInfo.gameType.race) {
          var n = this.raceRefreshPop;
          n.push({
            r: t,
            c: e
          });
          1 == n.length && (this.canTouch = !1, this.scheduleOnce(this.checkRaceFresh));
        }
      };
      e.prototype._raceRefresh = function(t, e) {
        if (this.isRefreshing) this.raceRefreshPop.push({
          r: t,
          c: e
        }); else {
          this.isRefreshing = !0;
          var n = this.raceDensity;
          (this.raceRefeshTime = this.raceRefeshTime + 1) % 2 == 0 && ((n = this.raceDensity - .05) < this.raceMinDenstiy && (n = this.raceMinDenstiy), 
          this.raceDensity = n);
          var i = this.baseData;
          var r = this.workData;
          var a = this.grids;
          var s = this.gridPrefab;
          var l = this.tilesParent;
          var u = cc.instantiate;
          var p = null != e;
          var d = null != t;
          d && (t = 9 - t);
          o.type;
          for (var h, f = p && e < 5, g = f ? -1 : 1, y = d && t < 5, m = y ? -10 : 10, v = 0, _ = 1, b = 0, w = 1, S = 0, T = void 0; S < 10; S++) {
            T = y ? S : 9 - S;
            for (var I = 0, D = void 0; I < 10; I++) {
              var P = a[x = (D = f ? I : 9 - I) + 10 * T];
              var k = i[x];
              var R = r[x];
              if (p && (0 == k && 1 == w && b++, w = k), p && D == e || d && T == t) P.playFallDown(); else if (p ? (f && D > e || !f && D < e) && (P.playWalk(a[x + g].node.position), 
              a[x + g] = P, i[x + g] = k, r[x + g] = R) : d && (y && T > t || !y && T < t) && (P.playWalk(a[x + m].node.position), 
              a[x + m] = P, i[x + m] = k, r[x + m] = R), p && 9 == I || d && 9 == S) {
                0 == (h = Math.random() < n ? 1 : 0) && 1 == _ && v++;
                (v > 2 || b > 2) && (h = 1, v--);
                _ = h;
                b = 0;
                w = 0;
                var N = P.node;
                var C = u(s);
                C.setPosition(N.position);
                C.setParent(l);
                C.setScale(0);
                var O = C.getComponent("grid");
                O.init(h);
                O.initType();
                O.playShow(N.scale);
                a[x] = O;
                i[x] = h;
                r[x] = c.Empty;
              }
            }
          }
          if (d) {
            t = y ? 9 : 0;
            var M = [];
            var L = 0;
            var A = void 0;
            for (I = 0; I < 10; I++) {
              var E = a[I + 10 * t].isRight;
              M[M.length - 1] != E && (E && L++, M.push(E));
            }
            if (L > 4) for (_ = 1, I = 0; I < 10; I++) {
              var x;
              var B = a[x = I + 10 * t];
              if (1 == _ && 0 == B.isRight) B.isRight = 1, i[x] = 1, A = !0; else if (A) break;
              _ = B.isRight;
            }
          }
          this.addHeads();
          this.scheduleOnce(this.checkRaceFresh.bind(this), .5);
        }
      };
      e.prototype.checkRaceFresh = function() {
        var t = this.raceRefreshPop;
        if (this.isRefreshing = !1, t.length) {
          var e = t.pop();
          var o = e.r;
          var n = e.c;
          this._raceRefresh(o, n);
        } else this.canTouch = !0;
      };
      e.prototype.OnClickGrid = function(t, e, o) {
        if (!(t < 0 || e < 0 || t >= this.rows_ || e >= this.cols_)) {
          var n = this.GetWorkGridTag(t, e);
          var i = -1;
          n == c.Empty ? i = this.pen : n == c.O && this.pen == c.O ? i = c.Empty : n == c.X && this.pen == c.X && (i = c.Empty);
          this.fillMode == p.Set && n != c.Empty || this.fillMode == p.Clean && n == c.Empty || (-1 != i && (this.fillMode == p.None && (this.fillMode = n == c.Empty ? p.Set : p.Clean), 
          !this.SetWorkGridTag(i, t, e, o) && (this.RefreshRowHeadState(t), this.RefreshColHeadState(e), 
          this.CheckAllRight())), this.lastTouchRow = t, this.lastTouchCol = e);
        }
      };
      e.prototype.OnClickRowHead = function(t) {
        if (!this.byGuide && !this.IsRowLogicRight(t)) {
          var e = this.gridHeadRowVec[t];
          e.treeMask || e.iceMask || (this.curItemBtn && 2 == this.curItemIdx ? (this.updateItemNum(this.curItemIdx, !0), 
          this.useItem(null, t, null)) : this.showOrHideSelectMask(t), _vb["default"].p(_vb.VEnum3.SHORT));
        }
      };
      e.prototype.OnClickColHead = function(t) {
        if (!this.byGuide && !this.IsColLogicRight(t)) {
          var e = this.gridHeadColVec[t];
          e.treeMask || e.iceMask || (this.curItemBtn && 2 == this.curItemIdx ? (this.updateItemNum(this.curItemIdx, !0), 
          this.useItem(null, null, t)) : this.showOrHideSelectMask(void 0, t), _vb["default"].p(_vb.VEnum3.SHORT));
        }
      };
      e.prototype.showOrHideSelectMask = function(t, e) {
        var o = this.selectMask;
        var n = this.selectData;
        if (void 0 === t && void 0 === e) o.active = !1, -1 != n.row && ((m = this.gridHeadRowVec[n.row].shineBg).active = !1, 
        cc.Tween.stopAllByTarget(m), n.row = -1), -1 != n.col && ((m = this.gridHeadColVec[n.col].shineBg).active = !1, 
        cc.Tween.stopAllByTarget(m), n.col = -1); else {
          var i = o.active;
          var r = this.selectMaskBg;
          var a = this.gridBgSp.node;
          var s = this.gridSize;
          var c = this.cols_;
          var l = this.lineW;
          var u = c * s + this.gridsStartX + l * (c / 5 - 1);
          var p = u / 2;
          var d = p;
          if (i || (o.active = !0, o.width = o.height = u, o.setPosition(p, d), cc.tween(r).set({
            opacity: 0
          }).to(.2, {
            opacity: 128
          }).start()), void 0 !== t) {
            var h = this.gridHeadRowVec;
            var f = n.row;
            var g = n.col;
            if (-1 != f && ((m = h[f].shineBg).active = !1, cc.Tween.stopAllByTarget(m)), f == t) {
              if (n.row = -1, -1 == g) return void (o.active = !1);
              o.y = d;
              o.height = u;
            } else o.height = s, n.row = t, o.y = t * s + s / 2 + Math.floor(t / 5) * l - 1, 
            (m = h[t].shineBg).active = !0, cc.tween(m).to(.8, {
              opacity: 0
            }).to(.8, {
              opacity: 100
            }).union().repeatForever().start();
          } else {
            var y = this.gridHeadColVec;
            if (f = n.row, -1 != (g = n.col) && ((m = y[g].shineBg).active = !1, cc.Tween.stopAllByTarget(m)), 
            g == e) {
              if (n.col = -1, -1 == f) return void (o.active = !1);
              o.x = p;
              o.width = u;
            } else {
              var m;
              o.width = s;
              n.col = e;
              o.x = e * s + s / 2 + this.gridsStartX + Math.floor(e / 5) * l - 1;
              (m = y[e].shineBg).active = !0;
              cc.tween(m).to(.8, {
                opacity: 0
              }).to(.8, {
                opacity: 100
              }).union().repeatForever().start();
            }
          }
          r.setPosition(a.x - o.x, a.y - o.y + 8);
        }
      };
      e.prototype.CancelGridTouch = function() {
        this.soundIdx = 1;
        this.tipNode.active && this.tipAni.play(g.tipOut);
        this.click_touch_ = !1;
        this.gridTouchStart && this.gridTouchStart.area != l.None && (this.gridTouchStart.area = l.None, 
        this.OperationStepEnd());
      };
      e.prototype.IsAllRight = function() {
        if (this.baseOTotal < 0) {
          this.baseOTotal = 0;
          for (var t = 0; t < this.grid_count; t++) this.baseData[t] == c.O && (this.baseOTotal += 1);
        }
        var e = this.baseOTotal;
        var o = 0;
        for (t = 0; t < this.workData.length; t++) this.workData[t] == c.O && (o += 1);
        if (e != o) return !1;
        for (var n = 0; n < this.rows_; n++) if (!this.IsRowLogicRight(n)) return !1;
        for (var i = 0; i < this.cols_; i++) if (!this.IsColLogicRight(i)) return !1;
        return !0;
      };
      e.prototype.CheckAllRight = function() {
        !this.isAllRight && this.IsAllRight() && (this.isAllRight = !0, this.showOrHideSelectMask(), 
        this.gameWin());
      };
      e.prototype.winSpScaleAni = function() {
        var t = this.winSpParent;
        var e = this.winAniNode.parent;
        var o = new cc.Vec3();
        t.parent.convertToWorldSpaceAR(t.position, o);
        e.convertToNodeSpaceAR(o, o);
        t.setParent(e);
        t.setSiblingIndex(3);
        t.setScale(this.gridBgSp.node.scale);
        t.setPosition(o);
        cc.tween(t).to(.5, {
          scale: 1.2
        }).delay(5 / 30).to(1, {
          scale: .5,
          x: 0,
          y: _global["default"].padScale ? 75 : 175
        }, {
          easing: "cubicIn"
        }).call(this.PlayFireworks.bind(this)).by(5 / 30, {
          scale: .05
        }, {
          easing: "cubicOut"
        }).by(5 / 30, {
          scale: -.05
        }, {
          easing: "cubicIn"
        }).start();
      };
      e.prototype.tilesWinAni = function() {
        var t = this.map_node_;
        cc.tween(t).delay(20 / 30).to(1, {
          scale: .606,
          x: -288,
          y: 100
        }, {
          easing: "cubicIn"
        }).call(this.PlayFireworks.bind(this)).start();
      };
      e.prototype.gameWin = function() {
        var t;
        var e;
        var n = this;
        this.canTouch = !1;
        _sound["default"].ins.play(_sound["default"].WIN);
        var self = this;
        var currentGameType = o.type;
        var currentLevel = _pInfo["default"].ins.getPuzzleLvl();
        console.log("\ud83c\udfae \u6e38\u620f\u5b8c\u6210\u68c0\u6d4b - \u7c7b\u578b:", currentGameType, "\u5173\u5361:", currentLevel);
        console.log("\ud83c\udfae \u6e38\u620f\u5b8c\u6210\u68c0\u6d4b - o\u5bf9\u8c61:", o);
        console.log("\ud83c\udfae \u6e38\u620f\u5b8c\u6210\u68c0\u6d4b - _pInfo.gameType:", _pInfo.gameType);
        this.scheduleOnce(function() {
          try {
            if (_global["default"].originalLevel) {
              console.log("\ud83d\udd04 \u6062\u590d\u539f\u59cb\u5173\u5361\u8fdb\u5ea6:", _global["default"].originalLevel);
              _pInfo["default"].ins.setPuzzleLvl(_global["default"].originalLevel);
              _global["default"].originalLevel = null;
            }
            var isNormalGame = currentGameType == _pInfo.gameType.normal;
            console.log("\ud83d\udd0d \u6e38\u620f\u7c7b\u578b\u68c0\u67e5 - \u662f\u5426\u666e\u901a\u6e38\u620f:", isNormalGame, "\u6e38\u620f\u7c7b\u578b\u503c:", currentGameType, "\u666e\u901a\u7c7b\u578b\u503c:", _pInfo.gameType.normal);
            if (isNormalGame) {
              var difficulty = self.getLevelDifficulty(currentLevel);
              console.log("\ud83c\udfaf \u5173\u5361" + currentLevel + "\u5b8c\u6210\uff0c\u96be\u5ea6:", difficulty);
              var hasReward = _rewardMgr["default"].onPuzzleComplete(difficulty, true);
              hasReward ? console.log("\ud83c\udf89 \u73b0\u91d1\u5956\u52b1\u5df2\u7acb\u5373\u6dfb\u52a0\u5230\u4f59\u989d\u5e76\u66f4\u65b0UI\uff01") : console.log("\u2b55 \u672c\u6b21\u6ca1\u6709\u83b7\u5f97\u73b0\u91d1\u5956\u52b1\uff08\u968f\u673a\u6982\u738740%\u4e0d\u89e6\u53d1\uff09");
            } else console.log("\u2139\ufe0f \u975e\u666e\u901a\u6e38\u620f\u6a21\u5f0f\uff0c\u8df3\u8fc7\u73b0\u91d1\u5956\u52b1");
          } catch (rewardError) {
            console.log("\u73b0\u91d1\u5956\u52b1\u7cfb\u7edf\u9519\u8bef:", rewardError);
            console.error(rewardError);
          }
        }, 1);
        var i;
        var r;
        var a = _pInfo["default"].ins;
        var s = o.type;
        var c = s == _pInfo.gameType.normal;
        var l = s == _pInfo.gameType.practice;
        var u = s == _pInfo.gameType.festival;
        var p = s == _pInfo.gameType.freedom;
        var d = s == _pInfo.gameType.challenge;
        _taskMgr["default"].taskCheck(s);
        (c || u || p) && _festivalMgr["default"].ins.updPro(_festivalMgr.fesTaskKey.throughMain, 1);
        this.eventDot(!0);
        u ? r = _festivalMgr["default"].ins.getFesPuzzleSprFrame() : p || d || (r = c ? _levelMgr["default"].ins.getPuzzleSprFrame(_pInfo["default"].ins.getPuzzleLvl()) : _levelMgr["default"].ins.getPracitceSprfFrame(this.practiceId));
        var h = this.node.getChildByName("win");
        var g = h.getChildByName("top");
        var y = h.getChildByName("mid");
        if (l) {
          g.active = !1;
          y.active = !1;
          var m = h.getChildByName("down");
          if (m.getChildByName("adGetBtn").active = !1, m.getChildByName("nextPraBtn").active = !this.byGuide, 
          this.byGuide) {
            var v = m.getChildByName("getBtn");
            v.x = 0;
            v.opacity = 0;
          }
        } else {
          var _ = void 0;
          d ? (this.unschedule(this._chaCD), _challengeMgr["default"].ins.winChallenge(o.challageData.date), 
          _global["default"].loadToRace = 3) : p ? (this.levelLbl.node.parent.active = !1, 
          g.scaleX = 0, _ = 15 == this.rows_) : (i = c ? a.getPuzzleLvl() : _festivalMgr["default"].ins.getFesPuzzleLv(), 
          this.levelLbl.string = "" + i, _ = i % 3 == 0, c ? a.finishPuzzleLvl() : _festivalMgr["default"].ins.finishFesPuzzleLv());
          a.recordGameResult(s, !0, this.score, void 0, i);
          var b = {};
          if (b[s !== _pInfo.gameType.festival || _festivalMgr["default"].ins.isJigsawMax() ? "puzzle_pieces" : "newYear_pieces"] = 1, 
          d) {
            this.cons2Lbl.string = this.useTimeLbl.string;
            this.mult = 3;
            this.adGetBtn.node.adDotData = "\u6bcf\u65e5\u6311\u6218\u4e09\u500d\u5956\u52b1";
            var T = o.challageData.date.num || 1;
            this.consBestLbl.string = T + "";
            b = (null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.daily_challenge) || void 0 === e ? void 0 : e.reward) || {
              times: 50,
              coin: 100,
              puzzle_pieces: 10
            };
            o.challageData.date.isFin && (b = {});
          } else {
            var I = a.getConsWinTimes();
            this.cons2Lbl.string = I + "";
            this.consBestLbl.string = this.recData.heWins;
            var D = this.baseReward = 2;
            var k = this.reward = Math.min(D * I, 20);
            this.mult = _ ? 10 : 3;
            this.adGetBtn.node.adDotData = _ ? "\u4e3b\u7ebf\u5341\u500d\u5956\u52b1" : "\u4e3b\u7ebf\u4e09\u500d\u5956\u52b1";
            this.tenNode.active = _;
            this.threeNode.active = !_;
            this.rew1Lbl.string = D + "";
            this.rew2Lbl.string = k + "";
          }
          for (var R in b) {
            var C = b[R];
            var O = cc.instantiate(this.rewItemPre);
            O.scale = 1.3;
            O.getComponent(_item["default"]).initByData(R, C);
            this.rewItems.content.addChild(O);
          }
          if (!d || !o.challageData.date.isFin) {
            var L = this.rewItems.content.children[0].width * this.rewItems.content.childrenCount;
            this.rewItems.node.x = L > this.rewItems.node.width ? -180 : (this.rewItems.node.width - L) / 2 - 180;
            L = Math.min(L, 360);
            this.rewItems.node.width = L;
            this.rewItems.scrollToLeft();
          }
          var B = _cfgMgr["default"].serverCfg.share_rules.rules.main_line;
          var V = a.getNormalShareTime();
          this.shareIcon.spriteFrame = cc.assetManager.getBundle("resSps").get("item/" + B.props, cc.SpriteFrame);
          this.shareLbl.string = "+" + B.val;
          this.shareIcon.node.active = V < B.daily_limit_reward_times;
          _res["default"].ins.getBundleByString("prefab").then(function(t) {
            t.preload("prefab/game/banner", cc.Prefab);
          });
        }
        r ? r.then(function(t) {
          var e = n.cols_;
          var o = n.rows_;
          var i = n.gridSize;
          var r = n.map_node_;
          var a = n.gridBgSp.node;
          var s = a.scale;
          var c = a.x + a.width * s / 2 + r.x;
          var l = a.y + a.height * s / 2 + r.y;
          _global["default"].padScale && (l -= 150, g.isValid && (g.removeComponent(cc.Widget), 
          n.scheduleOnce(function() {
            g.y = -100;
          })), h.getChildByName("mid").y = -100);
          n.winAniNode.setPosition(c, l);
          n.winAniNode.setScale(s);
          var u = n.lastTouchRow - o / 2;
          var p = (n.lastTouchCol - e / 2) * i + i / 2;
          var d = u * i + i / 2;
          n.winCircleMask.setPosition(p, d);
          n.winSpParent.setPosition(-p, -d);
          n.winLight.setPosition(p, d);
          var y = new cc.Node();
          y.addComponent(cc.Sprite).spriteFrame = t;
          y.parent = n.node;
          var m = y.width;
          var v = y.height;
          var _ = new cc.RenderTexture();
          _.initWithSize(y.width, y.height);
          var b = new cc.Node();
          b.setParent(y);
          var w = b.addComponent(cc.Camera);
          w.clearFlags |= cc.Camera.ClearFlags.COLOR;
          w.backgroundColor = cc.color(0, 0, 0, 0);
          w.zoomRatio = cc.winSize.height / v;
          w.targetTexture = _;
          w.render(y);
          b.destroy();
          y.destroy();
          n.scheduleOnce(function() {
            var t = _.readPixels();
            _.destroy();
            var r = n.winSps;
            var a = J(m / e);
            var c = J(v / o);
            var l = n.singleSf;
            i /= s;
            for (var u = 0; u < e; u++) for (var p = 0; p < o; p++) {
              var d = p * c * m + u * a;
              var h = t[d *= 4];
              var g = t[d + 1];
              var y = t[d + 2];
              var b = (t[d + 3], new cc.Node());
              var w = b.addComponent(cc.Sprite);
              w.spriteFrame = l;
              w.sizeMode = cc.Sprite.SizeMode.CUSTOM;
              b.parent = r;
              b.color = new cc.Color(h, g, y);
              b.setContentSize(i, i);
              b.setPosition(u * i + i / 2, p * i + i / 2);
            }
            n.scheduleOnce(function() {
              n.playAni(f.gameWin);
            }, .5);
          });
        })["catch"](function() {
          n.scheduleOnce(function() {
            n.playAni(f.gameWinFailSf);
          }, .5);
        }) : this.scheduleOnce(function() {
          n.playAni(f.gameWinFailSf);
        }, .5);
      };
      e.prototype.PlayFireworks = function() {
        if (!this.byGuide) {
          var t = this.consBestLbl.node.parent.parent;
          var e = this.levelLbl.node.parent.parent;
          _res["default"].ins.getBundleByString("prefab").then(function(o) {
            t.isValid && o.load("prefab/game/banner", cc.Prefab, function(o, n) {
              if (!o && t.isValid) {
                var i = cc.instantiate(n);
                var r = e.getChildByName("img_gk_ss");
                var a = e.convertToWorldSpaceAR(r.getPosition());
                var s = t.convertToNodeSpaceAR(a);
                i.setParent(t);
                i.y = s.y - 100;
                i.getComponent(_banner["default"]).play();
              }
            });
          })["catch"](function() {});
        }
      };
      e.prototype.OperationStepBegin = function() {
        var t = this.opStep;
        t.grids = [];
        t.row_autox_cols.clear();
        t.col_autox_rows.clear();
        Object.assign(t.row_autox_cols, this.colAutoXCols);
        Object.assign(t.col_autox_rows, this.colAutoXRows);
        t.hint_rows = [];
        t.hint_cols = [];
        t.is_row_autox_changed = !1;
        t.is_col_autox_changed = !1;
        t.is_hint_rows_changed = !1;
        t.is_hint_cols_changed = !1;
      };
      e.prototype.OperationStepEnd = function() {
        this.isAllRight || (this.opStep.is_row_autox_changed || this.opStep.is_col_autox_changed || this.opStep.is_hint_rows_changed || this.opStep.is_hint_cols_changed || 0 != this.opStep.grids.length) && (this.opStep.is_row_autox_changed || this.opStep.row_autox_cols.clear(), 
        this.opStep.is_col_autox_changed || this.opStep.col_autox_rows.clear());
      };
      e.prototype.OperationStepBySetWorkTag = function(t, e, o) {
        this.opStep.grids.push({
          tag_undo: t,
          tag_redo: e,
          grid: o
        });
      };
      e.prototype.OnBtnOX = function() {
        if (!this.oxAning && (this.resetCD(), this.canTouch)) {
          var t = this.pen;
          var e = (t = this.pen = t == c.X ? c.O : c.X) == c.X;
          this.oxAning = !0;
          this.oxTagAni.play(e ? "togToX" : "togToO");
          this.playShine();
          _vb["default"].p(_vb.VEnum3.SHORT);
        }
      };
      e.prototype.oxAniDone = function() {
        var t = this;
        this.byGuide ? this.scheduleOnce(function() {
          t.updateGuideStep();
          t.oxAning = !1;
        }, .2) : this.oxAning = !1;
      };
      e.prototype.playShine = function() {
        this.grids.forEach(function(t) {
          t.shine();
        });
      };
      e.prototype.OnBtnSet = function() {
        if (!this.curAni) {
          this.showOrHideSelectMask();
          this.resetCD();
          var t = this.isShowBtn = !this.isShowBtn;
          this.playAni(t ? f.showBtns : f.hideBtns);
          this.canTouch = !t;
          this.raceChgVis();
          _vb["default"].p(_vb.VEnum3.SHORT);
        }
      };
      e.prototype.OnBtnHelp = function() {
        this.resetCD();
        _panelMgr["default"].ins.open("ui/ui_raceTip", {
          pageIdx: o.type == _pInfo.gameType.race ? 2 : 0
        });
        _vb["default"].p(_vb.VEnum3.SHORT);
      };
      e.prototype.OnBtnMusic = function() {
        this.resetCD();
        _panelMgr["default"].ins.open("ui/ui_set", null);
        _vb["default"].p(_vb.VEnum3.SHORT);
      };
      e.prototype.OnBtnTip = function() {
        this.resetCD();
        this.tipTog = !this.tipTog;
        _uData["default"].ins.setSetting({
          tip: this.tipTog
        });
        this.updateTip();
        _vb["default"].p(_vb.VEnum3.SHORT);
      };
      e.prototype.updateTip = function() {
        this.tipActNode.active = this.tipTog;
        this.tipUnActNode.active = !this.tipTog;
      };
      e.prototype.OnBtnHome = function() {
        this.resetCD();
        _panelMgr["default"].ins.open("ui/ui_rePlay", {
          curScore: this.score,
          continueCb: this.continueCb.bind(this)
        }, {
          MaskNoHide: !0
        });
        _vb["default"].p(_vb.VEnum3.SHORT);
      };
      e.prototype.OnBtnShare = function() {
        var t = this;
        this.resetCD();
        _idx.platform.shareVideoRecord().then(function(e) {
          var o = t.shareIcon;
          if (1 == e && o && o.isValid && o.node.active) {
            var n = _pInfo["default"].ins;
            var i = _cfgMgr["default"].serverCfg.share_rules.rules.main_line;
            var r = i.props;
            var a = i.val;
            o.spriteFrame = cc.assetManager.getBundle("resSps").get("item/" + r, cc.SpriteFrame);
            var s = n.getNormalShareTime();
            n.setNormalShareTime(s + 1);
            var c = void 0;
            switch (r) {
             case "coin":
              c = n.getCoin(), n.addCoin(a);
              break;

             case "times":
              n.addPower(a);
              break;

             default:
              _bagMgr["default"].ins.addItem(r, a);
            }
            var l = o.node.parent.convertToWorldSpaceAR(o.node.position);
            _panelMgr["default"].ins.open("ui/ui_flyAni", {
              itemDatas: [ {
                itemId: r,
                worldPos: l,
                value: a
              } ],
              showCoin: c
            });
            t.shareBtn.active = !1;
          }
        });
      };
      e.prototype.continueCb = function() {
        this.canTouch = !0;
        this.raceChgVis();
        this.OnBtnSet();
      };
      e.prototype.raceChgVis = function() {
        if (o.type == _pInfo.gameType.race) {
          var t = this.canTouch;
          this.tilesParent.active = t;
          this.gridHeadColVec.forEach(function(e) {
            e.labels.forEach(function(e) {
              e.active = t;
            });
          });
          this.gridHeadRowVec.forEach(function(e) {
            e.labels.forEach(function(e) {
              e.active = t;
            });
          });
        }
      };
      e.prototype.OnBtnItem = function(t, e) {
        var n = this;
        if (this.showOrHideSelectMask(), this.resetCD(), this.canTouch) if (this.curItemBtn) this.OnBtnHideItem(); else {
          this.curItemIdx = Number(e);
          var i = this.items[e];
          if (i.itemMax != i.itemCur) {
            if (0 == i.count) return this.canTouch = !1, this.raceChgVis(), void _panelMgr["default"].ins.open("ui/ui_getItem", {
              itemId: i.icon,
              cb: this.updateItemNum.bind(this),
              closeCb: function closeCb() {
                n.canTouch = !0;
                n.raceChgVis();
              },
              gType: o.type
            });
            var r = this.curItemBtn = t.currentTarget;
            r.setSiblingIndex(7);
            _res["default"].ins.lSF("item/" + i.icon, this.itemSelectIcon);
            this.itemSelectLbl.string = i.tip;
            this.itemSelectEff.setPosition(r.position);
            this.canTouch = !1;
            this.playAni(f.openItemSelect);
            this.chgGridItemShine(!0);
            _vb["default"].p(_vb.VEnum3.SHORT);
          } else _tipMgr["default"].ins.showTip("\u6bcf\u5173\u53ea\u80fd\u4f7f\u7528" + i.itemMax + "\u6b21");
        }
      };
      e.prototype.OnBtnHideItem = function() {
        this.resetCD();
        this.canTouch && (this.playAni(f.closeItemSelect), this.chgGridItemShine(!1), _vb["default"].p(_vb.VEnum3.SHORT));
      };
      e.prototype.tmpGet = function(t) {
        var e;
        var n;
        var i;
        switch (this.resetCD(), o.type) {
         case _pInfo.gameType.normal:
         case _pInfo.gameType.freedom:
          i = _levelMgr["default"].ins.updJigAndPop;
          break;

         case _pInfo.gameType.festival:
          i = _levelMgr["default"].ins.popFestival;
        }
        if (o.type == _pInfo.gameType.challenge) {
          h = t ? this.mult : 1;
          var r = (null === (n = null === (e = _cfgMgr["default"].serverCfg) || void 0 === e ? void 0 : e.daily_challenge) || void 0 === n ? void 0 : n.reward) || {
            times: 50,
            coin: 100,
            puzzle_pieces: 10
          };
          o.challageData.date.isFin && (r = {});
          var a = [];
          var s = 0;
          for (var c in r) {
            var l = r[c] * h;
            var u = this.rewItems.content.children[s];
            var p = u.parent.convertToWorldSpaceAR(u.position);
            var d = {};
            d.itemId = c;
            d.worldPos = p;
            d.value = Number(l);
            a.push(d);
            _bagMgr["default"].ins.addItem(c, l);
            s++;
          }
          a.length ? _panelMgr["default"].ins.open("ui/ui_flyAni", {
            itemDatas: a,
            hideCb: function hideCb() {
              _pInfo.chgScene(_pInfo.sceneType.main, {
                cb: i
              });
            }
          }) : _pInfo.chgScene(_pInfo.sceneType.main, {
            cb: i
          });
        } else if (this.reward) {
          if (_rewardMgr["default"].hasPendingCashReward()) {
            console.log("\ud83c\udfaf \u68c0\u6d4b\u5230\u73b0\u91d1\u5956\u52b1\u5f85\u5904\u7406\uff0c\u5b8c\u5168\u8df3\u8fc7\u6e38\u620f\u9053\u5177\u5956\u52b1\u903b\u8f91\uff0c\u76f4\u63a5\u8fd4\u56de\u4e3b\u754c\u9762");
            return void _pInfo.chgScene(_pInfo.sceneType.main, {
              cb: i
            });
          }
          if (!t && 10 == this.mult) return void _panelMgr["default"].ins.open("ui/ui_getReward", {
            gold: this.reward + this.baseReward
          }, {
            MaskNoHide: !0
          });
          var h = t ? this.mult : 1;
          var f = _pInfo["default"].ins.getCoin();
          _pInfo["default"].ins.addCoin((this.reward + this.baseReward) * h);
          var g;
          g = o.type !== _pInfo.gameType.festival || _festivalMgr["default"].ins.isJigsawMax() ? "puzzle_pieces" : "newYear_pieces";
          _bagMgr["default"].ins.addItem(g, h);
          var y = this.baseReward * h;
          var m = this.reward * h;
          var v = h;
          var _ = this.rew1Lbl.node;
          var b = this.rew2Lbl.node;
          var w = _.parent;
          var S = this.rewItems.content.children[0];
          var T = w.convertToWorldSpaceAR(_.position);
          var I = w.convertToWorldSpaceAR(b.position);
          var D = S.parent.convertToWorldSpaceAR(S.position);
          _panelMgr["default"].ins.open("ui/ui_flyAni", {
            itemDatas: [ {
              itemId: "coin",
              worldPos: T,
              value: y
            }, {
              itemId: "coin",
              worldPos: I,
              value: m
            }, {
              itemId: g,
              worldPos: D,
              value: v
            } ],
            hideCb: function hideCb() {
              _pInfo.chgScene(_pInfo.sceneType.main, {
                cb: i
              });
            },
            showCoin: f
          });
        } else _pInfo.chgScene(_pInfo.sceneType.main, {
          cb: i
        });
      };
      e.prototype.OnGet = function() {
        this.tmpGet(!1);
      };
      e.prototype.OnAdGet = function() {
        this.tmpGet(!0);
      };
      e.prototype.OnNextPracice = function() {
        _pInfo.chgScene(_pInfo.sceneType.game, {
          gameType: _pInfo.gameType.practice
        });
      };
      e.prototype.chgGridItemShine = function(t) {
        if (2 == this.curItemIdx) {
          var e = o.type == _pInfo.gameType.race;
          this.gridHeadColVec.forEach(function(o) {
            if (!o.allRight || e) {
              var n = o.shineBg;
              n.active = t, t ? cc.tween(n).to(.8, {
                opacity: 0
              }).to(.8, {
                opacity: 100
              }).union().repeatForever().start() : cc.Tween.stopAllByTarget(n);
            }
          });
          this.gridHeadRowVec.forEach(function(o) {
            if (!o.allRight || e) {
              var n = o.shineBg;
              n.active = t;
              t ? cc.tween(n).to(.8, {
                opacity: 0
              }).to(.8, {
                opacity: 100
              }).union().repeatForever().start() : cc.Tween.stopAllByTarget(n);
            }
          });
        } else this.grids.forEach(function(e) {
          e.playItemTip(t);
        });
      };
      e.prototype.openLose = function() {
        0 != this.relifeTime ? _panelMgr["default"].ins.open("ui/ui_getHeart", {
          time: this.relifeTime,
          cb: this.getHeartCb.bind(this),
          closeCb: this.getHeartCloseCb.bind(this),
          gType: o.type
        }, {
          MaskNoHide: !0
        }) : this.getHeartCloseCb();
      };
      e.prototype.getHeartCb = function() {
        this.relifeTime > 0 && this.relifeTime--;
        this.playAni(f.gameRelife);
      };
      e.prototype.getHeartCloseCb = function() {
        var t = this;
        this.scheduleOnce(function() {
          var e = o.type === _pInfo.gameType.race ? "ui/ui_rePlayRace" : "ui/ui_rePlay";
          _panelMgr["default"].ins.open(e, {
            curScore: t.score
          }, {
            MaskNoHide: !0
          });
        }, .5);
      };
      e.prototype.onAppHide = function() {};
      e.prototype.updateScore = function(t) {
        void 0 === t && (t = 1);
        var e = this.score = this.score + t;
        this.scoreLbl.string = e + "";
      };
      e.prototype.playGirlAni = function(t) {
        t != this.curGirlAni && o.type != _pInfo.gameType.race && this.topGirlSk && (this.curGirlAni = t, 
        this.topGirlSk.animation = t, (this.topGirlSk.loop = t == h.idle) && (this.curGirlAni = null));
      };
      e.prototype.playGirlEnd = function() {
        this.curGirlAni != h.idle && (this.curGirlAni = null, this.playGirlAni && this.playGirlAni(h.idle));
      };
      e.prototype.eventDot = function(t) {
        if (o.type == _pInfo.gameType.normal) {
          var e = _pInfo["default"].ins.getPuzzleLvl() + "";
          _idx.platform.reportEvent(_idx.ERepEvt.maindungeon, {
            iswin: t ? "\u80dc\u5229" : "\u5931\u8d25",
            level: e
          });
        } else if (o.type == _pInfo.gameType.race) _idx.platform.reportEvent(_idx.ERepEvt.raceEnd, {
          score: this.score
        }); else if (o.type == _pInfo.gameType.festival) {
          var n = Number(_festivalMgr["default"].ins.getFesPuzzleLv());
          _idx.platform.reportEvent(_idx.ERepEvt.fesMainPuzzle, {
            iswin: t ? "\u80dc\u5229" : "\u5931\u8d25",
            id: n
          });
        } else if (o.type == _pInfo.gameType.challenge) {
          var i = o.challageData.date;
          var r = 1e4 * i.year + 100 * i.month + i.day;
          _idx.platform.reportEvent(_idx.ERepEvt.dailyChallenge, {
            iswin: t ? "\u80dc\u5229" : "\u5931\u8d25",
            time: r
          });
        }
      };
      e.prototype.onDestory = function() {
        var t = cc.assetManager.getBundle("resSps");
        t.release("game/normal/top", cc.SpriteFrame);
        t.release("game/race/top", cc.SpriteFrame);
        t.release("game/race/girl", cc.Prefab);
        t.release("game/race/goose", cc.Prefab);
      };
      __decorate([ G(cc.Sprite) ], e.prototype, "topSp", void 0);
      __decorate([ G(cc.Sprite) ], e.prototype, "downSp", void 0);
      __decorate([ G(cc.Sprite) ], e.prototype, "gridBgSp", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "topNode", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "downNode", void 0);
      __decorate([ G(cc.BitmapFont) ], e.prototype, "font4", void 0);
      __decorate([ G(cc.Camera) ], e.prototype, "camera", void 0);
      __decorate([ G(cc.Animation) ], e.prototype, "panelAni", void 0);
      __decorate([ G(cc.SpriteFrame) ], e.prototype, "uHintSf", void 0);
      __decorate([ G(cc.SpriteFrame) ], e.prototype, "lHintSf", void 0);
      __decorate([ G(cc.Prefab) ], e.prototype, "gridPrefab", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "map_node_", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "tilesParent", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "selectMask", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "selectMaskBg", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "rowHintsParent", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "colHintsParent", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "scoreLbl", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "useTimeLbl", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "consLbl", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "cons2Lbl", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "consBestLbl", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "rew1Lbl", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "rew2Lbl", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "threeNode", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "tenNode", void 0);
      __decorate([ G(cc.Animation) ], e.prototype, "oxTagAni", void 0);
      __decorate([ G(cc.Prefab) ], e.prototype, "fadePrefab", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "patices", void 0);
      __decorate([ G(cc.Prefab) ], e.prototype, "heartsPatic", void 0);
      __decorate([ G([ _heart["default"] ]) ], e.prototype, "hearts", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "heartInfinity", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "tipNode", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "tipLabel", void 0);
      __decorate([ G(cc.Animation) ], e.prototype, "tipAni", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "winAniNode", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "winCircleMask", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "winSpParent", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "winSps", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "winLight", void 0);
      __decorate([ G(cc.SpriteFrame) ], e.prototype, "singleSf", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "levelLbl", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "clockWarn", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "norClock", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "speClock", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "clockLbl", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "clockLbl2", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "tipActNode", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "tipUnActNode", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "shareBtn", void 0);
      __decorate([ G(cc.Sprite) ], e.prototype, "shareIcon", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "shareLbl", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "noticeLbl", void 0);
      __decorate([ G(cc.Animation) ], e.prototype, "noticeAni", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "random_noticeLbl", void 0);
      __decorate([ G(cc.Animation) ], e.prototype, "random_noticeAni", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "full_row_colLbl", void 0);
      __decorate([ G(cc.Animation) ], e.prototype, "full_row_colAni", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "itemSelectEff", void 0);
      __decorate([ G(cc.Sprite) ], e.prototype, "itemSelectIcon", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "itemSelectLbl", void 0);
      __decorate([ G(cc.Button) ], e.prototype, "adGetBtn", void 0);
      __decorate([ G(cc.Label) ], e.prototype, "getBtnsp", void 0);
      __decorate([ G(cc.ScrollView) ], e.prototype, "rewItems", void 0);
      __decorate([ G(cc.Prefab) ], e.prototype, "rewItemPre", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "stopPraNode", void 0);
      __decorate([ G(cc.Node) ], e.prototype, "heartBgNode", void 0);
      return o = __decorate([ H ], e);
    }(cc.Component);
    exports["default"] = Y;
    cc._RF.pop();
  }, {
    Creator: "Creator",
    bagMgr: "bagMgr",
    banner: "banner",
    cfgMgr: "cfgMgr",
    challengeMgr: "challengeMgr",
    com: "com",
    evts: "evts",
    festivalMgr: "festivalMgr",
    global: "global",
    grid: "grid",
    heart: "heart",
    idx: "idx",
    item: "item",
    levelMgr: "levelMgr",
    mySafeArea: "mySafeArea",
    pConst: "pConst",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    random_notice: "random_notice",
    res: "res",
    rewardMgr: "rewardMgr",
    sound: "sound",
    taskMgr: "taskMgr",
    tipMgr: "tipMgr",
    uData: "uData",
    uvAni: "uvAni",
    vb: "vb"
  } ],
  global: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c75109C1jBJX7wBq6ETFM3I", "global");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.OssConfig = exports.headImgExt = void 0;
    var _sound = require("sound");
    cc.Button.prototype.tE = cc.Button.prototype._onTouchEnded;
    cc.Button.prototype.cS = !0;
    cc.Button.prototype._onTouchEnded = function(t) {
      this.interactable && this.enabledInHierarchy && this._pressed && this.cS && _sound["default"].ins.play(_sound["default"].CLICK), 
      this.tE(t);
    };
    cc.macro.ENABLE_MULTI_TOUCH = !0;
    cc.macro.ENABLE_WEBGL_ANTIALIAS = !0;
    exports.headImgExt = ".head";
    cc.assetManager.downloader.register(exports.headImgExt, function(t, e, o) {
      o(null, t);
    });
    cc.assetManager.parser.register(exports.headImgExt, function(t, e, o) {
      var n = new Image();
      function i() {
        n.removeEventListener("load", i), n.removeEventListener("error", r), o && o(null, n);
      }
      function r() {
        n.removeEventListener("load", i), n.removeEventListener("error", r), o && o(new Error(t));
      }
      "file:" !== window.location.protocol && (n.crossOrigin = "anonymous");
      n.addEventListener("load", i);
      n.addEventListener("error", r);
      n.src = t;
      return n;
    });
    cc.assetManager.factory.register(exports.headImgExt, function(t, e, o, n) {
      var i = null;
      var r = null;
      try {
        (i = new cc.Texture2D())._uuid = t;
        i._nativeUrl = t;
        i._nativeAsset = e;
      } catch (a) {
        r = a;
      }
      n && n(r, i);
    });
    var i = function() {
      function t() {}
      t._baseUrl = "https://tjkj300.oss-cn-shenzhen.aliyuncs.com/web/sudoku/";
      t.configUrl = t._baseUrl + "config.json";
      t.configDevUrl = t._baseUrl + "config-dev.json";
      t.levelUrl = t._baseUrl + "level/";
      t.chapterUrl = t._baseUrl + "chapter/";
      t.jigswawUrl = t._baseUrl + "jigsaw/";
      t.challengeUrl = t._baseUrl + "challenge/";
      t.challengeWormUrl = t._baseUrl + "challenge/worm/";
      t.skinUrl = t._baseUrl + "skin/";
      t.skinConfigUrl = t._baseUrl + "skin/cfg/config.json";
      return t;
    }();
    exports.OssConfig = i;
    var r = function() {
      function t() {}
      t.getCharXOffset = function() {
        return 0;
      };
      t.chapterCount = 18;
      t.jisawCount = 40;
      t.loadToRace = 0;
      t.challengeLv = 0;
      t.isPopNewGift = !1;
      t.twoDaysLeft = !1;
      t.loadCb = !1;
      return t;
    }();
    exports["default"] = r;
    cc._RF.pop();
  }, {
    sound: "sound"
  } ],
  grid: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0adafKMQFRHBqpLMtwJNSJZ", "grid");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.GridState = void 0;
    var _evts = require("evts");
    var _sound = require("sound");
    var c = cc._decorator;
    var l = c.ccclass;
    var u = c.property;
    (function(t) {
      t[t.empty = 0] = "empty";
      t[t.rightTile = 1] = "rightTile";
      t[t.wrongTile = 2] = "wrongTile";
      t[t.rightCross = 3] = "rightCross";
      t[t.wrongCross = 4] = "wrongCross";
    })(exports.GridState || (exports.GridState = {}));
    var p = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.emptyNode = null;
        e.itemTipNode = null;
        e.itemTipAni = null;
        e.stateNodes = [];
        e.anis = [];
        e.crossShineNode = null;
        e.crossShineAni = null;
        e.norSf = null;
        e.tileSp = null;
        e.tileHLSp = null;
        e.isEmpty = !0;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        for (var t = function t(_t) {
          _t.on(cc.Animation.EventType.FINISHED, function() {
            _t.node.active = !1;
          }, e);
        }, e = this, o = 0, n = this.anis; o < n.length; o++) t(n[o]);
      };
      e.prototype.shine = function() {
        if (this.isEmpty) {
          var t = this.crossShineNode;
          (t.active = !t.active) && this.crossShineAni.play();
        }
      };
      e.prototype.init = function(t) {
        this.isRight = t > 0 ? 1 : 0;
      };
      e.prototype.initType = function(t, e) {
        var o = t || this.norSf;
        this.tileSp.spriteFrame = this.tileHLSp.spriteFrame = o;
        e && (this.itemTipNode.getComponent(cc.Sprite).spriteFrame = e);
      };
      e.prototype.select = function(t, e) {
        if (void 0 === e && (e = !1), this.isEmpty) {
          this.isEmpty = !1;
          this.emptyNode.active = this.crossShineNode.active = !1;
          this.itemTipNode && (this.itemTipNode.active = !1);
          this.unschedule(this.tipShine);
          var o = this.isRight;
          var n = 0;
          e || (n = (t << 1) + o);
          var i = this.stateNodes[n];
          i.active = !0;
          i.getComponent(cc.Animation).play();
          e || 3 == n || _sound["default"].ins.play(0 == n ? _sound["default"].RIGHT : _sound["default"].ERROR);
          this.aniIdx = n < 2 ? 0 : 1;
          _evts["default"].opE.emit({
            action: _evts["default"].UPDATESCORE
          });
          e || 1 != n && 2 != n || _evts["default"].opE.emit({
            action: _evts["default"].LOSEHEART,
            data: this.node.position
          });
        }
      };
      e.prototype.playWormAni = function(t) {
        this.isEmpty || cc.tween(this.node).delay(t).to(7 / 30, {
          scale: 1.5
        }).to(5 / 30, {
          opacity: 0
        }).start();
      };
      e.prototype.playItemTip = function(t) {
        if (this.isEmpty) {
          var e = this.itemTipNode;
          this.unschedule(this.tipShine);
          e.active = t;
          t ? this.scheduleOnce(this.tipShine, 2 * Math.random()) : (this.itemTipAni.stop(), 
          this.itemTipNode.opacity = 0);
        }
      };
      e.prototype.tipShine = function() {
        this.isEmpty ? (this.itemTipNode.active = !0, this.itemTipAni.play()) : this.unschedule(this.tipShine);
      };
      e.prototype.playHL = function(t) {
        this.isEmpty || (this.unschedule(this._playHL), this.scheduleOnce(this._playHL, t));
      };
      e.prototype._playHL = function() {
        var t = this.anis[this.aniIdx];
        t.node.active = !0;
        t.play();
      };
      e.prototype.playShow = function(t) {
        cc.tween(this.node).delay(6 * (Math.random() + 1.5) / 60).to(.1, {
          scale: t + .2
        }).to(.05, {
          scaleX: t - .1,
          scaleY: t - .3
        }).to(.05, {
          scaleX: t + .1,
          scaleY: t + .1
        }).to(.05, {
          scale: t
        }).start();
      };
      e.prototype.playFallDown = function() {
        var t = this;
        cc.tween(this.node).by(.1, {
          angle: 60 * Math.random() - 30
        }).to(1, {
          y: -1e3
        }, {
          easing: "quadOut"
        }).call(function() {
          t.node.destroy();
        }).start();
      };
      e.prototype.playWalk = function(t) {
        var e = this.node;
        var o = e.scale;
        var n = cc.tween(e).to(.1, {
          position: t
        });
        var i = cc.tween(e).to(.05, {
          scale: o - .4
        }, {
          easing: "cubicOut"
        }).to(.1, {
          scale: o
        }, {
          easing: "cubicIn"
        });
        cc.tween(e).delay(6 * (Math.random() + .5) / 60).parallel(n, i).start();
      };
      __decorate([ u(cc.Node) ], e.prototype, "emptyNode", void 0);
      __decorate([ u(cc.Node) ], e.prototype, "itemTipNode", void 0);
      __decorate([ u(cc.Animation) ], e.prototype, "itemTipAni", void 0);
      __decorate([ u([ cc.Node ]) ], e.prototype, "stateNodes", void 0);
      __decorate([ u([ cc.Animation ]) ], e.prototype, "anis", void 0);
      __decorate([ u(cc.Node) ], e.prototype, "crossShineNode", void 0);
      __decorate([ u(cc.Animation) ], e.prototype, "crossShineAni", void 0);
      __decorate([ u(cc.SpriteFrame) ], e.prototype, "norSf", void 0);
      __decorate([ u(cc.Sprite) ], e.prototype, "tileSp", void 0);
      __decorate([ u(cc.Sprite) ], e.prototype, "tileHLSp", void 0);
      return __decorate([ l ], e);
    }(cc.Component);
    exports["default"] = p;
    cc._RF.pop();
  }, {
    evts: "evts",
    sound: "sound"
  } ],
  guide: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0385aQUj5Mn4U3i4O115Wr", "guide");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _idx = require("idx");
    var _res = require("res");
    var _sound = require("sound");
    var _vb = require("vb");
    var _grid = require("grid");
    var _global = require("global");
    var _pInfo = require("pInfo");
    var _game = require("game");
    var f = cc._decorator;
    var g = f.ccclass;
    var y = f.property;
    var m = cc.color(252, 254, 94);
    var v = cc.color(169, 109, 52, 255);
    var _ = {
      2e4: "\u6570\u5b57\u4f1a\u544a\u8bc9\u4f60\u4e00\u884c\u4e2d\u6709\u591a\u5c11\u65b9\u5757\u9700\u8981\u6d82\u4e0a\u989c\u8272\u3002\u8bd5\u8bd5\u5427\uff01",
      20001: "\u592a\u68d2\u4e86\uff01\u5982\u679c\u6709\u591a\u4e2a\u6570\u5b57\uff0c\u90a3\u4e48\u6bcf\u6bb5\u6d82\u8272\u7684\u65b9\u5757\u4e2d\u95f4\u81f3\u5c11\u4f1a\u6709\u4e00\u4e2a\u7a7a\u683c\u3002",
      20002: "\u987a\u5e8f\u4e5f\u5f88\u91cd\u8981\u3002\u6d82\u8272\u7684\u65b9\u5757\u7684\u4e2a\u6570\u7684\u987a\u5e8f\uff0c\u9700\u8981\u540c\u6570\u5b57\u7684\u987a\u5e8f\u4e00\u81f4\u3002",
      20003: "\u606d\u559c\uff01\u60a8\u5df2\u5b8c\u6210\u6559\u7a0b\uff01\u8ba9\u6211\u4eec\u53bb\u7ec3\u4e60\u4e00\u4e0b\u5427\uff01"
    };
    var b = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.top = null;
        e.fadeNode = null;
        e.fadeAni = null;
        e.dialogAni = null;
        e.mapAni = null;
        e.hintsLbl = [];
        e.grids = [];
        e.contentLbl = null;
        e.glows = [];
        e.arrows = [];
        e.arrowTops = [];
        e.finger = null;
        e.soundIdx = 1;
        e.emptyArr = [];
        e.steps = [ {
          data: [ 1, 1, 1, 1, 1 ],
          hint: [ 5 ],
          x: [ 231 ],
          width: [ 472 ],
          content: _[2e4]
        }, {
          data: [ 1, 1, 0, 1, 1 ],
          hint: [ 2, 2 ],
          x: [ 99, 363 ],
          width: [ 208, 208 ],
          content: _[20001]
        }, {
          data: [ 1, 0, 1, 1, 1 ],
          hint: [ 1, 3 ],
          x: [ 55, 319 ],
          width: [ 120, 296 ],
          content: _[20002]
        }, {
          content: _[20003]
        } ];
        e.curStep = 0;
        e.maxStep = e.steps.length - 1;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        var t = this;
        _global["default"].padScale && (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_HEIGHT), 
        this.top.node.scale = _global["default"].padScale);
        _sound["default"].ins.playBGM();
        this.updateView(1);
        this.fadeAni.on(cc.Animation.EventType.FINISHED, this.stepDone, this);
        this.mapAni.on(cc.Animation.EventType.FINISHED, this.reCanTouch, this);
        var e = cc.Node.EventType.TOUCH_START;
        var o = cc.Node.EventType.TOUCH_MOVE;
        var n = cc.Node.EventType.TOUCH_END;
        var i = cc.Node.EventType.TOUCH_CANCEL;
        this.grids.forEach(function(r) {
          r.on(e, t.touchStart, t), r.on(o, t.touchMove, t), r.on(n, t.touchEnd, t), r.on(i, t.touchEnd, t);
        });
        _res["default"].ins.lSF("game/normal/top1", this.top);
        _res["default"].ins.getBundleByString("prefab").then(function(e) {
          e.load("skin/girl1", cc.Prefab, function(e, o) {
            if (t.node && !e && t.node.isValid) {
              var n = cc.instantiate(o);
              t.dialogAni.node.parent.addChild(n), n.setPosition(250, -251), n.setSiblingIndex(0);
              var i = t.topGirlSk = n.getComponent(sp.Skeleton);
              i.animation = _game.grilAni.idle, i.setEndListener(t.playGirlEnd.bind(t));
            }
            if (e) throw new Error(e.message);
          });
        })["catch"](function(t) {
          console.error("guide scene girl load fail", t);
        });
        this.preLoad();
      };
      e.prototype.playGirlAni = function(t) {
        t != this.curGirlAni && this.topGirlSk && (this.curGirlAni = t, this.topGirlSk.animation = t, 
        (this.topGirlSk.loop = t == _game.grilAni.idle) && (this.curGirlAni = null));
      };
      e.prototype.playGirlEnd = function() {
        this.curGirlAni != _game.grilAni.idle && (this.curGirlAni = null, this.playGirlAni && this.playGirlAni(_game.grilAni.idle));
      };
      e.prototype.touchStart = function(t) {
        var e = t.getLocation();
        this.chg(e);
      };
      e.prototype.touchMove = function(t) {
        var e = t.getLocation();
        this.chg(e);
      };
      e.prototype.touchEnd = function() {
        this.soundIdx = 1;
      };
      e.prototype.chg = function(t) {
        var e = this;
        var o = this.grids;
        o.forEach(function(n) {
          if (n.getBoundingBoxToWorld().contains(t)) {
            var i = n.getComponent(_grid["default"]);
            if (i.isRight && i.isEmpty) {
              _vb["default"].p(_vb.VEnum3.SHORT);
              _sound["default"].ins.play("tile_note_" + e.soundIdx);
              e.soundIdx++;
              i.select(1);
              for (var r = e.hintsLbl, a = e.steps[e.curStep].hint, s = 0, p = r.length; s < p; s++) {
                var d = r[s].node;
                if (d.active && d.color.equals(m)) {
                  for (var h = a[s], f = 1 == s ? a[s - 1] + 1 : 0, g = 0, y = f; y < h + f; y++) {
                    var _ = o[y].getComponent(_grid["default"]);
                    !_.isEmpty && _.isRight && g++;
                  }
                  g == h && (d.color = v);
                }
              }
              if (e.curRightCount++, e.curRightCount == e.allRightCount) {
                e.emptyArr.forEach(function(t) {
                  o[t].getComponent(_grid["default"]).select(0, !0);
                });
                for (var b = 0; b < 5; b++) o[b].getComponent(_grid["default"]).playHL(.04 * b);
                e.fadeNode.active = !0;
                e.fadeAni.play();
              }
            }
          }
        });
      };
      e.prototype.stepDone = function() {
        this.fadeNode.active = !1;
        this.finger.active = !1;
        this.curStep++;
        this.curStep == this.maxStep && (this.playGirlAni(_game.grilAni.happy), _pInfo["default"].ins.setGuideDone(), 
        this.getComponent(cc.Animation).play());
        this.mapAni.play("mapHide");
        _idx.platform.reportEvent(_idx.ERepEvt.guide, {
          step: this.curStep
        });
      };
      e.prototype.updateView = function(t) {
        this.curStep = this.curStep > this.maxStep ? this.maxStep : this.curStep;
        var e = this.curStep;
        var o = this.steps[e];
        var n = o.data;
        var i = o.hint;
        var r = o.content;
        var a = o.x;
        var s = o.width;
        this.contentLbl.string = "        " + r;
        var c = this.arrows;
        if (c.forEach(function(t) {
          return t.clear();
        }), e < this.maxStep) {
          var l = this.grids;
          var p = this.emptyArr;
          p.length = 0;
          for (var d = 0, h = void 0, f = 0; f < 5; f++) {
            var g = l[f];
            var y = n[f];
            d += y;
            y || (p.push(f), h = g);
            g.setSiblingIndex(f + 2);
            var v = g.getComponent(_grid["default"]);
            v.init(y);
            v.isEmpty = !0;
            v.emptyNode.active = !0;
            v.stateNodes.forEach(function(t) {
              t.active = !1;
            });
          }
          h && h.setSiblingIndex(0);
          this.curRightCount = 0;
          this.allRightCount = d;
          for (var _ = this.glows, b = this.arrowTops, w = this.hintsLbl, S = void (f = 0), T = i.length; f < 2; f++) {
            S = 2 == e || 1 == e ? 1 - f : f;
            var I = _[f];
            var D = c[S];
            var P = b[S];
            var k = w[f];
            if (I.active = D.node.active = P.active = k.node.active = f < T) {
              k.string = i[f] + "";
              k.node.setSiblingIndex(0);
              k.node.color = m;
              I.x = P.x = a[f];
              I.width = s[f];
              var R = D.node.position;
              var N = I.position;
              D.moveTo(0, 0);
              D.quadraticCurveTo((R.x + N.x) / 2, 150, N.x, 44);
              D.stroke();
            }
          }
          this.mapAni.play("mapShow");
        }
        t || this.dialogAni.play();
        this.canTouch = !1;
      };
      e.prototype.reCanTouch = function(t, e) {
        "mapShow" == e.name ? this.canTouch = !0 : this.updateView();
      };
      e.prototype.onQuit = function() {
        _global["default"].byGuide = 1;
        _pInfo.chgScene(_pInfo.sceneType.game, {
          gameType: _pInfo.gameType.practice
        });
      };
      e.prototype.preLoad = function() {
        cc.director.preloadScene(_pInfo.sceneType.game);
      };
      __decorate([ y(cc.Sprite) ], e.prototype, "top", void 0);
      __decorate([ y(cc.Node) ], e.prototype, "fadeNode", void 0);
      __decorate([ y(cc.Animation) ], e.prototype, "fadeAni", void 0);
      __decorate([ y(cc.Animation) ], e.prototype, "dialogAni", void 0);
      __decorate([ y(cc.Animation) ], e.prototype, "mapAni", void 0);
      __decorate([ y([ cc.Label ]) ], e.prototype, "hintsLbl", void 0);
      __decorate([ y([ cc.Node ]) ], e.prototype, "grids", void 0);
      __decorate([ y(cc.Label) ], e.prototype, "contentLbl", void 0);
      __decorate([ y([ cc.Node ]) ], e.prototype, "glows", void 0);
      __decorate([ y([ cc.Graphics ]) ], e.prototype, "arrows", void 0);
      __decorate([ y([ cc.Node ]) ], e.prototype, "arrowTops", void 0);
      __decorate([ y(cc.Node) ], e.prototype, "finger", void 0);
      return __decorate([ g ], e);
    }(cc.Component);
    exports["default"] = b;
    cc._RF.pop();
  }, {
    game: "game",
    global: "global",
    grid: "grid",
    idx: "idx",
    pInfo: "pInfo",
    res: "res",
    sound: "sound",
    vb: "vb"
  } ],
  h5: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c83f1Tg+ndHibVP6V9Bsrr7", "h5");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _pConst = require("pConst");
    var _time = require("time");
    var _uData = require("uData");
    var l = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.trackEvent = function() {};
        e.subscribe = function(t) {
          for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
          return new Promise(function(t) {
            t(1);
          });
        };
        return e;
      }
      __extends(e, t);
      Object.defineProperty(e.prototype, "appId", {
        get: function get() {
          return "dev_nonogram";
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.string = function() {
        return _pConst.PFCode.Web;
      };
      e.prototype.init = function() {
        var t = new URLSearchParams(location.search);
        var e = {};
        t.forEach(function(t, o) {
          e[o] = t;
        });
        _uData["default"].ins.syncLaunchOption({
          query: e
        });
        this.initListener();
      };
      e.prototype.initListener = function() {
        var t = this;
        cc.game.on(cc.game.EVENT_SHOW, function() {
          Math.abs(Date.now() / 1e3 - t.onHideT) > 300 ? t.syncTime().then(function(t) {
            t && _time["default"].ins.sync(t), _evts["default"].plE.emit({
              onShow: !0
            });
          }) : _evts["default"].plE.emit({
            onShow: !0
          });
        });
        cc.game.on(cc.game.EVENT_HIDE, function() {
          t.onHideT = _time["default"].ins.serverTime;
          _evts["default"].plE.emit({
            onHide: !0
          });
        });
      };
      e.prototype.isSwitchedInitd = function() {
        return !0;
      };
      e.prototype.login = function() {
        return Promise.resolve({
          code: "dev_ceshi"
        });
      };
      e.prototype.getUserInfo = function() {};
      e.prototype.getStorage = function(t) {
        var e = localStorage.getItem(t);
        return null == e || "" == e ? null : JSON.parse(e);
      };
      e.prototype.setStorage = function(t, e) {
        localStorage.setItem(t, JSON.stringify(e));
      };
      e.prototype.clearStorage = function() {
        localStorage.clear();
      };
      e.prototype.removeStorage = function(t) {
        localStorage.removeItem(t);
      };
      e.prototype.trackLogin = function() {};
      e.prototype.trackUserSet = function() {};
      e.prototype.trackUserSetOnce = function() {};
      e.prototype.getSeq = function() {
        return {
          type: Math.random() < .5 ? _pConst.STDSeqType.VIDEO : _pConst.STDSeqType.SHARE,
          modelId: "",
          shareGuid: "",
          forceResult: ""
        };
      };
      e.prototype.consumeSeq = function() {
        return new Promise(function(t) {
          t(1);
        });
      };
      e.prototype.doWatchAD = function() {
        return new Promise(function(t) {
          t(1);
        });
      };
      e.prototype.doShare = function() {
        return new Promise(function(t) {
          t(1);
        });
      };
      e.prototype.getSystemData = function() {
        return _pConst.DefaultSystemInfo;
      };
      e.prototype.getSwitches = function() {
        return _pConst.DefaultSDKSwitch;
      };
      e.prototype.vibrate = function() {};
      e.prototype.preloadVideo = function() {
        return !0;
      };
      e.prototype.showModal = function() {};
      e.prototype.refreshGame = function() {
        location.reload();
      };
      e.prototype.showLoading = function() {};
      e.prototype.hideLoading = function() {};
      e.prototype.log = function() {};
      e.prototype.getMenuBounding = function() {
        null == this.menuBounding && (this.menuBounding = new cc.Rect(650, 0, 100, 50));
        return this.menuBounding;
      };
      e.prototype.createShareImage = function() {
        return new Promise(function(t) {
          return t("");
        });
      };
      e.prototype.preloadInterstitialAD = function() {};
      e.prototype.showInterstitialAD = function() {
        return new Promise(function(t) {
          return t(1);
        });
      };
      e.prototype.canShowBanner = function() {
        return !1;
      };
      e.prototype.getBannerSize = function() {
        return new cc.Size(0, 0);
      };
      e.prototype.showBanner = function() {};
      e.prototype.hideBanner = function() {};
      e.prototype.getSubscribeCnt = function() {
        return new Promise(function(t) {
          return t(0);
        });
      };
      e.prototype.startVideoRecord = function() {};
      e.prototype.pauseVideoRecord = function() {};
      e.prototype.resumeVideoRecord = function() {};
      e.prototype.stopVideoRecord = function() {};
      e.prototype.hasVideoRecord = function() {
        return !1;
      };
      e.prototype.shareVideoRecord = function() {
        return Promise.resolve(1);
      };
      e.prototype.uploadAdEvent = function() {};
      e.prototype.addShortcut = function() {};
      e.prototype.PostMessage = function() {};
      e.prototype.SetUserCloudStorage = function() {};
      e.prototype.GetOpenDataContext = function() {};
      e.prototype.reportEvent = function() {};
      e.prototype.share = function() {
        return new Promise(function(t) {
          t(1);
        });
      };
      e.prototype.getUserProfile = function() {};
      e.prototype.subScriptionUpdate = function() {};
      e.prototype.getLaunchOptionsSync = function() {
        return _pConst.DefaultLaunchOptions;
      };
      e.prototype.payment = function() {
        return new Promise(function(t) {
          return t(1);
        });
      };
      return e;
    }(require("pf")["default"]);
    exports["default"] = l;
    cc._RF.pop();
  }, {
    evts: "evts",
    pConst: "pConst",
    pf: "pf",
    time: "time",
    uData: "uData"
  } ],
  head: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bd3b6EvuhVISo+Thy3/ym09", "head");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _res = require("res");
    var _global = require("global");
    var _skinMgr = require("skinMgr");
    var _pInfo = require("pInfo");
    var p = cc._decorator;
    var d = p.ccclass;
    var h = p.property;
    var f = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.bg = null;
        e.headIcon = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        this.eventFunc = this.onOperTap.bind(this);
        _evts["default"].opE.on(this.eventFunc);
      };
      e.prototype.onDestroy = function() {
        _evts["default"].opE.off(this.eventFunc);
        this.eventFunc = null;
      };
      e.prototype.onOperTap = function(t) {
        var e;
        (null == t ? void 0 : t.action) === _evts["default"].SKIN_CHG && (null === (e = t.data) || void 0 === e ? void 0 : e.skinId) === _skinMgr.SkinIdEnum.headFrame && t.data.isUse && this.updateHeadFrame();
      };
      e.prototype.updateHeadFrame = function(t) {
        var e = t || _pInfo["default"].ins.getUsingSkin()[_skinMgr.SkinIdEnum.headFrame];
        _skinMgr["default"].ins.updateHeadFrame(e, this.bg);
      };
      e.prototype.loadHeadImg = function(t, e) {
        var o = this;
        t ? cc.assetManager.loadRemote(t, {
          ext: _global.headImgExt
        }, function(t, e) {
          o.node && o.node.isValid && (t ? o.setDefaultHead() : o.headIcon.spriteFrame = new cc.SpriteFrame(e));
        }) : this.setDefaultHead();
        this.updateHeadFrame(e);
      };
      e.prototype.setDefaultHead = function() {
        var t = this;
        var e = this;
        _res["default"].ins.getBundleByString("resSps").then(function(o) {
          o.load("common/head_1", cc.SpriteFrame, function(o, n) {
            !o && t.node && t.node.isValid && (e.headIcon.spriteFrame = n);
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
      };
      __decorate([ h(cc.Sprite) ], e.prototype, "bg", void 0);
      __decorate([ h(cc.Sprite) ], e.prototype, "headIcon", void 0);
      return __decorate([ d ], e);
    }(cc.Component);
    exports["default"] = f;
    cc._RF.pop();
  }, {
    evts: "evts",
    global: "global",
    pInfo: "pInfo",
    res: "res",
    skinMgr: "skinMgr"
  } ],
  heart: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b20bSJnh5P8p51eQRE+xVD", "heart");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = (a.property, function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }
      __extends(e, t);
      e.prototype.playLose = function() {
        this.getComponent(cc.Animation).play();
      };
      e.prototype.getHeart = function() {
        var t = this.node;
        t.getChildByName("noHas").active = !1;
        t.getChildByName("has").active = !0;
      };
      return __decorate([ s ], e);
    }(cc.Component));
    exports["default"] = c;
    cc._RF.pop();
  }, {} ],
  hedge: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "07d98niZe5NzrFQ7E0lWKMH", "hedge");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = (a.property, function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        var t = this;
        this.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, function() {
          t.node.destroy();
        }, this);
      };
      return __decorate([ s ], e);
    }(cc.Component));
    exports["default"] = c;
    cc._RF.pop();
  }, {} ],
  ice: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc1c1x9AEFHuo0WacUaPgZF", "ice");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = a.property;
    var l = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.sps = [];
        e.sp = null;
        e.ani = null;
        e.count = 4;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        this.ani = this.getComponent(cc.Animation);
        this.ani.on(cc.Animation.EventType.FINISHED, this.playDone, this);
      };
      e.prototype.playDone = function() {
        0 == this.count && this.node.destroy();
      };
      e.prototype.drop = function() {
        var t = this.count;
        if (!(t < 1)) return this.ani.play(), t = this.count = t - 1, this.sp.spriteFrame = t > 0 ? this.sps[t - 1] : null, 
        t;
      };
      __decorate([ c([ cc.SpriteFrame ]) ], e.prototype, "sps", void 0);
      __decorate([ c(cc.Sprite) ], e.prototype, "sp", void 0);
      return __decorate([ s ], e);
    }(cc.Component);
    exports["default"] = l;
    cc._RF.pop();
  }, {} ],
  idx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1538WEz6ZDt4+3IBZG199Y", "idx");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.ERepEvt = exports.platform = void 0;
    var _ali = require("ali");
    var _androidP = require("androidP");
    var _h5 = require("h5");
    var _iosP = require("iosP");
    var _qq = require("qq");
    var _tb = require("tb");
    var _tt = require("tt");
    var _vivo = require("vivo");
    var _wx = require("wx");
    (function() {
      exports.platform || (exports.platform = new _h5["default"]());
    })();
    (function(t) {
      t.firstEtrGame = "dadian00001", t.finshGuide = "dadian00002", t.maindungeon = "dadian00003", 
      t.dungeonReview = "dadian00004", t.useItem = "dadian00005", t.buyItem = "dadian00006", 
      t.buyTimes = "dadian00007", t.buyCoins = "dadian00008", t.dailyTask = "dadian00009", 
      t.raceEnd = "dadian000010", t.raceReview = "dadian000011", t.challengeCoupon = "dadian000012", 
      t.guide = "dadian000013", t.gameLoaded = "dadian000014", t.login = "dadian000015", 
      t.createNewRole = "dadian000016", t.beginPractice = "dadian000017", t.finishHoleJigsaw = "dadian000018", 
      t.partJigsaw = "dadian000019", t.fesTaskFinish = "dadian000020", t.fesMainPuzzle = "dadian000021", 
      t.fesJigNum = "dadian000022", t.newGiftGet = "dadian000023", t.adMax = "dadian000024", 
      t.dailyChallenge = "dadian000025", t.applaunchShow = "dadian000026", t.reSetData = "dadian000027", 
      t.susPayment = "dadian000028", t.paymentResult = "dadian000029", t.buySkin = "dadian000030", 
      t.useSkin = "dadian000031";
    })(exports.ERepEvt || (exports.ERepEvt = {}));
    cc._RF.pop();
  }, {
    ali: "ali",
    androidP: "androidP",
    h5: "h5",
    iosP: "iosP",
    qq: "qq",
    tb: "tb",
    tt: "tt",
    vivo: "vivo",
    wx: "wx"
  } ],
  iosP: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b63a8c4FAtD1LUSpIutFX8H", "iosP");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var r;
    var _com = require("com");
    var _pConst = require("pConst");
    var c = function(t) {
      function e() {
        var e = t.call(this) || this;
        r = jsb.reflection.callStaticMethod;
        return e;
      }
      __extends(e, t);
      Object.defineProperty(e.prototype, "appId", {
        get: function get() {
          return "6478914767";
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.string = function() {
        return _pConst.PFCode.Ios;
      };
      e.prototype.vibrate = function() {
        r("AppController", "vibrate:", null);
      };
      e.prototype.showLogin = function(e) {
        t.prototype.showLogin.call(this, e);
        r("AppController", "showLogin:", null);
      };
      Object.defineProperty(e.prototype, "isLogin", {
        get: function get() {
          return r("AppController", "getOpenId:", null);
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.login = function() {
        return Promise.resolve({
          code: Date.now() + _com["default"].ins.rad(1, 1e5),
          openid: r("AppController", "getOpenId:", null)
        });
      };
      e.prototype.setCloudData = function() {};
      e.prototype.doWatchAD = function() {
        return Promise.resolve();
      };
      e.prototype.showLoading = function() {
        this.isShowLoading || (this.isShowLoading = !0, r("AppController", "showLoading:", null));
      };
      e.prototype.hideLoading = function() {
        this.isShowLoading = !1;
        r("AppController", "hideLoading:", null);
      };
      e.prototype.showTip = function(t) {
        r("AppController", "showTip:", t);
      };
      return e;
    }(require("nativeP")["default"]);
    exports["default"] = c;
    cc._RF.pop();
  }, {
    com: "com",
    nativeP: "nativeP",
    pConst: "pConst"
  } ],
  item1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "271daYGFwxILLSIwdBLS+j9", "item1");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _numberUtils = require("NumberUtils");
    var _res = require("res");
    var _mailMgr = require("mailMgr");
    var l = cc._decorator;
    var u = l.ccclass;
    var p = l.property;
    var d = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.icon = null;
        e.numLbl = null;
        e.awardedNode = null;
        e.key = "";
        e.countStr = "";
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t, e, o) {
        this.key = t;
        _res["default"].ins.lSF("item/" + t, this.icon);
        var n = _numberUtils["default"].FormatCurrency(e);
        this.countStr = n;
        this.numLbl.string = "x" + e;
        this.awardedNode.active = o == _mailMgr.mailState.award;
      };
      __decorate([ p(cc.Sprite) ], e.prototype, "icon", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "numLbl", void 0);
      __decorate([ p(cc.Node) ], e.prototype, "awardedNode", void 0);
      return __decorate([ u ], e);
    }(cc.Component);
    exports["default"] = d;
    cc._RF.pop();
  }, {
    NumberUtils: "NumberUtils",
    mailMgr: "mailMgr",
    res: "res"
  } ],
  item: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ab1208U3p1LdY9+tJ9S8YFo", "item");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _numberUtils = require("NumberUtils");
    var _res = require("res");
    var c = cc._decorator;
    var l = c.ccclass;
    var u = c.property;
    var p = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.icon = null;
        e.numLbl = null;
        e.numBgNode = null;
        e.key = "";
        e.count = "";
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t, e) {
        this.key = e;
        _res["default"].ins.lSF("item/" + e, this.icon);
        var o = _numberUtils["default"].FormatCurrency(t.val[e]);
        this.count = o;
        this.numLbl.string = "x" + o;
      };
      e.prototype.initByData = function(t, e) {
        var o = this;
        this.key = t;
        this.count = e;
        _res["default"].ins.lSF("item/" + t, this.icon);
        var n = this.numLbl.node.width;
        this.numLbl.string = "x" + e;
        this.scheduleOnce(function() {
          var t = o.numLbl.node.width - n;
          o.reNumBg(t);
        });
      };
      e.prototype.reNumBg = function(t) {
        this.numBgNode && (this.numBgNode.width += t);
      };
      __decorate([ u(cc.Sprite) ], e.prototype, "icon", void 0);
      __decorate([ u(cc.Label) ], e.prototype, "numLbl", void 0);
      __decorate([ u(cc.Node) ], e.prototype, "numBgNode", void 0);
      return __decorate([ l ], e);
    }(cc.Component);
    exports["default"] = p;
    cc._RF.pop();
  }, {
    NumberUtils: "NumberUtils",
    res: "res"
  } ],
  jigMenu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8351dgsMZDVIb8DD1BgeAK", "jigMenu");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _res = require("res");
    var _cfgMgr = require("cfgMgr");
    var _lang = require("lang");
    var _global = require("global");
    var _jigsawMgr = require("jigsawMgr");
    var _newJigMgr = require("newJigMgr");
    var _panelMgr = require("panelMgr");
    var _tipMgr = require("tipMgr");
    var g = cc._decorator;
    var y = g.ccclass;
    var m = g.property;
    var v = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.icons = [];
        e.idxLbls = [];
        e.pieceLbs = [];
        e.unlockNode = null;
        e.lockNode = null;
        e.finishNode = null;
        e.unPlacedLb = null;
        e.theme_id = 0;
        e.themeType = 1;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        _evts["default"].opE.on(this.onOperTap.bind(this));
      };
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].UPDJIGSAWGAME:
          this.updateView();
        }
      };
      e.prototype.init = function(t, e) {
        var o = this;
        this.theme_id = t;
        this.themeType = e;
        this.idxLbls.forEach(function(e) {
          e.string = t + 1 + "";
        });
        var n = this.getFinAndAllNum();
        var i = n[0];
        n[1];
        this.pieceLbs.forEach(function(t) {
          t.string = i + "/105";
        });
        var r;
        var a = t + 1;
        var c = "pintu_" + a + "_1";
        var l = "pintu_" + a;
        1 === e ? r = _jigsawMgr["default"].ins : 2 === e && (r = _newJigMgr["default"].ins, 
        c = "fes_" + a + "_1", l = "fes_" + a);
        r.isItemUnlock(t) ? this.initUnLock() : this.initLocked();
        this.IsJigsawCompleted(this.theme_id) && (c = l);
        1 === e ? a < 61 ? _res["default"].ins.getBundleByString("jigsaw").then(function(t) {
          t.load(c, cc.SpriteFrame, function(t, e) {
            !t && o.node && o.node.isValid && o.icons.forEach(function(t) {
              t.spriteFrame = e;
            });
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('jigsaw')", t);
        }) : cc.assetManager.loadRemote(_global.OssConfig.jigswawUrl + c + ".jpg", {
          ext: _global.headImgExt
        }, function(t, e) {
          if (!t && o.node && o.node.isValid) {
            var n = new cc.SpriteFrame(e);
            o.icons.forEach(function(t) {
              t.spriteFrame = n;
            });
          }
        }) : _res["default"].ins.getBundleByString("jigsaw").then(function(t) {
          t.load(c, cc.SpriteFrame, function(t, e) {
            !t && o.node && o.node.isValid && o.icons.forEach(function(t) {
              t.spriteFrame = e;
            });
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('jigsaw')", t);
        });
        this.checkUnPlacedNum();
      };
      e.prototype.updateView = function() {
        this.init(this.theme_id, this.themeType);
      };
      e.prototype.initLocked = function() {
        this.lockNode.active = !0;
        this.unlockNode.active = !1;
        this.finishNode.active = !1;
      };
      e.prototype.initUnLock = function() {
        this.lockNode.active = !1;
        this.IsJigsawCompleted(this.theme_id) ? this.initComplete() : this.initUnComplete();
      };
      e.prototype.initComplete = function() {
        this.unlockNode.active = !1;
        this.finishNode.active = !0;
      };
      e.prototype.initUnComplete = function() {
        this.unlockNode.active = !0;
        this.finishNode.active = !1;
      };
      e.prototype.IsJigsawCompleted = function(t) {
        var e;
        1 === this.themeType ? e = _jigsawMgr["default"].ins : 2 === this.themeType && (e = _newJigMgr["default"].ins);
        var o = e.checkHasFin(t);
        if (o) return o;
        var n = e.getJigsawTilesByIdx(t);
        if (105 == n.length) {
          for (var i = 0, r = n; i < r.length; i++) {
            var a = r[i];
            if (a[0] != a[1]) return !1;
          }
          return !0;
        }
        return !1;
      };
      e.prototype.getFinAndAllNum = function() {
        var t;
        1 === this.themeType ? t = _jigsawMgr["default"].ins : 2 === this.themeType && (t = _newJigMgr["default"].ins);
        for (var e = t.getJigsawTilesByIdx(this.theme_id), o = e.length, n = 0, i = 0; i < o; i++) {
          var r = e[i];
          r[0] == r[1] && n++;
        }
        t.checkHasFin(this.theme_id) && (n = 105);
        return [ n, o ];
      };
      e.prototype.checkUnPlacedNum = function() {
        var t;
        1 === this.themeType ? t = _jigsawMgr["default"].ins : 2 === this.themeType && (t = _newJigMgr["default"].ins);
        for (var e = t.getJigsawTilesByIdx(this.theme_id), o = e.length, n = 0, i = 0; i < o; i++) {
          var r = e[i];
          r[1] != r[0] && n++;
        }
        t.checkHasFin(this.theme_id) && (n = 0);
        var a = this.unPlacedLb;
        n > 0 ? (a.node.parent.active = !0, a.string = n + "") : a.node.parent.active = !1;
      };
      e.prototype.onBtnClick = function() {
        var t;
        var e;
        var o;
        var n = this.themeType;
        if (1 === n ? o = _jigsawMgr["default"].ins : 2 === n && (o = _newJigMgr["default"].ins), 
        o.isItemUnlock(this.theme_id)) _panelMgr["default"].ins.open("ui/ui_jigsaw", {
          theme_id: this.theme_id,
          themeType: this.themeType
        }); else {
          var i = _cfgMgr["default"].serverCfg;
          var r = (null === (e = null === (t = null == i ? void 0 : i.lock_rules) || void 0 === t ? void 0 : t.main_line_lock) || void 0 === e ? void 0 : e.puzzle_line_val) || 0;
          var a = o.isPieceEnough(this.theme_id) ? _lang.lang[30001].format(r) : "\u62fc\u56fe\u672a\u89e3\u9501";
          _tipMgr["default"].ins.showTip(a);
        }
      };
      __decorate([ m([ cc.Sprite ]) ], e.prototype, "icons", void 0);
      __decorate([ m([ cc.Label ]) ], e.prototype, "idxLbls", void 0);
      __decorate([ m([ cc.Label ]) ], e.prototype, "pieceLbs", void 0);
      __decorate([ m(cc.Node) ], e.prototype, "unlockNode", void 0);
      __decorate([ m(cc.Node) ], e.prototype, "lockNode", void 0);
      __decorate([ m(cc.Node) ], e.prototype, "finishNode", void 0);
      __decorate([ m(cc.Label) ], e.prototype, "unPlacedLb", void 0);
      return __decorate([ y ], e);
    }(cc.Component);
    exports["default"] = v;
    cc._RF.pop();
  }, {
    cfgMgr: "cfgMgr",
    evts: "evts",
    global: "global",
    jigsawMgr: "jigsawMgr",
    lang: "lang",
    newJigMgr: "newJigMgr",
    panelMgr: "panelMgr",
    res: "res",
    tipMgr: "tipMgr"
  } ],
  jigsawMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f97e8To3BGBasqLgXvs1PD", "jigsawMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _idx = require("idx");
    var _global = require("global");
    var _pInfo = require("pInfo");
    var _bagMgr = require("bagMgr");
    var s = function() {
      function t() {
        this.jigsawTileTotal = 105;
        this.localData = null;
        this.seed = 5;
        this.saveStr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?><{}|[]. \u4ebf'\"\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u4e1c\u897f\u5357\u5317\u4e2d\u767e\u5343\u4e07";
      }
      Object.defineProperty(t, "ins", {
        get: function get() {
          return this._ins || (this._ins = new t());
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.getJigsawTilesByIdx = function(t) {
        var e = this.getJigsawTiles()[t] || [];
        var o = _bagMgr["default"].ins.getItemCount("puzzle_pieces");
        var n = t + 1;
        var i = this.getTicketPoolByIdx(t);
        if (e.length < this.jigsawTileTotal) {
          var r = e.length;
          var s = this.jigsawTileTotal - e.length;
          var c = o - ((n - 1) * this.jigsawTileTotal + r);
          if (c > 0) for (var l = Math.min(s, c), u = 0; u < l; u++) {
            var p = i[r + u];
            e.push([ p, -1 ]);
          }
        }
        this.setJigsawTilesByIdx(t, e, !1);
        return e;
      };
      t.prototype.getTicketPoolByIdx = function(t) {
        var e = t + 1;
        this.seed = 22 + e;
        var o = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 55, 66, 77, 88, 99, 89, 100, 91, 101, 93, 102, 95, 103, 97, 104, 98, 87, 76, 65, 54, 43, 32, 21 ];
        this.shuffleArray(o);
        o.length = 10;
        for (var n = [], i = 0; i < 105; i++) -1 == o.indexOf(i) && n.push(i);
        this.shuffleArray(n);
        return o.concat(n);
      };
      t.prototype.setJigsawTilesByIdx = function(t, e, o) {
        void 0 === o && (o = !0);
        for (var n = this.saveStr, i = "", a = 0, s = e.length; a < s; a++) {
          var c = e[a][1];
          var l = "-";
          -1 != c && (l = n[c]);
          i += l;
        }
        var u = this.getNewSaveTiles();
        if (u[t] = i, this.setNewSaveTiles(u), o) {
          var p = [ t, i ];
          _pInfo["default"].ins.setJigTiles(p);
        }
      };
      t.prototype.isItemUnlock = function(t) {
        var e = t * this.jigsawTileTotal;
        var o = _bagMgr["default"].ins.getItemCount("puzzle_pieces");
        var n = _pInfo["default"].ins.isJigsawLocked();
        return (0 == t || !n) && o > e;
      };
      t.prototype.isPieceEnough = function(t) {
        var e = t * this.jigsawTileTotal;
        return _bagMgr["default"].ins.getItemCount("puzzle_pieces") > e;
      };
      t.prototype.getNowJigsawLv = function() {
        for (var t = 0, e = this.getJigsawTiles().length; t < e; t++) if (!this.IsJigsawCompletedByIdx(t)) return t + 1;
      };
      t.prototype.IsJigsawCompletedByIdx = function(t) {
        var e = this.getJigsawTiles()[t];
        if (105 == e.length) {
          for (var o = 0, n = e; o < n.length; o++) {
            var i = n[o];
            if (i[0] != i[1]) return !1;
          }
          return !0;
        }
        return !1;
      };
      t.prototype.getAllTiles = function() {
        for (var t = 0, e = _global["default"].jisawCount; t < e; t++) this.getJigsawTilesByIdx(t);
      };
      t.prototype.getUnPlacedNum = function() {
        this.getAllTiles();
        for (var t = this.getJigsawTiles(), e = 0, o = 0, n = t.length; o < n; o++) {
          var i = t[o];
          if (!this.checkHasFin(o)) for (var r = 0, a = i.length; r < a; r++) {
            var s = i[r];
            s[1] != s[0] && e++;
          }
        }
        return e;
      };
      t.prototype.seedRandom = function() {
        this.seed = (9301 * this.seed + 49297) % 233280;
        return this.seed / 233280;
      };
      t.prototype.shuffleArray = function(t) {
        for (var e, o = t.length - 1; o > 0; o--) {
          var n = Math.floor(this.seedRandom() * (o + 1));
          e = [ t[n], t[o] ];
          t[o] = e[0];
          t[n] = e[1];
        }
      };
      t.prototype.getJigsawTiles = function() {
        var t = this.saveStr;
        var e = _pInfo["default"].ins.getJigTiles();
        var o = this.getNewSaveTiles();
        var n = [];
        var i = o.length;
        if (i) {
          -1 != e[0] && (o[e[0]] = e[1]);
          for (var a = 0; a < i; a++) {
            var s = o[a];
            if (s) {
              for (var c = this.getTicketPoolByIdx(a), l = [], u = 0, p = s.length; u < p; u++) {
                var d = c[u];
                var h = s[u];
                var f = [ d, t.indexOf(h) ];
                l.push(f);
              }
              n.push(l);
            }
          }
        } else for (var g = [], y = (a = 0, (n = this.getOldSaveTiles()).length); a < y; a++) {
          for (var m = n[a], v = "", _ = (u = 0, m.length); u < _; u++) {
            var b = m[u][1];
            var w = "-";
            -1 != b && (w = t[b]);
            v += w;
          }
          g.push(v);
          this.setNewSaveTiles(g);
          this.setOldSaveTiles([]);
        }
        return n;
      };
      t.prototype.getNewSaveTiles = function() {
        var t = this.getLocalJigData().jigTils;
        return null == t ? [] : t;
      };
      t.prototype.setNewSaveTiles = function(t) {
        this.setLocalJigData({
          jigTils: t
        });
      };
      t.prototype.getOldSaveTiles = function() {
        var t = this.getLocalJigData().tiles;
        return null == t ? [] : t;
      };
      t.prototype.setOldSaveTiles = function(t) {
        this.setLocalJigData({
          tiles: t
        });
      };
      t.prototype.setLocalJigData = function(t) {
        var e = this.getLocalJigData();
        this.localData = Object.assign(Object.assign({}, e), t);
        _idx.platform.setStorage("jigsawData", this.localData);
      };
      t.prototype.getLocalJigData = function() {
        null == this.localData && (this.localData = _idx.platform.getStorage("jigsawData") || {});
        return this.localData;
      };
      t.prototype.checkClearData = function() {
        _pInfo["default"].ins.getIsClearJigsawData() && (_pInfo["default"].ins.setIsClearJigsawData(!1), 
        this.clearJigsawData());
      };
      t.prototype.clearJigsawData = function() {
        this.localData = {};
        _idx.platform.setStorage("jigsawData", this.localData);
      };
      t.prototype.checkSetFin = function(t) {
        this.checkHasFin(t) || this.setFinfishJigsaw(t);
      };
      t.prototype.checkHasFin = function(t) {
        return _pInfo["default"].ins.getHasFinJig()[t] || !1;
      };
      t.prototype.setFinfishJigsaw = function(t) {
        var e = _pInfo["default"].ins.getHasFinJig();
        e[t] = !0;
        _pInfo["default"].ins.setHasFinJig(e);
      };
      t.prototype.clearFinJig = function(t) {
        var e = _pInfo["default"].ins.getHasFinJig();
        e[t] = !1;
        _pInfo["default"].ins.setHasFinJig(e);
      };
      t.prototype.resetJigByIdx = function(t) {
        for (var e = this.getJigsawTilesByIdx(t), o = [], n = 0, i = e.length; n < i; n++) {
          var r = e[n];
          r[1] = -1;
          o.push(r);
        }
        this.setJigsawTilesByIdx(t, o, !1);
        this.clearFinJig(t);
      };
      return t;
    }();
    exports["default"] = s;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    global: "global",
    idx: "idx",
    pInfo: "pInfo"
  } ],
  jigsaw: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e254roCXNBXbdO0aWr4kpu", "jigsaw");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _idx = require("idx");
    var _res = require("res");
    var _sound = require("sound");
    var _time = require("time");
    var _vb = require("vb");
    var _cfgMgr = require("cfgMgr");
    var _lang = require("lang");
    var _global = require("global");
    var _bagMgr = require("bagMgr");
    var _festivalMgr = require("festivalMgr");
    var _jigsawMgr = require("jigsawMgr");
    var _newJigMgr = require("newJigMgr");
    var _panelMgr = require("panelMgr");
    var _pInfo = require("pInfo");
    var _loading = require("loading");
    var _main = require("main");
    var T = cc._decorator;
    var I = T.ccclass;
    var D = T.property;
    var P = 79 - 34.5 * Math.tan(Math.PI / 180 * 30) + .4;
    var k = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.ringNode = null;
        e.tilePre = null;
        e.shadow0 = null;
        e.tilesNode = null;
        e.menuNode = null;
        e.scrollView = null;
        e.finImg = null;
        e.dragTag = null;
        e.lockNode = null;
        e.timeLb = null;
        e.bgBtn = null;
        e.getLb = null;
        e.timeAd = null;
        e.lockImg = null;
        e.tileLbNode = null;
        e.cellNode = null;
        e.cellSpr = null;
        e.hintNum = null;
        e.bgNum = null;
        e.bgNode = null;
        e.tipLb = null;
        e.bgBtnNode = null;
        e.getPieceSp = null;
        e.btnReset = null;
        e.jig_2d = null;
        e.tile_a = null;
        e.tile_p = [];
        e.tiles = {};
        e.tiles_idle = [];
        e.isAllRight = !1;
        e.is_hinting = !1;
        e.idle_tile_select = null;
        e.tileSelect = null;
        e.tilePosId = -1;
        e.scroll_dir = 0;
        e.drag_tile = null;
        e.dragPutPosId = -1;
        e.guideF = null;
        e.isUnlock = !1;
        e.theme_id = -1;
        e.is_init = !1;
        e.jigTiles = [];
        e.defaultShowTime = 30;
        e.showBgEndTime = 0;
        e.adMaxTime = 5;
        e.adMaxTime2 = 5;
        e.themeType = 1;
        e.eventFunc = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        var t;
        var e;
        var o = _cfgMgr["default"].serverCfg;
        var n = (null === (e = null === (t = null == o ? void 0 : o.lock_rules) || void 0 === t ? void 0 : t.main_line_lock) || void 0 === e ? void 0 : e.puzzle_line_val) || 0;
        this.tipLb.string = _lang.lang[30001].format(n);
        for (var i = 0, r = o.props.set; i < r.length; i++) {
          var s = r[i];
          "puzzle_background" == s.key ? s.limit_time && (this.defaultShowTime = s.limit_time, 
          this.timeLb.node.active = !1, this.timeAd.active = !0) : "puzzle_pieces" == s.key ? s.daily_limit_times && (this.adMaxTime = Number(s.daily_limit_times) || 5) : "newYear_pieces" == s.key && s.daily_limit_times && (this.adMaxTime2 = Number(s.daily_limit_times) || 5);
        }
        this.eventFunc = this.onOperTap.bind(this);
        _evts["default"].opE.on(this.eventFunc);
        this.scrollView._registerEvent = function() {};
        this.scrollView._unregisterEvent = function() {};
        this.tile_a = this.tilesNode;
        this.scrollView.node.on("scrolling", this.chgVisItems, this);
        this.tileLbNode.active = !1;
        this.btnReset.active = !1;
      };
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].UPDJIGSAWGAME:
          this.updateView();
          break;

         case _evts["default"].UPD_PANEL:
         case _evts["default"].UPD_MAIN_RED:
          this.upItemNum();
        }
      };
      e.prototype.start = function() {
        this.dragTag.zIndex = -1e3;
        this.dragTag.active = !1;
      };
      e.prototype.onEnable = function() {};
      e.prototype.onDisable = function() {};
      e.prototype.upItemNum = function() {
        1 === this.themeType ? this.initGetTime() : 2 === this.themeType && this.initGetTime2();
        this.hintNum.string = _bagMgr["default"].ins.getItemCount("puzzle_notice") + "";
        this.bgNum.string = _bagMgr["default"].ins.getItemCount("puzzle_background") + "";
      };
      e.prototype.updateView = function() {
        var t;
        1 === this.themeType ? t = _jigsawMgr["default"].ins : 2 === this.themeType && (t = _newJigMgr["default"].ins);
        this.jigTiles = t.getJigsawTilesByIdx(this.theme_id);
        this.scrollView.content.removeAllChildren();
        this.tiles_idle = [];
        this.RefreshIdleItems(!0);
        this.isUnlock = t.isItemUnlock(this.theme_id);
        this.isUnlock ? this.initUnLock() : this.initLocked();
        this.upItemNum();
      };
      e.prototype.getIsUnlock = function() {
        return this.isUnlock;
      };
      e.prototype.initItem = function(t, e) {
        var o = this;
        this.themeType = e;
        this.theme_id = t;
        var n;
        var i = t + 1;
        var r = "puzzle_pieces";
        var a = "pintu_" + i + "_1";
        1 === e ? (n = _jigsawMgr["default"].ins, this.showBgEndTime = _pInfo["default"].ins.getJigsawBgEndTimesByIdx(t), 
        this.bgBtnNode.active = !0) : 2 === e && (n = _newJigMgr["default"].ins, this.showBgEndTime = _pInfo["default"].ins.getNewJigBgEndTimesByIdx(t), 
        r = "newYear_pieces", a = "fes_" + i + "_1", this.bgBtnNode.active = !1);
        this.jigTiles = n.getJigsawTilesByIdx(t);
        this.isUnlock = n.isItemUnlock(t);
        this.isUnlock ? this.initUnLock() : this.initLocked();
        !this.isUnlock && n.isPieceEnough(t) ? this.tipLb.node.active = !0 : this.tipLb.node.active = !1;
        this.upItemNum();
        1 === e && (i < 61 ? _res["default"].ins.getBundleByString("jigsaw").then(function(t) {
          t.load(a, cc.SpriteFrame, function(t, e) {
            !t && o.node && o.node.isValid && (o.lockImg.spriteFrame = e);
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('jigsaw')", t);
        }) : cc.assetManager.loadRemote(_global.OssConfig.jigswawUrl + "pintu_" + i + "_1.jpg", {
          ext: _global.headImgExt
        }, function(t, e) {
          !t && o.node && o.node.isValid && (o.lockImg.spriteFrame = new cc.SpriteFrame(e));
        }));
        _res["default"].ins.getBundleByString("resSps").then(function(t) {
          t.load("item/" + r, cc.SpriteFrame, function(t, e) {
            !t && o.node && o.node.isValid && (o.getPieceSp.spriteFrame = e);
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
      };
      e.prototype.initGetTime = function() {
        var t = _pInfo["default"].ins.getJigsawAdTimes();
        var e = this.adMaxTime - t;
        this.getLb.string = e + "";
      };
      e.prototype.initGetTime2 = function() {
        var t = _pInfo["default"].ins.getNewJigAdTimes();
        var e = this.adMaxTime2 - t;
        this.getLb.string = e + "";
      };
      e.prototype.initLocked = function() {
        this.finImg.node.active = !0;
        this.menuNode.active = !1;
        this.lockNode.active = !0;
        this.lockImg.node.active = !0;
        this.bgNode.y = 326;
        this.bgNode.height = 790;
      };
      e.prototype.initUnLock = function() {
        var t = this;
        var e = this.theme_id + 1;
        var o = "pintu_" + e;
        1 === this.themeType ? e < 61 ? _res["default"].ins.getBundleByString("jigsaw").then(function(e) {
          e.load(o, cc.Texture2D, function(e, o) {
            !e && t.node && t.node.isValid && t.initUnlockWithImg(o);
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('jigsaw')", t);
        }) : cc.assetManager.loadRemote(_global.OssConfig.jigswawUrl + "pintu_" + e + ".jpg", {
          ext: _global.headImgExt
        }, function(e, o) {
          !e && t.node && t.node.isValid && t.initUnlockWithImg(o);
        }) : 2 === this.themeType && (o = "fes_" + e, _res["default"].ins.getBundleByString("jigsaw").then(function(e) {
          e.load(o, cc.Texture2D, function(e, o) {
            !e && t.node && t.node.isValid && t.initUnlockWithImg(o);
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('jigsaw')", t);
        }));
      };
      e.prototype.initUnlockWithImg = function(t) {
        this.jig_2d = t;
        this.finImg.spriteFrame = new cc.SpriteFrame(t);
        this.lockNode.active = !1;
        this.menuNode.active = !0;
        this.lockImg.node.active = !1;
        this.isAllRight = this.IsJigsawCompleted(this.theme_id);
        this.isAllRight ? this.initComplete() : this.initUnComplete();
      };
      e.prototype.initComplete = function() {
        var t;
        this.lockImg.node.active = !1;
        this.finImg.node.active = !0;
        this.scrollView.node.parent.active = !1;
        this.menuNode.active = !1;
        this.lockNode.active = !1;
        this.btnReset.active = !0;
        this.bgNode.y = 326;
        this.bgNode.height = 790;
        1 === this.themeType ? t = _jigsawMgr["default"].ins : 2 === this.themeType && (t = _newJigMgr["default"].ins);
        t.checkSetFin(this.theme_id);
      };
      e.prototype.initUnComplete = function() {
        this.is_init || (this.lockImg.node.active = !1, this.scrollView.node.parent.active = !0, 
        this.menuNode.active = !0, this.lockNode.active = !1, this.initTilePos(), this.initAroundTiles(), 
        this.InitTiles(), this.RefreshIdleItems(!0), this.isShowBging(), this.is_init = !0, 
        this.bgNode.y = 396, this.bgNode.height = 960);
        var t = this.showBgEndTime - _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
        this.lockNode.active = !(t < 0);
      };
      e.prototype.isShowBging = function() {
        (this.showBgEndTime - _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3)) < 0 ? (this.finImg.node.active = !1, 
        this.lockNode.active = !1, this.bgBtn.enabled = !0, this.timeLb.string = this.defaultShowTime + "s", 
        this.timeLb.node.active = !1, this.timeAd.active = !0, this.unschedule(this.beginShow)) : (this.bgBtn.enabled = !1, 
        this.finImg.node.active = !0, this.lockNode.active = !0, this.timeAd.active = !1, 
        this.timeLb.node.active = !0, this.schedule(this.beginShow, 1), this.beginShow());
      };
      e.prototype.lockedToUnlock = function() {
        this.isUnlock || (this.isUnlock = !0, this.lockNode.active = !1, this.initUnLock());
      };
      e.prototype.InitTiles = function() {
        for (var t = 0, e = this.jigTiles; t < e.length; t++) {
          var o = e[t];
          var n = o[0];
          var i = o[1];
          -1 != i && this.cTile(n, i, !1);
        }
      };
      e.prototype.addAroundTiles = function(t, e, o, n) {
        var i = new cc.Node();
        i.addComponent(cc.Sprite).spriteFrame = this.shadow0;
        i.position = cc.v3(t + -4, e + -9);
        i.zIndex = -1;
        i.parent = this.tile_a;
        var r = this.cTileSprite(o, n);
        r.position = cc.v3(t, e);
        r.scale = 1.02;
        r.zIndex = 1;
        r.parent = this.tile_a;
      };
      e.prototype.initAroundTiles = function() {
        for (var t = 0; t < 11; t++) {
          var e = this.getTilePos(t);
          this.addAroundTiles(e.x + 49.5, -e.y - 44.5 + 69, e.x, e.y - 69);
        }
        for (var o = [ 99, 89, 100, 91, 101, 93, 102, 95, 103, 97, 104 ], n = 0; n < 11; n++) t = o[n], 
        e = this.getTilePos(t), this.addAroundTiles(e.x + 49.5, -e.y - 44.5 - 69, e.x, e.y + 69);
        var i = [ 0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 99 ];
        for (n = 0; n < 11; n++) t = i[n], e = this.getTilePos(t), 10 == n ? this.addAroundTiles(e.x + 49.5 - P, -e.y - 44.5 - 34.5, e.x - P, e.y + 34.5) : this.addAroundTiles(e.x + 49.5 - P, -e.y - 44.5 + 34.5, e.x - P, e.y - 34.5);
        var r = [ 10, 21, 32, 43, 54, 65, 76, 87, 98, 104, 104 ];
        for (n = 0; n < 11; n++) t = r[n], e = this.getTilePos(t), 10 == n ? this.addAroundTiles(e.x + 49.5 + P, -e.y - 44.5 - 34.5, e.x + P, e.y + 34.5) : this.addAroundTiles(e.x + 49.5 + P, -e.y - 44.5 + 34.5, e.x + P, e.y - 34.5);
      };
      e.prototype.cIdleTile = function(t) {
        var e = new cc.Node(t.toString());
        e.scale = 1.01;
        e.setContentSize(cc.size(79, 69));
        this.addTileShadow(e);
        var o = this.getTilePos(t);
        this.cTileSprite(o.x, o.y).parent = e;
        return e;
      };
      e.prototype.RefreshIdleItems = function(t, e) {
        if (void 0 === e && (e = !1), !this.isAllRight && this.jig_2d) {
          for (var o = this.jigTiles, n = {}, i = 0, r = this.tiles_idle; i < r.length; i++) n[(g = r[i]).name] = g;
          this.tiles_idle = [];
          for (var a = 0, s = 0, c = o; s < c.length; s++) {
            var l = c[s];
            var u = l[0];
            if (-1 == l[1]) {
              var p = n[f = u.toString()];
              var d = null;
              p ? (d = p, n[f] = void 0) : (d = this.cIdleTile(u), t || (d.opacity = 0, cc.tween(d).to(.5, {
                opacity: 255
              }).start()), d.parent = this.scrollView.content);
              d.setPosition(50 + 100 * a++, 0);
              this.tiles_idle.push(d);
            }
          }
          var h = Math.max(100 * this.tiles_idle.length, this.scrollView.node.getContentSize().width + 1);
          for (var f in this.scrollView.content.setContentSize(cc.size(h, 110)), n) {
            var g;
            (g = n[f]) && g.destroy();
          }
          this.chgVisItems();
        }
      };
      e.prototype.chgVisItems = function() {
        var t = this.scrollView.content;
        var e = t.children;
        if (0 != e.length) for (var o = t.parent.getContentSize(), n = -o.width / 2 - 50, i = o.width / 2 + 50, r = t.x, a = 0, s = e; a < s.length; a++) {
          var c = s[a];
          var l = c.x + r;
          var u = l >= n && l <= i;
          c.active = u;
        }
      };
      e.prototype.ttIdleTile = function(t) {
        if (this.tiles_idle.length <= 0) return null;
        var e = _main["default"].ins.getWorldPointByTouch(t);
        var o = this.scrollView.content.convertToNodeSpaceAR(e);
        if (o.y < -45 || o.y > 45) return null;
        for (var n = 0, i = this.tiles_idle; n < i.length; n++) {
          var r = i[n];
          var a = r.position;
          if (o.x > a.x - 45 && o.x < a.x + 45) return r;
        }
        return null;
      };
      e.prototype.tileFlyView = function(t, e) {
        var o = this.cDragTile(e);
        o.position = t;
        o.parent = this.node;
        var n = this.scrollView.node.parent.position;
        cc.tween(o).to(.5, {
          position: n
        }).to(.15, {
          opacity: 0
        }).start();
      };
      e.prototype.cDragTile = function(t) {
        _vb["default"].p(_vb.VEnum3.SHORT);
        var e = new cc.Node(t.toString());
        e.scale = 1.01;
        e.setContentSize(cc.size(79, 69));
        this.addTileShadow(e);
        var o = this.getTilePos(t);
        this.cTileSprite(o.x, o.y).parent = e;
        return e;
      };
      e.prototype.setTileVis = function(t, e) {
        t.di.active = e;
        t.img.active = e;
      };
      e.prototype.cTile = function(t, e, o) {
        if (void 0 === o && (o = !0), !this.getTileByPos(e)) {
          var n = this.tile_p[e];
          var i = new cc.Node();
          i.addComponent(cc.Sprite).spriteFrame = this.shadow0;
          i.position = cc.v3(n.x, n.y - 7);
          i.parent = this.tile_a;
          var r = this.getTilePos(t);
          var a = this.cTileSprite(r.x, r.y);
          a.position = cc.v3(n.x, n.y);
          a.scale = 1.02;
          a.zIndex = 1;
          a.parent = this.tile_a;
          this.tiles[e] = {
            di: i,
            img: a,
            tile_id: t
          };
          o && e == t && (this.playTrueAni(n), _vb["default"].p(_vb.VEnum3.SHORT));
          this.reGuide();
        }
      };
      e.prototype.delTile = function(t) {
        var e = this.tiles[t];
        e && (e.di.destroy(), e.img.destroy(), this.tiles[t] = null);
      };
      e.prototype.moveTile = function(t, e, o) {
        var n = this.tiles[t];
        if (n && n.tile_id == o) {
          var i = this.tile_p[e];
          n.di.position = cc.v3(i.x, i.y - 7);
          n.img.position = cc.v3(i.x, i.y);
          this.tiles[e] = n;
          this.tiles[t] = null;
          e == o && (this.playTrueAni(i), _vb["default"].p(_vb.VEnum3.SHORT));
        }
      };
      e.prototype.getTileByPos = function(t) {
        return this.tiles[t];
      };
      e.prototype.cTileSprite = function(t, e) {
        var o = this.jig_2d.width;
        var n = this.jig_2d.height;
        var i = t + 10;
        var r = e + 10;
        var a = cc.instantiate(this.tilePre);
        a.getComponent(cc.Sprite).getMaterial(0).setProperty("texture2", this.jig_2d);
        var s = i / o * 255;
        var c = r / n * 255;
        var l = cc.color();
        l.r = s > 0 ? s : 0;
        l.g = c > 0 ? c : 0;
        var u = 0;
        s > 0 && c <= -21 ? u = 51 : s > 0 && c <= -8 ? u = 102 : s <= -18 && c <= -8 ? u = 153 : s <= -18 && c > 0 && (u = 204);
        l.b = u + 5;
        a.color = l;
        return a;
      };
      e.prototype.getTilePos = function(t) {
        var e = Math.floor(t / 11);
        var o = t % 11;
        t > 99 && (o += t - 99);
        var n = P * o;
        var i = 69 * e;
        o % 2 == 1 && (i += 34.5);
        return cc.v2(n, i);
      };
      e.prototype.initTilePos = function() {
        if (!(this.tile_p.length > 0)) for (var t = 0; t < 105; t++) {
          var e = this.getTilePos(t);
          var o = e.x + 49.5;
          var n = -e.y - 44.5;
          var i = new cc.Node();
          i.color = cc.color(52, 156, 193);
          var r = i.addComponent(cc.Label);
          r.string = t + "";
          r.font = _loading.DEFAULTFONT;
          i.parent = this.tileLbNode;
          i.position = cc.v3(o, n + 3);
          var a = new cc.Node();
          a.addComponent(cc.Sprite).spriteFrame = this.cellSpr;
          a.scale = .93;
          a.parent = this.cellNode;
          a.position = cc.v3(o, n, 0);
          this.tile_p.push(cc.v2(o, n));
        }
      };
      e.prototype.tTilePosID = function(t) {
        var e = _main["default"].ins.getWorldPointByTouch(t);
        var o = this.tilesNode.convertToNodeSpaceAR(e);
        if (o.x <= 0 || o.x >= 694 || o.y >= 0 || o.y <= -711) return -1;
        for (var n = 0; n < this.tile_p.length; n++) if (cc.Vec2.distance(o, this.tile_p[n]) <= 34.5) return n;
        return -1;
      };
      e.prototype.onTBe = function(t) {
        if (this.isAllRight || this.is_hinting) return !0;
        this.tileSelect = null;
        this.tilePosId = -1;
        this.idle_tile_select = null;
        this.drag_tile = null;
        this.scroll_dir = 0;
        var e = this.tTilePosID(t.touch);
        if (-1 != e) {
          var o = this.getTileByPos(e);
          if (o && o.tile_id != e) return this.tileSelect = o, this.tilePosId = e, !1;
        }
        if (this.tiles_idle.length > 0) {
          var n = _main["default"].ins.getWorldPointByTouch(t.touch);
          var i = this.scrollView.node.parent.convertToNodeSpaceAR(n);
          if (this.scrollView.node.getBoundingBox().contains(i)) return this.scrollView._onTouchBegan(t), 
          this.idle_tile_select = this.ttIdleTile(t.touch), this.idle_tile_select && (this.idle_tile_select.scale = 1.01 * 1.1), 
          !1;
        }
        return !0;
      };
      e.prototype.onTM = function(t) {
        if (this.isAllRight || this.is_hinting) return !0;
        if (0 == this.scroll_dir) {
          var e = t.touch;
          var o = e.getStartLocationInView();
          var n = e.getLocationInView();
          if (cc.Vec2.distance(o, n) > 5) {
            var i = n.sub(o);
            var r = 57.2957 * Math.atan2(i.y, i.x);
            r > 30 && r < 150 ? this.scroll_dir = 2 : r < -30 && r > -150 ? this.scroll_dir = 2 : r >= -30 && r <= 30 ? this.scroll_dir = 1 : (r <= -150 || r >= 150) && (this.scroll_dir = 1);
            this.tileSelect ? this.drag_tile || 0 == this.scroll_dir || (this.drag_tile = this.cDragTile(this.tileSelect.tile_id), 
            this.drag_tile.scale = .88, this.drag_tile.parent = this.node, this.setTileVis(this.tileSelect, !1)) : 1 == this.scroll_dir ? this.idle_tile_select && (this.idle_tile_select.scale = 1.01) : 2 == this.scroll_dir && this.idle_tile_select && !this.drag_tile && (this.drag_tile = this.cDragTile(Number(this.idle_tile_select.name)), 
            this.drag_tile.parent = this.node, this.idle_tile_select.active = !1);
          }
        }
        var a = _main["default"].ins.getWorldPointByTouch(t.touch);
        var s = this.scrollView.node.parent.convertToNodeSpaceAR(a);
        var c = this.scrollView.node.getBoundingBox().contains(s);
        if (this.tileSelect || 1 != this.scroll_dir || !c || this.scrollView._onTouchMoved(t), 
        this.drag_tile) {
          var l = _main["default"].ins.getWorldPointByTouch(t.touch);
          var u = this.node.convertToNodeSpaceAR(l);
          this.drag_tile.position = cc.v3(u.x, u.y + 195);
          var p = this.node.convertToWorldSpaceAR(this.drag_tile.position);
          var d = (o = this.tilesNode.convertToNodeSpaceAR(p), 0);
          var h = -1;
          var f = cc.v3();
          if (o.x > 0 && o.x < 694 && o.y < 0 && o.y > -711) {
            for (var g = this.tile_p.length - 1; g >= 0; g--) if (f.x = this.tile_p[g].x, f.y = this.tile_p[g].y, 
            -1 == h) h = g, d = cc.Vec2.distance(o, f); else {
              var y = cc.Vec2.distance(o, f);
              y < d && (d = y, h = g);
            }
            -1 != h && d > 50 && (h = -1);
          }
          this.dragPutPosId = h;
          -1 == h ? this.dragTag.active = !1 : (this.dragTag.active = !0, this.dragTag.position = cc.v3(this.tile_p[h].x, this.tile_p[h].y));
        }
      };
      e.prototype.onTE = function(t) {
        if (this.isAllRight || this.is_hinting) return !0;
        this.tileSelect || 1 != this.scroll_dir || this.scrollView._onTouchEnded(t);
        this.putDragTile();
        this.idle_tile_select && (this.idle_tile_select.scale = 1.01, this.idle_tile_select = null);
      };
      e.prototype.onTC = function(t) {
        if (this.isAllRight || this.is_hinting) return !0;
        this.tileSelect || 1 != this.scroll_dir || this.scrollView._onTouchCancelled(t);
        this.putDragTile();
        this.idle_tile_select && (this.idle_tile_select.scale = 1.01, this.idle_tile_select = null);
      };
      e.prototype.putDragTile = function() {
        if (this.drag_tile) {
          var t = Number(this.drag_tile.name);
          this.dragTag.active = !1;
          var e = this.drag_tile;
          if (cc.tween(this.drag_tile).to(.15, {
            opacity: 0
          }).call(function() {
            e.destroy();
          }).start(), this.drag_tile = null, this.is_hinting = !1, this.idle_tile_select) {
            if (this.idle_tile_select.scale = 1.01, this.idle_tile_select.active = !0, this.idle_tile_select.opacity = 0, 
            cc.tween(this.idle_tile_select).to(.3, {
              opacity: 255
            }).start(), this.idle_tile_select = null, -1 == this.dragPutPosId) return;
            var o = this.getTileByPos(this.dragPutPosId);
            return o ? void (o.tile_id == this.dragPutPosId || (this.modJigTile(this.theme_id, o.tile_id, -1, !1), 
            this.delTile(this.dragPutPosId), this.modJigTile(this.theme_id, t, this.dragPutPosId), 
            this.cTile(t, this.dragPutPosId), this.RefreshIdleItems(!1, !0))) : (this.modJigTile(this.theme_id, t, this.dragPutPosId), 
            this.cTile(t, this.dragPutPosId), this.RefreshIdleItems(!1), void (t == this.dragPutPosId && this.checkAllR()));
          }
          if (this.tileSelect && (this.setTileVis(this.tileSelect, !0), this.tileSelect = null, 
          this.tilePosId != this.dragPutPosId)) {
            var n = this.getTileByPos(this.dragPutPosId);
            if (-1 == this.dragPutPosId || n && n.tile_id == this.dragPutPosId) return this.modJigTile(this.theme_id, t, -1), 
            this.delTile(this.tilePosId), void this.RefreshIdleItems(!1);
            if (n && n.tile_id != this.dragPutPosId) {
              var i = n.tile_id;
              this.modJigTile(this.theme_id, n.tile_id, -1, !1);
              this.delTile(this.dragPutPosId);
              this.modJigTile(this.theme_id, t, this.dragPutPosId, !1);
              this.moveTile(this.tilePosId, this.dragPutPosId, t);
              this.modJigTile(this.theme_id, i, this.tilePosId);
              this.cTile(i, this.tilePosId);
              return void this.checkAllR();
            }
            -1 != this.tilePosId && this.tilePosId != this.dragPutPosId && (this.modJigTile(this.theme_id, t, this.dragPutPosId), 
            this.moveTile(this.tilePosId, this.dragPutPosId, t), t == this.dragPutPosId && this.checkAllR());
          }
        }
      };
      e.prototype.OnBtnHint = function() {
        if (!(this.is_hinting || this.isAllRight || this.tileSelect || this.idle_tile_select)) {
          var t = this.tiles_idle.length > 0;
          if (!t) for (var e in this.tiles) {
            var o = this.tiles[e];
            if (o && Number(e) != o.tile_id) {
              t = !0;
              break;
            }
          }
          t ? _bagMgr["default"].ins.getItemCount("puzzle_notice") > 0 ? (_bagMgr["default"].ins.useItem("puzzle_notice"), 
          this._doHint()) : _panelMgr["default"].ins.open("ui/ui_getItem", {
            itemId: "puzzle_notice"
          }) : this.onBtnGet();
        }
      };
      e.prototype._doHint = function() {
        var t = this;
        for (var e in this.is_hinting = !1, this.tiles) if (l = this.tiles[e]) {
          var o = Number(e);
          if (o != l.tile_id) {
            this.tilePosId = o;
            this.tileSelect = l;
            this.dragPutPosId = l.tile_id;
            break;
          }
        }
        if (this.tileSelect) {
          this.drag_tile = this.cDragTile(this.tileSelect.tile_id);
          this.drag_tile.parent = this.node;
          this.setTileVis(this.tileSelect, !1);
          var n = this.tilesNode.convertToWorldSpaceAR(this.tile_p[this.tilePosId]);
          var i = this.node.convertToNodeSpaceAR(n);
          var r = this.tilesNode.convertToWorldSpaceAR(this.tile_p[this.dragPutPosId]);
          var a = this.node.convertToNodeSpaceAR(r);
          this.drag_tile.position = cc.v3(i.x, i.y);
          cc.tween(this.drag_tile).to(.5, {
            x: a.x,
            y: a.y
          }).call(function() {
            t.putDragTile();
          }).start();
          return void (this.is_hinting = !0);
        }
        for (var s = 0, c = this.tiles_idle; s < c.length; s++) {
          var l = c[s];
          this.idle_tile_select = l;
          var u = Number(l.name);
          this.dragPutPosId = u;
          this.drag_tile = this.cDragTile(u);
          this.drag_tile.parent = this.node;
          i = this.node.convertToNodeSpaceAR(l.convertToWorldSpaceAR(cc.Vec2.ZERO));
          l.active || (i.x = this.scrollView.node.parent.x, i.y = this.scrollView.node.parent.y);
          a = this.node.convertToNodeSpaceAR(this.tilesNode.convertToWorldSpaceAR(this.tile_p[this.dragPutPosId]));
          this.drag_tile.setPosition(i.x, i.y);
          cc.tween(this.drag_tile).to(.5, {
            x: a.x,
            y: a.y
          }).call(function() {
            t.putDragTile();
          }).start();
          this.is_hinting = !0;
          l.active = !1;
          break;
        }
      };
      e.prototype.getCanHint = function() {
        for (var t in this.tiles) {
          var e = this.tiles[t];
          if (e && Number(t) != e.tile_id) break;
        }
      };
      e.prototype.addTileShadow = function(t) {
        var e = new cc.Node();
        e.addComponent(cc.Sprite).spriteFrame = this.shadow0;
        e.position = cc.v3(0, -5);
        e.parent = t;
      };
      e.prototype.playTrueAni = function(t) {
        _festivalMgr["default"].ins.updPro(_festivalMgr.fesTaskKey.finishPuzzle, 1);
        _sound["default"].ins.play(_sound["default"].FINISH_PUZZLE);
        1 === this.themeType ? _idx.platform.reportEvent(_idx.ERepEvt.partJigsaw) : 2 === this.themeType && _idx.platform.reportEvent(_idx.ERepEvt.fesJigNum);
        var e = this.ringNode;
        var o = this.tilesNode.convertToWorldSpaceAR(t);
        var n = this.node.convertToNodeSpaceAR(o);
        e.active = !0;
        e.setPosition(n);
        e.parent = this.node;
        cc.tween(e).set({
          scale: .88,
          opacity: 255
        }).to(.2, {
          scale: 1.2,
          opacity: 0
        }).call(function() {
          e.active = !1;
        }).start();
      };
      e.prototype.checkAllR = function() {
        if (!this.isAllRight && (this.isAllRight = this.IsJigsawCompleted(this.theme_id), 
        this.isAllRight)) {
          this.tilesNode.active = !1;
          this.finImg.node.active = !0;
          this.finImg.node.opacity = 0;
          cc.tween(this.finImg.node).to(1, {
            opacity: 255
          }).start();
          this.scrollView.node.active = !1;
          this.menuNode.active = !1;
          this.lockNode.active = !1;
          this.btnReset.active = !0;
          this.bgNode.y = 326;
          this.bgNode.height = 790;
          var t = this.theme_id + "";
          _idx.platform.reportEvent(_idx.ERepEvt.finishHoleJigsaw, {
            idx: t
          });
          var e = void 0;
          1 === this.themeType ? e = _jigsawMgr["default"].ins : 2 === this.themeType && (e = _newJigMgr["default"].ins);
          e.setFinfishJigsaw(this.theme_id);
          _panelMgr["default"].ins.open("ui/ui_jigFinish", {
            themeId: this.theme_id,
            themeType: this.themeType
          });
        }
      };
      e.prototype.IsJigsawCompleted = function(t) {
        var e;
        1 === this.themeType ? e = _jigsawMgr["default"].ins : 2 === this.themeType && (e = _newJigMgr["default"].ins);
        var o = e.checkHasFin(t);
        if (o) return o;
        var n = e.getJigsawTilesByIdx(t);
        if (105 == n.length) {
          for (var i = 0, r = n; i < r.length; i++) {
            var a = r[i];
            if (a[0] != a[1]) return !1;
          }
          return !0;
        }
        return !1;
      };
      e.prototype.ShowGuide = function() {};
      e.prototype.reGuide = function() {
        this.guideF && (this.guideF.destroy(), this.guideF = null);
      };
      e.prototype.onBtnBg = function() {
        if (_bagMgr["default"].ins.getItemCount("puzzle_background") > 0) {
          _bagMgr["default"].ins.useItem("puzzle_background");
          var t = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
          this.showBgEndTime = this.defaultShowTime + t;
          1 === this.themeType ? _pInfo["default"].ins.setJigsawBgEndTimesByIdx(this.theme_id, this.showBgEndTime) : 2 === this.themeType && _pInfo["default"].ins.setNewJigBgEndTimesByIdx(this.theme_id, this.showBgEndTime);
          this.bgBtn.enabled = !1;
          this.finImg.node.active = !0;
          this.lockNode.active = !0;
          this.timeAd.active = !1;
          this.timeLb.node.active = !0;
          this.schedule(this.beginShow, 1);
        } else _panelMgr["default"].ins.open("ui/ui_getItem", {
          itemId: "puzzle_background"
        });
      };
      e.prototype.beginShow = function() {
        var t = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
        var e = this.showBgEndTime - t;
        if (e < 0) return this.finImg.node.active = !1, this.lockNode.active = !1, e = 30, 
        this.bgBtn.enabled = !0, this.timeLb.string = this.defaultShowTime + "s", this.timeLb.node.active = !1, 
        this.timeAd.active = !0, void this.unschedule(this.beginShow);
        this.timeLb.string = e + "s";
      };
      e.prototype.onBtnGet = function() {
        1 === this.themeType ? _panelMgr["default"].ins.open("ui/ui_getItem", {
          itemId: "puzzle_pieces"
        }) : 2 === this.themeType && _panelMgr["default"].ins.open("ui/ui_getItem", {
          itemId: "newYear_pieces"
        });
      };
      e.prototype.onBtnLb = function() {
        this.tileLbNode.active = !this.tileLbNode.active;
      };
      e.prototype.onBtnReset = function() {
        _panelMgr["default"].ins.open("ui/ui_jigTip", {
          okCb: this.resetItem.bind(this)
        });
      };
      e.prototype.resetItem = function() {
        var t;
        1 === this.themeType ? t = _jigsawMgr["default"].ins : 2 === this.themeType && (t = _newJigMgr["default"].ins);
        t.resetJigByIdx(this.theme_id);
        this.is_init || (this.initTilePos(), this.initAroundTiles(), this.is_init = !0);
        this.clearTiles();
        this.isAllRight = !1;
        this.tilesNode.active = !0;
        this.jigTiles = t.getJigsawTilesByIdx(this.theme_id);
        this.scrollView.content.removeAllChildren();
        this.tiles_idle.length = 0;
        this.RefreshIdleItems(!0);
        this.lockImg.node.active = !1;
        this.scrollView.node.active = !0;
        this.scrollView.node.parent.active = !0;
        this.menuNode.active = !0;
        this.lockNode.active = !1;
        this.btnReset.active = !1;
        this.finImg.node.active = !1;
        this.bgNode.y = 396;
        this.bgNode.height = 960;
        this.upItemNum();
      };
      e.prototype.clearTiles = function() {
        for (var t in this.tiles) this.delTile(t);
      };
      e.prototype.modJigTile = function(t, e, o, n) {
        if (void 0 === n && (n = !0), void 0 === n && (n = !0), !(e < 0 || e >= 105 || o < -1 || o >= 105)) {
          for (var i = this.jigTiles, r = 0, s = i; r < s.length; r++) if ((u = s[r])[1] == o && -1 != o) {
            o = -1;
            break;
          }
          for (var c = 0, l = i; c < l.length; c++) {
            var u;
            if ((u = l[c])[0] == e) {
              u[1] = o;
              break;
            }
          }
          if (n) {
            _evts["default"].opE.emit({
              action: _evts["default"].UPD_MAIN_RED
            });
            var p = void 0;
            1 === this.themeType ? p = _jigsawMgr["default"].ins : 2 === this.themeType && (p = _newJigMgr["default"].ins);
            p.setJigsawTilesByIdx(this.theme_id, this.jigTiles);
          }
        }
      };
      e.prototype.onDestroy = function() {
        _evts["default"].opE.off(this.eventFunc);
        this.eventFunc = null;
      };
      __decorate([ D(cc.Node) ], e.prototype, "ringNode", void 0);
      __decorate([ D(cc.Prefab) ], e.prototype, "tilePre", void 0);
      __decorate([ D(cc.SpriteFrame) ], e.prototype, "shadow0", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "tilesNode", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "menuNode", void 0);
      __decorate([ D(cc.ScrollView) ], e.prototype, "scrollView", void 0);
      __decorate([ D(cc.Sprite) ], e.prototype, "finImg", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "dragTag", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "lockNode", void 0);
      __decorate([ D(cc.Label) ], e.prototype, "timeLb", void 0);
      __decorate([ D(cc.Button) ], e.prototype, "bgBtn", void 0);
      __decorate([ D(cc.Label) ], e.prototype, "getLb", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "timeAd", void 0);
      __decorate([ D(cc.Sprite) ], e.prototype, "lockImg", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "tileLbNode", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "cellNode", void 0);
      __decorate([ D(cc.SpriteFrame) ], e.prototype, "cellSpr", void 0);
      __decorate([ D(cc.Label) ], e.prototype, "hintNum", void 0);
      __decorate([ D(cc.Label) ], e.prototype, "bgNum", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "bgNode", void 0);
      __decorate([ D(cc.Label) ], e.prototype, "tipLb", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "bgBtnNode", void 0);
      __decorate([ D(cc.Sprite) ], e.prototype, "getPieceSp", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "btnReset", void 0);
      return __decorate([ I ], e);
    }(cc.Component);
    exports["default"] = k;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    cfgMgr: "cfgMgr",
    evts: "evts",
    festivalMgr: "festivalMgr",
    global: "global",
    idx: "idx",
    jigsawMgr: "jigsawMgr",
    lang: "lang",
    loading: "loading",
    main: "main",
    newJigMgr: "newJigMgr",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    res: "res",
    sound: "sound",
    time: "time",
    vb: "vb"
  } ],
  lang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ed20QixH9CRaDPmF/iPEsw", "lang");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.getCoinFor = exports.gemeTypeKey = exports.reportKey = exports.lang = void 0;
    exports.lang = {
      1e4: "\u6682\u65e0\u89c6\u9891",
      10001: "\u5143\u5b9d\u4e0d\u8db3",
      10002: "\u4f53\u529b\u4e0d\u8db3",
      10003: "\u5165\u573a\u5238\u4e0d\u8db3",
      10004: "\u6682\u672a\u5f00\u653e",
      10005: "\u6ca1\u6709\u53ef\u5220\u9664\u7684\u90ae\u4ef6",
      10006: "\u6ca1\u6709\u53ef\u9886\u53d6\u7684\u5956\u52b1",
      10007: "\u611f\u8c22\u60a8\u7684\u53cd\u9988",
      10008: "\u8bf7\u8f93\u5165\u53cd\u9988\u5185\u5bb9",
      10009: "\u4eca\u65e5\u5df2\u8fbe\u4e0a\u9650,\u8bf7\u6ce8\u610f\u4f11\u606f",
      task_1: "\u9053\u5177\u793c\u5305",
      task_2: "\u5143\u5b9d\u793c\u5305",
      task_3: "\u5b8c\u62101\u5173\u79ef\u5206\u8d5b\u5173\u5361",
      task_4: "\u518d\u5b8c\u621010\u5173\u79ef\u5206\u8d5b\u5173\u5361",
      task_5: "\u901a\u5173\u6bcf\u65e5\u6311\u6218",
      task_6: "\u5b8c\u62105\u5c40\u8da3\u5473\u8d5b",
      task_7: "\u5206\u4eab2\u4f4d\u597d\u53cb,\u83b7\u53d6\u8da3\u5473\u8d5b\u5165\u573a\u5238",
      30001: "\u8da3\u5473\u8d5b\u79ef\u5206\u6700\u9ad8\u8fbe{0}\u89e3\u9501",
      40001: "\u901a\u5173\u901f\u5ea6\u8d85\u8fc7\u5168\u56fd{0}%\u7684\u4eba\uff01",
      40002: "\u60a8\u7684\u8fde\u80dc\u6b21\u6570\u5df2\u8fbe{0}\u6b21",
      40003: "\u672c\u7ec4\u6392\u540d"
    };
    exports.reportKey = {
      qw_line_ticket: "\u8da3\u5473\u8d5b\u6311\u6218\u5238",
      notice: "\u94f2\u5b50",
      random_notice: "\u70df\u82b1",
      full_row_col: "\u9489\u8019",
      puzzle_pieces: "\u62fc\u56fe\u788e\u7247",
      newYear_pieces: "\u65b0\u5e74\u62fc\u56fe\u788e\u7247",
      puzzle_notice: "\u62fc\u56fe\u63d0\u793a",
      puzzle_background: "\u62fc\u56fe\u80cc\u666f"
    };
    exports.gemeTypeKey = {
      0: "\u4e3b\u7ebf",
      1: "\u62d3\u5c55\u73a9\u6cd5-\u866b\u5b50",
      2: "\u8da3\u5473\u8d5b",
      3: "\u6bcf\u65e5\u6311\u6218",
      4: "\u7ec3\u4e60\u6a21\u5f0f",
      5: "\u62fc\u56fe",
      6: "\u6d3b\u52a8"
    };
    (function(t) {
      t.Main = "\u9996\u9875", t.Item = "\u9053\u5177", t.Rebirth = "\u590d\u6d3b";
    })(exports.getCoinFor || (exports.getCoinFor = {}));
    cc._RF.pop();
  }, {} ],
  levelItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2980049qItDablK/zeCxVwI", "levelItem");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = a.property;
    var l = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.sp = null;
        e.lvlLbl = null;
        return e;
      }
      __extends(e, t);
      e.prototype.setLvlLbl = function(t) {
        var e = 0;
        if (1 == t.length) -1 != t.indexOf("1") && (e = -2); else for (var o = 0, n = t; o < n.length; o++) "1" == n[o] && e--;
        this.lvlLbl.string = t;
        this.lvlLbl.node.x = e;
      };
      __decorate([ c(cc.Sprite) ], e.prototype, "sp", void 0);
      __decorate([ c(cc.Label) ], e.prototype, "lvlLbl", void 0);
      return __decorate([ s ], e);
    }(cc.Component);
    exports["default"] = l;
    cc._RF.pop();
  }, {} ],
  levelMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "14951A6fINDx7WHHNNcam8b", "levelMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _res = require("res");
    var _uData = require("uData");
    var _cfgMgr = require("cfgMgr");
    var _global = require("global");
    var _pInfo = require("pInfo");
    var d = cc._decorator;
    var h = d.ccclass;
    var f = (d.property, function() {
      function t() {
        this._bgId = 0;
        this.oneChapLvlCount = 54;
      }
      var e;
      e = t;
      Object.defineProperty(t, "ins", {
        get: function get() {
          return this._ins || (this._ins = new e());
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.getBgId = function() {
        return 0;
      };
      t.prototype.init = function() {
        return Promise.all([ this.updateData(), this.updatePracticeData() ]);
      };
      t.prototype.updateData = function() {
        var t = this;
        var e = _pInfo["default"].ins.getPuzzleLvl();
        var o = Math.ceil(e / this.oneChapLvlCount);
        if (o != this.bundleId) {
          this.bundleId = o;
          this.bundle && (this.bundle.releaseAll(), _uData["default"].ins._setLocalAndCloudData());
          var n = Math.floor((e - 1) / 54 % 4);
          (isNaN(n) || n < 0 || n > 3) && (n = 0);
          this._bgId = n;
          cc.assetManager.loadBundle("resSps", function(t, e) {
            var o = _global["default"].padScale ? "ipad/" : "";
            !t && e.load("pages/page_level/" + o + "bg" + n, cc.SpriteFrame);
          });
          var i = this.bundleName = 100 + this.bundleId + "";
          return new Promise(function(e, n) {
            var r = function r() {
              cc.assetManager.loadBundle(i, function(o, i) {
                o ? n() : (t.bundle = i, i.load("data", cc.BufferAsset, function(o, i) {
                  o && n();
                  t.data = new Uint32Array(i._buffer);
                  e(1);
                }));
              });
            };
            o > 18 ? cc.assetManager.loadRemote(_global.OssConfig.levelUrl + i + "/data.bin", cc.BufferAsset, function(n, a) {
              n ? t.data || (i = 101 + (o - 1) % 18 + "", r()) : (t.data = new Uint32Array(a._buffer), 
              e(1));
            }) : r();
          });
        }
      };
      t.prototype.updatePracticeData = function() {
        var t = this;
        return new Promise(function(e, o) {
          cc.assetManager.loadBundle("practice", function(n, i) {
            n ? o() : (i.load("data", cc.BufferAsset, function(e, n) {
              e && o();
              t.practiceData = new Uint32Array(n._buffer);
            }), e(i));
          });
        });
      };
      t.prototype.updateTmpData = function(t) {
        var e = this;
        this.tmpBundleId = t;
        var o = this.tmpBundleName = 100 + t + "";
        return new Promise(function(n, i) {
          var r = function r() {
            cc.assetManager.loadBundle(o, function(t, o) {
              t ? i() : (e.tmpBundle = o, o.load("data", cc.BufferAsset, function(t, o) {
                t && i();
                e.tmpData = new Uint32Array(o._buffer);
                n(1);
              }));
            });
          };
          t > 18 ? cc.assetManager.loadRemote(_global.OssConfig.levelUrl + o + "/data.bin", cc.BufferAsset, function(i, a) {
            i ? e.tmpData || (o = 101 + (t - 1) % 18 + "", r()) : (e.tmpData = new Uint32Array(a._buffer), 
            n(1));
          }) : r();
        });
      };
      t.prototype.getPracticeData = function() {
        var t = this;
        this.practiceData || _res["default"].ins.getBundleByString("practice").then(function(e) {
          var o = e.get("data", cc.BufferAsset);
          t.practiceData = new Uint32Array(o._buffer);
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('practice')", t);
        });
        return this.practiceData;
      };
      t.prototype.getPracticeId = function() {
        this.practiceId ? (this.practiceId++, this.practiceId > this.getPuzzleLvlCount(!0) && (this.practiceId = 2)) : this.practiceId = 2;
        return this.practiceId;
      };
      t.prototype.clearPrcitceId = function() {
        this.practiceId = null;
      };
      t.prototype.getPuzzleSprFrame = function(t) {
        var e = this;
        return new Promise(function(o, n) {
          var i = t;
          var r = (i - 1) % e.oneChapLvlCount + 1 + "";
          i > 972 ? cc.assetManager.loadRemote(_global.OssConfig.levelUrl + (100 + e.bundleId + "/") + r + ".png", cc.SpriteFrame, function(t, e) {
            t ? n() : o(new cc.SpriteFrame(e));
          }) : e.bundle.load(r, cc.SpriteFrame, function(t, e) {
            t ? n() : o(e);
          });
        });
      };
      t.prototype.getPracitceSprfFrame = function(t) {
        return new Promise(function(e, o) {
          _res["default"].ins.getBundleByString("practice").then(function(n) {
            n.load(t + "", cc.SpriteFrame, function(t, n) {
              t ? o() : e(n);
            });
          })["catch"](function(t) {
            console.error("RTool.ins.getBundleByString('resSps')", t);
          });
        });
      };
      t.prototype.getPuzzleDiff = function() {
        return this.getPuzzleInfo().diff;
      };
      t.prototype.getPuzzleLvlCount = function(t) {
        return t ? this.getPracticeData()[1] : this.oneChapLvlCount;
      };
      t.prototype.getPuzzleInfo = function(t, e) {
        var o = t ? this.getPracticeData() : this.data;
        var n = o[0];
        var i = o[1];
        var r = t && e ? e - 1 : (_pInfo["default"].ins.getPuzzleLvl() - 1) % this.oneChapLvlCount;
        var a = o[2 + i + (0 == r ? 0 : o[2 + r - 1] + r)];
        return {
          id: r,
          type: n,
          size: 255 & a,
          diff: a >> 8 & 255
        };
      };
      t.prototype.getPuzzleData = function(t, e) {
        for (var o = t ? this.getPracticeData() : this.data, n = o[1], i = t && e ? e - 1 : (_pInfo["default"].ins.getPuzzleLvl() - 1) % this.oneChapLvlCount, r = 0 == i ? 0 : o[2 + i - 1] + i, a = o[2 + i] + i, s = o[2 + n + r], c = Math.pow(255 & s, 2), l = 2 + n + a + 1, u = [], d = 0, h = 2 + n + r + 1; h < l; h++) {
          for (var f = o[h], g = 0; g < 32; g++) {
            var y = 1 << g & 4294967295;
            if (u[d++] = (f & y) == y ? 1 : 0, d == c) break;
          }
          if (d == c) break;
        }
        return u;
      };
      Object.defineProperty(t.prototype, "levelBundle", {
        get: function get() {
          return this.bundle;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.getJigsawIcon = function(t, e) {
        var o = this;
        void 0 === e && (e = this.bundleName);
        return new Promise(function(n, i) {
          e > "118" ? cc.assetManager.loadRemote(_global.OssConfig.chapterUrl + (e + "/") + t + ".jpg", cc.SpriteFrame, function(t, e) {
            t ? i() : (e.packable = !1, n(new cc.SpriteFrame(e)));
          }) : o.getchapterBunder().then(function(o) {
            o.load(e + "/" + t, cc.SpriteFrame, function(t, e) {
              t ? i() : n(e);
            });
          })["catch"](function(t) {
            console.error("getchapterBunderErr", t);
          });
        });
      };
      t.prototype.releaseJigsawIcon = function(t, e) {
        if (void 0 === e && (e = this.bundleName), !(e > "118")) {
          var o = cc.assetManager.getBundle("chapter");
          if (o) {
            var n = o.get(e + "/" + t, cc.SpriteFrame);
            n && cc.assetManager.releaseAsset(n);
          }
        }
      };
      t.prototype.updateJigsaw = function(t) {
        setTimeout(function() {
          _evts["default"].opE.emit({
            action: _evts["default"].UPDJIGSAW
          });
        }, t);
      };
      t.prototype.updJigAndPop = function(t) {
        setTimeout(function() {
          _evts["default"].opE.emit({
            action: _evts["default"].FINISH_PUZZLELV
          });
        }, t);
      };
      t.prototype.popFestival = function(t) {
        setTimeout(function() {
          _evts["default"].opE.emit({
            action: _evts["default"].POP_FESTIVAL
          });
        }, t);
      };
      t.prototype.getchapterBunder = function() {
        return __awaiter(this, void 0, void 0, function() {
          var t;
          return __generator(this, function(e) {
            switch (e.label) {
             case 0:
              return (t = cc.assetManager.getBundle("chapter")) ? [ 3, 2 ] : [ 4, new Promise(function(t, e) {
                cc.assetManager.loadBundle("chapter", function(o, n) {
                  o ? e() : t(n);
                });
              }) ];

             case 1:
              return [ 2, e.sent() ];

             case 2:
              return [ 2, t ];
            }
          });
        });
      };
      t.prototype.getLevelCost = function() {
        var t = e.ins.getPuzzleDiff();
        var o = _cfgMgr["default"].serverCfg.difficulty_rules.rules;
        var n = 10;
        var i = 1;
        for (var r in o) {
          var a = o[r];
          if (n = Number(a.times_val), i === t) break;
          i++;
        }
        return n;
      };
      t.prototype.getLevelDiffStr = function() {
        var t = e.ins.getPuzzleDiff();
        var o = _cfgMgr["default"].serverCfg.difficulty_rules.rules;
        var n = "\u5165\u95e8\u96be\u5ea6";
        var i = 1;
        for (var r in o) {
          if (n = o[r].title, i === t) break;
          i++;
        }
        return n.slice(0, -2);
      };
      return e = __decorate([ h ], t);
    }());
    exports["default"] = f;
    cc._RF.pop();
  }, {
    cfgMgr: "cfgMgr",
    evts: "evts",
    global: "global",
    pInfo: "pInfo",
    res: "res",
    uData: "uData"
  } ],
  loadingAni: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d72c1FxE5EP6uGCDaZ+H5L", "loadingAni");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a;
    var s = cc._decorator;
    var c = s.ccclass;
    var l = s.property;
    (function(t) {
      t.to = "loadingTo";
      t.back = "loadingBack";
    })(a || (a = {}));
    var u = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.bg = null;
        e.ani = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        this.ani.on(cc.Animation.EventType.FINISHED, this.playEnd, this);
      };
      e.prototype.playEnd = function(t, e) {
        var o = this;
        if (e.name == a.to) cc.director.loadScene(this.newRoot, function() {
          o.playBack();
          o.cb && o.cb();
        }); else {
          var n = this.node;
          cc.game.removePersistRootNode(n);
          n.destroy();
        }
      };
      e.prototype.playTo = function(t, e, o, n) {
        this.bg.setContentSize(t, e);
        this.newRoot = o;
        this.cb = n;
        this.ani.play(a.to);
      };
      e.prototype.playBack = function() {
        this.ani.play(a.back);
      };
      __decorate([ l(cc.Node) ], e.prototype, "bg", void 0);
      __decorate([ l(cc.Animation) ], e.prototype, "ani", void 0);
      return __decorate([ c ], e);
    }(cc.Component);
    exports["default"] = u;
    cc._RF.pop();
  }, {} ],
  loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8c8e4zCZnxPrIZ17IRm3EJP", "loading");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.DEFAULTFONT = void 0;
    var _errorCode = require("errorCode");
    var _idx = require("idx");
    var _pConst = require("pConst");
    var _request = require("request");
    var _res = require("res");
    var _time = require("time");
    var _uData = require("uData");
    var _cfgMgr = require("cfgMgr");
    var _global = require("global");
    var _bagMgr = require("bagMgr");
    var _challengeMgr = require("challengeMgr");
    var _levelMgr = require("levelMgr");
    var _mailMgr = require("mailMgr");
    var _skinMgr = require("skinMgr");
    var _taskMgr = require("taskMgr");
    var _pInfo = require("pInfo");
    var I = cc._decorator;
    var D = I.ccclass;
    var P = I.property;
    cc.macro.ENABLE_MULTI_TOUCH = !1;
    cc.assetManager.downloader.maxConcurrency = 1e3;
    cc.assetManager.downloader.maxRequestsPerFrame = 1e3;
    var k = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.bg = null;
        e.bg2 = null;
        e.logo = null;
        e.pro = null;
        e.loginNode = null;
        e.rDown = null;
        e.tip = null;
        e.proLbl = null;
        e.info = null;
        e.isFail = !1;
        e.curPro = 0;
        e.retryTime = 1;
        e.stateStr = "\u52a0\u8f7d\u4e2d";
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        return __awaiter(this, void 0, void 0, function() {
          var t;
          var e;
          var o;
          var n;
          var i;
          var r;
          var a;
          var c;
          return __generator(this, function(s) {
            switch (s.label) {
             case 0:
              return _global["default"].isReStore ? (_idx.platform.reportEvent(_idx.ERepEvt.reSetData), 
              [ 2 ]) : (_idx.platform.reportEvent(_idx.ERepEvt.applaunchShow), t = cc.view.getVisibleSize(), 
              e = t.width, o = t.height, n = o / e, cc.sys.IPAD == cc.sys.platform && _idx.platform.string() == _pConst.PFCode.Bytedance || n < 1.78 && (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_HEIGHT), 
              i = cc.view.getVisibleSize(), r = i.width, a = i.height, n = _global["default"].padScale = a / r, 
              (c = new cc.Node("bg2")).color = new cc.Color(80, 80, 80), c.scale = n, this.node.addChild(c), 
              c.setSiblingIndex(0), this.bg2 = c.addComponent(cc.Sprite)), [ 4, _cfgMgr["default"].init() ]);

             case 1:
              return s.sent(), _idx.platform.init(), [ 2 ];
            }
          });
        });
      };
      e.prototype.start = function() {
        return __awaiter(this, void 0, void 0, function() {
          var t;
          var e = this;
          return __generator(this, function(n) {
            switch (n.label) {
             case 0:
              return [ 4, _res["default"].ins.lSF("bg/bg", this.bg) ];

             case 1:
              return t = n.sent(), this.bg2 && t && (this.bg2.spriteFrame = t), this.loadOther(), 
              _global["default"].isReStore ? [ 3, 3 ] : [ 4, Promise.all([ this.checkSession().then(function() {
                return e.preLogin();
              }).then(function() {
                e.updatePro(10);
              }), this.getPrivacy(), this.getOSSConfig(), this.loadFont().then(function(t) {
                e.updatePro(40);
                exports.DEFAULTFONT = t;
              }) ])["catch"](function() {}) ];

             case 2:
              return n.sent(), [ 3, 5 ];

             case 3:
              return [ 4, Promise.all([ this.loadFont().then(function(t) {
                e.updatePro(25);
                exports.DEFAULTFONT = t;
              }), this.restore().then(function() {
                e.updatePro(25);
              }) ]) ];

             case 4:
              n.sent(), n.label = 5;

             case 5:
              return [ 4, Promise.all([ this.preloadScene(), _levelMgr["default"].ins.init() ])["catch"](function() {}) ];

             case 6:
              return n.sent(), this.isFail ? (this.isFail = !1, this.scheduleOnce(this.start, 1), 
              [ 2 ]) : (this.etr(), [ 2 ]);
            }
          });
        });
      };
      e.prototype.loadOther = function() {
        var t = this;
        var e = cc.resources;
        e.load("bg/logo_rc", cc.SpriteFrame, function(e, o) {
          var n = t.logo.node;
          !e && n.isValid && (t.logo.spriteFrame = o);
        });
        e.load("bg/rDown", cc.SpriteFrame, function(e, o) {
          !e && t.node && t.node.isValid && (t.rDown.spriteFrame = o);
        });
      };
      e.prototype.getOSSConfig = function() {
        return new Promise(function(t) {
          _global["default"].chapterCount = 18;
          _global["default"].jisawCount = 40;
          t(1);
        });
      };
      e.prototype.getPrivacy = function() {
        var t = this;
        return new Promise(function(e) {
          _idx.platform.string() == _pConst.PFCode.Wechat || _idx.platform.isQQ || _idx.platform.string() == _pConst.PFCode.Alipay ? (t.info.active = !0, 
          _idx.platform.requirePrivacyAuthorize ? _idx.platform.requirePrivacyAuthorize({
            complete: function complete() {
              e(1);
            }
          }) : e(1)) : e(1);
        });
      };
      e.prototype.checkSession = function() {
        if (_idx.platform.isNative && !_idx.platform.isLogin) {
          var t;
          _idx.platform.clearStorage();
          var e = new Promise(function(e) {
            t = e;
          });
          var o = this.loginNode;
          o.active = !0;
          var n = o.addComponent(cc.Button);
          n.transition = cc.Button.Transition.SCALE;
          n.zoomScale = .9;
          n.node.on("click", function() {
            _idx.platform.showLogin(t);
          }, this);
          return e;
        }
        return Promise.resolve();
      };
      e.prototype.preLogin = function(t) {
        var e = this;
        this.loginNode.active = !1;
        this.pro.node.active = this.tip.node.active = this.proLbl.node.active = !0;
        return new Promise(function(o) {
          _global["default"].isReStore ? (_idx.platform.initCloud && _idx.platform.initCloud() || Promise.resolve()).then(function(t) {
            _time["default"].ins.sync(t);
          }).then(function() {
            e.loginFinally();
            o(1);
          }) : null != _idx.platform.getStorage("localData") || t ? (console.log("\u5f02\u6b65login"), 
          (_idx.platform.initCloud && _idx.platform.initCloud() || Promise.resolve()).then(function(t) {
            _time["default"].ins.sync(t);
            return _idx.platform.getCloudData && _idx.platform.getCloudData() || Promise.resolve();
          }).then(function(t) {
            _uData["default"].ins.onLogin(t);
            e.loginFinally();
            e.login().then(function() {
              return e.loginFinally;
            })["catch"](function(t) {
              return console.error(t);
            });
            o(1);
          })) : (console.log("\u540c\u6b65login"), e.isSync = !0, e.login().then(function() {
            o(1);
          })["catch"](function(t) {
            return console.error(t);
          }));
        });
      };
      e.prototype.restore = function() {
        var t = this;
        return new Promise(function(e) {
          (_idx.platform.initCloud && _idx.platform.initCloud() || Promise.resolve()).then(function(t) {
            _time["default"].ins.sync(t);
          }).then(function() {
            t.loginFinally();
            e(1);
          });
        });
      };
      e.prototype.login = function() {
        var t;
        var e;
        var o = this;
        var n = new Promise(function(o, n) {
          t = o;
          e = n;
        });
        _idx.platform.login(this.retryTime).then(function(t) {
          var e = t.code;
          var o = t.anonymous_code;
          var n = t.openid;
          var i = t.unionid;
          return Promise.resolve({
            status: 1,
            msg: "\u767b\u5f55\u6210\u529f",
            data: {
              id: 6082641,
              company_id: 8,
              status: 1,
              nickname: "\u5377\u5377\u5927\u738b",
              avatar: null,
              reg_time: 1711775814e3,
              platform: "DEV",
              app_name: "DEV",
              from_game_uid: 0,
              game_id: 10001,
              login_times: 2535,
              openid: "dev_ceshi",
              unionid: null,
              last_login_time: 1712485967e3,
              anonymous_openid: null,
              area_code: null,
              mobile: null,
              appid: "dev_nonogram",
              qf_game_uid: null,
              qf_gamer_token: null,
              is_new_user: 0,
              game_uid: 6082641,
              token: "7d88dab3d09a3529353f2eeba4256732483fffc1",
              code: "dev_ceshi",
              session_key: "dev_sk_66127689dfb0e",
              launch_options: {
                scene: 0,
                query: []
              },
              system_info: null
            },
            code: 1,
            server_time: Date.now()
          });
        }).then(function(e) {
          return __awaiter(o, void 0, void 0, function() {
            var o;
            var n;
            var i;
            var r;
            var d;
            var y;
            var v;
            var _;
            var w;
            var S;
            var I;
            var D;
            var P;
            var k;
            var R;
            var N;
            var C;
            var O = this;
            return __generator(this, function(M) {
              switch (M.label) {
               case 0:
                if (0 == e.state) throw _errorCode.errorCode.LOGIN_STATE_ERR;
                if (_idx.platform.hideLoading(), console.log("login\u6210\u529f"), o = _request["default"].ins, 
                n = _uData["default"].ins, i = e.data, _time["default"].ins.sync(e.server_time), 
                o.userToken = i && i.token, o.openId = i && i.openid, r = n.syncLoginData(i), d = r[0], 
                y = r[1], v = function v() {
                  return __awaiter(O, void 0, void 0, function() {
                    var e;
                    var n;
                    return __generator(this, function(i) {
                      switch (i.label) {
                       case 0:
                        return cc.resources.load("game_init_config", function(err, json) {
                          var t = json.json;
                          _cfgMgr["default"].syncServerCfg(t.data);
                          _bagMgr["default"].ins.initBag(!d && y);
                          _bagMgr["default"].ins.initBag(!d && y);
                        }), e = _pInfo["default"].ins.getAliAddHome(), _idx.platform.string() === _pConst.PFCode.Alipay && e ? [ 4, null === (n = _idx.platform.checkDesktopExist) || void 0 === n ? void 0 : n.call(_idx.platform) ] : [ 3, 2 ];

                       case 1:
                        i.sent(), i.label = 2;

                       case 2:
                        return _mailMgr["default"].ins.getMail(null), this.loginFinally(), t(1), [ 2 ];
                      }
                    });
                  });
                }, !d || !y) return [ 3, 7 ];
                _ = void 0, w = void 0, M.label = 1;

               case 1:
                return M.trys.push([ 1, 3, , 4 ]), [ 4, Promise.resolve() ];

               case 2:
                return (I = M.sent()) && (_ = JSON.parse(I.data[0].user_data) || {}), [ 3, 4 ];

               case 3:
                return M.sent(), [ 3, 4 ];

               case 4:
                return _idx.platform.getCloudData ? [ 4, _idx.platform.getCloudData() ] : [ 3, 6 ];

               case 5:
                w = M.sent(), M.label = 6;

               case 6:
                if (D = (null == _ ? void 0 : _.puzzleLvl) || 0, P = (null === (N = null == _ ? void 0 : _.bag) || void 0 === N ? void 0 : N.puzzle_pieces) || 0, 
                k = (null == w ? void 0 : w.puzzleLvl) || 0, R = (null === (C = null == w ? void 0 : w.bag) || void 0 === C ? void 0 : C.puzzle_pieces) || 0, 
                !(S = D > k || P > R || !w ? _ : w)) throw _errorCode.errorCode.CANGET_DATE_ERR;
                return n.onLogin(S), v(), [ 3, 8 ];

               case 7:
                n.onLogin(), v(), M.label = 8;

               case 8:
                return [ 2 ];
              }
            });
          });
        })["catch"](function(t) {});
        return n;
      };
      e.prototype.loginFinally = function() {
        _taskMgr["default"].initTask();
        _challengeMgr["default"].ins.initNowMonthData();
        _skinMgr["default"].ins.init();
        this.sceneName = _pInfo["default"].ins.getGuideDone() ? _pInfo.sceneType.main : _pInfo.sceneType.guide;
      };
      e.prototype.loadFont = function() {
        return new Promise(function(t, e) {
          cc.resources.load("font/font", cc.BitmapFont, function(o, n) {
            o ? e(o) : t(n);
          });
        });
      };
      e.prototype.preLoadGuide = function() {
        cc.director.preloadScene(_pInfo.sceneType.guide);
      };
      e.prototype.preloadScene = function() {
        var t = this;
        this.stateStr = "\u6b63\u5728\u8fdb\u5165\u6e38\u620f";
        return new Promise(function(e, o) {
          cc.Tween.stopAllByTag(886);
          var n = 100 - t.curPro;
          cc.director.preloadScene(t.sceneName, function(e, o) {
            t.updatePro2(t.curPro + e / o * n);
          }, function(t) {
            t ? o(t) : e(1);
          });
        });
      };
      e.prototype.updatePro = function(t) {
        this.curPro += t;
        cc.Tween.stopAllByTag(886);
        cc.tween(this.pro).tag(886).to(.1, {
          progress: this.curPro / 100
        }).start();
      };
      e.prototype.updatePro2 = function(t) {
        this.pro.progress = t / 100;
      };
      e.prototype.update = function() {
        this.proLbl.string = this.stateStr + " (" + Math.ceil(100 * this.pro.progress) + "%)";
      };
      e.prototype.etr = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            _global["default"].isReStore = null;
            _idx.platform.hideLoading();
            _pInfo.chgScene(this.sceneName, {
              noAni: !0,
              cb: function cb() {
                cc.assetManager.loadBundle("sound");
                cc.assetManager.loadBundle("resSps");
                cc.assetManager.loadBundle("prefab", function(t, e) {
                  t || _pInfo["default"].ins.isOpenLock && e.preload("prefab/page_race");
                });
                cc.resources.release("bg/bg", cc.SpriteFrame);
                cc.resources.release("bg/logo", cc.SpriteFrame);
                cc.resources.release("bg/down", cc.SpriteFrame);
                cc.resources.release("bg/rDown", cc.SpriteFrame);
                _idx.platform.reportEvent(_idx.ERepEvt.gameLoaded);
              }
            });
            return [ 2 ];
          });
        });
      };
      __decorate([ P(cc.Sprite) ], e.prototype, "bg", void 0);
      __decorate([ P(cc.Sprite) ], e.prototype, "logo", void 0);
      __decorate([ P(cc.ProgressBar) ], e.prototype, "pro", void 0);
      __decorate([ P(cc.Node) ], e.prototype, "loginNode", void 0);
      __decorate([ P(cc.Sprite) ], e.prototype, "rDown", void 0);
      __decorate([ P(cc.Label) ], e.prototype, "tip", void 0);
      __decorate([ P(cc.Label) ], e.prototype, "proLbl", void 0);
      __decorate([ P(cc.Node) ], e.prototype, "info", void 0);
      return __decorate([ D ], e);
    }(cc.Component);
    exports["default"] = k;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    cfgMgr: "cfgMgr",
    challengeMgr: "challengeMgr",
    errorCode: "errorCode",
    global: "global",
    idx: "idx",
    levelMgr: "levelMgr",
    mailMgr: "mailMgr",
    pConst: "pConst",
    pInfo: "pInfo",
    request: "request",
    res: "res",
    skinMgr: "skinMgr",
    taskMgr: "taskMgr",
    time: "time",
    uData: "uData"
  } ],
  mailItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df858t+SihDvZmIzPrVMWvv", "mailItem");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _time = require("time");
    var _mailMgr = require("mailMgr");
    var _panelMgr = require("panelMgr");
    var l = cc._decorator;
    var u = l.ccclass;
    var p = l.property;
    var d = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.title = null;
        e.content = null;
        e.leftT = null;
        e.goNode = null;
        e.mailSpf = [];
        e.newNode = null;
        e.qNode = null;
        e.rewardedNode = null;
        e.icon = null;
        e.timeBg = null;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t, e) {
        this.id = t;
        var o = _mailMgr["default"].ins.serverMail[t];
        if (o) {
          var n = o.title;
          n.length > 8 && (n = n.substring(0, 7) + "...");
          this.title.string = n;
          var i = o.msg;
          i.length > 9 && (i = i.substring(0, 8) + "...");
          this.content.string = i;
          this.temple = o;
          this.updateState(e);
          this.undateTime();
          this.schedule(this.undateTime, 1, cc.macro.REPEAT_FOREVER);
        }
      };
      e.prototype.updateState = function(t) {
        this.state = t;
        t == _mailMgr.mailState.award ? this.icon.spriteFrame = this.mailSpf[1] : this.icon.spriteFrame = this.mailSpf[0];
        this.rewardedNode.active = t == _mailMgr.mailState.award;
        this.newNode.active = t == _mailMgr.mailState.noRead;
      };
      e.prototype.onOperTap = function(t) {
        null == t || t.action;
      };
      e.prototype.undateTime = function() {
        if (this.temple.end_time) {
          var t = this.temple.end_time / 1e3 - _time["default"].ins.serverTime;
          t < 0 ? this.unschedule(this.undateTime) : (this.leftT.string = "\u5269\u4f59" + _time["default"].formatDate2Str(t), 
          this.leftT._forceUpdateRenderData(!0), this.timeBg.node.width = this.leftT.node.width + 20);
        }
      };
      e.prototype.onEnable = function() {
        this.goNode.on("click", this.showMailInfo, this);
      };
      e.prototype.onDisable = function() {
        this.goNode.off("click", this.showMailInfo, this);
        this.unschedule(this.undateTime);
      };
      e.prototype.showMailInfo = function() {
        _mailMgr["default"].ins.serverMail[this.id] && _panelMgr["default"].ins.open("ui/ui_mailInfo", {
          id: this.id
        });
      };
      __decorate([ p(cc.Label) ], e.prototype, "title", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "content", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "leftT", void 0);
      __decorate([ p(cc.Node) ], e.prototype, "goNode", void 0);
      __decorate([ p(cc.SpriteFrame) ], e.prototype, "mailSpf", void 0);
      __decorate([ p(cc.Node) ], e.prototype, "newNode", void 0);
      __decorate([ p(cc.Node) ], e.prototype, "qNode", void 0);
      __decorate([ p(cc.Node) ], e.prototype, "rewardedNode", void 0);
      __decorate([ p(cc.Sprite) ], e.prototype, "icon", void 0);
      __decorate([ p(cc.Sprite) ], e.prototype, "timeBg", void 0);
      return __decorate([ u ], e);
    }(cc.Component);
    exports["default"] = d;
    cc._RF.pop();
  }, {
    mailMgr: "mailMgr",
    panelMgr: "panelMgr",
    time: "time"
  } ],
  mailMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "77a46/RNnRPC5N1AjkZjR9U", "mailMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.mailState = void 0;
    var n;
    var _numberUtils = require("NumberUtils");
    var _evts = require("evts");
    var _request = require("request");
    var _time = require("time");
    var _pInfo = require("pInfo");
    var _bagMgr = require("bagMgr");
    var u = function() {
      function t() {
        if (this._mailInfo = {}, this._serverMail = {}, this.isGetting = !1, this.getCb = [], 
        t._ins) throw new Error("mailMgr can only be one\uff01");
        t._ins = this;
        this.initMail();
      }
      Object.defineProperty(t, "ins", {
        get: function get() {
          t._ins || new t();
          return t._ins;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.initMail = function() {
        this._mailInfo = _pInfo["default"].ins.Mail;
        this._mailInfo.mail || (this._mailInfo.mail = {});
        this._mailInfo.outMail || (this._mailInfo.outMail = []);
      };
      t.prototype.saveMail = function() {
        _pInfo["default"].ins.Mail = this._mailInfo;
      };
      Object.defineProperty(t.prototype, "mailInfo", {
        get: function get() {
          return this._mailInfo;
        },
        enumerable: !1,
        configurable: !0
      });
      Object.defineProperty(t.prototype, "serverMail", {
        get: function get() {
          return this._serverMail;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.getMail = function(t) {
        if (t && this.getCb.push(t), !this.isGetting) {
          var e = this;
          var o = function o(t) {
            e.getCb.length > 0 && e.getCb.forEach(function(e) {
              return e && e(t);
            });
            e.getCb = [];
            e.isGetting = !1;
          };
          e.isGetting = !0;
          var t = {
            status: 0,
            msg: "\u65e0\u90ae\u4ef6\u4fe1\u606f",
            code: 0,
            server_time: Date.now()
          };
          if (t && t.code && t.data) {
            var i;
            if (e.mailInfo.mail instanceof Array) i = e.mailInfo.mail, e.mailInfo.mail = {}; else if (Object.keys(e._mailInfo.mail).length !== t.data.length) {
              var r = new Set();
              var a = JSON.parse(JSON.stringify(e._mailInfo.mail));
              for (var c in JSON.parse(JSON.stringify(t.data)).forEach(function(t) {
                r.add(t.id);
              }), a) r.has(Number(c)) || delete e._mailInfo.mail[c];
            }
            t.data.forEach(function(t) {
              e._serverMail[t.id] = t;
              t.end_time < 1e3 * _time["default"].ins.serverTime ? e._mailInfo.outMail.indexOf(t.id) < 0 && e._mailInfo.outMail.push(t.id) : e.mailInfo.mail[t.id] || (i && i.indexOf(t.id) > -1 ? e.mailInfo.mail[t.id] = i[t.id] : e.mailInfo.mail[t.id] = n.noRead);
            });
          } else t && 0 === t.code && (e.mailInfo.mail = {});
          e.saveMail();
          o(e._serverMail);
        }
      };
      t.prototype.deleteMail = function(t) {
        if (void 0 === t && (t = null), t = _numberUtils["default"].parseNum(t)) return this._mailInfo.mail[t] && delete this._mailInfo.mail[t], 
        -1 == this._mailInfo.outMail.indexOf(t) && this._mailInfo.outMail.push(t), this.saveMail(), 
        !0;
        for (var e in this._mailInfo.mail) if (this._mailInfo.mail[e] === n.award) {
          var o = _numberUtils["default"].parseNum(e);
          -1 == this._mailInfo.outMail.indexOf(o) && this._mailInfo.outMail.push(o);
          this._mailInfo.mail[e] && delete this._mailInfo.mail[e];
        }
        this.saveMail();
        _evts["default"].opE.emit({
          action: _evts["default"].UPDMAIL,
          data: {
            type: "keyDelete"
          }
        });
        return !0;
      };
      t.prototype.getAward = function(t) {
        if (void 0 === t && (t = null), t) return this._mailInfo.mail[t] != n.award && (this._mailInfo.mail[t] = n.award, 
        this.addItem(t), this.saveMail(), !0);
        var e = !1;
        for (var o in this._mailInfo.mail) this._mailInfo.mail[o] !== n.award && (e || (e = !0), 
        this._mailInfo.mail[o] = n.award, this.addItem(o));
        e && this.saveMail();
        _evts["default"].opE.emit({
          action: _evts["default"].UPDMAIL,
          data: {
            type: "keyAward"
          }
        });
        return e;
      };
      t.prototype.readMail = function(t) {
        void 0 === t && (t = null);
        return !(!t || !this._mailInfo.mail[t] || this._mailInfo.mail[t] != n.award && (this._mailInfo.mail[t] != n.noRead || (this._mailInfo.mail[t] = n.read, 
        this.saveMail(), 0)));
      };
      t.prototype.addItem = function(t) {
        var e = this.serverMail;
        if (t) {
          if (!e[t]) return;
          for (var o = JSON.parse(e[t].props), n = Object.keys(o), i = 0; i < n.length; i++) {
            var r = n[i];
            if (o.hasOwnProperty(r)) {
              var a = i === n.length - 1;
              _bagMgr["default"].ins.addItem(r, o[r], !0, a);
            }
          }
        }
      };
      return t;
    }();
    exports["default"] = u;
    (function(t) {
      t[t.none = 0] = "none", t[t.noRead = 1] = "noRead", t[t.read = 2] = "read", t[t.award = 3] = "award";
    })(n = exports.mailState || (exports.mailState = {}));
    cc._RF.pop();
  }, {
    NumberUtils: "NumberUtils",
    bagMgr: "bagMgr",
    evts: "evts",
    pInfo: "pInfo",
    request: "request",
    time: "time"
  } ],
  main: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eeafcEk481Ax46HoxkVC6Oy", "main");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a;
    var _evts = require("evts");
    var _idx = require("idx");
    var _pConst = require("pConst");
    var _request = require("request");
    var _res = require("res");
    var _sound = require("sound");
    var _time = require("time");
    var _uData = require("uData");
    var _cfgMgr = require("cfgMgr");
    var _page_jigsaw = require("page_jigsaw");
    var _top = require("top");
    var _global = require("global");
    var _bagMgr = require("bagMgr");
    var _challengeMgr = require("challengeMgr");
    var _jigsawMgr = require("jigsawMgr");
    var _newJigMgr = require("newJigMgr");
    var _panelMgr = require("panelMgr");
    var _shopMgr = require("shopMgr");
    var _tipMgr = require("tipMgr");
    var _pInfo = require("pInfo");
    var k = cc._decorator;
    var R = k.ccclass;
    var N = k.property;
    (function(t) {
      t.bottomShowBtns = "bottomShowBtns";
      t.bottomHideBtns = "bottomHideBtns";
    })(a || (a = {}));
    var C = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.blockComp = null;
        e.pages = null;
        e.downNode = null;
        e.downAnis = [];
        e.top = null;
        e.lPfb = null;
        e.powerSp = null;
        e.camera = null;
        e.rankBtn1 = null;
        e.btnBgNode = null;
        e.curPageIdx = 2;
        e.viewPage = {};
        e.viewLPage = {};
        e.viewPageInd = [ "page_shop", "page_jigsaw", "page_level", "page_challenge", "page_race" ];
        e.canUseL = [];
        e.isAni = !1;
        e.redLbs = [];
        e.authorized = !1;
        e.isWx = !1;
        return e;
      }
      var o;
      __extends(e, t);
      o = e;
      e.prototype.onLoad = function() {
        _global["default"].padScale && (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_HEIGHT), 
        this.btnBgNode.scaleX = _global["default"].padScale);
        _sound["default"].ins.playBGM();
        this.viewPage.page_level = this.pages.getChildByName("page_level");
        (_pInfo["default"].ins.isMianLocked() || _global["default"].loadToRace) && (_pInfo["default"].ins.isMianLocked() && (_global["default"].loadToRace = 4), 
        this.viewPage.page_level.active = !1, this.chgPage(_global["default"].loadToRace));
        this.loadDown();
        _evts["default"].opE.on(this.onOperTap.bind(this));
        o.ins = this;
        this.upMainRed();
        this.isWx = _idx.platform.string() == _pConst.PFCode.Wechat;
        this.checkPopNewGift();
        this.checkPopPrivacy();
        _global["default"].loadCb || (this.checkSerPack(), _global["default"].loadCb = !0);
      };
      e.prototype.onDestroy = function() {
        this.hideWxBtns();
        o.ins = null;
        delete o.ins;
      };
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].MAINJUMP:
          this.jumpToPage(t.data, t.param);
          break;

         case _evts["default"].UPD_MAIN_RED:
          this.upMainRed();
          break;

         case _evts["default"].CHECK_WX_BTNS:
          this.checkGetUserInfo();
          break;

         case _evts["default"].HIDE_WX_BTNS:
          this.hideWxBtns();
        }
      };
      e.prototype.onEnable = function() {};
      e.prototype.onDisable = function() {};
      e.prototype.jumpToPage = function(t, e) {
        var o = this;
        if (!this.isAni) {
          var n = this.curPageIdx;
          if (n != t) {
            if (3 == t) return void _tipMgr["default"].ins.showTip("\u6682\u672a\u5f00\u653e");
            var i = this.downAnis;
            i[n].play(a.bottomHideBtns);
            i[t].play(a.bottomShowBtns);
            this.curPageIdx = t;
            cc.Tween.stopAllByTarget(this.pages);
            var r = t > n ? -1 : 1;
            var s = this.pages.x + cc.view.getVisibleSize().width * r;
            if (this.viewPage[this.viewPageInd[t]] || this.viewLPage[this.viewPageInd[t]]) this.viewPage[this.viewPageInd[t]].x = -s, 
            this.viewPage[this.viewPageInd[t]] && (this.viewPage[this.viewPageInd[t]].active = !0); else {
              var c = this.canUseL.shift();
              c || (c = cc.instantiate(this.lPfb));
              c.setPosition(-s, 0);
              this.pages.addChild(c, 100);
              this.loadPage(this.viewPageInd[t], function(e) {
                var n = cc.instantiate(e);
                o.viewPage[o.viewPageInd[t]] = n;
                !n.active && (n.active = !0);
                n.setPosition(-s, 0);
                o.pages.addChild(n);
                c.removeFromParent();
                o.canUseL.push(c);
              });
            }
            e && "festival" === e && this.viewPage[this.viewPageInd[t]] && this.viewPage[this.viewPageInd[t]].getComponent(_page_jigsaw["default"]).chgToFes();
            this.isAni = !0;
            cc.tween(this.pages).to(.5, {
              x: s
            }, {
              easing: this.customEaseInOut
            }).call(function() {
              o.viewPage[o.viewPageInd[n]] && (o.viewPage[o.viewPageInd[n]].active = !1);
              o.isAni = !1;
            }).start();
            var l = this.checkGetUserInfo();
            "page_level" == this.viewPageInd[t] ? l && this.setWxBtnShow1(!0) : "page_level" == this.viewPageInd[n] && (this.setWxBtnShow1(!1), 
            this.isAni = !0);
          }
        }
      };
      e.prototype.chgPage = function(t) {
        var e = this;
        if (!this.isAni) {
          var o = this.curPageIdx;
          if (o != t) {
            if (3 == t) return void _tipMgr["default"].ins.showTip("\u6682\u672a\u5f00\u653e");
            this.curPageIdx = t;
            var n = t > o ? -1 : 1;
            var i = this.pages.x + cc.view.getVisibleSize().width * n;
            if (this.viewPage[this.viewPageInd[t]] || this.viewLPage[this.viewPageInd[t]]) this.viewPage[this.viewPageInd[t]].x = -i, 
            this.viewPage[this.viewPageInd[t]] && (this.viewPage[this.viewPageInd[t]].active = !0); else {
              var r = this.canUseL.shift();
              r || (r = cc.instantiate(this.lPfb));
              r.setPosition(-i, 0);
              this.pages.addChild(r, 100);
              this.loadPage(this.viewPageInd[t], function(o) {
                var n = cc.instantiate(o);
                e.viewPage[e.viewPageInd[t]] = n;
                !n.active && (n.active = !0);
                n.setPosition(-i, 0);
                e.pages.addChild(n);
                r.removeFromParent();
                e.canUseL.push(r);
              });
            }
            this.pages.x = i;
            this.viewPage[this.viewPageInd[o]] && (this.viewPage[this.viewPageInd[o]].active = !1);
          }
        }
      };
      e.prototype.lockBtnState = function(t) {
        var e = this.downAnis;
        e[2].play(a.bottomHideBtns, .05);
        e[t].play(a.bottomShowBtns, .2);
      };
      e.prototype.customEaseInOut = function(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
      };
      e.prototype.loadDown = function() {
        var t = this;
        _res["default"].ins.getBundleByString("prefab").then(function(e) {
          var o = "prefab/down/";
          var n = [ "btn_quest", "btn_jigsaw", "btn_puzzle", "btn_chanllage", "btn_race" ];
          e.loadDir(o, cc.Prefab, function(i) {
            if (!i && t.node && t.node.isValid) {
              var r = cc.view.getVisibleSize().width / 5;
              var a = 2 * -r;
              var s = t.downNode;
              n.forEach(function(n, i) {
                var c = cc.instantiate(e.get(o + n, cc.Prefab));
                var l = cc.find("img/tip/num", c);
                t.redLbs.push(l.getComponent(cc.Label)), c.setPosition(a, 18), c.setParent(s), c.width = r, 
                a += r, t.downAnis.push(c.getComponent(cc.Animation)), c.on("click", function() {
                  t.jumpToPage(i);
                }, t), "btn_race" == n && (t.rankBtn2 = c);
              });
              t.createBtns();
              (_pInfo["default"].ins.isMianLocked() || _global["default"].loadToRace) && (_pInfo["default"].ins.isMianLocked() && (_global["default"].loadToRace = 4), 
              t.lockBtnState(_global["default"].loadToRace), _global["default"].loadToRace = 0);
              t.upMainRed();
            }
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
      };
      e.prototype.loadPage = function(t, e) {
        this.viewLPage[t] || (this.viewLPage[t] = !0, _res["default"].ins.lPre("prefab/" + t).then(function(t) {
          e && e(t);
        })["catch"](function() {
          console.error("getPrefabErr");
        }));
      };
      e.prototype.usePower = function(t, e, o) {
        if (!(t > 0)) {
          _pInfo["default"].ins.addPower(t);
          var n = this.powerSp;
          var i = n.node;
          var r = i.parent.convertToWorldSpaceAR(i.position);
          this.node.convertToNodeSpaceAR(r, r);
          var a = new cc.Node("flyPower");
          a.addComponent(cc.Sprite).spriteFrame = n.spriteFrame;
          a.setParent(this.node);
          this.node.convertToNodeSpaceAR(e, e);
          e.add(cc.v3(cc.winSize.width / 2, cc.winSize.height / 2));
          cc.tween(a).set({
            position: r,
            scale: .8
          }).parallel(cc.tween(a).by(.2, {
            scale: .2
          }).delay(.1).by(.2, {
            scale: -.2
          }), cc.tween(a).to(.5, {
            position: e
          })).call(function() {
            a.destroy();
            _global["default"].levelDone ? _pInfo.chgScene(_pInfo.sceneType.game, {
              gameType: _pInfo.gameType.freedom,
              freedomSize: o
            }) : _pInfo.chgScene(_pInfo.sceneType.game);
          }).start();
        }
      };
      e.prototype.getWorldPointByTouch = function(t) {
        var e = cc.Vec2.ZERO;
        this.camera.getScreenToWorldPoint(t.getLocation(), e);
        return e;
      };
      e.prototype.upMainRed = function() {
        var t;
        var e;
        var o = _jigsawMgr["default"].ins.getUnPlacedNum() + _newJigMgr["default"].ins.getUnPlacedNum();
        var n = this.redLbs[1];
        if (n) if (o > 0) {
          var i = o > 99 ? "99+" : o + "";
          n.node.parent.active = !0;
          n.string = i + "";
          n.node.x = _global["default"].getCharXOffset(n.string);
        } else n.node.parent.active = !1;
        var r = _bagMgr["default"].ins.getItemCount("qw_line_ticket");
        var a = this.redLbs[4];
        a && (r > 0 ? (a.node.parent.active = !0, a.string = r + "", a.node.x = _global["default"].getCharXOffset(a.string)) : a.node.parent.active = !1);
        var s = (null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.daily_challenge) || void 0 === e ? void 0 : e.open) || 50;
        _pInfo["default"].ins.getPuzzleLvl() > s && (_challengeMgr["default"].ins.getTodayIsFin(), 
        _challengeMgr["default"].ins.getAllMonthRed());
        var c = _shopMgr["default"].ins.getAllRed();
        var l = this.redLbs[0];
        l && (c > 0 ? (l.node.parent.active = !0, l.string = c + "") : l.node.parent.active = !1);
      };
      e.prototype.checkPopNewGift = function() {
        _global["default"].twoDaysLeft && (_global["default"].twoDaysLeft = !1, _panelMgr["default"].ins.open("ui/ui_backReward", null).then(function() {
          _global["default"].isPopNewGift = !0;
        }));
      };
      e.prototype.checkPopPrivacy = function() {
        _idx.platform.isQQ && _uData["default"].ins.getIsNewUser() && _panelMgr["default"].ins.open("ui/ui_privacy", {}, {
          MaskNoHide: !0
        });
      };
      e.prototype.checkSerPack = function() {};
      e.prototype.createBtns = function() {
        this.isWx && (this.createUserInfoButton1(), this.createUserInfoButton2());
      };
      e.prototype.checkGetUserInfo = function() {
        if (this.isWx) {
          var t = !1;
          (_time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3)) - _pInfo["default"].ins.getRankLastTimeData() >= 3600 && !this.authorized && !_panelMgr["default"].ins.hasPop() ? (this.showWxBtns(), 
          t = !0) : (this.hideWxBtns(), t = !1);
          return t;
        }
      };
      e.prototype.showWxBtns = function() {
        this.isWx && (this.setWxBtnShow1(!0), this.setWxBtnShow2(!0));
      };
      e.prototype.hideWxBtns = function() {
        this.isWx && (this.setWxBtnShow1(!1), this.setWxBtnShow2(!1));
      };
      e.prototype.setWxBtnShow1 = function(t) {
        this.isWx && null != this.wxBtn1 && (t ? this.wxBtn1.show() : this.wxBtn1.hide());
      };
      e.prototype.setWxBtnShow2 = function(t) {
        this.isWx && null != this.wxBtn2 && (t ? this.wxBtn2.show() : this.wxBtn2.hide());
      };
      e.prototype.createUserInfoButton1 = function() {
        var t = this;
        wx.getSetting({
          success: function success(e) {
            e.authSetting["scope.userInfo"] ? (t.authorized = !0, t.updateUserInfo()) : (t.wxBtn1 = t.authUersInfo(t.rankBtn1), 
            t.wxBtn1.onTap(function(e) {
              var o;
              var n;
              console.log(JSON.stringify(e));
              "getUserInfo:ok" == e.errMsg ? (t.setUserInfo1(e.userInfo), null === (o = t.wxBtn2) || void 0 === o || o.destroy(), 
              t.wxBtn2 = null, null === (n = t.wxBtn1) || void 0 === n || n.destroy(), t.wxBtn1 = null) : (console.log("\u6388\u6743\u5931\u8d25"), 
              t.getFail1());
            }), t.checkGetUserInfo());
          }
        });
      };
      e.prototype.createUserInfoButton2 = function() {
        var t = this;
        wx.getSetting({
          success: function success(e) {
            e.authSetting["scope.userInfo"] ? (t.authorized = !0, t.updateUserInfo()) : (t.wxBtn2 = t.authUersInfo(t.rankBtn2), 
            t.wxBtn2.onTap(function(e) {
              var o;
              var n;
              console.log(JSON.stringify(e));
              "getUserInfo:ok" == e.errMsg ? (t.setUserInfo2(e.userInfo), null === (o = t.wxBtn2) || void 0 === o || o.destroy(), 
              t.wxBtn2 = null, null === (n = t.wxBtn1) || void 0 === n || n.destroy(), t.wxBtn1 = null) : (console.log("\u6388\u6743\u5931\u8d25"), 
              t.getFail2());
            }), t.checkGetUserInfo());
          }
        });
      };
      e.prototype.authUersInfo = function(t) {
        var e = wx.getSystemInfoSync();
        var o = e.screenWidth;
        var n = e.screenHeight;
        var i = 0;
        var r = 0;
        if (t && cc.isValid(t)) {
          var a = e.screenWidth / cc.winSize.width;
          var s = t.convertToWorldSpaceAR(cc.Vec2.ZERO);
          var c = .5 * (cc.view.getVisibleSize().height - cc.winSize.height);
          r = n - (s.y + .5 * t.height + c) * a;
          i = (s.x - .5 * t.width) * a;
          o = t.width * a;
          n = t.height * a;
        }
        return wx.createUserInfoButton({
          type: "text",
          text: "",
          style: {
            left: i,
            top: r,
            width: o,
            height: n,
            lineHeight: 40,
            backgroundColor: "#00000000",
            color: "#ffffff",
            textAlign: "center",
            fontSize: 16,
            borderRadius: 4,
            borderColor: "#ffffff",
            borderWidth: 0
          }
        });
      };
      e.prototype.updateUserInfo = function() {
        wx.getUserInfo({
          success: function success(t) {
            _request["default"].ins.updateUserInfo(t.userInfo);
          }
        });
      };
      e.prototype.setUserInfo1 = function() {
        this.authorized = !0;
        this.checkGetUserInfo();
        _panelMgr["default"].ins.open("ui/ui_rank", null);
      };
      e.prototype.setUserInfo2 = function() {
        this.authorized = !0;
        this.jumpToPage(4);
      };
      e.prototype.getFail1 = function() {
        var t = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
        _pInfo["default"].ins.setRankLastTimeData(t);
        this.checkGetUserInfo();
        _panelMgr["default"].ins.open("ui/ui_rank", null);
      };
      e.prototype.getFail2 = function() {
        var t = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
        _pInfo["default"].ins.setRankLastTimeData(t);
        this.jumpToPage(4);
      };
      __decorate([ N(cc.BlockInputEvents) ], e.prototype, "blockComp", void 0);
      __decorate([ N(cc.Node) ], e.prototype, "pages", void 0);
      __decorate([ N(cc.Node) ], e.prototype, "downNode", void 0);
      __decorate([ N(_top["default"]) ], e.prototype, "top", void 0);
      __decorate([ N(cc.Prefab) ], e.prototype, "lPfb", void 0);
      __decorate([ N(cc.Sprite) ], e.prototype, "powerSp", void 0);
      __decorate([ N(cc.Camera) ], e.prototype, "camera", void 0);
      __decorate([ N(cc.Node) ], e.prototype, "rankBtn1", void 0);
      __decorate([ N(cc.Node) ], e.prototype, "btnBgNode", void 0);
      return o = __decorate([ R ], e);
    }(cc.Component);
    exports["default"] = C;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    cfgMgr: "cfgMgr",
    challengeMgr: "challengeMgr",
    evts: "evts",
    global: "global",
    idx: "idx",
    jigsawMgr: "jigsawMgr",
    newJigMgr: "newJigMgr",
    pConst: "pConst",
    pInfo: "pInfo",
    page_jigsaw: "page_jigsaw",
    panelMgr: "panelMgr",
    request: "request",
    res: "res",
    shopMgr: "shopMgr",
    sound: "sound",
    time: "time",
    tipMgr: "tipMgr",
    top: "top",
    uData: "uData"
  } ],
  mySafeArea: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92030QpL0pPP4FHS+/UWwhC", "mySafeArea");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.getSafeAreaRect = void 0;
    var _global = require("global");
    var s = cc._decorator;
    var c = s.ccclass;
    var l = (s.property, null);
    exports.getSafeAreaRect = function() {
      if (!l) {
        var t = cc.sys;
        if (_global["default"].padScale) l = new cc.Rect(0, 0, 720, 1560); else if (t.platform == t.ALIPAY_GAME) l = new cc.Rect(0, 62, 720, 1560); else {
          var e = cc.sys.getSafeAreaRect();
          var o = e.y;
          t.platform == t.WECHAT_GAME && o < 62 && (o = 62);
          l = new cc.Rect(e.x, o, e.width, e.height);
        }
      }
      return l;
    };
    var u = function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }
      __extends(e, t);
      e.prototype.updateArea = function() {
        if (cc.sys.platform != cc.sys.ALIPAY_GAME) {
          var t = this.node.getComponent(cc.Widget);
          if (t) {
            t.updateAlignment();
            var e = this.node.position;
            var n = this.node.getAnchorPoint();
            t.isAlignTop = t.isAlignBottom = t.isAlignLeft = t.isAlignRight = !0;
            var i = cc.winSize.width;
            var r = cc.winSize.height;
            var a = exports.getSafeAreaRect();
            t.top = r - a.y - a.height;
            t.bottom = a.y;
            t.left = a.x;
            t.right = i - a.x - a.width;
            t.updateAlignment();
            var s = this.node.position;
            var c = n.x - (s.x - e.x) / this.node.width;
            var l = n.y - (s.y - e.y) / this.node.height;
            this.node.setAnchorPoint(c, l);
            cc._widgetManager.add(t);
          }
        }
      };
      return __decorate([ c ], e);
    }(cc.SafeArea);
    exports["default"] = u;
    cc._RF.pop();
  }, {
    global: "global"
  } ],
  nameFrame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d594+dIy1LgYWXL4uGdb1G", "nameFrame");
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
    var p = (l.property, function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.icon = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        this.icon = this.node.getComponent(cc.Sprite);
        this.updateNameFrame();
        this.eventFunc = this.onOperTap.bind(this);
        _evts["default"].opE.on(this.eventFunc);
      };
      e.prototype.onDestroy = function() {
        _evts["default"].opE.off(this.eventFunc);
        this.eventFunc = null;
      };
      e.prototype.onOperTap = function(t) {
        var e;
        (null == t ? void 0 : t.action) === _evts["default"].SKIN_CHG && (null === (e = t.data) || void 0 === e ? void 0 : e.skinId) === _skinMgr.SkinIdEnum.nameFrame && this.updateNameFrame();
      };
      e.prototype.updateNameFrame = function() {
        var t = _pInfo["default"].ins.getUsingSkin()[_skinMgr.SkinIdEnum.nameFrame];
        _skinMgr["default"].ins.updateNameFrame(t, this.icon);
      };
      return __decorate([ u ], e);
    }(cc.Component));
    exports["default"] = p;
    cc._RF.pop();
  }, {
    evts: "evts",
    pInfo: "pInfo",
    skinMgr: "skinMgr"
  } ],
  nativeP: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3eb69/8EbJE/rYyIHzTmHB4", "nativeP");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _pConst = require("pConst");
    var a = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.isNative = !0;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function() {
        this.initListener();
      };
      Object.defineProperty(e.prototype, "isLogin", {
        get: function get() {
          return !1;
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.showLogin = function(t) {
        t && (this.loginResolve = t);
      };
      e.prototype.loginSuceess = function() {
        this.loginResolve();
      };
      e.prototype.videoError = function(t) {
        this.reject(t);
      };
      e.prototype.videoEnd = function(t) {
        t == _pConst.VideoFailCode.CANCELED ? this.reject(t) : this.resolve();
      };
      return e;
    }(require("h5")["default"]);
    exports["default"] = a;
    cc._RF.pop();
  }, {
    h5: "h5",
    pConst: "pConst"
  } ],
  newJigMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "76747ryvSJFDajgaJVMHyti", "newJigMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _idx = require("idx");
    var _pInfo = require("pInfo");
    var _bagMgr = require("bagMgr");
    var _festivalMgr = require("festivalMgr");
    var s = function() {
      function t() {
        this.jigsawTileTotal = 105;
        this.jigsawThemeNum = _festivalMgr["default"].ins.getJigsawNum();
        this.localData = null;
        this.seed = 5;
      }
      Object.defineProperty(t, "ins", {
        get: function get() {
          return this._ins || (this._ins = new t());
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.getJigsawTilesByIdx = function(t) {
        var e = this.getJigsawTiles()[t] || [];
        var o = _bagMgr["default"].ins.getItemCount("newYear_pieces");
        var n = t + 1;
        this.seed = 21 + n;
        var i = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 55, 66, 77, 88, 99, 89, 100, 91, 101, 93, 102, 95, 103, 97, 104, 98, 87, 76, 65, 54, 43, 32, 21 ];
        this.shuffleArray(i);
        i.length = 10;
        for (var a = [], s = 0; s < 105; s++) -1 == i.indexOf(s) && a.push(s);
        this.shuffleArray(a);
        var c = i.concat(a);
        if (e.length < this.jigsawTileTotal) {
          var l = e.length;
          var u = this.jigsawTileTotal - e.length;
          var p = o - ((n - 1) * this.jigsawTileTotal + l);
          if (p > 0) {
            var d = Math.min(u, p);
            for (s = 0; s < d; s++) {
              var h = c[l + s];
              e.push([ h, -1 ]);
            }
          }
        }
        this.setJigsawTilesByIdx(t, e);
        return e;
      };
      t.prototype.setJigsawTilesByIdx = function(t, e) {
        var o = this.getJigsawTiles();
        o[t] = e;
        this.setJigsawTiles(o);
      };
      t.prototype.isItemUnlock = function() {
        return !0;
      };
      t.prototype.isPieceEnough = function(t) {
        var e = t * this.jigsawTileTotal;
        return _bagMgr["default"].ins.getItemCount("newYear_pieces") > e;
      };
      t.prototype.getNowJigsawLv = function() {
        for (var t = 0, e = this.getJigsawTiles().length; t < e; t++) if (!this.IsJigsawCompletedByIdx(t)) return t + 1;
      };
      t.prototype.IsJigsawCompletedByIdx = function(t) {
        var e = this.getJigsawTiles()[t];
        if (105 == e.length) {
          for (var o = 0, n = e; o < n.length; o++) {
            var i = n[o];
            if (i[0] != i[1]) return !1;
          }
          return !0;
        }
        return !1;
      };
      t.prototype.getAllTiles = function() {
        for (var t = 0, e = this.jigsawThemeNum; t < e; t++) this.getJigsawTilesByIdx(t);
      };
      t.prototype.getUnPlacedNum = function() {
        this.getAllTiles();
        for (var t = this.getJigsawTiles(), e = 0, o = 0, n = t.length; o < n; o++) {
          var i = t[o];
          if (!this.checkHasFin(o)) for (var r = 0, a = i.length; r < a; r++) {
            var s = i[r];
            s[1] != s[0] && e++;
          }
        }
        return e;
      };
      t.prototype.seedRandom = function() {
        this.seed = (9301 * this.seed + 49297) % 233280;
        return this.seed / 233280;
      };
      t.prototype.shuffleArray = function(t) {
        for (var e, o = t.length - 1; o > 0; o--) {
          var n = Math.floor(this.seedRandom() * (o + 1));
          e = [ t[n], t[o] ];
          t[o] = e[0];
          t[n] = e[1];
        }
      };
      t.prototype.getJigsawTiles = function() {
        var t = this.getLocalJigData().tiles;
        return null == t ? [] : t;
      };
      t.prototype.setJigsawTiles = function(t) {
        this.setLocalJigData({
          tiles: t
        });
      };
      t.prototype.setLocalJigData = function(t) {
        var e = this.getLocalJigData();
        this.localData = Object.assign(Object.assign({}, e), t);
        _idx.platform.setStorage("newJigsaw", this.localData);
      };
      t.prototype.getLocalJigData = function() {
        null == this.localData && (this.localData = _idx.platform.getStorage("newJigsaw") || {});
        return this.localData;
      };
      t.prototype.checkClearData = function() {
        _pInfo["default"].ins.getIsClearJigsawData() && (_pInfo["default"].ins.setIsClearJigsawData(!1), 
        this.clearJigsawData());
      };
      t.prototype.clearJigsawData = function() {
        this.localData = {};
        _idx.platform.setStorage("newJigsaw", this.localData);
      };
      t.prototype.checkSetFin = function(t) {
        this.checkHasFin(t) || this.setFinfishJigsaw(t);
      };
      t.prototype.checkHasFin = function(t) {
        return _pInfo["default"].ins.getHasFinFesJig()[t] || !1;
      };
      t.prototype.setFinfishJigsaw = function(t) {
        var e = _pInfo["default"].ins.getHasFinFesJig();
        e[t] = !0;
        _pInfo["default"].ins.setHasFinFesJig(e);
      };
      t.prototype.clearFinJig = function(t) {
        var e = _pInfo["default"].ins.getHasFinFesJig();
        e[t] = !1;
        _pInfo["default"].ins.setHasFinFesJig(e);
      };
      t.prototype.resetJigByIdx = function(t) {
        for (var e = this.getJigsawTilesByIdx(t), o = [], n = 0, i = e.length; n < i; n++) {
          var r = e[n];
          r[1] = -1;
          o.push(r);
        }
        this.setJigsawTilesByIdx(t, o);
        this.clearFinJig(t);
      };
      return t;
    }();
    exports["default"] = s;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    festivalMgr: "festivalMgr",
    idx: "idx",
    pInfo: "pInfo"
  } ],
  pConst: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5027cy3DgNHsIzfr0s9Lkfg", "pConst");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.ShareResult = exports.VEnum4 = exports.VIDEO_RECORD_LIMIT = exports.SHARE_FAIL_MAX_CNT = exports.DefaultSDKSwitch = exports.DefaultLaunchOptions = exports.DefaultSystemInfo = exports.SDKConfig = exports.VideoFailCode = exports.STDSeqType = exports.PFCode = void 0;
    exports.PFCode = {
      QQ: "qq",
      Wechat: "wechat",
      Bytedance: "DY",
      Web: "H5",
      Vivo: "vivo",
      Alipay: "Alipay",
      TaoBao: "TaoBao",
      Ios: "Ios",
      Android: "Android"
    };
    exports.STDSeqType = {
      VIDEO: "VIDEO",
      SHARE: "SHARE"
    };
    exports.VideoFailCode = {
      NO_AD: "NO_AD",
      IS_AUDIT: "IS_AUDIT",
      LOW_SDK_VERSION: "LOW_SDK_VERSION",
      CANCELED: "CANCELED"
    };
    exports.SDKConfig = {
      comQuery: "",
      _shareData: {
        title: "\u592a\u96be\u4e86",
        imageUrlId: "",
        imageUrl: "subpackages/resSps/native/72/7233d4b3-7dea-4bdd-9fa3-3874c53e29a0.954ee.jpg",
        query: ""
      },
      shareData: function shareData() {
        var t = exports.SDKConfig._shareData;
        t.query = exports.SDKConfig.comQuery + Date.now();
        return t;
      },
      ttZoneId: {
        race: "race",
        normal: "normal"
      },
      videoCoolTime: 18e4
    };
    exports.DefaultSDKSwitch = {
      isAudit: !0,
      closeAD: !1
    };
    exports.SHARE_FAIL_MAX_CNT = 3;
    exports.VIDEO_RECORD_LIMIT = 3e5;
    (function(t) {
      t[t.SHORT = 0] = "SHORT", t[t.LONG = 1] = "LONG";
    })(exports.VEnum4 || (exports.VEnum4 = {}));
    exports.ShareResult = {
      SUCCESS: 0,
      FAILED: 1,
      ERROR: 2
    };
    cc._RF.pop();
  }, {} ],
  pInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed1e6oh4MhAKYXj2NqhTJgo", "pInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.chgScene = exports.challengeType = exports.gameType = exports.sceneType = exports.ROOT = void 0;
    var r;
    var _evts = require("evts");
    var _idx = require("idx");
    var _pConst = require("pConst");
    var _time = require("time");
    var _uData = require("uData");
    var _cfgMgr = require("cfgMgr");
    var _loadingAni = require("loadingAni");
    var _global = require("global");
    var _bagMgr = require("bagMgr");
    var _jigsawMgr = require("jigsawMgr");
    var _levelMgr = require("levelMgr");
    var _rankMgr = require("rankMgr");
    var _shopMgr = require("shopMgr");
    var _ = (require("skinMgr"), require("game"));
    exports.sceneType = {
      loading: "loading",
      main: "main",
      game: "game",
      guide: "guide"
    };
    (function(t) {
      t[t.normal = 0] = "normal", t[t.race = 1] = "race", t[t.challenge = 2] = "challenge", 
      t[t.practice = 3] = "practice", t[t.festival = 4] = "festival", t[t.freedom = 5] = "freedom";
    })(r = exports.gameType || (exports.gameType = {}));
    (function(t) {
      t[t.worm = 1] = "worm", t[t.tree = 2] = "tree", t[t.ice = 3] = "ice";
    })(exports.challengeType || (exports.challengeType = {}));
    exports.chgScene = function(t, e) {
      var n;
      var i;
      var s;
      e && (n = e.cb, i = e.noAni, s = e.gameType);
      _evts["default"].opE.clear();
      var c = cc.director;
      exports.ROOT = t;
      t == exports.sceneType.game ? (s = _["default"].type = s || r.normal) == r.challenge && (_["default"].challageData = e.challengeData || {}) : (delete _["default"].type, 
      delete _["default"].challageData, _levelMgr["default"].ins.clearPrcitceId());
      s == r.freedom && (_global["default"].freedomSize = e.freedomSize || 10);
      var l = function l() {
        null == n || n();
      };
      if (i) c.loadScene(t, l); else {
        var u = cc.assetManager.getBundle("prefab");
        u || c.loadScene(t, l);
        u.load("prefab/loadingAni", cc.Prefab, function(e, o) {
          var i;
          if (!e) {
            var r = cc.find("Canvas");
            if (r) {
              var a = cc.view.getVisibleSize();
              var s = a.width;
              var u = a.height;
              var p = new cc.Node("mask");
              p.setContentSize(s, u);
              p.addComponent(cc.BlockInputEvents);
              r.addChild(p);
              (i = cc.instantiate(o)).setPosition(s / 2, u / 2);
              r.parent.addChild(i);
              i.getComponent(_loadingAni["default"]).playTo(s, u, t, n);
              cc.game.addPersistRootNode(i);
            }
          }
          i ? c.preloadScene(t) : c.loadScene(t, l);
        });
      }
    };
    var b = function() {
      function t() {
        this.gameType = {
          nomal: "nomal"
        };
      }
      Object.defineProperty(t, "ins", {
        get: function get() {
          return this._ins || (this._ins = new w());
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.saveCoinData = function() {};
      return t;
    }();
    exports["default"] = b;
    var w = function() {
      function t() {
        this.isOpenLock = !0;
        this.recordData = {
          main: {
            gTimes: 0,
            wTimes: 0,
            heWins: 0,
            tPoints: 0,
            hePoints: 0
          },
          daily: {
            gTimes: 0,
            wTimes: 0,
            heWins: 0,
            tPoints: 0,
            hePoints: 0,
            feTime: 0
          },
          race: {
            gTimes: 0,
            tPoints: 0,
            hePoints: 0,
            feTime: 0
          }
        };
        this.uploadData = {
          ttMScore: 0,
          ttDScore: 0,
          ttMWin: 0,
          ttDWin: 0,
          tdMScore: 0,
          tdDScore: 0,
          tdMWin: 0,
          tdDWin: 0,
          tdRScore: 0
        };
        this.usingSkin = {
          bg: 1,
          role: 1,
          headFrame: 1,
          nameFrame: 1
        };
      }
      t.prototype.getPerPowerNeedTime = function() {
        var t = _cfgMgr["default"].serverCfg.times.forUser;
        return (_uData["default"].ins.getIsNewUser() ? t.new_user.rules.one_time.val : t.all.rules.one_time.val) || 180;
      };
      t.prototype.getInitPower = function() {
        var t = _cfgMgr["default"].serverCfg.times.forUser;
        return (_uData["default"].ins.getIsNewUser() ? t.new_user.rules.int_times.val : t.all.rules.int_times.val) || 100;
      };
      t.prototype.getLevel = function() {
        var t = _uData["default"].ins.getLocalData().lvl;
        return null == t ? 1 : Number(t);
      };
      t.prototype.setLevel = function(t) {
        _uData["default"].ins.setLocalData({
          lvl: t
        });
      };
      t.prototype.finishLvl = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            return [ 2, {
              data: {
                lvl: this.getLevel() + 1
              }
            } ];
          });
        });
      };
      t.prototype.getGuideDone = function() {
        return _uData["default"].ins.getLocalData().guideDone;
      };
      t.prototype.setGuideDone = function() {
        _uData["default"].ins.setLocalData({
          guideDone: 1
        });
      };
      t.prototype.getPuzzleLvl = function() {
        var t = _uData["default"].ins.getLocalData().puzzleLvl;
        var e = _global["default"].chapterCount;
        t > 54 * e && (t = 54 * e, _global["default"].levelDone = !0);
        return null == t ? 1 : Number(t);
      };
      t.prototype.setPuzzleLvl = function(t) {
        _uData["default"].ins.setLocalData({
          puzzleLvl: t
        });
        return _levelMgr["default"].ins.updateData();
      };
      t.prototype.finishPuzzleLvl = function() {
        return __awaiter(this, void 0, void 0, function() {
          var t;
          return __generator(this, function(e) {
            switch (e.label) {
             case 0:
              return t = this.getPuzzleLvl(), [ 4, this.setPuzzleLvl(t + 1) ];

             case 1:
              return e.sent(), [ 2 ];
            }
          });
        });
      };
      t.prototype.getJisawLvl = function() {
        var t = _uData["default"].ins.getLocalData().jisawLvl;
        return null == t ? 1 : Number(t);
      };
      t.prototype.setJisawLvl = function(t) {
        _uData["default"].ins.setLocalData({
          jisawLvl: t
        });
      };
      t.prototype.finishJisawLvl = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            return [ 2, {
              data: {
                lvl: this.getJisawLvl() + 1
              }
            } ];
          });
        });
      };
      t.prototype.getCoin = function() {
        var t = _uData["default"].ins.getLocalData().coin;
        return null == t ? 0 : Number(t);
      };
      t.prototype.addCoin = function(t, e) {
        if (void 0 === e && (e = !0), !isNaN(t)) {
          var o = this.getCoin() + t;
          o < 0 && (o = 0);
          this.setCoin(o);
          e && _evts["default"].opE.emit({
            action: _evts["default"].COIN_CHG
          });
        }
      };
      t.prototype.setCoin = function(t) {
        _uData["default"].ins.setLocalData({
          coin: t
        });
      };
      t.prototype.getlevel = function() {
        var t = _uData["default"].ins.getLocalData().level;
        return null == t ? 0 : Number(t);
      };
      t.prototype.addLevel = function(t) {
        if (void 0 === t && (t = 1), !isNaN(t)) {
          var e = this.getlevel() + t;
          e < 0 && (e = 0);
          _uData["default"].ins.setLocalData({
            level: e
          });
          _evts["default"].opE.emit({
            action: _evts["default"].LEV_CHG
          });
        }
      };
      t.prototype.addExp = function(t) {
        if (!isNaN(t)) {
          var e = this.getExp() + t;
          e < 0 && (e = 0);
          var o = this.getlevel();
          if (o * o * 20 < e) {
            for (var n = 0, i = 8; o * o * 20 < e && i > 0; ) n += 1, o += 1, i--;
            this.addLevel(n);
          }
          _uData["default"].ins.setLocalData({
            exp: e
          });
          _evts["default"].opE.emit({
            action: _evts["default"].EXP_CHG
          });
        }
      };
      t.prototype.getExp = function() {
        var t = _uData["default"].ins.getLocalData().exp;
        return null == t ? 0 : Number(t);
      };
      t.prototype.getPower = function() {
        var t = _uData["default"].ins.getLocalData().power;
        return null == t ? this.getInitPower() : Number(t);
      };
      t.prototype.addPower = function(t, e) {
        if (void 0 === e && (e = !0), !isNaN(t)) {
          var o = this.getPower();
          var n = o + t;
          n < 0 && (n = 0);
          this.setPower(n);
          var i = this.getInitPower();
          if (n <= i) {
            var r = o - n;
            o >= i && (this.setPowerFullTime(0), r = i - n);
            this.updatePowerFullTime(r);
          } else o < i && this.updatePowerFullTime(o - i);
          e && _evts["default"].opE.emit({
            action: _evts["default"].POWER_CHG
          });
        }
      };
      t.prototype.setPower = function(t) {
        t != this.getPower() && (t < 0 && (t = 0), _uData["default"].ins.setLocalData({
          power: t
        }));
      };
      t.prototype.getPowerFullTime = function() {
        var t = _uData["default"].ins.getLocalData().powerFullTime;
        return null == t ? 0 : Number(t);
      };
      t.prototype.updatePowerFullTime = function(t) {
        var e = this.getPowerFullTime() || _time["default"].ins.serverTime;
        e += t * this.getPerPowerNeedTime();
        this.setPowerFullTime(e);
      };
      t.prototype.setPowerFullTime = function(t) {
        _uData["default"].ins.setLocalData({
          powerFullTime: t
        });
      };
      t.prototype.getTask = function(t) {
        var e = _uData["default"].ins.getLocalData()[t];
        null == e && (e = {});
        return e;
      };
      t.prototype.setTask = function(t, e) {
        var o;
        e && _uData["default"].ins.setLocalData(((o = {})[t] = e, o));
      };
      t.prototype.getItem = function() {
        var t = _uData["default"].ins.getLocalData().item;
        null == t && (t = {});
        return t;
      };
      t.prototype.recordGameResult = function(t, e, o, n, i) {
        var a;
        var l;
        if (t === r.normal) {
          var u = this.getRecordMainData();
          e ? (u.wTimes = Number(u.wTimes) + 1, this.winMainLevel(), u.heWins = u.heWins > this.getConsWinTimes() ? u.heWins : this.getConsWinTimes(), 
          this.getLuckyState() || 0 == Number(u.wTimes) % 2 && this.setLuckState(!0)) : this.setConsWinTimes(0);
          u.tPoints = Number(u.tPoints) + o;
          u.hePoints = u.hePoints > o ? u.hePoints : o;
          this.setTodayMainScore(this.getTodayMainScore() + o);
          null != i && (null === (a = _idx.platform.setFriendRankData) || void 0 === a || a.call(_idx.platform, i, _pConst.SDKConfig.ttZoneId.normal));
        } else if (t === r.challenge) {
          var p = this.getRecordDailyData();
          e ? (p.wTimes = Number(p.wTimes) + 1, this.winDailyLevel(), p.heWins = p.heWins > this.getDailyWinTimes() ? p.heWins : this.getDailyWinTimes()) : this.setDailyWinTimes(0);
          p.tPoints = Number(p.tPoints) + o;
          p.hePoints = p.hePoints > o ? p.hePoints : o;
          n && (p.feTime = p.feTime < n ? p.feTime : n);
          this.setTodayDailyScore(this.getTodayDailyScore() + o);
        } else if (t === r.race) {
          var d = this.getRecordRaceData();
          d.tPoints = Number(d.tPoints) + o;
          d.hePoints = d.hePoints > o ? d.hePoints : o;
          null === (l = _idx.platform.setFriendRankData) || void 0 === l || l.call(_idx.platform, d.hePoints, _pConst.SDKConfig.ttZoneId.race);
          n && (d.feTime = d.feTime < n ? d.feTime : n);
          this.setTodayRaceScore(o);
        }
        this.setRecordData(this.getRecordData());
      };
      t.prototype.recordGameTimes = function(t) {
        var e;
        switch (t) {
         case r.normal:
          e = this.getRecordMainData();
          break;

         case r.challenge:
          e = this.getRecordDailyData();
          break;

         case r.race:
          e = this.getRecordRaceData();
        }
        e && (e.gTimes = Number(e.gTimes) + 1, this.setRecordData(this.getRecordData()));
      };
      t.prototype.getRecordData = function() {
        var t = _uData["default"].ins.getLocalData().recordData;
        return null == t ? this.recordData : t;
      };
      t.prototype.setRecordData = function(t) {
        _uData["default"].ins.setLocalData({
          recordData: t
        });
      };
      t.prototype.getRecordMainData = function() {
        return this.getRecordData().main;
      };
      t.prototype.getRecordDailyData = function() {
        return this.getRecordData().daily;
      };
      t.prototype.getRecordRaceData = function() {
        return this.getRecordData().race;
      };
      t.prototype.getConsWinTimes = function() {
        var t = _uData["default"].ins.getLocalData().mConsWTimes;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setConsWinTimes = function(t) {
        _uData["default"].ins.setLocalData({
          mConsWTimes: t
        });
      };
      t.prototype.winMainLevel = function() {
        var t = this.getConsWinTimes();
        this.setConsWinTimes(t + 1);
        var e = this.getTodayMainWin();
        this.setTodayMainWin(e + 1);
      };
      t.prototype.getDailyWinTimes = function() {
        var t = _uData["default"].ins.getLocalData().dConsWTimes;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setDailyWinTimes = function(t) {
        _uData["default"].ins.setLocalData({
          dConsWTimes: t
        });
      };
      t.prototype.winDailyLevel = function() {
        var t = this.getDailyWinTimes();
        this.setDailyWinTimes(t + 1);
        var e = this.getTodayDailyWin();
        this.setTodayDailyWin(e + 1);
      };
      t.prototype.getTodayMainScore = function() {
        var t = _uData["default"].ins.getLocalData().tdMScore;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setTodayMainScore = function(t) {
        _uData["default"].ins.setLocalData({
          tdMScore: t
        });
      };
      t.prototype.getTodayMainWin = function() {
        var t = _uData["default"].ins.getLocalData().tdMWin;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setTodayMainWin = function(t) {
        _uData["default"].ins.setLocalData({
          tdMWin: t
        });
      };
      t.prototype.getTodayDailyScore = function() {
        var t = _uData["default"].ins.getLocalData().tdDScore;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setTodayDailyScore = function(t) {
        _uData["default"].ins.setLocalData({
          tdDScore: t
        });
      };
      t.prototype.getTodayDailyWin = function() {
        var t = _uData["default"].ins.getLocalData().tdDWin;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setTodayDailyWin = function(t) {
        _uData["default"].ins.setLocalData({
          tdDWin: t
        });
      };
      t.prototype.getTodayRaceScore = function() {
        var t = _uData["default"].ins.getLocalData().tdRScore;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setTodayRaceScore = function(t) {
        t > this.getTodayRaceScore() && (_uData["default"].ins.setLocalData({
          tdRScore: t
        }), _rankMgr["default"].ins.uploadRaceData());
      };
      t.prototype.chgTodayRaceScore = function(t) {
        _uData["default"].ins.setLocalData({
          tdRScore: t
        });
      };
      t.prototype.getYdayRaceScore = function() {
        var t = _uData["default"].ins.getLocalData().ydRScore;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setYdayRaceScore = function(t) {
        _uData["default"].ins.setLocalData({
          ydRScore: t
        });
      };
      t.prototype.clearDailyData = function() {
        this.setYdayRaceScore(this.getTodayRaceScore());
        this.clearDayUpLoad();
        this.setTodayMainScore(0);
        this.setTodayMainWin(0);
        this.setTodayDailyScore(0);
        this.setTodayDailyWin(0);
        this.chgTodayRaceScore(0);
        this.setTicketAdTimes(0);
        this.setYdayRaceRankData([]);
        _rankMgr["default"].ins.setYdayRaceRankData([]);
        this.setShareNames([]);
        this.setIsGetSlider(!1);
        this.setFirstRaceTip(!1);
        this.setNormalShareTime(0);
        this.setRaceShareTime(0);
        this.setJigsawAdTimes(0);
        this.setNewJigAdTimes(0);
        this.setAdCount(0);
        this.setShareCount(0);
        this.setShopRecord({});
        _shopMgr["default"].ins.setPackRed({});
        _shopMgr["default"].ins.setTabsRed({});
      };
      t.prototype.getLuckTimes = function() {
        var t = _uData["default"].ins.getLocalData().luckyTimes;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setLuckyTimes = function(t) {
        _uData["default"].ins.setLocalData({
          luckyTimes: t
        });
      };
      t.prototype.addLuckyTimes = function() {
        var t = this.getLuckTimes();
        t = (t += 1) > 10 ? 1 : t;
        this.setLuckyTimes(t);
        this.setLuckState(!1);
      };
      t.prototype.getLuckyState = function() {
        var t = _uData["default"].ins.getLocalData().luckyState;
        return null != t && t;
      };
      t.prototype.setLuckState = function(t) {
        _uData["default"].ins.setLocalData({
          luckyState: t
        });
      };
      t.prototype.getPowerAdTimes = function() {
        var t = _uData["default"].ins.getLocalData().powerAdTimes;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setPowerAdTimes = function(t) {
        _uData["default"].ins.setLocalData({
          powerAdTimes: t
        });
      };
      t.prototype.addPowerAdTimes = function() {
        var t = this.getPowerAdTimes();
        t = (t += 1) > 1 ? 0 : t;
        this.setPowerAdTimes(t);
      };
      t.prototype.getCoinAdTimes = function() {
        var t = _uData["default"].ins.getLocalData().coinAdTimes;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setCoinAdTimes = function(t) {
        _uData["default"].ins.setLocalData({
          coinAdTimes: t
        });
      };
      t.prototype.addCoinAdTimes = function() {
        var t = this.getCoinAdTimes();
        t = (t += 1) > 2 ? 0 : t;
        this.setCoinAdTimes(t);
      };
      t.prototype.getTicketAdTimes = function() {
        var t = _uData["default"].ins.getLocalData().ticketAdTimes;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setTicketAdTimes = function(t) {
        _uData["default"].ins.setLocalData({
          ticketAdTimes: t
        });
      };
      t.prototype.addTicketAdTimes = function() {
        var t = this.getTicketAdTimes();
        this.setTicketAdTimes(t + 1);
      };
      t.prototype.getLastUploadRankData = function() {
        var t = _uData["default"].ins.getLocalData().lastUploadRank;
        return null == t ? this.uploadData : t;
      };
      t.prototype.setLastUploadRankData = function(t) {
        _uData["default"].ins.setLocalData({
          lastUploadRank: t
        });
      };
      t.prototype.clearDayUpLoad = function() {
        var t = this.getLastUploadRankData();
        t.tdMScore = 0;
        t.tdDScore = 0;
        t.tdMWin = 0;
        t.tdDWin = 0;
        t.tdRScore = 0;
        this.setLastUploadRankData(t);
      };
      t.prototype.setYdayRaceRankData = function(t) {
        _uData["default"].ins.setLocalData({
          ydayRRData: t
        });
      };
      t.prototype.getRankLastTimeData = function() {
        var t = _uData["default"].ins.getLocalData().rLastTime;
        return null == t ? 0 : t;
      };
      t.prototype.setRankLastTimeData = function(t) {
        _uData["default"].ins.setLocalData({
          rLastTime: t
        });
      };
      t.prototype.getIsGetSlider = function() {
        var t = _uData["default"].ins.getLocalData().isSlider;
        return null != t && t;
      };
      t.prototype.setIsGetSlider = function(t) {
        _uData["default"].ins.setLocalData({
          isSlider: t
        });
      };
      t.prototype.getAliAddHome = function() {
        var t = _uData["default"].ins.getLocalData().aliAddHome;
        return null == t ? -1 : t;
      };
      t.prototype.setAliAddHome = function(t) {
        _uData["default"].ins.setLocalData({
          aliAddHome: t
        });
      };
      t.prototype.getIsFirstRaceTip = function() {
        var t = _uData["default"].ins.getLocalData().isRaceTip;
        return null != t && t;
      };
      t.prototype.setFirstRaceTip = function(t) {
        _uData["default"].ins.setLocalData({
          isRaceTip: t
        });
      };
      t.prototype.getNormalShareTime = function() {
        var t = _uData["default"].ins.getLocalData().norShareT;
        return null == t ? 0 : t;
      };
      t.prototype.setNormalShareTime = function(t) {
        _uData["default"].ins.setLocalData({
          norShareT: t
        });
      };
      t.prototype.getRaceShareTime = function() {
        var t = _uData["default"].ins.getLocalData().raceShareT;
        return null == t ? 0 : t;
      };
      t.prototype.setRaceShareTime = function(t) {
        _uData["default"].ins.setLocalData({
          raceShareT: t
        });
      };
      t.prototype.getJigsawAdTimes = function() {
        var t = _uData["default"].ins.getLocalData().jigsawAdTimes;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setJigsawAdTimes = function(t) {
        _uData["default"].ins.setLocalData({
          jigsawAdTimes: t
        });
      };
      t.prototype.addJigsawAdTimes = function() {
        var t = this.getJigsawAdTimes();
        this.setJigsawAdTimes(t + 1);
      };
      t.prototype.getNewJigAdTimes = function() {
        var t = _uData["default"].ins.getLocalData().newJigAdTimes;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setNewJigAdTimes = function(t) {
        _uData["default"].ins.setLocalData({
          newJigAdTimes: t
        });
      };
      t.prototype.addNewJigAdTimes = function() {
        var t = this.getNewJigAdTimes();
        this.setNewJigAdTimes(t + 1);
      };
      t.prototype.getAdCount = function() {
        var t = _uData["default"].ins.getLocalData().adCount;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setAdCount = function(t) {
        _uData["default"].ins.setLocalData({
          adCount: t
        });
      };
      t.prototype.addAdCount = function() {
        var t = this.getAdCount();
        this.setAdCount(t + 1);
        this.isMaxAdCount() && (_idx.platform.reportEvent(_idx.ERepEvt.adMax), _evts["default"].opE.emit({
          action: _evts["default"].AD_MAX
        }));
      };
      t.prototype.isMaxAdCount = function() {
        return void 0 !== _cfgMgr["default"].serverCfg.daily_max_ad_times.val && this.getAdCount() >= _cfgMgr["default"].serverCfg.daily_max_ad_times.val;
      };
      t.prototype.getShareCount = function() {
        var t = _uData["default"].ins.getLocalData().shareCount;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setShareCount = function(t) {
        _uData["default"].ins.setLocalData({
          shareCount: t
        });
      };
      t.prototype.addShareCount = function() {
        var t = this.getShareCount();
        this.setShareCount(t + 1);
      };
      t.prototype.isMaxShareCount = function() {
        var t;
        var e = null !== (t = _cfgMgr["default"].serverCfg.daily_max_ad_times.share_times_limit) && void 0 !== t ? t : 5;
        return this.getShareCount() >= e;
      };
      t.prototype.getJigsawBgEndTimesByIdx = function(t) {
        return this.getJigsawBgEndTimes()[t] || 0;
      };
      t.prototype.setJigsawBgEndTimesByIdx = function(t, e) {
        var o = this.getJigsawBgEndTimes();
        o[t] = e;
        this.setJigsawBgEndTimes(o);
      };
      t.prototype.getJigsawBgEndTimes = function() {
        var t = _uData["default"].ins.getLocalData().jigEndTimes;
        return null == t ? [] : t;
      };
      t.prototype.setJigsawBgEndTimes = function(t) {
        _uData["default"].ins.setLocalData({
          jigEndTimes: t
        });
      };
      t.prototype.getNewJigBgEndTimesByIdx = function(t) {
        return this.getNewJigBgEndTimes()[t] || 0;
      };
      t.prototype.setNewJigBgEndTimesByIdx = function(t, e) {
        var o = this.getNewJigBgEndTimes();
        o[t] = e;
        this.setNewJigBgEndTimes(o);
      };
      t.prototype.getNewJigBgEndTimes = function() {
        var t = _uData["default"].ins.getLocalData().newJigEndTimes;
        return null == t ? [] : t;
      };
      t.prototype.setNewJigBgEndTimes = function(t) {
        _uData["default"].ins.setLocalData({
          newJigEndTimes: t
        });
      };
      t.prototype.getIsClearJigsawData = function() {
        var t = _uData["default"].ins.getLocalData().isClearJig1;
        return null == t || t;
      };
      t.prototype.setIsClearJigsawData = function(t) {
        _uData["default"].ins.setLocalData({
          isClearJig1: t
        });
      };
      t.prototype.getIsCheckdLock = function() {
        var t = _uData["default"].ins.getLocalData().isCheckdLock;
        return null != t && t;
      };
      t.prototype.setIsCheckdLock = function(t) {
        _uData["default"].ins.setLocalData({
          isCheckdLock: t
        });
      };
      t.prototype.getIsOpenLocked = function() {
        var t = _uData["default"].ins.getLocalData().localIsOpen;
        return null == t || t;
      };
      t.prototype.setIsOpenLocked = function(t) {
        _uData["default"].ins.setLocalData({
          localIsOpen: t
        });
      };
      t.prototype.checkIsOpenLock = function() {
        if (this.isOpenLock = this.getIsOpenLocked(), !this.getIsCheckdLock()) {
          var t = this.getPuzzleLvl();
          var e = _bagMgr["default"].ins.getItemCount("puzzle_pieces");
          var o = _jigsawMgr["default"].ins.getUnPlacedNum();
          (t > 1 || e != o) && (this.isOpenLock = !1, this.setIsOpenLocked(!1));
          this.setIsCheckdLock(!0);
        }
      };
      t.prototype.isMianLocked = function() {
        var t;
        var e;
        var o;
        if (this.checkIsOpenLock(), !this.isOpenLock) return !1;
        if (this.getPuzzleLvl() < 55) return !1;
        var n = JSON.parse(JSON.stringify(b.ins.getRecordData())).race.hePoints;
        var i = (null === (o = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.lock_rules) || void 0 === e ? void 0 : e.main_line_lock) || void 0 === o ? void 0 : o.main_line_val) || 0;
        return Number(n) < Number(i);
      };
      t.prototype.isJigsawLocked = function() {
        var t;
        var e;
        var o;
        if (this.checkIsOpenLock(), !this.isOpenLock) return !1;
        var n = JSON.parse(JSON.stringify(b.ins.getRecordData())).race.hePoints;
        var i = (null === (o = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.lock_rules) || void 0 === e ? void 0 : e.main_line_lock) || void 0 === o ? void 0 : o.puzzle_line_val) || 0;
        return Number(n) < Number(i);
      };
      t.prototype.getIsGetNewGift = function() {
        var t = _uData["default"].ins.getLocalData().isGetNewGift;
        return null != t && t;
      };
      t.prototype.setIsGetNewGif = function(t) {
        _uData["default"].ins.setLocalData({
          isGetNewGift: t
        });
      };
      t.prototype.getHasFinJig = function() {
        var t = _uData["default"].ins.getLocalData().hasFinJig;
        return null == t ? {} : t;
      };
      t.prototype.setHasFinJig = function(t) {
        _uData["default"].ins.setLocalData({
          hasFinJig: t
        });
        _uData["default"].ins._setLocalAndCloudData();
      };
      t.prototype.getHasFinFesJig = function() {
        var t = _uData["default"].ins.getLocalData().hasFinFesJig;
        return null == t ? {} : t;
      };
      t.prototype.setHasFinFesJig = function(t) {
        _uData["default"].ins.setLocalData({
          hasFinFesJig: t
        });
        _uData["default"].ins._setLocalAndCloudData();
      };
      t.prototype.getFesName = function() {
        var t = _uData["default"].ins.getLocalData().fesName;
        return null == t ? "" : t;
      };
      t.prototype.setFesName = function(t) {
        _uData["default"].ins.setLocalData({
          fesName: t
        });
      };
      t.prototype.getFesPro = function() {
        var t = _uData["default"].ins.getLocalData().fesPro;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setFesPro = function(t) {
        _uData["default"].ins.setLocalData({
          fesPro: t
        });
      };
      t.prototype.getFesTaskPro = function() {
        var t = _uData["default"].ins.getLocalData().fesTaskPro;
        return null == t ? 0 : Number(t);
      };
      t.prototype.setFesTaskPro = function(t) {
        _uData["default"].ins.setLocalData({
          fesTaskPro: t
        });
      };
      t.prototype.getFesPuzzleLv = function() {
        var t = _uData["default"].ins.getLocalData().fesPuzzleLv;
        return null == t ? 1 : Number(t);
      };
      t.prototype.setFesPuzzleLv = function(t) {
        _uData["default"].ins.setLocalData({
          fesPuzzleLv: t
        });
      };
      t.prototype.getShareNames = function() {
        var t = _uData["default"].ins.getLocalData().sNames;
        return null == t ? [] : t;
      };
      t.prototype.setShareNames = function(t) {
        _uData["default"].ins.setLocalData({
          sNames: t
        });
      };
      t.prototype.getChallengeData = function() {
        var t = _uData["default"].ins.getLocalData().chaData;
        return null == t ? [] : t;
      };
      t.prototype.setChallengeData = function(t) {
        _uData["default"].ins.setLocalData({
          chaData: t
        });
      };
      t.prototype.getChallengePackData = function() {
        var t = _uData["default"].ins.getLocalData().chaPackData;
        return null == t ? [] : t;
      };
      t.prototype.setChallengePackData = function(t) {
        _uData["default"].ins.setLocalData({
          chaPackData: t
        });
      };
      t.prototype.getAddDesk = function() {
        var t = _uData["default"].ins.getLocalData().addDesk;
        return null != t && t;
      };
      t.prototype.setAddDesk = function(t) {
        _uData["default"].ins.setLocalData({
          addDesk: t
        });
      };
      t.prototype.getJigTiles = function() {
        var t = _uData["default"].ins.getLocalData().jigTiles;
        return null == t ? [ -1, "" ] : t;
      };
      t.prototype.setJigTiles = function(t) {
        _uData["default"].ins.setLocalData({
          jigTiles: t
        }, 15);
      };
      t.prototype.addSevenDays = function() {
        var t = this.getSevenDays();
        var e = Math.min(7, t + 1);
        this.setSevenDays(e);
      };
      t.prototype.getSevenDays = function() {
        var t = _uData["default"].ins.getLocalData().sevenLogin;
        return null == t ? 0 : t;
      };
      t.prototype.setSevenDays = function(t) {
        _uData["default"].ins.setLocalData({
          sevenLogin: t
        });
      };
      t.prototype.getSevenReward = function() {
        var t = _uData["default"].ins.getLocalData().sevenReward;
        return null == t ? 0 : t;
      };
      t.prototype.setSevenReward = function(t) {
        _uData["default"].ins.setLocalData({
          sevenReward: t
        });
      };
      t.prototype.addShopRecord = function(t) {
        var e = this.getShopRecord();
        e[t] ? e[t] += 1 : e[t] = 1;
        this.setShopRecord(e);
      };
      t.prototype.getShopRecord = function() {
        var t = _uData["default"].ins.getLocalData().shopRecord;
        return null == t ? {} : t;
      };
      t.prototype.setShopRecord = function(t) {
        _uData["default"].ins.setLocalData({
          shopRecord: t
        });
      };
      t.prototype.addShopUnreset = function(t) {
        var e = this.getShopUnreset();
        e[t] ? e[t] += 1 : e[t] = 1;
        this.setShopUnreset(e);
      };
      t.prototype.getShopUnreset = function() {
        var t = _uData["default"].ins.getLocalData().shopReUn;
        return null == t ? {} : t;
      };
      t.prototype.setShopUnreset = function(t) {
        _uData["default"].ins.setLocalData({
          shopReUn: t
        });
      };
      Object.defineProperty(t.prototype, "Bag", {
        get: function get() {
          var t = _uData["default"].ins.getLocalData().bag;
          null == t && (t = {});
          return t;
        },
        set: function set(t) {
          t && _uData["default"].ins.setLocalData({
            bag: t
          });
        },
        enumerable: !1,
        configurable: !0
      });
      Object.defineProperty(t.prototype, "Mail", {
        get: function get() {
          var t = _uData["default"].ins.getLocalData().mail;
          null == t && (t = {});
          return t;
        },
        set: function set(t) {
          t && _uData["default"].ins.setLocalData({
            mail: t
          });
        },
        enumerable: !1,
        configurable: !0
      });
      Object.defineProperty(t.prototype, "mySkin", {
        get: function get() {
          this._mySkin || (this._mySkin = {
            bg: [ 1 ],
            role: [ 1 ],
            headFrame: [ 1 ],
            nameFrame: [ 1 ]
          });
          return this._mySkin;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.getUsingSkin = function() {
        return this.usingSkin;
      };
      t.prototype.setUsingSkin = function() {};
      t.prototype.getMySkin = function() {};
      t.prototype.addMySkin = function() {};
      t.prototype.getSkinAdPro = function() {};
      t.prototype.addSkinAdPro = function() {};
      return t;
    }();
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    cfgMgr: "cfgMgr",
    evts: "evts",
    game: "game",
    global: "global",
    idx: "idx",
    jigsawMgr: "jigsawMgr",
    levelMgr: "levelMgr",
    loadingAni: "loadingAni",
    pConst: "pConst",
    rankMgr: "rankMgr",
    shopMgr: "shopMgr",
    skinMgr: "skinMgr",
    time: "time",
    uData: "uData"
  } ],
  packItem1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55c3ekMcB9Er61q37vHGQCP", "packItem1");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _idx = require("idx");
    var _item = require("item");
    var _bagMgr = require("bagMgr");
    var _panelMgr = require("panelMgr");
    var _shopMgr = require("shopMgr");
    var _tipMgr = require("tipMgr");
    var _pInfo = require("pInfo");
    var h = cc._decorator;
    var f = h.ccclass;
    var g = h.property;
    var y = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.packName = null;
        e.scrollView = null;
        e.priceLb = null;
        e.rewardItem = null;
        e.finNode = null;
        e.btnNode = null;
        e.adNode = null;
        e.buyNumLb = null;
        e.redNode = null;
        e.discountLb = null;
        e.shopData = null;
        e.isFree = !1;
        e._rewardItems = [];
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {};
      e.prototype.initItem = function(t) {
        this.shopData = t;
        this.packName.string = (null == t ? void 0 : t.title) || "\u793c\u5305";
        var e = t.price || 0;
        this.priceLb.string = "\xa5" + t.price;
        this.isFree = 0 == e;
        var o = _shopMgr["default"].ins.getPackRed();
        o[t.key] ? this.redNode.active = !1 : (this.redNode.active = !0, o[t.key] = 1, _shopMgr["default"].ins.setPackRed(o));
        t.discount ? (this.discountLb.string = t.discount + "\u6298", this.discountLb.node.parent.active = !0) : this.discountLb.node.parent.active = !1;
        this.initReward(t.props);
        this.checkData();
      };
      e.prototype.initReward = function(t) {
        var e = this;
        if (t) {
          var o = 0;
          var n = this.scrollView.content;
          for (var i in n.children.forEach(function(t) {
            e._rewardItems.push(t);
          }), n.removeAllChildren(), t) {
            var r = t[i];
            var a = this._rewardItems.shift();
            a || (a = cc.instantiate(this.rewardItem));
            a.parent = n;
            a.active = !0;
            var c = a.getComponent(_item["default"]);
            c && c.initByData(i, r);
            o++;
          }
          n.setContentSize(93 * o, 100);
        }
      };
      e.prototype.checkData = function() {
        if (this.shopData) {
          var t = this.shopData.key;
          var e = _pInfo["default"].ins.getShopRecord();
          var o = this.shopData.daily_limit_nums || 0;
          var n = e[t] || 0;
          this.btnNode.active = !this.isFree;
          this.adNode.active = this.isFree;
          var i = this.isFree ? this.adNode : this.btnNode;
          var r = n >= o;
          this.finNode.active = r;
          i.active = !r;
          this.buyNumLb.node.active = !r;
          this.buyNumLb.string = "\u9650\u8d2d:" + n + "/" + o;
        }
      };
      e.prototype.onBtnBuy = function() {
        var t = this;
        if (this.shopData) {
          var e = JSON.stringify(this.shopData.props);
          _idx.platform.payment(this.shopData.key, this.shopData.price, 0, e).then(function() {
            t.getReward();
          })["catch"](function(t) {
            _tipMgr["default"].ins.showTip(t, !0);
          });
        }
      };
      e.prototype.onBtnAd = function() {
        this.shopData && this.getReward();
      };
      e.prototype.getReward = function() {
        var t = this.shopData.props;
        for (var e in t) {
          var o = t[e];
          _bagMgr["default"].ins.addItem(e, o);
        }
        for (var n = this.scrollView.content.children, i = [], r = 0, a = n.length; r < a; r++) {
          var u = n[r];
          var p = u.getComponent(_item["default"]);
          var h = {};
          h.itemId = p.key;
          h.worldPos = u.parent.convertToWorldSpaceAR(u.position);
          h.value = Number(p.count);
          i.push(h);
        }
        _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: i
        });
        _pInfo["default"].ins.addShopRecord(this.shopData.key);
        this.checkData();
      };
      __decorate([ g(cc.Label) ], e.prototype, "packName", void 0);
      __decorate([ g(cc.ScrollView) ], e.prototype, "scrollView", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "priceLb", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "rewardItem", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "finNode", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "btnNode", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "adNode", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "buyNumLb", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "redNode", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "discountLb", void 0);
      return __decorate([ f ], e);
    }(cc.Component);
    exports["default"] = y;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    idx: "idx",
    item: "item",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    shopMgr: "shopMgr",
    tipMgr: "tipMgr"
  } ],
  packItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7abceAnT1dHcJZ6MEKrASAc", "packItem");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = a.property;
    var l = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.spine = null;
        e.getSp = null;
        e.idx = 0;
        return e;
      }
      __extends(e, t);
      e.prototype.initItem = function(t, e) {
        this.spine.skeletonData = e;
        this.idx = t + 1;
        this.spine.animation = "box_" + this.idx + "_" + this.idx;
        this.getSp.active = !1;
      };
      e.prototype.setFinish = function(t) {
        var e = this.idx;
        this.spine.animation = t ? "box_" + e : "box_" + e + "_" + e;
      };
      e.prototype.setIsGet = function(t) {
        this.getSp.active = t;
        t && this.setFinish(!1);
      };
      __decorate([ c(sp.Skeleton) ], e.prototype, "spine", void 0);
      __decorate([ c(cc.Node) ], e.prototype, "getSp", void 0);
      return __decorate([ s ], e);
    }(cc.Component);
    exports["default"] = l;
    cc._RF.pop();
  }, {} ],
  page_challenge: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ffe87NgStNFVZHkaf3sEeX1", "page_challenge");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _idx = require("idx");
    var _mySafeArea = require("mySafeArea");
    var _numberUtils = require("NumberUtils");
    var _res = require("res");
    var _time = require("time");
    var _cfgMgr = require("cfgMgr");
    var _global = require("global");
    var _bagMgr = require("bagMgr");
    var _challengeMgr = require("challengeMgr");
    var _panelMgr = require("panelMgr");
    var _skinMgr = require("skinMgr");
    var _pInfo = require("pInfo");
    var _dateItem = require("dateItem");
    var _packItem = require("packItem");
    var T = cc._decorator;
    var I = T.ccclass;
    var D = T.property;
    var P = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.dateNodes = null;
        e.dateNode0 = null;
        e.dateNode1 = null;
        e.dateItem = null;
        e.yearLb = null;
        e.monthLb = null;
        e.costLb = null;
        e.topNode = null;
        e.leftNode = null;
        e.rightNode = null;
        e.lvPerLb = null;
        e.finNumLb = null;
        e.packPro = null;
        e.packItems = [];
        e.midBg = null;
        e.packageNode = null;
        e.maskNode = null;
        e.topSp = null;
        e.spineNode = null;
        e.beforeRedLb = null;
        e.afterRedLb = null;
        e.bgNode = null;
        e.hengNode = null;
        e.curYear = 0;
        e.curMonth = 0;
        e.curDay = 0;
        e.lvData = {
          type: 1,
          diff: 3
        };
        e.isAni = !1;
        e.isFin = !1;
        e.gameDate = null;
        e.loadPackEnd = !1;
        e.crossData = {};
        e.isLoad = !0;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        var t = this;
        this.node.height = cc.winSize.height;
        _global["default"].padScale && (this.hengNode.scaleX = this.bgNode.scaleX = this.topSp.node.parent.scale = _global["default"].padScale);
        _evts["default"].opE.on(this.onOperTap.bind(this));
        _res["default"].ins.getBundleByString("resSps").then(function(e) {
          e.load("game/normal/top1", cc.SpriteFrame, function(e, o) {
            !e && t.node && t.node.isValid && (t.topSp.spriteFrame = o);
          }), e.load("spine/package/action", sp.SkeletonData, function(e, o) {
            if (!e && t.node && t.node.isValid) {
              for (var n = 0, i = t.packItems.length; n < i; n++) t.packItems[n].initItem(n, o);
              t.setPackPer(), t.loadPackEnd = !0;
            }
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
        this.loadGirl();
      };
      e.prototype.loadGirl = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            _skinMgr["default"].ins.updateRole(_pInfo["default"].ins.getUsingSkin().role, this.spineNode);
            return [ 2 ];
          });
        });
      };
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].UPD_MAIN_RED:
          this.updateReds();
          break;

         case _evts["default"].SKIN_CHG:
          this.loadGirl();
        }
      };
      e.prototype.start = function() {
        var t = this;
        this.scheduleOnce(function() {
          t.adapter();
          t.initPanel();
        });
      };
      e.prototype.onEnable = function() {
        var t = this;
        this.isLoad || _challengeMgr["default"].ins.getRequestChallengeData(this.curYear, this.curMonth).then(function(e) {
          e.status && (t.crossData = e.data, t.setCrossNum());
        })["catch"](function(t) {
          console.error("getRequestChallengeDataErr", t);
        });
        this.isLoad = !1;
      };
      e.prototype.adapter = function() {
        var t = _mySafeArea.getSafeAreaRect().yMin;
        var e = this.node.height - 1280 - t;
        this.spineNode.y += e / 6;
        this.topNode.y -= t;
        this.topNode.removeComponent(cc.Widget);
      };
      e.prototype.initPanel = function() {
        var t = this;
        var e = 1e3 * _time["default"].ins.serverTime;
        var o = new Date(e);
        var n = o.getDate();
        var i = o.getFullYear();
        var r = o.getMonth() + 1;
        if (_global["default"].challengeLv) {
          var a = Math.trunc;
          var s = a(_global["default"].challengeLv / 1e4);
          var c = a(_global["default"].challengeLv % 1e4 / 100);
          _challengeMgr["default"].ins.getTheMonthIsFin(i, r) || (i = s, r = c);
        }
        this.curYear = i;
        this.curMonth = r;
        this.curDay = n;
        this.yearLb.string = this.curYear + "\u5e74";
        this.monthLb.string = this.curMonth + "";
        this.initItems();
        this.checkBtns();
        this.getCrossData();
        _res["default"].ins.getBundleByString("resSps").then(function(e) {
          e.load("spine/package/action", sp.SkeletonData, function(e, o) {
            if (!e && t.node && t.node.isValid) {
              for (var n = 0, i = t.packItems.length; n < i; n++) t.packItems[n].initItem(n, o);
              t.setPackPer();
              t.loadPackEnd = !0;
            }
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
      };
      e.prototype.initItems = function() {
        for (var t = this.curYear, e = this.curMonth, o = 0, n = 0, i = 0; i < 42; i++) {
          var r = cc.instantiate(this.dateItem);
          r.active = !0;
          r.parent = this.dateNode1;
          r.x = 92 * o;
          r.y = -86 * n;
          ++o > 6 && (o = 0, n++);
        }
        this.setItemsByDate(this.dateNode1, t, e);
        var a = 1e3 * _time["default"].ins.serverTime;
        var s = new Date(a);
        var c = s.getFullYear();
        var l = s.getMonth() + 1;
        var u = s.getDate();
        var p = _challengeMgr["default"].ins;
        var d = p.getLastUnFinIdx(t, e);
        var f = p.getFinLvNum(t, e);
        c == t && l == e && u == f && (d = u - 1);
        this.setIsSelect(d);
        this.dateNode0.y += 516;
        o = 0;
        n = 0;
        this.loadDateItem(0, o, n);
      };
      e.prototype.loadDateItem = function(t, e, o) {
        var n = this;
        if (!(t >= 42)) {
          var i = cc.instantiate(this.dateItem);
          i.active = !0;
          i.parent = this.dateNode0;
          i.x = 92 * e;
          i.y = -86 * o;
          ++e > 6 && (e = 0, o++);
          t++;
          this.scheduleOnce(function() {
            n.loadDateItem(t, e, o);
          }, 0);
        }
      };
      e.prototype.checkBtns = function() {
        var t = 1e3 * _time["default"].ins.serverTime;
        var e = new Date(t);
        var o = e.getFullYear();
        var n = e.getMonth() + 1;
        var i = _challengeMgr["default"].ins;
        var r = this.curYear;
        var a = this.curMonth;
        this.rightNode.active = o != r || n != a;
        r == i.firstYear && a == i.firstMonth ? this.leftNode.active = !1 : this.leftNode.active = !0;
        this.updateReds();
      };
      e.prototype.updateReds = function() {
        var t = _challengeMgr["default"].ins;
        var e = this.curYear;
        var o = this.curMonth;
        var n = t.getMonthRed(e, o);
        var i = t.getBeforeMonthRed(e, o);
        var r = i - n;
        var a = t.getAllMonthRed() - i;
        r > 0 ? (this.beforeRedLb.node.parent.active = !0, this.beforeRedLb.string = r + "", 
        this.beforeRedLb.node.x = _global["default"].getCharXOffset(this.beforeRedLb.string)) : this.beforeRedLb.node.parent.active = !1;
        a > 0 ? (this.afterRedLb.node.parent.active = !0, this.afterRedLb.string = a + "", 
        this.afterRedLb.node.x = _global["default"].getCharXOffset(this.afterRedLb.string)) : this.afterRedLb.node.parent.active = !1;
      };
      e.prototype.rePanel = function(t) {
        var e = this;
        var o = this.curYear;
        var n = this.curMonth;
        var i = 516 * t;
        var r = this.dateNode0.active ? this.dateNode0 : this.dateNode1;
        var a = this.dateNode0.active ? this.dateNode1 : this.dateNode0;
        a.y = r.y - i;
        this.setItemsByDate(a, o, n);
        this.dateNode0.active = !0;
        this.dateNode1.active = !0;
        this.isAni = !0;
        cc.tween(this.dateNodes).by(.2, {
          y: i
        }).call(function() {
          e.isAni = !1, r.active = !1, a.active = !0;
          var t = _challengeMgr["default"].ins.getLastUnFinIdx(e.curYear, e.curMonth);
          e.setIsSelect(t);
        }).start();
        this.yearLb.string = o + "\u5e74";
        this.monthLb.string = n + "";
        this.loadPackEnd && this.setPackPer();
        this.getCrossData();
      };
      e.prototype.setPackPer = function() {
        var t = _challengeMgr["default"].ins;
        var e = this.curYear;
        var o = this.curMonth;
        var n = t.getMonthData(e, o);
        var i = (n[0], n[1]);
        var r = t.getFinLvNum(e, o);
        this.lvPerLb.string = r + "/" + i;
        this.packPro.progress = r / 28;
        for (var a = t.getChaPackData(e, o), s = 0, c = this.packItems.length; s < c; s++) {
          var l = 7 * (s + 1);
          var u = this.packItems[s];
          u.setIsGet(!1);
          u.setFinish(!1);
          r >= l && u.setFinish(!0);
          a[s] && u.setIsGet(!0);
        }
      };
      e.prototype.setItemsByDate = function(t, e, o) {
        for (var n = this, i = _challengeMgr["default"].ins, r = i.getfinData(e, o), a = i.getMonthData(e, o), s = a[0], c = a[1], l = function l(a) {
          var l = t.children[a];
          var p = a - s + 1;
          var d = l.getComponent(_dateItem["default"]);
          p < 0 || p >= c ? l.active = !1 : (l.active = !0, d.setDate(p + 1), l.off("click"), 
          i.isLocked(e, o, p) ? d.setLocked(!0) : (l.on("click", function() {
            n.onBtnChgStartData(p);
          }, u), d.setLocked(!1)), d.setFinish(r[p]));
        }, u = this, p = 0, d = t.childrenCount; p < d; p++) l(p);
      };
      e.prototype.setIsSelect = function(t) {
        for (var e = this.dateNode0.active ? this.dateNode0 : this.dateNode1, o = 0, n = e.childrenCount; o < n; o++) {
          var i = e.children[o];
          i && i.getComponent(_dateItem["default"]).setSelected(!1);
        }
        var r = _challengeMgr["default"].ins;
        var a = r.getMonthData(this.curYear, this.curMonth);
        var s = a[0];
        var c = (a[1], t + s - 1);
        var l = r.getfinData(this.curYear, this.curMonth);
        this.isFin = l[t];
        var u = e.children[c];
        u && u.getComponent(_dateItem["default"]).setSelected(!0);
        this.lvData = r.getLvDataByDate(this.curYear, this.curMonth, t);
        var p = {};
        p.year = this.curYear;
        p.month = this.curMonth;
        p.day = t + 1;
        p.isFin = l[t];
        this.gameDate = p;
        this.setCrossNum();
        var d = this.getLevelCost();
        this.costLb.string = "-" + d;
      };
      e.prototype.getCrossData = function() {
        var t = this;
        var e = _challengeMgr["default"].ins.getRequestChallengeData(this.curYear, this.curMonth);
        this.crossData = {};
        e.then(function(e) {
          e.status && (t.crossData = e.data, t.setCrossNum());
        })["catch"](function(t) {
          console.error("getRequestChallengeDataErr", t);
        });
      };
      e.prototype.setCrossNum = function() {
        var t = this.gameDate;
        var e = _challengeMgr["default"].ins;
        var o = e.addZeroToNum(t.month);
        var n = e.addZeroToNum(t.day);
        var i = t.year + "-" + o + "-" + n;
        var r = e.getfinData(t.year, t.month);
        var a = r[t.day - 1] ? 1 : 0;
        var s = this.crossData[i] || a;
        this.finNumLb.string = s + "";
        var c = r[t.day - 1] ? s : s + 1;
        this.gameDate.num = c;
      };
      e.prototype.onBtnChgStartData = function(t) {
        this.isAni || this.setIsSelect(t);
      };
      e.prototype.onBtnStart = function() {
        var t = this;
        if (!this.isAni) {
          var e = this.getLevelCost();
          if (_pInfo["default"].ins.getPower() < e) _panelMgr["default"].ins.open("ui/ui_getRes", {
            itemId: "times"
          }); else {
            var o = this.lvData;
            if (o.date = this.gameDate, o.type === _pInfo.challengeType.worm) {
              var n = o.count || _numberUtils["default"].RandomInt(1, 460);
              (n < 0 || n > 460) && (n = Math.abs(n) % 460);
              o.count = n;
              _idx.platform.showLoading();
              cc.assetManager.loadRemote(_global.OssConfig.challengeWormUrl + n + ".json", cc.JsonAsset, function(n, i) {
                _idx.platform.hideLoading();
                !n && i && i.json ? o.data = i.json : o.data = {
                  size: 15,
                  data: [ [ 188, 203, 218, 219, 220, 221, 206, 191, 192, 193, 194, 179, 164, 149, 148, 147, 132, 117, 102, 87, 72, 71, 70, 69, 84, 99, 114, 113, 112, 111, 110, 95, 80, 65, 50, 49, 48, 47, 62, 77, 76, 75, 90, 105, 120 ], [ 186, 185, 170, 155, 154, 153, 138, 123, 108, 107, 122, 137, 152, 151, 166, 167, 182, 197 ], [ 74, 59, 44, 43, 28, 13, 12, 11, 26, 41, 40, 39, 38, 23, 22, 21, 6, 5, 4, 3, 18, 17, 16, 15 ], [ 160, 159, 158, 157, 142, 143, 144, 145 ] ]
                };
                _panelMgr["default"].ins.open("ui/ui_challengeInfo", {
                  lvData: o,
                  cost: e,
                  crossNum: t.finNumLb.string
                });
              });
            } else _panelMgr["default"].ins.open("ui/ui_challengeInfo", {
              lvData: o,
              cost: e,
              crossNum: this.finNumLb.string
            });
          }
        }
      };
      e.prototype.onBtnChgMonth = function(t, e) {
        if (!this.isAni) {
          var o = Number(e);
          var n = this.getNewDate(o);
          var i = n[0];
          var r = n[1];
          this.curYear = i;
          this.curMonth = r;
          var a = _challengeMgr["default"].ins;
          var s = 1e3 * _time["default"].ins.serverTime;
          var c = new Date(s);
          var l = c.getFullYear();
          var u = c.getMonth() + 1;
          this.curYear == a.firstYear && this.curMonth < a.firstMonth ? this.curMonth = a.firstMonth : this.curYear == l && this.curMonth > u ? this.curMonth = u : (this.checkBtns(), 
          this.rePanel(o));
        }
      };
      e.prototype.getNewDate = function(t) {
        var e = t;
        var o = this.curYear;
        var n = this.curMonth;
        (n += e) < 1 ? (o -= 1, n = 12) : n > 12 && (o += 1, n = 1);
        return [ o, n ];
      };
      e.prototype.getLevelCost = function() {
        var t;
        var e;
        var o = (null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.daily_challenge) || void 0 === e ? void 0 : e.consume) || 30;
        this.isFin && (o = 0);
        return o;
      };
      e.prototype.onBtnPack = function(t, e) {
        var o;
        var n;
        if (!this.isAni) {
          var i = Number(e);
          var r = this.curYear;
          var a = this.curMonth;
          var s = _challengeMgr["default"].ins;
          var l = s.getFinLvNum(r, a);
          var u = s.getChaPackData(r, a);
          var p = 7 * (i + 1);
          var d = (null === (n = null === (o = _cfgMgr["default"].serverCfg) || void 0 === o ? void 0 : o.daily_challenge) || void 0 === n ? void 0 : n.numreward)[i] || {
            times: 150,
            coin: 150,
            puzzle_pieces: 20
          };
          var h = this.packItems[i];
          var g = [];
          for (var _ in d) {
            var b = d[_];
            var w = h.node;
            var S = w.parent.convertToWorldSpaceAR(w.position);
            var T = {};
            T.itemId = _;
            T.worldPos = S;
            T.value = Number(b);
            g.push(T);
          }
          if (g.length) if (l >= p && !u[i]) {
            for (var _ in h.setIsGet(!0), s.setChaPackData(r, a, i), d) b = d[_], _bagMgr["default"].ins.addItem(_, Number(b));
            _evts["default"].opE.emit({
              action: _evts["default"].UPD_MAIN_RED
            });
            _panelMgr["default"].ins.open("ui/ui_flyAni", {
              itemDatas: g
            });
          } else _panelMgr["default"].ins.open("ui/ui_preReward", {
            itemDatas: g
          });
        }
      };
      __decorate([ D(cc.Node) ], e.prototype, "dateNodes", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "dateNode0", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "dateNode1", void 0);
      __decorate([ D(cc.Prefab) ], e.prototype, "dateItem", void 0);
      __decorate([ D(cc.Label) ], e.prototype, "yearLb", void 0);
      __decorate([ D(cc.Label) ], e.prototype, "monthLb", void 0);
      __decorate([ D(cc.Label) ], e.prototype, "costLb", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "topNode", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "leftNode", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "rightNode", void 0);
      __decorate([ D(cc.Label) ], e.prototype, "lvPerLb", void 0);
      __decorate([ D(cc.Label) ], e.prototype, "finNumLb", void 0);
      __decorate([ D(cc.ProgressBar) ], e.prototype, "packPro", void 0);
      __decorate([ D([ _packItem["default"] ]) ], e.prototype, "packItems", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "midBg", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "packageNode", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "maskNode", void 0);
      __decorate([ D(cc.Sprite) ], e.prototype, "topSp", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "spineNode", void 0);
      __decorate([ D(cc.Label) ], e.prototype, "beforeRedLb", void 0);
      __decorate([ D(cc.Label) ], e.prototype, "afterRedLb", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "bgNode", void 0);
      __decorate([ D(cc.Node) ], e.prototype, "hengNode", void 0);
      return __decorate([ I ], e);
    }(cc.Component);
    exports["default"] = P;
    cc._RF.pop();
  }, {
    NumberUtils: "NumberUtils",
    bagMgr: "bagMgr",
    cfgMgr: "cfgMgr",
    challengeMgr: "challengeMgr",
    dateItem: "dateItem",
    evts: "evts",
    global: "global",
    idx: "idx",
    mySafeArea: "mySafeArea",
    pInfo: "pInfo",
    packItem: "packItem",
    panelMgr: "panelMgr",
    res: "res",
    skinMgr: "skinMgr",
    time: "time"
  } ],
  page_jigsaw: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "502baxKlExFebmxN98W6bhx", "page_jigsaw");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _mySafeArea = require("mySafeArea");
    var _global = require("global");
    var _jigsawMgr = require("jigsawMgr");
    var _newJigMgr = require("newJigMgr");
    var _tipMgr = require("tipMgr");
    var _jigMenu = require("jigMenu");
    var h = cc._decorator;
    var f = h.ccclass;
    var g = h.property;
    var y = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.jigsawItem = null;
        e.menuView = null;
        e.newView = null;
        e.btnsNode = null;
        e.pageNodes = null;
        e.jigsawNum = null;
        e.jigsawNum1 = null;
        e.jigTypes = [];
        e.bgNode = null;
        e.menuItem = null;
        e.THEME_H = 276;
        e.themeSpace = 10;
        e.top_offest = 30;
        e.bottom_offest = 200;
        e.last_view_inner_y = -1;
        e.themes = {};
        e.newThemes = {};
        e.touching_theme_id = 0;
        e.jigBID = 1;
        e.jigEID = 27;
        e.jigCount = 27;
        e.newJigBID = 1;
        e.newJigEID = 18;
        e.newJigCount = 18;
        e.designContH = 1100;
        e.btnsComp = [];
        e.curPageIdx = 0;
        e.isAni = !1;
        e.isFirstLoad = !0;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        this.jigEID = this.jigCount = _global["default"].jisawCount;
        this.newJigEID = this.newJigCount = _newJigMgr["default"].ins.jigsawThemeNum;
        this.node.height = cc.winSize.height;
        _global["default"].padScale && (this.bgNode.scale = _global["default"].padScale);
        _evts["default"].opE.on(this.onOperTap.bind(this));
        this.upNewJigRed();
      };
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].FINISH_PUZZLE:
          break;

         case _evts["default"].UPD_MAIN_RED:
          this.upNewJigRed();
        }
      };
      e.prototype.upNewJigRed = function() {
        this.jigsawNum1.node.parent.active = !1;
        var t = _newJigMgr["default"].ins.getUnPlacedNum();
        if (t > 0) {
          var e = t > 99 ? "99+" : t + "";
          this.jigsawNum.node.parent.active = !0;
          this.jigsawNum.string = e + "";
          this.jigsawNum.node.x = _global["default"].getCharXOffset(this.jigsawNum.string);
        } else this.jigsawNum.node.parent.active = !1, this.jigsawNum1.node.parent.active = !1;
      };
      e.prototype.start = function() {
        var t = this;
        this.scheduleOnce(function() {
          t.adapter();
          var e = _mySafeArea.getSafeAreaRect().yMin;
          var o = t.node.height - 1280 - e;
          t.newView.node.height = t.menuView.node.height = t.designContH + o;
          t.newView.node.getChildByName("view").height = t.menuView.node.getChildByName("view").height = t.designContH + o;
          t.menuView.node.y -= e / 2;
          t.newView.node.y -= e / 2;
          t.initMenuView();
        });
      };
      e.prototype.adapter = function() {
        var t = _mySafeArea.getSafeAreaRect().yMin;
        this.btnsNode.y -= t;
      };
      e.prototype.onEnable = function() {
        var t = this;
        this.isFirstLoad || this.scheduleOnce(function() {
          t.adapter();
        });
        this.isFirstLoad = !1;
      };
      e.prototype.initMenuView = function() {
        var t = (Math.ceil(this.jigCount / 3) + 1) * (this.themeSpace + this.THEME_H);
        this.menuView.content.setContentSize(cc.size(cc.winSize.width, t));
        this.initItemView1();
        this.loadMenuItem(0);
      };
      e.prototype.loadMenuItem = function(t) {
        if (t < this.jigCount) {
          var e = this.jigBID + t;
          var o = cc.instantiate(this.menuItem);
          var n = o.getComponent(_jigMenu["default"]);
          n.node.active = !0;
          o.opacity = 0;
          cc.tween(o).to(.5, {
            opacity: 255
          }).start();
          var i = t % 3;
          var r = Math.ceil(e / 3);
          var a = 128 + 232 * i;
          var s = -this.top_offest - this.THEME_H / 2 + (r - 1) * -(this.THEME_H + this.themeSpace);
          n.node.parent = this.menuView.content;
          n.node.position = cc.v3(a, s);
          this.themes[e] = n;
          n.init(t, 1);
          t++;
          this.scheduleOnce(this.loadMenuItem.bind(this, t), 0);
        } else this.reItemVis1(), this.loadNewItem(0);
      };
      e.prototype.loadNewItem = function(t) {
        if (t < this.newJigCount) {
          var e = this.newJigBID + t;
          var o = cc.instantiate(this.menuItem).getComponent(_jigMenu["default"]);
          o.node.active = !0;
          var n = t % 3;
          var i = Math.ceil(e / 3);
          var r = 128 + 232 * n;
          var a = -this.top_offest - this.THEME_H / 2 + (i - 1) * -(this.THEME_H + this.themeSpace);
          o.node.parent = this.newView.content;
          o.node.position = cc.v3(r, a);
          this.newThemes[e] = o;
          o.init(t, 2);
          t++;
          this.scheduleOnce(this.loadNewItem.bind(this, t), 0);
        } else this.initItemView2();
      };
      e.prototype.initItemView1 = function() {
        var t = this;
        this.menuView.node.on("scrolling", function() {
          t.reItemVis1();
        }, this);
        var e = _jigsawMgr["default"].ins.getNowJigsawLv();
        e >= this.jigBID && e <= this.jigEID ? this.ScrollToItem1(e) : this.ScrollToItem1(this.jigBID);
      };
      e.prototype.initItemView2 = function() {
        var t = this;
        this.newView.node.on("scrolling", function() {
          t.reItemVis2();
        }, this);
        var e = _newJigMgr["default"].ins.getNowJigsawLv();
        e >= this.newJigBID && e <= this.newJigEID ? this.ScrollToItem2(e) : this.ScrollToItem2(this.newJigBID);
      };
      e.prototype.ScrollToItem1 = function(t) {
        if (this.last_view_inner_y = -1, !(t < this.jigBID || t > this.jigEID)) {
          var e = Math.ceil(t / 3);
          var o = Math.abs(-279 * (e - 1));
          var n = Math.max(o, 0);
          var i = this.menuView.getScrollOffset();
          Math.abs(n - i.y) < Number.EPSILON || this.menuView.scrollToOffset(cc.v2(0, n), .5);
        }
      };
      e.prototype.ScrollToItem2 = function(t) {
        if (this.last_view_inner_y = -1, !(t < this.newJigBID || t > this.newJigEID)) {
          var e = Math.ceil(t / 3);
          var o = Math.abs((e - 1) * -this.THEME_H);
          var n = Math.max(o, 0);
          var i = this.newView.getScrollOffset();
          Math.abs(n - i.y) < Number.EPSILON || this.newView.scrollToOffset(cc.v2(0, n));
        }
        this.reItemVis2();
      };
      e.prototype.reItemVis1 = function() {
        var t = this.menuView.getContentPosition();
        if (!(Math.abs(this.last_view_inner_y - t.y) < .01)) {
          this.last_view_inner_y = t.y;
          for (var e = this.menuView.node, o = e.height / 2, n = e.parent.convertToWorldSpaceAR(e.position), i = n.y + o, r = n.y - o, a = this.menuView.content.children, s = 0, c = a.length; s < c; s++) {
            var l = a[s];
            var u = l.parent.convertToWorldSpaceAR(l.position);
            var p = u.y - 125 > i || u.y + 125 < r;
            l.active = !p;
          }
        }
      };
      e.prototype.reItemVis2 = function() {};
      e.prototype.chgToFes = function() {};
      e.prototype.onBtnChgJigType = function() {
        var t = this;
        if (0 !== this.curPageIdx) {
          var e = this.curPageIdx;
          var o = 0 === e ? 1 : 0;
          if (!this.isAni) {
            this.isAni = !0;
            this.jigTypes[e].active = !1;
            this.jigTypes[o].active = !0;
            this.curPageIdx = 0 === e ? 1 : 0;
            var n = this.pageNodes.children[o];
            var i = this.pageNodes.children[e];
            cc.Tween.stopAllByTarget(this.pageNodes);
            var r = o > e ? -1 : 1;
            var a = this.pageNodes.x + cc.view.getVisibleSize().width * r;
            n.x = -a;
            n && (n.active = !0);
            cc.tween(this.pageNodes).to(.5, {
              x: a
            }, {
              easing: this.customEaseInOut
            }).call(function() {
              i && (i.active = !1);
              t.isAni = !1;
            }).start();
          }
        } else _tipMgr["default"].ins.showTip("\u6682\u672a\u5f00\u542f");
      };
      e.prototype.customEaseInOut = function(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
      };
      __decorate([ g(cc.Prefab) ], e.prototype, "jigsawItem", void 0);
      __decorate([ g(cc.ScrollView) ], e.prototype, "menuView", void 0);
      __decorate([ g(cc.ScrollView) ], e.prototype, "newView", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "btnsNode", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "pageNodes", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "jigsawNum", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "jigsawNum1", void 0);
      __decorate([ g([ cc.Node ]) ], e.prototype, "jigTypes", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "bgNode", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "menuItem", void 0);
      return __decorate([ f ], e);
    }(cc.Component);
    exports["default"] = y;
    cc._RF.pop();
  }, {
    evts: "evts",
    global: "global",
    jigMenu: "jigMenu",
    jigsawMgr: "jigsawMgr",
    mySafeArea: "mySafeArea",
    newJigMgr: "newJigMgr",
    tipMgr: "tipMgr"
  } ],
  page_level: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "14ce18JY+pOW5bs9htHgdMC", "page_level");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _res = require("res");
    var _cfgMgr = require("cfgMgr");
    var _lang = require("lang");
    var _global = require("global");
    var _festivalMgr = require("festivalMgr");
    var _levelMgr = require("levelMgr");
    var _panelMgr = require("panelMgr");
    var _tipMgr = require("tipMgr");
    var _pInfo = require("pInfo");
    var _levelItem = require("levelItem");
    var m = cc._decorator;
    var v = m.ccclass;
    var _ = m.property;
    var b = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.bg = null;
        e.content = null;
        e.levelItemPrefab = null;
        e.lockedSp = null;
        e.unlockSp = null;
        e.startBtnLbl = null;
        e.jigsawPfb = null;
        e.bgSpr = null;
        e.startNode = null;
        e.startNodeGray = null;
        e.chaLb = null;
        e.secLb = null;
        e.secPro = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        var t = this;
        _res["default"].ins.getBundleByString("resSps").then(function(e) {
          var o = _global["default"].padScale ? "ipad/" : "";
          e.load("pages/page_level/" + o + "bg" + _levelMgr["default"].ins.getBgId(), cc.SpriteFrame, function(e, o) {
            t.node && t.node.isValid && !e && (t.bg.spriteFrame = o);
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
        _global["default"].padScale && (this.bg.node.width = 1080);
        this.halfHeight = cc.view.getVisibleSize().height / 2;
        this.upChapter();
        this.checkStartBtn();
        this.initScrollView();
        this.initLvl();
        _evts["default"].opE.on(this.onOperTap.bind(this));
        this.onE();
      };
      e.prototype.start = function() {
        var t = this;
        _global["default"].padScale && this.scheduleOnce(function() {
          var e = (cc.view.getVisibleSize().width - 720) / 2;
          t.chaLb.node.parent.x -= e;
        });
      };
      e.prototype.upChapter = function() {
        var t = _pInfo["default"].ins.getPuzzleLvl();
        var e = Math.ceil(t / 54);
        this.chaLb.string = "\u7b2c" + e + "\u7ae0";
        var o = t - 54 * (e - 1) - 1;
        _global["default"].levelDone && (o = 54);
        this.secLb.string = o + "/54";
        var n = o / 54;
        this.secPro.fillRange = n;
      };
      e.prototype.checkStartBtn = function() {
        var t = _pInfo["default"].ins.isMianLocked();
        this.startNodeGray.active = t;
        this.startNode.active = !t;
        _global["default"].levelDone ? this.startBtnLbl.node.parent.active = !1 : this.startBtnLbl.node.parent.active = !0;
      };
      e.prototype.initScrollView = function() {
        for (var t = Math.floor, e = cc.instantiate, o = [ 45, -57, -160, -147, -113, 18, 37, -36, -102, 14, 55, 88, 12, -52 ], n = [ 35, 110, 186, 288, 391, 423, 545, 648, 746, 806, 911, 1014, 1093, 1188 ], i = _levelMgr["default"].ins.getPuzzleLvlCount(), r = this.levelItemPrefab, a = this.lockedSp, s = this.unlockSp, c = this.content, l = (_pInfo["default"].ins.getPuzzleLvl() - 1) % i, p = _global["default"].levelDone, h = 0, f = 5; h < i; h++, 
        f++) {
          14 == f && (f = 0);
          var m = t((h + 5) / 14);
          var v = o[f];
          var _ = n[f] + 1280 * m;
          var b = e(r);
          b.name = "level_" + (h + 1);
          b.setParent(c);
          b.setPosition(v, _);
          b.active = !1;
          var w = b.getComponent(_levelItem["default"]);
          w.setLvlLbl(h + 1 + "");
          w.sp.spriteFrame = h < l || p ? s : a;
          var levelNumber = h + 1;
          var isUnlocked = h < l || p;
          if (isUnlocked) {
            b.off("click");
            b.on("click", function() {
              console.log("\ud83c\udfaf \u9009\u62e9\u5173\u5361:", levelNumber);
              _global["default"].selectedLevel = levelNumber;
              this.onStart.call(this);
            }.bind(this));
            var buttonComp = b.getComponent(cc.Button);
            if (!buttonComp) {
              buttonComp = b.addComponent(cc.Button);
              buttonComp.transition = cc.Button.Transition.SCALE;
              buttonComp.zoomScale = .9;
            }
          }
          l !== h || p || cc.tween(b).sequence(cc.tween().to(1, {
            scale: 1.1
          }), cc.tween().to(1, {
            scale: .9
          })).repeatForever().start();
          (h + 1) % 9 == 0 && this.addJigsaw(v, _, h, l);
        }
      };
      e.prototype.initLvl = function() {
        var t = _levelMgr["default"].ins.getPuzzleLvlCount();
        var e = (_pInfo["default"].ins.getPuzzleLvl() - 1) % t;
        this.startBtnLbl.string = "-" + _levelMgr["default"].ins.getLevelCost();
        var o = this.content;
        var n = 0;
        if (0 != e) {
          var i = o.children;
          var r = i[1].position.y;
          n = i[e].position.y - r;
        }
        n = (n = -this.halfHeight - n) < -4980 ? -4980 : n;
        o.setPosition(0, n);
        this.onScrollForItemVis();
      };
      e.prototype.onScrollForItemVis = function() {
        for (var t = this.content, e = t.position.y, o = this.halfHeight, n = t.children, i = 1, r = n.length; i < r; i++) {
          var a = n[i];
          var s = a.position.y + e;
          a.active = -o < s && s < o;
        }
        for (var c = this.content.children[0].children, l = (i = 0, c.length); i < l; i++) {
          var u = c[i];
          s = u.position.y + e;
          u.active = -o < s && s < o;
        }
      };
      e.prototype.onStart = function() {
        if (_pInfo["default"].ins.isMianLocked()) {
          var t = _cfgMgr["default"].serverCfg.lock_rules.main_line_lock.main_line_val;
          _tipMgr["default"].ins.showTip(_lang.lang[30001].format(t));
        } else {
          var e = _levelMgr["default"].ins.getLevelCost();
          _pInfo["default"].ins.getPower() < e ? _panelMgr["default"].ins.open("ui/ui_getRes", {
            itemId: "times"
          }) : this.startSelectedLevel();
        }
      };
      e.prototype.startSelectedLevel = function() {
        if (_global["default"].selectedLevel) {
          console.log("\ud83d\ude80 \u5f00\u59cb\u9009\u62e9\u7684\u5173\u5361:", _global["default"].selectedLevel);
          _global["default"].originalLevel || (_global["default"].originalLevel = _pInfo["default"].ins.getPuzzleLvl());
          _pInfo["default"].ins.setPuzzleLvl(_global["default"].selectedLevel);
          _global["default"].selectedLevel = null;
        }
        _global["default"].levelDone ? _panelMgr["default"].ins.open("ui/ui_selectMode", null) : _panelMgr["default"].ins.open("ui/ui_lvInfo", null);
      };
      e.prototype.addJigsaw = function(t, e, o, n) {
        var i = cc.instantiate(this.jigsawPfb);
        var r = this.content.children[0].childrenCount;
        var a = [ 218, -206, 132, -172, 194, 115 ][r];
        var s = [ 1188, 1838, 2835, 3532, 4548, 5364 ][r];
        i.off("click", this.onBtnChapter, this);
        i.on("click", this.onBtnChapter, this);
        i.setPosition(a, s);
        i.active = !1;
        i.setParent(this.content.children[0]);
        i.name = "jigsaw_" + this.content.children[0].childrenCount;
        var c;
        var l = i.children[1].getComponent(cc.Sprite);
        var p = Math.ceil((o + 1) / 9);
        _levelMgr["default"].ins.getJigsawIcon(p).then(function(t) {
          t && (l.spriteFrame = t);
        })["catch"](function() {
          console.error("getJigsawIconErr");
        });
        0 == n || "number" == typeof _global["default"].puzzlv && (_global["default"].puzzlv = _global["default"].puzzlv % _levelMgr["default"].ins.getPuzzleLvlCount(), 
        n = _global["default"].puzzlv);
        c = _global["default"].levelDone ? 9 : n >= 9 * p ? 9 : n > 9 * p - 9 ? n % 9 : 0;
        l.getMaterial(0).setProperty("height", c);
      };
      e.prototype.onBtnChapter = function() {
        _panelMgr["default"].ins.open("ui/ui_chapter", null);
      };
      e.prototype.onE = function() {
        var t = _pInfo["default"].ins.getPuzzleLvl();
        this.checkShowFinger(t <= 3);
      };
      e.prototype.onD = function() {
        this.checkShowFinger(!1);
      };
      e.prototype.checkShowFinger = function(t) {
        var e = this;
        t ? this._fingerNode ? this._fingerNode.active = !0 : _res["default"].ins.lPre("prefab/finger").then(function(t) {
          e._fingerNode = cc.instantiate(t);
          e.node.getChildByName("startBtn").addChild(e._fingerNode);
          var o = cc.v3(80, 0);
          e._fingerNode.setPosition(o);
          e._fingerNode.active = !0;
        })["catch"](function() {
          console.error("getPrefabErr");
        }) : this._fingerNode && this._fingerNode.active && (this._fingerNode.active = !1);
      };
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].UPDJIGSAW:
          this.checkJigsaw();
          break;

         case _evts["default"].FINISH_PUZZLELV:
          this.checkAndPop();
          break;

         case _evts["default"].POP_FESTIVAL:
          this.popFestival();
          break;

         case _evts["default"].UPDATA_LEVEL_TMP:
          this.updateLvlTmp();
        }
      };
      e.prototype.updateLvlTmp = function() {
        _global["default"].levelTmp;
      };
      e.prototype.checkAndPop = function() {
        this.checkJigsaw();
        this.scheduleOnce(function() {
          _global["default"].levelDone ? _panelMgr["default"].ins.open("ui/ui_selectMode", null) : 1 == _pInfo["default"].ins.getPuzzleLvl() % 54 ? _panelMgr["default"].ins.open("ui/ui_chapterDone", {}) : _panelMgr["default"].ins.open("ui/ui_lvInfo", {
            isShow: !0
          });
        }, 0);
      };
      e.prototype.popFestival = function() {
        !_festivalMgr["default"].ins.isFesEnd() && _festivalMgr["default"].ins.fesTaskDatas && _panelMgr["default"].ins.open("ui/ui_festival", null);
      };
      e.prototype.checkJigsaw = function() {
        if ("number" == typeof _global["default"].puzzlv) {
          var t = (_pInfo["default"].ins.getPuzzleLvl() - 1) % _levelMgr["default"].ins.getPuzzleLvlCount();
          if (t) {
            if (_global["default"].puzzlv != t || 1 == t) {
              var e = this.content.getChildByName("level_" + t);
              var o = Math.ceil(t / 9);
              var n = this.content.children[0].getChildByName("jigsaw_" + o);
              var i = cc.instantiate(e);
              i.setParent(e.parent);
              i.setPosition(e.position);
              var r = cc.v2(i.x, i.y);
              var a = cc.v2(n.x, n.y);
              var s = t % 9 || 9;
              var c = Math.floor((s - 1) / 3);
              var l = (s - 1) % 3;
              a.x += (l - 1) * n.width * n.scale / 3;
              a.y += (1 - c) * n.width * n.scale / 3;
              var p = a.add(r).multiplyScalar(.7);
              cc.tween(i).bezierTo(1, r, p, a).call(function() {
                i.active = !1;
                setTimeout(function() {
                  i.destroy();
                }, 100);
                n.children[1].getComponent(cc.Sprite).getMaterial(0).setProperty("height", s);
              }).start();
            }
            _global["default"].puzzlv = null;
          }
        }
      };
      e.prototype.onDestroy = function() {
        _evts["default"].opE.off(this.onOperTap.bind(this));
        this.onD();
        for (var t = _levelMgr["default"].ins.getPuzzleLvlCount(), e = 0, o = 5; e < t; e++, 
        o++) (e + 1) % 9 == 0 && this.releaseJigsaw(e);
        cc.assetManager.releaseAsset(this.bgSpr.spriteFrame);
      };
      e.prototype.releaseJigsaw = function(t) {
        var e = Math.ceil((t + 1) / 9);
        _levelMgr["default"].ins.releaseJigsawIcon(e);
      };
      e.prototype.onBtnFes = function() {
        _panelMgr["default"].ins.open("ui/ui_festival", null);
      };
      __decorate([ _(cc.Sprite) ], e.prototype, "bg", void 0);
      __decorate([ _(cc.Node) ], e.prototype, "content", void 0);
      __decorate([ _(cc.Prefab) ], e.prototype, "levelItemPrefab", void 0);
      __decorate([ _(cc.SpriteFrame) ], e.prototype, "lockedSp", void 0);
      __decorate([ _(cc.SpriteFrame) ], e.prototype, "unlockSp", void 0);
      __decorate([ _(cc.Label) ], e.prototype, "startBtnLbl", void 0);
      __decorate([ _(cc.Prefab) ], e.prototype, "jigsawPfb", void 0);
      __decorate([ _(cc.Sprite) ], e.prototype, "bgSpr", void 0);
      __decorate([ _(cc.Node) ], e.prototype, "startNode", void 0);
      __decorate([ _(cc.Node) ], e.prototype, "startNodeGray", void 0);
      __decorate([ _(cc.Label) ], e.prototype, "chaLb", void 0);
      __decorate([ _(cc.Label) ], e.prototype, "secLb", void 0);
      __decorate([ _(cc.Sprite) ], e.prototype, "secPro", void 0);
      return __decorate([ v ], e);
    }(cc.Component);
    exports["default"] = b;
    cc._RF.pop();
  }, {
    cfgMgr: "cfgMgr",
    evts: "evts",
    festivalMgr: "festivalMgr",
    global: "global",
    lang: "lang",
    levelItem: "levelItem",
    levelMgr: "levelMgr",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    res: "res",
    tipMgr: "tipMgr"
  } ],
  page_race: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57a50JN9w9EQJ5/pwcl4QsY", "page_race");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a;
    var _evts = require("evts");
    var _idx = require("idx");
    var _mySafeArea = require("mySafeArea");
    var _pConst = require("pConst");
    var _request = require("request");
    var _time = require("time");
    var _uData = require("uData");
    var _rankItem = require("rankItem");
    var _global = require("global");
    var _bagMgr = require("bagMgr");
    var _panelMgr = require("panelMgr");
    var _rankMgr = require("rankMgr");
    var _taskMgr = require("taskMgr");
    var _pInfo = require("pInfo");
    var w = cc._decorator;
    var S = w.ccclass;
    var T = w.property;
    (function(t) {
      t[t.today = 0] = "today";
      t[t.yday = 1] = "yday";
    })(a || (a = {}));
    var I = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.scrollView = null;
        e.dayTypeBtnsSps = [];
        e.friendRankBtn = null;
        e.viewItem = null;
        e.rankTop = [];
        e.myRank = null;
        e.ticketCount = null;
        e.topNode = null;
        e.loadingNode = null;
        e.bgSpr = null;
        e.last_view_inner_y = -1;
        e.THEME_H = 122;
        e.top_offest = 61;
        e.designContH = 410;
        e.itemCount = 0;
        e.items = [];
        e.bottom_offest = 0;
        e.rankData = [];
        e.nowDataTag = a.today;
        e.isFirstLoad = !0;
        e.playAni = !0;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        this.node.height = cc.winSize.height;
        _global["default"].padScale && (this.bgSpr.node.scale = _global["default"].padScale);
        this.scrollView.vertical = !1;
        _evts["default"].opE.on(this.onOperTap.bind(this));
      };
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].UPD_PANEL:
         case _evts["default"].UPD_MAIN_RED:
          this.initData();
          break;

         case _evts["default"].SKIN_CHG:
          this.setMySelf();
        }
      };
      e.prototype.start = function() {
        var t = this;
        this.scheduleOnce(function() {
          t.adapter();
          t.scrollView.node.on("scrolling", function() {
            t.RefreshThemesVisible();
          }, t);
          t.initData();
          t.refreshData();
          t.updateFriendRankBtn();
        });
      };
      e.prototype.adapter = function() {
        var t = _mySafeArea.getSafeAreaRect().yMin;
        var e = this.node.height - 1280 - t;
        this.scrollView.node.height = this.designContH + e;
        this.scrollView.node.getChildByName("view").height = this.designContH + e;
        this.topNode.y -= t;
        this.scrollView.node.y -= t / 2;
        this.loadingNode.position = this.scrollView.node.position;
      };
      e.prototype.onEnable = function() {
        var t = this;
        this.isFirstLoad || (this.scrollView.vertical = !1, this.scheduleOnce(function() {
          t.adapter(), t.scrollView.scrollToTop(), t.playAni = !0, t.last_view_inner_y = -1, 
          t.RefreshThemesVisible();
        }, .2));
        this.isFirstLoad = !1;
        var e = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
        if (e - _pInfo["default"].ins.getRankLastTimeData() >= 3600 && !_pInfo["default"].ins.isOpenLock) {
          _pInfo["default"].ins.setRankLastTimeData(e);
          var o = _idx.platform.getUserInfo();
          var n = this.myRank.getComponent(_rankItem["default"]);
          o ? o.then(function(t) {
            _request["default"].ins.updateUserInfo(t);
            n.setHeadSp(_uData["default"].ins.getHeadImg());
          }, function() {
            n.setDefaultHead();
          }) : n.setDefaultHead();
        }
      };
      e.prototype.onDisable = function() {
        this.initAni();
      };
      e.prototype.initData = function() {
        var t = _bagMgr["default"].ins.getItemCount("qw_line_ticket") || 0;
        this.ticketCount.string = t + "/1";
      };
      e.prototype.refreshData = function() {
        this.getRankData();
      };
      e.prototype.getRankData = function() {
        var t;
        var e = this;
        this.nowDataTag === a.today ? t = _rankMgr["default"].ins.getTodayRaceData() : this.nowDataTag === a.yday && (t = _rankMgr["default"].ins.getYdayRaceData());
        t.then(function(t) {
          e.dealData(t.data);
          e.nowDataTag === a.yday && _rankMgr["default"].ins.setYdayRaceRankData(t.data);
        })["catch"](function(t) {
          console.error("getRankDataErr" + t);
        });
      };
      e.prototype.dealData = function(t) {
        this.node && (this.loadingNode.active = !1);
        var e = !1;
        var o = [];
        var n = 0;
        if (this.nowDataTag === a.today ? n = _rankMgr["default"].ins.getMyRaceTodayData() : this.nowDataTag === a.yday && (n = _rankMgr["default"].ins.getMyRaceYdayData()), 
        t) for (var i in o = o.concat(t)) if ((r = o[i]).game_uid == _uData["default"].ins.getUid()) {
          r.nickname = _uData["default"].ins.getName();
          r.sort_value = n;
          r.game_uid = _uData["default"].ins.getUid();
          r.avatar = _uData["default"].ins.getHeadImg();
          e = !0;
          break;
        }
        if (!e) {
          var r = {
            nickname: _uData["default"].ins.getName(),
            sort_value: n,
            game_uid: _uData["default"].ins.getUid(),
            avatar: _uData["default"].ins.getHeadImg()
          };
          o.push(r);
        }
        o.sort(function(t, e) {
          return e.sort_value - t.sort_value;
        });
        this.rankData = o;
        this.refreshPanel();
      };
      e.prototype.refreshPanel = function() {
        this.setMySelf();
        this.last_view_inner_y = -1;
        this.itemCount = 97;
        var t = this.THEME_H * this.itemCount + this.top_offest / 2;
        this.scrollView.content.setContentSize(cc.size(cc.winSize.width, t));
        this.scrollView.scrollToTop();
        for (var e = 0; e < 3; e++) {
          var o = this.rankData[e];
          var n = this.rankTop[e];
          this.setRankTop(n, o);
        }
        this.RefreshThemesVisible();
      };
      e.prototype.RefreshThemesVisible = function(t) {
        var e = this;
        void 0 === t && (t = 0);
        var o = this.scrollView.getContentPosition();
        if (!(Math.abs(this.last_view_inner_y - o.y) < .01)) {
          this.last_view_inner_y = o.y;
          for (var n, i, r, a, s, c, l = function l() {
            n = -d * u.THEME_H - u.top_offest;
            i = u.scrollView.content.convertToWorldSpaceAR(cc.v2(0, n));
            r = u.node.convertToNodeSpaceAR(i);
            a = r.y < -p || r.y + u.THEME_H > p;
            s = d;
            var t = d + 3;
            var o = u.rankData[t];
            if (a) u.items[s] && (u.items[s].active = !1); else if (u.items[s]) {
              u.setItemInfo(u.items[s], t, o);
              var l = u.playAni;
              if (u.items[s].x = 0, l) return u.items[s].opacity = 0, u.scheduleOnce(function() {
                e.items[s].active = !0;
                e.last_view_inner_y = -1;
                e.RefreshThemesVisible(d + 1);
                l && e.showChgAni(e.items[s]);
              }, .06), "break";
              u.items[s].opacity = 255;
              u.items[s].active = !0;
            } else {
              (c = cc.instantiate(u.viewItem)).active = !0;
              c.position = cc.v3(0, -d * u.THEME_H - u.top_offest);
              c.parent = u.scrollView.content;
              u.items[s] = c;
              u.setItemInfo(c, t, o);
              var h = u.playAni;
              if (h) return c.x = (cc.winSize.width + u.items[s].width) / 2, c.opacity = 255, 
              u.scheduleOnce(function() {
                e.last_view_inner_y = -1;
                e.RefreshThemesVisible(d + 1);
                h && e.showLoadAni(c);
              }, .02), "break";
              c.opacity = 255;
              c.x = 0;
            }
            u.playAni = !1;
            d === u.itemCount - 1 && u.scheduleOnce(function() {
              e.scrollView.vertical = !0;
            }, .5);
          }, u = this, p = this.scrollView.node.height / 5 * 4, d = t; d < this.itemCount && "break" !== l(); d++) ;
        }
      };
      e.prototype.setRankTop = function(t, e) {
        var o = t.getComponent(_rankItem["default"]);
        e ? (o.setRankData(e), o.setGameUid(e.game_uid), o.setScore(e.sort_value), e.game_uid == _uData["default"].ins.getUid() ? (o.setSkin(_pInfo["default"].ins.getUsingSkin(), !1, !0), 
        o.setNickName(_uData["default"].ins.getName()), o.setHeadSp(_uData["default"].ins.getHeadImg())) : (o.setSkin(null == e ? void 0 : e.uSkin, !1, !0), 
        o.setNickName(e.nickname), e.avatar ? o.setHeadSp(e.avatar) : o.setDefaultHead())) : (o.clearFrame(), 
        o.setNickName("\u6682\u65e0"), o.setScore("0"), o.setDefaultHead());
      };
      e.prototype.setItemInfo = function(t, e, o, n) {
        void 0 === n && (n = !1);
        var i = t.getComponent(_rankItem["default"]);
        i.setIdx(Number(e) + 1 + "");
        o ? (i.setRankData(o), i.setGameUid(o.game_uid), i.setScore(o.sort_value), o.game_uid == _uData["default"].ins.getUid() ? (i.setSkin(_pInfo["default"].ins.getUsingSkin(), n), 
        i.setNickName(_uData["default"].ins.getName()), i.setHeadSp(_uData["default"].ins.getHeadImg())) : (i.setSkin(null == o ? void 0 : o.uSkin), 
        i.setNickName(o.nickname), o.avatar ? i.setHeadSp(o.avatar) : i.setDefaultHead())) : (i.clearFrame(), 
        i.setNickName("\u6682\u65e0"), i.setScore("0"), i.setDefaultHead());
      };
      e.prototype.setMySelf = function() {
        var t = this.rankData;
        for (var e in t) {
          var o = t[e];
          if (o.game_uid == _uData["default"].ins.getUid() && Number(e) < 100) return void this.setItemInfo(this.myRank, e, o, !0);
        }
        var n = 0;
        this.nowDataTag === a.today ? n = _rankMgr["default"].ins.getMyRaceTodayData() : this.nowDataTag === a.yday && (n = _rankMgr["default"].ins.getMyRaceYdayData());
        var i = this.myRank.getComponent(_rankItem["default"]);
        i.setSkin(_pInfo["default"].ins.getUsingSkin(), !0);
        i.setGameUid(_uData["default"].ins.getUid().toString());
        i.setIdx("99+");
        i.setNickName(_uData["default"].ins.getName());
        i.setScore(n + "");
        _uData["default"].ins.getHeadImg() ? i.setHeadSp(_uData["default"].ins.getHeadImg()) : i.setDefaultHead();
      };
      e.prototype.showLoadAni = function(t) {
        cc.tween(t).to(.5, {
          x: 0
        }, {
          easing: "backInOut"
        }).start();
      };
      e.prototype.showChgAni = function(t) {
        cc.tween(t).to(.5, {
          opacity: 255
        }).start();
      };
      e.prototype.onBtnStart = function() {
        _bagMgr["default"].ins.getItemCount("qw_line_ticket") <= 0 ? _panelMgr["default"].ins.open("ui/ui_getItem", {
          itemId: "qw_line_ticket",
          cb: this.initData.bind(this),
          gType: _pInfo.gameType.race
        }) : (_pInfo.chgScene(_pInfo.sceneType.game, {
          gameType: _pInfo.gameType.race
        }), _bagMgr["default"].ins.useItem("qw_line_ticket", 1, _pInfo.gameType.race), _taskMgr["default"].taskCheck(_pInfo.gameType.race));
      };
      e.prototype.onBtnTip = function() {
        _panelMgr["default"].ins.open("ui/ui_raceTip", {
          pageIdx: 2
        });
      };
      e.prototype.onBtnChange = function() {
        this.initAni();
        this.nowDataTag === a.yday ? (this.nowDataTag = a.today, this.dayTypeBtnsSps[0].active = !1, 
        this.dayTypeBtnsSps[1].active = !0, this.refreshData()) : this.nowDataTag === a.today && (this.nowDataTag = a.yday, 
        this.dayTypeBtnsSps[0].active = !0, this.dayTypeBtnsSps[1].active = !1, this.refreshData());
      };
      e.prototype.initAni = function() {
        this.unscheduleAllCallbacks();
        for (var t = 0, e = this.items.length; t < e; t++) {
          var o = this.items[t];
          cc.Tween.stopAllByTarget(o);
          o && (o.opacity = 0);
        }
        this.scrollView.stopAutoScroll();
        this.scrollView.scrollToTop();
        this.scrollView.vertical = !1;
        this.playAni = !0;
      };
      e.prototype.updateFriendRankBtn = function() {
        this.friendRankBtn.active = _idx.platform.string() === _pConst.PFCode.Bytedance;
      };
      e.prototype.onBtnFriendRank = function() {
        _idx.platform.showFriendRank(_pConst.SDKConfig.ttZoneId.race);
      };
      e.prototype.onDestroy = function() {
        cc.assetManager.releaseAsset(this.bgSpr.spriteFrame);
      };
      __decorate([ T(cc.ScrollView) ], e.prototype, "scrollView", void 0);
      __decorate([ T([ cc.Node ]) ], e.prototype, "dayTypeBtnsSps", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "friendRankBtn", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "viewItem", void 0);
      __decorate([ T([ cc.Node ]) ], e.prototype, "rankTop", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "myRank", void 0);
      __decorate([ T(cc.Label) ], e.prototype, "ticketCount", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "topNode", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "loadingNode", void 0);
      __decorate([ T(cc.Sprite) ], e.prototype, "bgSpr", void 0);
      return __decorate([ S ], e);
    }(cc.Component);
    exports["default"] = I;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    evts: "evts",
    global: "global",
    idx: "idx",
    mySafeArea: "mySafeArea",
    pConst: "pConst",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    rankItem: "rankItem",
    rankMgr: "rankMgr",
    request: "request",
    taskMgr: "taskMgr",
    time: "time",
    uData: "uData"
  } ],
  page_shop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6cfcdLL6MJNqIEFWRnYXtGU", "page_shop");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _mySafeArea = require("mySafeArea");
    var _res = require("res");
    var _cfgMgr = require("cfgMgr");
    var _global = require("global");
    var _panelMgr = require("panelMgr");
    var _skinMgr = require("skinMgr");
    var _pInfo = require("pInfo");
    var _item = require("item");
    var _shopItem1 = require("shopItem1");
    var v = cc._decorator;
    var _ = v.ccclass;
    var b = v.property;
    var w = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.bgNode = null;
        e.topSpNode = null;
        e.spineNode = null;
        e.scrollView = null;
        e.topBgSp = null;
        e.topBgSp1 = null;
        e.powerItem = null;
        e.goldItem = null;
        e.itemSc = null;
        e.itemPre = null;
        e.lightNode = null;
        e.eventFunc = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        this.node.height = cc.winSize.height;
        _global["default"].padScale && (this.bgNode.scaleX = this.topSpNode.parent.scale = _global["default"].padScale);
        this.loadGirl();
        this.onResize();
        this.eventFunc = this.onOperTap.bind(this);
        _evts["default"].opE.on(this.eventFunc);
      };
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].REFRESH_CFGDATA:
          this.initPanel();
        }
      };
      e.prototype.onResize = function() {
        var t = _mySafeArea.getSafeAreaRect().yMin;
        var e = cc.winSize.height - 1280 - t;
        this.scrollView.node.height += e;
        this.scrollView.content.parent.height += e;
        this.topBgSp.height += e;
        this.topBgSp1.height += e;
      };
      e.prototype.start = function() {
        this.initPanel();
      };
      e.prototype.loadGirl = function() {
        return __awaiter(this, void 0, void 0, function() {
          var t = this;
          return __generator(this, function() {
            _skinMgr["default"].ins.updateRole(_pInfo["default"].ins.getUsingSkin().role, this.spineNode);
            _res["default"].ins.getBundleByString("resSps").then(function(e) {
              e.load("spine/light/action", sp.SkeletonData, function(e, o) {
                if (!e && t.node && t.node.isValid) {
                  var n = new cc.Node();
                  var i = n.addComponent(sp.Skeleton);
                  i.skeletonData = o;
                  i.animation = "animation";
                  n.parent = t.lightNode;
                }
              });
            })["catch"](function(t) {
              console.error("RTool.ins.getBundleByString('resSps')", t);
            });
            return [ 2 ];
          });
        });
      };
      e.prototype.initPanel = function() {
        this.powerItem.initPower();
        this.goldItem.initGold();
        this.initPack();
      };
      e.prototype.initPack = function() {
        var t;
        var e;
        this.itemSc.content.removeAllChildren();
        var o = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.shop_config) || void 0 === e ? void 0 : e.gift;
        if (o) {
          var n = {};
          var i = _pInfo["default"].ins.getShopRecord();
          for (var r in o) {
            var a = (null == (n = o[r]) ? void 0 : n.daily_limit_nums) || 0;
            var s = i[n.key] || 0;
            if ((null == n ? void 0 : n.is_shop) && s < a) break;
          }
          if (this.itemSc.node.width = 330, n && n.props) {
            for (var r in n.props) {
              var c = n.props[r];
              var l = cc.instantiate(this.itemPre);
              l.active = !0;
              this.itemSc.content.addChild(l);
              l.getComponent(_item["default"]).initByData(r, c);
            }
            var u = this.itemSc.content.children[0].width * this.itemSc.content.childrenCount;
            this.itemSc.node.x = u > this.itemSc.node.width ? -4 : (this.itemSc.node.width - u) / 2 - 4;
            u = Math.min(u, 330);
            this.itemSc.node.width = u;
            this.itemSc.scrollToLeft();
          }
        }
      };
      e.prototype.onBtnGift = function() {
        _panelMgr["default"].ins.open("ui/ui_shopPack", null).then(function() {
          _evts["default"].opE.emit({
            action: _evts["default"].UPD_MAIN_RED
          });
        });
      };
      e.prototype.onDestroy = function() {
        _evts["default"].opE.off(this.eventFunc);
        this.eventFunc = null;
      };
      __decorate([ b(cc.Node) ], e.prototype, "bgNode", void 0);
      __decorate([ b(cc.Node) ], e.prototype, "topSpNode", void 0);
      __decorate([ b(cc.Node) ], e.prototype, "spineNode", void 0);
      __decorate([ b(cc.ScrollView) ], e.prototype, "scrollView", void 0);
      __decorate([ b(cc.Node) ], e.prototype, "topBgSp", void 0);
      __decorate([ b(cc.Node) ], e.prototype, "topBgSp1", void 0);
      __decorate([ b(_shopItem1["default"]) ], e.prototype, "powerItem", void 0);
      __decorate([ b(_shopItem1["default"]) ], e.prototype, "goldItem", void 0);
      __decorate([ b(cc.ScrollView) ], e.prototype, "itemSc", void 0);
      __decorate([ b(cc.Node) ], e.prototype, "itemPre", void 0);
      __decorate([ b(cc.Node) ], e.prototype, "lightNode", void 0);
      return __decorate([ _ ], e);
    }(cc.Component);
    exports["default"] = w;
    cc._RF.pop();
  }, {
    cfgMgr: "cfgMgr",
    evts: "evts",
    global: "global",
    item: "item",
    mySafeArea: "mySafeArea",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    res: "res",
    shopItem1: "shopItem1",
    skinMgr: "skinMgr"
  } ],
  panelMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18935KmlCBN86TB4yHqLYf5", "panelMgr");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.PanelShowResult = void 0;
    var c;
    var _evts = require("evts");
    var _res = require("res");
    var _baseUI = require("baseUI");
    var d = cc._decorator;
    var h = d.ccclass;
    var f = d.property;
    (function(t) {
      t[t.DONE = 0] = "DONE";
      t[t.FAILED = 1] = "FAILED";
      t[t.WAITING = 2] = "WAITING";
    })(c = exports.PanelShowResult || (exports.PanelShowResult = {}));
    var g = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.container = null;
        e.mask = null;
        return e;
      }
      var o;
      __extends(e, t);
      o = e;
      e.prototype.onLoad = function() {
        o.ins = this;
        this.panelQueue = [];
        this.panelList = [];
        this.mask.active = !1;
        this.mask.opacity = 0;
      };
      e.prototype.open = function(t, e, o) {
        void 0 === o && (o = {});
        return __awaiter(this, void 0, void 0, function() {
          var n;
          var i;
          var r;
          var a;
          var d;
          return __generator(this, function(s) {
            switch (s.label) {
             case 0:
              return o.inQueue && this.panelList.length > 0 ? (this.panelQueue.push({
                prefab: t,
                data: e,
                opt: o
              }), [ 2, {
                panelResult: c.WAITING
              } ]) : [ 3, 1 ];

             case 1:
              return [ 4, new Promise(function(e, o) {
                _res["default"].ins.getBundleByString("prefab").then(function(n) {
                  n.load(t, cc.Prefab, function(t, n) {
                    t ? o(t) : e(n);
                  });
                });
              }) ];

             case 2:
              return n = s.sent(), d = this, cc.isValid(n) ? (i = cc.instantiate(n), (r = i.getComponent(_baseUI["default"])) ? ((a = i.getComponent(cc.Widget) || i.addComponent(cc.Widget)).verticalCenter = 0, 
              a.horizontalCenter = 0, a.isAlignVerticalCenter = !0, a.isAlignHorizontalCenter = !0, 
              this.currentPanel = i, this.panelList.push({
                prefab: t,
                data: e,
                opt: o,
                node: i
              }), i.setParent(this.container), r.show(e), this.ensureMask(), _evts["default"].laE.emit({
                comp: r
              }), [ 2, new Promise(function(t) {
                r.setCb(function(e, o) {
                  d.currentPanel = null;
                  e.destroy();
                  for (var n = 0; n < d.panelList.length; n++) if (e == d.panelList[n].node) {
                    d.panelList.splice(n, 1);
                    break;
                  }
                  t({
                    panelResult: c.DONE,
                    values: o
                  });
                  d.onNext();
                  d.scheduleOnce(function() {
                    d.ensureMask();
                    _evts["default"].laE.emit({
                      comp: null
                    });
                  }, 0);
                });
              }) ]) : (console.warn("failed to load component of prefab", t), [ 2, {
                panelResult: c.FAILED
              } ])) : (console.warn("invalid prefab", t), [ 2, {
                panelResult: c.FAILED
              } ]);

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      e.prototype.getPanelByPath = function(t) {
        for (var e = this.panelList, o = e.length - 1; o >= 0; --o) if (e[o].prefab === t && null != e[o].node) {
          var n = e[o].node.getComponent(_baseUI["default"]);
          if (null != n) return n;
        }
        return null;
      };
      e.prototype.close = function(t) {
        for (var e = this.panelList, o = e.length - 1; o >= 0; --o) if (e[o].prefab === t) {
          var n = e[o].node;
          if (null != n) {
            var i = n.getComponent(_baseUI["default"]);
            null != i && i.hide();
          }
          break;
        }
      };
      e.prototype.closeAllPanel = function() {
        this.panelQueue = [];
        for (var t = this.panelList, e = t.length - 1; e >= 0; --e) if (null != t[e].node) {
          var o = t[e].node.getComponent(_baseUI["default"]);
          null != o && o.hide();
        }
      };
      e.prototype.onNext = function() {
        if (!(this.panelList.length > 0) && null == this.currentPanel && 0 != this.panelQueue.length) {
          var t = this.panelQueue.shift();
          this.open(t.prefab, t.data, t.opt);
        }
      };
      e.prototype.ensureMask = function() {
        var t = this.panelList;
        var e = t.length;
        var o = t[e - 1];
        var n = this.container.childrenCount;
        var i = this.mask;
        if (e <= 0) i.opacity = 0, i.isValid && (i.active = !1), _evts["default"].opE.emit({
          action: _evts["default"].CHECK_WX_BTNS
        }); else {
          var r = o.node;
          i.active = !0;
          cc.tween(i).to(.2, {
            opacity: 200
          }).start();
          r.active = !0;
          i.setSiblingIndex(n);
          r.setSiblingIndex(n);
          _evts["default"].opE.emit({
            action: _evts["default"].HIDE_WX_BTNS
          });
        }
      };
      e.prototype.onMaskClick = function() {
        var t = this.panelList;
        var e = t.length;
        if (!(e <= 0)) {
          var o = t[e - 1];
          var n = o.opt;
          var i = o.node;
          !n.MaskNoHide && i.getComponent(_baseUI["default"]).hide();
        }
      };
      e.prototype.hasPop = function() {
        return this.panelList.length > 0;
      };
      __decorate([ f(cc.Node) ], e.prototype, "container", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "mask", void 0);
      return o = __decorate([ h ], e);
    }(cc.Component);
    exports["default"] = g;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    evts: "evts",
    res: "res"
  } ],
  pf: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d08eGcGmRG/bMCOUzEMeOL", "pf");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _request = require("request");
    var i = function() {
      function t() {}
      t.prototype.syncTime = function() {
        return new Promise(function(t) {
          t(Date.now());
        });
      };
      return t;
    }();
    exports["default"] = i;
    cc._RF.pop();
  }, {
    request: "request"
  } ],
  qq: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7bad26df+hPn6RIm3jVIcMH", "qq");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _c = require("c");
    var _evts = require("evts");
    var _pConst = require("pConst");
    var c = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.isQQ = !0;
        return e;
      }
      __extends(e, t);
      Object.defineProperty(e.prototype, "appId", {
        get: function get() {
          return "1110513462";
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.canUse = function() {
        return !0;
      };
      e.prototype.doWatchAD = function() {
        var t = this;
        return this.noAd ? (_evts["default"].adE.emit(_c.ADE.VIDEO_END), Promise.reject(_pConst.VideoFailCode.NO_AD)) : this.noVideo ? void Promise.reject(_pConst.VideoFailCode.NO_AD) : (_evts["default"].adE.emit(_c.ADE.VIDEO), 
        this.showLoading(), new Promise(function(e, o) {
          var n = wx.createRewardedVideoAd({
            adUnitId: "bb8f5f005098f1ca2e16e73448b4bc8c"
          });
          n.onError(function() {});
          n.onLoad(function() {});
          n.onClose(function t(i) {
            null != n && n.offClose(t), null != i && i.isEnded ? (_evts["default"].adE.emit(_c.ADE.VIDEO_END), 
            e(1)) : (_evts["default"].adE.emit(_c.ADE.VIDEO_END), o(_pConst.VideoFailCode.CANCELED));
          });
          n.load().then(function() {
            n.show().then(function() {})["catch"](function() {
              _evts["default"].adE.emit(_c.ADE.VIDEO_END);
              o(_pConst.VideoFailCode.NO_AD);
            }).then(function() {
              t.hideLoading();
            });
          })["catch"](function() {
            t.hideLoading();
          });
        }));
      };
      e.prototype.preloadVideo = function() {
        return !1;
      };
      e.prototype.reportEvent = function() {};
      e.prototype.share = function() {
        return new Promise(function(t) {
          var e = _pConst.SDKConfig.shareData();
          qq.shareAppMessage({
            title: e.title,
            imageUrl: e.imageUrl,
            query: e.query,
            success: function success(e) {
              t(e.data);
            },
            fail: function fail() {
              t(0);
            }
          });
        });
      };
      return e;
    }(require("wx")["default"]);
    exports["default"] = c;
    cc._RF.pop();
  }, {
    c: "c",
    evts: "evts",
    pConst: "pConst",
    wx: "wx"
  } ],
  questItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5625bI4JLpBOohvs4j5MumY", "questItem");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _idx = require("idx");
    var _veBtn = require("veBtn");
    var _lang = require("lang");
    var _panelMgr = require("panelMgr");
    var _taskMgr = require("taskMgr");
    var _loading = require("loading");
    var _item = require("item");
    var y = cc._decorator;
    var m = y.ccclass;
    var v = y.property;
    var _ = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.nameLbl = null;
        e.itemsNode = null;
        e.itemPrefab = null;
        e.pro = null;
        e.proLbl = null;
        e.getBtnNode = null;
        e.goBtnNode = null;
        e.adNode = null;
        e.goImgNode = null;
        e.scrollView = null;
        e.getedNode = null;
        e.questPool = new cc.NodePool(_item["default"]);
        e.eventFunc = null;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t) {
        for (var e in this._taskData = t, this.nameLbl.string = _lang.lang[t.temp.key], 
        this.nameLbl.font = _loading.DEFAULTFONT, this.pro.progress = 0, this.scrollView.node.width = 360, 
        cc.tween(this.pro).to(.5, {
          progress: t.data.count / t.temp.nums
        }).start(), this.proLbl.string = t.data.count + "/" + t.temp.nums, t.temp.val) if (t.temp.val.hasOwnProperty(e)) {
          var o = this.questPool.get();
          o || (o = cc.instantiate(this.itemPrefab));
          this.scrollView.content.addChild(o);
          o.getComponent(_item["default"]).init(t.temp, e);
        }
        var n = this.scrollView.content.children[0].width * this.scrollView.content.childrenCount;
        if (this.scrollView.node.x = n > this.scrollView.node.width ? -283 : (this.scrollView.node.width - n) / 2 - 283, 
        n = Math.min(n, 360), this.scrollView.node.width = n, this.scrollView.scrollToLeft(), 
        this.adNode.active = !1, this.goImgNode.x = 0, this.goBtnNode.getComponent(_veBtn["default"]) && this.goBtnNode.removeComponent(_veBtn["default"]), 
        t.temp.get_by == _taskMgr.TaskType.ad_reward) {
          var i = this.goBtnNode.addComponent(_veBtn["default"]);
          var r = new cc.Component.EventHandler();
          r.target = this.node;
          r.component = "questItem";
          r.handler = "onWatchEnd";
          "task_1" == t.temp.key && (r.customEventData = "\u6bcf\u65e5\u4efb\u52a1-\u9053\u5177\u793c\u5305");
          i.onWatchEndEvent = r;
          this.adNode.active = !0;
          this.goImgNode.x = 25;
        }
        this.goBtnNode.active = this._taskData.data.state === _taskMgr.taskState.Receive;
        this.getBtnNode.active = this._taskData.data.state === _taskMgr.taskState.Finish;
        this.getedNode.active = this._taskData.data.state === _taskMgr.taskState.Rewared;
      };
      e.prototype.updateTask = function(t) {
        t && t.temp.key == this._taskData.temp.key && (this._taskData = t, cc.tween(this.pro).to(.5, {
          progress: t.data.count / t.temp.nums
        }).start(), this.proLbl.string = t.data.count + "/" + t.temp.nums, this.goBtnNode.active = this._taskData.data.state === _taskMgr.taskState.Receive, 
        this.getBtnNode.active = this._taskData.data.state === _taskMgr.taskState.Finish, 
        this.getedNode.active = this._taskData.data.state === _taskMgr.taskState.Rewared);
      };
      e.prototype.unuse = function() {
        var t = this;
        this.scrollView.content.children.forEach(function(e) {
          t.questPool.put(e);
        });
        this.scrollView.content.removeAllChildren();
      };
      e.prototype.reuse = function() {};
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].UPDTASK:
          this.updateTask(t.data);
        }
      };
      e.prototype.onEnable = function() {
        this.goBtnNode.on("click", this.jumpPage, this);
        this.getBtnNode.on("click", this.onAward, this);
        this.eventFunc = this.onOperTap.bind(this);
        _evts["default"].opE.on(this.eventFunc);
      };
      e.prototype.onDisable = function() {
        this.goBtnNode.off("click", this.jumpPage, this);
        this.getBtnNode.off("click", this.onAward, this);
        _evts["default"].opE.off(this.eventFunc);
        this.eventFunc = null;
      };
      e.prototype.jumpPage = function(t) {
        var e;
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(o) {
            switch (o.label) {
             case 0:
              if (this._taskData.data.state != _taskMgr.taskState.Receive) return [ 2 ];
              switch (this._taskData.temp.get_by) {
               case "ad_reward":
                return [ 3, 1 ];

               case "cg_line":
                return [ 3, 2 ];

               case "qw_line":
                return [ 3, 3 ];

               case "daily_challenge":
                return [ 3, 4 ];

               case "share":
                return [ 3, 5 ];
              }
              return [ 3, 7 ];

             case 1:
              return null === (e = this.goBtnNode.getComponent(_veBtn["default"])) || void 0 === e || e.onClick(t), 
              [ 3, 8 ];

             case 2:
              return _panelMgr["default"].ins.closeAllPanel(), _evts["default"].opE.emit({
                action: _evts["default"].MAINJUMP,
                data: 2
              }), [ 3, 8 ];

             case 3:
              return _panelMgr["default"].ins.closeAllPanel(), _evts["default"].opE.emit({
                action: _evts["default"].MAINJUMP,
                data: 4
              }), [ 3, 8 ];

             case 4:
              return _panelMgr["default"].ins.closeAllPanel(), _evts["default"].opE.emit({
                action: _evts["default"].MAINJUMP,
                data: 3
              }), [ 3, 8 ];

             case 5:
              return [ 4, _idx.platform.share() ];

             case 6:
              return o.sent() && _taskMgr["default"].doTask(this._taskData.temp.key), [ 3, 8 ];

             case 7:
              return [ 3, 8 ];

             case 8:
              return [ 2 ];
            }
          });
        });
      };
      Object.defineProperty(e.prototype, "taskData", {
        get: function get() {
          return this._taskData;
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.onAward = function() {
        _taskMgr["default"].updateTask(this._taskData);
        for (var t = [], e = this.scrollView.content.childrenCount - 1; e >= 0; e--) {
          var o = this.scrollView.content.children[e];
          var n = o.parent.convertToWorldSpaceAR(o.position);
          var i = {};
          i.itemId = o.getComponent(_item["default"]).key;
          i.worldPos = n;
          i.value = o.getComponent(_item["default"]).count;
          t.push(i);
        }
        _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: t
        });
      };
      e.prototype.onWatchEnd = function() {
        cc.log("\u5e7f\u544a\u7684\u56de\u8c03");
        _taskMgr["default"].doTask(this._taskData.temp.key);
      };
      __decorate([ v(cc.Label) ], e.prototype, "nameLbl", void 0);
      __decorate([ v(cc.Node) ], e.prototype, "itemsNode", void 0);
      __decorate([ v(cc.Prefab) ], e.prototype, "itemPrefab", void 0);
      __decorate([ v(cc.ProgressBar) ], e.prototype, "pro", void 0);
      __decorate([ v(cc.Label) ], e.prototype, "proLbl", void 0);
      __decorate([ v(cc.Node) ], e.prototype, "getBtnNode", void 0);
      __decorate([ v(cc.Node) ], e.prototype, "goBtnNode", void 0);
      __decorate([ v(cc.Node) ], e.prototype, "adNode", void 0);
      __decorate([ v(cc.Node) ], e.prototype, "goImgNode", void 0);
      __decorate([ v(cc.ScrollView) ], e.prototype, "scrollView", void 0);
      __decorate([ v(cc.Node) ], e.prototype, "getedNode", void 0);
      return __decorate([ m ], e);
    }(cc.Component);
    exports["default"] = _;
    cc._RF.pop();
  }, {
    evts: "evts",
    idx: "idx",
    item: "item",
    lang: "lang",
    loading: "loading",
    panelMgr: "panelMgr",
    taskMgr: "taskMgr",
    veBtn: "veBtn"
  } ],
  raceRankItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e2e8kHoUZNVrkBvdUrlq5X", "raceRankItem");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _rankItem = require("rankItem");
    var s = cc._decorator;
    var c = s.ccclass;
    var l = s.property;
    var u = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.idxIcon = null;
        e.idxBg = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        this.scoreLb.string = "";
        this.idxLb.string = "";
        this.nickNameLb.string = "";
        this.idxIcon && (this.idxIcon.spriteFrame = null);
      };
      e.prototype.initItem = function(t, e) {
        this.setNickName(t.nick);
        this.setScore(t.score);
        e ? this.setIdxSp(e) : this.setIdx(t.idx);
        t.headUrl ? this.setHeadSp(t.headUrl) : this.setDefaultHead();
      };
      e.prototype.setIdx = function(e) {
        t.prototype.setIdx.call(this, e);
        this.idxBg.active = !0;
      };
      e.prototype.setIdxSp = function(t) {
        this.idxIcon.spriteFrame = t;
        this.idxBg.active = !1;
      };
      __decorate([ l(cc.Sprite) ], e.prototype, "idxIcon", void 0);
      __decorate([ l(cc.Node) ], e.prototype, "idxBg", void 0);
      return __decorate([ c ], e);
    }(_rankItem["default"]);
    exports["default"] = u;
    cc._RF.pop();
  }, {
    rankItem: "rankItem"
  } ],
  random_notice: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1568XYcd5KxbBwNiWbgXvK", "random_notice");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = (a.property, function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.tmpV3 = new cc.Vec3();
        return e;
      }
      __extends(e, t);
      e.prototype.init = function() {
        this.preV3 = this.node.position;
        this.isMoveing = !0;
      };
      e.prototype.update = function() {
        var t = this.preV3;
        var e = this.node.position;
        var o = this.tmpV3;
        cc.Vec3.subtract(o, e, t);
        t.set(e);
        var n = cc.Vec3.angle(o, cc.Vec3.RIGHT);
        var i = cc.misc.radiansToDegrees(n);
        this.node.angle = i - 90;
      };
      return __decorate([ s ], e);
    }(cc.Component));
    exports["default"] = c;
    cc._RF.pop();
  }, {} ],
  rankItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64824nHmPRCBqzNVohG2VVh", "rankItem");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _res = require("res");
    var _global = require("global");
    var _panelMgr = require("panelMgr");
    var _skinMgr = require("skinMgr");
    var u = cc._decorator;
    var p = u.ccclass;
    var d = u.property;
    var h = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.nickNameLb = null;
        e.scoreLb = null;
        e.idxLb = null;
        e.headSp = null;
        e.headFSp = null;
        e.nameFSp = null;
        e.game_uid = "";
        e.rankInfo = {};
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        this.setHeadBtn();
        this.game_uid = "";
      };
      e.prototype.setNickName = function(t) {
        t.length > 6 && (t = t.substring(0, 5) + "...");
        this.nickNameLb.string = t;
      };
      e.prototype.setScore = function(t) {
        this.scoreLb.string = t;
      };
      e.prototype.setIdx = function(t) {
        this.idxLb.string = t;
      };
      e.prototype.setHeadSp = function(t) {
        var e = this;
        t ? cc.assetManager.loadRemote(t, {
          ext: _global.headImgExt
        }, function(t, o) {
          e.node && e.node.isValid && (t ? e.setDefaultHead() : e.headSp.spriteFrame = new cc.SpriteFrame(o));
        }) : this.setDefaultHead();
      };
      e.prototype.setDefaultHead = function() {
        _res["default"].ins.lSF("common/head_1", this.headSp);
      };
      e.prototype.setHeadBtn = function() {};
      e.prototype.setGameUid = function(t) {
        this.game_uid = t;
      };
      e.prototype.setRankData = function(t) {
        this.rankInfo = t;
      };
      e.prototype.setSkin = function(t, e, o) {
        void 0 === e && (e = !1);
        void 0 === o && (o = !1);
        t ? (t.headFrame && 1 != t.headFrame ? _skinMgr["default"].ins.updateHeadFrame(t.headFrame, this.headFSp, !0) : _skinMgr["default"].ins.updateHeadFrame(1, this.headFSp, !0), 
        t.nameFrame && 1 != t.nameFrame ? _skinMgr["default"].ins.updateNameFrame(t.nameFrame, this.nameFSp) : this.nameFSp.spriteFrame = null) : (_skinMgr["default"].ins.updateHeadFrame(1, this.headFSp, !0), 
        this.nameFSp.spriteFrame = null);
      };
      e.prototype.clearFrame = function() {
        _skinMgr["default"].ins.updateHeadFrame(1, this.headFSp, !0);
        this.nameFSp.spriteFrame = null;
      };
      e.prototype.clickHead = function() {
        this.game_uid && _panelMgr["default"].ins.open("ui/ui_userInfo", {
          gameUid: this.game_uid,
          baseData: this.rankInfo
        });
      };
      e.nameColor1 = new cc.Color(166, 86, 31);
      e.nameColor2 = new cc.Color(64, 109, 30);
      e.nameColor3 = new cc.Color(152, 54, 38);
      __decorate([ d(cc.Label) ], e.prototype, "nickNameLb", void 0);
      __decorate([ d(cc.Label) ], e.prototype, "scoreLb", void 0);
      __decorate([ d(cc.Label) ], e.prototype, "idxLb", void 0);
      __decorate([ d(cc.Sprite) ], e.prototype, "headSp", void 0);
      __decorate([ d(cc.Sprite) ], e.prototype, "headFSp", void 0);
      __decorate([ d(cc.Sprite) ], e.prototype, "nameFSp", void 0);
      return __decorate([ p ], e);
    }(cc.Component);
    exports["default"] = h;
    cc._RF.pop();
  }, {
    global: "global",
    panelMgr: "panelMgr",
    res: "res",
    skinMgr: "skinMgr"
  } ],
  rankMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e7bedtBQEVEDLcEkhi9q9lw", "rankMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.rankSortType = exports.rankType = exports.rankTag = void 0;
    var n;
    var i;
    var r;
    var _idx = require("idx");
    var _request = require("request");
    var _time = require("time");
    var _pInfo = require("pInfo");
    (function(t) {
      t.mainScore = "main_score", t.dailyScore = "daily_score", t.mainWin = "main_win", 
      t.dailyWin = "daily_win", t.raceScore = "race_score";
    })(n = exports.rankTag || (exports.rankTag = {}));
    (function(t) {
      t.Total = "total", t.Today = "daily";
    })(i = exports.rankType || (exports.rankType = {}));
    (function(t) {
      t.Desc = "desc";
      t.Asc = "asc";
    })(r = exports.rankSortType || (exports.rankSortType = {}));
    var u = function() {
      function t() {
        this.lastRequestTime = 0;
        this.lastReqRaceTime = 0;
        this.ttMScore = null;
        this.ttDScore = null;
        this.ttMWin = null;
        this.ttDWin = null;
        this.tdMScore = null;
        this.tdDScore = null;
        this.tdMWin = null;
        this.tdDWin = null;
        this.tdRScore = null;
        this.localData = null;
      }
      Object.defineProperty(t, "ins", {
        get: function get() {
          return this._ins || (this._ins = new t());
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.uploadRankData = function() {
        var t = i.Total;
        var e = n.mainScore;
        this.uploadRankDataByTag(e, t);
        e = n.mainWin;
        this.uploadRankDataByTag(e, t);
        e = n.dailyScore;
        this.uploadRankDataByTag(e, t);
        e = n.dailyWin;
        this.uploadRankDataByTag(e, t);
        t = i.Today;
        e = n.mainScore;
        this.uploadRankDataByTag(e, t);
        e = n.dailyScore;
        this.uploadRankDataByTag(e, t);
        e = n.mainWin;
        this.uploadRankDataByTag(e, t);
        e = n.dailyWin;
        this.uploadRankDataByTag(e, t);
      };
      t.prototype.uploadRankDataByTag = function(t, e) {
        var o = _pInfo["default"].ins;
        var n = JSON.parse(JSON.stringify(o.getLastUploadRankData()));
        var i = this.getValueAndKeyByTag(t, e);
        var a = i[0];
        var c = i[1];
        var u = n[c];
        var p = Number(a);
        if (p > Number(u)) {
          var d = this.getRankDataByType(t, e);
          n[c] = a;
          d.then(function(n) {
            var i = n.data;
            var a = 0;
            if (i) {
              i.sort(function(t, e) {
                return e.sort_value - t.sort_value;
              });
              var c = i[99];
              c && (a = c.sort_value);
            }
            if (p > Number(a)) {
              var l = {};
              l.uSkin = o.getUsingSkin();
              var u = {
                rank_tag: t,
                sort_value: p,
                sort_type: r.Desc,
                extra_data: l
              };
              _request["default"].ins.uploadRank(u, e);
            }
          })["catch"](function() {
            console.error("getRankDataErr");
          });
          o.setLastUploadRankData(n);
        }
      };
      t.prototype.getValueAndKeyByTag = function(t, e) {
        var o = _pInfo["default"].ins;
        var r = Object.assign({}, _pInfo["default"].ins.getRecordData());
        if (e === i.Total) switch (t) {
         case n.mainScore:
          return [ r.main.tPoints, "ttMScore" ];

         case n.dailyScore:
          return [ r.daily.tPoints, "ttDScore" ];

         case n.mainWin:
          return [ r.main.heWins, "ttMWin" ];

         case n.dailyWin:
          return [ r.daily.heWins, "ttDWin" ];
        } else if (e === i.Today) switch (t) {
         case n.mainScore:
          return [ o.getTodayMainScore(), "tdMScore" ];

         case n.dailyScore:
          return [ o.getTodayDailyScore(), "tdDScore" ];

         case n.mainWin:
          return [ o.getTodayMainWin(), "tdMWin" ];

         case n.dailyWin:
          return [ o.getTodayDailyWin(), "tdDWin" ];
        }
      };
      t.prototype.uploadRaceData = function() {
        this.getTodayRaceData().then(function(t) {
          var e = _pInfo["default"].ins;
          var o = t.data;
          o && o.sort(function(t, e) {
            return e.sort_value - t.sort_value;
          });
          var a = e.getLastUploadRankData();
          var c = n.raceScore;
          var u = e.getTodayRaceScore();
          var p = a.tdRScore;
          var d = 0;
          var h = o[99];
          if (h && (d = h.sort_value), Number(u) > Number(p) && Number(u) > Number(d)) {
            a.tdRScore = u;
            var f = {};
            f.uSkin = e.getUsingSkin();
            var g = {
              rank_tag: c,
              sort_value: u,
              sort_type: r.Desc,
              extra_data: f
            };
            _request["default"].ins.uploadRank(g, i.Today);
          }
          e.setLastUploadRankData(a);
        })["catch"](function() {
          console.error("uploadRaceData");
        });
      };
      t.prototype.getRankDataByType = function(t, e, o) {
        void 0 === o && (o = r.Desc);
        var n = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
        var a = n - this.lastRequestTime >= 3600;
        a && this.clearData();
        var l = this.getCachedDataByType(t, e);
        if (!a && l) return this.getCachedDataByType(t, e);
        if (this.lastRequestTime = n, e === i.Total) {
          var u = _request["default"].ins.getRank(t, e, o);
          this.setCachedDataByType(t, e, u);
          return u;
        }
        if (e === i.Today) {
          var p = _time["default"].ins.serverTime || new Date().getTime();
          p -= (p + 28800) % 86400;
          p *= 1e3;
          var d = _request["default"].ins.getRank(t, e, o, p);
          this.setCachedDataByType(t, e, d);
          return d;
        }
      };
      t.prototype.getMyRankDataByTag = function(t, e) {
        var o = _pInfo["default"].ins.getRecordData();
        if (e === i.Today) switch (t) {
         case n.mainScore:
          return _pInfo["default"].ins.getTodayMainScore();

         case n.dailyScore:
          return _pInfo["default"].ins.getTodayDailyScore();

         case n.mainWin:
          return _pInfo["default"].ins.getTodayMainWin();

         case n.dailyWin:
          return _pInfo["default"].ins.getTodayDailyWin();
        } else if (e === i.Total) switch (t) {
         case n.mainScore:
          return o.main.tPoints;

         case n.dailyScore:
          return o.daily.tPoints;

         case n.mainWin:
          return o.main.heWins;

         case n.dailyWin:
          return o.daily.heWins;
        }
      };
      t.prototype.getTodayRaceData = function() {
        var t = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
        var e = t - this.lastReqRaceTime >= 3600;
        e && (this.tdDWin = null);
        var o = this.getCachedDataByType(n.raceScore, i.Today);
        if (e || !o) {
          this.lastReqRaceTime = t;
          var a = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
          a -= (a + 28800) % 86400;
          a *= 1e3;
          var l = _request["default"].ins.getRank(n.raceScore, i.Today, r.Desc, a);
          this.setCachedDataByType(n.raceScore, i.Today, l);
          return l;
        }
        return this.getCachedDataByType(n.raceScore, i.Today);
      };
      t.prototype.getYdayRaceData = function() {
        var t = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
        t -= 86400;
        t -= (t + 28800) % 86400;
        t *= 1e3;
        var e = this.getYdayRaceRankData();
        if (0 != e.length) {
          var o = {
            data: e
          };
          return Promise.resolve(o);
        }
        return _request["default"].ins.getRank(n.raceScore, i.Today, r.Desc, t);
      };
      t.prototype.getMyRaceTodayData = function() {
        return _pInfo["default"].ins.getTodayRaceScore();
      };
      t.prototype.getMyRaceYdayData = function() {
        return _pInfo["default"].ins.getYdayRaceScore();
      };
      t.prototype.setCachedDataByType = function(t, e, o) {
        if (e === i.Total) switch (t) {
         case n.mainScore:
          this.ttMScore = o;
          break;

         case n.dailyScore:
          this.ttDScore = o;
          break;

         case n.mainWin:
          this.ttMWin = o;
          break;

         case n.dailyWin:
          this.ttDWin = o;
        } else if (e === i.Today) switch (t) {
         case n.mainScore:
          this.tdMScore = o;
          break;

         case n.dailyScore:
          this.tdDScore = o;
          break;

         case n.mainWin:
          this.tdMWin = o;
          break;

         case n.dailyWin:
          this.tdDWin = o;
          break;

         case n.raceScore:
          this.tdDWin = o;
        }
      };
      t.prototype.getCachedDataByType = function(t, e) {
        if (e === i.Total) switch (t) {
         case n.mainScore:
          return this.ttMScore;

         case n.dailyScore:
          return this.ttDScore;

         case n.mainWin:
          return this.ttMWin;

         case n.dailyWin:
          return this.ttDWin;
        } else if (e === i.Today) switch (t) {
         case n.mainScore:
          return this.tdMScore;

         case n.dailyScore:
          return this.tdDScore;

         case n.mainWin:
          return this.tdMWin;

         case n.dailyWin:
         case n.raceScore:
          return this.tdDWin;
        }
      };
      t.prototype.clearData = function() {
        this.ttMScore = null;
        this.ttDScore = null;
        this.ttMWin = null;
        this.ttDWin = null;
        this.tdMScore = null;
        this.tdDScore = null;
        this.tdMWin = null;
        this.tdDWin = null;
      };
      t.prototype.getYdayRaceRankData = function() {
        var t = this.getLocalRaceRankData().ydayRRData;
        return null == t ? [] : t;
      };
      t.prototype.setYdayRaceRankData = function(t) {
        this.setLocalRaceRankData({
          ydayRRData: t
        });
      };
      t.prototype.setLocalRaceRankData = function(t) {
        var e = this.getLocalRaceRankData();
        this.localData = Object.assign(Object.assign({}, e), t);
        _idx.platform.setStorage("ydayRankData", this.localData);
      };
      t.prototype.getLocalRaceRankData = function() {
        null == this.localData && (this.localData = _idx.platform.getStorage("ydayRankData") || {});
        return this.localData;
      };
      return t;
    }();
    exports["default"] = u;
    cc._RF.pop();
  }, {
    idx: "idx",
    pInfo: "pInfo",
    request: "request",
    time: "time"
  } ],
  request: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c853fD3v1xDPam4tdNFLok2", "request");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _cfgMgr = require("cfgMgr");
    var _idx = require("idx");
    var _uData = require("uData");
    var _pConst = require("pConst");
    var _time = require("time");
    var _evts = require("evts");
    var _flyio = require("flyio");
    var _errorCode = require("errorCode");
    var h = window.fly || _flyio["default"];
    var f = function() {
      function t() {
        this._urlCache = {};
        this.APPID = _idx.platform.appId;
      }
      Object.defineProperty(t, "ins", {
        get: function get() {
          this._ins || (this._ins = new t());
          return this._ins;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.getUserToken = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(t) {
            switch (t.label) {
             case 0:
              return this._userToken ? [ 3, 2 ] : [ 4, this.desynclogin() ];

             case 1:
              t.sent(), t.label = 2;

             case 2:
              return [ 2, this._userToken ];
            }
          });
        });
      };
      Object.defineProperty(t.prototype, "userToken", {
        set: function set(t) {
          this._userToken = t;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype._post = function(t, e, o, n, i, r) {
        return;
        var s;
      };
      t.prototype.desynclogin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var e;
          var o;
          var n;
          var r;
          var s;
          var c;
          return __generator(this, function(i) {
            switch (i.label) {
             case 0:
              return [ 4, _idx.platform.login() ];

             case 1:
              return e = i.sent(), o = e.code, n = e.anonymous_code, o ? [ 4, t.ins.login(o, n) ] : [ 2 ];

             case 2:
              if (0 == (r = i.sent()).state) throw new Error("\u767b\u5f55\u72b6\u6001\u5417\u9519\u8bef\uff1a" + r.state);
              return s = t.ins, c = r.data, _time["default"].ins.sync(r.server_time), s.userToken = c.token, 
              s.openId = c.openid, [ 2 ];
            }
          });
        });
      };
      t.prototype.getJson = function() {
        var t = {};
        t.appid = this.APPID;
        return this._post("/v1/GameConfigApi/get_game_init_config", "N644UF9VMU9OFTTYHOV3DEGY7L2DMMVP", t, !1);
      };
      t.prototype.login = function(t, e, o, n) {
        var i = {};
        i.appid = this.APPID;
        i.system_info = _idx.platform.getSystemData();
        i.code = t;
        i.openid = o;
        i.unionid = n;
        _pConst.PFCode.Alipay === _idx.platform.string() && (i.grant_type = "authorization_code");
        i.anonymous_code = e;
        i.launch_options = _uData["default"].ins.getLaunchOption();
        return this._post("/v1/GameConfigApi/game_user_login", "N644UF9VMU9OFTTYHOV3DEGY7L2DMMVP", i, void 0, 2e3);
      };
      t.prototype.getTime = function() {
        return this._post("/v1/GameConfigApi/game_user_login", "123456", {}, void 0, 2e3);
      };
      t.prototype.updateUserInfo = function(t) {
        var e = this;
        this.getUserToken().then(function(o) {
          if (o && t) {
            var n = _uData["default"].ins;
            n.setHeadImg(t.avatar || t.avatarUrl);
            n.setName(t.nickName || t.nickname);
            e._post("/v1/GameApi/update_game_user", o, {
              user_info: t
            });
            _evts["default"].opE.emit({
              action: _evts["default"].UPD_TOP_HEADINFO
            });
          }
        })["catch"](function(t) {
          console.error("updateUserInfoErr", t);
        });
      };
      t.prototype.addHomepageConsult = function() {
        return __awaiter(this, void 0, void 0, function() {
          var t;
          var e;
          var o;
          return __generator(this, function(n) {
            switch (n.label) {
             case 0:
              return t = "/v1/GameApi/get_addHome", (e = {}).alipay_user_id = this.openId, [ 4, this.getUserToken() ];

             case 1:
              return o = n.sent(), [ 2, this._post(t, o, e, !1) ];
            }
          });
        });
      };
      t.prototype.uploadRank = function(t, e) {
        var o = this;
        this.getUserToken().then(function(n) {
          if (n) {
            var i = {};
            i.client_data = [ t ];
            i.type = e;
            o._post("/v1/GameApi/upload_gamer_score", n, i, !0);
          }
        })["catch"](function(t) {
          console.error("uploadRankErr", t);
        });
      };
      t.prototype.getRank = function(t, e, o, n, i, r) {
        var a = this;
        return Promise.resolve(function(res) {
          cc.resources.load("rank", function(err, json) {
            res(json.json);
          });
        });
      };
      t.prototype.adDot = function(t, e, o, n) {
        var i = this;
        void 0 === o && (o = 1);
        void 0 === n && (n = 1);
        this.getUserToken().then(function(a) {
          if (a) {
            var s = _cfgMgr["default"].serverCfg.upload_ad_result;
            if (s && 1 == s.val) {
              var c = {};
              c.type = o;
              c.path = t;
              c.ad_nums = n;
              c.status = e;
              i._post("/v1/GameApi/upload_gamer_ad_recode", a, c, !0);
            }
          }
        })["catch"](function(t) {
          console.error("adDotErr", t);
        });
      };
      t.prototype.userFeedBack = function(t) {
        var e = this;
        return this.getUserToken().then(function(o) {
          if (o) {
            var n = {};
            n.content = t;
            return e._post("/v1/GameApi/add_reply", o, n);
          }
        })["catch"](function(t) {
          console.error("userFeedBackErr", t);
        });
      };
      t.prototype.updateServerData = function(t, e, o, n) {
        var i = this;
        return this.getUserToken().then(function(r) {
          if (r) {
            var a = {};
            a.user_data = t;
            a.save_tag = e;
            a.title = o;
            a.extra_data = n;
            var s = "backData" != e;
            return i._post("/v1/GameApi/backup_user_data", r, a, s, 5500);
          }
        })["catch"](function(t) {
          console.error("updateServerDataErr", t);
        });
      };
      t.prototype.getServerData = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          var e;
          var o;
          var n;
          return __generator(this, function(i) {
            switch (i.label) {
             case 0:
              return e = "/v1/GameApi/get_user_backup", [ 4, this.getUserToken() ];

             case 1:
              return (o = i.sent()) ? ((n = {}).save_tag = t, [ 2, this._post(e, o, n) ]) : [ 2 ];
            }
          });
        });
      };
      t.prototype.getMailData = function(t, e) {
        var o = this;
        return this.getUserToken().then(function(n) {
          if (n) {
            var i = {};
            i.type = t;
            i.exp_ids = e;
            return o._post("/v1/GameApi/get_mail", n, i);
          }
        })["catch"](function(t) {
          console.error("getMailDataErr", t);
        });
      };
      t.prototype.updateChallengeData = function(t) {
        var e = this;
        this.getUserToken().then(function(o) {
          if (o && t) {
            var n = {};
            n.level = t;
            e._post("/v1/GameApi/passLevel", o, n);
          }
        })["catch"](function(t) {
          console.error("updateUserInfoErr", t);
        });
      };
      t.prototype.getChallengeData = function(t) {
        var e = this;
        return this.getUserToken().then(function(o) {
          if (o && t) {
            var n = {};
            n.level = t;
            return e._post("/v1/GameApi/getCompletionInfo", o, n);
          }
        })["catch"](function(t) {
          console.error("updateUserInfoErr", t);
        });
      };
      t.prototype.getUserDataByUid = function(t) {
        var e = this;
        return this.getUserToken().then(function(o) {
          if (o && t) {
            var n = {};
            n.game_uid = t;
            return e._post("/v1/GameApi/getUserData", o, n);
          }
        })["catch"](function(t) {
          console.error("getUserDataByUid", t);
        });
      };
      t.prototype.sendSevenCard = function(t, e) {
        var o = this;
        this.getUserToken().then(function(n) {
          if (n && e) {
            var i = {};
            i.aid = t;
            i.open_id = o.openId;
            i.reward_index = e;
            return o._post("/v1/GameApi/saveUserAlienCard", n, i);
          }
        })["catch"](function(t) {
          console.error("sendSevenCard", t);
        });
      };
      t.prototype.paymentResult = function(t) {
        var e = this;
        return this.getUserToken().then(function(o) {
          if (o) {
            var n = t;
            return e._post("/v1/GameApi/get_delivery_status", o, n);
          }
        })["catch"](function(t) {
          console.error("get_delivery_status", t);
        });
      };
      t.prototype.getPayGamecoins = function() {
        var t = this;
        return this.getUserToken().then(function(e) {
          if (e) {
            var o = {};
            o.open_id = t.openId;
            console.log("\u83b7\u53d6\u6e38\u620f\u5e01\u53c2\u6570", o);
            return t._post("/v1/GameApi/get_balance", e, o);
          }
        });
      };
      t.prototype.getUnshippedOrders = function() {
        var t = this;
        return this.getUserToken().then(function(e) {
          if (e) {
            var o = {};
            o.open_id = t.openId;
            return t._post("/v1/GameApi/get_unshipped_orders", e, o);
          }
        })["catch"](function(t) {
          console.error("get_unshipped_orders", t);
        });
      };
      return t;
    }();
    exports["default"] = f;
    cc._RF.pop();
  }, {
    cfgMgr: "cfgMgr",
    errorCode: "errorCode",
    evts: "evts",
    flyio: "flyio",
    idx: "idx",
    pConst: "pConst",
    time: "time",
    uData: "uData"
  } ],
  res: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c0cdaipDaZNtoFsplufKRJV", "res");
    "use strict";
    function r(t, e, o) {
      var n = cc.assetManager.bundles;
      var i = function i(t) {
        if (!n.has(t)) return null;
        var r = n.get(t).getInfoWithPath(e, o);
        return r ? r.redirect ? i(r.redirect) : r.uuid : null;
      };
      return i(t);
    }
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = function() {
      function t() {}
      Object.defineProperty(t, "ins", {
        get: function get() {
          this._ins || (this._ins = new t());
          return this._ins;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.lPre = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(e) {
            switch (e.label) {
             case 0:
              return [ 4, this.l(t, cc.Prefab, "prefab") ];

             case 1:
              return [ 2, e.sent() ];
            }
          });
        });
      };
      t.prototype.lSF = function(t, e) {
        return __awaiter(this, void 0, void 0, function() {
          var o;
          return __generator(this, function(n) {
            switch (n.label) {
             case 0:
              return [ 4, this.l(t, cc.SpriteFrame, "resSps") ];

             case 1:
              return o = n.sent(), e && o && (e.spriteFrame = o), [ 2, o ];
            }
          });
        });
      };
      t.prototype.l = function(t, e, o) {
        void 0 === o && (o = "resources");
        return __awaiter(this, void 0, void 0, function() {
          var n;
          var r;
          return __generator(this, function(i) {
            switch (i.label) {
             case 0:
              return t ? (n = cc.resources).getInfoWithPath(t) ? [ 3, 4 ] : [ 3, 1 ] : [ 3, 6 ];

             case 1:
              return (n = cc.assetManager.getBundle(o)) ? [ 3, 4 ] : [ 3, 2 ];

             case 2:
              return [ 4, new Promise(function(t, e) {
                cc.assetManager.loadBundle(o, function(o, n) {
                  o ? e(o) : t(n);
                });
              }) ];

             case 3:
              n = i.sent(), i.label = 4;

             case 4:
              return [ 4, this.d(o, t, e) ];

             case 5:
              return (r = i.sent()) ? [ 2, r ] : [ 2, new Promise(function(o, i) {
                n.load(t, e, function(t, e) {
                  t ? i(t) : o(e);
                });
              }) ];

             case 6:
              return [ 2, null ];
            }
          });
        });
      };
      t.prototype.d = function(t, e, o) {
        return __awaiter(this, void 0, void 0, function() {
          var n;
          return __generator(this, function() {
            return e && r(t, e, o) && (n = cc.assetManager.assets.get(e)) ? [ 2, n ] : [ 2, null ];
          });
        });
      };
      t.prototype.getBundleByString = function(t) {
        var e;
        var o;
        var n = new Promise(function(t, n) {
          e = t;
          o = n;
        });
        var i = cc.assetManager.getBundle(t);
        i ? e(i) : cc.assetManager.loadBundle(t, function(t, n) {
          t ? o() : e(n);
        });
        return n;
      };
      return t;
    }();
    exports["default"] = a;
    cc._RF.pop();
  }, {} ],
  rewardMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f1e93YdJkFPM5jRWLNa78mm", "rewardMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _time = require("time");
    var _uData = require("uData");
    var _pInfo = require("pInfo");
    var _tipMgr = require("tipMgr");
    var _panelMgr = require("panelMgr");
    var RewardMgr = function() {
      function RewardMgr() {
        this.isInit = false;
      }
      var prototype = RewardMgr.prototype;
      var instance = null;
      RewardMgr.getInstance = function() {
        instance || (instance = new RewardMgr());
        return instance;
      };
      prototype.init = function() {
        if (this.isInit) return;
        var localData = {};
        var needUpdate = false;
        if (null === _uData["default"].ins.getLocalDataByKey("cashBalance")) {
          localData.cashBalance = 0;
          needUpdate = true;
        }
        if (null === _uData["default"].ins.getLocalDataByKey("winStreak")) {
          localData.winStreak = 0;
          needUpdate = true;
        }
        if (null === _uData["default"].ins.getLocalDataByKey("totalCashEarned")) {
          localData.totalCashEarned = 0;
          needUpdate = true;
        }
        if (null === _uData["default"].ins.getLocalDataByKey("lastRewardTime")) {
          localData.lastRewardTime = 0;
          needUpdate = true;
        }
        needUpdate && _uData["default"].ins.setLocalData(localData);
        this.isInit = true;
        console.log("\ud83d\udc9d \u5377\u5b9d\u4e13\u5c5e\u73b0\u91d1\u5956\u52b1\u7cfb\u7edf\u521d\u59cb\u5316\u5b8c\u6210");
      };
      prototype.getCash = function() {
        this.init();
        return _uData["default"].ins.getLocalDataByKey("cashBalance") || 0;
      };
      prototype.getCashDisplay = function() {
        var cashInCents = this.getCash();
        var cashInYuan = (cashInCents / 100).toFixed(2);
        return cashInYuan;
      };
      prototype.addCash = function(amountInCents) {
        this.init();
        var currentCash = this.getCash();
        var newCash = currentCash + amountInCents;
        var totalEarned = _uData["default"].ins.getLocalDataByKey("totalCashEarned") || 0;
        _uData["default"].ins.setLocalData({
          cashBalance: newCash,
          totalCashEarned: totalEarned + amountInCents
        });
        _evts["default"].opE.emit({
          action: "CASH_CHG"
        });
        console.log("\ud83d\udcb0 \u5377\u5b9d\u83b7\u5f97\u73b0\u91d1\u5956\u52b1: \xa5" + (amountInCents / 100).toFixed(2));
        return newCash;
      };
      prototype.onPuzzleComplete = function(difficulty, isSuccess, isManualTest) {
        if (!isSuccess) {
          this.resetWinStreak();
          return false;
        }
        var lastRewardTime = _uData["default"].ins.getLocalDataByKey("lastRewardTime") || 0;
        var currentTime = Date.now();
        if (currentTime - lastRewardTime < 5e3) {
          console.log("\u23f0 \u8ddd\u79bb\u4e0a\u6b21\u5956\u52b1\u4e0d\u8db35\u79d2\uff0c\u8df3\u8fc7\u672c\u6b21\u5956\u52b1");
          return false;
        }
        if (!(Math.random() > .1)) {
          console.log("\ud83c\udfaf \u73b0\u91d1\u5956\u52b1\u6982\u7387\u672a\u89e6\u53d1");
          return false;
        }
        console.log("\ud83c\udfaf \u73b0\u91d1\u5956\u52b1\u6982\u7387\u89e6\u53d1\u6210\u529f");
        var rewardAmount = this.calculateReward(difficulty);
        if (rewardAmount > 0) {
          this.incrementWinStreak();
          this.updateLastRewardTime();
          this.addCash(rewardAmount);
          this.showRewardTip(rewardAmount);
          console.log("\ud83d\udcb0 \u73b0\u91d1\u5956\u52b1\u5df2\u7acb\u5373\u6dfb\u52a0\u5e76\u66f4\u65b0UI: \xa5" + (rewardAmount / 100).toFixed(2));
          if (!isManualTest) {
            this.saveLastRewardInfo(rewardAmount);
            this.showCashRewardUI();
            console.log("\ud83d\udcb0 \u73b0\u91d1\u5956\u52b1\u786e\u8ba4\u754c\u9762\u5df2\u663e\u793a");
          }
          return true;
        }
        return false;
      };
      prototype.calculateReward = function(difficulty) {
        var rewardRanges = {
          basic: {
            min: 2,
            max: 8
          },
          simple: {
            min: 5,
            max: 15
          },
          normal: {
            min: 8,
            max: 25
          },
          hard: {
            min: 12,
            max: 35
          },
          expert: {
            min: 20,
            max: 50
          },
          master: {
            min: 30,
            max: 80
          }
        };
        var difficultyMap = {
          beginner: "basic",
          easy: "simple",
          medium: "normal"
        };
        var mappedDifficulty = difficultyMap[difficulty] || difficulty;
        var range = rewardRanges[mappedDifficulty] || rewardRanges["basic"];
        var baseReward = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        var streakMultiplier = this.getStreakMultiplier();
        var specialDayMultiplier = this.getSpecialDayMultiplier();
        var finalReward = Math.floor(baseReward * streakMultiplier * specialDayMultiplier);
        var maxReward = 200;
        return Math.min(finalReward, maxReward);
      };
      prototype.getStreakMultiplier = function() {
        var winStreak = _uData["default"].ins.getLocalDataByKey("winStreak") || 0;
        if (winStreak >= 10) return 1.5;
        if (winStreak >= 7) return 1.3;
        if (winStreak >= 5) return 1.2;
        if (winStreak >= 3) return 1.1;
        return 1;
      };
      prototype.getSpecialDayMultiplier = function() {
        var today = new Date();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        if (4 === month && 22 === day || 12 === month && 28 === day || 9 === month && 16 === day) return 1.5;
        return 1;
      };
      prototype.incrementWinStreak = function() {
        var currentStreak = _uData["default"].ins.getLocalDataByKey("winStreak") || 0;
        _uData["default"].ins.setLocalData({
          winStreak: currentStreak + 1
        });
      };
      prototype.resetWinStreak = function() {
        _uData["default"].ins.setLocalData({
          winStreak: 0
        });
      };
      prototype.updateLastRewardTime = function() {
        _uData["default"].ins.setLocalData({
          lastRewardTime: Date.now()
        });
      };
      prototype.showRewardTip = function(amountInCents) {
        var amountInYuan = (amountInCents / 100).toFixed(2);
        var winStreak = _uData["default"].ins.getLocalDataByKey("winStreak") || 0;
        var messages = [ "\u5377\u5377\u83b7\u5f97\u4e86\uffe5" + amountInYuan + "\u73b0\u91d1\u5956\u52b1\uff01\u597d\u68d2\uff01", "\u606d\u559c\u5377\u5377\uff01\uffe5" + amountInYuan + "\u5956\u52b1\u5230\u8d26\uff01", "\u5377\u5377\u771f\u5389\u5bb3\uff01\u8d5a\u5230\uffe5" + amountInYuan + "\uff01", "\u54c7\uff01\u5377\u5377\u53c8\u83b7\u5f97\uffe5" + amountInYuan + "\u5956\u52b1\uff01", "\u5377\u5377\u597d\u806a\u660e\uff01\uffe5" + amountInYuan + "\u73b0\u91d1\u5956\u52b1\uff01" ];
        var today = new Date();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        4 === month && 22 === day || 12 === month && 28 === day ? messages = [ "\ud83c\udf82 \u751f\u65e5\u5feb\u4e50\u5377\u5377\uff01\u7279\u522b\u5956\u52b1\uffe5" + amountInYuan + "\uff01" ] : 9 === month && 16 === day && (messages = [ "\ud83d\udc95 \u7eaa\u5ff5\u65e5\u5feb\u4e50\uff01\u5377\u5377\u83b7\u5f97\u7279\u6b8a\u5956\u52b1\uffe5" + amountInYuan + "\uff01" ]);
        winStreak >= 10 ? messages = [ "\ud83d\udd25 \u5377\u5377\u8fde\u80dc" + winStreak + "\u5173\uff01\u8d85\u7ea7\u5956\u52b1\uffe5" + amountInYuan + "\uff01" ] : winStreak >= 5 && (messages = [ "\u2b50 \u5377\u5377\u8fde\u80dc" + winStreak + "\u5173\uff01\u8fde\u51fb\u5956\u52b1\uffe5" + amountInYuan + "\uff01" ]);
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
        console.log("\ud83c\udf89 " + randomMessage);
        try {
          if ("undefined" !== typeof window && window.alert) {
            window.alert(randomMessage);
            console.log("\ud83d\udcb0 \u73b0\u91d1\u5956\u52b1\u63d0\u793a(alert)\u5df2\u663e\u793a:", randomMessage);
          } else {
            _tipMgr["default"].ins.showTip("\u5377\u5377\u83b7\u5f97\uffe5" + amountInYuan + "\u5956\u52b1\uff01", false);
            console.log("\ud83d\udcb0 \u73b0\u91d1\u5956\u52b1\u63d0\u793a(tip\u5907\u7528)\u5df2\u663e\u793a");
          }
        } catch (error) {
          console.log("\u274c \u663e\u793a\u73b0\u91d1\u5956\u52b1\u63d0\u793a\u5931\u8d25:", error);
          console.log("\ud83d\udcb0 \u73b0\u91d1\u5956\u52b1:", randomMessage);
        }
      };
      prototype.showLoveSupportMessage = function() {
        var supportMessages = [ "\ud83d\udc95 \u5377\u5377\u771f\u7684\u597d\u68d2\uff01\u83cc\u5b50\u597d\u7231\u4f60\uff01", "\ud83c\udf1f \u5377\u5377\u597d\u806a\u660e\uff01\u662f\u83cc\u5b50\u5fc3\u4e2d\u6700\u4eae\u7684\u661f\u661f\uff01", "\ud83d\udd25 \u5377\u5377\u592a\u5389\u5bb3\u4e86\uff01\u83cc\u5b50\u4e3a\u4f60\u9a84\u50b2\uff01", "\ud83d\udc96 \u5377\u5377\u52a0\u6cb9\uff01\u83cc\u5b50\u6c38\u8fdc\u652f\u6301\u4f60\uff01", "\ud83d\udc51 \u5377\u5377\u505a\u5f97\u5f88\u597d\uff01\u4f60\u5c31\u662f\u83cc\u5b50\u7684\u5973\u738b\uff01", "\ud83d\udc9d \u7231\u4f60\u7231\u4f60\u5377\u5377\uff01\u6700\u559c\u6b22\u5377\u5377\u4e86\uff01", "\ud83c\udf89 \u5377\u5377\u8d85\u7ea7\u68d2\uff01\u83cc\u5b50\u7ed9\u4f60\u6bd4\u5fc3\u5fc3\uff01", "\u2728 \u5377\u5377\u662f\u5929\u624d\uff01\u83cc\u5b50\u88ab\u4f60\u8ff7\u4f4f\u4e86\uff01", "\ud83c\udfc6 \u5377\u5377\u592a\u4f18\u79c0\u4e86\uff01\u83cc\u5b50\u8981\u7ed9\u4f60\u9881\u5956\uff01", "\ud83c\udf08 \u5377\u5377\u8ba9\u83cc\u5b50\u7684\u4e16\u754c\u53d8\u5f97colorful\uff01", "\ud83c\udf40 \u9047\u5230\u5377\u5377\u662f\u83cc\u5b50\u6700\u5927\u7684\u5e78\u8fd0\uff01", "\ud83c\udf38 \u5377\u5377\u7f8e\u7f8e\u7684\uff01\u83cc\u5b50\u7684\u5c0f\u516c\u4e3b\uff01" ];
        var randomMessage = supportMessages[Math.floor(Math.random() * supportMessages.length)];
        try {
          if ("undefined" !== typeof window && window.alert) {
            window.alert(randomMessage);
            console.log("\ud83d\udc95 \u83cc\u5b50\u60c5\u7eea\u4ef7\u503c\u652f\u6301\u6d88\u606f(alert)\u5df2\u663e\u793a:", randomMessage);
          } else {
            _tipMgr["default"].ins.showTip("\u5377\u5377\u771f\u68d2\uff01\u83cc\u5b50\u7231\u4f60\uff01", false);
            console.log("\ud83d\udc95 \u83cc\u5b50\u652f\u6301\u6d88\u606f(tip\u5907\u7528)\u5df2\u663e\u793a");
          }
        } catch (error) {
          console.log("\u274c \u663e\u793a\u83cc\u5b50\u652f\u6301\u6d88\u606f\u5931\u8d25:", error);
          console.log("\ud83d\udc95 \u83cc\u5b50\u6d88\u606f:", randomMessage);
        }
      };
      prototype.saveLastRewardInfo = function(amountInCents) {
        var amountInYuan = (amountInCents / 100).toFixed(2);
        var rewardInfo = {
          amount: amountInYuan,
          timestamp: Date.now(),
          isNew: true
        };
        var dataToSave = {};
        dataToSave["lastRewardInfo"] = rewardInfo;
        dataToSave["hasPendingCashReward"] = true;
        _uData["default"].ins.setLocalData(dataToSave);
      };
      prototype.getLastRewardInfo = function() {
        var rewardInfo = _uData["default"].ins.getLocalDataByKey("lastRewardInfo");
        console.log("\ud83d\udd0d getLastRewardInfo\u539f\u59cb\u6570\u636e:", rewardInfo);
        if (rewardInfo && rewardInfo.isNew) {
          console.log("\u2705 \u53d1\u73b0\u65b0\u5956\u52b1\u4fe1\u606f\uff0c\u8fd4\u56de\u4f46\u4e0d\u7acb\u5373\u6807\u8bb0\u5df2\u8bfb");
          return rewardInfo;
        }
        rewardInfo ? console.log("\u26a0\ufe0f \u5956\u52b1\u4fe1\u606f\u5b58\u5728\u4f46isNew=false\uff0c\u5df2\u88ab\u6d88\u8d39\uff0c\u8fd4\u56denull") : console.log("\u2139\ufe0f \u65e0\u5956\u52b1\u4fe1\u606f");
        return null;
      };
      prototype.hasPendingCashReward = function() {
        return _uData["default"].ins.getLocalDataByKey("hasPendingCashReward") || false;
      };
      prototype.clearCashRewardFlag = function() {
        var dataToSave = {};
        dataToSave["hasPendingCashReward"] = false;
        dataToSave["lastRewardInfo"] = null;
        _uData["default"].ins.setLocalData(dataToSave);
        console.log("\ud83d\udeab \u73b0\u91d1\u5956\u52b1\u6807\u8bb0\u548c\u5956\u52b1\u4fe1\u606f\u5df2\u6e05\u9664");
      };
      prototype.showCashRewardUI = function() {
        try {
          var _panelMgr = require("panelMgr");
          console.log("\ud83c\udf89 \u4e3b\u52a8\u6253\u5f00\u73b0\u91d1\u5956\u52b1\u7ed3\u7b97\u754c\u9762");
          _panelMgr["default"].ins.open("ui/ui_getReward", {
            gold: 100
          }, {
            MaskNoHide: true
          });
        } catch (error) {
          console.log("\u274c \u6253\u5f00\u73b0\u91d1\u5956\u52b1\u754c\u9762\u5931\u8d25:", error);
        }
      };
      return RewardMgr;
    }();
    var rewardMgr = {
      default: RewardMgr.getInstance()
    };
    if ("undefined" !== typeof window) {
      window.testCashReward = function() {
        try {
          console.log("\ud83e\uddea \u5168\u5c40\u73b0\u91d1\u5956\u52b1\u6d4b\u8bd5\u5f00\u59cb...");
          console.log("\u5f53\u524d\u73b0\u91d1\u4f59\u989d:", rewardMgr["default"].getCashDisplay());
          var hasReward = rewardMgr["default"].onPuzzleComplete("easy", true, true);
          if (hasReward) {
            console.log("\u2705 \u83b7\u5f97\u73b0\u91d1\u5956\u52b1\uff01");
            console.log("\u65b0\u7684\u73b0\u91d1\u4f59\u989d:", rewardMgr["default"].getCashDisplay());
          } else {
            console.log("\u2b55 \u672c\u6b21\u6ca1\u6709\u89e6\u53d1\u73b0\u91d1\u5956\u52b1\uff08\u968f\u673a\u6982\u738760%\uff09");
            console.log("\u53ef\u4ee5\u518d\u6b21\u8c03\u7528 testCashReward() \u6d4b\u8bd5");
          }
        } catch (error) {
          console.log("\u274c \u6d4b\u8bd5\u5931\u8d25:", error);
        }
      };
      window.getCashBalance = function() {
        console.log("\ud83d\udcb0 \u5f53\u524d\u73b0\u91d1\u4f59\u989d: \xa5" + rewardMgr["default"].getCashDisplay());
        return rewardMgr["default"].getCashDisplay();
      };
      window.testAllFeatures = function() {
        console.log("\ud83c\udfae \u5f00\u59cb\u5168\u529f\u80fd\u6d4b\u8bd5...");
        console.log("1\ufe0f\u20e3 \u6d4b\u8bd5\u73b0\u91d1\u5956\u52b1\u7cfb\u7edf");
        rewardMgr["default"].onPuzzleComplete("expert", true);
        console.log("2\ufe0f\u20e3 \u6d4b\u8bd5\u83cc\u5b50\u652f\u6301\u6d88\u606f");
        setTimeout(function() {
          rewardMgr["default"].showLoveSupportMessage();
        }, 1e3);
        setTimeout(function() {
          console.log("3\ufe0f\u20e3 \u5f53\u524d\u73b0\u91d1\u4f59\u989d: \xa5" + rewardMgr["default"].getCashDisplay());
          console.log("\u2705 \u5168\u529f\u80fd\u6d4b\u8bd5\u5b8c\u6210\uff01");
        }, 2e3);
      };
    }
    exports["default"] = rewardMgr["default"];
    cc._RF.pop();
  }, {
    evts: "evts",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    time: "time",
    tipMgr: "tipMgr",
    uData: "uData"
  } ],
  scrollView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c59d3G5OhpCHoMi9impffT1", "scrollView");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = a.property;
    var l = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.maxScale = 1.5;
        e.minScale = .5;
        e.brake = .75;
        e.content = null;
        e._touchMovePreviousTimestamp = 0;
        e._autoScrolling = !1;
        e._touchMoveDisplacements = [];
        e._touchMoveTimeDeltas = [];
        e._autoScrollAccumulatedTime = 0;
        e._autoScrollTotalTime = 0;
        e._autoScrollStartPosition = cc.v2(0, 0);
        e._autoScrollTargetDelta = cc.Vec2.ZERO;
        e._isHandleMultiTouch = !1;
        e._isOnDestScrolling = !1;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        var t = this.content;
        var e = cc.Node.EventType;
        t.on(e.TOUCH_START, this.onTouchStart, this);
        t.on(e.TOUCH_MOVE, this.onTouchMove, this);
        t.on(e.TOUCH_END, this.onTouchEnd, this);
        t.on(e.TOUCH_CANCEL, this.onTouchEnd, this);
      };
      e.prototype.onDestroy = function() {
        var t = this.content;
        var e = cc.Node.EventType;
        t.off(e.TOUCH_START, this.onTouchStart, this);
        t.off(e.TOUCH_MOVE, this.onTouchMove, this);
        t.off(e.TOUCH_END, this.onTouchEnd, this);
        t.off(e.TOUCH_CANCEL, this.onTouchEnd, this);
      };
      e.prototype.onTouchStart = function() {
        this.resetTouchInfos();
      };
      e.prototype.onTouchMove = function(t) {
        if (!this._isOnDestScrolling) {
          var e = t.getTouches();
          if (1 == e.length) {
            var o = t.getDelta();
            this.moveContent(o);
            this.gatherTouchMove(o);
          } else {
            this._isHandleMultiTouch = !0;
            var n = e[0];
            var i = e[1];
            if (!this._initLen) {
              this._initLen = n.getPreviousLocation().sub(i.getPreviousLocation()).mag();
              var r = n.getStartLocation().add(i.getStartLocation()).divide(2);
              var a = this.node.convertToNodeSpaceAR(r);
              var s = this.node.convertToWorldSpaceAR(a);
              this._initPos = this.content.convertToNodeSpaceAR(s);
              this._initScale = this.content.scale;
            }
            var c = n.getLocation().sub(i.getLocation()).mag();
            var l = this._initScale * (c / this._initLen);
            if (l > this.maxScale || l < this.minScale) return;
            this._tarScale = l;
            this._scrollZoom = !0;
          }
        }
      };
      e.prototype.onTouchEnd = function(t) {
        this._isOnDestScrolling || (this._isHandleMultiTouch ? this._scrollZoom = null : (this.gatherTouchMove(t.getDelta()), 
        this.startInertiaScroll()), this._isHandleMultiTouch = !1);
      };
      e.prototype.update = function(t) {
        if (this._scrollZoom) {
          var e = this.content.scale;
          var o = this._tarScale;
          var n = e + .5 * (o - e);
          var i = n - e;
          var r = this._initPos.mul(-i);
          this.content.scale = n;
          this.moveContent(r);
          this._scrollZoom = Math.abs(n - o) > .01;
        } else this._autoScrolling && this.processAutoScrolling(t);
      };
      e.prototype.calculateTouchMoveVelocity = function() {
        var t = 0;
        if ((t = this._touchMoveTimeDeltas.reduce(function(t, e) {
          return t + e;
        }, t)) <= 0 || t >= .5) return cc.v2(0, 0);
        var e = cc.v2(0, 0);
        e = this._touchMoveDisplacements.reduce(function(t, e) {
          return t.add(e);
        }, e);
        return cc.v2(e.x * (1 - this.brake) / t, e.y * (1 - this.brake) / t);
      };
      e.prototype.processAutoScrolling = function(t) {
        this._autoScrollAccumulatedTime += t;
        var e;
        var o = Math.min(1, this._autoScrollAccumulatedTime / this._autoScrollTotalTime);
        e = o;
        o = (e -= 1) * e * e * e * e + 1;
        var n = this._autoScrollStartPosition.add(this._autoScrollTargetDelta.mul(o));
        Math.abs(o - 1) <= 1e-4 && (this._autoScrolling = !1);
        var i = n.sub(this.content.getPosition());
        this.moveContent(this._clampDelta(i));
      };
      e.prototype.startAttenuatingAutoScroll = function(t, e) {
        var o = Math.sqrt(Math.sqrt(e.mag() / 5));
        var n = t.normalize();
        var i = this.content.getContentSize();
        var r = this.node.getContentSize();
        var a = i.width - r.width;
        var s = i.height - r.height;
        var c = this.calculateAttenuatedFactor(a);
        var l = this.calculateAttenuatedFactor(s);
        n = cc.v2(n.x * a * (1 - this.brake) * c, n.y * s * l * (1 - this.brake));
        var u = t.mag();
        var p = n.mag() / u;
        n = n.add(t);
        this.brake > 0 && p > 7 && (p = Math.sqrt(p), n = t.mul(p).add(t));
        this.brake > 0 && p > 3 && (o *= p = 3);
        0 === this.brake && p > 1 && (o *= p);
        this.startAutoScroll(n, o);
      };
      e.prototype.calculateAttenuatedFactor = function(t) {
        return this.brake <= 0 ? 1 - this.brake : (1 - this.brake) * (1 / (1 + 14e-6 * t + t * t * 8e-9));
      };
      e.prototype.startInertiaScroll = function() {
        var t = this.calculateTouchMoveVelocity();
        if (!t.fuzzyEquals(cc.v2(0, 0), 1e-4) && this.brake < 1) {
          var e = t.mul(.7);
          this.startAttenuatingAutoScroll(e, t);
        }
      };
      e.prototype.startAutoScroll = function(t, e) {
        this._autoScrolling = !0;
        this._autoScrollTargetDelta = t;
        this._autoScrollStartPosition = this.content.getPosition();
        this._autoScrollTotalTime = e;
        this._autoScrollAccumulatedTime = 0;
      };
      e.prototype._clampDelta = function(t) {
        var e = this.content.getContentSize();
        var o = this.node.getContentSize();
        e.width < o.width && (t.x = 0);
        e.height < o.height && (t.y = 0);
        return t;
      };
      e.prototype.moveContent = function(t, e) {
        var o = this;
        void 0 === e && (e = 0);
        return new Promise(function(n) {
          var i = t;
          var r = o.content.getPosition().add(i);
          r.x > o.boundX ? (r.x = o.boundX, o._autoScrolling = !1) : r.x < -o.boundX && (r.x = -o.boundX, 
          o._autoScrolling = !1);
          r.y > o.boundY ? (r.y = o.boundY, o._autoScrolling = !1) : r.y < -o.boundY && (r.y = -o.boundY, 
          o._autoScrolling = !1);
          e > 0 ? cc.tween(o.content).to(e, {
            position: cc.v3(r.x, r.y)
          }).call(function() {
            n();
          }).start() : (o.content.setPosition(r), n());
        });
      };
      e.prototype.getTimeInMilliseconds = function() {
        return new Date().getMilliseconds();
      };
      e.prototype.gatherTouchMove = function(t) {
        for (t = this._clampDelta(t); this._touchMoveDisplacements.length >= 5; ) this._touchMoveDisplacements.shift(), 
        this._touchMoveTimeDeltas.shift();
        this._touchMoveDisplacements.push(t);
        var e = this.getTimeInMilliseconds();
        this._touchMoveTimeDeltas.push((e - this._touchMovePreviousTimestamp) / 1e3);
        this._touchMovePreviousTimestamp = e;
      };
      Object.defineProperty(e.prototype, "boundY", {
        get: function get() {
          return this.content.height * this.content.scaleY / 2 - this.node.height / 2;
        },
        enumerable: !1,
        configurable: !0
      });
      Object.defineProperty(e.prototype, "boundX", {
        get: function get() {
          return this.content.width * this.content.scaleX / 2 - this.node.width / 2;
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.scrollTo = function(t, e) {
        var o = this;
        void 0 === e && (e = 0);
        this._isOnDestScrolling = !0;
        this.resetTouchInfos();
        return new Promise(function(n) {
          o.moveContent(t.mul(-1), e).then(function() {
            o._isOnDestScrolling = !1;
            n();
          });
        });
      };
      e.prototype.resetTouchInfos = function() {
        this._autoScrolling = !1;
        this._touchMovePreviousTimestamp = this.getTimeInMilliseconds();
        this._touchMoveDisplacements.length = 0;
        this._touchMoveTimeDeltas.length = 0;
        this._isHandleMultiTouch = !1;
        this._initLen = null;
      };
      e.prototype.stopAutoScroll = function() {
        this._autoScrolling = !1;
        this._autoScrollAccumulatedTime = this._autoScrollTotalTime;
      };
      __decorate([ c({
        tooltip: "\u6700\u5927\u53ef\u653e\u5927\u500d\u6570",
        type: cc.Float
      }) ], e.prototype, "maxScale", void 0);
      __decorate([ c({
        tooltip: "\u6700\u5c0f\u53ef\u7f29\u5c0f\u500d\u6570",
        type: cc.Float
      }) ], e.prototype, "minScale", void 0);
      __decorate([ c({
        tooltip: "\u6eda\u52a8\u4e4b\u540e\u7684\u51cf\u901f\u7cfb\u6570",
        type: cc.Float
      }) ], e.prototype, "brake", void 0);
      __decorate([ c(cc.Node) ], e.prototype, "content", void 0);
      return __decorate([ s ], e);
    }(cc.Component);
    exports["default"] = l;
    cc._RF.pop();
  }, {} ],
  shopItem1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f95238W2llPIrEkQREhyIIb", "shopItem1");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _cfgMgr = require("cfgMgr");
    var _shopItem = require("shopItem");
    var c = cc._decorator;
    var l = c.ccclass;
    var u = c.property;
    var p = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.shopItems = [];
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {};
      e.prototype.initPower = function() {
        var t;
        var e;
        var o = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.buy_stamina) || void 0 === e ? void 0 : e.stamina;
        if (o) {
          var n = 0;
          for (var i in o) {
            var r = o[i];
            if (r) {
              var s = this.shopItems[n];
              s && s.initItem(r, !0);
            }
            n++;
          }
        }
      };
      e.prototype.initGold = function() {
        var t;
        var e;
        var o = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.buy_gold_coins) || void 0 === e ? void 0 : e.gold_coins;
        if (o) {
          var n = 0;
          for (var i in o) {
            var r = o[i];
            if (r) {
              var s = this.shopItems[n];
              s && s.initItem(r, !1);
            }
            n++;
          }
        }
      };
      __decorate([ u([ _shopItem["default"] ]) ], e.prototype, "shopItems", void 0);
      return __decorate([ l ], e);
    }(cc.Component);
    exports["default"] = p;
    cc._RF.pop();
  }, {
    cfgMgr: "cfgMgr",
    shopItem: "shopItem"
  } ],
  shopItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13e5clDaOZHmrEnbKIG3sTB", "shopItem");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _idx = require("idx");
    var _res = require("res");
    var _bagMgr = require("bagMgr");
    var _panelMgr = require("panelMgr");
    var _tipMgr = require("tipMgr");
    var _pInfo = require("pInfo");
    var _item = require("item");
    var h = cc._decorator;
    var f = h.ccclass;
    var g = h.property;
    var y = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.buyBtnNode = null;
        e.finNode = null;
        e.btnPrice = null;
        e.doubleNode = null;
        e.itemComp = null;
        e.shopData = null;
        e.aniDatas = [];
        e.isDouble = !1;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {};
      e.prototype.start = function() {};
      e.prototype.initItem = function(t, e) {
        var o = this;
        if (t) {
          this.shopData = t;
          var n = t.props;
          for (var i in n) {
            var r = Number(n[i]);
            this.itemComp.initByData(i, r);
          }
          var a = e ? "blueLight" : "light";
          _res["default"].ins.getBundleByString("resSps").then(function(t) {
            t.load("spine/" + a + "/action", sp.SkeletonData, function(t, e) {
              if (!t && o.node && o.node.isValid) {
                var n = new cc.Node();
                var i = n.addComponent(sp.Skeleton);
                i.skeletonData = e, i.animation = "animation", n.parent = o.itemComp.node;
              }
            });
          })["catch"](function(t) {
            console.error("RTool.ins.getBundleByString('resSps')", t);
          });
          this.btnPrice.string = "\xa5" + t.price;
          this.finNode.active = !1;
          this.doubleNode.active = !1;
          this.checkData();
        }
      };
      e.prototype.checkData = function() {
        if (this.shopData) {
          var t = this.shopData.key;
          var e = _pInfo["default"].ins.getShopUnreset();
          var o = this.shopData["double"] || 0;
          var n = e[t] || 0;
          this.isDouble = this.doubleNode.active = n < o;
        }
      };
      e.prototype.onBtnBuy = function() {
        var t = this;
        if (this.shopData) {
          var e = this.isDouble ? 1 : 0;
          var o = this.shopData.props;
          var n = JSON.stringify(this.shopData.props);
          _idx.platform.reportEvent(_idx.ERepEvt.susPayment, {
            key: this.shopData.key
          });
          _idx.platform.payment(this.shopData.key, this.shopData.price, e, n).then(function() {
            var e = [];
            for (var n in o) {
              var i = o[n];
              t.isDouble && (i *= 2);
              _bagMgr["default"].ins.addItem(n, i);
              var r = {};
              r.itemId = n;
              r.worldPos = t.node.parent.convertToWorldSpaceAR(t.node.position);
              r.value = i;
              e.push(r);
            }
            _panelMgr["default"].ins.open("ui/ui_flyAni", {
              itemDatas: e
            });
            _pInfo["default"].ins.addShopUnreset(t.shopData.key);
            t.checkData();
            _idx.platform.reportEvent(_idx.ERepEvt.paymentResult, {
              key: t.shopData.key,
              success: 1
            });
          })["catch"](function(e) {
            _tipMgr["default"].ins.showTip(e, !0);
            _idx.platform.reportEvent(_idx.ERepEvt.paymentResult, {
              key: t.shopData.key,
              success: 0
            });
          });
        }
      };
      __decorate([ g(cc.Node) ], e.prototype, "buyBtnNode", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "finNode", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "btnPrice", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "doubleNode", void 0);
      __decorate([ g(_item["default"]) ], e.prototype, "itemComp", void 0);
      return __decorate([ f ], e);
    }(cc.Component);
    exports["default"] = y;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    idx: "idx",
    item: "item",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    res: "res",
    tipMgr: "tipMgr"
  } ],
  shopMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8a5decHXkJJK6qhk3PNOD+U", "shopMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _idx = require("idx");
    var _cfgMgr = require("cfgMgr");
    var r = function() {
      function t() {
        this.localData = null;
      }
      Object.defineProperty(t, "ins", {
        get: function get() {
          return this._ins || (this._ins = new t());
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.getAllRed = function() {
        var t;
        var e;
        var o = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.shop_config) || void 0 === e ? void 0 : e.gift;
        var n = 0;
        if (o) {
          var r = {};
          for (var a in o) {
            var s = o[a];
            var c = s.tag || 0;
            s.is_shop && (r[c] ? r[c].push(s) : (r[c] = [], r[c].push(s)));
          }
          var l = this.getTabsRed();
          for (var u in r) {
            var p = r[u];
            if (p) {
              var d = 1;
              if (l[u]) d = 0; else for (var h = p.length, f = 0; f < h; f++) 0 == (p[f].price || 0) && d++;
              n += d;
            }
          }
        }
        return n;
      };
      t.prototype.getTabsRed = function() {
        var t = this.getLocalShopRedData().tabsRed;
        return null == t ? {} : t;
      };
      t.prototype.setTabsRed = function(t) {
        this.setLocalShopRedData({
          tabsRed: t
        });
      };
      t.prototype.getPackRed = function() {
        var t = this.getLocalShopRedData().packRed;
        return null == t ? {} : t;
      };
      t.prototype.setPackRed = function(t) {
        this.setLocalShopRedData({
          packRed: t
        });
      };
      t.prototype.setLocalShopRedData = function(t) {
        var e = this.getLocalShopRedData();
        this.localData = Object.assign(Object.assign({}, e), t);
        _idx.platform.setStorage("shopRed", this.localData);
      };
      t.prototype.getLocalShopRedData = function() {
        null == this.localData && (this.localData = _idx.platform.getStorage("shopRed") || {});
        return this.localData;
      };
      return t;
    }();
    exports["default"] = r;
    cc._RF.pop();
  }, {
    cfgMgr: "cfgMgr",
    idx: "idx"
  } ],
  skinBg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a56ebbKS9OsZ5A4r1830oM", "skinBg");
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
    var p = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.itemSp = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        t.prototype.onLoad.call(this);
      };
      e.prototype.loadItem = function() {
        _skinMgr["default"].ins.updateBg(this.ref, this.itemSp);
      };
      e.prototype.clickItem = function() {
        var t;
        this.state !== _skinMgr.SkinState.using && (t = this.itemSp.node, this.openSkinInfo(t));
      };
      __decorate([ u(cc.Sprite) ], e.prototype, "itemSp", void 0);
      return __decorate([ l ], e);
    }(_skinItemBase["default"]);
    exports["default"] = p;
    cc._RF.pop();
  }, {
    skinItemBase: "skinItemBase",
    skinMgr: "skinMgr"
  } ],
  skinContent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "25d4cZd7RtM460Zomkgx+9w", "skinContent");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _skinItemBase = require("skinItemBase");
    var s = cc._decorator;
    var c = s.ccclass;
    var l = (s.property, function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.isInit = !1;
        return e;
      }
      __extends(e, t);
      e.prototype.initContent = function(t) {
        if (!this.isInit) {
          for (var e = this.node.children[0], o = t.itemData, n = t.skinId, i = 0; i < o.length; i++) {
            var r = null;
            this.node.childrenCount > i ? r = this.node.children[i] : (r = cc.instantiate(e), 
            this.node.addChild(r));
            r.getComponent(_skinItemBase["default"]).initItem(o[i], n);
          }
          this.isInit = !0;
        }
      };
      return __decorate([ c ], e);
    }(cc.Component));
    exports["default"] = l;
    cc._RF.pop();
  }, {
    skinItemBase: "skinItemBase"
  } ],
  skinHeadFrame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "495e1u4RCpPV7Xh5v/0L5/6", "skinHeadFrame");
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
    var p = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.itemSp = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        t.prototype.onLoad.call(this);
      };
      e.prototype.loadItem = function() {
        _skinMgr["default"].ins.updateHeadFrame(this.ref, this.itemSp);
      };
      e.prototype.clickItem = function() {
        var t;
        this.state !== _skinMgr.SkinState.using && (t = this.itemSp.node, this.openSkinInfo(t));
      };
      __decorate([ u(cc.Sprite) ], e.prototype, "itemSp", void 0);
      return __decorate([ l ], e);
    }(_skinItemBase["default"]);
    exports["default"] = p;
    cc._RF.pop();
  }, {
    skinItemBase: "skinItemBase",
    skinMgr: "skinMgr"
  } ],
  skinItemBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "31bb8q44stCjow3FOL8MsYB", "skinItemBase");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _panelMgr = require("panelMgr");
    var _skinMgr = require("skinMgr");
    var l = cc._decorator;
    var u = l.ccclass;
    var p = l.property;
    var d = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.usingNode = null;
        e.lockNode = null;
        e.state = _skinMgr.SkinState.none;
        e.ref = -1;
        e.id = "";
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        var t = this.node.getContentSize();
        this.lockNode.setContentSize(t);
        this.usingNode.setPosition(0, 0);
      };
      e.prototype.start = function() {};
      e.prototype.onEnable = function() {
        this.node.on("click", this.clickItem, this);
        this.eventFunc = this.onOperTap.bind(this);
        _evts["default"].opE.on(this.eventFunc);
      };
      e.prototype.onDisable = function() {
        this.node.off("click", this.clickItem, this);
        _evts["default"].opE.off(this.eventFunc);
        this.eventFunc = null;
      };
      e.prototype.onOperTap = function(t) {
        t.action === _evts["default"].SKIN_CHG && this.updateState();
      };
      e.prototype.initItem = function(t, e) {
        this.ref = t.ref;
        this.id = e;
        this.updateState();
        this.loadItem();
      };
      e.prototype.updateState = function() {
        var t = _skinMgr["default"].ins.isHasSkin(this.id, this.ref) ? _skinMgr.SkinState.unlock : _skinMgr.SkinState.lock;
        t === _skinMgr.SkinState.unlock && _skinMgr["default"].ins.isUsingSkin(this.id, this.ref) && (t = _skinMgr.SkinState.using);
        this.setState(t);
      };
      e.prototype.setState = function(t) {
        this.state = t;
        this.usingNode.active = t == _skinMgr.SkinState.using;
        this.lockNode.active = t == _skinMgr.SkinState.lock;
      };
      e.prototype.loadItem = function() {};
      e.prototype.clickItem = function() {};
      e.prototype.openSkinInfo = function(t) {
        var e = this.ref;
        var o = this.id;
        _panelMgr["default"].ins.open("ui/ui_skinInfo", {
          ref: e,
          skinId: o,
          showNode: t,
          unlockState: this.state
        });
      };
      __decorate([ p(cc.Node) ], e.prototype, "usingNode", void 0);
      __decorate([ p(cc.Node) ], e.prototype, "lockNode", void 0);
      return __decorate([ u ], e);
    }(cc.Component);
    exports["default"] = d;
    cc._RF.pop();
  }, {
    evts: "evts",
    panelMgr: "panelMgr",
    skinMgr: "skinMgr"
  } ],
  skinMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9335eNcn6hC4YaMUkwXQ5k8", "skinMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.SkinUnlockType = exports.SkinIdEnum = exports.SkinState = void 0;
    var r;
    var _evts = require("evts");
    var _idx = require("idx");
    var _res = require("res");
    var _uData = require("uData");
    var _global = require("global");
    var _pInfo = require("pInfo");
    (function(t) {
      t[t.none = 0] = "none", t[t.unlock = 1] = "unlock", t[t.lock = 2] = "lock", t[t.using = 3] = "using";
    })(exports.SkinState || (exports.SkinState = {}));
    (function(t) {
      t.bg = "bg", t.role = "role", t.nameFrame = "nameFrame", t.headFrame = "headFrame";
    })(r = exports.SkinIdEnum || (exports.SkinIdEnum = {}));
    (function(t) {
      t[t.none = 0] = "none";
      t[t.video = 1] = "video";
      t[t.coin = 2] = "coin";
    })(exports.SkinUnlockType || (exports.SkinUnlockType = {}));
    var d = function() {
      function t() {
        this.defaultConfig = {
          bg: {
            skinId: "bg",
            itemData: [ {
              ref: 1,
              name: "\u9ed8\u8ba4\u80cc\u666f",
              unlockType: 0,
              unlockValue: 0,
              desc: ""
            }, {
              ref: 2,
              name: "\u591c\u8272\u964d\u4e34",
              unlockType: 1,
              unlockValue: 20,
              desc: ""
            } ]
          },
          role: {
            skinId: "role",
            itemData: [ {
              ref: 1,
              name: "\u9ed8\u8ba4\u89d2\u8272",
              unlockType: 0,
              unlockValue: 0,
              desc: ""
            }, {
              ref: 2,
              name: "\u6d41\u8fde\u5fd8\u8fd4",
              unlockType: 1,
              unlockValue: 20,
              desc: ""
            } ]
          },
          nameFrame: {
            skinId: "nameFrame",
            itemData: [ {
              ref: 1,
              name: "\u9ed8\u8ba4\u540d\u5b57\u6846",
              unlockType: 0,
              unlockValue: 0,
              desc: ""
            }, {
              ref: 2,
              name: "\u5fc3\u65f7\u795e\u6021",
              unlockType: 2,
              unlockValue: 1e4,
              desc: ""
            }, {
              ref: 3,
              name: "\u6d77\u8a93\u5c71\u76df",
              unlockType: 2,
              unlockValue: 1e4,
              desc: ""
            }, {
              ref: 4,
              name: "\u65d6\u65ce\u98ce\u5149",
              unlockType: 2,
              unlockValue: 2e4,
              desc: ""
            }, {
              ref: 5,
              name: "\u67f3\u6697\u82b1\u906e",
              unlockType: 2,
              unlockValue: 2e4,
              desc: ""
            }, {
              ref: 6,
              name: "\u59f9\u7d2b\u5ae3\u7ea2",
              unlockType: 2,
              unlockValue: 2e4,
              desc: ""
            } ]
          },
          headFrame: {
            skinId: "headFrame",
            itemData: [ {
              ref: 1,
              name: "\u9ed8\u8ba4\u5934\u50cf\u6846",
              unlockType: 0,
              unlockValue: 0,
              desc: ""
            }, {
              ref: 2,
              name: "\u79c0\u8272\u53ef\u9910",
              unlockType: 2,
              unlockValue: 2e4,
              desc: ""
            }, {
              ref: 3,
              name: "\u706b\u6811\u94f6\u82b1",
              unlockType: 2,
              unlockValue: 2e4,
              desc: ""
            }, {
              ref: 4,
              name: "\u6e56\u5149\u5c71\u8272",
              unlockType: 2,
              unlockValue: 2e3,
              desc: ""
            }, {
              ref: 5,
              name: "\u9e1f\u8bed\u82b1\u9999",
              unlockType: 1,
              unlockValue: 10,
              desc: ""
            }, {
              ref: 6,
              name: "\u6c5f\u5c71\u5982\u753b",
              unlockType: 1,
              unlockValue: 10,
              desc: ""
            } ]
          }
        };
        this.skinConfig = this.defaultConfig;
      }
      Object.defineProperty(t, "ins", {
        get: function get() {
          return this._ins || (this._ins = new t());
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.init = function() {
        var t = this;
        cc.resources.load("config", cc.JsonAsset, function(e, o) {
          !e && o && o.json ? t.skinConfig = o.json : t.skinConfig = t.defaultConfig;
        });
      };
      t.prototype.isUsingSkin = function(t, e) {
        return _pInfo["default"].ins.getUsingSkin()[t] === e;
      };
      t.prototype.isHasSkin = function(t, e) {
        var o = _pInfo["default"].ins.getMySkin();
        return o[t] && o[t].includes(e);
      };
      t.prototype.getSkinConfig = function(t) {
        return this.skinConfig[t];
      };
      t.prototype.getSkinData = function(t, e) {
        for (var o = this.getSkinConfig(t).itemData, n = 0; n < o.length; n++) if (o[n].ref === e) return o[n];
        return null;
      };
      t.prototype.addSkin = function(t, e) {
        _pInfo["default"].ins.addMySkin(t, e);
        _idx.platform.reportEvent(_idx.ERepEvt.buySkin, {
          skinId: t,
          ref: e
        });
        _evts["default"].opE.emit({
          action: _evts["default"].SKIN_CHG,
          data: {
            skinId: t,
            ref: e,
            isUse: !1
          }
        });
        _uData["default"].ins._setLocalAndCloudData();
      };
      t.prototype.usingSkin = function(t, e) {
        var o;
        _pInfo["default"].ins.setUsingSkin(((o = {})[t] = e, o));
        _idx.platform.reportEvent(_idx.ERepEvt.useSkin, {
          skinId: t,
          ref: e
        });
        _evts["default"].opE.emit({
          action: _evts["default"].SKIN_CHG,
          data: {
            skinId: t,
            ref: e,
            isUse: !0
          }
        });
      };
      t.prototype.updateHeadFrame = function(t, e, o) {
        var n;
        var i;
        if (void 0 === o && (o = !1), e) {
          t || (t = 1);
          var a;
          var s = (null === (i = null === (n = this.getSkinConfig(r.headFrame)) || void 0 === n ? void 0 : n.itemData) || void 0 === i ? void 0 : i.length) || 1;
          (t = Math.min(t, s)) > 6 ? (a = _global.OssConfig.skinUrl + "headFrame/head" + t + ".png", 
          cc.assetManager.loadRemote(a, cc.Texture2D, function(t, n) {
            if (!t && n && e.isValid) {
              var i = new cc.SpriteFrame(n);
              e.spriteFrame = i;
            } else o ? (a = "game/skin/headFrame/head1", _res["default"].ins.lSF(a, e)) : e.spriteFrame = null;
          })) : (a = "game/skin/headFrame/head" + t, _res["default"].ins.lSF(a, e));
        }
      };
      t.prototype.updateBg = function(t, e, o) {
        var n;
        var i;
        if (void 0 === o && (o = !1), e) {
          t || (t = 1);
          var a;
          var s = (null === (i = null === (n = this.getSkinConfig(r.bg)) || void 0 === n ? void 0 : n.itemData) || void 0 === i ? void 0 : i.length) || 1;
          (t = Math.min(t, s)) > 2 ? (a = _global.OssConfig.skinUrl + "bg/top" + t + ".jpg", 
          cc.assetManager.loadRemote(a, cc.Texture2D, function(t, n) {
            if (!t && n && e.isValid) {
              var i = new cc.SpriteFrame(n);
              e.spriteFrame = i;
            } else o ? (a = "game/normal/top1", _res["default"].ins.lSF(a, e)) : e.spriteFrame = null;
          })) : (a = "game/normal/top" + t, _res["default"].ins.lSF(a, e));
        }
      };
      t.prototype.updateNameFrame = function(t, e, o) {
        var n;
        var i;
        if (void 0 === o && (o = !1), e) {
          t || (t = 1);
          var a;
          var s = (null === (i = null === (n = this.getSkinConfig(r.nameFrame)) || void 0 === n ? void 0 : n.itemData) || void 0 === i ? void 0 : i.length) || 1;
          (t = Math.min(t, s)) > 6 ? (a = _global.OssConfig.skinUrl + "nameFrame/name" + t + ".png", 
          cc.assetManager.loadRemote(a, cc.Texture2D, function(t, n) {
            if (!t && n && e.isValid) {
              var i = new cc.SpriteFrame(n);
              e.spriteFrame = i;
            } else o ? (a = "game/skin/nameFrame/name1", _res["default"].ins.lSF(a, e)) : e.spriteFrame = null;
          })) : (a = "game/skin/nameFrame/name" + t, _res["default"].ins.lSF(a, e));
        }
      };
      t.prototype.updateRole = function(t, e, o) {
        var a;
        var s;
        var l = this;
        if (void 0 === o && (o = !1), e) {
          t || (t = 1);
          var u = (null === (s = null === (a = this.getSkinConfig(r.role)) || void 0 === a ? void 0 : a.itemData) || void 0 === s ? void 0 : s.length) || 1;
          if ((t = Math.min(t, u)) > 2) this.curRoleNode = e, this.curRoleRef = t, Promise.all([ this._remoteAtlas(), this._remoteImg(), this._remoteJson() ]).then(function(t) {
            var o = t[0];
            var r = t[1];
            var a = t[2];
            return __awaiter(l, void 0, void 0, function() {
              var t;
              var n;
              var s;
              var l;
              return __generator(this, function(i) {
                switch (i.label) {
                 case 0:
                  return (t = new sp.SkeletonData()).skeletonJson = a.json, t.atlasText = o.text, 
                  t.textures = [ r ], t.textureNames = [ "1.png" ], [ 4, _res["default"].ins.lPre("skin/girl1") ];

                 case 1:
                  return n = i.sent(), s = cc.instantiate(n), (l = s.getComponent(sp.Skeleton)) ? (l.skeletonData = t, 
                  s.position = cc.Vec3.ZERO, l.animation = "idle", e.addChild(s), [ 2 ]) : [ 2 ];
                }
              });
            });
          })["catch"](function(t) {
            if (console.error(t), e.removeAllChildren(), o) {
              if (!e) return;
              _res["default"].ins.lPre("skin/girl1").then(function(t) {
                var o = cc.instantiate(t);
                o.position = cc.Vec3.ZERO;
                e.addChild(o);
              });
            }
          }); else {
            var p = "skin/girl" + t;
            e.removeAllChildren();
            _res["default"].ins.lPre(p).then(function(t) {
              var o = cc.instantiate(t);
              o.position = cc.Vec3.ZERO;
              e.addChild(o);
            });
          }
        }
      };
      t.prototype._remoteAtlas = function() {
        var t = this;
        var e = _global.OssConfig.skinUrl + "role/" + this.curRoleRef + "/1.atlas";
        return new Promise(function(o, n) {
          cc.assetManager.loadRemote(e, function(e, i) {
            e && n(e);
            t.curRoleNode.isValid || n("this.curRoleNode.isValid === false");
            i || n("atlasText is null");
            o(i);
          });
        });
      };
      t.prototype._remoteImg = function() {
        var t = this;
        var e = _global.OssConfig.skinUrl + "role/" + this.curRoleRef + "/1.png";
        return new Promise(function(o, n) {
          cc.assetManager.loadRemote(e, function(e, i) {
            e && n(e);
            t.curRoleNode.isValid || n("this.curRoleNode.isValid === false");
            i || n("texture is null");
            o(i);
          });
        });
      };
      t.prototype._remoteJson = function() {
        var t = this;
        var e = _global.OssConfig.skinUrl + "role/" + this.curRoleRef + "/1.json";
        return new Promise(function(o, r) {
          cc.assetManager.loadRemote(e, function(e, a) {
            return __awaiter(t, void 0, void 0, function() {
              return __generator(this, function() {
                e && r(e);
                this.curRoleNode.isValid || r("this.curRoleNode.isValid === false");
                a || r("skeletonJson is null");
                o(a);
                return [ 2 ];
              });
            });
          });
        });
      };
      return t;
    }();
    exports["default"] = d;
    cc._RF.pop();
  }, {
    evts: "evts",
    global: "global",
    idx: "idx",
    pInfo: "pInfo",
    res: "res",
    uData: "uData"
  } ],
  skinNameFrame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "367f7W3ubxNcbB33cXikbqd", "skinNameFrame");
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
    var p = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.itemSp = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        t.prototype.onLoad.call(this);
      };
      e.prototype.loadItem = function() {
        this.itemSp.node.y = this.ref > 1 ? 0 : -4;
        this.itemSp.type = this.ref > 1 ? cc.Sprite.Type.SIMPLE : cc.Sprite.Type.SLICED;
        this.itemSp.sizeMode = this.ref > 1 ? cc.Sprite.SizeMode.TRIMMED : (this.itemSp.node.setContentSize(155, 55), 
        cc.Sprite.SizeMode.CUSTOM);
        _skinMgr["default"].ins.updateNameFrame(this.ref, this.itemSp);
      };
      e.prototype.clickItem = function() {
        var t;
        this.state !== _skinMgr.SkinState.using && (t = this.itemSp.node, this.openSkinInfo(t));
      };
      __decorate([ u(cc.Sprite) ], e.prototype, "itemSp", void 0);
      return __decorate([ l ], e);
    }(_skinItemBase["default"]);
    exports["default"] = p;
    cc._RF.pop();
  }, {
    skinItemBase: "skinItemBase",
    skinMgr: "skinMgr"
  } ],
  skinRole: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3f91k0OeBK2Z1h7DbieN6o", "skinRole");
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
    var p = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.roleNode = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        t.prototype.onLoad.call(this);
      };
      e.prototype.loadItem = function() {
        _skinMgr["default"].ins.updateRole(this.ref, this.roleNode);
      };
      e.prototype.clickItem = function() {
        var t;
        this.state !== _skinMgr.SkinState.using && (t = this.roleNode.children[0], this.openSkinInfo(t));
      };
      __decorate([ u(cc.Node) ], e.prototype, "roleNode", void 0);
      return __decorate([ l ], e);
    }(_skinItemBase["default"]);
    exports["default"] = p;
    cc._RF.pop();
  }, {
    skinItemBase: "skinItemBase",
    skinMgr: "skinMgr"
  } ],
  slider: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dfa43OykftLfa6ThTFErZTe", "slider");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = a.property;
    var l = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.handle = null;
        e.slideEvents = [];
        e.pro = null;
        e._progress = 0;
        return e;
      }
      __extends(e, t);
      Object.defineProperty(e.prototype, "progress", {
        get: function get() {
          return this._progress;
        },
        set: function set(t) {
          this._progress = cc.misc.clamp01(t);
          this.pro.width = this._progress * this.node.width;
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.onLoad = function() {
        this.handle && this.handle.isValid && this.handle.node.on(cc.Node.EventType.TOUCH_MOVE, this.tM, this);
      };
      e.prototype.init = function(t) {
        this.progress = t;
        this.handle.node.x = this.progress * this.node.width;
      };
      e.prototype.tM = function(t) {
        var e = t.getLocation();
        var o = this.node.convertToNodeSpaceAR(e);
        this.handle.node.x = cc.misc.clampf(o.x, 0, this.node.width);
        this.progress = this.handle.node.x / this.node.width;
        this.slideEvents.length > 0 && cc.Component.EventHandler.emitEvents(this.slideEvents, this);
      };
      __decorate([ c(cc.Button) ], e.prototype, "handle", void 0);
      __decorate([ c([ cc.Component.EventHandler ]) ], e.prototype, "slideEvents", void 0);
      __decorate([ c(cc.Node) ], e.prototype, "pro", void 0);
      return __decorate([ s ], e);
    }(cc.Component);
    exports["default"] = l;
    cc._RF.pop();
  }, {} ],
  sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e58fSpOr5KX6wp5ukpL3BX", "sound");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _pInfo = require("pInfo");
    var _c = require("c");
    var _evts = require("evts");
    var _uData = require("uData");
    var l = function() {
      function t() {
        this.isSharing = !1;
        this.isHiding = !1;
        this.delayID = 0;
        this.clips = {};
        _evts["default"].plE.on(function(e) {
          e.onShow ? (t.ins.isHiding = !1, t.ins.onSoundChange()) : e.onHide && (t.ins.isHiding = !0, 
          t.ins.onSoundChange());
        });
        _evts["default"].adE.on(function(e) {
          t.ins.isSharing = e == _c.ADE.SHARE || e == _c.ADE.VIDEO;
          t.ins.onSoundChange();
        });
      }
      Object.defineProperty(t, "ins", {
        get: function get() {
          this._ins || (this._ins = new t());
          return this._ins;
        },
        enumerable: !1,
        configurable: !0
      });
      Object.defineProperty(t.prototype, "bgmVolume", {
        get: function get() {
          void 0 === this._bgmVolume && (this._bgmVolume = _uData["default"].ins.getSetting().bgmVolume);
          return this._bgmVolume;
        },
        set: function set(t) {
          cc.audioEngine.setMusicVolume(t);
          this._bgmVolume = t;
        },
        enumerable: !1,
        configurable: !0
      });
      Object.defineProperty(t.prototype, "effectVolume", {
        get: function get() {
          void 0 === this._effectVolume && (this._effectVolume = _uData["default"].ins.getSetting().effectVolume);
          return this._effectVolume;
        },
        set: function set(t) {
          this._effectVolume = t;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.onSoundChange = function() {
        clearTimeout(this.delayID);
        this.delayID = setTimeout(function() {
          clearTimeout(t.ins.delayID);
          t.ins.delayID = 0;
          t.ins.isSharing || t.ins.isHiding ? t.ins.stopAll() : t.ins.resumeAll();
        }, 100);
      };
      t.prototype.stopAllEffects = function() {
        cc.audioEngine.stopAllEffects();
      };
      t.prototype.resumeAll = function() {
        cc.audioEngine.resumeMusic();
        cc.audioEngine.resumeAllEffects();
      };
      t.prototype.stopAll = function() {
        cc.audioEngine.stopMusic();
        cc.audioEngine.stopAllEffects();
      };
      t.prototype.play = function(t, e) {
        void 0 === e && (e = 0);
        return __awaiter(this, void 0, void 0, function() {
          var o;
          var n;
          var r;
          return __generator(this, function(i) {
            switch (i.label) {
             case 0:
              return !1 !== _uData["default"].ins.getSetting().effectSound && null != t ? [ 3, 1 ] : [ 2 ];

             case 1:
              return e = Math.max(1, Math.min(0, e)), t instanceof cc.AudioClip ? (o = t, [ 3, 5 ]) : [ 3, 2 ];

             case 2:
              return null != this.clips[t] ? [ 3, 4 ] : (n = this.clips, r = t, [ 4, new Promise(function(e) {
                cc.assetManager.loadBundle("sound", function(o, n) {
                  o ? e(o) : n.load(t, cc.AudioClip, function(t, o) {
                    e(t ? null : o);
                  });
                });
              }) ]);

             case 3:
              return o = n[r] = i.sent(), [ 3, 5 ];

             case 4:
              o = this.clips[t], i.label = 5;

             case 5:
              return o ? (cc.audioEngine.playEffect(o, !1), cc.audioEngine.setEffectsVolume(e * this.effectVolume), 
              [ 2, o.duration ]) : [ 2 ];

             case 6:
              return [ 2 ];
            }
          });
        });
      };
      t.prototype.playBGM = function() {
        return __awaiter(this, void 0, void 0, function() {
          var e;
          var o;
          var n = this;
          return __generator(this, function() {
            return 0 == (e = _uData["default"].ins.getSetting().bgmSound) ? [ 2 ] : (o = _pInfo.ROOT == _pInfo.sceneType.game || _pInfo.ROOT == _pInfo.sceneType.guide ? "Game" : "Main", 
            cc.assetManager.loadBundle("sound", function(i, r) {
              i || r.load(t.BGM + o, cc.AudioClip, function(t, i) {
                if (!t) {
                  var r = cc.audioEngine;
                  n.curBg == o && r.isMusicPlaying() || !e || (n.curBg = o, r.playMusic(i, !0), r.setMusicVolume(n.bgmVolume));
                }
              });
            }), [ 2 ]);
          });
        });
      };
      t.prototype.stopBGM = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            return _uData["default"].ins.getSetting().bgmSound && !t ? [ 2 ] : (cc.audioEngine.stopMusic(), 
            [ 2 ]);
          });
        });
      };
      t.CLICK = "click";
      t.BGM = "BGM";
      t.WIN = "win";
      t.LOSE = "lose";
      t.RIGHT = "right";
      t.ERROR = "error";
      t.SHOVEL = "shovel";
      t.ROCKETLAUNCH = "rocketLaunch";
      t.ROCKETATTACK = "rocketAttack";
      t.TIME = "time";
      t.FINISH_PUZZLE = "finish_puzzle";
      return t;
    }();
    exports["default"] = l;
    cc._RF.pop();
  }, {
    c: "c",
    evts: "evts",
    pInfo: "pInfo",
    uData: "uData"
  } ],
  swBtn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c4e0aUwodIo6AqBp46T8p1", "swBtn");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = a.property;
    var l = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.sprNode = null;
        e.flag = !0;
        return e;
      }
      __extends(e, t);
      e.prototype.start = function() {
        this.u();
      };
      e.prototype.setState = function(t) {
        this.flag = t;
        this.u();
      };
      e.prototype.u = function() {
        null != this.sprNode && (this.sprNode.active = this.flag);
      };
      __decorate([ c(cc.Node) ], e.prototype, "sprNode", void 0);
      return __decorate([ s ], e);
    }(cc.Component);
    exports["default"] = l;
    cc._RF.pop();
  }, {} ],
  tE: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d306dQjHl5AJbe+g7xzVEUS", "tE");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var n = function() {
      function t() {
        this._1 = [];
        this._2 = [];
      }
      t.prototype.on = function(t) {
        var e = this;
        e._1.push(t);
        return function() {
          return e.off(t);
        };
      };
      t.prototype.once = function(t) {
        var e = this;
        e._2.push(t);
        return function() {
          return e.off(t);
        };
      };
      t.prototype.off = function(t) {
        var e = this;
        var o = e._1.indexOf(t);
        o > -1 && e._1.splice(o, 1);
        (o = e._2.indexOf(t)) > -1 && e._2.splice(o, 1);
      };
      t.prototype.emit = function(t) {
        var e = this;
        e._1.forEach(function(e) {
          return e(t);
        });
        e._2.forEach(function(e) {
          return e(t);
        });
        e._2 = [];
      };
      t.prototype.pipe = function(t) {
        return this.on(function(e) {
          return t.emit(e);
        });
      };
      t.prototype.clear = function() {
        this._1 = [];
        this._2 = [];
      };
      return t;
    }();
    exports["default"] = n;
    cc._RF.pop();
  }, {} ],
  taskMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "43d38GhCKVBYrlCS5iT8Rpi", "taskMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.taskState = exports.taskChannel = exports.TaskType = exports.taskPro = exports.taskBase = void 0;
    var _evts = require("evts");
    var _idx = require("idx");
    var _cfgMgr = require("cfgMgr");
    var _pInfo = require("pInfo");
    var _bagMgr = require("bagMgr");
    var _lang = require("lang");
    var l = function() {
      function t() {}
      t.initTask = function() {
        t.getTaskByType(d.daily, !0);
        t.getTaskByType(d.achieve, !0);
      };
      t.getTaskByType = function(e) {
        var o;
        var n = this;
        var i = _cfgMgr["default"].serverCfg[e];
        var s = t.baseTask[e];
        var c = t.saveData[e] || _pInfo["default"].ins.getTask(e);
        t.baseTask[e] = s = {};
        var l = 0 === Object.keys(c).length;
        null === (o = null == i ? void 0 : i.rules) || void 0 === o || o.forEach(function(t) {
          var o = n.baseTask[e][t.key];
          o || ((o = new u()).temp = t, o.data = c[t.key] || new f(), s[t.key] = o, c[t.key] = o.data);
        });
        l && _pInfo["default"].ins.setTask(e, c);
        t.saveData[e] || (t.saveData[e] = c);
        return s;
      };
      t.taskReset = function() {
        t.taskResetByTyp(d.daily);
      };
      t.taskResetByTyp = function(e) {
        var o;
        var n = _cfgMgr["default"].serverCfg[e];
        var i = t.saveData[e] || {};
        null === (o = null == n ? void 0 : n.rules) || void 0 === o || o.forEach(function(t) {
          i[t.key] ? (i[t.key].count = 0, i[t.key].state = h.Receive) : i[t.key] = new f();
        });
        t.saveData[e] = i;
        _pInfo["default"].ins.setTask(e, i);
      };
      t.updateTask = function(e, o) {
        void 0 === o && (o = d.daily);
        var r = t.baseTask[o];
        var l = t.saveData[o];
        if (r && e.data.state == h.Finish) for (var u in e.temp.get_by == p.ad_reward ? e.data.state = e.data.count >= e.temp.nums ? h.Rewared : h.Receive : e.data.state = h.Rewared, 
        r[e.temp.key] = e, l[e.temp.key] = e.data, _pInfo["default"].ins.setTask(o, l), 
        _idx.platform.reportEvent(_idx.ERepEvt.dailyTask, {
          taskId: _lang.lang[e.temp.key]
        }), _evts["default"].opE.emit({
          action: _evts["default"].UPDTASK,
          data: e
        }), e.temp.val) e.temp.val.hasOwnProperty(u) && _bagMgr["default"].ins.addItem(u, e.temp.val[u]);
      };
      t.doTask = function(e, o) {
        void 0 === o && (o = d.daily);
        var i = t.baseTask[o];
        var r = t.saveData[o];
        if (i) {
          var s;
          for (var c in i) if (i.hasOwnProperty(c)) {
            var l = i[c];
            if (l.data.state != h.Receive) continue;
            var u = "string" == typeof e && Object.values(p).includes(e) ? "get_by" : "key";
            l.temp[u] == e && (l.data.count += 1, (l.data.count >= l.temp.nums || l.temp.get_by == p.ad_reward) && (l.data.state = h.Finish, 
            r[c] = l.data), s = !0, _evts["default"].opE.emit({
              action: _evts["default"].UPDTASK,
              data: l
            }));
            _evts["default"].opE.emit({
              action: _evts["default"].UPD_MAIN_RED
            });
          }
          s && _pInfo["default"].ins.setTask(o, r);
        }
      };
      t.taskCheck = function(e) {
        switch (e) {
         case _pInfo.gameType.normal:
         case _pInfo.gameType.freedom:
          t.doTask(p.cg_line);
          break;

         case _pInfo.gameType.race:
          t.doTask(p.qw_line);
          break;

         case _pInfo.gameType.challenge:
          t.doTask(p.daily_challenge);
        }
      };
      t.getFinishNum = function() {
        for (var e = _cfgMgr["default"].serverCfg[d.daily], o = t.getTaskByType(d.daily), n = null == e ? void 0 : e.rules, i = 0, a = 0, s = n.length; a < s; a++) o[n[a].key].data.state == h.Finish && i++;
        return i;
      };
      t.getUnFinishNum = function() {
        for (var e = _cfgMgr["default"].serverCfg[d.daily], o = t.getTaskByType(d.daily), n = null == e ? void 0 : e.rules, i = 0, a = 0, s = n.length; a < s; a++) o[n[a].key].data.state == h.Receive && i++;
        return i;
      };
      t.baseTask = {};
      t.saveData = {};
      return t;
    }();
    exports["default"] = l;
    var u = function u() {};
    exports.taskBase = u;
    var p;
    var d;
    var h;
    var f = function f() {
      this.count = 0;
      this.state = h.Receive;
    };
    exports.taskPro = f;
    (function(t) {
      t.ad_reward = "ad_reward", t.cg_line = "cg_line", t.daily_challenge = "daily_challenge", 
      t.qw_line = "qw_line";
    })(p = exports.TaskType || (exports.TaskType = {}));
    (function(t) {
      t.daily = "daily_tasks", t.achieve = "achieve_tasks";
    })(d = exports.taskChannel || (exports.taskChannel = {}));
    (function(t) {
      t[t.None = 0] = "None", t[t.Receive = 1] = "Receive", t[t.Finish = 2] = "Finish", 
      t[t.Rewared = 3] = "Rewared";
    })(h = exports.taskState || (exports.taskState = {}));
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    cfgMgr: "cfgMgr",
    evts: "evts",
    idx: "idx",
    lang: "lang",
    pInfo: "pInfo"
  } ],
  tb: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b3b25KMz3pN65/TF12QdPWO", "tb");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _ali = require("ali");
    var _uData = require("uData");
    var _evts = require("evts");
    var _pConst = require("pConst");
    var _sound = require("sound");
    var _idx = require("idx");
    var _time = require("time");
    var _ali = require("ali");
    var h = function(t) {
      function e() {
        return t.call(this) || this;
      }
      __extends(e, t);
      Object.defineProperty(e.prototype, "appId", {
        get: function get() {
          return "3000000107678912";
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.string = function() {
        return _pConst.PFCode.TaoBao;
      };
      e.prototype.login = function() {
        return Promise.resolve();
      };
      e.prototype.initAliListener = function() {
        var t = this;
        _ali.my.onShow(function(e) {
          _evts["default"].plE.emit({
            onShow: !0,
            isSharing: t.isSharing
          }), _uData["default"].ins.syncLaunchOption(e), t.isSharing || t.reenter(), t.bySlider = "gamecenter" == e.query.sourceChannel, 
          _evts["default"].opE.emit({
            action: _evts["default"].Slider_Chg
          });
        });
        _ali.my.onHide(function() {
          t.onHideT = _time["default"].ins.serverTime;
          _evts["default"].plE.emit({
            onHide: !0
          });
        });
        var e = _pConst.SDKConfig.shareData();
        this.canUse("8.8.0") && (_ali.my.onShareAppMessage = function() {
          return {
            title: e.title,
            desc: "",
            imageUrl: "https://tjkj300.oss-cn-shenzhen.aliyuncs.com/web/tjkj300web/other/share.jpg"
          };
        });
        _ali.my.onMemoryWarning && _ali.my.onMemoryWarning(function() {
          _ali.my.triggerGC && _ali.my.triggerGC();
        });
      };
      e.prototype.initCommonSetting = function() {
        _ali.my.getNetworkType({
          success: function success() {},
          fail: function fail() {}
        });
        _evts["default"].chE.on(function() {});
      };
      e.prototype.syncTime = function() {
        return new Promise(function(t) {
          var e = _idx.platform.cloud;
          e ? e.callContainer({
            path: "/api/gTime",
            init: {
              method: "GET",
              header: {
                "content-type": "application/json"
              },
              timeout: 2e3
            },
            success: function success(e) {
              var o;
              var n = e.data;
              if (n) if ("string" == typeof n) try {
                o = JSON.parse(n).t;
              } catch (e) {} else o = n.t;
              t(o || null);
            },
            fail: function fail() {
              return t(null);
            }
          }) : t(null);
        });
      };
      e.prototype.doWatchAD = function() {};
      e.prototype.share = function() {
        return new Promise(function(t) {
          _ali.my.showSharePanel({
            from: "code",
            success: function success() {
              _sound["default"].ins.playBGM();
              t(1);
            },
            fail: function fail(e) {
              console.error("alisharedata fail:", e);
              _sound["default"].ins.playBGM();
              t(0);
            }
          });
        });
      };
      return e;
    }(_ali["default"]);
    exports["default"] = h;
    cc._RF.pop();
  }, {
    ali: "ali",
    evts: "evts",
    idx: "idx",
    pConst: "pConst",
    sound: "sound",
    time: "time",
    uData: "uData"
  } ],
  temp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3183USi7VC9LK6sjitvsGm", "temp");
    cc._RF.pop();
  }, {} ],
  time: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "59024eX+axMOIBY16DZlWQV", "time");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _uData = require("uData");
    var i = function() {
      function t() {}
      Object.defineProperty(t, "ins", {
        get: function get() {
          this._ins || (this._ins = new t());
          return this._ins;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.sync = function(t) {
        this.serverStartT = t || Date.now();
        this.clientStartT = Date.now();
      };
      Object.defineProperty(t.prototype, "serverTime", {
        get: function get() {
          return Math.floor((this.serverStartT + Date.now() - this.clientStartT) / 1e3);
        },
        enumerable: !1,
        configurable: !0
      });
      Object.defineProperty(t.prototype, "loginTime", {
        get: function get() {
          this.loginT || (this.loginT = _uData["default"].ins.getLocalDataByKey("login_date"));
          return this.loginT;
        },
        enumerable: !1,
        configurable: !0
      });
      Object.defineProperty(t.prototype, "isSameDay", {
        get: function get() {
          if (!t.ins.serverTime || !t.ins.loginTime) return !0;
          var e = new Date(1e3 * t.ins.serverTime);
          var o = new Date(1e3 * t.ins.loginTime);
          return e.getFullYear() == o.getFullYear() && e.getMonth() == o.getMonth() && e.getDate() == o.getDate();
        },
        enumerable: !1,
        configurable: !0
      });
      Object.defineProperty(t.prototype, "nextZeroTime", {
        get: function get() {
          var t = 1e3 * this.serverTime;
          var e = new Date(t);
          e.setDate(e.getDate() + 1);
          e.setHours(0, 0, 0, 0);
          return e.getTime() - t;
        },
        enumerable: !1,
        configurable: !0
      });
      t.getFormatHMS = function(t, e, o) {
        void 0 === e && (e = "HH:MM:SS");
        void 0 === o && (o = !0);
        var n = Math.floor(t / 86400);
        var i = n.toString();
        o && (i = (i = "00" + n).substring(i.length - 2));
        var r = Math.floor(t % 86400 / 3600);
        var a = r.toString();
        o && (a = (a = "00" + r).substring(a.length - 2));
        var s = Math.floor(t % 3600 / 60);
        var c = s.toString();
        o && (c = (c = "00" + s).substring(c.length - 2));
        var l = Math.floor(t % 3600 % 60);
        var u = l.toString();
        o && (u = (u = "00" + l).substring(u.length - 2));
        var p = {
          "D+": i,
          "H+": a,
          "M+": c,
          "S+": u
        };
        for (var d in p) {
          var h = new RegExp("(" + d + ")").exec(e);
          h && (e = e.replace(h[1], p[d]));
        }
        return e;
      };
      t.formatDate2Str = function(t, e) {
        void 0 === e && (e = !1);
        var o;
        var n;
        var i;
        var r = Math.floor(t / 86400);
        if (r > 0) {
          var a = r.toString();
          e && (a = (a = "00" + r).substring(a.length - 2));
          return a + "\u5929";
        }
        if ((o = Math.floor(t % 86400 / 3600)) > 0) {
          var s = o.toString();
          e && (s = (s = "00" + o).substring(s.length - 2));
          return s + "\u5c0f\u65f6";
        }
        if ((n = Math.floor(t % 3600 / 60)) > 0) {
          var c = n.toString();
          e && (c = (c = "00" + n).substring(c.length - 2));
          return c + "\u5206\u949f";
        }
        if ((i = Math.floor(t % 3600 % 60)) > 0) {
          var l = i.toString();
          e && (l = (l = "00" + i).substring(l.length - 2));
          return l + "\u79d2";
        }
        return "0\u79d2";
      };
      t.prototype.formatDate = function(t) {
        var e = new Date(t);
        var o = e.getFullYear();
        var n = e.getMonth() + 1;
        var i = e.getDate();
        var r = e.getHours();
        var a = e.getMinutes();
        var s = e.getSeconds();
        return o + "-" + (n < 10 ? "0" : "") + n + "-" + (i < 10 ? "0" : "") + i + " " + (r < 10 ? "0" : "") + r + ":" + (a < 10 ? "0" : "") + a + ":" + (s < 10 ? "0" : "") + s;
      };
      return t;
    }();
    exports["default"] = i;
    cc._RF.pop();
  }, {
    uData: "uData"
  } ],
  tipMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a83eevdkoxFOaQQ5jw2Zqgx", "tipMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _res = require("res");
    var _ui_tip = require("ui_tip");
    var r = function() {
      function t() {
        if (this.iL = !1, this.tipN = null, t._ins) throw new Error("tipMgr can only be one\uff01");
        t._ins = this;
      }
      Object.defineProperty(t, "ins", {
        get: function get() {
          t._ins || new t();
          return t._ins;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.showTip = function(t, e) {
        var o = this;
        this.showStr = t;
        this.isSystemFont = e;
        this.iL || (cc.isValid(this.tipN) ? this.onShow() : (this.iL = !0, _res["default"].ins.lPre("prefab/tip").then(function(t) {
          o.tipN = cc.instantiate(t);
          o.onShow();
          o.iL = !1;
        })["catch"](function() {
          console.error("getPrefabErr");
        })));
      };
      t.prototype.onShow = function() {
        if (this.showStr) {
          var t = cc.director.getScene().getChildByName("Canvas");
          if (t) {
            var e = t.getChildByName("tipManager");
            e || (e = new cc.Node("tipManager"), t.addChild(e));
            this.tipN.parent || e.addChild(this.tipN);
            e.setPosition(cc.v2());
            this.tipN.getComponent(_ui_tip["default"]).init(this.showStr, this.isSystemFont);
          }
        }
      };
      return t;
    }();
    exports["default"] = r;
    cc._RF.pop();
  }, {
    res: "res",
    ui_tip: "ui_tip"
  } ],
  toast: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc94b5eJWNH+pO/QTHSv3Xi", "toast");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var n = function() {
      function t() {}
      t.showToast = function() {
        return new Promise(function(t) {
          t(1);
        });
      };
      return t;
    }();
    exports["default"] = n;
    cc._RF.pop();
  }, {} ],
  top: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e7643aDbU1EEpPuHwYX4LLj", "top");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _idx = require("idx");
    var _mySafeArea = require("mySafeArea");
    var _pConst = require("pConst");
    var _res = require("res");
    var _time = require("time");
    var _uData = require("uData");
    var _cfgMgr = require("cfgMgr");
    var _lang = require("lang");
    var _global = require("global");
    var _mailMgr = require("mailMgr");
    var _panelMgr = require("panelMgr");
    var _taskMgr = require("taskMgr");
    var _pInfo = require("pInfo");
    var _head = require("head");
    var _rewardMgr = require("rewardMgr");
    var w = cc._decorator;
    var S = w.ccclass;
    var T = w.property;
    var I = Math.floor;
    var D = Math.ceil;
    var P = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.countDownNode = null;
        e.coinLbl = null;
        e.cashLbl = null;
        e.powerLbl = null;
        e.powerCdLbl = null;
        e.powerSp = null;
        e.sidebarNode = null;
        e.desktopNode = null;
        e.newGiftBtn = null;
        e.newGiftBtnLight = null;
        e.friendRankBtn = null;
        e.clearBtn = null;
        e.sidebarRedPointNode = null;
        e.mailRedPointLbl = null;
        e.txt_name = null;
        e.deskLb = null;
        e.saveBtn = null;
        e.signRedLb = null;
        e.headComp = null;
        e.serviceNode = null;
        e.taskRedLb = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        console.log("\ud83c\udfae Top\u7ec4\u4ef6onLoad\u5f00\u59cb");
        this.updateDesktop();
        this.updateSidebar();
        this.updateMail();
        this.updateCoin();
        console.log("\ud83c\udfae \u51c6\u5907\u8c03\u7528updateCash\uff0ccashLbl\u72b6\u6001:", !!this.cashLbl);
        this.scheduleOnce(this.updateCash.bind(this), .1);
        console.log("\ud83c\udfae scheduleOnce updateCash\u5df2\u8bbe\u7f6e");
        this.scheduleOnce(this.updateCash.bind(this), .5);
        this.scheduleOnce(this.updateCash.bind(this), 1);
        this.updatePower();
        this.upChapter();
        this.loadNewGift();
        this.updateNewGift();
        this.updateHead();
        this.updateFriendRank();
        this.updateSignRed();
        this.upserviceNode();
        this.upDTaskRed();
        _evts["default"].opE.on(this.onOperTap.bind(this));
        _evts["default"].plE.on(this.onOperTap2.bind(this));
        this.clearBtn.destroy();
      };
      e.prototype.start = function() {
        var t = this;
        this.scheduleOnce(function() {
          if (t.node.y -= _mySafeArea.getSafeAreaRect().yMin, t.node.removeComponent(cc.Widget), 
          _global["default"].padScale) {
            var e = (cc.view.getVisibleSize().width - 720) / 2;
            t.node.children[0].x -= e;
            t.node.children[1].x += e;
          }
        });
      };
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].COIN_CHG:
          this.updateCoin();
          break;

         case "CASH_CHG":
          this.updateCash();
          console.log("\ud83d\udcb0 \u5377\u5377\u7684\u73b0\u91d1\u4f59\u989d\u66f4\u65b0\u4e86: \uffe5" + _rewardMgr["default"].getCashDisplay());
          break;

         case _evts["default"].POWER_CHG:
          this.updatePower();
          break;

         case _evts["default"].Slider_Chg:
          this.updateSidebar();
          break;

         case _evts["default"].UPDMAIL:
          this.updateMail();
          break;

         case _evts["default"].UPD_NEW_GIFT:
          this.updateNewGift();
          break;

         case _evts["default"].UPD_TOP_HEADINFO:
          this.updateHead();
          break;

         case _evts["default"].ADD_DESKTOP:
          this.addDesktopCb(t.data);
          break;

         case _evts["default"].ALIPAY_MAIN:
          this.getDesktopReward();

         case _evts["default"].Desktop_Chg:
          this.updateDesktop();
          break;

         case _evts["default"].SIGN_RED:
          this.updateSignRed();
          break;

         case _evts["default"].UPD_MAIN_RED:
          this.upDTaskRed();
        }
      };
      e.prototype.onOperTap2 = function(t) {
        t && (t.onHide && this.pause(), t.onShow && this.updatePower());
      };
      e.prototype.updateSignRed = function() {
        this.signRedLb.node.parent.parent.active = !1;
      };
      e.prototype.upDTaskRed = function() {
        var t = _taskMgr["default"].getUnFinishNum();
        var e = this.taskRedLb;
        e && (t > 0 ? (e.node.parent.active = !0, e.string = t + "", e.node.x = _global["default"].getCharXOffset(e.string)) : e.node.parent.active = !1);
      };
      e.prototype.upserviceNode = function() {
        if (this.serviceNode.active = !1, _idx.platform.string() == _pConst.PFCode.Bytedance) {
          var t = _idx.platform.getSystemData();
          t && ("Douyin" != t.appName && "douyin_lite" != t.appName || (this.serviceNode.active = !0));
        }
      };
      e.prototype.updateDesktop = function() {
        var t;
        var e;
        switch (_idx.platform.string()) {
         case _pConst.PFCode.Bytedance:
          if (this.desktopNode.active = !0, _pInfo["default"].ins.getAddDesk()) this.deskLb.node.parent.active = !1; else {
            var o = (null === (e = null === (t = _cfgMgr["default"].serverCfg.add_desktop) || void 0 === t ? void 0 : t.rules) || void 0 === e ? void 0 : e.times) || 50;
            this.deskLb.string = "+" + o;
            this.deskLb.node.parent.active = !0;
          }
          break;

         case _pConst.PFCode.Alipay:
          0 === _uData["default"].ins.getLocalData().aliAddHome || _idx.platform.cDeskCatch ? this.desktopNode.active = !1 : this.desktopNode.active = !0;
          break;

         default:
          this.desktopNode.active = !1;
        }
      };
      e.prototype.updateSidebar = function() {
        this.sidebarNode.active = _idx.platform.sidebarExist;
        var t = _idx.platform.bySlider && !_pInfo["default"].ins.getIsGetSlider();
        this.sidebarRedPointNode.active = t;
        t && this.scheduleOnce(function() {
          _panelMgr["default"].ins.open("ui/ui_sidebar", null);
        });
      };
      e.prototype.updateMail = function() {
        var t = this;
        _mailMgr["default"].ins.getMail(function(e) {
          var o = 0;
          var n = t.mailRedPointLbl;
          if (n && n.isValid) {
            if (e && e.errMsg && "error" === e.errMsg) return void (t.mailRedPointLbl.node.parent.active = !1);
            for (var i in _mailMgr["default"].ins.mailInfo.mail) _mailMgr["default"].ins.mailInfo.mail[i] == _mailMgr.mailState.noRead && o++;
            t.mailRedPointLbl.string = o + "";
            t.mailRedPointLbl.node.parent.active = o > 0;
          }
        });
      };
      e.prototype.updateFriendRank = function() {
        this.friendRankBtn.active = _idx.platform.string() == _pConst.PFCode.Bytedance;
      };
      e.prototype.updateCoin = function() {
        this.coinLbl.string = _pInfo["default"].ins.getCoin() + "";
      };
      e.prototype.updateCash = function() {
        var cashDisplay = _rewardMgr["default"].getCashDisplay();
        console.log("\ud83d\udd0d updateCash\u8c03\u7528 - cashLbl\u5b58\u5728:", !!this.cashLbl, "\u73b0\u91d1\u4f59\u989d:", cashDisplay);
        console.log("\ud83d\udd0d cashLbl\u8be6\u7ec6\u4fe1\u606f:", this.cashLbl);
        if (this.cashLbl) {
          console.log("\ud83d\udd0d \u66f4\u65b0\u524d\u5377\u5377\u73b0\u91d1\u663e\u793a:", this.cashLbl.string);
          this.cashLbl.string = cashDisplay;
          console.log("\ud83d\udd0d \u66f4\u65b0\u540e\u5377\u5377\u73b0\u91d1\u663e\u793a:", this.cashLbl.string);
          console.log("\u2705 \u5377\u5377\u7684\u73b0\u91d1\u4f59\u989dUI\u5df2\u66f4\u65b0: \uffe5" + cashDisplay);
        } else {
          console.log("\u274c cashLbl\u672a\u7ed1\u5b9a\uff01\u9700\u8981\u5728Cocos Creator\u7f16\u8f91\u5668\u4e2d\u5c06\u73b0\u91d1Label\u7ed1\u5b9a\u5230cashLbl\u5c5e\u6027");
          console.log("\ud83d\udcb0 \u5377\u5377\u7684\u73b0\u91d1\u4f59\u989d\u6570\u636e\u6b63\u5e38: \uffe5" + cashDisplay + " (\u4f46UI\u65e0\u6cd5\u663e\u793a)");
        }
      };
      e.prototype.updatePower = function() {
        this.schedule(this._updatePower, 1, cc.macro.REPEAT_FOREVER);
        this._updatePower();
      };
      e.prototype.pause = function() {
        this.unschedule(this._updatePower);
      };
      e.prototype.loadNewGift = function() {
        var t = this;
        _res["default"].ins.getBundleByString("resSps").then(function(e) {
          e.load("spine/light/action", sp.SkeletonData, function(e, o) {
            if (!e && t.node && t.node.isValid) {
              var n = new cc.Node();
              var i = n.addComponent(sp.Skeleton);
              i.skeletonData = o, i.animation = "animation", n.parent = t.newGiftBtn;
            }
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
        cc.tween(this.newGiftBtnLight).by(3, {
          angle: -360
        }).repeatForever().start();
        cc.tween(this.newGiftBtn).sequence(cc.tween().to(1, {
          scale: .9
        }), cc.tween().to(1, {
          scale: 1
        })).repeatForever().start();
      };
      e.prototype.updateNewGift = function() {
        this.newGiftBtn.active = this.newGiftBtnLight.active = !1;
      };
      e.prototype.updateHead = function() {
        var t = _uData["default"].ins.getName() || "\u5377\u5377\u5927\u738b";
        t.length > 7 && (t = t.substring(0, 6) + "...");
        this.txt_name.string = t;
        var e = _uData["default"].ins.getHeadImg();
        this.headComp.loadHeadImg(e);
      };
      e.prototype.upChapter = function() {};
      e.prototype._updatePower = function() {
        if (this.isValid) {
          var t = _pInfo["default"].ins;
          var e = t.getPowerFullTime() - _time["default"].ins.serverTime;
          var o = t.getPower();
          var n = o;
          var i = e > 0;
          var r = _cfgMgr["default"].serverCfg.times.forUser;
          var a = (_uData["default"].ins.getIsNewUser() ? r.new_user.rules.basic_times.val : r.all.rules.basic_times.val) || 100;
          if (i) {
            var s = t.getPerPowerNeedTime();
            n = a - D(e / s);
            var c = e % s;
            var l = I(c / 60);
            var u = I(c % 60);
            var f = l < 10 ? "0" : "";
            var g = u < 10 ? "0" : "";
            this.powerCdLbl.string = f + l + ":" + g + u;
          } else n < a && (n = a), this.unschedule(this._updatePower), _pInfo["default"].ins.setPowerFullTime(0);
          this.countDownNode.active = i;
          n != o && t.setPower(n);
          this.powerLbl.string = n + "/" + a;
        }
      };
      e.prototype.onBtnGetPower = function() {
        _panelMgr["default"].ins.open("ui/ui_getRes", {
          itemId: "times"
        });
      };
      e.prototype.onBtnSet = function() {
        _panelMgr["default"].ins.open("ui/ui_set", null);
      };
      e.prototype.onBtnRecord = function() {
        _panelMgr["default"].ins.open("ui/ui_record", null);
      };
      e.prototype.onBtnRank = function() {
        _panelMgr["default"].ins.open("ui/ui_rank", null);
      };
      e.prototype.onBtnGetCoin = function() {
        _panelMgr["default"].ins.open("ui/ui_getRes", {
          itemId: "coin",
          gType: _pInfo.gameType.normal,
          useTo: _lang.getCoinFor.Main
        });
      };
      e.prototype.onBtnGetCash = function() {
        console.log("\ud83d\udc9d \u73b0\u91d1\u5956\u52b1\u624b\u52a8\u6d4b\u8bd5\u5df2\u6682\u65f6\u7981\u7528");
      };
      e.prototype.onBtnChapter = function() {
        _panelMgr["default"].ins.open("ui/ui_chapter", null);
      };
      e.prototype.onBtnSidebar = function() {
        _panelMgr["default"].ins.open("ui/ui_sidebar", null);
      };
      e.prototype.onBtnEmail = function() {
        _panelMgr["default"].ins.open("ui/ui_mail", null);
      };
      e.prototype.onBtnTip = function() {
        _panelMgr["default"].ins.open("ui/ui_raceTip", {
          pageIdx: 0
        });
      };
      e.prototype.onBtnNewGift = function() {
        _panelMgr["default"].ins.open("ui/ui_newGift", {
          hideCb: null
        });
      };
      e.prototype.onBtnDesktop = function() {
        var t;
        switch (_idx.platform.string()) {
         case _pConst.PFCode.Bytedance:
          _idx.platform.addShortcut();
          break;

         case _pConst.PFCode.Alipay:
          null === (t = _idx.platform.addGamesetlattice) || void 0 === t || t.call(_idx.platform);
        }
      };
      e.prototype.onBtnFriendRank = function() {
        _idx.platform.showFriendRank(_pConst.SDKConfig.ttZoneId.normal);
      };
      e.prototype.onBtnSkin = function() {
        _panelMgr["default"].ins.open("ui/ui_skin", null);
      };
      e.prototype.onBtnSave = function() {
        _panelMgr["default"].ins.open("ui/ui_save", null);
      };
      e.prototype.onBtnSign = function() {
        _panelMgr["default"].ins.open("ui/ui_sevenDay", null);
      };
      e.prototype.onBtnQuest = function() {
        _panelMgr["default"].ins.open("ui/ui_quest", null);
      };
      e.prototype.onBtnService = function() {
        if (_idx.platform.string() == _pConst.PFCode.Bytedance) {
          var t = _idx.platform.getSystemData();
          if (t) {
            var e = 0;
            switch (t.appName) {
             case "Douyin":
              e = 2;
              break;

             case "douyin_lite":
              e = 1;
            }
            e && _idx.platform.openService(e);
          }
        }
      };
      e.prototype.onTest = function() {
        _pInfo["default"].ins.clearDailyData();
      };
      e.prototype.testCashRewardSystem = function() {
        try {
          console.log("\ud83e\uddea=== \u73b0\u91d1\u5956\u52b1\u7cfb\u7edf\u6d4b\u8bd5\u5f00\u59cb ===");
          console.log("\u5f53\u524d\u73b0\u91d1\u4f59\u989d:", _rewardMgr["default"].getCashDisplay());
          var difficulties = [ "beginner", "easy", "medium", "hard", "expert" ];
          var testResults = [];
          for (var i = 0; i < difficulties.length; i++) {
            var difficulty = difficulties[i];
            var beforeBalance = _rewardMgr["default"].getCash();
            var hasReward = _rewardMgr["default"].onPuzzleComplete(difficulty, true);
            var afterBalance = _rewardMgr["default"].getCash();
            if (hasReward) {
              var rewardAmount = afterBalance - beforeBalance;
              console.log("\u2705", difficulty, "\u96be\u5ea6\u83b7\u5f97\u5956\u52b1:", (rewardAmount / 100).toFixed(2), "\u5143");
              testResults.push({
                difficulty: difficulty,
                reward: rewardAmount
              });
            } else console.log("\u2b55", difficulty, "\u96be\u5ea6\u6ca1\u6709\u89e6\u53d1\u5956\u52b1");
          }
          console.log("\ud83c\udfc6 \u6d4b\u8bd5\u5b8c\u6210\uff01\u603b\u4f59\u989d:", _rewardMgr["default"].getCashDisplay());
          console.log("\ud83d\udcca \u83b7\u5f97\u5956\u52b1\u7684\u6d4b\u8bd5:", testResults);
        } catch (error) {
          console.log("\u274c \u6d4b\u8bd5\u5931\u8d25:", error);
          console.error(error);
        }
      };
      e.prototype.addDesktopCb = function(t) {
        var e = _pInfo["default"].ins.getAddDesk();
        t && !e && (_pInfo["default"].ins.setAddDesk(!0), this.getDesktopReward(), this.updateDesktop());
      };
      e.prototype.getDesktopReward = function() {
        var t;
        var e;
        var o = (null === (e = null === (t = _cfgMgr["default"].serverCfg.add_desktop) || void 0 === t ? void 0 : t.rules) || void 0 === e ? void 0 : e.times) || 50;
        _pInfo["default"].ins.addPower(o);
        var n = this.desktopNode.isValid ? this.desktopNode.position : this.deskTopNodePos;
        var i = this.node.convertToWorldSpaceAR(n);
        _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: [ {
            itemId: "times",
            worldPos: i,
            value: o
          } ]
        });
      };
      __decorate([ T(cc.Node) ], e.prototype, "countDownNode", void 0);
      __decorate([ T(cc.Label) ], e.prototype, "coinLbl", void 0);
      __decorate([ T(cc.Label) ], e.prototype, "cashLbl", void 0);
      __decorate([ T(cc.Label) ], e.prototype, "powerLbl", void 0);
      __decorate([ T(cc.Label) ], e.prototype, "powerCdLbl", void 0);
      __decorate([ T(cc.Sprite) ], e.prototype, "powerSp", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "sidebarNode", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "desktopNode", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "newGiftBtn", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "newGiftBtnLight", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "friendRankBtn", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "clearBtn", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "sidebarRedPointNode", void 0);
      __decorate([ T(cc.Label) ], e.prototype, "mailRedPointLbl", void 0);
      __decorate([ T(cc.Label) ], e.prototype, "txt_name", void 0);
      __decorate([ T(cc.Label) ], e.prototype, "deskLb", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "saveBtn", void 0);
      __decorate([ T(cc.Label) ], e.prototype, "signRedLb", void 0);
      __decorate([ T(_head["default"]) ], e.prototype, "headComp", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "serviceNode", void 0);
      __decorate([ T(cc.Label) ], e.prototype, "taskRedLb", void 0);
      return __decorate([ S ], e);
    }(cc.Component);
    exports["default"] = P;
    cc._RF.pop();
  }, {
    cfgMgr: "cfgMgr",
    evts: "evts",
    global: "global",
    head: "head",
    idx: "idx",
    lang: "lang",
    mailMgr: "mailMgr",
    mySafeArea: "mySafeArea",
    pConst: "pConst",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    res: "res",
    rewardMgr: "rewardMgr",
    taskMgr: "taskMgr",
    time: "time",
    uData: "uData"
  } ],
  tt: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b084hHrupN56MsxKfnNQhM", "tt");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _c = require("c");
    var _com = require("com");
    var _env = require("env");
    var _errorCode = require("errorCode");
    var _evts = require("evts");
    var _idx = require("idx");
    var _pConst = require("pConst");
    var _request = require("request");
    var _time = require("time");
    var _uData = require("uData");
    var _tipMgr = require("tipMgr");
    var y = "env-nBT5qFlz3P";
    var m = "1jtw3wjabr0ui";
    var v = "4m29365j0d2k3agn5c";
    var _ = function() {
      function t() {
        this.isSharing = !1;
        this.sdkSwitch = _pConst.DefaultSDKSwitch;
        this.videoCheckedMap = {};
        this.videoCheckedLastT = {};
        this.uniqueVideoUnitId = v;
        this.isLoading = !1;
        this.isLoggedIn = !1;
        this.onHideT = 0;
        this.noAd = !1;
        this.noVideo = !1;
        this.lastInterAdShowT = 0;
        this.switchesInitd = !1;
        this.gameRecorder = null;
        this.ta = null;
        this.m_nStartRecordT = 0;
        this.m_nRecordT = 0;
        this.m_bIsRecording = !1;
        this.m_nAutoStopVideoId = 0;
        this.m_strVideoPath = "";
        this.onKeyboardComplete = tt.onKeyboardComplete;
      }
      Object.defineProperty(t.prototype, "appId", {
        get: function get() {
          return "tt6d2c1b91f21d474902";
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.string = function() {
        return _pConst.PFCode.Bytedance;
      };
      t.prototype.init = function() {
        this.initVersion();
        this.initByteDanceListener();
        this.initCommonSetting();
        this.initTga();
        this.initVideoRecorder();
        this.uploadAdEvent("active", {});
        var t = tt.getLaunchOptionsSync();
        var e = (null == t ? void 0 : t.scene) || "0";
        this.bySlider = "021036" == e;
      };
      t.prototype.initVersion = function() {
        var t;
        var e;
        this.version = tt.getEnvInfoSync && (null === (e = null === (t = tt.getEnvInfoSync()) || void 0 === t ? void 0 : t.microapp) || void 0 === e ? void 0 : e.mpVersion);
      };
      t.prototype.initTga = function() {};
      t.prototype.isSwitchedInitd = function() {
        return this.switchesInitd;
      };
      t.prototype.initByteDanceListener = function() {
        var t = this;
        var e = this;
        tt.onShow(function(t) {
          _uData["default"].ins.syncLaunchOption(t), e.isSharing || e.reenter(), e.startStopRecordTimeout(Math.max(1e3, _pConst.VIDEO_RECORD_LIMIT - e.m_nRecordT)), 
          e.bySlider = "homepage" == t.launch_from && "sidebar_card" == t.location, _evts["default"].opE.emit({
            action: _evts["default"].Slider_Chg
          }), Math.abs(Date.now() / 1e3 - e.onHideT) > 300 ? e.syncTime().then(function(t) {
            t && _time["default"].ins.sync(t), _evts["default"].plE.emit({
              onShow: !0,
              isSharing: e.isSharing
            });
          }) : _evts["default"].plE.emit({
            onShow: !0,
            isSharing: e.isSharing
          });
        });
        tt.checkScene && tt.checkScene({
          scene: "sidebar",
          success: function success(e) {
            t.sidebarExist = e.isExist;
          },
          fail: function fail() {}
        });
        tt.onHide(function() {
          e.onHideT = _time["default"].ins.serverTime, _evts["default"].plE.emit({
            onHide: !0
          }), e.clearStopRecordTimeout();
        });
        tt.onError(function(t) {
          _env.env.mode !== _env.EM.PROD && tt.showModal({
            title: t.message || "\u5f02\u5e38\u62a5\u9519",
            content: t.stack || t + "",
            showCancel: !1,
            confirmText: "\u597d\u7684"
          });
        });
        tt.canIUse("onMemoryWarning") && tt.onMemoryWarning(function() {
          tt.triggerGC();
        });
        tt.onShareAppMessage(function() {
          return _pConst.SDKConfig.shareData();
        });
        tt.showShareMenu({
          success: function success() {},
          fail: function fail() {}
        });
        var o = tt.getUpdateManager();
        o.onCheckForUpdate(function() {});
        o.onUpdateFailed(function() {});
        o.onUpdateReady(function() {
          tt.showModal({
            title: "\u66f4\u65b0\u63d0\u793a",
            content: "\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5c0f\u6e38\u620f\uff1f",
            success: function success(t) {
              t.confirm && o.applyUpdate();
            }
          });
        });
      };
      t.prototype.initCommonSetting = function() {
        _uData["default"].ins.syncLaunchOption(tt.getLaunchOptionsSync());
        tt.getNetworkType({
          success: function success() {},
          fail: function fail() {}
        });
        _evts["default"].chE.on(function() {});
      };
      t.prototype.initCloud = function() {
        return new Promise(function(t) {
          tt.login({
            success: function success() {
              tt.createCloud && tt.canIUse("createCloud") && (_idx.platform.cloud = tt.createCloud({
                envID: y,
                serviceID: m
              }));
              t(_idx.platform.syncTime());
            },
            fail: function fail() {
              t(null);
            }
          });
        });
      };
      t.prototype.setAccountID = function() {
        _env.env.mode;
        _env.EM.TEST;
      };
      t.prototype.login = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            return [ 2, new Promise(function(e, o) {
              tt.login({
                success: function success(n) {
                  if (n && n.code) {
                    var i = _idx.platform.cloud || (_idx.platform.cloud = tt.createCloud && tt.canIUse("createCloud") && tt.createCloud({
                      envID: y,
                      serviceID: m
                    }));
                    if (t > 2 || !i) return void e(n);
                    i.callContainer({
                      path: "/index",
                      init: {
                        method: "GET",
                        header: {
                          "content-type": "application/json"
                        },
                        timeout: 2e3
                      },
                      success: function success(t) {
                        var o = t.data;
                        if (o) if ("string" == typeof o) try {
                          var i = JSON.parse(o);
                          n.openid = i.i;
                          n.unionid = i.j;
                        } catch (t) {} else n.openid = o.i, n.unionid = o.j;
                        e(n);
                      },
                      fail: function fail() {
                        return o(_errorCode.errorCode.PF_CLOUD_ERR);
                      }
                    });
                  } else console.warn("\u5934\u6761\u767b\u9646\u5931\u8d25\uff1aempty code"), o(_errorCode.errorCode.LOGIN_ERR);
                },
                fail: function fail(t) {
                  var e = "";
                  null != t && null != t.errMsg && (e = t.errMsg);
                  console.warn("\u5934\u6761\u767b\u9646\u5931\u8d25\uff1a", e);
                  o(_errorCode.errorCode.LOGIN_ERR);
                }
              });
            }) ];
          });
        });
      };
      t.prototype.syncTime = function() {
        return new Promise(function(t) {
          var e = _idx.platform.cloud || (_idx.platform.cloud = tt.createCloud && tt.canIUse("createCloud") && tt.createCloud({
            envID: y,
            serviceID: m
          }));
          e ? e.callContainer({
            path: "/gTime",
            init: {
              method: "GET",
              header: {
                "content-type": "application/json"
              },
              timeout: 2e3
            },
            success: function success(e) {
              var o;
              var n = e.data;
              if (n) if ("string" == typeof n) try {
                o = JSON.parse(n).t;
              } catch (e) {} else o = n.t;
              t(o || null);
            },
            fail: function fail() {
              return t(null);
            }
          }) : t(null);
        });
      };
      t.prototype.reenter = function() {};
      t.prototype.getCloudData = function() {
        return __awaiter(this, void 0, void 0, function() {
          var t;
          var e;
          var o;
          var n;
          return __generator(this, function(i) {
            switch (i.label) {
             case 0:
              return (t = _idx.platform.cloud || (_idx.platform.cloud = tt.createCloud && tt.canIUse("createCloud") && tt.createCloud({
                envID: y,
                serviceID: m
              }))) ? [ 4, t.database() ] : [ 3, 3 ];

             case 1:
              return (o = i.sent()) ? (n = o.collection("userData"), [ 4, _idx.platform._check(n) ]) : [ 3, 3 ];

             case 2:
              e = i.sent(), i.label = 3;

             case 3:
              return [ 2, e ];
            }
          });
        });
      };
      t.prototype._check = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            return [ 2, new Promise(function(e) {
              t.get("id").then(function(t) {
                if (t) {
                  _idx.platform.isCheck = !0;
                  var o = t.data;
                  if (o && o.length) {
                    var n = o[0];
                    _idx.platform.dbId = n._id;
                    try {
                      var i = JSON.parse(n.uData);
                      e(i);
                    } catch (r) {
                      e(null);
                    }
                  } else e(null);
                } else e(null);
              })["catch"](function() {
                return e(null);
              });
            }) ];
          });
        });
      };
      t.prototype.setCloudData = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          var e;
          var o;
          var n;
          var r;
          var a;
          return __generator(this, function(i) {
            switch (i.label) {
             case 0:
              return (e = this).isSaving ? [ 2 ] : (o = e.cloud || (e.cloud = tt.createCloud && tt.canIUse("createCloud") && tt.createCloud({
                envID: y,
                serviceID: m
              }))) ? [ 4, o.database() ] : [ 3, 2 ];

             case 1:
              if (!(n = i.sent())) return [ 2 ];
              e.isSaving = !0, r = n.collection("userData"), a = Promise.resolve(), e.isCheck || (a = this._check(r)), 
              a.then(function() {
                e.dbId ? r.doc(e.dbId).update({
                  uData: t
                }).then(function() {
                  _idx.platform.isSaving = !1;
                }) : r.add({
                  uData: t
                }).then(function(t) {
                  _idx.platform.dbId = t.id;
                  _idx.platform.isSaving = !1;
                });
              })["catch"](function(t) {
                return console.error("\u5199\u5165\u5931\u8d25", t);
              }), i.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      t.prototype.getStorage = function(t) {
        try {
          var e = tt.getStorageSync(t);
          return null == e || "" == e ? null : JSON.parse(e);
        } catch (o) {}
      };
      t.prototype.setStorage = function(t, e) {
        try {
          tt.setStorageSync(t, JSON.stringify(e));
        } catch (o) {}
      };
      t.prototype.clearStorage = function() {
        try {
          tt.clearStorageSync();
        } catch (t) {}
      };
      t.prototype.removeStorage = function(t) {
        try {
          tt.removeStorageSync(t);
        } catch (e) {}
      };
      t.prototype.trackLogin = function() {};
      t.prototype.trackUserSet = function() {};
      t.prototype.trackUserSetOnce = function() {};
      t.prototype.trackEvent = function() {};
      t.prototype.getSeq = function() {};
      t.prototype.consumeSeq = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(e) {
            switch (e.label) {
             case 0:
              return t.sequenceInfo.type != _pConst.STDSeqType.VIDEO ? [ 3, 2 ] : [ 4, this.doWatchAD(t) ];

             case 1:
              e.sent(), this.doShare(), e.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      t.prototype.doWatchAD = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          var e;
          var o;
          return __generator(this, function() {
            return this.noAd ? [ 2 ] : this.noVideo ? (console.error("[error] no video"), [ 2, Promise.reject(_pConst.VideoFailCode.NO_AD) ]) : (_evts["default"].adE.emit(_c.ADE.VIDEO), 
            e = this.uniqueVideoUnitId, null == this.videoAd && (this.videoAd = tt.createRewardedVideoAd({
              adUnitId: e
            })), this.showLoading(), o = this, [ 2, new Promise(function(n, i) {
              o.videoAd.onClose(function a(s) {
                null != o.videoAd && o.videoAd.offClose(a), null != s && s.isEnded ? (_evts["default"].adE.emit(_c.ADE.VIDEO_END), 
                o.trackEvent("video", {
                  step: "complete",
                  unit: e,
                  type: t.videoSource,
                  item: t.item
                }), n(1)) : (_evts["default"].adE.emit(_c.ADE.VIDEO_END), i(_pConst.VideoFailCode.CANCELED));
              });
              o.videoAd.show().then(function() {})["catch"](function() {
                _evts["default"].adE.emit(_c.ADE.VIDEO_END);
                o.videoAd.destroy();
                o.videoAd = null;
                i(_pConst.VideoFailCode.NO_AD);
              }).then(function() {
                o.hideLoading();
              });
            }) ]);
          });
        });
      };
      t.prototype.doShare = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            return [ 2 ];
          });
        });
      };
      t.prototype._askReShare = function() {};
      t.prototype.canUse = function(t) {
        return _com["default"].ins.compareVersion(_idx.platform.getSystemData().SDKVersion, t) >= 0;
      };
      t.prototype.getSystemData = function() {
        if (null == this.systemInfoCache) try {
          this.systemInfoCache = tt.getSystemInfoSync();
        } catch (t) {
          return _pConst.DefaultSystemInfo;
        }
        return this.systemInfoCache;
      };
      t.prototype.getSwitches = function() {};
      t.prototype.vibrate = function(t) {
        t == _pConst.VEnum4.SHORT ? tt.vibrateShort(null) : t == _pConst.VEnum4.LONG && tt.vibrateLong({
          success: function success() {},
          fail: function fail() {}
        });
      };
      t.prototype.preloadVideo = function() {
        return !1;
      };
      t.prototype.showModal = function(t) {
        return new Promise(function(e) {
          tt.showModal(Object.assign(Object.assign({}, t), {
            success: function success(t) {
              t.confirm ? e(!0) : t.cancel && e(!1);
            },
            fail: function fail() {
              e(!1);
            }
          }));
        });
      };
      t.prototype.refreshGame = function() {
        try {
          tt.restartMiniProgramSync();
        } catch (t) {
          tt.exitMiniProgram();
        }
      };
      t.prototype.showLoading = function(t) {
        void 0 === t && (t = "\u52a0\u8f7d\u4e2d");
        this.canUse("1.0.0") && (this.isLoading = !0, tt.showLoading({
          title: t,
          mask: !0
        }));
      };
      t.prototype.hideLoading = function() {
        this.canUse("1.0.0") && this.isLoading && (tt.hideLoading(), this.isLoading = !1);
      };
      t.prototype.log = function() {};
      t.prototype.getMenuBounding = function() {};
      t.prototype.createShareImage = function() {};
      t.prototype.preloadInterstitialAD = function() {};
      t.prototype.showInterstitialAD = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            return [ 2, null ];
          });
        });
      };
      t.prototype.canShowBanner = function() {
        return !1;
      };
      t.prototype.getBannerSize = function() {
        return new cc.Size(0, 0);
      };
      t.prototype.showBanner = function() {};
      t.prototype.hideBanner = function() {};
      t.prototype.getSubscribeCnt = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            return [ 2, 0 ];
          });
        });
      };
      t.prototype.subscribe = function() {};
      t.prototype.initVideoRecorder = function() {
        this.canUse("1.6.1") && (this.gameRecorder = tt.getGameRecorderManager(), this.gameRecorder.onStart(this.onVideoRecordStart.bind(this)), 
        this.gameRecorder.onStop(this.onVideoRecordEnd.bind(this)), this.gameRecorder.onError(this.onVideoRecordError.bind(this)));
      };
      t.prototype.startVideoRecord = function() {
        try {
          null != this.gameRecorder && (this.m_bIsRecording = !0, this.gameRecorder.start({
            duration: .001 * _pConst.VIDEO_RECORD_LIMIT,
            isMarkOpen: !1
          }), this.startStopRecordTimeout(_pConst.VIDEO_RECORD_LIMIT));
        } catch (t) {
          this.gameRecorder = null;
        }
      };
      t.prototype.pauseVideoRecord = function() {
        null != this.gameRecorder && this.m_bIsRecording && (this.gameRecorder.pause(), 
        this.clearStopRecordTimeout());
      };
      t.prototype.resumeVideoRecord = function() {
        null != this.gameRecorder && this.m_bIsRecording && (this.gameRecorder.resume(), 
        this.startStopRecordTimeout(Math.max(1e3, _pConst.VIDEO_RECORD_LIMIT - this.m_nRecordT)));
      };
      t.prototype.stopVideoRecord = function() {
        null != this.gameRecorder && (this.clearStopRecordTimeout(), this.gameRecorder.stop(), 
        this.m_bIsRecording = !1);
      };
      t.prototype.startStopRecordTimeout = function(t) {
        this.m_bIsRecording && (this.m_nAutoStopVideoId = setTimeout(this.autoStopVideoRecord.bind(this), t - 1e3), 
        this.m_nStartRecordT = new Date().getTime());
      };
      t.prototype.clearStopRecordTimeout = function() {
        this.m_bIsRecording && (0 !== this.m_nAutoStopVideoId && clearTimeout(this.m_nAutoStopVideoId), 
        this.m_nAutoStopVideoId = 0, this.m_nRecordT += new Date().getTime() - this.m_nStartRecordT, 
        this.m_nStartRecordT = 0);
      };
      t.prototype.autoStopVideoRecord = function() {
        this.m_nAutoStopVideoId = 0;
        this.stopVideoRecord();
        setTimeout(this.startVideoRecord.bind(this), 100);
      };
      t.prototype.onVideoRecordStart = function() {
        this.m_strVideoPath = "";
        this.m_nRecordT = 0;
      };
      t.prototype.onVideoRecordEnd = function(t) {
        var e;
        null != t && null != t.videoPath && (e = this.m_strVideoPath = t.videoPath);
        e && _evts["default"].opE.emit({
          action: _evts["default"].SHOWVIDEOSHARE
        });
      };
      t.prototype.onVideoRecordError = function() {};
      t.prototype.hasVideoRecord = function() {
        return null != this.m_strVideoPath && "" !== this.m_strVideoPath;
      };
      t.prototype.shareVideoRecord = function() {
        var t;
        var e = new Promise(function(e) {
          t = e;
        });
        if (this.hasVideoRecord() && tt.shareAppMessage) {
          var o = [ _env.env.name, "\u5973\u751f\u6e38\u620f\u63a8\u8350", "\u8111\u6d1e\u6e38\u620f", "\u70e7\u8111\u76ca\u667a" ];
          var n = _pConst.SDKConfig.shareData();
          tt.shareAppMessage({
            title: "\u6211\u6b32\u4fee\u4ed9",
            channel: "video",
            desc: "\u6765\u6311\u6218\u4e00\u4e0b",
            query: n.query,
            extra: {
              withVideoId: !0,
              videoPath: this.m_strVideoPath,
              video_title: n.title,
              videoTopics: o
            },
            success: function success() {
              _tipMgr["default"].ins.showTip("\u5206\u4eab\u6210\u529f");
              t(1);
            },
            fail: function fail() {
              _tipMgr["default"].ins.showTip("\u5206\u4eab\u5931\u8d25");
              t(0);
            }
          });
        } else t(0);
        return e;
      };
      t.prototype.uploadAdEvent = function() {};
      t.prototype.PostMessage = function(t, e, o) {
        tt.getOpenDataContext().postMessage({
          Even: t,
          Value1: e,
          Value2: o
        });
      };
      t.prototype.SetUserCloudStorage = function(t, e, o) {
        var n = new Date();
        tt.setUserCloudStorage({
          KVDataList: [ {
            key: "level",
            value: t.toString() + "#" + n.getTime().toString() + "#" + e.toString() + "#" + o.toString()
          } ],
          success: function success() {},
          fail: function fail() {}
        });
      };
      t.prototype.GetOpenDataContext = function() {
        return tt.getOpenDataContext();
      };
      t.prototype.addShortcut = function() {
        tt.addShortcut({
          success: function success() {
            _evts["default"].opE.emit({
              action: _evts["default"].ADD_DESKTOP,
              data: !0
            });
          },
          fail: function fail() {
            _evts["default"].opE.emit({
              action: _evts["default"].ADD_DESKTOP,
              data: !1
            });
            _tipMgr["default"].ins.showTip("\u6dfb\u52a0\u5931\u8d25");
          }
        });
      };
      t.prototype.share = function() {
        return new Promise(function(t) {
          var e = _pConst.SDKConfig.shareData();
          tt.shareAppMessage({
            title: e.title,
            imageUrl: e.imageUrl,
            query: e.query,
            channel: "invite",
            success: function success(e) {
              t(e.data);
            },
            fail: function fail() {
              t(0);
            }
          });
        });
      };
      t.prototype.getUserInfo = function() {
        var t = this;
        return new Promise(function(e, o) {
          if (tt.canIUse("getUserInfo")) {
            var n = t;
            tt.getSetting({
              success: function success(t) {
                t.authSetting["scope.userInfo"] ? n._getUserInfo(e, o) : !1 === t.authSetting["scope.userInfo"] ? n.showRefuseTip(e, o) : n._getUserInfo(e, o);
              },
              fail: function fail() {
                o();
              }
            });
          } else o();
        });
      };
      t.prototype.showRefuseTip = function(t, e) {
        if (this.showModal({
          title: "\u53cb\u60c5\u63d0\u793a",
          content: "\u7533\u8bf7\u4f7f\u7528\u60a8\u7684\u7528\u6237\u4fe1\u606f\uff0c\u5c55\u793a\u6392\u884c\u699c\u3002",
          confirmText: "\u5141\u8bb8",
          cancelText: "\u62d2\u7edd"
        })) {
          var o = this;
          tt.openSetting({
            success: function success() {
              o._getUserInfo(t, e);
            },
            fail: function fail() {
              e();
            }
          });
        } else e();
      };
      t.prototype._getUserInfo = function(t, e) {
        tt.getUserInfo({
          success: function success(e) {
            t(e.userInfo);
          },
          fail: function fail() {
            e();
          }
        });
      };
      t.prototype.navigateToScene = function(t) {
        void 0 === t && (t = "sidebar");
        tt.navigateToScene({
          scene: t,
          success: function success() {},
          fail: function fail() {}
        });
      };
      t.prototype.reportEvent = function(t, e) {
        void 0 === e && (e = {});
        tt.reportAnalytics(t, e);
      };
      t.prototype.setFriendRankData = function(t, e) {
        var o;
        tt && (null === (o = tt.setImRankData) || void 0 === o || o.call(tt, {
          dataType: 0,
          value: t.toString(),
          zoneId: e,
          success: function success() {},
          fail: function fail() {}
        }));
      };
      t.prototype.showFriendRank = function(t) {
        if (tt) if (tt.getImRankList) {
          var e = t === _pConst.SDKConfig.ttZoneId.normal ? "\u5173" : "\u5206";
          var o = t === _pConst.SDKConfig.ttZoneId.normal ? "\u4e3b\u7ebf\u6392\u884c" : "\u597d\u53cb\u8da3\u5473\u8d5b\u6392\u884c";
          var n = (_pConst.SDKConfig.ttZoneId.normal, "all");
          var i = t === _pConst.SDKConfig.ttZoneId.normal ? "all" : "friend";
          tt.getImRankList({
            relationType: i,
            dataType: 0,
            rankType: n,
            suffix: e,
            rankTitle: o,
            zoneId: t,
            success: function success() {},
            fail: function fail() {}
          });
        } else tt.showModal({
          title: "\u63d0\u793a",
          content: "\u5f53\u524d\u5ba2\u6237\u7aef\u7248\u672c\u8fc7\u4f4e\uff0c\u65e0\u6cd5\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u8bf7\u5347\u7ea7\u5ba2\u6237\u7aef\u6216\u5173\u95ed\u540e\u91cd\u542f\u66f4\u65b0\u3002"
        });
      };
      t.prototype.payment = function(t, e, o, n) {
        var i = this;
        void 0 === t && (t = "1");
        void 0 === e && (e = 1);
        void 0 === o && (o = 0);
        var r = _idx.platform.getSystemData();
        var a = "android";
        r && -1 != r.system.indexOf("iOS") && (a = "iOS");
        return new Promise(function(r, s) {
          i.checkSession().then(function() {
            var i = _request["default"].ins.openId;
            var c = _time["default"].ins.serverTime;
            var l = t + i + c;
            var u = {};
            u.cp_orderno = l;
            u.creation_time = c;
            u.openid = i;
            u.money = e;
            u.gift_id = t;
            u.gift_num = 1;
            u.status = 0;
            u.is_double = o;
            u["package"] = n;
            u.phone = a;
            var p = {};
            p.openid = i;
            p.gift_id = t;
            p.gift_num = 1;
            p.money = e;
            p.is_double = o;
            p["package"] = n;
            p.phone = a;
            _request["default"].ins.getUserToken().then(function(t) {
              if (t) {
                p.token = t;
                var o = JSON.stringify(p);
                tt.requestGamePayment({
                  mode: "game",
                  env: 0,
                  currencyType: "CNY",
                  platform: a,
                  buyQuantity: e,
                  zoneId: "1",
                  customId: l,
                  extraInfo: o,
                  success: function success() {
                    u.status = 1;
                    _request["default"].ins.paymentResult(u);
                    r(1);
                  },
                  fail: function fail(t) {
                    u.status = 2;
                    var e = u.errCode = t && t.errCode || 0;
                    _request["default"].ins.paymentResult(u);
                    s("\u652f\u4ed8\u5931\u8d25: " + e);
                  },
                  complete: function complete() {}
                });
              }
            })["catch"](function() {});
          })["catch"](function(t) {
            s("\u652f\u4ed8\u5f02\u5e38: " + t);
          });
        });
      };
      t.prototype.checkSession = function() {
        var t = this;
        return new Promise(function(e, o) {
          tt.checkSession({
            success: function success() {
              e(1);
            },
            fail: function fail() {
              t.login(0).then(function() {
                e(1);
              })["catch"](function(t) {
                o(t);
              });
            }
          });
        });
      };
      t.prototype.openService = function(t) {
        tt.openCustomerServiceConversation && tt.openCustomerServiceConversation({
          type: t,
          success: function success() {},
          fail: function fail() {}
        });
      };
      return t;
    }();
    exports["default"] = _;
    cc._RF.pop();
  }, {
    c: "c",
    com: "com",
    env: "env",
    errorCode: "errorCode",
    evts: "evts",
    idx: "idx",
    pConst: "pConst",
    request: "request",
    time: "time",
    tipMgr: "tipMgr",
    uData: "uData"
  } ],
  uData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86181ZnrptJ9In2AI14myYD", "uData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _cfgMgr = require("cfgMgr");
    var _global = require("global");
    var _bagMgr = require("bagMgr");
    var _taskMgr = require("taskMgr");
    var _pInfo = require("pInfo");
    var _adC = require("adC");
    var _evts = require("evts");
    var _idx = require("idx");
    var _numberUtils = require("NumberUtils");
    var _pConst = require("pConst");
    var _request = require("request");
    var _time = require("time");
    var g = function() {
      function t() {
        this.basic = {
          name: "",
          uid: 0,
          userId: "123",
          openId: "test2",
          sessionKey: "",
          headImg: "",
          isAuth: null,
          isNew: null,
          anonymous_openid: null
        };
        this.setting = {
          effectSound: !0,
          bgmSound: !0,
          vibrate: !0,
          effectVolume: .5,
          bgmVolume: .5,
          tip: !0
        };
        this.localData = null;
        this.network = {
          networkType: "none"
        };
        this.launchOption = {
          scene: 0,
          query: {}
        };
        this.flushTimeoutKeys = {};
        this.enterAt = Date.now();
        this.loginAt = null;
      }
      Object.defineProperty(t, "ins", {
        get: function get() {
          this._ins || (this._ins = new t());
          return this._ins;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.onLogin = function(t) {
        var e;
        var o;
        var n = this;
        if (!this.loginAt) {
          var i;
          this.loadSetting();
          var r = this.getLocalData();
          if (t) {
            var a = t.puzzleLvl || 0;
            var s = (null === (e = null == t ? void 0 : t.bag) || void 0 === e ? void 0 : e.puzzle_pieces) || 0;
            var p = (null == r ? void 0 : r.puzzleLvl) || 0;
            var d = (null === (o = null == r ? void 0 : r.bag) || void 0 === o ? void 0 : o.puzzle_pieces) || 0;
            (a > p || s > d || !r.guideDone) && this.setLocalData(t);
          }
          this.loginAt = _time["default"].ins.serverTime;
          var h = this.basic;
          if (h.recordFlag = null !== (i = h.recordFlag) && void 0 !== i ? i : {}, null == this.getLocalDataByKey("register_date")) {
            var g = new Date();
            this.setLocalData({
              register_date: g.getTime()
            });
            _idx.platform.reportEvent(_idx.ERepEvt.createNewRole);
          } else _idx.platform.reportEvent(_idx.ERepEvt.login);
          this.getLocalDataByKey("login_date") || this.setLocalData({
            login_date: this.loginAt - 864e5
          });
          this.checkNewDay();
          _idx.platform.preloadVideo(_adC.VEnum[60]);
          var y = (_time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3)) % 60;
          0 != y && (y = 60 - y);
          setTimeout(function() {
            n.checkNewDay(), setInterval(function() {
              n.checkNewDay();
            }, 6e4);
          }, 1e3 * y);
          _evts["default"].plE.on(this.onOperTap.bind(this));
        }
      };
      t.prototype.onOperTap = function(t) {
        (null == t ? void 0 : t.onHide) && this.timeId && this._setLocalAndCloudData();
      };
      t.prototype.checkNewDay = function(t) {
        if (void 0 === t && (t = !0), !t || !_time["default"].ins.isSameDay) {
          _taskMgr["default"].taskReset();
          _pInfo["default"].ins.clearDailyData();
          var e = _cfgMgr["default"].serverCfg.qw_line_rules.rules.times.set.basic_times.val;
          _bagMgr["default"].ins.chgItemCount("qw_line_ticket", Number(e));
          _evts["default"].opE.emit({
            action: _evts["default"].UPD_MAIN_RED
          });
          this.loginAt = _time["default"].ins.serverTime;
          _time["default"].ins.loginT = _time["default"].ins.serverTime;
          var o = this.getLocalDataByKey("login_date");
          if (_time["default"].ins.serverTime - o >= 1728e5 && (_global["default"].twoDaysLeft = !0), 
          this.setLocalData({
            login_date: this.loginAt
          }), t && !this.basic.isNew) {
            var c = 1e3 * _numberUtils["default"].RandomInt(1, 30);
            this.timeId = setTimeout(this._setLocalAndCloudData.bind(this), c);
          }
          _evts["default"].opE.emit({
            action: _evts["default"].UPD_PANEL
          });
        }
      };
      t.prototype.loadSetting = function() {
        var t = this;
        var e = Object.keys(this.setting);
        var o = this.setting;
        this.setting = _idx.platform.getStorage("setting") || this.setting;
        e.forEach(function(e) {
          var n;
          null == t.setting[e] && t.setSetting(((n = {})[e] = o[e], n));
        });
      };
      t.prototype.setSetting = function(t, e) {
        void 0 === e && (e = !0);
        this.setting = Object.assign(Object.assign({}, this.setting), t);
        _evts["default"].usE.emit({
          userData: this,
          kind: "setting"
        });
        e && _idx.platform.setStorage("setting", this.setting);
      };
      t.prototype.getSetting = function() {
        return this.setting;
      };
      t.prototype.setLocalData = function(t, e) {
        void 0 === e && (e = 10);
        var o = this.getLocalData();
        var n = this.localData = Object.assign(Object.assign({}, o), t);
        _idx.platform.setStorage("localData", this.localData);
        n && !this.timeId && (this.timeId = setTimeout(this._setLocalAndCloudData.bind(this), 1e3 * e));
      };
      t.prototype._setLocalAndCloudData = function() {};
      t.prototype.restoreData = function(t) {
        t && (this.localData = t, _bagMgr["default"].ins.clearItem(), _idx.platform.setStorage("localData", this.localData), 
        this.checkNewDay(), this._setLocalAndCloudData(), _global["default"].isReStore = 1, 
        cc.game.restart());
      };
      t.prototype.getLocalData = function() {
        null == this.localData && (this.localData = _idx.platform.getStorage("localData") || {});
        return this.localData;
      };
      t.prototype.getLocalDataByKey = function(t) {
        return null == this.localData ? null : this.localData[t];
      };
      Object.defineProperty(t.prototype, "fakeUID", {
        get: function get() {
          return 10005 + 2 * this.basic.uid;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.setUserId = function(t) {
        this.basic.userId = t;
      };
      t.prototype.getUserId = function() {
        return this.basic.userId;
      };
      t.prototype.getUid = function() {
        return this.basic.uid;
      };
      t.prototype.setName = function(t) {
        this.basic.name = t;
      };
      t.prototype.getName = function() {
        return this.basic.name;
      };
      t.prototype.setHeadImg = function(t) {
        this.basic.headImg = t;
      };
      t.prototype.getHeadImg = function() {
        return this.basic.headImg;
      };
      t.prototype.setIsAuth = function(t) {
        this.basic.isAuth = t;
      };
      t.prototype.getIsAuth = function() {
        return this.basic.isAuth;
      };
      t.prototype.getIsNewUser = function() {
        return this.basic.isNew;
      };
      t.prototype.syncLaunchOption = function(t) {
        if (this.launchOption.query = {}, this.launchOption = Object.assign(Object.assign({}, this.launchOption), t), 
        null == this.getLocalDataByKey("register_date")) {
          var e = this.getLaunchParam("ad_type", "");
          if ("" !== e) {
            this.setLocalData({
              ad_type: e
            });
            var o = this.getLaunchParam("addict_type", "");
            "" !== o && this.setLocalData({
              addict_type: o
            });
            var n = this.getLaunchParam("clickid", "");
            "" !== n && this.setLocalData({
              clickid: n
            });
          }
        }
      };
      t.prototype.getLaunchParam = function(t, e) {
        if (null == this.launchOption) return e;
        var o = this.launchOption[t];
        return null == o && null != this.launchOption.query && null != this.launchOption.query[t] ? o = this.launchOption.query[t] : e;
      };
      t.prototype.getLaunchOption = function() {
        return this.launchOption;
      };
      t.prototype.delayFlush = function(t, e, o) {
        void 0 === o && (o = 0);
        var n = this;
        var i = this.flushTimeoutKeys[e];
        i ? 0 === o && (clearTimeout(i), this.flushTimeoutKeys[e] = null, _idx.platform.setStorage(e, t)) : this.flushTimeoutKeys[e] = setTimeout(function() {
          n.flushTimeoutKeys[e] = null;
          _idx.platform.setStorage(e, t);
        }, 1e3 * o);
      };
      t.prototype.syncLoginData = function(t) {
        void 0 === t && (t = {});
        var e = this.basic;
        e.name = t.nickname;
        e.headImg = t.avatar;
        e.uid = t.game_uid;
        e.openId = t.openid;
        e.sessionKey = t.session_key;
        e.anonymous_openid = t.anonymous_openid;
        e.isNew = t.is_new_user;
        _evts["default"].opE.emit({
          action: _evts["default"].UPD_TOP_HEADINFO
        });
        var o = !t.is_register;
        var n = null == _idx.platform.getStorage("localData");
        _pConst.SDKConfig.comQuery = "from_game_uid=" + t.game_uid + "&share_time=";
        return [ false, n ];
      };
      return t;
    }();
    exports["default"] = g;
    cc._RF.pop();
  }, {
    NumberUtils: "NumberUtils",
    adC: "adC",
    bagMgr: "bagMgr",
    cfgMgr: "cfgMgr",
    evts: "evts",
    global: "global",
    idx: "idx",
    pConst: "pConst",
    pInfo: "pInfo",
    request: "request",
    taskMgr: "taskMgr",
    time: "time"
  } ],
  ui_backReward: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dbd454L8pFK/aIzDSWtQgjM", "ui_backReward");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _cfgMgr = require("cfgMgr");
    var _item = require("item");
    var _bagMgr = require("bagMgr");
    var _panelMgr = require("panelMgr");
    var _skinMgr = require("skinMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var g = cc._decorator;
    var y = g.ccclass;
    var m = g.property;
    var v = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.rewardItem = null;
        e.rewards = null;
        e.spineNode = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {};
      e.prototype.init = function() {
        var t;
        var e;
        var o = (null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.seven_day_reward) || void 0 === e ? void 0 : e.backtrack) || {
          times: 50
        };
        var n = 0;
        for (var i in o) {
          var r = Number(o[i]);
          var a = this.rewards.children[n];
          a || (a = cc.instantiate(this.rewardItem));
          a.parent = this.rewards;
          var s = a.getComponent(_item["default"]);
          s && s.initByData(i, r);
          var p = {};
          p.itemId = i;
          p.itemNode = a;
          p.value = r;
          _bagMgr["default"].ins.addItem(i, r);
          n++;
        }
        this.loadGirl();
      };
      e.prototype.loadGirl = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            _skinMgr["default"].ins.updateRole(_pInfo["default"].ins.getUsingSkin().role, this.spineNode);
            return [ 2 ];
          });
        });
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.onBtnGet = function() {
        for (var t = this, e = [], o = 0, n = this.rewards.childrenCount; o < n; o++) {
          var i = this.rewards.children[o];
          var r = i.getComponent(_item["default"]);
          var a = {};
          a.itemId = r.key;
          a.worldPos = i.parent.convertToWorldSpaceAR(i.position);
          a.value = r.count;
          e.push(a);
        }
        _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: e,
          hideCb: function hideCb() {
            t.hideThis();
          }
        });
      };
      __decorate([ m(cc.Node) ], e.prototype, "rewardItem", void 0);
      __decorate([ m(cc.Node) ], e.prototype, "rewards", void 0);
      __decorate([ m(cc.Node) ], e.prototype, "spineNode", void 0);
      return __decorate([ y ], e);
    }(_baseUI["default"]);
    exports["default"] = v;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    baseUI: "baseUI",
    cfgMgr: "cfgMgr",
    item: "item",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    skinMgr: "skinMgr"
  } ],
  ui_challengeInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c28b4mJ0e5ASrI7YQ9qWxVY", "ui_challengeInfo");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _cfgMgr = require("cfgMgr");
    var _global = require("global");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var u = cc._decorator;
    var p = u.ccclass;
    var d = u.property;
    var h = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.lvLB = null;
        e.infoLB = null;
        e.sizeLb = null;
        e.diffLb = null;
        e.crossLb = null;
        e.costLB = null;
        e.typeSp = null;
        e.lightNode = null;
        e.tySps = [];
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        cc.tween(this.lightNode).by(3, {
          angle: -360
        }).repeatForever().start();
      };
      e.prototype.init = function(t) {
        var e = t.lvData;
        var o = t.cost;
        var n = t.crossNum;
        this.lvData = e;
        this.cost = o;
        var i = "";
        var r = "";
        var a = 5;
        switch (e.type) {
         case _pInfo.challengeType.worm:
          i = "\u9664\u866b\u6a21\u5f0f", r = "\u866b\u5b50\u90fd\u662f\u8fde\u7eed\u683c\u5b50\u7ec4\u6210\uff0c\n\u6839\u636e\u63d0\u793a\u7684\u6570\u5b57\u627e\u51fa\u866b\u5b50\u3002", 
          this.typeSp.spriteFrame = this.tySps[0], a = e.data.size;
          break;

         case _pInfo.challengeType.tree:
          i = "\u9664\u8349\u6a21\u5f0f", r = "\u70b9\u4eae\u8349\u4e1b\u56db\u5468\u7684\u4efb\u610f\u683c\u5b50\uff0c\n\u53ef\u4ee5\u53bb\u9664\u8349\u4e1b\u3002", 
          this.typeSp.spriteFrame = this.tySps[1], a = e.size;
          break;

         case _pInfo.challengeType.ice:
          i = "\u9664\u51b0\u6a21\u5f0f", r = "\u70b9\u4eae\u51b0\u5757\u5468\u56f44\u4e2a\u683c\u5b50\uff0c\n\u53ef\u4ee5\u53bb\u9664\u51b0\u5757\u3002", 
          this.typeSp.spriteFrame = this.tySps[2], a = e.size;
        }
        this.lvLB.string = i;
        this.infoLB.string = r;
        this.crossLb.string = n;
        this.sizeLb.string = a + "x" + a;
        this.diffLb.string = this.getLevelDiffStrByDiff(e.diff);
        this.costLB.string = o + "/" + _pInfo["default"].ins.getPower();
      };
      e.prototype.onBtnStart = function() {
        var t = this.cost;
        var e = Object.assign({}, this.lvData);
        _pInfo["default"].ins.addPower(-t);
        var o = e.date;
        var n = 1e4 * o.year + 100 * o.month + o.day;
        _global["default"].challengeLv = n;
        _pInfo.chgScene(_pInfo.sceneType.game, {
          gameType: _pInfo.gameType.challenge,
          challengeData: e
        });
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.getLevelDiffStrByDiff = function(t) {
        var e = _cfgMgr["default"].serverCfg.difficulty_rules.rules;
        var o = "\u5165\u95e8\u96be\u5ea6";
        var n = 1;
        for (var i in e) {
          if (o = e[i].title, n === t) break;
          n++;
        }
        return o.slice(0, -2);
      };
      __decorate([ d(cc.Label) ], e.prototype, "lvLB", void 0);
      __decorate([ d(cc.Label) ], e.prototype, "infoLB", void 0);
      __decorate([ d(cc.Label) ], e.prototype, "sizeLb", void 0);
      __decorate([ d(cc.Label) ], e.prototype, "diffLb", void 0);
      __decorate([ d(cc.Label) ], e.prototype, "crossLb", void 0);
      __decorate([ d(cc.Label) ], e.prototype, "costLB", void 0);
      __decorate([ d(cc.Sprite) ], e.prototype, "typeSp", void 0);
      __decorate([ d(cc.Node) ], e.prototype, "lightNode", void 0);
      __decorate([ d([ cc.SpriteFrame ]) ], e.prototype, "tySps", void 0);
      return __decorate([ p ], e);
    }(_baseUI["default"]);
    exports["default"] = h;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    cfgMgr: "cfgMgr",
    global: "global",
    pInfo: "pInfo"
  } ],
  ui_chapterDone: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bcc61uunFpAPIf+ZqAgsiJ/", "ui_chapterDone");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _levelMgr = require("levelMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var l = cc._decorator;
    var u = l.ccclass;
    var p = l.property;
    var d = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.light = null;
        e.pics = [];
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        t.prototype.onLoad.call(this);
        cc.tween(this.light).by(3, {
          angle: -360
        }).repeatForever().start();
      };
      e.prototype.init = function() {
        for (var t = this, e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
        _levelMgr["default"].ins.getchapterBunder().then(function() {
          for (var e = _pInfo["default"].ins.getPuzzleLvl(), o = "" + (Math.ceil(e / 54) - 1 + 100), n = function n(e) {
            _levelMgr["default"].ins.getJigsawIcon(e, o).then(function(o) {
              o && (t.pics[e - 1].spriteFrame = o);
            })["catch"](function() {
              console.error("getJigsawIconErr");
            });
          }, i = 1; i <= 6; i++) n(i);
        })["catch"](function() {
          console.error("getChapterBundleErr");
        });
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      __decorate([ p(cc.Node) ], e.prototype, "light", void 0);
      __decorate([ p([ cc.Sprite ]) ], e.prototype, "pics", void 0);
      return __decorate([ u ], e);
    }(_baseUI["default"]);
    exports["default"] = d;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    levelMgr: "levelMgr",
    pInfo: "pInfo"
  } ],
  ui_chapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "361f3jG3WREaI8xtSHb2M8k", "ui_chapter");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _mySafeArea = require("mySafeArea");
    var _chapterItem = require("chapterItem");
    var _global = require("global");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var _chaptBtn = require("chaptBtn");
    var d = cc._decorator;
    var h = d.ccclass;
    var f = d.property;
    var g = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.scrollView = null;
        e.chaptPfb = null;
        e.btnView = null;
        e.btnPre = null;
        e.bgNode = null;
        e.bookNode = null;
        e.lineNode = null;
        e.lineNode1 = null;
        e.topNode = null;
        e.closeNode = null;
        e.chapterJigsawPos = {};
        e.itemHeight = 460;
        e.swBtns = [];
        e.endChapterCount = 0;
        e.startIdx = 1;
        e.chapterItem = [];
        e.lastScrollPosition = 0;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        var t = this;
        if (this.node.height = cc.winSize.height, _global["default"].padScale) {
          this.bgNode.scale = _global["default"].padScale;
          var e = (cc.view.getVisibleSize().width - 720) / 2;
          this.closeNode.x -= e;
        }
        this.onResize();
        this.btnView.content.removeAllChildren();
        this.loadBtns();
        this.initChpaterPos().then(function() {
          return t.initData();
        })["catch"](function(t) {
          console.error("initChpaterPosErr", t);
        });
      };
      e.prototype.onResize = function() {
        this.node.height = cc.winSize.height;
        var t = _mySafeArea.getSafeAreaRect().yMin;
        var e = cc.winSize.height - 1280 - t;
        this.bookNode.height += e;
        this.lineNode.height += e;
        this.lineNode1.height += e;
        this.btnView.content.height += e;
        this.scrollView.content.height += e;
        this.btnView.node.height += e;
        this.scrollView.node.height += e;
        this.btnView.content.parent.height += e;
        this.scrollView.content.parent.height += e;
      };
      e.prototype.start = function() {
        var t = this;
        this.scheduleOnce(function() {
          t.topNode.y -= _mySafeArea.getSafeAreaRect().yMin / 2;
          t.topNode.removeComponent(cc.Widget);
        });
      };
      e.prototype.init = function() {};
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.loadBtns = function() {
        for (var t = this, e = _global["default"].chapterCount, o = Math.ceil(e / 10), n = e % 10, i = function i(e) {
          var i = cc.instantiate(r.btnPre);
          i.parent = r.btnView.content;
          i.active = !0;
          var a = i.getComponent(_chaptBtn["default"]);
          var s = 1 + 10 * e;
          var c = 10 * (e + 1);
          n && (c = s + n - 1);
          var l = s + "-" + (e === o - 1 ? c : 10 * (e + 1));
          a.setLb(l);
          a.setState(!1);
          r.swBtns.push(a);
          i.on("click", function() {
            t.btnClick(e);
          }, r);
        }, r = this, a = 0; a < o; a++) i(a);
        var s = _pInfo["default"].ins.getPuzzleLvl();
        var u = Math.ceil(s / 54);
        var d = Math.ceil(u / 10);
        this.startIdx = 1 + 10 * (d - 1);
        this.swBtns[d - 1].setState(!0);
        var h = 10;
        var f = u % 10;
        f && (h = f);
        var g = (h - 1) * this.itemHeight;
        this.scrollView.scrollToOffset(cc.v2(0, g));
        var y = 10 * d;
        this.endChapterCount = Math.min(y, e);
        var m = this.endChapterCount - this.startIdx + 1;
        this.scrollView.content.setContentSize(cc.size(560, this.itemHeight * m));
      };
      e.prototype.btnClick = function(t) {
        if (!this.swBtns[t].getState()) {
          for (var e = 0, o = this.swBtns.length; e < o; e++) this.swBtns[e].setState(!1);
          this.swBtns[t].setState(!0);
          this.startIdx = 1 + 10 * t;
          var n = 10 * (t + 1);
          this.endChapterCount = Math.min(n, _global["default"].chapterCount);
          var i = this.endChapterCount - this.startIdx + 1;
          this.scrollView.content.setContentSize(cc.size(560, this.itemHeight * i));
          this.scrollView.stopAutoScroll();
          this.scrollView.scrollToTop();
          this.initData();
        }
      };
      e.prototype.initData = function() {
        var t = this;
        this.scrollView.content.children.forEach(function(e) {
          t.chapterItem.push(e);
        });
        this.scrollView.content.removeAllChildren();
        this.loadItem(this.startIdx, 0);
      };
      e.prototype.loadItem = function(t, e) {
        if (t <= this.endChapterCount) {
          var o = this.chapterItem.shift();
          o || (o = cc.instantiate(this.chaptPfb));
          this.scrollView.content.addChild(o);
          o.name = "chapter_" + t;
          o.opacity = 0;
          o.position = cc.v3(0, -this.itemHeight * e);
          o.getComponent(_chapterItem["default"]).init(t, this.chapterJigsawPos);
          t++;
          e++;
          this.scheduleOnce(this.loadItem.bind(this, t, e), 0);
        } else {
          for (var n = this.scrollView.content, i = 0; i < n.children.length; i++) {
            var r = n.children[i];
            r.active = !0;
            r.opacity = 255;
            this.showChgAni;
          }
          this.lastScrollPosition = 0;
          this.pageScroll(!1);
          this.showChgAni || (this.showChgAni = !0);
        }
      };
      e.prototype.pageScroll = function(t) {
        void 0 === t && (t = !0);
        var e = this.scrollView.content.children;
        var o = this.scrollView.getScrollOffset().y;
        if (!(t && Math.abs(o - this.lastScrollPosition) < 1)) {
          for (var n = this.itemHeight, i = this.scrollView.content.parent.height, r = 0; r < e.length; r++) {
            var a = e[r];
            var s = a.convertToWorldSpaceAR(cc.Vec2.ZERO);
            (s = this.scrollView.content.parent.convertToNodeSpaceAR(s)).y + n < -i || s.y - n > 0 ? a.children[0].active = !1 : a.children[0].active = !0;
          }
          this.lastScrollPosition = o;
        }
      };
      e.prototype.initChpaterPos = function() {
        var t;
        var e = this;
        var o = new Promise(function(e) {
          t = e;
        });
        cc.assetManager.loadRemote(_global.OssConfig.chapterUrl + "pos.json", cc.JsonAsset, function(o, n) {
          var i = [ [ [ -40, 127 ], [ 129, 127 ], [ -88, -28 ], [ 195, -60 ], [ -224, -128 ], [ 49, -128 ] ], [ [ -195, 134 ], [ 192, 119 ], [ 144, -71 ], [ 53, 34 ], [ -40, -81 ], [ -209, -44 ] ], [ [ -133, 59 ], [ 40, 62 ], [ 210, 95 ], [ -191, -104 ], [ -28, -98 ], [ 181, -95 ] ], [ [ -167, 122 ], [ -24, 39 ], [ 136, 122 ], [ -198, -42 ], [ 35, -80 ], [ 191, -112 ] ], [ [ 20, 98 ], [ -89, -44 ], [ 22, -40 ], [ 149, -75 ], [ -193, -128 ], [ 15, -138 ] ], [ [ -80, 30 ], [ 101, 132 ], [ -216, -72 ], [ -95, -123 ], [ 32, -91 ], [ 184, -66 ] ], [ [ -90, 29 ], [ 76, 126 ], [ 79, -22 ], [ -199, -112 ], [ -51, -122 ], [ 197, -95 ] ], [ [ -117, 125 ], [ 162, 110 ], [ -217, -119 ], [ -79, -101 ], [ 57, -118 ], [ 162, -126 ] ], [ [ -129, 71 ], [ 162, 62 ], [ -2, -37 ], [ 150.5, -101.6 ], [ -9, -136.4 ], [ -177, -136 ] ], [ [ -183, -56 ], [ 22, -70 ], [ -81, -121 ], [ 188, -130 ], [ -74, 114 ], [ 73, -149 ] ], [ [ -135, 96 ], [ 14, 51 ], [ 188, 58 ], [ -169, -134 ], [ -3, -97 ], [ 187, -124 ] ], [ [ 209, -84 ], [ -205, 97 ], [ -173, -136 ], [ 172, 56 ], [ 68, -21 ], [ -118, -15 ] ], [ [ -198, -108 ], [ 32, -139 ], [ 183, -107 ], [ -159, 133 ], [ 15, -14 ], [ 180, 97 ] ], [ [ -7, -51 ], [ -35, 121 ], [ -196, 24 ], [ -159, -117 ], [ 154, -136 ], [ 149, 99 ] ], [ [ 172, -116 ], [ 13, 42 ], [ -152, 98 ], [ -145, -127 ], [ 164, 124 ], [ 31, -122 ] ], [ [ 121, -115 ], [ -5, 80 ], [ -165, -122 ], [ 202, 28 ], [ -183, 116 ], [ -173, -8.4 ] ], [ [ 156, -25 ], [ -206, -126 ], [ -21.5, 103.4 ], [ 5, -114 ], [ -92, -34 ], [ -198, 3 ] ], [ [ -112, 84 ], [ 142, 93 ], [ -189, -97 ], [ 185, -57 ], [ 53, -99 ], [ -58, -90 ] ] ];
          !o && n && n.json && Array.isArray(n.json) && e.node && i.push.apply(i, n.json);
          var r = e.chapterJigsawPos;
          var a = 1;
          i.forEach(function(t) {
            t.forEach(function(t) {
              r[9 * a] = cc.v2(t[0], t[1]), a++;
            });
          });
          t(1);
        });
        return o;
      };
      e.prototype.showLoadAni = function(t) {
        cc.tween(t).to(.5, {
          x: 0
        }, {
          easing: "backInOut"
        }).start();
      };
      e.prototype.showChangegAni = function(t) {
        cc.tween(t).to(.2, {
          opacity: 255
        }).start();
      };
      __decorate([ f(cc.ScrollView) ], e.prototype, "scrollView", void 0);
      __decorate([ f(cc.Prefab) ], e.prototype, "chaptPfb", void 0);
      __decorate([ f(cc.ScrollView) ], e.prototype, "btnView", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "btnPre", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "bgNode", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "bookNode", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "lineNode", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "lineNode1", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "topNode", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "closeNode", void 0);
      return __decorate([ h ], e);
    }(_baseUI["default"]);
    exports["default"] = g;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    chaptBtn: "chaptBtn",
    chapterItem: "chapterItem",
    global: "global",
    mySafeArea: "mySafeArea",
    pInfo: "pInfo"
  } ],
  ui_contentUs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "738e8CNRgJIdYoGyBMV/m6N", "ui_contentUs");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _idx = require("idx");
    var _request = require("request");
    var _lang = require("lang");
    var _tipMgr = require("tipMgr");
    var _baseUI = require("baseUI");
    var p = cc._decorator;
    var d = p.ccclass;
    var h = p.property;
    var f = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.ediBox = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {};
      e.prototype.init = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.editEnd = function() {
        var t = this;
        _idx.platform.onKeyboardComplete && (this.inCorrect = !0, _idx.platform.onKeyboardComplete(function(e) {
          t.ediBox && (t.ediBox.string = e.value);
          t.inCorrect = !1;
        }));
      };
      e.prototype.editChange = function(t, e) {
        e.string = t;
      };
      e.prototype.feedMsg = function() {
        var t = this;
        this.inCorrect || (this.ediBox.string ? _request["default"].ins.userFeedBack(this.ediBox.string).then(function(e) {
          var o = e && e.msg || _lang.lang[10007];
          _tipMgr["default"].ins.showTip(o, !0);
          t.ediBox.string = "";
        })["catch"](function(t) {
          console.error(t);
        }) : _tipMgr["default"].ins.showTip(_lang.lang[10008]));
      };
      __decorate([ h(cc.EditBox) ], e.prototype, "ediBox", void 0);
      return __decorate([ d ], e);
    }(_baseUI["default"]);
    exports["default"] = f;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    idx: "idx",
    lang: "lang",
    request: "request",
    tipMgr: "tipMgr"
  } ],
  ui_deskReward: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ad3bzV0+JPOLqI0/63veUG", "ui_deskReward");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _idx = require("idx");
    var _pConst = require("pConst");
    var _res = require("res");
    var _cfgMgr = require("cfgMgr");
    var _panelMgr = require("panelMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var f = cc._decorator;
    var g = f.ccclass;
    var y = f.property;
    var m = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.iconSpr = null;
        e.deskSpr = null;
        e.numLb = null;
        e.infoLb = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        _evts["default"].opE.on(this.onOperTap.bind(this));
      };
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].ADD_DESKTOP:
          this.addDesktopCb(t.data);
        }
      };
      e.prototype.init = function() {
        var t;
        var e;
        var o = this;
        _res["default"].ins.l("pages/page_level/zhuxian_07_3", cc.SpriteFrame, "resSps").then(function(t) {
          o.node && o.node.isValid && (o.deskSpr.spriteFrame = t);
        })["catch"](function() {
          console.error("getResSpErr");
        });
        var n = (null === (e = null === (t = _cfgMgr["default"].serverCfg.add_desktop) || void 0 === t ? void 0 : t.rules) || void 0 === e ? void 0 : e.times) || 50;
        this.numLb.string = "+" + n;
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.onBtnAdd = function() {
        switch (_idx.platform.string()) {
         case _pConst.PFCode.Bytedance:
          _idx.platform.addShortcut();
        }
      };
      e.prototype.addDesktopCb = function(t) {
        var e;
        var o;
        var n = _pInfo["default"].ins.getAddDesk();
        if (t && !n) {
          _pInfo["default"].ins.setAddDesk(!0);
          var i = (null === (o = null === (e = _cfgMgr["default"].serverCfg.add_desktop) || void 0 === e ? void 0 : e.rules) || void 0 === o ? void 0 : o.times) || 50;
          _pInfo["default"].ins.addPower(i);
          var r = this.numLb.node;
          var a = r.parent.convertToWorldSpaceAR(r.position);
          _panelMgr["default"].ins.open("ui/ui_flyAni", {
            itemDatas: [ {
              itemId: "times",
              worldPos: a,
              value: i
            } ]
          });
          this.hideThis();
        }
      };
      e.prototype.onDestroy = function() {
        cc.assetManager.releaseAsset(this.iconSpr.spriteFrame);
      };
      __decorate([ y(cc.Sprite) ], e.prototype, "iconSpr", void 0);
      __decorate([ y(cc.Sprite) ], e.prototype, "deskSpr", void 0);
      __decorate([ y(cc.Label) ], e.prototype, "numLb", void 0);
      __decorate([ y(cc.Label) ], e.prototype, "infoLb", void 0);
      return __decorate([ g ], e);
    }(_baseUI["default"]);
    exports["default"] = m;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    cfgMgr: "cfgMgr",
    evts: "evts",
    idx: "idx",
    pConst: "pConst",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    res: "res"
  } ],
  ui_festival: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd8b2rRJL5Bb4++/HXP0pgn", "ui_festival");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _idx = require("idx");
    var _mySafeArea = require("mySafeArea");
    var _res = require("res");
    var _time = require("time");
    var _global = require("global");
    var _bagMgr = require("bagMgr");
    var _festivalMgr = require("festivalMgr");
    var _newJigMgr = require("newJigMgr");
    var _panelMgr = require("panelMgr");
    var _tipMgr = require("tipMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var _ = cc._decorator;
    var b = _.ccclass;
    var w = _.property;
    var S = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.proLb = null;
        e.taskLb = null;
        e.timeLb = null;
        e.imgNode = null;
        e.tianNode = null;
        e.dayTimeLb = null;
        e.costLb = null;
        e.startBtn = null;
        e.topNode = null;
        e.upEggNode = null;
        e.eggNode = null;
        e.spineNode = null;
        e.jigsawNum = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        this.node.height = cc.winSize.height;
        this.checkEndTime();
      };
      e.prototype.start = function() {
        var t = this;
        this.initPanel();
        this.upNewJigRed();
        this.scheduleOnce(function() {
          t.adapter();
        });
      };
      e.prototype.adapter = function() {
        var t = _mySafeArea.getSafeAreaRect().yMin;
        this.topNode.y -= t;
      };
      e.prototype.upNewJigRed = function() {
        var t = _newJigMgr["default"].ins.getUnPlacedNum();
        if (t > 0) {
          var e = t > 99 ? "99+" : t + "";
          this.jigsawNum.node.parent.active = !0;
          this.jigsawNum.string = e + "";
          this.jigsawNum.node.x = _global["default"].getCharXOffset(this.jigsawNum.string);
        } else this.jigsawNum.node.parent.active = !1;
      };
      e.prototype.initPanel = function() {
        this.initTask();
        this.initImg();
        this.initBtn();
        this.initReward();
      };
      e.prototype.initTask = function() {
        var t = _festivalMgr["default"].ins;
        var e = t.getNowTaskData();
        var o = e.nums;
        var n = t.getNowTaskPro();
        this.taskLb.string = e.title.format(o);
        this.schedule(this.showTime, 1);
        this.showTime();
        t.isTaskLocked() ? (this.proLb.string = "", this.upEggNode.active = !1) : (this.proLb.string = n + "/" + o, 
        this.upEggNode.active = !0);
      };
      e.prototype.initImg = function() {
        for (var t = _festivalMgr["default"].ins.getFesPuzzleLv() - 1, e = this.imgNode.children, o = 0, n = e.length; o < n; o++) e[o].active = o >= t;
        if (_festivalMgr["default"].ins.isPuzzleMax()) this.spineNode.active = !1; else {
          this.spineNode.active = !0;
          var i = this.imgNode.children[t];
          this.spineNode.position = cc.v3(i.x + this.imgNode.x + 54, i.y + this.imgNode.y - 55);
        }
      };
      e.prototype.initBtn = function() {
        var t = _festivalMgr["default"].ins.getFesLevelCost();
        this.costLb.string = "-" + t;
        this.startBtn.active = !_festivalMgr["default"].ins.isPuzzleMax();
      };
      e.prototype.initReward = function() {
        var t = this.upEggNode;
        if (_festivalMgr["default"].ins.isTaskLocked()) return this.checkShowFinger(!1), 
        this.eggNode.angle = 0, cc.Tween.stopAllByTarget(this.eggNode), void (t.active = !1);
        t.active = !0;
        var e = _festivalMgr["default"].ins;
        var o = e.getNowTaskData().nums;
        e.getNowTaskPro() >= o ? (this.checkShowFinger(!0), cc.Tween.stopAllByTarget(this.eggNode), 
        cc.tween(this.eggNode).sequence(cc.tween().to(.5, {
          angle: 10
        }), cc.tween().to(1, {
          angle: 0
        }, {
          easing: "elasticOut"
        }).delay(.5)).repeatForever().start()) : (this.checkShowFinger(!1), this.eggNode.angle = 0, 
        cc.Tween.stopAllByTarget(this.eggNode));
      };
      e.prototype.checkShowFinger = function(t) {
        var e = this;
        t ? this._fingerNode ? this._fingerNode.active = !0 : _res["default"].ins.lPre("prefab/finger").then(function(t) {
          e._fingerNode = cc.instantiate(t);
          e.eggNode.parent.addChild(e._fingerNode);
          var o = cc.v3(0, 105);
          e._fingerNode.setPosition(o);
          e._fingerNode.active = !0;
        })["catch"](function() {}) : this._fingerNode && this._fingerNode.active && (this._fingerNode.active = !1);
      };
      e.prototype.showTime = function() {
        var t = _time["default"].ins.nextZeroTime / 1e3;
        if (t <= 0) return this.initTask(), void this.unschedule(this.showTime);
        this.dayTimeLb.string = _time["default"].getFormatHMS(t);
      };
      e.prototype.checkEndTime = function() {
        var t = _festivalMgr["default"].ins.fesEndTime - _time["default"].ins.serverTime;
        if (t > 0) {
          var e = Math.floor(t / 86400);
          if (e <= 0) this.tianNode.active = !1, this.schedule(this.showEndTime, 1), this.showEndTime(); else {
            var o = this.timeLb.string = e + "";
            this.tianNode.active = !0;
            1 == o.length && (this.tianNode.x = 112);
          }
        } else this.timeLb.string = "", this.tianNode.active = !1;
      };
      e.prototype.showEndTime = function() {
        var t = _festivalMgr["default"].ins.fesEndTime - _time["default"].ins.serverTime;
        if (t <= 0) return this.initTask(), this.timeLb.string = "\u5df2\u7ed3\u675f", void this.unschedule(this.showTime);
        this.timeLb.string = _time["default"].getFormatHMS(t);
      };
      e.prototype.hideThis = function() {
        _evts["default"].opE.emit({
          action: _evts["default"].UPD_FES_RED
        });
        this.hide();
      };
      e.prototype.onBtnGet = function() {
        if (_festivalMgr["default"].ins.isTaskLocked()) _tipMgr["default"].ins.showTip("\u4eca\u65e5\u4efb\u52a1\u5df2\u5b8c\u6210"); else {
          var t = _festivalMgr["default"].ins;
          var e = t.getFesPro();
          var o = t.getNowTaskData();
          var n = o.nums;
          var i = t.getNowTaskPro();
          var r = o.val;
          var a = [];
          for (var c in r) {
            var l = r[c];
            var u = this.imgNode.children[e];
            var p = u.parent.convertToWorldSpaceAR(u.position);
            var f = {};
            f.itemId = c;
            f.worldPos = p;
            f.value = Number(l);
            a.push(f);
          }
          if (i >= n) {
            for (var c in r) l = r[c], _bagMgr["default"].ins.addItem(c, Number(l));
            _panelMgr["default"].ins.open("ui/ui_flyAni", {
              itemDatas: a
            });
            var m = Number(t.getFesPro());
            _idx.platform.reportEvent(_idx.ERepEvt.fesTaskFinish, {
              id: m
            });
            _festivalMgr["default"].ins.finishFesTask();
            this.initPanel();
          } else _panelMgr["default"].ins.open("ui/ui_preReward", {
            itemDatas: a
          });
        }
      };
      e.prototype.onBtnStart = function() {
        var t = _festivalMgr["default"].ins.getFesLevelCost();
        _pInfo["default"].ins.getPower() < t ? _panelMgr["default"].ins.open("ui/ui_getRes", {
          itemId: "times"
        }) : _festivalMgr["default"].ins.isPuzzleLocked() ? _tipMgr["default"].ins.showTip("\u660e\u5929\u5f00\u542f") : (_festivalMgr["default"].ins.updPro(_festivalMgr.fesTaskKey.costPower, t), 
        _pInfo["default"].ins.addPower(-t), _pInfo.chgScene(_pInfo.sceneType.game, {
          gameType: _pInfo.gameType.festival
        }));
      };
      e.prototype.onBtnJig = function() {
        this.hideThis();
        _evts["default"].opE.emit({
          action: _evts["default"].MAINJUMP,
          data: 0,
          param: "festival"
        });
      };
      e.prototype.onBtnGo = function() {
        var t = _festivalMgr["default"].ins.getNowTaskData();
        switch (this.hideThis(), t.get_by) {
         case _festivalMgr.fesTaskKey.raceScore:
         case _festivalMgr.fesTaskKey.raceTimes:
          _evts["default"].opE.emit({
            action: _evts["default"].MAINJUMP,
            data: 4
          });
          break;

         case _festivalMgr.fesTaskKey.costPower:
         case _festivalMgr.fesTaskKey.throughMain:
          _global["default"].levelDone ? _panelMgr["default"].ins.open("ui/ui_selectMode", null) : _panelMgr["default"].ins.open("ui/ui_lvInfo", null);
          break;

         case _festivalMgr.fesTaskKey.finishPuzzle:
          _evts["default"].opE.emit({
            action: _evts["default"].MAINJUMP,
            data: 0
          });
        }
      };
      __decorate([ w(cc.Label) ], e.prototype, "proLb", void 0);
      __decorate([ w(cc.Label) ], e.prototype, "taskLb", void 0);
      __decorate([ w(cc.Label) ], e.prototype, "timeLb", void 0);
      __decorate([ w(cc.Node) ], e.prototype, "imgNode", void 0);
      __decorate([ w(cc.Node) ], e.prototype, "tianNode", void 0);
      __decorate([ w(cc.Label) ], e.prototype, "dayTimeLb", void 0);
      __decorate([ w(cc.Label) ], e.prototype, "costLb", void 0);
      __decorate([ w(cc.Node) ], e.prototype, "startBtn", void 0);
      __decorate([ w(cc.Node) ], e.prototype, "topNode", void 0);
      __decorate([ w(cc.Node) ], e.prototype, "upEggNode", void 0);
      __decorate([ w(cc.Node) ], e.prototype, "eggNode", void 0);
      __decorate([ w(cc.Node) ], e.prototype, "spineNode", void 0);
      __decorate([ w(cc.Label) ], e.prototype, "jigsawNum", void 0);
      return __decorate([ b ], e);
    }(_baseUI["default"]);
    exports["default"] = S;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    baseUI: "baseUI",
    evts: "evts",
    festivalMgr: "festivalMgr",
    global: "global",
    idx: "idx",
    mySafeArea: "mySafeArea",
    newJigMgr: "newJigMgr",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    res: "res",
    time: "time",
    tipMgr: "tipMgr"
  } ],
  ui_flyAni: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32b780K1TRFS49kf6zFOjY+", "ui_flyAni");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _mySafeArea = require("mySafeArea");
    var _res = require("res");
    var _vb = require("vb");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var p = cc._decorator;
    var d = p.ccclass;
    var h = p.property;
    var f = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.aniParent = null;
        e.flyPre = null;
        e.coinNode = null;
        e.coinLb = null;
        e.posArrsX = [ [ 0 ], [ 0 ], [ -75, 75 ], [ -150, 0, 150 ], [ -225, -75, 75, 225 ], [ -300, -150, 0, 150, 300 ], [ -150, 0, 150, -150, 0, 150 ], [ -150, 0, 150, -225, -75, 75, 225 ], [ -225, -75, 75, 225, -225, -75, 75, 225 ], [ -150, 0, 150, -150, 0, 150, -150, 0, 150 ], [ -150, 0, 150, -225, -75, 75, 225, -150, 0, 150 ] ];
        e.posArrsY = [ [ 0 ], [ 0 ], [ 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 90, 90, 90, -90, -90, -90 ], [ 90, 90, 90, -90, -90, -90, -90 ], [ 90, 90, 90, 90, -90, -90, -90, -90 ], [ 180, 180, 180, 0, 0, 0, -180, -180, -180 ], [ 180, 180, 180, 0, 0, 0, 0, -180, -180, -180 ] ];
        e.nodesArr = [];
        e.itemDatas = null;
        e.hideCb = null;
        e.isShowCoin = !1;
        e.isAni = !1;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t) {
        var e = this;
        var o = t.itemDatas;
        var n = t.hideCb;
        var i = t.showCoin;
        o && o.length || this.hide();
        o.length > 10 && (o.length = 10);
        this.hideCb = n;
        this.itemDatas = o;
        var r = this.aniParent;
        this.coinLb.string = i + "";
        this.coinNode.active = !1;
        this.coinNode.y = cc.winSize.height / 2 - 60 - _mySafeArea.getSafeAreaRect().yMin;
        for (var u = function u(t, n) {
          var a = o[t];
          r.convertToNodeSpaceAR(a.worldPos, a.worldPos);
          var u = cc.instantiate(p.flyPre);
          u.getChildByName("lbl").getComponent(cc.Label).string = "x" + a.value;
          u.active = !0;
          u.parent = r;
          u.position = a.worldPos;
          _res["default"].ins.getBundleByString("resSps").then(function(t) {
            t.load("item/" + a.itemId, cc.SpriteFrame, function(t, o) {
              !t && e.node && u && u.isValid && (u.getChildByName("spr").getComponent(cc.Sprite).spriteFrame = o);
            });
          })["catch"](function(t) {
            console.error("RTool.ins.getBundleByString('resSps')", t);
          });
          !i && 0 != i || "coin" != a.itemId || (p.coinNode.active = !0);
          p.nodesArr.push(u);
          var d = p.posArrsX[n];
          var h = p.posArrsY[n];
          var f = cc.v2(d[t], h[t]);
          var g = cc.v2((d[t] + a.worldPos.x) / 2, (Math.abs(a.worldPos.y) + 200) * a.worldPos.y / a.worldPos.y);
          var y = cc.v3(0, -cc.winSize.height / 2);
          var m = cc.v2(d[t] / 2, 500);
          switch (a.itemId) {
           case "coin":
            y = cc.v3(-72, cc.winSize.height / 2), m = cc.v2(d[t] - 200, -500);
            break;

           case "times":
            y = cc.v3(174, cc.winSize.height / 2), m = cc.v2(d[t] + 200, -500);
          }
          cc.tween(u).delay(.2 * t).bezierTo(.35, a.worldPos, g, f, cc.easeInOut(1.2)).to(.04, {
            scale: .9
          }).to(.066, {
            scale: 1.1
          }).to(.12, {
            scale: .95
          }).to(.053, {
            scale: 1
          }).call(function() {
            t == n - 1 && (e.isAni = !0);
          }).delay(.2).bezierTo(.5, f, m, y, cc.easeInOut(.8)).call(function() {
            _vb["default"].p(_vb.VEnum3.SHORT);
            "coin" == a.itemId && (e.coinLb.string = _pInfo["default"].ins.getCoin() + "");
            u.active = !1;
            t == n - 1 && (e.hideCb && e.hideCb(), e.hide());
          }).start();
        }, p = this, d = 0, h = o.length; d < h; d++) u(d, h);
      };
      e.prototype.skipAni = function() {
        var t = this;
        if (!this.isAni) {
          this.isAni = !0;
          for (var e = this.itemDatas, o = function o(_o, i) {
            var r = e[_o];
            var a = n.nodesArr[_o];
            cc.Tween.stopAllByTarget(a);
            var s = n.posArrsX[i];
            var u = n.posArrsY[i];
            var p = cc.v2(s[_o], u[_o]);
            a.position = p;
            var d = cc.v3(0, -cc.winSize.height / 2);
            var h = cc.v2(s[_o] / 2, 500);
            switch (r.itemId) {
             case "coin":
              d = cc.v3(-72, cc.winSize.height / 2), h = cc.v2(s[_o] - 200, -500);
              break;

             case "times":
              d = cc.v3(174, cc.winSize.height / 2), h = cc.v2(s[_o] + 200, -500);
            }
            n.scheduleOnce(function() {
              cc.tween(a).bezierTo(.3, p, h, d, cc.easeInOut(.8)).call(function() {
                _vb["default"].p(_vb.VEnum3.SHORT);
                "coin" == r.itemId && (t.coinLb.string = _pInfo["default"].ins.getCoin() + "");
                a.active = !1;
                _o == i - 1 && (t.hideCb && t.hideCb(), t.hide());
              }).start();
            }, .1 * _o);
          }, n = this, i = 0, r = e.length; i < r; i++) o(i, r);
        }
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      __decorate([ h(cc.Node) ], e.prototype, "aniParent", void 0);
      __decorate([ h(cc.Node) ], e.prototype, "flyPre", void 0);
      __decorate([ h(cc.Node) ], e.prototype, "coinNode", void 0);
      __decorate([ h(cc.Label) ], e.prototype, "coinLb", void 0);
      return __decorate([ d ], e);
    }(_baseUI["default"]);
    exports["default"] = f;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    mySafeArea: "mySafeArea",
    pInfo: "pInfo",
    res: "res",
    vb: "vb"
  } ],
  ui_gamesetlattice: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26dfbJvCClAmpxj5mN5QzJI", "ui_gamesetlattice");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _idx = require("idx");
    var _baseUI = require("baseUI");
    var c = cc._decorator;
    var l = c.ccclass;
    var u = (c.property, function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }
      __extends(e, t);
      e.prototype.init = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      };
      e.prototype.onBtnAdd = function() {
        var t;
        null === (t = _idx.platform.addGamesetlattice) || void 0 === t || t.call(_idx.platform);
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      return __decorate([ l ], e);
    }(_baseUI["default"]));
    exports["default"] = u;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    idx: "idx"
  } ],
  ui_getHeart: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d77caujPdlLWI+2MbwefgBC", "ui_getHeart");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _idx = require("idx");
    var _cfgMgr = require("cfgMgr");
    var _lang = require("lang");
    var _panelMgr = require("panelMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var d = cc._decorator;
    var h = d.ccclass;
    var f = d.property;
    var g = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.curConsLbls = null;
        e.restLifeLbls = null;
        e.needGoldLbl = null;
        e.normalNode = null;
        e.adNode = null;
        e.needGold = 300;
        e.eventFunc = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        t.prototype.onLoad.call(this);
        var e = this.needGold;
        try {
          e = this.needGold = _cfgMgr["default"].serverCfg.qw_line_rules.rules.relive.set.coin.val || 300;
        } catch (o) {}
        this.needGoldLbl.string = e + "";
      };
      e.prototype.init = function(t) {
        var e = t.time;
        var o = t.cb;
        var n = t.closeCb;
        var i = t.gType;
        (this.normalNode.active = i != _pInfo.gameType.race && i != _pInfo.gameType.challenge) || (this.restLifeLbls.node.y = 30);
        this.curConsLbls.string = "\u5f53\u524d\u8fde\u80dc\uff1a" + _pInfo["default"].ins.getConsWinTimes();
        e < 0 ? this.restLifeLbls.node.active = !1 : this.restLifeLbls.string = "\u5269\u4f59\u590d\u6d3b\u6b21\u6570\uff1a" + e;
        this.getCb = o;
        this.closeCb = n;
        this.gType = i;
        this.initAdDotEvent(i);
      };
      e.prototype.initAdDotEvent = function(t) {
        switch (t) {
         case _pInfo.gameType.challenge:
          this.adNode.adDotData = "\u6bcf\u65e5\u6311\u6218-\u590d\u6d3b";
          break;

         case _pInfo.gameType.normal:
          this.adNode.adDotData = "\u4e3b\u7ebf-\u590d\u6d3b";
          break;

         case _pInfo.gameType.practice:
          this.adNode.adDotData = "\u7ec3\u4e60\u6a21\u5f0f-\u590d\u6d3b";
          break;

         case _pInfo.gameType.race:
          this.adNode.adDotData = "\u8da3\u5473\u8d5b-\u590d\u6d3b";
        }
      };
      e.prototype.onGet = function() {
        var t = _pInfo["default"].ins;
        t.getCoin() < this.needGold ? _panelMgr["default"].ins.open("ui/ui_getRes", {
          itemId: "coin",
          gType: this.gType,
          useTo: _lang.getCoinFor.Rebirth
        }) : (t.addCoin(-this.needGold), this.hideThis(), this.getCb(), this.eventDot("\u4f7f\u7528\u5143\u5b9d"));
      };
      e.prototype.onAdGet = function() {
        this.hideThis();
        this.getCb();
        this.eventDot("\u770b\u5e7f\u544a");
      };
      e.prototype.eventDot = function(t) {
        var e = "\u4f7f\u7528\u5143\u5b9d" == t;
        this.gType == _pInfo.gameType.normal ? (e || !_pInfo["default"].ins.isMaxAdCount()) && _idx.platform.reportEvent(_idx.ERepEvt.dungeonReview, {
          way: t
        }) : this.gType == _pInfo.gameType.race && (e || !_pInfo["default"].ins.isMaxAdCount()) && _idx.platform.reportEvent(_idx.ERepEvt.raceReview, {
          way: t
        });
      };
      e.prototype.onClose = function() {
        this.hideThis();
        this.closeCb();
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      __decorate([ f(cc.Label) ], e.prototype, "curConsLbls", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "restLifeLbls", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "needGoldLbl", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "normalNode", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "adNode", void 0);
      return __decorate([ h ], e);
    }(_baseUI["default"]);
    exports["default"] = g;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    cfgMgr: "cfgMgr",
    idx: "idx",
    lang: "lang",
    pInfo: "pInfo",
    panelMgr: "panelMgr"
  } ],
  ui_getItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5238cXPXJEF72dKgiQwbZ5", "ui_getItem");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _idx = require("idx");
    var _res = require("res");
    var _cfgMgr = require("cfgMgr");
    var _lang = require("lang");
    var _bagMgr = require("bagMgr");
    var _panelMgr = require("panelMgr");
    var _tipMgr = require("tipMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var g = cc._decorator;
    var y = g.ccclass;
    var m = g.property;
    var v = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.typeSps = [];
        e.getBtnNode = null;
        e.adGetBtn = null;
        e.needGoldLbl = null;
        e.getNumLbl = null;
        e.getNum2Lbl = null;
        e.tipLbl = null;
        e.adNormal = null;
        e.adGray = null;
        e.nowGold = null;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t) {
        var e = this;
        var o = t.itemId;
        var n = t.cb;
        var i = t.closeCb;
        var r = t.gType;
        this.gType = r;
        this.itemId = o;
        this.getCb = n;
        this.closeCb = i;
        var a = _cfgMgr["default"].serverCfg;
        var l = this.data = {};
        var u = "\u9053\u5177";
        var p = "";
        this.tipLbl.node.active = !1;
        this.adNormal.active = !0;
        this.adGray.active = !1;
        var d = a.props.set;
        switch (this.nowGold.string = _pInfo["default"].ins.getCoin() + "", o) {
         case "qw_line_ticket":
          var f = _pInfo["default"].ins.getTicketAdTimes(), g = a.qw_line_rules.rules.times.set.ad_times, y = g.max_val;
          this.ticketIsMax = f >= y, l.normalGet = l.adGet = g.val, u = "\u6311\u6218\u5238", 
          this.tipLbl.node.active = !0, this.tipLbl.string = "\u4eca\u65e5\u5269\u4f59" + (y - f) + "\u6b21", 
          this.ticketIsMax ? (this.adGetBtn.enabled = !1, this.adNormal.active = !1, this.adGray.active = !0) : (this.adGetBtn.enabled = !0, 
          this.adNormal.active = !0, this.adGray.active = !1), p = "\u8d2d\u4e70" + u;
          break;

         case "notice":
         case "random_notice":
         case "full_row_col":
          for (var m = 0, v = d; m < v.length; m++) {
            var _ = v[m];
            if (_.key == o) {
              l.needGold = _.price;
              l.normalGet = l.adGet = _.ad_to_nums;
              u = _.title;
              break;
            }
          }
          p = "\u8d2d\u4e70" + u;
          break;

         case "puzzle_pieces":
          for (var b = 5, w = 0, S = d; w < S.length; w++) if ((k = S[w]).key == o) {
            l.needGold = k.price;
            l.normalGet = l.adGet = k.ad_to_nums;
            u = k.title;
            k.daily_limit_times && (b = Number(k.daily_limit_times) || 5);
            break;
          }
          var T = _pInfo["default"].ins.getJigsawAdTimes();
          this.ticketIsMax = T >= b, this.tipLbl.node.active = !0, this.tipLbl.string = "\u4eca\u65e5\u5269\u4f59" + (b - T) + "\u6b21", 
          this.ticketIsMax ? (this.adGetBtn.enabled = !1, this.adNormal.active = !1, this.adGray.active = !0) : (this.adGetBtn.enabled = !0, 
          this.adNormal.active = !0, this.adGray.active = !1), p = "\u62fc\u56fe\u788e\u7247\u7528\u4e8e\u62fc\u56fe\u73a9\u6cd5\uff0c\n\u53ef\u4ee5\u901a\u8fc7\u6bcf\u65e5\u4efb\u52a1\u53ca\u4e3b\u7ebf\u5173\u5361\u83b7\u5f97\u3002";
          break;

         case "newYear_pieces":
          for (var I = 5, D = 0, P = d; D < P.length; D++) {
            var k;
            if ((k = P[D]).key == o) {
              l.needGold = k.price;
              l.normalGet = l.adGet = k.ad_to_nums;
              u = k.title;
              k.daily_limit_times && (I = Number(k.daily_limit_times) || 5);
              break;
            }
          }
          l.needGold = 0, l.normalGet = l.adGet = 5, u = "\u65b0\u6625\u62fc\u56fe\u788e\u7247";
          var R = _pInfo["default"].ins.getNewJigAdTimes();
          this.ticketIsMax = R >= I, this.tipLbl.node.active = !0, this.tipLbl.string = "\u4eca\u65e5\u5269\u4f59" + (I - R) + "\u6b21", 
          this.ticketIsMax ? (this.adGetBtn.enabled = !1, this.adNormal.active = !1, this.adGray.active = !0) : (this.adGetBtn.enabled = !0, 
          this.adNormal.active = !0, this.adGray.active = !1), p = "\u65b0\u6625\u6d3b\u52a8\u83b7\u53d6";
          break;

         case "puzzle_notice":
          for (var N = 0, C = d; N < C.length; N++) {
            var O = C[N];
            if (O.key == o) {
              l.needGold = O.price;
              l.normalGet = l.adGet = O.ad_to_nums;
              u = O.title;
              break;
            }
          }
          p = "\u4f7f\u7528\u63d0\u793a\u53ef\u4ee5\u968f\u673a\u62fc\u597d\u4e00\u4e2a\u788e\u7247\u3002";
          break;

         case "puzzle_background":
          for (var M = 0, L = d; M < L.length; M++) {
            var A = L[M];
            if (A.key == o) {
              l.needGold = A.price;
              l.normalGet = l.adGet = A.ad_to_nums;
              u = A.title;
              break;
            }
          }
          p = "\u5f00\u542f\u80cc\u666f\u53ef\u83b7\u5f97\u4e00\u5b9a\u65f6\u95f4\u7684\u80cc\u666f\u663e\u793a\u3002";
        }
        l.needGold ? this.needGoldLbl.string = l.needGold + "" : (this.getBtnNode.active = !1, 
        this.adGetBtn.node.x = 0);
        this.getNumLbl.string = "x" + l.normalGet;
        this.getNum2Lbl.string = p;
        _res["default"].ins.getBundleByString("resSps").then(function(t) {
          t.load("item/" + o, cc.SpriteFrame, function(t, o) {
            !t && e.node && e.node.isValid && e.typeSps.forEach(function(t) {
              t.spriteFrame = o;
            });
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
        this.initAdDotEvent();
      };
      e.prototype.initAdDotEvent = function() {
        var t = "\u62fc\u56fe";
        _lang.gemeTypeKey[this.gType] && (t = _lang.gemeTypeKey[this.gType]);
        this.adGetBtn.node.adDotData = t + "-\u9053\u5177-" + _lang.reportKey[this.itemId];
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.hide = function() {
        var e;
        null === (e = this.closeCb) || void 0 === e || e.call(this);
        return t.prototype.hide.call(this);
      };
      e.prototype.onGet = function() {
        _pInfo["default"].ins.getCoin() < this.data.needGold ? _panelMgr["default"].ins.open("ui/ui_getRes", {
          itemId: "coin",
          gType: this.gType,
          useTo: _lang.getCoinFor.Item
        }) : (this.getItem(!1), this.buyEventDot("\u4f7f\u7528\u5143\u5b9d"));
      };
      e.prototype.onAdGet = function() {
        this.ticketIsMax ? _tipMgr["default"].ins.showTip("\u4eca\u65e5\u5df2\u8fbe\u4e0a\u9650") : (this.getItem(!0), 
        this.buyEventDot("\u770b\u5e7f\u544a"));
      };
      e.prototype.buyEventDot = function(t) {
        var e = "\u62fc\u56fe";
        _lang.gemeTypeKey[this.gType] && (e = _lang.gemeTypeKey[this.gType]);
        !_pInfo["default"].ins.isMaxAdCount() && _idx.platform.reportEvent(_idx.ERepEvt.buyItem, {
          way: t,
          gameType: e,
          itemId: _lang.reportKey[this.itemId]
        });
      };
      e.prototype.getItem = function(t) {
        var e = this;
        var o = this.data;
        var n = t ? o.normalGet : o.adGet;
        var i = this.typeSps[0].node;
        var r = i.parent.convertToWorldSpaceAR(i.position);
        _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: [ {
            itemId: this.itemId,
            worldPos: r,
            value: n
          } ],
          hideCb: function hideCb() {
            var o;
            switch (e.itemId) {
             case "qw_line_ticket":
              _pInfo["default"].ins.addTicketAdTimes(), _bagMgr["default"].ins.addItem(e.itemId, n);
              break;

             case "notice":
             case "random_notice":
             case "full_row_col":
              _bagMgr["default"].ins.addItem(e.itemId, n), t || _pInfo["default"].ins.addCoin(-e.data.needGold);
              break;

             case "puzzle_pieces":
              _pInfo["default"].ins.addJigsawAdTimes(), _bagMgr["default"].ins.addItem(e.itemId, n);
              break;

             case "newYear_pieces":
              _pInfo["default"].ins.addNewJigAdTimes(), _bagMgr["default"].ins.addItem(e.itemId, n);
              break;

             case "puzzle_notice":
             case "puzzle_background":
              _bagMgr["default"].ins.addItem(e.itemId, n);
            }
            null === (o = e.getCb) || void 0 === o || o.call(e);
            e.hideThis();
          }
        });
      };
      __decorate([ m([ cc.Sprite ]) ], e.prototype, "typeSps", void 0);
      __decorate([ m(cc.Node) ], e.prototype, "getBtnNode", void 0);
      __decorate([ m(cc.Button) ], e.prototype, "adGetBtn", void 0);
      __decorate([ m(cc.Label) ], e.prototype, "needGoldLbl", void 0);
      __decorate([ m(cc.Label) ], e.prototype, "getNumLbl", void 0);
      __decorate([ m(cc.Label) ], e.prototype, "getNum2Lbl", void 0);
      __decorate([ m(cc.Label) ], e.prototype, "tipLbl", void 0);
      __decorate([ m(cc.Node) ], e.prototype, "adNormal", void 0);
      __decorate([ m(cc.Node) ], e.prototype, "adGray", void 0);
      __decorate([ m(cc.Label) ], e.prototype, "nowGold", void 0);
      return __decorate([ y ], e);
    }(_baseUI["default"]);
    exports["default"] = v;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    baseUI: "baseUI",
    cfgMgr: "cfgMgr",
    idx: "idx",
    lang: "lang",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    res: "res",
    tipMgr: "tipMgr"
  } ],
  ui_getRes: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5dcedloo3JKQKfpXRHkTJiZ", "ui_getRes");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _idx = require("idx");
    var _res = require("res");
    var _uData = require("uData");
    var _cfgMgr = require("cfgMgr");
    var _lang = require("lang");
    var _item = require("item");
    var _bagMgr = require("bagMgr");
    var _panelMgr = require("panelMgr");
    var _tipMgr = require("tipMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var v = cc._decorator;
    var _ = v.ccclass;
    var b = v.property;
    var w = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.typeSps = [];
        e.iconSps = [];
        e.titleLb = null;
        e.iconSpr = null;
        e.proNodes = [];
        e.tarNodes = [];
        e.getLbs = [];
        e.tarNums = [];
        e.adNode = null;
        e.giftNode = null;
        e.packNode = null;
        e.doubleNode = null;
        e.packItems = [];
        e.priceLb = null;
        e.eventFunc = null;
        e.shopData = null;
        e.isDouble = !1;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t) {
        var e = this;
        var o = t.itemId;
        var n = t.cb;
        var i = t.gType;
        var r = t.useTo;
        this.tarNodes[0].active = !1;
        this.tarNodes[1].active = !1;
        this.tarNodes[2].active = !1;
        this.itemId = o;
        this.closeCb = n;
        var a = r || "";
        var s = _cfgMgr["default"].serverCfg;
        var d = this.data = {};
        switch (o) {
         case "times":
          this.titleLb.string = "\u4f53\u529b\u4e0d\u8db3", this.iconSpr.spriteFrame = this.iconSps[1];
          var h = _pInfo["default"].ins.getPowerAdTimes(), f = _uData["default"].ins.getIsNewUser() ? s.times.forUser.new_user.rules.level : s.times.forUser.all.rules.level, g = f[h];
          d.normalGet = d.adGet = g.rules.val, this.proNodes[1].active = !1, this.getLbs[0].string = "+" + f[0].rules.val, 
          this.getLbs[2].string = "+" + f[1].rules.val, this.tarNums[0].string = h + "/1", 
          this.tarNums[2].string = h + "/2", 1 === h && (this.tarNodes[0].active = !0), this.adNode.adDotData = "\u4e3b\u7ebf-\u4f53\u529b";
          break;

         case "coin":
          this.titleLb.string = "\u5143\u5b9d\u4e0d\u8db3", this.iconSpr.spriteFrame = this.iconSps[0];
          var m = _pInfo["default"].ins.getCoinAdTimes(), v = s.ad_coin_rules.rules.level, _ = v[m];
          d.normalGet = d.adGet = _.rules.val;
          for (var b = 0; b < 3; b++) this.proNodes[b].active = !0, this.getLbs[b].string = "+" + v[b].rules.val, 
          m > b ? (this.tarNums[b].string = b + 1 + "/" + (b + 1), this.tarNodes[b].active = !0) : this.tarNums[b].string = m + "/" + (b + 1);
          var w = "\u4e3b\u7ebf";
          _lang.gemeTypeKey[i] && (w = _lang.gemeTypeKey[i]), this.adNode.adDotData = w + "-\u5143\u5b9d-" + a;
        }
        _res["default"].ins.getBundleByString("resSps").then(function(t) {
          t.load("item/" + o, cc.SpriteFrame, function(t, o) {
            !t && e.node && e.node.isValid && e.typeSps.forEach(function(t) {
              t.spriteFrame = o;
            });
          }), t.load("spine/light/action", sp.SkeletonData, function(t, o) {
            if (!t && e.node && e.node.isValid) {
              var n = new cc.Node();
              var i = n.addComponent(sp.Skeleton);
              i.skeletonData = o, i.animation = "animation", n.parent = e.iconSpr.node;
            }
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
        this.initPack();
      };
      e.prototype.hideThis = function() {
        var t;
        null === (t = this.closeCb) || void 0 === t || t.call(this);
        this.hide();
      };
      e.prototype.initPack = function() {
        var t;
        var e;
        var o = _cfgMgr["default"].serverCfg;
        var n = ("times" === this.itemId ? null === (t = null == o ? void 0 : o.buy_stamina) || void 0 === t ? void 0 : t.stamina : null === (e = null == o ? void 0 : o.buy_gold_coins) || void 0 === e ? void 0 : e.gold_coins)["times" === this.itemId ? "times2" : "coin7"];
        if (n) {
          this.packNode.active = !0;
          this.shopData = n;
          var i = n.key;
          var r = _pInfo["default"].ins.getShopUnreset();
          var a = n["double"] || 0;
          var s = r[i] || 0;
          var c = this.isDouble = this.doubleNode.active = s < a;
          this.packItems.forEach(function(t) {
            t.node.active = !0;
          });
          var l = n.props;
          for (var p in l) {
            var d = Number(l[p]);
            c ? (this.packItems[0].initByData(p, 2 * d), this.packItems[1].initByData(p, d), 
            this.packItems[2].initByData(p, d)) : (this.packItems[0].initByData(p, d), this.packItems[1].initByData(p, d), 
            this.packItems[2].node.active = !1);
          }
          this.priceLb.string = "\xa5" + n.price;
        } else this.packNode.active = !1;
      };
      e.prototype.onAdGet = function() {
        this.getItem(!0);
      };
      e.prototype.getItem = function(t) {
        this.tarNodes[0].active = !1;
        this.tarNodes[1].active = !1;
        this.tarNodes[2].active = !1;
        var e = this.data;
        var o = t ? e.normalGet : e.adGet;
        var n = _pInfo["default"].ins;
        var i = _cfgMgr["default"].serverCfg;
        switch (this.itemId) {
         case "times":
          n.addPower(o, !1), n.addPowerAdTimes(), this.proNodes[1].active = !1;
          var r = _uData["default"].ins.getIsNewUser() ? i.times.forUser.new_user.rules.level : i.times.forUser.all.rules.level, c = n.getPowerAdTimes(), p = r[c];
          e.normalGet = e.adGet = p.rules.val, 1 === c ? (this.tarNodes[0].active = !0, this.tarNums[0].string = c + "/1", 
          this.tarNums[2].string = c + "/2") : 0 === c && (this.tarNodes[0].active = !0, this.tarNodes[2].active = !0, 
          this.tarNums[0].string = "1/1", this.tarNums[2].string = "2/2"), !_pInfo["default"].ins.isMaxAdCount() && _idx.platform.reportEvent(_idx.ERepEvt.buyTimes);
          break;

         case "coin":
          n.addCoin(o, !1), n.addCoinAdTimes();
          var d = _pInfo["default"].ins.getCoinAdTimes(), h = i.ad_coin_rules.rules.level[d];
          e.normalGet = e.adGet = h.rules.val;
          for (var g = 0; g < 3; g++) this.proNodes[g].active = !0, d > g ? (this.tarNums[g].string = g + 1 + "/" + (g + 1), 
          this.tarNodes[g].active = !0) : this.tarNums[g].string = d + "/" + (g + 1);
          !_pInfo["default"].ins.isMaxAdCount() && _idx.platform.reportEvent(_idx.ERepEvt.buyCoins);
        }
        var m = this.iconSpr.node;
        var v = m.parent.convertToWorldSpaceAR(m.position);
        _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: [ {
            itemId: this.itemId,
            worldPos: v,
            value: o
          } ],
          hideCb: function hideCb() {
            _evts["default"].opE.emit({
              action: _evts["default"].POWER_CHG
            });
            _evts["default"].opE.emit({
              action: _evts["default"].COIN_CHG
            });
          }
        });
      };
      e.prototype.onDestroy = function() {
        cc.assetManager.releaseAsset(this.iconSpr.spriteFrame);
      };
      e.prototype.onBtnBuy = function() {
        var t = this;
        if (this.shopData) {
          var e = this.isDouble ? 1 : 0;
          var o = this.shopData.props;
          var n = JSON.stringify(this.shopData.props);
          _idx.platform.reportEvent(_idx.ERepEvt.susPayment, {
            key: this.shopData.key
          });
          _idx.platform.payment(this.shopData.key, this.shopData.price, e, n).then(function() {
            var e = [];
            for (var n in o) {
              var i = o[n];
              t.isDouble && (i *= 2);
              _bagMgr["default"].ins.addItem(n, i);
              var r = {};
              r.itemId = n;
              r.worldPos = t.packItems[0].node.parent.convertToWorldSpaceAR(t.packItems[0].node.position);
              r.value = i;
              e.push(r);
            }
            _panelMgr["default"].ins.open("ui/ui_flyAni", {
              itemDatas: e
            });
            _pInfo["default"].ins.addShopUnreset(t.shopData.key);
            t.initPack();
            _idx.platform.reportEvent(_idx.ERepEvt.paymentResult, {
              key: t.shopData.key,
              success: 1
            });
          })["catch"](function(e) {
            _tipMgr["default"].ins.showTip(e, !0);
            _idx.platform.reportEvent(_idx.ERepEvt.paymentResult, {
              key: t.shopData.key,
              success: 0
            });
          });
        }
      };
      e.prototype.onBtnShop = function() {
        this.hideThis();
        _evts["default"].opE.emit({
          action: _evts["default"].MAINJUMP,
          data: 0
        });
        _panelMgr["default"].ins.open("ui/ui_shopPack", null).then(function() {
          _evts["default"].opE.emit({
            action: _evts["default"].UPD_MAIN_RED
          });
        });
      };
      __decorate([ b([ cc.Sprite ]) ], e.prototype, "typeSps", void 0);
      __decorate([ b([ cc.SpriteFrame ]) ], e.prototype, "iconSps", void 0);
      __decorate([ b(cc.Label) ], e.prototype, "titleLb", void 0);
      __decorate([ b(cc.Sprite) ], e.prototype, "iconSpr", void 0);
      __decorate([ b([ cc.Node ]) ], e.prototype, "proNodes", void 0);
      __decorate([ b([ cc.Node ]) ], e.prototype, "tarNodes", void 0);
      __decorate([ b([ cc.Label ]) ], e.prototype, "getLbs", void 0);
      __decorate([ b([ cc.Label ]) ], e.prototype, "tarNums", void 0);
      __decorate([ b(cc.Node) ], e.prototype, "adNode", void 0);
      __decorate([ b(cc.Node) ], e.prototype, "giftNode", void 0);
      __decorate([ b(cc.Node) ], e.prototype, "packNode", void 0);
      __decorate([ b(cc.Node) ], e.prototype, "doubleNode", void 0);
      __decorate([ b([ _item["default"] ]) ], e.prototype, "packItems", void 0);
      __decorate([ b(cc.Label) ], e.prototype, "priceLb", void 0);
      return __decorate([ _ ], e);
    }(_baseUI["default"]);
    exports["default"] = w;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    baseUI: "baseUI",
    cfgMgr: "cfgMgr",
    evts: "evts",
    idx: "idx",
    item: "item",
    lang: "lang",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    res: "res",
    tipMgr: "tipMgr",
    uData: "uData"
  } ],
  ui_getReward: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e7f52YMQ3lPSrhdMRaASNUv", "ui_getReward");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _res = require("res");
    var _bagMgr = require("bagMgr");
    var _festivalMgr = require("festivalMgr");
    var _levelMgr = require("levelMgr");
    var _panelMgr = require("panelMgr");
    var _pInfo = require("pInfo");
    var _game = require("game");
    var _baseUI = require("baseUI");
    var _rewardMgr = require("rewardMgr");
    var f = cc._decorator;
    var g = f.ccclass;
    var y = f.property;
    var m = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.rew1Lbl = null;
        e.rew2Lbl = null;
        e.rew3Lbl = null;
        e.rew4Lbl = null;
        e.adGetBtn = null;
        e.typeSps = [];
        e.hasCashReward = false;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t) {
        var e = this;
        var o = t.gold;
        this.goldNum = o;
        var n = this.pieceNum = 1;
        try {
          console.log("\ud83d\udd0d \u5f00\u59cbLabel\u68c0\u67e5...");
          this.rew1Lbl && (this.rew1Lbl.string = "x" + o);
          this.rew2Lbl && (this.rew2Lbl.string = "x" + n);
          this.rew3Lbl && (this.rew3Lbl.string = "x" + 10 * o);
          this.rew4Lbl ? this.rew4Lbl.string = "x" + 10 * n : console.log("\u2139\ufe0f rew4Lbl\u4e0d\u5b58\u5728\uff08\u7528\u6237\u5df2\u6539\u4e3a\u73b0\u91d1\u5956\u52b1\u5355\u4e00\u663e\u793a\uff09");
          console.log("\u2705 Label\u8bbe\u7f6e\u5b8c\u6210 - rew1:", !!this.rew1Lbl, "rew2:", !!this.rew2Lbl, "rew3:", !!this.rew3Lbl, "rew4:", !!this.rew4Lbl);
        } catch (error) {
          console.log("\u274c Label\u8bbe\u7f6e\u5931\u8d25:", error);
          console.log("\ud83d\udd0d Label\u72b6\u6001:", {
            rew1: !!this.rew1Lbl,
            rew2: !!this.rew2Lbl,
            rew3: !!this.rew3Lbl,
            rew4: !!this.rew4Lbl
          });
        }
        this.initAdDotEvent();
        this.setupCashReward();
        var i;
        var r = _game["default"].type;
        i = r !== _pInfo.gameType.festival || _festivalMgr["default"].ins.isJigsawMax() ? "puzzle_pieces" : "newYear_pieces";
        _res["default"].ins.getBundleByString("resSps").then(function(t) {
          t.load("item/" + i, cc.SpriteFrame, function(t, o) {
            !t && e.node && e.node.isValid && e.typeSps.forEach(function(t) {
              t && void 0 !== t.spriteFrame && (t.spriteFrame = o);
            });
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
      };
      e.prototype.tempGet = function(t) {
        var e = t ? 10 : 1;
        var o = _pInfo["default"].ins.getCoin();
        _pInfo["default"].ins.addCoin(this.goldNum * e);
        var n;
        n = _game["default"].type !== _pInfo.gameType.festival || _festivalMgr["default"].ins.isJigsawMax() ? "puzzle_pieces" : "newYear_pieces";
        _bagMgr["default"].ins.addItem(n, e);
        var i = this.goldNum * e;
        var r = e;
        var a = this.rew1Lbl.node;
        var h = this.rew2Lbl.node;
        var f = this.node;
        var g = f.convertToWorldSpaceAR(a.position);
        var y = f.convertToWorldSpaceAR(h.position);
        _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: [ {
            itemId: "coin",
            worldPos: g,
            value: i
          }, {
            itemId: n,
            worldPos: y,
            value: r
          } ],
          hideCb: function hideCb() {
            _pInfo.chgScene(_pInfo.sceneType.main, {
              cb: _levelMgr["default"].ins.updJigAndPop
            });
          },
          showCoin: o
        });
        this.hideThis();
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.onGet = function() {
        if (this.hasCashReward) {
          console.log("\ud83d\udcb0 \u9886\u53d6\u5355\u500d\u73b0\u91d1\u5956\u52b1: \xa5" + this.cashAmount);
          try {
            "undefined" !== typeof window && window.alert && window.alert("\ud83d\udc9d \u5377\u5377\u9886\u53d6\u4e86\uffe5" + this.cashAmount + "\u73b0\u91d1\u5956\u52b1\uff01\u68d2\u68d2\u54d2\uff01");
          } catch (alertError) {
            console.log("Alert\u663e\u793a\u5931\u8d25:", alertError);
          }
          _rewardMgr["default"].showLoveSupportMessage();
          _rewardMgr["default"].clearCashRewardFlag();
          this.hideThis();
        } else {
          _rewardMgr["default"].hasPendingCashReward() && _rewardMgr["default"].clearCashRewardFlag();
          this.tempGet(!1);
        }
      };
      e.prototype.onAdGet = function() {
        console.log("\ud83d\udd18 \u70b9\u51fb\u9886\u53d6\u5956\u91d1\u6309\u94ae");
        console.log("\ud83d\udd0d \u5f53\u524dhasCashReward\u72b6\u6001:", this.hasCashReward);
        console.log("\ud83d\udd0d \u5f53\u524dcashAmount:", this.cashAmount);
        if (this.hasCashReward) {
          console.log("\ud83d\udcb0 \u6267\u884c\u73b0\u91d1\u5956\u52b1\u903b\u8f91");
          this.onGetCashReward();
        } else {
          console.log("\ud83c\udfae \u6267\u884c\u6e38\u620f\u9053\u5177\u5956\u52b1\u903b\u8f91");
          this.tempGet(!0);
        }
      };
      e.prototype.initAdDotEvent = function() {
        _game["default"].type !== _pInfo.gameType.festival || _festivalMgr["default"].ins.isJigsawMax() ? this.adGetBtn.node.adDotData = "\u4e3b\u7ebf\u5341\u500d\u5956\u52b1" : this.adGetBtn.node.adDotData = "\u6d3b\u52a8\u5341\u500d\u5956\u52b1";
      };
      e.prototype.setupCashReward = function() {
        try {
          console.log("\ud83d\udd0d \u5f00\u59cb\u68c0\u67e5\u73b0\u91d1\u5956\u52b1...");
          var hasRecentReward = _rewardMgr["default"].getLastRewardInfo();
          console.log("\ud83c\udfaf getLastRewardInfo\u8fd4\u56de:", hasRecentReward);
          if (hasRecentReward) {
            console.log("\ud83d\udcb0 \u68c0\u6d4b\u5230\u73b0\u91d1\u5956\u52b1: \xa5" + hasRecentReward.amount);
            this.hasCashReward = true;
            this.cashAmount = hasRecentReward.amount;
            if (this.rew3Lbl) {
              this.rew3Lbl.string = "+\xa5" + hasRecentReward.amount;
              console.log("\ud83d\udcb0 rew3Lbl\u8bbe\u7f6e\u4e3a\u73b0\u91d1\u5956\u52b1: +\xa5" + hasRecentReward.amount);
            }
            console.log("\u2705 \u73b0\u91d1\u5956\u52b1UI\u5df2\u8bbe\u7f6e: " + (this.rew3Lbl ? this.rew3Lbl.string : "rew3Lbl\u672a\u7ed1\u5b9a"));
            console.log("\u2705 hasCashReward\u72b6\u6001:", this.hasCashReward);
            console.log("\u2705 cashAmount:", this.cashAmount);
          } else {
            console.log("\ud83d\udcb0 \u65e0\u73b0\u91d1\u5956\u52b1\uff0c\u4f7f\u7528\u539f\u6709\u903b\u8f91");
            this.hasCashReward = false;
          }
        } catch (error) {
          console.log("\u274c \u8bbe\u7f6e\u73b0\u91d1\u5956\u52b1\u5931\u8d25:", error);
          this.hasCashReward = false;
        }
      };
      e.prototype.onGetCashReward = function() {
        try {
          console.log("\ud83d\udcb0 \u70b9\u51fb\u9886\u53d6\u73b0\u91d1\u5956\u52b1: \xa5" + this.cashAmount);
          try {
            if ("undefined" !== typeof window && window.alert) window.alert("\ud83c\udf89 \u606d\u559c\u5377\u5377\uff01\uffe5" + this.cashAmount + "\u73b0\u91d1\u5956\u52b1\u5df2\u6210\u529f\u9886\u53d6\uff01"); else {
              var _tipMgr = require("tipMgr");
              _tipMgr["default"].ins.showTip("\u5377\u5377\u83b7\u5f97\uffe5" + this.cashAmount + "\u5956\u52b1\uff01", false);
            }
          } catch (tipError) {
            console.log("\u63d0\u793a\u663e\u793a\u5931\u8d25:", tipError);
          }
          _rewardMgr["default"].showLoveSupportMessage();
          _rewardMgr["default"].clearCashRewardFlag();
          this.hideThis();
          console.log("\ud83c\udf89 \u73b0\u91d1\u5956\u52b1\u786e\u8ba4\u5b8c\u6210\uff01\uff08\u4f59\u989d\u5df2\u5728\u6e38\u620f\u5b8c\u6210\u65f6\u66f4\u65b0\uff09");
        } catch (error) {
          console.log("\u274c \u9886\u53d6\u73b0\u91d1\u5956\u52b1\u5931\u8d25:", error);
        }
      };
      __decorate([ y(cc.Label) ], e.prototype, "rew1Lbl", void 0);
      __decorate([ y(cc.Label) ], e.prototype, "rew2Lbl", void 0);
      __decorate([ y(cc.Label) ], e.prototype, "rew3Lbl", void 0);
      __decorate([ y(cc.Label) ], e.prototype, "rew4Lbl", void 0);
      __decorate([ y(cc.Button) ], e.prototype, "adGetBtn", void 0);
      __decorate([ y([ cc.Sprite ]) ], e.prototype, "typeSps", void 0);
      return __decorate([ g ], e);
    }(_baseUI["default"]);
    exports["default"] = m;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    baseUI: "baseUI",
    festivalMgr: "festivalMgr",
    game: "game",
    levelMgr: "levelMgr",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    res: "res",
    rewardMgr: "rewardMgr",
    tipMgr: "tipMgr"
  } ],
  ui_info: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68903bM3tFJxIGiJX3VlM6L", "ui_info");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _baseUI = require("baseUI");
    var s = cc._decorator;
    var c = s.ccclass;
    var l = s.property;
    var u = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.title = null;
        e.content = null;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t) {
        var e = this;
        var o = t.type;
        this.title.string = 1 == o ? "\u7528\u6237\u534f\u8bae" : "\u9690\u79c1\u653f\u7b56";
        cc.assetManager.loadBundle("other", function(t, n) {
          t || n.load(o + "", cc.TextAsset, function(t, o) {
            var n = e.content;
            !t && n && n.isValid && (n.string = o.text);
          });
        });
      };
      e.prototype.hideThis = function() {
        t.prototype.hide.call(this);
      };
      __decorate([ l(cc.Label) ], e.prototype, "title", void 0);
      __decorate([ l(cc.Label) ], e.prototype, "content", void 0);
      return __decorate([ c ], e);
    }(_baseUI["default"]);
    exports["default"] = u;
    cc._RF.pop();
  }, {
    baseUI: "baseUI"
  } ],
  ui_jigFinish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6948fUS92JKPqR9GQdGftvI", "ui_jigFinish");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _res = require("res");
    var _global = require("global");
    var _jigsawMgr = require("jigsawMgr");
    var _newJigMgr = require("newJigMgr");
    var _panelMgr = require("panelMgr");
    var _baseUI = require("baseUI");
    var h = cc._decorator;
    var f = h.ccclass;
    var g = h.property;
    var y = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.finishSpr = null;
        e.lightNode = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        cc.tween(this.lightNode).by(3, {
          angle: -360
        }).repeatForever().start();
      };
      e.prototype.init = function(t) {
        var e = this;
        var o = t.themeId;
        var n = t.themeType;
        var i = o + 1;
        var r = "pintu_" + i;
        1 === n ? _jigsawMgr["default"].ins : 2 === n && (_newJigMgr["default"].ins, r = "fes_" + i);
        1 === n ? i < 61 ? _res["default"].ins.getBundleByString("jigsaw").then(function(t) {
          t.load(r, cc.SpriteFrame, function(t, o) {
            !t && e.node && e.node.isValid && (e.finishSpr.spriteFrame = o);
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('jigsaw')", t);
        }) : cc.assetManager.loadRemote(_global.OssConfig.jigswawUrl + r + ".jpg", {
          ext: _global.headImgExt
        }, function(t, o) {
          !t && e.node && e.node.isValid && (e.finishSpr.spriteFrame = new cc.SpriteFrame(o));
        }) : _res["default"].ins.getBundleByString("jigsaw").then(function(t) {
          t.load(r, cc.SpriteFrame, function(t, o) {
            !t && e.node && e.node.isValid && (e.finishSpr.spriteFrame = o);
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('jigsaw')", t);
        });
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.onBtnBack = function() {
        _panelMgr["default"].ins.closeAllPanel();
        _evts["default"].opE.emit({
          action: _evts["default"].MAINJUMP,
          data: 2
        });
        _evts["default"].opE.emit({
          action: _evts["default"].UPDJIGSAWGAME
        });
      };
      e.prototype.onBtnNext = function() {
        _panelMgr["default"].ins.closeAllPanel();
        _evts["default"].opE.emit({
          action: _evts["default"].UPDJIGSAWGAME
        });
      };
      __decorate([ g(cc.Sprite) ], e.prototype, "finishSpr", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "lightNode", void 0);
      return __decorate([ f ], e);
    }(_baseUI["default"]);
    exports["default"] = y;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    evts: "evts",
    global: "global",
    jigsawMgr: "jigsawMgr",
    newJigMgr: "newJigMgr",
    panelMgr: "panelMgr",
    res: "res"
  } ],
  ui_jigTip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8fafd+wZatAc4UtHon65T2w", "ui_jigTip");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _baseUI = require("baseUI");
    var s = cc._decorator;
    var c = s.ccclass;
    var l = (s.property, function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.okCb = null;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t) {
        var e = t.okCb;
        this.okCb = e;
      };
      e.prototype.onBtnEnsure = function() {
        this.okCb && this.okCb();
        this.hideThis();
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      return __decorate([ c ], e);
    }(_baseUI["default"]));
    exports["default"] = l;
    cc._RF.pop();
  }, {
    baseUI: "baseUI"
  } ],
  ui_jigsaw: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f553dAxt3lMRq5VspifJTH7", "ui_jigsaw");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _jigsaw = require("jigsaw");
    var _global = require("global");
    var _baseUI = require("baseUI");
    var u = cc._decorator;
    var p = u.ccclass;
    var d = u.property;
    var h = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.jigsawPre = null;
        e.bgNode = null;
        e.closeNode = null;
        e.jigsawItem = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        if (this.node.height = cc.winSize.height, _global["default"].padScale) {
          this.bgNode.scale = _global["default"].padScale;
          var t = (cc.view.getVisibleSize().width - 720) / 2;
          this.closeNode.x -= t;
        }
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTBe, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTM, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTE, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTC, this);
      };
      e.prototype.start = function() {};
      e.prototype.init = function(t) {
        var e = t.theme_id;
        var o = t.themeType;
        var n = cc.instantiate(this.jigsawPre);
        n.parent = this.node;
        n.position = cc.v3(0, 0);
        this.jigsawItem = n.getComponent(_jigsaw["default"]);
        this.jigsawItem.initItem(e, o);
      };
      e.prototype.onTBe = function(t) {
        var e = this.jigsawItem;
        e && e.node.active && e.onTBe(t);
      };
      e.prototype.onTM = function(t) {
        var e = this.jigsawItem;
        e && e.onTM(t);
      };
      e.prototype.onTE = function(t) {
        var e = this.jigsawItem;
        e && e.onTE(t);
      };
      e.prototype.onTC = function(t) {
        var e = this.jigsawItem;
        e && e.onTC(t);
      };
      e.prototype.hideThis = function() {
        this.hide();
        _evts["default"].opE.emit({
          action: _evts["default"].UPDJIGSAWGAME
        });
      };
      e.prototype.onDestroy = function() {};
      __decorate([ d(cc.Prefab) ], e.prototype, "jigsawPre", void 0);
      __decorate([ d(cc.Node) ], e.prototype, "bgNode", void 0);
      __decorate([ d(cc.Node) ], e.prototype, "closeNode", void 0);
      return __decorate([ p ], e);
    }(_baseUI["default"]);
    exports["default"] = h;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    evts: "evts",
    global: "global",
    jigsaw: "jigsaw"
  } ],
  ui_luckyGift: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6d3d4wIWL9INoHkuewVRpux", "ui_luckyGift");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _cfgMgr = require("cfgMgr");
    var _baseUI = require("baseUI");
    var _com = require("com");
    var _pInfo = require("pInfo");
    var _bagMgr = require("bagMgr");
    var _panelMgr = require("panelMgr");
    var d = cc._decorator;
    var h = d.ccclass;
    var f = d.property;
    var g = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.giftsNode = null;
        e.btn_start = null;
        e.pointerNode = null;
        e.labTip = null;
        e.proGiftNode = null;
        e.giftsDatas = null;
        e.isCurPlayAni = !1;
        e.drawedTime = 0;
        e.nowHaveTime = !1;
        e.crossedLevel = 0;
        e.proMax = 10;
        e.proGift = null;
        e.proGiftDatas = [];
        return e;
      }
      __extends(e, t);
      e.prototype.start = function() {
        this.giftsDatas = _cfgMgr["default"].serverCfg.lucky_gift.rules;
        this.pointRots = [ 0, 22, 67, 112, 157, 202, 247, 292, 337 ];
        this.isCurPlayAni = !1;
        this.proMax = 10;
        this.proGiftDatas = [];
        this.proGift = [ 2, 3, 5, 7, 9 ];
        this.initData();
        this.initPro();
        this.initInfo();
        this.initItems();
      };
      e.prototype.initData = function() {
        var t = _pInfo["default"].ins;
        this.drawedTime = t.getLuckTimes();
        this.nowHaveTime = t.getLuckyState();
        this.crossedLevel = t.getRecordData().main.wTimes;
      };
      e.prototype.initPro = function() {};
      e.prototype.updatePro = function() {};
      e.prototype.initInfo = function() {
        if (this.nowHaveTime) this.btn_start.enabled = !0, this.labTip.node.active = !1; else {
          this.btn_start.enabled = !1;
          this.labTip.node.active = !0;
          var t = 2 - this.crossedLevel % 2;
          this.labTip.string = "(\u518d\u901a\u8fc7" + t + "\u5173\u5373\u53ef\u62bd\u5956)";
        }
      };
      e.prototype.initItems = function() {
        for (var t = 1; t <= 8; t++) {
          var e = this.giftsDatas[t - 1];
          var o = this.giftsNode.getChildByName("" + t);
          o.getChildByName("light").active = !1;
          o.getChildByName("lab").getComponent(cc.Label).string = e.title;
        }
      };
      e.prototype.getProGift = function() {};
      e.prototype.onBtnStart = function() {
        var t = this;
        if (!this.isCurPlayAni) {
          var e = _com["default"].ins.rad(1, 8);
          this.playAni(e, !0, function() {
            _pInfo["default"].ins.addLuckyTimes();
            t.initData();
            t.addGoodToData(t.giftsDatas[e - 1], t.giftsNode.getChildByName("" + e).getChildByName("spr"));
            t.getProGift();
            t.updatePro(t.drawedTime, t.proMax);
            t.initInfo();
          });
        }
      };
      e.prototype.addGoodToData = function(t, e) {
        switch (t.props) {
         case "notice":
         case "full_row_col":
         case "random_notice":
          _bagMgr["default"].ins.addItem(t.props, t.val);
          break;

         case "times":
          _pInfo["default"].ins.addPower(t.val);
          break;

         case "coin":
          _pInfo["default"].ins.addCoin(t.val);
        }
        var o = e.parent.convertToWorldSpaceAR(e.position);
        _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: [ {
            itemId: t.props,
            worldPos: o,
            value: t.val
          } ]
        });
      };
      e.prototype.playAni = function(t, e, o) {
        var n = this;
        if (!this.isCurPlayAni) {
          if (this.isCurPlayAni = !0, !e) return this.actionIndex(t), this.pointerNode.angle = -this.pointRots[t], 
          void (this.isCurPlayAni = !1);
          var i = t;
          var r = 0;
          var a = function a() {
            if (r += 1, n.actionIndex(r), r > 15) {
              var t = 0;
              var e = function e() {
                t += 1;
                n.actionIndex(t);
                t > i && (n.blingbling(i, function() {
                  n.isCurPlayAni = !1;
                  o && o();
                }), n.unschedule(e));
              };
              n.unschedule(a);
              n.schedule(e, .1);
            }
          };
          this.schedule(a, .1);
          this.pointerNode.angle = 0;
          var s = 720 + this.pointRots[t];
          var c = 1.8 + .1 * t;
          cc.tween(this.pointerNode).to(c, {
            angle: -s
          }).call(function() {}).start();
        }
      };
      e.prototype.actionIndex = function(t) {
        this.hideAllGiftLight();
        var e = t % 8;
        0 == e && (e = 8);
        this.giftsNode.getChildByName("" + e).getChildByName("light").active = !0;
      };
      e.prototype.blingbling = function(t, e) {
        var o = this;
        if (this.hideAllGiftLight(), t) {
          var n = 0;
          var i = function i() {
            n += 1;
            o.giftsNode.getChildByName("" + t).getChildByName("light").active = n % 2 != 0;
            n > 20 && (o.actionIndex(t), e && e(), o.unschedule(i));
          };
          this.schedule(i, .05);
        }
      };
      e.prototype.hideAllGiftLight = function() {
        for (var t = 1; t <= 8; t++) this.giftsNode.getChildByName("" + t).getChildByName("light").active = !1;
      };
      e.prototype.hideThis = function() {
        this.isCurPlayAni || this.hide();
      };
      __decorate([ f(cc.Node) ], e.prototype, "giftsNode", void 0);
      __decorate([ f(cc.Button) ], e.prototype, "btn_start", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "pointerNode", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "labTip", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "proGiftNode", void 0);
      return __decorate([ h ], e);
    }(_baseUI["default"]);
    exports["default"] = g;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    baseUI: "baseUI",
    cfgMgr: "cfgMgr",
    com: "com",
    pInfo: "pInfo",
    panelMgr: "panelMgr"
  } ],
  ui_lvInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b77tK3Q9Hy5iP5k4ikNUN", "ui_lvInfo");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _global = require("global");
    var _festivalMgr = require("festivalMgr");
    var _levelMgr = require("levelMgr");
    var _panelMgr = require("panelMgr");
    var _pInfo = require("pInfo");
    var _main = require("main");
    var _baseUI = require("baseUI");
    var h = cc._decorator;
    var f = h.ccclass;
    var g = h.property;
    var y = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.lvLB = null;
        e.numLv = null;
        e.diffLb = null;
        e.curLB = null;
        e.costLBL = null;
        e.costLBR = null;
        e.jigsawSp = null;
        e.kuangSp = null;
        e.matArr = [];
        e.aniSpr = null;
        e.boomSpine = null;
        e.isShow = !1;
        return e;
      }
      __extends(e, t);
      e.prototype.start = function() {};
      e.prototype.init = function() {
        for (var t, e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
        this.isShow = (null === (t = e[0]) || void 0 === t ? void 0 : t.isShow) || !1;
        this.kuangSp.setMaterial(0, this.matArr[0]);
        this.showLvInfo();
      };
      e.prototype.showLvInfo = function() {
        var t = this;
        var e = _pInfo["default"].ins;
        var o = _levelMgr["default"].ins;
        var n = e.getPuzzleLvl();
        var i = n - 54 * (Math.ceil(n / 54) - 1);
        this.lvLB.string = "\u7b2c" + i + "\u5173";
        var r = o.getPuzzleInfo().size;
        this.numLv.string = r + "x" + r;
        this.diffLb.string = o.getLevelDiffStr();
        this.curLB.string = e.getConsWinTimes() + "";
        this.costLBL.string = o.getLevelCost() + "/";
        this.costLBR.string = "" + e.getPower();
        var a = new cc.Color(251, 234, 168);
        this.costLBR.node.color = o.getLevelCost() > e.getPower() ? cc.Color.RED : a;
        var s = _pInfo["default"].ins.getPuzzleLvl();
        if (s % 9 == 1 && (this.isShow = !1), this.isShow) {
          var l = this.updJigsaw(s - 1);
          this.scheduleOnce(function() {
            t.showPopAni(l);
          }, .34);
        } else this.updJigsaw(s);
      };
      e.prototype.updJigsaw = function(t) {
        var e;
        var o = this;
        var n = (t - 1) % _levelMgr["default"].ins.getPuzzleLvlCount();
        var i = Math.ceil(n / 9) || 1;
        e = 9 == (e = n >= 9 * i ? 9 : n > 9 * i - 9 ? n % 9 : 0) ? 0 : e;
        _levelMgr["default"].ins.getJigsawIcon(i).then(function(t) {
          t && (o.jigsawSp.spriteFrame = t);
        })["catch"](function() {
          console.error("getIconErr");
        });
        this.jigsawSp.getMaterial(0).setProperty("height", e);
        return e;
      };
      e.prototype.showPopAni = function(t) {
        var e = this;
        _levelMgr["default"].ins.getPuzzleSprFrame(_pInfo["default"].ins.getPuzzleLvl() - 1).then(function(o) {
          if (e.node) {
            e.aniSpr.spriteFrame = o;
            var n = t % 3;
            var i = Math.floor(t / 3);
            var r = e.aniSpr.node;
            r.x += 40 * n;
            r.y -= 40 * i;
            r.scale = .1;
            cc.tween(r).to(.02, {
              scale: 1.1
            }).to(.06, {
              scale: .7
            }).to(.1, {
              scale: 1
            }).delay(.7).call(function() {
              e.boomSpine.node.active = !0;
              e.aniSpr.spriteFrame = null;
              var t = _pInfo["default"].ins.getPuzzleLvl();
              e.updJigsaw(t);
            }).start();
          }
        });
      };
      e.prototype.onBtnStart = function() {
        var t = _levelMgr["default"].ins.getLevelCost();
        if (_pInfo["default"].ins.getPower() < t) _panelMgr["default"].ins.open("ui/ui_getRes", {
          itemId: "times"
        }); else {
          var e = this.costLBL.node.convertToWorldSpaceAR(cc.Vec3.ZERO);
          var o = _main["default"].ins;
          o && (o.blockComp.enabled = !0);
          o.usePower(-t, e);
          _global["default"].puzzlv = _pInfo["default"].ins.getPuzzleLvl() - 1;
          _festivalMgr["default"].ins.updPro(_festivalMgr.fesTaskKey.costPower, t);
        }
      };
      e.prototype.hideThis = function() {
        this.kuangSp.setMaterial(0, this.matArr[1]);
        this.hide();
      };
      __decorate([ g(cc.Label) ], e.prototype, "lvLB", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "numLv", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "diffLb", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "curLB", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "costLBL", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "costLBR", void 0);
      __decorate([ g(cc.Sprite) ], e.prototype, "jigsawSp", void 0);
      __decorate([ g(cc.Sprite) ], e.prototype, "kuangSp", void 0);
      __decorate([ g(cc.Material) ], e.prototype, "matArr", void 0);
      __decorate([ g(cc.Sprite) ], e.prototype, "aniSpr", void 0);
      __decorate([ g(sp.Skeleton) ], e.prototype, "boomSpine", void 0);
      return __decorate([ f ], e);
    }(_baseUI["default"]);
    exports["default"] = y;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    festivalMgr: "festivalMgr",
    global: "global",
    levelMgr: "levelMgr",
    main: "main",
    pInfo: "pInfo",
    panelMgr: "panelMgr"
  } ],
  ui_mailInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f5988cQTZGpqvbdBk5aXo1", "ui_mailInfo");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _item1 = require("item1");
    var _mailMgr = require("mailMgr");
    var _panelMgr = require("panelMgr");
    var _baseUI = require("baseUI");
    var p = cc._decorator;
    var d = p.ccclass;
    var h = p.property;
    var f = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.scrollView = null;
        e.title = null;
        e.cont = null;
        e.itemPfb = null;
        e.awardNode = null;
        e.deleteNode = null;
        e._mailItem = [];
        return e;
      }
      __extends(e, t);
      e.prototype.start = function() {};
      e.prototype.init = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var o = t[0].id;
        this.mailId = o;
        var n = _mailMgr["default"].ins.serverMail;
        this.title.string = n[o].title;
        this.cont.string = n[o].msg;
        this.updateItem();
      };
      e.prototype.updateItem = function(t) {
        var e = this;
        void 0 === t && (t = !0);
        var o = _mailMgr["default"].ins.mailInfo.mail[this.mailId];
        var n = _mailMgr["default"].ins.serverMail;
        var i = JSON.parse(n[this.mailId].props);
        if (t) {
          for (var r in this.scrollView.content.children.forEach(function(t) {
            e._mailItem.push(t);
          }), this.scrollView.content.removeAllChildren(), i) if (i.hasOwnProperty(r)) {
            var a = this._mailItem.shift() || cc.instantiate(this.itemPfb);
            this.scrollView.content.addChild(a);
            a.getComponent(_item1["default"]).init(r, i[r], o);
          }
          if (this.scrollView.content.childrenCount) {
            var l = (this.scrollView.content.children[0].width + 5.5) * this.scrollView.content.childrenCount;
            this.scrollView.node.x = l > this.scrollView.node.width ? -209 : (this.scrollView.node.width - l) / 2 - 209;
            l = Math.min(l, 360);
            this.scrollView.node.width = l;
            this.scrollView.scrollToLeft();
          }
        }
        var u = Object.keys(i).length > 0;
        this.awardNode.active = u && o != _mailMgr.mailState.award;
        this.deleteNode.active = !this.awardNode.active;
      };
      e.prototype.updMail = function() {};
      e.prototype.getAward = function() {
        if (_mailMgr["default"].ins.getAward(this.mailId)) {
          for (var t = [], e = this.scrollView.content.childrenCount - 1; e >= 0; e--) {
            var o = this.scrollView.content.children[e];
            var n = o.parent.convertToWorldSpaceAR(o.position);
            var i = {};
            i.itemId = o.getComponent(_item1["default"]).key;
            i.worldPos = n;
            i.value = o.getComponent(_item1["default"]).countStr;
            t.push(i);
          }
          _panelMgr["default"].ins.open("ui/ui_flyAni", {
            itemDatas: t
          });
          this.updateItem(!1);
        }
      };
      e.prototype["delete"] = function() {
        _mailMgr["default"].ins.deleteMail(this.mailId);
        this.hideThis();
        _evts["default"].opE.emit({
          action: _evts["default"].UPDMAIL,
          data: {
            type: "delete",
            id: this.mailId
          }
        });
      };
      e.prototype.changereadState = function() {
        _mailMgr["default"].ins.readMail(this.mailId) && _evts["default"].opE.emit({
          action: _evts["default"].UPDMAIL,
          data: {
            type: "read",
            id: this.mailId
          }
        });
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.onHide = function() {
        this.changereadState();
      };
      __decorate([ h(cc.ScrollView) ], e.prototype, "scrollView", void 0);
      __decorate([ h(cc.Label) ], e.prototype, "title", void 0);
      __decorate([ h(cc.Label) ], e.prototype, "cont", void 0);
      __decorate([ h(cc.Prefab) ], e.prototype, "itemPfb", void 0);
      __decorate([ h(cc.Node) ], e.prototype, "awardNode", void 0);
      __decorate([ h(cc.Node) ], e.prototype, "deleteNode", void 0);
      return __decorate([ d ], e);
    }(_baseUI["default"]);
    exports["default"] = f;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    evts: "evts",
    item1: "item1",
    mailMgr: "mailMgr",
    panelMgr: "panelMgr"
  } ],
  ui_mail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e7ea9rOEC9HW6BXUtMwquOJ", "ui_mail");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _lang = require("lang");
    var _mailItem = require("mailItem");
    var _mailMgr = require("mailMgr");
    var _panelMgr = require("panelMgr");
    var _tipMgr = require("tipMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var f = cc._decorator;
    var g = f.ccclass;
    var y = f.property;
    var m = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.scrollView = null;
        e.mailPfb = null;
        e.emptyNode = null;
        e.getAllNode = null;
        e.eventFunc = null;
        e.isLoad = !1;
        e._mailItem = [];
        e.lastScrollPosition = 0;
        return e;
      }
      __extends(e, t);
      e.prototype.start = function() {};
      e.prototype.init = function() {
        for (var t = this, e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
        _mailMgr["default"].ins.getMail(this.updMail.bind(this));
        this.scrollView.node.on("scrolling", function() {
          t.pageScroll();
        }, this);
      };
      e.prototype.updMail = function() {
        var t = this;
        if (!this.isLoad && this.scrollView) {
          this.isLoad = !0;
          var e = this.scrollView.content;
          e.children.forEach(function(e) {
            t._mailItem.push(e);
          });
          e.removeAllChildren();
          var o = _mailMgr["default"].ins.mailInfo.mail;
          var n = Object.keys(o);
          if (this.emptyNode.active = 0 == n.length, n.length) {
            for (var i = this.mailPfb, r = _mailMgr["default"].ins, a = 0; a < n.length; a++) {
              var s = n[a];
              if (r.serverMail[s]) {
                var u = r.mailInfo.mail[s];
                var p = this._mailItem.shift();
                p || (p = cc.instantiate(i));
                this.scrollView.content.addChild(p, 0);
                p.active = !1;
                p.getComponent(_mailItem["default"]).init(Number(s), u);
              }
            }
            this.isLoad = !1;
            this.lastScrollPosition = 0;
            this.updState({
              type: "load"
            });
            this.scheduleOnce(this.pageScroll.bind(this, !1), 0);
          } else this.isLoad = !1;
        }
      };
      e.prototype.pageScroll = function(t) {
        void 0 === t && (t = !0);
        var e = this.scrollView.content.children;
        var o = this.scrollView.getScrollOffset().y;
        if (!(t && Math.abs(o - this.lastScrollPosition) < 1)) {
          for (var n = this.scrollView.content.parent.height / 2, i = 0; i < e.length; i++) {
            var r = e[i];
            var a = r.convertToWorldSpaceAR(cc.Vec2.ZERO);
            (a = this.scrollView.content.parent.convertToNodeSpaceAR(a)).y + r.height / 2 < -n || a.y - r.height / 2 > n ? r.children[0].active = !1 : r.children[0].active = !0;
          }
          this.lastScrollPosition = o;
        }
      };
      e.prototype.showLoadAni = function(t) {
        cc.tween(t).to(.5, {
          x: 0
        }, {
          easing: "backInOut"
        }).start();
      };
      e.prototype.showChangegAni = function(t) {
        cc.tween(t).to(.2, {
          opacity: 255
        }).start();
      };
      e.prototype.chgAni = function(t, e) {
        void 0 === e && (e = 0);
        t.active = !0;
        this.showChgAni ? (t.opacity = 0, this.scheduleOnce(this.showChangegAni.bind(this, t), .1 * (e + 1))) : (t.x = (cc.winSize.width + t.width) / 2, 
        this.scheduleOnce(this.showLoadAni.bind(this, t), .05 * e));
      };
      e.prototype.mailSort = function() {
        this.scrollView.content.children.sort(function(t, e) {
          return t.getComponent(_mailItem["default"]).state - e.getComponent(_mailItem["default"]).state;
        });
        this.scrollView.content.getComponent(cc.Layout).updateLayout();
      };
      e.prototype.getItemById = function(t) {
        for (var e = this.scrollView.content.children, o = 0; o < e.length; o++) {
          var n = e[o].getComponent(_mailItem["default"]);
          if (t === n.id) return {
            item: n,
            index: o
          };
        }
      };
      e.prototype.updState = function(t) {
        var e = this;
        var o = this.scrollView.content;
        var n = _mailMgr["default"].ins.serverMail;
        if (t) if ("keyAward" === t.type) o.children.forEach(function(t, o) {
          var i = t.getComponent(_mailItem["default"]);
          n[i.id].props && i.state !== _mailMgr.mailState.award && (i.updateState(_mailMgr.mailState.award), 
          e.chgAni(t, o));
        }); else if ("load" === t.type) this.mailSort(), o.children.forEach(function(t, o) {
          e.chgAni(t, o);
        }); else if ("keyDelete" === t.type) {
          var i = [];
          o.children.forEach(function(t, e) {
            var o = t.getComponent(_mailItem["default"]);
            o.state === _mailMgr.mailState.award && i.push({
              node: o.node,
              index: e
            });
          });
          i.forEach(function(t) {
            o.children.splice(t.index, 1);
            t.node.destroy();
            o.getComponent(cc.Layout).updateLayout();
          });
        } else if ("read" === t.type) {
          if (t.id) {
            var r = this.getItemById(t.id);
            var a = _mailMgr["default"].ins.mailInfo.mail[t.id];
            r && r.item && (r.item.updateState(a), this.chgAni(r.item.node), this.mailSort());
          }
        } else if ("delete" === t.type) {
          var s = this.getItemById(t.id);
          s && s.item.node.destroy();
          this.scheduleOnce(function() {
            o.children.splice(s.index, 1);
            e.mailSort();
          });
        }
        this.scheduleOnce(function() {
          e.emptyNode.active = 0 == e.scrollView.content.children.length, e.pageScroll.bind(e, !1);
        });
        this.showChgAni || (this.showChgAni = !0);
      };
      e.prototype.keyDelete = function() {
        if (!this.isLoad) {
          var t = 0;
          Object.values(_mailMgr["default"].ins.mailInfo.mail).forEach(function(e) {
            e === _mailMgr.mailState.award && t++;
          });
          t <= 0 ? _tipMgr["default"].ins.showTip(_lang.lang[10005]) : _mailMgr["default"].ins.deleteMail();
        }
      };
      e.prototype.keyAward = function() {
        if (!this.isLoad) if (Object.keys(_mailMgr["default"].ins.mailInfo.mail).length <= 0) _tipMgr["default"].ins.showTip(_lang.lang[10006]); else {
          var t = _pInfo["default"].ins.Mail;
          var e = _mailMgr["default"].ins;
          var o = {};
          for (var n in t.mail) if (t.mail[n] !== _mailMgr.mailState.award) {
            var i = e.serverMail;
            if (n && i[n]) {
              var r = JSON.parse(i[n].props);
              for (var a in r) r.hasOwnProperty(a) && (o[a] ? o[a] += Number(r[a]) : o[a] = Number(r[a]));
            }
          }
          if (_mailMgr["default"].ins.getAward()) {
            var c = [];
            var h = this.getAllNode.parent.convertToWorldSpaceAR(this.getAllNode.position);
            for (var f in o) {
              var g = o[f];
              var y = {};
              y.itemId = f;
              y.worldPos = h;
              y.value = g;
              c.push(y);
            }
            c.length && (c.length > 10 && (c.length = 10), _panelMgr["default"].ins.open("ui/ui_flyAni", {
              itemDatas: c
            }));
          } else _tipMgr["default"].ins.showTip(_lang.lang[10006]);
        }
      };
      e.prototype.onLoad = function() {
        this.eventFunc = this.onOperTap.bind(this);
        _evts["default"].opE.on(this.eventFunc);
      };
      e.prototype.onDestroy = function() {
        _evts["default"].opE.off(this.eventFunc);
        this.eventFunc = null;
      };
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].UPDMAIL:
          this.updState(t.data);
        }
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      __decorate([ y(cc.ScrollView) ], e.prototype, "scrollView", void 0);
      __decorate([ y(cc.Prefab) ], e.prototype, "mailPfb", void 0);
      __decorate([ y(cc.Node) ], e.prototype, "emptyNode", void 0);
      __decorate([ y(cc.Node) ], e.prototype, "getAllNode", void 0);
      return __decorate([ g ], e);
    }(_baseUI["default"]);
    exports["default"] = m;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    evts: "evts",
    lang: "lang",
    mailItem: "mailItem",
    mailMgr: "mailMgr",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    tipMgr: "tipMgr"
  } ],
  ui_newGift: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73028GmA1pEwZDKXT2TiRed", "ui_newGift");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _idx = require("idx");
    var _cfgMgr = require("cfgMgr");
    var _item = require("item");
    var _bagMgr = require("bagMgr");
    var _panelMgr = require("panelMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var f = cc._decorator;
    var g = f.ccclass;
    var y = f.property;
    var m = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.itemsNode = null;
        e.itemPre = null;
        e.bgSpr = null;
        e.adGetBtn = null;
        e.hideCb = null;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function() {
        var t = this;
        _cfgMgr["default"].serverCfg.props.set.forEach(function(e) {
          if (Number(e.init_val) > 0) {
            var o = cc.instantiate(t.itemPre);
            o.active = !0, o.parent = t.itemsNode, o.getComponent(_item["default"]).initByData(e.key, e.init_val);
          }
        });
        this.adGetBtn.node.adDotData = "\u65b0\u624b\u793c\u5305";
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.onAdGet = function() {
        this.getItem();
      };
      e.prototype.getItem = function() {
        for (var t = this, e = [], o = 0, n = this.itemsNode.childrenCount; o < n; o++) {
          var i = this.itemsNode.children[o];
          var r = i.parent.convertToWorldSpaceAR(i.position);
          var h = {};
          h.itemId = i.getComponent(_item["default"]).key;
          h.worldPos = r;
          h.value = i.getComponent(_item["default"]).count;
          e.push(h);
        }
        _cfgMgr["default"].serverCfg.props.set.forEach(function(t) {
          _bagMgr["default"].ins.addItem(t.key, t.init_val, !0);
        });
        !_pInfo["default"].ins.isMaxAdCount() && _idx.platform.reportEvent(_idx.ERepEvt.newGiftGet);
        _pInfo["default"].ins.setIsGetNewGif(!0);
        _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: e,
          hideCb: function hideCb() {
            _evts["default"].opE.emit({
              action: _evts["default"].UPD_NEW_GIFT
            });
            t.hideThis();
          }
        });
      };
      e.prototype.onDestroy = function() {
        cc.assetManager.releaseAsset(this.bgSpr.spriteFrame);
      };
      __decorate([ y(cc.Node) ], e.prototype, "itemsNode", void 0);
      __decorate([ y(cc.Node) ], e.prototype, "itemPre", void 0);
      __decorate([ y(cc.Sprite) ], e.prototype, "bgSpr", void 0);
      __decorate([ y(cc.Button) ], e.prototype, "adGetBtn", void 0);
      return __decorate([ g ], e);
    }(_baseUI["default"]);
    exports["default"] = m;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    baseUI: "baseUI",
    cfgMgr: "cfgMgr",
    evts: "evts",
    idx: "idx",
    item: "item",
    pInfo: "pInfo",
    panelMgr: "panelMgr"
  } ],
  ui_preReward: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1e17kl/lRDSpgVpOh23ktk", "ui_preReward");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _item = require("item");
    var _baseUI = require("baseUI");
    var c = cc._decorator;
    var l = c.ccclass;
    var u = c.property;
    var p = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.itemsNode = null;
        e.itemPre = null;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t) {
        var e = this;
        t.itemDatas.forEach(function(t) {
          if (Number(t.value) > 0) {
            var o = cc.instantiate(e.itemPre);
            o.active = !0;
            o.parent = e.itemsNode;
            o.getComponent(_item["default"]).initByData(t.itemId, t.value);
          }
        });
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.getItem = function() {};
      __decorate([ u(cc.Node) ], e.prototype, "itemsNode", void 0);
      __decorate([ u(cc.Node) ], e.prototype, "itemPre", void 0);
      return __decorate([ l ], e);
    }(_baseUI["default"]);
    exports["default"] = p;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    item: "item"
  } ],
  ui_privacy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a457crloztMaIIPhRnZ7Hh/", "ui_privacy");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _panelMgr = require("panelMgr");
    var _baseUI = require("baseUI");
    var c = cc._decorator;
    var l = c.ccclass;
    var u = c.property;
    var p = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.btnService = null;
        e.btnPrivacy = null;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function() {
        var t = this.btnService.node;
        var e = this.btnPrivacy.node;
        t.active = e.active = !0;
        t.on(cc.Node.EventType.TOUCH_END, function() {
          return _panelMgr["default"].ins.open("ui/ui_info", {
            type: 1
          });
        }, this);
        e.on(cc.Node.EventType.TOUCH_END, function() {
          return _panelMgr["default"].ins.open("ui/ui_info", {
            type: 2
          });
        }, this);
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      __decorate([ u(cc.Label) ], e.prototype, "btnService", void 0);
      __decorate([ u(cc.Label) ], e.prototype, "btnPrivacy", void 0);
      return __decorate([ l ], e);
    }(_baseUI["default"]);
    exports["default"] = p;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    panelMgr: "panelMgr"
  } ],
  ui_quest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70d40ATM1ZE3biriQn1uJF2", "ui_quest");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _mySafeArea = require("mySafeArea");
    var _time = require("time");
    var _cfgMgr = require("cfgMgr");
    var _lang = require("lang");
    var _questItem = require("questItem");
    var _global = require("global");
    var _taskMgr = require("taskMgr");
    var _tipMgr = require("tipMgr");
    var _loading = require("loading");
    var _baseUI = require("baseUI");
    var m = cc._decorator;
    var v = m.ccclass;
    var _ = m.property;
    var b = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.content = null;
        e.questItem = null;
        e.tLable = null;
        e.btnspf = [];
        e.btnsp = [];
        e.scrollView = null;
        e.top = null;
        e.bgNode = null;
        e.topBgSp = null;
        e.topBgSp1 = null;
        e._taskTyp = _taskMgr.taskChannel.daily;
        e.questPool = new cc.NodePool(_questItem["default"]);
        e.lastScrollPosition = 0;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        var t = this;
        this.node.height = cc.winSize.height;
        this.taskTyp = _taskMgr.taskChannel.daily;
        this.tLable.font = _loading.DEFAULTFONT;
        _global["default"].padScale && (this.bgNode.scale = _global["default"].padScale);
        this.scrollView.node.on("scrolling", function() {
          t.pageScroll(!0);
        }, this);
        this.onResize();
      };
      e.prototype.start = function() {};
      e.prototype.loadItem = function(t, e, o) {
        var n = this.questItem;
        if (t < o.length) {
          var i = o[t];
          (a = this.questPool.get()) || (a = cc.instantiate(n));
          this.content.addChild(a);
          a.active = !1;
          a.zIndex = 0;
          a.getComponent(_questItem["default"]).init(e[i.key]);
          t++;
          this.scheduleOnce(this.loadItem.bind(this, t, e, o), 0);
        } else {
          this.content.children.sort(function(t, e) {
            var o = t.getComponent(_questItem["default"]).taskData.data.state;
            var n = e.getComponent(_questItem["default"]).taskData.data.state;
            return o == n ? 0 : o == _taskMgr.taskState.Finish ? -1 : n == _taskMgr.taskState.Finish ? 1 : o == _taskMgr.taskState.Rewared ? 1 : n == _taskMgr.taskState.Rewared ? -1 : void 0;
          });
          for (var r = 0; r < this.content.children.length; r++) {
            var a;
            (a = this.content.children[r]).active = !0;
            this.showChgAni || (a.opacity = 0, this.scheduleOnce(this.showChangegAni.bind(this, a), .1 * (r + 1)));
          }
          this.lastScrollPosition = 0;
          this.scheduleOnce(this.pageScroll.bind(this, !1), 0);
          this.showChgAni || (this.showChgAni = !0);
        }
      };
      e.prototype.initView = function() {
        var t = this;
        this.countTaskUpdTime();
        var e = _cfgMgr["default"].serverCfg[this._taskTyp];
        var o = _taskMgr["default"].getTaskByType(this._taskTyp);
        this.content.children.forEach(function(e) {
          t.despawnNode(e);
        });
        this.content.removeAllChildren();
        var n = null == e ? void 0 : e.rules;
        this.loadItem(0, o, n);
      };
      e.prototype.updTask = function() {
        this.initView();
      };
      e.prototype.countTaskUpdTime = function() {
        var t = _time["default"].ins.nextZeroTime / 1e3;
        this.tLable.string = _time["default"].getFormatHMS(t);
        t <= 0 && this.initView();
      };
      e.prototype.onEnable = function() {
        var t = this;
        _evts["default"].opE.on(this.onOperTap.bind(this));
        this.schedule(this.countTaskUpdTime, 1, cc.macro.REPEAT_FOREVER);
        this.initView();
        this.scheduleOnce(function() {
          t.top.y -= _mySafeArea.getSafeAreaRect().yMin;
        });
      };
      e.prototype.onDisable = function() {
        _evts["default"].opE.off(this.onOperTap.bind(this));
        this.unschedule(this.countTaskUpdTime);
      };
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].UPD_PANEL:
          this.updTask();
        }
      };
      e.prototype.pageSwitch = function(t, e) {
        this._taskTyp != e && (e != _taskMgr.taskChannel.achieve ? (this.taskTyp = e, this.initView()) : _tipMgr["default"].ins.showTip(_lang.lang[10004]));
      };
      Object.defineProperty(e.prototype, "taskTyp", {
        set: function set(t) {
          this._taskTyp = t;
          var e = t == _taskMgr.taskChannel.daily ? 0 : 1;
          this.btnsp[0].spriteFrame = this.btnspf[e];
          this.btnsp[1].spriteFrame = this.btnspf[1 ^ e];
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.despawnNode = function(t) {
        this.questPool.put(t);
      };
      e.prototype.onResize = function() {
        this.node.height = cc.winSize.height;
        var t = _mySafeArea.getSafeAreaRect().yMin;
        var e = cc.winSize.height - 1280 - t;
        this.scrollView.node.height += e;
        this.scrollView.content.height += e;
        this.scrollView.content.parent.height += e;
        this.topBgSp.height += e;
        this.topBgSp1.height += e;
      };
      e.prototype.pageScroll = function(t) {
        void 0 === t && (t = !0);
        var e = this.content.children;
        var o = this.scrollView.getScrollOffset().y;
        if (!(t && Math.abs(o - this.lastScrollPosition) < 1)) {
          for (var n = this.content.parent.height, i = 0; i < e.length; i++) {
            var r = e[i];
            var a = r.convertToWorldSpaceAR(cc.Vec2.ZERO);
            (a = this.content.parent.convertToNodeSpaceAR(a)).y + 110 < -n || a.y - 110 > 0 ? r.children[0].active = !1 : r.children[0].active = !0;
          }
          this.lastScrollPosition = o;
        }
      };
      e.prototype.showChangegAni = function(t) {
        cc.tween(t).to(.2, {
          opacity: 255
        }).start();
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      __decorate([ _(cc.Node) ], e.prototype, "content", void 0);
      __decorate([ _(cc.Prefab) ], e.prototype, "questItem", void 0);
      __decorate([ _(cc.Label) ], e.prototype, "tLable", void 0);
      __decorate([ _(cc.SpriteFrame) ], e.prototype, "btnspf", void 0);
      __decorate([ _(cc.Sprite) ], e.prototype, "btnsp", void 0);
      __decorate([ _(cc.ScrollView) ], e.prototype, "scrollView", void 0);
      __decorate([ _(cc.Node) ], e.prototype, "top", void 0);
      __decorate([ _(cc.Node) ], e.prototype, "bgNode", void 0);
      __decorate([ _(cc.Node) ], e.prototype, "topBgSp", void 0);
      __decorate([ _(cc.Node) ], e.prototype, "topBgSp1", void 0);
      return __decorate([ v ], e);
    }(_baseUI["default"]);
    exports["default"] = b;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    cfgMgr: "cfgMgr",
    evts: "evts",
    global: "global",
    lang: "lang",
    loading: "loading",
    mySafeArea: "mySafeArea",
    questItem: "questItem",
    taskMgr: "taskMgr",
    time: "time",
    tipMgr: "tipMgr"
  } ],
  ui_raceTip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62b5dz26olNypR9n2CUV7P8", "ui_raceTip");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _res = require("res");
    var _panelMgr = require("panelMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var _chaptBtn = require("chaptBtn");
    var p = cc._decorator;
    var d = p.ccclass;
    var h = p.property;
    var f = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.btnsNode = null;
        e.pageNodes = null;
        e.pageBaseTipSps = [];
        e.pageBaseScorll = null;
        e.pageBaseSlider = null;
        e.pageTutoTipSps = [];
        e.pageTutoScorll = null;
        e.pageTutoSlider = null;
        e.btnsComp = [];
        e.curPageIdx = 1;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        for (var t = this, e = function e(_e, n, i) {
          var r = n[_e].getComponent(_chaptBtn["default"]);
          r.setState(!1);
          i.push(r);
          n[_e].on("click", function() {
            t.chgViewData(_e);
          }, o);
        }, o = this, n = 0, i = this.btnsNode.children, r = this.btnsComp, s = i.length; n < s; n++) e(n, i, r);
        this.pageBaseSlider.y = 0;
        this.pageBaseScorll.scrollToTop();
        this.pageBaseScorll.node.on("scrolling", this.scrollCbBase.bind(this), this);
        var c = function c(e) {
          var o = e + 1;
          _res["default"].ins.getBundleByString("resSps").then(function(n) {
            n.load("raceTip/img_bz_bznr" + o, cc.SpriteFrame, function(o, n) {
              !o && t.node && t.node.isValid && (t.pageBaseTipSps[e].spriteFrame = n);
            });
          })["catch"](function(t) {
            console.error("RTool.ins.getBundleByString('resSps')", t);
          });
        };
        for (n = 0; n < 4; n++) c(n);
        this.pageTutoSlider.y = 0;
        this.pageTutoScorll.scrollToTop();
        this.pageTutoScorll.node.on("scrolling", this.scrollCbTuto.bind(this), this);
        var l = function l(e) {
          var o = e + 1;
          _res["default"].ins.getBundleByString("resSps").then(function(n) {
            n.load("raceTip/img_bz_jcjc" + o, cc.SpriteFrame, function(o, n) {
              !o && t.node && t.node.isValid && (t.pageTutoTipSps[e].spriteFrame = n);
            });
          })["catch"](function(t) {
            console.error("RTool.ins.getBundleByString('resSps')", t);
          });
        };
        for (n = 0; n < 3; n++) l(n);
        this.chgViewData(0);
      };
      e.prototype.init = function(t) {
        var e = t.pageIdx;
        var o = t.closeCb;
        this.closeCb = o;
        this.chgViewData(e);
      };
      e.prototype.chgViewData = function(t) {
        var e = this.curPageIdx;
        if (e != t) {
          this.pageNodes.children[0].active = !1;
          this.pageNodes.children[1].active = !1;
          this.pageNodes.children[2].active = !1;
          this.pageNodes.children[t].active = !0;
          var o = this.btnsComp;
          o[e].setState(!1);
          o[t].setState(!0);
          this.curPageIdx = t;
        }
      };
      e.prototype.scrollCbBase = function() {
        var t = this.pageBaseScorll.getMaxScrollOffset();
        var e = (this.pageBaseScorll.getContentPosition().y - 300) / t.y;
        e = (e = e > 1 ? 1 : e) < 0 ? 0 : e;
        this.pageBaseSlider.y = 556 * -e;
      };
      e.prototype.scrollCbTuto = function() {
        var t = this.pageTutoScorll.getMaxScrollOffset();
        var e = (this.pageTutoScorll.getContentPosition().y - 300) / t.y;
        e = (e = e > 1 ? 1 : e) < 0 ? 0 : e;
        this.pageTutoSlider.y = 556 * -e;
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.hide = function() {
        var e;
        null === (e = this.closeCb) || void 0 === e || e.call(this);
        return t.prototype.hide.call(this);
      };
      e.prototype.onBtnGuide = function() {
        _pInfo.chgScene(_pInfo.sceneType.guide);
      };
      e.prototype.onBtnTrain = function() {
        _pInfo.chgScene(_pInfo.sceneType.game, {
          gameType: _pInfo.gameType.practice
        });
      };
      e.prototype.onBtnContact = function() {
        _panelMgr["default"].ins.open("ui/ui_contentUs", null);
      };
      e.prototype.onDestroy = function() {
        _res["default"].ins.getBundleByString("resSps").then(function(t) {
          for (var e = 0; e < 4; e++) {
            var o = e + 1;
            cc.assetManager.releaseAsset(t.get("raceTip/img_bz_bznr" + o, cc.SpriteFrame));
          }
          for (e = 0; e < 3; e++) o = e + 1, cc.assetManager.releaseAsset(t.get("raceTip/img_bz_jcjc" + o, cc.SpriteFrame));
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
      };
      __decorate([ h(cc.Node) ], e.prototype, "btnsNode", void 0);
      __decorate([ h(cc.Node) ], e.prototype, "pageNodes", void 0);
      __decorate([ h([ cc.Sprite ]) ], e.prototype, "pageBaseTipSps", void 0);
      __decorate([ h(cc.ScrollView) ], e.prototype, "pageBaseScorll", void 0);
      __decorate([ h(cc.Node) ], e.prototype, "pageBaseSlider", void 0);
      __decorate([ h([ cc.Sprite ]) ], e.prototype, "pageTutoTipSps", void 0);
      __decorate([ h(cc.ScrollView) ], e.prototype, "pageTutoScorll", void 0);
      __decorate([ h(cc.Node) ], e.prototype, "pageTutoSlider", void 0);
      return __decorate([ d ], e);
    }(_baseUI["default"]);
    exports["default"] = f;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    chaptBtn: "chaptBtn",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    res: "res"
  } ],
  ui_rank: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26842+g3mFAKqs5eUSbH3PX", "ui_rank");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a;
    var s;
    var _idx = require("idx");
    var _mySafeArea = require("mySafeArea");
    var _request = require("request");
    var _res = require("res");
    var _time = require("time");
    var _uData = require("uData");
    var _lang = require("lang");
    var _global = require("global");
    var _rankMgr = require("rankMgr");
    var _tipMgr = require("tipMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var _rankItem = require("rankItem");
    var w = cc._decorator;
    var S = w.ccclass;
    var T = w.property;
    (function(t) {
      t[t.mian = 0] = "mian", t[t.daily = 1] = "daily", t[t.race = 2] = "race";
    })(a || (a = {}));
    (function(t) {
      t[t.score = 0] = "score";
      t[t.win = 1] = "win";
    })(s || (s = {}));
    var I = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.scrollView = null;
        e.dataTagBtnsSps = [];
        e.levelTagBtnsSps = [];
        e.dayTypeBtnsSps = [];
        e.viewItem = null;
        e.rankTop = [];
        e.myRank = null;
        e.topNode = null;
        e.loadingNode = null;
        e.closeNode = null;
        e.bgSpr = null;
        e.type = _rankMgr.rankType.Total;
        e.tag = _rankMgr.rankTag.mainScore;
        e.levelTag = a.mian;
        e.dataTag = s.score;
        e.last_view_inner_y = -1;
        e.THEME_H = 122;
        e.top_offest = 61;
        e.itemCount = 0;
        e.items = [];
        e.rankData = [];
        e.playAni = !0;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        if (this.node.height = cc.winSize.height, _global["default"].padScale) {
          this.bgSpr.node.scale = _global["default"].padScale;
          var t = (cc.view.getVisibleSize().width - 720) / 2;
          this.closeNode.x -= t;
        }
        var e = this.node.height - 1280;
        this.scrollView.node.height += e;
        this.scrollView.node.getChildByName("view").height += e;
        this.scrollView.vertical = !1;
        var o = _time["default"].ins.serverTime || Math.floor(new Date().getTime() / 1e3);
        if (o - _pInfo["default"].ins.getRankLastTimeData() >= 3600) {
          _pInfo["default"].ins.setRankLastTimeData(o);
          var n = _idx.platform.getUserInfo();
          var i = this.myRank.getComponent(_rankItem["default"]);
          n ? n.then(function(t) {
            _request["default"].ins.updateUserInfo(t);
            i.setHeadSp(_uData["default"].ins.getHeadImg());
          }, function() {
            i.setDefaultHead();
          }) : i.setDefaultHead();
        }
      };
      e.prototype.start = function() {
        var t = this;
        this.scheduleOnce(function() {
          var e = _mySafeArea.getSafeAreaRect().yMin;
          t.topNode.y -= e;
          t.scrollView.node.y -= e / 2;
          t.scrollView.node.getChildByName("view").height -= e;
          t.scrollView.content.y -= e / 2;
          t.scrollView.node.on("scrolling", function() {
            t.RefreshThemesVisible();
          }, t);
          t.loadingNode.position = t.scrollView.node.position;
          t.initData();
          _rankMgr["default"].ins.uploadRankData();
        });
      };
      e.prototype.initData = function() {
        this.refreshData();
      };
      e.prototype.refreshData = function() {
        this.levelTag === a.mian ? this.dataTag === s.score ? this.tag = _rankMgr.rankTag.mainScore : this.tag = _rankMgr.rankTag.mainWin : this.levelTag === a.daily && (this.dataTag === s.score ? this.tag = _rankMgr.rankTag.dailyScore : this.tag = _rankMgr.rankTag.dailyWin);
        this.getRankdata();
      };
      e.prototype.getRankdata = function() {
        var t = this;
        _rankMgr["default"].ins.getRankDataByType(this.tag, this.type).then(function(e) {
          t.dealData(e.data);
        }, function() {
          t.dealData([]);
        });
      };
      e.prototype.dealData = function(t) {
        this.node && (this.loadingNode.active = !1);
        var e = !1;
        var o = [];
        var n = _rankMgr["default"].ins.getMyRankDataByTag(this.tag, this.type) || 0;
        if (t) for (var i in o = o.concat(t)) if ((r = o[i]).game_uid == _uData["default"].ins.getUid()) {
          r.nickname = _uData["default"].ins.getName();
          r.sort_value = n;
          r.game_uid = _uData["default"].ins.getUid();
          r.avatar = _uData["default"].ins.getHeadImg();
          e = !0;
          break;
        }
        if (!e) {
          var r = {
            nickname: _uData["default"].ins.getName(),
            sort_value: n,
            game_uid: _uData["default"].ins.getUid(),
            avatar: _uData["default"].ins.getHeadImg()
          };
          o.push(r);
        }
        o.sort(function(t, e) {
          return e.sort_value - t.sort_value;
        });
        this.rankData = o;
        this.refreshPanel();
      };
      e.prototype.refreshPanel = function() {
        this.setMySelf();
        this.itemCount = 97;
        var t = this.THEME_H * this.itemCount + this.top_offest;
        this.scrollView.content.setContentSize(cc.size(cc.winSize.width, t));
        this.last_view_inner_y = -1;
        this.scrollView.stopAutoScroll();
        this.scrollView.scrollToTop();
        for (var e = 0; e < 3; e++) {
          var o = this.rankData[e];
          var n = this.rankTop[e];
          this.setRankTop(n, o);
        }
        this.RefreshThemesVisible();
      };
      e.prototype.RefreshThemesVisible = function(t) {
        var e = this;
        void 0 === t && (t = 0);
        var o = this.scrollView.getContentPosition();
        if (!(Math.abs(this.last_view_inner_y - o.y) < .01)) {
          this.last_view_inner_y = o.y;
          for (var n, i, r, a, s, c, l = function l() {
            n = -d * u.THEME_H - u.top_offest;
            i = u.scrollView.content.convertToWorldSpaceAR(cc.v2(0, n));
            r = u.node.convertToNodeSpaceAR(i);
            a = r.y < -p || r.y + u.THEME_H > p;
            s = d;
            var t = d + 3;
            var o = u.rankData[t];
            if (a) u.items[s] && (u.items[s].active = !1); else if (u.items[s]) {
              u.setItemInfo(u.items[s], t, o);
              var l = u.playAni;
              if (l) return u.items[s].x = 0, u.items[s].opacity = 0, u.scheduleOnce(function() {
                e.items[s].active = !0;
                e.last_view_inner_y = -1;
                e.RefreshThemesVisible(d + 1);
                l && e.showChgAni(e.items[s]);
              }, .06), "break";
              u.items[s].x = 0;
              u.items[s].opacity = 255;
              u.items[s].active = !0;
            } else {
              (c = cc.instantiate(u.viewItem)).active = !0;
              c.position = cc.v3(0, -d * u.THEME_H - u.top_offest);
              c.parent = u.scrollView.content;
              u.items[s] = c;
              u.setItemInfo(c, t, o);
              var h = u.playAni;
              if (h) return c.x = (cc.winSize.width + u.items[s].width) / 2, c.opacity = 255, 
              u.scheduleOnce(function() {
                e.last_view_inner_y = -1;
                e.RefreshThemesVisible(d + 1);
                h && e.showLoadAni(c);
              }, .02), "break";
              c.opacity = 255;
              c.x = 0;
            }
            u.playAni = !1;
            d === u.itemCount - 1 && u.scheduleOnce(function() {
              e.scrollView.vertical = !0;
            }, .5);
          }, u = this, p = this.scrollView.node.height / 4 * 3, d = t; d < this.itemCount && "break" !== l(); d++) ;
        }
      };
      e.prototype.setRankTop = function(t, e) {
        var o = t.getComponent(_rankItem["default"]);
        e ? (o.setRankData(e), o.setGameUid(e.game_uid), o.setScore(e.sort_value), e.game_uid == _uData["default"].ins.getUid() ? (o.setSkin(_pInfo["default"].ins.getUsingSkin(), !1, !0), 
        o.setNickName(_uData["default"].ins.getName()), o.setHeadSp(_uData["default"].ins.getHeadImg())) : (o.setSkin(null == e ? void 0 : e.uSkin, !1, !0), 
        o.setNickName(e.nickname), e.avatar ? o.setHeadSp(e.avatar) : o.setDefaultHead())) : (o.setNickName("\u6682\u65e0"), 
        o.setScore("0"), o.setDefaultHead());
      };
      e.prototype.setItemInfo = function(t, e, o, n) {
        void 0 === n && (n = !1);
        var i = t.getComponent(_rankItem["default"]);
        i.setIdx(Number(e) + 1 + "");
        o ? (i.setRankData(o), i.setGameUid(o.game_uid), i.setScore(o.sort_value), o.game_uid == _uData["default"].ins.getUid() ? (i.setSkin(_pInfo["default"].ins.getUsingSkin(), n), 
        i.setNickName(_uData["default"].ins.getName()), i.setHeadSp(_uData["default"].ins.getHeadImg())) : (i.setSkin(null == o ? void 0 : o.uSkin), 
        i.setNickName(o.nickname), o.avatar ? i.setHeadSp(o.avatar) : i.setDefaultHead())) : (i.setNickName("\u6682\u65e0"), 
        i.setScore("0"), i.setDefaultHead());
      };
      e.prototype.setMySelf = function() {
        var t = this.rankData;
        for (var e in t) {
          var o = t[e];
          if (o.game_uid == _uData["default"].ins.getUid() && Number(e) < 100) return void this.setItemInfo(this.myRank, e, o, !0);
        }
        var n = _rankMgr["default"].ins.getMyRankDataByTag(this.tag, this.type);
        var i = this.myRank.getComponent(_rankItem["default"]);
        i.setSkin(_pInfo["default"].ins.getUsingSkin(), !0);
        i.setGameUid(_uData["default"].ins.getUid().toString());
        i.setIdx("99+");
        i.setNickName(_uData["default"].ins.getName());
        i.setScore(n + "");
        _uData["default"].ins.getHeadImg() ? i.setHeadSp(_uData["default"].ins.getHeadImg()) : i.setDefaultHead();
      };
      e.prototype.setHeadOnLine = function(t, e) {
        var o = this;
        cc.assetManager.loadRemote(e, function(e, n) {
          !e && o.node && o.node.isValid && (t.spriteFrame = new cc.SpriteFrame(n));
        });
      };
      e.prototype.setDefaultHead = function(t) {
        var e = this;
        _res["default"].ins.getBundleByString("resSps").then(function(o) {
          o.load("common/head_1", cc.SpriteFrame, function(o, n) {
            !o && e.node && e.node.isValid && (t.spriteFrame = n);
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
      };
      e.prototype.showLoadAni = function(t) {
        cc.tween(t).to(.5, {
          x: 0
        }, {
          easing: "backInOut"
        }).start();
      };
      e.prototype.showChgAni = function(t) {
        cc.tween(t).to(.5, {
          opacity: 255
        }).start();
      };
      e.prototype.onBtnChgDayType = function() {
        this.initAni();
        this.type == _rankMgr.rankType.Total ? (this.type = _rankMgr.rankType.Today, this.refreshData(), 
        this.dayTypeBtnsSps[0].active = !1, this.dayTypeBtnsSps[1].active = !0) : this.type == _rankMgr.rankType.Today && (this.type = _rankMgr.rankType.Total, 
        this.refreshData(), this.dayTypeBtnsSps[0].active = !0, this.dayTypeBtnsSps[1].active = !1);
      };
      e.prototype.onBtnMain = function() {
        this.levelTag !== a.mian && (this.initAni(), this.levelTag = a.mian, this.refreshData(), 
        this.chgLevelTagBtns(!0));
      };
      e.prototype.onBtnDaily = function() {
        _tipMgr["default"].ins.showTip(_lang.lang[10004]);
      };
      e.prototype.chgLevelTagBtns = function(t) {
        this.levelTagBtnsSps[0].active = t;
        this.levelTagBtnsSps[1].active = !t;
        this.levelTagBtnsSps[2].active = !t;
        this.levelTagBtnsSps[3].active = t;
      };
      e.prototype.onBtnChgDataType = function() {
        this.initAni();
        this.dataTag == s.score ? (this.dataTag = s.win, this.refreshData(), this.dataTagBtnsSps[0].active = !1, 
        this.dataTagBtnsSps[1].active = !0) : this.dataTag == s.win && (this.dataTag = s.score, 
        this.refreshData(), this.dataTagBtnsSps[0].active = !0, this.dataTagBtnsSps[1].active = !1);
      };
      e.prototype.initAni = function() {
        this.unscheduleAllCallbacks();
        for (var t = 0, e = this.items.length; t < e; t++) {
          var o = this.items[t];
          cc.Tween.stopAllByTarget(o);
          o && (o.opacity = 0);
        }
        this.scrollView.stopAutoScroll();
        this.scrollView.scrollToTop();
        this.scrollView.vertical = !1;
        this.playAni = !0;
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.onDestroy = function() {
        cc.assetManager.releaseAsset(this.bgSpr.spriteFrame);
      };
      __decorate([ T(cc.ScrollView) ], e.prototype, "scrollView", void 0);
      __decorate([ T([ cc.Node ]) ], e.prototype, "dataTagBtnsSps", void 0);
      __decorate([ T([ cc.Node ]) ], e.prototype, "levelTagBtnsSps", void 0);
      __decorate([ T([ cc.Node ]) ], e.prototype, "dayTypeBtnsSps", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "viewItem", void 0);
      __decorate([ T([ cc.Node ]) ], e.prototype, "rankTop", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "myRank", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "topNode", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "loadingNode", void 0);
      __decorate([ T(cc.Node) ], e.prototype, "closeNode", void 0);
      __decorate([ T(cc.Sprite) ], e.prototype, "bgSpr", void 0);
      return __decorate([ S ], e);
    }(_baseUI["default"]);
    exports["default"] = I;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    global: "global",
    idx: "idx",
    lang: "lang",
    mySafeArea: "mySafeArea",
    pInfo: "pInfo",
    rankItem: "rankItem",
    rankMgr: "rankMgr",
    request: "request",
    res: "res",
    time: "time",
    tipMgr: "tipMgr",
    uData: "uData"
  } ],
  ui_rePlayRace: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c4091qoo9VDMa2r6HVCvPb+", "ui_rePlayRace");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _uData = require("uData");
    var _lang = require("lang");
    var _rankMgr = require("rankMgr");
    var _raceRankItem = require("raceRankItem");
    var _ui_rePlay = require("ui_rePlay");
    var h = cc._decorator;
    var f = h.ccclass;
    var g = h.property;
    var y = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.scrollRank = null;
        e.selfRank = null;
        e.idxIconArr = [];
        e.rankLb = null;
        e.rankItem = null;
        e.rankLength = 10;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        t.prototype.onLoad.call(this);
        this.rankLb.string = _lang.lang[40003];
        this.rankItem = this.scrollRank.content.children[0];
      };
      e.prototype.init = function(e) {
        var o = e.curScore;
        var n = e.continueCb;
        return __awaiter(this, void 0, void 0, function() {
          var e;
          var i;
          var r;
          var a;
          var l;
          var d;
          var h;
          var f;
          var g;
          var y;
          var m;
          var v;
          var _;
          var b;
          var w = this;
          return __generator(this, function(s) {
            switch (s.label) {
             case 0:
              return t.prototype.init.call(this, {
                curScore: o,
                continueCb: n
              }), [ 4, _rankMgr["default"].ins.getYdayRaceData() ];

             case 1:
              for (e = s.sent(), i = [], e.data && (i = [].concat(e.data)), r = this.rankLength - 1, 
              a = this.getRandomScoreArr(), l = [], d = _uData["default"].ins, h = {
                nick: d.getName(),
                score: o,
                idx: "",
                headUrl: d.getHeadImg()
              }, i.sort(function() {
                return Math.random() - .5;
              }), f = 0, g = 0; g < i.length && !(g >= r); g++) y = i[g], m = d.getUid(), y.game_uid != m && (f++, 
              l.push({
                nick: y.nickname,
                score: a[g].toString(),
                idx: "",
                headUrl: y.avatar
              }));
              if (l.length < r) for (v = r - l.length, _ = 0; _ < v; _++) b = "\u5377\u5377\u5927\u738b" + this.getRandString(), 
              l.push({
                nick: b,
                score: a[f + _].toString(),
                idx: "",
                headUrl: ""
              });
              return l.push(h), l.sort(function(t, e) {
                return parseInt(e.score) - parseInt(t.score);
              }), l.forEach(function(t, e) {
                t.idx = (e + 1).toString();
                var o = null;
                w.scrollRank.content.childrenCount > e ? o = w.scrollRank.content.children[e] : (o = cc.instantiate(w.rankItem), 
                w.scrollRank.content.addChild(o));
                o.x = (cc.winSize.width + o.width) / 2;
                w.scheduleOnce(function() {
                  w.showLoadAni(o);
                }, .05 * e);
                o.getComponent(_raceRankItem["default"]).initItem(t, w.idxIconArr[e]);
              }), this.selfRank.getComponent(_raceRankItem["default"]).initItem(h, this.idxIconArr[h.idx]), 
              [ 2 ];
            }
          });
        });
      };
      e.prototype.showLoadAni = function(t) {
        cc.tween(t).to(.5, {
          x: 0
        }, {
          easing: "backInOut"
        }).start();
      };
      e.prototype.getRandomScoreArr = function() {
        for (var t = [], e = this.rankLength - 1, o = 0; o < e; o++) {
          var n = void 0;
          var i = void 0;
          o < 7 ? (n = 100 * (7 - o), i = 100 * (8 - o)) : o >= 7 && o <= 8 && (n = -20 * (o - 8), 
          i = -80 * o + 660);
          var r = Math.floor(Math.random() * (i - n)) + n;
          t.push(r);
        }
        return t;
      };
      e.prototype.getRandString = function() {
        for (var t = [], e = 0; e < 4; e++) {
          var o;
          var n = Math.floor(3 * Math.random());
          o = 0 === n ? Math.floor(26 * Math.random()) + 65 : 1 === n ? Math.floor(26 * Math.random()) + 97 : Math.floor(10 * Math.random()) + 48;
          t.push(o);
        }
        return String.fromCharCode.apply(String, t);
      };
      __decorate([ g(cc.ScrollView) ], e.prototype, "scrollRank", void 0);
      __decorate([ g(_raceRankItem["default"]) ], e.prototype, "selfRank", void 0);
      __decorate([ g([ cc.SpriteFrame ]) ], e.prototype, "idxIconArr", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "rankLb", void 0);
      return __decorate([ f ], e);
    }(_ui_rePlay["default"]);
    exports["default"] = y;
    cc._RF.pop();
  }, {
    lang: "lang",
    raceRankItem: "raceRankItem",
    rankMgr: "rankMgr",
    uData: "uData",
    ui_rePlay: "ui_rePlay"
  } ],
  ui_rePlay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24caeZaNyxM8KAZRT3lrCcp", "ui_rePlay");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _idx = require("idx");
    var _res = require("res");
    var _cfgMgr = require("cfgMgr");
    var _global = require("global");
    var _bagMgr = require("bagMgr");
    var _festivalMgr = require("festivalMgr");
    var _levelMgr = require("levelMgr");
    var _panelMgr = require("panelMgr");
    var _pInfo = require("pInfo");
    var _game = require("game");
    var _baseUI = require("baseUI");
    var v = cc._decorator;
    var _ = v.ccclass;
    var b = v.property;
    var w = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.endTitleNode = null;
        e.pauseTitleNode = null;
        e.shareBtn = null;
        e.shareIcon = null;
        e.shareCount = null;
        e.curLb = null;
        e.preLb = null;
        e.curScoreLbl = null;
        e.preBestScore = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        _evts["default"].opE.on(this.onOperTap.bind(this));
      };
      e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e) switch (e) {
         case _evts["default"].SHOWVIDEOSHARE:
          _game["default"].type != _pInfo.gameType.practice && this.shareBtn && (this.shareBtn.active = !0);
        }
      };
      e.prototype.init = function(t) {
        var e = t.curScore;
        var o = t.continueCb;
        this.continueCb = o;
        var n = this.endTitleNode.active = !o;
        this.pauseTitleNode.active = !!o;
        n && _idx.platform.stopVideoRecord();
        var i = _game["default"].type;
        var r = _pInfo["default"].ins;
        var a = this.shareIcon;
        var u = this.shareCount;
        var p = _cfgMgr["default"].serverCfg.share_rules.rules;
        var d = p.main_line.val;
        var f = p.main_line.props;
        this.curScore = e;
        _levelMgr["default"].ins.getLevelCost();
        var m = "\u5f53\u524d\u8fde\u80dc:";
        var v = "\u6700\u9ad8\u8fde\u80dc:";
        var _ = r.getConsWinTimes();
        var b = r.getRecordData().main.heWins || 0;
        i == _pInfo.gameType.race && (m = "\u5f53\u524d\u79ef\u5206:", v = "\u6700\u9ad8\u79ef\u5206:", 
        _ = e, b = r.getRecordData().race.hePoints || 0, d = p.qw_line.val, f = p.qw_line.props);
        this.curLb.string = m;
        this.preLb.string = v;
        this.curScoreLbl.string = _ + "";
        this.preBestScore.string = b + "";
        _res["default"].ins.getBundleByString("resSps").then(function(t) {
          a.spriteFrame = t.get("item/" + f, cc.SpriteFrame);
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
        u.string = "+" + d;
        a.node.active = (i == _pInfo.gameType.race ? r.getRaceShareTime() : r.getNormalShareTime()) < 3;
      };
      e.prototype.getPower = function(t) {
        _pInfo["default"].ins.addPower(t);
      };
      e.prototype.onContinue = function() {
        var t;
        this.hide();
        null === (t = this.continueCb) || void 0 === t || t.call(this);
      };
      e.prototype.onClose = function() {
        this.continueCb ? this.onContinue() : this.hideThis();
      };
      e.prototype.onShare = function() {
        var t = this;
        _idx.platform.shareVideoRecord().then(function(e) {
          var o = t.shareIcon;
          if (1 == e && o && o.isValid && o.node.active) {
            var n = _game["default"].type == _pInfo.gameType.race;
            var i = _pInfo["default"].ins;
            var r = void 0;
            var a = void 0;
            var s = void 0;
            var c = _cfgMgr["default"].serverCfg.share_rules.rules;
            if (n) {
              s = c.qw_line.val;
              a = c.qw_line.props;
              var u = i.getRaceShareTime();
              i.setRaceShareTime(u + 1);
            } else s = c.main_line.val, a = c.main_line.props, u = i.getNormalShareTime(), i.setNormalShareTime(u + 1);
            switch (a) {
             case "coin":
              r = i.getCoin(), i.addCoin(s);
              break;

             case "times":
              i.addPower(s);
              break;

             default:
              _bagMgr["default"].ins.addItem(a, s);
            }
            var d = t.shareIcon.node.parent.convertToWorldSpaceAR(t.shareIcon.node.position);
            _panelMgr["default"].ins.open("ui/ui_flyAni", {
              itemDatas: [ {
                itemId: a,
                worldPos: d,
                value: s
              } ],
              showCoin: r
            });
            t.shareBtn.active = !1;
          }
        })["catch"](function() {
          console.error("shareErr");
        });
      };
      e.prototype.onBtnGuide = function() {
        _pInfo.chgScene(_pInfo.sceneType.guide);
      };
      e.prototype.onBtnTrain = function() {
        _pInfo.chgScene(_pInfo.sceneType.game, {
          gameType: _pInfo.gameType.practice
        });
      };
      e.prototype.hideThis = function() {
        var t = _game["default"].type;
        t == _pInfo.gameType.race ? (_global["default"].loadToRace = 4, _festivalMgr["default"].ins.updPro(_festivalMgr.fesTaskKey.raceScore, this.curScore)) : t == _pInfo.gameType.challenge && (_global["default"].loadToRace = 3);
        t != _pInfo.gameType.practice ? (_pInfo["default"].ins.recordGameResult(_game["default"].type, !1, this.curScore), 
        _pInfo.chgScene(_pInfo.sceneType.main, {
          cb: void 0
        })) : _pInfo.chgScene(_pInfo.sceneType.main);
      };
      __decorate([ b(cc.Node) ], e.prototype, "endTitleNode", void 0);
      __decorate([ b(cc.Node) ], e.prototype, "pauseTitleNode", void 0);
      __decorate([ b(cc.Node) ], e.prototype, "shareBtn", void 0);
      __decorate([ b(cc.Sprite) ], e.prototype, "shareIcon", void 0);
      __decorate([ b(cc.Label) ], e.prototype, "shareCount", void 0);
      __decorate([ b(cc.Label) ], e.prototype, "curLb", void 0);
      __decorate([ b(cc.Label) ], e.prototype, "preLb", void 0);
      __decorate([ b(cc.Label) ], e.prototype, "curScoreLbl", void 0);
      __decorate([ b(cc.Label) ], e.prototype, "preBestScore", void 0);
      return __decorate([ _ ], e);
    }(_baseUI["default"]);
    exports["default"] = w;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    baseUI: "baseUI",
    cfgMgr: "cfgMgr",
    evts: "evts",
    festivalMgr: "festivalMgr",
    game: "game",
    global: "global",
    idx: "idx",
    levelMgr: "levelMgr",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    res: "res"
  } ],
  ui_record: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5877d5aWgxD8Ls2f4nI5Jen", "ui_record");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _baseUI = require("baseUI");
    var _pInfo = require("pInfo");
    var _chaptBtn = require("chaptBtn");
    var l = cc._decorator;
    var u = l.ccclass;
    var p = l.property;
    var d = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.view = null;
        e.viewItem = null;
        e.btnsNode = null;
        e.nameStrs = {
          main: {
            gTimes: "\u6e38\u620f\u6b21\u6570",
            wTimes: "\u80dc\u5229\u6b21\u6570",
            heWins: "\u6700\u9ad8\u8fde\u80dc",
            winRate: "\u80dc\u7387"
          },
          daily: {
            gTimes: "\u6e38\u620f\u6b21\u6570",
            wTimes: "\u80dc\u5229\u6b21\u6570",
            winRate: "\u80dc\u7387"
          },
          race: {
            gTimes: "\u6e38\u620f\u6b21\u6570",
            tPoints: "\u603b\u79ef\u5206",
            hePoints: "\u6700\u9ad8\u79ef\u5206"
          }
        };
        e.allData = {};
        e.btnsComp = [];
        e.rowSpace = 108;
        e.top_offest = 50;
        e.curPageIdx = 1;
        return e;
      }
      __extends(e, t);
      e.prototype.start = function() {
        for (var t = this, e = _pInfo["default"].ins.getRecordData(), o = function o(e, _o, i) {
          var r = _o[e].getComponent(_chaptBtn["default"]);
          r.setState(!1);
          i.push(r);
          _o[e].on("click", function() {
            t.chgViewData(e);
          }, n);
        }, n = this, i = 0, r = this.btnsNode.children, a = this.btnsComp, l = r.length; i < l; i++) o(i, r, a);
        this.allData = Object.assign({}, e);
        this.chgViewData(0);
      };
      e.prototype.chgViewData = function(t) {
        var e = this.curPageIdx;
        if (e != t) {
          var o;
          var n = {};
          var i = {};
          switch (t) {
           case 0:
            n = this.allData.main, i = this.nameStrs.main, o = n.wTimes / n.gTimes * 100 || 0, 
            n.winRate = o.toFixed(0) + "%";
            break;

           case 1:
            n = this.allData.daily, i = this.nameStrs.daily, o = n.wTimes / n.gTimes * 100 || 0, 
            n.winRate = o.toFixed(0) + "%";
            break;

           case 2:
            n = this.allData.race, i = this.nameStrs.race;
          }
          this.initListView(n, i);
          var r = this.btnsComp;
          r[e].setState(!1);
          r[t].setState(!0);
          this.curPageIdx = t;
        }
      };
      e.prototype.initListView = function(t, e) {
        for (var o = 0, n = this.view.content.childrenCount; o < n; o++) this.view.content.children[o].active = !1;
        var i = 0;
        for (var r in e) {
          var a;
          var s = e[r];
          var c = t[r] || 0;
          "feTime" == r && (c = this.timeFormat(c));
          this.view.content.childrenCount > i ? ((a = this.view.content.children[i]).active = !0, 
          a.getChildByName("name").getComponent(cc.Label).string = s, a.getChildByName("num").getComponent(cc.Label).string = c) : ((a = cc.instantiate(this.viewItem)).parent = this.view.content, 
          a.y = -i * this.rowSpace - this.top_offest, a.active = !0, a.getChildByName("name").getComponent(cc.Label).string = s, 
          a.getChildByName("num").getComponent(cc.Label).string = c);
          i++;
        }
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.timeFormat = function(t, e) {
        void 0 === e && (e = !0);
        var o = this.PrefixInteger;
        if (t < 86400) {
          var n = o(Math.floor(t / 3600), 2);
          var i = o(Math.floor(t % 3600 / 60), 2);
          var r = o(t % 60, 2);
          return e && "00" == n ? i + ":" + r : n + ":" + i + ":" + r;
        }
        return Math.floor(t / 86400) + "d " + o(Math.floor(t % 86400 / 3600), 2) + ":" + o(Math.floor(t % 3600 / 60), 2) + ":" + o(t % 60, 2);
      };
      e.prototype.PrefixInteger = function(t, e) {
        return (t / Math.pow(10, e)).toFixed(e).substring(2);
      };
      __decorate([ p(cc.ScrollView) ], e.prototype, "view", void 0);
      __decorate([ p(cc.Node) ], e.prototype, "viewItem", void 0);
      __decorate([ p(cc.Node) ], e.prototype, "btnsNode", void 0);
      return __decorate([ u ], e);
    }(_baseUI["default"]);
    exports["default"] = d;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    chaptBtn: "chaptBtn",
    pInfo: "pInfo"
  } ],
  ui_reiGift: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a9f1ncodlJC6kx1e5N1SaD", "ui_reiGift");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _cfgMgr = require("cfgMgr");
    var _item = require("item");
    var _bagMgr = require("bagMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var p = cc._decorator;
    var d = p.ccclass;
    var h = p.property;
    var f = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.itemSc = null;
        e.itemPre = null;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t) {
        var e;
        var o;
        var n;
        var i;
        var r;
        var u;
        var p = t.serPacks;
        var d = {};
        var h = {};
        var f = null === (o = null === (e = _cfgMgr["default"].serverCfg) || void 0 === e ? void 0 : e.shop_config) || void 0 === o ? void 0 : o.gift;
        var g = {};
        if (f) for (var y in f) {
          var m = f[y];
          g[m.key] = m;
          d[m.key] = m;
        }
        var v = null === (i = null === (n = _cfgMgr["default"].serverCfg) || void 0 === n ? void 0 : n.buy_stamina) || void 0 === i ? void 0 : i.stamina;
        if (v) for (var y in v) (b = v[y]) && (g[b.key] = b, h[b.key] = b);
        var _ = null === (u = null === (r = _cfgMgr["default"].serverCfg) || void 0 === r ? void 0 : r.buy_gold_coins) || void 0 === u ? void 0 : u.gold_coins;
        if (_) for (var y in _) {
          var b;
          (b = _[y]) && (g[b.key] = b, h[b.key] = b);
        }
        this.itemSc.node.width = 530;
        for (var w = 0, S = p.length; w < S; w++) {
          var T = p[w];
          if (T) {
            var I = g[null == T ? void 0 : T.gift_id];
            var D = d[null == T ? void 0 : T.gift_id];
            var P = h[null == T ? void 0 : T.gift_id];
            if (D && _pInfo["default"].ins.addShopRecord(null == T ? void 0 : T.gift_id), P && _pInfo["default"].ins.addShopUnreset(null == T ? void 0 : T.gift_id), 
            I && I.props) for (var k = 0; k < T.gift_num; k++) for (var y in I.props) {
              var R = I.props[y];
              T.is_double && (R *= 2);
              _bagMgr["default"].ins.addItem(y, R);
              var N = cc.instantiate(this.itemPre);
              N.active = !0;
              this.itemSc.content.addChild(N);
              N.getComponent(_item["default"]).initByData(y, R);
            }
          }
        }
        var C = this.itemSc.content.children[0].width * this.itemSc.content.childrenCount;
        this.itemSc.node.x = C > this.itemSc.node.width ? -262 : (this.itemSc.node.width - C) / 2 - 262;
        C = Math.min(C, 530);
        this.itemSc.node.width = C;
        this.itemSc.scrollToLeft();
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      __decorate([ h(cc.ScrollView) ], e.prototype, "itemSc", void 0);
      __decorate([ h(cc.Node) ], e.prototype, "itemPre", void 0);
      return __decorate([ d ], e);
    }(_baseUI["default"]);
    exports["default"] = f;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    baseUI: "baseUI",
    cfgMgr: "cfgMgr",
    item: "item",
    pInfo: "pInfo"
  } ],
  ui_saveConfirm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d358aGT1ddJ576hGkYJRnVO", "ui_saveConfirm");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _time = require("time");
    var _uData = require("uData");
    var _baseUI = require("baseUI");
    var l = cc._decorator;
    var u = l.ccclass;
    var p = l.property;
    var d = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.timeLb = null;
        e.lvL = null;
        e.coinNumL = null;
        e.powerL = null;
        e.item1L = null;
        e.item2L = null;
        e.item3L = null;
        e.lvR = null;
        e.coinNumR = null;
        e.powerR = null;
        e.item1R = null;
        e.item2R = null;
        e.item3R = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {};
      e.prototype.init = function(t) {
        var e;
        var o;
        var n;
        var i;
        var r;
        var c;
        var l = t.cData;
        this.timeLb.string = _time["default"].ins.formatDate(l.update_at);
        var u = this.chooseData = JSON.parse(l.user_data);
        var p = _uData["default"].ins.getLocalData();
        u && (this.lvL.string = (null == u ? void 0 : u.puzzleLvl) || 0, this.coinNumL.string = (null == u ? void 0 : u.coin) || 0, 
        this.powerL.string = (null == u ? void 0 : u.power) || 0, this.item1L.string = (null === (e = null == u ? void 0 : u.bag) || void 0 === e ? void 0 : e.random_notice) || 0, 
        this.item2L.string = (null === (o = null == u ? void 0 : u.bag) || void 0 === o ? void 0 : o.full_row_col) || 0, 
        this.item3L.string = (null === (n = null == u ? void 0 : u.bag) || void 0 === n ? void 0 : n.notice) || 0);
        p && (this.lvR.string = (null == p ? void 0 : p.puzzleLvl) || 0, this.coinNumR.string = (null == p ? void 0 : p.coin) || 0, 
        this.powerR.string = (null == p ? void 0 : p.power) || 0, this.item1R.string = (null === (i = null == p ? void 0 : p.bag) || void 0 === i ? void 0 : i.random_notice) || 0, 
        this.item2R.string = (null === (r = null == p ? void 0 : p.bag) || void 0 === r ? void 0 : r.full_row_col) || 0, 
        this.item3R.string = (null === (c = null == p ? void 0 : p.bag) || void 0 === c ? void 0 : c.notice) || 0);
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.onBtnRestore = function() {
        this.chooseData && _uData["default"].ins.restoreData(this.chooseData);
      };
      __decorate([ p(cc.Label) ], e.prototype, "timeLb", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "lvL", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "coinNumL", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "powerL", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "item1L", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "item2L", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "item3L", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "lvR", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "coinNumR", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "powerR", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "item1R", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "item2R", void 0);
      __decorate([ p(cc.Label) ], e.prototype, "item3R", void 0);
      return __decorate([ u ], e);
    }(_baseUI["default"]);
    exports["default"] = d;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    time: "time",
    uData: "uData"
  } ],
  ui_saveRestore: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c546+ldmlAJ73ZKuAVm4Qb", "ui_saveRestore");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _idx = require("idx");
    var _panelMgr = require("panelMgr");
    var _tipMgr = require("tipMgr");
    var _baseUI = require("baseUI");
    var d = cc._decorator;
    var h = d.ccclass;
    var f = d.property;
    var g = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.timeL = null;
        e.lvL = null;
        e.coinNumL = null;
        e.timeR = null;
        e.lvR = null;
        e.coinNumR = null;
        e.infoL = null;
        e.infoR = null;
        e.nodeL = null;
        e.nodeR = null;
        e.userDatas = [];
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {};
      e.prototype.init = function(t) {
        var e = t.userDatas;
        this.rePanel(e);
      };
      e.prototype.rePanel = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          var e;
          var o;
          var n;
          var i;
          var r;
          var a;
          var c;
          var l;
          var u;
          var p;
          var d;
          var h;
          var f;
          return __generator(this, function(s) {
            switch (s.label) {
             case 0:
              return this.userDatas = [], this.timeL.string = "\u6682\u65e0\u6570\u636e", this.lvL.string = "", 
              this.coinNumL.string = "0", this.timeR.string = "\u6682\u65e0\u6570\u636e", this.lvR.string = "", 
              this.coinNumL.string = "0", t ? (e = t[0], o = t[1], e && e.update_at ? (r = e.update_at, 
              a = new Date(r), c = a.getFullYear(), l = a.getMonth() + 1, u = a.getDate(), this.timeL.string = c + "/" + l + "/" + u, 
              n = JSON.parse(e.user_data), "localData" != e.save_tag ? [ 3, 2 ] : (this.infoL.string = "\u81ea\u52a8\u5907\u4efd", 
              [ 4, this.compareData(n) ])) : [ 3, 4 ]) : [ 3, 10 ];

             case 1:
              return n = s.sent(), [ 3, 3 ];

             case 2:
              this.infoL.string = "\u624b\u52a8\u5907\u4efd", s.label = 3;

             case 3:
              return d = n.puzzleLvl || 0, h = n.coin || 0, this.lvL.string = "\u5173\u5361\uff1a" + d, 
              this.coinNumL.string = "" + h, i = JSON.stringify(n), e.user_data = i, this.userDatas.push(e), 
              [ 3, 5 ];

             case 4:
              this.nodeL.active = !1, s.label = 5;

             case 5:
              return o && o.update_at ? (r = o.update_at, a = new Date(r), c = a.getFullYear(), 
              l = a.getMonth() + 1, u = a.getDate(), this.timeR.string = c + "/" + l + "/" + u, 
              p = JSON.parse(o.user_data), "localData" != o.save_tag ? [ 3, 7 ] : (this.infoR.string = "\u81ea\u52a8\u5907\u4efd", 
              [ 4, this.compareData(p) ])) : [ 3, 9 ];

             case 6:
              return p = s.sent(), [ 3, 8 ];

             case 7:
              this.infoR.string = "\u624b\u52a8\u5907\u4efd", s.label = 8;

             case 8:
              return d = p.puzzleLvl || 0, h = p.coin || 0, this.lvR.string = "\u5173\u5361\uff1a" + d, 
              this.coinNumR.string = "" + h, f = JSON.stringify(p), o.user_data = f, this.userDatas.push(o), 
              [ 3, 10 ];

             case 9:
              this.nodeR.active = !1, s.label = 10;

             case 10:
              return [ 2 ];
            }
          });
        });
      };
      e.prototype.compareData = function(t) {
        var e;
        var o;
        return __awaiter(this, void 0, void 0, function() {
          var n;
          var i;
          var r;
          var a;
          var l;
          var u;
          return __generator(this, function(s) {
            switch (s.label) {
             case 0:
              return _idx.platform.getCloudData ? [ 4, _idx.platform.getCloudData() ] : [ 3, 2 ];

             case 1:
              n = s.sent(), s.label = 2;

             case 2:
              return r = (null == t ? void 0 : t.puzzleLvl) || 0, a = (null === (e = null == t ? void 0 : t.bag) || void 0 === e ? void 0 : e.puzzle_pieces) || 0, 
              l = (null == n ? void 0 : n.puzzleLvl) || 0, u = (null === (o = null == n ? void 0 : n.bag) || void 0 === o ? void 0 : o.puzzle_pieces) || 0, 
              (i = r > l || a > u ? t : n) ? [ 2, i ] : [ 2, t ];
            }
          });
        });
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.onBtnCheck = function(t, e) {
        var o = this.userDatas[e];
        o && o.update_at ? _panelMgr["default"].ins.open("ui/ui_saveConfirm", {
          cData: o
        }) : _tipMgr["default"].ins.showTip("\u6682\u65e0\u6570\u636e");
      };
      __decorate([ f(cc.Label) ], e.prototype, "timeL", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "lvL", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "coinNumL", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "timeR", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "lvR", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "coinNumR", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "infoL", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "infoR", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "nodeL", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "nodeR", void 0);
      return __decorate([ h ], e);
    }(_baseUI["default"]);
    exports["default"] = g;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    idx: "idx",
    panelMgr: "panelMgr",
    tipMgr: "tipMgr"
  } ],
  ui_save: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37480ahHE1HO633f+vRt0/d", "ui_save");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _idx = require("idx");
    var _request = require("request");
    var _time = require("time");
    var _uData = require("uData");
    var _panelMgr = require("panelMgr");
    var _tipMgr = require("tipMgr");
    var _baseUI = require("baseUI");
    var h = cc._decorator;
    var f = h.ccclass;
    var g = h.property;
    var y = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.timeLb = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {};
      e.prototype.init = function() {
        var t = this;
        this.timeLb.string = "\u6682\u65e0\u6570\u636e";
        _request["default"].ins.getServerData("").then(function(e) {
          t.rePanel(e);
        })["catch"](function() {
          t.rePanel(null);
        });
      };
      e.prototype.rePanel = function(t) {
        if (this.userDatas = t, t && t.data) {
          var e = t.data;
          var o = e[0];
          var n = e[1];
          var i = (null == o ? void 0 : o.update_at) || 0;
          var r = (null == n ? void 0 : n.update_at) || 0;
          var a = Math.max(i, r);
          if (a) {
            var s = _time["default"].ins.formatDate(a);
            this.timeLb.string = s;
          } else this.timeLb.string = "\u6682\u65e0\u6570\u636e";
        } else this.timeLb.string = "\u6682\u65e0\u6570\u636e";
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.onBtnSave = function() {
        _idx.platform.showLoading("\u5b58\u6863\u4e2d...");
        _request["default"].ins.updateServerData(_uData["default"].ins.getLocalData(), "backData").then(function(t) {
          _idx.platform.hideLoading();
          t.status ? _tipMgr["default"].ins.showTip("\u5b58\u6863\u6210\u529f", !0) : _tipMgr["default"].ins.showTip("\u7f51\u7edc\u62e5\u5835\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01", !0);
        })["catch"](function() {
          _idx.platform.hideLoading();
          _tipMgr["default"].ins.showTip("\u7f51\u7edc\u62e5\u5835\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01", !0);
        });
      };
      e.prototype.onBtnBack = function() {
        this.userDatas ? _panelMgr["default"].ins.open("ui/ui_saveRestore", {
          userDatas: this.userDatas.data
        }) : _tipMgr["default"].ins.showTip("\u6682\u65e0\u6570\u636e", !0);
      };
      __decorate([ g(cc.Label) ], e.prototype, "timeLb", void 0);
      return __decorate([ f ], e);
    }(_baseUI["default"]);
    exports["default"] = y;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    idx: "idx",
    panelMgr: "panelMgr",
    request: "request",
    time: "time",
    tipMgr: "tipMgr",
    uData: "uData"
  } ],
  ui_selectMode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b76f4TM2JlHOpD2hjHeOUlQ", "ui_selectMode");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var _cfgMgr = require("cfgMgr");
    var _panelMgr = require("panelMgr");
    var _main = require("main");
    var _festivalMgr = require("festivalMgr");
    var d = cc._decorator;
    var h = d.ccclass;
    var f = d.property;
    var g = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.costNums = [];
        e.btnsNode = [];
        e.costs = [];
        return e;
      }
      __extends(e, t);
      e.prototype.start = function() {
        this.initData();
      };
      e.prototype.initData = function() {
        var t = _cfgMgr["default"].serverCfg.difficulty_rules.rules;
        var e = [];
        var o = 10;
        for (var n in t) {
          var i = t[n];
          o = Number(i.times_val);
          e.push(o);
        }
        this.costNums[0].string = e[0];
        this.costNums[1].string = e[2];
        this.costNums[2].string = e[3];
        this.costs = [ e[0], e[2], e[3] ];
      };
      e.prototype.onBtnStart = function(t, e) {
        var o = 5 * Number(e);
        var n = this.costs[Number(e) - 1];
        if (_pInfo["default"].ins.getPower() < n) _panelMgr["default"].ins.open("ui/ui_getRes", {
          itemId: "times"
        }); else {
          var i = this.btnsNode[Number(e) - 1].convertToWorldSpaceAR(cc.Vec3.ZERO);
          var r = _main["default"].ins;
          r && (r.blockComp.enabled = !0);
          _festivalMgr["default"].ins.updPro(_festivalMgr.fesTaskKey.costPower, n);
          r.usePower(-n, i, o);
        }
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      __decorate([ f([ cc.Label ]) ], e.prototype, "costNums", void 0);
      __decorate([ f([ cc.Node ]) ], e.prototype, "btnsNode", void 0);
      return __decorate([ h ], e);
    }(_baseUI["default"]);
    exports["default"] = g;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    cfgMgr: "cfgMgr",
    festivalMgr: "festivalMgr",
    main: "main",
    pInfo: "pInfo",
    panelMgr: "panelMgr"
  } ],
  ui_set: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c09d2zIpI5PIYKJIScOxgZY", "ui_set");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _idx = require("idx");
    var _uData = require("uData");
    var _baseUI = require("baseUI");
    var _swBtn = require("swBtn");
    var _sound = require("sound");
    var _global = require("global");
    var _res = require("res");
    var _pConst = require("pConst");
    var _panelMgr = require("panelMgr");
    var _slider = require("slider");
    var y = cc._decorator;
    var m = y.ccclass;
    var v = y.property;
    var _ = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.audioBtn = null;
        e.musicBtn = null;
        e.vibrateBtn = null;
        e.headImg = null;
        e.txt_name = null;
        e.txt_lv = null;
        e.versionLbl = null;
        e.btnService = null;
        e.btnPrivacy = null;
        e.bgmSlider = null;
        e.effSlider = null;
        e.isMusic = !0;
        e.isAudio = !0;
        e.isVb = !0;
        return e;
      }
      __extends(e, t);
      e.prototype.start = function() {
        var t = _uData["default"].ins.getSetting();
        this.isAudio = t.effectSound;
        this.isMusic = t.bgmSound;
        this.isVb = t.vibrate;
        this.upAudioBtn();
        this.updateMusicBtn();
        this.upVbBtn();
        this.initData();
        this.initSlider();
        var e = _idx.platform.version;
        if (e && (this.versionLbl.string = "v " + e), _idx.platform.string() == _pConst.PFCode.Wechat || _idx.platform.isQQ) {
          var o = this.btnService.node;
          var n = this.btnPrivacy.node;
          o.active = n.active = !0;
          o.on(cc.Node.EventType.TOUCH_END, function() {
            return _panelMgr["default"].ins.open("ui/ui_info", {
              type: 1
            });
          }, this);
          n.on(cc.Node.EventType.TOUCH_END, function() {
            return _panelMgr["default"].ins.open("ui/ui_info", {
              type: 2
            });
          }, this);
        }
      };
      e.prototype.initData = function() {
        var t = this;
        this.txt_name.string = _uData["default"].ins.getName();
        var e = _uData["default"].ins.getHeadImg();
        e ? cc.assetManager.loadRemote(e, {
          ext: _global.headImgExt
        }, function(e, o) {
          t.node && t.node.isValid && (e ? t.setDefaultHead() : t.headImg.spriteFrame = new cc.SpriteFrame(o));
        }) : this.setDefaultHead();
      };
      e.prototype.setDefaultHead = function() {
        var t = this;
        _res["default"].ins.getBundleByString("resSps").then(function(e) {
          e.load("common/head_1", cc.SpriteFrame, function(e, o) {
            !e && t.node && t.node.isValid && (t.headImg.spriteFrame = o);
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
      };
      e.prototype.onAudioBtnTap = function() {
        this.isAudio = !this.isAudio;
        this.upAudioBtn();
        _uData["default"].ins.setSetting({
          effectSound: this.isAudio
        });
      };
      e.prototype.upAudioBtn = function() {
        null != this.audioBtn && this.audioBtn.setState(this.isAudio);
      };
      e.prototype.onMusicBtnTap = function() {
        this.isMusic = !this.isMusic;
        _uData["default"].ins.setSetting({
          bgmSound: this.isMusic
        });
        this.updateMusicBtn();
      };
      e.prototype.updateMusicBtn = function() {
        _sound["default"].ins[this.isMusic ? "playBGM" : "stopBGM"]();
        null != this.musicBtn && this.musicBtn.setState(this.isMusic);
      };
      e.prototype.onVibrateBtnTap = function() {
        this.isVb = !this.isVb;
        this.upVbBtn();
        _uData["default"].ins.setSetting({
          vibrate: this.isVb
        });
      };
      e.prototype.upVbBtn = function() {
        null != this.vibrateBtn && this.vibrateBtn.setState(this.isVb);
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.initSlider = function() {
        var t = _uData["default"].ins.getSetting();
        var e = t.effectVolume;
        var o = t.bgmVolume;
        this.bgmSlider.init(o);
        this.effSlider.init(e);
      };
      e.prototype.onSliderChange = function(t, e) {
        var o;
        if ("bgmVolume" !== e && "effectVolume" !== e) return console.error("slider\u53c2\u6570\u9519\u4e86!!!!");
        _uData["default"].ins.setSetting(((o = {})[e] = t.progress, o));
        _sound["default"].ins[e] = t.progress;
      };
      e.prototype.onBtnSkin = function() {};
      __decorate([ v(_swBtn["default"]) ], e.prototype, "audioBtn", void 0);
      __decorate([ v(_swBtn["default"]) ], e.prototype, "musicBtn", void 0);
      __decorate([ v(_swBtn["default"]) ], e.prototype, "vibrateBtn", void 0);
      __decorate([ v(cc.Sprite) ], e.prototype, "headImg", void 0);
      __decorate([ v(cc.Label) ], e.prototype, "txt_name", void 0);
      __decorate([ v(cc.Label) ], e.prototype, "txt_lv", void 0);
      __decorate([ v(cc.Label) ], e.prototype, "versionLbl", void 0);
      __decorate([ v(cc.Label) ], e.prototype, "btnService", void 0);
      __decorate([ v(cc.Label) ], e.prototype, "btnPrivacy", void 0);
      __decorate([ v(_slider["default"]) ], e.prototype, "bgmSlider", void 0);
      __decorate([ v(_slider["default"]) ], e.prototype, "effSlider", void 0);
      return __decorate([ m ], e);
    }(_baseUI["default"]);
    exports["default"] = _;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    global: "global",
    idx: "idx",
    pConst: "pConst",
    panelMgr: "panelMgr",
    res: "res",
    slider: "slider",
    sound: "sound",
    swBtn: "swBtn",
    uData: "uData"
  } ],
  ui_sevenDay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6f14ub1LFHhI8ElFgzZRTz", "ui_sevenDay");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _idx = require("idx");
    var _pConst = require("pConst");
    var _request = require("request");
    var _cfgMgr = require("cfgMgr");
    var _bagMgr = require("bagMgr");
    var _panelMgr = require("panelMgr");
    var _tipMgr = require("tipMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var _dayReward = require("dayReward");
    var m = cc._decorator;
    var v = m.ccclass;
    var _ = m.property;
    var b = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.dayNodes = [];
        e.getBtnNode = null;
        e.hasGetNode = null;
        e.reciveReward = {};
        e.aniData = [];
        e.canRecive = !1;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {};
      e.prototype.init = function() {
        for (var t = _pInfo["default"].ins.getSevenDays(), e = _pInfo["default"].ins.getSevenReward(), o = _cfgMgr["default"].serverCfg.seven_day_reward.rules, n = {}, i = 0, r = this.dayNodes.length; i < r; i++) {
          var a = o[i].val;
          var s = this.dayNodes[i];
          if (s.initItem(a), s.setDefault(), 6 === i && s.setCanRecive(), i < t && (s.setCanRecive(), 
          i < e && s.setRecived()), t > i && i >= e) for (var c in this.aniData = this.aniData.concat(s.aniDatas), 
          this.canRecive = !0, a) {
            var l = a[c];
            n[c] ? n[c] += l : n[c] = l;
          }
        }
        this.reciveReward = n;
        this.checkBtns();
      };
      e.prototype.checkBtns = function() {
        this.getBtnNode.active = this.canRecive;
        this.hasGetNode.active = !this.canRecive;
      };
      e.prototype.onBtnGet = function() {
        var t = this;
        if (this.canRecive) {
          this.canRecive = !1;
          this.checkBtns();
          for (var e = [], o = 0, n = this.aniData.length; o < n; o++) {
            var i = this.aniData[o];
            var r = {};
            var u = i.itemId;
            var g = Number(i.value);
            r.itemId = u;
            r.worldPos = i.itemNode.parent.convertToWorldSpaceAR(i.itemNode.position);
            r.value = g;
            e.push(r);
            _bagMgr["default"].ins.addItem(u, g);
          }
          var y = _pInfo["default"].ins.getSevenDays();
          _pInfo["default"].ins.setSevenReward(y);
          _evts["default"].opE.emit({
            action: _evts["default"].SIGN_RED
          });
          var m = _pInfo["default"].ins.getSevenReward();
          for (o = 0, n = this.dayNodes.length; o < n; o++) {
            var v = this.dayNodes[o];
            v.setDefault();
            6 === o && v.setCanRecive();
            o < y && (v.setCanRecive(), o < m && v.setRecived());
          }
          if (_idx.platform.string() == _pConst.PFCode.Bytedance) {
            var _ = _idx.platform.getSystemData();
            if (_) {
              var b = 0;
              switch (_.appName) {
               case "Douyin":
                b = 1;
                break;

               case "douyin_lite":
                b = 2;
              }
              var w = -1 != _.system.indexOf("iOS");
              b && y < 7 && !w && _request["default"].ins.sendSevenCard(b, y + 1);
            }
          }
          _panelMgr["default"].ins.open("ui/ui_flyAni", {
            itemDatas: e,
            hideCb: function hideCb() {
              t.hideThis();
            }
          });
        } else _tipMgr["default"].ins.showTip("\u5df2\u9886\u53d6");
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      __decorate([ _([ _dayReward["default"] ]) ], e.prototype, "dayNodes", void 0);
      __decorate([ _(cc.Node) ], e.prototype, "getBtnNode", void 0);
      __decorate([ _(cc.Node) ], e.prototype, "hasGetNode", void 0);
      return __decorate([ v ], e);
    }(_baseUI["default"]);
    exports["default"] = b;
    cc._RF.pop();
  }, {
    bagMgr: "bagMgr",
    baseUI: "baseUI",
    cfgMgr: "cfgMgr",
    dayReward: "dayReward",
    evts: "evts",
    idx: "idx",
    pConst: "pConst",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    request: "request",
    tipMgr: "tipMgr"
  } ],
  ui_shopPack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04bfcWd8wxNsb58fYw/OdLP", "ui_shopPack");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _cfgMgr = require("cfgMgr");
    var _shopMgr = require("shopMgr");
    var _baseUI = require("baseUI");
    var _chaptBtn = require("chaptBtn");
    var _packItem1 = require("packItem1");
    var p = cc._decorator;
    var d = p.ccclass;
    var h = p.property;
    var f = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.itemScroll = null;
        e.btnScroll = null;
        e.packItem = null;
        e.btnItem = null;
        e.btnsComp = [];
        e.curPageIdx = -1;
        e.datasArr = [];
        e.tabIds = [];
        e._packItem = [];
        return e;
      }
      __extends(e, t);
      e.prototype.init = function() {
        var t;
        var e;
        var o = this;
        var n = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.shop_config) || void 0 === e ? void 0 : e.gift;
        if (n) {
          var i = {};
          for (var r in n) {
            var c = n[r];
            var u = c.tag || 0;
            c.is_shop && (i[u] ? i[u].push(c) : (i[u] = [], i[u].push(c)));
          }
          var p = _shopMgr["default"].ins.getTabsRed();
          for (var d in i) {
            var h = i[d];
            if (h) {
              this.tabIds.push(d);
              var f = h[0].gift || "\u793c\u5305";
              var g = cc.instantiate(this.btnItem);
              g.active = !0;
              g.parent = this.btnScroll.content;
              var y = g.getComponent(_chaptBtn["default"]);
              y.setLb(f);
              y.setState(!1);
              this.btnsComp.push(y);
              this.datasArr.push(h);
              var m = 1;
              if (p[d]) m = 0; else for (var v = h.length, _ = 0; _ < v; _++) 0 == (h[_].price || 0) && m++;
              y.setRed(m);
            }
          }
          var b = this.btnsComp.length;
          var w = function w(t) {
            S.btnsComp[t].node.on("click", function() {
              o.chgViewData(t);
            }, S);
          };
          var S = this;
          for (_ = 0; _ < b; _++) w(_);
          this.btnScroll.node.width = 550;
          var T = this.btnScroll.content.children[0].width * this.btnScroll.content.childrenCount;
          this.btnScroll.node.x = T > this.btnScroll.node.width ? -274 : (this.btnScroll.node.width - T) / 2 - 274;
          T = Math.min(T, 550);
          this.btnScroll.node.width = T;
          this.btnScroll.scrollToLeft();
          this.chgViewData(0);
        }
      };
      e.prototype.chgViewData = function(t) {
        var e = this.curPageIdx;
        if (e != t) {
          var o = this.btnsComp;
          var n = _shopMgr["default"].ins.getTabsRed();
          o[e] && (o[e].setState(!1), o[e].setRed(0), n[this.tabIds[e]] = 1);
          o[t] && (o[t].setState(!0), n[this.tabIds[t]] = 1);
          _shopMgr["default"].ins.setTabsRed(n);
          this.curPageIdx = t;
          this.initListView();
        }
      };
      e.prototype.initListView = function() {
        var t = this;
        var e = this.itemScroll.content;
        e.children.forEach(function(e) {
          t._packItem.push(e);
        });
        e.removeAllChildren();
        for (var o = this.datasArr[this.curPageIdx], n = o.length, i = 0; i < n; i++) {
          var r = o[i];
          var a = this._packItem.shift();
          a || (a = cc.instantiate(this.packItem));
          a.active = !0;
          a.parent = e;
          a.getComponent(_packItem1["default"]).initItem(r);
        }
        e.setContentSize(580, 182 * n);
      };
      e.prototype.hideThis = function() {
        t.prototype.hide.call(this);
      };
      __decorate([ h(cc.ScrollView) ], e.prototype, "itemScroll", void 0);
      __decorate([ h(cc.ScrollView) ], e.prototype, "btnScroll", void 0);
      __decorate([ h(cc.Node) ], e.prototype, "packItem", void 0);
      __decorate([ h(cc.Node) ], e.prototype, "btnItem", void 0);
      return __decorate([ d ], e);
    }(_baseUI["default"]);
    exports["default"] = f;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    cfgMgr: "cfgMgr",
    chaptBtn: "chaptBtn",
    packItem1: "packItem1",
    shopMgr: "shopMgr"
  } ],
  ui_sidebar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d0be4dW861Nob8k4ZQf0SYa", "ui_sidebar");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _evts = require("evts");
    var _idx = require("idx");
    var _res = require("res");
    var _panelMgr = require("panelMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var d = cc._decorator;
    var h = d.ccclass;
    var f = d.property;
    var g = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.getBtn = null;
        e.intoBtn = null;
        e.tipNode = null;
        e.exampleNode = null;
        e.exampleSpr = null;
        e.exampleTxtNode = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {};
      e.prototype.start = function() {
        this.loadSp();
      };
      e.prototype.init = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.updateSliderStatus();
      };
      e.prototype.loadSp = function() {
        var t = this;
        var e = null;
        var o = cc.sys.platform === cc.sys.ALIPAY_GAME ? "ali" : "tt";
        this.exampleTxtNode.active = cc.sys.platform == cc.sys.ALIPAY_GAME;
        _res["default"].ins.getBundleByString("resSps").then(function(n) {
          n.loadDir("platform/" + o, cc.SpriteFrame, function(o, n) {
            !o && t.node && t.node.isValid && n.forEach(function(o) {
              if (-1 !== o.name.indexOf("txt")) ; else if (-1 !== o.name.indexOf("exa")) if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) e = cc.v3(0, 90, 0), 
              t.exampleSpr.spriteFrame = o, t.exampleSpr.node.position = e; else if (cc.sys.platform === cc.sys.ALIPAY_GAME) if (e = cc.v3(-132, 35, 0), 
              -1 !== o.name.indexOf("exa1")) t.exampleSpr.spriteFrame = o, t.exampleSpr.node.position = e; else {
                var n = new cc.Node();
                n.addComponent(cc.Sprite).spriteFrame = o;
                n.parent = t.exampleNode;
                e.x += 264;
                n.position = e;
              }
            });
          });
        })["catch"](function(t) {
          console.error("RTool.ins.getBundleByString('resSps')", t);
        });
      };
      e.prototype.updateSliderStatus = function() {
        var t = this.bySlider = _idx.platform.bySlider;
        this.getBtn.active = t;
        this.intoBtn.active = !t;
        _pInfo["default"].ins.getIsGetSlider() ? (this.getBtn.active = !1, this.intoBtn.active = !1, 
        this.tipNode.active = !0) : this.tipNode.active = !1;
      };
      e.prototype.onGet = function() {
        var t = this;
        _pInfo["default"].ins.addCoin(20);
        _pInfo["default"].ins.setIsGetSlider(!0);
        var e = this.getBtn.parent.convertToWorldSpaceAR(this.getBtn.position);
        _panelMgr["default"].ins.open("ui/ui_flyAni", {
          itemDatas: [ {
            itemId: "coin",
            worldPos: e,
            value: 20
          } ],
          hideCb: function hideCb() {
            t.hideThis();
            _evts["default"].opE.emit({
              action: _evts["default"].Slider_Chg
            });
          }
        });
      };
      e.prototype.onInto = function() {
        _idx.platform.navigateToScene();
        this.hideThis();
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.onDestroy = function() {};
      __decorate([ f(cc.Node) ], e.prototype, "getBtn", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "intoBtn", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "tipNode", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "exampleNode", void 0);
      __decorate([ f(cc.Sprite) ], e.prototype, "exampleSpr", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "exampleTxtNode", void 0);
      return __decorate([ h ], e);
    }(_baseUI["default"]);
    exports["default"] = g;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    evts: "evts",
    idx: "idx",
    pInfo: "pInfo",
    panelMgr: "panelMgr",
    res: "res"
  } ],
  ui_skinInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c070pF1aJJsYPevQtZg0rw", "ui_skinInfo");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _uData = require("uData");
    var _lang = require("lang");
    var _head = require("head");
    var _skinMgr = require("skinMgr");
    var _tipMgr = require("tipMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var h = cc._decorator;
    var f = h.ccclass;
    var g = h.property;
    var y = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.skinName = null;
        e.skinDesc = null;
        e.buyBtn = null;
        e.videoBtn = null;
        e.useBtn = null;
        e.headComp = null;
        e.bgSp = null;
        e.nameFrameSp = null;
        e.roleNode = null;
        e.frameBg = null;
        e.needCoin = null;
        e.needPro = null;
        return e;
      }
      __extends(e, t);
      e.prototype.start = function() {};
      e.prototype.init = function(t) {
        var e;
        var o = this;
        var n = t.ref;
        var i = t.skinId;
        var r = t.showNode;
        var s = t.unlockState;
        var c = _skinMgr["default"].ins.getSkinData(i, n);
        var u = c.name;
        var p = c.desc;
        var d = c.unlockType;
        var h = c.unlockValue;
        switch (this.skinName.string = u, this.skinDesc.string = p, this.skinId = i, this.ref = n, 
        this.unlockValue = h, this.headComp.node.parent.active = i === _skinMgr.SkinIdEnum.headFrame, 
        this.bgSp.node.active = i === _skinMgr.SkinIdEnum.bg, this.roleNode.active = i === _skinMgr.SkinIdEnum.role, 
        this.nameFrameSp.node.parent.active = i === _skinMgr.SkinIdEnum.nameFrame, this.buyBtn.active = 2 === d && s === _skinMgr.SkinState.lock, 
        this.videoBtn.active = 1 === d && s === _skinMgr.SkinState.lock, this.useBtn.active = _skinMgr.SkinState.using !== s && _skinMgr.SkinState.lock !== s, 
        d) {
         case _skinMgr.SkinUnlockType.coin:
          this.setCoin();
          break;

         case _skinMgr.SkinUnlockType.video:
          this.setVideoPro();
        }
        var f = null === (e = r.getComponent(cc.Sprite)) || void 0 === e ? void 0 : e.spriteFrame;
        switch (i) {
         case _skinMgr.SkinIdEnum.role:
          this.roleNode.removeAllChildren();
          var g = cc.instantiate(r);
          g.y = -100, this.roleNode.addChild(g);
          break;

         case _skinMgr.SkinIdEnum.bg:
          this.bgSp.spriteFrame = f;
          break;

         case _skinMgr.SkinIdEnum.nameFrame:
          this.nameFrameSp.spriteFrame = f;
          break;

         case _skinMgr.SkinIdEnum.headFrame:
          var y = _uData["default"].ins.getHeadImg();
          this.headComp.loadHeadImg(y, n);
        }
        this.scheduleOnce(function() {
          o.setCloseBtnPos();
        });
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.setCoin = function() {
        this.needCoin.string = this.unlockValue.toString();
      };
      e.prototype.setVideoPro = function() {
        var t = _pInfo["default"].ins.getSkinAdPro(this.skinId, this.ref);
        void 0 !== t && (this.needPro.string = t + "/" + this.unlockValue, t >= this.unlockValue && (_skinMgr["default"].ins.addSkin(this.skinId, this.ref), 
        this.videoBtn.active = !1, this.useBtn.active = !0));
      };
      e.prototype.setCloseBtnPos = function() {
        this.closeBtn.node.x = this.frameBg.width / 2 + this.frameBg.x - this.closeBtn.node.width / 2 - 15;
        this.closeBtn.node.y = this.frameBg.height / 2 + this.frameBg.y - this.closeBtn.node.height / 2 - 15;
      };
      e.prototype.onBtnUseSkin = function() {
        this.hide();
        _skinMgr["default"].ins.usingSkin(this.skinId, this.ref);
      };
      e.prototype.onBtnCoin = function() {
        _pInfo["default"].ins.getCoin() >= this.unlockValue ? (_pInfo["default"].ins.addCoin(-this.unlockValue), 
        _skinMgr["default"].ins.addSkin(this.skinId, this.ref), this.buyBtn.active = !1, 
        this.useBtn.active = !0, _tipMgr["default"].ins.showTip("\u8d2d\u4e70\u6210\u529f")) : _tipMgr["default"].ins.showTip(_lang.lang[10001]);
      };
      e.prototype.onBtnVideo = function() {
        _pInfo["default"].ins.addSkinAdPro(this.skinId, this.ref);
        this.setVideoPro();
      };
      __decorate([ g(cc.Label) ], e.prototype, "skinName", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "skinDesc", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "buyBtn", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "videoBtn", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "useBtn", void 0);
      __decorate([ g(_head["default"]) ], e.prototype, "headComp", void 0);
      __decorate([ g(cc.Sprite) ], e.prototype, "bgSp", void 0);
      __decorate([ g(cc.Sprite) ], e.prototype, "nameFrameSp", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "roleNode", void 0);
      __decorate([ g(cc.Node) ], e.prototype, "frameBg", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "needCoin", void 0);
      __decorate([ g(cc.Label) ], e.prototype, "needPro", void 0);
      return __decorate([ f ], e);
    }(_baseUI["default"]);
    exports["default"] = y;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    head: "head",
    lang: "lang",
    pInfo: "pInfo",
    skinMgr: "skinMgr",
    tipMgr: "tipMgr",
    uData: "uData"
  } ],
  ui_skin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d45c3iSApZP3p940Sl9LSeE", "ui_skin");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _baseUI = require("baseUI");
    var _pInfo = require("pInfo");
    var _uData = require("uData");
    var _chgBtn = require("chgBtn");
    var _skinContent = require("skinContent");
    var _head = require("head");
    var _res = require("res");
    var _skinMgr = require("skinMgr");
    var _evts = require("evts");
    var g = cc._decorator;
    var y = g.ccclass;
    var m = g.property;
    var v = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.scrollView = null;
        e.btnsNode = null;
        e.headComp = null;
        e.pNameTxt = null;
        e.bgSp = null;
        e.roleNode = null;
        e.curPageIdx = 1;
        e.contentArr = [];
        e.btnsComp = [];
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        var t = this;
        this.eventFunc = this.onOperTap.bind(this);
        _evts["default"].opE.on(this.eventFunc);
        this.scrollView.content.parent.children.forEach(function(e) {
          t.contentArr.push(e.getComponent(_skinContent["default"]));
          e.active = !1;
        });
        for (var e = function e(_e, n, i) {
          i.push(n[_e].getComponent(_chgBtn["default"]));
          n[_e].on("click", function() {
            t.chgViewData(_e);
          }, o);
        }, o = this, n = 0, i = this.btnsNode.children, r = this.btnsComp, a = i.length; n < a; n++) e(n, i, r);
      };
      e.prototype.start = function() {
        this.chgViewData(0);
        _res["default"].ins.getBundleByString("resSps").then(function(t) {
          t.preloadDir("game/skin");
        });
        _res["default"].ins.getBundleByString("prefab").then(function(t) {
          t.preloadDir("skin");
        });
      };
      e.prototype.onDestroy = function() {
        _evts["default"].opE.off(this.eventFunc);
        this.eventFunc = null;
      };
      e.prototype.init = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var o = _pInfo["default"].ins.getUsingSkin();
        var n = _uData["default"].ins.getHeadImg();
        if (this.pNameTxt.string = _uData["default"].ins.getName(), this.headComp.loadHeadImg(n), 
        o) for (var i in o) {
          var r = i;
          var a = o[i];
          this.updateShow(r, a);
        }
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      e.prototype.chgViewData = function(t) {
        var e = this.curPageIdx;
        if (e != t) {
          var o = {
            0: _skinMgr.SkinIdEnum.bg,
            1: _skinMgr.SkinIdEnum.headFrame,
            2: _skinMgr.SkinIdEnum.nameFrame,
            3: _skinMgr.SkinIdEnum.role
          };
          var n = _skinMgr["default"].ins.getSkinConfig(o[t]);
          this.contentArr[t].initContent(n);
          this.changeBtnState(e, t);
          this.changeContentState(e, t);
          this.curPageIdx = t;
        }
      };
      e.prototype.changeBtnState = function(t, e) {
        var o = this.btnsComp;
        o[t].setState(!1);
        o[e].setState(!0);
      };
      e.prototype.changeContentState = function(t, e) {
        var o = this.contentArr;
        var n = this.scrollView;
        o[t].node.active = !1;
        o[e].node.active = !0;
        n.content = o[e].node;
        n.scrollToTop(.1);
      };
      e.prototype.onOperTap = function(t) {
        if ((null == t ? void 0 : t.action) === _evts["default"].SKIN_CHG && t.data && t.data.isUse) {
          var e = t.data;
          var o = e.skinId;
          var n = e.ref;
          this.updateShow(o, n);
        }
      };
      e.prototype.updateShow = function(t, e) {
        switch (t) {
         case _skinMgr.SkinIdEnum.bg:
          _skinMgr["default"].ins.updateBg(e, this.bgSp);
          break;

         case _skinMgr.SkinIdEnum.role:
          _skinMgr["default"].ins.updateRole(e, this.roleNode);
        }
      };
      __decorate([ m(cc.ScrollView) ], e.prototype, "scrollView", void 0);
      __decorate([ m(cc.Node) ], e.prototype, "btnsNode", void 0);
      __decorate([ m(_head["default"]) ], e.prototype, "headComp", void 0);
      __decorate([ m(cc.Label) ], e.prototype, "pNameTxt", void 0);
      __decorate([ m(cc.Sprite) ], e.prototype, "bgSp", void 0);
      __decorate([ m(cc.Node) ], e.prototype, "roleNode", void 0);
      return __decorate([ y ], e);
    }(_baseUI["default"]);
    exports["default"] = v;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    chgBtn: "chgBtn",
    evts: "evts",
    head: "head",
    pInfo: "pInfo",
    res: "res",
    skinContent: "skinContent",
    skinMgr: "skinMgr",
    uData: "uData"
  } ],
  ui_tip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed9b2LsSfRIso6X0TSRTqgj", "ui_tip");
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
    var p = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.showLab = null;
        e.tNode = null;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t, e) {
        var o = this;
        this.showLab.font = e ? "" : _loading.DEFAULTFONT;
        this.showLab.fontSize = e ? 35 : 40;
        this.showLab.string = t;
        this.tNode.scale = 0;
        this.showLab.scheduleOnce(function() {
          o.tNode.height = o.showLab.node.height + 30;
        }, 0);
        cc.Tween.stopAllByTarget(this.tNode);
        this.tNode.setPosition(cc.v2());
        this.onShow();
      };
      e.prototype.onShow = function() {
        cc.tween(this.tNode).parallel(cc.tween(this.tNode).to(.2, {
          scale: 1
        }), cc.tween(this.tNode).to(2, {
          y: 120
        })).delay(.1).to(.2, {
          scale: 0
        }).start();
      };
      __decorate([ u(cc.Label) ], e.prototype, "showLab", void 0);
      __decorate([ u(cc.Node) ], e.prototype, "tNode", void 0);
      return __decorate([ l ], e);
    }(_baseUI["default"]);
    exports["default"] = p;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    loading: "loading"
  } ],
  ui_userInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f7e3P8qDRIJYoimVo/XyP9", "ui_userInfo");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _request = require("request");
    var _uData = require("uData");
    var _head = require("head");
    var _skinMgr = require("skinMgr");
    var _pInfo = require("pInfo");
    var _baseUI = require("baseUI");
    var d = cc._decorator;
    var h = d.ccclass;
    var f = d.property;
    var g = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.lsTxt = null;
        e.raceScoreTxt = null;
        e.normalScoreTxt = null;
        e.jigsawTxt = null;
        e.achiTxt = null;
        e.headTxt = null;
        e.bgTxt = null;
        e.nameTxt = null;
        e.roleTxt = null;
        e.headComp = null;
        e.pNameTxt = null;
        e.nameSpr = null;
        e.bgSpr = null;
        e.girlNode = null;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t) {
        var e;
        var o = this;
        var n = t.gameUid;
        var i = t.baseData;
        var r = {};
        var c = _uData["default"].ins;
        var l = _pInfo["default"].ins;
        var p = "";
        var d = "";
        n == c.getUid() ? (p = c.getName(), d = c.getHeadImg(), r.recordData = JSON.parse(JSON.stringify(l.getRecordData())), 
        r.jigFin = l.getHasFinJig(), r.mySkin = l.getMySkin(), r.uSkin = l.getUsingSkin(), 
        this.rePanel(r)) : (i && (p = i.nickname, d = i.avatar, r.uSkin = null === (e = null == i ? void 0 : i.extra_data) || void 0 === e ? void 0 : e.usingSkin), 
        _request["default"].ins.getUserDataByUid(n).then(function(t) {
          if (t && o.node && o.node.isValid) {
            var e = t.data;
            e && (r.recordData = null == e ? void 0 : e.recordData, r.jigFin = null == e ? void 0 : e.hasFinJig, 
            r.mySkin = null == e ? void 0 : e.mySkin);
            o.rePanel(r);
          }
        }));
        var h = p;
        h.length > 7 && (h = h.substring(0, 6) + "...");
        this.pNameTxt.string = h;
        this.headComp.loadHeadImg(d);
      };
      e.prototype.rePanel = function(t) {
        var e;
        var o;
        var n;
        var i;
        var r;
        var a;
        var s;
        var c;
        var u;
        var p;
        var d;
        var h;
        var f;
        var g;
        var y;
        var m;
        var v;
        var _;
        if (t) {
          var b = _skinMgr["default"].ins;
          var w = (null === (e = null == t ? void 0 : t.uSkin) || void 0 === e ? void 0 : e.headFrame) || 1;
          b.updateHeadFrame(w, this.headComp.bg);
          var S = (null === (o = null == t ? void 0 : t.uSkin) || void 0 === o ? void 0 : o.nameFrame) || 1;
          b.updateNameFrame(S, this.nameSpr);
          var T = (null === (n = null == t ? void 0 : t.uSkin) || void 0 === n ? void 0 : n.bg) || 1;
          b.updateBg(T, this.bgSpr);
          var I = (null === (i = null == t ? void 0 : t.uSkin) || void 0 === i ? void 0 : i.role) || 1;
          b.updateRole(I, this.girlNode);
          this.headTxt.string = (null === (a = null === (r = null == t ? void 0 : t.mySkin) || void 0 === r ? void 0 : r.headFrame) || void 0 === a ? void 0 : a.length) || 1;
          this.bgTxt.string = (null === (c = null === (s = null == t ? void 0 : t.mySkin) || void 0 === s ? void 0 : s.bg) || void 0 === c ? void 0 : c.length) || 1;
          this.nameTxt.string = (null === (p = null === (u = null == t ? void 0 : t.mySkin) || void 0 === u ? void 0 : u.nameFrame) || void 0 === p ? void 0 : p.length) || 1;
          this.roleTxt.string = (null === (h = null === (d = null == t ? void 0 : t.mySkin) || void 0 === d ? void 0 : d.role) || void 0 === h ? void 0 : h.length) || 1;
          this.lsTxt.string = (null === (g = null === (f = null == t ? void 0 : t.recordData) || void 0 === f ? void 0 : f.main) || void 0 === g ? void 0 : g.heWins) || 0;
          this.raceScoreTxt.string = (null === (m = null === (y = null == t ? void 0 : t.recordData) || void 0 === y ? void 0 : y.race) || void 0 === m ? void 0 : m.hePoints) || 0;
          this.normalScoreTxt.string = (null === (_ = null === (v = null == t ? void 0 : t.recordData) || void 0 === v ? void 0 : v.main) || void 0 === _ ? void 0 : _.tPoints) || 0;
          var D = 0;
          if (t.jigFin) for (var P in t.jigFin) t.jigFin[P] && D++;
          this.jigsawTxt.string = "" + D;
          this.achiTxt.string = "0";
        }
      };
      e.prototype.hideThis = function() {
        this.hide();
      };
      __decorate([ f(cc.Label) ], e.prototype, "lsTxt", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "raceScoreTxt", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "normalScoreTxt", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "jigsawTxt", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "achiTxt", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "headTxt", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "bgTxt", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "nameTxt", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "roleTxt", void 0);
      __decorate([ f(_head["default"]) ], e.prototype, "headComp", void 0);
      __decorate([ f(cc.Label) ], e.prototype, "pNameTxt", void 0);
      __decorate([ f(cc.Sprite) ], e.prototype, "nameSpr", void 0);
      __decorate([ f(cc.Sprite) ], e.prototype, "bgSpr", void 0);
      __decorate([ f(cc.Node) ], e.prototype, "girlNode", void 0);
      return __decorate([ h ], e);
    }(_baseUI["default"]);
    exports["default"] = g;
    cc._RF.pop();
  }, {
    baseUI: "baseUI",
    head: "head",
    pInfo: "pInfo",
    request: "request",
    skinMgr: "skinMgr",
    uData: "uData"
  } ],
  uvAni: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41094vwy3ZOuZaeoTXDRToI", "uvAni");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = (a.property, function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.bgMat = null;
        e.time = 0;
        e._speed = .5;
        return e;
      }
      __extends(e, t);
      e.prototype.start = function() {
        var t = this.getComponent(cc.Sprite);
        this.bgMat = t.getMaterial(0);
        this.time = 0;
      };
      Object.defineProperty(e.prototype, "speed", {
        set: function set(t) {
          this._speed = t;
        },
        enumerable: !1,
        configurable: !0
      });
      Object.defineProperty(e.prototype, "stop", {
        set: function set(t) {
          this.isStop = t;
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.update = function(t) {
        this.isStop || (this.time += t * this._speed, this.bgMat.setProperty("time", this.time));
      };
      return __decorate([ s ], e);
    }(cc.Component));
    exports["default"] = c;
    cc._RF.pop();
  }, {} ],
  vb: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a0307mRBFNnr9D0weC/cVX", "vb");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.VEnum3 = void 0;
    var n;
    var _idx = require("idx");
    var _pConst = require("pConst");
    var _uData = require("uData");
    (function(t) {
      t[t.SHORT = 0] = "SHORT";
      t[t.LONG = 1] = "LONG";
      t[t.DOUBLE = 2] = "DOUBLE";
    })(n = exports.VEnum3 || (exports.VEnum3 = {}));
    var s = function() {
      function t() {}
      t.p = function(t) {
        if (_uData["default"].ins.getSetting().vibrate) switch (t) {
         case n.SHORT:
          _idx.platform.vibrate(_pConst.VEnum4.SHORT);
          break;

         case n.LONG:
          _idx.platform.vibrate(_pConst.VEnum4.LONG);
          break;

         case n.DOUBLE:
          _idx.platform.vibrate(_pConst.VEnum4.LONG);
          var e = cc.director.getScene().getChildByName("Canvas");
          cc.tween(e).delay(.4).call(function() {
            _idx.platform.vibrate(_pConst.VEnum4.LONG);
          }).start();
        }
      };
      return t;
    }();
    exports["default"] = s;
    cc._RF.pop();
  }, {
    idx: "idx",
    pConst: "pConst",
    uData: "uData"
  } ],
  veBtn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb0f04Zrj5E9omuqiykJWJz", "veBtn");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _adC = require("adC");
    var _com = require("com");
    var _evts = require("evts");
    var _idx = require("idx");
    var _pConst = require("pConst");
    var _request = require("request");
    var _res = require("res");
    var _sound = require("sound");
    var _lang = require("lang");
    var _tipMgr = require("tipMgr");
    var _pInfo = require("pInfo");
    var m = cc._decorator;
    var v = m.ccclass;
    var _ = m.property;
    var b = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.videoSource = "";
        e.videoDuration = _adC.VEnum2.MEDIUM;
        e.onWatchEndEvent = null;
        e.adSp = null;
        e.cb = null;
        e.eCb = null;
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        _idx.platform.preloadVideo(_adC.VEnum[this.videoDuration]);
        this.adSp || (this.adSp = this.node.getChildByName("bg").getChildByName("img_gk_ds").getComponent(cc.Sprite));
        this.setShareIcon();
      };
      e.prototype.onEnable = function() {
        this.node.on("click", this.onClick, this);
        this.eCb = this.onOperTap.bind(this);
        _evts["default"].opE.on(this.eCb);
      };
      e.prototype.onDisable = function() {
        this.node.off("click", this.onClick, this);
        _evts["default"].opE.off(this.eCb);
        this.eCb = null;
      };
      e.prototype.onOperTap = function(t) {
        switch (t.action) {
         case _evts["default"].AD_MAX:
          this.setShareIcon();
        }
      };
      e.prototype.onClick = function(t) {
        var e = this;
        if ((!t || t.interactable) && null != this.onWatchEndEvent && (null == this.cb || this.cb())) {
          var o = _com["default"].ins.a(this.node, 1);
          var n = _pInfo["default"].ins.isMaxShareCount();
          var i = _pInfo["default"].ins.isMaxAdCount();
          if (n && i) return void _tipMgr["default"].ins.showTip(_lang.lang[10009]);
          if (i) return void _idx.platform.share().then(function(n) {
            n && (o(), e.onWatchEndEvent && cc.Component.EventHandler.emitEvents([ e.onWatchEndEvent ], t), 
            _pInfo["default"].ins.addShareCount());
          })["catch"](function(t) {
            console.error(t);
          });
          var r = this.node.adDotData || e.onWatchEndEvent.customEventData;
          _idx.platform.doWatchAD({
            videoSource: this.videoSource,
            videoDuration: this.videoDuration,
            sequenceInfo: null
          }).then(function() {
            _sound["default"].ins.playBGM();
            o();
            e.onWatchEndEvent && cc.Component.EventHandler.emitEvents([ e.onWatchEndEvent ], t);
            _pInfo["default"].ins.addAdCount();
            _request["default"].ins.adDot(r, 1);
          })["catch"](function(t) {
            switch (_sound["default"].ins.playBGM(), o(), t) {
             case _pConst.VideoFailCode.NO_AD:
              _tipMgr["default"].ins.showTip(_lang.lang[1e4]), _request["default"].ins.adDot(r, 0);
              break;

             case _pConst.VideoFailCode.CANCELED:
              _request["default"].ins.adDot(r, 2);
            }
          });
        }
      };
      e.prototype.setBeforeWatchCheckHandler = function(t) {
        this.cb = t;
      };
      e.prototype.setShareIcon = function() {
        this.adSp && _pInfo["default"].ins.isMaxAdCount() && (this.adSp.node.$isShare || (_res["default"].ins.lSF("common/lupin_2", this.adSp), 
        this.adSp.node.$isShare = !0));
      };
      __decorate([ _(cc.String) ], e.prototype, "videoSource", void 0);
      __decorate([ _(cc.Component.EventHandler) ], e.prototype, "onWatchEndEvent", void 0);
      __decorate([ _(cc.Sprite) ], e.prototype, "adSp", void 0);
      return __decorate([ v ], e);
    }(cc.Component);
    exports["default"] = b;
    cc._RF.pop();
  }, {
    adC: "adC",
    com: "com",
    evts: "evts",
    idx: "idx",
    lang: "lang",
    pConst: "pConst",
    pInfo: "pInfo",
    request: "request",
    res: "res",
    sound: "sound",
    tipMgr: "tipMgr"
  } ],
  vivo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8e25IkG9NO4atNG91lT1oB", "vivo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports["default"] = function() {};
    cc._RF.pop();
  }, {} ],
  wormSp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d0d4CPN3hK1I6Lx4gDVS6P", "wormSp");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _com = require("com");
    var s = cc._decorator;
    var c = s.ccclass;
    var l = s.property;
    var u = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.spine = null;
        e.countLbl = null;
        e.idles = [ "", "2", "3" ];
        return e;
      }
      __extends(e, t);
      e.prototype.onLoad = function() {
        this.spine.setCompleteListener(this._playIdle.bind(this));
        this._playIdle();
      };
      e.prototype.init = function(t) {
        this.curCount = 0;
        this.maxCount = t;
        this.countLbl.string = this.curCount + "/" + this.maxCount;
      };
      e.prototype.addCount = function() {
        var t = this.curCount = this.curCount + 1;
        t == this.maxCount && this.playDone();
        this.countLbl.string = t + "/" + this.maxCount;
      };
      e.prototype._playIdle = function() {
        this.isDone || (this.spine.animation = "idle" + this.idles[_com["default"].ins.rad(0, 2)]);
      };
      e.prototype.playDone = function() {
        this.isDone = !0;
        var t = this.spine;
        t.loop = !1;
        t.animation = "xiaoshi";
      };
      __decorate([ l(sp.Skeleton) ], e.prototype, "spine", void 0);
      __decorate([ l(cc.Label) ], e.prototype, "countLbl", void 0);
      return __decorate([ c ], e);
    }(cc.Component);
    exports["default"] = u;
    cc._RF.pop();
  }, {
    com: "com"
  } ],
  worm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd1faxCdE9AcbmxbzuujTdp", "worm");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var a = cc._decorator;
    var s = a.ccclass;
    var c = a.property;
    var l = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.sps = [];
        e.sp = null;
        return e;
      }
      __extends(e, t);
      e.prototype.init = function(t) {
        this.sp.spriteFrame = this.sps[t];
      };
      __decorate([ c([ cc.SpriteFrame ]) ], e.prototype, "sps", void 0);
      __decorate([ c(cc.Sprite) ], e.prototype, "sp", void 0);
      return __decorate([ s ], e);
    }(cc.Component);
    exports["default"] = l;
    cc._RF.pop();
  }, {} ],
  wx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8c17AniaBK/rPvMyFh2kSV", "wx");
    "use strict";
    var n;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var _idx = require("idx");
    var _env = require("env");
    var _evts = require("evts");
    var _pConst = require("pConst");
    var _uData = require("uData");
    var _c = require("c");
    var _adC = require("adC");
    var _com = require("com");
    var _sound = require("sound");
    var _time = require("time");
    var _pf = require("pf");
    var _errorCode = require("errorCode");
    var _ = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.isSharing = !1;
        e.sdkSwitch = _pConst.DefaultSDKSwitch;
        e.videoCheckedMap = {};
        e.videoCheckedLastT = {};
        e.videoMap = {};
        e.isLoading = !1;
        e.isLoggedIn = !1;
        e.onHideT = 0;
        e.noAd = !1;
        e.noVideo = !1;
        e.lastInterAdShowT = 0;
        e.switchesInitd = !1;
        e.ta = null;
        e._share_callback = null;
        e.interstitialAd = null;
        e.interAdReady = !1;
        e.m_bInitBanner = null;
        e.m_bBannerShowed = !1;
        e.m_banner = null;
        e.SetUserCloudStorage = function(t, e, o) {
          var n = new Date();
          wx.setUserCloudStorage({
            KVDataList: [ {
              key: "level",
              value: t.toString() + "#" + n.getTime().toString() + "#" + e.toString() + "#" + o.toString()
            } ],
            success: function success() {},
            fail: function fail() {}
          });
        };
        e.onKeyboardComplete = wx.onKeyboardComplete;
        e.requirePrivacyAuthorize = e.canUse("2.32.3") && wx.requirePrivacyAuthorize;
        return e;
      }
      __extends(e, t);
      Object.defineProperty(e.prototype, "appId", {
        get: function get() {
          return "wx6ff5aa14de283fd7";
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.string = function() {
        return _pConst.PFCode.Wechat;
      };
      e.prototype.init = function() {
        this.initVersion();
        this.initWechatListener();
        this.initCommonSetting();
        this.initTga();
      };
      e.prototype.initVersion = function() {
        var t;
        var e;
        this.version = wx.getAccountInfoSync && (null === (e = null === (t = wx.getAccountInfoSync()) || void 0 === t ? void 0 : t.miniProgram) || void 0 === e ? void 0 : e.version);
      };
      e.prototype.initTga = function() {};
      e.prototype.isSwitchedInitd = function() {};
      e.prototype.initWechatListener = function() {
        var t = this;
        wx.onShow(function(e) {
          _sound["default"].ins.playBGM(), _evts["default"].plE.emit({
            onShow: !0,
            isSharing: t.isSharing
          }), _uData["default"].ins.syncLaunchOption(e), t.isSharing || t.reenter(), t._share_callback && t._share_callback();
        });
        wx.onHide(function() {
          t.onHideT = _time["default"].ins.serverTime, _evts["default"].plE.emit({
            onHide: !0
          });
        });
        wx.onError(function(t) {
          _env.env.mode !== _env.EM.PROD && wx.showModal({
            title: t.message || "\u5f02\u5e38\u62a5\u9519",
            content: t.stack || "",
            showCancel: !1,
            confirmText: "\u597d\u7684"
          });
        });
        wx.onShareAppMessage(function() {
          return _pConst.SDKConfig.shareData();
        });
        wx.showShareMenu({
          withShareTicket: !0
        });
        this.canUse("2.0.2") || "qq" === this.getSystemData().AppPlatform && wx.onMemoryWarning(function() {
          wx.triggerGC();
        });
        var e = wx.getUpdateManager();
        e.onCheckForUpdate(function() {});
        e.onUpdateFailed(function() {});
        e.onUpdateReady(function() {
          wx.showModal({
            title: "\u66f4\u65b0\u63d0\u793a",
            content: "\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5c0f\u6e38\u620f\uff1f",
            success: function success(t) {
              t.confirm && e.applyUpdate();
            }
          });
        });
      };
      e.prototype.initCommonSetting = function() {
        _uData["default"].ins.syncLaunchOption(wx.getLaunchOptionsSync());
        wx.getNetworkType({
          success: function success(t) {
            _uData["default"].ins.network = t;
          },
          fail: function fail() {}
        });
        _evts["default"].chE.on(function() {});
      };
      e.prototype.setAccountID = function() {};
      e.prototype.login = function() {
        return new Promise(function(t, e) {
          wx.login({
            success: function success(o) {
              o && o.code ? (_idx.platform.cloud || (_idx.platform.cloud = wx.cloud && wx.cloud.init && (wx.cloud.init({
                env: ""
              }), _idx.platform.cloud = wx.cloud))).callFunction({
                name: "gOpenId",
                success: function success(e) {
                  var n = e.result;
                  if (n) if ("string" == typeof n) try {
                    var i = JSON.parse(n);
                    o.openid = i.i;
                  } catch (e) {} else o.openid = n.i;
                  t(o);
                },
                fail: function fail(t) {
                  console.error("err:", t);
                  e(_errorCode.errorCode.PF_CLOUD_ERR);
                }
              }) : (console.warn("\u5fae\u4fe1\u767b\u9646\u5931\u8d25\uff1aempty code"), t(_errorCode.errorCode.LOGIN_ERR));
            },
            fail: function fail(t) {
              var o = "";
              null != t && null != t.errMsg && (o = t.errMsg);
              console.warn("\u5fae\u4fe1\u767b\u9646\u5931\u8d25\uff1a", o);
              e(_errorCode.errorCode.LOGIN_ERR);
            }
          });
        });
      };
      e.prototype.initCloud = function() {
        return new Promise(function(t) {
          wx.login({
            success: function success() {
              var e;
              (null === (e = wx.cloud) || void 0 === e ? void 0 : e.init) && (_idx.platform.cloud = wx.cloud.init({
                env: ""
              }), _idx.platform.cloud = wx.cloud, t(_idx.platform.syncTime()));
            },
            fail: function fail() {
              t(null);
            }
          });
        });
      };
      e.prototype.syncTime = function() {
        return new Promise(function(t) {
          var e = _idx.platform.cloud || (_idx.platform.cloud = wx.cloud);
          e ? e.callFunction({
            name: "gTime",
            success: function success(e) {
              var o;
              var n = e.result;
              if (n) if ("string" == typeof n) try {
                o = JSON.parse(n).t;
              } catch (e) {} else o = n.t;
              t(o || null);
            },
            fail: function fail() {
              return t(null);
            }
          }) : t(null);
        });
      };
      e.prototype.getCloudData = function() {
        var t;
        var e = _idx.platform.cloud || (_idx.platform.cloud = wx.cloud && wx.cloud.init && (wx.cloud.init({
          env: ""
        }), _idx.platform.cloud = wx.cloud));
        if (e) {
          var o = e.database();
          if (o) {
            var n = o.collection("userData");
            t = _idx.platform._check(n);
          }
        }
        return t;
      };
      e.prototype._check = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            return [ 2, new Promise(function(e) {
              t.where({}).get().then(function(t) {
                if (t) {
                  _idx.platform.isCheck = !0;
                  var o = t.data;
                  if (o && o.length) {
                    var n = o[0];
                    _idx.platform.dbId = n._id;
                    try {
                      var i = JSON.parse(n.uData);
                      e(i);
                    } catch (r) {
                      e(null);
                    }
                  } else e(null);
                } else e(null);
              })["catch"](function(t) {
                console.error(t);
                e(null);
              });
            }) ];
          });
        });
      };
      e.prototype.setCloudData = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          var e;
          var o;
          var n;
          var i;
          var r;
          return __generator(this, function(a) {
            switch (a.label) {
             case 0:
              return (e = this).isSaving ? [ 2 ] : (o = _idx.platform.cloud || (_idx.platform.cloud = wx.cloud && wx.cloud.init && (wx.cloud.init({
                env: ""
              }), _idx.platform.cloud = wx.cloud))) ? [ 4, o.database() ] : [ 3, 2 ];

             case 1:
              if (!(n = a.sent())) return [ 2 ];
              e.isSaving = !0, i = n.collection("userData"), r = Promise.resolve(), e.isCheck || (r = this._check(i)), 
              r.then(function() {
                e.dbId ? i.doc(e.dbId).update({
                  data: {
                    uData: t
                  }
                }).then(function(t) {
                  console.log(t);
                  _idx.platform.isSaving = !1;
                }) : i.add({
                  data: {
                    uData: t
                  }
                }).then(function(t) {
                  _idx.platform.dbId = t.id;
                  _idx.platform.isSaving = !1;
                });
              })["catch"](function(t) {
                console.error("\u5199\u5165\u5931\u8d25", t);
                return e.isSaving = !1;
              }), a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      e.prototype.getUserInfo = function() {
        return new Promise(function(t, e) {
          wx.getSetting({
            success: function success(o) {
              if (o.authSetting["scope.userInfo"]) wx.getUserInfo({
                success: function success(e) {
                  t(e.userInfo);
                },
                fail: function fail() {
                  e(null);
                }
              }); else {
                var n = wx.createUserInfoButton({
                  type: "text",
                  text: "\u83b7\u53d6\u7528\u6237\u4fe1\u606f",
                  style: {
                    left: -999,
                    top: -999,
                    width: 2,
                    height: 1,
                    lineHeight: 40,
                    backgroundColor: "#00000000",
                    color: "#ffffff",
                    textAlign: "center",
                    fontSize: 16,
                    borderRadius: 4,
                    borderColor: "#ffffff",
                    borderWidth: 0
                  }
                });
                n.onTap(function(e) {
                  n.destroy();
                  t(e.userInfo);
                });
              }
            }
          });
        });
      };
      e.prototype.reenter = function() {};
      e.prototype.getStorage = function(t) {
        try {
          var e = wx.getStorageSync(t);
          return null == e || "" == e ? null : JSON.parse(e);
        } catch (o) {}
      };
      e.prototype.setStorage = function(t, e) {
        try {
          wx.setStorageSync(t, JSON.stringify(e));
        } catch (o) {}
      };
      e.prototype.clearStorage = function() {
        try {
          wx.clearStorageSync();
        } catch (t) {}
      };
      e.prototype.removeStorage = function(t) {
        try {
          wx.removeStorageSync(t);
        } catch (e) {}
      };
      e.prototype.trackLogin = function() {};
      e.prototype.trackUserSet = function() {};
      e.prototype.trackUserSetOnce = function() {};
      e.prototype.trackEvent = function() {};
      e.prototype.getSeq = function() {};
      e.prototype.consumeSeq = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(e) {
            switch (e.label) {
             case 0:
              return t.sequenceInfo.type != _pConst.STDSeqType.VIDEO ? [ 3, 2 ] : [ 4, this.doWatchAD(t) ];

             case 1:
              e.sent(), this.doShare(), e.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      e.prototype.doWatchAD = function(t) {
        return __awaiter(this, void 0, void 0, function() {
          var e;
          var o;
          var n;
          var i;
          return __generator(this, function() {
            if (!this.noAd) {
              if (!this.noVideo) return _evts["default"].adE.emit(_c.ADE.VIDEO), o = _adC.VEnum[null !== (e = t.videoDuration) && void 0 !== e ? e : 30], 
              this.preloadVideo(o) ? null == (n = this.videoMap[o]) ? (_evts["default"].adE.emit(_c.ADE.VIDEO_END), 
              [ 2, Promise.reject(_pConst.VideoFailCode.NO_AD) ]) : (this.showLoading(), i = this, 
              [ 2, new Promise(function(t, e) {
                n.onClose(function o(i) {
                  null != n && n.offClose(o), null != i && i.isEnded ? (_evts["default"].adE.emit(_c.ADE.VIDEO_END), 
                  t(1)) : (_evts["default"].adE.emit(_c.ADE.VIDEO_END), e(_pConst.VideoFailCode.CANCELED));
                });
                n.show().then(function() {})["catch"](function() {
                  _evts["default"].adE.emit(_c.ADE.VIDEO_END);
                  n.destroy();
                  i.videoMap[o] = null;
                  e(_pConst.VideoFailCode.NO_AD);
                }).then(function() {
                  i.hideLoading();
                });
              }) ]) : (_evts["default"].adE.emit(_c.ADE.VIDEO_END), [ 2, Promise.reject(_pConst.VideoFailCode.NO_AD) ]);
              Promise.reject(_pConst.VideoFailCode.NO_AD);
            }
            return [ 2 ];
          });
        });
      };
      e.prototype.doShare = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function() {
            return [ 2 ];
          });
        });
      };
      e.prototype.canUse = function(t) {
        return _com["default"].ins.compareVersion(this.getSystemData().SDKVersion, t) >= 0;
      };
      e.prototype.getSystemData = function() {
        if (null == this.systemInfoCache) try {
          this.systemInfoCache = wx.getSystemInfoSync();
        } catch (t) {
          return _pConst.DefaultSystemInfo;
        }
        return this.systemInfoCache;
      };
      e.prototype.getSwitches = function() {};
      e.prototype.vibrate = function(t) {
        t == _pConst.VEnum4.SHORT ? wx.vibrateShort({
          type: "medium"
        }) : t == _pConst.VEnum4.LONG && wx.vibrateLong();
      };
      e.prototype.preloadVideo = function(t) {
        if (!this.canUse("2.0.4")) return !1;
        var e = this.videoCheckedMap[t];
        if (e) return e;
        var o = this.videoCheckedLastT[t];
        var n = Date.now();
        if (!e && (null == o || n - o >= _pConst.SDKConfig.videoCoolTime)) {
          var i = this.videoMap[t];
          if (null == i) {
            var r = this;
            i = wx.createRewardedVideoAd({
              adUnitId: t,
              multiton: !0
            });
            this.videoMap[t] = i;
            i.onLoad(function() {
              r.videoCheckedMap[t] = !0, r.videoCheckedLastT[t] = Date.now();
            });
            i.onError(function() {
              r.videoMap[t] = null;
              r.videoCheckedMap[t] = !1;
              r.videoCheckedLastT[t] = Date.now();
              i.destroy();
            });
          }
          null != i && i.load();
        }
        return !1;
      };
      e.prototype.showModal = function(t) {
        return new Promise(function(e) {
          wx.showModal(Object.assign(Object.assign({}, t), {
            success: function success(t) {
              t.confirm ? e(!0) : t.cancel && e(!1);
            },
            fail: function fail() {
              e(!1);
            }
          }));
        });
      };
      e.prototype.refreshGame = function() {
        wx.restartMiniProgram ? wx.restartMiniProgram({
          fail: function fail() {
            wx.exitMiniProgram();
          },
          path: ""
        }) : wx.exitMiniProgram();
      };
      e.prototype.showLoading = function() {
        this.canUse("1.1.0") && (this.isLoading = !0, wx.showLoading({
          title: "\u52a0\u8f7d\u4e2d",
          mask: !0
        }));
      };
      e.prototype.hideLoading = function() {
        this.canUse("1.1.0") && this.isLoading && (wx.hideLoading(), this.isLoading = !1);
      };
      e.prototype.log = function() {};
      e.prototype.getMenuBounding = function() {};
      e.prototype.createShareImage = function() {};
      e.prototype.drawImage = function() {};
      e.prototype.preloadInterstitialAD = function() {};
      e.prototype.showInterstitialAD = function() {};
      e.prototype.canShowBanner = function() {};
      e.prototype.getBannerSize = function() {};
      e.prototype.showBanner = function() {};
      e.prototype.hideBanner = function() {};
      e.prototype.getSubscribeCnt = function() {};
      e.prototype.subscribe = function() {};
      e.prototype.startVideoRecord = function() {};
      e.prototype.pauseVideoRecord = function() {};
      e.prototype.resumeVideoRecord = function() {};
      e.prototype.stopVideoRecord = function() {};
      e.prototype.hasVideoRecord = function() {
        return !1;
      };
      e.prototype.shareVideoRecord = function() {};
      e.prototype.uploadAdEvent = function() {};
      e.prototype.addShortcut = function() {};
      e.prototype.reportEvent = function(t, e) {
        wx.reportEvent(t, e);
      };
      e.prototype.PostMessage = function(t, e, o) {
        wx.getOpenDataContext().postMessage({
          Even: t,
          Value1: e,
          Value2: o
        });
      };
      e.prototype.GetOpenDataContext = function() {
        return wx.getOpenDataContext();
      };
      e.prototype.share = function() {
        var t = this;
        return new Promise(function(e) {
          var o = _pConst.SDKConfig.shareData();
          wx.shareAppMessage({
            title: o.title,
            imageUrl: o.imageUrl,
            query: o.query
          });
          t._share_time = new Date().getTime();
          t._share_callback = function() {
            var o = t._share_time;
            t._share_time = t._share_callback = null;
            _sound["default"].ins.playBGM();
            o > 0 && new Date().getTime() - o >= 3e3 ? e(1) : e(0);
          };
        });
      };
      e.prototype.getUserProfile = function() {};
      e.prototype.subScriptionUpdate = function() {
        this.canUse("2.32.1") && wx.getSetting({
          withSubscriptions: !0,
          success: function success(t) {
            var e = t.subscriptionsSetting;
            var o = e.mainSwitch;
            var n = e.itemSettings;
            (!n && !o || n && "accept" != n.SYS_MSG_TYPE_INTERACTIVE) && wx.requestSubscribeSystemMessage({
              msgTypeList: [ "SYS_MSG_TYPE_WHATS_NEW" ],
              success: function success() {}
            });
          }
        });
      };
      return e;
    }(_pf["default"]);
    exports["default"] = _;
    cc._RF.pop();
  }, {
    adC: "adC",
    c: "c",
    com: "com",
    env: "env",
    errorCode: "errorCode",
    evts: "evts",
    idx: "idx",
    pConst: "pConst",
    pf: "pf",
    sound: "sound",
    time: "time",
    uData: "uData"
  } ]
}, {}, [ "request", "Creator", "IServerCfg", "NumberUtils", "PopupLoading", "Puzzle", "PuzzleCell", "PuzzleLine", "Solver", "Utility", "adC", "ali", "androidP", "bagMgr", "banner", "baseUI", "c", "cfgMgr", "challengeMgr", "chaptBtn", "chapterItem", "chgBtn", "com", "dateItem", "dayReward", "dynamicBtnBg", "env", "errorCode", "evts", "festivalMgr", "game", "global", "grid", "guide", "h5", "head", "heart", "hedge", "ice", "idx", "iosP", "item", "item1", "jigMenu", "jigsaw", "jigsawMgr", "lang", "levelItem", "levelMgr", "loading", "loadingAni", "mailItem", "mailMgr", "main", "mySafeArea", "nameFrame", "nativeP", "newJigMgr", "pConst", "pInfo", "packItem", "packItem1", "page_challenge", "page_jigsaw", "page_level", "page_race", "page_shop", "panelMgr", "pf", "fly", "flyio", "qq", "questItem", "raceRankItem", "random_notice", "rankItem", "rankMgr", "res", "rewardMgr", "scrollView", "shopItem", "shopItem1", "shopMgr", "skinBg", "skinContent", "skinHeadFrame", "skinItemBase", "skinMgr", "skinNameFrame", "skinRole", "slider", "sound", "swBtn", "tE", "taskMgr", "tb", "time", "tipMgr", "toast", "top", "tt", "uData", "ui_backReward", "ui_challengeInfo", "ui_chapter", "ui_chapterDone", "ui_contentUs", "ui_deskReward", "ui_festival", "ui_flyAni", "ui_gamesetlattice", "ui_getHeart", "ui_getItem", "ui_getRes", "ui_getReward", "ui_info", "ui_jigFinish", "ui_jigTip", "ui_jigsaw", "ui_luckyGift", "ui_lvInfo", "ui_mail", "ui_mailInfo", "ui_newGift", "ui_preReward", "ui_privacy", "ui_quest", "ui_raceTip", "ui_rank", "ui_rePlay", "ui_rePlayRace", "ui_record", "ui_reiGift", "ui_save", "ui_saveConfirm", "ui_saveRestore", "ui_selectMode", "ui_set", "ui_sevenDay", "ui_shopPack", "ui_sidebar", "ui_skin", "ui_skinInfo", "ui_tip", "ui_userInfo", "uvAni", "vb", "veBtn", "vivo", "worm", "wormSp", "wx", "temp" ]);