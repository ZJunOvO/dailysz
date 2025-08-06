var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _evts = require("evts");
var _item1 = require("item1");
var _mailMgr = require("mailMgr");
var _panelMgr = require("panelMgr");
var _baseUI = require("baseUI");
var p = cc._decorator;
var d = p.ccclass;
var h = p.property;
var f = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
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
    e.prototype.start = function () {};
    e.prototype.init = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var o = t[0].id;
        this.mailId = o;
        var n = _mailMgr.default.ins.serverMail;
        this.title.string = n[o].title;
        this.cont.string = n[o].msg;
        this.updateItem();
    };
    e.prototype.updateItem = function (t) {
        var e = this;
        void 0 === t && (t = !0);
        var o = _mailMgr.default.ins.mailInfo.mail[this.mailId];
        var n = _mailMgr.default.ins.serverMail;
        var i = JSON.parse(n[this.mailId].props);
        if (t) {
            for (var r in (this.scrollView.content.children.forEach(function (t) {
                e._mailItem.push(t);
            }),
            this.scrollView.content.removeAllChildren(),
            i))
                if (i.hasOwnProperty(r)) {
                    var a = this._mailItem.shift() || cc.instantiate(this.itemPfb);
                    this.scrollView.content.addChild(a);
                    a.getComponent(_item1.default).init(r, i[r], o);
                }
            if (this.scrollView.content.childrenCount) {
                var l = (this.scrollView.content.children[0].width + 5.5) * this.scrollView.content.childrenCount;
                this.scrollView.node.x =
                    l > this.scrollView.node.width ? -209 : (this.scrollView.node.width - l) / 2 - 209;
                l = Math.min(l, 360);
                this.scrollView.node.width = l;
                this.scrollView.scrollToLeft();
            }
        }
        var u = Object.keys(i).length > 0;
        this.awardNode.active = u && o != _mailMgr.mailState.award;
        this.deleteNode.active = !this.awardNode.active;
    };
    e.prototype.updMail = function () {};
    e.prototype.getAward = function () {
        if (_mailMgr.default.ins.getAward(this.mailId)) {
            for (var t = [], e = this.scrollView.content.childrenCount - 1; e >= 0; e--) {
                var o = this.scrollView.content.children[e];
                var n = o.parent.convertToWorldSpaceAR(o.position);
                var i = {};
                i.itemId = o.getComponent(_item1.default).key;
                i.worldPos = n;
                i.value = o.getComponent(_item1.default).countStr;
                t.push(i);
            }
            _panelMgr.default.ins.open("ui/ui_flyAni", {itemDatas: t});
            this.updateItem(!1);
        }
    };
    e.prototype.delete = function () {
        _mailMgr.default.ins.deleteMail(this.mailId);
        this.hideThis();
        _evts.default.opE.emit({action: _evts.default.UPDMAIL, data: {type: "delete", id: this.mailId}});
    };
    e.prototype.changereadState = function () {
        _mailMgr.default.ins.readMail(this.mailId) &&
            _evts.default.opE.emit({action: _evts.default.UPDMAIL, data: {type: "read", id: this.mailId}});
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    e.prototype.onHide = function () {
        this.changereadState();
    };
    __decorate([h(cc.ScrollView)], e.prototype, "scrollView", void 0);
    __decorate([h(cc.Label)], e.prototype, "title", void 0);
    __decorate([h(cc.Label)], e.prototype, "cont", void 0);
    __decorate([h(cc.Prefab)], e.prototype, "itemPfb", void 0);
    __decorate([h(cc.Node)], e.prototype, "awardNode", void 0);
    __decorate([h(cc.Node)], e.prototype, "deleteNode", void 0);
    return __decorate([d], e);
})(_baseUI.default);
exports.default = f;
