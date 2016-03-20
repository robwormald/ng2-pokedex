"use strict";
exports.window = function (state, _a) {
    if (state === void 0) { state = { showOverlay: false, showSidenav: false }; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case 'RESIZE':
            return Object.assign({}, payload);
        default:
            return state;
    }
};
