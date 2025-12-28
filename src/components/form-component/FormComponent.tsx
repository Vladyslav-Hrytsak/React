import {useForm} from "react-hook-form";
import type {IFormData} from "../../models/IFormData.ts";

const FormComponent = () => {

    const {handleSubmit, register, formState: { errors , isValid}}} = useForm<IFormData>()

    const submit = (data:IFormData) => {
        addCar(data)
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <form>
                <label>
                    <input type="text" name="username" placeholder="Username" className="border px-2 py-1 w-64"/>
                </label>

                <label>
                    <input type="text" name="password" placeholder="Password" className="border px-2 py-1 w-64"/>
                </label>

                <button className="border px-4 py-1 w-64" type={"submit"}>LOGIN</button>
            </form>
        </div>
    );
};

export default FormComponent;