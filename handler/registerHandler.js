const User = require('../models/User');
const Boom = require('boom');
const randomString = require('randomstring');
const crypto = require('crypto');

module.exports = (request, reply) => {
  const { email, password } = request.payload;
  User.where({email}).count()
  .then(count => {
      if(count !== 0) {
        return reply(Boom.wrap(new Error('An user with the provided email already exists'), 409));
      }

      const user = new User({
        email,
        password: crypto.createHash('md5').update(password).digest('hex'),
        activation_code: randomString.generate()
      });
      
      user.save()
      .then((newUser) => {
        reply(newUser);
      });
  });
};
