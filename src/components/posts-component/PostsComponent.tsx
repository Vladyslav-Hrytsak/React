import {useEffect, useState} from "react";
import {loadPosts} from "../../service/api.service.ts";
import type {IPost} from "../../models/PostModel.ts";
import PostComponent from "../post-component/PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        loadPosts().then(
            value => {
                setPosts(value)
            }
        )
    }, []);

    return (
        <div>
            {
                posts.map((post) => <PostComponent key ={post.id} item={post} />)
            }
        </div>
    );
};

export default PostsComponent;