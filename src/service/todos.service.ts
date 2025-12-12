import type {ITodo} from "../models/Todo.ts";

const baseUrl = import.meta.env.VITE_API_URL + "/todos";

export const loadTodos = async ():Promise<ITodo[]> =>{
    return await fetch(baseUrl)
        .then((response) => response.json())
}
