import type {IPost} from "../models/PostModel.ts";

const endpoint = import.meta.env.VITE_API_URL + "/posts";

export const loadPosts = async ():Promise<IPost[]> =>{
    return await fetch(endpoint)
        .then((response) => response.json())
}