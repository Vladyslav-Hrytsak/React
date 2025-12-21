import type {IUserResponseModel} from "../models/IUserResponseModel.ts";

export const getPageOfUsers = async (pg:string):Promise<IUserResponseModel> => {
    return await fetch('https://reqres.in/api/users?page='+pg)
        .then(res => res.json())
}