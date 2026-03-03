import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    password:""
  });

  function handleChange(e) {
    // * Here 'e' is an event
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    //alert(formData.username)
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:1235/adminapi/login", formData);
      if (res.status==200) {
        //alert("Login Valid");
        sessionStorage.setItem("isAdmin", true);
        navigate("/admin/home");
        window.location.reload();
      } else {
        alert("Login Failed")
      }
    } catch (e) {
      alert(e.res.data);
    }
  }

  return (
    <div>
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" onChange={handleChange} required/>
            <br />
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} required/>
            <br />
            <button>Login</button>
        </form>
    </div>
  )
}
