'use strict';

import { Server, ResponseToolkit } from "@hapi/hapi";
//import { getRoute } from "./routes/routes";
import { getRoutes } from "./routes/get";
import { postRoute } from "./routes/post";
import { putRoute } from "./routes/put";
import { delRoute } from "./routes/delete";



export let server: Server;

export const init = async () => {
    server = new Server({
        port: 5000,
        host: 'localhost'
    });


    getRoutes();
    postRoute();
    putRoute();
    delRoute();
    

    await server.start();
    console.log(`Running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});


