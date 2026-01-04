import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../models/UserModel.ts";

export type UsersSliceType = {
    users: IUser[]
}

const initialUsersState:UsersSliceType = {users:[]};

export const usersSlice = createSlice({
    name: "usersSlice",
    initialState: initialUsersState,
    reducers:{
        loadUsers: (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload;
        }
    }
})

export const usersSliceActions = {
    ...usersSlice.actions,
}