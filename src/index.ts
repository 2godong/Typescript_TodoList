import TodoItem from "./TodoItem";

// const data = [
//   { id: 1, task: "장보기", complete: true },
//   { id: 2, task: "TS 째려보기", complete: false },
// ];

// console.log("My Todo List");
// for (let i = 0; i < data.length; i++) {
//   let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
//   todoItem.printDetails();
// }

import { data } from "./data";
import TodoCollection from "./TodoCollection";

const sampleTodos: TodoItem[] = data.map(
  (item) => new TodoItem(item.id, item.task, item.complete),
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());
