import { Customer } from '../customer';
import { Vehicle } from '../vehicle';

export class IndividualCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}

  pickUp(): void {
    console.log(`${this.name} (INDIVIDUAL) está buscando ${this.customer.name}`);
  }
}
