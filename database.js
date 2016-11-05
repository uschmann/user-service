const knexfile = require('./knexfile');

const knex = require('knex')({
  client: 'mysql',
  connection: knexfile.production.connection,
  migrations: {
    tableName: 'migrations'
  }
});

const bookshelf = require('bookshelf')(knex);

module.exports = {
  knex,
  bookshelf
};
