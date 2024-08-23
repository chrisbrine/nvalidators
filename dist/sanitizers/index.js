"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizers = void 0;
exports.addSanitizers = addSanitizers;
exports.deleteSanitizers = deleteSanitizers;
const sanitize_strings_1 = require("./sanitize.strings");
const sanitize_numbers_1 = require("./sanitize.numbers");
const sanitize_convert_1 = require("./sanitize.convert");
exports.sanitizers = Object.assign(Object.assign(Object.assign({}, sanitize_strings_1.sanitizers), sanitize_numbers_1.sanitizers), sanitize_convert_1.sanitizers);
function addSanitizers(sanitizerItems) {
    Object.assign(exports.sanitizers, sanitizerItems);
}
function deleteSanitizers(name) {
    delete exports.sanitizers[name];
}
