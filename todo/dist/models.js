"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasks = void 0;
const uuid_1 = require("uuid");
let newDate1 = new Date("02/02/2022 05:00 GMT-0000");
let newDate2 = new Date("07/06/2022");
let newDate3 = new Date("01/03/2022");
let date = new Date();
exports.tasks = [
    {
        uuid: (0, uuid_1.v4)(),
        id: 1,
        todo: "Go camping",
        createdDate: date,
        dueDate: newDate1,
        complete: false
    },
    {
        uuid: (0, uuid_1.v4)(),
        id: 3,
        todo: "Go to work",
        createdDate: date,
        dueDate: newDate2,
        complete: false
    },
    {
        uuid: (0, uuid_1.v4)(),
        id: 2,
        todo: "Go to the gym",
        createdDate: date,
        dueDate: newDate3,
        complete: true
    },
    {
        uuid: (0, uuid_1.v4)(),
        id: 5,
        todo: "Go to sleep",
        createdDate: date,
        dueDate: newDate2,
        complete: false
    },
    {
        uuid: (0, uuid_1.v4)(),
        id: 4,
        todo: "Go somewhere",
        createdDate: date,
        dueDate: newDate3,
        complete: true
    },
];
//# sourceMappingURL=models.js.map