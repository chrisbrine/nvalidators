import { Validators } from "../types";
export declare function toString(param: any): string;
export declare function toNumber(param: any): number;
export declare function toBoolean(param: any): boolean;
export declare function toDate(param: any): Date;
export declare function toJson(param: any): any;
export declare const sanitizers: Validators<any, undefined, any>;
