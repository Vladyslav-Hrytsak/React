import type { FC } from "react";
import type { IUserDummyjson } from "../../../models/model-dummyjson/user-model/IUser";

interface UserComponentDummyjsonProps {
    item: IUserDummyjson;
}

const UserComponentDummyjson: FC<UserComponentDummyjsonProps> = ({ item }) => {
    return (
        <div className="max-w-2xl mx-auto bg-white border rounded-xl p-6 shadow-sm mb-6">

            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={item.image}
                    alt={item.firstName}
                    className="w-20 h-20 rounded-full border"
                />
                <div>
                    <h2 className="text-xl font-semibold">
                        {item.firstName} {item.lastName}
                    </h2>
                    <p className="text-gray-500">@{item.username}</p>
                    <p className="text-sm text-gray-400">{item.role}</p>
                </div>
            </div>

            {/* Basic info */}
            <div className="text-sm space-y-1 mb-4">
                <p><b>Age:</b> {item.age}</p>
                <p><b>Gender:</b> {item.gender}</p>
                <p><b>Email:</b> {item.email}</p>
                <p><b>Phone:</b> {item.phone}</p>
                <p><b>Birth date:</b> {item.birthDate}</p>
            </div>

            {/* Address */}
            <div className="text-sm mb-4">
                <p className="font-semibold mb-1">Address</p>
                <p>
                    {item.address.address}, {item.address.city}, {item.address.state}
                </p>
                <p>{item.address.country}</p>
            </div>

            {/* Company */}
            <div className="text-sm mb-4">
                <p className="font-semibold mb-1">Company</p>
                <p>{item.company.name}</p>
                <p className="text-gray-600">
                    {item.company.title} — {item.company.department}
                </p>
            </div>

            {/* Extra */}
            <div className="text-sm text-gray-600">
                <p><b>University:</b> {item.university}</p>
            </div>
        </div>
    );
};

export default UserComponentDummyjson;
