'use strict';

import { Server, ResponseToolkit } from "@hapi/hapi";
import { getRoute } from "./routes";


export let server: Server;

export const init = async () => {
    server = new Server({
        port: 5000,
        host: 'localhost'
    });

    getRoute();

    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: (request: Request, h: ResponseToolkit) => {
    //         return 'Hello World!';
    //     }
    // });

    await server.start();
    console.log(`Running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log("ERROR ERRROR ERROR ");
    console.log(err);
    process.exit(1);
});


