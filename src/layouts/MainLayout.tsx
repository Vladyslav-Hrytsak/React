import {Outlet} from "react-router";
import UserPage from "../pages/UserPage.tsx";

const MainLayout = () => {
    return (
        <div>
            <UserPage/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;