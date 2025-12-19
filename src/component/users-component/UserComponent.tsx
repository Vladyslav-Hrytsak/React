import type { IUser } from "../../models/IUser";
import type { FC } from "react";

interface UserComponentProps {
    item: IUser;
}

const UserComponent: FC<UserComponentProps> = ({ item }) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "16px" }}>
            <img
                src={item.image}
                alt={item.firstName}
                width={100}
            />

            <p><b>ID:</b> {item.id}</p>
            <p><b>Name:</b> {item.firstName} {item.lastName}</p>
            <p><b>Maiden name:</b> {item.maidenName}</p>
            <p><b>Age:</b> {item.age}</p>
            <p><b>Gender:</b> {item.gender}</p>
            <p><b>Email:</b> {item.email}</p>
            <p><b>Phone:</b> {item.phone}</p>
            <p><b>Username:</b> {item.username}</p>
            <p><b>Password:</b> {item.password}</p>
            <p><b>Birth date:</b> {item.birthDate}</p>

            <p><b>Blood group:</b> {item.bloodGroup}</p>
            <p><b>Height:</b> {item.height}</p>
            <p><b>Weight:</b> {item.weight}</p>
            <p><b>Eye color:</b> {item.eyeColor}</p>
            <p><b>Hair:</b> {item.hair.color}, {item.hair.type}</p>

            <p><b>IP:</b> {item.ip}</p>
            <p><b>MAC:</b> {item.macAddress}</p>
            <p><b>University:</b> {item.university}</p>

            <p>
                <b>Address:</b> {item.address.address},
                {item.address.city},
                {item.address.state},
                {item.address.country}
            </p>

            <p>
                <b>Company:</b> {item.company.name},
                {item.company.department},
                {item.company.title}
            </p>

            <p><b>Bank card:</b> {item.bank.cardNumber}</p>
            <p><b>Card type:</b> {item.bank.cardType}</p>
            <p><b>IBAN:</b> {item.bank.iban}</p>

            <p><b>Crypto coin:</b> {item.crypto.coin}</p>
            <p><b>Crypto wallet:</b> {item.crypto.wallet}</p>
            <p><b>Network:</b> {item.crypto.network}</p>

            <p><b>EIN:</b> {item.ein}</p>
            <p><b>SSN:</b> {item.ssn}</p>

            <p><b>Role:</b> {item.role}</p>
        </div>
    );
};

export default UserComponent;
