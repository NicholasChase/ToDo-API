/*
import { server } from "../server";
import { Request } from "@hapi/hapi";
import { tasks } from "../models";
import { stringToDate } from "../Helpers/helpers";

export function putRoute() {
    // PUT update a Task
    server.route({
        method: 'PUT',
        path: '/task/{id}',
        handler:(request: Request) => {

            const found = tasks.find(task => task.id === parseInt(request.params.id));
            if(found) {

                let date = stringToDate(request.payload['dueDate']);

                found.todo = request.payload['todo'];
                found.dueDate = date;
                found.complete = request.payload['completed'];

                return found
            } else {
                return (`No task with the ID of ${request.params.id}`)
            }
        }
    })
}
*/ 
//# sourceMappingURL=put.js.map