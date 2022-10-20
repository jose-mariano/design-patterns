import { MainDishBuilder, VeganDishBuilder } from '../../creational/builder/classes';

export class BuilderFacade {
  // Essa é a fachada para a pasta src/creational/builder/index.ts
  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal1(): void {
    const meal = this.mainDishBuilder.makeMeal().getMeal();

    console.log(meal);
    console.log(meal.getPrice());
  }

  makeMeal2(): void {
    this.mainDishBuilder.reset();
    const meal = this.mainDishBuilder.makeBeverage().getMeal();

    console.log(meal);
    console.log(meal.getPrice());
  }

  makeMeal3(): void {
    const meal = this.veganDishBuilder.makeMeal().getMeal();

    console.log(meal);
    console.log(meal.getPrice());
  }
}
