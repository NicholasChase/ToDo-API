const instances = require('hapi-sequelizejs').instances;

export async function findAll() {
    const [results] = await instances.dbs.mysql.sequelize.query
    (`SELECT * FROM todo`);
    return results
}

//GET a single todo
export async function find(uuid) {
    const [result] = await instances.dbs.mysql.sequelize.query
    (`SELECT * FROM todo 
    WHERE todo_uuid = '${uuid}'`);
    return result;
}

// PUT update a todo
export async function updateTodo(uuid, payload) {
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

// POST create a new todo
export async function create(newTodo) {
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

// DEL Delete from database
export async function del(uuid) {
    await instances.dbs.mysql.sequelize.query
    (`DELETE FROM todo 
    WHERE todo_uuid='${uuid}'`);
    const [result] = await instances.dbs.mysql.sequelize.query('SELECT * FROM todo');
    return result
}

// GET incompleted tasks
export async function incompleteTodos() {
    const[result] = await instances.dbs.mysql.sequelize.query
    (`SELECT * FROM todo 
    WHERE todo_completed = 0`);
    return result;
}

// GET completed tasks
export async function completeTodos() {
    const [result] = await instances.dbs.mysql.sequelize.query
    (`SELECT * FROM todo 
    WHERE todo_completed = 1`);
    return result;
}