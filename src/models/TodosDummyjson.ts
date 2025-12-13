import type {ITodo} from "./Todo.ts";

export interface ITodoObject {
    todos: ITodo[]
    total: number
    skip: number
    limit: number
}

