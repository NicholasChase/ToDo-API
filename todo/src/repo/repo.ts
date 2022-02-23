import { Task } from "../todo";
// import { findAll, updateTodo, create, del, find, incompleteTodos, completeTodos } from "./sequelize";
const instances = require('hapi-sequelizejs').instances;

interface reposotoryPattern<T> {
    findAll(),
    find(uuid: String),
    incompleteTodos(),
    completeTodos(),
    updateTodo( uuid: String, payload: T),
    create(newTodo: T),
    del(uuid: String),
}

class TodoRepo implements reposotoryPattern<Task> {

    private task: Task[] = [];

    // GET ALL TODOS
    public async findAll() {
        const [results] = await instances.dbs.mysql.sequelize.query
        (`SELECT * FROM todo`);
        return results
    }

    //GET a single Todo from DB
    public async find(uuid) {
        const [result] = await instances.dbs.mysql.sequelize.query
        (`SELECT * FROM todo 
        WHERE todo_uuid = '${uuid}'`);
        return result;
    }

    // GET allincomplete todos
    public async incompleteTodos() {
        const[result] = await instances.dbs.mysql.sequelize.query
        (`SELECT * FROM todo 
        WHERE todo_completed = 0`);
        return result;
    }

    // GET all completed todos
    public async completeTodos() {
        const [result] = await instances.dbs.mysql.sequelize.query
        (`SELECT * FROM todo 
        WHERE todo_completed = 1`);
        return result;
    }

    // PUT Update a DB
    public async updateTodo(uuid, payload) {
        var date = new Date(payload['dueDate']);
        await instances.dbs.mysql.sequelize.query
        (`UPDATE todo 
        SET todo_todo = '${payload['todo']}',
        todo_dueDate = '${date}',
        todo_completed = ${payload['completed']}
        WHERE todo_uuid = "${uuid}"`);
        const [updatedTodo] = await instances.dbs.mysql.sequelize.query(`SELECT * FROM todo WHERE todo_uuid = "${uuid}"`);
        return updatedTodo;
    }

    // POST to the DB
    public async create(newTodo) {
        await instances.dbs.mysql.sequelize.query
        (`INSERT INTO todo 
        VALUES
        ("${newTodo.uuid}", 
        "${newTodo.todo}", 
        "${newTodo.createdDate}",
        "${newTodo.dueDate}",
        ${newTodo.complete})`);
        const [result] = await instances.dbs.mysql.sequelize.query('SELECT * FROM todo');
        return await result
    }

    //DEL from the database
    public async del(uuid) {
        await instances.dbs.mysql.sequelize.query
        (`DELETE FROM todo 
        WHERE todo_uuid='${uuid}'`);
        const [result] = await instances.dbs.mysql.sequelize.query('SELECT * FROM todo');
        return result
    }
}

export const repo = new TodoRepo();
