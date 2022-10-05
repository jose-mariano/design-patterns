import { VehicleFactory } from '.';
import { Car, Vehicle } from '../vehicle';

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
