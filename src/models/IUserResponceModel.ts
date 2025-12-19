import type {IUser} from "./IUser.ts";

export type IUserResponceModel = {
    total: number,
    skip: number,
    limit: number,
    users: IUser[]
}