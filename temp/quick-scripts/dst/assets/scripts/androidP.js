
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/androidP.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65e81r/NHpIf7QB9ks4KiDS', 'androidP');
// scripts/androidP.js

"use strict";

//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r;

var _pConst = require("pConst");

var s = function (t) {
  function e() {
    var e = t.call(this) || this;
    r = jsb.reflection.callStaticMethod;
    return e;
  }

  __extends(e, t);

  Object.defineProperty(e.prototype, "appId", {
    get: function get() {
      return "dev_nonogram";
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.string = function () {
    return _pConst.PFCode.Android;
  };

  e.prototype.vibrate = function () {
    r("org/cocos2dx/javascript/InstantAppActivity", "vibrate", "()V");
  };

  e.prototype.login = function () {
    return t.prototype.login.call(this);
  };

  e.prototype.setStorage = function (t, e) {
    var o = jsb.fileUtils.getWritablePath() + t;
    jsb.fileUtils.isDirectoryExist(o) || jsb.fileUtils.createDirectory(o);
    jsb.fileUtils.writeStringToFile(JSON.stringify(e), o + "/android_nonogram.txt");
  };

  e.prototype.getStorage = function (t) {
    var e = jsb.fileUtils.getWritablePath() + t;
    jsb.fileUtils.isDirectoryExist(e) || (jsb.fileUtils.createDirectory(e), jsb.fileUtils.writeStringToFile("", e + "/android_nonogram.txt"));
    var o = jsb.fileUtils.getStringFromFile(e + "/android_nonogram.txt");
    return null == o || "" == o ? null : JSON.parse(o);
  };

  e.prototype.setCloudData = function () {};

  e.prototype.doWatchAD = function () {
    var t = this;
    return new Promise(function (e, o) {
      t.resolve = e;
      t.reject = o;
      r("org/cocos2dx/javascript/InstantAppActivity", "playAd", "()V");
    });
  };

  return e;
}(require("nativeP")["default"]);

exports["default"] = s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYW5kcm9pZFAuanMiXSwibmFtZXMiOlsibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiciIsIl9wQ29uc3QiLCJyZXF1aXJlIiwicyIsInQiLCJlIiwiY2FsbCIsImpzYiIsInJlZmxlY3Rpb24iLCJjYWxsU3RhdGljTWV0aG9kIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiZ2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInN0cmluZyIsIlBGQ29kZSIsIkFuZHJvaWQiLCJ2aWJyYXRlIiwibG9naW4iLCJzZXRTdG9yYWdlIiwibyIsImZpbGVVdGlscyIsImdldFdyaXRhYmxlUGF0aCIsImlzRGlyZWN0b3J5RXhpc3QiLCJjcmVhdGVEaXJlY3RvcnkiLCJ3cml0ZVN0cmluZ1RvRmlsZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRTdG9yYWdlIiwiZ2V0U3RyaW5nRnJvbUZpbGUiLCJwYXJzZSIsInNldENsb3VkRGF0YSIsImRvV2F0Y2hBRCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7QUFDQSxJQUFJQyxDQUFKOztBQUNBLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUdELENBQUMsQ0FBQ0UsSUFBRixDQUFPLElBQVAsS0FBZ0IsSUFBeEI7SUFDQU4sQ0FBQyxHQUFHTyxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQW5CO0lBQ0Es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LEdBQWtCSyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/nlLXlrZDpgq7ku7ZwdWhhbHNraWpzZW1lbkBnbWFpbC5jb21cbi8v5rqQ56CB572R56uZIOW8gHZwbuWFqOWxgOaooeW8j+aJk+W8gCBodHRwOi8vd2ViM2luY3ViYXRvcnMuY29tL1xuLy/nlLXmiqVodHRwczovL3QubWUvZ2FtZWNvZGU5OTlcbi8v572R6aG15a6i5pyNIGh0dHA6Ly93ZWIzaW5jdWJhdG9ycy5jb20va2VmdS5odG1sXG52YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIHI7XG52YXIgX3BDb25zdCA9IHJlcXVpcmUoXCJwQ29uc3RcIik7XG52YXIgcyA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gdC5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIHIgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSwgXCJhcHBJZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiZGV2X25vbm9ncmFtXCI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgfSk7XG4gICAgZS5wcm90b3R5cGUuc3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3BDb25zdC5QRkNvZGUuQW5kcm9pZDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnZpYnJhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHIoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9JbnN0YW50QXBwQWN0aXZpdHlcIiwgXCJ2aWJyYXRlXCIsIFwiKClWXCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubG9naW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0LnByb3RvdHlwZS5sb2dpbi5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0U3RvcmFnZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0ganNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSArIHQ7XG4gICAgICAgIGpzYi5maWxlVXRpbHMuaXNEaXJlY3RvcnlFeGlzdChvKSB8fCBqc2IuZmlsZVV0aWxzLmNyZWF0ZURpcmVjdG9yeShvKTtcbiAgICAgICAganNiLmZpbGVVdGlscy53cml0ZVN0cmluZ1RvRmlsZShKU09OLnN0cmluZ2lmeShlKSwgbyArIFwiL2FuZHJvaWRfbm9ub2dyYW0udHh0XCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0U3RvcmFnZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0ganNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSArIHQ7XG4gICAgICAgIGpzYi5maWxlVXRpbHMuaXNEaXJlY3RvcnlFeGlzdChlKSB8fFxuICAgICAgICAgICAgKGpzYi5maWxlVXRpbHMuY3JlYXRlRGlyZWN0b3J5KGUpLCBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKFwiXCIsIGUgKyBcIi9hbmRyb2lkX25vbm9ncmFtLnR4dFwiKSk7XG4gICAgICAgIHZhciBvID0ganNiLmZpbGVVdGlscy5nZXRTdHJpbmdGcm9tRmlsZShlICsgXCIvYW5kcm9pZF9ub25vZ3JhbS50eHRcIik7XG4gICAgICAgIHJldHVybiBudWxsID09IG8gfHwgXCJcIiA9PSBvID8gbnVsbCA6IEpTT04ucGFyc2Uobyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDbG91ZERhdGEgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5kb1dhdGNoQUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChlLCBvKSB7XG4gICAgICAgICAgICB0LnJlc29sdmUgPSBlO1xuICAgICAgICAgICAgdC5yZWplY3QgPSBvO1xuICAgICAgICAgICAgcihcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0luc3RhbnRBcHBBY3Rpdml0eVwiLCBcInBsYXlBZFwiLCBcIigpVlwiKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gZTtcbn0pKHJlcXVpcmUoXCJuYXRpdmVQXCIpLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcztcbiJdfQ==