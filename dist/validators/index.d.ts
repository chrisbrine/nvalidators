import { Validators } from '../types';
export declare const validators: {
    [x: string]: import("../types").Validator<string, any, boolean> | import("../types").Validator<string | number, number, boolean>;
};
export declare function addValidators(validateItems: Validators<any, any, boolean>): void;
export declare function deleteValidators(keys: string[]): void;
