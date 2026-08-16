"use strict";
// import TodoItem from "./model/TodoItem";
// import { data } from "./data";
// import TodoCollection from "./service/TodoCollection";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import TodoConsole from "./view/TodoConsole";
// const sampleTodos: TodoItem[] = data.map(
//   (item) => new TodoItem(item.id, item.task, item.complete),
// );
// const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);
// myTodoCollection.addTodo("자바스크립트 학습");
// myTodoCollection.addTodo("놀기");
// myTodoCollection.makeComplete(3, true);
// console.log(`${myTodoCollection.userName}`);
// // myTodoCollection.todoItems.forEach((item) => item.printDetails());
// myTodoCollection.removeComplete();
// myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
// console.log("==============");
// myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails());
const TodoConsole_1 = __importDefault(require("./view/TodoConsole"));
const todoConsole = new TodoConsole_1.default();
todoConsole.promptUser();
//# sourceMappingURL=index.js.map