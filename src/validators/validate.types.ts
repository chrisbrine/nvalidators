import { Validators, ValidatorWithArgs, ValidatorWithoutArgs } from "../types";

function isString(param: any): boolean {
  return typeof param === 'string';
}

function isNumber(param: any): boolean {
  return typeof param === 'number';
}

function isBoolean(param: any): boolean {
  return typeof param === 'boolean';
}

function isArray(param: any): boolean {
  return Array.isArray(param);
}

function isObject(param: any, objectName?: string): boolean {
  if (objectName) {
    return Object.prototype.toString.call(param).toLowerCase() === `[object ${objectName.toLowerCase()}]`;
  }
  return typeof param === 'object';
}

function isBooleanString(param: string): boolean {
  return param.toLowerCase() === 'true' || param.toLowerCase() === 'false';
}

function isNumberString(param: string): boolean {
  return !isNaN(Number(param));
}

export const validators: Validators = {
  isString: {
    func: isString
  } as ValidatorWithoutArgs,
  isNumber: {
    func: isNumber
  } as ValidatorWithoutArgs,
  isBoolean: {
    func: isBoolean
  } as ValidatorWithoutArgs,
  isArray: {
    func: isArray
  } as ValidatorWithoutArgs,
  isObject: {
    func: isObject,
  } as ValidatorWithArgs,
  isBooleanString: {
    func: isBooleanString
  } as ValidatorWithoutArgs,
  isNumberString: {
    func: isNumberString
  } as ValidatorWithoutArgs
};
