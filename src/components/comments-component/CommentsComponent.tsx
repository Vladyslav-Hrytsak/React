import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {commentsSliceActions} from "../../redux/slices/commentsSlice.ts";
import CommentComponent from "./CommentComponent.tsx";

const CommentsComponent = () => {

    const dispatch = useAppDispatch();
    const {comments} = useAppSelector(({commentsSlice}) => commentsSlice);

    useEffect(() => {
        dispatch(commentsSliceActions.loadComments())
    }, [dispatch]);

    return (
        <div>
            {
                comments.map((comment) => (<CommentComponent comment={comment} key={comment.id} />))
            }
        </div>
    );
};

export default CommentsComponent;