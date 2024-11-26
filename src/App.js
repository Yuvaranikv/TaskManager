import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import TaskManager from "./components/TaskManager";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div>
      <h1>Task Manager App</h1>
      
      {/* Navigation Links */}
      <nav>
        <ul>
          <li><Link to="/">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/tasks">Task Manager</Link></li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<TaskManager />} />
      </Routes>
    </div>
  );
};

export default App;
