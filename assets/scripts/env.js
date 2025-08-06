Object.defineProperty(exports, "__esModule", {value: !0});
exports.env = exports.EM = void 0;
exports.EM = {PROD: "PROD", TEST: "TEST"};
exports.env = {
    version: "1.0.0",
    mode: exports.EM.PROD,
    network: {server: "", retryT: 2, defaultRetryCnt: 3, resourceURL: ""},
    game: "sudoku",
    name: "每天数独",
    logo: 0,
    noAds: !1
};
