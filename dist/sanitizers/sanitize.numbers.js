"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizers = void 0;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.round = round;
exports.ceil = ceil;
exports.floor = floor;
exports.abs = abs;
exports.pow = pow;
exports.sqrt = sqrt;
exports.root = root;
exports.toFixed = toFixed;
exports.toMoney = toMoney;
exports.toPercentage = toPercentage;
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
function root(value, root) {
    return Math.pow(Number(value), 1 / root);
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
    },
    subtract: {
        func: subtract,
    },
    multiply: {
        func: multiply,
    },
    divide: {
        func: divide,
    },
    round: {
        func: round,
    },
    ceil: {
        func: ceil,
    },
    floor: {
        func: floor,
    },
    abs: {
        func: abs,
    },
    pow: {
        func: pow,
    },
    sqrt: {
        func: sqrt,
    },
    root: {
        func: root,
    },
    toFixed: {
        func: toFixed,
    },
    toMoney: {
        func: toMoney,
    },
    toPercentage: {
        func: toPercentage,
    },
};
