"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validators = void 0;
exports.minNumber = minNumber;
exports.maxNumber = maxNumber;
function minNumber(param, min) {
    const value = Number(param);
    if (isNaN(value)) {
        return false;
    }
    return value >= min;
}
function maxNumber(param, max) {
    const value = Number(param);
    if (isNaN(value)) {
        return false;
    }
    return value <= max;
}
exports.validators = {
    minNumber: {
        func: minNumber,
        args: true,
        requiredArg: true,
    },
    maxNumber: {
        func: maxNumber,
        args: true,
        requiredArg: true,
    },
};
