
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/cfgMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f62a8NIu0RKNrbUIyQ8mN40', 'cfgMgr');
// scripts/cfgMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _res = require("res");

var s = function () {
  function t() {}

  t.syncServerCfg = function (e) {
    t.serverCfg = e.times ? e : Object.assign(Object.assign({}, this.serverCfg), e);

    _evts["default"].opE.emit({
      action: _evts["default"].REFRESH_CFGDATA
    });
  };

  t.init = function () {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      return __generator(this, function (o) {
        switch (o.label) {
          case 0:
            return t.serverCfg ? [3, 2] : [4, _res["default"].ins.l("json/serverCfgBackup", cc.JsonAsset)];

          case 1:
            (e = o.sent()) && (t.serverCfg = e.json), o.label = 2;

          case 2:
            return [2];
        }
      });
    });
  };

  return t;
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2ZnTWdyLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2V2dHMiLCJyZXF1aXJlIiwiX3JlcyIsInMiLCJ0Iiwic3luY1NlcnZlckNmZyIsImUiLCJzZXJ2ZXJDZmciLCJ0aW1lcyIsImFzc2lnbiIsIm9wRSIsImVtaXQiLCJhY3Rpb24iLCJSRUZSRVNIX0NGR0RBVEEiLCJpbml0IiwiX19hd2FpdGVyIiwiX19nZW5lcmF0b3IiLCJvIiwibGFiZWwiLCJpbnMiLCJsIiwiY2MiLCJKc29uQXNzZXQiLCJzZW50IiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBLElBQUlDLEtBQUssR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBbkI7O0FBQ0EsSUFBSUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsS0FBRCxDQUFsQjs7QUFDQSxJQUFJRSxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWEsQ0FBRTs7RUFDZkEsQ0FBQyxDQUFDQyxhQUFGLEdBQWtCLFVBQVVDLENBQVYsRUFBYTtJQUMzQkYsQ0FBQyxDQUFDRyxTQUFGLEdBQWNELENBQUMsQ0FBQ0UsS0FBRixHQUFVRixDQUFWLEdBQWNWLE1BQU0sQ0FBQ2EsTUFBUCxDQUFjYixNQUFNLENBQUNhLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtGLFNBQXZCLENBQWQsRUFBaURELENBQWpELENBQTVCOztJQUNBTixLQUFLLFdBQUwsQ0FBY1UsR0FBZCxDQUFrQkMsSUFBbEIsQ0FBdUI7TUFBQ0MsTUFBTSxFQUFFWixLQUFLLFdBQUwsQ0FBY2E7SUFBdkIsQ0FBdkI7RUFDSCxDQUhEOztFQUlBVCxDQUFDLENBQUNVLElBQUYsR0FBUyxZQUFZO0lBQ2pCLE9BQU9DLFNBQVMsQ0FBQyxJQUFELEVBQU8sS0FBSyxDQUFaLEVBQWUsS0FBSyxDQUFwQixFQUF1QixZQUFZO01BQy9DLElBQUlULENBQUo7TUFDQSxPQUFPVSxXQUFXLENBQUMsSUFBRCxFQUFPLFVBQVVDLENBQVYsRUFBYTtRQUNsQyxRQUFRQSxDQUFDLENBQUNDLEtBQVY7VUFDSSxLQUFLLENBQUw7WUFDSSxPQUFPZCxDQUFDLENBQUNHLFNBQUYsR0FBYyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWQsR0FBdUIsQ0FBQyxDQUFELEVBQUlMLElBQUksV0FBSixDQUFhaUIsR0FBYixDQUFpQkMsQ0FBakIsQ0FBbUIsc0JBQW5CLEVBQTJDQyxFQUFFLENBQUNDLFNBQTlDLENBQUosQ0FBOUI7O1VBQ0osS0FBSyxDQUFMO1lBQ0ksQ0FBQ2hCLENBQUMsR0FBR1csQ0FBQyxDQUFDTSxJQUFGLEVBQUwsTUFBbUJuQixDQUFDLENBQUNHLFNBQUYsR0FBY0QsQ0FBQyxDQUFDa0IsSUFBbkMsR0FBMkNQLENBQUMsQ0FBQ0MsS0FBRixHQUFVLENBQXJEOztVQUNKLEtBQUssQ0FBTDtZQUNJLE9BQU8sQ0FBQyxDQUFELENBQVA7UUFOUjtNQVFILENBVGlCLENBQWxCO0lBVUgsQ0FaZSxDQUFoQjtFQWFILENBZEQ7O0VBZUEsT0FBT2QsQ0FBUDtBQUNILENBdEJPLEVBQVI7O0FBdUJBTixPQUFPLFdBQVAsR0FBa0JLLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogITB9KTtcbnZhciBfZXZ0cyA9IHJlcXVpcmUoXCJldnRzXCIpO1xudmFyIF9yZXMgPSByZXF1aXJlKFwicmVzXCIpO1xudmFyIHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7fVxuICAgIHQuc3luY1NlcnZlckNmZyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHQuc2VydmVyQ2ZnID0gZS50aW1lcyA/IGUgOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2VydmVyQ2ZnKSwgZSk7XG4gICAgICAgIF9ldnRzLmRlZmF1bHQub3BFLmVtaXQoe2FjdGlvbjogX2V2dHMuZGVmYXVsdC5SRUZSRVNIX0NGR0RBVEF9KTtcbiAgICB9O1xuICAgIHQuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG8ubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuc2VydmVyQ2ZnID8gWzMsIDJdIDogWzQsIF9yZXMuZGVmYXVsdC5pbnMubChcImpzb24vc2VydmVyQ2ZnQmFja3VwXCIsIGNjLkpzb25Bc3NldCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAoZSA9IG8uc2VudCgpKSAmJiAodC5zZXJ2ZXJDZmcgPSBlLmpzb24pLCAoby5sYWJlbCA9IDIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHM7XG4iXX0=