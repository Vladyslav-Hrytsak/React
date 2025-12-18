import {useEffect, useState} from "react";
import {services} from "../../../service/api.service.ts";
import type {IUserJsonplaceholder} from "../../../models/model-jsonplaceholder/IUser/IUser.ts";
import UserComponentJsonplaceholder from "./UserComponentDummyjson.tsx";


const UsersComponentJsonplaceholder = () => {
    const [users, setUsers] = useState<IUserJsonplaceholder[]>([]);
    useEffect(() => {
        services.serviseJsonplaceholder.getUsersJsonplaceholder()
            .then(
                users => setUsers(users)
            )

    },[])



    return (
        <div>
            {users.map((user) => <UserComponentJsonplaceholder item={user} key={user.id} />)}
        </div>
    );
};

export default UsersComponentJsonplaceholder;