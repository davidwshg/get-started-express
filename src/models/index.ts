import { Sequelize } from 'sequelize'
import environments from '../configs/postgres'

// @ts-ignore
const environment = environments[process.env.NODE_ENV] || environments['development']

export const sequelize = new Sequelize(environment.database, environment.username, environment.password, { dialect: environment.dialect });
