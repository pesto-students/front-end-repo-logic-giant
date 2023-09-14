// src/EventCalendar.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../styles/PublicPage.css"
import logo from "../assets/images/logo.svg"

function EventCalendar() {
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [attendees, setAttendees] = useState([]);
  const [authorization,setAuthorization] = useState(''); // Replace with your actual authorization token
  // const [mentorName, setMentorName] = useState('');


  useEffect(() => {
    // Fetch available slots from the backend API
    axios.get('http://localhost:5000/gettoken/user/:identifier')
    
      .then((response) => {
        
        setAuthorization(response.accessToken)
       
       
      })
      .catch((error) => {
        console.error('Error fetching token:', error);
      });
  }, []);

  const handleSubmit = async () => {
    const eventData = {
      summary,
      description,
      start: startDate.toISOString(),
      end: endDate.toISOString(),
      attendees,
    };

    const config = {
      headers: {
        Authorization: authorization,
      },
    };

    try {

       
      // Make a POST request to your localhost API endpoint
      await axios.post('http://localhost:5000/user/:identifier', eventData, config);
      alert('Event created successfully!');
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating event. Please try again.');
    }
  };

  const handleAddAttendee = () => {
    setAttendees([...attendees, { email: '' }]);
  };

  const handleRemoveAttendee = (index) => {
    const updatedAttendees = [...attendees];
    updatedAttendees.splice(index, 1);
    setAttendees(updatedAttendees);
  };

  const handleAttendeeEmailChange = (index, email) => {
    const updatedAttendees = [...attendees];
    updatedAttendees[index].email = email;
    setAttendees(updatedAttendees);
  };

  return (
    <div className="event-calendar">
      <img src={logo} alt="logo"/>
      <h1>Create Event on your mentor calendars </h1>
      <form>
        <div className="form-group">
          <label htmlFor="summary">Summary:</label>
          <input
            type="text"
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Start Date and Time:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="yyyy-MM-dd HH:mm:ss"
          />
        </div>
        <div className="form-group">
          <label>End Date and Time:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            showTimeSelect
            dateFormat="yyyy-MM-dd HH:mm:ss"
          />
        </div>
        <div className="form-group">
          <label>Attendees:</label>
          {attendees.map((attendee, index) => (
            <div key={index} className="attendee">
              <input
                type="email"
                value={attendee.email}
                placeholder="Email"
                onChange={(e) => handleAttendeeEmailChange(index, e.target.value)}
              />
              <button
                type="button"
                onClick={() => handleRemoveAttendee(index)}
                className="remove-attendee-button"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddAttendee}
            className="add-attendee-button"
          >
            Add Attendee
          </button>
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          Create Event
        </button>
      </form>
    </div>
  );
}

export default EventCalendar;
