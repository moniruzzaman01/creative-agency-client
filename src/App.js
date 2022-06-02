import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" max-w-7xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
