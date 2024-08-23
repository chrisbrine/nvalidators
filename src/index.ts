export { chain, stack } from './combine';

import { addValidators, deleteValidators } from './validators';
import { addSanitizers, deleteSanitizers } from './sanitizers';
import { addOperators, deleteOperators } from './operators';

export const add = {
  validators: addValidators,
  sanitizers: addSanitizers,
  operators: addOperators,
};

export const del = {
  validators: deleteValidators,
  sanitizers: deleteSanitizers,
  operators: deleteOperators,
};

export { StackProcessor, StackProcessorItem, ICombined, HandlerConfig } from './types';
