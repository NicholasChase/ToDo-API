"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putRouting = void 0;
const server_1 = require("../server");
const models_1 = require("../models");
const helpers_1 = require("../Helpers/helpers");
class putRouting {
    putClassRoute() {
        // PUT Update a Task
        server_1.server.route({
            method: 'PUT',
            path: '/task/{id}',
            handler: (request) => {
                const found = models_1.tasks.find(task => task.id === parseInt(request.params.id));
                if (found) {
                    let date = (0, helpers_1.stringToDate)(request.payload['dueDate']);
                    found.todo = request.payload['todo'];
                    found.dueDate = date;
                    found.complete = request.payload['completed'];
                    return found;
                }
                else {
                    return (`No task with the ID of ${request.params.id}`);
                }
            }
        });
    }
}
exports.putRouting = putRouting;
//# sourceMappingURL=putClass.js.map