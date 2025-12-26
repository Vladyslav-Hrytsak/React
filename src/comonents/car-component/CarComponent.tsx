import type {ICar} from "../../models/ICar.ts";
import type {FC} from "react";

interface CarComponentProps {
    car: ICar
}

const CarComponent:FC<CarComponentProps> = ({car}: CarComponentProps) => {
    return (
        <div className='border-2 text-center p-2.5 m-2'>

            <h2>ID: {car.id}. {car.brand}</h2>
            <p>Price {car.price}$</p>
            <p>Year {car.year}$</p>
        </div>
    );
};

export default CarComponent;