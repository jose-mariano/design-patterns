# Facade

## Intenção Oficial

Façade (Fachada) é um padrão de projeto estrutural que tem a intenção de fornecer uma interface unificada para um conjunto de interfaces em um subsistema. Façade define uma interface de nível mais alto que torna o subsistema mais fácil de ser usado.

## Aplicabilidade

Use o padrão Façade quando:
- Você quer disponibilizar uma interface mais simples para um sistema complexo.
- Você quer criar pontos de entrada para determinadas partes do sistema, como serviços externos, camadas da aplicação e objetos complexos dentro em determinadas partes do código.

## Consequências

### Boas:

- Isola o código complexo do código cliente.
- Facilita o uso do sistema.
- Cria pontos de entrada para camadas da aplicação e serviços de terceiros.

### Ruins:

- O objeto façade se torna facilmente uma "*God class*" (use fachadas adicionais se perceber que isso está ocorrendo com seu código)
