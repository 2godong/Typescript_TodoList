// import TodoItem from "./model/TodoItem";
// import { data } from "./data";
// import TodoCollection from "./service/TodoCollection";

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

import TodoConsole from "./view/TodoConsole";

const todoConsole = new TodoConsole();
todoConsole.promptUser();
