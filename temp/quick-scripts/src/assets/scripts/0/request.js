"use strict";
cc._RF.push(module, 'c853fD3v1xDPam4tdNFLok2', 'request');
// scripts/0/request.js

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

var f = function () {
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

  t.prototype.getUserToken = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (t) {
        switch (t.label) {
          case 0:
            return this._userToken ? [3, 2] : [4, this.desynclogin()];

          case 1:
            t.sent(), t.label = 2;

          case 2:
            return [2, this._userToken];
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

  t.prototype._post = function (t, e, o, n, i, r) {
    return;
    void 0 === n && (n = !1);
    void 0 === i && (i = 5e3);
    void 0 === r && (r = "https://adapi.tjkj300.com");
    var s = {
      Authorization: e
    };
    n && (s["X-Fc-Invocation-Type"] = "Async", s["X-Fc-Stateful-Async-Invocation-Id"] = Date.now().toString());
    return new Promise(function (e, l) {
      var u = {
        headers: s,
        timeout: i
      };
      (_pConst.PFCode.Alipay === _idx.platform.string() || _idx.platform.isNative) && (u.responseType = "json");
      h.post(r + t, o, u).then(function (t) {
        var o = "string" != typeof t.data || n ? t.data : JSON.parse(t.data);
        e(o);
      })["catch"](function (t) {
        console.warn("[reason]", JSON.stringify(t));
        l(_errorCode.errorCode.HTTP_ERR);
      });
    });
  };

  t.prototype.desynclogin = function () {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      var o;
      var n;
      var r;
      var s;
      var c;
      return __generator(this, function (i) {
        switch (i.label) {
          case 0:
            return [4, _idx.platform.login()];

          case 1:
            return e = i.sent(), o = e.code, n = e.anonymous_code, o ? [4, t.ins.login(o, n)] : [2];

          case 2:
            if (0 == (r = i.sent()).state) throw new Error("登录状态吗错误：" + r.state);
            return s = t.ins, c = r.data, _time["default"].ins.sync(r.server_time), s.userToken = c.token, s.openId = c.openid, [2];
        }
      });
    });
  };

  t.prototype.getJson = function () {
    var t = {};
    t.appid = this.APPID;
    return this._post("/v1/GameConfigApi/get_game_init_config", "N644UF9VMU9OFTTYHOV3DEGY7L2DMMVP", t, !1);
  };

  t.prototype.login = function (t, e, o, n) {
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

  t.prototype.getTime = function () {
    return this._post("/v1/GameConfigApi/game_user_login", "123456", {}, void 0, 2e3);
  };

  t.prototype.updateUserInfo = function (t) {
    var e = this;
    this.getUserToken().then(function (o) {
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
    })["catch"](function (t) {
      console.error("updateUserInfoErr", t);
    });
  };

  t.prototype.addHomepageConsult = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      return __generator(this, function (n) {
        switch (n.label) {
          case 0:
            return t = "/v1/GameApi/get_addHome", (e = {}).alipay_user_id = this.openId, [4, this.getUserToken()];

          case 1:
            return o = n.sent(), [2, this._post(t, o, e, !1)];
        }
      });
    });
  };

  t.prototype.uploadRank = function (t, e) {
    var o = this;
    this.getUserToken().then(function (n) {
      if (n) {
        var i = {};
        i.client_data = [t];
        i.type = e;

        o._post("/v1/GameApi/upload_gamer_score", n, i, !0);
      }
    })["catch"](function (t) {
      console.error("uploadRankErr", t);
    });
  };

  t.prototype.getRank = function (t, e, o, n, i, r) {
    var a = this;
    return Promise.resolve(function (res) {
      cc.resources.load('rank', function (err, json) {
        res(json.json);
      });
    }); // return this.getUserToken()
    //     .then(function(s) {
    //         if (!s) return Promise.reject("no auth");
    //         var c = {};
    //         c.rank_tag = t;
    //         c.sort_type = o;
    //         c.sec_sort_type = r;
    //         c.type = e;
    //         c.limit = i || 100;
    //         c.date = n;
    //         return a._post("/v1/GameApi/get_rank_list", s, c);
    //     })
    //     .catch(function(t) {
    //         console.error("getRankErr", t);
    //     });
  };

  t.prototype.adDot = function (t, e, o, n) {
    var i = this;
    void 0 === o && (o = 1);
    void 0 === n && (n = 1);
    this.getUserToken().then(function (a) {
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
    })["catch"](function (t) {
      console.error("adDotErr", t);
    });
  };

  t.prototype.userFeedBack = function (t) {
    var e = this;
    return this.getUserToken().then(function (o) {
      if (o) {
        var n = {};
        n.content = t;
        return e._post("/v1/GameApi/add_reply", o, n);
      }
    })["catch"](function (t) {
      console.error("userFeedBackErr", t);
    });
  };

  t.prototype.updateServerData = function (t, e, o, n) {
    var i = this;
    return this.getUserToken().then(function (r) {
      if (r) {
        var a = {};
        a.user_data = t;
        a.save_tag = e;
        a.title = o;
        a.extra_data = n;
        var s = "backData" != e;
        return i._post("/v1/GameApi/backup_user_data", r, a, s, 5500);
      }
    })["catch"](function (t) {
      console.error("updateServerDataErr", t);
    });
  };

  t.prototype.getServerData = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      var o;
      var n;
      return __generator(this, function (i) {
        switch (i.label) {
          case 0:
            return e = "/v1/GameApi/get_user_backup", [4, this.getUserToken()];

          case 1:
            return (o = i.sent()) ? ((n = {}).save_tag = t, [2, this._post(e, o, n)]) : [2];
        }
      });
    });
  };

  t.prototype.getMailData = function (t, e) {
    var o = this;
    return this.getUserToken().then(function (n) {
      if (n) {
        var i = {};
        i.type = t;
        i.exp_ids = e;
        return o._post("/v1/GameApi/get_mail", n, i);
      }
    })["catch"](function (t) {
      console.error("getMailDataErr", t);
    });
  };

  t.prototype.updateChallengeData = function (t) {
    var e = this;
    this.getUserToken().then(function (o) {
      if (o && t) {
        var n = {};
        n.level = t;

        e._post("/v1/GameApi/passLevel", o, n);
      }
    })["catch"](function (t) {
      console.error("updateUserInfoErr", t);
    });
  };

  t.prototype.getChallengeData = function (t) {
    var e = this;
    return this.getUserToken().then(function (o) {
      if (o && t) {
        var n = {};
        n.level = t;
        return e._post("/v1/GameApi/getCompletionInfo", o, n);
      }
    })["catch"](function (t) {
      console.error("updateUserInfoErr", t);
    });
  };

  t.prototype.getUserDataByUid = function (t) {
    var e = this;
    return this.getUserToken().then(function (o) {
      if (o && t) {
        var n = {};
        n.game_uid = t;
        return e._post("/v1/GameApi/getUserData", o, n);
      }
    })["catch"](function (t) {
      console.error("getUserDataByUid", t);
    });
  };

  t.prototype.sendSevenCard = function (t, e) {
    var o = this;
    this.getUserToken().then(function (n) {
      if (n && e) {
        var i = {};
        i.aid = t;
        i.open_id = o.openId;
        i.reward_index = e;
        return o._post("/v1/GameApi/saveUserAlienCard", n, i);
      }
    })["catch"](function (t) {
      console.error("sendSevenCard", t);
    });
  };

  t.prototype.paymentResult = function (t) {
    var e = this;
    return this.getUserToken().then(function (o) {
      if (o) {
        var n = t;
        return e._post("/v1/GameApi/get_delivery_status", o, n);
      }
    })["catch"](function (t) {
      console.error("get_delivery_status", t);
    });
  };

  t.prototype.getPayGamecoins = function () {
    var t = this;
    return this.getUserToken().then(function (e) {
      if (e) {
        var o = {};
        o.open_id = t.openId;
        console.log("获取游戏币参数", o);
        return t._post("/v1/GameApi/get_balance", e, o);
      }
    });
  };

  t.prototype.getUnshippedOrders = function () {
    var t = this;
    return this.getUserToken().then(function (e) {
      if (e) {
        var o = {};
        o.open_id = t.openId;
        return t._post("/v1/GameApi/get_unshipped_orders", e, o);
      }
    })["catch"](function (t) {
      console.error("get_unshipped_orders", t);
    });
  };

  return t;
}();

exports["default"] = f;

cc._RF.pop();