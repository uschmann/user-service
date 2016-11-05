// Update with your config settings.

module.exports = {

  production: {
    client: 'mysql',
    connection: {
      host : process.env.MYSQL_HOST,
      database: process.env.MYSQL_DATABASE,
      user:     process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD
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
