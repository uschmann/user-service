const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '192.168.99.100',
    user : 'root',
    password : 'root',
    database : 'user_service'
  },
  migrations: {
    tableName: 'migrations'
  }
});

const bookshelf = require('bookshelf')(knex);

module.exports = {
  knex,
  bookshelf
};
