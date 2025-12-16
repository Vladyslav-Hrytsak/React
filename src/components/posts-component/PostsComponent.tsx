import {useEffect, useState} from "react";
import {servises} from "../../services/api.service.ts";
import type {IPost} from "../../models/PostModel.ts";
import PostComponent from "../post-component/PostComponent.tsx";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        servises.getPosts().then(
            (posts) => setPosts(posts),
        )
    },[])

    return (
        <div className="max-w-2xl mx-auto">
            {
                posts.map((post) => (<PostComponent key={post.id} item = {post} />))
            }
        </div>
    );
};

export default PostsComponent;