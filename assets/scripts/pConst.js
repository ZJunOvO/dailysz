Object.defineProperty(exports, "__esModule", {value: !0});
exports.ShareResult =
    exports.VEnum4 =
    exports.VIDEO_RECORD_LIMIT =
    exports.SHARE_FAIL_MAX_CNT =
    exports.DefaultSDKSwitch =
    exports.DefaultLaunchOptions =
    exports.DefaultSystemInfo =
    exports.SDKConfig =
    exports.VideoFailCode =
    exports.STDSeqType =
    exports.PFCode =
        void 0;
exports.PFCode = {
    QQ: "qq",
    Wechat: "wechat",
    Bytedance: "DY",
    Web: "H5",
    Vivo: "vivo",
    Alipay: "Alipay",
    TaoBao: "TaoBao",
    Ios: "Ios",
    Android: "Android"
};
exports.STDSeqType = {VIDEO: "VIDEO", SHARE: "SHARE"};
exports.VideoFailCode = {
    NO_AD: "NO_AD",
    IS_AUDIT: "IS_AUDIT",
    LOW_SDK_VERSION: "LOW_SDK_VERSION",
    CANCELED: "CANCELED"
};
exports.SDKConfig = {
    comQuery: "",
    _shareData: {
        title: "太难了",
        imageUrlId: "",
        imageUrl: "subpackages/resSps/native/72/7233d4b3-7dea-4bdd-9fa3-3874c53e29a0.954ee.jpg",
        query: ""
    },
    shareData: function () {
        var t = exports.SDKConfig._shareData;
        t.query = exports.SDKConfig.comQuery + Date.now();
        return t;
    },
    ttZoneId: {race: "race", normal: "normal"},
    videoCoolTime: 18e4
};
exports.DefaultSDKSwitch = {isAudit: !0, closeAD: !1};
exports.SHARE_FAIL_MAX_CNT = 3;
exports.VIDEO_RECORD_LIMIT = 3e5;
(function (t) {
    (t[(t.SHORT = 0)] = "SHORT"), (t[(t.LONG = 1)] = "LONG");
})(exports.VEnum4 || (exports.VEnum4 = {}));
exports.ShareResult = {SUCCESS: 0, FAILED: 1, ERROR: 2};
