import { Operators } from '../types';
import { operators as defaultOperators } from './operators';

export const operators: Operators = defaultOperators;

export function addOperators(newOperators: Operators) {
  Object.assign(operators, newOperators);
}

export function deleteOperators(names: string[]) {
  names.forEach(name => {
    delete operators[name];
  });
}
