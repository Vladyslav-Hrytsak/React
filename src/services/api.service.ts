import type {IUserResponceModel} from "../models/IUserResponceModel.ts";
import type {ICartResponceModel} from "../models/ICartResponceModel.ts";

const url = 'https://dummyjson.com';

export const userService = {
    getAllUsers: async () => {
        const res = await fetch(`${url}/users`);
        const data: IUserResponceModel = await res.json();
        return data.users;
    }
};

export const cartService = {
    getCartsOfUsers: async (id: string) => {
        const res = await fetch(`${url}/carts/user/${id}`)
        const data: ICartResponceModel = await res.json()
        return data.carts
    }
}
