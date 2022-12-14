# O que são padrões de projeto?
São soluções prontas que padronizam a solução de problemas recorrentes.

## Os padrões de projeto são divididos em 3 categorias, são eles:
- **De criação(creational):** que visam abstrair o processo de como objetos são criados na aplicação;
- **Estruturais(structural):** que lidam com a composição de classes e objetos;
- **Comportamentais(behavioural):** que caracterizam como as classes e objetos interagem, e distribuem responsabilidades na aplicação.

(Obs: Os padrões de projeto são apenas sugestões de código, ou seja, cada linguagem tem sua maneira de implementá-los. O que importa de fato é a forma de solucionar o problema.)

## Beneficios de se utilizar padrões de projeto:
- Você naõ precisa reinventar a roda;
- Padrões universais facilitam o entendimento do seu projeto;
- Evita refatoração desnecessária;
- Ajuda na reutilização de código (conceito **DRY - Don't repeat yourself**);
- Abstrai e nomeia partes particulares do projeto;
- Ajuda na aplicação dos principios do design orientado a objetos (**SOLID**);
- Facilitam a criação de testes unitários.

## Problemas de se utilizar padrões de projeto:
- Alguns padrões podem ser complexos até que você os compreenda;
- Muito código para atingir um objetivo simples;
- Podem trazer otimizações prematuras para o seu código (**YAGNI - You ain't gonna need it**);
- Se usados incorretamente, podem atrapalhar ao invés de ajudar.

## Padrões:
|De criação      |Estrutural |Comportamental         |
|----------------|-----------|-----------------------|
|Abstract factory|Adapter    |Interpreter            |
|Factory method  |Bridge     |Template method        |
|Builder         |Composite  |Chain of responsability|
|Prototype       |Decorator  |Iterator               |
|Singleton       |Façade     |Command                |
|                |Flyweight  |Mediator               |
|                |Proxy      |Memento                |
|                |           |Observer               |
|                |           |State                  |
|                |           |Strategy               |
|                |           |Visitor                |

### Links:

- Creational:
  - [Factory method](./src/creational/factory-method/FACTORY_METHOD.md)
  - [Builder](./src/creational/builder/BUILDER.md)
  - [Prototype](./src/creational/prototype/PROTOTYPE.md)
  - [Singleton](./src/creational/singleton/SINGLETON.md)
  - [Abstract factory](./src/creational/abstract-factory/ABSTRACT_FACTORY.md)
- Structural:
  - [Composite](./src/structural/composite/COMPOSITE.md)
  - [Adapter](./src/structural/adapter/ADAPTER.md)
  - [Bridge](./src/structural/bridge/BRIDGE.md)
  - [Decorator](./src/structural/decorator/DECORATOR.md)
  - [Facade](./src/structural/facade/FACADE.md)
  - [Proxy](./src/structural/proxy/PROXY.md)
  - [Flyweight](./src/structural/flyweight/FLYWEIGHT.md)
- Behavioural:
  - [Strategy](./src/behavioural/strategy/STRATEGY.md)
  - [Command](./src/behavioural/command/COMMAND.md)
  - [Memento](./src/behavioural/memento/MEMENTO.md)
  - [State](./src/behavioural/state/STATE.md)
  - [Mediator](./src/behavioural/mediator/MEDIATOR.md)
  - [Chain of responsibility](./src/behavioural/chain-of-responsibility/CHAIN_OF_RESPONSIBILITY.md)
  - [Template method](./src/behavioural/template-method/TEMPLATE_METHOD.md)
  - [Observer](./src/behavioural/observer/OBSERVER.md)
  - [Iterator](./src/behavioural/iterator/ITERATOR.md)
  - [Visitor](./src/behavioural/visitor/VISITOR.md)

### Agradecimentos:

Esse projeto inteiro foi construído com o intuito de aprender e estudar os design patterns mais conhecidos na área de tecnologia. A documentação de cada design pattern assim como o exemplo prático de como o mesmo funciona foi retirado a partir da [playlist do youtube](https://www.youtube.com/playlist?list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H) criado por Otávio Miranda.
