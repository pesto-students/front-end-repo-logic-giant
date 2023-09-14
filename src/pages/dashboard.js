import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "../styles/dashboard.css"

const Dashboard = () => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [url, setUrl] = useState('');
   const [selectedSlots, setSelectedSlots] = useState([]);
   const [availableSlots, setAvailableSlots] = useState([]);

  // useEffect(() => {
  //   // Fetch available slots from the backend API
  //   axios.get('http://localhost:5000/getAvailableSlots')
  //     .then((response) => {
  //       setAvailableSlots(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching available slots:', error);
  //     });
  // }, []);

  const handleSlotSelection = (slot) => {
    if (!selectedSlots.includes(slot)) {
      setSelectedSlots([...selectedSlots, slot]);
    } else {
      setSelectedSlots(selectedSlots.filter((s) => s !== slot));
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send event data to the backend API
      const response = await axios.post('http://localhost:5000/createEvent', {
        eventName,
        startDate,
        endDate,
        selectedSlots,
      });

      
        // Assuming your domain is "example.com"
        const generatedUrl = `http://localhost:3000/user/:identifier`;
        setUrl(generatedUrl);
      //  alert(`event created give the link to the mentees )
        
      // Handle the response if needed
      console.log('Event created:', response.data);
    } catch (error) {
      // Handle any errors
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="container">
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            className="form-control"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <p>Available Slots:</p>
          {availableSlots.map((slot) => (
            <div key={slot} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={slot}
                value={slot}
                checked={selectedSlots.includes(slot)}
                onChange={() => handleSlotSelection(slot)}
              />
              <label className="form-check-label" htmlFor={slot}>
                {slot}
              </label>
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary">
          Create Event
        </button>
        {url && (
        <div>
          <p>Generated URL: {url}</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Visit Event Page
          </a>
          </div>
      )}
        

        <Link to="/" className="go-back">
          Go back
        </Link>
      </form>
    </div>
  );
};

export default Dashboard;
