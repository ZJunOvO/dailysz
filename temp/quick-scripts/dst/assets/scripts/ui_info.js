
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui_info.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68903bM3tFJxIGiJX3VlM6L', 'ui_info');
// scripts/ui_info.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _baseUI = require("baseUI");

var s = cc._decorator;
var c = s.ccclass;
var l = s.property;

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.title = null;
    e.content = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    var e = this;
    var o = t.type;
    this.title.string = 1 == o ? "用户协议" : "隐私政策";
    cc.assetManager.loadBundle("other", function (t, n) {
      t || n.load(o + "", cc.TextAsset, function (t, o) {
        var n = e.content;
        !t && n && n.isValid && (n.string = o.text);
      });
    });
  };

  e.prototype.hideThis = function () {
    t.prototype.hide.call(this);
  };

  __decorate([l(cc.Label)], e.prototype, "title", void 0);

  __decorate([l(cc.Label)], e.prototype, "content", void 0);

  return __decorate([c], e);
}(_baseUI["default"]);

exports["default"] = u;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlfaW5mby5qcyJdLCJuYW1lcyI6WyJuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfYmFzZVVJIiwicmVxdWlyZSIsInMiLCJjYyIsIl9kZWNvcmF0b3IiLCJjIiwiY2NjbGFzcyIsImwiLCJwcm9wZXJ0eSIsInUiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwidGl0bGUiLCJjb250ZW50IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdCIsIm8iLCJ0eXBlIiwic3RyaW5nIiwiYXNzZXRNYW5hZ2VyIiwibG9hZEJ1bmRsZSIsImxvYWQiLCJUZXh0QXNzZXQiLCJpc1ZhbGlkIiwidGV4dCIsImhpZGVUaGlzIiwiaGlkZSIsImNhbGwiLCJfX2RlY29yYXRlIiwiTGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLEtBQUYsR0FBVSxJQUFWO0lBQ0FILENBQUMsQ0FBQ0ksT0FBRixHQUFZLElBQVo7SUFDQSxPQUFPSixDQUFQO0VBQ0g7O0VBQ0RLLFNBQVMsQ0FBQ0wsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ00sU0FBRixDQUFZQyxJQUFaLEdBQW1CLFVBQVVSLENBQVYsRUFBYTtJQUM1QixJQUFJQyxDQUFDLEdBQUcsSUFBUjtJQUNBLElBQUlRLENBQUMsR0FBR1QsQ0FBQyxDQUFDVSxJQUFWO0lBQ0EsS0FBS04sS0FBTCxDQUFXTyxNQUFYLEdBQW9CLEtBQUtGLENBQUwsR0FBUyxNQUFULEdBQWtCLE1BQXRDO0lBQ0FoQixFQUFFLENBQUNtQixZQUFILENBQWdCQyxVQUFoQixDQUEyQixPQUEzQixFQUFvQyxVQUFVYixDQUFWLEVBQWFmLENBQWIsRUFBZ0I7TUFDaERlLENBQUMsSUFDR2YsQ0FBQyxDQUFDNkIsSUFBRixDQUFPTCxDQUFDLEdBQUcsRUFBWCxFQUFlaEIsRUFBRSxDQUFDc0IsU0FBbEIsRUFBNkIsVUFBVWYsQ0FBVixFQUFhUyxDQUFiLEVBQWdCO1FBQ3pDLElBQUl4QixDQUFDLEdBQUdnQixDQUFDLENBQUNJLE9BQVY7UUFDQSxDQUFDTCxDQUFELElBQU1mLENBQU4sSUFBV0EsQ0FBQyxDQUFDK0IsT0FBYixLQUF5Qi9CLENBQUMsQ0FBQzBCLE1BQUYsR0FBV0YsQ0FBQyxDQUFDUSxJQUF0QztNQUNILENBSEQsQ0FESjtJQUtILENBTkQ7RUFPSCxDQVhEOztFQVlBaEIsQ0FBQyxDQUFDTSxTQUFGLENBQVlXLFFBQVosR0FBdUIsWUFBWTtJQUMvQmxCLENBQUMsQ0FBQ08sU0FBRixDQUFZWSxJQUFaLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QjtFQUNILENBRkQ7O0VBR0FDLFVBQVUsQ0FBQyxDQUFDeEIsQ0FBQyxDQUFDSixFQUFFLENBQUM2QixLQUFKLENBQUYsQ0FBRCxFQUFnQnJCLENBQUMsQ0FBQ00sU0FBbEIsRUFBNkIsT0FBN0IsRUFBc0MsS0FBSyxDQUEzQyxDQUFWOztFQUNBYyxVQUFVLENBQUMsQ0FBQ3hCLENBQUMsQ0FBQ0osRUFBRSxDQUFDNkIsS0FBSixDQUFGLENBQUQsRUFBZ0JyQixDQUFDLENBQUNNLFNBQWxCLEVBQTZCLFNBQTdCLEVBQXdDLEtBQUssQ0FBN0MsQ0FBVjs7RUFDQSxPQUFPYyxVQUFVLENBQUMsQ0FBQzFCLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0ExQk8sQ0EwQkxYLE9BQU8sV0ExQkYsQ0FBUjs7QUEyQkFGLE9BQU8sV0FBUCxHQUFrQlcsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBuO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6ICEwfSk7XG52YXIgX2Jhc2VVSSA9IHJlcXVpcmUoXCJiYXNlVUlcIik7XG52YXIgcyA9IGNjLl9kZWNvcmF0b3I7XG52YXIgYyA9IHMuY2NjbGFzcztcbnZhciBsID0gcy5wcm9wZXJ0eTtcbnZhciB1ID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUudGl0bGUgPSBudWxsO1xuICAgICAgICBlLmNvbnRlbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHZhciBvID0gdC50eXBlO1xuICAgICAgICB0aGlzLnRpdGxlLnN0cmluZyA9IDEgPT0gbyA/IFwi55So5oi35Y2P6K6uXCIgOiBcIumakOengeaUv+etllwiO1xuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShcIm90aGVyXCIsIGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgICAgICB0IHx8XG4gICAgICAgICAgICAgICAgbi5sb2FkKG8gKyBcIlwiLCBjYy5UZXh0QXNzZXQsIGZ1bmN0aW9uICh0LCBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gZS5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAhdCAmJiBuICYmIG4uaXNWYWxpZCAmJiAobi5zdHJpbmcgPSBvLnRleHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmhpZGVUaGlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0LnByb3RvdHlwZS5oaWRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtsKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcInRpdGxlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbbChjYy5MYWJlbCldLCBlLnByb3RvdHlwZSwgXCJjb250ZW50XCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2NdLCBlKTtcbn0pKF9iYXNlVUkuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSB1O1xuIl19