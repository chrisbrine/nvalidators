import { Validators } from '../types';
export declare const sanitizers: {
    [x: string]: import("../types").Validator<string, any, string> | import("../types").Validator<string | number, any, any> | import("../types").Validator<any, undefined, any>;
};
export declare function addSanitizers(sanitizerItems: Validators<any, any, any>): void;
export declare function deleteSanitizers(name: string): void;
