"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delRouting = void 0;
const server_1 = require("../server");
const models_1 = require("../models");
class delRouting {
    delClassRoute() {
        // DEL a task
        server_1.server.route({
            method: 'DELETE',
            path: '/task/{id}',
            handler: (request) => {
                const found = models_1.tasks.some(task => task.id === parseInt(request.params.id));
                if (found) {
                    models_1.tasks.map(task => {
                        if (task.id === parseInt(request.params.id)) {
                            models_1.tasks.splice(models_1.tasks.indexOf(task), 1);
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
}
exports.delRouting = delRouting;
//# sourceMappingURL=delClass.js.map