import Ba from "./Ba.tsx";
import Bb from "./Bb.tsx";
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const B = () => {
    const {theme} = useContext(MyContext)

    return (
        <div className={theme}>
            <Ba/>
            <Bb/>
        </div>
    );
};

export default B;