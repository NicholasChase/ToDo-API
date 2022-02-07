"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoute = void 0;
const server_1 = require("../server");
const models_1 = require("../models");
function postRoute() {
    // POST a task
    server_1.server.route({
        method: 'POST',
        path: '/task',
        handler: (request, h) => {
            let newTodo = {};
            console.log(models_1.tasks.length);
            //newTodo = (request.payload as NewTask);
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