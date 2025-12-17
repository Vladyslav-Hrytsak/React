import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import UserComponent from "../components/user-components/UserComponent.tsx";
import PostComponent from "../components/post-components/PostComponent.tsx";
import CommentComponent from "../components/comment-components/CommentComponent.tsx";
import ProductComponent from "../components/product-components/ProductComponent.tsx";

export const router = createBrowserRouter([
    {path: '/', element:<App/>, children:[
            {path: 'users', element:<UserComponent/> },
            {path: 'posts', element:<PostComponent/> },
            {path: 'comments', element:<CommentComponent/> },
            {path: 'products', element:<ProductComponent/> },
        ]}
])