import { Task } from "../todo";
import { v4 as uuidv4 } from 'uuid';
import { stringToDate } from "../Helpers/helpers";

const instances = require('hapi-sequelizejs').instances;

interface reposotoryPattern<T> {
    findAll(),
    find(uuid: String),
    // incompleteTodos(),
    // completeTodos(),
    completedTodos(completed: Boolean)
    updateTodo( uuid: String, payload: T),
    create(payload: T),
    del(uuid: String),
}

class TodoRepo implements reposotoryPattern<Task> {

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


    // GET all complete and incomplete tasks
    public async completedTodos(complete) {
        if (complete == true) {
            const [result] = await instances.dbs.mysql.sequelize.query
            (`SELECT * FROM todo WHERE todo_completed = :completed`,
            {
                replacements: { completed: `1` } 
            });
            return result;
        } else {
            const [result] = await instances.dbs.mysql.sequelize.query
            (`SELECT * FROM todo WHERE todo_completed = :completed`,
            {
                replacements: { completed: `0` } 
            });
            return result;
        }
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
    public async create(payload) {
        let dueDate = stringToDate(payload['dueDate']);
        let date: Date = new Date();


        await instances.dbs.mysql.sequelize.query
        (`INSERT INTO todo 
        VALUES
        ("${uuidv4()}", 
        "${payload['todo']}", 
        "${date}",
        "${dueDate}",
        ${payload['completed']})`);
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
