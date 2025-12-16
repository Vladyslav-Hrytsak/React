import {useLocation} from "react-router-dom";
import type {IUser} from "../models/UserModel.ts";

const UsersDetailsPage = () => {

    const {state} = useLocation();
    const user = state as IUser;

    return (
        <div>
            <p className="text-sm text-gray-500">@{user.username}</p>

            <div className="mt-2 text-sm">
                <p><b>Email:</b> {user.email}</p>
                <p><b>Phone:</b> {user.phone}</p>
                <p><b>Website:</b> {user.website}</p>
            </div>

            <div className="mt-2 text-sm">
                <p><b>City:</b> {user.address.city}</p>
                <p><b>Address:</b> {user.address.street}, {user.address.suite}</p>
            </div>

            <div className="mt-2 text-sm">
                <p><b>Company:</b> {user.company.name}</p>
                <p className="italic text-gray-600">{user.company.catchPhrase}</p>
            </div>

        </div>
    );
};

export default UsersDetailsPage;