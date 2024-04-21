const UplaodsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'uploads',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const uplaodsHandler = new UplaodsHandler(service, validator);
    server.route(routes(uplaodsHandler));
  },
};
