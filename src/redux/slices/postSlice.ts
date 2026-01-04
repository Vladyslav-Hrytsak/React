import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../models/PostModel.ts";

export type PostsSliceType = {
    posts: IPost[]
}

const initialPostsState:PostsSliceType = {posts:[]};

export const postsSlice = createSlice({
    name: "postsSlice",
    initialState: initialPostsState,
    reducers:{
        loadPosts: (state, action:PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        }
    }
})

export const postsSliceActions = {
    ...postsSlice.actions,
}