import { MyDatabaseClassicFunction } from './db/my-database-classic-function';

const myDatabaseClassic = MyDatabaseClassicFunction;
myDatabaseClassic.add({ name: 'Luiz', age: 30 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Eduardo', age: 25 });

export { myDatabaseClassic };