Object.defineProperty(exports, "__esModule", { value: !0 });
exports.ERepEvt = exports.platform = void 0;
var _ali = require("ali");
var _androidP = require("androidP");
var _h5 = require("h5");
var _iosP = require("iosP");
var _qq = require("qq");
var _tb = require("tb");
var _tt = require("tt");
var _vivo = require("vivo");
var _wx = require("wx");
(function() {
    // var t = cc.sys;
    // if (t.isNative) {
    //     switch (t.os) {
    //         case t.OS_IOS:
    //             exports.platform = new _iosP.default();
    //             break;
    //         case t.OS_ANDROID:
    //             exports.platform = new _androidP.default();
    //     }
    //     cc.platform = exports.platform;
    // } else
    //     switch (t.platform) {
    //         case t.WECHAT_GAME:
    //             exports.platform = globalThis.qq ? new _qq.default() : new _wx.default();
    //             break;
    //         case t.BYTEDANCE_GAME:
    //             exports.platform = new _tt.default();
    //             break;
    //         case t.VIVO_GAME:
    //             exports.platform = new _vivo.default();
    //             break;
    //         case t.ALIPAY_GAME:
    //             exports.platform = new _ali.default();
    //             break;
    //         case t.TAOBAO_MINIGAME:
    //             exports.platform = new _tb.default();
    //     }
    exports.platform || (exports.platform = new _h5.default());
})();
(function(t) {
    (t.firstEtrGame = "dadian00001"),
    (t.finshGuide = "dadian00002"),
    (t.maindungeon = "dadian00003"),
    (t.dungeonReview = "dadian00004"),
    (t.useItem = "dadian00005"),
    (t.buyItem = "dadian00006"),
    (t.buyTimes = "dadian00007"),
    (t.buyCoins = "dadian00008"),
    (t.dailyTask = "dadian00009"),
    (t.raceEnd = "dadian000010"),
    (t.raceReview = "dadian000011"),
    (t.challengeCoupon = "dadian000012"),
    (t.guide = "dadian000013"),
    (t.gameLoaded = "dadian000014"),
    (t.login = "dadian000015"),
    (t.createNewRole = "dadian000016"),
    (t.beginPractice = "dadian000017"),
    (t.finishHoleJigsaw = "dadian000018"),
    (t.partJigsaw = "dadian000019"),
    (t.fesTaskFinish = "dadian000020"),
    (t.fesMainPuzzle = "dadian000021"),
    (t.fesJigNum = "dadian000022"),
    (t.newGiftGet = "dadian000023"),
    (t.adMax = "dadian000024"),
    (t.dailyChallenge = "dadian000025"),
    (t.applaunchShow = "dadian000026"),
    (t.reSetData = "dadian000027"),
    (t.susPayment = "dadian000028"),
    (t.paymentResult = "dadian000029"),
    (t.buySkin = "dadian000030"),
    (t.useSkin = "dadian000031");
})(exports.ERepEvt || (exports.ERepEvt = {}));