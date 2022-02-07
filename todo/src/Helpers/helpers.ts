import { tasks } from "../models";

export function numericalOrder() {
    var sortedTasks = tasks;
    sortedTasks.sort((task1, task2) => task1.id - task2.id);
    return sortedTasks;
}

export function dateOrder() {
    const todo = tasks;
    let sortedTasks = todo.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
    return sortedTasks;
}

export function stringToDate(strDate) {
    let dateObj = new Date(strDate);
    return dateObj;
}