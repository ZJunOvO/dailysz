
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c8e4zCZnxPrIZ17IRm3EJP', 'loading');
// scripts/loading.js

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

var k = function (t) {
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
    e.stateStr = "加载中";
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      var n;
      var i;
      var r;
      var a;
      var c;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            return _global["default"].isReStore ? (_idx.platform.reportEvent(_idx.ERepEvt.reSetData), [2]) : (_idx.platform.reportEvent(_idx.ERepEvt.applaunchShow), t = cc.view.getVisibleSize(), e = t.width, o = t.height, n = o / e, cc.sys.IPAD == cc.sys.platform && _idx.platform.string() == _pConst.PFCode.Bytedance || n < 1.78 && (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_HEIGHT), i = cc.view.getVisibleSize(), r = i.width, a = i.height, n = _global["default"].padScale = a / r, (c = new cc.Node("bg2")).color = new cc.Color(80, 80, 80), c.scale = n, this.node.addChild(c), c.setSiblingIndex(0), this.bg2 = c.addComponent(cc.Sprite)), [4, _cfgMgr["default"].init()]);

          case 1:
            return s.sent(), _idx.platform.init(), [2];
        }
      });
    });
  };

  e.prototype.start = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e = this;
      return __generator(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, _res["default"].ins.lSF("bg/bg", this.bg)];

          case 1:
            return t = n.sent(), this.bg2 && t && (this.bg2.spriteFrame = t), this.loadOther(), _global["default"].isReStore ? [3, 3] : [4, Promise.all([this.checkSession().then(function () {
              return e.preLogin();
            }).then(function () {
              e.updatePro(10);
            }), this.getPrivacy(), this.getOSSConfig(), this.loadFont().then(function (t) {
              e.updatePro(40);
              exports.DEFAULTFONT = t;
            })])["catch"](function () {})];

          case 2:
            return n.sent(), [3, 5];

          case 3:
            return [4, Promise.all([this.loadFont().then(function (t) {
              e.updatePro(25);
              exports.DEFAULTFONT = t;
            }), this.restore().then(function () {
              e.updatePro(25);
            })])];

          case 4:
            n.sent(), n.label = 5;

          case 5:
            return [4, Promise.all([this.preloadScene(), _levelMgr["default"].ins.init()])["catch"](function () {})];

          case 6:
            return n.sent(), this.isFail ? (this.isFail = !1, this.scheduleOnce(this.start, 1), [2]) : (this.etr(), [2]);
        }
      });
    });
  };

  e.prototype.loadOther = function () {
    var t = this;
    var e = cc.resources;
    e.load("bg/logo_rc", cc.SpriteFrame, function (e, o) {
      var n = t.logo.node;
      !e && n.isValid && (t.logo.spriteFrame = o);
    });
    e.load("bg/rDown", cc.SpriteFrame, function (e, o) {
      !e && t.node && t.node.isValid && (t.rDown.spriteFrame = o);
    });
  };

  e.prototype.getOSSConfig = function () {
    return new Promise(function (t) {
      _global["default"].chapterCount = 18;
      _global["default"].jisawCount = 40;
      t(1); // var e = cc.sys.isBrowser ? _global.OssConfig.configDevUrl : _global.OssConfig.configUrl;
      // cc.assetManager.loadRemote(e, cc.JsonAsset, function (e, o) {
      //     if (!e && o && o.json) {
      //         var n = o.json;
      //         _global.default.chapterCount = n.chapter;
      //         _global.default.jisawCount = n.jigsaw;
      //     }
      //     t(1);
      // });
    });
  };

  e.prototype.getPrivacy = function () {
    var t = this;
    return new Promise(function (e) {
      _idx.platform.string() == _pConst.PFCode.Wechat || _idx.platform.isQQ || _idx.platform.string() == _pConst.PFCode.Alipay ? (t.info.active = !0, _idx.platform.requirePrivacyAuthorize ? _idx.platform.requirePrivacyAuthorize({
        complete: function complete() {
          e(1);
        }
      }) : e(1)) : e(1);
    });
  };

  e.prototype.checkSession = function () {
    if (_idx.platform.isNative && !_idx.platform.isLogin) {
      var t;

      _idx.platform.clearStorage();

      var e = new Promise(function (e) {
        t = e;
      });
      var o = this.loginNode;
      o.active = !0;
      var n = o.addComponent(cc.Button);
      n.transition = cc.Button.Transition.SCALE;
      n.zoomScale = 0.9;
      n.node.on("click", function () {
        _idx.platform.showLogin(t);
      }, this);
      return e;
    }

    return Promise.resolve();
  };

  e.prototype.preLogin = function (t) {
    var e = this;
    this.loginNode.active = !1;
    this.pro.node.active = this.tip.node.active = this.proLbl.node.active = !0;
    return new Promise(function (o) {
      _global["default"].isReStore ? (_idx.platform.initCloud && _idx.platform.initCloud() || Promise.resolve()).then(function (t) {
        _time["default"].ins.sync(t);
      }).then(function () {
        e.loginFinally();
        o(1);
      }) : null != _idx.platform.getStorage("localData") || t ? (console.log("异步login"), (_idx.platform.initCloud && _idx.platform.initCloud() || Promise.resolve()).then(function (t) {
        _time["default"].ins.sync(t);

        return _idx.platform.getCloudData && _idx.platform.getCloudData() || Promise.resolve();
      }).then(function (t) {
        _uData["default"].ins.onLogin(t);

        e.loginFinally();
        e.login().then(function () {
          return e.loginFinally;
        })["catch"](function (t) {
          return console.error(t);
        });
        o(1);
      })) : (console.log("同步login"), e.isSync = !0, e.login().then(function () {
        o(1);
      })["catch"](function (t) {
        return console.error(t);
      }));
    });
  };

  e.prototype.restore = function () {
    var t = this;
    return new Promise(function (e) {
      (_idx.platform.initCloud && _idx.platform.initCloud() || Promise.resolve()).then(function (t) {
        _time["default"].ins.sync(t);
      }).then(function () {
        t.loginFinally();
        e(1);
      });
    });
  };

  e.prototype.login = function () {
    var t;
    var e;
    var o = this;
    var n = new Promise(function (o, n) {
      t = o;
      e = n;
    });

    _idx.platform.login(this.retryTime).then(function (t) {
      var e = t.code;
      var o = t.anonymous_code;
      var n = t.openid;
      var i = t.unionid; // return _request.default.ins.login(e, o, n, i);

      return Promise.resolve({
        "status": 1,
        "msg": "登录成功",
        "data": {
          "id": 6082641,
          "company_id": 8,
          "status": 1,
          "nickname": "卷卷大王",
          "avatar": null,
          "reg_time": 1711775814000,
          "platform": "DEV",
          "app_name": "DEV",
          "from_game_uid": 0,
          "game_id": 10001,
          "login_times": 2535,
          "openid": "dev_ceshi",
          "unionid": null,
          "last_login_time": 1712485967000,
          "anonymous_openid": null,
          "area_code": null,
          "mobile": null,
          "appid": "dev_nonogram",
          "qf_game_uid": null,
          "qf_gamer_token": null,
          "is_new_user": 0,
          "game_uid": 6082641,
          "token": "7d88dab3d09a3529353f2eeba4256732483fffc1",
          "code": "dev_ceshi",
          "session_key": "dev_sk_66127689dfb0e",
          "launch_options": {
            "scene": 0,
            "query": []
          },
          "system_info": null
        },
        "code": 1,
        "server_time": Date.now()
      });
    }).then(function (e) {
      return __awaiter(o, void 0, void 0, function () {
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
        return __generator(this, function (M) {
          switch (M.label) {
            case 0:
              if (0 == e.state) throw _errorCode.errorCode.LOGIN_STATE_ERR;
              if (_idx.platform.hideLoading(), console.log("login成功"), o = _request["default"].ins, n = _uData["default"].ins, i = e.data, _time["default"].ins.sync(e.server_time), o.userToken = i && i.token, o.openId = i && i.openid, r = n.syncLoginData(i), d = r[0], y = r[1], v = function v() {
                return __awaiter(O, void 0, void 0, function () {
                  var e;
                  var n;
                  return __generator(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return cc.resources.load('game_init_config', function (err, json) {
                          var t = json.json; // o
                          // .getJson()
                          // .then(function(t) {

                          _cfgMgr["default"].syncServerCfg(t.data);

                          _bagMgr["default"].ins.initBag(!d && y);

                          _bagMgr["default"].ins.initBag(!d && y);
                        }), // .catch(function(t) {
                        //     return console.error(t);
                        // }),
                        e = _pInfo["default"].ins.getAliAddHome(), _idx.platform.string() === _pConst.PFCode.Alipay && e ? [4, null === (n = _idx.platform.checkDesktopExist) || void 0 === n ? void 0 : n.call(_idx.platform)] : [3, 2];

                      case 1:
                        i.sent(), i.label = 2;

                      case 2:
                        return _mailMgr["default"].ins.getMail(null), this.loginFinally(), t(1), [2];
                    }
                  });
                });
              }, !d || !y) return [3, 7];
              _ = void 0, w = void 0, M.label = 1;

            case 1:
              return M.trys.push([1, 3,, 4]), [4,
              /*o.getServerData("localData")*/
              Promise.resolve()];

            case 2:
              return (I = M.sent()) && (_ = JSON.parse(I.data[0].user_data) || {}), [3, 4];

            case 3:
              return M.sent(), [3, 4];

            case 4:
              return _idx.platform.getCloudData ? [4, _idx.platform.getCloudData()] : [3, 6];

            case 5:
              w = M.sent(), M.label = 6;

            case 6:
              if (D = (null == _ ? void 0 : _.puzzleLvl) || 0, P = (null === (N = null == _ ? void 0 : _.bag) || void 0 === N ? void 0 : N.puzzle_pieces) || 0, k = (null == w ? void 0 : w.puzzleLvl) || 0, R = (null === (C = null == w ? void 0 : w.bag) || void 0 === C ? void 0 : C.puzzle_pieces) || 0, !(S = D > k || P > R || !w ? _ : w)) throw _errorCode.errorCode.CANGET_DATE_ERR;
              return n.onLogin(S), v(), [3, 8];

            case 7:
              n.onLogin(), v(), M.label = 8;

            case 8:
              return [2];
          }
        });
      });
    })["catch"](function (t) {// console.error(t);
      // if ((console.log("登录失败:", JSON.stringify(t)), o.retryTime < 3))
      //     o.isSync && _idx.platform.showLoading("登录中..." + o.retryTime), o.retryTime++, (n = o.login());
      // else {
      // if (o.isSync) {
      //     if ((_idx.platform.hideLoading(), _idx.platform.isNative)) return void(
      // n = o.preLogin(!0)
      // );
      //     _idx.platform
      //         .showModal({
      //             title: "友情提示",
      //             content: "登陆服务器异常，请重试",
      //             confirmText: "确定",
      //             showCancel: !1
      //         })
      //         .then(function() {
      //             _idx.platform.refreshGame();
      //         });
      // }
      // e(t);
      // }
    });

    return n;
  };

  e.prototype.loginFinally = function () {
    _taskMgr["default"].initTask();

    _challengeMgr["default"].ins.initNowMonthData();

    _skinMgr["default"].ins.init();

    this.sceneName = _pInfo["default"].ins.getGuideDone() ? _pInfo.sceneType.main : _pInfo.sceneType.guide;
  };

  e.prototype.loadFont = function () {
    return new Promise(function (t, e) {
      cc.resources.load("font/font", cc.BitmapFont, function (o, n) {
        o ? e(o) : t(n);
      });
    });
  };

  e.prototype.preLoadGuide = function () {
    cc.director.preloadScene(_pInfo.sceneType.guide);
  };

  e.prototype.preloadScene = function () {
    var t = this;
    this.stateStr = "正在进入游戏";
    return new Promise(function (e, o) {
      cc.Tween.stopAllByTag(886);
      var n = 100 - t.curPro;
      cc.director.preloadScene(t.sceneName, function (e, o) {
        t.updatePro2(t.curPro + e / o * n);
      }, function (t) {
        t ? o(t) : e(1);
      });
    });
  };

  e.prototype.updatePro = function (t) {
    this.curPro += t;
    cc.Tween.stopAllByTag(886);
    cc.tween(this.pro).tag(886).to(0.1, {
      progress: this.curPro / 100
    }).start();
  };

  e.prototype.updatePro2 = function (t) {
    this.pro.progress = t / 100;
  };

  e.prototype.update = function () {
    this.proLbl.string = this.stateStr + " (" + Math.ceil(100 * this.pro.progress) + "%)";
  };

  e.prototype.etr = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function () {
        _global["default"].isReStore = null;

        _idx.platform.hideLoading();

        _pInfo.chgScene(this.sceneName, {
          noAni: !0,
          cb: function cb() {
            cc.assetManager.loadBundle("sound");
            cc.assetManager.loadBundle("resSps");
            cc.assetManager.loadBundle("prefab", function (t, e) {
              t || _pInfo["default"].ins.isOpenLock && e.preload("prefab/page_race");
            });
            cc.resources.release("bg/bg", cc.SpriteFrame);
            cc.resources.release("bg/logo", cc.SpriteFrame);
            cc.resources.release("bg/down", cc.SpriteFrame);
            cc.resources.release("bg/rDown", cc.SpriteFrame);

            _idx.platform.reportEvent(_idx.ERepEvt.gameLoaded);
          }
        });

        return [2];
      });
    });
  };

  __decorate([P(cc.Sprite)], e.prototype, "bg", void 0);

  __decorate([P(cc.Sprite)], e.prototype, "logo", void 0);

  __decorate([P(cc.ProgressBar)], e.prototype, "pro", void 0);

  __decorate([P(cc.Node)], e.prototype, "loginNode", void 0);

  __decorate([P(cc.Sprite)], e.prototype, "rDown", void 0);

  __decorate([P(cc.Label)], e.prototype, "tip", void 0);

  __decorate([P(cc.Label)], e.prototype, "proLbl", void 0);

  __decorate([P(cc.Node)], e.prototype, "info", void 0);

  return __decorate([D], e);
}(cc.Component);

exports["default"] = k;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJERUZBVUxURk9OVCIsIl9lcnJvckNvZGUiLCJyZXF1aXJlIiwiX2lkeCIsIl9wQ29uc3QiLCJfcmVxdWVzdCIsIl9yZXMiLCJfdGltZSIsIl91RGF0YSIsIl9jZmdNZ3IiLCJfZ2xvYmFsIiwiX2JhZ01nciIsIl9jaGFsbGVuZ2VNZ3IiLCJfbGV2ZWxNZ3IiLCJfbWFpbE1nciIsIl9za2luTWdyIiwiX3Rhc2tNZ3IiLCJfcEluZm8iLCJJIiwiY2MiLCJfZGVjb3JhdG9yIiwiRCIsImNjY2xhc3MiLCJQIiwicHJvcGVydHkiLCJtYWNybyIsIkVOQUJMRV9NVUxUSV9UT1VDSCIsImFzc2V0TWFuYWdlciIsImRvd25sb2FkZXIiLCJtYXhDb25jdXJyZW5jeSIsIm1heFJlcXVlc3RzUGVyRnJhbWUiLCJrIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImJnIiwiYmcyIiwibG9nbyIsInBybyIsImxvZ2luTm9kZSIsInJEb3duIiwidGlwIiwicHJvTGJsIiwiaW5mbyIsImlzRmFpbCIsImN1clBybyIsInJldHJ5VGltZSIsInN0YXRlU3RyIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiX19hd2FpdGVyIiwibyIsImkiLCJyIiwiYSIsImMiLCJfX2dlbmVyYXRvciIsInMiLCJsYWJlbCIsImlzUmVTdG9yZSIsInBsYXRmb3JtIiwicmVwb3J0RXZlbnQiLCJFUmVwRXZ0IiwicmVTZXREYXRhIiwiYXBwbGF1bmNoU2hvdyIsInZpZXciLCJnZXRWaXNpYmxlU2l6ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3lzIiwiSVBBRCIsInN0cmluZyIsIlBGQ29kZSIsIkJ5dGVkYW5jZSIsInNldERlc2lnblJlc29sdXRpb25TaXplIiwiUmVzb2x1dGlvblBvbGljeSIsIkZJWEVEX0hFSUdIVCIsInBhZFNjYWxlIiwiTm9kZSIsImNvbG9yIiwiQ29sb3IiLCJzY2FsZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFNpYmxpbmdJbmRleCIsImFkZENvbXBvbmVudCIsIlNwcml0ZSIsImluaXQiLCJzZW50Iiwic3RhcnQiLCJpbnMiLCJsU0YiLCJzcHJpdGVGcmFtZSIsImxvYWRPdGhlciIsIlByb21pc2UiLCJhbGwiLCJjaGVja1Nlc3Npb24iLCJ0aGVuIiwicHJlTG9naW4iLCJ1cGRhdGVQcm8iLCJnZXRQcml2YWN5IiwiZ2V0T1NTQ29uZmlnIiwibG9hZEZvbnQiLCJyZXN0b3JlIiwicHJlbG9hZFNjZW5lIiwic2NoZWR1bGVPbmNlIiwiZXRyIiwicmVzb3VyY2VzIiwibG9hZCIsIlNwcml0ZUZyYW1lIiwiaXNWYWxpZCIsImNoYXB0ZXJDb3VudCIsImppc2F3Q291bnQiLCJXZWNoYXQiLCJpc1FRIiwiQWxpcGF5IiwiYWN0aXZlIiwicmVxdWlyZVByaXZhY3lBdXRob3JpemUiLCJjb21wbGV0ZSIsImlzTmF0aXZlIiwiaXNMb2dpbiIsImNsZWFyU3RvcmFnZSIsIkJ1dHRvbiIsInRyYW5zaXRpb24iLCJUcmFuc2l0aW9uIiwiU0NBTEUiLCJ6b29tU2NhbGUiLCJvbiIsInNob3dMb2dpbiIsInJlc29sdmUiLCJpbml0Q2xvdWQiLCJzeW5jIiwibG9naW5GaW5hbGx5IiwiZ2V0U3RvcmFnZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDbG91ZERhdGEiLCJvbkxvZ2luIiwibG9naW4iLCJlcnJvciIsImlzU3luYyIsImNvZGUiLCJhbm9ueW1vdXNfY29kZSIsIm9wZW5pZCIsInVuaW9uaWQiLCJEYXRlIiwibm93IiwiZCIsInkiLCJ2IiwiXyIsInciLCJTIiwiUiIsIk4iLCJDIiwiTyIsIk0iLCJzdGF0ZSIsImVycm9yQ29kZSIsIkxPR0lOX1NUQVRFX0VSUiIsImhpZGVMb2FkaW5nIiwiZGF0YSIsInNlcnZlcl90aW1lIiwidXNlclRva2VuIiwidG9rZW4iLCJvcGVuSWQiLCJzeW5jTG9naW5EYXRhIiwiZXJyIiwianNvbiIsInN5bmNTZXJ2ZXJDZmciLCJpbml0QmFnIiwiZ2V0QWxpQWRkSG9tZSIsImNoZWNrRGVza3RvcEV4aXN0IiwiY2FsbCIsImdldE1haWwiLCJ0cnlzIiwicHVzaCIsIkpTT04iLCJwYXJzZSIsInVzZXJfZGF0YSIsInB1enpsZUx2bCIsImJhZyIsInB1enpsZV9waWVjZXMiLCJDQU5HRVRfREFURV9FUlIiLCJpbml0VGFzayIsImluaXROb3dNb250aERhdGEiLCJzY2VuZU5hbWUiLCJnZXRHdWlkZURvbmUiLCJzY2VuZVR5cGUiLCJtYWluIiwiZ3VpZGUiLCJCaXRtYXBGb250IiwicHJlTG9hZEd1aWRlIiwiZGlyZWN0b3IiLCJUd2VlbiIsInN0b3BBbGxCeVRhZyIsInVwZGF0ZVBybzIiLCJ0d2VlbiIsInRhZyIsInRvIiwicHJvZ3Jlc3MiLCJ1cGRhdGUiLCJNYXRoIiwiY2VpbCIsImNoZ1NjZW5lIiwibm9BbmkiLCJjYiIsImxvYWRCdW5kbGUiLCJpc09wZW5Mb2NrIiwicHJlbG9hZCIsInJlbGVhc2UiLCJnYW1lTG9hZGVkIiwiX19kZWNvcmF0ZSIsIlByb2dyZXNzQmFyIiwiTGFiZWwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUVDLEtBQUssRUFBRSxDQUFDO0FBQVYsQ0FBN0M7QUFDQUQsT0FBTyxDQUFDRSxXQUFSLEdBQXNCLEtBQUssQ0FBM0I7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF4Qjs7QUFDQSxJQUFJQyxJQUFJLEdBQUdELE9BQU8sQ0FBQyxLQUFELENBQWxCOztBQUNBLElBQUlFLE9BQU8sR0FBR0YsT0FBTyxDQUFDLFFBQUQsQ0FBckI7O0FBQ0EsSUFBSUcsUUFBUSxHQUFHSCxPQUFPLENBQUMsU0FBRCxDQUF0Qjs7QUFDQSxJQUFJSSxJQUFJLEdBQUdKLE9BQU8sQ0FBQyxLQUFELENBQWxCOztBQUNBLElBQUlLLEtBQUssR0FBR0wsT0FBTyxDQUFDLE1BQUQsQ0FBbkI7O0FBQ0EsSUFBSU0sTUFBTSxHQUFHTixPQUFPLENBQUMsT0FBRCxDQUFwQjs7QUFDQSxJQUFJTyxPQUFPLEdBQUdQLE9BQU8sQ0FBQyxRQUFELENBQXJCOztBQUNBLElBQUlRLE9BQU8sR0FBR1IsT0FBTyxDQUFDLFFBQUQsQ0FBckI7O0FBQ0EsSUFBSVMsT0FBTyxHQUFHVCxPQUFPLENBQUMsUUFBRCxDQUFyQjs7QUFDQSxJQUFJVSxhQUFhLEdBQUdWLE9BQU8sQ0FBQyxjQUFELENBQTNCOztBQUNBLElBQUlXLFNBQVMsR0FBR1gsT0FBTyxDQUFDLFVBQUQsQ0FBdkI7O0FBQ0EsSUFBSVksUUFBUSxHQUFHWixPQUFPLENBQUMsU0FBRCxDQUF0Qjs7QUFDQSxJQUFJYSxRQUFRLEdBQUdiLE9BQU8sQ0FBQyxTQUFELENBQXRCOztBQUNBLElBQUljLFFBQVEsR0FBR2QsT0FBTyxDQUFDLFNBQUQsQ0FBdEI7O0FBQ0EsSUFBSWUsTUFBTSxHQUFHZixPQUFPLENBQUMsT0FBRCxDQUFwQjs7QUFDQSxJQUFJZ0IsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWO0FBQ0FMLEVBQUUsQ0FBQ00sS0FBSCxDQUFTQyxrQkFBVCxHQUE4QixDQUFDLENBQS9CO0FBQ0FQLEVBQUUsQ0FBQ1EsWUFBSCxDQUFnQkMsVUFBaEIsQ0FBMkJDLGNBQTNCLEdBQTRDLEdBQTVDO0FBQ0FWLEVBQUUsQ0FBQ1EsWUFBSCxDQUFnQkMsVUFBaEIsQ0FBMkJFLG1CQUEzQixHQUFpRCxHQUFqRDs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBU0MsQ0FBVCxFQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csRUFBRixHQUFPLElBQVA7SUFDQUgsQ0FBQyxDQUFDSSxHQUFGLEdBQVEsSUFBUjtJQUNBSixDQUFDLENBQUNLLElBQUYsR0FBUyxJQUFUO0lBQ0FMLENBQUMsQ0FBQ00sR0FBRixHQUFRLElBQVI7SUFDQU4sQ0FBQyxDQUFDTyxTQUFGLEdBQWMsSUFBZDtJQUNBUCxDQUFDLENBQUNRLEtBQUYsR0FBVSxJQUFWO0lBQ0FSLENBQUMsQ0FBQ1MsR0FBRixHQUFRLElBQVI7SUFDQVQsQ0FBQyxDQUFDVSxNQUFGLEdBQVcsSUFBWDtJQUNBVixDQUFDLENBQUNXLElBQUYsR0FBUyxJQUFUO0lBQ0FYLENBQUMsQ0FBQ1ksTUFBRixHQUFXLENBQUMsQ0FBWjtJQUNBWixDQUFDLENBQUNhLE1BQUYsR0FBVyxDQUFYO0lBQ0FiLENBQUMsQ0FBQ2MsU0FBRixHQUFjLENBQWQ7SUFDQWQsQ0FBQyxDQUFDZSxRQUFGLEdBQWEsS0FBYjtJQUNBLE9BQU9mLENBQVA7RUFDSDs7RUFDRGdCLFNBQVMsQ0FBQ2hCLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNpQixTQUFGLENBQVlDLE1BQVosR0FBcUIsWUFBVztJQUM1QixPQUFPQyxTQUFTLENBQUMsSUFBRCxFQUFPLEtBQUssQ0FBWixFQUFlLEtBQUssQ0FBcEIsRUFBdUIsWUFBVztNQUM5QyxJQUFJcEIsQ0FBSjtNQUNBLElBQUlDLENBQUo7TUFDQSxJQUFJb0IsQ0FBSjtNQUNBLElBQUkxRCxDQUFKO01BQ0EsSUFBSTJELENBQUo7TUFDQSxJQUFJQyxDQUFKO01BQ0EsSUFBSUMsQ0FBSjtNQUNBLElBQUlDLENBQUo7TUFDQSxPQUFPQyxXQUFXLENBQUMsSUFBRCxFQUFPLFVBQVNDLENBQVQsRUFBWTtRQUNqQyxRQUFRQSxDQUFDLENBQUNDLEtBQVY7VUFDSSxLQUFLLENBQUw7WUFDSSxPQUFPbEQsT0FBTyxXQUFQLENBQWdCbUQsU0FBaEIsSUFDRjFELElBQUksQ0FBQzJELFFBQUwsQ0FBY0MsV0FBZCxDQUEwQjVELElBQUksQ0FBQzZELE9BQUwsQ0FBYUMsU0FBdkMsR0FBbUQsQ0FBQyxDQUFELENBRGpELEtBRUY5RCxJQUFJLENBQUMyRCxRQUFMLENBQWNDLFdBQWQsQ0FBMEI1RCxJQUFJLENBQUM2RCxPQUFMLENBQWFFLGFBQXZDLEdBQ0lsQyxDQUFDLEdBQUdiLEVBQUUsQ0FBQ2dELElBQUgsQ0FBUUMsY0FBUixFQURSLEVBRUluQyxDQUFDLEdBQUdELENBQUMsQ0FBQ3FDLEtBRlYsRUFHSWhCLENBQUMsR0FBR3JCLENBQUMsQ0FBQ3NDLE1BSFYsRUFJSTNFLENBQUMsR0FBRzBELENBQUMsR0FBR3BCLENBSlosRUFLSWQsRUFBRSxDQUFDb0QsR0FBSCxDQUFPQyxJQUFQLElBQWVyRCxFQUFFLENBQUNvRCxHQUFILENBQU9ULFFBQXRCLElBQWtDM0QsSUFBSSxDQUFDMkQsUUFBTCxDQUFjVyxNQUFkLE1BQTBCckUsT0FBTyxDQUFDc0UsTUFBUixDQUFlQyxTQUE1RSxJQUNDaEYsQ0FBQyxHQUFHLElBQUosS0FDSXdCLEVBQUUsQ0FBQ2dELElBQUgsQ0FBUVMsdUJBQVIsQ0FBZ0MsR0FBaEMsRUFBcUMsSUFBckMsRUFBMkN6RCxFQUFFLENBQUMwRCxnQkFBSCxDQUFvQkMsWUFBL0QsR0FDSXhCLENBQUMsR0FBR25DLEVBQUUsQ0FBQ2dELElBQUgsQ0FBUUMsY0FBUixFQURSLEVBRUliLENBQUMsR0FBR0QsQ0FBQyxDQUFDZSxLQUZWLEVBR0liLENBQUMsR0FBR0YsQ0FBQyxDQUFDZ0IsTUFIVixFQUlJM0UsQ0FBQyxHQUFHZSxPQUFPLFdBQVAsQ0FBZ0JxRSxRQUFoQixHQUEyQnZCLENBQUMsR0FBR0QsQ0FKdkMsRUFLSSxDQUFDRSxDQUFDLEdBQUcsSUFBSXRDLEVBQUUsQ0FBQzZELElBQVAsQ0FBWSxLQUFaLENBQUwsRUFBeUJDLEtBQXpCLEdBQWlDLElBQUk5RCxFQUFFLENBQUMrRCxLQUFQLENBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQUxyQyxFQU1JekIsQ0FBQyxDQUFDMEIsS0FBRixHQUFVeEYsQ0FOZCxFQU9HLEtBQUt5RixJQUFMLENBQVVDLFFBQVYsQ0FBbUI1QixDQUFuQixDQVBILEVBUUdBLENBQUMsQ0FBQzZCLGVBQUYsQ0FBa0IsQ0FBbEIsQ0FSSCxFQVNJLEtBQUtqRCxHQUFMLEdBQVdvQixDQUFDLENBQUM4QixZQUFGLENBQWVwRSxFQUFFLENBQUNxRSxNQUFsQixDQVZuQixDQU5KLEVBZ0JxRCxDQUFDLENBQUQsRUFBSS9FLE9BQU8sV0FBUCxDQUFnQmdGLElBQWhCLEVBQUosQ0FsQm5ELENBQVA7O1VBbUJKLEtBQUssQ0FBTDtZQUNJLE9BQU85QixDQUFDLENBQUMrQixJQUFGLElBQVV2RixJQUFJLENBQUMyRCxRQUFMLENBQWMyQixJQUFkLEVBQVYsRUFBZ0MsQ0FBQyxDQUFELENBQXZDO1FBdEJSO01Bd0JILENBekJpQixDQUFsQjtJQTBCSCxDQW5DZSxDQUFoQjtFQW9DSCxDQXJDRDs7RUFzQ0F4RCxDQUFDLENBQUNpQixTQUFGLENBQVl5QyxLQUFaLEdBQW9CLFlBQVc7SUFDM0IsT0FBT3ZDLFNBQVMsQ0FBQyxJQUFELEVBQU8sS0FBSyxDQUFaLEVBQWUsS0FBSyxDQUFwQixFQUF1QixZQUFXO01BQzlDLElBQUlwQixDQUFKO01BQ0EsSUFBSUMsQ0FBQyxHQUFHLElBQVI7TUFDQSxPQUFPeUIsV0FBVyxDQUFDLElBQUQsRUFBTyxVQUFTL0QsQ0FBVCxFQUFZO1FBQ2pDLFFBQVFBLENBQUMsQ0FBQ2lFLEtBQVY7VUFDSSxLQUFLLENBQUw7WUFDSSxPQUFPLENBQUMsQ0FBRCxFQUFJdEQsSUFBSSxXQUFKLENBQWFzRixHQUFiLENBQWlCQyxHQUFqQixDQUFxQixPQUFyQixFQUE4QixLQUFLekQsRUFBbkMsQ0FBSixDQUFQOztVQUNKLEtBQUssQ0FBTDtZQUNJLE9BQ0tKLENBQUMsR0FBR3JDLENBQUMsQ0FBQytGLElBQUYsRUFBTCxFQUNBLEtBQUtyRCxHQUFMLElBQVlMLENBQVosS0FBa0IsS0FBS0ssR0FBTCxDQUFTeUQsV0FBVCxHQUF1QjlELENBQXpDLENBREEsRUFFQSxLQUFLK0QsU0FBTCxFQUZBLEVBR0FyRixPQUFPLFdBQVAsQ0FBZ0JtRCxTQUFoQixHQUE0QixDQUFDLENBQUQsRUFBSSxDQUFKLENBQTVCLEdBQXFDLENBQ2pDLENBRGlDLEVBRWpDbUMsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FDUixLQUFLQyxZQUFMLEdBQ0NDLElBREQsQ0FDTSxZQUFXO2NBQ2IsT0FBT2xFLENBQUMsQ0FBQ21FLFFBQUYsRUFBUDtZQUNILENBSEQsRUFJQ0QsSUFKRCxDQUlNLFlBQVc7Y0FDYmxFLENBQUMsQ0FBQ29FLFNBQUYsQ0FBWSxFQUFaO1lBQ0gsQ0FORCxDQURRLEVBUVIsS0FBS0MsVUFBTCxFQVJRLEVBU1IsS0FBS0MsWUFBTCxFQVRRLEVBVVIsS0FBS0MsUUFBTCxHQUFnQkwsSUFBaEIsQ0FBcUIsVUFBU25FLENBQVQsRUFBWTtjQUM3QkMsQ0FBQyxDQUFDb0UsU0FBRixDQUFZLEVBQVo7Y0FDQXZHLE9BQU8sQ0FBQ0UsV0FBUixHQUFzQmdDLENBQXRCO1lBQ0gsQ0FIRCxDQVZRLENBQVosV0FjUyxZQUFXLENBQUUsQ0FkdEIsQ0FGaUMsQ0FKekM7O1VBdUJKLEtBQUssQ0FBTDtZQUNJLE9BQU9yQyxDQUFDLENBQUMrRixJQUFGLElBQVUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFqQjs7VUFDSixLQUFLLENBQUw7WUFDSSxPQUFPLENBQ0gsQ0FERyxFQUVITSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNSLEtBQUtPLFFBQUwsR0FBZ0JMLElBQWhCLENBQXFCLFVBQVNuRSxDQUFULEVBQVk7Y0FDN0JDLENBQUMsQ0FBQ29FLFNBQUYsQ0FBWSxFQUFaO2NBQ0F2RyxPQUFPLENBQUNFLFdBQVIsR0FBc0JnQyxDQUF0QjtZQUNILENBSEQsQ0FEUSxFQUtSLEtBQUt5RSxPQUFMLEdBQWVOLElBQWYsQ0FBb0IsWUFBVztjQUMzQmxFLENBQUMsQ0FBQ29FLFNBQUYsQ0FBWSxFQUFaO1lBQ0gsQ0FGRCxDQUxRLENBQVosQ0FGRyxDQUFQOztVQVlKLEtBQUssQ0FBTDtZQUNJMUcsQ0FBQyxDQUFDK0YsSUFBRixJQUFXL0YsQ0FBQyxDQUFDaUUsS0FBRixHQUFVLENBQXJCOztVQUNKLEtBQUssQ0FBTDtZQUNJLE9BQU8sQ0FDSCxDQURHLEVBRUhvQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFDLEtBQUtTLFlBQUwsRUFBRCxFQUFzQjdGLFNBQVMsV0FBVCxDQUFrQitFLEdBQWxCLENBQXNCSCxJQUF0QixFQUF0QixDQUFaLFdBQXVFLFlBQVcsQ0FBRSxDQUFwRixDQUZHLENBQVA7O1VBSUosS0FBSyxDQUFMO1lBQ0ksT0FDSTlGLENBQUMsQ0FBQytGLElBQUYsSUFDQSxLQUFLN0MsTUFBTCxJQUNFLEtBQUtBLE1BQUwsR0FBYyxDQUFDLENBQWhCLEVBQW9CLEtBQUs4RCxZQUFMLENBQWtCLEtBQUtoQixLQUF2QixFQUE4QixDQUE5QixDQUFwQixFQUFzRCxDQUFDLENBQUQsQ0FEdkQsS0FFQyxLQUFLaUIsR0FBTCxJQUFZLENBQUMsQ0FBRCxDQUZiLENBRko7UUFsRFI7TUF5REgsQ0ExRGlCLENBQWxCO0lBMkRILENBOURlLENBQWhCO0VBK0RILENBaEVEOztFQWlFQTNFLENBQUMsQ0FBQ2lCLFNBQUYsQ0FBWTZDLFNBQVosR0FBd0IsWUFBVztJQUMvQixJQUFJL0QsQ0FBQyxHQUFHLElBQVI7SUFDQSxJQUFJQyxDQUFDLEdBQUdkLEVBQUUsQ0FBQzBGLFNBQVg7SUFDQTVFLENBQUMsQ0FBQzZFLElBQUYsQ0FBTyxZQUFQLEVBQXFCM0YsRUFBRSxDQUFDNEYsV0FBeEIsRUFBcUMsVUFBUzlFLENBQVQsRUFBWW9CLENBQVosRUFBZTtNQUNoRCxJQUFJMUQsQ0FBQyxHQUFHcUMsQ0FBQyxDQUFDTSxJQUFGLENBQU84QyxJQUFmO01BQ0EsQ0FBQ25ELENBQUQsSUFBTXRDLENBQUMsQ0FBQ3FILE9BQVIsS0FBb0JoRixDQUFDLENBQUNNLElBQUYsQ0FBT3dELFdBQVAsR0FBcUJ6QyxDQUF6QztJQUNILENBSEQ7SUFJQXBCLENBQUMsQ0FBQzZFLElBQUYsQ0FBTyxVQUFQLEVBQW1CM0YsRUFBRSxDQUFDNEYsV0FBdEIsRUFBbUMsVUFBUzlFLENBQVQsRUFBWW9CLENBQVosRUFBZTtNQUM5QyxDQUFDcEIsQ0FBRCxJQUFNRCxDQUFDLENBQUNvRCxJQUFSLElBQWdCcEQsQ0FBQyxDQUFDb0QsSUFBRixDQUFPNEIsT0FBdkIsS0FBbUNoRixDQUFDLENBQUNTLEtBQUYsQ0FBUXFELFdBQVIsR0FBc0J6QyxDQUF6RDtJQUNILENBRkQ7RUFHSCxDQVZEOztFQVdBcEIsQ0FBQyxDQUFDaUIsU0FBRixDQUFZcUQsWUFBWixHQUEyQixZQUFXO0lBQ2xDLE9BQU8sSUFBSVAsT0FBSixDQUFZLFVBQVNoRSxDQUFULEVBQVk7TUFDM0J0QixPQUFPLFdBQVAsQ0FBZ0J1RyxZQUFoQixHQUErQixFQUEvQjtNQUNBdkcsT0FBTyxXQUFQLENBQWdCd0csVUFBaEIsR0FBNkIsRUFBN0I7TUFDQWxGLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FIMkIsQ0FJM0I7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0gsQ0FiTSxDQUFQO0VBY0gsQ0FmRDs7RUFnQkFDLENBQUMsQ0FBQ2lCLFNBQUYsQ0FBWW9ELFVBQVosR0FBeUIsWUFBVztJQUNoQyxJQUFJdEUsQ0FBQyxHQUFHLElBQVI7SUFDQSxPQUFPLElBQUlnRSxPQUFKLENBQVksVUFBUy9ELENBQVQsRUFBWTtNQUMzQjlCLElBQUksQ0FBQzJELFFBQUwsQ0FBY1csTUFBZCxNQUEwQnJFLE9BQU8sQ0FBQ3NFLE1BQVIsQ0FBZXlDLE1BQXpDLElBQ0loSCxJQUFJLENBQUMyRCxRQUFMLENBQWNzRCxJQURsQixJQUVJakgsSUFBSSxDQUFDMkQsUUFBTCxDQUFjVyxNQUFkLE1BQTBCckUsT0FBTyxDQUFDc0UsTUFBUixDQUFlMkMsTUFGN0MsSUFHTXJGLENBQUMsQ0FBQ1ksSUFBRixDQUFPMEUsTUFBUCxHQUFnQixDQUFDLENBQWxCLEVBQ0duSCxJQUFJLENBQUMyRCxRQUFMLENBQWN5RCx1QkFBZCxHQUNBcEgsSUFBSSxDQUFDMkQsUUFBTCxDQUFjeUQsdUJBQWQsQ0FBc0M7UUFDbENDLFFBQVEsRUFBRSxvQkFBVztVQUNqQnZGLENBQUMsQ0FBQyxDQUFELENBQUQ7UUFDSDtNQUhpQyxDQUF0QyxDQURBLEdBTUFBLENBQUMsQ0FBQyxDQUFELENBVlQsSUFXSUEsQ0FBQyxDQUFDLENBQUQsQ0FYTDtJQVlILENBYk0sQ0FBUDtFQWNILENBaEJEOztFQWlCQUEsQ0FBQyxDQUFDaUIsU0FBRixDQUFZZ0QsWUFBWixHQUEyQixZQUFXO0lBQ2xDLElBQUkvRixJQUFJLENBQUMyRCxRQUFMLENBQWMyRCxRQUFkLElBQTBCLENBQUN0SCxJQUFJLENBQUMyRCxRQUFMLENBQWM0RCxPQUE3QyxFQUFzRDtNQUNsRCxJQUFJMUYsQ0FBSjs7TUFDQTdCLElBQUksQ0FBQzJELFFBQUwsQ0FBYzZELFlBQWQ7O01BQ0EsSUFBSTFGLENBQUMsR0FBRyxJQUFJK0QsT0FBSixDQUFZLFVBQVMvRCxDQUFULEVBQVk7UUFDNUJELENBQUMsR0FBR0MsQ0FBSjtNQUNILENBRk8sQ0FBUjtNQUdBLElBQUlvQixDQUFDLEdBQUcsS0FBS2IsU0FBYjtNQUNBYSxDQUFDLENBQUNpRSxNQUFGLEdBQVcsQ0FBQyxDQUFaO01BQ0EsSUFBSTNILENBQUMsR0FBRzBELENBQUMsQ0FBQ2tDLFlBQUYsQ0FBZXBFLEVBQUUsQ0FBQ3lHLE1BQWxCLENBQVI7TUFDQWpJLENBQUMsQ0FBQ2tJLFVBQUYsR0FBZTFHLEVBQUUsQ0FBQ3lHLE1BQUgsQ0FBVUUsVUFBVixDQUFxQkMsS0FBcEM7TUFDQXBJLENBQUMsQ0FBQ3FJLFNBQUYsR0FBYyxHQUFkO01BQ0FySSxDQUFDLENBQUN5RixJQUFGLENBQU82QyxFQUFQLENBQ0ksT0FESixFQUVJLFlBQVc7UUFDUDlILElBQUksQ0FBQzJELFFBQUwsQ0FBY29FLFNBQWQsQ0FBd0JsRyxDQUF4QjtNQUNILENBSkwsRUFLSSxJQUxKO01BT0EsT0FBT0MsQ0FBUDtJQUNIOztJQUNELE9BQU8rRCxPQUFPLENBQUNtQyxPQUFSLEVBQVA7RUFDSCxDQXRCRDs7RUF1QkFsRyxDQUFDLENBQUNpQixTQUFGLENBQVlrRCxRQUFaLEdBQXVCLFVBQVNwRSxDQUFULEVBQVk7SUFDL0IsSUFBSUMsQ0FBQyxHQUFHLElBQVI7SUFDQSxLQUFLTyxTQUFMLENBQWU4RSxNQUFmLEdBQXdCLENBQUMsQ0FBekI7SUFDQSxLQUFLL0UsR0FBTCxDQUFTNkMsSUFBVCxDQUFja0MsTUFBZCxHQUF1QixLQUFLNUUsR0FBTCxDQUFTMEMsSUFBVCxDQUFja0MsTUFBZCxHQUF1QixLQUFLM0UsTUFBTCxDQUFZeUMsSUFBWixDQUFpQmtDLE1BQWpCLEdBQTBCLENBQUMsQ0FBekU7SUFDQSxPQUFPLElBQUl0QixPQUFKLENBQVksVUFBUzNDLENBQVQsRUFBWTtNQUMzQjNDLE9BQU8sV0FBUCxDQUFnQm1ELFNBQWhCLEdBQ0ksQ0FBRTFELElBQUksQ0FBQzJELFFBQUwsQ0FBY3NFLFNBQWQsSUFBMkJqSSxJQUFJLENBQUMyRCxRQUFMLENBQWNzRSxTQUFkLEVBQTVCLElBQTBEcEMsT0FBTyxDQUFDbUMsT0FBUixFQUEzRCxFQUNDaEMsSUFERCxDQUNNLFVBQVNuRSxDQUFULEVBQVk7UUFDZHpCLEtBQUssV0FBTCxDQUFjcUYsR0FBZCxDQUFrQnlDLElBQWxCLENBQXVCckcsQ0FBdkI7TUFDSCxDQUhELEVBSUNtRSxJQUpELENBSU0sWUFBVztRQUNibEUsQ0FBQyxDQUFDcUcsWUFBRjtRQUNBakYsQ0FBQyxDQUFDLENBQUQsQ0FBRDtNQUNILENBUEQsQ0FESixHQVNJLFFBQVFsRCxJQUFJLENBQUMyRCxRQUFMLENBQWN5RSxVQUFkLENBQXlCLFdBQXpCLENBQVIsSUFBaUR2RyxDQUFqRCxJQUNDd0csT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixHQUNHLENBQUV0SSxJQUFJLENBQUMyRCxRQUFMLENBQWNzRSxTQUFkLElBQTJCakksSUFBSSxDQUFDMkQsUUFBTCxDQUFjc0UsU0FBZCxFQUE1QixJQUEwRHBDLE9BQU8sQ0FBQ21DLE9BQVIsRUFBM0QsRUFDQ2hDLElBREQsQ0FDTSxVQUFTbkUsQ0FBVCxFQUFZO1FBQ2R6QixLQUFLLFdBQUwsQ0FBY3FGLEdBQWQsQ0FBa0J5QyxJQUFsQixDQUF1QnJHLENBQXZCOztRQUNBLE9BQVE3QixJQUFJLENBQUMyRCxRQUFMLENBQWM0RSxZQUFkLElBQThCdkksSUFBSSxDQUFDMkQsUUFBTCxDQUFjNEUsWUFBZCxFQUEvQixJQUFnRTFDLE9BQU8sQ0FBQ21DLE9BQVIsRUFBdkU7TUFDSCxDQUpELEVBS0NoQyxJQUxELENBS00sVUFBU25FLENBQVQsRUFBWTtRQUNkeEIsTUFBTSxXQUFOLENBQWVvRixHQUFmLENBQW1CK0MsT0FBbkIsQ0FBMkIzRyxDQUEzQjs7UUFDQUMsQ0FBQyxDQUFDcUcsWUFBRjtRQUNBckcsQ0FBQyxDQUFDMkcsS0FBRixHQUNLekMsSUFETCxDQUNVLFlBQVc7VUFDYixPQUFPbEUsQ0FBQyxDQUFDcUcsWUFBVDtRQUNILENBSEwsV0FJVyxVQUFTdEcsQ0FBVCxFQUFZO1VBQ2YsT0FBT3dHLE9BQU8sQ0FBQ0ssS0FBUixDQUFjN0csQ0FBZCxDQUFQO1FBQ0gsQ0FOTDtRQU9BcUIsQ0FBQyxDQUFDLENBQUQsQ0FBRDtNQUNILENBaEJELENBRkosS0FtQkNtRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEdBQ0l4RyxDQUFDLENBQUM2RyxNQUFGLEdBQVcsQ0FBQyxDQURoQixFQUVHN0csQ0FBQyxDQUNBMkcsS0FERCxHQUVDekMsSUFGRCxDQUVNLFlBQVc7UUFDYjlDLENBQUMsQ0FBQyxDQUFELENBQUQ7TUFDSCxDQUpELFdBS08sVUFBU3JCLENBQVQsRUFBWTtRQUNmLE9BQU93RyxPQUFPLENBQUNLLEtBQVIsQ0FBYzdHLENBQWQsQ0FBUDtNQUNILENBUEQsQ0FyQkosQ0FUSjtJQXNDSCxDQXZDTSxDQUFQO0VBd0NILENBNUNEOztFQTZDQUMsQ0FBQyxDQUFDaUIsU0FBRixDQUFZdUQsT0FBWixHQUFzQixZQUFXO0lBQzdCLElBQUl6RSxDQUFDLEdBQUcsSUFBUjtJQUNBLE9BQU8sSUFBSWdFLE9BQUosQ0FBWSxVQUFTL0QsQ0FBVCxFQUFZO01BQzNCLENBQUU5QixJQUFJLENBQUMyRCxRQUFMLENBQWNzRSxTQUFkLElBQTJCakksSUFBSSxDQUFDMkQsUUFBTCxDQUFjc0UsU0FBZCxFQUE1QixJQUEwRHBDLE9BQU8sQ0FBQ21DLE9BQVIsRUFBM0QsRUFDQ2hDLElBREQsQ0FDTSxVQUFTbkUsQ0FBVCxFQUFZO1FBQ1Z6QixLQUFLLFdBQUwsQ0FBY3FGLEdBQWQsQ0FBa0J5QyxJQUFsQixDQUF1QnJHLENBQXZCO01BQ0gsQ0FITCxFQUlLbUUsSUFKTCxDQUlVLFlBQVc7UUFDYm5FLENBQUMsQ0FBQ3NHLFlBQUY7UUFDQXJHLENBQUMsQ0FBQyxDQUFELENBQUQ7TUFDSCxDQVBMO0lBUUgsQ0FUTSxDQUFQO0VBVUgsQ0FaRDs7RUFhQUEsQ0FBQyxDQUFDaUIsU0FBRixDQUFZMEYsS0FBWixHQUFvQixZQUFXO0lBQzNCLElBQUk1RyxDQUFKO0lBQ0EsSUFBSUMsQ0FBSjtJQUNBLElBQUlvQixDQUFDLEdBQUcsSUFBUjtJQUNBLElBQUkxRCxDQUFDLEdBQUcsSUFBSXFHLE9BQUosQ0FBWSxVQUFTM0MsQ0FBVCxFQUFZMUQsQ0FBWixFQUFlO01BQy9CcUMsQ0FBQyxHQUFHcUIsQ0FBSjtNQUNBcEIsQ0FBQyxHQUFHdEMsQ0FBSjtJQUNILENBSE8sQ0FBUjs7SUFJQVEsSUFBSSxDQUFDMkQsUUFBTCxDQUNLOEUsS0FETCxDQUNXLEtBQUs3RixTQURoQixFQUVLb0QsSUFGTCxDQUVVLFVBQVNuRSxDQUFULEVBQVk7TUFDZCxJQUFJQyxDQUFDLEdBQUdELENBQUMsQ0FBQytHLElBQVY7TUFDQSxJQUFJMUYsQ0FBQyxHQUFHckIsQ0FBQyxDQUFDZ0gsY0FBVjtNQUNBLElBQUlySixDQUFDLEdBQUdxQyxDQUFDLENBQUNpSCxNQUFWO01BQ0EsSUFBSTNGLENBQUMsR0FBR3RCLENBQUMsQ0FBQ2tILE9BQVYsQ0FKYyxDQUtkOztNQUVBLE9BQU9sRCxPQUFPLENBQUNtQyxPQUFSLENBQWdCO1FBQ25CLFVBQVUsQ0FEUztRQUVuQixPQUFPLE1BRlk7UUFHbkIsUUFBUTtVQUNKLE1BQU0sT0FERjtVQUVKLGNBQWMsQ0FGVjtVQUdKLFVBQVUsQ0FITjtVQUlKLFlBQVksTUFKUjtVQUtKLFVBQVUsSUFMTjtVQU1KLFlBQVksYUFOUjtVQU9KLFlBQVksS0FQUjtVQVFKLFlBQVksS0FSUjtVQVNKLGlCQUFpQixDQVRiO1VBVUosV0FBVyxLQVZQO1VBV0osZUFBZSxJQVhYO1VBWUosVUFBVSxXQVpOO1VBYUosV0FBVyxJQWJQO1VBY0osbUJBQW1CLGFBZGY7VUFlSixvQkFBb0IsSUFmaEI7VUFnQkosYUFBYSxJQWhCVDtVQWlCSixVQUFVLElBakJOO1VBa0JKLFNBQVMsY0FsQkw7VUFtQkosZUFBZSxJQW5CWDtVQW9CSixrQkFBa0IsSUFwQmQ7VUFxQkosZUFBZSxDQXJCWDtVQXNCSixZQUFZLE9BdEJSO1VBdUJKLFNBQVMsMENBdkJMO1VBd0JKLFFBQVEsV0F4Qko7VUF5QkosZUFBZSxzQkF6Qlg7VUEwQkosa0JBQWtCO1lBQ2QsU0FBUyxDQURLO1lBRWQsU0FBUztVQUZLLENBMUJkO1VBOEJKLGVBQWU7UUE5QlgsQ0FIVztRQW1DbkIsUUFBUSxDQW5DVztRQW9DbkIsZUFBZWdCLElBQUksQ0FBQ0MsR0FBTDtNQXBDSSxDQUFoQixDQUFQO0lBc0NILENBL0NMLEVBZ0RLakQsSUFoREwsQ0FnRFUsVUFBU2xFLENBQVQsRUFBWTtNQUNkLE9BQU9tQixTQUFTLENBQUNDLENBQUQsRUFBSSxLQUFLLENBQVQsRUFBWSxLQUFLLENBQWpCLEVBQW9CLFlBQVc7UUFDM0MsSUFBSUEsQ0FBSjtRQUNBLElBQUkxRCxDQUFKO1FBQ0EsSUFBSTJELENBQUo7UUFDQSxJQUFJQyxDQUFKO1FBQ0EsSUFBSThGLENBQUo7UUFDQSxJQUFJQyxDQUFKO1FBQ0EsSUFBSUMsQ0FBSjs7UUFDQSxJQUFJQyxDQUFKOztRQUNBLElBQUlDLENBQUo7UUFDQSxJQUFJQyxDQUFKO1FBQ0EsSUFBSXhJLENBQUo7UUFDQSxJQUFJRyxDQUFKO1FBQ0EsSUFBSUUsQ0FBSjtRQUNBLElBQUlRLENBQUo7UUFDQSxJQUFJNEgsQ0FBSjtRQUNBLElBQUlDLENBQUo7UUFDQSxJQUFJQyxDQUFKO1FBQ0EsSUFBSUMsQ0FBQyxHQUFHLElBQVI7UUFDQSxPQUFPcEcsV0FBVyxDQUFDLElBQUQsRUFBTyxVQUFTcUcsQ0FBVCxFQUFZO1VBQ2pDLFFBQVFBLENBQUMsQ0FBQ25HLEtBQVY7WUFDSSxLQUFLLENBQUw7Y0FDSSxJQUFJLEtBQUszQixDQUFDLENBQUMrSCxLQUFYLEVBQWtCLE1BQU0vSixVQUFVLENBQUNnSyxTQUFYLENBQXFCQyxlQUEzQjtjQUNsQixJQUNLL0osSUFBSSxDQUFDMkQsUUFBTCxDQUFjcUcsV0FBZCxJQUNHM0IsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixDQURILEVBRUlwRixDQUFDLEdBQUdoRCxRQUFRLFdBQVIsQ0FBaUJ1RixHQUZ6QixFQUdJakcsQ0FBQyxHQUFHYSxNQUFNLFdBQU4sQ0FBZW9GLEdBSHZCLEVBSUl0QyxDQUFDLEdBQUdyQixDQUFDLENBQUNtSSxJQUpWLEVBS0c3SixLQUFLLFdBQUwsQ0FBY3FGLEdBQWQsQ0FBa0J5QyxJQUFsQixDQUF1QnBHLENBQUMsQ0FBQ29JLFdBQXpCLENBTEgsRUFNSWhILENBQUMsQ0FBQ2lILFNBQUYsR0FBY2hILENBQUMsSUFBSUEsQ0FBQyxDQUFDaUgsS0FOekIsRUFPSWxILENBQUMsQ0FBQ21ILE1BQUYsR0FBV2xILENBQUMsSUFBSUEsQ0FBQyxDQUFDMkYsTUFQdEIsRUFRSTFGLENBQUMsR0FBRzVELENBQUMsQ0FBQzhLLGFBQUYsQ0FBZ0JuSCxDQUFoQixDQVJSLEVBU0krRixDQUFDLEdBQUc5RixDQUFDLENBQUMsQ0FBRCxDQVRULEVBVUkrRixDQUFDLEdBQUcvRixDQUFDLENBQUMsQ0FBRCxDQVZULEVBV0lnRyxDQUFDLEdBQUcsYUFBVztnQkFDWixPQUFPbkcsU0FBUyxDQUFDMEcsQ0FBRCxFQUFJLEtBQUssQ0FBVCxFQUFZLEtBQUssQ0FBakIsRUFBb0IsWUFBVztrQkFDM0MsSUFBSTdILENBQUo7a0JBQ0EsSUFBSXRDLENBQUo7a0JBQ0EsT0FBTytELFdBQVcsQ0FBQyxJQUFELEVBQU8sVUFBU0osQ0FBVCxFQUFZO29CQUNqQyxRQUFRQSxDQUFDLENBQUNNLEtBQVY7c0JBQ0ksS0FBSyxDQUFMO3dCQUNJLE9BQ0l6QyxFQUFFLENBQUMwRixTQUFILENBQWFDLElBQWIsQ0FBa0Isa0JBQWxCLEVBQXNDLFVBQUM0RCxHQUFELEVBQU1DLElBQU4sRUFBZTswQkFDakQsSUFBSTNJLENBQUMsR0FBRzJJLElBQUksQ0FBQ0EsSUFBYixDQURpRCxDQUVqRDswQkFDQTswQkFDQTs7MEJBQ0FsSyxPQUFPLFdBQVAsQ0FBZ0JtSyxhQUFoQixDQUE4QjVJLENBQUMsQ0FBQ29JLElBQWhDOzswQkFDQXpKLE9BQU8sV0FBUCxDQUFnQmlGLEdBQWhCLENBQW9CaUYsT0FBcEIsQ0FBNEIsQ0FBQ3hCLENBQUQsSUFBTUMsQ0FBbEM7OzBCQUNBM0ksT0FBTyxXQUFQLENBQWdCaUYsR0FBaEIsQ0FBb0JpRixPQUFwQixDQUE0QixDQUFDeEIsQ0FBRCxJQUFNQyxDQUFsQzt3QkFFSCxDQVRELEdBVUE7d0JBQ0E7d0JBQ0E7d0JBQ0NySCxDQUFDLEdBQUdoQixNQUFNLFdBQU4sQ0FBZTJFLEdBQWYsQ0FBbUJrRixhQUFuQixFQWJMLEVBY0EzSyxJQUFJLENBQUMyRCxRQUFMLENBQWNXLE1BQWQsT0FBMkJyRSxPQUFPLENBQUNzRSxNQUFSLENBQWUyQyxNQUExQyxJQUFvRHBGLENBQXBELEdBQXdELENBQ3BELENBRG9ELEVBRXBELFVBQVV0QyxDQUFDLEdBQUdRLElBQUksQ0FBQzJELFFBQUwsQ0FBY2lILGlCQUE1QixLQUNBLEtBQUssQ0FBTCxLQUFXcEwsQ0FEWCxHQUVBLEtBQUssQ0FGTCxHQUdBQSxDQUFDLENBQUNxTCxJQUFGLENBQU83SyxJQUFJLENBQUMyRCxRQUFaLENBTG9ELENBQXhELEdBTUksQ0FBQyxDQUFELEVBQUksQ0FBSixDQXJCUjs7c0JBdUJKLEtBQUssQ0FBTDt3QkFDSVIsQ0FBQyxDQUFDb0MsSUFBRixJQUFXcEMsQ0FBQyxDQUFDTSxLQUFGLEdBQVUsQ0FBckI7O3NCQUNKLEtBQUssQ0FBTDt3QkFDSSxPQUNJOUMsUUFBUSxXQUFSLENBQWlCOEUsR0FBakIsQ0FBcUJxRixPQUFyQixDQUE2QixJQUE3QixHQUNBLEtBQUszQyxZQUFMLEVBREEsRUFFQXRHLENBQUMsQ0FBQyxDQUFELENBRkQsRUFFTSxDQUFDLENBQUQsQ0FIVjtvQkE1QlI7a0JBa0NILENBbkNpQixDQUFsQjtnQkFvQ0gsQ0F2Q2UsQ0FBaEI7Y0F3Q0gsQ0FwREosRUFvRE8sQ0FBQ3FILENBQUQsSUFBTSxDQUFDQyxDQXJEbkIsRUF1REksT0FBTyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVA7Y0FDSEUsQ0FBQyxHQUFHLEtBQUssQ0FBVixFQUFlQyxDQUFDLEdBQUcsS0FBSyxDQUF4QixFQUE2Qk0sQ0FBQyxDQUFDbkcsS0FBRixHQUFVLENBQXZDOztZQUNKLEtBQUssQ0FBTDtjQUNJLE9BQU9tRyxDQUFDLENBQUNtQixJQUFGLENBQU9DLElBQVAsQ0FBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEdBQVMsQ0FBVCxDQUFaLEdBQTBCLENBQUMsQ0FBRDtjQUFJO2NBQWlDbkYsT0FBTyxDQUFDbUMsT0FBUixFQUFyQyxDQUFqQzs7WUFDSixLQUFLLENBQUw7Y0FDSSxPQUFPLENBQUNqSCxDQUFDLEdBQUc2SSxDQUFDLENBQUNyRSxJQUFGLEVBQUwsTUFBbUI4RCxDQUFDLEdBQUc0QixJQUFJLENBQUNDLEtBQUwsQ0FBV25LLENBQUMsQ0FBQ2tKLElBQUYsQ0FBTyxDQUFQLEVBQVVrQixTQUFyQixLQUFtQyxFQUExRCxHQUErRCxDQUFDLENBQUQsRUFBSSxDQUFKLENBQXRFOztZQUNKLEtBQUssQ0FBTDtjQUNJLE9BQU92QixDQUFDLENBQUNyRSxJQUFGLElBQVUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFqQjs7WUFDSixLQUFLLENBQUw7Y0FDSSxPQUFPdkYsSUFBSSxDQUFDMkQsUUFBTCxDQUFjNEUsWUFBZCxHQUE2QixDQUFDLENBQUQsRUFBSXZJLElBQUksQ0FBQzJELFFBQUwsQ0FBYzRFLFlBQWQsRUFBSixDQUE3QixHQUFpRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQXhFOztZQUNKLEtBQUssQ0FBTDtjQUNLZSxDQUFDLEdBQUdNLENBQUMsQ0FBQ3JFLElBQUYsRUFBTCxFQUFpQnFFLENBQUMsQ0FBQ25HLEtBQUYsR0FBVSxDQUEzQjs7WUFDSixLQUFLLENBQUw7Y0FDSSxJQUNNdkMsQ0FBQyxHQUFHLENBQUMsUUFBUW1JLENBQVIsR0FBWSxLQUFLLENBQWpCLEdBQXFCQSxDQUFDLENBQUMrQixTQUF4QixLQUFzQyxDQUEzQyxFQUNJaEssQ0FBQyxHQUNFLENBQUMsVUFBVXFJLENBQUMsR0FBRyxRQUFRSixDQUFSLEdBQVksS0FBSyxDQUFqQixHQUFxQkEsQ0FBQyxDQUFDZ0MsR0FBckMsS0FBNkMsS0FBSyxDQUFMLEtBQVc1QixDQUF4RCxHQUNHLEtBQUssQ0FEUixHQUVHQSxDQUFDLENBQUM2QixhQUZOLEtBRXdCLENBSi9CLEVBS0kxSixDQUFDLEdBQUcsQ0FBQyxRQUFRMEgsQ0FBUixHQUFZLEtBQUssQ0FBakIsR0FBcUJBLENBQUMsQ0FBQzhCLFNBQXhCLEtBQXNDLENBTDlDLEVBTUk1QixDQUFDLEdBQ0UsQ0FBQyxVQUFVRSxDQUFDLEdBQUcsUUFBUUosQ0FBUixHQUFZLEtBQUssQ0FBakIsR0FBcUJBLENBQUMsQ0FBQytCLEdBQXJDLEtBQTZDLEtBQUssQ0FBTCxLQUFXM0IsQ0FBeEQsR0FDRyxLQUFLLENBRFIsR0FFR0EsQ0FBQyxDQUFDNEIsYUFGTixLQUV3QixDQVQvQixFQVNtQyxFQUFFL0IsQ0FBQyxHQUFHckksQ0FBQyxHQUFHVSxDQUFKLElBQVNSLENBQUMsR0FBR29JLENBQWIsSUFBa0IsQ0FBQ0YsQ0FBbkIsR0FBdUJELENBQXZCLEdBQTJCQyxDQUFqQyxDQVZ4QyxFQVlJLE1BQU14SixVQUFVLENBQUNnSyxTQUFYLENBQXFCeUIsZUFBM0I7Y0FDSixPQUFPL0wsQ0FBQyxDQUFDZ0osT0FBRixDQUFVZSxDQUFWLEdBQWNILENBQUMsRUFBZixFQUFtQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQTFCOztZQUNKLEtBQUssQ0FBTDtjQUNJNUosQ0FBQyxDQUFDZ0osT0FBRixJQUFhWSxDQUFDLEVBQWQsRUFBbUJRLENBQUMsQ0FBQ25HLEtBQUYsR0FBVSxDQUE3Qjs7WUFDSixLQUFLLENBQUw7Y0FDSSxPQUFPLENBQUMsQ0FBRCxDQUFQO1VBeEZSO1FBMEZILENBM0ZpQixDQUFsQjtNQTRGSCxDQS9HZSxDQUFoQjtJQWdISCxDQWpLTCxXQWtLVyxVQUFTNUIsQ0FBVCxFQUFZLENBQ2Y7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0gsQ0F4TEw7O0lBeUxBLE9BQU9yQyxDQUFQO0VBQ0gsQ0FsTUQ7O0VBbU1Bc0MsQ0FBQyxDQUFDaUIsU0FBRixDQUFZb0YsWUFBWixHQUEyQixZQUFXO0lBQ2xDdEgsUUFBUSxXQUFSLENBQWlCMkssUUFBakI7O0lBQ0EvSyxhQUFhLFdBQWIsQ0FBc0JnRixHQUF0QixDQUEwQmdHLGdCQUExQjs7SUFDQTdLLFFBQVEsV0FBUixDQUFpQjZFLEdBQWpCLENBQXFCSCxJQUFyQjs7SUFDQSxLQUFLb0csU0FBTCxHQUFpQjVLLE1BQU0sV0FBTixDQUFlMkUsR0FBZixDQUFtQmtHLFlBQW5CLEtBQW9DN0ssTUFBTSxDQUFDOEssU0FBUCxDQUFpQkMsSUFBckQsR0FBNEQvSyxNQUFNLENBQUM4SyxTQUFQLENBQWlCRSxLQUE5RjtFQUNILENBTEQ7O0VBTUFoSyxDQUFDLENBQUNpQixTQUFGLENBQVlzRCxRQUFaLEdBQXVCLFlBQVc7SUFDOUIsT0FBTyxJQUFJUixPQUFKLENBQVksVUFBU2hFLENBQVQsRUFBWUMsQ0FBWixFQUFlO01BQzlCZCxFQUFFLENBQUMwRixTQUFILENBQWFDLElBQWIsQ0FBa0IsV0FBbEIsRUFBK0IzRixFQUFFLENBQUMrSyxVQUFsQyxFQUE4QyxVQUFTN0ksQ0FBVCxFQUFZMUQsQ0FBWixFQUFlO1FBQ3pEMEQsQ0FBQyxHQUFHcEIsQ0FBQyxDQUFDb0IsQ0FBRCxDQUFKLEdBQVVyQixDQUFDLENBQUNyQyxDQUFELENBQVo7TUFDSCxDQUZEO0lBR0gsQ0FKTSxDQUFQO0VBS0gsQ0FORDs7RUFPQXNDLENBQUMsQ0FBQ2lCLFNBQUYsQ0FBWWlKLFlBQVosR0FBMkIsWUFBVztJQUNsQ2hMLEVBQUUsQ0FBQ2lMLFFBQUgsQ0FBWTFGLFlBQVosQ0FBeUJ6RixNQUFNLENBQUM4SyxTQUFQLENBQWlCRSxLQUExQztFQUNILENBRkQ7O0VBR0FoSyxDQUFDLENBQUNpQixTQUFGLENBQVl3RCxZQUFaLEdBQTJCLFlBQVc7SUFDbEMsSUFBSTFFLENBQUMsR0FBRyxJQUFSO0lBQ0EsS0FBS2dCLFFBQUwsR0FBZ0IsUUFBaEI7SUFDQSxPQUFPLElBQUlnRCxPQUFKLENBQVksVUFBUy9ELENBQVQsRUFBWW9CLENBQVosRUFBZTtNQUM5QmxDLEVBQUUsQ0FBQ2tMLEtBQUgsQ0FBU0MsWUFBVCxDQUFzQixHQUF0QjtNQUNBLElBQUkzTSxDQUFDLEdBQUcsTUFBTXFDLENBQUMsQ0FBQ2MsTUFBaEI7TUFDQTNCLEVBQUUsQ0FBQ2lMLFFBQUgsQ0FBWTFGLFlBQVosQ0FDSTFFLENBQUMsQ0FBQzZKLFNBRE4sRUFFSSxVQUFTNUosQ0FBVCxFQUFZb0IsQ0FBWixFQUFlO1FBQ1hyQixDQUFDLENBQUN1SyxVQUFGLENBQWF2SyxDQUFDLENBQUNjLE1BQUYsR0FBWWIsQ0FBQyxHQUFHb0IsQ0FBTCxHQUFVMUQsQ0FBbEM7TUFDSCxDQUpMLEVBS0ksVUFBU3FDLENBQVQsRUFBWTtRQUNSQSxDQUFDLEdBQUdxQixDQUFDLENBQUNyQixDQUFELENBQUosR0FBVUMsQ0FBQyxDQUFDLENBQUQsQ0FBWjtNQUNILENBUEw7SUFTSCxDQVpNLENBQVA7RUFhSCxDQWhCRDs7RUFpQkFBLENBQUMsQ0FBQ2lCLFNBQUYsQ0FBWW1ELFNBQVosR0FBd0IsVUFBU3JFLENBQVQsRUFBWTtJQUNoQyxLQUFLYyxNQUFMLElBQWVkLENBQWY7SUFDQWIsRUFBRSxDQUFDa0wsS0FBSCxDQUFTQyxZQUFULENBQXNCLEdBQXRCO0lBQ0FuTCxFQUFFLENBQUNxTCxLQUFILENBQVMsS0FBS2pLLEdBQWQsRUFDS2tLLEdBREwsQ0FDUyxHQURULEVBRUtDLEVBRkwsQ0FFUSxHQUZSLEVBRWE7TUFBRUMsUUFBUSxFQUFFLEtBQUs3SixNQUFMLEdBQWM7SUFBMUIsQ0FGYixFQUdLNkMsS0FITDtFQUlILENBUEQ7O0VBUUExRCxDQUFDLENBQUNpQixTQUFGLENBQVlxSixVQUFaLEdBQXlCLFVBQVN2SyxDQUFULEVBQVk7SUFDakMsS0FBS08sR0FBTCxDQUFTb0ssUUFBVCxHQUFvQjNLLENBQUMsR0FBRyxHQUF4QjtFQUNILENBRkQ7O0VBR0FDLENBQUMsQ0FBQ2lCLFNBQUYsQ0FBWTBKLE1BQVosR0FBcUIsWUFBVztJQUM1QixLQUFLakssTUFBTCxDQUFZOEIsTUFBWixHQUFxQixLQUFLekIsUUFBTCxHQUFnQixJQUFoQixHQUF1QjZKLElBQUksQ0FBQ0MsSUFBTCxDQUFVLE1BQU0sS0FBS3ZLLEdBQUwsQ0FBU29LLFFBQXpCLENBQXZCLEdBQTRELElBQWpGO0VBQ0gsQ0FGRDs7RUFHQTFLLENBQUMsQ0FBQ2lCLFNBQUYsQ0FBWTBELEdBQVosR0FBa0IsWUFBVztJQUN6QixPQUFPeEQsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLFlBQVc7TUFDOUMsT0FBT00sV0FBVyxDQUFDLElBQUQsRUFBTyxZQUFXO1FBQ2hDaEQsT0FBTyxXQUFQLENBQWdCbUQsU0FBaEIsR0FBNEIsSUFBNUI7O1FBQ0ExRCxJQUFJLENBQUMyRCxRQUFMLENBQWNxRyxXQUFkOztRQUNBbEosTUFBTSxDQUFDOEwsUUFBUCxDQUFnQixLQUFLbEIsU0FBckIsRUFBZ0M7VUFDNUJtQixLQUFLLEVBQUUsQ0FBQyxDQURvQjtVQUU1QkMsRUFBRSxFQUFFLGNBQVc7WUFDWDlMLEVBQUUsQ0FBQ1EsWUFBSCxDQUFnQnVMLFVBQWhCLENBQTJCLE9BQTNCO1lBQ0EvTCxFQUFFLENBQUNRLFlBQUgsQ0FBZ0J1TCxVQUFoQixDQUEyQixRQUEzQjtZQUNBL0wsRUFBRSxDQUFDUSxZQUFILENBQWdCdUwsVUFBaEIsQ0FBMkIsUUFBM0IsRUFBcUMsVUFBU2xMLENBQVQsRUFBWUMsQ0FBWixFQUFlO2NBQ2hERCxDQUFDLElBQUtmLE1BQU0sV0FBTixDQUFlMkUsR0FBZixDQUFtQnVILFVBQW5CLElBQWlDbEwsQ0FBQyxDQUFDbUwsT0FBRixDQUFVLGtCQUFWLENBQXZDO1lBQ0gsQ0FGRDtZQUdBak0sRUFBRSxDQUFDMEYsU0FBSCxDQUFhd0csT0FBYixDQUFxQixPQUFyQixFQUE4QmxNLEVBQUUsQ0FBQzRGLFdBQWpDO1lBQ0E1RixFQUFFLENBQUMwRixTQUFILENBQWF3RyxPQUFiLENBQXFCLFNBQXJCLEVBQWdDbE0sRUFBRSxDQUFDNEYsV0FBbkM7WUFDQTVGLEVBQUUsQ0FBQzBGLFNBQUgsQ0FBYXdHLE9BQWIsQ0FBcUIsU0FBckIsRUFBZ0NsTSxFQUFFLENBQUM0RixXQUFuQztZQUNBNUYsRUFBRSxDQUFDMEYsU0FBSCxDQUFhd0csT0FBYixDQUFxQixVQUFyQixFQUFpQ2xNLEVBQUUsQ0FBQzRGLFdBQXBDOztZQUNBNUcsSUFBSSxDQUFDMkQsUUFBTCxDQUFjQyxXQUFkLENBQTBCNUQsSUFBSSxDQUFDNkQsT0FBTCxDQUFhc0osVUFBdkM7VUFDSDtRQWIyQixDQUFoQzs7UUFlQSxPQUFPLENBQUMsQ0FBRCxDQUFQO01BQ0gsQ0FuQmlCLENBQWxCO0lBb0JILENBckJlLENBQWhCO0VBc0JILENBdkJEOztFQXdCQUMsVUFBVSxDQUFDLENBQUNoTSxDQUFDLENBQUNKLEVBQUUsQ0FBQ3FFLE1BQUosQ0FBRixDQUFELEVBQWlCdkQsQ0FBQyxDQUFDaUIsU0FBbkIsRUFBOEIsSUFBOUIsRUFBb0MsS0FBSyxDQUF6QyxDQUFWOztFQUNBcUssVUFBVSxDQUFDLENBQUNoTSxDQUFDLENBQUNKLEVBQUUsQ0FBQ3FFLE1BQUosQ0FBRixDQUFELEVBQWlCdkQsQ0FBQyxDQUFDaUIsU0FBbkIsRUFBOEIsTUFBOUIsRUFBc0MsS0FBSyxDQUEzQyxDQUFWOztFQUNBcUssVUFBVSxDQUFDLENBQUNoTSxDQUFDLENBQUNKLEVBQUUsQ0FBQ3FNLFdBQUosQ0FBRixDQUFELEVBQXNCdkwsQ0FBQyxDQUFDaUIsU0FBeEIsRUFBbUMsS0FBbkMsRUFBMEMsS0FBSyxDQUEvQyxDQUFWOztFQUNBcUssVUFBVSxDQUFDLENBQUNoTSxDQUFDLENBQUNKLEVBQUUsQ0FBQzZELElBQUosQ0FBRixDQUFELEVBQWUvQyxDQUFDLENBQUNpQixTQUFqQixFQUE0QixXQUE1QixFQUF5QyxLQUFLLENBQTlDLENBQVY7O0VBQ0FxSyxVQUFVLENBQUMsQ0FBQ2hNLENBQUMsQ0FBQ0osRUFBRSxDQUFDcUUsTUFBSixDQUFGLENBQUQsRUFBaUJ2RCxDQUFDLENBQUNpQixTQUFuQixFQUE4QixPQUE5QixFQUF1QyxLQUFLLENBQTVDLENBQVY7O0VBQ0FxSyxVQUFVLENBQUMsQ0FBQ2hNLENBQUMsQ0FBQ0osRUFBRSxDQUFDc00sS0FBSixDQUFGLENBQUQsRUFBZ0J4TCxDQUFDLENBQUNpQixTQUFsQixFQUE2QixLQUE3QixFQUFvQyxLQUFLLENBQXpDLENBQVY7O0VBQ0FxSyxVQUFVLENBQUMsQ0FBQ2hNLENBQUMsQ0FBQ0osRUFBRSxDQUFDc00sS0FBSixDQUFGLENBQUQsRUFBZ0J4TCxDQUFDLENBQUNpQixTQUFsQixFQUE2QixRQUE3QixFQUF1QyxLQUFLLENBQTVDLENBQVY7O0VBQ0FxSyxVQUFVLENBQUMsQ0FBQ2hNLENBQUMsQ0FBQ0osRUFBRSxDQUFDNkQsSUFBSixDQUFGLENBQUQsRUFBZS9DLENBQUMsQ0FBQ2lCLFNBQWpCLEVBQTRCLE1BQTVCLEVBQW9DLEtBQUssQ0FBekMsQ0FBVjs7RUFDQSxPQUFPcUssVUFBVSxDQUFDLENBQUNsTSxDQUFELENBQUQsRUFBTVksQ0FBTixDQUFqQjtBQUNILENBMWdCTyxDQTBnQkxkLEVBQUUsQ0FBQ3VNLFNBMWdCRSxDQUFSOztBQTJnQkE1TixPQUFPLFdBQVAsR0FBa0JpQyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG47XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO1xuZXhwb3J0cy5ERUZBVUxURk9OVCA9IHZvaWQgMDtcbnZhciBfZXJyb3JDb2RlID0gcmVxdWlyZShcImVycm9yQ29kZVwiKTtcbnZhciBfaWR4ID0gcmVxdWlyZShcImlkeFwiKTtcbnZhciBfcENvbnN0ID0gcmVxdWlyZShcInBDb25zdFwiKTtcbnZhciBfcmVxdWVzdCA9IHJlcXVpcmUoXCJyZXF1ZXN0XCIpO1xudmFyIF9yZXMgPSByZXF1aXJlKFwicmVzXCIpO1xudmFyIF90aW1lID0gcmVxdWlyZShcInRpbWVcIik7XG52YXIgX3VEYXRhID0gcmVxdWlyZShcInVEYXRhXCIpO1xudmFyIF9jZmdNZ3IgPSByZXF1aXJlKFwiY2ZnTWdyXCIpO1xudmFyIF9nbG9iYWwgPSByZXF1aXJlKFwiZ2xvYmFsXCIpO1xudmFyIF9iYWdNZ3IgPSByZXF1aXJlKFwiYmFnTWdyXCIpO1xudmFyIF9jaGFsbGVuZ2VNZ3IgPSByZXF1aXJlKFwiY2hhbGxlbmdlTWdyXCIpO1xudmFyIF9sZXZlbE1nciA9IHJlcXVpcmUoXCJsZXZlbE1nclwiKTtcbnZhciBfbWFpbE1nciA9IHJlcXVpcmUoXCJtYWlsTWdyXCIpO1xudmFyIF9za2luTWdyID0gcmVxdWlyZShcInNraW5NZ3JcIik7XG52YXIgX3Rhc2tNZ3IgPSByZXF1aXJlKFwidGFza01nclwiKTtcbnZhciBfcEluZm8gPSByZXF1aXJlKFwicEluZm9cIik7XG52YXIgSSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgRCA9IEkuY2NjbGFzcztcbnZhciBQID0gSS5wcm9wZXJ0eTtcbmNjLm1hY3JvLkVOQUJMRV9NVUxUSV9UT1VDSCA9ICExO1xuY2MuYXNzZXRNYW5hZ2VyLmRvd25sb2FkZXIubWF4Q29uY3VycmVuY3kgPSAxZTM7XG5jYy5hc3NldE1hbmFnZXIuZG93bmxvYWRlci5tYXhSZXF1ZXN0c1BlckZyYW1lID0gMWUzO1xudmFyIGsgPSAoZnVuY3Rpb24odCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLmJnID0gbnVsbDtcbiAgICAgICAgZS5iZzIgPSBudWxsO1xuICAgICAgICBlLmxvZ28gPSBudWxsO1xuICAgICAgICBlLnBybyA9IG51bGw7XG4gICAgICAgIGUubG9naW5Ob2RlID0gbnVsbDtcbiAgICAgICAgZS5yRG93biA9IG51bGw7XG4gICAgICAgIGUudGlwID0gbnVsbDtcbiAgICAgICAgZS5wcm9MYmwgPSBudWxsO1xuICAgICAgICBlLmluZm8gPSBudWxsO1xuICAgICAgICBlLmlzRmFpbCA9ICExO1xuICAgICAgICBlLmN1clBybyA9IDA7XG4gICAgICAgIGUucmV0cnlUaW1lID0gMTtcbiAgICAgICAgZS5zdGF0ZVN0ciA9IFwi5Yqg6L295LitXCI7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICB2YXIgYztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfZ2xvYmFsLmRlZmF1bHQuaXNSZVN0b3JlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2lkeC5wbGF0Zm9ybS5yZXBvcnRFdmVudChfaWR4LkVSZXBFdnQucmVTZXREYXRhKSwgWzJdKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9pZHgucGxhdGZvcm0ucmVwb3J0RXZlbnQoX2lkeC5FUmVwRXZ0LmFwcGxhdW5jaFNob3cpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodCA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlID0gdC53aWR0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvID0gdC5oZWlnaHQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobiA9IG8gLyBlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNjLnN5cy5JUEFEID09IGNjLnN5cy5wbGF0Zm9ybSAmJiBfaWR4LnBsYXRmb3JtLnN0cmluZygpID09IF9wQ29uc3QuUEZDb2RlLkJ5dGVkYW5jZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG4gPCAxLjc4ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSg3MjAsIDEyODAsIGNjLlJlc29sdXRpb25Qb2xpY3kuRklYRURfSEVJR0hUKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHIgPSBpLndpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYSA9IGkuaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobiA9IF9nbG9iYWwuZGVmYXVsdC5wYWRTY2FsZSA9IGEgLyByKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGMgPSBuZXcgY2MuTm9kZShcImJnMlwiKSkuY29sb3IgPSBuZXcgY2MuQ29sb3IoODAsIDgwLCA4MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjLnNjYWxlID0gbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuc2V0U2libGluZ0luZGV4KDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmJnMiA9IGMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkpKSksIFs0LCBfY2ZnTWdyLmRlZmF1bHQuaW5pdCgpXSk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzLnNlbnQoKSwgX2lkeC5wbGF0Zm9ybS5pbml0KCksIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG4ubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBfcmVzLmRlZmF1bHQuaW5zLmxTRihcImJnL2JnXCIsIHRoaXMuYmcpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodCA9IG4uc2VudCgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJnMiAmJiB0ICYmICh0aGlzLmJnMi5zcHJpdGVGcmFtZSA9IHQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE90aGVyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2dsb2JhbC5kZWZhdWx0LmlzUmVTdG9yZSA/IFszLCAzXSA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1Nlc3Npb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUucHJlTG9naW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnVwZGF0ZVBybygxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJpdmFjeSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRPU1NDb25maWcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEZvbnQoKS50aGVuKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnVwZGF0ZVBybyg0MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0cy5ERUZBVUxURk9OVCA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKS5jYXRjaChmdW5jdGlvbigpIHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuLnNlbnQoKSwgWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb250KCkudGhlbihmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnVwZGF0ZVBybygyNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzLkRFRkFVTFRGT05UID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdG9yZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnVwZGF0ZVBybygyNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uc2VudCgpLCAobi5sYWJlbCA9IDUpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW3RoaXMucHJlbG9hZFNjZW5lKCksIF9sZXZlbE1nci5kZWZhdWx0Lmlucy5pbml0KCldKS5jYXRjaChmdW5jdGlvbigpIHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnNlbnQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmFpbCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCh0aGlzLmlzRmFpbCA9ICExKSwgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5zdGFydCwgMSksIFsyXSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmV0cigpLCBbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmxvYWRPdGhlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHZhciBlID0gY2MucmVzb3VyY2VzO1xuICAgICAgICBlLmxvYWQoXCJiZy9sb2dvX3JjXCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbihlLCBvKSB7XG4gICAgICAgICAgICB2YXIgbiA9IHQubG9nby5ub2RlO1xuICAgICAgICAgICAgIWUgJiYgbi5pc1ZhbGlkICYmICh0LmxvZ28uc3ByaXRlRnJhbWUgPSBvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGUubG9hZChcImJnL3JEb3duXCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbihlLCBvKSB7XG4gICAgICAgICAgICAhZSAmJiB0Lm5vZGUgJiYgdC5ub2RlLmlzVmFsaWQgJiYgKHQuckRvd24uc3ByaXRlRnJhbWUgPSBvKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRPU1NDb25maWcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIF9nbG9iYWwuZGVmYXVsdC5jaGFwdGVyQ291bnQgPSAxODtcbiAgICAgICAgICAgIF9nbG9iYWwuZGVmYXVsdC5qaXNhd0NvdW50ID0gNDA7XG4gICAgICAgICAgICB0KDEpO1xuICAgICAgICAgICAgLy8gdmFyIGUgPSBjYy5zeXMuaXNCcm93c2VyID8gX2dsb2JhbC5Pc3NDb25maWcuY29uZmlnRGV2VXJsIDogX2dsb2JhbC5Pc3NDb25maWcuY29uZmlnVXJsO1xuICAgICAgICAgICAgLy8gY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoZSwgY2MuSnNvbkFzc2V0LCBmdW5jdGlvbiAoZSwgbykge1xuICAgICAgICAgICAgLy8gICAgIGlmICghZSAmJiBvICYmIG8uanNvbikge1xuICAgICAgICAgICAgLy8gICAgICAgICB2YXIgbiA9IG8uanNvbjtcbiAgICAgICAgICAgIC8vICAgICAgICAgX2dsb2JhbC5kZWZhdWx0LmNoYXB0ZXJDb3VudCA9IG4uY2hhcHRlcjtcbiAgICAgICAgICAgIC8vICAgICAgICAgX2dsb2JhbC5kZWZhdWx0Lmppc2F3Q291bnQgPSBuLmppZ3NhdztcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgdCgxKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFByaXZhY3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5zdHJpbmcoKSA9PSBfcENvbnN0LlBGQ29kZS5XZWNoYXQgfHxcbiAgICAgICAgICAgICAgICBfaWR4LnBsYXRmb3JtLmlzUVEgfHxcbiAgICAgICAgICAgICAgICBfaWR4LnBsYXRmb3JtLnN0cmluZygpID09IF9wQ29uc3QuUEZDb2RlLkFsaXBheSA/XG4gICAgICAgICAgICAgICAgKCh0LmluZm8uYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgICBfaWR4LnBsYXRmb3JtLnJlcXVpcmVQcml2YWN5QXV0aG9yaXplID9cbiAgICAgICAgICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5yZXF1aXJlUHJpdmFjeUF1dGhvcml6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkgOlxuICAgICAgICAgICAgICAgICAgICBlKDEpKSA6XG4gICAgICAgICAgICAgICAgZSgxKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja1Nlc3Npb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKF9pZHgucGxhdGZvcm0uaXNOYXRpdmUgJiYgIV9pZHgucGxhdGZvcm0uaXNMb2dpbikge1xuICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICBfaWR4LnBsYXRmb3JtLmNsZWFyU3RvcmFnZSgpO1xuICAgICAgICAgICAgdmFyIGUgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdCA9IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5sb2dpbk5vZGU7XG4gICAgICAgICAgICBvLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgdmFyIG4gPSBvLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgbi50cmFuc2l0aW9uID0gY2MuQnV0dG9uLlRyYW5zaXRpb24uU0NBTEU7XG4gICAgICAgICAgICBuLnpvb21TY2FsZSA9IDAuOTtcbiAgICAgICAgICAgIG4ubm9kZS5vbihcbiAgICAgICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF9pZHgucGxhdGZvcm0uc2hvd0xvZ2luKHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnByZUxvZ2luID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHRoaXMubG9naW5Ob2RlLmFjdGl2ZSA9ICExO1xuICAgICAgICB0aGlzLnByby5ub2RlLmFjdGl2ZSA9IHRoaXMudGlwLm5vZGUuYWN0aXZlID0gdGhpcy5wcm9MYmwubm9kZS5hY3RpdmUgPSAhMDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgIF9nbG9iYWwuZGVmYXVsdC5pc1JlU3RvcmUgP1xuICAgICAgICAgICAgICAgICgoX2lkeC5wbGF0Zm9ybS5pbml0Q2xvdWQgJiYgX2lkeC5wbGF0Zm9ybS5pbml0Q2xvdWQoKSkgfHwgUHJvbWlzZS5yZXNvbHZlKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBfdGltZS5kZWZhdWx0Lmlucy5zeW5jKHQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGUubG9naW5GaW5hbGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIG8oMSk7XG4gICAgICAgICAgICAgICAgfSkgOlxuICAgICAgICAgICAgICAgIG51bGwgIT0gX2lkeC5wbGF0Zm9ybS5nZXRTdG9yYWdlKFwibG9jYWxEYXRhXCIpIHx8IHQgP1xuICAgICAgICAgICAgICAgIChjb25zb2xlLmxvZyhcIuW8guatpWxvZ2luXCIpLFxuICAgICAgICAgICAgICAgICAgICAoKF9pZHgucGxhdGZvcm0uaW5pdENsb3VkICYmIF9pZHgucGxhdGZvcm0uaW5pdENsb3VkKCkpIHx8IFByb21pc2UucmVzb2x2ZSgpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGltZS5kZWZhdWx0Lmlucy5zeW5jKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfaWR4LnBsYXRmb3JtLmdldENsb3VkRGF0YSAmJiBfaWR4LnBsYXRmb3JtLmdldENsb3VkRGF0YSgpKSB8fCBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3VEYXRhLmRlZmF1bHQuaW5zLm9uTG9naW4odCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmxvZ2luRmluYWxseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5sb2dpbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmxvZ2luRmluYWxseTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbygxKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpIDpcbiAgICAgICAgICAgICAgICAoY29uc29sZS5sb2coXCLlkIzmraVsb2dpblwiKSxcbiAgICAgICAgICAgICAgICAgICAgKGUuaXNTeW5jID0gITApLFxuICAgICAgICAgICAgICAgICAgICBlXG4gICAgICAgICAgICAgICAgICAgIC5sb2dpbigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbygxKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKHQpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmVzdG9yZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAoKF9pZHgucGxhdGZvcm0uaW5pdENsb3VkICYmIF9pZHgucGxhdGZvcm0uaW5pdENsb3VkKCkpIHx8IFByb21pc2UucmVzb2x2ZSgpKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBfdGltZS5kZWZhdWx0Lmlucy5zeW5jKHQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHQubG9naW5GaW5hbGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIGUoMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubG9naW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHZhciBlO1xuICAgICAgICB2YXIgbyA9IHRoaXM7XG4gICAgICAgIHZhciBuID0gbmV3IFByb21pc2UoZnVuY3Rpb24obywgbikge1xuICAgICAgICAgICAgdCA9IG87XG4gICAgICAgICAgICBlID0gbjtcbiAgICAgICAgfSk7XG4gICAgICAgIF9pZHgucGxhdGZvcm1cbiAgICAgICAgICAgIC5sb2dpbih0aGlzLnJldHJ5VGltZSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHQuY29kZTtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHQuYW5vbnltb3VzX2NvZGU7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSB0Lm9wZW5pZDtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IHQudW5pb25pZDtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gX3JlcXVlc3QuZGVmYXVsdC5pbnMubG9naW4oZSwgbywgbiwgaSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgXCJtc2dcIjogXCLnmbvlvZXmiJDlip9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogNjA4MjY0MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcGFueV9pZFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmlja25hbWVcIjogXCLljbfljbflpKfnjotcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlZ190aW1lXCI6IDE3MTE3NzU4MTQwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBsYXRmb3JtXCI6IFwiREVWXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFwcF9uYW1lXCI6IFwiREVWXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZyb21fZ2FtZV91aWRcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2FtZV9pZFwiOiAxMDAwMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibG9naW5fdGltZXNcIjogMjUzNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3BlbmlkXCI6IFwiZGV2X2Nlc2hpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVuaW9uaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFzdF9sb2dpbl90aW1lXCI6IDE3MTI0ODU5NjcwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFub255bW91c19vcGVuaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJlYV9jb2RlXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vYmlsZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBpZFwiOiBcImRldl9ub25vZ3JhbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJxZl9nYW1lX3VpZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJxZl9nYW1lcl90b2tlblwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpc19uZXdfdXNlclwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJnYW1lX3VpZFwiOiA2MDgyNjQxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b2tlblwiOiBcIjdkODhkYWIzZDA5YTM1MjkzNTNmMmVlYmE0MjU2NzMyNDgzZmZmYzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiBcImRldl9jZXNoaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXNzaW9uX2tleVwiOiBcImRldl9za182NjEyNzY4OWRmYjBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhdW5jaF9vcHRpb25zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNjZW5lXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3lzdGVtX2luZm9cIjogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgXCJzZXJ2ZXJfdGltZVwiOiBEYXRlLm5vdygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcihvLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2O1xuICAgICAgICAgICAgICAgICAgICB2YXIgXztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHc7XG4gICAgICAgICAgICAgICAgICAgIHZhciBTO1xuICAgICAgICAgICAgICAgICAgICB2YXIgSTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBQO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaztcbiAgICAgICAgICAgICAgICAgICAgdmFyIFI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBOO1xuICAgICAgICAgICAgICAgICAgICB2YXIgQztcbiAgICAgICAgICAgICAgICAgICAgdmFyIE8gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oTSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChNLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSBlLnN0YXRlKSB0aHJvdyBfZXJyb3JDb2RlLmVycm9yQ29kZS5MT0dJTl9TVEFURV9FUlI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfaWR4LnBsYXRmb3JtLmhpZGVMb2FkaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbuaIkOWKn1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobyA9IF9yZXF1ZXN0LmRlZmF1bHQuaW5zKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobiA9IF91RGF0YS5kZWZhdWx0LmlucyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgPSBlLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aW1lLmRlZmF1bHQuaW5zLnN5bmMoZS5zZXJ2ZXJfdGltZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG8udXNlclRva2VuID0gaSAmJiBpLnRva2VuKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoby5vcGVuSWQgPSBpICYmIGkub3BlbmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAociA9IG4uc3luY0xvZ2luRGF0YShpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGQgPSByWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeSA9IHJbMV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIoTywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoJ2dhbWVfaW5pdF9jb25maWcnLCAoZXJyLCBqc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0ganNvbi5qc29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC5nZXRKc29uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLnRoZW4oZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY2ZnTWdyLmRlZmF1bHQuc3luY1NlcnZlckNmZyh0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYmFnTWdyLmRlZmF1bHQuaW5zLmluaXRCYWcoIWQgJiYgeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iYWdNZ3IuZGVmYXVsdC5pbnMuaW5pdEJhZyghZCAmJiB5KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLmNhdGNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUgPSBfcEluZm8uZGVmYXVsdC5pbnMuZ2V0QWxpQWRkSG9tZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWR4LnBsYXRmb3JtLnN0cmluZygpID09PSBfcENvbnN0LlBGQ29kZS5BbGlwYXkgJiYgZSA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gKG4gPSBfaWR4LnBsYXRmb3JtLmNoZWNrRGVza3RvcEV4aXN0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IG4gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmNhbGwoX2lkeC5wbGF0Zm9ybSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIDogWzMsIDJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnNlbnQoKSwgKGkubGFiZWwgPSAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbWFpbE1nci5kZWZhdWx0Lmlucy5nZXRNYWlsKG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5GaW5hbGx5KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCgxKSwgWzJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgIWQgfHwgIXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgN107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfID0gdm9pZCAwKSwgKHcgPSB2b2lkIDApLCAoTS5sYWJlbCA9IDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE0udHJ5cy5wdXNoKFsxLCAzLCAsIDRdKSwgWzQsIC8qby5nZXRTZXJ2ZXJEYXRhKFwibG9jYWxEYXRhXCIpKi8gUHJvbWlzZS5yZXNvbHZlKCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChJID0gTS5zZW50KCkpICYmIChfID0gSlNPTi5wYXJzZShJLmRhdGFbMF0udXNlcl9kYXRhKSB8fCB7fSksIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNLnNlbnQoKSwgWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9pZHgucGxhdGZvcm0uZ2V0Q2xvdWREYXRhID8gWzQsIF9pZHgucGxhdGZvcm0uZ2V0Q2xvdWREYXRhKCldIDogWzMsIDZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHcgPSBNLnNlbnQoKSksIChNLmxhYmVsID0gNik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKEQgPSAobnVsbCA9PSBfID8gdm9pZCAwIDogXy5wdXp6bGVMdmwpIHx8IDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChQID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG51bGwgPT09IChOID0gbnVsbCA9PSBfID8gdm9pZCAwIDogXy5iYWcpIHx8IHZvaWQgMCA9PT0gTiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTi5wdXp6bGVfcGllY2VzKSB8fCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoayA9IChudWxsID09IHcgPyB2b2lkIDAgOiB3LnB1enpsZUx2bCkgfHwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFIgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobnVsbCA9PT0gKEMgPSBudWxsID09IHcgPyB2b2lkIDAgOiB3LmJhZykgfHwgdm9pZCAwID09PSBDID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDLnB1enpsZV9waWVjZXMpIHx8IDApLCAhKFMgPSBEID4gayB8fCBQID4gUiB8fCAhdyA/IF8gOiB3KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2Vycm9yQ29kZS5lcnJvckNvZGUuQ0FOR0VUX0RBVEVfRVJSO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5vbkxvZ2luKFMpLCB2KCksIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4ub25Mb2dpbigpLCB2KCksIChNLmxhYmVsID0gOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IodCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgKChjb25zb2xlLmxvZyhcIueZu+W9leWksei0pTpcIiwgSlNPTi5zdHJpbmdpZnkodCkpLCBvLnJldHJ5VGltZSA8IDMpKVxuICAgICAgICAgICAgICAgIC8vICAgICBvLmlzU3luYyAmJiBfaWR4LnBsYXRmb3JtLnNob3dMb2FkaW5nKFwi55m75b2V5LitLi4uXCIgKyBvLnJldHJ5VGltZSksIG8ucmV0cnlUaW1lKyssIChuID0gby5sb2dpbigpKTtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiAoby5pc1N5bmMpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKChfaWR4LnBsYXRmb3JtLmhpZGVMb2FkaW5nKCksIF9pZHgucGxhdGZvcm0uaXNOYXRpdmUpKSByZXR1cm4gdm9pZChcbiAgICAgICAgICAgICAgICAvLyBuID0gby5wcmVMb2dpbighMClcbiAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgIC8vICAgICBfaWR4LnBsYXRmb3JtXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aXRsZTogXCLlj4vmg4Xmj5DnpLpcIixcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb250ZW50OiBcIueZu+mZhuacjeWKoeWZqOW8guW4uO+8jOivt+mHjeivlVwiLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiBcIuehruWumlwiLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNob3dDYW5jZWw6ICExXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5yZWZyZXNoR2FtZSgpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIGUodCk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubG9naW5GaW5hbGx5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIF90YXNrTWdyLmRlZmF1bHQuaW5pdFRhc2soKTtcbiAgICAgICAgX2NoYWxsZW5nZU1nci5kZWZhdWx0Lmlucy5pbml0Tm93TW9udGhEYXRhKCk7XG4gICAgICAgIF9za2luTWdyLmRlZmF1bHQuaW5zLmluaXQoKTtcbiAgICAgICAgdGhpcy5zY2VuZU5hbWUgPSBfcEluZm8uZGVmYXVsdC5pbnMuZ2V0R3VpZGVEb25lKCkgPyBfcEluZm8uc2NlbmVUeXBlLm1haW4gOiBfcEluZm8uc2NlbmVUeXBlLmd1aWRlO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubG9hZEZvbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwiZm9udC9mb250XCIsIGNjLkJpdG1hcEZvbnQsIGZ1bmN0aW9uKG8sIG4pIHtcbiAgICAgICAgICAgICAgICBvID8gZShvKSA6IHQobik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wcmVMb2FkR3VpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKF9wSW5mby5zY2VuZVR5cGUuZ3VpZGUpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucHJlbG9hZFNjZW5lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5zdGF0ZVN0ciA9IFwi5q2j5Zyo6L+b5YWl5ri45oiPXCI7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlLCBvKSB7XG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYWcoODg2KTtcbiAgICAgICAgICAgIHZhciBuID0gMTAwIC0gdC5jdXJQcm87XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXG4gICAgICAgICAgICAgICAgdC5zY2VuZU5hbWUsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oZSwgbykge1xuICAgICAgICAgICAgICAgICAgICB0LnVwZGF0ZVBybzIodC5jdXJQcm8gKyAoZSAvIG8pICogbik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPyBvKHQpIDogZSgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZVBybyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdGhpcy5jdXJQcm8gKz0gdDtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFnKDg4Nik7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucHJvKVxuICAgICAgICAgICAgLnRhZyg4ODYpXG4gICAgICAgICAgICAudG8oMC4xLCB7IHByb2dyZXNzOiB0aGlzLmN1clBybyAvIDEwMCB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVQcm8yID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLnByby5wcm9ncmVzcyA9IHQgLyAxMDA7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5wcm9MYmwuc3RyaW5nID0gdGhpcy5zdGF0ZVN0ciArIFwiIChcIiArIE1hdGguY2VpbCgxMDAgKiB0aGlzLnByby5wcm9ncmVzcykgKyBcIiUpXCI7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5ldHIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX2dsb2JhbC5kZWZhdWx0LmlzUmVTdG9yZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgIF9wSW5mby5jaGdTY2VuZSh0aGlzLnNjZW5lTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBub0FuaTogITAsXG4gICAgICAgICAgICAgICAgICAgIGNiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKFwic291bmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShcInJlc1Nwc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKFwicHJlZmFiXCIsIGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0IHx8IChfcEluZm8uZGVmYXVsdC5pbnMuaXNPcGVuTG9jayAmJiBlLnByZWxvYWQoXCJwcmVmYWIvcGFnZV9yYWNlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLnJlbGVhc2UoXCJiZy9iZ1wiLCBjYy5TcHJpdGVGcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMucmVsZWFzZShcImJnL2xvZ29cIiwgY2MuU3ByaXRlRnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLnJlbGVhc2UoXCJiZy9kb3duXCIsIGNjLlNwcml0ZUZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5yZWxlYXNlKFwiYmcvckRvd25cIiwgY2MuU3ByaXRlRnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5yZXBvcnRFdmVudChfaWR4LkVSZXBFdnQuZ2FtZUxvYWRlZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbUChjYy5TcHJpdGUpXSwgZS5wcm90b3R5cGUsIFwiYmdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtQKGNjLlNwcml0ZSldLCBlLnByb3RvdHlwZSwgXCJsb2dvXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbUChjYy5Qcm9ncmVzc0JhcildLCBlLnByb3RvdHlwZSwgXCJwcm9cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtQKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwibG9naW5Ob2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbUChjYy5TcHJpdGUpXSwgZS5wcm90b3R5cGUsIFwickRvd25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtQKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcInRpcFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1AoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwicHJvTGJsXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbUChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImluZm9cIiwgdm9pZCAwKTtcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbRF0sIGUpO1xufSkoY2MuQ29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGs7Il19