import type { IPost } from "../../models/IPost";
import type { FC } from "react";

interface PostComponentProps {
    item: IPost;
}

const PostComponent: FC<PostComponentProps> = ({ item }) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "16px" }}>
            <p><b>ID:</b> {item.id}</p>
            <p><b>User ID:</b> {item.userId}</p>

            <p><b>Title:</b> {item.title}</p>
            <p><b>Body:</b> {item.body}</p>

            <p>
                <b>Tags:</b> {item.tags.join(", ")}
            </p>

            <p><b>Likes:</b> {item.reactions.likes}</p>
            <p><b>Dislikes:</b> {item.reactions.dislikes}</p>

            <p><b>Views:</b> {item.views}</p>
        </div>
    );
};

export default PostComponent;
