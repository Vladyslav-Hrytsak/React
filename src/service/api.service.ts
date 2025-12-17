import type {IUserJsonplaceholder} from "../models/model-jsonplaceholder/IUser/IUser.ts";
import {urlsJsonplaceholder} from "../constants/urls.ts";
import type {IPostJsonplaceholder} from "../models/model-jsonplaceholder/IPost.ts";
import type {ICommentJsonplaceholder} from "../models/model-jsonplaceholder/IComment.ts";

import type {IUserDummyjson} from "../models/model-dummyjson/user-model/IUser.ts";
import type {IPostDummyjson} from "../models/model-dummyjson/post-model/IPost.ts";
import type {ICommentDummyjson} from "../models/model-dummyjson/comment-model/IComment.ts";

export const services = {

    serviseJsonplaceholder: {
        getUsersJsonplaceholder: async ():Promise<IUserJsonplaceholder[]> =>{
            return await fetch(urlsJsonplaceholder.users.usersUrl)
                .then((response) => response.json())
        },

        getPostsJsonplaceholder: async ():Promise<IPostJsonplaceholder[]> =>{
            return await fetch(urlsJsonplaceholder.posts.postsUrl)
                .then((response) => response.json())
        },

        getCommentsJsonplaceholder: async ():Promise<ICommentJsonplaceholder[]> =>{
            return await fetch(urlsJsonplaceholder.comments.commentsUrl)
                .then((response) => response.json())
        }
    },

    serviseDummyjson: {

        getUsersDummyjson: async ():Promise<IUserDummyjson[]> =>{
            const response = await fetch(urlsJsonplaceholder.users.usersUrl)
                .then((response) => response.json())
            return response.users
        },

        getPostsDummyjson: async ():Promise<IPostDummyjson[]> =>{
            const response = await fetch(urlsJsonplaceholder.users.usersUrl)
                .then((response) => response.json())
            return response.posts
        },

        getCommentsDummyjson: async ():Promise<ICommentDummyjson[]> =>{
            const response = await fetch(urlsJsonplaceholder.users.usersUrl)
                .then((response) => response.json())
            return response.comments
        }

    }


}
