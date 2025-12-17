import './App.css'
import MenuComponent from "./components/menu/MenuComponent.tsx";
import {Outlet} from "react-router-dom";

function App() {

  return (
    <>
        <MenuComponent/>
        <Outlet/>
    </>
  )
}

export default App
