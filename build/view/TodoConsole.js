"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as inquirer from "inquirer";
const inquirer_1 = __importDefault(require("inquirer"));
const TodoCollection_1 = __importDefault(require("../service/TodoCollection"));
const TodoItem_1 = __importDefault(require("../model/TodoItem"));
const data_1 = require("../data");
const Commands_1 = require("../model/Commands");
class TodoConsole {
    todoCollection;
    constructor() {
        const sampleTodos = data_1.data.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
        this.todoCollection = new TodoCollection_1.default("My Todo List");
    }
    displaylList() {
        console.log(`=====${this.todoCollection.userName}=====` +
            `(${this.todoCollection.getItemCount().incomplete} item todo)`);
        this.todoCollection
            .getTodoItems(true)
            .forEach((item) => item.printDetails());
    }
    promptUser() {
        console.clear();
        this.displaylList();
        inquirer_1.default
            .prompt({
            // type: "list",
            type: "select",
            name: "command",
            message: "Choose option",
            choices: Object.values(Commands_1.Commands),
        })
            .then((answers) => {
            if (answers["command"] !== Commands_1.Commands.Quit) {
                this.promptUser();
            }
        });
    }
}
exports.default = TodoConsole;
//# sourceMappingURL=TodoConsole.js.map