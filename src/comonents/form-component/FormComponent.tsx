import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {carValidator} from "../../validator/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi"
import {addCar} from "../../services/cars.api.service.ts";

const FormComponent = () => {

    const {register, handleSubmit, formState: { errors , isValid}} = useForm<ICar>(
        {

            mode: "all",
            resolver: joiResolver(carValidator)
        }
    );

    const submit = (data:ICar) => {
        addCar(data)
        console.log(data);
    };



    return (
        <div className="min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit(submit)}>

                <div className="mb-3">
                    <input type="text" placeholder="Brand"{...register('brand')} className="border px-2 py-1 w-64"/>
                    <div className="text-red-500 text-sm">
                        {errors.brand?.message}</div>
                </div>

                <div className="mb-3">
                    <input type="number" placeholder="Price"{...register('price')} className="border px-2 py-1 w-64"/>
                    <div className="text-red-500 text-sm">
                        {errors.price?.message}</div>
                </div>

                <div className="mb-3">
                    <input type="number" placeholder="Year"{...register('year')} className="border px-2 py-1 w-64"/>
                    <div className="text-red-500 text-sm">
                        {errors.year?.message}
                    </div>
                </div>

                <button type="submit" disabled={!isValid} className="border px-4 py-1 w-64">SEND</button>
            </form>
        </div>

    );
};

export default FormComponent;