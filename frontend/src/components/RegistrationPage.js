import React, { useState } from 'react';
import './FormStyles.css'; // Import CSS file

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., validation, API call)
    console.log(formData); // Replace with your actual submission logic
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1>Registration Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-label" htmlFor="username">Username:</label>
            <input
              className="form-input"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="email">Email:</label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="password">Password:</label>
            <input
              className="form-input"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="confirmPassword">Confirm Password:</label>
            <input
              className="form-input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button className="form-button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
