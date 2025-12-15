import {useEffect, useState} from "react";
import {servises} from "../../services/api.service.ts";
import type {IUser} from "../../models/UserModel.ts";
import UserComponent from "../user-component/UserComponent.tsx";

const UsersComment = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        servises.getUsers().then(
            (users) => setUsers(users),
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

export default UsersComment;