import type {FC} from "react";
import type {IUser} from "../../model/IUser.ts";

interface UserComponentProps {
    user: IUser;
}

const UserComponent:FC<UserComponentProps> = ({user}: UserComponentProps) => {
    return (
        <div>
            <p>name: {user.name}  ----- ID: {user.id}</p>
        </div>
    );
};

export default UserComponent;