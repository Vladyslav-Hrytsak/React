import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "./slices/userSlice.ts";
import {postsSlice} from "./slices/postSlice.ts";
import {commentsSlice} from "./slices/commentSlice.ts";

export const store = configureStore({
    reducer: {
        usersSlice: usersSlice.reducer,
        postsSlice: postsSlice.reducer,
        commentsSlice: commentsSlice.reducer
    }
});