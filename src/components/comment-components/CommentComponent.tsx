import {Link, Outlet} from "react-router-dom";

const CommentComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="jsonplaceholder">Comments jsonplaceholder</Link>
                </li>
                <li>
                    <Link to="dummyjson">Comment dummyjson</Link>
                </li>
            </ul>
            <Outlet/>

        </div>
    );
};

export default CommentComponent;