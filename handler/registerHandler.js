const User = require('../models/User');
const Boom = require('boom');
const randomString = require('randomstring');

module.exports = (request, reply) => {
  const { email, password } = request.payload;
  User.where({email}).count().then(count => {
      if(count !== 0) {
        reply(Boom.wrap(new Error('An user with the provided email already exists'), 409));
      }
      else {
        const user = new User({
          email,
          password,
          activation_code: randomString.generate()
        });
        user.save().then((newUser) => {
          reply(newUser);
        });
      }
  });
};
