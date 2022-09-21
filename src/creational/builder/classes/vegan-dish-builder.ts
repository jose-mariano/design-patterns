import { MealBuilderProtocol } from '../interfaces';
import { Beans, Beverage, Dessert, MealBox, Rice } from '.';

export class VeganDishBuilder implements MealBuilderProtocol {
  private meal: MealBox = new MealBox();

  reset(): this {
    this.meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    this.meal.add(rice, beans);

    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Café', 5);
    this.meal.add(beverage);

    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Pudim', 8);
    this.meal.add(dessert);

    return this;
  }

  getMeal(): MealBox {
    return this.meal;
  }
}