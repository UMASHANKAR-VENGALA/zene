import React, { useState } from 'react';
import './style.css'
import axios from 'axios'
// import ReCAPTCHA from 'react-google-recaptcha';
// import { useNavigate } from 'react-router-dom';


function Login({ closePopup }) {
  const [formData,setFormData] = useState({
    email:"",
    password:"",
  }) 
  const [role,setRole] = useState()
  const [message,setMessage] = useState()
  const [error,setError] = useState()

  // const navigate = new useNavigate()
  const [capVal,setCapVal] = useState()

  const handleChange = (e) =>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      if(role === 'Admin'){
        const response = await axios.post('http://localhost:2032/checkadminlogin', formData);
        if (response.data!=null) 
        {
          console.log(response.data)
          // navigate("/adminhome");
          window.location.href="https://newerp.kluniversity.in/"
        } 
        else 
        {
          setMessage("Login Failed")
          setError("")
        }
      }else if(role === 'Faculty'){
        const response = await axios.post('http://localhost:2032/checkfacultylogin', formData);
        if (response.data!=null) 
        {
          console.log(response.data)
          // navigate("/adminhome");
          window.location.href="https://academics.klef.in/login"
        } 
        else 
        {
          setMessage("Login Failed")
          setError("")
        }
      }else if(role ==='Student'){
        const response = await axios.post('http://localhost:2032/checkstudentlogin', formData);
        if (response.data!=null) 
        {
          console.log(response.data)
          // navigate("/adminhome");
          window.location.href="https://www.kluniversity.in/"
        } 
        else 
        {
          setMessage("Login Failed")
          setError("")
        }
      }

    } catch (e) {
      setError(e.response.data)
      setMessage("")
    }
  }

  const handleClose = () => {
       closePopup(); 
  };
  return (
    <div className="popup active">
      <div className="close-btn" onClick={handleClose}>&times;</div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {
          message?<h4 align='center' style={{color:"red"}}>{message}</h4>:<h4 align='center' style={{color:"red"}}>{error}</h4>
        }
        <div className="form-element">
          <label>Email</label>
          <input type="email" id="email" placeholder="Enter Email Address" onChange={handleChange} required/>
        </div>
        <div className="form-element">
          <label >Password</label>
          <input type="password" id="password" placeholder="Enter Password" onChange={handleChange} required/>
        </div>
        <div className="form-element">
          <label>Role</label> &nbsp;&nbsp;&nbsp;
          <select id="role" onChange={(e) => {setRole(e.target.value)}} required>
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Faculty">Faculty</option>
                    <option value="Student">Student</option>
          </select>
        </div>
        <br/>
        {/* <ReCAPTCHA sitekey='6LdMBJMpAAAAAPwKTXr7CHvJ41sqADyBKNMNT0gT' onChange={(val) => setCapVal(val)}/> */}
        <div align="center">
          <button type="submit" className="button" disabled={!capVal}>Sign in</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="reset" className="button">Clear</button>&nbsp;&nbsp;&nbsp;
        </div>
      </form>
    </div>
  );
}

export default Login;
