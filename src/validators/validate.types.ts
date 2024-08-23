import { Validators, ValidatorWithArgs, ValidatorWithoutArgs } from "../types";

function isString(param: any): boolean {
  return typeof param === 'string';
}

function isNumber(param: any): boolean {
  return typeof param === 'number' || !isNaN(Number(param));
}

function isBoolean(param: any): boolean {
  return typeof param === 'boolean' || param.toLowerCase() === 'true' || param.toLowerCase() === 'false';
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
};
