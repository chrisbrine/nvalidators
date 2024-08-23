import { Sanitizers, SanitizerWithoutArgs } from "../types";

export function toString(param: any): string {
  return param.toString();
}

export function toNumber(param: any): number {
  return Number(param);
}

export function toBoolean(param: any): boolean {
  return Boolean(param);
}

export function toDate(param: any): Date {
  return new Date(param);
}

export function toJson(param: any): any {
  return JSON.parse(param);
}

export const sanitizers: Sanitizers = {
  toString: {
    func: toString,
    sanitizer: true,
  } as SanitizerWithoutArgs,
  toNumber: {
    func: toNumber,
    sanitizer: true,
  } as SanitizerWithoutArgs,
  toBoolean: {
    func: toBoolean,
    sanitizer: true,
  } as SanitizerWithoutArgs,
  toDate: {
    func: toDate,
    sanitizer: true,
  } as SanitizerWithoutArgs,
  toJson: {
    func: toJson,
    sanitizer: true,
  } as SanitizerWithoutArgs,
};
