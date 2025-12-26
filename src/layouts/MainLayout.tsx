import MenuComponent from "../comonents/menu-component/MenuComponent.tsx";
import {Outlet} from "react-router";

const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    )
};

export default MainLayout;