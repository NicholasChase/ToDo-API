"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putRoute = void 0;
const server_1 = require("../server");
const models_1 = require("../models");
function putRoute() {
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
exports.putRoute = putRoute;
//# sourceMappingURL=put.js.map