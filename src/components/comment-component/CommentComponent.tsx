import type {FC} from "react";
import type {IComment} from "../../models/CommentModel.ts";

interface CommentComponentProps {
    item: IComment
}

const CommentComponent:FC<CommentComponentProps> = ({item}: CommentComponentProps) => {
    return (
        <div  className='bg-red-300 border-2 m-2 p-2 w-3/4 mx-auto text-center'>
            <h2>{item.postId}, {item.name}</h2>
            <p>{item.body}</p>
        </div>
    );
};

export default CommentComponent;