"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
exports.sanitize = sanitize;
exports.operator = operator;
exports.resolve = resolve;
const operators_1 = require("../operators");
const sanitizers_1 = require("../sanitizers");
const validators_1 = require("../validators");
const validate = (name, param, stack, args, useOr) => {
    if (!useOr && stack.length > 0 && !stack[stack.length - 1]) {
        if (stack.length > 1) {
            stack.shift();
        }
        return;
    }
    if (!validators_1.validators[name]) {
        throw new Error(`Validator ${name} does not exist`);
    }
    if (args && args.length > 0) {
        stack.push(validators_1.validators[name].func(param, ...args));
    }
    else {
        stack.push(validators_1.validators[name].func(param));
    }
    if (useOr && stack.length > 1) {
        stack[stack.length - 2] = stack[stack.length - 2] || stack[stack.length - 1];
        stack.pop();
    }
    if (!useOr && stack.length > 2) {
        stack.shift();
    }
    else if (useOr && stack.length > 3) {
        const firstResult = stack.shift();
        if (firstResult) {
            stack[0] = true;
        }
    }
};
exports.validate = validate;
function sanitize(name, param, args, setter) {
    if (!sanitizers_1.sanitizers[name]) {
        throw new Error(`Sanitizer ${name} does not exist`);
    }
    if (args && args.length > 0) {
        setter(sanitizers_1.sanitizers[name].func(param, ...args));
    }
    else {
        setter(sanitizers_1.sanitizers[name].func(param));
    }
}
function operator(name, stack) {
    if (!operators_1.operators[name]) {
        throw new Error(`Operator ${name} does not exist`);
    }
    operators_1.operators[name].func(stack);
}
function resolve(stack, useOr) {
    if (stack.length > 0) {
        let result = stack.pop() || false;
        while (stack.length > 0) {
            if (useOr) {
                result = result || stack.pop() || false;
            }
            else {
                result = (result && stack.pop()) || false;
            }
        }
        return result;
    }
    return false;
}
