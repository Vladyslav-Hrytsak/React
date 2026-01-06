import type {IPost} from "../../model/IPost.ts";
import type {FC} from "react";

interface PostComponentProps {
    post: IPost
}

const PostComponent:FC<PostComponentProps> = ({post}: PostComponentProps) => {
    return (
        <div>
            <p>{post.id}{post.title} uerId ----- {post.userId}</p>
        </div>
    );
};

export default PostComponent;