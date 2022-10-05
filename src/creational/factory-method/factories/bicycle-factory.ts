import { VehicleFactory } from '.';
import { Bicycle, Vehicle } from '../vehicle';

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}
