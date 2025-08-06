Object.defineProperty(exports, "__esModule", {value: !0});
var _evts = require("evts");
var _res = require("res");
var _uData = require("uData");
var _cfgMgr = require("cfgMgr");
var _global = require("global");
var _pInfo = require("pInfo");
var d = cc._decorator;
var h = d.ccclass;
var f =
    (d.property,
    (function () {
        function t() {
            this._bgId = 0;
            this.oneChapLvlCount = 54;
        }
        var e;
        e = t;
        Object.defineProperty(t, "ins", {
            get: function () {
                return this._ins || (this._ins = new e());
            },
            enumerable: !1,
            configurable: !0
        });
        t.prototype.getBgId = function () {
            return 0;
        };
        t.prototype.init = function () {
            return Promise.all([this.updateData(), this.updatePracticeData()]);
        };
        t.prototype.updateData = function () {
            var t = this;
            var e = _pInfo.default.ins.getPuzzleLvl();
            var o = Math.ceil(e / this.oneChapLvlCount);
            if (o != this.bundleId) {
                this.bundleId = o;
                this.bundle && (this.bundle.releaseAll(), _uData.default.ins._setLocalAndCloudData());
                var n = Math.floor(((e - 1) / 54) % 4);
                (isNaN(n) || n < 0 || n > 3) && (n = 0);
                this._bgId = n;
                cc.assetManager.loadBundle("resSps", function (t, e) {
                    var o = _global.default.padScale ? "ipad/" : "";
                    !t && e.load("pages/page_level/" + o + "bg" + n, cc.SpriteFrame);
                });
                var i = (this.bundleName = 100 + this.bundleId + "");
                return new Promise(function (e, n) {
                    var r = function () {
                        cc.assetManager.loadBundle(i, function (o, i) {
                            o
                                ? n()
                                : ((t.bundle = i),
                                  i.load("data", cc.BufferAsset, function (o, i) {
                                      o && n();
                                      t.data = new Uint32Array(i._buffer);
                                      e(1);
                                  }));
                        });
                    };
                    o > 18
                        ? cc.assetManager.loadRemote(
                              _global.OssConfig.levelUrl + i + "/data.bin",
                              cc.BufferAsset,
                              function (n, a) {
                                  n
                                      ? t.data || ((i = 101 + ((o - 1) % 18) + ""), r())
                                      : ((t.data = new Uint32Array(a._buffer)), e(1));
                              }
                          )
                        : r();
                });
            }
        };
        t.prototype.updatePracticeData = function () {
            var t = this;
            return new Promise(function (e, o) {
                cc.assetManager.loadBundle("practice", function (n, i) {
                    n
                        ? o()
                        : (i.load("data", cc.BufferAsset, function (e, n) {
                              e && o();
                              t.practiceData = new Uint32Array(n._buffer);
                          }),
                          e(i));
                });
            });
        };
        t.prototype.updateTmpData = function (t) {
            var e = this;
            this.tmpBundleId = t;
            var o = (this.tmpBundleName = 100 + t + "");
            return new Promise(function (n, i) {
                var r = function () {
                    cc.assetManager.loadBundle(o, function (t, o) {
                        t
                            ? i()
                            : ((e.tmpBundle = o),
                              o.load("data", cc.BufferAsset, function (t, o) {
                                  t && i();
                                  e.tmpData = new Uint32Array(o._buffer);
                                  n(1);
                              }));
                    });
                };
                t > 18
                    ? cc.assetManager.loadRemote(
                          _global.OssConfig.levelUrl + o + "/data.bin",
                          cc.BufferAsset,
                          function (i, a) {
                              i
                                  ? e.tmpData || ((o = 101 + ((t - 1) % 18) + ""), r())
                                  : ((e.tmpData = new Uint32Array(a._buffer)), n(1));
                          }
                      )
                    : r();
            });
        };
        t.prototype.getPracticeData = function () {
            var t = this;
            this.practiceData ||
                _res.default.ins
                    .getBundleByString("practice")
                    .then(function (e) {
                        var o = e.get("data", cc.BufferAsset);
                        t.practiceData = new Uint32Array(o._buffer);
                    })
                    .catch(function (t) {
                        console.error("RTool.ins.getBundleByString('practice')", t);
                    });
            return this.practiceData;
        };
        t.prototype.getPracticeId = function () {
            this.practiceId
                ? (this.practiceId++, this.practiceId > this.getPuzzleLvlCount(!0) && (this.practiceId = 2))
                : (this.practiceId = 2);
            return this.practiceId;
        };
        t.prototype.clearPrcitceId = function () {
            this.practiceId = null;
        };
        t.prototype.getPuzzleSprFrame = function (t) {
            var e = this;
            return new Promise(function (o, n) {
                var i = t;
                var r = ((i - 1) % e.oneChapLvlCount) + 1 + "";
                i > 972
                    ? cc.assetManager.loadRemote(
                          _global.OssConfig.levelUrl + (100 + e.bundleId + "/") + r + ".png",
                          cc.SpriteFrame,
                          function (t, e) {
                              t ? n() : o(new cc.SpriteFrame(e));
                          }
                      )
                    : e.bundle.load(r, cc.SpriteFrame, function (t, e) {
                          t ? n() : o(e);
                      });
            });
        };
        t.prototype.getPracitceSprfFrame = function (t) {
            return new Promise(function (e, o) {
                _res.default.ins
                    .getBundleByString("practice")
                    .then(function (n) {
                        n.load(t + "", cc.SpriteFrame, function (t, n) {
                            t ? o() : e(n);
                        });
                    })
                    .catch(function (t) {
                        console.error("RTool.ins.getBundleByString('resSps')", t);
                    });
            });
        };
        t.prototype.getPuzzleDiff = function () {
            return this.getPuzzleInfo().diff;
        };
        t.prototype.getPuzzleLvlCount = function (t) {
            return t ? this.getPracticeData()[1] : this.oneChapLvlCount;
        };
        t.prototype.getPuzzleInfo = function (t, e) {
            var o = t ? this.getPracticeData() : this.data;
            var n = o[0];
            var i = o[1];
            var r = t && e ? e - 1 : (_pInfo.default.ins.getPuzzleLvl() - 1) % this.oneChapLvlCount;
            var a = o[2 + i + (0 == r ? 0 : o[2 + r - 1] + r)];
            return {id: r, type: n, size: 255 & a, diff: (a >> 8) & 255};
        };
        t.prototype.getPuzzleData = function (t, e) {
            for (
                var o = t ? this.getPracticeData() : this.data,
                    n = o[1],
                    i = t && e ? e - 1 : (_pInfo.default.ins.getPuzzleLvl() - 1) % this.oneChapLvlCount,
                    r = 0 == i ? 0 : o[2 + i - 1] + i,
                    a = o[2 + i] + i,
                    s = o[2 + n + r],
                    c = Math.pow(255 & s, 2),
                    l = 2 + n + a + 1,
                    u = [],
                    d = 0,
                    h = 2 + n + r + 1;
                h < l;
                h++
            ) {
                for (var f = o[h], g = 0; g < 32; g++) {
                    var y = (1 << g) & 4294967295;
                    if (((u[d++] = (f & y) == y ? 1 : 0), d == c)) break;
                }
                if (d == c) break;
            }
            return u;
        };
        Object.defineProperty(t.prototype, "levelBundle", {
            get: function () {
                return this.bundle;
            },
            enumerable: !1,
            configurable: !0
        });
        t.prototype.getJigsawIcon = function (t, e) {
            var o = this;
            void 0 === e && (e = this.bundleName);
            return new Promise(function (n, i) {
                e > "118"
                    ? cc.assetManager.loadRemote(
                          _global.OssConfig.chapterUrl + (e + "/") + t + ".jpg",
                          cc.SpriteFrame,
                          function (t, e) {
                              t ? i() : ((e.packable = !1), n(new cc.SpriteFrame(e)));
                          }
                      )
                    : o
                          .getchapterBunder()
                          .then(function (o) {
                              o.load(e + "/" + t, cc.SpriteFrame, function (t, e) {
                                  t ? i() : n(e);
                              });
                          })
                          .catch(function (t) {
                              console.error("getchapterBunderErr", t);
                          });
            });
        };
        t.prototype.releaseJigsawIcon = function (t, e) {
            if ((void 0 === e && (e = this.bundleName), !(e > "118"))) {
                var o = cc.assetManager.getBundle("chapter");
                if (o) {
                    var n = o.get(e + "/" + t, cc.SpriteFrame);
                    n && cc.assetManager.releaseAsset(n);
                }
            }
        };
        t.prototype.updateJigsaw = function (t) {
            setTimeout(function () {
                _evts.default.opE.emit({action: _evts.default.UPDJIGSAW});
            }, t);
        };
        t.prototype.updJigAndPop = function (t) {
            setTimeout(function () {
                _evts.default.opE.emit({action: _evts.default.FINISH_PUZZLELV});
            }, t);
        };
        t.prototype.popFestival = function (t) {
            setTimeout(function () {
                _evts.default.opE.emit({action: _evts.default.POP_FESTIVAL});
            }, t);
        };
        t.prototype.getchapterBunder = function () {
            return __awaiter(this, void 0, void 0, function () {
                var t;
                return __generator(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (t = cc.assetManager.getBundle("chapter"))
                                ? [3, 2]
                                : [
                                      4,
                                      new Promise(function (t, e) {
                                          cc.assetManager.loadBundle("chapter", function (o, n) {
                                              o ? e() : t(n);
                                          });
                                      })
                                  ];
                        case 1:
                            return [2, e.sent()];
                        case 2:
                            return [2, t];
                    }
                });
            });
        };
        t.prototype.getLevelCost = function () {
            var t = e.ins.getPuzzleDiff();
            var o = _cfgMgr.default.serverCfg.difficulty_rules.rules;
            var n = 10;
            var i = 1;
            for (var r in o) {
                var a = o[r];
                if (((n = Number(a.times_val)), i === t)) break;
                i++;
            }
            return n;
        };
        t.prototype.getLevelDiffStr = function () {
            var t = e.ins.getPuzzleDiff();
            var o = _cfgMgr.default.serverCfg.difficulty_rules.rules;
            var n = "入门难度";
            var i = 1;
            for (var r in o) {
                if (((n = o[r].title), i === t)) break;
                i++;
            }
            return n.slice(0, -2);
        };
        return (e = __decorate([h], t));
    })());
exports.default = f;
