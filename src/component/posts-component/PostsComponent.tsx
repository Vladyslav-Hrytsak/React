import {useEffect, useState} from "react";
import {getAll} from "../../servise/general.api.service.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import type {IPost} from "../../models/IPost.ts";
import PostComponent from "./PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getAll<IBaseResponseModel & {posts:IPost[]}>('/posts')
            .then(value => setPosts(value.posts))
    }, []);


    return (
        <div>
            {posts.map((post: IPost) => <PostComponent item = {post} key={post.id}/>)}

        </div>
    );
};

export default PostsComponent;