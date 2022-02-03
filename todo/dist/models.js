"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasks = void 0;
let dueDate1 = "02/02/2022";
let newDate1 = new Date(dueDate1);
// newDate1 = new Date(2019, 2, 4, 11, 30);
// newDate1 = new Date("2019-08-02T11:30:00+10:00");
let dueDate2 = "01/03/2022";
let newDate2 = new Date(dueDate2);
let dueDate3 = "07/06/2022";
let newDate3 = new Date(dueDate3);
let date = new Date();
exports.tasks = [
    {
        id: 1,
        todo: "Go camping",
        dueDate: newDate1.toDateString(),
        complete: false
    },
    {
        id: 3,
        todo: "Go to work",
        dueDate: newDate2.toDateString(),
        complete: false
    },
    {
        id: 2,
        todo: "Go to the gym",
        dueDate: newDate3.toDateString(),
        complete: true
    },
    {
        id: 5,
        todo: "Go to sleep",
        dueDate: newDate2.toDateString(),
        complete: false
    },
    {
        id: 4,
        todo: "Go somewhere",
        dueDate: newDate3.toDateString(),
        complete: true
    },
];
//# sourceMappingURL=models.js.map