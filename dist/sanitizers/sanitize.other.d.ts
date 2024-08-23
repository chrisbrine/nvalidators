import { Sanitizers } from "../types";
type SanitizeFunction = (param: any) => any;
export declare function customSanitizer(param: any, func: SanitizeFunction): any;
export declare const sanitizers: Sanitizers;
export {};
