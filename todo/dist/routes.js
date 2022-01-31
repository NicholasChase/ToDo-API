"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoute = void 0;
const server_1 = require("./server");
const models_1 = require("./models");
function getRoute() {
    server_1.server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!!!';
        }
    });
    server_1.server.route({
        method: 'GET',
        path: '/getworlds',
        handler: (request, h) => {
            return 'Hello from the world!!!';
        }
    });
    server_1.server.route({
        method: 'GET',
        path: '/models',
        handler: (request, h) => {
            return JSON.stringify(models_1.models[2]);
        }
    });
    server_1.server.route({
        method: 'GET',
        path: '/models/{id}',
        handler: (request, h) => {
            console.log(request.params);
            console.log(request.params.id);
            const found = models_1.models.some(model => model.id === parseInt(request.params.id));
            if (found) {
                return (models_1.models.filter(model => model.id === parseInt(request.params.id)));
            }
            else {
                return (`No memebr with the ID of ${request.params.id}`);
            }
            //return JSON.stringify(models[request.params.id]);  
        }
    });
}
exports.getRoute = getRoute;
//# sourceMappingURL=routes.js.map