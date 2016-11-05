
module.exports = {

  production: {
    client: 'mysql',
    connection: {
      host : process.env.MYSQL_HOST || 'localhost',
      database: process.env.MYSQL_DATABASE || 'user_service',
      user:     process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'root'
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
