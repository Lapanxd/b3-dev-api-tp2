import { Sequelize } from 'sequelize';
import { logger } from './logger.config.js';

const getSequelize = () => {
  if (process.env.NODE_ENV === 'test') {
    return new Sequelize({
      dialect: 'sqlite',
      storage: './test/test-db.sqlite',
      logging: false
    });
  }
  return new Sequelize({
    dialect: 'mysql',
    host: 'mysql-b3-api.alwaysdata.net',
    port: 3306,
    database: 'b3-api_tp-2',
    username: 'b3-api',
    password: 'b3-api-password',
  })
};

export const sequelize = getSequelize();

sequelize.authenticate()
  .then(() => console.log('DB connection OK'))
  .catch(error => console.error('DB connection KO', error))
  .then(() => sequelize.sync())
  .catch(error => console.error('DB sync KO', error));

/*

    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'livescores',
    username: 'root',
    password: 'root',

*/
