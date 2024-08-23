"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = void 0;
const sanitizers_1 = require("../sanitizers");
const validators_1 = require("../validators");
const validate = (success, params, Validator, args) => {
    if (!success) {
        return false;
    }
    if (Validator.args && Validator.requiredArg && !args) {
        throw new Error(`Argument is required for ${Validator.func.name}`);
    }
    return Validator.func(params, args);
};
function sanitize(params, Validator, args) {
    if (Validator.args && Validator.requiredArg && !args) {
        throw new Error(`Argument is required for ${Validator.func.name}`);
    }
    return Validator.func(params, args);
}
const handle = (param) => {
    let success = true;
    const funcs = {
        or: () => success = true,
        not: () => success = !success,
    };
    Object.keys(validators_1.validators).forEach(key => {
        if (validators_1.validators[key].args) {
            funcs[key] = (args) => success = validate(success, param, validators_1.validators[key], args);
        }
        else {
            funcs[key] = () => success = validate(success, param, validators_1.validators[key]);
        }
    });
    Object.keys(sanitizers_1.sanitizers).forEach(key => {
        if (sanitizers_1.sanitizers[key].args) {
            funcs[key] = (args) => sanitize(param, sanitizers_1.sanitizers[key], args);
        }
        else {
            funcs[key] = () => sanitize(param, sanitizers_1.sanitizers[key]);
        }
    });
    return funcs;
};
exports.handle = handle;
