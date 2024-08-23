"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizers = void 0;
function add(value, min) {
    return Number(value) + min;
}
function subtract(value, min) {
    return Number(value) - min;
}
function multiply(value, min) {
    return Number(value) * min;
}
function divide(value, min) {
    return Number(value) / min;
}
function round(value) {
    return Math.round(Number(value));
}
function ceil(value) {
    return Math.ceil(Number(value));
}
function floor(value) {
    return Math.floor(Number(value));
}
function abs(value) {
    return Math.abs(Number(value));
}
function pow(value, power) {
    return Math.pow(Number(value), power);
}
function sqrt(value) {
    return Math.sqrt(Number(value));
}
function toFixed(value, digits) {
    return +(Number(value).toFixed(digits));
}
function toMoney(value, currencyPrefix = "$ ", currencySuffix = "", thousandsSep = ",", decimalSep = ".", decimalDigits = 2) {
    const parts = Number(value).toFixed(decimalDigits).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);
    return currencyPrefix + parts.join(decimalSep) + currencySuffix;
}
function toPercentage(value, decimalDigits = 2) {
    return (Number(value) * 100).toFixed(decimalDigits) + "%";
}
exports.sanitizers = {
    add: {
        func: add,
        sanitizer: true,
        args: true,
        requiredArg: true,
    },
    subtract: {
        func: subtract,
        sanitizer: true,
        args: true,
        requiredArg: true,
    },
    multiply: {
        func: multiply,
        sanitizer: true,
        args: true,
        requiredArg: true,
    },
    divide: {
        func: divide,
        sanitizer: true,
        args: true,
        requiredArg: true,
    },
    round: {
        func: round,
        sanitizer: true,
    },
    ceil: {
        func: ceil,
        sanitizer: true,
    },
    floor: {
        func: floor,
        sanitizer: true,
    },
    abs: {
        func: abs,
        sanitizer: true,
    },
    pow: {
        func: pow,
        sanitizer: true,
        args: true,
        requiredArg: true,
    },
    sqrt: {
        func: sqrt,
        sanitizer: true,
    },
    toFixed: {
        func: toFixed,
        sanitizer: true,
        args: true,
        requiredArg: true,
    },
    toMoney: {
        func: toMoney,
        sanitizer: true,
        args: true,
    },
    toPercentage: {
        func: toPercentage,
        sanitizer: true,
    },
};
