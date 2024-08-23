import { validators } from "../validators";
import { sanitizers } from "../sanitizers";
import { operators } from "../operators";
import { operator, resolve, sanitize, validate } from "./combine.handlers";
import { HandlerConfig } from "../types/handler";
import { SanitizerSetter, StackProcessor, StackProcessorItem } from "../types";

export function stack(param: any, processor: StackProcessor, config?: HandlerConfig): boolean {
  const resultStack: boolean[] = [];
  let result = param;
  const setValue: SanitizerSetter = (value: any) => {
    if (config?.setter) {
      config.setter(value);
      result = value;
    }
  }
  processor.forEach(([key, ...args]: StackProcessorItem) => {
    if (validators[key]) {
      validate(key, param, resultStack, args, config?.or || false);
    } else if (config?.setter && sanitizers[key]) {
      sanitize(key, param, args, setValue);
    } else if (operators[key]) {
      operator(key, resultStack);
    } else {
      throw new Error(`Processor ${key} does not exist`);
    }
  });
  return resolve(resultStack, config?.or || false);
};
