'use strict';

import { Server } from "@hapi/hapi";
import { getRoute } from "./routes/routes";


export let server: Server;

export const init = async () => {
    server = new Server({
        port: 5000,
        host: 'localhost'
    });

    getRoute();

    await server.start();
    console.log(`Running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log("ERROR ERRROR ERROR ");
    console.log(err);
    process.exit(1);
});


