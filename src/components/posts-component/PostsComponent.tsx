import { useEffect} from "react";
import {servises} from "../../services/api.service.ts";
import PostComponent from "../post-component/PostComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {postsSliceActions} from "../../redux/slices/postSlice.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";


const PostsComponent= () => {

    const {posts} = useAppSelector(({postsSlice}) => postsSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        servises.getPosts().then(
                (posts) => {
                    dispatch(postsSliceActions.loadPosts(posts));
                }
            )
    },[])


    return (
        <div className="max-w-2xl mx-auto">
            {
                posts.map((post) => <PostComponent key={post.id} item = {post} />)
            }
        </div>
    );
};

export default PostsComponent;