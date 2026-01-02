import Aa from "./Aa.tsx";
import Ab from "./Ab.tsx";
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const A = () => {
    const {theme} = useContext(MyContext)

    return (
        <div className={theme}>
            <Aa/>
            <Ab/>

        </div>
    );
};

export default A;