import { randomVehicleAlgorithm } from "./main/random-vehicle-algorithm";

const customerNames = ['Ana', 'Joana', 'Helena', 'João'];

for (let i = 0; i < customerNames.length; i++) {
  const vehicle = randomVehicleAlgorithm();
  vehicle.pickUp(customerNames[i]);
  vehicle.stop();

  console.log('------');
}
