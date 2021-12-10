import React, { useState } from "react";
import { Route } from "react-router";
import { useNavigate } from "react-router";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "./Signup";
import './Css/Login.css'

function Login() {
  const navigate = useNavigate();
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "demo" && password === "demo") {
      navigate("/home");
      localStorage.setItem("auth", "true");
     
    } else {
      setError("Incorrect Details");
    }
  };

  const handleSignup =(e)=>{
     navigate("/signup");

  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>LOGIN </h2>
        <h2>{error}</h2>
        <div className="form-group">
          <div>
            <label>UserName</label>
            <input
            className="form-control"
              type="text" 
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>PassWord</label>
            <input
            className="form-control"
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button className="btn" type="submit" >Login</button>
          <button className="btn" onClick={handleSignup} >SignUp</button>
        </div>
        <div>
           
        </div>
      </form>
    </div>
  );
}

export default Login;
