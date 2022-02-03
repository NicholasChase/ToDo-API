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
        path: '/task',
        handler: (request, h) => {
            return models_1.tasks;
        }
    });
    // Only grab the todo that has the completed status of true
    server_1.server.route({
        method: 'GET',
        path: '/task/completed',
        handler: (request, h) => {
            const found = models_1.tasks.some(task => true === task.complete);
            if (found) {
                return (models_1.tasks.filter(task => true === task.complete));
            }
            else {
                return (`No todo is completed`);
            }
        }
    });
    // Only grab the tasks that have a completed status of false
    server_1.server.route({
        method: 'GET',
        path: '/task/incomplete',
        handler: (request, h) => {
            const found = models_1.tasks.some(task => false === task.complete);
            if (found) {
                return (models_1.tasks.filter(task => false === task.complete));
            }
            else {
                return (`No todo is completed`);
            }
        }
    });
    // Sorting the ID numbers
    server_1.server.route({
        method: 'GET',
        path: '/task/sorted',
        handler: (request, h) => {
            var sortedTasks = models_1.tasks;
            sortedTasks.sort((task1, task2) => task1.id - task2.id);
            return sortedTasks;
        }
    });
    server_1.server.route({
        method: 'GET',
        path: '/task/{id}',
        handler: (request, h) => {
            console.log(request.params);
            console.log(request.params.id);
            const found = models_1.tasks.some(task => task.id === parseInt(request.params.id));
            if (found) {
                return (models_1.tasks.filter(task => task.id === parseInt(request.params.id)));
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