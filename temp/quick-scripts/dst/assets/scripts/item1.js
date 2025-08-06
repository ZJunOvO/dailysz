
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/item1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '271daYGFwxILLSIwdBLS+j9', 'item1');
// scripts/item1.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _numberUtils = require("NumberUtils");

var _res = require("res");

var _mailMgr = require("mailMgr");

var l = cc._decorator;
var u = l.ccclass;
var p = l.property;

var d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.icon = null;
    e.numLbl = null;
    e.awardedNode = null;
    e.key = "";
    e.countStr = "";
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t, e, o) {
    this.key = t;

    _res["default"].ins.lSF("item/" + t, this.icon);

    var n = _numberUtils["default"].FormatCurrency(e);

    this.countStr = n;
    this.numLbl.string = "x" + e;
    this.awardedNode.active = o == _mailMgr.mailState.award;
  };

  __decorate([p(cc.Sprite)], e.prototype, "icon", void 0);

  __decorate([p(cc.Label)], e.prototype, "numLbl", void 0);

  __decorate([p(cc.Node)], e.prototype, "awardedNode", void 0);

  return __decorate([u], e);
}(cc.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaXRlbTEuanMiXSwibmFtZXMiOlsibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX251bWJlclV0aWxzIiwicmVxdWlyZSIsIl9yZXMiLCJfbWFpbE1nciIsImwiLCJjYyIsIl9kZWNvcmF0b3IiLCJ1IiwiY2NjbGFzcyIsInAiLCJwcm9wZXJ0eSIsImQiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaWNvbiIsIm51bUxibCIsImF3YXJkZWROb2RlIiwia2V5IiwiY291bnRTdHIiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0IiwibyIsImlucyIsImxTRiIsIkZvcm1hdEN1cnJlbmN5Iiwic3RyaW5nIiwiYWN0aXZlIiwibWFpbFN0YXRlIiwiYXdhcmQiLCJfX2RlY29yYXRlIiwiU3ByaXRlIiwiTGFiZWwiLCJOb2RlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBLElBQUlDLFlBQVksR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBMUI7O0FBQ0EsSUFBSUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsS0FBRCxDQUFsQjs7QUFDQSxJQUFJRSxRQUFRLEdBQUdGLE9BQU8sQ0FBQyxTQUFELENBQXRCOztBQUNBLElBQUlHLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csSUFBRixHQUFTLElBQVQ7SUFDQUgsQ0FBQyxDQUFDSSxNQUFGLEdBQVcsSUFBWDtJQUNBSixDQUFDLENBQUNLLFdBQUYsR0FBZ0IsSUFBaEI7SUFDQUwsQ0FBQyxDQUFDTSxHQUFGLEdBQVEsRUFBUjtJQUNBTixDQUFDLENBQUNPLFFBQUYsR0FBYSxFQUFiO0lBQ0EsT0FBT1AsQ0FBUDtFQUNIOztFQUNEUSxTQUFTLENBQUNSLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNTLFNBQUYsQ0FBWUMsSUFBWixHQUFtQixVQUFVWCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JXLENBQWhCLEVBQW1CO0lBQ2xDLEtBQUtMLEdBQUwsR0FBV1AsQ0FBWDs7SUFDQVYsSUFBSSxXQUFKLENBQWF1QixHQUFiLENBQWlCQyxHQUFqQixDQUFxQixVQUFVZCxDQUEvQixFQUFrQyxLQUFLSSxJQUF2Qzs7SUFDQSxJQUFJckIsQ0FBQyxHQUFHSyxZQUFZLFdBQVosQ0FBcUIyQixjQUFyQixDQUFvQ2QsQ0FBcEMsQ0FBUjs7SUFDQSxLQUFLTyxRQUFMLEdBQWdCekIsQ0FBaEI7SUFDQSxLQUFLc0IsTUFBTCxDQUFZVyxNQUFaLEdBQXFCLE1BQU1mLENBQTNCO0lBQ0EsS0FBS0ssV0FBTCxDQUFpQlcsTUFBakIsR0FBMEJMLENBQUMsSUFBSXJCLFFBQVEsQ0FBQzJCLFNBQVQsQ0FBbUJDLEtBQWxEO0VBQ0gsQ0FQRDs7RUFRQUMsVUFBVSxDQUFDLENBQUN2QixDQUFDLENBQUNKLEVBQUUsQ0FBQzRCLE1BQUosQ0FBRixDQUFELEVBQWlCcEIsQ0FBQyxDQUFDUyxTQUFuQixFQUE4QixNQUE5QixFQUFzQyxLQUFLLENBQTNDLENBQVY7O0VBQ0FVLFVBQVUsQ0FBQyxDQUFDdkIsQ0FBQyxDQUFDSixFQUFFLENBQUM2QixLQUFKLENBQUYsQ0FBRCxFQUFnQnJCLENBQUMsQ0FBQ1MsU0FBbEIsRUFBNkIsUUFBN0IsRUFBdUMsS0FBSyxDQUE1QyxDQUFWOztFQUNBVSxVQUFVLENBQUMsQ0FBQ3ZCLENBQUMsQ0FBQ0osRUFBRSxDQUFDOEIsSUFBSixDQUFGLENBQUQsRUFBZXRCLENBQUMsQ0FBQ1MsU0FBakIsRUFBNEIsYUFBNUIsRUFBMkMsS0FBSyxDQUFoRCxDQUFWOztFQUNBLE9BQU9VLFVBQVUsQ0FBQyxDQUFDekIsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQXZCTyxDQXVCTFIsRUFBRSxDQUFDK0IsU0F2QkUsQ0FBUjs7QUF3QkF0QyxPQUFPLFdBQVAsR0FBa0JhLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIF9udW1iZXJVdGlscyA9IHJlcXVpcmUoXCJOdW1iZXJVdGlsc1wiKTtcbnZhciBfcmVzID0gcmVxdWlyZShcInJlc1wiKTtcbnZhciBfbWFpbE1nciA9IHJlcXVpcmUoXCJtYWlsTWdyXCIpO1xudmFyIGwgPSBjYy5fZGVjb3JhdG9yO1xudmFyIHUgPSBsLmNjY2xhc3M7XG52YXIgcCA9IGwucHJvcGVydHk7XG52YXIgZCA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLmljb24gPSBudWxsO1xuICAgICAgICBlLm51bUxibCA9IG51bGw7XG4gICAgICAgIGUuYXdhcmRlZE5vZGUgPSBudWxsO1xuICAgICAgICBlLmtleSA9IFwiXCI7XG4gICAgICAgIGUuY291bnRTdHIgPSBcIlwiO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAodCwgZSwgbykge1xuICAgICAgICB0aGlzLmtleSA9IHQ7XG4gICAgICAgIF9yZXMuZGVmYXVsdC5pbnMubFNGKFwiaXRlbS9cIiArIHQsIHRoaXMuaWNvbik7XG4gICAgICAgIHZhciBuID0gX251bWJlclV0aWxzLmRlZmF1bHQuRm9ybWF0Q3VycmVuY3koZSk7XG4gICAgICAgIHRoaXMuY291bnRTdHIgPSBuO1xuICAgICAgICB0aGlzLm51bUxibC5zdHJpbmcgPSBcInhcIiArIGU7XG4gICAgICAgIHRoaXMuYXdhcmRlZE5vZGUuYWN0aXZlID0gbyA9PSBfbWFpbE1nci5tYWlsU3RhdGUuYXdhcmQ7XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtwKGNjLlNwcml0ZSldLCBlLnByb3RvdHlwZSwgXCJpY29uXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbcChjYy5MYWJlbCldLCBlLnByb3RvdHlwZSwgXCJudW1MYmxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtwKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiYXdhcmRlZE5vZGVcIiwgdm9pZCAwKTtcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbdV0sIGUpO1xufSkoY2MuQ29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGQ7XG4iXX0=