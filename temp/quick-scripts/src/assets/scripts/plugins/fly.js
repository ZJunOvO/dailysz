"use strict";
cc._RF.push(module, '5cb399zOCVMQ7XhcfvghvHe', 'fly');
// scripts/plugins/fly.js

"use strict";

(function (t, n) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = n();else if ("function" == typeof define && define.amd) define([], n);else {
    var i = n();

    for (var r in i) {
      ("object" == typeof exports ? exports : t)[r] = i[r];
    }
  }
})(void 0, function () {
  return function (t) {
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

    o.i = function (t) {
      return t;
    };

    o.d = function (t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, {
        configurable: !1,
        enumerable: !0,
        get: n
      });
    };

    o.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      o.d(e, "a", e);
      return e;
    };

    o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    };

    o.p = "";
    return o(o.s = 2);
  }([function (t) {
    var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
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
          if ("array" == s) i.forEach(function (e, o) {
            n.isObject(e) || (o = "");
            t(e, r + "%5B" + o + "%5D");
          });else if ("object" == s) for (var c in i) {
            t(i[c], r ? r + "%5B" + a(c) + "%5D" : a(c));
          } else o || (e += "&"), o = !1, e += r + "=" + a(i);
        }(t, ""), e) : t;
      },
      merge: function merge(t, e) {
        for (var o in e) {
          t.hasOwnProperty(o) ? this.isObject(e[o], 1) && this.isObject(t[o], 1) && this.merge(t[o], e[o]) : t[o] = e[o];
        }

        return t;
      }
    };
  },, function (t, e, o) {
    var n = function () {
      function t(t, e) {
        for (var o = 0; o < e.length; o++) {
          var n = e[o];
          n.enumerable = n.enumerable || !1;
          n.configurable = !0;
          "value" in n && (n.writable = !0);
          Object.defineProperty(t, n.key, n);
        }
      }

      return function (e, o, n) {
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

    var s = function () {
      function t(e) {
        function o(t) {
          var e = void 0;
          var o = void 0;

          function n() {
            t.p = e = o = null;
          }

          r.merge(t, {
            lock: function lock() {
              e || (t.p = new Promise(function (t, n) {
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

      n(t, [{
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
          var h = new Promise(function (l, h) {
            function f(t) {
              return t && t.then && t["catch"];
            }

            function g(t, e) {
              t ? t.then(function () {
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
              var v = -1 !== ["GET", "HEAD", "DELETE", "OPTION"].indexOf(o.method);

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

              for (var I in r.trim((S || "").toLowerCase()) === T ? e = r.formatParams(e) : r.isFormData(e) || -1 === ["object", "array"].indexOf(r.type(e)) || (T = "application/json;charset=utf-8", e = JSON.stringify(e)), S || v || (o.headers[s] = T), o.headers) {
                if (I === s && r.isFormData(e)) delete o.headers[I];else try {
                  i.setRequestHeader(I, o.headers[I]);
                } catch (R) {}
              }

              function D(t, e, n) {
                g(p.p, function () {
                  if (t) {
                    n && (e.request = o);
                    var i = t.call(p, e, Promise);
                    e = void 0 === i ? e : i;
                  }

                  f(e) || (e = Promise[0 === n ? "resolve" : "reject"](e));
                  e.then(function (t) {
                    l(t);
                  })["catch"](function (t) {
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

              i.onload = function () {
                try {
                  var t = i.response || i.responseText;
                  t && o.parseJson && -1 !== (i.getResponseHeader(s) || "").indexOf("json") && !r.isObject(t) && (t = JSON.parse(t));
                  var e = i.responseHeaders;

                  if (!e) {
                    e = {};
                    var n = (i.getAllResponseHeaders() || "").split("\r\n");
                    n.pop(), n.forEach(function (t) {
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
                  if (r.merge(l, i._response), a >= 200 && a < 300 || 304 === a) l.engine = i, l.request = o, D(p.handler, l, 0);else {
                    var u = new k(c, a);
                    u.response = l, P(u);
                  }
                } catch (u) {
                  P(new k(u.msg, i.status));
                }
              };

              i.onerror = function (t) {
                P(new k(t.msg || "Network Error", 0));
              };

              i.ontimeout = function () {
                P(new k("timeout [ " + i.timeout + "ms ]", 1));
              };

              i._options = o;
              setTimeout(function () {
                i.send(v ? null : e);
              }, 0);
            }

            r.isObject(t) && (t = (o = t).url);
            (o = o || {}).headers = o.headers || {};
            g(u.p, function () {
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
              a.then(function (t) {
                t === o ? y(t) : l(t);
              }, function (t) {
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
          return function (e) {
            return t.apply(null, e);
          };
        }
      }]);
      return t;
    }();

    s["default"] = s;
    ["get", "post", "put", "patch", "head", "delete"].forEach(function (t) {
      s.prototype[t] = function (e, o, n) {
        return this.request(e, o, r.merge({
          method: t
        }, n));
      };
    });
    ["lock", "unlock", "clear"].forEach(function (t) {
      s.prototype[t] = function () {
        this.interceptors.request[t]();
      };
    });
    t.exports = s;
  }]);
});

cc._RF.pop();