import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/users/1">User-1</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/comments">Comments</Link></li>


            </ul>

        </div>
    );
};

export default MenuComponent;