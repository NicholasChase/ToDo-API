const instances = require('hapi-sequelizejs').instances;
const sequelize = require('sequelize');

module.exports.modelTodo = function  () {
    
    const todo = instances.dbs.mysql.sequelize.define('dbTodo', {
    uuid: {
        type: sequelize.DataTypes.STRING,
        primaryKey: true
    },
    todo: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
    },
    createdDate: {
        type: sequelize.DataTypes.DATE,
        allowNull: false
    },
    dueDate: {
        type: sequelize.DataTypes.DATE,
        allowNull: false
    },
    completed: {
        type: sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
    }, {
        freezeTableName: true,
        tableName: 'dbTodo',
        timestamps: false

    },
);

return todo
}