import {useEffect, useState} from "react";
import {services} from "../../../service/api.service.ts";
import type {ICommentDummyjson} from "../../../models/model-dummyjson/comment-model/IComment.ts";
import CommentComponentDummyjson from "./CommentComponentDummyjson.tsx";

const CommentsComponentDummyjson = () => {

    const [comments, setComments] = useState<ICommentDummyjson[]>([]);
    useEffect(() => {
        services.serviseDummyjson.getCommentsDummyjson()
            .then(
                comments => setComments(comments)
            )

    }, [])

    return (
        <div>
            {comments.map((comment) => <CommentComponentDummyjson item={comment} key={comment.id} />)}
        </div>
    );
};

export default CommentsComponentDummyjson;