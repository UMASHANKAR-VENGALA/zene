import React, { useState } from 'react';
import axios from 'axios';
import './UserNavBar'

export default function Contact() 
{
  const [formData, setFormData] = useState({
    email: '',
    suggestions: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")



  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2032/contact', formData);
      if (response.data!=null) 
      {
        console.log(response.data)
        setMessage(response.data)
        setFormData({
          email:'',
          suggestions:''
        })
      } 
      else 
      {
        setMessage("submission failed try again")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div>
      <br/><br/><br/><br/>
      <h2 align="center"><u>Contact Us</u></h2>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange}  placeholder='Email'required />
        </div>
        <div>
          <label>Suggestions</label>
          
          <textarea type='text' id="suggestions" value={formData.suggestions} onChange={handleChange} placeholder='suggestions' required />
        </div>
        <button type="submit" className="button">submit</button>
      </form>
    </div>
  );
}