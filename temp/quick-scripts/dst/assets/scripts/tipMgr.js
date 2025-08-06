
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/tipMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a83eevdkoxFOaQQ5jw2Zqgx', 'tipMgr');
// scripts/tipMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _res = require("res");

var _ui_tip = require("ui_tip");

var r = function () {
  function t() {
    if (this.iL = !1, this.tipN = null, t._ins) throw new Error("tipMgr can only be one！");
    t._ins = this;
  }

  Object.defineProperty(t, "ins", {
    get: function get() {
      t._ins || new t();
      return t._ins;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.showTip = function (t, e) {
    var o = this;
    this.showStr = t;
    this.isSystemFont = e;
    this.iL || (cc.isValid(this.tipN) ? this.onShow() : (this.iL = !0, _res["default"].ins.lPre("prefab/tip").then(function (t) {
      o.tipN = cc.instantiate(t);
      o.onShow();
      o.iL = !1;
    })["catch"](function () {
      console.error("getPrefabErr");
    })));
  };

  t.prototype.onShow = function () {
    if (this.showStr) {
      var t = cc.director.getScene().getChildByName("Canvas");

      if (t) {
        var e = t.getChildByName("tipManager");
        e || (e = new cc.Node("tipManager"), t.addChild(e));
        this.tipN.parent || e.addChild(this.tipN);
        e.setPosition(cc.v2());
        this.tipN.getComponent(_ui_tip["default"]).init(this.showStr, this.isSystemFont);
      }
    }
  };

  return t;
}();

exports["default"] = r;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdGlwTWdyLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX3JlcyIsInJlcXVpcmUiLCJfdWlfdGlwIiwiciIsInQiLCJpTCIsInRpcE4iLCJfaW5zIiwiRXJyb3IiLCJnZXQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHJvdG90eXBlIiwic2hvd1RpcCIsImUiLCJvIiwic2hvd1N0ciIsImlzU3lzdGVtRm9udCIsImNjIiwiaXNWYWxpZCIsIm9uU2hvdyIsImlucyIsImxQcmUiLCJ0aGVuIiwiaW5zdGFudGlhdGUiLCJjb25zb2xlIiwiZXJyb3IiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZ2V0Q2hpbGRCeU5hbWUiLCJOb2RlIiwiYWRkQ2hpbGQiLCJwYXJlbnQiLCJzZXRQb3NpdGlvbiIsInYyIiwiZ2V0Q29tcG9uZW50IiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBLElBQUlDLElBQUksR0FBR0MsT0FBTyxDQUFDLEtBQUQsQ0FBbEI7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRCxPQUFPLENBQUMsUUFBRCxDQUFyQjs7QUFDQSxJQUFJRSxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFNLEtBQUtDLEVBQUwsR0FBVSxDQUFDLENBQVosRUFBaUIsS0FBS0MsSUFBTCxHQUFZLElBQTdCLEVBQW9DRixDQUFDLENBQUNHLElBQTNDLEVBQWtELE1BQU0sSUFBSUMsS0FBSixDQUFVLHlCQUFWLENBQU47SUFDbERKLENBQUMsQ0FBQ0csSUFBRixHQUFTLElBQVQ7RUFDSDs7RUFDRFgsTUFBTSxDQUFDQyxjQUFQLENBQXNCTyxDQUF0QixFQUF5QixLQUF6QixFQUFnQztJQUM1QkssR0FBRyxFQUFFLGVBQVk7TUFDYkwsQ0FBQyxDQUFDRyxJQUFGLElBQVUsSUFBSUgsQ0FBSixFQUFWO01BQ0EsT0FBT0EsQ0FBQyxDQUFDRyxJQUFUO0lBQ0gsQ0FKMkI7SUFLNUJHLFVBQVUsRUFBRSxDQUFDLENBTGU7SUFNNUJDLFlBQVksRUFBRSxDQUFDO0VBTmEsQ0FBaEM7O0VBUUFQLENBQUMsQ0FBQ1EsU0FBRixDQUFZQyxPQUFaLEdBQXNCLFVBQVVULENBQVYsRUFBYVUsQ0FBYixFQUFnQjtJQUNsQyxJQUFJQyxDQUFDLEdBQUcsSUFBUjtJQUNBLEtBQUtDLE9BQUwsR0FBZVosQ0FBZjtJQUNBLEtBQUthLFlBQUwsR0FBb0JILENBQXBCO0lBQ0EsS0FBS1QsRUFBTCxLQUNLYSxFQUFFLENBQUNDLE9BQUgsQ0FBVyxLQUFLYixJQUFoQixJQUNLLEtBQUtjLE1BQUwsRUFETCxJQUVPLEtBQUtmLEVBQUwsR0FBVSxDQUFDLENBQVosRUFDREwsSUFBSSxXQUFKLENBQWFxQixHQUFiLENBQ0tDLElBREwsQ0FDVSxZQURWLEVBRUtDLElBRkwsQ0FFVSxVQUFVbkIsQ0FBVixFQUFhO01BQ2ZXLENBQUMsQ0FBQ1QsSUFBRixHQUFTWSxFQUFFLENBQUNNLFdBQUgsQ0FBZXBCLENBQWYsQ0FBVDtNQUNBVyxDQUFDLENBQUNLLE1BQUY7TUFDQUwsQ0FBQyxDQUFDVixFQUFGLEdBQU8sQ0FBQyxDQUFSO0lBQ0gsQ0FOTCxXQU9XLFlBQVk7TUFDZm9CLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLGNBQWQ7SUFDSCxDQVRMLENBSEwsQ0FETDtFQWNILENBbEJEOztFQW1CQXRCLENBQUMsQ0FBQ1EsU0FBRixDQUFZUSxNQUFaLEdBQXFCLFlBQVk7SUFDN0IsSUFBSSxLQUFLSixPQUFULEVBQWtCO01BQ2QsSUFBSVosQ0FBQyxHQUFHYyxFQUFFLENBQUNTLFFBQUgsQ0FBWUMsUUFBWixHQUF1QkMsY0FBdkIsQ0FBc0MsUUFBdEMsQ0FBUjs7TUFDQSxJQUFJekIsQ0FBSixFQUFPO1FBQ0gsSUFBSVUsQ0FBQyxHQUFHVixDQUFDLENBQUN5QixjQUFGLENBQWlCLFlBQWpCLENBQVI7UUFDQWYsQ0FBQyxLQUFNQSxDQUFDLEdBQUcsSUFBSUksRUFBRSxDQUFDWSxJQUFQLENBQVksWUFBWixDQUFMLEVBQWlDMUIsQ0FBQyxDQUFDMkIsUUFBRixDQUFXakIsQ0FBWCxDQUF0QyxDQUFEO1FBQ0EsS0FBS1IsSUFBTCxDQUFVMEIsTUFBVixJQUFvQmxCLENBQUMsQ0FBQ2lCLFFBQUYsQ0FBVyxLQUFLekIsSUFBaEIsQ0FBcEI7UUFDQVEsQ0FBQyxDQUFDbUIsV0FBRixDQUFjZixFQUFFLENBQUNnQixFQUFILEVBQWQ7UUFDQSxLQUFLNUIsSUFBTCxDQUFVNkIsWUFBVixDQUF1QmpDLE9BQU8sV0FBOUIsRUFBd0NrQyxJQUF4QyxDQUE2QyxLQUFLcEIsT0FBbEQsRUFBMkQsS0FBS0MsWUFBaEU7TUFDSDtJQUNKO0VBQ0osQ0FYRDs7RUFZQSxPQUFPYixDQUFQO0FBQ0gsQ0E3Q08sRUFBUjs7QUE4Q0FOLE9BQU8sV0FBUCxHQUFrQkssQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIF9yZXMgPSByZXF1aXJlKFwicmVzXCIpO1xudmFyIF91aV90aXAgPSByZXF1aXJlKFwidWlfdGlwXCIpO1xudmFyIHIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIGlmICgoKHRoaXMuaUwgPSAhMSksICh0aGlzLnRpcE4gPSBudWxsKSwgdC5faW5zKSkgdGhyb3cgbmV3IEVycm9yKFwidGlwTWdyIGNhbiBvbmx5IGJlIG9uZe+8gVwiKTtcbiAgICAgICAgdC5faW5zID0gdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiaW5zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0Ll9pbnMgfHwgbmV3IHQoKTtcbiAgICAgICAgICAgIHJldHVybiB0Ll9pbnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgfSk7XG4gICAgdC5wcm90b3R5cGUuc2hvd1RpcCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgdGhpcy5zaG93U3RyID0gdDtcbiAgICAgICAgdGhpcy5pc1N5c3RlbUZvbnQgPSBlO1xuICAgICAgICB0aGlzLmlMIHx8XG4gICAgICAgICAgICAoY2MuaXNWYWxpZCh0aGlzLnRpcE4pXG4gICAgICAgICAgICAgICAgPyB0aGlzLm9uU2hvdygpXG4gICAgICAgICAgICAgICAgOiAoKHRoaXMuaUwgPSAhMCksXG4gICAgICAgICAgICAgICAgICBfcmVzLmRlZmF1bHQuaW5zXG4gICAgICAgICAgICAgICAgICAgICAgLmxQcmUoXCJwcmVmYWIvdGlwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgby50aXBOID0gY2MuaW5zdGFudGlhdGUodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG8ub25TaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG8uaUwgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJnZXRQcmVmYWJFcnJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLm9uU2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvd1N0cikge1xuICAgICAgICAgICAgdmFyIHQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXBNYW5hZ2VyXCIpO1xuICAgICAgICAgICAgICAgIGUgfHwgKChlID0gbmV3IGNjLk5vZGUoXCJ0aXBNYW5hZ2VyXCIpKSwgdC5hZGRDaGlsZChlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBOLnBhcmVudCB8fCBlLmFkZENoaWxkKHRoaXMudGlwTik7XG4gICAgICAgICAgICAgICAgZS5zZXRQb3NpdGlvbihjYy52MigpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcE4uZ2V0Q29tcG9uZW50KF91aV90aXAuZGVmYXVsdCkuaW5pdCh0aGlzLnNob3dTdHIsIHRoaXMuaXNTeXN0ZW1Gb250KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHQ7XG59KSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcjtcbiJdfQ==