import { server } from "../server"
import { ResponseToolkit, Request } from "@hapi/hapi"
import { tasks } from "../models";

export function putRoute() {
    // PUT update a Task
    server.route({
        method: 'PUT',
        path: '/task/{id}',
        handler:(request: Request, h: ResponseToolkit) => {

            const found = tasks.find(task => task.id === parseInt(request.params.id));
            if(found) {
                // const updateTask = tasks.find((task) => task.id === parseInt(id) )
                found.todo = request.payload['todo'];
                found.dueDate = request.payload['dueDate'];
                found.complete = request.payload['completed'];

                return found
            } else {
                return (`No task with the ID of ${request.params.id}`)
            }
        }
    })
}