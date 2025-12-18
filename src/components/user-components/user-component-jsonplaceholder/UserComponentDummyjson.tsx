import type { FC } from "react";
import type { IUserJsonplaceholder } from "../../../models/model-jsonplaceholder/IUser/IUser";

interface UserComponentJsonplaceholderProps {
    item: IUserJsonplaceholder;
}

const UserComponentJsonplaceholder: FC<UserComponentJsonplaceholderProps> = ({ item }) => {
    return (
        <div className="border rounded-xl p-6 mb-4 bg-white shadow-sm max-w-xl mx-auto">

            <h2 className="text-xl font-bold mb-2">
                {item.name}
            </h2>
            <p className="text-gray-500 mb-3">@{item.username}</p>

            <div className="text-sm space-y-1">
                <p><b>Email:</b> {item.email}</p>
                <p><b>Phone:</b> {item.phone}</p>
                <p>
                    <b>Website:</b>{" "}
                    <a
                        href={`https://${item.website}`}
                        target="_blank"
                        className="text-blue-600 underline"
                    >
                        {item.website}
                    </a>
                </p>
            </div>

            <div className="mt-4 text-sm">
                <h3 className="font-semibold mb-1">Address</h3>
                <p>{item.address.street}, {item.address.suite}</p>
                <p>{item.address.city}, {item.address.zipcode}</p>
                <p className="text-gray-500">
                    Geo: {item.address.geo.lat}, {item.address.geo.lng}
                </p>
            </div>

            <div className="mt-4 text-sm">
                <h3 className="font-semibold mb-1">Company</h3>
                <p><b>Name:</b> {item.company.name}</p>
                <p className="italic text-gray-600">{item.company.catchPhrase}</p>
                <p className="text-gray-500">{item.company.bs}</p>
            </div>

        </div>
    );
};

export default UserComponentJsonplaceholder;
