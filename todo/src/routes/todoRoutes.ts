import { Request } from "@hapi/hapi"
import { Task } from "../todo";
import { repo } from "../repo/repo";
import { v4 as uuidv4 } from 'uuid';
import { stringToDate } from "../Helpers/helpers"


export const getRoutes = [

     // GET all Tasks
     {
        method: 'GET',
        path: '/task',
        handler: () => {
            return repo.findAll();
        }
    },

    {
        method: 'GET',
        path: '/task/{uuid}',
        handler: (request: Request) => {
            let uuid = request.params.uuid
            return repo.find(uuid)
        }
    },

    {
        method: 'POST',
        path: '/task',
        handler: (request: Request) => {
            let newTodo = ({} as Task)
            let dueDate = stringToDate(request.payload['dueDate']);
            let date: Date = new Date();

            newTodo.uuid = uuidv4();
            newTodo.todo = request.payload["todo"];
            newTodo.createdDate = date;
            newTodo.dueDate = dueDate;
            newTodo.complete = request.payload["completed"];
            
            return repo.create(newTodo);
        }

    },

     // DEL a task
     {
        method: 'DELETE',
        path: '/task/{uuid}',
        handler: (request: Request) => {
            let uuid = request.params.uuid;
            return repo.del(uuid);
        },
     },

     // Update a Task
     {
        method: 'PUT',
        path: '/task/{uuid}',
        handler: (request: Request) => {
            let uuid = request.params.uuid;
            return repo.updateTodo(uuid, request.payload);
        },
     },

    // Only grab the tasks that have a completed status of false
    {
        method: 'GET',
        path: '/task/incomplete',
        handler: () => {
            return repo.incompleteTodos();
        }
    },

    // Only grab the tasks that have a complete status of true
    {
        method: 'GET',
        path: '/task/complete',
        handler: () => {
            return repo.completeTodos();
        }
    },

    // Sorting the Dates
    {
    method: 'GET',
    path: '/task/dateSorted',
    handler: () => {
        return repo.orderDates();
        }
    },

]