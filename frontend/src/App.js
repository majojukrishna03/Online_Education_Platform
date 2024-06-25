import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage'; // Example import
import LoginPage from './components/LoginPage'; // Example import

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/registration" element={<RegistrationPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            {/* Additional routes can be added here */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
