const Hapi = require('hapi');
const Joi = require('joi');
const server = new Hapi.Server();
const database = require('./database');

server.connection({ port: 3000 });

server.route({
  method: 'POST',
  path: '/register',
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
  path: '/activate',
  handler: require('./handler/activateHandler'),
  config: {
    validate: {
      query: {
        code: Joi.string().required(),
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
