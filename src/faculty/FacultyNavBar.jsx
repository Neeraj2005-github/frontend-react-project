import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import FacultyHome from './FacultyHome';
import './faculty.css'
export default function FacultyNavBar() {
    const navigate = useNavigate();
    const facultyLogout = () => {
        sessionStorage.removeItem("isFaculty");
        navigate("/facultylogin");
        window.location.reload();
    }
  return (
      <div>
        <nav className='navbar'>
            <Link to="/faculty/home">Home</Link>
            
            
            <button onClick={facultyLogout} className="logout-btn">Logout</button>

        </nav>
        <Routes>
            <Route path="/faculty/home" element={ <FacultyHome/> } />
            
        </Routes>
    </div>
  )
}
