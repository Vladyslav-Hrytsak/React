import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "./UserComponent.tsx";
import {userService} from "../../services/api.service.ts";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
       userService.getAllUsers().then(({users}) =>
                setUsers(users))
    })
    return (
        <div>
            {users.map((user: IUser) => <UserComponent user={user} key = {user.id} />)}
        </div>
    );
};

export default UsersComponent;