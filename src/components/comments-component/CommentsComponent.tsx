import CommentComponent from "../comment-component/CommentComponent.tsx";
import {useEffect} from "react";
import {servises} from "../../services/api.service.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {commentsSliceActions} from "../../redux/slices/commentSlice.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";

const CommentsComponent = () => {

    const {comments} = useAppSelector(({commentsSlice}) => commentsSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        servises.getComments().then(
            (comments) => {
                dispatch(commentsSliceActions.loadComments(comments));
            },
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