"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stack = stack;
const validators_1 = require("../validators");
const sanitizers_1 = require("../sanitizers");
const operators_1 = require("../operators");
const combine_handlers_1 = require("./combine.handlers");
function stack(param, processor, config) {
    const resultStack = [];
    let result = param;
    const setValue = (value) => {
        if (config === null || config === void 0 ? void 0 : config.setter) {
            config.setter(value);
            result = value;
        }
    };
    processor.forEach(([key, ...args]) => {
        if (validators_1.validators[key]) {
            (0, combine_handlers_1.validate)(key, param, resultStack, args, (config === null || config === void 0 ? void 0 : config.or) || false);
        }
        else if ((config === null || config === void 0 ? void 0 : config.setter) && sanitizers_1.sanitizers[key]) {
            (0, combine_handlers_1.sanitize)(key, param, args, setValue);
        }
        else if (operators_1.operators[key]) {
            (0, combine_handlers_1.operator)(key, resultStack);
        }
        else {
            throw new Error(`Processor ${key} does not exist`);
        }
    });
    return (0, combine_handlers_1.resolve)(resultStack, (config === null || config === void 0 ? void 0 : config.or) || false);
}
;
