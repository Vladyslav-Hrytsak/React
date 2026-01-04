import UserComponent from "../user-component/UserComponent.tsx";
import {useEffect} from "react";
import {servises} from "../../services/api.service.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {usersSliceActions} from "../../redux/slices/userSlice.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";

const UsersComponent = () => {

    const {users} = useAppSelector(({usersSlice}) => usersSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        servises.getUsers().then(
            (users) =>{
                dispatch(usersSliceActions.loadUsers(users));
            }
        )
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