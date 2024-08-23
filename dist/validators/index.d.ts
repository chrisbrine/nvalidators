import { Validators } from '../types';
export declare const validators: {
    [x: string]: import("../types").Validator;
};
export declare function addValidators(validateItems: Validators): void;
export declare function deleteValidators(keys: string[]): void;
