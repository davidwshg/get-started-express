# get-started-express

This is a basic framework with some features for developing node APIs.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

You need to have [NodeJS](https://nodejs.org/en/), [Nodemon](https://github.com/remy/nodemon) and [MySql Server](https://dev.mysql.com/downloads/mysql/)

To install Nodemon already with NodeJS and npm installed.
```
npm install -g nodemon
```
If you do not want to use Nodemon just go to the package.json file in the scripts section and change the line.
```
"start": "cross-env logger=info port=8080 nodemon -r esm cluster.js",
```
for
```
"start": "cross-env logger=info port=8080 node -r esm cluster.js",
```

### Environment

There are some environment variables that must be set before using this tool.

**DATABASE_NAME (require):** Recomended in variable of the system envirioment.

**DATABASE_USER (require):** Recomended in variable of the system envirioment.

**DATABASE_PASSWORD (require):** Recomended in variable of the system envirioment.

**DATABASE_URL (require):** Recomended in variable of the system envirioment.

**port (optional):** Server node port. You can change value in `package.json`. You can change value in `package.json`.

**logger (optional):** Log level. `error`, `warn`, `info`, `verbose`, `debug` or `silly`. You can change value in `package.json`.

### Running the server

To start you only need these 2 commands in the root folder.
```
yarn
yarn start
```

## Authors

* **David Washington** - [davidwashington833](https://github.com/DavidWashington833)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
