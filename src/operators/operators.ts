import { OperatorParams, Operators } from "../types";

export function operatorOr(stack: OperatorParams) {
  const [a, b] = [stack.pop(), stack.pop()];
  if (a === undefined || b === undefined) {
    throw new Error('Invalid operator');
  }
  stack.push(a || b);
}

export function operatorAnd(stack: OperatorParams) {
  const [a, b] = [stack.pop(), stack.pop()];
  if (a === undefined || b === undefined) {
    throw new Error('Invalid operator');
  }
  stack.push(a && b);
}

export function operatorNot(stack: OperatorParams) {
  const a = stack.pop();
  if (a === undefined) {
    throw new Error('Invalid operator');
  }
  stack.push(!a);
}

export const operators: Operators = {
  operatorOr: {
    func: operatorOr,
  },
  operatorAnd: {
    func: operatorAnd,
  },
  operatorNot: {
    func: operatorNot,
  },
};
