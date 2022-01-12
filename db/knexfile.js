// Update with your config settings.

module.exports = {


  // points to local db
  // dev postgres knex file
  // app to db connection thru this file

  // save db name and password into ENV file
  // process.env.{name}
  development: {
    client: 'postgresql',
    connection: {
      database: 'd51t03vhjgmka3',
      user:     'jwqnphepieaahx',
      password: '066a5360e1fa286ba97c1801408118f8ac760c9e663d115bbc4a2452324f0b15'
    },
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
    connection: {
      database: 'd51t03vhjgmka3',
      user:     'jwqnphepieaahx',
      password: '066a5360e1fa286ba97c1801408118f8ac760c9e663d115bbc4a2452324f0b15'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
