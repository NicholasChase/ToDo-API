import { server } from "../server"
import { Request } from "@hapi/hapi"
import { tasks } from "../models";
import { numericalOrder, dateOrder } from "../Helpers/helpers";

export class getRouting {
    getClassRoute():void {
        // GET all Tasks
        server.route({
            method: 'GET',
            path: '/task',
            handler: () => {
                return tasks;
            }
        });

        // Only grab the todo that has the completed status of true
        server.route({
            method: 'GET',
            path: '/task/completed',
            handler: () => {
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
            handler: () => {
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
            handler: () => {
                var sortedTasks = numericalOrder();
            return sortedTasks;
            }
        });

        // Sorting the Dates
        server.route({
            method: 'GET',
            path: '/task/dateSorted',
            handler: () => {
                var sortedTasks = dateOrder();
            return sortedTasks;
            }
        });

        // GET a single task
        server.route({
            method: 'GET',
            path: '/task/{id}',
            handler:(request: Request) => { 
                const found = tasks.some(task => task.id === parseInt(request.params.id));
                if(found) {
                    return(tasks.filter(task => task.id === parseInt(request.params.id)));
                } else {
                    return (`No task with the ID of ${request.params.id}`)
                } 
            }
        });
    }
}