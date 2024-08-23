"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validators = void 0;
exports.custom = custom;
function custom(param, func) {
    return func(param);
}
exports.validators = {
    custom: {
        func: custom,
    },
};
