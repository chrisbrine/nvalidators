"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizers = void 0;
exports.customSanitizer = customSanitizer;
function customSanitizer(param, func) {
    return func(param);
}
exports.sanitizers = {
    customSanitizer: {
        func: customSanitizer,
    },
};
