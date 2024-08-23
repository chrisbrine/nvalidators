import { Validators, ValidatorWithArgs, ValidatorWithoutArgs } from "../types";

export function notEmpty(param: string): boolean {
  return param.length > 0;
}

export function minLength(param: string, min: number): boolean {
  return param.length >= min;
}

export function maxLength(param: string, max: number): boolean {
  return param.length <= max;
}

export function betweenLength(param: string, min: number, max: number): boolean {
  return param.length >= min && param.length <= max;
}

export function isEmail(param: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(param);
}

export function isUrl(param: string): boolean {
  return /^(http|https):\/\/[^ "]+$/.test(param);
}

export function isUuid(param: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(param);
}

export function isDate(param: string): boolean {
  return !isNaN(Date.parse(param));
}

export function isUSPhoneNumber(param: string): boolean {
  // allow formats: 1234567890, 123-456-7890, 123.456.7890, 123 456 7890, (123) 456 7890, (123) 456-7890, (123)456-7890
  return /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/.test(param);
}

export function isInternationalPhoneNumber(param: string): boolean {
  // start with + and then allow any number of digits, spaces, and dashes
  return /^\+[\d\s-]+$/.test(param);
}

export function isPhoneNumber(param: string): boolean {
  return isUSPhoneNumber(param) || isInternationalPhoneNumber(param);
}

export function regex(param: string, pattern: string): boolean {
  return new RegExp(pattern).test(param);
}

export const validators: Validators = {
  notEmpty: {
    func: notEmpty
  } as ValidatorWithoutArgs,
  minLength: {
    func: minLength,
  } as ValidatorWithArgs,
  maxLength: {
    func: maxLength,
  } as ValidatorWithArgs,
  betweenLength: {
    func: betweenLength,
  } as ValidatorWithArgs,
  isEmail: {
    func: isEmail
  } as ValidatorWithoutArgs,
  isUrl: {
    func: isUrl
  } as ValidatorWithoutArgs,
  isUuid: {
    func: isUuid
  } as ValidatorWithoutArgs,
  isDate: {
    func: isDate
  } as ValidatorWithoutArgs,
  isUSPhoneNumber: {
    func: isUSPhoneNumber
  } as ValidatorWithoutArgs,
  isInternationalPhoneNumber: {
    func: isInternationalPhoneNumber
  } as ValidatorWithoutArgs,
  isPhoneNumber: {
    func: isPhoneNumber
  } as ValidatorWithoutArgs,
  regex: {
    func: regex,
  } as ValidatorWithArgs,
};
