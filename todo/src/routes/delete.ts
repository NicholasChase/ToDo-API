import { server } from "../server"
import { ResponseToolkit, Request } from "@hapi/hapi"
import { tasks } from "../models";

export function delRoute() {
    // DEL a task
    server.route({
        method: 'DELETE',
        path: '/task/{id}',
        handler: (request: Request, h: ResponseToolkit) => {
            const found = tasks.some(task => task.id === parseInt(request.params.id));
            if(found) {
                tasks.forEach(task => {
                    if (task.id === parseInt(request.params.id)) {
                        let i = parseInt(request.params.id)
                        // console.log(tasks.splice[request.params.id]);
                        tasks.splice(i-1, 1);
                    }  
                });
                return(tasks.filter(task => task.id !== parseInt(request.params.id)));
            } else {
                return (`No task with the ID of ${request.params.id}`)
            }
        }
    })
}