import type {IComments} from "../../model/IComments.ts";
import type {FC} from "react";

interface CommentComponentProps {
    comment: IComments
}

const CommentComponent:FC<CommentComponentProps> = ({comment}: CommentComponentProps) => {
    return (
        <div>
            <p>{comment.id}--{comment.body}</p>
            <p>post ID == {comment.postId}</p>
        </div>
    );
};

export default CommentComponent;