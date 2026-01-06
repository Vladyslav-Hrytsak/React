import {Outlet} from "react-router";
import MenuComponent from "../components/menu-component/MenuComponent.tsx";

const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>

        </div>
    );
};

export default MainLayout;