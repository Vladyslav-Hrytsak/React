import {useEffect, useState} from "react";
import {services} from "../../../service/api.service.ts";
import type {IPostDummyjson} from "../../../models/model-dummyjson/post-model/IPost.ts";
import PostComponentDummyjson from "./PostComponentDummyjson.tsx";

const PostsComponentDummyjson = () => {

    const [posts, setPosts] = useState<IPostDummyjson[]>([]);
    useEffect(() => {
        services.serviseDummyjson.getPostsDummyjson()
            .then(
                posts => setPosts(posts)
            )

    },[])


    return (
        <div>
            {
                posts.map((post) => <PostComponentDummyjson item={post} key={post.id} />)
            }
        </div>
    );
};

export default PostsComponentDummyjson;