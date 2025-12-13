import type {IPost} from "../models/PostModel.ts";
import type {IPostModelDummyjson} from "../models/PostModelDummyjson.ts";

const endpoint = import.meta.env.VITE_API_URL + "/posts";

export const loadPosts = async ():Promise<IPost[]> =>{
    const response:IPostModelDummyjson = await fetch(endpoint)
        .then((response) => response.json())
        return response.posts;
}