import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import UserComponent from "./components/user-components/UserComponent.tsx";
import UserComponentJsonplaceholder from "./components/user-components/user-component-jsonplaceholder/UserComponentJsonplaceholder.tsx";
import UserComponentDummyjson from "./components/user-components/user-component-dummyjson/UserComponentDummyjson.tsx";
import PostComponent from "./components/post-components/PostComponent.tsx";
import PostComponentJsonplaceholder from "./components/post-components/post-component-jsonplaceholder/PostComponentJsonplaceholder.tsx";
import CommentsComponentJsonplaceholder from "./components/comment-component/CommentsComponentJsonplaceholder.tsx";



const routers = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children:[
            {path: 'users', element:<UserComponent/>, children:[
                    {path:'jsonplaceholder', element:<UserComponentJsonplaceholder/>},
                    {path:'dummyjson', element:<UserComponentDummyjson/>}
                ]},
            {path: 'posts', element: <PostComponent/>, children:[
                    {path:'jsonplaceholder', element:<PostComponentJsonplaceholder/>},
                    {path:'dummyjson', element:<UserComponentDummyjson/>}
                ]},
            {path: 'comments', element:<CommentsComponentJsonplaceholder/>}
        ]},
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routers}/>
)
