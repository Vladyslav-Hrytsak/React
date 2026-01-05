import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../models/UserModel.ts";
import {servises} from "../../services/api.service.ts";

export type UsersSliceType = {
    users: IUser[]
}

const initialUsersState:UsersSliceType = {users:[]};

const loadUsers = createAsyncThunk(
    'usersSlice/loadUsers',
     (_, thunkAPI) => {

        try{
            return thunkAPI.fulfillWithValue(servises.getUsers())
        }
        catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue('some error')
        }
    }
    )

export const usersSlice = createSlice({
    name: "usersSlice",
    initialState: initialUsersState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload
        })
            .addCase(loadUsers.rejected, (state, action) =>{
                console.log(state)
                console.log(action)

            })
    }
})

export const usersSliceActions = {
    ...usersSlice.actions, loadUsers
}