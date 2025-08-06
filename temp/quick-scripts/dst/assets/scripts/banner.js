
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/banner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b491bWadyVEz4fDbYZRH4YG', 'banner');
// scripts/banner.js

"use strict";

//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _com = require("com");

var _lang = require("lang");

var _pInfo = require("pInfo");

var l = cc._decorator;
var u = l.ccclass;
var p = l.property;

var d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ani = null;
    e.par = null;
    e.bannerLabel = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = _pInfo["default"].ins.getRecordData().heWins;

    var e = t >= 50 ? 40002 : 40001;
    40001 === e && (t = _com["default"].ins.rad(80, 99));
    this.bannerLabel.string = _lang.lang[e].format(t);
  };

  e.prototype.play = function () {
    this.ani.play();
    this.par.resetSystem();
  };

  __decorate([p(cc.Animation)], e.prototype, "ani", void 0);

  __decorate([p(cc.ParticleSystem)], e.prototype, "par", void 0);

  __decorate([p(cc.Label)], e.prototype, "bannerLabel", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFubmVyLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9jb20iLCJyZXF1aXJlIiwiX2xhbmciLCJfcEluZm8iLCJsIiwiY2MiLCJfZGVjb3JhdG9yIiwidSIsImNjY2xhc3MiLCJwIiwicHJvcGVydHkiLCJkIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImFuaSIsInBhciIsImJhbm5lckxhYmVsIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiaW5zIiwiZ2V0UmVjb3JkRGF0YSIsImhlV2lucyIsInJhZCIsInN0cmluZyIsImxhbmciLCJmb3JtYXQiLCJwbGF5IiwicmVzZXRTeXN0ZW0iLCJfX2RlY29yYXRlIiwiQW5pbWF0aW9uIiwiUGFydGljbGVTeXN0ZW0iLCJMYWJlbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBLElBQUlDLElBQUksR0FBR0MsT0FBTyxDQUFDLEtBQUQsQ0FBbEI7O0FBQ0EsSUFBSUMsS0FBSyxHQUFHRCxPQUFPLENBQUMsTUFBRCxDQUFuQjs7QUFDQSxJQUFJRSxNQUFNLEdBQUdGLE9BQU8sQ0FBQyxPQUFELENBQXBCOztBQUNBLElBQUlHLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csR0FBRixHQUFRLElBQVI7SUFDQUgsQ0FBQyxDQUFDSSxHQUFGLEdBQVEsSUFBUjtJQUNBSixDQUFDLENBQUNLLFdBQUYsR0FBZ0IsSUFBaEI7SUFDQSxPQUFPTCxDQUFQO0VBQ0g7O0VBQ0RNLFNBQVMsQ0FBQ04sQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ08sU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVk7SUFDN0IsSUFBSVQsQ0FBQyxHQUFHVCxNQUFNLFdBQU4sQ0FBZW1CLEdBQWYsQ0FBbUJDLGFBQW5CLEdBQW1DQyxNQUEzQzs7SUFDQSxJQUFJWCxDQUFDLEdBQUdELENBQUMsSUFBSSxFQUFMLEdBQVUsS0FBVixHQUFrQixLQUExQjtJQUNBLFVBQVVDLENBQVYsS0FBZ0JELENBQUMsR0FBR1osSUFBSSxXQUFKLENBQWFzQixHQUFiLENBQWlCRyxHQUFqQixDQUFxQixFQUFyQixFQUF5QixFQUF6QixDQUFwQjtJQUNBLEtBQUtQLFdBQUwsQ0FBaUJRLE1BQWpCLEdBQTBCeEIsS0FBSyxDQUFDeUIsSUFBTixDQUFXZCxDQUFYLEVBQWNlLE1BQWQsQ0FBcUJoQixDQUFyQixDQUExQjtFQUNILENBTEQ7O0VBTUFDLENBQUMsQ0FBQ08sU0FBRixDQUFZUyxJQUFaLEdBQW1CLFlBQVk7SUFDM0IsS0FBS2IsR0FBTCxDQUFTYSxJQUFUO0lBQ0EsS0FBS1osR0FBTCxDQUFTYSxXQUFUO0VBQ0gsQ0FIRDs7RUFJQUMsVUFBVSxDQUFDLENBQUN0QixDQUFDLENBQUNKLEVBQUUsQ0FBQzJCLFNBQUosQ0FBRixDQUFELEVBQW9CbkIsQ0FBQyxDQUFDTyxTQUF0QixFQUFpQyxLQUFqQyxFQUF3QyxLQUFLLENBQTdDLENBQVY7O0VBQ0FXLFVBQVUsQ0FBQyxDQUFDdEIsQ0FBQyxDQUFDSixFQUFFLENBQUM0QixjQUFKLENBQUYsQ0FBRCxFQUF5QnBCLENBQUMsQ0FBQ08sU0FBM0IsRUFBc0MsS0FBdEMsRUFBNkMsS0FBSyxDQUFsRCxDQUFWOztFQUNBVyxVQUFVLENBQUMsQ0FBQ3RCLENBQUMsQ0FBQ0osRUFBRSxDQUFDNkIsS0FBSixDQUFGLENBQUQsRUFBZ0JyQixDQUFDLENBQUNPLFNBQWxCLEVBQTZCLGFBQTdCLEVBQTRDLEtBQUssQ0FBakQsQ0FBVjs7RUFDQSxPQUFPVyxVQUFVLENBQUMsQ0FBQ3hCLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0F2Qk8sQ0F1QkxSLEVBQUUsQ0FBQzhCLFNBdkJFLENBQVI7O0FBd0JBckMsT0FBTyxXQUFQLEdBQWtCYSxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/nlLXlrZDpgq7ku7ZwdWhhbHNraWpzZW1lbkBnbWFpbC5jb21cbi8v5rqQ56CB572R56uZIOW8gHZwbuWFqOWxgOaooeW8j+aJk+W8gCBodHRwOi8vd2ViM2luY3ViYXRvcnMuY29tL1xuLy/nlLXmiqVodHRwczovL3QubWUvZ2FtZWNvZGU5OTlcbi8v572R6aG15a6i5pyNIGh0dHA6Ly93ZWIzaW5jdWJhdG9ycy5jb20va2VmdS5odG1sXG52YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIF9jb20gPSByZXF1aXJlKFwiY29tXCIpO1xudmFyIF9sYW5nID0gcmVxdWlyZShcImxhbmdcIik7XG52YXIgX3BJbmZvID0gcmVxdWlyZShcInBJbmZvXCIpO1xudmFyIGwgPSBjYy5fZGVjb3JhdG9yO1xudmFyIHUgPSBsLmNjY2xhc3M7XG52YXIgcCA9IGwucHJvcGVydHk7XG52YXIgZCA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLmFuaSA9IG51bGw7XG4gICAgICAgIGUucGFyID0gbnVsbDtcbiAgICAgICAgZS5iYW5uZXJMYWJlbCA9IG51bGw7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IF9wSW5mby5kZWZhdWx0Lmlucy5nZXRSZWNvcmREYXRhKCkuaGVXaW5zO1xuICAgICAgICB2YXIgZSA9IHQgPj0gNTAgPyA0MDAwMiA6IDQwMDAxO1xuICAgICAgICA0MDAwMSA9PT0gZSAmJiAodCA9IF9jb20uZGVmYXVsdC5pbnMucmFkKDgwLCA5OSkpO1xuICAgICAgICB0aGlzLmJhbm5lckxhYmVsLnN0cmluZyA9IF9sYW5nLmxhbmdbZV0uZm9ybWF0KHQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hbmkucGxheSgpO1xuICAgICAgICB0aGlzLnBhci5yZXNldFN5c3RlbSgpO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbcChjYy5BbmltYXRpb24pXSwgZS5wcm90b3R5cGUsIFwiYW5pXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbcChjYy5QYXJ0aWNsZVN5c3RlbSldLCBlLnByb3RvdHlwZSwgXCJwYXJcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtwKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcImJhbm5lckxhYmVsXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3VdLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkO1xuIl19