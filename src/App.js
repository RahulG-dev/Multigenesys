import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import EmpDetails from "./EmpDetails";
import AddEmp from "./AddEmp";


function App() {
  return (
    
    <BrowserRouter>
    

      <nav className="me-auto">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/EmpDetails">Employee Details</Link>
          </li>
          <li>
            <Link to="/AddEmp">Add Employee</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EmpDetails" element={<EmpDetails />} />
        <Route path="/AddEmp" element={<AddEmp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
