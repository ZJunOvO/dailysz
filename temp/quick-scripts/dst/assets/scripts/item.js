
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab1208U3p1LdY9+tJ9S8YFo', 'item');
// scripts/item.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _numberUtils = require("NumberUtils");

var _res = require("res");

var c = cc._decorator;
var l = c.ccclass;
var u = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.icon = null;
    e.numLbl = null;
    e.numBgNode = null;
    e.key = "";
    e.count = "";
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t, e) {
    this.key = e;

    _res["default"].ins.lSF("item/" + e, this.icon);

    var o = _numberUtils["default"].FormatCurrency(t.val[e]);

    this.count = o;
    this.numLbl.string = "x" + o;
  };

  e.prototype.initByData = function (t, e) {
    var o = this;
    this.key = t;
    this.count = e;

    _res["default"].ins.lSF("item/" + t, this.icon);

    var n = this.numLbl.node.width;
    this.numLbl.string = "x" + e;
    this.scheduleOnce(function () {
      var t = o.numLbl.node.width - n;
      o.reNumBg(t);
    });
  };

  e.prototype.reNumBg = function (t) {
    this.numBgNode && (this.numBgNode.width += t);
  };

  __decorate([u(cc.Sprite)], e.prototype, "icon", void 0);

  __decorate([u(cc.Label)], e.prototype, "numLbl", void 0);

  __decorate([u(cc.Node)], e.prototype, "numBgNode", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaXRlbS5qcyJdLCJuYW1lcyI6WyJuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfbnVtYmVyVXRpbHMiLCJyZXF1aXJlIiwiX3JlcyIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJsIiwiY2NjbGFzcyIsInUiLCJwcm9wZXJ0eSIsInAiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaWNvbiIsIm51bUxibCIsIm51bUJnTm9kZSIsImtleSIsImNvdW50IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdCIsImlucyIsImxTRiIsIm8iLCJGb3JtYXRDdXJyZW5jeSIsInZhbCIsInN0cmluZyIsImluaXRCeURhdGEiLCJub2RlIiwid2lkdGgiLCJzY2hlZHVsZU9uY2UiLCJyZU51bUJnIiwiX19kZWNvcmF0ZSIsIlNwcml0ZSIsIkxhYmVsIiwiTm9kZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFBQ0MsS0FBSyxFQUFFLENBQUM7QUFBVCxDQUE3Qzs7QUFDQSxJQUFJQyxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQTFCOztBQUNBLElBQUlDLElBQUksR0FBR0QsT0FBTyxDQUFDLEtBQUQsQ0FBbEI7O0FBQ0EsSUFBSUUsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxJQUFGLEdBQVMsSUFBVDtJQUNBSCxDQUFDLENBQUNJLE1BQUYsR0FBVyxJQUFYO0lBQ0FKLENBQUMsQ0FBQ0ssU0FBRixHQUFjLElBQWQ7SUFDQUwsQ0FBQyxDQUFDTSxHQUFGLEdBQVEsRUFBUjtJQUNBTixDQUFDLENBQUNPLEtBQUYsR0FBVSxFQUFWO0lBQ0EsT0FBT1AsQ0FBUDtFQUNIOztFQUNEUSxTQUFTLENBQUNSLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNTLFNBQUYsQ0FBWUMsSUFBWixHQUFtQixVQUFVWCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDL0IsS0FBS00sR0FBTCxHQUFXTixDQUFYOztJQUNBVixJQUFJLFdBQUosQ0FBYXFCLEdBQWIsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQVVaLENBQS9CLEVBQWtDLEtBQUtHLElBQXZDOztJQUNBLElBQUlVLENBQUMsR0FBR3pCLFlBQVksV0FBWixDQUFxQjBCLGNBQXJCLENBQW9DZixDQUFDLENBQUNnQixHQUFGLENBQU1mLENBQU4sQ0FBcEMsQ0FBUjs7SUFDQSxLQUFLTyxLQUFMLEdBQWFNLENBQWI7SUFDQSxLQUFLVCxNQUFMLENBQVlZLE1BQVosR0FBcUIsTUFBTUgsQ0FBM0I7RUFDSCxDQU5EOztFQU9BYixDQUFDLENBQUNTLFNBQUYsQ0FBWVEsVUFBWixHQUF5QixVQUFVbEIsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQ3JDLElBQUlhLENBQUMsR0FBRyxJQUFSO0lBQ0EsS0FBS1AsR0FBTCxHQUFXUCxDQUFYO0lBQ0EsS0FBS1EsS0FBTCxHQUFhUCxDQUFiOztJQUNBVixJQUFJLFdBQUosQ0FBYXFCLEdBQWIsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQVViLENBQS9CLEVBQWtDLEtBQUtJLElBQXZDOztJQUNBLElBQUlwQixDQUFDLEdBQUcsS0FBS3FCLE1BQUwsQ0FBWWMsSUFBWixDQUFpQkMsS0FBekI7SUFDQSxLQUFLZixNQUFMLENBQVlZLE1BQVosR0FBcUIsTUFBTWhCLENBQTNCO0lBQ0EsS0FBS29CLFlBQUwsQ0FBa0IsWUFBWTtNQUMxQixJQUFJckIsQ0FBQyxHQUFHYyxDQUFDLENBQUNULE1BQUYsQ0FBU2MsSUFBVCxDQUFjQyxLQUFkLEdBQXNCcEMsQ0FBOUI7TUFDQThCLENBQUMsQ0FBQ1EsT0FBRixDQUFVdEIsQ0FBVjtJQUNILENBSEQ7RUFJSCxDQVhEOztFQVlBQyxDQUFDLENBQUNTLFNBQUYsQ0FBWVksT0FBWixHQUFzQixVQUFVdEIsQ0FBVixFQUFhO0lBQy9CLEtBQUtNLFNBQUwsS0FBbUIsS0FBS0EsU0FBTCxDQUFlYyxLQUFmLElBQXdCcEIsQ0FBM0M7RUFDSCxDQUZEOztFQUdBdUIsVUFBVSxDQUFDLENBQUMxQixDQUFDLENBQUNKLEVBQUUsQ0FBQytCLE1BQUosQ0FBRixDQUFELEVBQWlCdkIsQ0FBQyxDQUFDUyxTQUFuQixFQUE4QixNQUE5QixFQUFzQyxLQUFLLENBQTNDLENBQVY7O0VBQ0FhLFVBQVUsQ0FBQyxDQUFDMUIsQ0FBQyxDQUFDSixFQUFFLENBQUNnQyxLQUFKLENBQUYsQ0FBRCxFQUFnQnhCLENBQUMsQ0FBQ1MsU0FBbEIsRUFBNkIsUUFBN0IsRUFBdUMsS0FBSyxDQUE1QyxDQUFWOztFQUNBYSxVQUFVLENBQUMsQ0FBQzFCLENBQUMsQ0FBQ0osRUFBRSxDQUFDaUMsSUFBSixDQUFGLENBQUQsRUFBZXpCLENBQUMsQ0FBQ1MsU0FBakIsRUFBNEIsV0FBNUIsRUFBeUMsS0FBSyxDQUE5QyxDQUFWOztFQUNBLE9BQU9hLFVBQVUsQ0FBQyxDQUFDNUIsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQXJDTyxDQXFDTFIsRUFBRSxDQUFDa0MsU0FyQ0UsQ0FBUjs7QUFzQ0F4QyxPQUFPLFdBQVAsR0FBa0JZLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIF9udW1iZXJVdGlscyA9IHJlcXVpcmUoXCJOdW1iZXJVdGlsc1wiKTtcbnZhciBfcmVzID0gcmVxdWlyZShcInJlc1wiKTtcbnZhciBjID0gY2MuX2RlY29yYXRvcjtcbnZhciBsID0gYy5jY2NsYXNzO1xudmFyIHUgPSBjLnByb3BlcnR5O1xudmFyIHAgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5pY29uID0gbnVsbDtcbiAgICAgICAgZS5udW1MYmwgPSBudWxsO1xuICAgICAgICBlLm51bUJnTm9kZSA9IG51bGw7XG4gICAgICAgIGUua2V5ID0gXCJcIjtcbiAgICAgICAgZS5jb3VudCA9IFwiXCI7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHRoaXMua2V5ID0gZTtcbiAgICAgICAgX3Jlcy5kZWZhdWx0Lmlucy5sU0YoXCJpdGVtL1wiICsgZSwgdGhpcy5pY29uKTtcbiAgICAgICAgdmFyIG8gPSBfbnVtYmVyVXRpbHMuZGVmYXVsdC5Gb3JtYXRDdXJyZW5jeSh0LnZhbFtlXSk7XG4gICAgICAgIHRoaXMuY291bnQgPSBvO1xuICAgICAgICB0aGlzLm51bUxibC5zdHJpbmcgPSBcInhcIiArIG87XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0QnlEYXRhID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICB0aGlzLmtleSA9IHQ7XG4gICAgICAgIHRoaXMuY291bnQgPSBlO1xuICAgICAgICBfcmVzLmRlZmF1bHQuaW5zLmxTRihcIml0ZW0vXCIgKyB0LCB0aGlzLmljb24pO1xuICAgICAgICB2YXIgbiA9IHRoaXMubnVtTGJsLm5vZGUud2lkdGg7XG4gICAgICAgIHRoaXMubnVtTGJsLnN0cmluZyA9IFwieFwiICsgZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHQgPSBvLm51bUxibC5ub2RlLndpZHRoIC0gbjtcbiAgICAgICAgICAgIG8ucmVOdW1CZyh0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZU51bUJnID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdGhpcy5udW1CZ05vZGUgJiYgKHRoaXMubnVtQmdOb2RlLndpZHRoICs9IHQpO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbdShjYy5TcHJpdGUpXSwgZS5wcm90b3R5cGUsIFwiaWNvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW3UoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwibnVtTGJsXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbdShjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcIm51bUJnTm9kZVwiLCB2b2lkIDApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtsXSwgZSk7XG59KShjYy5Db21wb25lbnQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcDtcbiJdfQ==