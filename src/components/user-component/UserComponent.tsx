import type { FC } from "react";
import type { IUser } from "../../models/UserModel";
import {Link, useNavigate} from "react-router-dom";

interface UserComponentProps {
    item: IUser;
}

const UserComponent: FC<UserComponentProps> = ({ item }) => {

    const navigate = useNavigate()
    const hendlOnClick =() =>{
        navigate('posts/' +item.id ,{state: item})
    }
    return (
        <div className="border rounded-xl p-4 mb-4 bg-white">

            <Link to={'details'} state={item}><h2 className="text-lg font-semibold">{item.name}</h2> </Link>

            <button className='border-2' onClick={hendlOnClick} >Show Details</button>

        </div>
    );
};

export default UserComponent;
