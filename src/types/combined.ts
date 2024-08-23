// import { Operator, Operators } from "./operators";
// import { Sanitizer, Sanitizers } from "./sanitizers";
// import { Validator, Validators } from "./validators";

export interface ICombined {
  [key: string]: any;
};

// export type Processor = Validator | Sanitizer | Operator;

// export type Processors = Validators | Sanitizers | Operators;

export type StackProcessorItem = [string, ...any];

export type StackProcessor = StackProcessorItem[];
