import type {ITodo} from "../../models/Todo.ts";
import type {FC} from "react";

interface TodoComponentProps {
    item: ITodo
}

const TodoComponent:FC<TodoComponentProps> = ({item:{id,userId,completed,todo}}: TodoComponentProps) => {
    return (
        <div className='border-2 m-4 p-4 text-center bg-blue-100 rounded-lg '>
            <h2 className='text-2xl'> {todo}{id}</h2>
            <p>{userId}</p>
            <p className='text-4xl'>{completed.toString()}</p>
        </div>
    );
};
export default TodoComponent;