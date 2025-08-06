var n;
Object.defineProperty(exports, "__esModule", { value: !0 });
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
var P = 79 - 34.5 * Math.tan((Math.PI / 180) * 30) + 0.4;
var k = (function(t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
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
        var o = _cfgMgr.default.serverCfg;
        var n =
            (null ===
                (e = null === (t = null == o ? void 0 : o.lock_rules) || void 0 === t ? void 0 : t.main_line_lock) ||
                void 0 === e ?
                void 0 :
                e.puzzle_line_val) || 0;
        this.tipLb.string = _lang.lang[30001].format(n);
        for (var i = 0, r = o.props.set; i < r.length; i++) {
            var s = r[i];
            "puzzle_background" == s.key ?
                s.limit_time &&
                ((this.defaultShowTime = s.limit_time), (this.timeLb.node.active = !1), (this.timeAd.active = !0)) :
                "puzzle_pieces" == s.key ?
                s.daily_limit_times && (this.adMaxTime = Number(s.daily_limit_times) || 5) :
                "newYear_pieces" == s.key &&
                s.daily_limit_times &&
                (this.adMaxTime2 = Number(s.daily_limit_times) || 5);
        }
        this.eventFunc = this.onOperTap.bind(this);
        _evts.default.opE.on(this.eventFunc);
        this.scrollView._registerEvent = function() {};
        this.scrollView._unregisterEvent = function() {};
        this.tile_a = this.tilesNode;
        this.scrollView.node.on("scrolling", this.chgVisItems, this);
        this.tileLbNode.active = !1;
        this.btnReset.active = !1;
    };
    e.prototype.onOperTap = function(t) {
        var e = null == t ? void 0 : t.action;
        if (e)
            switch (e) {
                case _evts.default.UPDJIGSAWGAME:
                    this.updateView();
                    break;
                case _evts.default.UPD_PANEL:
                case _evts.default.UPD_MAIN_RED:
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
        this.hintNum.string = _bagMgr.default.ins.getItemCount("puzzle_notice") + "";
        this.bgNum.string = _bagMgr.default.ins.getItemCount("puzzle_background") + "";
    };
    e.prototype.updateView = function() {
        var t;
        1 === this.themeType ? (t = _jigsawMgr.default.ins) : 2 === this.themeType && (t = _newJigMgr.default.ins);
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
        1 === e ?
            ((n = _jigsawMgr.default.ins),
                (this.showBgEndTime = _pInfo.default.ins.getJigsawBgEndTimesByIdx(t)),
                (this.bgBtnNode.active = !0)) :
            2 === e &&
            ((n = _newJigMgr.default.ins),
                (this.showBgEndTime = _pInfo.default.ins.getNewJigBgEndTimesByIdx(t)),
                (r = "newYear_pieces"),
                (a = "fes_" + i + "_1"),
                (this.bgBtnNode.active = !1));
        this.jigTiles = n.getJigsawTilesByIdx(t);
        this.isUnlock = n.isItemUnlock(t);
        this.isUnlock ? this.initUnLock() : this.initLocked();
        !this.isUnlock && n.isPieceEnough(t) ? (this.tipLb.node.active = !0) : (this.tipLb.node.active = !1);
        this.upItemNum();
        1 === e &&
            (i < 61 ?
                _res.default.ins
                .getBundleByString("jigsaw")
                .then(function(t) {
                    t.load(a, cc.SpriteFrame, function(t, e) {
                        !t && o.node && o.node.isValid && (o.lockImg.spriteFrame = e);
                    });
                })
                .catch(function(t) {
                    console.error("RTool.ins.getBundleByString('jigsaw')", t);
                }) :
                cc.assetManager.loadRemote(
                    _global.OssConfig.jigswawUrl + "pintu_" + i + "_1.jpg", { ext: _global.headImgExt },
                    function(t, e) {
                        !t && o.node && o.node.isValid && (o.lockImg.spriteFrame = new cc.SpriteFrame(e));
                    }
                ));
        _res.default.ins
            .getBundleByString("resSps")
            .then(function(t) {
                t.load("item/" + r, cc.SpriteFrame, function(t, e) {
                    !t && o.node && o.node.isValid && (o.getPieceSp.spriteFrame = e);
                });
            })
            .catch(function(t) {
                console.error("RTool.ins.getBundleByString('resSps')", t);
            });
    };
    e.prototype.initGetTime = function() {
        var t = _pInfo.default.ins.getJigsawAdTimes();
        var e = this.adMaxTime - t;
        this.getLb.string = e + "";
    };
    e.prototype.initGetTime2 = function() {
        var t = _pInfo.default.ins.getNewJigAdTimes();
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
        1 === this.themeType ?
            e < 61 ?
            _res.default.ins
            .getBundleByString("jigsaw")
            .then(function(e) {
                e.load(o, cc.Texture2D, function(e, o) {
                    !e && t.node && t.node.isValid && t.initUnlockWithImg(o);
                });
            })
            .catch(function(t) {
                console.error("RTool.ins.getBundleByString('jigsaw')", t);
            }) :
            cc.assetManager.loadRemote(
                _global.OssConfig.jigswawUrl + "pintu_" + e + ".jpg", { ext: _global.headImgExt },
                function(e, o) {
                    !e && t.node && t.node.isValid && t.initUnlockWithImg(o);
                }
            ) :
            2 === this.themeType &&
            ((o = "fes_" + e),
                _res.default.ins
                .getBundleByString("jigsaw")
                .then(function(e) {
                    e.load(o, cc.Texture2D, function(e, o) {
                        !e && t.node && t.node.isValid && t.initUnlockWithImg(o);
                    });
                })
                .catch(function(t) {
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
        1 === this.themeType ? (t = _jigsawMgr.default.ins) : 2 === this.themeType && (t = _newJigMgr.default.ins);
        t.checkSetFin(this.theme_id);
    };
    e.prototype.initUnComplete = function() {
        this.is_init ||
            ((this.lockImg.node.active = !1),
                (this.scrollView.node.parent.active = !0),
                (this.menuNode.active = !0),
                (this.lockNode.active = !1),
                this.initTilePos(),
                this.initAroundTiles(),
                this.InitTiles(),
                this.RefreshIdleItems(!0),
                this.isShowBging(),
                (this.is_init = !0),
                (this.bgNode.y = 396),
                (this.bgNode.height = 960));
        var t = this.showBgEndTime - _time.default.ins.serverTime || Math.floor(new Date().getTime() / 1e3);
        this.lockNode.active = !(t < 0);
    };
    e.prototype.isShowBging = function() {
        (this.showBgEndTime - _time.default.ins.serverTime || Math.floor(new Date().getTime() / 1e3)) < 0
            ?
            ((this.finImg.node.active = !1),
                (this.lockNode.active = !1),
                (this.bgBtn.enabled = !0),
                (this.timeLb.string = this.defaultShowTime + "s"),
                (this.timeLb.node.active = !1),
                (this.timeAd.active = !0),
                this.unschedule(this.beginShow)) :
            ((this.bgBtn.enabled = !1),
                (this.finImg.node.active = !0),
                (this.lockNode.active = !0),
                (this.timeAd.active = !1),
                (this.timeLb.node.active = !0),
                this.schedule(this.beginShow, 1),
                this.beginShow());
    };
    e.prototype.lockedToUnlock = function() {
        this.isUnlock || ((this.isUnlock = !0), (this.lockNode.active = !1), this.initUnLock());
    };
    e.prototype.InitTiles = function() {
        for (var t = 0, e = this.jigTiles; t < e.length; t++) {
            var o = e[t];
            var n = o[0];
            var i = o[1]; -
            1 != i && this.cTile(n, i, !1);
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
        for (var o = [99, 89, 100, 91, 101, 93, 102, 95, 103, 97, 104], n = 0; n < 11; n++)
            (t = o[n]), (e = this.getTilePos(t)), this.addAroundTiles(e.x + 49.5, -e.y - 44.5 - 69, e.x, e.y + 69);
        var i = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 99];
        for (n = 0; n < 11; n++)
            (t = i[n]),
            (e = this.getTilePos(t)),
            10 == n ?
            this.addAroundTiles(e.x + 49.5 - P, -e.y - 44.5 - 34.5, e.x - P, e.y + 34.5) :
            this.addAroundTiles(e.x + 49.5 - P, -e.y - 44.5 + 34.5, e.x - P, e.y - 34.5);
        var r = [10, 21, 32, 43, 54, 65, 76, 87, 98, 104, 104];
        for (n = 0; n < 11; n++)
            (t = r[n]),
            (e = this.getTilePos(t)),
            10 == n ?
            this.addAroundTiles(e.x + 49.5 + P, -e.y - 44.5 - 34.5, e.x + P, e.y + 34.5) :
            this.addAroundTiles(e.x + 49.5 + P, -e.y - 44.5 + 34.5, e.x + P, e.y - 34.5);
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
        if ((void 0 === e && (e = !1), !this.isAllRight && this.jig_2d)) {
            for (var o = this.jigTiles, n = {}, i = 0, r = this.tiles_idle; i < r.length; i++) n[(g = r[i]).name] = g;
            this.tiles_idle = [];
            for (var a = 0, s = 0, c = o; s < c.length; s++) {
                var l = c[s];
                var u = l[0];
                if (-1 == l[1]) {
                    var p = n[(f = u.toString())];
                    var d = null;
                    p
                        ?
                        ((d = p), (n[f] = void 0)) :
                        ((d = this.cIdleTile(u)),
                            t || ((d.opacity = 0), cc.tween(d).to(0.5, { opacity: 255 }).start()),
                            (d.parent = this.scrollView.content));
                    d.setPosition(50 + 100 * a++, 0);
                    this.tiles_idle.push(d);
                }
            }
            var h = Math.max(100 * this.tiles_idle.length, this.scrollView.node.getContentSize().width + 1);
            for (var f in (this.scrollView.content.setContentSize(cc.size(h, 110)), n)) {
                var g;
                (g = n[f]) && g.destroy();
            }
            this.chgVisItems();
        }
    };
    e.prototype.chgVisItems = function() {
        var t = this.scrollView.content;
        var e = t.children;
        if (0 != e.length)
            for (
                var o = t.parent.getContentSize(), n = -o.width / 2 - 50, i = o.width / 2 + 50, r = t.x, a = 0, s = e; a < s.length; a++
            ) {
                var c = s[a];
                var l = c.x + r;
                var u = l >= n && l <= i;
                c.active = u;
            }
    };
    e.prototype.ttIdleTile = function(t) {
        if (this.tiles_idle.length <= 0) return null;
        var e = _main.default.ins.getWorldPointByTouch(t);
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
        cc.tween(o).to(0.5, { position: n }).to(0.15, { opacity: 0 }).start();
    };
    e.prototype.cDragTile = function(t) {
        _vb.default.p(_vb.VEnum3.SHORT);
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
        if ((void 0 === o && (o = !0), !this.getTileByPos(e))) {
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
            this.tiles[e] = { di: i, img: a, tile_id: t };
            o && e == t && (this.playTrueAni(n), _vb.default.p(_vb.VEnum3.SHORT));
            this.reGuide();
        }
    };
    e.prototype.delTile = function(t) {
        var e = this.tiles[t];
        e && (e.di.destroy(), e.img.destroy(), (this.tiles[t] = null));
    };
    e.prototype.moveTile = function(t, e, o) {
        var n = this.tiles[t];
        if (n && n.tile_id == o) {
            var i = this.tile_p[e];
            n.di.position = cc.v3(i.x, i.y - 7);
            n.img.position = cc.v3(i.x, i.y);
            this.tiles[e] = n;
            this.tiles[t] = null;
            e == o && (this.playTrueAni(i), _vb.default.p(_vb.VEnum3.SHORT));
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
        var s = (i / o) * 255;
        var c = (r / n) * 255;
        var l = cc.color();
        l.r = s > 0 ? s : 0;
        l.g = c > 0 ? c : 0;
        var u = 0;
        s > 0 && c <= -21 ?
            (u = 51) :
            s > 0 && c <= -8 ?
            (u = 102) :
            s <= -18 && c <= -8 ?
            (u = 153) :
            s <= -18 && c > 0 && (u = 204);
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
        if (!(this.tile_p.length > 0))
            for (var t = 0; t < 105; t++) {
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
                a.scale = 0.93;
                a.parent = this.cellNode;
                a.position = cc.v3(o, n, 0);
                this.tile_p.push(cc.v2(o, n));
            }
    };
    e.prototype.tTilePosID = function(t) {
        var e = _main.default.ins.getWorldPointByTouch(t);
        var o = this.tilesNode.convertToNodeSpaceAR(e);
        if (o.x <= 0 || o.x >= 694 || o.y >= 0 || o.y <= -711) return -1;
        for (var n = 0; n < this.tile_p.length; n++)
            if (cc.Vec2.distance(o, this.tile_p[n]) <= 34.5) return n;
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
            if (o && o.tile_id != e) return (this.tileSelect = o), (this.tilePosId = e), !1;
        }
        if (this.tiles_idle.length > 0) {
            var n = _main.default.ins.getWorldPointByTouch(t.touch);
            var i = this.scrollView.node.parent.convertToNodeSpaceAR(n);
            if (this.scrollView.node.getBoundingBox().contains(i))
                return (
                    this.scrollView._onTouchBegan(t),
                    (this.idle_tile_select = this.ttIdleTile(t.touch)),
                    this.idle_tile_select && (this.idle_tile_select.scale = 1.01 * 1.1), !1
                );
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
                r > 30 && r < 150 ?
                    (this.scroll_dir = 2) :
                    r < -30 && r > -150 ?
                    (this.scroll_dir = 2) :
                    r >= -30 && r <= 30 ?
                    (this.scroll_dir = 1) :
                    (r <= -150 || r >= 150) && (this.scroll_dir = 1);
                this.tileSelect ?
                    this.drag_tile ||
                    0 == this.scroll_dir ||
                    ((this.drag_tile = this.cDragTile(this.tileSelect.tile_id)),
                        (this.drag_tile.scale = 0.88),
                        (this.drag_tile.parent = this.node),
                        this.setTileVis(this.tileSelect, !1)) :
                    1 == this.scroll_dir ?
                    this.idle_tile_select && (this.idle_tile_select.scale = 1.01) :
                    2 == this.scroll_dir &&
                    this.idle_tile_select &&
                    !this.drag_tile &&
                    ((this.drag_tile = this.cDragTile(Number(this.idle_tile_select.name))),
                        (this.drag_tile.parent = this.node),
                        (this.idle_tile_select.active = !1));
            }
        }
        var a = _main.default.ins.getWorldPointByTouch(t.touch);
        var s = this.scrollView.node.parent.convertToNodeSpaceAR(a);
        var c = this.scrollView.node.getBoundingBox().contains(s);
        if ((this.tileSelect || 1 != this.scroll_dir || !c || this.scrollView._onTouchMoved(t), this.drag_tile)) {
            var l = _main.default.ins.getWorldPointByTouch(t.touch);
            var u = this.node.convertToNodeSpaceAR(l);
            this.drag_tile.position = cc.v3(u.x, u.y + 195);
            var p = this.node.convertToWorldSpaceAR(this.drag_tile.position);
            var d = ((o = this.tilesNode.convertToNodeSpaceAR(p)), 0);
            var h = -1;
            var f = cc.v3();
            if (o.x > 0 && o.x < 694 && o.y < 0 && o.y > -711) {
                for (var g = this.tile_p.length - 1; g >= 0; g--)
                    if (((f.x = this.tile_p[g].x), (f.y = this.tile_p[g].y), -1 == h))
                        (h = g), (d = cc.Vec2.distance(o, f));
                    else {
                        var y = cc.Vec2.distance(o, f);
                        y < d && ((d = y), (h = g));
                    } -
                1 != h && d > 50 && (h = -1);
            }
            this.dragPutPosId = h; -
            1 == h ?
                (this.dragTag.active = !1) :
                ((this.dragTag.active = !0), (this.dragTag.position = cc.v3(this.tile_p[h].x, this.tile_p[h].y)));
        }
    };
    e.prototype.onTE = function(t) {
        if (this.isAllRight || this.is_hinting) return !0;
        this.tileSelect || 1 != this.scroll_dir || this.scrollView._onTouchEnded(t);
        this.putDragTile();
        this.idle_tile_select && ((this.idle_tile_select.scale = 1.01), (this.idle_tile_select = null));
    };
    e.prototype.onTC = function(t) {
        if (this.isAllRight || this.is_hinting) return !0;
        this.tileSelect || 1 != this.scroll_dir || this.scrollView._onTouchCancelled(t);
        this.putDragTile();
        this.idle_tile_select && ((this.idle_tile_select.scale = 1.01), (this.idle_tile_select = null));
    };
    e.prototype.putDragTile = function() {
        if (this.drag_tile) {
            var t = Number(this.drag_tile.name);
            this.dragTag.active = !1;
            var e = this.drag_tile;
            if (
                (cc
                    .tween(this.drag_tile)
                    .to(0.15, { opacity: 0 })
                    .call(function() {
                        e.destroy();
                    })
                    .start(),
                    (this.drag_tile = null),
                    (this.is_hinting = !1),
                    this.idle_tile_select)
            ) {
                if (
                    ((this.idle_tile_select.scale = 1.01),
                        (this.idle_tile_select.active = !0),
                        (this.idle_tile_select.opacity = 0),
                        cc.tween(this.idle_tile_select).to(0.3, { opacity: 255 }).start(),
                        (this.idle_tile_select = null), -1 == this.dragPutPosId)
                )
                    return;
                var o = this.getTileByPos(this.dragPutPosId);
                return o ?
                    void(
                        o.tile_id == this.dragPutPosId ||
                        (this.modJigTile(this.theme_id, o.tile_id, -1, !1),
                            this.delTile(this.dragPutPosId),
                            this.modJigTile(this.theme_id, t, this.dragPutPosId),
                            this.cTile(t, this.dragPutPosId),
                            this.RefreshIdleItems(!1, !0))
                    ) :
                    (this.modJigTile(this.theme_id, t, this.dragPutPosId),
                        this.cTile(t, this.dragPutPosId),
                        this.RefreshIdleItems(!1),
                        void(t == this.dragPutPosId && this.checkAllR()));
            }
            if (
                this.tileSelect &&
                (this.setTileVis(this.tileSelect, !0), (this.tileSelect = null), this.tilePosId != this.dragPutPosId)
            ) {
                var n = this.getTileByPos(this.dragPutPosId);
                if (-1 == this.dragPutPosId || (n && n.tile_id == this.dragPutPosId))
                    return (
                        this.modJigTile(this.theme_id, t, -1),
                        this.delTile(this.tilePosId),
                        void this.RefreshIdleItems(!1)
                    );
                if (n && n.tile_id != this.dragPutPosId) {
                    var i = n.tile_id;
                    this.modJigTile(this.theme_id, n.tile_id, -1, !1);
                    this.delTile(this.dragPutPosId);
                    this.modJigTile(this.theme_id, t, this.dragPutPosId, !1);
                    this.moveTile(this.tilePosId, this.dragPutPosId, t);
                    this.modJigTile(this.theme_id, i, this.tilePosId);
                    this.cTile(i, this.tilePosId);
                    return void this.checkAllR();
                } -
                1 != this.tilePosId &&
                    this.tilePosId != this.dragPutPosId &&
                    (this.modJigTile(this.theme_id, t, this.dragPutPosId),
                        this.moveTile(this.tilePosId, this.dragPutPosId, t),
                        t == this.dragPutPosId && this.checkAllR());
            }
        }
    };
    e.prototype.OnBtnHint = function() {
        if (!(this.is_hinting || this.isAllRight || this.tileSelect || this.idle_tile_select)) {
            var t = this.tiles_idle.length > 0;
            if (!t)
                for (var e in this.tiles) {
                    var o = this.tiles[e];
                    if (o && Number(e) != o.tile_id) {
                        t = !0;
                        break;
                    }
                }
            t
                ?
                _bagMgr.default.ins.getItemCount("puzzle_notice") > 0 ?
                (_bagMgr.default.ins.useItem("puzzle_notice"), this._doHint()) :
                _panelMgr.default.ins.open("ui/ui_getItem", { itemId: "puzzle_notice" }) :
                this.onBtnGet();
        }
    };
    e.prototype._doHint = function() {
        var t = this;
        for (var e in ((this.is_hinting = !1), this.tiles))
            if ((l = this.tiles[e])) {
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
            cc.tween(this.drag_tile)
                .to(0.5, { x: a.x, y: a.y })
                .call(function() {
                    t.putDragTile();
                })
                .start();
            return void(this.is_hinting = !0);
        }
        for (var s = 0, c = this.tiles_idle; s < c.length; s++) {
            var l = c[s];
            this.idle_tile_select = l;
            var u = Number(l.name);
            this.dragPutPosId = u;
            this.drag_tile = this.cDragTile(u);
            this.drag_tile.parent = this.node;
            i = this.node.convertToNodeSpaceAR(l.convertToWorldSpaceAR(cc.Vec2.ZERO));
            l.active || ((i.x = this.scrollView.node.parent.x), (i.y = this.scrollView.node.parent.y));
            a = this.node.convertToNodeSpaceAR(this.tilesNode.convertToWorldSpaceAR(this.tile_p[this.dragPutPosId]));
            this.drag_tile.setPosition(i.x, i.y);
            cc.tween(this.drag_tile)
                .to(0.5, { x: a.x, y: a.y })
                .call(function() {
                    t.putDragTile();
                })
                .start();
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
        _festivalMgr.default.ins.updPro(_festivalMgr.fesTaskKey.finishPuzzle, 1);
        _sound.default.ins.play(_sound.default.FINISH_PUZZLE);
        1 === this.themeType ?
            _idx.platform.reportEvent(_idx.ERepEvt.partJigsaw) :
            2 === this.themeType && _idx.platform.reportEvent(_idx.ERepEvt.fesJigNum);
        var e = this.ringNode;
        var o = this.tilesNode.convertToWorldSpaceAR(t);
        var n = this.node.convertToNodeSpaceAR(o);
        e.active = !0;
        e.setPosition(n);
        e.parent = this.node;
        cc.tween(e)
            .set({ scale: 0.88, opacity: 255 })
            .to(0.2, { scale: 1.2, opacity: 0 })
            .call(function() {
                e.active = !1;
            })
            .start();
    };
    e.prototype.checkAllR = function() {
        if (!this.isAllRight && ((this.isAllRight = this.IsJigsawCompleted(this.theme_id)), this.isAllRight)) {
            this.tilesNode.active = !1;
            this.finImg.node.active = !0;
            this.finImg.node.opacity = 0;
            cc.tween(this.finImg.node).to(1, { opacity: 255 }).start();
            this.scrollView.node.active = !1;
            this.menuNode.active = !1;
            this.lockNode.active = !1;
            this.btnReset.active = !0;
            this.bgNode.y = 326;
            this.bgNode.height = 790;
            var t = this.theme_id + "";
            _idx.platform.reportEvent(_idx.ERepEvt.finishHoleJigsaw, { idx: t });
            var e = void 0;
            1 === this.themeType ? (e = _jigsawMgr.default.ins) : 2 === this.themeType && (e = _newJigMgr.default.ins);
            e.setFinfishJigsaw(this.theme_id);
            _panelMgr.default.ins.open("ui/ui_jigFinish", { themeId: this.theme_id, themeType: this.themeType });
        }
    };
    e.prototype.IsJigsawCompleted = function(t) {
        var e;
        1 === this.themeType ? (e = _jigsawMgr.default.ins) : 2 === this.themeType && (e = _newJigMgr.default.ins);
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
        this.guideF && (this.guideF.destroy(), (this.guideF = null));
    };
    e.prototype.onBtnBg = function() {
        if (_bagMgr.default.ins.getItemCount("puzzle_background") > 0) {
            _bagMgr.default.ins.useItem("puzzle_background");
            var t = _time.default.ins.serverTime || Math.floor(new Date().getTime() / 1e3);
            this.showBgEndTime = this.defaultShowTime + t;
            1 === this.themeType ?
                _pInfo.default.ins.setJigsawBgEndTimesByIdx(this.theme_id, this.showBgEndTime) :
                2 === this.themeType &&
                _pInfo.default.ins.setNewJigBgEndTimesByIdx(this.theme_id, this.showBgEndTime);
            this.bgBtn.enabled = !1;
            this.finImg.node.active = !0;
            this.lockNode.active = !0;
            this.timeAd.active = !1;
            this.timeLb.node.active = !0;
            this.schedule(this.beginShow, 1);
        } else _panelMgr.default.ins.open("ui/ui_getItem", { itemId: "puzzle_background" });
    };
    e.prototype.beginShow = function() {
        var t = _time.default.ins.serverTime || Math.floor(new Date().getTime() / 1e3);
        var e = this.showBgEndTime - t;
        if (e < 0)
            return (
                (this.finImg.node.active = !1),
                (this.lockNode.active = !1),
                (e = 30),
                (this.bgBtn.enabled = !0),
                (this.timeLb.string = this.defaultShowTime + "s"),
                (this.timeLb.node.active = !1),
                (this.timeAd.active = !0),
                void this.unschedule(this.beginShow)
            );
        this.timeLb.string = e + "s";
    };
    e.prototype.onBtnGet = function() {
        1 === this.themeType ?
            _panelMgr.default.ins.open("ui/ui_getItem", { itemId: "puzzle_pieces" }) :
            2 === this.themeType && _panelMgr.default.ins.open("ui/ui_getItem", { itemId: "newYear_pieces" });
    };
    e.prototype.onBtnLb = function() {
        this.tileLbNode.active = !this.tileLbNode.active;
    };
    e.prototype.onBtnReset = function() {
        _panelMgr.default.ins.open("ui/ui_jigTip", { okCb: this.resetItem.bind(this) });
    };
    e.prototype.resetItem = function() {
        var t;
        1 === this.themeType ? (t = _jigsawMgr.default.ins) : 2 === this.themeType && (t = _newJigMgr.default.ins);
        t.resetJigByIdx(this.theme_id);
        this.is_init || (this.initTilePos(), this.initAroundTiles(), (this.is_init = !0));
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
        if ((void 0 === n && (n = !0), void 0 === n && (n = !0), !(e < 0 || e >= 105 || o < -1 || o >= 105))) {
            for (var i = this.jigTiles, r = 0, s = i; r < s.length; r++)
                if ((u = s[r])[1] == o && -1 != o) {
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
                _evts.default.opE.emit({ action: _evts.default.UPD_MAIN_RED });
                var p = void 0;
                1 === this.themeType ?
                    (p = _jigsawMgr.default.ins) :
                    2 === this.themeType && (p = _newJigMgr.default.ins);
                p.setJigsawTilesByIdx(this.theme_id, this.jigTiles);
            }
        }
    };
    e.prototype.onDestroy = function() {
        _evts.default.opE.off(this.eventFunc);
        this.eventFunc = null;
    };
    __decorate([D(cc.Node)], e.prototype, "ringNode", void 0);
    __decorate([D(cc.Prefab)], e.prototype, "tilePre", void 0);
    __decorate([D(cc.SpriteFrame)], e.prototype, "shadow0", void 0);
    __decorate([D(cc.Node)], e.prototype, "tilesNode", void 0);
    __decorate([D(cc.Node)], e.prototype, "menuNode", void 0);
    __decorate([D(cc.ScrollView)], e.prototype, "scrollView", void 0);
    __decorate([D(cc.Sprite)], e.prototype, "finImg", void 0);
    __decorate([D(cc.Node)], e.prototype, "dragTag", void 0);
    __decorate([D(cc.Node)], e.prototype, "lockNode", void 0);
    __decorate([D(cc.Label)], e.prototype, "timeLb", void 0);
    __decorate([D(cc.Button)], e.prototype, "bgBtn", void 0);
    __decorate([D(cc.Label)], e.prototype, "getLb", void 0);
    __decorate([D(cc.Node)], e.prototype, "timeAd", void 0);
    __decorate([D(cc.Sprite)], e.prototype, "lockImg", void 0);
    __decorate([D(cc.Node)], e.prototype, "tileLbNode", void 0);
    __decorate([D(cc.Node)], e.prototype, "cellNode", void 0);
    __decorate([D(cc.SpriteFrame)], e.prototype, "cellSpr", void 0);
    __decorate([D(cc.Label)], e.prototype, "hintNum", void 0);
    __decorate([D(cc.Label)], e.prototype, "bgNum", void 0);
    __decorate([D(cc.Node)], e.prototype, "bgNode", void 0);
    __decorate([D(cc.Label)], e.prototype, "tipLb", void 0);
    __decorate([D(cc.Node)], e.prototype, "bgBtnNode", void 0);
    __decorate([D(cc.Sprite)], e.prototype, "getPieceSp", void 0);
    __decorate([D(cc.Node)], e.prototype, "btnReset", void 0);
    return __decorate([I], e);
})(cc.Component);
exports.default = k;