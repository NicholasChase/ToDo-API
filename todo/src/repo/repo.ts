import { Task } from "../todo";
import { findAll, updateTodo, create, del, find, incompleteTodos, completeTodos } from "./sequelize";

interface reposotoryPattern<T> {
    findAll(),
    find(uuid: String),
    incompleteTodos(),
    completeTodos(),
    updateTodo( uuid: String, payload: String),
    create(newTodo: T),
    del(uuid: String),
}

class TodoRepo implements reposotoryPattern<Task> {

    private task: Task[] = [];

    // GET ALL TODOS
    public findAll() {
        return findAll();
    }

    //GET a single Todo from DB
    public find(uuid) {
        return find(uuid);
    }

    // GET allincomplete todos
    public incompleteTodos() {
        return incompleteTodos();
    }

    // GET all completed todos
    public completeTodos() {
        return completeTodos();
    }

    // PUT Update a DB
    public updateTodo(uuid, payload) {
        return updateTodo(uuid, payload );
    }

    // POST to the DB
    public create(newTodo) {
        return create(newTodo);
    }

    //DEL from the database
    public del(uuid) {
        return del(uuid);
    }
}

export const repo = new TodoRepo();
