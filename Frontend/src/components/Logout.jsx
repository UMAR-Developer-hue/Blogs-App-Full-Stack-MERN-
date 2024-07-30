import React from 'react';
import { useAuth } from '../schema/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/user/logout', {
        method: 'POST',
        credentials: 'include', // Ensure cookies are sent with the request
      });
      if (response.status === 200) {
        logout(); // Clear the authentication state
        navigate("/")
      } else {
        console.error('Error logging out');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Logout;
