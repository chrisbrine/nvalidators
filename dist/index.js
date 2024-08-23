"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.add = exports.run = void 0;
const combine_1 = require("./combine");
const validators_1 = require("./validators");
const sanitizers_1 = require("./sanitizers");
const run = (param) => (Object.assign({}, ((0, combine_1.handle)(param))));
exports.run = run;
exports.add = {
    validators: validators_1.addValidators,
    sanitizers: sanitizers_1.addSanitizers,
};
exports.del = {
    validators: validators_1.deleteValidators,
    sanitizers: sanitizers_1.deleteSanitizers,
};
