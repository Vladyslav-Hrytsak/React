import './App.css'
import A from "./components/A.tsx";
import B from "./components/B.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {
    const [themeColor, setThemeColor] = useState<string>('light')
  return (
    <>
        <MyContext.Provider value={{
            theme: themeColor,
            changeTheme: (themeValue:string)=>{
                setThemeColor(themeValue)
            }
        }}>
        <A/>
        <B/>
        </MyContext.Provider>
    </>
  )
}

export default App
