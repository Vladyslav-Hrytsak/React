import {Outlet} from "react-router";
import UsersPage from "../pages/UsersPage.tsx";

const MainLayout = () => {
    return (
        <div>
            <UsersPage/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;