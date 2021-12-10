import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Css/Signup.css';

function Signup() {
        const [fname,setFname]=useState("");
        const [lname,setLname]=useState("");
        const [mail,setMail]=useState("");
        const [mno,setMno]=useState("");
        const navigate=useNavigate();
    const handleSignUp = (e)=>{
        e.preventDefault();
        console.log(fname,lname,mno,mail);
    }
    const handleBack =(e)=>{
        navigate("/");
    }
    
    return (
        <div className="container">

<form className='signup-form' onSubmit={handleSignUp}>
        <h2>Register Here</h2>
        
        <div className="form-group">
          <div>
            <label>FirstName</label>
            <input
            className="form-control"
              type="text" 
              placeholder="FirstName "
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>LastName</label>
            <input
            className="form-control"
              type="text" 
              placeholder="LastName " 
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </div>
         
          <div className="form-group">
            <label>Mobile No</label>
            <input
            className="form-control"
              type="text" 
              placeholder="Mobile Number" 
              maxLength={10}
              min={10}
              onChange={(e) => setMno(e.target.value)}
              required
            />
          </div>
          
          <button className="btn"  >SignUp</button>
          <button className="btn" type="submit" onClick={handleBack} >Back</button>
        </div>
        <div>
           
        </div>
      </form>
           
        </div>
       
        
    )
}

export default Signup;
