import type { FC } from "react";
import type {IPost} from "../../models/PostModel.ts";

interface PostComponentProps {
    item: IPost;
}

const PostComponent: FC<PostComponentProps> = ({ item }) => {
    return (
        <div className="border rounded-xl p-4 mb-4 bg-white">

            <h2 className="text-lg font-semibold">{item.title}</h2>

            <p className="text-sm text-gray-500">ID:{item.id}, UserID:{item.userId}</p>

            <div className="mt-2 text-sm">
                <p><b>Body:</b> {item.body}</p>
            </div>

        </div>
    );
};

export default PostComponent;
