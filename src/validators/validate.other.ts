import { Validators, ValidatorWithArgs } from "../types";

type CustomFunction = (param: any) => boolean;

export function custom(param: any, func: CustomFunction): any {
  return func(param);
}

export const validators: Validators = {
  custom: {
    func: custom,
  } as ValidatorWithArgs,
};
