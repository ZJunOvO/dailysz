
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/chaptBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9caaaxFVHdG34DDZ87Jv+Sy', 'chaptBtn');
// scripts/chaptBtn.js

"use strict";

//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.sprNode = null;
    e.lbls = [];
    e.redNumLb = null;
    e.flag = !0;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.u();
  };

  e.prototype.getState = function () {
    return this.flag;
  };

  e.prototype.setLb = function (t) {
    this.lbls.forEach(function (e) {
      e.string = t;
    });
  };

  e.prototype.setState = function (t) {
    this.flag = t;
    this.u();
  };

  e.prototype.u = function () {
    null != this.sprNode && (this.sprNode.active = this.flag);
  };

  e.prototype.setRed = function (t) {
    this.redNumLb && (t ? (this.redNumLb.string = t + "", this.redNumLb.node.parent.active = !0) : this.redNumLb.node.parent.active = !1);
  };

  __decorate([c(cc.Node)], e.prototype, "sprNode", void 0);

  __decorate([c([cc.Label])], e.prototype, "lbls", void 0);

  __decorate([c(cc.Label)], e.prototype, "redNumLb", void 0);

  return __decorate([s], e);
}(cc.Component);

exports["default"] = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2hhcHRCdG4uanMiXSwibmFtZXMiOlsibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiYSIsImNjIiwiX2RlY29yYXRvciIsInMiLCJjY2NsYXNzIiwiYyIsInByb3BlcnR5IiwibCIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzcHJOb2RlIiwibGJscyIsInJlZE51bUxiIiwiZmxhZyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsInN0YXJ0IiwidSIsImdldFN0YXRlIiwic2V0TGIiLCJmb3JFYWNoIiwic3RyaW5nIiwic2V0U3RhdGUiLCJhY3RpdmUiLCJzZXRSZWQiLCJub2RlIiwicGFyZW50IiwiX19kZWNvcmF0ZSIsIk5vZGUiLCJMYWJlbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxPQUFGLEdBQVksSUFBWjtJQUNBSCxDQUFDLENBQUNJLElBQUYsR0FBUyxFQUFUO0lBQ0FKLENBQUMsQ0FBQ0ssUUFBRixHQUFhLElBQWI7SUFDQUwsQ0FBQyxDQUFDTSxJQUFGLEdBQVMsQ0FBQyxDQUFWO0lBQ0EsT0FBT04sQ0FBUDtFQUNIOztFQUNETyxTQUFTLENBQUNQLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNRLFNBQUYsQ0FBWUMsS0FBWixHQUFvQixZQUFZO0lBQzVCLEtBQUtDLENBQUw7RUFDSCxDQUZEOztFQUdBVixDQUFDLENBQUNRLFNBQUYsQ0FBWUcsUUFBWixHQUF1QixZQUFZO0lBQy9CLE9BQU8sS0FBS0wsSUFBWjtFQUNILENBRkQ7O0VBR0FOLENBQUMsQ0FBQ1EsU0FBRixDQUFZSSxLQUFaLEdBQW9CLFVBQVViLENBQVYsRUFBYTtJQUM3QixLQUFLSyxJQUFMLENBQVVTLE9BQVYsQ0FBa0IsVUFBVWIsQ0FBVixFQUFhO01BQzNCQSxDQUFDLENBQUNjLE1BQUYsR0FBV2YsQ0FBWDtJQUNILENBRkQ7RUFHSCxDQUpEOztFQUtBQyxDQUFDLENBQUNRLFNBQUYsQ0FBWU8sUUFBWixHQUF1QixVQUFVaEIsQ0FBVixFQUFhO0lBQ2hDLEtBQUtPLElBQUwsR0FBWVAsQ0FBWjtJQUNBLEtBQUtXLENBQUw7RUFDSCxDQUhEOztFQUlBVixDQUFDLENBQUNRLFNBQUYsQ0FBWUUsQ0FBWixHQUFnQixZQUFZO0lBQ3hCLFFBQVEsS0FBS1AsT0FBYixLQUF5QixLQUFLQSxPQUFMLENBQWFhLE1BQWIsR0FBc0IsS0FBS1YsSUFBcEQ7RUFDSCxDQUZEOztFQUdBTixDQUFDLENBQUNRLFNBQUYsQ0FBWVMsTUFBWixHQUFxQixVQUFVbEIsQ0FBVixFQUFhO0lBQzlCLEtBQUtNLFFBQUwsS0FDS04sQ0FBQyxJQUNNLEtBQUtNLFFBQUwsQ0FBY1MsTUFBZCxHQUF1QmYsQ0FBQyxHQUFHLEVBQTVCLEVBQWtDLEtBQUtNLFFBQUwsQ0FBY2EsSUFBZCxDQUFtQkMsTUFBbkIsQ0FBMEJILE1BQTFCLEdBQW1DLENBQUMsQ0FEM0UsSUFFSyxLQUFLWCxRQUFMLENBQWNhLElBQWQsQ0FBbUJDLE1BQW5CLENBQTBCSCxNQUExQixHQUFtQyxDQUFDLENBSC9DO0VBSUgsQ0FMRDs7RUFNQUksVUFBVSxDQUFDLENBQUN4QixDQUFDLENBQUNKLEVBQUUsQ0FBQzZCLElBQUosQ0FBRixDQUFELEVBQWVyQixDQUFDLENBQUNRLFNBQWpCLEVBQTRCLFNBQTVCLEVBQXVDLEtBQUssQ0FBNUMsQ0FBVjs7RUFDQVksVUFBVSxDQUFDLENBQUN4QixDQUFDLENBQUMsQ0FBQ0osRUFBRSxDQUFDOEIsS0FBSixDQUFELENBQUYsQ0FBRCxFQUFrQnRCLENBQUMsQ0FBQ1EsU0FBcEIsRUFBK0IsTUFBL0IsRUFBdUMsS0FBSyxDQUE1QyxDQUFWOztFQUNBWSxVQUFVLENBQUMsQ0FBQ3hCLENBQUMsQ0FBQ0osRUFBRSxDQUFDOEIsS0FBSixDQUFGLENBQUQsRUFBZ0J0QixDQUFDLENBQUNRLFNBQWxCLEVBQTZCLFVBQTdCLEVBQXlDLEtBQUssQ0FBOUMsQ0FBVjs7RUFDQSxPQUFPWSxVQUFVLENBQUMsQ0FBQzFCLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0F0Q08sQ0FzQ0xSLEVBQUUsQ0FBQytCLFNBdENFLENBQVI7O0FBdUNBbEMsT0FBTyxXQUFQLEdBQWtCUyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/nlLXlrZDpgq7ku7ZwdWhhbHNraWpzZW1lbkBnbWFpbC5jb21cbi8v5rqQ56CB572R56uZIOW8gHZwbuWFqOWxgOaooeW8j+aJk+W8gCBodHRwOi8vd2ViM2luY3ViYXRvcnMuY29tL1xuLy/nlLXmiqVodHRwczovL3QubWUvZ2FtZWNvZGU5OTlcbi8v572R6aG15a6i5pyNIGh0dHA6Ly93ZWIzaW5jdWJhdG9ycy5jb20va2VmdS5odG1sXG52YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIGEgPSBjYy5fZGVjb3JhdG9yO1xudmFyIHMgPSBhLmNjY2xhc3M7XG52YXIgYyA9IGEucHJvcGVydHk7XG52YXIgbCA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLnNwck5vZGUgPSBudWxsO1xuICAgICAgICBlLmxibHMgPSBbXTtcbiAgICAgICAgZS5yZWROdW1MYiA9IG51bGw7XG4gICAgICAgIGUuZmxhZyA9ICEwO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnUoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGFnO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0TGIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0aGlzLmxibHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5zdHJpbmcgPSB0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdGhpcy5mbGFnID0gdDtcbiAgICAgICAgdGhpcy51KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBudWxsICE9IHRoaXMuc3ByTm9kZSAmJiAodGhpcy5zcHJOb2RlLmFjdGl2ZSA9IHRoaXMuZmxhZyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRSZWQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0aGlzLnJlZE51bUxiICYmXG4gICAgICAgICAgICAodFxuICAgICAgICAgICAgICAgID8gKCh0aGlzLnJlZE51bUxiLnN0cmluZyA9IHQgKyBcIlwiKSwgKHRoaXMucmVkTnVtTGIubm9kZS5wYXJlbnQuYWN0aXZlID0gITApKVxuICAgICAgICAgICAgICAgIDogKHRoaXMucmVkTnVtTGIubm9kZS5wYXJlbnQuYWN0aXZlID0gITEpKTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW2MoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJzcHJOb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbYyhbY2MuTGFiZWxdKV0sIGUucHJvdG90eXBlLCBcImxibHNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtjKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcInJlZE51bUxiXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3NdLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBsO1xuIl19