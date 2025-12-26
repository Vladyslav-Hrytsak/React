import {Link} from "react-router";
import './MenuComponent.css'

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/cars'}>Show all cars</Link></li>
                <li><Link to={'/form'}>Create car</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;