'use strict'; // Restricts the use of error syntax and should be used at the beginning of every file using hapi

// Including the hapi module
const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    server.route({
        method: 'Get',
        path: '/',
        handler: (request, h) => {
            var data = 'Hello World!';
            return data;
        }
    });

    await server.start();
    console.log(`Server started on: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();