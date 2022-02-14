import { Task } from "../todo";

export interface reposotoryPattern<T> {
    find(findTodo: String),
    findAll(),
    create(makeATodo: T), 
    del(delTask: String),
    updateTodo(updateTask: String, payload: T),
    incompleteTodos(),
    completeTodos(),
    orderDates(),
}

class TodoRepo implements reposotoryPattern<Task> {

    private task: Task[] = [];

    // Get all tasks
    public findAll() {
        return this.task
    }

    // Post
    public create(newTask) {
        this.task.push(newTask);
        return newTask
    }

    // Get a single task
    public find(uuid) {
        
        const found = this.task.some(tasks => tasks.uuid == uuid);
                if(found) {
                    return(this.task.filter(tasks => tasks.uuid == uuid));
                } else {
                    return (`No task with the ID of ${uuid}`)
                } 
    }

    // Delete 
    public del(uuid) {
        const found = this.task.some(tasks => tasks.uuid == uuid);
            if(found) {
                this.task.map(tasks => {
                    if (tasks.uuid == uuid) {
                        this.task.splice(this.task.indexOf(tasks), 1);
                    }  
                });
                return(this.task.filter(task => task.uuid !== parseInt(uuid)));
            } else {
                return (`No task with the ID of ${uuid}`)
            }
    }

    // Update
    public updateTodo(uuid, payload) {
        const found = this.task.some(tasks => tasks.uuid == uuid);
        if(found){
            this.task.map(tasks => {
                if (tasks.uuid == uuid) {
                    tasks.todo = payload['todo'];
                    tasks.dueDate = payload['dueDate'];
                    tasks.complete = payload['completed'];
                }
            })
            return this.task.find(task => task.uuid == uuid)
        } else {
            return (`No task with the ID of ${uuid}`)
        }
    }

    // incomplete status
    public incompleteTodos() {
        const found = this.task.some(task => false === task.complete);
        if(found) {
            return(this.task.filter(task => false === task.complete))
        } else {
            return (`No todo is completed`);
        }
    }

    // incomplete status
    public completeTodos() {
        const found = this.task.some(task => true === task.complete);
        if(found) {
            return(this.task.filter(task => true === task.complete))
        } else {
            return (`No todo is completed`);
        }
    }

    // order the todos by date
    public orderDates() {
        let sortedTasks = this.task.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
        return sortedTasks
    }

}

export const repo = new TodoRepo();
