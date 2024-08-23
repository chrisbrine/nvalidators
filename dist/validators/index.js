"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validators = void 0;
exports.addValidators = addValidators;
exports.deleteValidators = deleteValidators;
const validate_types_1 = require("./validate.types");
const validate_string_1 = require("./validate.string");
const validate_numbers_1 = require("./validate.numbers");
const validate_other_1 = require("./validate.other");
exports.validators = Object.assign(Object.assign(Object.assign(Object.assign({}, validate_types_1.validators), validate_string_1.validators), validate_numbers_1.validators), validate_other_1.validators);
function addValidators(validateItems) {
    Object.keys(validateItems).forEach(key => {
        exports.validators[key] = validateItems[key];
    });
}
function deleteValidators(keys) {
    keys.forEach(key => {
        delete exports.validators[key];
    });
}
