import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComments} from "../../model/IComments.ts";
import {apiService} from "../../services/api.service.ts";

export type CommentsSliceType = {
    comments: IComments[]
}


const loadComments = createAsyncThunk(
    "commentsSlice/loadComments",
    async (_, thunkAPI) =>{
        try {
            const comments = await apiService.getComments()
            return thunkAPI.fulfillWithValue(comments)
        }
        catch (e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)


const initialState: CommentsSliceType = {comments:[]};

export const commentsSlice = createSlice({
    name: "commentsSlice",
    initialState: initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComments[]>)=>{
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