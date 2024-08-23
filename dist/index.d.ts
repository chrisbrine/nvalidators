export { chain, stack } from './combine';
import { addValidators, deleteValidators } from './validators';
import { addSanitizers, deleteSanitizers } from './sanitizers';
import { addOperators, deleteOperators } from './operators';
export declare const add: {
    validators: typeof addValidators;
    sanitizers: typeof addSanitizers;
    operators: typeof addOperators;
};
export declare const del: {
    validators: typeof deleteValidators;
    sanitizers: typeof deleteSanitizers;
    operators: typeof deleteOperators;
};
export { StackProcessor, StackProcessorItem, ICombined, HandlerConfig } from './types';
