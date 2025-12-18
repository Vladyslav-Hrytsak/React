import {useEffect, useState} from "react";
import {services} from "../../../service/api.service.ts";
import type {ICommentJsonplaceholder} from "../../../models/model-jsonplaceholder/IComment.ts";
import CommentComponentJsonplaceholder from "./CommentComponentJsonplaceholder.tsx";

const CommentsComponentJsonplaceholder = () => {

    const [comments, setComments] = useState<ICommentJsonplaceholder[]>([]);
    useEffect(() => {
        services.serviseJsonplaceholder.getCommentsJsonplaceholder()
            .then(
                comments => setComments(comments)
            )

    }, [])

    return (
        <div>
            {comments.map((comment) => <CommentComponentJsonplaceholder item={comment} key={comment.id} />)}
        </div>
    );
};

export default CommentsComponentJsonplaceholder;