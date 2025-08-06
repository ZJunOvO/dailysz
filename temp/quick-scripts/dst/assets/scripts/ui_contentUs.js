
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui_contentUs.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '738e8CNRgJIdYoGyBMV/m6N', 'ui_contentUs');
// scripts/ui_contentUs.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _idx = require("idx");

var _request = require("request");

var _lang = require("lang");

var _tipMgr = require("tipMgr");

var _baseUI = require("baseUI");

var p = cc._decorator;
var d = p.ccclass;
var h = p.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ediBox = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {};

  e.prototype.init = function () {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
  };

  e.prototype.hideThis = function () {
    this.hide();
  };

  e.prototype.editEnd = function () {
    var t = this;
    _idx.platform.onKeyboardComplete && (this.inCorrect = !0, _idx.platform.onKeyboardComplete(function (e) {
      t.ediBox && (t.ediBox.string = e.value);
      t.inCorrect = !1;
    }));
  };

  e.prototype.editChange = function (t, e) {
    e.string = t;
  };

  e.prototype.feedMsg = function () {
    var t = this;
    this.inCorrect || (this.ediBox.string ? _request["default"].ins.userFeedBack(this.ediBox.string).then(function (e) {
      var o = e && e.msg || _lang.lang[10007];

      _tipMgr["default"].ins.showTip(o, !0);

      t.ediBox.string = "";
    })["catch"](function (t) {
      console.error(t);
    }) : _tipMgr["default"].ins.showTip(_lang.lang[10008]));
  };

  __decorate([h(cc.EditBox)], e.prototype, "ediBox", void 0);

  return __decorate([d], e);
}(_baseUI["default"]);

exports["default"] = f;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlfY29udGVudFVzLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9pZHgiLCJyZXF1aXJlIiwiX3JlcXVlc3QiLCJfbGFuZyIsIl90aXBNZ3IiLCJfYmFzZVVJIiwicCIsImNjIiwiX2RlY29yYXRvciIsImQiLCJjY2NsYXNzIiwiaCIsInByb3BlcnR5IiwiZiIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJlZGlCb3giLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJpbml0IiwibGVuZ3RoIiwiaGlkZVRoaXMiLCJoaWRlIiwiZWRpdEVuZCIsInBsYXRmb3JtIiwib25LZXlib2FyZENvbXBsZXRlIiwiaW5Db3JyZWN0Iiwic3RyaW5nIiwiZWRpdENoYW5nZSIsImZlZWRNc2ciLCJpbnMiLCJ1c2VyRmVlZEJhY2siLCJ0aGVuIiwibyIsIm1zZyIsImxhbmciLCJzaG93VGlwIiwiY29uc29sZSIsImVycm9yIiwiX19kZWNvcmF0ZSIsIkVkaXRCb3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7O0FBQ0EsSUFBSUMsSUFBSSxHQUFHQyxPQUFPLENBQUMsS0FBRCxDQUFsQjs7QUFDQSxJQUFJQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxTQUFELENBQXRCOztBQUNBLElBQUlFLEtBQUssR0FBR0YsT0FBTyxDQUFDLE1BQUQsQ0FBbkI7O0FBQ0EsSUFBSUcsT0FBTyxHQUFHSCxPQUFPLENBQUMsUUFBRCxDQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdKLE9BQU8sQ0FBQyxRQUFELENBQXJCOztBQUNBLElBQUlLLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csTUFBRixHQUFXLElBQVg7SUFDQSxPQUFPSCxDQUFQO0VBQ0g7O0VBQ0RJLFNBQVMsQ0FBQ0osQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ0ssU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVksQ0FBRSxDQUFuQzs7RUFDQU4sQ0FBQyxDQUFDSyxTQUFGLENBQVlFLElBQVosR0FBbUIsWUFBWTtJQUMzQixLQUFLLElBQUlSLENBQUMsR0FBRyxFQUFSLEVBQVlDLENBQUMsR0FBRyxDQUFyQixFQUF3QkEsQ0FBQyxHQUFHRSxTQUFTLENBQUNNLE1BQXRDLEVBQThDUixDQUFDLEVBQS9DO01BQW1ERCxDQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFPRSxTQUFTLENBQUNGLENBQUQsQ0FBaEI7SUFBbkQ7RUFDSCxDQUZEOztFQUdBQSxDQUFDLENBQUNLLFNBQUYsQ0FBWUksUUFBWixHQUF1QixZQUFZO0lBQy9CLEtBQUtDLElBQUw7RUFDSCxDQUZEOztFQUdBVixDQUFDLENBQUNLLFNBQUYsQ0FBWU0sT0FBWixHQUFzQixZQUFZO0lBQzlCLElBQUlaLENBQUMsR0FBRyxJQUFSO0lBQ0FkLElBQUksQ0FBQzJCLFFBQUwsQ0FBY0Msa0JBQWQsS0FDTSxLQUFLQyxTQUFMLEdBQWlCLENBQUMsQ0FBbkIsRUFDRDdCLElBQUksQ0FBQzJCLFFBQUwsQ0FBY0Msa0JBQWQsQ0FBaUMsVUFBVWIsQ0FBVixFQUFhO01BQzFDRCxDQUFDLENBQUNJLE1BQUYsS0FBYUosQ0FBQyxDQUFDSSxNQUFGLENBQVNZLE1BQVQsR0FBa0JmLENBQUMsQ0FBQ2hCLEtBQWpDO01BQ0FlLENBQUMsQ0FBQ2UsU0FBRixHQUFjLENBQUMsQ0FBZjtJQUNILENBSEQsQ0FGSjtFQU1ILENBUkQ7O0VBU0FkLENBQUMsQ0FBQ0ssU0FBRixDQUFZVyxVQUFaLEdBQXlCLFVBQVVqQixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDckNBLENBQUMsQ0FBQ2UsTUFBRixHQUFXaEIsQ0FBWDtFQUNILENBRkQ7O0VBR0FDLENBQUMsQ0FBQ0ssU0FBRixDQUFZWSxPQUFaLEdBQXNCLFlBQVk7SUFDOUIsSUFBSWxCLENBQUMsR0FBRyxJQUFSO0lBQ0EsS0FBS2UsU0FBTCxLQUNLLEtBQUtYLE1BQUwsQ0FBWVksTUFBWixHQUNLNUIsUUFBUSxXQUFSLENBQWlCK0IsR0FBakIsQ0FDS0MsWUFETCxDQUNrQixLQUFLaEIsTUFBTCxDQUFZWSxNQUQ5QixFQUVLSyxJQUZMLENBRVUsVUFBVXBCLENBQVYsRUFBYTtNQUNmLElBQUlxQixDQUFDLEdBQUlyQixDQUFDLElBQUlBLENBQUMsQ0FBQ3NCLEdBQVIsSUFBZ0JsQyxLQUFLLENBQUNtQyxJQUFOLENBQVcsS0FBWCxDQUF4Qjs7TUFDQWxDLE9BQU8sV0FBUCxDQUFnQjZCLEdBQWhCLENBQW9CTSxPQUFwQixDQUE0QkgsQ0FBNUIsRUFBK0IsQ0FBQyxDQUFoQzs7TUFDQXRCLENBQUMsQ0FBQ0ksTUFBRixDQUFTWSxNQUFULEdBQWtCLEVBQWxCO0lBQ0gsQ0FOTCxXQU9XLFVBQVVoQixDQUFWLEVBQWE7TUFDaEIwQixPQUFPLENBQUNDLEtBQVIsQ0FBYzNCLENBQWQ7SUFDSCxDQVRMLENBREwsR0FXS1YsT0FBTyxXQUFQLENBQWdCNkIsR0FBaEIsQ0FBb0JNLE9BQXBCLENBQTRCcEMsS0FBSyxDQUFDbUMsSUFBTixDQUFXLEtBQVgsQ0FBNUIsQ0FaVjtFQWFILENBZkQ7O0VBZ0JBSSxVQUFVLENBQUMsQ0FBQy9CLENBQUMsQ0FBQ0osRUFBRSxDQUFDb0MsT0FBSixDQUFGLENBQUQsRUFBa0I1QixDQUFDLENBQUNLLFNBQXBCLEVBQStCLFFBQS9CLEVBQXlDLEtBQUssQ0FBOUMsQ0FBVjs7RUFDQSxPQUFPc0IsVUFBVSxDQUFDLENBQUNqQyxDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBNUNPLENBNENMVixPQUFPLFdBNUNGLENBQVI7O0FBNkNBUCxPQUFPLFdBQVAsR0FBa0JlLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIF9pZHggPSByZXF1aXJlKFwiaWR4XCIpO1xudmFyIF9yZXF1ZXN0ID0gcmVxdWlyZShcInJlcXVlc3RcIik7XG52YXIgX2xhbmcgPSByZXF1aXJlKFwibGFuZ1wiKTtcbnZhciBfdGlwTWdyID0gcmVxdWlyZShcInRpcE1nclwiKTtcbnZhciBfYmFzZVVJID0gcmVxdWlyZShcImJhc2VVSVwiKTtcbnZhciBwID0gY2MuX2RlY29yYXRvcjtcbnZhciBkID0gcC5jY2NsYXNzO1xudmFyIGggPSBwLnByb3BlcnR5O1xudmFyIGYgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5lZGlCb3ggPSBudWxsO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIHQgPSBbXSwgZSA9IDA7IGUgPCBhcmd1bWVudHMubGVuZ3RoOyBlKyspIHRbZV0gPSBhcmd1bWVudHNbZV07XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oaWRlVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5lZGl0RW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIF9pZHgucGxhdGZvcm0ub25LZXlib2FyZENvbXBsZXRlICYmXG4gICAgICAgICAgICAoKHRoaXMuaW5Db3JyZWN0ID0gITApLFxuICAgICAgICAgICAgX2lkeC5wbGF0Zm9ybS5vbktleWJvYXJkQ29tcGxldGUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0LmVkaUJveCAmJiAodC5lZGlCb3guc3RyaW5nID0gZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdC5pbkNvcnJlY3QgPSAhMTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmVkaXRDaGFuZ2UgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBlLnN0cmluZyA9IHQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mZWVkTXNnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW5Db3JyZWN0IHx8XG4gICAgICAgICAgICAodGhpcy5lZGlCb3guc3RyaW5nXG4gICAgICAgICAgICAgICAgPyBfcmVxdWVzdC5kZWZhdWx0Lmluc1xuICAgICAgICAgICAgICAgICAgICAgIC51c2VyRmVlZEJhY2sodGhpcy5lZGlCb3guc3RyaW5nKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gKGUgJiYgZS5tc2cpIHx8IF9sYW5nLmxhbmdbMTAwMDddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdGlwTWdyLmRlZmF1bHQuaW5zLnNob3dUaXAobywgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0LmVkaUJveC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IodCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF90aXBNZ3IuZGVmYXVsdC5pbnMuc2hvd1RpcChfbGFuZy5sYW5nWzEwMDA4XSkpO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbaChjYy5FZGl0Qm94KV0sIGUucHJvdG90eXBlLCBcImVkaUJveFwiLCB2b2lkIDApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtkXSwgZSk7XG59KShfYmFzZVVJLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZjtcbiJdfQ==