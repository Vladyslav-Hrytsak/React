import {Link, Outlet} from "react-router-dom";

const PostComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="jsonplaceholder">Post jsonplaceholder</Link>
                </li>
                <li>
                    <Link to="dummyjson">Post dummyjson</Link>
                </li>
            </ul>
            <Outlet/>

        </div>
    );
};

export default PostComponent;