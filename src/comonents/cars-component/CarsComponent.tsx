import {useEffect, useState} from "react";
import type {ICar} from "../../models/ICar.ts";
import {getAllCars} from "../../services/cars.api.service.ts";
import CarComponent from "../car-component/CarComponent.tsx";

const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getAllCars().then(value => setCars(value))
    }, []);

    return (
        <div>
            {
            cars.map((car) => <CarComponent car={car} key = {car.id} />)
        }
        </div>
    );
};

export default CarsComponent;