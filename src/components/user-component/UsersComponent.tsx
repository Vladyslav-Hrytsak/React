import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {userServise} from "../../service/user.api.service.ts";
import UserComponent from "./UserComponent.tsx";
import {useSearchParams} from "react-router";

const UsersComponent = () => {

    const [query] = useSearchParams()
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userServise.getAllUsers((query.get('page') || '1'))
            .then(users => setUsers(users))
    }, [query]);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user} />)
            }
        </div>
    );
};

export default UsersComponent;