import type {User} from "./User.ts";

export interface ICommentDummyjson {
    id: number
    body: string
    postId: number
    likes: number
    user: User
}


