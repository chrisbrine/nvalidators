import { operators } from "../operators";
import { sanitizers } from "../sanitizers";
import { validators } from "../validators";
import { SanitizerFnWithArgs, SanitizerFnWithoutArgs, SanitizerSetter, ValidatorFnWithArgs, ValidatorFnWithoutArgs } from "../types";

export const validate = (name: string, param: any, stack: boolean[], args: any[], useOr: boolean) => {
  if (!useOr && stack.length > 0 && !stack[stack.length - 1]) {
    if (stack.length > 1) {
      stack.shift();
    }
    return;
  }
  if (!validators[name]) {
    throw new Error(`Validator ${name} does not exist`);
  }
  if (args && args.length > 0) {
    stack.push((validators[name].func as ValidatorFnWithArgs)(param, ...args));
  } else {
    stack.push((validators[name].func as ValidatorFnWithoutArgs)(param));
  }
  if (useOr && stack.length > 1) {
    stack[stack.length - 2] = stack[stack.length - 2] || stack[stack.length - 1];
    stack.pop();
  }
  if (!useOr && stack.length > 2) {
    stack.shift();
  } else if (useOr && stack.length > 3) {
    const firstResult = stack.shift();
    if (firstResult) {
      stack[0] = true;
    }
  }
}

export function sanitize(name: string, param: any, args: any[], setter: SanitizerSetter) {
  if (!sanitizers[name]) {
    throw new Error(`Sanitizer ${name} does not exist`);
  }
  if (args && args.length > 0) {
    setter((sanitizers[name].func as SanitizerFnWithArgs)(param, ...args));
  } else {
    setter((sanitizers[name].func as SanitizerFnWithoutArgs)(param));
  }
}

export function operator(name: string, stack: boolean[]) {
  if (!operators[name]) {
    throw new Error(`Operator ${name} does not exist`);
  }
  operators[name].func(stack);
}

export function resolve(stack: boolean[], useOr: boolean): boolean {
  if (stack.length > 0) {
    let result: boolean = stack.pop() || false;
    while (stack.length > 0) {
      if (useOr) {
        result = result || stack.pop() || false;
      } else {
        result = (result && stack.pop()) || false;
      }
    }
    return result;
  }
  return false;
}
