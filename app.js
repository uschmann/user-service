const Hapi = require('hapi');
const Joi = require('joi');
const server = new Hapi.Server();
const database = require('./database');

server.connection({ port: 3000 });

server.route({
  method: 'POST',
  path: '/api/v1/register',
  handler: require('./handler/registerHandler'),
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
  path: '/api/v1/activate/{activation_code}',
  handler: require('./handler/activateHandler'),
  config: {
    validate: {
      params: {
        activation_code: Joi.string().required(),
      }
    }
  }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
