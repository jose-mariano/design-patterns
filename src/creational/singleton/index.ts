import { MyDatabaseClassicFunction } from './db/my-database-classic-function';
import { myDatabaseClassic as myDatabaseClassicA } from './module_a';

const myDatabaseClassic = MyDatabaseClassicFunction;
myDatabaseClassic.add({ name: 'Roberto', age: 30 })
myDatabaseClassic.add({ name: 'Joana', age: 50 })
myDatabaseClassic.add({ name: 'Luiza', age: 25 })

myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicA);
