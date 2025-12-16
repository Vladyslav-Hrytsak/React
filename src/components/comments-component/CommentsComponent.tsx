import {useEffect, useState} from "react";
import {servises} from "../../services/api.service.ts";
import type {IComment} from "../../models/CommentModel.ts";
import CommentComponent from "../comment-component/CommentComponent.tsx";

const CommentsComponent = () => {

    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        servises.getComments().then(
            (comments) => setComments(comments),
        )
    },[])

    return (
        <div className="max-w-2xl mx-auto">
            {
                comments.map((comment) => (<CommentComponent key={comment.id} item = {comment} />))
            }
        </div>
    );
};

export default CommentsComponent;