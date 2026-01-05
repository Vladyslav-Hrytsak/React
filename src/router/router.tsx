import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import UserPage from "../pages/UserPage.tsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: 'users', element: <UsersPage /> },
            { path: 'users/:id', element: <UserPage /> },
            { path: 'posts', element: <PostsPage /> },
            { path: 'comments', element: <CommentsPage /> }
        ]
    }
])
