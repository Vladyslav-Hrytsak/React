import type { FC } from "react";
import type { IUser } from "../../models/UserModel";

interface UserComponentProps {
    item: IUser;
}

const UserComponent: FC<UserComponentProps> = ({ item }) => {
    return (
        <div className="border rounded-xl p-4 mb-4 bg-white">

            <h2 className="text-lg font-semibold">{item.name}</h2>

            <p className="text-sm text-gray-500">@{item.username}</p>

            <div className="mt-2 text-sm">
                <p><b>Email:</b> {item.email}</p>
                <p><b>Phone:</b> {item.phone}</p>
                <p><b>Website:</b> {item.website}</p>
            </div>

            <div className="mt-2 text-sm">
                <p><b>City:</b> {item.address.city}</p>
                <p><b>Address:</b> {item.address.street}, {item.address.suite}</p>
            </div>

            <div className="mt-2 text-sm">
                <p><b>Company:</b> {item.company.name}</p>
                <p className="italic text-gray-600">{item.company.catchPhrase}</p>
            </div>

        </div>
    );
};

export default UserComponent;
