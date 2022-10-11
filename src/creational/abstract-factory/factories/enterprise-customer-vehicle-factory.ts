import { Customer, EnterpriseCustomer } from '../customer';
import { EnterpriseCar, Vehicle } from '../vehicle';
import { CustomerVehicleFactory } from './customer-vehicle-factory';

export class EnterpriseCustomerVehicleFactory implements CustomerVehicleFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
