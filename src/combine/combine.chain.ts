import { operators } from "../operators";
import { sanitizers } from "../sanitizers";
import { validators } from "../validators";
import { SanitizerSetter, HandlerConfig, ICombined } from "../types";
import { operator, resolve, sanitize, validate } from "./combine.handlers";

export const chain = (param: any, config?: HandlerConfig): ICombined => {
  // let success: boolean = true;
  let stack: boolean[] = [];
  let result = param;
  let options: ICombined = {};
  let setValue: SanitizerSetter = (value: any) => {
    if (config?.setter) {
      config.setter(value);
      result = value;
    }
  };
  Object.keys(validators).forEach(key => 
    options[key] = (...args: any) => { validate(key, result, stack, args, config?.or || false); return options; }
  );
  if (config?.setter) {
    Object.keys(sanitizers).forEach(key =>
      options[key] = (...args: any) => { sanitize(key, result, args, setValue); return options; }
    );
  }
  Object.keys(operators).forEach(key => 
    options[key] = () => { operator(key, stack); return options; }
  );

  options['result'] = () => result;
  options['done'] = () => resolve(stack, config?.or || false);

  return options;
};