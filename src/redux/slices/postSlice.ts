import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../model/IPost.ts";
import {apiService} from "../../services/api.service.ts";

export type PostSliceType = {
    posts: IPost[];
}


const loadPosts = createAsyncThunk(
"postsSlice/loadPosts",
    async (_, thunkAPI) =>{
    try {
        const posts = await apiService.getPosts()
        return thunkAPI.fulfillWithValue(posts)
    }
    catch (e){
        return thunkAPI.rejectWithValue(e)
    }
}
)


const initialState:PostSliceType = {posts: []};

export const postsSlice  = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>) =>{
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected, (state, action) =>{
                console.log(state)
                console.log(action)
            })
})


export const postsSliceActions = {
    ...postsSlice.actions, loadPosts
}