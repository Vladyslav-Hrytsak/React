import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../models/PostModel.ts";
import {servises} from "../../services/api.service.ts";

export type PostsSliceType = {
    posts: IPost[]
}

const initialPostsState:PostsSliceType = {posts:[]};

const loadPosts = createAsyncThunk(
    'postsSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await servises.getPosts()
            return thunkAPI.fulfillWithValue(posts)
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)


export const postsSlice = createSlice({
    name: "postsSlice",
    initialState: initialPostsState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>) =>{
            state.posts = action.payload
        })
            .addCase(loadPosts.rejected, (state, action) =>{
                console.log(state)
                console.log(action)

            })
    }
})

export const postsSliceActions = {
    ...postsSlice.actions,loadPosts
}