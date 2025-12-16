import type {IUser} from "../models/UserModel.ts";
import {urls} from "../constants/urls.ts";
import type {IPost} from "../models/PostModel.ts";
import type {IComment} from "../models/CommentModel.ts";

export const servises = {

    getUsers: async ():Promise<IUser[]> =>{
        return await fetch(urls.users.usersUrl)
            .then((response) => response.json())
    },
    getPosts: async ():Promise<IPost[]> =>{
        return await fetch(urls.posts.postsUrl)
            .then((response) => response.json())
    },

    getComments: async ():Promise<IComment[]> =>{
        return await fetch(urls.comments.commentsUrl)
            .then((response) => response.json())
    },

    getPostsOfUsersById: async (id:number):Promise<IPost[]> =>{
        return await fetch(urls.posts.userPostbyId(id))
            .then((response) => response.json())
    }

}