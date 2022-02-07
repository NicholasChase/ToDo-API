import { server } from "../server"
import { ResponseToolkit, Request } from "@hapi/hapi"
import { tasks } from "../models";

export function postRoute() {
    type NewTask = {
        id: number;
        todo: string;
        dueDate: string;
        complete: boolean;
    }
    
    // POST a task
    server.route({
        method: 'POST',
        path: '/task',
        handler:(request: Request, h: ResponseToolkit) => {
            let newTodo = ({} as NewTask)

            newTodo.id = tasks.length + 1;
            newTodo.todo = request.payload["todo"];
            newTodo.dueDate = request.payload["dueDate"];
            newTodo.complete = request.payload["completed"];
            
            tasks.push(newTodo);
            return newTodo;
        }
    });
}