"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operators = void 0;
exports.operatorOr = operatorOr;
exports.operatorAnd = operatorAnd;
exports.operatorNot = operatorNot;
function operatorOr(stack) {
    const [a, b] = [stack.pop(), stack.pop()];
    if (a === undefined || b === undefined) {
        throw new Error('Invalid operator');
    }
    stack.push(a || b);
}
function operatorAnd(stack) {
    const [a, b] = [stack.pop(), stack.pop()];
    if (a === undefined || b === undefined) {
        throw new Error('Invalid operator');
    }
    stack.push(a && b);
}
function operatorNot(stack) {
    const a = stack.pop();
    if (a === undefined) {
        throw new Error('Invalid operator');
    }
    stack.push(!a);
}
exports.operators = {
    operatorOr: {
        func: operatorOr,
    },
    operatorAnd: {
        func: operatorAnd,
    },
    operatorNot: {
        func: operatorNot,
    },
};
