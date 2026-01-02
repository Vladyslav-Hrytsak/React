import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const Bb = () => {

    const {theme, changeTheme} = useContext(MyContext)

    const hendler = ()=>  {
        if(theme === "dark"){
            changeTheme('light')
        }
        else{
            changeTheme('dark')
        }
    }

    return (
        <div className={theme}>
            <button onClick={hendler}>Change theme</button>
        </div>
    );
};

export default Bb;