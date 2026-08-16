import TodoItem from "./TodoItem";
declare class TodoCollection {
    userName: string;
    todoItems: TodoItem[];
    private nextId;
    private itemMap;
    constructor(userName: string, todoItems?: TodoItem[]);
    getTodoById(id: number): TodoItem | undefined;
    addTodo(task: string): number;
    makeComplete(id: number, complete: boolean): void;
}
export default TodoCollection;
//# sourceMappingURL=TodoCollection.d.ts.map