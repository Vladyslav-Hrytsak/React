import axios from "axios";
import type {IUser} from "../model/IUser.ts";
import type {IPost} from "../model/IPost.ts";
import type {IComments} from "../model/IComments.ts";


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});


export const apiService = {

    getUsers: async ():Promise<IUser[]> =>{
        const {data} = await axiosInstance.get<IUser[]>('/users');
        return data;
    },

    getPosts: async ():Promise<IPost[]> =>{
        const {data} = await axiosInstance.get<IPost[]>('/posts');
        return data;
    },

    getComments: async ():Promise<IComments[]> =>{
        const {data} = await axiosInstance.get<IComments[]>('/comments');
        return data;
    }
}