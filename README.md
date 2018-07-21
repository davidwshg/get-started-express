# get-started-express

This is a basic framework with some features for developing node APIs.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

## Environment

There are some environment variables that must be set before using this tool.

**port (optional):** Server node port.

**logger (optional):** Log level. `error`, `warn`, `info`, `verbose`, `debug` or `silly`.

### Prerequisites

You need to have [NodeJS](https://nodejs.org/en/) and [Nodemon](https://github.com/remy/nodemon)

To install Nodemon already with NodeJS and npm installed.
```
npm install -g nodemon
```
If you do not want to use Nodemon just go to the package.json file in the scripts section and change the line.
```
"start": "nodemon",
```
for
```
"start": "node servers.js",
```

### Running the server

To start you only need these 2 commands in the root folder.
```
npm install
npm start
```

## Authors

* **David Washington** - [davidwashington833](https://github.com/DavidWashington833)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
