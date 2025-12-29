import {useForm} from "react-hook-form";
import type {IFormData} from "../../models/IFormData.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validator/user.validator.ts";
import {login} from "../../services/api.service.ts";


const FormComponent = () => {

    const {register, handleSubmit, formState: { errors , isValid}} = useForm<IFormData>(
        {
            mode: "all",
            resolver: joiResolver(userValidator)
        }
    );

    const submit = (data:IFormData) => {
        console.log(data);
            login(data)
    };



    return (
        <div className="min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit(submit)}>

                <div className="mb-3">
                    <input type="text" placeholder="Username"{...register('username')} className="border px-2 py-1 w-64"/>
                    <div className="text-red-500 text-sm">
                        {errors.username?.message}</div>
                </div>

                <div className="mb-3">
                    <input type="text" placeholder="Password"{...register('password')} className="border px-2 py-1 w-64"/>
                    <div className="text-red-500 text-sm">
                        {errors.password?.message}</div>
                </div>

                <button type="submit" disabled={!isValid} className="border px-4 py-1 w-64">Login</button>
            </form>
        </div>

    );
};

export default FormComponent;