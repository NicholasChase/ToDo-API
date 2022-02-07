
/*import { server } from "../server"
import { ResponseToolkit, Request } from "@hapi/hapi"
import { tasks } from "../models";

export function getRoute() {


export const getRoutes = [
    // GET all Tasks
    {
        method: 'GET',
        path: '/task',
        handler: () => {
            return tasks;
        }
    },

    // Only grab the todo that has the completed status of true
    {
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
    },

    // Only grab the tasks that have a completed status of false
    {
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
    },

    // Sorting the ID numbers
    {
        method: 'GET',
        path: '/task/sorted',
        handler: () => {
            var sortedTasks = tasks;
            sortedTasks.sort((task1, task2) => task1.id - task2.id);
           return sortedTasks;
        }
    },

    // GET a single task
    {
        method: 'GET',
        path: '/task/{id}',
        handler:(request: Request) => { 
            console.log(request.params);
            console.log(request.params.id);

            const found = tasks.some(task => task.id === parseInt(request.params.id));

            if(found) {
                return(tasks.filter(task => task.id === parseInt(request.params.id)));
            } else {
                return (`No task with the ID of ${request.params.id}`)
            } 
        }
    },



    // POST a task
    {
        method: 'POST',
        path: '/task',
        handler:(request: Request) => {
            let newTodo = ({} as Task)
            newTodo = (request.payload as Task);
            tasks.push(newTodo);
            return newTodo;
        }
    },

    // DEL a task
    {
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
    },

    // PUT update a Task
    {
        method: 'PUT',
        path: '/task/{id}',
        handler:(request: Request) => {

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

    }
]

    })
}
*/

