import { Validators, ValidatorWithArgs } from "../types";

export function minNumber(param: string | number, min: number): boolean {
  const value = Number(param);
  if (isNaN(value)) {
    return false;
  }
  return value >= min;
}

export function maxNumber(param: string | number, max: number): boolean {
  const value = Number(param);
  if (isNaN(value)) {
    return false;
  }
  return value <= max;
}

export const validators: Validators = {
  minNumber: {
    func: minNumber,
  } as ValidatorWithArgs,
  maxNumber: {
    func: maxNumber,
  } as ValidatorWithArgs,
};
