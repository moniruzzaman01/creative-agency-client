import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";

function App() {
  return (
    <div className=" max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
