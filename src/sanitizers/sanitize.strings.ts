import { Sanitizers, SanitizerWithArgs, SanitizerWithoutArgs } from "../types";

export function prefix(param: string, prefix: string): string {
  return prefix + param;
}

export function suffix(param: string, suffix: string): string {
  return param + suffix;
}

export function insert(param: string, value: string, index: number): string {
  return param.slice(0, index) + value + param.slice(index);
}

export function trim(param: string): string {
  return param.trim();
}

export function toLowerCase(param: string): string {
  return param.toLowerCase();
}

export function toUpperCase(param: string): string {
  return param.toUpperCase();
}

export function toCapitalize(param: string): string {
  return param.charAt(0).toUpperCase() + param.slice(1);
}

export function toCapitalizeWords(param: string): string {
  return param.split(' ').map((word) => toCapitalize(word)).join(' ');
}

export function toSlug(param: string): string {
  return param.toLowerCase().replace(/ /g, '-');
}

export function toSnakeCase(param: string): string {
  return param.toLowerCase().replace(/ /g, '_');
}

export function toCamelCase(param: string): string {
  return param.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}

export function replace(param: string, searchValue: string|string[], replaceValue: string): string {
  const searchValues = Array.isArray(searchValue) ? searchValue : [searchValue];
  let result = param;
  searchValues.forEach((value) => {
    result = result.replace(value, replaceValue);
  });
  return result;
}

export function escape(param: string): string {
  return param.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .replace(/\\/g, '&#x5C;')
    .replace(/`/g, '&#96;');
}

export function blacklist(param: string, blacklist: string[]): string {
  let result = param;
  blacklist.forEach((value) => {
    result = result.replace(value, '');
  });
  return result;
}

export const sanitizers: Sanitizers = {
  prefix: {
    func: prefix,
  } as SanitizerWithArgs,
  suffix: {
    func: suffix,
  } as SanitizerWithArgs,
  insert: {
    func: insert,
  } as SanitizerWithArgs,
  trim: {
    func: trim,
  } as SanitizerWithoutArgs,
  toLowerCase: {
    func: toLowerCase,
  } as SanitizerWithoutArgs,
  toUpperCase: {
    func: toUpperCase,
  } as SanitizerWithoutArgs,
  toCapitalize: {
    func: toCapitalize,
  } as SanitizerWithoutArgs,
  toCapitalizeWords: {
    func: toCapitalizeWords,
  } as SanitizerWithoutArgs,
  toSlug: {
    func: toSlug,
  } as SanitizerWithoutArgs,
  toSnakeCase: {
    func: toSnakeCase,
  } as SanitizerWithoutArgs,
  toCamelCase: {
    func: toCamelCase,
  } as SanitizerWithoutArgs,
  replace: {
    func: replace,
  } as SanitizerWithArgs,
  escape: {
    func: escape,
  } as SanitizerWithoutArgs,
  blacklist: {
    func: blacklist,
  } as SanitizerWithArgs,
};
