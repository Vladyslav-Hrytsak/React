import type { FC } from "react";
import type {IComment} from "../../models/CommentModel.ts";

interface CommentComponentProps {
    item: IComment;
}

const CommentComponent: FC<CommentComponentProps> = ({ item }) => {
    return (
        <div className="border rounded-xl p-4 mb-4 bg-white">

            <h2 className="text-lg font-semibold">{item.name}</h2>

            <p className="text-sm text-gray-500">ID:{item.id}, UserID:{item.postId}</p>
            <p className="text-sm text-gray-500">Email: {item.email}</p>


            <div className="mt-2 text-sm">
                <p><b>Body:</b> {item.body}</p>
            </div>

        </div>
    );
};

export default CommentComponent;
