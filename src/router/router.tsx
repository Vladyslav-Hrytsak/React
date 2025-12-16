import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import UsersDetailsPage from "../pages/UsersDetailsPage.tsx";


export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path:'users', element: <UsersPage/>, children:[
                    {path:'post/:userId', element: <PostsPage/>}
                ]},
            {path:'users/details', element: <UsersDetailsPage/>},
            {path:'posts', element: <PostsPage/>},
            {path:'comments', element: <CommentsPage/>}
        ]
    }
])