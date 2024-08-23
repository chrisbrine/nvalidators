import { Sanitizers } from '../types';
export declare const sanitizers: {
    [x: string]: import("../types").Sanitizer;
};
export declare function addSanitizers(sanitizerItems: Sanitizers): void;
export declare function deleteSanitizers(name: string[]): void;
