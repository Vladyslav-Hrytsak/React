import type {IUser} from "../models/IUser.ts";
const url = 'https://dummyjson.com'

export const userServise = {
    getAllUsers: async (page:string):Promise<IUser[]> =>{
        const limit = 30;
        const scip = limit * (+page) - limit;
        const response = await fetch(url +'/users?skip='+scip)
        .then((response) => response.json())
        return response.users
    }
}

