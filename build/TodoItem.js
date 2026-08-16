"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    id;
    task;
    complete;
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.default = TodoItem;
//# sourceMappingURL=TodoItem.js.map