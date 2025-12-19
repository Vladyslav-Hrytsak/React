import {useEffect, useState} from "react";
import {getAll} from "../../servise/general.api.service.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getAll<IBaseResponseModel & {users:IUser[]}>('/users')
            .then(value => setUsers(value.users))
    }, []);


    return (
        <div>
            {users.map((user: IUser) => <UserComponent item = {user} key={user.id}/>)}

        </div>
    );
};

export default UsersComponent;