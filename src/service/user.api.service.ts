import type {IUser} from "../models/IUser.ts";

export const userServise = {
    getAllUsers: async ():Promise<IUser[]> =>{
        const response = await fetch('https://dummyjson.com/users')
        .then((response) => response.json())
        return response.users
    }
}