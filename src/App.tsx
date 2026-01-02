import './App.css'
import LeftBranchComponent from "./components/LeftBranchComponent.tsx";
import RightBranchComponent from "./components/RightBranchComponent.tsx";
import {init, MyComtext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {


    const [counter, setCounter] = useState(init.counterValue);
  return (
        <>
            <MyComtext.Provider value={{
                counterValue: counter,
                increment: (obj) =>{
                    setCounter(++obj);
                    console.log(obj);
                }
            }}>
                <LeftBranchComponent/>
                <RightBranchComponent/>
            </MyComtext.Provider>
        </>
  )
}

export default App
