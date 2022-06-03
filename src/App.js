import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
