import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import CartPage from "../pages/CartPage.tsx";

export const router = createBrowserRouter([
    { path: '/',element: <MainLayout/>, children:[
            {path: 'users', element:<UsersPage/>, children:[
                    {path: ':id/carts', element:<CartPage/>}
                ]}
        ]}
])