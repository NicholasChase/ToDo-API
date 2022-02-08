/*
import { server } from "../server"
import { Request } from "@hapi/hapi"
import { tasks } from "../models";
import { v4 as uuidv4 } from 'uuid';
import { Task } from "../newTodo";
import { stringToDate } from "../Helpers/helpers"

export function postRoute() {

    // POST a task
    server.route({
        method: 'POST',
        path: '/task',
        handler:(request: Request) => {
            let newTodo = ({} as Task)
            let dueDate = stringToDate(request.payload['dueDate']);
            let date: Date = new Date();

            newTodo.uuid = uuidv4();
            newTodo.id = tasks.length + 1;
            newTodo.todo = request.payload["todo"];
            newTodo.createdDate = date;
            newTodo.dueDate = dueDate;
            newTodo.complete = request.payload["completed"];

            tasks.push(newTodo);
            return newTodo;
        }
    });
}
*/ 
//# sourceMappingURL=post.js.map