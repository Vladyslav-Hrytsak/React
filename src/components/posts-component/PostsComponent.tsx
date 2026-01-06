import { useEffect} from "react";
import PostComponent from "../post-component/PostComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {postsSliceActions} from "../../redux/slices/postSlice.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";


const PostsComponent= () => {

    const {posts, loadState} = useAppSelector(({postsSlice}) => postsSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postsSliceActions.loadPosts())
    },[])


    return (
        <div className="max-w-2xl mx-auto">
            {!loadState && <div>LOADING....</div>}
            {
                posts.map((post) => <PostComponent key={post.id} item = {post} />)
            }
        </div>
    );
};

export default PostsComponent;