var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _cfgMgr = require("cfgMgr");
var _global = require("global");
var _pInfo = require("pInfo");
var _baseUI = require("baseUI");
var u = cc._decorator;
var p = u.ccclass;
var d = u.property;
var h = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
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
    e.prototype.onLoad = function () {
        cc.tween(this.lightNode).by(3, {angle: -360}).repeatForever().start();
    };
    e.prototype.init = function (t) {
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
                (i = "除虫模式"),
                    (r = "虫子都是连续格子组成，\n根据提示的数字找出虫子。"),
                    (this.typeSp.spriteFrame = this.tySps[0]),
                    (a = e.data.size);
                break;
            case _pInfo.challengeType.tree:
                (i = "除草模式"),
                    (r = "点亮草丛四周的任意格子，\n可以去除草丛。"),
                    (this.typeSp.spriteFrame = this.tySps[1]),
                    (a = e.size);
                break;
            case _pInfo.challengeType.ice:
                (i = "除冰模式"),
                    (r = "点亮冰块周围4个格子，\n可以去除冰块。"),
                    (this.typeSp.spriteFrame = this.tySps[2]),
                    (a = e.size);
        }
        this.lvLB.string = i;
        this.infoLB.string = r;
        this.crossLb.string = n;
        this.sizeLb.string = a + "x" + a;
        this.diffLb.string = this.getLevelDiffStrByDiff(e.diff);
        this.costLB.string = o + "/" + _pInfo.default.ins.getPower();
    };
    e.prototype.onBtnStart = function () {
        var t = this.cost;
        var e = Object.assign({}, this.lvData);
        _pInfo.default.ins.addPower(-t);
        var o = e.date;
        var n = 1e4 * o.year + 100 * o.month + o.day;
        _global.default.challengeLv = n;
        _pInfo.chgScene(_pInfo.sceneType.game, {gameType: _pInfo.gameType.challenge, challengeData: e});
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    e.prototype.getLevelDiffStrByDiff = function (t) {
        var e = _cfgMgr.default.serverCfg.difficulty_rules.rules;
        var o = "入门难度";
        var n = 1;
        for (var i in e) {
            if (((o = e[i].title), n === t)) break;
            n++;
        }
        return o.slice(0, -2);
    };
    __decorate([d(cc.Label)], e.prototype, "lvLB", void 0);
    __decorate([d(cc.Label)], e.prototype, "infoLB", void 0);
    __decorate([d(cc.Label)], e.prototype, "sizeLb", void 0);
    __decorate([d(cc.Label)], e.prototype, "diffLb", void 0);
    __decorate([d(cc.Label)], e.prototype, "crossLb", void 0);
    __decorate([d(cc.Label)], e.prototype, "costLB", void 0);
    __decorate([d(cc.Sprite)], e.prototype, "typeSp", void 0);
    __decorate([d(cc.Node)], e.prototype, "lightNode", void 0);
    __decorate([d([cc.SpriteFrame])], e.prototype, "tySps", void 0);
    return __decorate([p], e);
})(_baseUI.default);
exports.default = h;
