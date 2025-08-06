var n;
Object.defineProperty(exports, "__esModule", { value: !0 });
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
var k = (function(t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
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
                        return _global.default.isReStore ?
                            (_idx.platform.reportEvent(_idx.ERepEvt.reSetData), [2]) :
                            (_idx.platform.reportEvent(_idx.ERepEvt.applaunchShow),
                                (t = cc.view.getVisibleSize()),
                                (e = t.width),
                                (o = t.height),
                                (n = o / e),
                                (cc.sys.IPAD == cc.sys.platform && _idx.platform.string() == _pConst.PFCode.Bytedance) ||
                                (n < 1.78 &&
                                    (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_HEIGHT),
                                        (i = cc.view.getVisibleSize()),
                                        (r = i.width),
                                        (a = i.height),
                                        (n = _global.default.padScale = a / r),
                                        ((c = new cc.Node("bg2")).color = new cc.Color(80, 80, 80)),
                                        (c.scale = n),
                                        this.node.addChild(c),
                                        c.setSiblingIndex(0),
                                        (this.bg2 = c.addComponent(cc.Sprite)))), [4, _cfgMgr.default.init()]);
                    case 1:
                        return s.sent(), _idx.platform.init(), [2];
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
                        return [4, _res.default.ins.lSF("bg/bg", this.bg)];
                    case 1:
                        return (
                            (t = n.sent()),
                            this.bg2 && t && (this.bg2.spriteFrame = t),
                            this.loadOther(),
                            _global.default.isReStore ? [3, 3] : [
                                4,
                                Promise.all([
                                    this.checkSession()
                                    .then(function() {
                                        return e.preLogin();
                                    })
                                    .then(function() {
                                        e.updatePro(10);
                                    }),
                                    this.getPrivacy(),
                                    this.getOSSConfig(),
                                    this.loadFont().then(function(t) {
                                        e.updatePro(40);
                                        exports.DEFAULTFONT = t;
                                    })
                                ]).catch(function() {})
                            ]
                        );
                    case 2:
                        return n.sent(), [3, 5];
                    case 3:
                        return [
                            4,
                            Promise.all([
                                this.loadFont().then(function(t) {
                                    e.updatePro(25);
                                    exports.DEFAULTFONT = t;
                                }),
                                this.restore().then(function() {
                                    e.updatePro(25);
                                })
                            ])
                        ];
                    case 4:
                        n.sent(), (n.label = 5);
                    case 5:
                        return [
                            4,
                            Promise.all([this.preloadScene(), _levelMgr.default.ins.init()]).catch(function() {})
                        ];
                    case 6:
                        return (
                            n.sent(),
                            this.isFail ?
                            ((this.isFail = !1), this.scheduleOnce(this.start, 1), [2]) :
                            (this.etr(), [2])
                        );
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
            _global.default.chapterCount = 18;
            _global.default.jisawCount = 40;
            t(1);
            // var e = cc.sys.isBrowser ? _global.OssConfig.configDevUrl : _global.OssConfig.configUrl;
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
    e.prototype.getPrivacy = function() {
        var t = this;
        return new Promise(function(e) {
            _idx.platform.string() == _pConst.PFCode.Wechat ||
                _idx.platform.isQQ ||
                _idx.platform.string() == _pConst.PFCode.Alipay ?
                ((t.info.active = !0),
                    _idx.platform.requirePrivacyAuthorize ?
                    _idx.platform.requirePrivacyAuthorize({
                        complete: function() {
                            e(1);
                        }
                    }) :
                    e(1)) :
                e(1);
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
            n.zoomScale = 0.9;
            n.node.on(
                "click",
                function() {
                    _idx.platform.showLogin(t);
                },
                this
            );
            return e;
        }
        return Promise.resolve();
    };
    e.prototype.preLogin = function(t) {
        var e = this;
        this.loginNode.active = !1;
        this.pro.node.active = this.tip.node.active = this.proLbl.node.active = !0;
        return new Promise(function(o) {
            _global.default.isReStore ?
                ((_idx.platform.initCloud && _idx.platform.initCloud()) || Promise.resolve())
                .then(function(t) {
                    _time.default.ins.sync(t);
                })
                .then(function() {
                    e.loginFinally();
                    o(1);
                }) :
                null != _idx.platform.getStorage("localData") || t ?
                (console.log("异步login"),
                    ((_idx.platform.initCloud && _idx.platform.initCloud()) || Promise.resolve())
                    .then(function(t) {
                        _time.default.ins.sync(t);
                        return (_idx.platform.getCloudData && _idx.platform.getCloudData()) || Promise.resolve();
                    })
                    .then(function(t) {
                        _uData.default.ins.onLogin(t);
                        e.loginFinally();
                        e.login()
                            .then(function() {
                                return e.loginFinally;
                            })
                            .catch(function(t) {
                                return console.error(t);
                            });
                        o(1);
                    })) :
                (console.log("同步login"),
                    (e.isSync = !0),
                    e
                    .login()
                    .then(function() {
                        o(1);
                    })
                    .catch(function(t) {
                        return console.error(t);
                    }));
        });
    };
    e.prototype.restore = function() {
        var t = this;
        return new Promise(function(e) {
            ((_idx.platform.initCloud && _idx.platform.initCloud()) || Promise.resolve())
            .then(function(t) {
                    _time.default.ins.sync(t);
                })
                .then(function() {
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
        _idx.platform
            .login(this.retryTime)
            .then(function(t) {
                var e = t.code;
                var o = t.anonymous_code;
                var n = t.openid;
                var i = t.unionid;
                // return _request.default.ins.login(e, o, n, i);

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
                })
            })
            .then(function(e) {
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
                                if (
                                    (_idx.platform.hideLoading(),
                                        console.log("login成功"),
                                        (o = _request.default.ins),
                                        (n = _uData.default.ins),
                                        (i = e.data),
                                        _time.default.ins.sync(e.server_time),
                                        (o.userToken = i && i.token),
                                        (o.openId = i && i.openid),
                                        (r = n.syncLoginData(i)),
                                        (d = r[0]),
                                        (y = r[1]),
                                        (v = function() {
                                            return __awaiter(O, void 0, void 0, function() {
                                                var e;
                                                var n;
                                                return __generator(this, function(i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            return (
                                                                cc.resources.load('game_init_config', (err, json) => {
                                                                    var t = json.json;
                                                                    // o
                                                                    // .getJson()
                                                                    // .then(function(t) {
                                                                    _cfgMgr.default.syncServerCfg(t.data);
                                                                    _bagMgr.default.ins.initBag(!d && y);
                                                                    _bagMgr.default.ins.initBag(!d && y)

                                                                }),
                                                                // .catch(function(t) {
                                                                //     return console.error(t);
                                                                // }),
                                                                (e = _pInfo.default.ins.getAliAddHome()),
                                                                _idx.platform.string() === _pConst.PFCode.Alipay && e ? [
                                                                    4,
                                                                    null === (n = _idx.platform.checkDesktopExist) ||
                                                                    void 0 === n ?
                                                                    void 0 :
                                                                    n.call(_idx.platform)
                                                                ] : [3, 2]
                                                            );
                                                        case 1:
                                                            i.sent(), (i.label = 2);
                                                        case 2:
                                                            return (
                                                                _mailMgr.default.ins.getMail(null),
                                                                this.loginFinally(),
                                                                t(1), [2]
                                                            );
                                                    }
                                                });
                                            });
                                        }), !d || !y)
                                )
                                    return [3, 7];
                                (_ = void 0), (w = void 0), (M.label = 1);
                            case 1:
                                return M.trys.push([1, 3, , 4]), [4, /*o.getServerData("localData")*/ Promise.resolve()];
                            case 2:
                                return (I = M.sent()) && (_ = JSON.parse(I.data[0].user_data) || {}), [3, 4];
                            case 3:
                                return M.sent(), [3, 4];
                            case 4:
                                return _idx.platform.getCloudData ? [4, _idx.platform.getCloudData()] : [3, 6];
                            case 5:
                                (w = M.sent()), (M.label = 6);
                            case 6:
                                if (
                                    ((D = (null == _ ? void 0 : _.puzzleLvl) || 0),
                                        (P =
                                            (null === (N = null == _ ? void 0 : _.bag) || void 0 === N ?
                                                void 0 :
                                                N.puzzle_pieces) || 0),
                                        (k = (null == w ? void 0 : w.puzzleLvl) || 0),
                                        (R =
                                            (null === (C = null == w ? void 0 : w.bag) || void 0 === C ?
                                                void 0 :
                                                C.puzzle_pieces) || 0), !(S = D > k || P > R || !w ? _ : w))
                                )
                                    throw _errorCode.errorCode.CANGET_DATE_ERR;
                                return n.onLogin(S), v(), [3, 8];
                            case 7:
                                n.onLogin(), v(), (M.label = 8);
                            case 8:
                                return [2];
                        }
                    });
                });
            })
            .catch(function(t) {
                // console.error(t);
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
    e.prototype.loginFinally = function() {
        _taskMgr.default.initTask();
        _challengeMgr.default.ins.initNowMonthData();
        _skinMgr.default.ins.init();
        this.sceneName = _pInfo.default.ins.getGuideDone() ? _pInfo.sceneType.main : _pInfo.sceneType.guide;
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
        this.stateStr = "正在进入游戏";
        return new Promise(function(e, o) {
            cc.Tween.stopAllByTag(886);
            var n = 100 - t.curPro;
            cc.director.preloadScene(
                t.sceneName,
                function(e, o) {
                    t.updatePro2(t.curPro + (e / o) * n);
                },
                function(t) {
                    t ? o(t) : e(1);
                }
            );
        });
    };
    e.prototype.updatePro = function(t) {
        this.curPro += t;
        cc.Tween.stopAllByTag(886);
        cc.tween(this.pro)
            .tag(886)
            .to(0.1, { progress: this.curPro / 100 })
            .start();
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
                _global.default.isReStore = null;
                _idx.platform.hideLoading();
                _pInfo.chgScene(this.sceneName, {
                    noAni: !0,
                    cb: function() {
                        cc.assetManager.loadBundle("sound");
                        cc.assetManager.loadBundle("resSps");
                        cc.assetManager.loadBundle("prefab", function(t, e) {
                            t || (_pInfo.default.ins.isOpenLock && e.preload("prefab/page_race"));
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
})(cc.Component);
exports.default = k;