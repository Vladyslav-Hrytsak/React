import type {IUser} from "./IUser.ts";

export interface IUserResponseModel {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: IUser[]
}