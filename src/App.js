import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Order from "./Components/Dashboard/Order";
import Review from "./Components/Dashboard/Review";
import ServiceList from "./Components/Dashboard/ServiceList";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Order />}></Route>
          <Route path="service-list" element={<ServiceList />}></Route>
          <Route path="review" element={<Review />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
