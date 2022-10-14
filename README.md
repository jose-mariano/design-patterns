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
