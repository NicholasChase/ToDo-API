import { v4 as uuidv4 } from 'uuid';

let newDate1 = new Date("02/02/2022 05:00 GMT-0000");
let newDate2 = new Date("07/06/2022");
let newDate3 = new Date("01/03/2022");
let date: Date = new Date();

export const tasks = [
    {
        uuid: uuidv4(),
        id: 1,
        todo: "Go camping",
        createdDate: date,
        dueDate: newDate1,
        complete: false
    },
    {
        uuid: uuidv4(),
        id: 3,
        todo: "Go to work",
        createdDate: date,
        dueDate: newDate2,
        complete: false
    },
    {
        uuid: uuidv4(),
        id: 2,
        todo: "Go to the gym",
        createdDate: date,
        dueDate: newDate3,
        complete: true
    },
    {
        uuid: uuidv4(),
        id: 5,
        todo: "Go to sleep",
        createdDate: date,
        dueDate: newDate2,
        complete: false
    },
    {
        uuid: uuidv4(),
        id: 4,
        todo: "Go somewhere",
        createdDate: date,
        dueDate: newDate3,
        complete: true
    },
];