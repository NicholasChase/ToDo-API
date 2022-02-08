'use strict';

import { Server } from "@hapi/hapi";
import { getRouting } from "./routes/getClass";
import { delRouting } from "./routes/delClass";
import { postRouting } from "./routes/postClass";
import { putRouting } from "./routes/putClass";

export let server: Server;

export const init = async () => {
    server = new Server({
        port: 5000,
        host: 'localhost'
    });

    var getRoute = new getRouting;
    var delRoute = new delRouting;
    var postRoute = new postRouting;
    var putRoute = new putRouting;

    getRoute.getClassRoute();
    delRoute.delClassRoute();
    postRoute.postClassRoute();
    putRoute.putClassRoute();

    await server.start();
    console.log(`Running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});


