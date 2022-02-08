"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouting = void 0;
const server_1 = require("../server");
const models_1 = require("../models");
const uuid_1 = require("uuid");
const helpers_1 = require("../Helpers/helpers");
class postRouting {
    postClassRoute() {
        // POST a task
        server_1.server.route({
            method: 'POST',
            path: '/task',
            handler: (request) => {
                let newTodo = {};
                let dueDate = (0, helpers_1.stringToDate)(request.payload['dueDate']);
                let date = new Date();
                newTodo.uuid = (0, uuid_1.v4)();
                newTodo.id = models_1.tasks.length + 1;
                newTodo.todo = request.payload["todo"];
                newTodo.createdDate = date;
                newTodo.dueDate = dueDate;
                newTodo.complete = request.payload["completed"];
                models_1.tasks.push(newTodo);
                return newTodo;
            }
        });
    }
}
exports.postRouting = postRouting;
//# sourceMappingURL=postClass.js.map