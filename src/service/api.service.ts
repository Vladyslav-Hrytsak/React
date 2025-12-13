import type {IComment} from "../models/CommentModel.ts";
import type {ICommentDummyjson} from "../models/CommentModelDummyjson.ts";
const endpoint = import.meta.env.VITE_API_URL + "/comments";

export const loadComment = async ():Promise<IComment[]> =>{
    const response:ICommentDummyjson =  await fetch(endpoint)
        .then((response) => response.json())
    return response.comments
}
