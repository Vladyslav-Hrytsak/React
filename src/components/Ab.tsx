import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const Ab = () => {
    const {theme} = useContext(MyContext)
    return (
        <div className={theme}>
        </div>
    );
};

export default Ab;