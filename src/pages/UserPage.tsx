import UsersComponent from "../components/user-component/UsersComponent.tsx";
import {Outlet} from "react-router";

const UserPage = () => {
    return (
        <div>
            <Outlet/>
            <UsersComponent/>
        </div>
    );
};

export default UserPage;