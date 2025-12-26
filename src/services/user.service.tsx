import axios from "axios";
import type {IUser} from "../mosels/UserModel.tsx";

const axiosInstence = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

export const getAllUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstence.get<IUser[]>("/users");
    return data;
}

axiosInstence.interceptors.request.use((request)=>{

    request.headers.set('xxx', 'xxxx');
    console.log(request);
    return request;
})

// axiosInstence.interceptors.response.use((response)=>{
//     console.log(response);
//     return response;
// })