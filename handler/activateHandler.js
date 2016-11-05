const User = require('../models/User');
const Boom = require('boom');

module.exports = (request, reply) => {
  const { activation_code } = request.params;
  User.where({activation_code}).fetch()
  .then(user => {
      if(!user) {
        return reply(Boom.notFound('A user with the given activation_code does not exist'));
      }

      user.set({activation_code: null});
      user.save()
      .then(user => {
        console.log(`[user-service] Activated user: ${user}`);
        reply(user);
      });
  });
};
