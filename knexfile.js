// Update with your config settings.
// require('dotenv').config({path: './env'});


module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'uat-local-db'
    },
    migrations: {
      directory: './db/db/migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    },
    migrations: {
      directory: './db/db/migrations'
    },
    useNullAsDefault: true
  }

};
