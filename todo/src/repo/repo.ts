import { Task } from "../todo";

interface reposotoryPattern<T> {
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

    // GET all tasks
    public findAll() {
        return this.task
    }

    // POST
    public create(newTask) {
        this.task.push(newTask);
        return newTask
    }

    // GET a single task
    public find(uuid) {
        const found = this.task.filter(tasks => tasks.uuid == uuid)
        return found[0];
    }

    // DEL
    public del(uuid) {
        //Find element by uuid
        const result = this.task.filter(tasks => tasks.uuid == uuid);
        
        if(result.length === 0) {
            return `${uuid} does not exist`
        }

        const element = result[0]

        // find index of uuid
        const index = this.task.indexOf(element)

        if (index < 0) {
            return
        }

        // splice the array at the indexOf
        this.task.splice(index, 1);
        return this.task

    }

    // Update PUT
    public updateTodo(uuid, payload) {
        const updateTodo = this.task.filter(tasks => tasks.uuid == uuid)[0]
        
        updateTodo.todo = payload['todo'];
        updateTodo.dueDate = payload['dueDate'];
        updateTodo.complete = payload['completed'];

        return updateTodo
    }

    // GET incomplete status
    public incompleteTodos() {
        const incompleteTodos = this.task.filter(task => false === task.complete);
        return incompleteTodos;
    }

    // GET complete status
    public completeTodos() {
        const completedTodo = this.task.filter(task => true === task.complete)
        return completedTodo;
    }

    // GET order the todos by date
    public orderDates() {
        let sortedTasks = this.task.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
        return sortedTasks
    }

}

export const repo = new TodoRepo();
