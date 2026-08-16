"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("Hello Todo List!");
// console.log("Hello Todo List!");
// console.log("Hello Todo List!");
// console.log("Hello Todo List!");
const TodoItem_1 = __importDefault(require("./TodoItem"));
const data = [
    { id: 1, task: "장보기", complete: true },
    { id: 2, task: "TS 째려보기", complete: false },
];
console.log("My Todo List");
for (let i = 0; i < data.length; i++) {
    let todoItem = new TodoItem_1.default(data[i].id, data[i].task, data[i].complete);
    todoItem.printDetails();
}
//# sourceMappingURL=index.js.map