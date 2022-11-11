import { EmailValidatorFnProtocol, emailValidatorFnAdapter } from './validation';

// function validaEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
//   if (emailValidator.isEmail(email)) {
//     console.log('Esse email é válido!');
//   } else {
//     console.log('Esse email é inválido!');
//   }
// }
// validaEmailClass(new EmailValidatorClassAdapter(), 'test@test.com');

function validaEmailFn(emailValidator: EmailValidatorFnProtocol, email: string): void {
  if (emailValidator(email)) {
    console.log('Esse email é válido!');
  } else {
    console.log('Esse email é inválido!');
  }
}
validaEmailFn(emailValidatorFnAdapter, 'test@test.com');
