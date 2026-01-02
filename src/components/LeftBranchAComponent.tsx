import {useContext} from "react";
import {MyComtext} from "../context/MyContext.tsx";

const LeftBranchAComponent = () => {
    const {counterValue}  = useContext(MyComtext)
    return (
        <div>
            left branch A
            <p>current counter value is {counterValue}</p>
        </div>
    );
};

export default LeftBranchAComponent;