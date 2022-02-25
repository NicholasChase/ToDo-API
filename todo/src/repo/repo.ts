import { Task } from "../todo";
import { v4 as uuidv4 } from 'uuid';
import { stringToDate } from "../Helpers/helpers";
const todos = require('../Models/modelsTodo')

interface reposotoryPattern<T> {
    findAll(),
    find(uuid: String),
    completedTodos(completed: Boolean)
    updateTodo( uuid: String, payload: T),
    create(payload: T),
    del(uuid: String),
}

class TodoRepo implements reposotoryPattern<Task> {

    // GET ALL TODOS
    public async findAll() {
        const mod = todos.modelTodo()
        const everyTodo = await mod.findAll();
        return everyTodo
    }

    //GET a single Todo from DB
    public async find(uuid) {
        const models = todos.modelTodo();
        const singleTodo = models.findAll({
            where: {
                uuid: uuid
            }
        })
        return singleTodo
    }

    // GET all complete and incomplete tasks
    public async completedTodos(complete) {
        const models = todos.modelTodo();
        
        const result = models.findAll({
            where: {
                completed: complete
            }
        })
         return result
}

    // PUT Update a DB
    public async updateTodo(uuid, payload) {
        const models = todos.modelTodo();
        await models.update({
            todo: payload['todo'],
            dueDate: stringToDate(payload['dueDate']),
            completed: payload['completed']
        }, {
            where: {
                uuid: uuid
            }
        });
        const updatedTodo = models.findAll({
            where: {
                uuid: uuid
            }
        });
        return updatedTodo;
    }

    // POST to the DB
    public async create(payload) {

        let dueDate = stringToDate(payload['dueDate']);
        let date: Date = new Date();

        const models = todos.modelTodo();
        const newTodo = await models.create({ 
            uuid: uuidv4(),
            todo: payload['todo'],
            createdDate: date,
            dueDate: dueDate,
            completed: payload['completed'],
        });
        
        const everyTodo = await models.findAll();
        return everyTodo;
    }

    //DEL from the database
    public async del(uuid) {
        const models = todos.modelTodo();
        await models.destroy({
            where: {
                uuid: uuid
            }
        });
        return await models.findAll();
    }
}

export const repo = new TodoRepo();