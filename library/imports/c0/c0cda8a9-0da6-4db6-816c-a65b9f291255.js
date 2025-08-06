"use strict";
cc._RF.push(module, 'c0cdaipDaZNtoFsplufKRJV', 'res');
// scripts/res.js

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

var a = function () {
  function t() {}

  Object.defineProperty(t, "ins", {
    get: function get() {
      this._ins || (this._ins = new t());
      return this._ins;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.lPre = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, this.l(t, cc.Prefab, "prefab")];

          case 1:
            return [2, e.sent()];
        }
      });
    });
  };

  t.prototype.lSF = function (t, e) {
    return __awaiter(this, void 0, void 0, function () {
      var o;
      return __generator(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, this.l(t, cc.SpriteFrame, "resSps")];

          case 1:
            return o = n.sent(), e && o && (e.spriteFrame = o), [2, o];
        }
      });
    });
  };

  t.prototype.l = function (t, e, o) {
    void 0 === o && (o = "resources");
    return __awaiter(this, void 0, void 0, function () {
      var n;
      var r;
      return __generator(this, function (i) {
        switch (i.label) {
          case 0:
            return t ? (n = cc.resources).getInfoWithPath(t) ? [3, 4] : [3, 1] : [3, 6];

          case 1:
            return (n = cc.assetManager.getBundle(o)) ? [3, 4] : [3, 2];

          case 2:
            return [4, new Promise(function (t, e) {
              cc.assetManager.loadBundle(o, function (o, n) {
                o ? e(o) : t(n);
              });
            })];

          case 3:
            n = i.sent(), i.label = 4;

          case 4:
            return [4, this.d(o, t, e)];

          case 5:
            return (r = i.sent()) ? [2, r] : [2, new Promise(function (o, i) {
              n.load(t, e, function (t, e) {
                t ? i(t) : o(e);
              });
            })];

          case 6:
            return [2, null];
        }
      });
    });
  };

  t.prototype.d = function (t, e, o) {
    return __awaiter(this, void 0, void 0, function () {
      var n;
      return __generator(this, function () {
        return e && r(t, e, o) && (n = cc.assetManager.assets.get(e)) ? [2, n] : [2, null];
      });
    });
  };

  t.prototype.getBundleByString = function (t) {
    var e;
    var o;
    var n = new Promise(function (t, n) {
      e = t;
      o = n;
    });
    var i = cc.assetManager.getBundle(t);
    i ? e(i) : cc.assetManager.loadBundle(t, function (t, n) {
      t ? o() : e(n);
    });
    return n;
  };

  return t;
}();

exports["default"] = a;

cc._RF.pop();