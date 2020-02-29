export default {
  development: {
    username: <string>process.env.DEVELOPMENT_POSTGRES_USERNAME,
    password: <string>process.env.DEVELOPMENT_POSTGRES_PASSWORD,
    database: <string>process.env.DEVELOPMENT_POSTGRES_DATABASE,
    host: <string>process.env.DEVELOPMENT_POSTGRES_HOST,
    dialect: 'postgres'
  },
  test: {
    username: <string>process.env.TEST_POSTGRES_USERNAME,
    password: <string>process.env.TEST_POSTGRES_PASSWORD,
    database: <string>process.env.TEST_POSTGRES_DATABASE,
    host: <string>process.env.TEST_POSTGRES_HOST,
    dialect: 'postgres',
    operatorsAliases: false
  },
  production: {
    username: <string>process.env.PRODUCTION_POSTGRES_USERNAME,
    password: <string>process.env.PRODUCTION_POSTGRES_PASSWORD,
    database: <string>process.env.PRODUCTION_POSTGRES_DATABASE,
    host: <string>process.env.PRODUCTION_POSTGRES_HOST,
    dialect: 'postgres',
    operatorsAliases: false
  }
}
