import type {IPost} from "./PostModel.ts";

export interface IPostModelDummyjson {
    posts: IPost[]
    total: number
    skip: number
    limit: number
}