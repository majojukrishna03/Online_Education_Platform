import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const RegistrationPage = () => {
    navigate('/registration'); // Navigate to registration page
  };

  const LoginPage = () => {
    navigate('/login'); // Navigate to login page
  };

  return (
    <div className='button'>
      <h1>Welcome to the Online Education Platform</h1>
      <p>Start your learning journey today!</p>
      <button onClick={RegistrationPage}>Register</button>
      <button onClick={LoginPage}>Login</button>
      {/* Add additional content or features as needed */}
    </div>
  );
};

export default HomePage;
