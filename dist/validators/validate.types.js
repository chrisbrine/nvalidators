"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validators = void 0;
function isString(param) {
    return typeof param === 'string';
}
function isNumber(param) {
    return typeof param === 'number';
}
function isBoolean(param) {
    return typeof param === 'boolean';
}
function isArray(param) {
    return Array.isArray(param);
}
function isObject(param, objectName) {
    if (objectName) {
        return Object.prototype.toString.call(param).toLowerCase() === `[object ${objectName.toLowerCase()}]`;
    }
    return typeof param === 'object';
}
function isBooleanString(param) {
    return param.toLowerCase() === 'true' || param.toLowerCase() === 'false';
}
function isNumberString(param) {
    return !isNaN(Number(param));
}
exports.validators = {
    isString: {
        func: isString
    },
    isNumber: {
        func: isNumber
    },
    isBoolean: {
        func: isBoolean
    },
    isArray: {
        func: isArray
    },
    isObject: {
        func: isObject,
    },
    isBooleanString: {
        func: isBooleanString
    },
    isNumberString: {
        func: isNumberString
    }
};
