import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { usersSliceActions } from "../../redux/slices/userSlice";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    const dispatch = useAppDispatch();

    const { users } = useAppSelector(state => state.userSlice);

    useEffect(() => {
        dispatch(usersSliceActions.loadUsers());
    }, [dispatch]);

    return (
        <div>
            {users.map(user => (<UserComponent key={user.id} user={user} />))}
        </div>
    );
};

export default UsersComponent;
