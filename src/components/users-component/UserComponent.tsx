import type { IUser } from "../../models/IUser";
import {type FC} from "react";
import {useNavigate} from "react-router";

interface UserComponentProps {
    user: IUser;
}

const UserComponent: FC<UserComponentProps> = ({ user }) => {
    const navigateion = useNavigate()

    const onButtonClickNavigate = () =>{
        navigateion('/users/'+user.id+'/carts')
    }

    return (
        <div className="border p-4 mb-4 rounded ">

            <div>

                <p>id: {user.id}</p>
                <p>firstName: {user.firstName}</p>
                <p>lastName: {user.lastName}</p>
                <p>maidenName: {user.maidenName}</p>
                <p>age: {user.age}</p>
                <p>gender: {user.gender}</p>
                <p>email: {user.email}</p>
                <p>phone: {user.phone}</p>
                <p>username: {user.username}</p>
                <p>password: {user.password}</p>
                <p>birthDate: {user.birthDate}</p>
                <p>bloodGroup: {user.bloodGroup}</p>
                <p>height: {user.height}</p>
                <p>weight: {user.weight}</p>
                <p>eyeColor: {user.eyeColor}</p>

                <p>hair.color: {user.hair.color}</p>
                <p>hair.type: {user.hair.type}</p>

            </div>

            <button className='border-2' onClick={onButtonClickNavigate}>CLICK ME</button>

        </div>
    );
};

export default UserComponent;
