import {createAsyncThunk, createSlice, isFulfilled, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../models/UserModel.ts";
import {servises} from "../../services/api.service.ts";

export type UsersSliceType = {
    users: IUser[],
    user: IUser|null,
    loadState: boolean
}


const loadUsers = createAsyncThunk(
    'usersSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await servises.getUsers()
            return thunkAPI.fulfillWithValue(users)
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)


const loadUser = createAsyncThunk(
    'usersSlice/loadUser',
    async (id: string, thunkAPI) => {
        try {
            const user = await servises.getUserById(id)
            return thunkAPI.fulfillWithValue(user)
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

const initialUsersState:UsersSliceType = {users:[], user: null, loadState: false};


export const usersSlice = createSlice({
    name: "usersSlice",
    initialState: initialUsersState,
    reducers:{
        changeLoadState: (state, action:PayloadAction<boolean>)=>{
            state.loadState = action.payload
        }},
    extraReducers: builder => {
        builder
            .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload
        })
            .addCase(loadUsers.rejected, (state, action) =>{
                console.log(state)
                console.log(action)

            })
            .addCase(loadUser.fulfilled,(state, action:PayloadAction<IUser>) =>{
                state.user = action.payload
            })
            .addMatcher(isFulfilled(loadUser,loadUsers), (state) =>{
                state.loadState = true
            })
    }
})

export const usersSliceActions = {
    ...usersSlice.actions, loadUsers, loadUser
}