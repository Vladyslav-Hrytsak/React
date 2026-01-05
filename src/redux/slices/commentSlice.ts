import type {IComment} from "../../models/CommentModel.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {servises} from "../../services/api.service.ts";

export type CommentsSliceType = {
    comments: IComment[]
}



const initialCommentsState:CommentsSliceType = {comments: []};

const loadComments = createAsyncThunk(
    'commentsSlice/loadComments',
    async (_, thunkAPI) => {
        try {
            const comments = await servises.getComments()
            return thunkAPI.fulfillWithValue(comments)
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const commentsSlice = createSlice({
    name: "commentsSlice",
    initialState: initialCommentsState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>) =>{
            state.comments = action.payload
        })
        .addCase(loadComments.rejected, (state, action)=>{
            console.log(state)
            console.log(action)

        })
})


export const commentsSliceActions = {
    ...commentsSlice.actions, loadComments
}