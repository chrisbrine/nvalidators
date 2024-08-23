type ValidatorFn<paramType, argsType, returnType> = (param: paramType, args?: argsType) => returnType;
type ValidatorFnReq<paramType, argsType, returnType> = (param: paramType, args: argsType) => returnType;
export declare enum Type {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    ARRAY = "array",
    OBJECT = "object"
}
export interface Validator<paramType, argsType, returnType> {
    func: ValidatorFn<paramType, argsType, returnType> | ValidatorFnReq<paramType, argsType, returnType>;
    args?: boolean;
    type?: Type;
    sanitizer?: boolean;
    requiredArg?: boolean;
}
export type Validators<paramType, argsType, returnType> = {
    [key: string]: Validator<paramType, argsType, returnType>;
};
export {};
