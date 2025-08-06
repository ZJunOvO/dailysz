
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/shopItem1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f95238W2llPIrEkQREhyIIb', 'shopItem1');
// scripts/shopItem1.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _cfgMgr = require("cfgMgr");

var _shopItem = require("shopItem");

var c = cc._decorator;
var l = c.ccclass;
var u = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.shopItems = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {};

  e.prototype.initPower = function () {
    var t;
    var e;
    var o = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.buy_stamina) || void 0 === e ? void 0 : e.stamina;

    if (o) {
      var n = 0;

      for (var i in o) {
        var r = o[i];

        if (r) {
          var s = this.shopItems[n];
          s && s.initItem(r, !0);
        }

        n++;
      }
    }
  };

  e.prototype.initGold = function () {
    var t;
    var e;
    var o = null === (e = null === (t = _cfgMgr["default"].serverCfg) || void 0 === t ? void 0 : t.buy_gold_coins) || void 0 === e ? void 0 : e.gold_coins;

    if (o) {
      var n = 0;

      for (var i in o) {
        var r = o[i];

        if (r) {
          var s = this.shopItems[n];
          s && s.initItem(r, !1);
        }

        n++;
      }
    }
  };

  __decorate([u([_shopItem["default"]])], e.prototype, "shopItems", void 0);

  return __decorate([l], e);
}(cc.Component);

exports["default"] = p;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2hvcEl0ZW0xLmpzIl0sIm5hbWVzIjpbIm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9jZmdNZ3IiLCJyZXF1aXJlIiwiX3Nob3BJdGVtIiwiYyIsImNjIiwiX2RlY29yYXRvciIsImwiLCJjY2NsYXNzIiwidSIsInByb3BlcnR5IiwicCIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzaG9wSXRlbXMiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJpbml0UG93ZXIiLCJvIiwic2VydmVyQ2ZnIiwiYnV5X3N0YW1pbmEiLCJzdGFtaW5hIiwiaSIsInIiLCJzIiwiaW5pdEl0ZW0iLCJpbml0R29sZCIsImJ1eV9nb2xkX2NvaW5zIiwiZ29sZF9jb2lucyIsIl9fZGVjb3JhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxVQUFELENBQXZCOztBQUNBLElBQUlFLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csU0FBRixHQUFjLEVBQWQ7SUFDQSxPQUFPSCxDQUFQO0VBQ0g7O0VBQ0RJLFNBQVMsQ0FBQ0osQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ0ssU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVksQ0FBRSxDQUFuQzs7RUFDQU4sQ0FBQyxDQUFDSyxTQUFGLENBQVlFLFNBQVosR0FBd0IsWUFBWTtJQUNoQyxJQUFJUixDQUFKO0lBQ0EsSUFBSUMsQ0FBSjtJQUNBLElBQUlRLENBQUMsR0FDRCxVQUFVUixDQUFDLEdBQUcsVUFBVUQsQ0FBQyxHQUFHWCxPQUFPLFdBQVAsQ0FBZ0JxQixTQUE5QixLQUE0QyxLQUFLLENBQUwsS0FBV1YsQ0FBdkQsR0FBMkQsS0FBSyxDQUFoRSxHQUFvRUEsQ0FBQyxDQUFDVyxXQUFwRixLQUNBLEtBQUssQ0FBTCxLQUFXVixDQURYLEdBRU0sS0FBSyxDQUZYLEdBR01BLENBQUMsQ0FBQ1csT0FKWjs7SUFLQSxJQUFJSCxDQUFKLEVBQU87TUFDSCxJQUFJekIsQ0FBQyxHQUFHLENBQVI7O01BQ0EsS0FBSyxJQUFJNkIsQ0FBVCxJQUFjSixDQUFkLEVBQWlCO1FBQ2IsSUFBSUssQ0FBQyxHQUFHTCxDQUFDLENBQUNJLENBQUQsQ0FBVDs7UUFDQSxJQUFJQyxDQUFKLEVBQU87VUFDSCxJQUFJQyxDQUFDLEdBQUcsS0FBS1gsU0FBTCxDQUFlcEIsQ0FBZixDQUFSO1VBQ0ErQixDQUFDLElBQUlBLENBQUMsQ0FBQ0MsUUFBRixDQUFXRixDQUFYLEVBQWMsQ0FBQyxDQUFmLENBQUw7UUFDSDs7UUFDRDlCLENBQUM7TUFDSjtJQUNKO0VBQ0osQ0FuQkQ7O0VBb0JBaUIsQ0FBQyxDQUFDSyxTQUFGLENBQVlXLFFBQVosR0FBdUIsWUFBWTtJQUMvQixJQUFJakIsQ0FBSjtJQUNBLElBQUlDLENBQUo7SUFDQSxJQUFJUSxDQUFDLEdBQ0QsVUFBVVIsQ0FBQyxHQUFHLFVBQVVELENBQUMsR0FBR1gsT0FBTyxXQUFQLENBQWdCcUIsU0FBOUIsS0FBNEMsS0FBSyxDQUFMLEtBQVdWLENBQXZELEdBQTJELEtBQUssQ0FBaEUsR0FBb0VBLENBQUMsQ0FBQ2tCLGNBQXBGLEtBQ0EsS0FBSyxDQUFMLEtBQVdqQixDQURYLEdBRU0sS0FBSyxDQUZYLEdBR01BLENBQUMsQ0FBQ2tCLFVBSlo7O0lBS0EsSUFBSVYsQ0FBSixFQUFPO01BQ0gsSUFBSXpCLENBQUMsR0FBRyxDQUFSOztNQUNBLEtBQUssSUFBSTZCLENBQVQsSUFBY0osQ0FBZCxFQUFpQjtRQUNiLElBQUlLLENBQUMsR0FBR0wsQ0FBQyxDQUFDSSxDQUFELENBQVQ7O1FBQ0EsSUFBSUMsQ0FBSixFQUFPO1VBQ0gsSUFBSUMsQ0FBQyxHQUFHLEtBQUtYLFNBQUwsQ0FBZXBCLENBQWYsQ0FBUjtVQUNBK0IsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLFFBQUYsQ0FBV0YsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUFMO1FBQ0g7O1FBQ0Q5QixDQUFDO01BQ0o7SUFDSjtFQUNKLENBbkJEOztFQW9CQW9DLFVBQVUsQ0FBQyxDQUFDdkIsQ0FBQyxDQUFDLENBQUNOLFNBQVMsV0FBVixDQUFELENBQUYsQ0FBRCxFQUEyQlUsQ0FBQyxDQUFDSyxTQUE3QixFQUF3QyxXQUF4QyxFQUFxRCxLQUFLLENBQTFELENBQVY7O0VBQ0EsT0FBT2MsVUFBVSxDQUFDLENBQUN6QixDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBbERPLENBa0RMUixFQUFFLENBQUM0QixTQWxERSxDQUFSOztBQW1EQWxDLE9BQU8sV0FBUCxHQUFrQlksQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBuO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6ICEwfSk7XG52YXIgX2NmZ01nciA9IHJlcXVpcmUoXCJjZmdNZ3JcIik7XG52YXIgX3Nob3BJdGVtID0gcmVxdWlyZShcInNob3BJdGVtXCIpO1xudmFyIGMgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGwgPSBjLmNjY2xhc3M7XG52YXIgdSA9IGMucHJvcGVydHk7XG52YXIgcCA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLnNob3BJdGVtcyA9IFtdO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLmluaXRQb3dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHZhciBlO1xuICAgICAgICB2YXIgbyA9XG4gICAgICAgICAgICBudWxsID09PSAoZSA9IG51bGwgPT09ICh0ID0gX2NmZ01nci5kZWZhdWx0LnNlcnZlckNmZykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5idXlfc3RhbWluYSkgfHxcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gZVxuICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgOiBlLnN0YW1pbmE7XG4gICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG8pIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IG9baV07XG4gICAgICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB0aGlzLnNob3BJdGVtc1tuXTtcbiAgICAgICAgICAgICAgICAgICAgcyAmJiBzLmluaXRJdGVtKHIsICEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0R29sZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHZhciBlO1xuICAgICAgICB2YXIgbyA9XG4gICAgICAgICAgICBudWxsID09PSAoZSA9IG51bGwgPT09ICh0ID0gX2NmZ01nci5kZWZhdWx0LnNlcnZlckNmZykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5idXlfZ29sZF9jb2lucykgfHxcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gZVxuICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgOiBlLmdvbGRfY29pbnM7XG4gICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG8pIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IG9baV07XG4gICAgICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB0aGlzLnNob3BJdGVtc1tuXTtcbiAgICAgICAgICAgICAgICAgICAgcyAmJiBzLmluaXRJdGVtKHIsICExKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFt1KFtfc2hvcEl0ZW0uZGVmYXVsdF0pXSwgZS5wcm90b3R5cGUsIFwic2hvcEl0ZW1zXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2xdLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBwO1xuIl19