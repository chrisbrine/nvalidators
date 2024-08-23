import { Sanitizers, SanitizerWithArgs, SanitizerWithoutArgs } from "../types";

function add(value: string | number, min: number): number {
  return Number(value) + min;
}

function subtract(value: string | number, min: number): number {
  return Number(value) - min;
}

function multiply(value: string | number, min: number): number {
  return Number(value) * min;
}

function divide(value: string | number, min: number): number {
  return Number(value) / min;
}

function round(value: string | number): number {
  return Math.round(Number(value));
}

function ceil(value: string | number): number {
  return Math.ceil(Number(value));
}

function floor(value: string | number): number {
  return Math.floor(Number(value));
}

function abs(value: string | number): number {
  return Math.abs(Number(value));
}

function pow(value: string | number, power: number): number {
  return Math.pow(Number(value), power);
}

function sqrt(value: string | number): number {
  return Math.sqrt(Number(value));
}

function toFixed(value: string | number, digits: number): number {
  return +(Number(value).toFixed(digits));
}

function toMoney(value: string | number, currencyPrefix: string = "$ ", currencySuffix: string = "", thousandsSep: string = ",", decimalSep: string = ".", decimalDigits: number = 2): string {
  const parts = Number(value).toFixed(decimalDigits).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);
  return currencyPrefix + parts.join(decimalSep) + currencySuffix;
}

function toPercentage(value: string | number, decimalDigits: number = 2): string {
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
