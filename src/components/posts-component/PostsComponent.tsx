import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {postsSliceActions} from "../../redux/slices/postSlice.ts";
import PostComponent from "./PostComponent.tsx";

const PostsComponent = () => {

    const dispatch = useAppDispatch();
    const {posts} = useAppSelector(({postSlice}) => postSlice);

    useEffect(() => {
        dispatch(postsSliceActions.loadPosts())
    }, [dispatch]);


    return (
        <div>
            {
                posts.map((post) => (<PostComponent post={post} key = {post.id}/>))
            }
        </div>
    );
};

export default PostsComponent;