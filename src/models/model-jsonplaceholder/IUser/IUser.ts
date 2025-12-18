import type {Address} from "./IAddress.ts";
import type {Company} from "../../model-dummyjson/user-model/ICompany.ts";

export interface IUserJsonplaceholder {
    company: Company;
    website: string
    phone: string;
    id: number
    name: string
    username: string
    email: string
    address: Address
}

