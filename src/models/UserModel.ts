import type {Address} from "./AddresModel.ts";
import type {Company} from "./Company.ts";

export interface IUser {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}




