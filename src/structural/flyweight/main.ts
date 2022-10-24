import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Luiz', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Helena', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Eliana', '2', 'Rua A', 'BH');
deliveryContext(factory, 'Joana', '502', 'Av Brasil', 'SP');
deliveryContext(factory, 'João', '70', 'Rua B', 'SP');
deliveryContext(factory, 'Luiz', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Helena', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Eliana', '2', 'Rua A', 'BH');
deliveryContext(factory, 'Joana', '502', 'Av Brasil', 'SP');
deliveryContext(factory, 'João', '70', 'Rua B', 'SP');
deliveryContext(factory, 'Luiz', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Helena', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Eliana', '2', 'Rua A', 'BH');
deliveryContext(factory, 'Joana', '502', 'Av Brasil', 'SP');
deliveryContext(factory, 'João', '70', 'Rua B', 'SP');

console.log();
console.log(factory.getLocations());
