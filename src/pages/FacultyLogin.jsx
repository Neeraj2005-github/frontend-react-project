import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

export default function FacultyLogin() 
{
    const navigate = useNavigate()

    const [formdata,setFormdata] = useState({
      email:"",
      password:""
    })

    function handleChange(e)
    {
       //console.log(e.target.value)
       const {name,value} =  e.target
       setFormdata({...formdata,[name]:value})                
    }

    const handleSubmit = async (e) => 
   {
      e.preventDefault()
      try
      {
         const response = await axios.post("http://localhost:1235/facultyapi/login",formdata)
          if(response.status==200)
          {
             //alert("Login Valid")
             sessionStorage.setItem("isFaculty",true)
             navigate("/faculty/home")
             window.location.reload()
          }
          else
          {
            alert("Login Fail")
          }
      }
      catch(err)
      {
         alert(err.response.data)
      }
    }
    


  return (
    <div className="login-container">
        <h2 className="login-title">Faculty Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
                <label>Email</label>
                <input type="email" name='email' onChange={handleChange} required/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name='password' onChange={handleChange} required/>
            </div>
            <button type="submit" className="login-btn">Login</button>
        </form>
    </div>
  )
}