import {Link, Outlet} from "react-router-dom";

const CommentPage = () => {
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

export default CommentPage;