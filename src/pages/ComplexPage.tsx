// import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import ComplexComponent from "../components/complex-component/ComplexComponent.tsx";

const ComplexPage = () => {

    // const dispatch = useAppDispatch();

    const {users} = useAppSelector(({userSlice}) => userSlice);
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const {comments} = useAppSelector(({commentsSlice}) => commentsSlice);

    const isReady = users.length > 0 && posts.length > 0 && comments.length > 0;






    return (
        <div>
            {!isReady && <div>Спочатку відвідайте Users / Posts / Comments</div>}
            {isReady && <ComplexComponent users = { users } posts = { posts } comments = { comments } />}
        </div>
    );
};

export default ComplexPage;