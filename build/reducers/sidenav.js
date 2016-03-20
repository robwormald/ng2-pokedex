"use strict";
exports.sidenav = function (state, _a) {
    if (state === void 0) { state = { showOverlay: false, showSidenav: false }; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case 'SHOW_SIDENAV':
            return { showSidenav: true, showOverlay: false };
        default:
            return state;
    }
};
