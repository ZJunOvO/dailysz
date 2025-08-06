
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/skinNameFrame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '367f7W3ubxNcbB33cXikbqd', 'skinNameFrame');
// scripts/skinNameFrame.js

"use strict";

var n;
Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _skinMgr = require("skinMgr");

var _skinItemBase = require("skinItemBase");

var c = cc._decorator;
var l = c.ccclass;
var u = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.itemSp = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
  };

  e.prototype.loadItem = function () {
    this.itemSp.node.y = this.ref > 1 ? 0 : -4;
    this.itemSp.type = this.ref > 1 ? cc.Sprite.Type.SIMPLE : cc.Sprite.Type.SLICED;
    this.itemSp.sizeMode = this.ref > 1 ? cc.Sprite.SizeMode.TRIMMED : (this.itemSp.node.setContentSize(155, 55), cc.Sprite.SizeMode.CUSTOM);

    _skinMgr["default"].ins.updateNameFrame(this.ref, this.itemSp);
  };

  e.prototype.clickItem = function () {
    var t;
    this.state !== _skinMgr.SkinState.using && (t = this.itemSp.node, this.openSkinInfo(t));
  };

  __decorate([u(cc.Sprite)], e.prototype, "itemSp", void 0);

  return __decorate([l], e);
}(_skinItemBase["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2tpbk5hbWVGcmFtZS5qcyJdLCJuYW1lcyI6WyJuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfc2tpbk1nciIsInJlcXVpcmUiLCJfc2tpbkl0ZW1CYXNlIiwiYyIsImNjIiwiX2RlY29yYXRvciIsImwiLCJjY2NsYXNzIiwidSIsInByb3BlcnR5IiwicCIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJpdGVtU3AiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJjYWxsIiwibG9hZEl0ZW0iLCJub2RlIiwieSIsInJlZiIsInR5cGUiLCJTcHJpdGUiLCJUeXBlIiwiU0lNUExFIiwiU0xJQ0VEIiwic2l6ZU1vZGUiLCJTaXplTW9kZSIsIlRSSU1NRUQiLCJzZXRDb250ZW50U2l6ZSIsIkNVU1RPTSIsImlucyIsInVwZGF0ZU5hbWVGcmFtZSIsImNsaWNrSXRlbSIsInN0YXRlIiwiU2tpblN0YXRlIiwidXNpbmciLCJvcGVuU2tpbkluZm8iLCJfX2RlY29yYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFULENBQTdDOztBQUNBLElBQUlDLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBdEI7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHRCxPQUFPLENBQUMsY0FBRCxDQUEzQjs7QUFDQSxJQUFJRSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLE1BQUYsR0FBVyxJQUFYO0lBQ0EsT0FBT0gsQ0FBUDtFQUNIOztFQUNESSxTQUFTLENBQUNKLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNLLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixZQUFZO0lBQzdCUCxDQUFDLENBQUNNLFNBQUYsQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7RUFDSCxDQUZEOztFQUdBUCxDQUFDLENBQUNLLFNBQUYsQ0FBWUcsUUFBWixHQUF1QixZQUFZO0lBQy9CLEtBQUtMLE1BQUwsQ0FBWU0sSUFBWixDQUFpQkMsQ0FBakIsR0FBcUIsS0FBS0MsR0FBTCxHQUFXLENBQVgsR0FBZSxDQUFmLEdBQW1CLENBQUMsQ0FBekM7SUFDQSxLQUFLUixNQUFMLENBQVlTLElBQVosR0FBbUIsS0FBS0QsR0FBTCxHQUFXLENBQVgsR0FBZW5CLEVBQUUsQ0FBQ3FCLE1BQUgsQ0FBVUMsSUFBVixDQUFlQyxNQUE5QixHQUF1Q3ZCLEVBQUUsQ0FBQ3FCLE1BQUgsQ0FBVUMsSUFBVixDQUFlRSxNQUF6RTtJQUNBLEtBQUtiLE1BQUwsQ0FBWWMsUUFBWixHQUNJLEtBQUtOLEdBQUwsR0FBVyxDQUFYLEdBQ01uQixFQUFFLENBQUNxQixNQUFILENBQVVLLFFBQVYsQ0FBbUJDLE9BRHpCLElBRU8sS0FBS2hCLE1BQUwsQ0FBWU0sSUFBWixDQUFpQlcsY0FBakIsQ0FBZ0MsR0FBaEMsRUFBcUMsRUFBckMsR0FBMEM1QixFQUFFLENBQUNxQixNQUFILENBQVVLLFFBQVYsQ0FBbUJHLE1BRnBFLENBREo7O0lBSUFqQyxRQUFRLFdBQVIsQ0FBaUJrQyxHQUFqQixDQUFxQkMsZUFBckIsQ0FBcUMsS0FBS1osR0FBMUMsRUFBK0MsS0FBS1IsTUFBcEQ7RUFDSCxDQVJEOztFQVNBSCxDQUFDLENBQUNLLFNBQUYsQ0FBWW1CLFNBQVosR0FBd0IsWUFBWTtJQUNoQyxJQUFJekIsQ0FBSjtJQUNBLEtBQUswQixLQUFMLEtBQWVyQyxRQUFRLENBQUNzQyxTQUFULENBQW1CQyxLQUFsQyxLQUE2QzVCLENBQUMsR0FBRyxLQUFLSSxNQUFMLENBQVlNLElBQWpCLEVBQXdCLEtBQUttQixZQUFMLENBQWtCN0IsQ0FBbEIsQ0FBcEU7RUFDSCxDQUhEOztFQUlBOEIsVUFBVSxDQUFDLENBQUNqQyxDQUFDLENBQUNKLEVBQUUsQ0FBQ3FCLE1BQUosQ0FBRixDQUFELEVBQWlCYixDQUFDLENBQUNLLFNBQW5CLEVBQThCLFFBQTlCLEVBQXdDLEtBQUssQ0FBN0MsQ0FBVjs7RUFDQSxPQUFPd0IsVUFBVSxDQUFDLENBQUNuQyxDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBekJPLENBeUJMVixhQUFhLFdBekJSLENBQVI7O0FBMEJBSixPQUFPLFdBQVAsR0FBa0JZLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIF9za2luTWdyID0gcmVxdWlyZShcInNraW5NZ3JcIik7XG52YXIgX3NraW5JdGVtQmFzZSA9IHJlcXVpcmUoXCJza2luSXRlbUJhc2VcIik7XG52YXIgYyA9IGNjLl9kZWNvcmF0b3I7XG52YXIgbCA9IGMuY2NjbGFzcztcbnZhciB1ID0gYy5wcm9wZXJ0eTtcbnZhciBwID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuaXRlbVNwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQucHJvdG90eXBlLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubG9hZEl0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXRlbVNwLm5vZGUueSA9IHRoaXMucmVmID4gMSA/IDAgOiAtNDtcbiAgICAgICAgdGhpcy5pdGVtU3AudHlwZSA9IHRoaXMucmVmID4gMSA/IGNjLlNwcml0ZS5UeXBlLlNJTVBMRSA6IGNjLlNwcml0ZS5UeXBlLlNMSUNFRDtcbiAgICAgICAgdGhpcy5pdGVtU3Auc2l6ZU1vZGUgPVxuICAgICAgICAgICAgdGhpcy5yZWYgPiAxXG4gICAgICAgICAgICAgICAgPyBjYy5TcHJpdGUuU2l6ZU1vZGUuVFJJTU1FRFxuICAgICAgICAgICAgICAgIDogKHRoaXMuaXRlbVNwLm5vZGUuc2V0Q29udGVudFNpemUoMTU1LCA1NSksIGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT00pO1xuICAgICAgICBfc2tpbk1nci5kZWZhdWx0Lmlucy51cGRhdGVOYW1lRnJhbWUodGhpcy5yZWYsIHRoaXMuaXRlbVNwKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrSXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHRoaXMuc3RhdGUgIT09IF9za2luTWdyLlNraW5TdGF0ZS51c2luZyAmJiAoKHQgPSB0aGlzLml0ZW1TcC5ub2RlKSwgdGhpcy5vcGVuU2tpbkluZm8odCkpO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbdShjYy5TcHJpdGUpXSwgZS5wcm90b3R5cGUsIFwiaXRlbVNwXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2xdLCBlKTtcbn0pKF9za2luSXRlbUJhc2UuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBwO1xuIl19