import {createBrowserRouter} from "react-router";
import ShowCarPage from "../pages/ShowCarPage.tsx";
import CarsFormPage from "../pages/CarsFormPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";

export const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children:[
            {path:'cars', element: <ShowCarPage/>},
            {path:'form', element: <CarsFormPage/>}
        ]}
])