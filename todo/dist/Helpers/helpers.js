"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDate = exports.dateOrder = exports.numericalOrder = void 0;
const models_1 = require("../models");
function numericalOrder() {
    var sortedTasks = models_1.tasks;
    sortedTasks.sort((task1, task2) => task1.id - task2.id);
    return sortedTasks;
}
exports.numericalOrder = numericalOrder;
function dateOrder() {
    const todo = models_1.tasks;
    let sortedTasks = todo.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
    return sortedTasks;
}
exports.dateOrder = dateOrder;
function stringToDate(strDate) {
    let dateObj = new Date(strDate);
    return dateObj;
}
exports.stringToDate = stringToDate;
//# sourceMappingURL=helpers.js.map