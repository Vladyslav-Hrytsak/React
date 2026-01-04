import type {IComment} from "../../models/CommentModel.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export type CommentsSliceType = {
    comments: IComment[]
}



const initialCommentsState:CommentsSliceType = {comments: []};

export const commentsSlice = createSlice({
    name: "commentsSlice",
    initialState: initialCommentsState,
    reducers:{
        loadComments: (state, action:PayloadAction<IComment[]>) => {
            state.comments = action.payload;
        }
    }
})


export const commentsSliceActions = {
    ...commentsSlice.actions,
}