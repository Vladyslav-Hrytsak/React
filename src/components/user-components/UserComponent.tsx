import {Link, Outlet} from "react-router-dom";

const UserComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="jsonplaceholder">Users jsonplaceholder</Link>
                </li>
                <li>
                    <Link to="dummyjson">Users dummyjson</Link>
                </li>
            </ul>
            <Outlet/>

        </div>
    );
};

export default UserComponent;