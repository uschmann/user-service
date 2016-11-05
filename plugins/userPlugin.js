const Joi = require('joi');

const plugin = {
    register: function (server, options, next) {
      server.route({
        method: 'POST',
        path: '/register',
        handler: require('../handler/registerHandler'),
        config: {
          validate: {
            payload: {
              email: Joi.string().email().required(),
              password: Joi.string().min(8).required()
            }
          }
        }
      });

      server.route({
        method: 'GET',
        path: '/activate/{activation_code}',
        handler: require('../handler/activateHandler'),
        config: {
          validate: {
            params: {
              activation_code: Joi.string().required(),
            }
          }
        }
      });
      next();
    }
};

plugin.register.attributes = {
    name: 'users',
    version: '1.0.0'
};

module.exports = plugin;
