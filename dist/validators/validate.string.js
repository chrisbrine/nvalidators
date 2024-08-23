"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validators = void 0;
exports.notEmpty = notEmpty;
exports.minLength = minLength;
exports.maxLength = maxLength;
exports.isEmail = isEmail;
exports.isUrl = isUrl;
exports.isUuid = isUuid;
exports.isDate = isDate;
exports.isUSPhoneNumber = isUSPhoneNumber;
exports.isInternationalPhoneNumber = isInternationalPhoneNumber;
function notEmpty(param) {
    return param.length > 0;
}
function minLength(param, min) {
    return param.length >= min;
}
function maxLength(param, max) {
    return param.length <= max;
}
function isEmail(param) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(param);
}
function isUrl(param) {
    return /^(http|https):\/\/[^ "]+$/.test(param);
}
function isUuid(param) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(param);
}
function isDate(param) {
    return !isNaN(Date.parse(param));
}
function isUSPhoneNumber(param) {
    return /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/.test(param);
}
function isInternationalPhoneNumber(param) {
    return /^\+[\d\s-]+$/.test(param);
}
exports.validators = {
    notEmpty: {
        func: notEmpty
    },
    minLength: {
        func: minLength,
        args: true,
        requiredArg: true,
    },
    maxLength: {
        func: maxLength,
        args: true,
        requiredArg: true,
    },
    isEmail: {
        func: isEmail
    },
    isUrl: {
        func: isUrl
    },
    isUuid: {
        func: isUuid
    },
    isDate: {
        func: isDate
    },
    isUSPhoneNumber: {
        func: isUSPhoneNumber
    },
    isInternationalPhoneNumber: {
        func: isInternationalPhoneNumber
    },
};
