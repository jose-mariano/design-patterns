import { Customer } from '.';

export class EnterpriseCustomer implements Customer {
  constructor(public name: string) {
    this.name += ' (ENTERPRISE)'
  }
}
