import {useEffect, useState} from "react";
import {loadComment} from "../../service/api.service.ts";
import type {IComment} from "../../models/CommentModel.ts";
import CommentComponent from "../comment-component/CommentComponent.tsx";

const CommentsComponent = () => {

    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        loadComment().then(
            comments => {
                setComments(comments)
            }
        )
    }, []);


    return (
        <div>
            {
                comments.map((comment) => (<CommentComponent item={comment} key={comment.id} />))
            }
        </div>
    );
};

export default CommentsComponent;