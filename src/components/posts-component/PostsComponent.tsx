import {type FC, useEffect, useState} from "react";
import {servises} from "../../services/api.service.ts";
import type {IPost} from "../../models/PostModel.ts";


type PostTypeProps = {
    userId: string;
}

const PostsComponent:FC<PostTypeProps> = ({userId}) => {

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        if (userId){
            servises.getPostsOfUsersById(+userId).then(
                (posts) => setPosts(posts),
            )
        }
    },[userId])


    return (
        <div className="max-w-2xl mx-auto">
            {
                posts.map((post) => (<div>{post.title}</div>))
            }
            {/*<PostComponent key={post.id} item = {post} />*/}
        </div>
    );
};

export default PostsComponent;