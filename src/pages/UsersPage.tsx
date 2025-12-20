import UsersComponent from "../components/users-component/UsersComponent.tsx";
import {Outlet} from "react-router";

const UsersPage = () => {
    return (
        <div>
            <hr/>
            <Outlet />
            <hr/>

            <UsersComponent />


        </div>
    );
};


export default UsersPage;