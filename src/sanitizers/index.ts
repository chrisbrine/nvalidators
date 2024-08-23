import { sanitizers as stringSanitizers } from './sanitize.strings';
import { sanitizers as numberSanitizers } from './sanitize.numbers';
import { sanitizers as convertSanitizers } from './sanitize.convert';
import { sanitizers as customSanitizers } from './sanitize.other';
import { Sanitizers } from '../types';

export const sanitizers = {
  ...stringSanitizers,
  ...numberSanitizers,
  ...convertSanitizers,
  ...customSanitizers,
};

export function addSanitizers(sanitizerItems: Sanitizers) {
  Object.assign(sanitizers, sanitizerItems);
}

export function deleteSanitizers(name: string[]) {
  name.forEach(name => {
    delete sanitizers[name];
  });
}
