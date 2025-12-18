import type { ICommentDummyjson } from "../../../models/model-dummyjson/comment-model/IComment";
import type { FC } from "react";

interface CommentComponentDummyjsonProps {
    item: ICommentDummyjson;
}

const CommentComponentDummyjson: FC<CommentComponentDummyjsonProps> = ({ item }) => {
    return (
        <div className="border rounded-xl p-4 mb-3 bg-white shadow-sm max-w-xl mx-auto">

            <h3 className="font-semibold text-sm mb-1">
                {item.user.fullName}
                <span className="text-gray-500 font-normal">
                    {" "}(@{item.user.username})
                </span>
            </h3>

            <p className="text-gray-700 mb-3">
                {item.body}
            </p>

            <div className="text-sm text-gray-500 flex gap-4">
                <span>❤️ {item.likes}</span>
                <span>Post ID: {item.postId}</span>
                <span>User ID: {item.user.id}</span>
            </div>

        </div>
    );
};

export default CommentComponentDummyjson;
