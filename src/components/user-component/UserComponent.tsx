import type { FC } from "react";
import type { IUser } from "../../models/UserModel";

interface UserComponentProps {
    item: IUser;
}

const UserComponent: FC<UserComponentProps> = ({ item }) => {

    return (
        <div className="border rounded-xl p-4 mb-4 bg-white">
            <h2 className="text-lg font-semibold">{item.name}</h2>
        </div>
    );
};

export default UserComponent;
