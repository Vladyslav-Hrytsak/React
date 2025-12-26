import './App.css'
import {useEffect} from "react";
import {getAllUsers} from "./services/user.service.tsx";

function App() {

    useEffect(() => {
        getAllUsers().then(res => console.log(res));
    })
  return (
    <>
    </>
  )
}

export default App
