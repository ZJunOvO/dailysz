
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/env.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6367RuL4ROs7ur5md6t/Gj', 'env');
// scripts/env.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.env = exports.EM = void 0;
exports.EM = {
  PROD: "PROD",
  TEST: "TEST"
};
exports.env = {
  version: "1.0.0",
  mode: exports.EM.PROD,
  network: {
    server: "",
    retryT: 2,
    defaultRetryCnt: 3,
    resourceURL: ""
  },
  game: "sudoku",
  name: "每天数独",
  logo: 0,
  noAds: !1
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZW52LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZW52IiwiRU0iLCJQUk9EIiwiVEVTVCIsInZlcnNpb24iLCJtb2RlIiwibmV0d29yayIsInNlcnZlciIsInJldHJ5VCIsImRlZmF1bHRSZXRyeUNudCIsInJlc291cmNlVVJMIiwiZ2FtZSIsIm5hbWUiLCJsb2dvIiwibm9BZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFBQ0MsS0FBSyxFQUFFLENBQUM7QUFBVCxDQUE3QztBQUNBRCxPQUFPLENBQUNFLEdBQVIsR0FBY0YsT0FBTyxDQUFDRyxFQUFSLEdBQWEsS0FBSyxDQUFoQztBQUNBSCxPQUFPLENBQUNHLEVBQVIsR0FBYTtFQUFDQyxJQUFJLEVBQUUsTUFBUDtFQUFlQyxJQUFJLEVBQUU7QUFBckIsQ0FBYjtBQUNBTCxPQUFPLENBQUNFLEdBQVIsR0FBYztFQUNWSSxPQUFPLEVBQUUsT0FEQztFQUVWQyxJQUFJLEVBQUVQLE9BQU8sQ0FBQ0csRUFBUixDQUFXQyxJQUZQO0VBR1ZJLE9BQU8sRUFBRTtJQUFDQyxNQUFNLEVBQUUsRUFBVDtJQUFhQyxNQUFNLEVBQUUsQ0FBckI7SUFBd0JDLGVBQWUsRUFBRSxDQUF6QztJQUE0Q0MsV0FBVyxFQUFFO0VBQXpELENBSEM7RUFJVkMsSUFBSSxFQUFFLFFBSkk7RUFLVkMsSUFBSSxFQUFFLE1BTEk7RUFNVkMsSUFBSSxFQUFFLENBTkk7RUFPVkMsS0FBSyxFQUFFLENBQUM7QUFQRSxDQUFkIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbmV4cG9ydHMuZW52ID0gZXhwb3J0cy5FTSA9IHZvaWQgMDtcbmV4cG9ydHMuRU0gPSB7UFJPRDogXCJQUk9EXCIsIFRFU1Q6IFwiVEVTVFwifTtcbmV4cG9ydHMuZW52ID0ge1xuICAgIHZlcnNpb246IFwiMS4wLjBcIixcbiAgICBtb2RlOiBleHBvcnRzLkVNLlBST0QsXG4gICAgbmV0d29yazoge3NlcnZlcjogXCJcIiwgcmV0cnlUOiAyLCBkZWZhdWx0UmV0cnlDbnQ6IDMsIHJlc291cmNlVVJMOiBcIlwifSxcbiAgICBnYW1lOiBcInN1ZG9rdVwiLFxuICAgIG5hbWU6IFwi5q+P5aSp5pWw54usXCIsXG4gICAgbG9nbzogMCxcbiAgICBub0FkczogITFcbn07XG4iXX0=