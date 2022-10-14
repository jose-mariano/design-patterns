export abstract class ProductComponent {
  abstract getPrice(): number;

  add(_product: ProductComponent): void {}
  remove(_product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposed extends ProductComponent {
  private children: ProductComponent[] = [];

  add(product: ProductComponent): void {
    this.children.push(product);
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);

    if (productIndex !== -1) {
      this.children.splice(productIndex, 1);
    }
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

const camiseta = new ProductLeaf('Camiseta', 40);
const bicicleta = new ProductLeaf('Bicicleta', 100);
const carro = new ProductLeaf('Carro', 40000);

const caixaDeProdutos = new ProductComposed();
caixaDeProdutos.add(camiseta);
caixaDeProdutos.add(bicicleta);
caixaDeProdutos.add(carro);

const tablet = new ProductLeaf('Tablet', 2000);
const kindle = new ProductLeaf('Kindle', 400);
const outraCaixaDeProdutos = new ProductComposed();
outraCaixaDeProdutos.add(tablet);
outraCaixaDeProdutos.add(kindle);

caixaDeProdutos.add(outraCaixaDeProdutos);
console.log(caixaDeProdutos);
console.log(caixaDeProdutos.getPrice());
