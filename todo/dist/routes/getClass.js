"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRouting = void 0;
const server_1 = require("../server");
const models_1 = require("../models");
const helpers_1 = require("../Helpers/helpers");
class getRouting {
    getClassRoute() {
        // GET all Tasks
        server_1.server.route({
            method: 'GET',
            path: '/task',
            handler: () => {
                return models_1.tasks;
            }
        });
        // Only grab the todo that has the completed status of true
        server_1.server.route({
            method: 'GET',
            path: '/task/completed',
            handler: () => {
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
            handler: () => {
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
            handler: () => {
                var sortedTasks = (0, helpers_1.numericalOrder)();
                return sortedTasks;
            }
        });
        // Sorting the Dates
        server_1.server.route({
            method: 'GET',
            path: '/task/dateSorted',
            handler: () => {
                var sortedTasks = (0, helpers_1.dateOrder)();
                return sortedTasks;
            }
        });
        // GET a single task
        server_1.server.route({
            method: 'GET',
            path: '/task/{id}',
            handler: (request) => {
                const found = models_1.tasks.some(task => task.id === parseInt(request.params.id));
                if (found) {
                    return (models_1.tasks.filter(task => task.id === parseInt(request.params.id)));
                }
                else {
                    return (`No task with the ID of ${request.params.id}`);
                }
            }
        });
    }
}
exports.getRouting = getRouting;
//# sourceMappingURL=getClass.js.map