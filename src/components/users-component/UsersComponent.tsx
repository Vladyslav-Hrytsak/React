import UserComponent from "../user-component/UserComponent.tsx";
import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {usersSliceActions} from "../../redux/slices/userSlice.ts";

const UsersComponent = () => {

    const {users} = useAppSelector(({usersSlice}) => usersSlice)
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(usersSliceActions.loadUsers())
    },[])

    return (
        <div className="max-w-2xl mx-auto">
            {
                users.map((user) => (<UserComponent key={user.id} item = {user} />))
            }
        </div>
    );
};

export default UsersComponent;