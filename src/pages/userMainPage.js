// src/WelcomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/userMainPage.css'; // Create a CSS file for styling
import image1 from "../assets/images/image1.svg"
import image2 from "../assets/images/image2.svg"

const WelcomePage = () => {
  const handleLogout = async () => {
    try {
      // Call the logout API
      const response = await fetch('http://localhost:5000/logout', {
        method: 'POST', // You can use 'GET' or 'POST' depending on your API setup
        // Add headers and other options as needed
      });

      if (response.ok) {
        // Redirect or perform any other actions on successful logout
        window.location.href = '/'; // Redirect to the home page
      } else {
        // Handle logout error
        console.error('Logout failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="welcome-container">
      <div className="text-container">
        <h1>Welcome! You are logged in to the Calenbook App.</h1>
        <p>You can create an event and share it with your peers.</p>
        <Link to="/event" className="create-event-button">
          Create an event here
        </Link>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      <div className="image-container">
        {/* Add your images here */}
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        
      </div>
    </div>
  );
};

export default WelcomePage;
