import { ECommerceShoppingCart, NewDiscount } from './shopping-cart';

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new NewDiscount();

shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 3', price: 50 });

console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
