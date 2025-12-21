import type {IUserResponseModel} from "../models/IUserResponseModel.ts";

    export const getAllUsers = async (pg: string): Promise<IUserResponseModel> => {
        return await fetch('https://reqres.in/api/users?page=' + pg, {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        }).then(value => value.json());
    }