import {useContext} from "react";
import {MyComtext} from "../context/MyContext.tsx";

const RightBranchAComponent = () => {
    const {counterValue, increment} = useContext(MyComtext)
    return (
        <div>
            right branch A
            <button onClick={() =>{
                increment(counterValue)
            }}>Click me to increment counter in LBA</button>
        </div>
    );
};

export default RightBranchAComponent;