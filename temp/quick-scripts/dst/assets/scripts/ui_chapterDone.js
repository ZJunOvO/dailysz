
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui_chapterDone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlfY2hhcHRlckRvbmUuanMiXSwibmFtZXMiOlsibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2xldmVsTWdyIiwicmVxdWlyZSIsIl9wSW5mbyIsIl9iYXNlVUkiLCJsIiwiY2MiLCJfZGVjb3JhdG9yIiwidSIsImNjY2xhc3MiLCJwIiwicHJvcGVydHkiLCJkIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImxpZ2h0IiwicGljcyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsImNhbGwiLCJ0d2VlbiIsImJ5IiwiYW5nbGUiLCJyZXBlYXRGb3JldmVyIiwic3RhcnQiLCJpbml0IiwibyIsImxlbmd0aCIsImlucyIsImdldGNoYXB0ZXJCdW5kZXIiLCJ0aGVuIiwiZ2V0UHV6emxlTHZsIiwiTWF0aCIsImNlaWwiLCJnZXRKaWdzYXdJY29uIiwic3ByaXRlRnJhbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJpIiwiaGlkZVRoaXMiLCJoaWRlIiwiX19kZWNvcmF0ZSIsIk5vZGUiLCJTcHJpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF2Qjs7QUFDQSxJQUFJQyxNQUFNLEdBQUdELE9BQU8sQ0FBQyxPQUFELENBQXBCOztBQUNBLElBQUlFLE9BQU8sR0FBR0YsT0FBTyxDQUFDLFFBQUQsQ0FBckI7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFW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Q0FBQyxDQUFDcEMsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQTlDTyxDQThDTFYsT0FBTyxXQTlDRixDQUFSOztBQStDQUwsT0FBTyxXQUFQLEdBQWtCYSxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG47XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBfbGV2ZWxNZ3IgPSByZXF1aXJlKFwibGV2ZWxNZ3JcIik7XG52YXIgX3BJbmZvID0gcmVxdWlyZShcInBJbmZvXCIpO1xudmFyIF9iYXNlVUkgPSByZXF1aXJlKFwiYmFzZVVJXCIpO1xudmFyIGwgPSBjYy5fZGVjb3JhdG9yO1xudmFyIHUgPSBsLmNjY2xhc3M7XG52YXIgcCA9IGwucHJvcGVydHk7XG52YXIgZCA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLmxpZ2h0ID0gbnVsbDtcbiAgICAgICAgZS5waWNzID0gW107XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5saWdodCkuYnkoMywge2FuZ2xlOiAtMzYwfSkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciB0ID0gdGhpcywgZSA9IFtdLCBvID0gMDsgbyA8IGFyZ3VtZW50cy5sZW5ndGg7IG8rKykgZVtvXSA9IGFyZ3VtZW50c1tvXTtcbiAgICAgICAgX2xldmVsTWdyLmRlZmF1bHQuaW5zXG4gICAgICAgICAgICAuZ2V0Y2hhcHRlckJ1bmRlcigpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBfcEluZm8uZGVmYXVsdC5pbnMuZ2V0UHV6emxlTHZsKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gXCJcIiArIChNYXRoLmNlaWwoZSAvIDU0KSAtIDEgKyAxMDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2xldmVsTWdyLmRlZmF1bHQuaW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRKaWdzYXdJY29uKGUsIG8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvICYmICh0LnBpY3NbZSAtIDFdLnNwcml0ZUZyYW1lID0gbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZ2V0Smlnc2F3SWNvbkVyclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGkgPD0gNjtcbiAgICAgICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBuKGkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImdldENoYXB0ZXJCdW5kbGVFcnJcIik7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmhpZGVUaGlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW3AoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJsaWdodFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW3AoW2NjLlNwcml0ZV0pXSwgZS5wcm90b3R5cGUsIFwicGljc1wiLCB2b2lkIDApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFt1XSwgZSk7XG59KShfYmFzZVVJLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZDtcbiJdfQ==