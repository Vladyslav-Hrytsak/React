import {Outlet} from "react-router";
import UsersComponent from "../components/users-component/UsersComponent.tsx";

const MainLayout = () => {
    return (
        <div>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;