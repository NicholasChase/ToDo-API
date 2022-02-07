"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoute = void 0;
const server_1 = require("../server");
const models_1 = require("../models");
const uuid_1 = require("uuid");
function postRoute() {
    // POST a task
    server_1.server.route({
        method: 'POST',
        path: '/task',
        handler: (request, h) => {
            let newTodo = {};
            newTodo.uuid = (0, uuid_1.v4)();
            newTodo.id = models_1.tasks.length + 1;
            newTodo.todo = request.payload["todo"];
            newTodo.dueDate = request.payload["dueDate"];
            newTodo.complete = request.payload["completed"];
            models_1.tasks.push(newTodo);
            return newTodo;
        }
    });
}
exports.postRoute = postRoute;
//# sourceMappingURL=post.js.map