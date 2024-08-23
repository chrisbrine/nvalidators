import { SanitizerSetter } from "../types";
export declare const validate: (name: string, param: any, stack: boolean[], args: any[], useOr: boolean) => void;
export declare function sanitize(name: string, param: any, args: any[], setter: SanitizerSetter): void;
export declare function operator(name: string, stack: boolean[]): void;
export declare function resolve(stack: boolean[], useOr: boolean): boolean;
