import axios from 'axios';
import React, { useState } from 'react'

export default function AddStudent() {
  const [formData, setFormData] = useState({
    id:"",
    name: "",
    gender: "",
    department: "",
    email: "",
    contact: "",
    password:""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1235/adminapi/addstudent", formData);
      if (response.status === 201) {
        setError("");
        setMessage(response.data);
        setFormData({
           id:"",
    name: "",
    gender: "",
    department: "",
    email: "",
    contact: "",
    password:""
        
        })
      }
    } catch (err) {
      setMessage("");
      setError(err.message);
    }
  }
  return (
    <div>
      {
        message && <p style={{color:'green'}}>{message}</p>
      }
      {
        error && <p style={{color:'red'}}>{error}</p>
      }
      <h3 style={{textAlign:'center'}}>Add Student</h3>
      <form onSubmit={handleSubmit}>
      <label>ID</label>
        <input type="number" name="id" value={formData.id} required onChange={handleChange}/>
        <br />
      <label>Name</label>
        <input type="text" name="name" value={formData.name} required onChange={handleChange}/>
        <br />
      <label>Gender</label>
        <select name="gender" value={formData.gender} required onChange={handleChange}>
          <option value="">----Select---</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        <br />
      <label>Department</label>
        <select name="department" value={formData.department} required onChange={handleChange}>
          <option value="">---Select---</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="Others">Others</option>
        </select>
        <br />
      <label>Email</label>
        <input type="email" name="email" value={formData.email} required onChange={handleChange}/>
      <br />
      <label>Contact</label>
        <input type="number" name="contact" value={formData.contact} required onChange={handleChange}/>
        <br />
      <label>Password</label>
        <input type="password" name="password" value={formData.password} required onChange={handleChange}/>
        <br />
      <input type="submit" value="Add"/>
      <input type="reset" value="Clear"/>
      </form>
    </div>
  )
}