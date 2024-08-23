"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.add = exports.stack = exports.chain = void 0;
var combine_1 = require("./combine");
Object.defineProperty(exports, "chain", { enumerable: true, get: function () { return combine_1.chain; } });
Object.defineProperty(exports, "stack", { enumerable: true, get: function () { return combine_1.stack; } });
const validators_1 = require("./validators");
const sanitizers_1 = require("./sanitizers");
const operators_1 = require("./operators");
exports.add = {
    validators: validators_1.addValidators,
    sanitizers: sanitizers_1.addSanitizers,
    operators: operators_1.addOperators,
};
exports.del = {
    validators: validators_1.deleteValidators,
    sanitizers: sanitizers_1.deleteSanitizers,
    operators: operators_1.deleteOperators,
};
