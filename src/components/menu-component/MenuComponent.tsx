import {Link} from "react-router";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/users'><li>Users</li></Link>
                <Link to='/posts'><li>Posts</li></Link>
                <Link to='/comments'><li>Comments</li></Link>
                <Link to='/complex'><li>Complex</li></Link>
            </ul>

        </div>
    );
};

export default MenuComponent;