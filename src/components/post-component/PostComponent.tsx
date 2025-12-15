import type {IPost} from "../../models/PostModel.ts";
import type {FC} from "react";

interface PostComponentProps {
    item: IPost
}

const PostComponent:FC<PostComponentProps> = ({item}: PostComponentProps) => {
    return (
        <div  className='bg-yellow-200 items-center text-center border-2'>
            <h2 className='text-3xl'>id: {item.id}, title:{item.title}, userID: {item.userId} </h2>
            <p className='text-center'>{item.body}</p>
        </div>
    );
};

export default PostComponent;