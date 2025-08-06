
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lang.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ed20QixH9CRaDPmF/iPEsw', 'lang');
// scripts/lang.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.getCoinFor = exports.gemeTypeKey = exports.reportKey = exports.lang = void 0;
exports.lang = {
  1e4: "暂无视频",
  10001: "元宝不足",
  10002: "体力不足",
  10003: "入场券不足",
  10004: "暂未开放",
  10005: "没有可删除的邮件",
  10006: "没有可领取的奖励",
  10007: "感谢您的反馈",
  10008: "请输入反馈内容",
  10009: "今日已达上限,请注意休息",
  task_1: "道具礼包",
  task_2: "元宝礼包",
  task_3: "完成1关积分赛关卡",
  task_4: "再完成10关积分赛关卡",
  task_5: "通关每日挑战",
  task_6: "完成5局趣味赛",
  task_7: "分享2位好友,获取趣味赛入场券",
  30001: "趣味赛积分最高达{0}解锁",
  40001: "通关速度超过全国{0}%的人！",
  40002: "您的连胜次数已达{0}次",
  40003: "本组排名"
};
exports.reportKey = {
  qw_line_ticket: "趣味赛挑战券",
  notice: "铲子",
  random_notice: "烟花",
  full_row_col: "钉耙",
  puzzle_pieces: "拼图碎片",
  newYear_pieces: "新年拼图碎片",
  puzzle_notice: "拼图提示",
  puzzle_background: "拼图背景"
};
exports.gemeTypeKey = {
  0: "主线",
  1: "拓展玩法-虫子",
  2: "趣味赛",
  3: "每日挑战",
  4: "练习模式",
  5: "拼图",
  6: "活动"
};

(function (t) {
  t.Main = "首页", t.Item = "道具", t.Rebirth = "复活";
})(exports.getCoinFor || (exports.getCoinFor = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGFuZy5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImdldENvaW5Gb3IiLCJnZW1lVHlwZUtleSIsInJlcG9ydEtleSIsImxhbmciLCJ0YXNrXzEiLCJ0YXNrXzIiLCJ0YXNrXzMiLCJ0YXNrXzQiLCJ0YXNrXzUiLCJ0YXNrXzYiLCJ0YXNrXzciLCJxd19saW5lX3RpY2tldCIsIm5vdGljZSIsInJhbmRvbV9ub3RpY2UiLCJmdWxsX3Jvd19jb2wiLCJwdXp6bGVfcGllY2VzIiwibmV3WWVhcl9waWVjZXMiLCJwdXp6bGVfbm90aWNlIiwicHV6emxlX2JhY2tncm91bmQiLCJ0IiwiTWFpbiIsIkl0ZW0iLCJSZWJpcnRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUNDLEtBQUssRUFBRSxDQUFDO0FBQVQsQ0FBN0M7QUFDQUQsT0FBTyxDQUFDRSxVQUFSLEdBQXFCRixPQUFPLENBQUNHLFdBQVIsR0FBc0JILE9BQU8sQ0FBQ0ksU0FBUixHQUFvQkosT0FBTyxDQUFDSyxJQUFSLEdBQWUsS0FBSyxDQUFuRjtBQUNBTCxPQUFPLENBQUNLLElBQVIsR0FBZTtFQUNYLEtBQUssTUFETTtFQUVYLE9BQU8sTUFGSTtFQUdYLE9BQU8sTUFISTtFQUlYLE9BQU8sT0FKSTtFQUtYLE9BQU8sTUFMSTtFQU1YLE9BQU8sVUFOSTtFQU9YLE9BQU8sVUFQSTtFQVFYLE9BQU8sUUFSSTtFQVNYLE9BQU8sU0FUSTtFQVVYLE9BQU8sY0FWSTtFQVdYQyxNQUFNLEVBQUUsTUFYRztFQVlYQyxNQUFNLEVBQUUsTUFaRztFQWFYQyxNQUFNLEVBQUUsV0FiRztFQWNYQyxNQUFNLEVBQUUsYUFkRztFQWVYQyxNQUFNLEVBQUUsUUFmRztFQWdCWEMsTUFBTSxFQUFFLFNBaEJHO0VBaUJYQyxNQUFNLEVBQUUsaUJBakJHO0VBa0JYLE9BQU8sZUFsQkk7RUFtQlgsT0FBTyxpQkFuQkk7RUFvQlgsT0FBTyxjQXBCSTtFQXFCWCxPQUFPO0FBckJJLENBQWY7QUF1QkFaLE9BQU8sQ0FBQ0ksU0FBUixHQUFvQjtFQUNoQlMsY0FBYyxFQUFFLFFBREE7RUFFaEJDLE1BQU0sRUFBRSxJQUZRO0VBR2hCQyxhQUFhLEVBQUUsSUFIQztFQUloQkMsWUFBWSxFQUFFLElBSkU7RUFLaEJDLGFBQWEsRUFBRSxNQUxDO0VBTWhCQyxjQUFjLEVBQUUsUUFOQTtFQU9oQkMsYUFBYSxFQUFFLE1BUEM7RUFRaEJDLGlCQUFpQixFQUFFO0FBUkgsQ0FBcEI7QUFVQXBCLE9BQU8sQ0FBQ0csV0FBUixHQUFzQjtFQUFDLEdBQUcsSUFBSjtFQUFVLEdBQUcsU0FBYjtFQUF3QixHQUFHLEtBQTNCO0VBQWtDLEdBQUcsTUFBckM7RUFBNkMsR0FBRyxNQUFoRDtFQUF3RCxHQUFHLElBQTNEO0VBQWlFLEdBQUc7QUFBcEUsQ0FBdEI7O0FBQ0EsQ0FBQyxVQUFVa0IsQ0FBVixFQUFhO0VBQ1RBLENBQUMsQ0FBQ0MsSUFBRixHQUFTLElBQVYsRUFBa0JELENBQUMsQ0FBQ0UsSUFBRixHQUFTLElBQTNCLEVBQW1DRixDQUFDLENBQUNHLE9BQUYsR0FBWSxJQUEvQztBQUNILENBRkQsRUFFR3hCLE9BQU8sQ0FBQ0UsVUFBUixLQUF1QkYsT0FBTyxDQUFDRSxVQUFSLEdBQXFCLEVBQTVDLENBRkgiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xuZXhwb3J0cy5nZXRDb2luRm9yID0gZXhwb3J0cy5nZW1lVHlwZUtleSA9IGV4cG9ydHMucmVwb3J0S2V5ID0gZXhwb3J0cy5sYW5nID0gdm9pZCAwO1xuZXhwb3J0cy5sYW5nID0ge1xuICAgIDFlNDogXCLmmoLml6Dop4bpopFcIixcbiAgICAxMDAwMTogXCLlhYPlrp3kuI3otrNcIixcbiAgICAxMDAwMjogXCLkvZPlipvkuI3otrNcIixcbiAgICAxMDAwMzogXCLlhaXlnLrliLjkuI3otrNcIixcbiAgICAxMDAwNDogXCLmmoLmnKrlvIDmlL5cIixcbiAgICAxMDAwNTogXCLmsqHmnInlj6/liKDpmaTnmoTpgq7ku7ZcIixcbiAgICAxMDAwNjogXCLmsqHmnInlj6/pooblj5bnmoTlpZblirFcIixcbiAgICAxMDAwNzogXCLmhJ/osKLmgqjnmoTlj43ppohcIixcbiAgICAxMDAwODogXCLor7fovpPlhaXlj43ppojlhoXlrrlcIixcbiAgICAxMDAwOTogXCLku4rml6Xlt7Lovr7kuIrpmZAs6K+35rOo5oSP5LyR5oGvXCIsXG4gICAgdGFza18xOiBcIumBk+WFt+ekvOWMhVwiLFxuICAgIHRhc2tfMjogXCLlhYPlrp3npLzljIVcIixcbiAgICB0YXNrXzM6IFwi5a6M5oiQMeWFs+enr+WIhui1m+WFs+WNoVwiLFxuICAgIHRhc2tfNDogXCLlho3lrozmiJAxMOWFs+enr+WIhui1m+WFs+WNoVwiLFxuICAgIHRhc2tfNTogXCLpgJrlhbPmr4/ml6XmjJHmiJhcIixcbiAgICB0YXNrXzY6IFwi5a6M5oiQNeWxgOi2o+WRs+i1m1wiLFxuICAgIHRhc2tfNzogXCLliIbkuqsy5L2N5aW95Y+LLOiOt+WPlui2o+WRs+i1m+WFpeWcuuWIuFwiLFxuICAgIDMwMDAxOiBcIui2o+WRs+i1m+enr+WIhuacgOmrmOi+vnswfeino+mUgVwiLFxuICAgIDQwMDAxOiBcIumAmuWFs+mAn+W6pui2hei/h+WFqOWbvXswfSXnmoTkurrvvIFcIixcbiAgICA0MDAwMjogXCLmgqjnmoTov57og5zmrKHmlbDlt7Lovr57MH3mrKFcIixcbiAgICA0MDAwMzogXCLmnKznu4TmjpLlkI1cIlxufTtcbmV4cG9ydHMucmVwb3J0S2V5ID0ge1xuICAgIHF3X2xpbmVfdGlja2V0OiBcIui2o+WRs+i1m+aMkeaImOWIuFwiLFxuICAgIG5vdGljZTogXCLpk7LlrZBcIixcbiAgICByYW5kb21fbm90aWNlOiBcIueDn+iKsVwiLFxuICAgIGZ1bGxfcm93X2NvbDogXCLpkonogJlcIixcbiAgICBwdXp6bGVfcGllY2VzOiBcIuaLvOWbvueijueJh1wiLFxuICAgIG5ld1llYXJfcGllY2VzOiBcIuaWsOW5tOaLvOWbvueijueJh1wiLFxuICAgIHB1enpsZV9ub3RpY2U6IFwi5ou85Zu+5o+Q56S6XCIsXG4gICAgcHV6emxlX2JhY2tncm91bmQ6IFwi5ou85Zu+6IOM5pmvXCJcbn07XG5leHBvcnRzLmdlbWVUeXBlS2V5ID0gezA6IFwi5Li757q/XCIsIDE6IFwi5ouT5bGV546p5rOVLeiZq+WtkFwiLCAyOiBcIui2o+WRs+i1m1wiLCAzOiBcIuavj+aXpeaMkeaImFwiLCA0OiBcIue7g+S5oOaooeW8j1wiLCA1OiBcIuaLvOWbvlwiLCA2OiBcIua0u+WKqFwifTtcbihmdW5jdGlvbiAodCkge1xuICAgICh0Lk1haW4gPSBcIummlumhtVwiKSwgKHQuSXRlbSA9IFwi6YGT5YW3XCIpLCAodC5SZWJpcnRoID0gXCLlpI3mtLtcIik7XG59KShleHBvcnRzLmdldENvaW5Gb3IgfHwgKGV4cG9ydHMuZ2V0Q29pbkZvciA9IHt9KSk7XG4iXX0=