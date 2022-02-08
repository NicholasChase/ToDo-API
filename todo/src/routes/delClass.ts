import { server } from "../server"
import { Request } from "@hapi/hapi"
import { tasks } from "../models";

export class delRouting {
    delClassRoute():void {
        // DEL a task
        server.route({
            method: 'DELETE',
            path: '/task/{id}',
            handler: (request: Request) => {
                const found = tasks.some(task => task.id === parseInt(request.params.id));
                if(found) {
                    tasks.map(task => {
                        if (task.id === parseInt(request.params.id)) {
                            tasks.splice(tasks.indexOf(task), 1);
                        }  
                    });
                    return(tasks.filter(task => task.id !== parseInt(request.params.id)));
                } else {
                    return (`No task with the ID of ${request.params.id}`)
                }
            }
        })
    }
}