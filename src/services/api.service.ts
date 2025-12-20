import type {IUserResponceModel} from "../models/IUserResponceModel.ts";
import type {ICartResponceModel} from "../models/ICartResponceModel.ts";

const url = 'https://dummyjson.com';

export const userService = {

    getAllUsers: async ():Promise<IUserResponceModel> => {
       return await fetch(url+'/users')
            .then(res => res.json())
    }
}

export const cartService = {

    getCartsOfUsers: async (id:string):Promise<ICartResponceModel> => {
        return await fetch(url+'/cartst/users'+id)
            .then(res => res.json())
    }
}