import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

interface UserComponentProps {
    user: IUser
}

const UserComponent:FC<UserComponentProps> = ({user}: UserComponentProps) => {
    return (
        <div>
            {user.firstName}
        </div>
    );
};

export default UserComponent;