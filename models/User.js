const bookshelf = require('../database').bookshelf;

module.exports = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true
});
