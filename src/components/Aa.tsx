import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const Aa = () => {
    const {theme} = useContext(MyContext)
    return (
        <div className={theme}>
        </div>
    );
};

export default Aa;