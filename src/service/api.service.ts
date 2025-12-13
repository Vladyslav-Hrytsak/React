import type {IComment} from "../models/CommentModel.ts";
const endpoint = import.meta.env.VITE_API_URL + "/comments";

export const loadComment = async ():Promise<IComment[]> =>{
    return await fetch(endpoint)
        .then((response) => response.json())
}
