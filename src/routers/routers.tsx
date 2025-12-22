import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import UserPage from "../pages/UserPage.tsx";
import PaginationLayout from "../layouts/PaginationLayout.tsx";

export const routers = createBrowserRouter([
    {path:'/',element:<MainLayout/>, children:[
            {
                path: '', element:<PaginationLayout/>, children:[
                    {path: 'users', element: <UserPage/>}
                ]
            }
        ]}
])