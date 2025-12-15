import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home Page</Link></li>
                <li><Link to={'/a'}>Page A</Link></li>
                <li><Link to={'/b'}>Page B</Link></li>

            </ul>

        </div>
    );
};

export default Menu;