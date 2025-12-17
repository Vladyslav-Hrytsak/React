import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import UserComponent from "./components/user-components/UserComponent.tsx";
import PostComponent from "./components/post-components/PostComponent.tsx";
import CommentComponent from "./components/comment-components/CommentComponent.tsx";
import ProductComponent from "./components/product-components/ProductComponent.tsx";



createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="users" element={<UserComponent />} />
                <Route path="posts" element={<PostComponent />} />
                <Route path="comments" element={<CommentComponent />} />
                <Route path="products" element={<ProductComponent />} />
            </Route>
        </Routes>
    </BrowserRouter>

)
