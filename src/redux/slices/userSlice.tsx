import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../model/IUser.ts";
import {apiService} from "../../services/api.service.ts";

export type UserSliceType = {
    users: IUser[];
}


const loadUsers = createAsyncThunk(
    "userSlice/loadUsers",
    async (_, thunkAPI) =>{
        try {
            const users = await apiService.getUsers()
            return thunkAPI.fulfillWithValue(users)
        }
        catch (e){
            return thunkAPI.rejectWithValue(e);
        }
    }
)

const initialState:UserSliceType = {users:[]};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) =>{
                state.users = action.payload
            })
            .addCase(loadUsers.rejected, (state, action) =>{
                console.log(state)
                console.log(action)

            })
})
