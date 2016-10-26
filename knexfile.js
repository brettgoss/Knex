// Update with your config settings.
const settings = require("./settings"); // settings.json
const knex = require('knex')({
  client: 'pg',
  connection: {
    ssl  : true,
    port : settings.port,
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

module.exports = {

  development: {
    client: 'pg',
    connection: {
      ssl  : true,
      port : settings.port,
      host : settings.hostname,
      user : settings.user,
      password : settings.password,
      database : settings.database
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
