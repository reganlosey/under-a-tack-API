// Update with your config settings.
// require('dotenv').config({path: './env'});


module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'uat-local-db'
    },
    pool: {
      min: 2,
      max: 10
    },
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
    migrations: {
      directory: './db/db/migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/db/migrations'
    },
    ssl: { rejectUnauthorized: false },
    useNullAsDefault: true
  }

};
