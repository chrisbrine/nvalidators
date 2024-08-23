export type SanitizerSetter = (param: any) => void;
export type SanitizerFnWithoutArgs = (params: any) => any;
export type SanitizerFnWithArgs = (params: any, ...args: any) => any;
export interface SanitizerWithoutArgs {
    func: SanitizerFnWithoutArgs;
}
export interface SanitizerWithArgs {
    func: SanitizerFnWithArgs;
}
export type Sanitizer = SanitizerWithoutArgs | SanitizerWithArgs;
export type Sanitizers = {
    [key: string]: Sanitizer;
};
