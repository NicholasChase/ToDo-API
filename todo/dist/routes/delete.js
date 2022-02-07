"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delRoute = void 0;
const server_1 = require("../server");
const models_1 = require("../models");
function delRoute() {
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
                        // console.log(tasks.splice[request.params.id]);
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
}
exports.delRoute = delRoute;
//# sourceMappingURL=delete.js.map