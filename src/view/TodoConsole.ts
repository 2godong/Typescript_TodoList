// import * as inquirer from "inquirer";
import inquirer from "inquirer";
import TodoCollection from "../service/TodoCollection";
import TodoItem from "../model/TodoItem";
import { data } from "../data";
import { Commands } from "../model/Commands";

class TodoConsole {
  private todoCollection: TodoCollection;

  constructor() {
    const sampleTodos: TodoItem[] = data.map(
      (item) => new TodoItem(item.id, item.task, item.complete),
    );
    this.todoCollection = new TodoCollection("My Todo List");
  }

  displaylList(): void {
    console.log(
      `=====${this.todoCollection.userName}=====` +
        `(${this.todoCollection.getItemCount().incomplete} item todo)`,
    );
    this.todoCollection
      .getTodoItems(true)
      .forEach((item) => item.printDetails());
  }

  promptUser(): void {
    console.clear();
    this.displaylList();

    inquirer
      .prompt({
        // type: "list",
        type: "select",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
      })
      .then((answers) => {
        if (answers["command"] !== Commands.Quit) {
          this.promptUser();
        }
      });
  }
}

export default TodoConsole;
