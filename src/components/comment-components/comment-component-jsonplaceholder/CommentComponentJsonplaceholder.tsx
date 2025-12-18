import type { ICommentJsonplaceholder } from "../../../models/model-jsonplaceholder/IComment";
import type { FC } from "react";

interface CommentComponentJsonplaceholderProps {
    item: ICommentJsonplaceholder;
}

const CommentComponentJsonplaceholder: FC<CommentComponentJsonplaceholderProps> = ({ item }) => {
    return (
        <div className="border rounded-xl p-4 mb-3 bg-white shadow-sm max-w-xl mx-auto">

            <h3 className="font-semibold text-sm mb-1">
                {item.name}
            </h3>

            <p className="text-xs text-gray-500 mb-2">
                {item.email}
            </p>

            <p className="text-gray-700 mb-3 whitespace-pre-line">
                {item.body}
            </p>

            <div className="text-sm text-gray-500">
                <span>Post ID: {item.postId}</span>
            </div>

        </div>
    );
};

export default CommentComponentJsonplaceholder;
