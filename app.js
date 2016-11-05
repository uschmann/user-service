const Hapi = require('hapi');
const server = new Hapi.Server();
const database = require('./database');

server.connection({ port: 3000 });

server.register(require('./plugins/userPlugin'), {
  routes: {
        prefix: '/api/v1'
    }
}, err => {
  if (err) {
          throw err;
  }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`[user-service] Running at: ${server.info.uri}`);
});
