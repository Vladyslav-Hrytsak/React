import {Link} from "react-router";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home Page</Link></li>
                <li><Link to={'/login'}>Login Page</Link></li>
                <li><Link to={'/auth/resources'}>Resources Page</Link></li>
            </ul>

        </div>
    );
};

export default MenuComponent;