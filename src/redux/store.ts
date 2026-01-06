import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "./slices/userSlice.tsx";
import {postsSlice} from "./slices/postSlice.ts";
import {commentsSlice} from "./slices/commentsSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: usersSlice.reducer,
        postSlice: postsSlice.reducer,
        commentsSlice: commentsSlice.reducer
        // complexSlice: complexSlice.reducer,
    }
})