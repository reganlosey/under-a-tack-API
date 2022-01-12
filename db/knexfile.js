// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/den1iduv7hle85',
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
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    // migrations: {
    //   tableName: 'knex_migrations'
    // },
    migrations: {
      directory: './db/db/migrations'
    },
    ssl: { rejectUnauthorized: false },
    useNullAsDefault: true
  }

};
