import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import StudentsList from './StudentsList';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import "./App.css";

const App: React.FC = () => {
  const [showStudentsList, setShowStudentsList] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.get('http://localhost:3000/admin/dashboard', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          if (response.status === 200) {
            setIsAdminLoggedIn(true);
          }
        })
        .catch(error => {
          setIsAdminLoggedIn(false);
          console.log(error);
        });
    } else {
      setIsAdminLoggedIn(false);
    }
  }, []);

  const handleStudentsListClick = () => {
    setShowStudentsList(true);
    setShowAdminLogin(false); 
  };

  const handleAdminLoginClick = () => {
    setShowAdminLogin(true);
    setShowStudentsList(false); 
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    setShowAdminLogin(false); 
  };

  return (
    <div style={{ 
      backgroundImage: `url(https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      backgroundSize: "cover",
      minHeight: "100vh" 
    }}>
      <Navbar onStudentsListClick={handleStudentsListClick} onAdminLoginClick={handleAdminLoginClick} />
      <div className="p-4 flex justify-center items-center">
        {showStudentsList ? <StudentsList /> : null}
        {isAdminLoggedIn ? <AdminDashboard /> : null}
        {showAdminLogin && !isAdminLoggedIn && <div className="flex justify-center items-center h-screen"><AdminLogin onLoginSuccess={handleAdminLoginSuccess} /></div>}
      </div>
    </div>
  );
};

export default App;
