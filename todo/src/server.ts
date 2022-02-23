'use strict';

import { Server } from "@hapi/hapi";
import { getRoutes } from "./routes/todoRoutes";
const Sequelize = require('sequelize')

export let server: Server;

export const init = async () => {
    server = new Server({
        port: 5000,
        host: 'localhost'
    });

    //Registering the hapi-sequelizejs plugin
    await server.register([
        {
            plugin: require('hapi-sequelizejs'),
            options: [
                {
                    name: 'mysql', // identifier
                    sequelize: new Sequelize('mysql', 'root', 'P@ssw0rd!', {
                        host: 'localhost',
                        port: 3306,
                        dialect: 'mysql'
                    }),
                },
            ],
        },
    ]);

    server.route(getRoutes);

    await server.start();
    console.log(`Running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});