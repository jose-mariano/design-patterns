import { MainDishBuilder, VeganDishBuilder } from './classes';

const mainDishBuilder = new MainDishBuilder();
const veganDishBuilder = new VeganDishBuilder();

const meal1 = mainDishBuilder
  .makeMeal()
  .makeBeverage()
  .makeDessert()
  .getMeal();

console.log(meal1);
console.log(meal1.getPrice());

const meal2 = mainDishBuilder
  .reset()
  .makeBeverage()
  .getMeal();

console.log(meal2);
console.log(meal2.getPrice());

const meal3 = veganDishBuilder
  .makeMeal()
  .makeBeverage()
  .getMeal();

console.log(meal3);
console.log(meal3.getPrice());
