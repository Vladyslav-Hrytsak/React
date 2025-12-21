import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {userServise} from "../../service/user.api.service.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userServise.getAllUsers()
            .then(users => setUsers(users))
    }, []);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user} />)
            }
        </div>
    );
};

export default UsersComponent;