import type {IUser} from "../models/UserModel.ts";
import {urls} from "../constants/urls.ts";

export const servises = {

    getUsers: async ():Promise<IUser[]> =>{
        return await fetch(urls.users.usersUrl)
            .then((response) => response.json())
    }

}