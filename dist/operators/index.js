"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operators = void 0;
exports.addOperators = addOperators;
exports.deleteOperators = deleteOperators;
const operators_1 = require("./operators");
exports.operators = operators_1.operators;
function addOperators(newOperators) {
    Object.assign(exports.operators, newOperators);
}
function deleteOperators(names) {
    names.forEach(name => {
        delete exports.operators[name];
    });
}
