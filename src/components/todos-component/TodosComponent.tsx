import {useEffect, useState} from "react";
import {loadTodosDummyjson} from "../../service/todos.service.ts";
import type {ITodo} from "../../models/Todo.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";

const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        loadTodosDummyjson().then(
            val => setTodos(val),
        )
    }, []);

    return (
        <div>
            {
                todos.map((todo) => <TodoComponent item = {todo} key ={todo.id} />)
            }
        </div>
    );
};

export default TodosComponent;