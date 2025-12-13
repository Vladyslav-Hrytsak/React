import type {ITodo} from "../models/Todo.ts";
import type {ITodoObject} from "../models/TodosDummyjson.ts";

const baseUrl = import.meta.env.VITE_API_URL + "/todos";

export const loadTodos = async ():Promise<ITodo[]> =>{
    return await fetch(baseUrl)
        .then((response) => response.json())
}

export const loadTodosDummyjson = async ():Promise<ITodo[]> =>{
    const response:ITodoObject =  await fetch(baseUrl)
        .then((response) => response.json())
    return response.todos;
}
