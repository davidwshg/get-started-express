import Sequelize from 'sequelize';
import usuario from '../models/usuario';
import log from './winston';

const {
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_URL
} = process.env;

const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    host: DATABASE_URL,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

sequelize
  .authenticate()
  .then(() => log.info('Connection has been established successfully.'))
  .catch(err => log.error('Unable to connect to the database:', err));

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize
};

db.usuario = usuario(sequelize, Sequelize);

export default db;