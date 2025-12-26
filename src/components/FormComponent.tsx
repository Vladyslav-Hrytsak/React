import { useForm } from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/user.validator.ts";

interface FormData {
    username: string;
    password: string;
    age: number;
}

const FormComponent = () => {
    const {register, handleSubmit, formState: { errors , isValid}
    } = useForm<FormData>(
        {

            mode: "all",
            resolver: joiResolver(userValidator)
        }
    );

    const submit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>

            <label>
                <input type="text" {...register("username")} />
            </label>

            <label>
                <input type="text" {...register("password")} />
            </label>

            <label>
                <input type={"number"} {...register("age")} />
            </label>

            <button disabled={!isValid} type="submit">SEND</button>
        </form>
    );
};

export default FormComponent;
