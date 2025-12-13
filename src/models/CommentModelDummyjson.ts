import type {IComment} from "./CommentModel.ts";

export interface ICommentDummyjson {
    comments: IComment[]
    total: number
    skip: number
    limit: number
}