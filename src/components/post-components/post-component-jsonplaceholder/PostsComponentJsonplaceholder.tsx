import {useEffect, useState} from "react";
import {services} from "../../../service/api.service.ts";
import type {IPostJsonplaceholder} from "../../../models/model-jsonplaceholder/IPost.ts";
import PostComponentJsonplaceholder from "./PostComponentJsonplaceholder.tsx";


const PostsComponentJsonplaceholder = () => {
    const [posts, setPosts] = useState<IPostJsonplaceholder[]>([]);
    useEffect(() => {
        services.serviseJsonplaceholder.getPostsJsonplaceholder()
            .then(
                posts => setPosts(posts)
            )

    }, [])


    return (
        <div>
            {posts.map((post) => <PostComponentJsonplaceholder item={post} key={post.id} />)}
        </div>
    );
};

export default PostsComponentJsonplaceholder;