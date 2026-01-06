import {createAsyncThunk, createSlice, isFulfilled, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../models/PostModel.ts";
import {servises} from "../../services/api.service.ts";

export type PostsSliceType = {
    posts: IPost[],
    loadState: boolean
}

const initialPostsState:PostsSliceType = {posts:[], loadState:false};

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

const loadPost = createAsyncThunk(
    'postsSlice/loadPost',
    async (id:string, thunkAPI) => {
        try {
            const post = await servises.getPostById(id)
            return thunkAPI.fulfillWithValue(post)
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
            .addMatcher(isFulfilled(loadPost,loadPosts), (state)=>{
                state.loadState = true
            })
    }
})

export const postsSliceActions = {
    ...postsSlice.actions,loadPosts,loadPost,
}