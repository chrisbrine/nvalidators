"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizers = void 0;
exports.toString = toString;
exports.toNumber = toNumber;
exports.toBoolean = toBoolean;
exports.toDate = toDate;
exports.toJson = toJson;
function toString(param) {
    return param.toString();
}
function toNumber(param) {
    return Number(param);
}
function toBoolean(param) {
    return Boolean(param);
}
function toDate(param) {
    return new Date(param);
}
function toJson(param) {
    return JSON.parse(param);
}
exports.sanitizers = {
    toString: {
        func: toString,
        sanitizer: true,
    },
    toNumber: {
        func: toNumber,
        sanitizer: true,
    },
    toBoolean: {
        func: toBoolean,
        sanitizer: true,
    },
    toDate: {
        func: toDate,
        sanitizer: true,
    },
    toJson: {
        func: toJson,
        sanitizer: true,
    },
};
