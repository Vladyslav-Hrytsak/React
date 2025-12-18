import type { IPostJsonplaceholder } from "../../../models/model-jsonplaceholder/IPost";
import type { FC } from "react";

interface PostComponentJsonplaceholderProps {
    item: IPostJsonplaceholder;
}

const PostComponentJsonplaceholder: FC<PostComponentJsonplaceholderProps> = ({ item }) => {
    return (
        <div className="border rounded-xl p-5 mb-4 bg-white shadow-sm max-w-2xl mx-auto">

            <h2 className="text-lg font-semibold mb-2">
                {item.title}
            </h2>

            <p className="text-gray-700 whitespace-pre-line">
                {item.body}
            </p>

            <div className="text-sm text-gray-500 mt-3">
                <span>Post ID: {item.id}</span>
                <span className="ml-4">User ID: {item.userId}</span>
            </div>

        </div>
    );
};

export default PostComponentJsonplaceholder;
