// Update with your config settings.
const knex = require('knex');

module.exports = {


  // points to local db
  // dev postgres knex file
  // app to db connection thru this file

  // save db name and password into ENV file
  // process.env.{name}
  development: {
    client: 'postgresql',
    connection: '',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // heroku credentials here 

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
