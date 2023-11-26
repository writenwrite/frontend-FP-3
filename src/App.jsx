import { Outlet } from "react-router-dom";
import "./App";
import Navbar from "./components/Navbar";


function App() {
  

  return (
    <>
      <Navbar/>
      <Outlet/>

    </>
  );
}

export default App
