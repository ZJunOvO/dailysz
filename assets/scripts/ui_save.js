var n;
Object.defineProperty(exports, "__esModule", {value: !0});
var _idx = require("idx");
var _request = require("request");
var _time = require("time");
var _uData = require("uData");
var _panelMgr = require("panelMgr");
var _tipMgr = require("tipMgr");
var _baseUI = require("baseUI");
var h = cc._decorator;
var f = h.ccclass;
var g = h.property;
var y = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.timeLb = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {};
    e.prototype.init = function () {
        var t = this;
        this.timeLb.string = "暂无数据";
        _request.default.ins
            .getServerData("")
            .then(function (e) {
                t.rePanel(e);
            })
            .catch(function () {
                t.rePanel(null);
            });
    };
    e.prototype.rePanel = function (t) {
        if (((this.userDatas = t), t && t.data)) {
            var e = t.data;
            var o = e[0];
            var n = e[1];
            var i = (null == o ? void 0 : o.update_at) || 0;
            var r = (null == n ? void 0 : n.update_at) || 0;
            var a = Math.max(i, r);
            if (a) {
                var s = _time.default.ins.formatDate(a);
                this.timeLb.string = s;
            } else this.timeLb.string = "暂无数据";
        } else this.timeLb.string = "暂无数据";
    };
    e.prototype.hideThis = function () {
        this.hide();
    };
    e.prototype.onBtnSave = function () {
        _idx.platform.showLoading("存档中...");
        _request.default.ins
            .updateServerData(_uData.default.ins.getLocalData(), "backData")
            .then(function (t) {
                _idx.platform.hideLoading();
                t.status
                    ? _tipMgr.default.ins.showTip("存档成功", !0)
                    : _tipMgr.default.ins.showTip("网络拥堵，请稍后再试！", !0);
            })
            .catch(function () {
                _idx.platform.hideLoading();
                _tipMgr.default.ins.showTip("网络拥堵，请稍后再试！", !0);
            });
    };
    e.prototype.onBtnBack = function () {
        this.userDatas
            ? _panelMgr.default.ins.open("ui/ui_saveRestore", {userDatas: this.userDatas.data})
            : _tipMgr.default.ins.showTip("暂无数据", !0);
    };
    __decorate([g(cc.Label)], e.prototype, "timeLb", void 0);
    return __decorate([f], e);
})(_baseUI.default);
exports.default = y;
