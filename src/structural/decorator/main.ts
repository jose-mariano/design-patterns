import { ProductCustomizationDecorator, ProductStampDecorator, TShirt } from './product';

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const tShirtStampFrontAndBack = new ProductStampDecorator(tShirtWithStamp);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(tShirtStampFrontAndBack.getPrice(), tShirtStampFrontAndBack.getName());
console.log(customizedTShirt.getPrice(), customizedTShirt.getName());
