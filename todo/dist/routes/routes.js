"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoute = void 0;
const server_1 = require("../server");
const models_1 = require("../models");
function getRoute() {
    // GET all Tasks
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
    // GET a single task
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
                return (`No task with the ID of ${request.params.id}`);
            }
            //return JSON.stringify(models[request.params.id]);  
        }
    });
    // POST a task
    server_1.server.route({
        method: 'POST',
        path: '/task',
        handler: (request, h) => {
            let newTodo = {};
            newTodo = request.payload;
            models_1.tasks.push(newTodo);
            return newTodo;
        }
    });
    // DEL a task
    server_1.server.route({
        method: 'DELETE',
        path: '/task/{id}',
        handler: (request, h) => {
            const found = models_1.tasks.some(task => task.id === parseInt(request.params.id));
            if (found) {
                models_1.tasks.forEach(task => {
                    if (task.id === parseInt(request.params.id)) {
                        let i = parseInt(request.params.id);
                        models_1.tasks.splice(i - 1, 1);
                    }
                });
                return (models_1.tasks.filter(task => task.id !== parseInt(request.params.id)));
            }
            else {
                return (`No task with the ID of ${request.params.id}`);
            }
        }
    });
    // PUT update a Task
    server_1.server.route({
        method: 'PUT',
        path: '/task/{id}',
        handler: (request, h) => {
            const found = models_1.tasks.find(task => task.id === parseInt(request.params.id));
            if (found) {
                // const updateTask = tasks.find((task) => task.id === parseInt(id) )
                found.todo = request.payload['todo'];
                found.dueDate = request.payload['dueDate'];
                found.complete = request.payload['completed'];
                return found;
            }
            else {
                return (`No task with the ID of ${request.params.id}`);
            }
        }
    });
}
exports.getRoute = getRoute;
//# sourceMappingURL=routes.js.map