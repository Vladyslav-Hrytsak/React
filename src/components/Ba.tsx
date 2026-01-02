import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const Ba = () => {
    const {theme} = useContext(MyContext)
    return (
        <div className={theme}>
        </div>
    );
};

export default Ba;