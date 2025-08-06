"use strict";
cc._RF.push(module, 'd45c3iSApZP3p940Sl9LSeE', 'ui_skin');
// scripts/ui_skin.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _baseUI = require("baseUI");

var _pInfo = require("pInfo");

var _uData = require("uData");

var _chgBtn = require("chgBtn");

var _skinContent = require("skinContent");

var _head = require("head");

var _res = require("res");

var _skinMgr = require("skinMgr");

var _evts = require("evts");

var g = cc._decorator;
var y = g.ccclass;
var m = g.property;

var v = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.scrollView = null;
    e.btnsNode = null;
    e.headComp = null;
    e.pNameTxt = null;
    e.bgSp = null;
    e.roleNode = null;
    e.curPageIdx = 1;
    e.contentArr = [];
    e.btnsComp = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = this;
    this.eventFunc = this.onOperTap.bind(this);

    _evts["default"].opE.on(this.eventFunc);

    this.scrollView.content.parent.children.forEach(function (e) {
      t.contentArr.push(e.getComponent(_skinContent["default"]));
      e.active = !1;
    });

    for (var e = function e(_e, n, i) {
      i.push(n[_e].getComponent(_chgBtn["default"]));

      n[_e].on("click", function () {
        t.chgViewData(_e);
      }, o);
    }, o = this, n = 0, i = this.btnsNode.children, r = this.btnsComp, a = i.length; n < a; n++) {
      e(n, i, r);
    }
  };

  e.prototype.start = function () {
    this.chgViewData(0);

    _res["default"].ins.getBundleByString("resSps").then(function (t) {
      t.preloadDir("game/skin");
    });

    _res["default"].ins.getBundleByString("prefab").then(function (t) {
      t.preloadDir("skin");
    });
  };

  e.prototype.onDestroy = function () {
    _evts["default"].opE.off(this.eventFunc);

    this.eventFunc = null;
  };

  e.prototype.init = function () {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }

    var o = _pInfo["default"].ins.getUsingSkin();

    var n = _uData["default"].ins.getHeadImg();

    if (this.pNameTxt.string = _uData["default"].ins.getName(), this.headComp.loadHeadImg(n), o) for (var i in o) {
      var r = i;
      var a = o[i];
      this.updateShow(r, a);
    }
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  e.prototype.chgViewData = function (t) {
    var e = this.curPageIdx;

    if (e != t) {
      var o = {
        0: _skinMgr.SkinIdEnum.bg,
        1: _skinMgr.SkinIdEnum.headFrame,
        2: _skinMgr.SkinIdEnum.nameFrame,
        3: _skinMgr.SkinIdEnum.role
      };

      var n = _skinMgr["default"].ins.getSkinConfig(o[t]);

      this.contentArr[t].initContent(n);
      this.changeBtnState(e, t);
      this.changeContentState(e, t);
      this.curPageIdx = t;
    }
  };

  e.prototype.changeBtnState = function (t, e) {
    var o = this.btnsComp;
    o[t].setState(!1);
    o[e].setState(!0);
  };

  e.prototype.changeContentState = function (t, e) {
    var o = this.contentArr;
    var n = this.scrollView;
    o[t].node.active = !1;
    o[e].node.active = !0;
    n.content = o[e].node;
    n.scrollToTop(0.1);
  };

  e.prototype.onOperTap = function (t) {
    if ((null == t ? void 0 : t.action) === _evts["default"].SKIN_CHG && t.data && t.data.isUse) {
      var e = t.data;
      var o = e.skinId;
      var n = e.ref;
      this.updateShow(o, n);
    }
  };

  e.prototype.updateShow = function (t, e) {
    switch (t) {
      case _skinMgr.SkinIdEnum.bg:
        _skinMgr["default"].ins.updateBg(e, this.bgSp);

        break;

      case _skinMgr.SkinIdEnum.role:
        _skinMgr["default"].ins.updateRole(e, this.roleNode);

    }
  };

  __decorate([m(cc.ScrollView)], e.prototype, "scrollView", void 0);

  __decorate([m(cc.Node)], e.prototype, "btnsNode", void 0);

  __decorate([m(_head["default"])], e.prototype, "headComp", void 0);

  __decorate([m(cc.Label)], e.prototype, "pNameTxt", void 0);

  __decorate([m(cc.Sprite)], e.prototype, "bgSp", void 0);

  __decorate([m(cc.Node)], e.prototype, "roleNode", void 0);

  return __decorate([y], e);
}(_baseUI["default"]);

exports["default"] = v;

cc._RF.pop();