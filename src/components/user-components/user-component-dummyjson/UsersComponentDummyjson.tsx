import {useEffect, useState} from "react";
import type {IUserDummyjson} from "../../../models/model-dummyjson/user-model/IUser.ts";
import {services} from "../../../service/api.service.ts";
import UserComponentDummyjson from "./UserComponentDummyjson.tsx";

const UsersComponentDummyjson = () => {

    const [users, setUsers] = useState<IUserDummyjson[]>([]);
    useEffect(() => {
        services.serviseDummyjson.getUsersDummyjson()
            .then(
                users => setUsers(users)
            )

    },[])

    return (
        <div>
            {users.map((user) => <UserComponentDummyjson item={user} key={user.id}/>)}
        </div>
    );
};

export default UsersComponentDummyjson;