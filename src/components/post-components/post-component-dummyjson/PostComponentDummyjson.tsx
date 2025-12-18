import type { IPostDummyjson } from "../../../models/model-dummyjson/post-model/IPost";
import type { FC } from "react";

interface PostComponentDummyjsonProps {
    item: IPostDummyjson;
}

const PostComponentDummyjson: FC<PostComponentDummyjsonProps> = ({ item }) => {
    return (
        <div className="border rounded-xl p-6 mb-4 bg-white shadow-sm max-w-2xl mx-auto">

            <h2 className="text-xl font-bold mb-2">
                {item.title}
            </h2>

            <p className="text-gray-700 mb-4">
                {item.body}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            <div className="text-sm text-gray-600 flex gap-6">
                <p>👍 {item.reactions.likes}</p>
                <p>👎 {item.reactions.dislikes}</p>
                <p>👁 {item.views}</p>
            </div>

            <p className="text-xs text-gray-400 mt-3">
                User ID: {item.userId}
            </p>

        </div>
    );
};

export default PostComponentDummyjson;
