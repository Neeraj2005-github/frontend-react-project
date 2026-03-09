import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import StudentHome from './StudentHome';
import './Student.css'
export default function StudentNavBar() {
    const navigate = useNavigate();
    const studentLogout = () => {
        sessionStorage.removeItem("isStudent");
        navigate("/studentlogin");
        window.location.reload();
    }
  return (
      <div>
        <nav className='navbar'>
            <Link to="/student/home">Home</Link>
            
            
            <button onClick={studentLogout} className="logout-btn">Logout</button>

        </nav>
        <Routes>
            <Route path="/student/home" element={ <StudentHome/> } />
            
        </Routes>
    </div>
  )
}
