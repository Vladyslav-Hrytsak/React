import {Link} from "react-router";

const MenuComponent = () => {
    return (
        <div>

            <ul>
                <li><Link to={'/users'}>USERS</Link></li>
                <li><Link to={'/posts'}>POSTS</Link></li>
            </ul>

        </div>
    );
};

export default MenuComponent;