"use strict";
cc._RF.push(module, '3eb69/8EbJE/rYyIHzTmHB4', 'nativeP');
// scripts/nativeP.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _pConst = require("pConst");

var a = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isNative = !0;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function () {
    this.initListener();
  };

  Object.defineProperty(e.prototype, "isLogin", {
    get: function get() {
      return !1;
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.showLogin = function (t) {
    t && (this.loginResolve = t);
  };

  e.prototype.loginSuceess = function () {
    this.loginResolve();
  };

  e.prototype.videoError = function (t) {
    this.reject(t);
  };

  e.prototype.videoEnd = function (t) {
    t == _pConst.VideoFailCode.CANCELED ? this.reject(t) : this.resolve();
  };

  return e;
}(require("h5")["default"]);

exports["default"] = a;

cc._RF.pop();