import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UserComponent from "../components/user-components/UserComponent.tsx";
import UserComponentJsonplaceholder from "../components/user-components/user-component-jsonplaceholder/UserComponentJsonplaceholder.tsx";
import UserComponentDummyjson from "../components/user-components/user-component-dummyjson/UserComponentDummyjson.tsx";
import PostComponent from "../components/post-components/PostComponent.tsx";
import PostComponentJsonplaceholder from "../components/post-components/post-component-jsonplaceholder/PostComponentJsonplaceholder.tsx";
import CommentComponent from "../components/comment-components/CommentComponent.tsx";
import CommentComponentJsonplaceholder from "../components/comment-components/comment-component-jsonplaceholder/CommentComponentJsonplaceholder.tsx";
import CommentComponentDummyjson from "../components/comment-components/comment-component-dummyjson/CommentComponentDummyjson.tsx";

export const routers = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children:[
            {path: 'users', element:<UserComponent/>, children:[
                    {path:'jsonplaceholder', element:<UserComponentJsonplaceholder/>},
                    {path:'dummyjson', element:<UserComponentDummyjson/>}
                ]},
            {path: 'posts', element: <PostComponent/>, children:[
                    {path:'jsonplaceholder', element:<PostComponentJsonplaceholder/>},
                    {path:'dummyjson', element:<UserComponentDummyjson/>}
                ]},
            {path: 'comments', element:<CommentComponent/> , children:[
                    {path:'jsonplaceholder', element:<CommentComponentJsonplaceholder/>},
                    {path:'dummyjson', element:<CommentComponentDummyjson/>}
                ] }
        ]},
])