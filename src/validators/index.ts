import { validators as validatorsTypes } from './validate.types';
import { validators as validatorsString } from './validate.string';
import { validators as validatorsNumbers } from './validate.numbers';
import { validators as validatorsOther } from './validate.other';
import { Validators } from '../types';

export const validators = {
  ...validatorsTypes,
  ...validatorsString,
  ...validatorsNumbers,
  ...validatorsOther,
};

export function addValidators(validateItems: Validators) {
  Object.keys(validateItems).forEach(key => {
    validators[key] = validateItems[key];
  });
}

export function deleteValidators(keys: string[]) {
  keys.forEach(key => {
    delete validators[key];
  });
}
