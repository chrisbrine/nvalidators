import { OperatorParams } from "./operators";

// type ValidatorFn<paramType, argsType, returnType> = (param: paramType, args?: argsType) => returnType;
// type ValidatorFnReq<paramType, argsType, returnType> = (param: paramType, args: argsType) => returnType;
// type OperatorFn = (stack: OperatorParams) => null;

// export enum Type {
//   STRING = 'string',
//   NUMBER = 'number',
//   BOOLEAN = 'boolean',
//   ARRAY = 'array',
//   OBJECT = 'object',
// }

export type ValidatorFnWithArgs = (param: any, ...args: any) => boolean;
export type ValidatorFnWithoutArgs = (param: any) => boolean;

export interface ValidatorWithArgs {
  func: ValidatorFnWithArgs;
}

export interface ValidatorWithoutArgs {
  func: ValidatorFnWithoutArgs;
}

export type Validator = ValidatorWithArgs | ValidatorWithoutArgs;

// export interface Validator<paramType, argsType, returnType> {
//   func: ValidatorFn<paramType, argsType, returnType> | ValidatorFnReq<paramType, argsType, returnType> | OperatorFn;
//   args?: boolean;
//   // type?: Type;
//   sanitizer?: boolean;
//   requiredArg?: boolean;
// }

// export type Validators = Validator[];

export type Validators = {
  [key: string]: Validator;
}

