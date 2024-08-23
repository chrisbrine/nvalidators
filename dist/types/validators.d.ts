export type ValidatorFnWithArgs = (param: any, ...args: any) => boolean;
export type ValidatorFnWithoutArgs = (param: any) => boolean;
export interface ValidatorWithArgs {
    func: ValidatorFnWithArgs;
}
export interface ValidatorWithoutArgs {
    func: ValidatorFnWithoutArgs;
}
export type Validator = ValidatorWithArgs | ValidatorWithoutArgs;
export type Validators = {
    [key: string]: Validator;
};
