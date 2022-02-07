import { server } from "../server"
import { ResponseToolkit, Request } from "@hapi/hapi"
import { tasks } from "../models";
import { v4 as uuidv4 } from 'uuid';

export function postRoute() {
    type NewTask = {
        uuid: uuidv4,
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

            newTodo.uuid = uuidv4();
            newTodo.id = tasks.length + 1;
            newTodo.todo = request.payload["todo"];
            newTodo.dueDate = request.payload["dueDate"];
            newTodo.complete = request.payload["completed"];

            tasks.push(newTodo);
            return newTodo;
        }
    });
}