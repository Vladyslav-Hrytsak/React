import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {usersSliceActions} from "../redux/slices/userSlice.ts";


const UserPage = () => {
    const {id} = useParams();

    const user = useAppSelector(({ usersSlice }) => usersSlice.user)
    const loadState = useAppSelector(({ usersSlice }) => usersSlice.loadState)

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(usersSliceActions.loadUser(+id))
        }
    }, [id, dispatch])


    return (

        <div>
            {!loadState && <div>Loading...</div>}
            {user && <div>{user.id} {user.name}</div>}
        </div>
    );
};

export default UserPage;