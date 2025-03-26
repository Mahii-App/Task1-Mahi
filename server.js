// config/server.js
const Hapi = require('@hapi/hapi');
const userRoutes = require('./routes/userRouters');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    // Register routes
    server.route(userRoutes);

    // Start the server
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

