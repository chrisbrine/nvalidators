import { Sanitizers, SanitizerWithArgs, SanitizerWithoutArgs } from "../types";

export function add(value: string | number, min: number): number {
  return Number(value) + min;
}

export function subtract(value: string | number, min: number): number {
  return Number(value) - min;
}

export function multiply(value: string | number, min: number): number {
  return Number(value) * min;
}

export function divide(value: string | number, min: number): number {
  return Number(value) / min;
}

export function round(value: string | number): number {
  return Math.round(Number(value));
}

export function ceil(value: string | number): number {
  return Math.ceil(Number(value));
}

export function floor(value: string | number): number {
  return Math.floor(Number(value));
}

export function abs(value: string | number): number {
  return Math.abs(Number(value));
}

export function pow(value: string | number, power: number): number {
  return Math.pow(Number(value), power);
}

export function sqrt(value: string | number): number {
  return Math.sqrt(Number(value));
}

export function root(value: string | number, root: number): number {
  return Math.pow(Number(value), 1 / root);
}

export function toFixed(value: string | number, digits: number): number {
  return +(Number(value).toFixed(digits));
}

export function toMoney(value: string | number, currencyPrefix: string = "$ ", currencySuffix: string = "", thousandsSep: string = ",", decimalSep: string = ".", decimalDigits: number = 2): string {
  const parts = Number(value).toFixed(decimalDigits).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);
  return currencyPrefix + parts.join(decimalSep) + currencySuffix;
}

export function toPercentage(value: string | number, decimalDigits: number = 2): string {
  return (Number(value) * 100).toFixed(decimalDigits) + "%";
}

export const sanitizers: Sanitizers = {
  add: {
    func: add,
  } as SanitizerWithArgs,
  subtract: {
    func: subtract,
  } as SanitizerWithArgs,
  multiply: {
    func: multiply,
  } as SanitizerWithArgs,
  divide: {
    func: divide,
  } as SanitizerWithArgs,
  round: {
    func: round,
  } as SanitizerWithoutArgs,
  ceil: {
    func: ceil,
  } as SanitizerWithoutArgs,
  floor: {
    func: floor,
  } as SanitizerWithoutArgs,
  abs: {
    func: abs,
  } as SanitizerWithoutArgs,
  pow: {
    func: pow,
  } as SanitizerWithArgs,
  sqrt: {
    func: sqrt,
  } as SanitizerWithoutArgs,
  root: {
    func: root,
  } as SanitizerWithArgs,
  toFixed: {
    func: toFixed,
  } as SanitizerWithArgs,
  toMoney: {
    func: toMoney,
  } as SanitizerWithArgs,
  toPercentage: {
    func: toPercentage,
  } as SanitizerWithArgs,
};
