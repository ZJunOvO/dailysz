"use strict";
cc._RF.push(module, 'bcc61uunFpAPIf+ZqAgsiJ/', 'ui_chapterDone');
// scripts/ui_chapterDone.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _levelMgr = require("levelMgr");

var _pInfo = require("pInfo");

var _baseUI = require("baseUI");

var l = cc._decorator;
var u = l.ccclass;
var p = l.property;

var d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.light = null;
    e.pics = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    cc.tween(this.light).by(3, {
      angle: -360
    }).repeatForever().start();
  };

  e.prototype.init = function () {
    for (var t = this, e = [], o = 0; o < arguments.length; o++) {
      e[o] = arguments[o];
    }

    _levelMgr["default"].ins.getchapterBunder().then(function () {
      for (var e = _pInfo["default"].ins.getPuzzleLvl(), o = "" + (Math.ceil(e / 54) - 1 + 100), n = function n(e) {
        _levelMgr["default"].ins.getJigsawIcon(e, o).then(function (o) {
          o && (t.pics[e - 1].spriteFrame = o);
        })["catch"](function () {
          console.error("getJigsawIconErr");
        });
      }, i = 1; i <= 6; i++) {
        n(i);
      }
    })["catch"](function () {
      console.error("getChapterBundleErr");
    });
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  __decorate([p(cc.Node)], e.prototype, "light", void 0);

  __decorate([p([cc.Sprite])], e.prototype, "pics", void 0);

  return __decorate([u], e);
}(_baseUI["default"]);

exports["default"] = d;

cc._RF.pop();