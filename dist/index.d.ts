import { addValidators, deleteValidators } from './validators';
import { addSanitizers, deleteSanitizers } from './sanitizers';
export declare const run: (param: any) => {
    [x: string]: Function;
};
export declare const add: {
    validators: typeof addValidators;
    sanitizers: typeof addSanitizers;
};
export declare const del: {
    validators: typeof deleteValidators;
    sanitizers: typeof deleteSanitizers;
};
