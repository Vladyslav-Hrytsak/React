import {useEffect, useState} from "react";
import {useSearchParams} from "react-router";
import {getPageOfUsers} from "../../service/api.services.ts";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";

const SomeComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams()
    useEffect(() => {
            getPageOfUsers((query.get('pg')) ||'1' ).then((data)=> {
                setUsers(data.data)
            })

    }, [query]);


    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user = {user} />)
            }
        </div>
    );
};

export default SomeComponent;