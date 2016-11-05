// Update with your config settings.

module.exports = {

  production: {
    client: 'mysql',
    connection: {
      host : '192.168.99.100',
      database: 'user_service',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
