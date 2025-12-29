import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import AuthResourcesPage from "../pages/AuthResourcesPage.tsx";
import HomePage from "../pages/HomePage.tsx";


export const router = createBrowserRouter([ // створено структуру роутів
    { path: '/', element: <MainLayout/>, children:[
            {index: true, element: <HomePage/>},
            {path:'login', element: <LoginPage/>},
            {path:'/auth/resources', element: <AuthResourcesPage/>}
        ] },
])