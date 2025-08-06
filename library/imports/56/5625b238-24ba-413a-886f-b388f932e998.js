"use strict";
cc._RF.push(module, '5625bI4JLpBOohvs4j5MumY', 'questItem');
// scripts/questItem.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _evts = require("evts");

var _idx = require("idx");

var _veBtn = require("veBtn");

var _lang = require("lang");

var _panelMgr = require("panelMgr");

var _taskMgr = require("taskMgr");

var _loading = require("loading");

var _item = require("item");

var y = cc._decorator;
var m = y.ccclass;
var v = y.property;

var _ = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.nameLbl = null;
    e.itemsNode = null;
    e.itemPrefab = null;
    e.pro = null;
    e.proLbl = null;
    e.getBtnNode = null;
    e.goBtnNode = null;
    e.adNode = null;
    e.goImgNode = null;
    e.scrollView = null;
    e.getedNode = null;
    e.questPool = new cc.NodePool(_item["default"]);
    e.eventFunc = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    for (var e in this._taskData = t, this.nameLbl.string = _lang.lang[t.temp.key], this.nameLbl.font = _loading.DEFAULTFONT, this.pro.progress = 0, this.scrollView.node.width = 360, cc.tween(this.pro).to(0.5, {
      progress: t.data.count / t.temp.nums
    }).start(), this.proLbl.string = t.data.count + "/" + t.temp.nums, t.temp.val) {
      if (t.temp.val.hasOwnProperty(e)) {
        var o = this.questPool.get();
        o || (o = cc.instantiate(this.itemPrefab));
        this.scrollView.content.addChild(o);
        o.getComponent(_item["default"]).init(t.temp, e);
      }
    }

    var n = this.scrollView.content.children[0].width * this.scrollView.content.childrenCount;

    if (this.scrollView.node.x = n > this.scrollView.node.width ? -283 : (this.scrollView.node.width - n) / 2 - 283, n = Math.min(n, 360), this.scrollView.node.width = n, this.scrollView.scrollToLeft(), this.adNode.active = !1, this.goImgNode.x = 0, this.goBtnNode.getComponent(_veBtn["default"]) && this.goBtnNode.removeComponent(_veBtn["default"]), t.temp.get_by == _taskMgr.TaskType.ad_reward) {
      var i = this.goBtnNode.addComponent(_veBtn["default"]);
      var r = new cc.Component.EventHandler();
      r.target = this.node;
      r.component = "questItem";
      r.handler = "onWatchEnd";
      "task_1" == t.temp.key && (r.customEventData = "每日任务-道具礼包");
      i.onWatchEndEvent = r;
      this.adNode.active = !0;
      this.goImgNode.x = 25;
    }

    this.goBtnNode.active = this._taskData.data.state === _taskMgr.taskState.Receive;
    this.getBtnNode.active = this._taskData.data.state === _taskMgr.taskState.Finish;
    this.getedNode.active = this._taskData.data.state === _taskMgr.taskState.Rewared;
  };

  e.prototype.updateTask = function (t) {
    t && t.temp.key == this._taskData.temp.key && (this._taskData = t, cc.tween(this.pro).to(0.5, {
      progress: t.data.count / t.temp.nums
    }).start(), this.proLbl.string = t.data.count + "/" + t.temp.nums, this.goBtnNode.active = this._taskData.data.state === _taskMgr.taskState.Receive, this.getBtnNode.active = this._taskData.data.state === _taskMgr.taskState.Finish, this.getedNode.active = this._taskData.data.state === _taskMgr.taskState.Rewared);
  };

  e.prototype.unuse = function () {
    var t = this;
    this.scrollView.content.children.forEach(function (e) {
      t.questPool.put(e);
    });
    this.scrollView.content.removeAllChildren();
  };

  e.prototype.reuse = function () {};

  e.prototype.onOperTap = function (t) {
    var e = null == t ? void 0 : t.action;
    if (e) switch (e) {
      case _evts["default"].UPDTASK:
        this.updateTask(t.data);
    }
  };

  e.prototype.onEnable = function () {
    this.goBtnNode.on("click", this.jumpPage, this);
    this.getBtnNode.on("click", this.onAward, this);
    this.eventFunc = this.onOperTap.bind(this);

    _evts["default"].opE.on(this.eventFunc);
  };

  e.prototype.onDisable = function () {
    this.goBtnNode.off("click", this.jumpPage, this);
    this.getBtnNode.off("click", this.onAward, this);

    _evts["default"].opE.off(this.eventFunc);

    this.eventFunc = null;
  };

  e.prototype.jumpPage = function (t) {
    var e;
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (o) {
        switch (o.label) {
          case 0:
            if (this._taskData.data.state != _taskMgr.taskState.Receive) return [2];

            switch (this._taskData.temp.get_by) {
              case "ad_reward":
                return [3, 1];

              case "cg_line":
                return [3, 2];

              case "qw_line":
                return [3, 3];

              case "daily_challenge":
                return [3, 4];

              case "share":
                return [3, 5];
            }

            return [3, 7];

          case 1:
            return null === (e = this.goBtnNode.getComponent(_veBtn["default"])) || void 0 === e || e.onClick(t), [3, 8];

          case 2:
            return _panelMgr["default"].ins.closeAllPanel(), _evts["default"].opE.emit({
              action: _evts["default"].MAINJUMP,
              data: 2
            }), [3, 8];

          case 3:
            return _panelMgr["default"].ins.closeAllPanel(), _evts["default"].opE.emit({
              action: _evts["default"].MAINJUMP,
              data: 4
            }), [3, 8];

          case 4:
            return _panelMgr["default"].ins.closeAllPanel(), _evts["default"].opE.emit({
              action: _evts["default"].MAINJUMP,
              data: 3
            }), [3, 8];

          case 5:
            return [4, _idx.platform.share()];

          case 6:
            return o.sent() && _taskMgr["default"].doTask(this._taskData.temp.key), [3, 8];

          case 7:
            return [3, 8];

          case 8:
            return [2];
        }
      });
    });
  };

  Object.defineProperty(e.prototype, "taskData", {
    get: function get() {
      return this._taskData;
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.onAward = function () {
    _taskMgr["default"].updateTask(this._taskData);

    for (var t = [], e = this.scrollView.content.childrenCount - 1; e >= 0; e--) {
      var o = this.scrollView.content.children[e];
      var n = o.parent.convertToWorldSpaceAR(o.position);
      var i = {};
      i.itemId = o.getComponent(_item["default"]).key;
      i.worldPos = n;
      i.value = o.getComponent(_item["default"]).count;
      t.push(i);
    }

    _panelMgr["default"].ins.open("ui/ui_flyAni", {
      itemDatas: t
    });
  };

  e.prototype.onWatchEnd = function () {
    cc.log("广告的回调");

    _taskMgr["default"].doTask(this._taskData.temp.key);
  };

  __decorate([v(cc.Label)], e.prototype, "nameLbl", void 0);

  __decorate([v(cc.Node)], e.prototype, "itemsNode", void 0);

  __decorate([v(cc.Prefab)], e.prototype, "itemPrefab", void 0);

  __decorate([v(cc.ProgressBar)], e.prototype, "pro", void 0);

  __decorate([v(cc.Label)], e.prototype, "proLbl", void 0);

  __decorate([v(cc.Node)], e.prototype, "getBtnNode", void 0);

  __decorate([v(cc.Node)], e.prototype, "goBtnNode", void 0);

  __decorate([v(cc.Node)], e.prototype, "adNode", void 0);

  __decorate([v(cc.Node)], e.prototype, "goImgNode", void 0);

  __decorate([v(cc.ScrollView)], e.prototype, "scrollView", void 0);

  __decorate([v(cc.Node)], e.prototype, "getedNode", void 0);

  return __decorate([m], e);
}(cc.Component);

exports["default"] = _;

cc._RF.pop();