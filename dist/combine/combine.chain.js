"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chain = void 0;
const operators_1 = require("../operators");
const sanitizers_1 = require("../sanitizers");
const validators_1 = require("../validators");
const combine_handlers_1 = require("./combine.handlers");
const chain = (param, config) => {
    let stack = [];
    let result = param;
    let options = {};
    let setValue = (value) => {
        if (config === null || config === void 0 ? void 0 : config.setter) {
            config.setter(value);
            result = value;
        }
    };
    Object.keys(validators_1.validators).forEach(key => options[key] = (...args) => { (0, combine_handlers_1.validate)(key, result, stack, args, (config === null || config === void 0 ? void 0 : config.or) || false); return options; });
    if (config === null || config === void 0 ? void 0 : config.setter) {
        Object.keys(sanitizers_1.sanitizers).forEach(key => options[key] = (...args) => { (0, combine_handlers_1.sanitize)(key, result, args, setValue); return options; });
    }
    Object.keys(operators_1.operators).forEach(key => options[key] = () => { (0, combine_handlers_1.operator)(key, stack); return options; });
    options['result'] = () => result;
    options['done'] = () => (0, combine_handlers_1.resolve)(stack, (config === null || config === void 0 ? void 0 : config.or) || false);
    return options;
};
exports.chain = chain;
