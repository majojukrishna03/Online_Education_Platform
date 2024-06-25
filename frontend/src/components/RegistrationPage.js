import React, { useState } from 'react';
import './FormStyles.css';

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.text();
                console.log(data);
                alert('User registered successfully!');
            } else {
                alert('Error registering user');
            }
        } catch (error) {
            console.error('There was an error!', error);
        }
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
                            required
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
                            required
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
                            required
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
                            required
                        />
                    </div>
                    <button className="form-button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
