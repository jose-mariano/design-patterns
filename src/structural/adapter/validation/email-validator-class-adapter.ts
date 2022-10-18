import { EmailValidatorProtocol } from '.';

import isEmail from 'validator/lib/isEmail';

export class EmailValidatorClassAdapter implements EmailValidatorProtocol {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}
