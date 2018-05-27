# api-node

Esta é uma estrutura básica com alguns recursos incluidos para o desenvolvimento de APIs com node.

## Iniciar aplicação

Para iniciar você só pricisa desses 2 comandos na pasta raiz.
```
npm install
npm start
```

### Pré Requisito

Você precisa ter instalado o [NodeJS](https://nodejs.org/en/) e o [Nodemon](https://github.com/remy/nodemon)

Para instalar o Nodemon já com o NodeJS e o npm instalado
```
npm install -g nodemon
```
Caso você não queira usar o Nodemon basta ir no arquivo package.json na parte de scripts e mudar a linha
```
"start": "nodemon",
```
para
```
"start": "node servers.js",
```

## Ambiente

Há algumas variaveis de ambiente que devem ser setadas antes de ultilizar essa ferramenta.

**port:** Porta do servidor Node.

**logger:** Nivel de log. `error`, `warn`, `info`, `verbose`, `debug` ou `silly`.

## Authors

* **David Washington** - [davidwashington833](https://github.com/DavidWashington833)
