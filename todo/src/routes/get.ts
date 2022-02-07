import { server } from "../server"
import { ResponseToolkit, Request } from "@hapi/hapi"
import { tasks } from "../models";


export function getRoutes() {

    // GET all Tasks
    server.route({
        method: 'GET',
        path: '/task',
        handler: (request: Request, h: ResponseToolkit) => {
            return tasks;
        }
    });

    // Only grab the todo that has the completed status of true
    server.route({
        method: 'GET',
        path: '/task/completed',
        handler: (request: Request, h: ResponseToolkit) => {
            const found = tasks.some(task => true === task.complete);
            if(found) {
                return(tasks.filter(task => true === task.complete))
            } else {
                return (`No todo is completed`);
            }
        }
    });

    // Only grab the tasks that have a completed status of false
    server.route({
        method: 'GET',
        path: '/task/incomplete',
        handler: (request: Request, h: ResponseToolkit) => {
            const found = tasks.some(task => false === task.complete);
            if(found) {
                return(tasks.filter(task => false === task.complete))
            } else {
                return (`No todo is completed`);
            }
        }
    });

    // Sorting the ID numbers
    server.route({
        method: 'GET',
        path: '/task/sorted',
        handler: (request: Request, h: ResponseToolkit) => {
            var sortedTasks = tasks;
            sortedTasks.sort((task1, task2) => task1.id - task2.id);
           return sortedTasks;
        }
    });

    // GET a single task
    server.route({
        method: 'GET',
        path: '/task/{id}',
        handler:(request: Request, h: ResponseToolkit) => { 
            console.log(request.params);
            console.log(request.params.id);

            const found = tasks.some(task => task.id === parseInt(request.params.id));

            if(found) {
                return(tasks.filter(task => task.id === parseInt(request.params.id)));
            } else {
                return (`No task with the ID of ${request.params.id}`)
            } 
        }
    });

}