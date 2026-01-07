import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import ComplexComponent from "../components/complex-component/ComplexComponent.tsx";
import {useEffect} from "react";
import {usersSliceActions} from "../redux/slices/userSlice.tsx";
import {postsSliceActions} from "../redux/slices/postSlice.ts";
import {commentsSliceActions} from "../redux/slices/commentsSlice.ts";

const ComplexPage = () => {

    const dispatch = useAppDispatch();

    const {users} = useAppSelector(({userSlice}) => userSlice);
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const {comments} = useAppSelector(({commentsSlice}) => commentsSlice);

    useEffect(() => {
        if(!users.length){
            dispatch(usersSliceActions.loadUsers());
        }
        if(!posts.length){
            dispatch(postsSliceActions.loadPosts());
        }
        if(!comments.length){
            dispatch(commentsSliceActions.loadComments());
        }
    }, []);





    return (
        <div>
            {<ComplexComponent users = { users } posts = { posts } comments = { comments } />}
        </div>
    );
};

export default ComplexPage;