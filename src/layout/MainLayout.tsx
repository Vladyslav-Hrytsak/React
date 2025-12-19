import {Outlet} from "react-router";
import MenuComponent from "../component/menu/MenuComponent.tsx";

const MainLayout = () => {
    return <>
        <MenuComponent/>
        <Outlet/>
    </>

};

export default MainLayout;