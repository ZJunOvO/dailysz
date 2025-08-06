"use strict";
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