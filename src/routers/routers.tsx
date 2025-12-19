import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UserPage from "../pages/UserPage.tsx";
import UsersComponentJsonplaceholder from "../components/user-components/user-component-jsonplaceholder/UsersComponentJsonplaceholder.tsx";
import UsersComponentDummyjson from "../components/user-components/user-component-dummyjson/UsersComponentDummyjson.tsx";
import PostPage from "../pages/PostPage.tsx";
import PostComponentJsonplaceholder from "../components/post-components/post-component-jsonplaceholder/PostsComponentJsonplaceholder.tsx";
import CommentPage from "../pages/CommentPage.tsx";
import CommentsComponentJsonplaceholder from "../components/comment-components/comment-component-jsonplaceholder/CommentsComponentJsonplaceholder.tsx";
import CommentsComponentDummyjson from "../components/comment-components/comment-component-dummyjson/CommentsComponentDummyjson.tsx";
import PostsComponentDummyjson from "../components/post-components/post-component-dummyjson/PostsComponentDummyjson.tsx";

export const routers = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children:[
            {path: 'users', element:<UserPage/>, children:[
                    {path:'jsonplaceholder', element:<UsersComponentJsonplaceholder/>},
                    {path:'dummyjson', element:<UsersComponentDummyjson/>}
                ]},
            {path: 'posts', element: <PostPage/>, children:[
                    {path:'jsonplaceholder', element:<PostComponentJsonplaceholder/>},
                    {path:'dummyjson', element:<PostsComponentDummyjson/>}
                ]},
            {path: 'comments', element:<CommentPage/> , children:[
                    {path:'jsonplaceholder', element:<CommentsComponentJsonplaceholder/>},
                    {path:'dummyjson', element:<CommentsComponentDummyjson/>}
                ] }
        ]},
])