# Abstract Factory

## Intenção oficial

Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

## Sobre o Abstract Factory

- É um padrão de criação, portanto lida com a criação de objetos.
- É uma fábrica, assim como o Factory Method e geralmente é composto por múltiplos Factory Methods.
- Visa agrupar famílias de produtos compatíveis criando uma fábrica concreta por grupo de objetos compatíveis.
- Separa o código que cria do código que usa os objetos (SRP).
- Permite fácil implementação de novas famílias de objetos (OCP).
- Toda a programação fica focada nas interfaces e não em implementações.

## Estrutura

```mermaid
classDiagram
  class AbstractFactory {
    <<interface>>
    +createProductA() ProductA
    +createProductB() ProductB
  }
  class ConcreteFactory1 {
    +createProductA() ProductA
    +createProductB() ProductB
  }
  class ConcreteFactory2 {
    +createProductA() ProductA
    +createProductB() ProductB
  }
  class ProductA {
    <<interface>>
  }
  class ProductA2 {
  }
  class ProductA1 {
  }
  class ProductB {
    <<interface>>
  }
  class ProductB2 {
  }
  class ProductB1 {
  }
  AbstractFactory <|.. ConcreteFactory1
  AbstractFactory <|.. ConcreteFactory2
  ProductA <|.. ProductA2
  ProductA <|.. ProductA1
  ConcreteFactory2 ..> ProductA2
  ConcreteFactory1 ..> ProductA1
  ProductB <|.. ProductB2
  ProductB <|.. ProductB1
  ConcreteFactory2 ..> ProductB2
  ConcreteFactory1 ..> ProductB1
```

## Aplicabilidade

Use o Abstract Factory quando:

- Um sistema deve ser independente de como seus produtos são criados, compostos ou representados.
- Um sistema deve ser configurado com uma família produtos que podem (ou não) trabalhar juntos.
- Uma família de objetos for projetada para ser usada em conjunto e você necessita garantir essa restrição.
- Você quer fornecer uma biblioteca de classes de produtos e quer revelar somente suas interfaces, não suas implementações.

## Consequências

### Boas

- Os produtos sempre serão compativeis entre si.
- Aplicação clara do Open/Closed Principle, é fácil adicionar novas fábricas e produtos.
- Aplicação clara do Single Responsibility Principle, o código que cria está separado do código que usa os objetos.

### Ruins

- Muitas classes e maior complexidade será introduzida no código.
