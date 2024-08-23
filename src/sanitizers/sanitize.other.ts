import { Sanitizers, SanitizerWithArgs } from "../types";

type SanitizeFunction = (param: any) => any;

export function customSanitizer(param: any, func: SanitizeFunction): any {
  return func(param);
}

export const sanitizers: Sanitizers = {
  customSanitizer: {
    func: customSanitizer,
  } as SanitizerWithArgs,
};
